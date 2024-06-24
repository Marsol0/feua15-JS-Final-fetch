const deleteInformation = document.querySelector("#deleted-card-info");
const img = document.querySelector("#figure-img");
const figureName = document.querySelector("#figure-name");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const city = document.querySelector("#city");
const deleteBtn = document.querySelector("#delete-btn");
const addToCardCount = document.querySelector("#add-class")
const addBtn = document.querySelector("#add-btn")

//get id
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// delete an figure using id - figureId
const deleteFigure = async (figureId) => {
  
  const response = await fetch(
    `https://66705cf00900b5f8724a5fa1.mockapi.io/actionFigures/${figureId}`,
    {
      method: "DELETE",
    }
  );

  window.location.href = "../index/index.html";
};

deleteBtn.addEventListener(
  "click",
  () => {
    setInterval(() => {
      deleteFigure(id);
    });
    if (deleteFigure) {
      deleteInformation.textContent = "Card was deleted";
      
    }
  },
  2000
);

const getActionFigureId = async () => {
  try {
    const response = await fetch(
      `https://66705cf00900b5f8724a5fa1.mockapi.io/actionFigures/${id}`
    );
    const actionFigures = await response.json();
    return actionFigures;
  } catch (err) {
    console.log("Error found: ",err);
  }
};
let count = 0
addBtn.addEventListener('click',() => {
  
  count += 1
  addToCardCount.textContent = count
})
const actionFigures = await getActionFigureId();

img.src = actionFigures.imgUrl;
figureName.textContent = actionFigures.name;
description.textContent = actionFigures.description;
price.textContent = "$ " + actionFigures.price;
city.textContent = actionFigures.city;
