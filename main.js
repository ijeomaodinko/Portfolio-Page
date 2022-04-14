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
    messageError.style.fontSize = '17px';
  }
});

// Portfolio to store data in a browser

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

window.addEventListener('load', () => {
  const data = localStorage.getItem('formData');
  const parseData = JSON.parse(data);
  nameInput.value = parseData.name;
  emailInput.value = parseData.email;
  textInput.value = parseData.comment;
});