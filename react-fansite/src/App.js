import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this!

import MonsterList from "./components/MonsterList";
import AboutList from "./components/AboutList";
import ArmorList from "./components/ArmorList";
import WeaponList from "./components/WeaponList";
import Forum from './components/forum/Forum';
import LocationList from "./components/locations/LocationList";
import LocationDetail from './components/locations/LocationDetail';
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import GeneralError from './components/GeneralError';
import ArmorDetail from './components/ArmorDetail';

import ArmorHead from './components/armors/ArmorHead';
import ArmorGloves from './components/armors/ArmorGloves';
import ArmorLegs from './components/armors/ArmorLegs';
import ArmorWaist from './components/armors/ArmorWaist';
import ArmorChest from './components/armors/ArmorChest';

import WeaponDetail from './components/WeaponDetail';


function App() {

  return (
    <Router>
      <Nav />
      <main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/monsters' element={<MonsterList />} />

            {/* Armors routes */}
            <Route path='/armors' element={<ArmorList />} />
            <Route path='/armors/:armorId' element={<ArmorDetail />} />
            <Route path='/armors/head' element={<ArmorHead />} />
            <Route path='/armors/chest' element={<ArmorChest />} />
            <Route path='/armors/gloves' element={<ArmorGloves />} />
            <Route path='/armors/legs' element={<ArmorLegs />} />
            <Route path='/armors/waist' element={<ArmorWaist />} />

            <Route path='/locations' element={<LocationList />} />
            <Route path='/locations/:locationId' element={<LocationDetail />} />
            <Route path='/weapons' element={<WeaponList />} />
            <Route path='/weapons/:weaponId' element={<WeaponDetail />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/about' element={<AboutList />} />
            <Route path='/error' element = {<GeneralError />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;