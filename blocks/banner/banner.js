/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const [bannerHeader] = block.getElementsByTagName('h2');
  const bannerButtons = block.getElementsByTagName('a');

  const buttonsDiv = document.createElement('div');

  [...bannerButtons].forEach((element) => {
    const ButtonInnerContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const bannerButtonIcon = document.createElement('i');

    ButtonInnerContainer.innerText = element.innerText;
    element.innerText = '';
    element.className = 'icon-button primary';

    buttonIconContainer.append(bannerButtonIcon);
    ButtonInnerContainer.append(buttonIconContainer);
    element.append(ButtonInnerContainer);
  });

  buttonsDiv.append(...bannerButtons);
  buttonsDiv.className = 'banner-buttons-container';

  block.replaceChildren(bannerHeader, buttonsDiv);
}
