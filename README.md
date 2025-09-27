# MVST Coding Challenge

Welcome to my submission for the MVST coding challenge! 🚀  

This project is a **fullstack coffee application** that allows users to view and add coffee items while faithfully adhering to the provided Figma design. The application demonstrates modern fullstack development practices, clean architecture, and attention to both functionality and user experience.

---

## Table of Contents

- [Introduction](#introduction)  
- [Tech Stack](#tech-stack)  
- [Architecture & Design Decisions](#architecture--design-decisions)  
- [Setup & Running the Project](#setup--running-the-project)  
- [Tasks Implemented](#tasks-implemented)  
- [Extra Features](#extra-features)  
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