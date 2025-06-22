const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const shopItemsContainer = document.getElementById('shop-items');
const itemTemplate = document.getElementById('item-template');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const nothingFoundMessage = document.getElementById('nothing-found');

function displayItems(items) {
  shopItemsContainer.innerHTML = '';

  items.forEach(item => {
  const itemElement = document.createElement('div');
  itemElement.classList.add('shop-item'); 

  const imgElement = document.createElement('img');
  imgElement.src = item.img;
  itemElement.append(imgElement);

  const divContent = document.createElement('div');
  divContent.classList.add('content');

  const titleElement = document.createElement('h1');
  titleElement.textContent = item.title;  
  divContent.append(titleElement);

  
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = item.description;
  divContent.append(descriptionElement);



  const priceElement = document.createElement('span');
  priceElement.classList.add('price'); 
  priceElement.textContent = `${item.price} руб.`;
  divContent.append(priceElement); 

  
  const tagsContainer = document.createElement('div');
  tagsContainer.classList.add('tags'); 

  item.tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.textContent = tag;
    tagsContainer.append(tagElement);
  })
  
  divContent.append(tagsContainer);


  itemElement.append(divContent); 
  shopItemsContainer.append(itemElement);
  });
}

searchBtn.addEventListener('click', () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue));

  if (filteredItems.length === 0) {
    nothingFoundMessage.textContent = 'Ничего не найдено'; 
  } else {
    nothingFoundMessage.textContent = '';
  }

  displayItems(filteredItems);
})

displayItems(items);
