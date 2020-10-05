import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import img from '../../logos/google.jpg';
import logo from '../../logos/Group 1329.png'
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const  { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            const {displayName, email}  = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            storeAuthToken();
            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
           sessionStorage.setItem('token', idToken);
           history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className="container text-center pt-5">
            <img className="text-center" style={{width:'200px'}} src={logo} alt=""/>
            <div className="mb-5 mt-5" style={{boxShadow:"0 25px 50px -12px rgba(0,0,0,0.25", width:'600px',height:'300px', margin:'0 auto', padding:'30px'}}>
                <h2>Login with</h2>
            <button className='bg-primary text-white rounded' style={{width:'500px',border:'none'}} onClick={handleGoogleSignIn}> <span><img src={img} style={{width:'40px'}} alt=""/></span> Google Sign In</button>
            </div>     
        </div>
    );
};

export default Login;