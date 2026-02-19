import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import crypto from "crypto";

function sh(cmd) {
  return execSync(cmd, { stdio: "pipe" }).toString("utf8").trim();
}

function sha256File(p) {
  const buf = fs.readFileSync(p);
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

const DIST = path.resolve("dist");
const PUB = path.resolve("public", ".htaccess");
const DIST_HT = path.resolve("dist", ".htaccess");

console.log("1) Clean dist/");
rmrf(DIST);

console.log("2) Run build (must run postbuild sync+verify)");
execSync("npm run build", { stdio: "inherit" });

if (!fs.existsSync(PUB)) throw new Error("public/.htaccess missing");
if (!fs.existsSync(DIST_HT)) throw new Error("dist/.htaccess missing after build");

console.log("3) Hash public + dist htaccess");
const pubHash = sha256File(PUB);
const distHash = sha256File(DIST_HT);

console.log("public/.htaccess sha256:", pubHash);
console.log("dist/.htaccess   sha256:", distHash);

if (pubHash !== distHash) {
  throw new Error("FAIL: public/.htaccess and dist/.htaccess hashes differ AFTER build");
}

console.log("4) Create zip from CURRENT working tree (post-build)");
const zipName = "artifact.zip";
rmrf(zipName);
sh(`zip -r ${zipName} dist public scripts package.json >/dev/null`);

if (!fs.existsSync(zipName)) throw new Error("FAIL: artifact.zip not created");

console.log("5) Extract dist/.htaccess from zip to temp and re-hash");
const tmpDir = path.resolve(".tmp_zip_check");
rmrf(tmpDir);
fs.mkdirSync(tmpDir, { recursive: true });

// extract only the dist/.htaccess inside the zip
sh(`unzip -q ${zipName} "dist/.htaccess" -d ${tmpDir}`);

const extracted = path.join(tmpDir, "dist", ".htaccess");
if (!fs.existsSync(extracted)) throw new Error("FAIL: dist/.htaccess not found inside zip");

const zipHash = sha256File(extracted);
console.log("zip dist/.htaccess sha256:", zipHash);

if (zipHash !== distHash) {
  throw new Error("FAIL: ZIP dist/.htaccess does not match built dist/.htaccess");
}

console.log("OK: ZIP contains correct dist/.htaccess (single source of truth).");
