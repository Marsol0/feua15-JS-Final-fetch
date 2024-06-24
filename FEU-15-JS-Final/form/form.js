
const imgUrl = document.querySelector("#imgUrl");
const name = document.querySelector("#name");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const city = document.querySelector("#city");
const formBtn = document.querySelector("#formBtn");
const errorMessage = document.querySelector("#error-message");

// function to check inputs
const validateInputs = () => {
 
  if (
    imgUrl.value &&
    name.value &&
    description.value &&
    price.value &&
    city.value
  ) {
    return true;
  } else {
    let message = "Error: All fields must be filled out.";
    // display hidden error message
    errorMessage.style.display = "block";
    errorMessage.textContent = message;
    console.log(message);
    return false;
  }
};


const postData = async (data) => {
  try {
    const response = await fetch(
      "https://66705cf00900b5f8724a5fa1.mockapi.io/actionFigures",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    // if card is created, go back to main page after 2s
    setTimeout(() => {
      window.location.href = "../index/index.html";
    }, 200);
  } catch (error) {
    console.error("Error occurred while posting data", error);
  }
};

// Event listener for form button
formBtn.addEventListener("click", () => {
  if (validateInputs()) {
    const data = {
      imgUrl: imgUrl.value,
      name: name.value,
      description: description.value,
      price: price.value,
      city: city.value,
    };

    
    postData(data);
  }
});
