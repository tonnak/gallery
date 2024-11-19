const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

async function getData () {
    try {
        const dataFetch = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        if (!dataFetch.ok) {
            throw new Error('Нет фото')
        }
        const response = await dataFetch.json()
        
        response.forEach(element => {
            const img = document.createElement('img')
            img.classList.add('img')
            img.setAttribute('src', `${element.url}`)
            //img.setAttribute('loading', 'lazy')
            img.setAttribute('alt', 'кот')
            //img.setAttribute('width', `${element.width}`)
            //img.setAttribute('height', `${element.height}`)
            container.appendChild(img)
        })
    } catch(error) {
        console.error(error.message)
    }
}

btn.addEventListener('click', getData)