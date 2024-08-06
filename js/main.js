const project = [

	{
		id: 1,
		name: 'Landing Page',
		img: 'img/landing-page.webp',
		txt: 'Landing Page, Responsiva con un poco de funcionalidad con JS.',
		technology: `<span><i class="fa-brands fa-html5"></i></span>
						<span><i class="fa-brands fa-css3-alt"></i></span>
							<span><i class="fa-brands fa-js"></i></span>`,
		link: 'https://landingpage121212.netlify.app/',
	},
	{
		id: 2,
		name: 'Simple Blog',
		img: 'img/blog.webp',
		txt: 'Blog con buen diseño, donde podes comentar en los post.',
		technology: `<span><i class="fa-brands fa-html5"></i></span>
						<span><i class="fa-brands fa-css3-alt"></i></span>
							<span><i class="fa-brands fa-js"></i></span>`,
		link: 'https://blog121212.netlify.app/',
	},
	{
		id: 3,
		name: 'Snake Game',
		img: 'img/snake-game.webp',
		txt: 'Snake game con clasico hecho con javascript',
		technology: `<span><i class="fa-brands fa-html5"></i></span>
						<span><i class="fa-brands fa-css3-alt"></i></span>
							<span><i class="fa-brands fa-js"></i></span>`,
		link: 'https://snakegame121212.netlify.app/',
	}

];


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


const cv = document.getElementById('downloadBtn')
cv.addEventListener('click',()=>{
	createButtonCV()
})

const createButtonCV = ()=>{
	const a = document.createElement('a')
	a.classList.add('download-cv')
	a.href = 'CV/Braian-Carranza-CV.pdf';
	a.innerHTML = '';
	a.innerHTML = 'CV'
	a.download = 'Braian-Carranza-CV.pdf'
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
		return `<article class="card-project">
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
								<a class="descr-link" href=${item.link}  target="_blank">see project</a>
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

