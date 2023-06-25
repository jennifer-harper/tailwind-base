import { Carousel } from "@material-tailwind/react"

export default function Example() {
  const images = [
    {
      src:'https://images.unsplash.com/photo-1565367268579-8717de231160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
      alt:'random selection unsplash'
    },
    {
      src:'https://images.unsplash.com/photo-1565367268579-8717de231160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
      alt:'random selection unsplash'
    },
  ]

 
  return (
    <div className="max-h-screen overflow-hidden">
    <Carousel transition={{ duration: 2 }} className="m-auto">
      {images.map((elem, index) => (
        <img 
          key={index}
          src={elem.src}
          alt={elem.alt}
          className="object-cover" />
      ))}
    </Carousel>
    </div>
  )
}
