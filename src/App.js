import './App.css';
import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/Container/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer stock={10} initial={1} onAdd={() => { }} />
    </>
  )
}
export default App;
