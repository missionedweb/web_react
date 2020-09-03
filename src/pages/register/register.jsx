import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './register.styles.scss';

function Register() {
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmpassword } = details;

    //check if passwords are equal
    if (password !== confirmpassword) {
      alert('Passwords Donot Match');
      return;
    }
    //createUserWithEmailAndPassword
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      let displayName = firstName + ' ' + lastName;
      //createUserProfileDocument
      await createUserProfileDocument(user, { displayName });

      setDetails({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: '',
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '20%' }}
      >
        <input
          onChange={handleChange}
          name="firstName"
          required
          id="firstName"
          placeholder="First Name"
          value={details.firstName}
          autoFocus
        />
        <input
          type="text"
          onChange={handleChange}
          required
          id="lastName"
          placeholder="Last Name"
          name="lastName"
          value={details.lastName}
        />
        <input
          type="email"
          onChange={handleChange}
          required
          id="email"
          placeholder="Email Address"
          name="email"
          value={details.email}
        />
        <input
          onChange={handleChange}
          required
          name="password"
          placeholder="Password"
          type="password"
          id="password"
          value={details.password}
        />
        <input
          onChange={handleChange}
          variant="outlined"
          required
          name="confirmpassword"
          placeholder="Confirm Password"
          type="password"
          id="password"
          value={details.confirmpassword}
        />
        <button type="submit">Register</button>
      </form>
    </React.Fragment>
  );
}

export default Register;
