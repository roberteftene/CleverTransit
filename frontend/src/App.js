import './App.css';
import Routes from './Routes';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
        <NavigationBar />
        <Routes/>
        <Footer />
    </div>
  );

}

export default App;
