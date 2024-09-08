const mainDiv = document.getElementById('mainDiv');
const h1 = document.createElement('h1');
h1.innerHTML = "title example";
document.getElementById('mainDiv').appendChild(h1);
const btn = document.createElement('button');
btn.innerHTML = "click me";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.padding = "10px";
btn.style.border = "none";
btn.style.borderRadius = "7px";
btn.style.cursor = "pointer";
document.getElementById('mainDiv').appendChild(btn);
btn.setAttribute("class", "btnClass");
btn.addEventListener("click", clickBtn);
h1.addEventListener("click", clickBtn);

function clickBtn () {
    alert("clicked");
}


let items = [
    {
        name: "item 1",
        discription: "discription item 1",
        price: 100
    },
    {
        name: "item 2",
        discription: "discription item 2",
        price: 200
    },
    {
        name: "item 3",
        discription: "discription item 3",
        price: 300
    }
]
let childDiv = document.createElement('childDiv');
mainDiv.appendChild(childDiv);
items.forEach((item) => {
    let h2 = document.createElement('h2');
    h2.innerHTML = `${item.name}`;
    childDiv.appendChild(h2);
    let h3 = document.createElement('h3');
    h3.innerHTML = `${item.discription}`;
    childDiv.appendChild(h3);
    let p = document.createElement('p');
    p.innerHTML = `${item.price}`;
    childDiv.appendChild(p);
    let image = document.createElement('img');
    image.src = 'https://picsum.photos/200/350';
    childDiv.appendChild(image);
})