
const filterItems = document.querySelectorAll('.filters button')
const images_box = document.querySelectorAll('.box-image')
const all_filter = document.querySelector('.filters #all')
all_filter.classList.add('active')

filterItems.forEach( item => {
    item.addEventListener('click' ,()=>{
        filterItems.forEach(item => item.classList.remove('active'))
        item.classList.add('active')

        const filter = item.dataset.filter
        images_box.forEach(box=>{
            const image = box.querySelector('img')
            if(image){
                (filter ==='all' || image.dataset.category === filter) ? box.classList.remove('hidden') : box.classList.add('hidden')
            }
        })
    })
})