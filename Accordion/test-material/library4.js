const accordion = document.querySelector(".accordion");
const accordionHeadings = document.getElementsByClassName("accordion__heading");
const accordionPanels = document.getElementsByClassName("accordion__panel");

const panelIdTemplate = "accordion__panel--";
const buttonIdTemplate = "accordion__button--";

function enhanceAccordionPanels() {
  for (let i = 0; i < accordionPanels.length; i++) {
    const panel = accordionPanels[i];
    panel.classList.add("hidden");
    panel.id = `${panelIdTemplate}${i + 1}`;
    panel.setAttribute("aria-labelledby", `${buttonIdTemplate}${i + 1}`);
  }
}

function addAccordionIcon(container) {
  const iconMarkup = `
  <svg class="accordion__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <title>chevron-right</title>
    <path d="M12.95 10.707l0.707-0.707-5.657-5.657-1.414 1.414 4.242 4.243-4.242 4.243 1.414 1.414 4.95-4.95z"></path>
  </svg>
  `;

  container.insertAdjacentHTML("beforeend", iconMarkup);
}

// make the heading interactive by inserting a button into it
function enhanceAccordionHeadings() {
  for (let i = 0; i < accordionHeadings.length; i++) {
    const heading = accordionHeadings[i];
    const button = document.createElement("button");

    button.textContent = heading.textContent;
    heading.textContent = "";

    addAccordionIcon(button);

    button.classList.add("accordion__button");
    button.id = `${buttonIdTemplate}${i + 1}`;

    button.ariaExpanded = "false";
    button.setAttribute("aria-controls", `${panelIdTemplate}${i + 1}`);

    heading.appendChild(button);
  }
}

function toggleAccordionPanel(e) {
  const accordionButton = e.target.closest(".accordion__button");
  // If the event didn't occur on an accordion button, then don't do anything
  if (!accordionButton) return;

  const associatedPanelId = accordionButton.getAttribute("aria-controls");
  const associatedPanel = document.getElementById(associatedPanelId);
  const associatedIcon = accordionButton.querySelector(".accordion__icon");

  associatedPanel.classList.toggle("hidden");
  accordionButton.ariaExpanded =
    accordionButton.ariaExpanded === "true" ? "false" : "true";
  associatedIcon.classList.toggle("accordion__icon--rotated");
}

// Progressively enhance the accordion (make it interactive and maintain accessibility) with JavaScript
function enhanceAccordion() {
  enhanceAccordionHeadings();
  enhanceAccordionPanels();
  accordion.addEventListener("click", toggleAccordionPanel);
}

enhanceAccordion();
/*
Wikipedia example: https://en.m.wikipedia.org/wiki/Accordion
ARIA DesignCourse tutorial: https://www.youtube.com/watch?v=0hqhAIjE_8I
Interactive Elements: https://www.w3.org/TR/2011/WD-html5-20110525/interactive-elements.html
Accordion-Markup: https://www.sarasoueidan.com/blog/accordion-markup/
Accessible Accordion Pattern: https://www.hassellinclusion.com/blog/accessible-accordion-pattern/
A11y Accordion Example: https://examples.hassellinclusion.com/accordion/accessible-accordion-example.html
A11y Accordion Example2: https://www.hassellinclusion.com/blog/accessible-accordions-part-2-using-details-summary/
Progressively enhanced ARIA accordions: https://scottaohara.github.io/a11y_accordions/
Scott Aohara a11y accordion: https://scottaohara.github.io/a11y_accordions/
w3 Accordion Example: https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
Sitepoint Accessible Accordion Widget: https://www.sitepoint.com/introducing-accessible-accordion-widget/
Inclusive Components Design: https://inclusive-components.design/collapsible-sections/
UI Components: https://github.com/Ayon95/ui-components/blob/master/accordion/index.js
Oddmeter coffee: https://www.oddmetercoffee.com/
Userway.org: https://userway.org/get/?utm_medium=widget_footer&utm_campaign=how_it_works&utm_source=Oddmetercoffee
CSS-Only Accordion: https://codepen.io/dcode-software/pen/oNjXqzg
https://www.youtube.com/watch?v=dr8Emho-kYo
https://elad.medium.com/becoming-a-css-grid-ninja-f4c6db018cc1
https://www.youtube.com/watch?v=dr8Emho-kYo
*/
