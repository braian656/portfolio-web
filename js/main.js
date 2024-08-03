const project = [

	{
		id: 1,
		name: 'Landing Page',
		img: 'img/landing-page.png',
		txt: 'Landing Page, Responsiva con un poco de funcionalidad con JS.',
		technology: `<span><i class="fa-brands fa-html5"></i></span>
						<span><i class="fa-brands fa-css3-alt"></i></span>
							<span><i class="fa-brands fa-js"></i></span>`,
		link: 'landing-page.com',
	},
	{
		id: 2,
		name: 'Simple Blog',
		img: 'img/Blog.png',
		txt: 'Blog con buen diseño, donde podes comentar en los post.',
		technology: `<span><i class="fa-brands fa-html5"></i></span>
						<span><i class="fa-brands fa-css3-alt"></i></span>
							<span><i class="fa-brands fa-js"></i></span>`,
		link: 'blog.com',
	},
	{
		id: 3,
		name: 'Snake Game',
		img: 'img/snake-game.png',
		txt: 'Clasico Snake Game',
		technology: `<span><i class="fa-brands fa-html5"></i></span>
						<span><i class="fa-brands fa-css3-alt"></i></span>
							<span><i class="fa-brands fa-js"></i></span>`,
		link: 'snake.com',
	}

];


const btnToggle = document.querySelector('.btn-toggle');
const menuNav = document.querySelector('.navbar');
const itemNav = document.querySelectorAll('.item a');
const containerProject = document.querySelector('.inner-project');
const txtProject = document.querySelector('.txt-project');
const downloadCv = document.querySelector('.download-cv');
const section = document.querySelector('section');


downloadCv.addEventListener('click', ()=>{
	downloadCv.href = 'CV/Braian-Carranza-CV.pdf';
	downloadCv.download = 'Braian-Carranza-CV.pdf'
})

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

const clean = ()=>{

	 txtProject.innerHTML = '';
}

const addActive = ()=>{
	const cardProject = document.querySelectorAll('.card-project');
	cardProject[1].classList.add('active')
	getCard()
	cardProject.forEach((card)=>{

	card.addEventListener('click',()=>{

		cardProject.forEach((cardActive)=>{
			cardActive.classList.remove('active')
			clean()
		})

		card.classList.add('active')
		getCard()


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
							<h1 class="title-txt">${item.name}</h1>
							<div class="made-with">
								${item.technology}
							</div>
						</div>
					</article>`
	}).join('');

	containerProject.innerHTML = projectItems;

	addActive()
	
}

function getCard(){
	const cards = document.querySelectorAll('.card-project');
	for(let i = 0; i < cards.length; i++){

		

		if(cards[i].classList.contains('active')){
			const h1Project = document.createElement('h1');
			const textProject = document.createElement('p');
			const a = document.createElement('a');


			h1Project.classList.add('title-project');
			h1Project.innerText = project[i].name;

			
			textProject.classList.add('texto');
			textProject.innerText = project[i].txt;

			a.innerHTML = project[i].link
			a.href =  project[i].link

			txtProject.appendChild(a)
			txtProject.appendChild(h1Project);
			txtProject.appendChild(textProject)
		}

		
	}


}


btnToggle.addEventListener('click', ()=>{
	menuNav.classList.toggle('show')
});


itemNav.forEach((item)=>{
	item.addEventListener('click',()=>{
		menuNav.classList.remove('show')
	})

});

