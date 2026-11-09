import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve(".output/public");
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

  const indexPath = path.join(outDir, "index.html");
  const notFoundPath = path.join(outDir, "404.html");
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
  }
  console.log("GitHub Pages output prepared (.nojekyll, 404.html)");
}
