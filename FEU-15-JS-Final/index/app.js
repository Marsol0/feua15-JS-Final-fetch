const cardSection = document.querySelector("#card-section");
const resultCount = document.querySelector("#card-count");

// create figure cards
const createActioncard = (element) => {
  const card = document.createElement("a");
  card.addEventListener("click", () => {
    window.location.href = `../selectedFigure/figure.html?id=${element.id}`;
  });

  
  const imgUrl = document.createElement("img");
  const name = document.createElement("h3");
  const description = document.createElement("h4");
  const price = document.createElement("h4");
  const city = document.createElement("h4");

  city.textContent = element.city;
  price.textContent = element.price + " $";
  name.textContent = element.name;
  description.textContent = element.description;
  imgUrl.src = element.imgUrl;

  card.setAttribute("class", "card");

  card.append(imgUrl, name, description, price, city);
  // return card to use in getAllActionFigures()
  return card;
};

//  display all action figures
const getAllActionFigures = async () => {
  try {
    const response = await fetch(
      "https://66705cf00900b5f8724a5fa1.mockapi.io/actionFigures"
    );
    const data = await response.json();
    // short action cards by price
    data.sort((a, b) => a.price - b.price);
    //counts how many cards are
    let count = 0;
    data.forEach((element) => {
      count += 1;
      console.log(element.price);
      const card = createActioncard(element);
      cardSection.append(card);
    });
    // after the loop we get last count number
    resultCount.textContent = count;
  } catch (error) {
    console.log("Error fetching action figures:", error);
  }
};

getAllActionFigures();
