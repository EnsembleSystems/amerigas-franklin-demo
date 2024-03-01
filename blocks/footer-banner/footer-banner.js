/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const [footerBannerHeader] = block.getElementsByTagName('h2');
  const [footerBannerLink] = block.getElementsByTagName('a');
  const footerBannerButtonContainer = document.createElement('div');
  const footerBannerButtonIconContainer = document.createElement('span');
  const footerBannerButtonIcon = document.createElement('i');

  footerBannerButtonContainer.innerText = footerBannerLink.innerText;
  footerBannerLink.innerText = '';
  footerBannerLink.className = 'icon-button primary';

  footerBannerButtonIconContainer.append(footerBannerButtonIcon);
  footerBannerButtonContainer.append(footerBannerButtonIconContainer);
  footerBannerLink.append(footerBannerButtonContainer);

  block.replaceChildren(footerBannerHeader, footerBannerLink);
}
