import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Checkin(props) {

    let {id} = useParams();
    const [value2, setValue2] =useState([]);
    
    const checkin =async() => {
        const response = await axios.get(
            `http://localhost:4000/borrowDetails/${id}`
        );
        setValue2(response.data.borrowDetails)
        
    }

    useEffect(() => {

        checkin()
    }, [])
console.log(value2)
 
    return (
        <div>
             <form  >   
            <div className="form-inner">
                <h2>Checkin</h2>
               
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input readonly
                    value= {value2.fullName}
                    
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Return Date</label>
                    <input readonly
                     value= {value2.returnDate}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Required Return Date</label>
                    <input readonly
                    value ={value2.reqReturnDate}
                    />
                </div>
                <button
                    type="submit"
                >
                    Checkout
                </button> 
                
            </div>
                               
        </form>
        </div>
    )
}
