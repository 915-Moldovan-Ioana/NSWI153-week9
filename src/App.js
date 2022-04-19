import './App.css';
import { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar"
import FirstNavigationPage from "./pages/FirstNavigationPage"
import Layout from './pages/Layout';
import SecondNavigationPage from "./pages/SecondNavigationPage"
import Increase from "./pages/Increase"
import Decrease from "./pages/Decrease"

function App() {
  const [counter, setCounter] = useState(0)
  const handlerIncrease = () => {
    setCounter((counterr) => counterr+1)
}
  const handlerDecrease = () => {
    setCounter((counterr) => counterr-1)
  }
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path='first' element={<FirstNavigationPage />} />
        <Route path='second' element={<SecondNavigationPage />} />
        <Route path='increase' element={<Increase counter={counter} handler={handlerIncrease}/>} />
        <Route path='decrease' element={<Decrease counter={counter} handler={handlerDecrease}/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
