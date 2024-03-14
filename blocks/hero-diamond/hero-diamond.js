/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const imageContainer = block.querySelector(':scope > div div:last-child');
  imageContainer.className = 'hero-diamond-image-container';

  const textContainer = block.querySelector(':scope > div div:first-child');
  textContainer.className = 'hero-diamond-text-container';

  const buttons = textContainer.querySelectorAll('.button-container a');
  const textElements = textContainer.querySelectorAll(':scope>:not(.button-container)');
  [...buttons].forEach((button) => {
    const buttonContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const buttonIcon = document.createElement('i');

    button.className = 'icon-button primary hero-diamond-cta';
    buttonContainer.innerText = button.innerText;
    button.innerText = '';

    buttonIconContainer.append(buttonIcon);
    buttonContainer.append(buttonIconContainer);
    button.append(buttonContainer);
  });
  textContainer.replaceChildren(...textElements, ...buttons);
}
