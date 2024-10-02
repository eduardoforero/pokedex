import Nav from './components/Nav'
import Searchbar from './components/Searchbar'
import Pokemon from './components/Pokemon'

function App() {

  return (
    <>
      <Nav />
      <Searchbar />
      <main className="container">
        <Pokemon />
      </main>
    </>
  )
}

export default App
