import fs from "fs";
import path from "path";

const pub = path.resolve("public", ".htaccess");
const dist = path.resolve("dist", ".htaccess");

if (!fs.existsSync(pub)) {
  console.error("FAIL: public/.htaccess missing:", pub);
  process.exit(1);
}
if (!fs.existsSync(dist)) {
  console.error("FAIL: dist/.htaccess missing:", dist);
  process.exit(1);
}

const a = fs.readFileSync(pub, "utf8");
const b = fs.readFileSync(dist, "utf8");

if (a !== b) {
  console.error("FAIL: dist/.htaccess DOES NOT MATCH public/.htaccess");
  console.error("public bytes:", Buffer.byteLength(a, "utf8"));
  console.error("dist   bytes:", Buffer.byteLength(b, "utf8"));
  // Print first 15 lines of each to show the mismatch
  console.error("\n--- public/.htaccess first 15 lines ---");
  console.error(a.split("\n").slice(0, 15).join("\n"));
  console.error("\n--- dist/.htaccess first 15 lines ---");
  console.error(b.split("\n").slice(0, 15).join("\n"));
  process.exit(1);
}

console.log("OK: public/.htaccess and dist/.htaccess are identical.");
console.log("Bytes:", Buffer.byteLength(a, "utf8"));
