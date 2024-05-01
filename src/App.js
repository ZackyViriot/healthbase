import React from 'react'
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
//going to test the routes to make sure they work 
import DoctorPage from './Pages/DoctorPage';
import PharmacistPage from './Pages/PharmacistPage';
import AddPatientForm from './Pages/AddPatientFormPage';
import SearchPreciptionForm from './Pages/SearchPreciption';



function App() {
  return (
      <Router>
        <Routes>
          <Route exact path = "/" element = {<LoginPage/>}/>
          <Route path = '/DoctorPage' element = {<DoctorPage />}/>
          <Route path = '/PharmacistPage' element = {<PharmacistPage/>}/>
          <Route path = '/searchPatient' element = {<SearchPreciptionForm/>}/>
        </Routes>
      </Router>
  );
}

export default App;
