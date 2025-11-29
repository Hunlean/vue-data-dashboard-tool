# 📦 Customs Analytics Dashboard

![Vue.js](https://img.shields.io/badge/Vue.js_3-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

> A modern, reactive Single Page Application (SPA) designed to visualize shipment manifests, track KPIs, and analyze import/export performance.

![Dashboard Preview](https://github.com/user-attachments/assets/PLACEHOLDER_FOR_YOUR_SCREENSHOT)
*(Note: Replace the link above with your actual screenshot link after uploading an image to GitHub)*

## 🚀 Project Overview

I built this project to demonstrate my readiness for the **Front-End Developer Internship** at the Customs Department.

It simulates a real-world administrative dashboard where officers can track shipment statuses, analyze financial values, and filter records in real-time. The application focuses on **data visualization**, **clean UI/UX**, and **scalable architecture**.

## ✨ Key Features

* **📊 Interactive Data Visualization:** Integrated **Chart.js** to render dynamic bar charts that visualize shipment values by status (Completed, Pending, Error).
* **⚡ Reactive Filtering:** Implemented a real-time search and status filter that instantly updates both the data table and the visual charts without page reloads.
* **🧠 Shared State Management:** Utilized the **Vue 3 Composition API** to build a singleton composable (`useAnalyticsData`), ensuring data consistency across KPI cards, charts, and tables.
* **🎨 Professional UI:** Designed a responsive, government-appropriate interface using **Tailwind CSS** and **DaisyUI**, featuring clear typography, status badges, and grid layouts.
* **🔌 API Simulation:** Engineered an asynchronous data fetching layer that simulates network latency and handles loading/error states gracefully.

## 🛠️ Technical Stack

| Technology | Usage |
| :--- | :--- |
| **Vue.js 3** | Core Framework (Script Setup, Composition API) |
| **Vite** | Next Generation Frontend Tooling (Hot Module Replacement) |
| **Tailwind CSS** | Utility-first CSS framework for responsive design |
| **DaisyUI** | Component library for professional UI elements |
| **Chart.js** | Data visualization and analytics |
| **Vue Router** | Client-side routing for seamless navigation |

## 📂 Project Structure

This project follows a modular, scalable architecture suitable for enterprise applications.

```text
.
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.ico
└── src/
    ├── App.vue
    ├── main.js
    ├── assets/
    │   ├── base.css
    │   └── main.css
    ├── components/
    │   ├── dashboard/   # Dashboard-specific widgets
    │   │   ├── StatCard.vue
    │   │   └── StatCardGrid.vue
    │   └── layout/      # Structural & Data components
    │       ├── DataChart.vue
    │       ├── DataTable.vue
    │       ├── FilterControls.vue
    │       ├── TheHeader.vue
    │       └── TheSidebar.vue
    ├── composables/     # Shared logic (State Management & Data Fetching)
    │   └── useAnalyticsData.js
    ├── data/            # Mock JSON data for API simulation
    │   └── mockData.json
    ├── router/          # Route definitions
    │   └── index.js
    └── views/           # Main page views
        ├── AnalyticsView.vue
        ├── DashboardView.vue
        ├── PlaceholderView.vue
        └── ReportsView.vue
````
## ⚙️ Local Setup Guide

Follow these steps to get a local copy of the project running:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Hunlean/vue-data-dashboard-tool.git](https://github.com/Hunlean/vue-data-dashboard-tool.git)
    cd vue-data-dashboard-tool
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run the Application:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173`.
