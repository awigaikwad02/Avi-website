# Avishkar Gaikwad: Personal Website

My personal portfolio site. It covers my background in data analytics, the tools I work with, and a set of projects you can try live in the browser.

## Featured projects

**The Rack Report**
A live news and project tracker for the U.S. data center buildout. Headlines refresh every hour and feed a searchable newsroom, a project map and a company tracker.
Live: https://therackreport.org (code: [datacenter-watch](https://github.com/awigaikwad02/datacenter-watch))

**BuildSignal**
A construction intelligence dashboard built on 300 real building permits from Chicago and NYC open data. A Python pipeline cleans the records and a scoring model ranks each permit by commercial relevance.
Demo: served from `/projects/buildsignal/` on the site

**NoteCraft AI**
A study app that turns PDFs and photos of printed pages into structured notes, flashcards and quizzes. PDF reading and OCR run entirely in the browser, with no backend.
Demo: served from `/projects/notecraft-ai/` on the site

## Built with

React, plain CSS, react-icons. The BuildSignal and NoteCraft AI demos are prebuilt apps (React, TypeScript, Vite, Tailwind) placed in `public/projects/`.

## Project layout

```
src/data.js          all site text and project details (edit content here)
src/Components/      page sections: Hero, About, Experience, Projects, Skills, Contact
public/projects/     prebuilt demo apps and project screenshots
public/_redirects    clean URLs for the demo apps
build/               production build output
```

## Run locally

```
npm install
npm start
```

Production build: `npm run build`

## Contact

LinkedIn: https://www.linkedin.com/in/avishkar-gaikwad-/
