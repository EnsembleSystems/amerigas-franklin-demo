/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  block.parentElement.className = 'dropdown-wrapper';

  const linksWithSubsection = [
    'Propane Tank Sizes',
    'For Your Home',
    'Converting to Propane',
    'Propane Safety',
    'More Propane Safety',
  ];

  const linkList = block.querySelector('ul');
  linkList.className = 'dropdown-links-container';
  [...linkList.children].forEach((elem) => {
    const aLink = elem.querySelector('a');
    if (linksWithSubsection.includes(aLink.innerText)) {
      aLink.classList.add('subsection-arrow');
    }
  });

  const details = block.querySelector(':scope > div > div:nth-child(2)');
  details.className = 'dropdown-figure-container';

  const [pic] = details.getElementsByTagName('picture');
  const [header] = details.getElementsByTagName('h2');
  const text = details.querySelector('p:nth-of-type(2)');
  const textContainer = document.createElement('div');
  textContainer.append(header, text);

  details.replaceChildren(pic, textContainer);

  block.children[0].replaceChildren(linkList, details);
}
