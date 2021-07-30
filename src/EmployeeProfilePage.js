import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import passport from './assets/passport.jpeg'

export default function ProfilePage() {
    const [employees, setEmployees] = useState([])
    let employees2 = []

    const getProfiles = async () => {
        let data = await localStorage.getItem('data')
        let parseData = JSON.parse(data)
        setEmployees(parseData)
    }

    useEffect(() => {
        getProfiles()
    }, [])
    return (
        <div className="App">
            <Navbar />
            <div className='big-container'>
            <h1>EMPLOYEES</h1>

            <div className='container'>
                {employees.map((item, id) => {
                    return (
                        <div className='card'>
                            <div className='inner-card'>
                                <img src={passport} alt="" height='200'/>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.position}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>


        </div>
    );
}
