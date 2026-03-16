# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/assets/images/screenshots/acc6.png)


### Links

- Solution URL: (https://github.com/jacey10/fm-FAQ-accordion-challenge)
- Live Site URL: (https://jacey10.github.io/fm-FAQ-accordion-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Event-driven architecture
- Attribute-driven state
- Separation of concerns


### What I learned

- I learned that getAttribute always returns a string, never a boolean.
- I learned how to convert a string to a boolean using strict comparison operator ===
- I learned that the hidden property is a boolean toggle.
- Attribute-driven state: I learned how to read state directly from the DOM via aria-expanded. The DOM being a single source of truth.
- CSS reacting to aria state: I learned how to use attribute selectors, e.g. button[aria-expanded="true] as a CSS selector, to toggle the plus and minus svg icon.

```css
button[aria-expanded="true"] .icon--minus {
  display: block;
}

button[aria-expanded="true"] .icon--plus {
  display: none;
}
```

- I learne how to handle ARIA and visibilty together even though they are independent.
- I learned how to use aria-expanded for communicating state to screen readers.
- I learned how to use aria-controls to link a button to its answer div or panel.

```html
<div class="faq">
  <button id="faq-btn-2" aria-expanded="false" aria-controls="faq-2" class="accordion--btn"><span class="title">Is Frontend Mentor free?</span>
    <img src="assets/icons/icon-plus.svg" alt="" aria-hidden="true" class="icon--plus">
    <img src="assets/icons/icon-minus.svg" alt="" aria-hidden="true" class="icon--minus">
  </button>
  
  <div id="faq-2" role="region" aria-labelledby="faq-btn-2" hidden>
    <p class="ans">Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
  </div>
</div>
```
- I learned how to read state before acting on it (snapshot timing)

```js
const expanded = button.getAttribute('aria-expanded') === 'true';
```
- I learned the importance of ordering of operations in toggle logic.

### Continued development

- Accessibility is a lot to cover or understand all at once. So, my plan is to commit to making accessibility a core part of my development process, creating websites that are not only compliant with accessibility standards but also provide a better user experience for everyone.

### Useful resources

- Claude (LLM) for clarifications.

## Author

- Website - [Jacey Blog](https://www.jacey.hashnode.dev/)
- Frontend Mentor - [@jacey10](https://www.frontendmentor.io/profile/jacey10)
- Twitter - [@jacey_muna](https://x.com/jacey_muna)
