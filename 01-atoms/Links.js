// * 01-atoms/Links.js

app.component("links", {
  props: ["href", "icons"],
  template: `
    <a :href="href" target="_blank" class="link link--icon">
        <i :class="icons"></i>
    </a>
`,
});