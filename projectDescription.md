Hello, I want to redesign a website for a company called Duval Asphalt, the current design is outdated, and now we want to have a new site with a fresh look while still maintaining our branding colors, which are black and yellow.

The current website features a "dark" theme, which leadership wants to preserve, but still modernize the layout, components, cards and animations.

The industry as the name suggest is Asphalt, the current website is https://www.duvalasphalt.com.

The new website will have an emphasis on CTAs inviting users to buy asphalt online, and visit our store with indsutry related products, although that is not part of this project it's a separate build, but I am sharing it for design purposes.

Responsiveness and Mobile-first approach is a must in this project

Here are my guidlines for development, although this website will not need a db, and I am always open to suggestions for the betterment of the end result:

# Project Instructions

## Tech Stack

You are an expert in Web Development using:

- TypeScript
- Node.js
- React
- Next.js (App Router)
- Tailwind CSS
- ShadCN UI
- Firebase (Auth, Firestore, Storage)
- Sanity CMS

## Code Style and Structure

- Write concise, technical TypeScript code with proper type annotations
- Use functional and declarative programming patterns; avoid classes
- Prefer immutability and pure functions when possible
- Use iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content
- Always use proper TypeScript interfaces or types for data models

## Naming Conventions

- Use kebab-case for directories
- Use camelCase for variables and functions
- Use PascalCase for components and type definitions
- File names for components should be in PascalCase. Rest of the files in kebab-case
- Prefix component names with their type (e.g., ButtonAccount.tsx, CardAnalyticsMain.tsx)
- Use descriptive type names with suffixes like Props, Data, Response

## Syntax and Formatting

- Use the "function" keyword for pure functions
- Use arrow functions for callbacks and component definitions
- Use TypeScript's type inference where appropriate, but add explicit types for function parameters and returns
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements
- Use optional chaining (?.) and nullish coalescing (??) operators

## UI and Styling

- Use ShadCN UI components as the foundation
- Extend with Tailwind CSS for custom styling needs
- Implement responsive design with Tailwind CSS; use a mobile-first approach
- Leverage Tailwind's composable classes rather than creating custom CSS
- Use color tokens from the theme consistently

## State Management and Data Flow

- Use Firebase for authentication and data storage
- Implement proper typed Firebase hooks for data fetching and mutations
- Create typed API for Firebase interactions
- Use Sanity for content management with typed schemas
- Implement GROQ queries with proper TypeScript types

## Performance Optimization

- Minimize 'use client', 'useState', and 'useEffect'; favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Optimize images: use Next.js Image component with proper sizing
- Implement proper Firebase query optimizations (limit, where clauses)
- Add proper Firebase indexing for complex queries

## Key Conventions

- Optimize Web Vitals (LCP, CLS, FID)
- Limit 'use client':
    - Favor server components and Next.js SSR
    - Use only for Web API access, Firebase SDK in small components
    - Use proper data fetching patterns for Firebase in server components
- Follow TypeScript best practices:
    - Create interfaces for all data models
    - Use utility types (Partial, Pick, Omit) appropriately
    - Define proper return types for all functions
- Firebase conventions:
    - Create typed hooks for Firestore operations
    - Always handle loading and error states
    - Implement proper security rules
- Sanity conventions:
    - Create typed schemas
    - Use properly typed GROQ queries
    - Implement content validation

## Design Guidelines

- Create beautiful, production-worthy designs, not cookie-cutter templates
- Use ShadCN UI components as building blocks, customize as needed
- Maintain consistent spacing, typography, and color usage
- Ensure accessibility standards are met
- Do not install additional UI packages unless absolutely necessary