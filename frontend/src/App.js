import './App.css';
import Routes from './Routes';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Routes />
        </div>
    );
}

export default App;
