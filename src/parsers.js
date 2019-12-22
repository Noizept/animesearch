function getMainIdsFromXML(xmlString){
    const parser = new DOMParser();
	let xmlDoc = parser.parseFromString(xmlString, "text/xml");
    let floor = xmlDoc.getElementsByTagName("anime");
    return [1]
    let animeIds =[]
    for (let i = 0; i < floor.length; i++) {
        let elm = floor[i]
        if( elm.nodeType == 1 && elm.hasAttribute("aid")) {
            animeIds.push(elm.getAttribute("aid"))
       }
       return  animeIds

    }
    return  animeIds
}
function getAnimeJsons(xmlString){
    const parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlString, "text/xml");
    

    var tag = xmlDoc.querySelectorAll("relatedanime");
    var f=Array.from(tag);
    f.forEach(x=>x.remove());

console.log(xmlDoc);

    
    /*  Array.from(xmlDoc.querySelectorAll("similaranime")).forEach(
        x => x.parentNode.remove(x)
      );

    let floor=xmlDoc.getElementsByTagName("anime")

    for (let i = 0; i < floor.length; i++) {
        let elm = floor[i]
   
        console.log(elm)
        if( elm.nodeType == 1 && elm.hasAttribute("aid")) {
            animeIds.push(elm.getAttribute("aid"))
       }
    }*/


}

export  { getMainIdsFromXML , getAnimeJsons }