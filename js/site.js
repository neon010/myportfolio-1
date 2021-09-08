
document.addEventListener("scroll", () =>{
    const cards = document.querySelectorAll(".card");
    let screenPosition = window.innerHeight;
    Array.from(cards).forEach(card => {
        let cardPosition = card.getBoundingClientRect().top;
        if(cardPosition <= screenPosition) {
            setInterval(function() {
                card.classList.add("active-card");
            },500);
        }else{
            card.classList.remove("active-card");
        }
    })
})


document.addEventListener("scroll", ()=>{
    const getScrollPosition = (el = window) => ({
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    });
    const currentHeight = getScrollPosition().y
    console.log(currentHeight)
    if(currentHeight > 0 && currentHeight < 500){
        console.log("less than 500");
        document.body.style.background = "linear-gradient(to right top, #0b0b11, #14151e, #1a1d2c, #202539, #252e48);"
    }else if(currentHeight > 500 && currentHeight < 1200){
        console.log("less than 1200");
        document.body.style.background = "linear-gradient(to right top, #353539, #2c2c39, #222339, #161b39, #061339);";
    }else if(currentHeight > 1200){
        console.log("greater than 1200")
        document.body.style.background = "linear-gradient(to right top, #171718, #151518, #121319, #0f1019, #0a0e1a);";
    }
})