(function(){
    const listElements = document.querySelectorAll('.nav-item--show');
    const list = document.querySelector('.nav-links');
    const menu = document.querySelector('.nav-hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('nav-item--active');

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('nav-item--active');
            }
        });
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 768){
            deleteStyleHeight();
            if(list.classList.contains('nav-links--show')){
                list.classList.remove('nav-links--show')
            }
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 768){
        addClick();
    }

    menu.addEventListener('click', ()=>{
        list.classList.toggle('nav-links--show');
    })
})();