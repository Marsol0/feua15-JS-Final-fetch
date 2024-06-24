const cardSection = document.querySelector("#card-section");
const resultCount = document.querySelector("#card-count")
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#search-img");
const pushTofindOutInfo = document.querySelector("#pushTofindOutInfo")

const createActioncard = (element) => {
  const card = document.createElement("a");
  card.addEventListener("click", () => {
    window.location.href = `../selectedFigure/figure.html?id=${element.id}`;
  });

  // Create elements 
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

  return card;
};

// display all action figures
const getAllSearch = async () => {
  try {
    const response = await fetch(
      `https://66705cf00900b5f8724a5fa1.mockapi.io/actionFigures/`
    );
    const data = await response.json();

    searchBtn.addEventListener('click', () => {
      // get search input value
      const searchTerm = searchInput.value.trim().toLowerCase();

      // filter by city
      const filteredData = data.filter(element => element.city.toLowerCase() === searchTerm);

      // clear cards to add new ones
      cardSection.innerHTML = "";

      // check and siplay how many cards are found
      if (filteredData.length > 0) {
        let count = 0;

        filteredData.forEach(element => {
          count += 1
          const card = createActioncard(element);
          cardSection.appendChild(card);
          resultCount.textContent = count
        });
      } else {
        
        // error message if no city found
        const noResults = document.createElement("p");
        noResults.textContent = `No action figures found in ${searchInput.value}.`;
        noResults.style.color = "red";
        pushTofindOutInfo.setAttribute("class", "display-none")
        cardSection.appendChild(noResults);
        // and remove all cards, because we found none
        resultCount.textContent = ""
      }
    });
  } catch (error) {
    console.log("Error fetching action figures:", error);
  }
};

getAllSearch();
