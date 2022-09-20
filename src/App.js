import './App.css';
import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'

function App() {
  return (
    <>
      <NavBar />
      <div className='main'>
        {/*<ItemListContainer />*/}
      </div>
      <br /><br /><br />
      <ItemDetailContainer />
    </>
  )
}
export default App;
