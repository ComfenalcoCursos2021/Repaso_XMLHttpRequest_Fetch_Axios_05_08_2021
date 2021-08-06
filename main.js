addEventListener("load",(e)=>{
    let META = document.createElement("META");
    META.content = `default-src 'self' https://pokeapi.co/api/v2`;
    document.head.appendChild(META);
    let frag = new DocumentFragment();
    let img = document.createElement("IMG");
    img.src = localStorage.getItem('id');
    frag.appendChild(img);
    document.body.appendChild(frag);
    // let url = new Blob();
    // console.log(url);


    // console.log(`%c `,`padding:222px; background-image: url('${}');`);
    
})