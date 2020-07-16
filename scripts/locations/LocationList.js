import {useLocation} from "./LocationDataProvider.js"
import {LocationsAsHTML} from "./Location.js"


export const LocationList = () => {
    
    const contentElement = document.querySelector(".content--left")
    
    const locations = useLocation()
console.log(locations)
    let locationHTMLRepresentations = ""
    for(const currentLocationObj of locations){
        locationHTMLRepresentations += LocationsAsHTML(currentLocationObj)
    }
    contentElement.innerHTML += `
    <article class="locations">
        ${locationHTMLRepresentations}
        </article>
        `
}