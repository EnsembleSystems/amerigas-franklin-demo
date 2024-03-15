/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const icons = block.getElementsByTagName('a');
  const logo = block.getElementsByTagName('picture');
  const subtext = [...block.getElementsByTagName('p')]
    .filter((elem) => elem.textContent.length > 0 && elem.children.length < 1);

  const iconsContainer = document.createElement('div');
  iconsContainer.append(...icons);
  iconsContainer.className = 'footer-socials-icons-container';

  const logoContainer = document.createElement('div');
  logoContainer.append(...logo);
  logoContainer.className = 'footer-socials-logo-container';

  const textContainer = document.createElement('div');
  textContainer.append(...subtext);
  textContainer.className = 'footer-socials-text-container';

  block.children[0].classList.add('footer-socials-content');
  block.children[0].replaceChildren(logoContainer, textContainer, iconsContainer);

  const route = window.location.href;
  if ((route.includes('about-propane') || (route.includes('home-propane-tanks')))) {
    iconsContainer.classList.add('footer-socials-invisible');
  }
}
