# ITCSS (Inverted Triangle CSS)

ITCSS stands for Inverted Triangle CSS, which is a methodology for organizing your CSS code in a scalable and maintainable way. It helps to structure your stylesheets based on specificity and maintain a clear separation of concerns. ITCSS follows the concept of an inverted triangle, where the more generic styles are at the top, and the more specific styles are at the bottom.

## Table of Contents

| Section              | Description                                |
|----------------------|--------------------------------------------|
| [01-settings.css](#settings.css)| Global settings and variables              |
| [02-tools.css](#tools)      | Mixins, functions, and utility classes     |
| [03-generic.css](#generic)  | Normalize, resets, and generic styles      |
| [04-elements.css](#elements)| Basic HTML element styles                  |
| [05-objects.css](#objects)  | Layout and design patterns                 |
| [06-components.css](#components)| Reusable UI components                  |
| [07-utilities.css](#utilities)| Helper classes and overrides             |

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

## 
### [Back to README](../README.md)
## 