/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const content = block.children[0];

  [...content.children].forEach((elem) => {
    const image = elem.querySelector('img');
    const header = elem.querySelector('h3');
    const text = elem.querySelector('p:last-of-type');

    const textContainer = document.createElement('div');
    textContainer.className = 'pointer-text-container';
    textContainer.append(header, text);

    const elemContainer = document.createElement('div');
    elemContainer.className = 'pointer-card-container';
    elemContainer.append(image, textContainer);

    content.replaceChild(elemContainer, elem);
  });
}
