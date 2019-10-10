import React, {useState} from 'react';
import styled from 'styled-components';

import DashBoard from '../DashBoard/DashBoard';
// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.

function Display() {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [out, setOut] = useState(0);

    return (
        <div style={{width: '700px', margin: '0 auto'}}>
            <ScoreboardStyles>
                <div className='ball'><h3>Ball: {ball}</h3></div>
                <div className='strike'><h3>Strikes: {strike}</h3></div>
                <div className='Out'><h3>Out: {out}</h3></div>
            </ScoreboardStyles>
            <DashBoard />
        </div>
    )
}

export default Display;

const ScoreboardStyles = styled.div`
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;
