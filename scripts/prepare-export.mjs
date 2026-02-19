import fs from "fs";
import path from "path";
import { execSync } from "child_process";

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

console.log("1) Build + package verified artifact.zip");
execSync("npm run package:artifact", { stdio: "inherit" });

console.log("2) Remove dist/ from repo tree so export cannot contain stale dist/.htaccess");
rmrf(path.resolve("dist"));

console.log("OK: export tree prepared (artifact.zip present, dist/ removed).");
