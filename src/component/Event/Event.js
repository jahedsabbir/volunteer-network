import React, { useState, useEffect, useContext } from 'react';
import ShowEvent from '../ShowEvent/ShowEvent';
import { UserContext } from '../../App';

const Event = () => {
    const [event, setEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/loadEvent?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvents(data));
    }, [])
    return (
        <div className="container">     
        <div classNameName="float-left">
        
        {
            event.map(event => <ShowEvent event={event}></ShowEvent>)
        }
        </div>
        </div>
    );
};

export default Event;