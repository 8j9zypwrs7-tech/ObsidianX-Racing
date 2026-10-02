# ObsidianX Racing website

This is a complete static website built with plain HTML, CSS and JavaScript. It
does not need Node.js, React or a build command, so it is straightforward to edit
in VS Code and publish with GitHub Pages.

## File structure

```text
obsidianx-racing/
├── index.html              # Home page
├── team.html               # Team photographs and profiles
├── partners.html           # Sponsorship information
├── contact.html            # Contact page
├── 404.html                # Custom missing-page screen
├── .nojekyll               # Tells GitHub Pages to serve files directly
└── assets/
    ├── style.css            # All colours, layout and responsive styling
    ├── script.js            # Navigation, mobile menu and countdown
    ├── logo.jpg             # Your square ObsidianX logo
    ├── obsidian-stone-hero.png # Homepage obsidian image
    └── og.png               # Social sharing image
```

## Open the website locally

1. Unzip the downloaded folder.
2. Open VS Code.
3. Select **File → Open Folder** and choose the `obsidianx-racing` folder.
4. Open `index.html`.
5. For the easiest preview, install the **Live Server** VS Code extension, then
   right-click `index.html` and select **Open with Live Server**.

You can also double-click `index.html`, although Live Server refreshes the page
automatically whenever you save a change.

## Important edits before publishing

Open `assets/script.js` and edit the `SITE_CONFIG` object near the top:

```js
const SITE_CONFIG = {
  raceDate: "2026-12-01T00:00:00Z",
  teamEmail: "obsidianxracing@gmail.com",
  instagramUrl: "https://www.instagram.com/obsidianx_racing/",
  linkedinUrl: ""
};
```

- The countdown currently finishes at midnight GMT on 1 December 2026.
- Sponsor logos can be added when they are ready.

## Publish using GitHub Pages

### Option A: Upload through the GitHub website

1. Sign in to GitHub and create a new public repository, for example
   `obsidianx-racing`.
2. Open the repository and select **Add file → Upload files**.
3. Upload the **contents inside this folder**, ensuring `index.html` is at the
   repository root—not inside another nested folder.
4. Commit the files to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Select `main` and `/(root)`, then press **Save**.
8. GitHub will provide a URL similar to:
   `https://YOUR-USERNAME.github.io/obsidianx-racing/`.

### Option B: Push from the VS Code terminal

Create an empty GitHub repository first, then run these commands inside the
website folder. Replace both placeholders in the remote URL.

```bash
git init
git add .
git commit -m "Create ObsidianX Racing website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Then enable GitHub Pages using steps 5–7 in Option A.

## How to change common items

- **Colour scheme:** edit the variables at the top of `assets/style.css`.
- **Navigation/footer:** edit the templates in `assets/script.js`.
- **Countdown date:** edit `raceDate` in `assets/script.js`.
- **Page wording:** edit the relevant `.html` file.
- **Logo:** replace `assets/logo.jpg` with another image using the same filename.
- **Hero image:** replace `assets/obsidianx-hero.png` using the same filename.

All main sections are labelled with comments to help you identify what each part
of the code controls.
