import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullname, setFullName] = useState(""); // crear estado
	const [emailAdress, setEmailAdress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [streetAddress, setStreetAddress] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		actions.createContact(fullname, emailAdress, streetAddress, phoneNumber);
		setFullName("");
		setEmailAdress("");
		setPhoneNumber("");
		setStreetAddress("");
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
  				<div className="mb-3">
    				<label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
    				<input 
					type="text" 
					className="form-control" 
					id="exampleInputEmail1" 
					aria-describedby="emailHelp"
					value={fullname} // asignar valor
					onChange={e => setFullName(e.target.value)} // asignar valor
					placeholder="Pepe Perez"
					/>
  				<div className="mb-3">
    				<label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    				<input type="email" className="form-control" id="exampleInputPassword1" value={emailAdress} // asignar valor
					onChange={e => setEmailAdress(e.target.value)} // asignar valor
					placeholder="email" />
  				</div>
  				<div className="mb-3">
    				<label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
    				<input type="text" className="form-control" id="exampleInputPassword1" value={phoneNumber} // asignar valor
					onChange={e => setPhoneNumber(e.target.value)} // asignar valor
					placeholder="Numero" />
  				</div>
  				<div className="mb-3">
    				<label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    				<input type="text" className="form-control" id="exampleInputPassword1" value={streetAddress} // asignar valor
					onChange={e => setStreetAddress(e.target.value)} // asignar valor
					placeholder="Calle ejemplo" />
  				</div>
  		</div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
			<button onClick={() => console.log(fullname)}>Mostrar datos</button>
			<Link to="/">
				<button>Back home</button>
			</Link>
		</div>
		
	);
};
