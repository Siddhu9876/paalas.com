# Paalas — Artist Portfolio

A responsive, static artist portfolio for Paalas, with a dark cinematic theme and Spotify-first music discovery.

## Features

- Responsive dark-theme artist portfolio
- Homepage and About photo slots
- Seven square Spotify song tiles
- Collaboration email link
- Official Spotify, YouTube, and Instagram links
- Mobile navigation and subtle scroll-reveal animations
- Reduced-motion support
- No build step, framework, or backend required

## Add the artist photos

Place the supplied images in the `assets` folder with these exact filenames:

- `assets/photo-1.jpg` — homepage hero photo
- `assets/photo-2.jpg` — About section photo

### Song Cover Art

Song cover artworks are stored in `assets/covers/`:
- `assets/covers/phantom.jpg` — Phantom
- `assets/covers/innocent-questions.jpg` — Innocent Questions
- `assets/covers/paradox.jpg` — Paradox
- `assets/covers/never-mine.jpg` — Never Mine
- `assets/covers/happy-home.jpg` — Happy Home
- `assets/covers/beautiful-eyes.jpg` — Beautiful Eyes
- `assets/covers/pasts-future.jpg` — Past's Future

If the images are provided as PNG or WebP instead, either convert them to JPG or update the corresponding image paths in `index.html`.

## Run locally

Open `index.html` in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Netlify deployment

This is a static site and does not need a build command.

- **Build command:** leave blank
- **Publish directory:** `.` (repository root)

When Netlify is connected to this GitHub repository and the `main` branch, each commit to `main` triggers a new deployment automatically.

## Official links

- [Instagram](https://www.instagram.com/paalas_?rpxt=M2Fzb2Mwczg2eGsx)
- [Spotify artist page](https://open.spotify.com/artist/3YmtmZPpxuX9EvwTf4QfBs)
- [YouTube](https://www.youtube.com/@Paalas-11)
- Collaboration: [paalas011@gmail.com](mailto:paalas011@gmail.com)
