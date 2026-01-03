# Dashboard App

Dashboard App is a portfolio project built to demonstrate my skills as a **Junior Frontend Developer**, focusing on modern frontend architecture, state management, authentication flow, and testing best practices using **Next.js**.

🔗 **Live Demo**
https://dashboard-app.vercel.app

---

## 🎯 Project Goal

This project was created as a **portfolio showcase** to demonstrate:

* Clean and scalable frontend architecture
* Real-world dashboard behavior
* State management and authentication flow
* Unit and integration testing
* Responsive and accessible UI

---

## 🛠 Tech Stack

* **Next.js** (App Router)
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Shadcn UI**
* **Zustand** (state management)
* **Vitest**
* **React Testing Library**
* **Jest DOM**
* **JSDOM**

---

## 🔧 Tooling & Libraries

* **Bun** (package manager & runtime)
* **Radix UI** (via Shadcn UI)
* **Lucide React** (icons)
* **ESLint**

---

## ✨ Features

* Fake Authentication (Login / Logout)
* Protected Routes (Auth Guard)
* Responsive Dashboard Layout (Navbar & Sidebar)
* Product Management:
  * Product list
  * Filtering
  * Pagination
* Persisted state using LocalStorage
* Proper loading, error, and empty states
* Server vs Client Component separation
* Clean and maintainable code structure

---

## 🧪 Testing

This project includes comprehensive testing for:

* Unit tests for dashboard components
* Integration tests for feature flows
* UI rendering validation
* User interaction testing (filter & pagination)
* Authentication-based route protection

Run tests locally:

```bash
bun run test
```

---

## 📁 Project Structure

This project uses a **feature-based architecture** combined with reusable UI components.

```
src/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   └── dashboard/
│   │       ├── error.tsx
│   │       ├── layout.tsx
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx   
│
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── LogoutButton.tsx
│       ├── skeleton.tsx
│       └── table.tsx
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   └── AuthCard.tsx
│   │   ├── stores/
│   │   │   └── auth.store.ts
│   │   ├── tests/
│   │   │   └── auth.test.tsx
│   │   └── types/
│   │       └── auth.type.ts
│   │
│   └── dashboard/
│       ├── components/
│       │   └── shared/
│       │       ├── Navbar.tsx
│       │       └── Sidebar.tsx
│       ├── tests/
│       │   └── dashboard.test.tsx
│       └── types/
│           └── dashboard.type.ts
│
├── lib/
│   └── utils.ts
│
├── styles/
│   └── globals.css
│
├── tests/
│   └── vitest.setup.ts
│
├── vitest.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/aditya03-fend/dashboard-app.git
cd dashboard-app
```

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun dev
```

Open the app in your browser:

```
http://localhost:3000
```

---

## 🔄 Development Workflow

This project follows a real-world development workflow:

* Feature-based branching
* Conventional commit messages
* Pull Request workflow
* Squash merge for clean commit history
* Commit scope follows the active branch

This workflow simulates professional team development practices.

---

## 🔮 Future Improvements

* Table sorting
* Role-based access control
* Product CRUD (Fake API)
* URL synchronization using search params

---

## 👤 Target Audience

This project is intended for:

* Recruiters / HR
* Frontend Developers
* Technical reviewers

---

## 📌 Notes

This project prioritizes **code quality, structure, and testing** over visual complexity, reflecting real-world frontend development standards.
Authentication in this project is implemented as a fake auth system for demonstration purposes only.