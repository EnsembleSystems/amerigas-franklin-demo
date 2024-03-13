/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  [...block.children].forEach((item) => {
    item.className = 'tiles-content-wrapper';
    [...item.children].forEach((elem, i) => {
      elem.className = 'tile-col';

      if (elem.children.length === 1) {
        elem.className = (i % 2 === 0) ? 'tile-col tile-mar-left' : 'tile-col tile-mar-right';
      }

      const buttons = elem.getElementsByTagName('a');
      [...buttons].forEach((button) => {
        const buttonContainer = document.createElement('div');
        const buttonIconContainer = document.createElement('span');
        const buttonIcon = document.createElement('i');

        button.className = 'icon-button tile-cta';
        buttonContainer.innerText = button.innerText;
        button.innerText = '';

        buttonIconContainer.append(buttonIcon);
        buttonContainer.append(buttonIconContainer);
        button.append(buttonContainer);

        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'tile-cta-container';
        buttonWrapper.append(...buttons);

        const oldContainer = elem.querySelector('p.button-container');
        elem.replaceChild(buttonWrapper, oldContainer);
      });
    });
  });
}
