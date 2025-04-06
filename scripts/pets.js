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
                          <button class="btn bg-white"><img src="images/like.png" alt="like" class="w-5 h-5 "></button>
                          
                            <button class="btn bg-white text-[#0E7A81]">Adopt</button>
                            <button class="btn bg-white text-[#0E7A81]">Details</button>
                          </div>
                        </div>
                      </div>
        `
        petDiv.appendChild(div);

        console.log(pet);
    });
}

loadpets()