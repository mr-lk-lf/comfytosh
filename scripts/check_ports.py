#!/usr/bin/env python3
"""Check ports.json and every port folder. Runs in CI on each pull request.

Standard library only. From the repository root:  python3 scripts/check_ports.py
Exits 1 when anything is wrong, and says what to fix.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
# Top-level folders that are not ports.
NOT_PORTS = {".git", ".github", "_site", "scripts", "site", "template", "wallpapers"}
REQUIRED = ("id", "name", "path", "category", "homepage", "files", "install", "maintainers")
SLUG = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
SCREEN = re.compile(r"comfytosh[ _-]?screen", re.I)
CASE = re.compile(r"comfytosh[ _-]?case", re.I)
# Nothing pure: no opaque #000/#fff. Alpha tints such as #ffffff0d are fine.
PURE = re.compile(r"#(?:000000|ffffff|000|fff)(?![0-9a-f])", re.I)
TEXT_LIMIT = 2_000_000


def main():
    errors, notes = [], []
    try:
        registry = json.loads((ROOT / "ports.json").read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        print("ports.json does not load: %s" % e)
        return 1

    categories = registry.get("categories", {})
    ports = registry.get("ports", [])
    seen_ids, seen_paths = set(), set()

    for i, port in enumerate(ports):
        label = port.get("id") or "ports[%d]" % i
        missing = [k for k in REQUIRED if not port.get(k)]
        if missing:
            errors.append("%s: missing %s" % (label, ", ".join(missing)))
            continue
        pid, path = port["id"], port["path"]
        if not SLUG.match(pid):
            errors.append("%s: id must be lowercase words joined by hyphens" % pid)
        if pid in seen_ids:
            errors.append("%s: the id is used twice" % pid)
        if path in seen_paths:
            errors.append("%s: the folder %s/ belongs to another port" % (pid, path))
        seen_ids.add(pid)
        seen_paths.add(path)
        if port["category"] not in categories:
            errors.append("%s: category must be one of %s" % (pid, ", ".join(categories)))
        if not str(port["homepage"]).startswith("https://"):
            errors.append("%s: homepage must be an https:// link" % pid)
        if not all(isinstance(m, str) and re.match(r"^[A-Za-z0-9-]+$", m) for m in port["maintainers"]):
            errors.append("%s: maintainers are GitHub usernames, without the @" % pid)

        folder = ROOT / path
        if "/" in path or not folder.is_dir():
            errors.append("%s: %s/ is not a folder at the top of the repository" % (pid, path))
            continue
        if not (folder / "README.md").is_file():
            errors.append("%s: add %s/README.md with the install steps (copy template/README.md)" % (pid, path))

        flavor_text = []
        for f in port["files"]:
            fp = ROOT / f
            if not f.startswith(path + "/"):
                errors.append("%s: %s is outside %s/" % (pid, f, path))
            if not fp.is_file():
                errors.append("%s: %s does not exist" % (pid, f))
                continue
            flavor_text.append(f)
            if fp.stat().st_size < TEXT_LIMIT:
                try:
                    text = fp.read_text(encoding="utf-8")
                except UnicodeDecodeError:
                    continue
                flavor_text.append(text)
                for n, line in enumerate(text.splitlines(), 1):
                    if PURE.search(line):
                        errors.append("%s: %s:%d uses pure black or white; use crt-carbon, crt-gunmetal, case-linen or crt-mint" % (pid, f, n))
        blob = "\n".join(flavor_text)
        if not SCREEN.search(blob):
            errors.append("%s: no Comfytosh Screen flavor found (name a file comfytosh-screen.* or a theme \"Comfytosh Screen\")" % pid)
        if not CASE.search(blob):
            errors.append("%s: no Comfytosh Case flavor found (name a file comfytosh-case.* or a theme \"Comfytosh Case\")" % pid)

    for d in sorted(p for p in ROOT.iterdir() if p.is_dir()):
        if d.name not in NOT_PORTS and not d.name.startswith(".") and d.name not in seen_paths:
            errors.append("%s/: this folder is not in ports.json; register it there" % d.name)

    names = {p.get("name", "").lower() for p in ports}
    for w in registry.get("wanted", []):
        if w.lower() in names:
            notes.append("%s is in wanted but already has a port; remove it from wanted" % w)

    for n in notes:
        print("note:  " + n)
    if errors:
        for e in errors:
            print("error: " + e)
        print("\n%d problem%s. See CONTRIBUTING.md." % (len(errors), "" if len(errors) == 1 else "s"))
        return 1
    print("ok: %d ports, both flavors each" % len(ports))
    return 0


if __name__ == "__main__":
    sys.exit(main())
