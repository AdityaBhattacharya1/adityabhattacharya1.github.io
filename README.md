# Portfolio Website - Aditya Bhattacharya

<p>
	<img alt="GitHub" src="https://img.shields.io/github/license/AdityaBhattacharya1/adityabhattacharya1.github.io?color=red&style=for-the-badge">
	<img alt="Website" src="https://img.shields.io/website?down_color=red&down_message=currently%20down&style=for-the-badge&up_color=dark%20green&up_message=up%20and%20running&url=https%3A%2F%2Fadityabh.is-a.dev/">
</p>

This is the GitHub repository for my portfolio website, made using Astro and React 🚀

**Website is up and running at https://adityabh.is-a.dev/**

## Technologies Used

-   **Astro and React:** for minimum JavaScript overhead on the website
-   **TypeScript:** for type safety
-   Automatic SiteMap generation using Astro plugins. The repository also includes a ready-made `robots.txt` file
-   Form submission support using FormSpree

## File Structure

```sh
.
├── public
└── src
    ├── assets
    ├── components
    │   ├── about
    │   ├── contact
    │   ├── education
    │   ├── interface
    │   ├── profession
    │   ├── projects
    │   └── skills
    ├── data
    ├── hooks
    ├── pages
    └── styles
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Installation and Running

Get your FormSpree form hash ID and add it into a `.env` file, as given in the `.sample.env` file.

```sh
git clone https://github.com/AdityaBhattacharya1/adityabhattacharya1.github.io portfolio-website

cd portfolio-website

npm install

npm run dev
```
