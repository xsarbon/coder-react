import './App.css';
import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <div className='containerCards'>
        <ItemListContainer />
      </div>
      <br /><br /><br />
    </>
  )
}
export default App;
