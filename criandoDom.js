let domAPI = document.querySelector(".domAPI")

function exibindoInfosGitHub(infosPessoas,repositorio){


    let divDom = document.createElement("div")
    divDom.classList.add("divDom")
    domAPI.appendChild(divDom)
 
    let divAreaNomeFoto = document.createElement("div")
    divAreaNomeFoto.classList.add("divAreaNomeFoto")
    divDom.appendChild(divAreaNomeFoto)
 
    let imgDom = document.createElement("img")
    imgDom.classList.add("imgDom")
    imgDom.onclick = ()=>{location.href = `${infosPessoas.html_url}`}
    imgDom.setAttribute('title',"Clique para ir para o perfil.")
    imgDom.src = `${infosPessoas.avatar_url}`
    divAreaNomeFoto.appendChild(imgDom)
 
    let nomeDom = document.createElement("p")
    nomeDom.classList.add("nomeDom")
    nomeDom.innerHTML = `${infosPessoas.name ?? "Não possui nome cadastrado. 😥"}`
    // ?? verifica se oq está antes dele no caso o infosPessoas.name é nulo, se for ele exibi"Não possui nome."
    divAreaNomeFoto.appendChild(nomeDom)
 
 
 
if(repositorio.length > 0){
    
    let h2Repositorio = document.createElement("h2")
    h2Repositorio.classList.add("h2repositorio")
    h2Repositorio.innerHTML = "Repositório"
    divDom.appendChild(h2Repositorio) 
 
    let divAreaRepositorio = document.createElement("div")
    divAreaRepositorio.classList.add("divAreaRepositorio")
    divDom.appendChild(divAreaRepositorio)

repositorio.forEach(function(itens){ 
 
        let linkRepositorio = document.createElement("a")
        linkRepositorio.classList.add("linkRepositorio")
        linkRepositorio.setAttribute("href", itens.html_url)
        linkRepositorio.setAttribute("target", "_blank");
        linkRepositorio.innerHTML = `${itens.full_name}`
        divAreaRepositorio.appendChild(linkRepositorio)
    
})

}

     
 }
 export{exibindoInfosGitHub}
