/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const onlineServicesContainer = block.children[0].children[0];
  onlineServicesContainer.className = 'online-services-content-container';

  const header = onlineServicesContainer.getElementsByTagName('h2');

  const buttons = onlineServicesContainer.getElementsByTagName('a');
  [...buttons].forEach((button) => {
    const buttonContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const buttonIcon = document.createElement('i');

    button.className = 'icon-button primary online-services-cta';
    buttonContainer.innerText = button.innerText;
    button.innerText = '';

    buttonIconContainer.append(buttonIcon);
    buttonContainer.append(buttonIconContainer);
    button.append(buttonContainer);
  });

  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'online-service-buttons';
  buttonWrapper.append(...buttons);

  onlineServicesContainer.replaceChildren(...header, buttonWrapper);
}
