function fun1(){console.log('hello');
}


function fun2(a,b){return(a+b);}
const result= fun2(1,3);  
console.log(result);

const fun3 = function(a,b) { return a+b;};
fun3=(1,3)



const fun4 = function fun5(a,b){console.log()

}


/**  - - - - - - - - - - - - - - - - - - -- -   */
// Selecting elements in the HTML document:
const hamburger = document.querySelector('.hamburger');



//console.log(hamburger); // to see what is in the variable: hamburger
const navMenu = document.querySelector('.nav-menu');

const navLink = document.querySelectorAll('.nav-link');
console.log(navLink);

// Listening for a click event on the hamburger button:
hamburger.addEventListener('click', mobileMenu);

// Eventlistener for all navLinks:
navLink.forEach(n => n.addEventListener('click',closeMenu));

// When the hamburger button is clicked
function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// When a menu-item is clicked - the active classes are removed from hamburger and navMenu
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}