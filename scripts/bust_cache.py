"""Stamp site.css / site.js links with a content hash so browsers never mix new HTML with cached old assets.

GitHub Pages serves everything with max-age=600, so without this a phone that visited
in the last 10 minutes can render fresh HTML with a stale stylesheet.

Run from the repo root before committing: python scripts/bust_cache.py
"""
import hashlib
import re
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent / "site"
ASSETS = ("site.css", "site.js")


def short_hash(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()[:8]


def main() -> None:
    hashes = {name: short_hash(SITE / "assets" / name) for name in ASSETS}
    for page in sorted(SITE.rglob("*.html")):
        text = page.read_text(encoding="utf-8")
        new = text
        for name, h in hashes.items():
            new = re.sub(rf'(assets/{re.escape(name)})(\?v=[0-9a-f]+)?"', rf'\1?v={h}"', new)
        if new != text:
            page.write_text(new, encoding="utf-8", newline="\n")
            print(f"stamped {page.relative_to(SITE)}")
    print(", ".join(f"{n}?v={h}" for n, h in hashes.items()))


if __name__ == "__main__":
    main()
