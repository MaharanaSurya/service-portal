import React from 'react'
import Hearder from './Components/Hearder'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import DummyPage from './Pages/DummyPage';


const App = () => {
  return (
    <>

    <BrowserRouter>
    <Hearder/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/data" element={<DummyPage />} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
