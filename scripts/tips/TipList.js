import {useTip} from "./TipDataProvider.js"
import {TipsAsHTML} from "./Tip.js"


export const TipList = () => {
    
    const contentElement = document.querySelector(".content--right")
    
    const tips = useTip()
console.log(tips)
    let tipHTMLRepresentations = ""
    for(const currentTipObj of tips){
        tipHTMLRepresentations += TipsAsHTML(currentTipObj)
    }
    contentElement.innerHTML += `
    <article class="tips">
        ${tipHTMLRepresentations}
        </article>
        `
}