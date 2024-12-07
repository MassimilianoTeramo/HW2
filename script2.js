let mButton = document.getElementById("button-search");
let input = document.getElementById("searchField");
function search(){
let inputVal = input.value.toLowerCase();

input.value = " "
 let searchSection = document.getElementById("searchSection")
 
let found = document.getElementById("found")
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${inputVal}`)
    .then((response)=>response.json())
    .then((data)=>{
      let res = data.data
      console.log (res)
    found.classList.remove("d-none");
      
      for (let i=0; i<res.slice(0,5).length; i++){
        
        let element = res[i]
        
        searchSection.innerHTML += `
            <div class="card maxClass">
             <img src="${element.album.cover_xl}" class="card-img-top img-fluid" alt="cover">
             <div class="hide">
            <div class="card-body">
             <h5 class="card-title">${element.album.title}</h5>
           <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#maxModal">
           More Info
            </button>
          </div>
          <div class="card-body d-flex justify-content-around" "d-none">
            <button class"btn btn-dark">
           <a target= "_blank" href="${element.preview}" class="card-link">Preview</a>
           </button>
           <a href="${element.link}" class="card-link">Track Link</a>
          </div>
          </div>
          </div>
            `

      }return [data, inputVal]
      
    })
  .catch((error)=>{
    console.log(error);
  })
   
    
  } 

 mButton.addEventListener("click", function() {
    let searchSection = document.getElementById("searchSection")
    searchSection.innerHTML = ""
        function reset (id){
            let resetBaseCard = document.getElementById(id)
            resetBaseCard.classList.add("d-none")
        }
        reset("eminem")
        reset("queen")
        reset("metallica")

    })





// let oggetto = {
//     nome: "Luis",
//     cognome : "Abel",
//     eta: 30,
//     figli : 2,
// }

//  function trovaNome (gggggg){
//        let {nome, ...rest} = gggggg;
//        return {nome, rest}

    
// }
// console.log(trovaNome(oggetto))

// let array = [
//     {
//     nome : "simone",
//     cognome : "terri", 
//     eta : 12,
// },
// {
//     nome : "sara",
//     cognome : "terri", 
//     eta : 17,
// },
// {
// nome : "Corrado",
// cognome : "terri", 
// eta : 20,
// }
// ]

// function separaEta ({eta, ...resto}){
//     return {
//         eta: eta,
//         resto: resto,
//     }
// }
// console.log (separaEta(array))
// console.log(array.find(over => over.eta>17))





