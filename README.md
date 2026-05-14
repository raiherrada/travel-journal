# 🌍 My Traveling Journal

A responsive travel blog project designed as a personal journal experience, built to explore **CSS Grid layouts, mobile-first design, and responsive web structure**.

This project simulates a multi-page travel blog where users can browse stories, read full articles, and learn more about the author. It focuses heavily on layout structuring, responsive design patterns, and clean UI organization across mobile, tablet, and desktop views.

---

## ✨ Features

🧭 **Mobile-First Responsive Design**  
The layout is built starting from mobile screens and progressively enhanced for tablets and large desktop displays using media queries.

🗺️ **CSS Grid Layout System**  
Custom grid structures are used across pages to organize travel posts dynamically and responsively.

📱 **Adaptive Multi-Page Experience**  
Includes a homepage, article page, and about page with consistent navigation and layout behavior.

🍔 **Interactive Sidebar Navigation**  
A hamburger menu toggles a slide-in sidebar for mobile users, improving accessibility and usability on smaller screens.

🖼️ **Travel Story Cards**  
Each post is presented as a visual card with images, titles, dates, and short descriptions to mimic a real travel blog feed.

🎨 **Consistent Typography & Styling**  
Uses Google Fonts (Roboto & Source Sans 3) for a clean editorial look across all pages.

⚡ **Reusable Layout Patterns**  
Shared header, navigation, and footer structure across all pages for consistency.

🧑‍💻 **Semantic HTML Structure**  
Proper use of `<header>`, `<main>`, `<article>`, and `<section>` for accessibility and readability.

---

## 🧱 Project Structure

```
project-root/
│
├── index.html # Homepage with travel journal grid
├── article.html # Full blog article page
├── about.html # About me page
│
├── css/
│ ├── style.css # Homepage styles (grid layout + responsive design)
│ ├── article.css # Article page styles
│ └── about.css # About page styles
│
├── images/ # Travel images and assets
│ ├── world.png
│ ├── thailand.jpg
│ ├── phiphi.jpg
│ ├── mountains.jpg
│ ├── highlands.jpg
│ ├── beauty.jpg
│ ├── home.jpg
│ ├── solo.jpg
│ ├── boat.jpg
│ └── rai.jpeg
│
└── main.js # JavaScript for sidebar toggle navigation
```

---

## 🧩 Pages Overview

### 🏠 Home (`index.html`)
- Hero-style featured travel story
- Grid layout of travel articles
- Responsive card-based design
- Sidebar navigation for mobile

### 📝 Article Page (`article.html`)
- Full blog post layout
- In-depth travel storytelling
- “Recent posts” section using grid layout

### 👤 About Page (`about.html`)
- Personal introduction and travel philosophy
- Avatar + biography section
- Repeated recent posts grid for consistency

---

## 📐 Responsive Layout Strategy

This project uses a **mobile-first approach** with CSS Grid and media queries:

### 📱 Mobile (default)
- Single-column layout
- Stacked travel cards
- Hidden navigation links replaced with hamburger menu

### 📲 Tablet (500px+)
- 2-column grid layout
- Improved typography scaling
- Navigation links become visible

### 💻 Desktop (870px+)
- 3-column grid layout
- Wider typography spacing
- More balanced card distribution

---

## ⚙️ Technologies Used

- HTML5 (semantic structure)
- CSS3 (Grid, Flexbox, media queries)
- JavaScript (navigation toggle logic)
- Google Fonts (Roboto, Source Sans 3)
- Font Awesome (icons)
- Responsive Design Principles
