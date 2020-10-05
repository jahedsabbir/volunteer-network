import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../App';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const SingleVolunteer = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const {title} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const onSubmit = data => {
        const newVolunteer = {...loggedInUser, data: data};
        fetch('http://localhost:5000/addVolunteer', {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                history.push('/event')
            }
        })
    }
   
    return (
        <div style={{width:'350px',margin:'0 auto',boxShadow:"0 25px 50px -12px rgba(0,0,0,0.25",padding:'20px'}}>
           
          <form  onSubmit={handleSubmit(onSubmit)} method="post">  
             <input name="name"  className="form-control" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name"/>
                 {errors.name && <span className="error"> name is required</span>}
                <br/> 
                <input name="email"  className="form-control" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your name"/>
                  {errors.name && <span className="error"> name is required</span>}
                <br/> 
                <input name="date"  className="form-control"  ref={register({ required: true })}  placeholder="Enter Date"/>
                 {errors.address && <span className="error"> date is required</span>}
                <br/> 
                <input name="description"  className="form-control" ref={register({ required: true })}  placeholder="Your description"/>
                 {errors.address && <span className="error"> description is required</span>}
                <br/> 
                <input name="title" defaultValue={title} className="form-control" ref={register({ required: true })}  placeholder="Your address"/>
                 {errors.address && <span className="error"> address is required</span>}
                <br/> 
                <input className="form-control bg-primary text-white" type="submit" />
                </form>
                
        </div>

    );
};

export default SingleVolunteer;