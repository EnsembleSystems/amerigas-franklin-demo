/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const container = block.children[0];
  container.className = 'customer-links-content';

  const columns = container.getElementsByTagName('div');

  [...columns].forEach((col) => {
    [...col.children].forEach((elem) => {
      if (elem.className.includes('button')) {
        const [link] = elem.getElementsByTagName('a');
        link.className = '';
        col.replaceChild(link, elem);
      }
    });

    if (col.querySelectorAll('a').length === col.children.length) {
      col.className = 'customer-links-all-links-col';
    }
  });
}
