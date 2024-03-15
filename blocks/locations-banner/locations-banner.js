/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const buttons = block.getElementsByTagName('a');
  const [ptag] = block.getElementsByTagName('p');
  [...buttons].forEach((button) => {
    const buttonContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const buttonIcon = document.createElement('i');

    button.className = 'icon-button location-banner-cta';
    buttonContainer.innerText = button.innerText;
    button.innerText = '';

    buttonIconContainer.append(buttonIcon);
    buttonContainer.append(buttonIconContainer);
    button.append(buttonContainer);
  });

  block.children[0].replaceChildren(ptag, ...buttons);
}
