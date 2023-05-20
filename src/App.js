//import logo from './logo.svg';
//import './App.css';
import './styles.css';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from './Components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Pages/profile';
import AddNewMessage from './Components/addNewPost';
import SearchPage from './Pages/SearchPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/user" element={<Profile/>}/>
          <Route path="/newpost" element={<AddNewMessage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>    
    
    
  );
}

export default App;

//<Route path="login" element={<Login />}/>
          //<Route path="/user/:name" element={<UserProfile/>}/>