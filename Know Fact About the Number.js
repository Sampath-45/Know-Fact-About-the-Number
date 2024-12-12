let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");



function getFactOfNumber(event) {
    if (event.key === "Enter") {
        let inputValue = userInputEl.value;

        if (inputValue === "") {
            alert("Enter a Number");
            return;
        }

        let url = "https://apis.ccbp.in/numbers-fact?number=" + inputValue;
        let options = {
            method: "GET"
        };

        spinnerEl.classList.remove("d-none");
        factEl.classList.add("d-none");

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                factEl.classList.remove("d-none");
                spinnerEl.classList.add("d-none");

                let {
                    fact
                } = jsonData;
                factEl.textContent = fact;
            });
    }
}

userInputEl.addEventListener("keyup", getFactOfNumber);