const sections = Array.from(document.getElementsByTagName('section'));
const title = document.getElementById('title');
const navBarList = document.getElementById("navbar__list");
/**
 * onWindowScroll() sets the active section and active navigation bar link on scroll
 */

function onWindowScroll(){
  //remove active-class from title

  if(elementInViewPort(title)){
    navBarList.childNodes[0].classList.add("navActive");
    document.title.classList.add("your-active-class");    
  }
  else{
    const activeIndex = sections.findIndex(section=> elementInViewPort(section));
    const activeSection = sections[activeIndex];
    const activeLink = navBarList.childNodes[activeIndex+1];
    activeSection.classList.add("your-active-class");
    activeLink.classList.add("navActive");
    }


};
//calls onWindowScroll() when window is scrolled
window.onscroll = onWindowScroll;


//check whether element is in window or not
function elementInViewPort(element){
  const rect = element.getBoundingClintRect();
  if(rect.top>=0 && rect.left>=0 && (rect.right<=window.innerWidth || document.documentElement.innerWidth) && (rect.bottom<=window.innerHeight && document.documentElement.innerHeight)){
   return true; 
  }
}





function renderNav(){
  const homeLink = document.createElement('li');
  homeLink.innerHTML = 'Home';
  homeLink.className = 'Menu';
  homeLink.onclick =  () => scrollTo();
  navbar__list.appendChild(homeLink);
  sections.forEach(section => {
    const newItem = document.createElement('li');
    newItem.innerHTML = section.dataset.nav;
    newItem.className = 'Menu';  
    newItem.onclick = () => newItem.scrollIntoView();
    navbar__list.appendChild(newItem);}
    );


}






renderNav();
onWindowScroll();