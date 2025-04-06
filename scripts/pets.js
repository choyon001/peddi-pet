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
        <div class="card bg-base-100  shadow-sm">
                        <figure class="px-10 pt-10">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                          <h2 class="card-title">Card Title</h2>
                          <p>A card component has a figure, a body part, and inside body there are title and actions parts </p>
                          <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
        `
        petDiv.appendChild(div);

        console.log(pet);
    });
}

loadpets()