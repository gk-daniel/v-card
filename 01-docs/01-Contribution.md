## Contribution

## Commit Messages

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

## Merge Request

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
## 
### [Back to README](../README.md)

## 