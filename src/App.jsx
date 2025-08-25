import Banner from "./components/Banner";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Route, Routes } from "react-router";
import HouseList from "./components/HouseList";
import House from "./components/House";


function App() {
  return (
  <BrowserRouter>
    <ErrorBoundary fallback = "An error occured when selecting the house!">
       <Banner>
        <div>Providing all over the world</div>
      </Banner>
      <Routes>
        <Route index element={<HouseList/>}/>
         <Route path="house/:id" element={<House/>}/>
      </Routes>
    </ErrorBoundary>
  </BrowserRouter>
  )
}

export default App
