let array = []
for (i = 1; i <=78; i++)
 array.push(i)

array.forEach(element => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())
    .then(data => {
            let img = document.createElement('img')
            img.src = data[0].url
            document.body.appendChild(img)
        })
    .catch(error => {console.log(error)})
    });