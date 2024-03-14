/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const imageCtaWrapper = block.children[0];
  // imageCtaWrapper.className = 'image-cta-wrapper';

  const [textContainer, imageContainer] = imageCtaWrapper.getElementsByTagName('div');
  textContainer.className = 'image-cta-text-container';
  imageContainer.className = 'image-cta-image-container';

  const buttons = textContainer.getElementsByTagName('a');
  const header = textContainer.getElementsByTagName('h2');

  [...buttons].forEach((button) => {
    const buttonContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const buttonIcon = document.createElement('i');

    button.className = 'icon-button image-cta-btn';
    buttonContainer.innerText = button.innerText;
    button.innerText = '';

    buttonIconContainer.append(buttonIcon);
    buttonContainer.append(buttonIconContainer);
    button.append(buttonContainer);
  });

  const textContainerContent = document.createElement('div');
  textContainerContent.append(...header, ...buttons);

  textContainer.replaceChildren(...textContainerContent.children);
}
