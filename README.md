# Zhaofu (Jeff) Chen Personal Website

Static GitHub Pages site inspired by a clean academic sidebar layout.

## Files

- `index.html` - site content and sections.
- `styles.css` - responsive academic-style layout.
- `script.js` - section navigation and hash routing.
- `assets/Zhaofu_Jeff_Chen_Resume.pdf` - resume PDF.
- `assets/CCAM_Poster_DONE.pdf` - CCAM poster PDF.
- `assets/ccam-poster-preview.png` - poster preview image.

## Publish to GitHub Pages

1. Create a public GitHub repository named `<your-github-username>.github.io`.
2. Upload these files to the repository root.
3. In GitHub, open Settings > Pages and use the `main` branch, root folder.

With the GitHub CLI after logging in:

```bash
gh auth login
gh repo create <your-github-username>.github.io --public --source=. --remote=origin --push
```

