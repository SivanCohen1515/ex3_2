function initalize() {
    const main = document.getElementsByTagName("main")[0];
    let dice = "";

    for(let i = 0; i < 14; i++) {
        dice += "<section class='squares'>     <article> </article>   <article> </article>   <article> </article>   <article> </article>     </section>";
    }

    main.innerHTML = dice;
    on_click();
}

function on_click() {

    let num_article = document.getElementsByTagName("article");
    for(let i = 0; i < num_article.length; i++)
    {
        num_article[i].setAttribute("onclick", "click_color(this)");
    }
    
}

function click_color(element) {
    if(element.style.backgroundColor == "pink") 
    {
        element.style.backgroundColor = "";
    }
    else element.style.backgroundColor = "pink"
}


const balloon_elm1 = document.createElement("img");
balloon_elm1.src = "images/balloon1.jpg";

const balloon_elm2 = document.createElement("img");
balloon_elm2.src = "images/balloon2.jpg";

const balloon_elm3 = document.createElement("img");
balloon_elm3.src = "images/balloon3.jpg";

const balloon_elm4 = document.createElement("img");
balloon_elm4.src = "images/balloon4.jpg";

let conut = 0;

function plus_img() {

    let num_article = document.getElementsByTagName("article");

    if (conut == 0) {

        conut++; 
        num_article[4].appendChild(balloon_elm1);
        num_article[4].style.opacity = 1;
        return;
    }

    if (conut == 1) {

        conut++;
        num_article[5].appendChild(balloon_elm2);
        num_article[5].style.opacity = 1;
        return;
    }
        
    if (conut == 2) {
            
        conut++; 
        num_article[6].appendChild(balloon_elm3);
        num_article[6].style.opacity = 1;
        return;
    }
        
    if (conut == 3) {
            
        conut++;
        num_article[7].style.opacity = 1;
        num_article[7].appendChild(balloon_elm4);
        document.getElementById("my_plus").src = "images/refreshing.png";
        return;
    }

    if (conut ==4) {

        location.reload(true);
    }
     
}
    