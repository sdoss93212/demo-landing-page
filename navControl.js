const navSlide = () => {
	
	const lines = document.querySelector('.threeLines');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	lines.addEventListener('click',()=>{
		//Navbar Appearing
		nav.classList.toggle('nav-active');
		//Links appearing with animation
		navLinks.forEach((link,index) => {
		if(link.style.animation){
			link.style.animation =''
		} else{
			link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
		}
		});
		//3lines to X
		lines.classList.toggle('toggle')
		
	
	});
	
	
}

navSlide();