
const cars= [
    {
      "model": "Toyota Corolla",
      "year": 2022,
      "color": "White"
    },
    {
      "model": "Honda Civic",
      "year": 2021,
      "color": "Black"
    },
    {
      "model": "Ford Mustang",
      "year": 2023,
      "color": "Red"
    },
    {
      "model": "Chevrolet Camaro",
      "year": 2020,
      "color": "Blue"
    },
    {
      "model": "Tesla Model 3",
      "year": 2024,
      "color": "Silver"
    },
    {
      "model": "BMW 3 Series",
      "year": 2022,
      "color": "Gray"
    },
    {
      "model": "Audi A4",
      "year": 2021,
      "color": "Black"
    },
    {
      "model": "Mercedes-Benz C-Class",
      "year": 2023,
      "color": "White"
    },
    {
      "model": "Mazda 6",
      "year": 2020,
      "color": "Blue"
    },
    {
      "model": "Volkswagen Passat",
      "year": 2022,
      "color": "Red"
    },
    {
      "model": "Subaru Impreza",
      "year": 2021,
      "color": "Green"
    },
    {
      "model": "Hyundai Elantra",
      "year": 2020,
      "color": "Silver"
    },
    {
      "model": "Kia Optima",
      "year": 2023,
      "color": "Silver"
    }
    ]

    function searchCars(){
        const input = document.getElementById("input").value;
        console.log(input)
        const filterdCars = cars.filter(c => c.model.includes(input));
        console.log(filterdCars)
        filterdCars.forEach(c => createDiv(c));
    }
    function createDiv(car){
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(car.model);
    const newBottun = document.createElement("button");
    newBottun.innerHTML = "mor details";
    const detailsDiv = document.createElement("div");
    detailsDiv.style.display = "none";
    detailsDiv.innerHTML = `Year: ${car.year}<br>Color: ${car.color}`;
    newBottun.onclick = () => detailsDiv.style.display = "block";
    newDiv.appendChild(detailsDiv);
    newDiv.appendChild(newContent);
    newDiv.appendChild(newBottun);
    const carContainer = document.getElementById("carsContainer");
    carContainer.appendChild(newDiv);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    }