import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import { Route, withRouter } from 'react-router-dom'

 function EmployeeProfile(props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [item, setItem] = useState([])
    const [value, setValue] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")

    const emailValidate = () => {
        if (email.length === 0) {
            setEmailError("Email is required");
            return false;
        }
        else if (phone.length === 0) {
            setPhoneError("Phone is required");
            return false;
        }
        else if (!email.includes("@")) {
            setEmailError("Invalid Email");
            return false;
        } else if (email.indexOf(" ") >= 0) {
            setEmailError("Email cannot contain spaces");
            return false;
        } else {
            setEmailError("");
        }
        return true;
    };
    

    const handleSubmit = async (e) => {
        await emailValidate()
        await setItem([...item, { name: name, phone: phone, email:email, position:position, salary:salary}])
        await setName('')
        await setEmail('')
        await setPhone('')
        await setPosition('')
        await setSalary('')
       setTimeout (props.history.push('/profile'),1000 )

    };

    useEffect(async () => {
        let data = await localStorage.getItem('data')
        if (data) {
            setItem(JSON.parse(data))
        }
    }, [item == []])

    useEffect(async() => {
        await localStorage.setItem('data', JSON.stringify(item))

    })


    return (
        <>
            <Navbar/>
            <header className="App-header">
                <h4>CREATE EMPLOYEE PROFILE</h4>
                <label>Full Name *</label>
                <input type="text" name="name"  value={name} onChange={(e) => setName(e.target.value)} />
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <small>{phoneError}</small>
                <label>Email *</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <small>{emailError}</small>
                <label>Position *</label>
                <input type="text" name="position" value={position} onChange={(e) => setPosition(e.target.value)} />
                <label>Salary *</label>
                <input type="number" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>SAVE</button>
                
            </header>
        </>
    );
}

export default withRouter(EmployeeProfile);