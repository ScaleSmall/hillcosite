import fs from "fs";
import path from "path";

const distPath = path.resolve("dist");

if (fs.existsSync(distPath)) {
  console.error("FAIL: dist/ exists in export tree. You must not export the repo with dist/ present.");
  process.exit(1);
}

console.log("OK: dist/ does not exist in export tree.");
