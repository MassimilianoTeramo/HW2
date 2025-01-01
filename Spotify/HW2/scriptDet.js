let paraSearch = new URLSearchParams (window.location.search);
let artist = paraSearch.get("art");
let id = paraSearch.get("id");
if (!artist || !id) {
    console.error("Artist or ID parameter is missing in the URL");
    document.getElementById("tracksField").innerHTML =

    `   <button class="btn btn-primary mt-4"><a target="_blank" href="https://api.deezer.com/album/${resDisplay.album.id}/tracks">
        Go to Deezer</a></button>
    `;
} else {
    console.log(artist, id);
}


document.addEventListener("DOMContentLoaded", function(){
    let parametri = new URLSearchParams (window.location.search);
    let albumDet = parametri.get("id")  
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+`${artist}`)
        .then((response)=>response.json())
        .then(data=>{
            let results = data
            let resDisplay = results.data.find(result => result.id == albumDet);
            console.log(resDisplay);
            if(!resDisplay){
                document.getElementById("mainDiv").innerHTML = 
                `
                <h2>ID album non trovato</h2>

                `
                return;
            }
            console.log(resDisplay);
            if(!resDisplay){
                throw new Error ("Album non trovato");

            }
            document.getElementById("imgField").innerHTML = 
            `
            <img src="${resDisplay.album.cover_big}" alt="${resDisplay.title}" class="img-fluid rounded shadow">

            `
            document.getElementById("detAlb").innerHTML =
            `
            <div class="col-12 col-md-10 col-sm-6">
            <h2>${resDisplay.album.title}</h2>
            <h4>${resDisplay.artist.name}</h4>
            <p>Duration:${resDisplay.duration} min</p>
            </div>


            ` 
            document.getElementById("tracksField").innerHTML =

        `   <button class="btn btn-primary mt-4"><a target="_blank" href="https://api.deezer.com/album/${resDisplay.album.id}/tracks">
            Go to Deezer</a></button>
        `;

        }) .catch((err) => {
            document.getElementById("main").innerHTML =
                `
                <h2>Errore:${err.message}</h2>
                `;
            });
        });

