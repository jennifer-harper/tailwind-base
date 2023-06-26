import { people } from './data'

// interface Person {
//     name: string
//     imageId: string
// }

// interface AvatarProps {
//     person: Person
//     size: string
// }


//build the grid/frame
// export function Avatar ({ person, size }: AvatarProps) {
//     return (
//         <img 
//         className="avatar"
//         src={getImageUrl(person)}
//         // src={person.imageId}
//         alt={person.name}
//         width={size}
//         height={size}
//         />

//     )
// }



interface url{
    imageId:string
}


function getImageUrl (url:url) {
    return `${url.imageId}.jpg`
}


export function Utilities() {
    // const listItem = people.map(person => (
    //   <div key={person.id}>
    //     <img src={getImageUrl(person)} alt={person.name} width='100' />
    //     <p>{person.name}</p>
    //   </div>
    // ));
  
    // return <>{listItem}</>
    return (
    <div>
        {people.map(person => (
            <div key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} width='100' />
            <p>{person.name}</p>
            </div>
        ))
        }
    </div>
    )
  }