/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const content = block.children[0];

  [...content.children].forEach((elem) => {
    const image = elem.querySelector('img');
    const header = elem.querySelector('h3');
    const text = elem.querySelector('p:nth-of-type(2)');

    const buttons = elem.getElementsByTagName('a');
    [...buttons].forEach((button) => {
      const buttonContainer = document.createElement('div');
      const buttonIconContainer = document.createElement('span');
      const buttonIcon = document.createElement('i');

      button.className = 'icon-button pointer-cta';
      buttonContainer.innerText = button.innerText;
      button.innerText = '';

      buttonIconContainer.append(buttonIcon);
      buttonContainer.append(buttonIconContainer);
      button.append(buttonContainer);
    });

    const textContainer = document.createElement('div');
    textContainer.className = 'pointer-text-container';
    textContainer.append(header, text, ...buttons);

    const elemContainer = document.createElement('div');
    elemContainer.className = 'pointer-card-container';
    elemContainer.append(image, textContainer);

    content.replaceChild(elemContainer, elem);
  });
}
