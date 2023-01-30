# Vue Starter for Firebase

## Overview

The purpose of this project is to set up an open source project consisting of an marketing website, dashboard, and pipelines to automatically build, test, and deploy to Firebase.

This repo will be set as a [GitHub template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) and used as a starting point for multiple projects.

Only dependencies with commercial and SaaS friendly licenses such as MIT and Apache2 can be used.

## Requirements

### Firebase

- Auth
- [Emulators](https://firebase.google.com/docs/emulator-suite)
- Firestore
- Functions
- Storage

### Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Vue 3](https://vuejs.org/)
- [Vuetify 3](https://github.com/vuetifyjs/vuetify)
- [Cypress](https://www.cypress.io/) e2e and component tests
- [Jest](https://jestjs.io/) - for complex components
- [Firebase Emulators](https://firebase.google.com/docs/emulator-suite) - for local development

### GitHub Action

- Deploy to Firebase Hosting & Functions

### Features

- User Management
- Authentication ([email-link-auth](https://firebase.google.com/docs/auth/web/email-link-authhttps://firebase.google.com/docs/auth/web/email-link-auth) only)
  - Sign up
  - Sign in
  - Change Email
- User Profile (save in Firebase Auth)
  - Display name
  - Photo
  - Email
- Dashboard
  - A generic collection (orders, items, etc.) with CRUD will be used for the base project as an example.
- Tests
  - Cypress e2e and component tests.
  - Jest

### Security / Updates

- Dependencies should be high quality and actively supported.
- The core dependencies should not have any Medium or higher long-term vulnerabilities.
  - Development dependencies, which are not included in the production environment, are excluded but we should still try to limit.
- Repo has Dependabot, Secret, CodeQL, and Mend (was Whitesource) code scanning enabled to help identify issues.
