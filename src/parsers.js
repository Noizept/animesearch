function getJsonFromXML(xmlString) {
    const parser = new DOMParser()
    let xmlDoc = parser.parseFromString(xmlString, "text/xml")
    let animeList = xmlDoc.getElementsByTagName("anime")
    let animeJSON = []

    for (let i = 0; i < animeList.length; i++) {
        let elm = animeList[i]
        console.log(elm)
        let anime = {}
        if (elm.nodeType == 1 && elm.hasAttribute("id")) {
            anime.ID = elm.getAttribute("id")
            anime.Name = elm.getAttribute("name")
            anime.Type = elm.getAttribute("type")
            anime.Genres = []
            for (let j = 0; j < elm.childNodes.length; j++) {
                if (elm.childNodes[j].nodeType == 1) {
                    if (elm.childNodes[j].getAttribute("type") == "Picture")
                        anime.Picture = elm.childNodes[j].getAttribute("src")
                    if (elm.childNodes[j].getAttribute("type") == "Genres")
                        anime.Genres.push(elm.childNodes[j].textContent)
                    if (elm.childNodes[j].getAttribute("type") == "Plot Summary")
                        anime.Description = elm.childNodes[j].textContent

                }
            }



        }
        if (anime.Picture)
            animeJSON.push(anime)
    }
    return animeJSON


}

export {
    getJsonFromXML
}