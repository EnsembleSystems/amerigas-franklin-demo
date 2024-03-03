/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  block.children[0].classList.add('footer-links-content');

  const sections = block.children[0].getElementsByTagName('div');
  [...sections].forEach((elem) => {
    const header = elem.getElementsByTagName('h1');
    const linkContainer = document.createElement('div');

    const links = elem.querySelectorAll('li a');
    [...links].forEach((link) => {
      if (link?.nextSibling?.className.includes('icon-download-icon')) {
        link.classList.add('link-download-icon');
      }
    });

    const buttons = elem.querySelectorAll('a[class*="button"]');
    buttons.forEach((button) => {
      const buttonContainer = document.createElement('div');
      const buttonIconContainer = document.createElement('span');
      const buttonIcon = document.createElement('i');

      button.className = 'icon-button';
      buttonContainer.innerText = button.innerText;
      button.innerText = '';

      buttonIconContainer.append(buttonIcon);
      buttonContainer.append(buttonIconContainer);
      button.append(buttonContainer);
    });

    linkContainer.append(...links);
    linkContainer.append(...buttons);
    linkContainer.className = 'footer-links-container';
    elem.replaceChildren(...header, linkContainer);
  });
}
