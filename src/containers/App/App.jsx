import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';

import { NavLink, Routes, Route } from 'react-router-dom';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/people'}>People</NavLink>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/people' element={<PeoplePage/>}/>
      </Routes>
    </>

  )
}

export default App;
