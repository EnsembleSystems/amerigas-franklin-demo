/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const headerContainer = block.children[0].children[0];
  headerContainer.className = 'getting-started-header-container';

  const contentContainer = block.children[0].children[1];
  contentContainer.className = 'getting-started-content-container';

  const title = contentContainer.querySelector(':scope>p');

  const buttons = contentContainer.getElementsByTagName('a');
  [...buttons].forEach((button) => {
    const buttonContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const buttonIcon = document.createElement('i');

    button.className = 'icon-button getting-started-cta';
    buttonContainer.innerText = button.innerText;
    button.innerText = '';

    buttonIconContainer.append(buttonIcon);
    buttonContainer.append(buttonIconContainer);
    button.append(buttonContainer);
  });

  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'getting-started-button-container';
  buttonWrapper.append(...buttons);

  contentContainer.replaceChildren(title, buttonWrapper);
}
