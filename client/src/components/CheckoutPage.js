import React,{useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';


export default function CheckoutPage(props) {

    const [success, setSuccess] = useState(false);
    const fullName = useFormInput("");
    const phone = useFormInput("");
    const nationalID = useFormInput("");
    let {id} = useParams();
    const handleCheckout = () => {
   
        axios
            .post("http://localhost:4000/borrowDetails/addtodb/", {
                bookID: id,
                fullName: fullName.value,
                phone: phone.value,
                nationalID: nationalID.value,
                reqReturnDate: "5/2/2021Z"


            })
            .then((response) => {
                setSuccess(true)
              
                console.log("response", response.data)
            }

            )
            .catch((error) => {
                console.log("Something went wrong. Please try again later.");
            });
            props.history.push(
                "/admin"
            );

           
    };

    return (
        <form  >
            <div className="form-inner">
                <h2>Checkout</h2>
                {success ? <h1>Checkout Complet</h1>: (<><div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        placeholder="full name"
                        type="text"
                        {...fullName}
                       
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Mobile No</label>
                    <input 
                    type="tel" 
                    id="phone" 
                    name="phone"  
                    placeholder= "e.g. 12-345 5678"
                    pattern="[0-9]{2}-[0-9]{3} [0-9]{4}"
                    {...phone}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">National ID</label>
                    <input 
                    type="number" 
                    id="nationalID" 
                    name="nationalID"  
                    placeholder= "e.g. 12345678901"
                    min= "11"
                    max="11"
                    {...nationalID}
                    />
                </div>
                <button
                    
                    type="submit"
                    onClick={handleCheckout}
                    
                >
                    Checkout
                </button></>) }
                
            </div>

        </form>
    )
}
const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return {
        value,
        onChange: handleChange,
    };
};

