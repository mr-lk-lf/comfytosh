# Comfytosh for VS Code

The [Comfytosh Theme](../README.md) port for [VS Code](https://code.visualstudio.com), in both flavors: **Comfytosh Screen** (dark) and **Comfytosh Case** (light). It also works in Cursor, Windsurf and VSCodium.

## Install

1. Make a folder named `comfytosh.comfytosh-theme-0.1.0` in your extensions directory (`~/.vscode/extensions/`, or `%USERPROFILE%\.vscode\extensions\` on Windows). Cursor, Windsurf and VSCodium use their own extensions folder.
2. Copy `package.json` and the `themes/` folder from this port into it.
3. Restart the editor, then run *Preferences: Color Theme* and pick **Comfytosh Screen** or **Comfytosh Case**.

The `publisher` in `package.json` is a placeholder: change it before publishing to a marketplace. To build a `.vsix`, run `npx @vscode/vsce package` in this folder.

## Files

- [`package.json`](package.json)
- [`themes/comfytosh-screen-color-theme.json`](themes/comfytosh-screen-color-theme.json)
- [`themes/comfytosh-case-color-theme.json`](themes/comfytosh-case-color-theme.json)

## Maintainers

- [@vstrofago](https://github.com/vstrofago)

Something looks off? [Open a bug report](https://github.com/vstrofago/comfytosh/issues/new?template=bug-report.yml) and name this port.
