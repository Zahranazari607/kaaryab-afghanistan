# 🎓 KaarYab Afghanistan (کاریاب افغانستان)

> **Opportunity Finder Platform for Afghan Youth**  
> A modern, accessible, and user-centric web platform designed to empower Afghan students, job seekers, and professionals by aggregating career and educational opportunities in one unified place.

---

## 📌 Project Overview
- **Project Name:** KaarYab Afghanistan
- **Project Type:** Final Capstone Project (40% Grade Weight)
- **Course Duration:** 6 Weeks / 1.5 Months
- **Target Audience:** Afghan Youth, Students, Job Seekers, Women looking for remote work, and Organizations.

---

## 📝 Project Description
**KaarYab Afghanistan** is a modern Next.js application built to bridge the gap between Afghan talent and global/local opportunities. The platform acts as a centralized hub for discovering jobs, internships, scholarships, online courses, remote work, training programs, and volunteer initiatives. 

Designed with inclusivity and performance in mind, KaarYab provides seamless navigation, multi-filter search capabilities, saved opportunities management, real-time platform analytics, and an integrated **PDF CV Builder** to help users create professional resumes directly on the site.

---

## 💡 Problem It Solves
1. **Information Fragmentation:** Opportunities in Afghanistan are scattered across disjointed social media channels, messaging groups, and isolated websites, making them hard to track.
2. **Limited Access for Women:** Women and remote job seekers often struggle to find safe, flexible, and verified online work or education opportunities.
3. **Application Barriers:** Young job seekers frequently lack proper tools or guidance to build standardized resumes (CVs) for applications.

**The Solution:** KaarYab solves these challenges by consolidating verified listings into a single, clean, mobile-responsive dashboard equipped with bookmarking, real-time deadline warnings, dynamic filtering, and a client-side resume builder.

---

## ✨ Key Features

### 🔍 Core Platform Features
* **Comprehensive Opportunity Listings:** Browsable feed of jobs, scholarships, internships, online courses, and remote work.
* **Smart Search & Advanced Filtering:** Filter opportunities by title, category, location, work type (Remote/On-site), and submission deadlines.
* **Dynamic Details Page (`/opportunities/[id]`):** Dedicated view for each opportunity with full job requirements, organization information, tags, and direct application links.
* **Save / Bookmark System:** Save preferred opportunities to local storage for quick access without requiring account creation.
* **CRUD Functionality:** Complete system to Create, Read, Update, and Delete opportunity listings.
* **Interactive Dashboard:** Real-time metrics showing total opportunities, active jobs, remote positions, scholarships, and expiring listings accompanied by analytical visual cards.
* **Dark / Light Mode:** Full dark mode support using Tailwind CSS for tailored readability.

### 🌟 Bonus & Advanced Features
* **📄 PDF CV Builder (`/cv-builder`):** A client-side, dynamic resume builder powered by `@react-pdf/renderer` and `react-hook-form` allowing users to generate and download academic/professional PDF CVs with photo uploads.
* **⏳ Expiring Soon Indicators:** Automatic dynamic calculations highlighting opportunities nearing their deadline.
* **🌟 Featured & Women-Centric Sections:** Dedicated spotlight sections for featured listings and remote initiatives tailored for Afghan women.

---

## 🛠️ Technologies Used

* **Frontend Framework:** [Next.js](https://nextjs.org/) (App Router)
* **UI Library:** [React](https://react.dev/)
* **Styling & Design:** [Tailwind CSS](https://tailwindcss.com/), Lucide React (Icons)
* **Form Management & Validation:** `react-hook-form`, `zod`
* **PDF Generation:** `@react-pdf/renderer`
* **State Management:** React Context API + LocalStorage Synchronization
* **Deployment & Hosting:** Vercel

---

## 📁 Suggested Folder Structure

```text
app/
├── about/
│   └── page.jsx
├── add-opportunity/
│   └── page.jsx
├── contact/
│   └── page.jsx
├── cv-builder/
│   └── page.jsx
├── dashboard/
│   └── page.jsx
├── opportunities/
│   ├── [id]/
│   │   └── page.jsx
│   └── page.jsx
├── saved/
│   └── page.jsx
├── favicon.ico
├── globals.css
├── layout.js
└── page.js

components/
├── Footer.jsx
├── Navbar.jsx
└── OpportunityCard.jsx

context/
├── SavedContext.jsx
└── ThemeContext.jsx

data/
└── opportunities.js

public/
└── screenshots/
    ├── About page-Dark mode.png
    ├── About page-light mode.png
    ├── Contact page-Dark mode.png
    ├── Contact page-light mode.png
    ├── CV builder page-Dark mode.png
    ├── CV builder page-light mode.png
    ├── Dashboard page-Dark mode.png
    ├── Dashboard page-light mode.png
    ├── Home page-Dark mode.png
    ├── Home page-light mode.png
    ├── Opportunities page-Dark mode.png
    ├── Opportunities page-light mode.png
    ├── Post opportunities page-Dark mode.png
    ├── Post opportunities page-light mode.png
    ├── Saved page-Dark mode.png
    └── Saved page-light mode.png
```

---

## 🚀 How to Run Locally

Follow these steps to set up and run the project locally on your computer:

### 1. Prerequisites

Make sure you have **Node.js** (v18.0.0 or higher) and **Git** installed.

### 2. Clone the Repository

```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/kaaryab-afghanistan.git](https://github.com/YOUR_GITHUB_USERNAME/kaaryab-afghanistan.git)
cd kaaryab-afghanistan

```

### 3. Install Dependencies

```bash
npm install

```

### 4. Run the Development Server

```bash
npm run dev

```

### 5. Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🖼️ Screenshots

| Page | Light Mode | Dark Mode |
| :--- | :---: | :---: |
| **Home Page** | ![Home Light](./public/screenshots/Home%20page-light%20mode.png) | ![Home Dark](./public/screenshots/Home%20page-Dark%20mode.png) |
| **Opportunities Page** | ![Opportunities Light](./public/screenshots/Opportunities%20page-light%20mode.png) | ![Opportunities Dark](./public/screenshots/Opportunities%20page-Dark%20mode.png) |
| **Dashboard** | ![Dashboard Light](./public/screenshots/Dashboard%20page%20-light%20mode.png) | ![Dashboard Dark](./public/screenshots/Dashboard%20page-Dark%20mode.png) |
| **CV Builder** | ![CV Builder Light](./public/screenshots/CV%20builder%20page-light%20mode.png) | ![CV Builder Dark](./public/screenshots/CV%20builder%20page-Dark%20mode.png) |
| **Post Opportunity** | ![Post Opportunity Light](./public/screenshots/Post%20opportunities%20page-light%20mode.png) | ![Post Opportunity Dark](./public/screenshots/Post%20opportunities%20page-Dark%20mode.png) |
| **Saved Opportunities** | ![Saved Light](./public/screenshots/Saved%20page-light%20mode.png) | ![Saved Dark](./public/screenshots/Saved%20page-Dark%20mode.png) |
| **About Page** | ![About Light](./public/screenshots/About%20page-light%20mode.png) | ![About Dark](./public/screenshots/About%20page-Dark%20mode.png) |
| **Contact Page** | ![Contact Light](./public/screenshots/Contact%20page-light%20mode.png) | ![Contact Dark](./public/screenshots/Contact%20page-Dark%20mode.png) |

---

## 🔗 Links

* **Live Demo Link:** [https://kaaryab-afghanistan.vercel.app](https://www.google.com/search?q=https://kaaryab-afghanistan.vercel.app) *(Replace with your live link)*
* **GitHub Repository:** [https://github.com/YOUR_GITHUB_USERNAME/kaaryab-afghanistan](https://www.google.com/search?q=https://github.com/YOUR_GITHUB_USERNAME/kaaryab-afghanistan) *(Replace with your GitHub link)*

---

## 🔮 Future Improvements

* [ ] **Multi-Language Support:** Full localization in English, Dari (دری), and Pashto (پښتو).
* [ ] **Authentication System:** User accounts for job seekers and verified organizational profiles via NextAuth/Clerk.
* [ ] **Email Notifications:** Automated email alerts for saved searches and new matching listings.
* [ ] **Admin Approval Workflow:** Moderation dashboard for reviewing newly submitted user opportunities before public publication.
* [ ] **Application Tracking:** Built-in portal for users to track status (Applied, Interviewing, Offered) for job listings.

---

## 🤝 Acknowledgments & Note

This project was developed for educational and capstone evaluation purposes as part of the Web Development Program. All sample data is designated as **Demo Data** unless specified otherwise.

```

```