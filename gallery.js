
const filterItems = document.querySelectorAll('.filters button')
const images = document.querySelectorAll('.images img')

filterItems.forEach( item => {
    item.addEventListener('click' ,()=>{
        const filter = item.dataset.filter
    
        images.forEach(image=>{
           (filter ==='all' || image.dataset.category === filter) ? image.classList.remove('hidden') : image.classList.add('hidden')
        })
    })
})