let app =document.querySelector('#root')
let header =document.createElement('h1')
let continer =document.createElement('div')
let buttonHolder =document.createElement('div')
let button =document.createElement('button')


 header.innerText="Cat pictures"
app.appendChild(header)
app.appendChild(continer)
app.appendChild(buttonHolder)
buttonHolder.appendChild(button)
button.innerText="Next image"
button.setAttribute('class','button')
continer.setAttribute('class','image')

button.addEventListener('click',getRandomCat)


function getRandomCat(){
    fetch( 'https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then( (data) => {
        continer.innerHTML= " ";
        // console.log(data);
     data.forEach(element => {
        let image = document.createElement('img')
        image.src= element.url
       continer.appendChild(image)

     });
    })
}