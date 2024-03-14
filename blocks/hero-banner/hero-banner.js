/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const heroContentContainer = block.children[0];
  heroContentContainer.className = 'hero-banner-content-container';

  const detailsSection = document.createElement('div');
  detailsSection.className = 'hero-banner-content-details';

  const [breadcrumb] = heroContentContainer.getElementsByTagName('ul');
  breadcrumb.className = 'hero-banner-breadcrumb';
  const arrow = document.createElement('i');
  breadcrumb.children[0].insertBefore(arrow, breadcrumb.children[breadcrumb.children.length]);
  const [detailsHeader] = heroContentContainer.getElementsByTagName('h2');
  const [detailsText] = heroContentContainer.getElementsByTagName('p');

  const buttons = heroContentContainer.querySelector('.button-container').children;

  [...buttons].forEach((button) => {
    const buttonContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const buttonIcon = document.createElement('i');

    button.className = 'icon-button primary hero-banner-cta';
    buttonContainer.innerText = button.innerText;
    button.innerText = '';

    buttonIconContainer.append(buttonIcon);
    buttonContainer.append(buttonIconContainer);
    button.append(buttonContainer);
  });

  detailsSection.append(breadcrumb, detailsHeader, detailsText, ...buttons);

  heroContentContainer.replaceChildren(detailsSection);
}
