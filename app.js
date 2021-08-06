
addEventListener("DOMContentLoaded", (e)=>{
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    const options = {
        method: "GET",
        headers: headers
        // body:{
        //     id: 1
        // }
      };
    const request = fetch(`https://pokeapi.co/api/v2/pokemon/321`,options);
    
    request
    .then(res=>{
        return(res.ok) ? res.json() : undefined;
    })
    .then((res)=>{
        let script = document.createElement("SCRIPT");
        script.src = "main.js";


        
        const ventana = open(".html","","__black");
        ventana.addEventListener("DOMContentLoaded", (e)=>{
            ventana.document.head.appendChild(script);
            ventana.localStorage.setItem("id",res.sprites.other["official-artwork"]["front_default"]);         
        })
        console.log(`%c${res.name}`,`color:red; font-Family:Arial;`);
        console.log(`%c `,`padding:42px; background-image: url('${res.sprites.front_default}');`);
        
    })
})