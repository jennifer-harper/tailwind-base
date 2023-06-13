import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import '../../server/public/styles.css'


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={'Welcome Home'} />
      </Routes>
      <div className='text-3xl text-green-600 p-2'>
      Hello Geeks!
    </div>
    </>
  )
}

export default App
