const url = 'https://gnews.io/api/v4/search?q=bangalore&token=7fbc9d4ebd469e05a634df707bce119d'

fetch('https://gnews.io/api/v4/search?q=bangalore&token=7fbc9d4ebd469e05a634df707bce119d')
.then(response => response.json())
.then(data=>console.log(data))
.catch(err=>console.log(err.message))