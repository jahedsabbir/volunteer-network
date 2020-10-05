import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

const Volunteer = ({volunteer}) => {
    const history = useHistory();
    const handleReq = (title) => {
        history.push(`/singleVolunteer/${title}`);
    }
    return (
     <div className="col-md-3 ">      
        <div className="card p-2" style={{width:"15rem"}}>
        <img className="card-img-top" src={volunteer.img}/>
        <div className="card-body">
        <p className="card-text">{volunteer.title}</p>
        <button className="btn btn-primary w-100" onClick={() => handleReq(volunteer.title)}>Apply</button>
        </div>
        </div>
     </div>
        // {/* <card  style={{ width: '18rem' }} classNameName="p-2 border-0">
        // <card.Img variant="top" classNameName="w-100" src={volunteer.img} />
        // <card.body classNameName="bg-primary">
        // <p classNameName="text-white">{volunteer.title}</p>         
        // <button classNameName="bg-warning w-100 text-dark" onClick={() => handleReq(volunteer.title)}>Apply</button>
        // </card.body>  
        // </card> */}
     
    );
};

export default Volunteer;