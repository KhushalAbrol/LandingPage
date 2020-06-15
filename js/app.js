const sections = Array.from(document.getElementsByTagName('section'));
const title = document.getElementById('title');
const navBarList = document.getElementById("navbar__list");
/**
 * onWindowScroll() sets the active section and active navigation bar link on scroll
 */
function scrollOnClick(element){
  $('html,body').animate({scrollTop: target ? target.offset().top : 0}, 'slow');
}


function onWindowScroll(){
  title.classList.remove("your-active-class");
  sections.forEach(section =>section.classList.remove("your-active-class"));  
  //document.getElementsByClassName("navLink").classList.remove('navActive');
  if(elementInViewPort(title)){
    navBarList.childNodes[0].classList.add("navActive");
    title.classList.add("your-active-class");    
  }
  else{
    const activeIndex = sections.findIndex(section => isElementInViewport(section.childNodes[1].childNodes[1]));
    const activeSection = sections[activeIndex];
    const activeLink = navbarList.childNodes[activeIndex + 1];
    activeSection && activeSection.classList.add('section-active');
    activeLink && activeLink.classList.add('navbar-active');
    navbarList.childNodes.forEach((navLink, index) =>
      index !== (activeIndex + 1) && navLink.classList.remove('navbar-active'));
  }}
;

/**
 * Checks if the element is inside the viewport.
 *
 * @param element: HTML element to check
 * @returns {boolean}
 */function elementInViewPort(element){
  const rect = element.getBoundingClientRect();
  if(rect.top>=0 && (rect.bottom<=window.innerHeight || document.documentElement.innerHeight)){
   return true; 
  };
};

window.onscroll = onWindowScroll;
function renderNav(){
  const homeLink = document.createElement('li');
  homeLink.innerHTML = 'Home';
  homeLink.className = 'navLink';
  homeLink.onclick= () => scrollOnClick(`#title`);
  navbar__list.appendChild(homeLink);
  sections.forEach(section => {
    const newItem = document.createElement('li');
    newItem.innerHTML = section.dataset.nav;
    newItem.className = 'navLink';  
    newItem.onclick= () => scrollOnClick(`#${section.id}`);
    navbar__list.appendChild(newItem);}
    );
}

renderNav();
//calls onWindowScroll() when window is scrolled
onWindowScroll();