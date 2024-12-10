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
            <div class="card img-fluid maxClass">
                <img class="card-img-top" src="${element.album.cover_xl}" alt="Card image" style="width:100%">
                      <div class="card-img-overlay hide pt-5">
                        <h5 class="card-title pb-3">${element.album.title}</h5>
                        <button type="button" class="mt-2 btn btn-warning" data-bs-toggle="modal" data-bs-target="#maxModal">
                        More Info
                        </button>
                        <div class="d-flex align-items-start pt-3 justify-content-between">
              
                        <div class="card-body d-flex flex-column pt-0 align-items-start">

                          <div class=" d-flex flex-column pt-0 align-items-center">
                            <span>Preview</span>
                            <a target="_blank" href="${element.preview}" class="card-link"><i class="fa-solid fa-play pt-3"></i></a>
                          </div>
                        </div>
                          <div class=" d-flex flex-column pt-0 align-items-end">
                            <div class=" d-flex flex-column pt-0 align-items-center">
                            <span>Track List</span>
                            <a target="_blank" href="${element.link}" class="card-link pt-0"><i class="fa-solid fa-list pt-3"></i></a>
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

//FUNZIONE CERCA (1 FETCH)

// let mButton = document.getElementById("button-search");
// let input = document.getElementById("searchField");
// function search(){
// let inputVal = input.value.toLowerCase();

// input.value = " "
//  let searchSection = document.getElementById("searchSection")
 
// let found = document.getElementById("found");
// found.classList.remove("d-none");

// for (let i=0; i<results.slice(0,5).length; i++){
        
// let element = results[i]
  
//   searchSection.innerHTML += `
//       <div class="card img-fluid maxClass">
//           <img class="card-img-top" src="${element.album.cover_xl}" alt="Card image" style="width:100%">
//                 <div class="card-img-overlay hide pt-5">
//                   <h5 class="card-title pb-3">${element.album.title}</h5>
//                   <button type="button" class="mt-2 btn btn-warning" data-bs-toggle="modal" data-bs-target="#maxModal">
//                   More Info
//                   </button>
//                   <div class="d-flex align-items-start pt-3 justify-content-between">
        
//                   <div class="card-body d-flex flex-column pt-0 align-items-start">

//                     <div class=" d-flex flex-column pt-0 align-items-center">
//                       <span>Preview</span>
//                       <a target="_blank" href="${element.preview}" class="card-link"><i class="fa-solid fa-play pt-3"></i></a>
//                     </div>
//                   </div>
//                     <div class=" d-flex flex-column pt-0 align-items-end">
//                       <div class=" d-flex flex-column pt-0 align-items-center">
//                       <span>Track List</span>
//                       <a target="_blank" href="${element.link}" class="card-link pt-0"><i class="fa-solid fa-list pt-3"></i></a>
//                       </div>
//                     </div>
//       </div>
//       `

// }
// }

// mButton.addEventListener("click", function() {
//   let searchSection = document.getElementById("searchSection")
//   searchSection.innerHTML = ""
//       function reset (id){
//           let resetBaseCard = document.getElementById(id)
//           resetBaseCard.classList.add("d-none")
//       }
//       reset("eminem")
//       reset("queen")
//       reset("metallica")

//   })
