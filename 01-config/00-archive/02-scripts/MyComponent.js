const { defineComponent } = Vue;

// Define your component
const MyComponent = defineComponent({
  template: `
    <div>
      <h2>This is MyComponent</h2>
      <p>{{ subMessage }}</p>
    </div>
  `,
  data() {
    return {
      subMessage: 'Welcome to Vue 3 component!'
    };
  }
});

// Export the component
export default MyComponent;
