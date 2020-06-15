const sections = Array.from(document.getElementsByTagName('section'));
const title = document.getElementById('title');
const navBarList = document.getElementById("navbar__list");
/**
 * onWindowScroll() sets the active section and active navigation bar link on scroll
 */

function onWindowScroll(){
  title.classList.remove("your-active-class");
  sections.forEach(section =>section.classList.remove("your-active-class"));
  if(elementInViewPort(title)){
    navBarList.childNodes[0].classList.add("navActive");
    title.classList.add("your-active-class");    
  }
  else{
    const activeIndex = sections.findIndex(section=> elementInViewPort(section));
    const activeSection = sections[activeIndex];
    const activeLink = navBarList.childNodes[activeIndex + 1];
    activeSection && activeSection.classList.add("your-active-class");
    activeLink && activeLink.classList.add("navActive");    
    }
};

//check whether element is in window or not
function elementInViewPort(element){
  const rect = element.getBoundingClientRect();
  if(rect.top>=0 && rect.left>=0 && (rect.right<=window.innerWidth || document.documentElement.innerWidth) && (rect.bottom<=window.innerHeight && document.documentElement.innerHeight)){
   return true; 
  }
}
function renderNav(){
  const homeLink = document.createElement('li');
  homeLink.innerHTML = 'Home';
  homeLink.className = 'navLink';
  homeLink.addEventListener('onclick', Scroll = () => homeLink.scrollIntoView());
  navbar__list.appendChild(homeLink);
  sections.forEach(section => {
    const newItem = document.createElement('li');
    newItem.innerHTML = section.dataset.nav;
    newItem.className = 'navLink';  
    newItem.addEventListener('onclick', Scroll = () => homeLink.scrollIntoView())
    navbar__list.appendChild(newItem);}
    );
}

renderNav();
//calls onWindowScroll() when window is scrolled
document.addEventListener('scroll', function(){onWindowScroll();});