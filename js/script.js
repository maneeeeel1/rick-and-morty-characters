const lista = document.getElementById("character-list");
const prevpage = document.getElementById("prev-page");
const nextpage = document.getElementById("next-page");
const contador = document.getElementById("contador");
let currentPage = 1;

function listarick(page){
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response) => {
            if(!response.ok){
                throw new Error ("Error del sistema!");
            }
             return response.json();
        })
        .then((data) => {
            lista.innerHTML="";
            data.results.forEach((personajes) =>{
                lista.innerHTML +=

            `<li>
            <img class="imagenes" src="${personajes.image}" alt="${personajes.name}" >
            <div class="description">
            <p>Name: ${personajes.name}</p> <br> 
            <p>Species: ${personajes.species}</p>
            </div>
            </li>`
        }
    )}
)
contador.textContent = currentPage}

nextpage.addEventListener("click", ()=> {
        currentPage++;
        listarick(currentPage);

});
prevpage.addEventListener("click", ()=> {
    if (currentPage > 1){
        currentPage--;
        listarick(currentPage);
    }

});


listarick(currentPage);


