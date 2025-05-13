const project = [
	{
		id: 1,
		classBox:"main-project",
		name: 'E-commerce 2',
		img: 'img/e-commer-2.png',
		txt: 'En este proyecto de ecommerce utilicé React como biblioteca principal para construir la interfaz de usuario de forma dinámica y eficiente. Implementé TypeScript para añadir tipado estático y mejorar la escalabilidad y mantenimiento del código. Como backend y base de datos, integré Firebase, lo que me permitió gestionar la autenticación de usuarios, almacenamiento de datos en tiempo real y hosting del proyecto, todo desde una única plataforma.',
		technology: `<div class="content-icon"><img src="./icons/icons-1/tailwindcss.svg" alt="taiwind"></div>
					<div class="content-icon"><img src="./icons/icons-1/react.svg" alt="react"></div>
					<div class="content-icon"><img src="/icons/icons-1/typescript.svg" alt="TS"></div>
					<div class="content-icon"><img src="./icons/icons-1/firebase.svg" alt="firebase"></div>`,
		link: 'https://ecommercewithtsandreact.netlify.app',
	},

	{
		id: 2,
		classBox:"card-project",
		name: 'Landing Page',
		img: 'img/landing-page.webp',
		txt: 'Landing Page, Responsiva con un poco de funcionalidad con JS.',
		technology: `<div class="content-icon"><img src="./icons/icons-1/html5.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/css.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/javascript.svg" alt=""></div>`,
		link: 'https://landingpage121212.netlify.app/',
	},
	{
		id: 3,
		classBox:"card-project",
		name: 'Simple Blog',
		img: 'img/blog.webp',
		txt: 'Blog con buen diseño, donde podes comentar en los post.',
		technology: `<div class="content-icon"><img src="./icons/icons-1/html5.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/css.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/javascript.svg" alt=""></div>`,
		link: 'https://blog121212.netlify.app/',
	},
	{
		id: 4,
		classBox:"card-project",
		name: 'Snake Game',
		img: 'img/snake-game.webp',
		txt: 'Clasico Snake Game hecho con JS',
		technology: `<div class="content-icon"><img src="./icons/icons-1/html5.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/css.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/javascript.svg" alt=""></div>`,
		link: 'https://snakegame121212.netlify.app/',
	},
	{
		id: 5,
		classBox:"card-project",
		name: 'E-commerce',
		img: 'img/e-commerce.png',
		txt: 'E-commerce, con funcionalidades de registros',
		technology: `<div class="content-icon"><img src="./icons/icons-1/react.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/tailwindcss.svg" alt=""></div>`,
		link: 'https://e-comm-react-project.netlify.app/',
	},
	{
		id: 6,
		classBox:"card-project",
		name: 'Sencillo turnero',
		img: 'img/turnero-sencillo.png',
		txt: 'Solicitar un servicio de manera sencilla',
		technology: `<div class="content-icon"><img src="./icons/icons-1/html5.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/css.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/react.svg" alt=""></div>`,
		link: '-',
	},
	{
		id: 7,
		classBox:"card-project",
		name: 'Cart Game',
		img: 'img/cartGame.png',
		txt: 'Mini Juego de autos, contador, colision,etc',
		technology: `<div class="content-icon"><img src="./icons/icons-1/html5.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/css.svg" alt=""></div>
					<div class="content-icon"><img src="./icons/icons-1/javascript.svg" alt=""></div>`,
		link: 'https://cart-game-js.netlify.app/',
	},
	

];

const navBarContainer = document.querySelector('.container-navbar')
const btnToggle = document.querySelector('.btn-toggle');
const menuNav = document.querySelector('.navbar');
const itemNav = document.querySelectorAll('.item a');
const containerProject = document.querySelector('.inner-project');
const txtProject = document.querySelector('.txt-project');
const downloadCv = document.getElementById('downloadCv');
const section = document.querySelector('section');


itemNav.forEach((link, i)=>{
	if(link.href){
		link.classList.add('active')
	}else{
		link.classList.remove('active')
	}
})



document.addEventListener('DOMContentLoaded', ()=>{
	addProject()
	
})

document.addEventListener('scroll', ()=>{
	const h = window.scrollY
	const hNav = navBarContainer.offsetHeight

	if(hNav < h){
		navBarContainer.style.background = '#151515'
	}else{
		navBarContainer.style.background = 'transparent'
	}
})


const cv = document.getElementById('downloadBtn')
cv.addEventListener('click',()=>{
	createButtonCV()
})

const createButtonCV = ()=>{
	const a = document.createElement('a')
	a.classList.add('download-cv')
	a.href = 'CV/Braian-Carranza-CV2025.pdf';
	a.innerHTML = '';
	a.innerHTML = 'CV'
	a.download = 'Braian-Carranza-CV2025.pdf'
	a.target = '_blank'
	a.click()

	downloadCv.appendChild(a)
}

const clean = ()=>{

	 txtProject.innerHTML = '';
}

const addActive = ()=>{
	const cardProject = document.querySelectorAll('.card-project');
	cardProject[1].classList.add('active')
	// getCard()
	cardProject.forEach((card)=>{

	card.addEventListener('click',()=>{

		cardProject.forEach((cardActive)=>{
			cardActive.classList.remove('active')
			clean()
		})

		card.classList.add('active')

	});
})


}



function addProject(){
	const projectItems = project.map((item)=>{
		return `<article class=${item.classBox}>
						<div class="card-img">
							<img src=${item.img} alt="">
						</div>
						<div class="card-txt">
							
							<div class="card-desc">
								<h1 class="title-txt">${item.name}</h1>
								<div class="made-with">
									${item.technology}
								</div>
							</div>


							<div class="description">
								<p>${item.txt}</p>
								<a 
								class="descr-link" 
								href=${item.link}  
								target="_blank">
								Ver
								</a>
							</div>
						</div>
					</article>`
	}).join('');

	containerProject.innerHTML = projectItems;

	addActive()
	
}
btnToggle.addEventListener('click', ()=>{
	menuNav.classList.toggle('show')
});


itemNav.forEach((item)=>{
	item.addEventListener('click',()=>{
		menuNav.classList.remove('show')
	})

});

