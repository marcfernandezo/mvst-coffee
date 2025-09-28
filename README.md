# MVST Coding Challenge

Welcome to my submission for the MVST coding challenge! 🚀  

This project is a **fullstack coffee application** that allows users to view and add coffee items while faithfully adhering to the provided Figma design. The application demonstrates modern fullstack development practices, clean architecture, and attention to both functionality and user experience.

---

## Table of Contents

- [Introduction](#introduction)  
- [Tech Stack](#tech-stack)  
- [Architecture & Design Decisions](#architecture--design-decisions)  
- [Setup & Running the Project](#setup--running-the-project)  
- [Future Improvements](#future-improvements)  
- [Feedback](#feedback)  

---

## Introduction

The challenge required developing a fullstack coffee application with the following features:

- Display a list of coffee items fetched from a backend API.  
- Add new coffee items through a validated form.  
- Persist coffee data in a database.  
- Match the UI/UX of the design provided in Figma: [Figma Design](https://www.figma.com/file/C4n0EqxCqKuu6Or4okx7qO/Coding-Challenge-2.0).  

The starter repository included **basic frontend and backend boilerplates**. I refactored and extended the project structure for clarity, maintainability, and scalability, while implementing all required functionality and ensuring alignment with best practices in modern web development.

---

## Tech Stack

This project uses **Next.js as a fullstack framework**, enabling both frontend and backend functionality in a single unified project. Below is a detailed overview of the technologies and why they were chosen:

### Frontend & Backend (Fullstack Next.js)

- **Next.js (App Router)**  
  - Provides a **unified framework** for both frontend and backend development. Using API routes for backend operations and React-based components for the frontend simplifies the development workflow, reduces context switching, and ensures tight integration between client and server logic.  
  - The App Router introduces a **clear separation between server and client components**, improving performance, maintainability, and scalability.  
  - Server-side rendering (SSR) capabilities allow faster initial page loads, SEO optimization, and better performance for dynamic data.

- **React 19**  
  - Core library for building interactive, dynamic, and responsive user interfaces.  
  - React’s component-based architecture encourages **reusability, separation of concerns, and maintainability**—key qualities for a scalable application.  
  - Paired with Next.js, React ensures smooth UI rendering and efficient client-side updates.

- **TailwindCSS v4**  
  - Utility-first CSS framework that allows rapid, consistent styling directly in the markup.  
  - Tailwind promotes **design consistency**, reduces the need for custom CSS files, and makes the frontend codebase easier to maintain.  
  - Perfect for faithfully implementing Figma designs with minimal overhead.  

- **Shadcn/UI**  
  - Lightweight, accessible, and customizable UI component library built on TailwindCSS.  
  - Speeds up the development of reusable, accessible components without enforcing opinionated styling, allowing for flexibility in adhering to the Figma design.

- **SWR (Vercel)**  
  - Efficient client-side data fetching library that provides caching, revalidation, and synchronization out-of-the-box.  
  - Minimizes unnecessary network requests and ensures the UI remains consistent with backend data.  
  - Reduces boilerplate code and promotes reactive, responsive frontend behavior.

- **Framer Motion**  
  - Animation library for React that provides smooth transitions, gestures, and micro-interactions.  
  - Improves **user experience** by making UI elements feel interactive, polished, and professional.

### Database

- **Supabase / PostgreSQL**  
  - Supabase provides a **fully managed PostgreSQL database** with authentication, storage, and real-time capabilities.  
  - Using PostgreSQL ensures **data integrity, relational data support, and scalability**, essential for a robust fullstack application.  
  - A seeding mechanism was implemented to pre-populate the database with initial coffee items for immediate testing.

---

## Architecture & Design Decisions

The architecture was designed for **scalability, maintainability, and modern development standards**:

1. **Fullstack Next.js**  
   - Consolidates frontend and backend in a single project.  
   - API routes manage backend logic, database queries, and validation, reducing deployment complexity.  
   - Client components consume backend data via SWR, enabling reactive and real-time updates where necessary.

2. **Component-Based Frontend**  
   - Reusable React components with clear separation of concerns.  
   - TailwindCSS and Shadcn/UI ensure design consistency and accessibility across components.

3. **Efficient Data Management**  
   - SWR handles caching and automatic revalidation, minimizing server load and improving responsiveness.  
   - Backend validation ensures **data integrity**, preventing duplicate coffee entries and enforcing consistent data structures.

4. **Animations and Micro-Interactions**  
   - Framer Motion provides polished UI feedback, enhancing UX without compromising performance.

5. **Database & Persistence**  
   - Supabase/PostgreSQL guarantees persistent, structured, and scalable data storage.  
   - Includes seeding scripts for quick project setup and testing.

---

## Setup & Running the Project

### Prerequisites

- Node.js v22.20.0 (LTS)
- [pnpm](https://pnpm.io/) package manager installed
- Supabase Account 

### Installation

```bash
# Clone the repository
git clone https://github.com/marcfernandezo/mvst-coffee mvst-coffee
cd mvst-coffee

# Setup .env file
SUPABASE_URL="SUPABASE_PUBLIC_URL"
SUPABASE_SERVICE_ROLE_KEY="SUPABASE_SECRET_API_KEY"

# Install dependencies
pnpm install

# Setup Database and Run
pnpm run seed
pnpm run dev
````

### Testing

This project includes a robust testing and code quality setup to ensure reliability and maintainability:

- **ESLint & Prettier**  
  Enforces consistent code style and catches potential errors early during development.
- **TypeScript**  
  Provides static type checking to reduce runtime errors and improve developer confidence.

## Future Improvements / What I Would Do With More Time

While the application fulfills all the core requirements of the MVST coding challenge, given more time, I would focus on enhancing **functionality, scalability, and user experience**. Below are the key areas I would prioritize:

### 1. Advanced Features for Coffee Management
- **Edit & Delete Coffee Items**  
  Implement the ability to edit existing entries and delete coffees, with confirmation modals to prevent accidental changes.
- **Categorization & Filtering**  
  Enable filtering or sorting coffee items by type, roast level, or flavor profile for easier navigation.
- **Search Functionality**  
  Add a search bar with debounced input for quickly finding specific coffee items.

### 2. User Accounts & Personalization
- **Authentication & Authorization**  
  Introduce Supabase Authentication so that only logged-in users can add, edit, or delete coffee items.
- **User Preferences**  
  Save user-specific preferences such as favorite coffees, recent searches, and custom notes for each coffee.

### 3. Enhanced UI/UX
- **Improved Animations**  
  Extend the use of Framer Motion for smooth page transitions and interactive hover effects.
- **Responsive Design Improvements**  
  Fine-tune mobile and tablet layouts for a fully optimized cross-device experience.
- **Theme Switch**  
  Implement a toggleable dark/light mode using TailwindCSS and Next-Themes JavaScript library.

### 4. Performance & Scalability
- **Pagination & Infinite Scroll**  
  Implement server-side pagination or infinite scrolling for large coffee catalogs.
- **Optimized API & Caching**  
  Leverage stale-while-revalidate caching and possibly edge functions for faster API responses.

### 5. Testing & Reliability
- **Unit & Integration Tests**  
  Add tests using Jest and React Testing Library to ensure reliability and prevent regressions.
- **End-to-End Testing**  
  Use Cypress or Playwright to validate critical user flows, such as adding a coffee or fetching the coffee list.

### 6. Analytics & Insights
- **Usage Tracking**  
  Integrate analytics to track user interactions, popular coffees, and new item additions.
- **Admin Dashboard**  
  Build a lightweight dashboard for monitoring coffee statistics, user activity, and app health.


## Feedback

Working on this challenge was an exciting opportunity to combine frontend and backend development in a fullstack application. 

- Gaining deeper familiarity with **Next.js App Router** and server-client integration.
- Designing a clean **component-based frontend** with TailwindCSS and Shadcn/UI for a polished, Figma-accurate interface.
- Implementing a **persistent backend** with Supabase/PostgreSQL and ensuring data validation and integrity.
- Learning to prioritize **scalability, maintainability, and UX consistency** under time constraints.
- Applying best practices for **modern fullstack development**, including SWR for reactive data fetching and Framer Motion for micro-interactions.

Overall, the challenge was very well-structured, and it provided freedom to make architectural decisions while following design specifications. The instructions were clear, and the Figma file was very helpful in guiding the UI development.