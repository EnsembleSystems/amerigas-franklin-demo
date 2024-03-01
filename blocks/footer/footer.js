import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // Find all 3 footer sections
  // const [footerBanner, footerLinks, footerSocials] = footer.getElementsByClassName('section');
  // footerBanner.classList.add('footer-banner-section');
  // footerLinks.classList.add('footer-links-section');
  // footerSocials.classList.add('footer-socials-section');

  // Footer link section
  // const sections = [];
  // [...footerLinks.children[0].children].forEach((elem) => {
  //   if (elem.nodeName === 'H1') {
  //     const section = document.createElement('section');
  //     section.append(elem);
  //     sections.push(section);
  //   } else if (elem.nodeName === 'UL') {
  //     const links = elem.getElementsByTagName('a');

  //     [...links].forEach((link) => {
  //       if (link.href.includes('.pdf')) {
  //         link.classList.add('link-download-icon');
  //       }
  //     });

  //     const linksContainer = document.createElement('div');
  //     linksContainer.classList.add('footer-links-container');
  //     linksContainer.append(...links);
  //     sections[sections.length - 1].append(linksContainer);
  //   } else {
  //     const [button] = elem.getElementsByTagName('a');
  //     const buttonContainer = document.createElement('div');
  //     const buttonIconContainer = document.createElement('span');
  //     const buttonIcon = document.createElement('i');

  //     button.className = 'btn-secondary';
  //     buttonContainer.innerText = button.innerText;
  //     button.innerText = '';

  //     buttonIconContainer.append(buttonIcon);
  //     buttonContainer.append(buttonIconContainer);
  //     button.append(buttonContainer);

  //     sections[sections.length - 1].append(button);
  //   }
  // });
  // footerLinks.children[0].classList.add('footer-links-content');
  // footerLinks.children[0].replaceChildren(...sections);

  // Footer socials section
  // const icons = footerSocials.getElementsByTagName('a');
  // const logo = footerSocials.getElementsByTagName('picture');
  // const subtext = [...footerSocials.getElementsByTagName('p')]
  //   .filter((elem) => elem.textContent.length > 0 && elem.children.length < 1);

  // const iconsContainer = document.createElement('div');
  // iconsContainer.append(...icons);
  // iconsContainer.className = 'footer-socials-icons-container';

  // const logoContainer = document.createElement('div');
  // logoContainer.append(...logo);
  // logoContainer.className = 'footer-socials-logo-container';

  // const textContainer = document.createElement('div');
  // textContainer.append(...subtext);
  // textContainer.className = 'footer-socials-text-container';

  // footerSocials.children[0].classList.add('footer-socials-content');
  // footerSocials.children[0].replaceChildren(logoContainer, textContainer, iconsContainer);

  block.append(footer);
}
