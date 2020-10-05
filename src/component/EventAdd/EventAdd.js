import React from 'react';

const EventAdd = () => {
    
    const handleAddEvent = () => {
        const events = {};
        fetch('http://localhost:5000/addEvent', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(events)
        })
    }
    return (
        <div className="container">                
            <form action="" className='mx-auto'>
                <input className='form-control w-50 ' name="title" type="text" placeholder="title"/><br/>
                <input className='form-control w-50 ' type="text" name="img" placeholder="img url"/><br/>
                <button className='btn btn-primary w-50' onClick={handleAddEvent}>add event</button>
            </form>          
        </div>
    );
};

export default EventAdd;