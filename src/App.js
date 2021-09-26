import logo from './media/logo.png'
import './styles/styles.css';

function App() {
  return (
    <div className="App">
<header> 
        <ul className ="navbar"> 
            <li>
                <img src = {logo} alt="imagen" className="logo"/>
            </li>
            <li><button className="btnGenerico mainButton">Nuevo post 2</button></li> 
            <li>
                <div className="buscar">
                    <input placeholder="Buscar un sitio"/>
                    <i className="fas fa-search"></i>
                </div>
                
            </li>
            <li><button className="btnGenerico secondaryButton">Login</button></li>
            <li><button className="btnGenerico mainButton">Registro</button></li>
            
           
          
        </ul>

    </header> 
    <main>
        <section></section>
        <section></section>
    </main>
    <footer></footer>
    
    </div>
  );
}

export default App;
