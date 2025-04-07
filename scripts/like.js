function likeFunction(event) {
  const like = document.getElementById("like");
  const likediv = document.createElement("div");
  likediv.innerHTML = `
   <figure class="px-5 pt-5">
                          <img
                            src="${event}"
                            alt="Shoes"
                            class="rounded-xl" />
    </figure>
                        
    `;
    like.appendChild(likediv);
}
