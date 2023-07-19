# V-Card

**Demo**: [V-Card](https://dn.gooko.org/vue/card/)

## Description

In this Vue 3 project, we showcase the elegance of simplicity and efficiency, utilizing CDN connections exclusively for seamless deployment. Embracing the Atomic Design structure, our components are thoughtfully organized into distinct levels—atoms, molecules, organisms, and templates—fostering reusability, maintainability, and a systematic approach to building scalable applications.

## Table of Contents

- [V-Card](#v-card)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [1. Installation](#1-installation)
    - [1.1. CDN](#11-cdn)
    - [1.2. Icons](#12-icons)
    - [1.3. App](#13-app)
  - [2. Contribution](#2-contribution)
    - [2.1. Commit Messages](#21-commit-messages)
    - [2.2. Merge Request](#22-merge-request)

## 1. Installation

### 1.1. CDN

- Add Vue.js CDN: `<script src="https://unpkg.com/vue@3.0.11/dist/vue.global.js"></script>`
   - Source: [https://vuejs.org/](https://vuejs.org/)

### 1.2. Icons

- Add Phosphor Icons CDN: `<script src="https://unpkg.com/phosphor-icons"></script>`
   - Source: [https://phosphoricons.com/](https://phosphoricons.com/)

### 1.3. App

- Include the App script: `<script src="./app.js"></script>`

## 2. Contribution

### 2.1. Commit Messages

Follow the guidelines for writing commit messages to maintain clarity and consistency in version control.

**Types**

The first part of the commit message indicates the type of change:

| Type   | Description               |
|--------|---------------------------|
| feat   | Feature                   |
| fix    | Bug fix                   |
| docs   | Documentation             |
| style  | Formatting, missing semicolons |
| visual | SCSS file changes         |
| refactor | Code refactoring         |
| test   | Adding tests              |
| build  | Build system or external dependencies   |
| chore  | Maintenance or upgrades   |
| revert | Reverts a previous commit |

Example: `feat: add family name textbox in Registration.vue`

**Scope**

The second part of the commit message defines the scope of the change:

| Scope | Description           |
|-------|-----------------------|
| hp    | Home Page             |
| cp    | Category Page         |
| srp   | Search Result Page    |
| pdp   | Product Detail Page   |

Example: `feat(hp), fix(pdp)`

**Body**

The third part of the commit message provides a detailed description of the change.

- Set: `fix(srp): correct search bar for Product.vue`
- Add: `feat(pdp): add BoxPricing.vue`
- Remove: `test(pdp): remove old test for a BoxPricing.vue`
- Correct: `refactor(pdp): correct path for Product.vue inside Home.vue`

### 2.2. Merge Request

When creating a Merge Request (MR), follow these guidelines for a smooth review process.

**Open MR**

- Create MR from branches: master, feature/title, release/title, hotfix/title

**Review of MR**

1. Formality:
   - Check correct branch name
   - Verify correct commits
   - Validate the syntax of changes

2. Visual Changes:
   - Verify correct visual changes (UX/UI)

3. Functional Changes:
   - Review browser console
   - Test refreshing the page

**Conclusions**

If everything is correct, comment on the MR with the following message:

| Formality          | Visual Changes       | Functional Changes     |
|-------------------|----------------------|------------------------|
| ✓ correct branch name  | ✓ correct css syntax    | ✓ correct js syntax           |
| ✓ correct commits       |                        | ✓ correct refreshing the page |
| ✓ correct code syntax   |                        | ✓ correct configuration       |
