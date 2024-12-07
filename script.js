let fetchMusic = (query, id) => {
    let section = document.querySelector(`#${id}`)
    let row = section.querySelector(`#${id}Section`);
    console.log (section)

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+query)
    .then ((raw) => raw.json())
    .then ((res)=> {
        let results = res.data;        
        console.log(results);
        section.classList.remove("d-none");

        for (let i=0; i<results.slice(0,5).length; i++){
            let element = results[i]


            row.innerHTML += `
            <div class="card maxClass">
             <img src="${element.album.cover_xl}" class="card-img-top img-fluid" alt="cover">
             <div class="hide">
            <div class="card-body">
             <h5 class="card-title">${element.album.title}</h5>
           <button type="button" class="mt-2 btn btn-warning" data-bs-toggle="modal" data-bs-target="#maxModal">
           More Info
            </button>
          </div>
          <div class="card-body d-flex justify-content-around" "d-none">
            
           <a target= "_blank" href="${element.preview}" class="card-link">Preview</a>
          
           <a href="${element.link}" class="card-link">Track Link</a>
          </div>
          </div>
          </div>
            `
            let modalBody = document.getElementById("listModal");
            let modalTitle = document.getElementById("modalTitle");

             modalTitle.innerHTML = `
          <h1>"${element.artist.name}"</h1>
        `

           modalBody.innerHTML =`
           <div class="col-md-6 d-flex">
        <img src="${element.album.cover_medium}"
      </div>
      <div class="col-md-10" d-flex>
         <ul class="list-group-flush" >
 <li class="list-group-item">${element.title}</li>
 <li class="list-group-item">${element.album.title}</li>
 <li class="list-group-item">${element.duration}</li>
  </ul>
           </div> 
         `
        
        } return [results, section]




    })
    .catch ((err)=>console.log(err))



}
fetchMusic("eminem", "eminem")
fetchMusic("metallica", "metallica")
fetchMusic("queen", "queen")

