import fs from "fs";
import path from "path";

const src = path.resolve("public", ".htaccess");
const dstDir = path.resolve("dist");
const dst = path.resolve("dist", ".htaccess");

if (!fs.existsSync(src)) {
  console.error("ERROR: public/.htaccess not found:", src);
  process.exit(1);
}

if (!fs.existsSync(dstDir)) {
  console.error("ERROR: dist/ folder not found. Run build first.");
  process.exit(1);
}

fs.copyFileSync(src, dst);

const a = fs.readFileSync(src, "utf8");
const b = fs.readFileSync(dst, "utf8");

if (a !== b) {
  console.error("ERROR: dist/.htaccess does not match public/.htaccess after copy.");
  process.exit(1);
}

console.log("OK: dist/.htaccess synced from public/.htaccess and verified identical.");
