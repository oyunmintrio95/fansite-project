import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this!

import MonsterList from "./components/MonsterList";
import AboutList from "./components/AboutList";
import ArmorList from "./components/ArmorList";
import WeaponList from "./components/WeaponList";
import ForumList from "./components/ForumList";
import LocationList from "./components/LocationList";
import LocationDetail from './components/LocationDetail';
import ForumForm from "./components/ForumForm";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import GeneralError from './components/GeneralError';
import ArmorDetail from './components/ArmorDetail';

function App() {

  return (
    <Router>
      <Nav />
      <main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/monsters' element={<MonsterList />} />
            <Route path='/armors' element={<ArmorList />} />
            <Route path='/armors/:armorId' element={<ArmorDetail />} />
            <Route path='/locations' element={<LocationList />} />
            <Route path='/locations/:locationId' element={<LocationDetail />} />
            <Route path='/weapons' element={<WeaponList />} />
            <Route path='/forum' element={<ForumList />} />
            <Route path='/forum/add' element={<ForumForm />} />
            <Route path='/about' element={<AboutList />} />
            <Route path='/error' element = {<GeneralError />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;