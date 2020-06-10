import React from 'react';
import Button from 'react-bootstrap/Button';
import {Navbar, Nav} from 'react-bootstrap';
import '../css/NavBar.css';

class NavBar extends React.Component {
    a = <Navbar.Text><a href="http://localhost:5000/login" onClick>Sign In or Register</a></Navbar.Text>;
    b = <Navbar.Text><a onClick={this.props.resetId} href="http://localhost:5000/logout">Log Out</a></Navbar.Text>;
    render() {
        return(
            <div>
                <Navbar className="navbar-bg" variant="dark">
                    <Navbar.Brand>
                        Entertain.me
                    </Navbar.Brand>
                    {this.props.userId ? this.b : this.a}       
                </Navbar>
            </div>
        )
        
    }

}

export default NavBar;

