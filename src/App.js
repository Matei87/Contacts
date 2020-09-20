import React from 'react';
import ContactState from './context/ContactState'
import Navbar from './components/Navbar/Navbar';
import AddContact from './components/AddContact/AddContact';
import FindContact from './components/FindContact/FindContact'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <ContactState>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <AddContact />
          </div>
          <div className="col-md-6">
            <FindContact />
            <Contacts />
          </div>
        </div>
      </div>
      <Footer />
    </ContactState>
  )
};

export default App;
