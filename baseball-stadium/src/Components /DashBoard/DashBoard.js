
import React from 'react';
import styled from 'styled-components';

function DashBoard(props) {
    const btnText =['strike', 'ball', 'foul', 'hit']
    return (

        <BtnStyles>
            {btnText.map( btn => { 
                return <button key = { btn } onClick={e=>{props.handleClick( e, btn)}} > { btn } </button>
            })}
        </BtnStyles>
    )
}


export default DashBoard

const BtnStyles = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    width: 400px;
    button{
        padding: 10px 20px;
        font-size: 1.1rem;
        border-radius: 5px;
    }
`;
