# Comfytosh for Neovim

The [Comfytosh Theme](../README.md) port for [Neovim](https://neovim.io), in both flavors: **Comfytosh Screen** (dark) and **Comfytosh Case** (light).

## Install

Put `lua/` and `colors/` from this folder in your config (or install this folder as a plugin) and run:

```lua
require("comfytosh").setup({ transparent = false, italic_comments = true })
vim.cmd.colorscheme("comfytosh") -- follows vim.o.background; or "comfytosh-screen" / "comfytosh-case"
```

For lualine, set `theme = "comfytosh"`. It covers the editor, diagnostics, diffs, Treesitter and LSP groups, plus Telescope, nvim-cmp, Neo-tree, nvim-tree, gitsigns, indent-blankline and which-key.

## Files

- [`colors/comfytosh.lua`](colors/comfytosh.lua)
- [`colors/comfytosh-screen.lua`](colors/comfytosh-screen.lua)
- [`colors/comfytosh-case.lua`](colors/comfytosh-case.lua)
- [`lua/comfytosh/init.lua`](lua/comfytosh/init.lua)
- [`lua/lualine/themes/comfytosh.lua`](lua/lualine/themes/comfytosh.lua)

## Maintainers

- [@vstrofago](https://github.com/vstrofago)

Something looks off? [Open a bug report](https://github.com/vstrofago/comfytosh/issues/new?template=bug-report.yml) and name this port.
