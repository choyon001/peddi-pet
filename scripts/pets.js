const loadpets = ()=>{
    const url = 'https://openapi.programming-hero.com/api/peddy/pets';
    fetch(url)
        .then(response => response.json())
        .then(data => displaypets(data))
        .catch(error => console.error('Error:', error));
}

const displaypets = (pets) => {
  
    const petDiv = document.getElementById("petsDiv");
    pets.pets.forEach(pet => {
        
        const div = document.createElement("div");
        div.classList = "card ";
        div.innerHTML = `
        <div class="card bg-[rgba(19, 19, 19, 0.1)]  shadow-sm">
                        <figure class="px-5 pt-5">
                          <img
                            src="${pet.image}"
                            alt="Shoes"
                            class="rounded-xl" />
                        </figure>
                        <div class="card-body items-start ">
                          <h2 class="text-xl font-bold">${pet.pet_name?pet.pet_name:"Not Avaiable"}</h2>
                          <p class="text-base text-[rgba(19,19,19,0.7)] flex gap-2 items-center"> <img src="images/category.png" class="w-5 h-5"> Breed: ${pet.breed?pet.breed:"Not Available"} </p>

                          <p class="text-base text-[rgba(19,19,19,0.7)] flex gap-2 items-center"> <img src="images/birthday.png" class="w-5 h-5">Birth: ${pet.date_of_birth?pet.date_of_birth:"Not Available"} </p>

                          <p class="text-base text-[rgba(19,19,19,0.7)] flex gap-2 items-center"> <img src="images/femenine.png" class="w-5 h-5">Gender: ${pet.gender?pet.gender:"Not Available"} </p>

                          <p class="text-base text-[rgba(19,19,19,0.7)] flex gap-2 items-center"> <img src="images/coin.png" class="w-5 h-5">Price : ${pet.price?pet.price:"N/A"}$ </p>

                          <hr class="border w-11/12 border-[rgba(19,19,19,0.1)] ">
                          <div class="card-actions">
                          <button class="btn bg-white"><img src="images/like.png" alt="like" class="w-5 h-5 " onclick="likeFunction('${pet.image}')"></button>
                          
                            <button class="btn bg-white text-[rgb(14,122,129)]">Adopt</button>
                            <button class="btn bg-white text-[#0E7A81]">Details</button>
                          </div>
                        </div>
                      </div>
        `
        petDiv.appendChild(div);

        // console.log(pet);
    });
}





// handle individual category click

function handleCategoryClick(category) {
  const url = `https://openapi.programming-hero.com/api/peddy/category/${category.category}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => singlepet(data))
    .catch(error => console.error('Error:', error));


  

}


const singlepet = (pets) => {
  const petDiv = document.getElementById("petsDiv");
  petDiv.innerHTML = ""; 

  if (!pets.data || pets.data.length === 0) {
    petDiv.innerHTML = `
      <div class="col-span-full flex flex-col justify-center items-center text-center p-6 ">
  <figure class="px-10 pt-10">
    <img
      src="images/error.webp"
      alt="Not Found"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class=" text-3xl font-bold">No Information Available</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at
its layout.</p>
  </div>
</div>
    `;
    return;
  }


    pets.data.forEach(pet => {
        
        const div = document.createElement("div");
        div.classList = "card ";
        div.innerHTML = `
        <div class="card bg-[rgba(19, 19, 19, 0.1)]  shadow-sm">
                        <figure class="px-5 pt-5">
                          <img
                            src="${pet.image}"
                            alt="Shoes"
                            class="rounded-xl" />
                        </figure>
                        <div class="card-body items-start ">
                          <h2 class="text-xl font-bold">${pet.pet_name?pet.pet_name:"Not Avaiable"}</h2>
                          <p class="text-base text-[rgba(19,19,19,0.7)] flex gap-2 items-center"> <img src="images/category.png" class="w-5 h-5"> Breed: ${pet.breed?pet.breed:"Not Available"} </p>

                          <p class="text-base text-[rgba(19,19,19,0.7)] flex gap-2 items-center"> <img src="images/birthday.png" class="w-5 h-5">Birth: ${pet.date_of_birth?pet.date_of_birth:"Not Available"} </p>

                          <p class="text-base text-[rgba(19,19,19,0.7)] flex gap-2 items-center"> <img src="images/femenine.png" class="w-5 h-5">Gender: ${pet.gender?pet.gender:"Not Available"} </p>

                          <p class="text-base text-[rgba(19,19,19,0.7)] flex gap-2 items-center"> <img src="images/coin.png" class="w-5 h-5">Price : ${pet.price?pet.price:"N/A"}$ </p>

                          <hr class="border w-11/12 border-[rgba(19,19,19,0.1)] ">
                          <div class="card-actions">
                          <button class="btn bg-white"><img src="images/like.png" alt="like" class="w-5 h-5 " onclick="likeFunction('${pet.image}')"></button>
                          
                            <button class="btn bg-white text-[rgb(14,122,129)]">Adopt</button>
                            <button class="btn bg-white text-[#0E7A81]">Details</button>
                          </div>
                        </div>
                      </div>
        `
        petDiv.appendChild(div);
    });
}


loadpets()