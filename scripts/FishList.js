import {useFish} from "./FishDataProvider.js"
import {FishAsHTML} from "./fish.js"

export const FishList = () => {
    
    const contentElement = document.querySelector(".content--left")
    
    const fishes = useFish()
console.log(fishes)
    let fishHTMLRepresentations = ""
    for(const currentFishObj of fishes){
        fishHTMLRepresentations += FishAsHTML(currentFishObj)
    }
    contentElement.innerHTML += `
    <article class="fishes">
        ${fishHTMLRepresentations}
        </article>
        `
}