import { rmSync, existsSync } from 'fs';
import { resolve } from 'path';

const distPath = resolve(process.cwd(), 'dist');
const maxAttempts = 5;

if (!existsSync(distPath)) {
  process.exit(0);
}

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  try {
    rmSync(distPath, { recursive: true, force: true });
    process.exit(0);
  } catch (error) {
    if (attempt === maxAttempts) {
      console.error(`Failed to remove ${distPath}: ${error.message}`);
      process.exit(1);
    }

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, attempt * 500);
  }
}
