"use strict";
//SLIDER
//food data
const foods = [
  {
    name: "Pizza",
    price: 20,
    img: "pizza.jpg",
    number: 1,
  },
  {
    name: "Pasta",
    price: 30,
    img: "pasta.jpg",
    number: 2,
  },
  {
    name: "Sushi",
    price: 35,
    img: "sushi.jpg",
    number: 3,
  },
  {
    name: "Humburger",
    price: 27,
    img: "humburger.jpg",
    number: 4,
  },
];

const drinks = [
  {
    name: "Margarita",
    price: 25,
    img: "margarita.jpg",
    number: 1,
  },
  {
    name: "Moxito",
    price: 35,
    img: "moxito.jpg",
    number: 2,
  },
  {
    name: "Blu Lagoon",
    price: 29,
    img: "lagoon.jpg",
    number: 3,
  },
  {
    name: "Cosmopolitan",
    price: 39,
    img: "cosmopolitan.jpg",
    number: 4,
  },
];

//select
const img = document.querySelector(".img");
const nameFood = document.querySelector(".name");
const nextFood = document.querySelector(".next-food");
const lastFood = document.querySelector(".prev-food");
const price = document.querySelector(".price");
const numberOfFood = document.querySelector(".number-of-food");
const food = document.querySelector(".food");
const drinksItem = document.querySelector(".drinks-item");
const pageName = document.querySelector(".page-name");
const from = document.querySelector(".from");
const countryName = document.querySelector(".country-name");
const countryPopulation = document.querySelector(".country-population");
const countryImg = document.querySelector(".country-img");
const countryRegion = document.querySelector(".country-region");

let currertFood = 0;

//API function
const getCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}
`)
    .then(function (responce) {
      return responce.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    });
};

//API

const renderCountry = function (data) {
 
  countryName.textContent = data.name.common;
  countryPopulation.textContent = `Population: ${(
    +data.population / 1000000
  ).toFixed(1)} m`;
  countryImg.src = data.flags.png;
  countryRegion.textContent = `Region: ${data.region}`;
};

//FOOD function
function showFood(foodCur) {
  const item = foods[foodCur];
  nameFood.textContent = `Name: ${item.name}`;
  img.src = item.img;
  price.textContent = `Price: ${item.price}$`;
  numberOfFood.textContent = item.number;
  from.textContent = `${item.name} is from 👇`;
  if (item.name === "Pizza") {
    getCountry("italia");
  }
  if (item.name === "Pasta") {
    getCountry("italia");
  }
  if (item.name === "Sushi") {
    getCountry("japan");
  }
  if (item.name === "Humburger") {
    getCountry("usa");
  }
}
showFood(currertFood);

//DRINK function
function showDrink(drinkCur) {
  const item = drinks[drinkCur];
  nameFood.textContent = `Name: ${item.name}`;
  img.src = item.img;
  price.textContent = `Price: ${item.price}$`;
  numberOfFood.textContent = item.number;
  from.textContent = `${item.name} is from 👇`;
  if (item.name === "Margarita") {
    getCountry("mexico");
  }
  if (item.name === "Moxito") {
    getCountry("cuba");
  }
  
  if (item.name === "Blu Lagoon") {
    getCountry("france");
  }
  if (item.name === "Cosmopolitan") {
    getCountry("usa");
  }
}

//next button
nextFood.addEventListener("click", function () {
  currertFood++;

  if (currertFood > foods.length - 1) {
    currertFood = 0;
  }
  showFood(currertFood);
});

//last button
lastFood.addEventListener("click", function () {
  currertFood--;
  if (currertFood < 0) {
    currertFood = foods.length - 1;
  }
  showFood(currertFood);
});

//PAGE
//selecting
const last = document.querySelector(".prev");
const next = document.querySelector(".next");
const num = document.querySelector(".num");

let number = 1;

//next button
next.addEventListener("click", function () {
  if (number < 2) {
    number++;
    num.textContent = number;
    pageName.textContent = `Drinks Page`;
  }
});

//last button
last.addEventListener("click", function () {
  if (number > 1) {
    number--;
    num.textContent = number;
  }
});

//NEXT PAGE
next.addEventListener("click", function () {
  currertFood = 0;
  pageName.textContent = `Drinks Page`;
  showDrink(currertFood);

  nextFood.addEventListener("click", function () {
    // currertFood++;
    if (currertFood == drinks.length) {
      currertFood = 0;
    }

    showDrink(currertFood);

    if (currertFood > drinks.length - 1) {
      currertFood = 0;
    }

    showDrink(currertFood);
  });

  currertFood = 0;
  showDrink(currertFood);

  //last button
  lastFood.addEventListener("click", function () {
    if (currertFood == drinks.length) {
      currertFood = 1;
    }
    if (currertFood < 0) {
      currertFood = drinks.length - 1;
    }
    showDrink(currertFood);
  });
});

//NEXT PAGE
last.addEventListener("click", function () {
  pageName.textContent = `Foods Page`;
  showFood(currertFood);

  //next button
  nextFood.addEventListener("click", function () {
    if (currertFood > foods.length - 1) {
      currertFood = 0;
    }
    showFood(currertFood);
  });

  //last button
  lastFood.addEventListener("click", function () {
    if (currertFood < 0) {
      currertFood = foods.length - 1;
    }
    showFood(currertFood);
  });
});

//NAV BAR
const navToggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  if (links.classList.contains("show__links")) {
    links.classList.remove("show__links");
  } else {
    links.classList.add("show__links");
  }
});

