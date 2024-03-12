import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

async function loadDropdown() {
  const dropdownMeta = getMetadata('navigation-dropdown');

  // load footer fragment
  const dropdownPath = dropdownMeta['navigation-dropdown'] || '/navigation-dropdown';
  const fragment = await loadFragment(dropdownPath);

  // decorate footer DOM
  const dropdown = document.createElement('div');
  while (fragment.firstElementChild) dropdown.append(fragment.firstElementChild);
  return dropdown;
}

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const logo = block.querySelector('a');
  const img = logo.querySelector('img');
  img.className = 'logo';

  const linkDivContainer = document.createElement('div');
  linkDivContainer.className = 'navbar-fixed-list-drop-container';
  const list = block.querySelector('ul');
  list.className = 'navbar-fixed-link-list';
  const dropdownMenu = (await loadDropdown()).querySelector('.dropdown-wrapper');
  linkDivContainer.append(list, dropdownMenu);

  const dropdownMask = document.createElement('div');
  dropdownMask.className = 'dropdown-mask ';
  document.body.append(dropdownMask);

  // Click handler for link dropdown
  const linkOnclickHandler = (e) => {
    e.preventDefault();
    const parentBlockContainer = block.parentElement;
    if (e.target.className.includes('clicked-link')) {
      e.target.classList.remove('clicked-link');
      dropdownMask.classList.remove('dropdown-mask-active');
      dropdownMenu.classList.remove('dropdown-active');
      if (!parentBlockContainer.className.includes('sticky')) {
        parentBlockContainer.classList.remove('secondary-colors');
      }
    } else {
      document.querySelector('a[class*="clicked-link"]')?.classList.remove('clicked-link');
      e.target.classList.add('clicked-link');
      dropdownMask.classList.add('dropdown-mask-active');
      parentBlockContainer.classList.add('secondary-colors');

      if (dropdownMenu.className.includes('dropdown-active')) {
        dropdownMenu.classList.remove('dropdown-active');
        setTimeout(() => {
          dropdownMenu.classList.add('dropdown-active');
        }, 100);
      } else {
        dropdownMenu.classList.add('dropdown-active');
      }
    }
  };

  // Click handler for closing dropdown
  const unclickLinkHandler = (e) => {
    const [box] = document.getElementsByClassName('navbar-fixed-link-list');
    if (!box.contains(e.target)) {
      document.querySelector('a[class*="clicked-link"]').classList.remove('clicked-link');
      dropdownMask.classList.remove('dropdown-mask-active');
      dropdownMenu.classList.remove('dropdown-active');
      if (!block.parentElement.className.includes('sticky')) {
        block.parentElement.classList.remove('secondary-colors');
      }
    }
  };
  window.addEventListener('click', unclickLinkHandler);

  const links = list.getElementsByTagName('li');
  [...links].forEach((elem) => {
    const aTag = document.createElement('a');
    aTag.innerText = elem.innerText;
    aTag.classList.add('navbar-fixed-dropdown-link');
    aTag.addEventListener('click', linkOnclickHandler);
    aTag.href = '';
    elem.innerText = '';
    elem.append(aTag);
  });

  // Event Listener for scrolling pass primary navbar
  const navMenuWrapper = block.parentElement;
  const offset = 70;
  const navSroll = () => {
    if (window.scrollY > offset) {
      navMenuWrapper.classList.add('secondary-colors', 'sticky');
    } else if (window.scrollY < offset) {
      if (dropdownMask.className.includes('active')) {
        navMenuWrapper.classList.remove('sticky');
      } else {
        navMenuWrapper.classList.remove('secondary-colors', 'sticky');
      }
    }
  };
  window.addEventListener('scroll', navSroll);

  const navbarContainer = document.createElement('nav');
  navbarContainer.className = 'navbar-fixed-container';
  navbarContainer.append(logo, linkDivContainer);
  block.replaceChildren(navbarContainer);
}
