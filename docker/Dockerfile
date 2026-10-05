# The Comfytosh Theme website, built and served the way GitHub Pages serves it.
# Used by compose.yaml: docker compose up --build

# 1. Check the ports and build the site from palette.json and ports.json.
FROM python:3.12-alpine AS build
WORKDIR /src
COPY . .
RUN python3 scripts/check_ports.py \
 && python3 scripts/build_site.py --out /out

# 2. Serve it under /comfytosh/, the same path as https://vstrofago.github.io/comfytosh/.
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /out /usr/share/nginx/html/comfytosh
