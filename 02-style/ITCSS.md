# ITCSS (Inverted Triangle CSS)

ITCSS stands for Inverted Triangle CSS, which is a methodology for organizing your CSS code in a scalable and maintainable way. It helps to structure your stylesheets based on specificity and maintain a clear separation of concerns. ITCSS follows the concept of an inverted triangle, where the more generic styles are at the top, and the more specific styles are at the bottom.

## Table of Contents

| Section              | Description                                |
|----------------------|--------------------------------------------|
| [01-settings.css](#01-settings.css)| Global settings and variables              |
| [02-tools.css](#02-tools.css)      | Mixins, functions, and utility classes     |
| [03-generic.css](#03-generic.css)  | Normalize, resets, and generic styles      |
| [04-elements.css](#04-elements.css)| Basic HTML element styles                  |
| [05-objects.css](#05-objects.css)  | Layout and design patterns                 |
| [06-components.css](#06-components.css)| Reusable UI components                  |
| [07-utilities.css](#07-utilities.css)| Helper classes and overrides             |

## 01-settings.css

This section contains global settings and variables that define your project's design system. It includes color palettes, typography, and other customizable values that will be used throughout the project.

### Example:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-family: 'Helvetica Neue', Arial, sans-serif;
}
```

## 02-tools.css

The Tools section includes mixins, functions, and utility classes that provide reusable CSS logic. These tools can be used to create consistent styles across different components and modules.


### Example:

```css
@mixin center-element {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 03-generic.css

In the Generic section, you can place normalize or reset styles to ensure a consistent baseline for different browsers. It also includes generic styles like box-sizing, typography rules, and other styles that apply globally.

### Example:

```css
html {
  box-sizing: border-box;
}
```

## 04-elements.css

The Elements section contains basic styling for HTML elements (e.g., h1, p, a, etc.). These styles provide a consistent foundation for your project's typography and basic elements.

### Example:

```css
h1 {
  font-size: 2rem;
  color: var(--primary-color);
}
```

## 05-objects.css

In the Objects section, you define layout and design patterns that can be reused throughout your project. It includes grid systems, containers, and other structural styles.

### Example:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
}
```

## 06-components.css

The Components section is for building reusable UI components. Each component should have its directory and contain all the necessary styles and assets. This section encourages component-based development.

### Example:

```css
.button {
  padding: 10px 20px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: #fff;
  cursor: pointer;
}
```

## 07-utilities.css

The Utilities section includes helper classes and overrides that can be used to tweak or modify styles without adding new CSS rules. These utility classes should be kept minimal and focused on specific tasks.

### Example:

```css
.text-center {
  text-align: center;
}
```

## Conclusion

ITCSS is a powerful methodology that helps maintain a scalable and organized CSS codebase. By structuring your stylesheets based on specificity, you can avoid specificity conflicts and improve code maintainability. It encourages component-based development and provides a clear separation of concerns.

For more detailed information about ITCSS and its implementation, check out the official ITCSS documentation and resources.

## 
### [Back to README](../README.md)
## 