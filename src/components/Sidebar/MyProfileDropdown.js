import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {auth} from '../../firebase/firebase.utils';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

const ProfileDropdown = () =>{
    return(
    
                <Dropdown >
                    <Link style={{textDecoration:"none"}} to="/dashboard/profile">
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                    <Avatar alt="Remy Sharp" className="mr-2" src="" />
                    {auth.currentUser.displayName}
                </Dropdown.Toggle>
                </Link>

               
                </Dropdown>
        
    );
}

export default ProfileDropdown;