import './App.css';
import { NavBar } from './components/navbar/NavBar' 
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer'


function App() {
  return (
    <div className="App">
       <NavBar />
       <ItemListContainer greeting="Bienvenidos a la tienda"/>
    </div>
  );
}

export default App;
