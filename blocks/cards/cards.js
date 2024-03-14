/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const contentWrapper = block.children[0];
  contentWrapper.className = 'cards-col-container';
  const childCount = contentWrapper.children.length;

  [...contentWrapper.children].forEach((elem) => {
    const colDiv = document.createElement('div');
    colDiv.className = `card-wrapper-${childCount}`;

    const card = document.createElement('a');
    card.className = 'card';
    card.href = '/';

    const cardContentContainer = document.createElement('div');
    cardContentContainer.className = 'card-content-container';

    const cardTextContainer = document.createElement('div');

    const image = elem.querySelector('picture');
    const title = elem.querySelector('h3');
    const text = elem.querySelector('p:nth-of-type(2)');

    const buttonLink = elem.querySelector('a');
    const buttonContainer = document.createElement('div');
    const buttonIconContainer = document.createElement('span');
    const buttonIcon = document.createElement('i');

    buttonLink.className = 'icon-button card-cta';
    buttonContainer.innerText = buttonLink.innerText;
    buttonLink.innerText = '';

    buttonIconContainer.append(buttonIcon);
    buttonContainer.append(buttonIconContainer);
    buttonLink.append(buttonContainer);

    cardTextContainer.append(title);

    if (!text.className.includes('button-container')) {
      cardTextContainer.append(text);
    }

    cardContentContainer.append(cardTextContainer, buttonLink);
    card.append(image, cardContentContainer);
    colDiv.append(card);
    contentWrapper.replaceChild(colDiv, elem);
  });
}
