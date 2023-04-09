import { useState } from 'react'
import SearchForm from './SearchForm'
import Navigate from './Navigate'
import Articles from './Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchForm />
      <Navigate />
      <Articles />
    </>
  )
}

export default App
