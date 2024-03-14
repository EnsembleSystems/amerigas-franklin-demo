/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const heroContentContainer = block.children[0];
  heroContentContainer.className = 'hero-content-container';

  const detailsSection = document.createElement('div');
  detailsSection.className = 'hero-content-details';

  const imageSection = document.createElement('div');
  imageSection.className = 'hero-content-image';

  const [detailsHeader] = heroContentContainer.getElementsByTagName('h2');
  const [detailsText] = heroContentContainer.getElementsByTagName('p');
  const images = heroContentContainer.getElementsByTagName('picture');
  const detailButtons = heroContentContainer.getElementsByTagName('a');

  [...detailButtons].forEach((button) => {
    const buttonContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const buttonIcon = document.createElement('i');

    button.className = 'icon-button hero-btn';
    buttonContainer.innerText = button.innerText;
    button.innerText = '';

    buttonIconContainer.append(buttonIcon);
    buttonContainer.append(buttonIconContainer);
    button.append(buttonContainer);
  });

  detailsSection.append(detailsHeader, detailsText, ...detailButtons);
  imageSection.append(...images);

  heroContentContainer.replaceChildren(detailsSection, imageSection);
}
