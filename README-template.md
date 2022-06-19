# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Links



## My process

1. I created graph container (.spending-chart) with fixed height.
2. I used async/await to fetch data from provided .json file.
3. Function renderGraph is inserting HTML with height property and with data attributes for every graph bar.
  - For setting height I had to found the highest value of spendings
  - Object with heighest value of spending have 100% height of container.
  - Every bar height is calculated by this formula - (amount / max amount) * 100%
  - I used data attributes (data-amount and data-day) to store values for each graph bar. Then I used css pseudo elements (::before, ::after) to display those values in app.
4. Function markCurrentDay is adding class with different color to bar corresponding with current day.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS


### What I learned

I had oportunity to use data attribute in real project. I've learned how to diplay data attributes in css pseudo elements. To my mind its very useful especially in all graph realeted funcionalities.


```css
.spending-bar:hover::before {
    content: attr(data-amount);
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    transform: translateY(-3.3rem) translateX(-.8rem);
    background-color: var(--clr-dark-brown);
    color: var(--clr-background);
    padding: .6rem;
    border-radius: 5px;
}

.spending-bar::after {
    font-size: 1rem;
    color: var(--clr-medium-brown);
    font-weight: 400;
    content: attr(data-day);
    position: absolute;
    bottom: 0;
    transform: translateY(1.8rem) translateX(.8rem);
}
```
```js
const renderGraph = async () => {
    const graphData = await fetchData();
    const maxAmount = Math.max(...(graphData.map(data => data.amount)));
    graphData.forEach(data => {
    const graph = chartEl.innerHTML += `<div class="spending-bar" style="height:${(data.amount / maxAmount) * 100}%" data-amount="$${data.amount}" data-day="${data.day}"></div>`
    })
    markCurrentDay();
}
```

### Continued development

I want to add graph animations to this project.

### Useful resources

- (https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - This helped me to use data attribute. I really liked this solution and i will use this in my future projects.
- (https://codepen.io/felquis/pen/JjMEEG)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@userMatMik](https://www.frontendmentor.io/profile/userMatMik)


