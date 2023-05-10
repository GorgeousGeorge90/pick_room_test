import './App.scss';
import MainPage from "./pages/MainPage/MainPage";
import Header from "./module/Header/Header";

function App() {
    return (
        <div className='app'>
            <Header/>
            <div className='content'>
                <MainPage/>
            </div>
        </div>
    );
}

export default App;
