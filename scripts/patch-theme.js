import { readFileSync, writeFileSync, existsSync } from "fs";

// Consumer apps using shadcn v4+ need @import "shadcn/tailwind.css"
// but the registry's own app doesn't. Patch theme.json after build.
const themePath = "public/r/theme.json";
if (existsSync(themePath)) {
  const theme = JSON.parse(readFileSync(themePath, "utf-8"));
  if (theme.files?.[0]?.content) {
    theme.files[0].content = theme.files[0].content.replace(
      '@import "tw-animate-css";',
      '@import "tw-animate-css";\n@import "shadcn/tailwind.css";'
    );
    writeFileSync(themePath, JSON.stringify(theme, null, 2));
    console.log("✓ Patched theme.json with shadcn/tailwind.css import");
  }
}
