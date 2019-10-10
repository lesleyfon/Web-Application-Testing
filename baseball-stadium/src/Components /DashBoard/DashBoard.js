//provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.
import React from 'react';
import styled from 'styled-components';

function DashBoard() {
    const btnText =['strike', 'ball', 'foul', 'hit']
    return (

        <BtnStyles>
            {btnText.map( btn => { 
                return <button key = { btn } > { btn } </button>
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
