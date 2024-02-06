window.addEventListener("DOMContentLoaded", () => {
    // const minus= document.querySelector(".minus"),
    //     number = document.querySelector(".number"),
    //     plus = document.querySelector(".plus");
    // let counter = 1;
    // plus.addEventListener("click", ()=>{
    //     counter++;
    //     number.innerHTML = counter
    // })
    // minus.addEventListener("click", ()=>{
    //     if(counter>1){
    //         counter--;
    //         number.innerHTML = counter
    //     }
    // } )

        function modalShow() {
            modal.classList.add("show")
            modal.classList.remove("hide")
            document.body.style.overflow="hidden"
        }
        function modalHide() {
            modal.classList.add("hide")
            modal.classList.remove("show")
            document.body.style.overflow="auto"
        }
        const modalBtn = document.querySelector(".open-modal"),
            modal = document.querySelector(".modal"),
            closeModalBtn = document.querySelector(".close-btn");

        modalBtn.addEventListener("click", modalShow)
        closeModalBtn.addEventListener("click", modalHide)

        modal.addEventListener("click", (e)=>{
            if(e.target=== modal){
                modalHide()
            }
        })
        document.addEventListener("keydown", (e)=>{
            if(e.code === "Escape" && modal.classList.contains("show")){
                modalHide()
            }
        })

        // setTimeout(() => {
        //     modalShow()
        // }, 2000);
    

        // loader
        const loader = document.querySelector(".loader-wrapper")
        setTimeout(()=>{
            loader.style.opacity="0"
            setTimeout(()=>{
                loader.style.display="none"
            },500)
        }, 2000)
    // const tabContent = document.querySelectorAll(".tab-content")
    // function hideTabContent() {
    //     tabContent.forEach(item => {
    //         item.classList.add('hide')
    //         item.classList.remove("show")
    //     })
    // }
    // function showTabContent(i = 0) {
    //     tabContent[i].classList.remove("hide")
    //     tabContent[i].classList.add("show")
    //     tabItem[i].classList.add("active")
    // }
    // const tabItem = document.querySelectorAll(".tab-item"),
    //     tabItems = document.querySelector(".tab-items");
    // tabItem.forEach(item => {
    //     item.classList.remove("active")
    // })
    // hideTabContent()
    // showTabContent(i = 0)

    // tabItems.addEventListener("click", (event) => {
    //     if (event.target && event.target.classList.contains("tab-item")) {
    //         tabItem.forEach((item, index) => {
    //             if (event.target === item) {
    //                 hideTabContent()
    //                 showTabContent(index)
    //             }
    //         })
    //     }
    // })
})


