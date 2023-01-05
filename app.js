
window.addEventListener("scroll", function(){
    const nav = document.querySelector("#nav");
    let rect1 = document.querySelector("#PGS .rect1");
    let rect2 = document.querySelector("#PGS .rect2");
    let rect3 = document.querySelector("#PGS .rect3");
    let rect4 = document.querySelector("#PGS .rect4");
    let rectS1 = document.querySelector("#PGT .rect2");
    let rectS2 = document.querySelector("#PGT .rect3");
    let rectS3 = document.querySelector("#PGT .rect4");
    let rectS4 = document.querySelector("#PGT .rect5");
    let rect = document.querySelector("#PGT .rect1");

    let itens = document.querySelectorAll('#itens')

   let Navheight = this.pageYOffset;



    if(Navheight >= 55){
        nav.classList.add('style');
    }else {
        nav.classList.remove('style');
    }

    if(Navheight >= 128){
        rect1.classList.add('ani');
        rect2.classList.add('ani');
        rect3.classList.add('ani');
        rect4.classList.add('ani');
    }else {
        rect1.classList.remove('ani');
        rect2.classList.remove('ani');
        rect3.classList.remove('ani');
        rect4.classList.remove('ani');
    }   

    if(Navheight >= 474){
        rect2.classList.add('ani');
        rect4.classList.add('ani');
    }else {
        rect2.classList.remove('ani');
        rect4.classList.remove('ani');
    }   

    if(Navheight >= 635){
        rectS1.classList.add('ani');
        rectS2.classList.add('ani');
    }else {
        rectS1.classList.remove('ani');
        rectS2.classList.remove('ani');
    } 

    if(Navheight >= 704){
        itens[0].classList.add('ani');
        itens[1].classList.add('ani');
        itens[2].classList.add('ani');
        itens[3].classList.add('ani');
        itens[4].classList.add('ani');
        itens[5].classList.add('ani');
        itens[6].classList.add('ani');
    }else {
        itens[0].classList.remove('ani');
        itens[1].classList.remove('ani');
        itens[2].classList.remove('ani');
        itens[3].classList.remove('ani');
        itens[4].classList.remove('ani');
        itens[5].classList.remove('ani');
        itens[6].classList.remove('ani');
    } 

    if(Navheight >= 800){
        rect.classList.add('ani');
    }else {
        rect.classList.remove('ani');
    }  
    
    if(Navheight >= 886){
        rectS3.classList.add('ani');
    }else {
        rectS3.classList.remove('ani');
    } 

    if(Navheight >= 963){
        rectS4.classList.add('ani');
    }else {
        rectS4.classList.remove('ani');
    } 


    if(Navheight >= 1060){
        rectS2.classList.add('ani');
    }else {
        rectS2.classList.remove('ani');
    } 
})

function ChangePhoto(img){
    let imgB = document.getElementById("B-img");
    imgB.src = img.src;
}

function ReturnId(id){
    let itensId = id.getAttribute("data-id");

    const output = document.getElementById("output");

    switch(itensId){
        case '1': output.innerText = "Video 8K"
        break;
        case '5': output.innerText = "Resolução 3200x1440"
        break;
        case '6': output.innerText = 'Android 11'
        break;
        case '7': output.innerText = "Dual Sim 5G"
        break;
        case '4': output.innerText = "Memória 256 GB"
        break;
        case '3': output.innerText = "8 Core 2.2 GHZ"
        break;
        case '2': output.innerText = "Foto 50 Mpx"
        break;
    }
}
