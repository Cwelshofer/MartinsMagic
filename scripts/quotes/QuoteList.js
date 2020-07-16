import {useQuote} from "./QuoteDataProvider.js"
import {QuotesAsHTML} from "./Quote.js"


export const QuoteList = () => {
    
    const contentElement = document.querySelector(".content--left")
    
    const quotes = useQuote()
console.log(quotes)
    let quoteHTMLRepresentations = ""
    for(const currentQuoteObj of quotes){
        quoteHTMLRepresentations += QuotesAsHTML(currentQuoteObj)
    }
    contentElement.innerHTML += `
    <article class="quotes">
        ${quoteHTMLRepresentations}
        </article>
        `
}