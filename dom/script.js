const mainDiv = document.getElementById('mainDiv');
const h1 = document.createElement('h1');
h1.innerText = "Mouse Out";
h1.addEventListener("mouseenter", changTextOnMouseIn);
h1.addEventListener("mouseleave", changTextOnMouseOut);
function changTextOnMouseOut() {  h1.innerText = "Mouse Out"}
function changTextOnMouseIn(){ h1.innerText = "Mouse In"}

h1.addEventListener("click", changeColorToRed);
function changeColorToRed() {h1.style.backgroundColor = "blue"; h1.style.color = "red"; h1.style.border = "2px"}



let a = {d:23, f:'foinjd'}
const {d,f} = a;
console.log(f)




document.getElementById('mainDiv').appendChild(h1);
const btn = document.createElement('button');
btn.innerText = "לחץ כאן";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.padding = "10px";
btn.style.border = "none";
btn.style.borderRadius = "7px";
btn.style.cursor = "pointer";
document.getElementById('mainDiv').appendChild(btn);
btn.setAttribute("class", "btnClass");
btn.addEventListener("click", clickBtn);

function clickBtn () {
    alert("clicked");
}


// .2 צרו קופסה div - עם ערכי גובה ,רוחב וצבע רקע
// a. בנו כפתור שמחליף לקופסה צבע
// b. בנו תפריט select עם שלושה צבעים בלחיצה על כפתור הקופסה תחליף לצבע
// המצוין
// c. בנו כפתור שיתפקד כמתג, יעלים ויחזיר את הקופסה מהמסך.
// d. בנו אינפוט טקסט וכפתור, בלחיצה על הכפתור הטקסט באינפוט יתווסף כ
// select ל option



// let items = [
//     {
//         name: "item 1",
//         discription: "discription item 1",
//         price: 100
//     },
//     {
//         name: "item 2",
//         discription: "discription item 2",
//         price: 200
//     },
//     {
//         name: "item 3",
//         discription: "discription item 3",
//         price: 300
//     }
// ]
// let childDiv = document.createElement('childDiv');
// mainDiv.appendChild(childDiv);
// items.forEach((item) => {
//     let h2 = document.createElement('h2');
//     h2.innerHTML = `${item.name}`;
//     childDiv.appendChild(h2);
//     let h3 = document.createElement('h3');
//     h3.innerHTML = `${item.discription}`;
//     childDiv.appendChild(h3);
//     let p = document.createElement('p');
//     p.innerHTML = `${item.price}`;
//     childDiv.appendChild(p);
//     let image = document.createElement('img');
//     image.src = 'https://picsum.photos/654/350';
//     childDiv.appendChild(image);
// })