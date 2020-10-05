import React from 'react';

import img from '../../logos/goodEducation.png'
const ShowEvent = ({event}) => {
    
    const deleteEvent = (id) => {       
        fetch(`/deleteEvent/${id}`, {
            method:'DELETE',  
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted');
        })
    }

    return (
        
    <div className="col-md-6 row float-left">
         <div style={{boxShadow:"0 20px 10px -12px rgba(0,0,0,0.15"}} className="row m-3 p-2">
             <div className="col-md-6">
                <img src={img} style={{ width:'75%'}} alt=""/>
             </div>
             <div className="col-md-6">
                <h4>{event.data.title}</h4>
                <h4>{event.data.date}</h4>
                <button onClick={() => deleteEvent(event._id)} className="btn btn-primary mt-5 ml-auto">Delete</button>
             </div>
         </div>
     </div>
        
    );
};

export default ShowEvent;