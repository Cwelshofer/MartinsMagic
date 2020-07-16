export const QuotesAsHTML = (quoteObj) => {
    return `

<section class="quotes">
                        <div class="quote__quote">${quoteObj.quote}</div>
                        <div class="quote__author">${quoteObj.author}</div>
                </section>
                ` }