
const filterItems = document.querySelectorAll('.filters button')
const images_box = document.querySelectorAll('.box-image')
const all_filter = document.querySelector('.filters #all')
const lightBoxEl = document.querySelector(".lightBox")
const lightBoxCloseEl =document.querySelector('#close-lightBox') 
const lightBoxPrevEl =document.querySelector('#prev-lightBox') 
const lightBoxNextEl =document.querySelector('#next-lightBox')
const lightBox_img = document.querySelector(".lightBox img") 
let currentIndex = 0

all_filter.classList.add('active')

filterItems.forEach( item => {
    item.addEventListener('click' ,()=>{
        filterItems.forEach(item => item.classList.remove('active'))
        item.classList.add('active')

        const filter = item.dataset.filter
        images_box.forEach(box=>{
            const image = box.querySelector('img')
            if(image){
                (filter ==='all' || image.dataset.category === filter) ? box.classList.remove('hidden') : box.classList.add('hidden');
            }
        })
    })
})
//click on each image-box
images_box.forEach((box , index) =>{
    box.addEventListener("click" , ()=>{
        currentIndex = index
        showLightBox(currentIndex)
    })
})

// show lightBox
const showLightBox = (index) =>{
    lightBoxEl.style.display = "flex"
    lightBox_img.src = images_box[index].querySelector("img").src
}
// calculate the number of visible image-box
const GetCountOfVisibleBox = () =>{
    return number_visible_box = [...images_box].filter(box => !box.classList.contains("hidden")).length
}

// close lightBox
lightBoxCloseEl.addEventListener("click" , ()=>{
    lightBoxEl.style.display = "none"
})

// click on next icon in lightbox
lightBoxNextEl.addEventListener("click" , ()=>{
    currentIndex = (currentIndex +1) % GetCountOfVisibleBox()
    console.log("current Index :" , currentIndex)
    console.log("length :" ,GetCountOfVisibleBox() )
    showLightBox(currentIndex)
})


// click on previous icon in lightBox
lightBoxPrevEl.addEventListener("click" , ()=>{
    currentIndex = (currentIndex -1 + GetCountOfVisibleBox()) % GetCountOfVisibleBox()
    console.log("current Index :" , currentIndex)
    console.log("length :" ,GetCountOfVisibleBox() )
    showLightBox(currentIndex)

})