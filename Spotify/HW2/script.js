let element = []

let fetchMusic = (query, id) => {
  let section = document.querySelector(`#${id}`)
  let row = section.querySelector(`#${id}Section`);
  console.log(section)



  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
    .then((raw) => raw.json())
    .then((res) => {
      let results = res.data;
      console.log(results);
      section.classList.remove("d-none");

      for (let i = 0; i < results.slice(0, 5).length; i++) {
        let element = results[i]


        row.innerHTML += `

               <div class="card img-fluid maxClass">
                <img class="card-img-top" src="${element.album.cover_xl}" alt="Card image" style="width:100%">
                      <div class="card-img-overlay hide pt-4">
                      
                        <h5 class="card-title pb-3">${element.album.title}</h5>
<div class="card-body d-flex p-0 align-items-center justify-content-between gap-4">
                          <button type="button" class="mt-2 btn btn-warning mb-2" 
            onclick="apriMod('${element.artist.name}', '${element.id}', '${element.artist.picture_xl}', '${element.title}', '${element.album.title}')">
            More Info
                        </button>
            <div class="col-4 d-flex flex-column pt-0 align-items-start">
     <a target="_blank" href="${element.preview}" class="card-link"><i class="fa-solid fa-play pt-3"></i></a>
             </div>
       <div class="col-4 d-flex flex-column p-0 align-items-center">
           <a target="_blank" href="details.html?art=${element.artist.name}&id=${element.id}">
            <button class="btn btn-danger">Album</button></a>
          </div>
        </div>
            `



      } return [results, section]




    })
    .catch((err) => console.log(err))



}
fetchMusic("eminem", "eminem")
fetchMusic("metallica", "metallica")
fetchMusic("queen", "queen")


function apriMod(artistName, trackId, artistImg, trackTitle, albumTitle) {
  let Modale = new bootstrap.Modal(document.getElementById("listModal"));
  let modalBody = document.querySelector("#listModal .modal-body");

  Modale.show()

  let modalTitle = document.getElementById("modalTitle");

  modalTitle.innerHTML = `
          <h1>"${artistName}"</h1>
        `


  modalBody.innerHTML = `
          <div class="col-md-12">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center">
                    <img src="${artistImg}" class="img-fluid rounded" alt="${artistName}">
                </div>
                <div class="col-md-6">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Track:</strong> ${trackTitle}</li>
                        <li class="list-group-item"><strong>Album:</strong> ${albumTitle}</li>
                        <li class="list-group-item"><strong>Track ID:</strong> ${trackId}</li>
                    </ul>
                </div>
            </div>
        </div>`;


}




