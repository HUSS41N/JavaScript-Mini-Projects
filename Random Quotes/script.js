
generateRandomQuotes = () => {
    const randomQuotes=fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "88cf01bb23mshc474836ac64deb3p137843jsn14f729697499",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
    }
    })
    return randomQuotes.then((response)=>{
        return response.json()
    })
}

getRandomQuote = () => {
    generateRandomQuotes().then((response)=>{
        quoteInnerHtml(response)
    }).catch((error)=>{
        console.log(error);
    })
}

quoteInnerHtml = (response) => {
    document.getElementById('quoteText').innerHTML = response.content
}