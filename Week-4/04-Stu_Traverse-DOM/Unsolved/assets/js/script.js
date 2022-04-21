// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// console.log(headerDiv); -> see what's in headerDiv

// Change style by accessing style object's properties
// articlesDiv.children[0].children[1].style.fontSize = '50px';
// headerDiv.children[0].style.color = "#fff"; 

// can make changes while clicking a button
function changeColor() {
    articlesDiv.children[0].children[1].style.fontSize = '50px';
    headerDiv.children[0].style.color = "#fff"; 
}

