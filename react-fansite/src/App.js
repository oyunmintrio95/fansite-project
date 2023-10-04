import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this!

import MonsterList from "./components/MonsterList";
import AboutList from "./components/AboutList";
import ArmorList from "./components/ArmorList";
import WeaponList from "./components/WeaponList";
import ForumList from "./components/ForumList";
import LocationList from "./components/LocationList";
import ForumForm from "./components/ForumForm";
import Landing from "./components/Landing";
import Nav from "./components/Nav";

function App() {

  return (
    <Router>
      <Nav />
      <main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/monsters' element={<MonsterList />} />
            <Route path='/armors' element={<ArmorList />} />
            <Route path='/locations' element={<LocationList />} />
            <Route path='/weapons' element={<WeaponList />} />
            <Route path='/forum' element={<ForumList />} />
            <Route path='/forum/add' element={<ForumForm />} />
            <Route path='/about' element={<AboutList />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
