//Wow this sucks. I hate my life perhaps.

import React, { useState } from 'react';
import ApiClient from '../client/ApiClient';

const Chungus = (props) => {
    //the fuck are these??? 900 IQ ways to set booleans? mf
    const [chungusResponse, setChungusResponse] = useState('');
    const [nudeResponse, setNudeResponse] = useState('');
    const [nudeType, setNudeType] = useState('');

    const handleGetChungus = async () => {
        try {
            const response = await ApiClient.getChungus();
            setChungusResponse(response);
        } catch (err) {
            console.error('Error in handleGetChungus:', err.message);
        }
    };

    const handleSendNudes = async () => {
        try {
            const response = await ApiClient.sendNudes(nudeType);
            setNudeResponse(response);
        } catch (err) {
            console.error('Error in handleSendNudes:', err.message);
        }
    };

    return (
        <>
            <div>
                <button onClick={handleGetChungus}>Ping Chungus</button>
                {chungusResponse && <p>Response: {chungusResponse}</p>}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter nude type"
                    value={nudeType} // Set input value to nudeType state
                    onChange={(e) => setNudeType(e.target.value)} // Update nudeType state on input change
                />
                <button onClick={() => handleSendNudes(nudeType)}>Send Nudes</button>
                {nudeResponse && <p>Nudes response: {nudeResponse}</p>}
            </div>
        </>
    );
};

export default Chungus;
