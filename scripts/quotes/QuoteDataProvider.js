const quoteCollection = [
    {
quote:"If you give a person a fish, they'll fish for a day. But if you train a person to fish, they'll fish for a lifetime.",
author:"Dan Quayle"
    }

]


export const useQuote = () => {
    return quoteCollection.slice()   
}
