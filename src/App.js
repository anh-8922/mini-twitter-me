import logo from './logo.svg';
import './App.css';
import AllMessages from './Components/allMessage';
import AllUsers from './Components/allUsers';
import SearchBar from './Components/serachBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <SearchBar/>
      {/* <AllMessages/>
      <AllUsers/> */}
      <Routes>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
