const loadcategories = ()=>{
    const allpets = "https://openapi.programming-hero.com/api/peddy/categories";

fetch(allpets).then((response) => response.json())
  .then((data) => 
    displaycategories(data)).catch((error) => console.error('Error:', error));
}

const displaycategories = (categories) => {
    const categoriesDiv = document.getElementById("categories");
   categories.categories.forEach(category => {
    
    const button = document.createElement("button");
    button.className = "custombtn ";
    button.innerHTML = `<img class="icon-img" src="${category.category_icon}" alt="${category.category}"> ${category.category}`;

    // event listener for button click

    button.addEventListener("click", function () {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".custombtn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add active class to the clicked button
    button.classList.add("active");
      handleCategoryClick(category);
  });


    categoriesDiv.appendChild(button);
    });
   }


   
   
   
   


loadcategories();
