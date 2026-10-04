# Comfytosh for Omarchy

The [Comfytosh Theme](../README.md) port for [Omarchy](https://omarchy.org), in both flavors: **Comfytosh Screen** (dark) and **Comfytosh Case** (light).

## Install

Omarchy builds the colours of the terminal, btop, Hyprland, Waybar, Walker, Mako and more from a single `colors.toml`. Put both folders in `~/.config/omarchy/themes/` and pick one from the theme menu, or run:

```
omarchy-theme-set comfytosh-screen
```

`comfytosh-case` carries the empty `light.mode` file that Omarchy uses to pair a theme with light mode. Each flavor carries a plain dotted wallpaper in `backgrounds/`; swap in one from [`wallpapers/`](../wallpapers) if you like. To share one, publish each folder as its own git repository named `omarchy-comfytosh-screen-theme` or `omarchy-comfytosh-case-theme`.

## Files

- [`comfytosh-screen/colors.toml`](comfytosh-screen/colors.toml)
- [`comfytosh-case/colors.toml`](comfytosh-case/colors.toml)

## Maintainers

- [@vstrofago](https://github.com/vstrofago)

Something looks off? [Open a bug report](https://github.com/vstrofago/comfytosh/issues/new?template=bug-report.yml) and name this port.
