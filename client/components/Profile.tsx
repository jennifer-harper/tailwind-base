interface Person {
    name: string
    imageId: string
}

interface AvatarProps {
    person: Person
    size: number
}

interface url{
    imageId:string
}


function getImageUrl (url:url) {
    return `https://i.imgur.com${url.imageId}.jpg`
}


function Avatar ({ person, size }: AvatarProps) {
    return (
        <img 
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />

    )
}

export default function Profile(){
   
    return (
        <>
        <h1>Hi</h1>
            <Avatar 
                person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100}
            />
        </>

    )
}
