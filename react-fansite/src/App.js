import {useState, useContext, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import jwtDecode from "jwt-decode";

import AboutList from "./components/AboutList";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import GeneralError from './components/GeneralError';
import Forum from './components/forum/Forum';

import Location from "./components/locations/Location";
import LocationDetail from './components/locations/LocationDetail';

import ArmorList from "./components/armors/ArmorList";
import ArmorDetail from './components/armors/ArmorDetail';
import ArmorHead from './components/armors/ArmorHead';
import ArmorGloves from './components/armors/ArmorGloves';
import ArmorLegs from './components/armors/ArmorLegs';
import ArmorWaist from './components/armors/ArmorWaist';
import ArmorChest from './components/armors/ArmorChest';

import WeaponList from "./components/weapons/WeaponList";
import WeaponDetail from './components/weapons/WeaponDetail';
import WeaponGreatSword from './components/weapons/WeaponGreatSword';
import WeaponLongSword from './components/weapons/WeaponLongSword';
import WeaponSwordAndShield from './components/weapons/WeaponSwordAndShield';
import WeaponDualBlade from './components/weapons/WeaponDualBlade';
import WeaponHammer from './components/weapons/WeaponHammer';
import WeaponHuntingHorn from './components/weapons/WeaponHuntingHorn';
import WeaponLance from './components/weapons/WeaponLance';
import WeaponGunlance from './components/weapons/WeaponGunlance';
import WeaponSwitchAxe from './components/weapons/WeaponSwitchAxe';
import WeaponChargeBlade from './components/weapons/WeaponChargeBlade';
import WeaponInsectGlaive from './components/weapons/WeaponInsectGlaive';
import WeaponLightBowgun from './components/weapons/WeaponLightBowgun';
import WeaponHeavyBowgun from './components/weapons/WeaponHeavyBowgun';
import WeaponBow from './components/weapons/WeaponBow';

import Errors from './components/Errors'


import MonsterList from "./components/MonsterList";
import Login from './components/Login';

import AuthContext from './context/AuthContext';

const LOCAL_STORAGE_TOKEN_KEY = "bugSafariToken";
function App() {

  const [user, setUser] = useState(null);

  const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (token) {
      login(token);
    }
    setRestoreLoginAttemptCompleted(true);
  }, []);

  const login = (token) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    console.log(jwtDecode(token));
    const { sub: username, authorities: authoritiesString } = jwtDecode(token);
    
  
    const roles = authoritiesString;
  
    const user = {
      username,
      roles,
      token,
      hasRole(role) {
        return this.roles.includes(role);
      }
    };
  
    console.log(user);
  
    setUser(user);
    return user;
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  };

  const auth = {
    user: user ? { ...user } : null,
    login,
    logout
  };

  if (!restoreLoginAttemptCompleted) {
    return null;
  }


  return (
    <AuthContext.Provider value={auth}>
      <Router>
      <Nav />
      <main>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/about' element={<AboutList />} />
            <Route path='/error' element = {<GeneralError />} />

            {/* Armors routes */}
            <Route path='/armors' element={<ArmorList />} />
            <Route path='/armors/:armorId' element={<ArmorDetail />} />
            <Route path='/armors/head' element={<ArmorHead />} />
            <Route path='/armors/chest' element={<ArmorChest />} />
            <Route path='/armors/gloves' element={<ArmorGloves />} />
            <Route path='/armors/legs' element={<ArmorLegs />} />
            <Route path='/armors/waist' element={<ArmorWaist />} />

            {/* Weapon Routes */}
            <Route path='/weapons' element={<WeaponList />} />
            <Route path='/weapons/:weaponId' element={<WeaponDetail />} />
            <Route path='/weapons/great-sword' element={<WeaponGreatSword />} />
            <Route path='/weapons/long-sword' element={<WeaponLongSword />} />
            <Route path='/weapons/sword-and-shield' element={<WeaponSwordAndShield />} />
            <Route path='/weapons/dual-blades' element={<WeaponDualBlade />} />
            <Route path='/weapons/hammer' element={<WeaponHammer />} />
            <Route path='/weapons/hunting-horn' element={<WeaponHuntingHorn />} />
            <Route path='/weapons/lance' element={<WeaponLance />} />
            <Route path='/weapons/gunlance' element={<WeaponGunlance />} />
            <Route path='/weapons/switch-axe' element={<WeaponSwitchAxe />} />
            <Route path='/weapons/charge-blade' element={<WeaponChargeBlade />} />
            <Route path='/weapons/insect-glaive' element={<WeaponInsectGlaive />} />
            <Route path='/weapons/light-bowgun' element={<WeaponLightBowgun />} />
            <Route path='/weapons/heavy-bowgun' element={<WeaponHeavyBowgun />} />
            <Route path='/weapons/bow' element={<WeaponBow />} />

            {/* Location Routes */}
            <Route path='/locations' element={<Location />} />
            <Route path='/locations/:locationId' element={<LocationDetail />} />

            {/* Monster Routes */}
            <Route path='/monsters' element={<MonsterList />} />

            <Route path='/login' element={<Login />} />

            {/* Error Routes */}
            <Route path='*' element={<Errors />} />
          </Routes>
        </main>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;