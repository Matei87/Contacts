import React from 'react';
import './Navbar.css'
import { TiContacts } from "react-icons/ti";


const Navbar = () => {
    return (
        <nav className="nav navbar-extend-lg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>
                            <TiContacts />Contacts
                            </h1>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
