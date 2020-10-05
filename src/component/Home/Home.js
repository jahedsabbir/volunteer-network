import React, { useState, useEffect } from 'react';
import volunteerList from '../../FakeData/fakeData';
import Volunteer from '../Volunteer/Volunteer';
import Slide from '../Slide/Slide';

const Home = () => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setVolunteer(data))
    }, [])
    return (
        <div className="container mx-auto">
        <Slide></Slide>
        <div className="row">
        {
            volunteer.map(volunteer => <Volunteer key={volunteer.id} volunteer={volunteer} ></Volunteer> )
        }
        </div>
        </div>
    );
};

export default Home;