import './App.css';
import ShopProvider from './context/ShopProvider';
import MainNavegator from './navigations';

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <MainNavegator/>
      </ShopProvider>
    </div>
  );
}

export default App;