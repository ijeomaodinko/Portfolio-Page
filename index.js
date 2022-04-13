const bars = document.getElementById('pop');
const closeMenu = document.querySelector('.close');
const popUp = document.querySelector('.up-menu');

bars.addEventListener('click', () => {
  popUp.classList.add('pop-up');
});

popUp.addEventListener('click', () => {
  popUp.classList.remove('pop-up');
});

closeMenu.addEventListener('click', () => {
  popUp.style.display = 'none';
});

// to manupulate the cards in portfolio-page

const listCards = document.querySelectorAll(".sectiontemplate");
const projectCards = [

{
id: 1,
img1: './img/Portfolio1.svg',
imgd1: './img/DesktopPortfolio1.svg',
title: 'Facebook 360',
list1: ['Canopy', 'Back End Dev', '2015'],
description2 : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
list2: ['html', 'css', 'javaScript'],
btn: 'See Project',
live: 'https://ijeomaodinko.github.io/Portifolio-page/',
source: 'https://github.com/ijeomaodinko/Portifolio-page',
},

{
id: 2,
img1: './img/Portfolio2.svg',
imgd1: './img/DesktopPortfolio2.svg',
title: 'Uber Navigation',
list1: ['Canopy', 'Back End Dev', '2015'],
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
list2: ['html', 'css', 'javaScript'],
btn: 'See Project',
live: 'https://ijeomaodinko.github.io/Portifolio-page/',
source: 'https://github.com/ijeomaodinko/Portifolio-page',
},

{
id: 3,
img1: './img/Portfolio3.svg',
imgd1: './img/DesktopPortfolio3.svg',
title: 'Tonic',
list1: ['Canopy', 'Back End Dev', '2015'],
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
list2: ['html', 'css', 'javaScript'],
btn: 'See Project',
live: 'https://ijeomaodinko.github.io/Portifolio-page/',
source: 'https://github.com/ijeomaodinko/Portifolio-page',
},

{
id: 4,
img1: './img/Portfolio4.svg',
imgd1: './img/DesktopPortfolio4.svg',
title: 'Multi-Post Stories',
list1: "['Canopy', 'Back End Dev', '2015']",
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
list2: ['html', 'css', 'javaScript'],
btn: 'See Project',
live: 'https://ijeomaodinko.github.io/Portifolio-page/',
source: 'https://github.com/ijeoma/Portifolio-page',
},
]


const portfolioCards = projectCards.map((sectiontemplate, index) =>  `

<section class="sectiontemplate">
<img class="img1" src="${sectiontemplate.img1}" alt="Tanner Christerner" />
<img class="imgd1" src="${sectiontemplate.imgd1}" alt="Tanner Christerner" />
<div class="Section2Text">
  <h2 class="face">${sectiontemplate.title}</h2>
  <ul class="list1">
    <li class="can">Canopy</li>
    <li class="special">Back End Dev</li>
    <li class="special">2015</li>
  </ul>
  <p class= 'description'>${sectiontemplate.description}
  </p>
  <ul class="list2">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
  </ul>
  <button class="btn" onclick="openPopup(${sectiontemplate.id})">See project</button>
</div>
</section>

`).join('');
const projectcardsbox = document.getElementById("projectcards")
projectcardsbox.innerHTML += portfolioCards

const openWindow =document.getElementById('modal-box');

function popUpCard(card) {
    let temp = document.createElement('template');
    temp.innerHTML=`
    // <!--pop-up for the mobile portfolio starts-->
    <div id="mymodal" class="modal">
      <section class="sectiontemplatepop-up">
        <div class="Sectionpop-up">
            <div class="popclose">
            <p class="h1m">Tonic</p>
            <span id="closepop">&times;</span>
            </div> </br>
            <ul class="list1">
              <li class="can">Canopy</li>
              <li class="special">Back End Dev</li>
              <li class="special">2015</li>
            </ul>
            <div class="desktoptech">
        <img class="imgm1"  src="${card.img1}" alt="Natural Tonic" />
        <img class="imgdm1" src="${card.imgd1}" alt="Natural Tonic" />
        <div class="textpop">
        <p class="pop-uptext">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p class="pop-uptexti">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div class=listm>
          <ul class="list2">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
          <ul class="listo">
            <li>github</li>
            <li>rail</li>
            <li>bootstrape</li>
          </ul>
          </div>
          <img class="imgproject1" src="./img/Devider.svg" alt="Line" />
          <div class="modalproject">
          <div class="project1">
               <p class="seeprojecti"> See Live</p>  
                <img class="imgproject" src="./img/Icon.svg" alt="See Live" />
          </div>
            <div class="project2">
               <p class="seeproject"> See Source</p> 
              <img class="imgprojecti" src="img/Vector.svg" alt="See Source" />
            </div>
        </div>
        </div>
          </div>
      </section>
      <div>
      `;

      const box = document.getElementById('modal-box');
      box.appendChild(temp.content);

    const closeWindow = document.getElementById('closepop');
    closeWindow.addEventListener('click', () => {
      openWindow.style.display = 'none';
    });
  }

function openPopup(id){
projectCards.find((card) => {
    if(Number(id) === Number(card.id))
    popUpCard(card);
    // document.querySelector('.sectiontemplatepop-up').classList.add('show-pop-up')
})
}

// function popData(card) {
//   const temp = document.createElement('template');
//   temp.innerHTML = ` `

// const closePop = document.getElementById(close);
// closePop.addEventListener('click', () => {
//   box.style.display = 'none';
//   }); 

// const cancelPop =document.getElementById("closepop");
// cancelPop.addEventListener("click", cancelPopOut);
// function cancelPopOut(e){
//   e.preventDefault();
//   document.querySelector("modal").style.display="none"
// // }

// const cancelPop = document.querySelector('.closepop');
// cancelPop.addEventListener ('click', () => {
//   mymodal.style.display ='none'
// })
