import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import DashBoard from '../DashBoard/DashBoard';

function Display() {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [out, setOut] = useState(0);
    const [hit, setHit] = useState(0);
    useEffect(() => {
    }, [ball, strike, out])
    const handleClick = ( e, state ) => {
        e.preventDefault();
        if(state === 'ball'){
           if(ball >= 4) {
               setBall(0)
               setStrike(0)} 
            else{ 
                setBall(ball + 1);
            }
        }
        else if(state === 'strike'){
            if(strike >= 3) {
                setBall(0)
                setStrike(0)} 
             else{ 
                 setStrike(strike + 1);
             }
        }
        else if(state === 'hit'){
                setBall(0)
                setStrike(0)
                setHit(hit + 1)
        } else if (state === 'foul'){
            if(strike === 0){
                setStrike(strike +  1);
            } else if(strike === 1) {
                setStrike(strike + 2);
            } else if(strike === 2){
                setStrike(strike)
            } else{
                setStrike(0)
            }
        }
    }
    return (
        <div style={{width: '700px', margin: '0 auto'}}>
            <ScoreboardStyles>
                <div className='ball'><h3>Ball: {ball}</h3></div>
                <div className='strike'><h3>Strikes: {strike}</h3></div>
                <div className='Out'><h3>Out: {out}</h3></div>
                <div className='Out'><h3>Hit: {hit}</h3></div>
            </ScoreboardStyles>
            <DashBoard 
                handleClick = {handleClick }
            />
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
