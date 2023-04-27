/*||*/
import{exibindoInfosGitHub} from './criandoDom.js'

let inputGitHub= document.querySelector(".inputGitHub")
let btnPrincipal = document.querySelector(".btnPrincipal")
let domAPI = document.querySelector(".domAPI")

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
     event.preventDefault();
     btnPrincipal.click(); 
    }
  });

inputGitHub.addEventListener("input", ()=>{
    if(!inputGitHub.value){
        domAPI.innerHTML = ""
    }

})


btnPrincipal.addEventListener("click", buscandoNomeFoto)

async function buscandoNomeFoto(event){
event.preventDefault()

 try{
    domAPI.innerHTML = ""
    let infosPessoas = await new Promise(async function (resolve, reject){

        let api = await fetch(`https://api.github.com/users/${inputGitHub.value}`)
    
        if(!inputGitHub.value){
           alert("Por favor preencha o campo de pesquisa.")
      
        }
        else if(api.ok){
            let apiTratada = await api.json()
    
            resolve(apiTratada)
        }

        else{
            reject(["erro na promise buscandoNomeFoto", api.status])
            inputGitHub.value = ""
        }

    })


  let repositorio = await buscandoRepositorio(event)

 exibindoInfosGitHub(infosPessoas,repositorio)

 }

 catch(error){
    if(error.includes(404) ){
        alert("Usuario não encontrado.")
    }
    else{
        alert("Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.");
        throw new Error(`${error[0]}, ERRO:${error[1]}`)
    }
   
   
 }
}


function buscandoRepositorio(event){
event.preventDefault()


return new Promise(async function (resolve, reject){ 
    
let api = await fetch(`https://api.github.com/users/${inputGitHub.value}/repos`)

 if(api.ok ){
    let apiTratada = await api.json()
    resolve(apiTratada)
}
   
else{
    reject(["erro na promise buscandoRepositorio", api.status])
  inputGitHub.value = ""
}
   
})
   
}







