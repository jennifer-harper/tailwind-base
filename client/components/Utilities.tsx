
interface data{
    imageId:string
}

export function getImageUrl (person:data) {
    return `https://i.imgur.com${person.imageId}.jpg`
}