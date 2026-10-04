<!--
  Port template. Copy this folder to <your-tool>/ (lowercase, words joined by hyphens,
  named the way the tool is: zellij, gnome-terminal, vim), then:

  1. Replace every <placeholder> below and delete these comments.
  2. Add the theme files next to this README:
       comfytosh-screen.<ext>   the dark flavor
       comfytosh-case.<ext>     the light flavor
     If the tool wants one file with both flavors, name the themes inside it
     "Comfytosh Screen" and "Comfytosh Case" (or label each block with that name in a comment).
  3. Add a screenshot of each flavor in assets/: assets/screen.png and assets/case.png.
  4. Register the port in ports.json and run: python3 scripts/check_ports.py
  The full guide is CONTRIBUTING.md at the root of the repository.
-->
# Comfytosh for <Tool name>

The [Comfytosh Theme](../README.md) port for [<Tool name>](<https://tool.homepage>), in both flavors: **Comfytosh Screen** (dark) and **Comfytosh Case** (light).

![Comfytosh Screen in <Tool name>](assets/screen.png)
![Comfytosh Case in <Tool name>](assets/case.png)

## Install

<The exact steps, with the real paths for macOS, Linux and Windows where they differ. Name the file to copy, where it goes and the setting to change.>

```
<the config line, if there is one>
```

## Files

- [`comfytosh-screen.<ext>`](comfytosh-screen.<ext>)
- [`comfytosh-case.<ext>`](comfytosh-case.<ext>)

## Maintainers

- [@<your-github-username>](https://github.com/<your-github-username>)

Something looks off? [Open a bug report](https://github.com/vstrofago/comfytosh/issues/new?template=bug-report.yml) and name this port.
