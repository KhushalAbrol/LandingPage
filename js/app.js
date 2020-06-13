const sections = Array.from(document.getElementsByTagName('section'));
const title = document.getElementById('title');
const navBarList = document.getElementById("navbar__list");
/**
 * jQuery Scroll to element
 * @param target: jQuery selector
 */
function scrollTo(target){
  $('html,body').animate({ scrollTop:target ? target.offset().top : 0 },'fast');
}
/**
 * Function called on each scroll event.
 * It checks for the elements in viewport and sets active classes accordingly.
 */
function OnScroll(){
  sections.forEach(section => section.classList.remove('navActive'));
  if(elementInViewPort(title)){
    navBarList.childNodes[0].classList.add('navActive');
  }
  else{
    const activeIndex = sections.findIndex(section => elementInViewPort(section.childNodes[1]));
    const activeSection = sections[activeIndex];
    const activeNavItem = navBarList.childNodes[activeIndex+1];//+1 because of an addetional home Item present
    //activeSection.classList.add("sectionActive");
    activeNavItem.classList.add("navActive");

  }

};

window.onscroll = OnScroll;



function elementInViewPort(element){
  const position = element.getBoundingClientRect();
  return(  position.top >=0 &&
  position.left >=0 &&
  position.bottom <=(window.innerHeight) &&
  position.right <=(window.innerWidth)
);

};


function renderNav(){
  const homeLink = document.createElement('li');
  homeLink.innerHTML = 'Home';
  homeLink.className = 'Menu';
  homeLink.onclick =  () => scrollTo();
  navbar__list.appendChild(homeLink);
  sections.forEach(section => {
    const newLine = document.createElement('li');
    newLine.innerHTML = section.dataset.nav;
    newLine.className = 'Menu';  
    newLine.onclick = () => scrollTo($(`#${section.id}`));
    navbar__list.appendChild(newLine);}
    );


}






renderNav();
OnScroll();