# V-CARD

Demo: https://dn.gooko.org/vue/card/

In this Vue 3 project, we demonstrate the beauty of simplicity and efficiency by exclusively utilizing CDN connections for seamless deployment. Embracing the Atomic Design structure, our components are thoughtfully organized into distinct levels—atoms, molecules, organisms, and templates—fostering reusability, maintainability, and a systematic approach to building scalable applications

## Table of Content

**1. Installation**
* 1.1. CDN
* 1.2. Icons

**2. Contribution**
* 2.1. Commit Messages
* 2.2. Merge Request

# 1. Installation
## 1.1. CDN

- <script src="https://unpkg.com/vue@3.0.11/dist/vue.global.js"></script>

Source: https://vuejs.org/

## 1.2. Icons

-  <script src="https://unpkg.com/phosphor-icons"></script>

Source: https://phosphoricons.com/

## 1.3. App

- <script src="./app.js"></script>

# 2. Contribution

## 2.1. Commit Messages

Source: https://gist.github.com/stephenparish/9941e89d80e2bc58a153

### Types

The first part of the commit message 

| Definition | Description  |
|-----------------|:-------------|
| feat     | feature |
| fix      | fix bugs 
| docs     | documentation |
| style    | formatting, missing semi colons |
| visual   | scss filed 
| refactor | replacing or fix without any changes for user |
| test     | adding tests |
| build    | new dependance 
| chore    | maintain, upgrades |
| revert   | Reverts a previous commit |

Example: feat: add familyname textbox in Registration.vue

### Scope

The second part of the commit message

| Definition | Description  |
|-----------------|:-------------|
| hp    | Home Page |
| cp    | Category Page |
| srp   | Search Result Page |
| pdp   | Product Detail Page |

Example: feat(hp), fix(pdp)

### Body

The third part of the commit message (description)

| Definition | Description  |
|-----------------|:-------------|
| set       | fix(srp): correct search bar for Product.vue |
| add       | feat(pdp): add BoxPricing.vue |
| remove    | test(pdp): remove old test for a BoxPricing.vue |
| correct   | refactor(pdp): correct path for Product.vue inside Home.vue |

## 2.2. Merge Request

### Open MR

- master
- feature/title
- release/title
- hotfix/title

### Review of MR

#### 1. Formality

- Correct name of the branch
- Correct commits
- Correct syntax of changes

#### 2. Visual Changes

- Correct visual changes (UX/UI)**

#### 3. Functional Changes

- Browser console
- Refresh the page

#### Conclusions

If everything correct comment the MR with following message

| Formality | Visual Changes | Functional Changes |
| ------ | ------ | ------ |
| ✓ correct branch name | ✓ correct css syntax | ✓ correct js syntax
| ✓ correct commits  |   | ✓ correct refreshing the page
| ✓ correct code syntax  |   | ✓ correct configuration