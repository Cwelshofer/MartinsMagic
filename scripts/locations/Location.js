export const LocationsAsHTML = (locationObj) => {
    return `

<section class="location">
                        <div><img class="location__image image--card" src="${locationObj.image}" /></div>
                        <div class="location__name">${locationObj.name}</div>
                        <div class="location__location">${locationObj.location}</div>
                        <div class="location__url"><a href="${locationObj.url}">${locationObj.name}</a></div>
                        <div class="location__description">${locationObj.description}</div>
                </section>
                ` }