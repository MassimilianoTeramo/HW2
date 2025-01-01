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





