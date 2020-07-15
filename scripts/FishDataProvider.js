const fishCollection = [
    {
        name: "Karl",
        diet: "worms",
        species: "Betta",
        length: 2.8,
        location: "Thailand",
        image: "./images/bettafish.jpg"   
    },
        {
        name: "James",
        diet: "marine algae",
        species: "Yellow Boxfish",
        length: 18,
        location: "Pacific Ocean",   
        image:"./images/yellowboxfish.png"
    }
]


export const useFish = () => {
    return fishCollection.slice()   
}
