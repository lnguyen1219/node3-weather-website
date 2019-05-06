console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('#formSearch')
const search = document.querySelector('#location')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/getWeather?address=' + location).then((response) => {
        response.json().then((data) => {
    
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
    
        })
    }) 

})
