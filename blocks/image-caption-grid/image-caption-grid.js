/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  [...block.children].forEach((elem) => {
    elem.className = 'image-caption-row';

    const [col1, col2] = elem.getElementsByTagName('div');
    col1.classList.add('image-caption-col-pr');
    col2.classList.add('image-caption-col-pl');

    if (col1.getElementsByTagName('img').length > 0) {
      col1.classList.add('image-caption-image');
      col2.classList.add('image-caption-text');
    } else {
      col2.classList.add('image-caption-image');
      col1.classList.add('image-caption-text');
    }

    const [textDiv] = elem.getElementsByClassName('image-caption-text');
    if (textDiv.getElementsByTagName('p').length <= 1) {
      textDiv.classList.add('image-caption-text-single');
    }

    const details = document.createElement('div');
    const textElements = textDiv.querySelectorAll(':scope > *:not(.button-container)');
    details.append(...textElements);

    const buttonPContainer = elem.querySelector('.button-container');
    const buttons = buttonPContainer?.children;
    if (buttons) {
      [...buttons].forEach((button) => {
        const buttonContainer = document.createElement('div');
        const buttonIconContainer = document.createElement('span');
        const buttonIcon = document.createElement('i');

        button.className = 'icon-button caption-cta';
        buttonContainer.innerText = button.innerText;
        button.innerText = '';

        buttonIconContainer.append(buttonIcon);
        buttonContainer.append(buttonIconContainer);
        button.append(buttonContainer);
      });
    }

    textDiv.replaceChildren(details);

    if (buttons) {
      textDiv.append(...buttons);
    }
  });
}
