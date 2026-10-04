local flavor = vim.o.background == "light" and "case" or "screen"
local p = require("comfytosh").palettes[flavor]

return {
  normal = {
    a = { fg = p.on_accent, bg = p.accent, gui = "bold" },
    b = { fg = p.ink, bg = p.bg_raised },
    c = { fg = p.ink_muted, bg = p.bg_sunken },
  },
  insert = { a = { fg = p.bg, bg = p.success, gui = "bold" } },
  visual = { a = { fg = p.bg, bg = p.keyword, gui = "bold" } },
  replace = { a = { fg = p.bg, bg = p.danger, gui = "bold" } },
  command = { a = { fg = p.bg, bg = p.warning, gui = "bold" } },
  inactive = {
    a = { fg = p.ink_muted, bg = p.bg_sunken },
    b = { fg = p.ink_muted, bg = p.bg_sunken },
    c = { fg = p.ink_muted, bg = p.bg_sunken },
  },
}
