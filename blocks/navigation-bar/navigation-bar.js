/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // Main navigation links
  const [primaryLinkSection, secondaryLinkSection] = block.children[0].getElementsByTagName('div');
  const navLinks = primaryLinkSection.getElementsByTagName('a');
  const linkContainer = document.createElement('div');
  linkContainer.className = 'navbar-primary-links';
  linkContainer.append(...navLinks);

  // Setup Mask for navbar - Triangle indicator for active link
  const navMaskContainer = document.createElement('div');
  navMaskContainer.innerHTML = `<svg class="navbar-pointer-mask">
    <defs>
      <mask id="mask" x="0" y="0">
          <rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect>
          <g x="0" y="200" transform="translate(247.5,55)" class="pointer">
              <path d="M 47.5,5 90,47.5 5,47.5 z" fill="#000"></path>
          </g>
      </mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="#fff" 
      fill-opacity="1" class="master-rect"></rect>
    <g x="0" y="200" transform="translate(247.5,55)" class="pointer">
        <path d="M 47.5,5 90,47.5 5,47.5 z" fill="#bb0202" opacity="0" class="solid-pointer"></path>
    </g>
  </svg>`;

  const adjustNavmask = () => {
    const pointerMask = block.querySelector('.navbar-pointer-mask .pointer');
    const activeTab = block.querySelector('.navbar-primary-links>:first-child');
    const x = activeTab.getBoundingClientRect().left + activeTab.offsetWidth / 2
      - (pointerMask.getBoundingClientRect().width / 2);
    pointerMask.style.transform = `translate(${x}px,55px)`;
  };

  // Adjusts inital poiner position after navtabs are layed out
  window.requestAnimationFrame(() => {
    adjustNavmask();
  });

  // Event listener to adjust svg pointer position when screen size changes
  window.addEventListener('resize', () => {
    adjustNavmask();
  });

  // Secondary links and buttons
  const secondaryLinks = secondaryLinkSection.getElementsByTagName('a');
  const searchIcon = secondaryLinkSection.querySelector('div > p span');
  searchIcon.className = 'search-btn';
  const buttons = secondaryLinkSection.querySelectorAll('div > p a');
  buttons.forEach((elem) => {
    if (elem.className === ('button')) {
      const buttonContainer = document.createElement('div');
      buttonContainer.innerText = elem.innerText;

      elem.innerText = '';
      elem.className = 'icon-button';

      const iconContainer = document.createElement('span');
      const icon = document.createElement('i');
      iconContainer.append(icon);

      buttonContainer.append(iconContainer);
      elem.append(buttonContainer);
    } else {
      elem.className = 'navbar-login-btn';
    }
    elem.classList.add('navbar-btn');
  });

  const secondaryLinksContainer = document.createElement('div');
  secondaryLinksContainer.className = 'navbar-secondary-links';
  secondaryLinksContainer.append(...secondaryLinks, ...buttons, searchIcon);
  block.children[0].replaceChildren(linkContainer, secondaryLinksContainer);
  block.append(navMaskContainer.firstChild);
}
