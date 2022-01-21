(function(){
    const listElements = document.querySelectorAll(".menu__item--show");
    const slider = document.querySelector(".slider__container");

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener("click", ()=>{
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle("menu__item--active");

                if(subMenu.clientHeight === 0){
                    slider.classList.add("slider--active");
                    height=subMenu.scrollHeight;
                }else{
                    slider.classList.remove("slider--active");
                }

                subMenu.style.height = `${height}px`;
            })
        })
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute("style")){
                element.children[1].removeAttribute("style");
                element.classList.remove("menu__item--active");
                slider.classList.remove("slider--active");
            }
        });
    }

    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 768){
            deleteStyleHeight();
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 768){
        addClick();
    }

    /*menu.addEventListener("click", ()=> list.classList.toggle("menu__links--show"));*/ 
})();

const nav = document.querySelector(".menu");
const subNav = document.querySelector(".menu__links")

window.addEventListener("scroll", function(){
    if(window.innerWidth > 768){
        nav.classList.toggle("active", window.scrollY > 0)
        subNav.classList.toggle("active", window.scrollY > 0)
    }
})

