const locationCollection = [
    {
        name: "Apo Reef",
        url: "http://www.apo-reef.com",
        description: "Apo Reef is the largest coral reef in the Philippines!" ,
        location: "Thailand",
        image: "./images/apo-reef.jpg"   
    },

]


export const useLocation = () => {
    return locationCollection.slice()   
}
