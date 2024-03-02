const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", this.window.scrollY > 0);
});

// NAVLIST SMOOTH
document.addEventListener("DOMContentLoaded", function () {
	const links = document.querySelectorAll('a[href^="#"]');
	
	links.forEach(link => {
	  link.addEventListener('click', function (e) {
		e.preventDefault();
  
		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);
  
		window.scrollTo({
		  top: targetElement.offsetTop,
		  behavior: 'smooth'
		});
	  });
	});
  });

  let menu = document.querySelector('#menu-icon');
  let navlist = document.querySelector('.navlist');
  
  menu.onclick = () => {
	  menu.classList.toggle('bx-x');
	  navlist.classList.toggle('open');
  };
  
  window.onscroll = () => {
	  menu.classList.remove('bx-x');
	  navlist.classList.remove('open');
  };

  const sr = ScrollReveal({
	distance: '30px',
	duration: 2600,
	reset: true
  })

  sr.reveal('.home-text', {delay:280, origin:'bottom'})

  sr.reveal('.featured, .cta, .new, .brand, .contact', {delay:100, origin:'bottom'})

  const postActionsControllers = document.querySelectorAll(
	".post-actions-controller"
  );

//   PRODUCT PROMOTION
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
	let containerDimensions = item.getBoundingClientRect();
	let containerWidth = containerDimensions.width;

	nxtBtn[i].addEventListener('click', () => {
		item.scrollLeft += containerWidth;
	})

	preBtn[i].addEventListener('click', () => {
		item.scrollLeft -= containerWidth;
	})
})