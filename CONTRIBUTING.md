# Contributing to Comfytosh Theme

Thanks for wanting to make more of your day comfy. Comfytosh is open the way Catppuccin and Dracula are: anyone can bring it to the tool they love, and every port lives here, next to the palette it comes from.

There are four ways to help:

- **Request a port** for a tool that has none. [Open a port request](https://github.com/vstrofago/comfytosh/issues/new?template=port-request.yml).
- **Make a port.** The rest of this guide is about that.
- **Fix a port.** A colour that is hard to read, a missing scope, a broken install step. [Report it](https://github.com/vstrofago/comfytosh/issues/new?template=bug-report.yml), or send the fix straight away.
- **Adopt a port.** If a port has no maintainer in `ports.json`, or its maintainer has moved on, say so in an issue and add yourself.

Please read the [code of conduct](CODE_OF_CONDUCT.md) first. It is short.

## How the repository works

```
palette.json        the palette and every role, for both flavors: the source of truth
ports.json          the registry of ports: the landing page and the checks read it
<tool>/             one folder per port, with its README.md
template/           the starting point for a new port
wallpapers/         4K wallpapers
site/               the landing page, built by scripts/build_site.py
scripts/            check_ports.py (runs in CI) and build_site.py
```

The landing page at **https://vstrofago.github.io/comfytosh/** is generated from `palette.json` and `ports.json`. Once your port is merged it shows up there on its own, with a download.

## Making a port

### 1. Claim it

Search the [issues](https://github.com/vstrofago/comfytosh/issues) and `ports.json` first. If nobody is on it, open a port request (or comment on the existing one) saying you will build it, so two people don't do the same work.

### 2. Copy the template

```sh
git clone https://github.com/vstrofago/comfytosh
cd comfytosh
cp -r template <your-tool>
```

Name the folder the way the tool is named, in lowercase with hyphens: `zellij`, `gnome-terminal`, `vim`. One folder per tool. If a tool family shares a format (VS Code, Cursor and VSCodium), it is one port with `aliases` in `ports.json`.

### 3. Use the roles, not your eye

Open `palette.json`. It has two layers:

- **Primitives:** the 35 named colours (`case-bone`, `crt-gunmetal`, `phosphor-celadon`…). The same in both flavors.
- **Roles:** what an app should use (`bg`, `ink`, `syntax-keyword`, `ansi-red`…), resolved for each flavor under `flavors.screen.roles` and `flavors.case.roles`.

Map every colour slot in the app to a role. A few rules make every port read as one palette:

| What the app colours | Use |
|---|---|
| Editor background, panels, sidebars | `bg`, `bg-raised`, `bg-sunken`, `bg-overlay` |
| Text, line numbers, secondary text | `ink`, `ink-muted` |
| Borders and dividers | `border` for decoration, `border-strong` for control outlines |
| Primary buttons, badges, the status bar highlight | `accent` with `on-accent` on top; links in `accent-ink` |
| Focus, caret, selection, current line, find matches | `focus`, `cursor`, `selection`, `line-highlight`, `match` |
| Errors, warnings, success, info, hints | `danger`, `warning`, `success`, `info`, `hint` |
| Diffs | `diff-add-bg`, `diff-remove-bg`, `diff-change-bg` under normal ink |
| Syntax | the `syntax-*` roles. Plain identifiers stay in `ink`; comments in italics |
| A terminal | `terminal-bg`, `terminal-ink`, `terminal-cursor` and the 16 `ansi-*` roles |

If the app needs a colour no role covers, pick the primitive with the matching hue; for Case, use its `deep-*` twin so it holds 4.5:1 on beige. If the app has no alpha channel, flatten the translucent roles (`selection`, `line-highlight`, the diff tints) onto the ground they sit on.

### 4. Ship both flavors

Every port has **Comfytosh Screen** (dark) and **Comfytosh Case** (light). Name the files `comfytosh-screen.<ext>` and `comfytosh-case.<ext>`. If the tool wants a single file, name the themes inside it "Comfytosh Screen" and "Comfytosh Case", or label each block with that name in a comment. Inside apps, use exactly those names so people find them.

Keep to the principles of the palette:

- **Nothing pure.** No `#000000` and no `#ffffff`. The darkest ink is `crt-gunmetal`; the light text of Screen is `crt-mint`. The checks reject pure black and white.
- **Text clears 4.5:1** on its ground. The roles already do; if you reach for a primitive, check it.
- **A state is never colour alone.** If the app lets you, keep the underline on errors and the sign on diff lines.
- **Rest first, signal after.** `accent` (tangerine) is loud; spend it on one thing per view.

### 5. Write the README, take the screenshots

Fill in `<your-tool>/README.md` from the template: real install steps, with the paths for each OS where they differ. Add a screenshot of each flavor in `<your-tool>/assets/` (`screen.png` and `case.png`), showing something real: code, a terminal session, the app's main view.

### 6. Register it

Add an entry to `ports.json`, after the last port of the same category:

```json
{
  "id": "zellij",
  "name": "Zellij",
  "path": "zellij",
  "category": "terminal",
  "homepage": "https://zellij.dev",
  "files": ["zellij/comfytosh-screen.kdl", "zellij/comfytosh-case.kdl"],
  "install": "One or two sentences: where the files go and the setting to change.",
  "maintainers": ["your-github-username"]
}
```

`category` is one of `editor`, `terminal`, `cli`, `app` or `desktop`. If the tool was in the `wanted` list, remove it from there.

### 7. Check and open a pull request

```sh
python3 scripts/check_ports.py          # the same checks CI runs
python3 scripts/build_site.py           # optional: builds the landing page into _site/
```

Then open a pull request. The template asks for the screenshots and a short checklist. Commit messages in the style `feat(zellij): add port` or `fix(kitty): brighter selection` help, but are not required.

## Changing the palette

Every port is derived from `palette.json`, so a change there touches all of them. Please open an issue before changing a primitive or a role, with the reason and the contrast numbers. Palette changes are made by the maintainers, together with the ports they affect.

## Fixing the landing page

The page lives in `site/` and uses the Comfytosh design system, vendored in `site/vendor/comfytosh/`. Don't edit the vendored files; change `site/index.html`, `site/assets/site.css` or `site/assets/site.js`, and build with `python3 scripts/build_site.py` to check it. It deploys to GitHub Pages on every push to `main`.

## License

Contributions are published under the same license as the rest of the repository; see [LICENSE](LICENSE).
