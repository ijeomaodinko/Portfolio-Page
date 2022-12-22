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


const projectCards = [

  {
    id: 1,
    img1: './img/Portfolio1.svg',
    imgd1: './img/DesktopPortfolio1.svg',
    title: 'Facebook 360',
    list1: ['Canopy', 'Back End Dev', '2015'],
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
];

const portfolioCards = projectCards.map((sectiontemplate) => `

  <section class="sectiontemplate">
  <img class="imgi1" src="${sectiontemplate.img1}" alt="Tanner Christerner" />
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
const projectcardsbox = document.getElementById('projectcards');
projectcardsbox.innerHTML += portfolioCards;

const openWindow = document.getElementById('modal-box');

function popUpCard(card) {
  const temp = document.createElement('template');
  temp.innerHTML = `
    // <!--pop-up for the mobile portfolio starts-->
    <div id="mymodal" class="modal">
      <section class="sectiontemplatepop-up">
        <div class="Sectionpop-up">
            <div class="popclose">
            <p class="h1m">Tonic</p>
            <span id="closepop" onClick="document.location.reload(true)" >&times;</span>
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

  const blurProjects = document.querySelectorAll('#myModal > div');

  closeWindow.addEventListener('click', () => {
    openWindow.remove();
    document.body.classList.toggle('no-scroll');
    document.body.style.background = '#fff';
    blurProjects.forEach((project) => project.classList.toggle('blur'));
  });
}

/* eslint-disable */;
function openPopup(id) {
 projectCards.find((card) => {
   if (Number(id) === Number(card.id)) popUpCard(card);
 });
}

const modalObj = {
  modal1: {
    title: 'Tonic',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/Portfolio1-big.svg',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://ijeomaodinko.github.io/Portifolio-page/',
    source: 'https://github.com/ijeomaodinko/Portifolio-page',
  },
  modal2: {
    title: 'Multi-Post Stories',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/Portfolio2-big.svg',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://ijeomaodinko.github.io/Portifolio-page/',
    source: 'https://github.com/ijeomaodinko/Portifolio-page',
  },
  modal3: {
    title: 'Tonic',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/Portfolio3.svg',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://ijeomaodinko.github.io/Portifolio-page/',
    source: 'https://github.com/ijeomaodinko/Portifolio-page',
  },
  modal4: {
    title: 'Multi-Post Stories',
    subt: ['CANOPY', 'Back End Dev', '2015'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'img/Portfolio4-big.svg',
    tech: ['html', 'css', 'javaScript'],
    live: 'https://ijeomaodinko.github.io/Portifolio-page/',
    source: 'https://github.com/ijeomaodinko/Portifolio-page',
  },
};

const modalSubt = document.getElementById('modalSubt');
const modalTech = document.getElementById('modalTech');

function addCounter() {
  const counter = document.createElement('img');
  counter.src = 'img/Counter.svg';
  counter.alt = 'counter';
  modalSubt.appendChild(counter);
}

function addSubt(modal) {
  const firstDiv = document.createElement('div');
  firstDiv.className = 'font500 black font18-24';
  modalSubt.appendChild(firstDiv);
  [firstDiv.innerHTML] = modalObj[modal].subt;
  modalObj[modal].subt.slice(1).forEach((i) => {
    addCounter();
    const otherDiv = document.createElement('div');
    otherDiv.className = 'gray font18-24';
    modalSubt.appendChild(otherDiv);
    otherDiv.innerHTML = i;
  });
}

function addTechs(modal) {
  modalObj[modal].tech.forEach((i) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(i));
    modalTech.appendChild(li);
  });
}

function clearModal() {
  modalTech.innerHTML = '';
  modalSubt.innerHTML = '';
}

function popModal(modal) {
  document.getElementById('modalTitle').textContent = modalObj[modal].title;
  addSubt(modal);
  document.getElementById('modalDesc').textContent = modalObj[modal].desc;
  addTechs(modal);
  document.getElementById('modalImg').src = modalObj[modal].img;
  document.getElementById('modalBtn1').setAttribute('onClick', `location.href='${modalObj[modal].live}';`);
  document.getElementById('modalBtn2').setAttribute('onClick', `location.href='${modalObj[modal].source}';`);
}

const modal = document.getElementById('myModal');
const mBtn1 = document.getElementById('myBtn1');
const mBtn2 = document.getElementById('myBtn2');
const mBtn3 = document.getElementById('myBtn3');
const mBtn4 = document.getElementById('myBtn4');
const xp = document.getElementsByClassName('xp')[0];

mBtn1.onclick = function seeP1() {
  popModal('modal1');
  modal.style.display = 'block';
};

mBtn2.onclick = function seeP2() {
  popModal('modal2');
  modal.style.display = 'block';
};

mBtn3.onclick = function seeP3() {
  popModal('modal3');
  modal.style.display = 'block';
};

mBtn4.onclick = function seeP4() {
  popModal('modal4');
  modal.style.display = 'block';
};

function closeModal() {
  modal.style.display = 'none';
}

xp.onclick = function x() {
  closeModal();
  clearModal();
};

window.onclick = function clickOut(event) {
  if (event.target === modal) {
    closeModal();
    clearModal();
  }
};

// validate form
const contactForm = document.querySelector('#contact-form');
const email = document.getElementById('email');
const messageError = document.getElementById('email-error');

contactForm.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    messageError.innerText = 'Your message was not sent, you need to have the email address, all in small letters';
    messageError.style.fontSize = '15px';
  }
});

// Local storage function

const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('message');

function storeFormDataLocally() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    comment: textInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

nameInput.addEventListener('input', () => {
  storeFormDataLocally();
});

emailInput.addEventListener('input', () => {
  storeFormDataLocally();
});

textInput.addEventListener('input', () => {
  storeFormDataLocally();
});

// Event listner function

window.addEventListener('load', () => {
  const data = localStorage.getItem('formData');
  const parseData = JSON.parse(data);
  nameInput.value = parseData.name;
  emailInput.value = parseData.email;
  textInput.value = parseData.comment;
});

