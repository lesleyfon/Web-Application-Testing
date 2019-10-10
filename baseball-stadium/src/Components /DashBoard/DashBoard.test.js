import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
afterEach(rtl.cleanup);

import DashBoard from './DashBoard';
import Display from '../Display/Display';

test('Render text that says "ball" ', () => {
    const dashBoardComponent = rtl.render(<DashBoard />);
    const ball = dashBoardComponent.getByText(/ball/i)
    expect(ball).toBeVisible()
})
test('Render text Strike', () => {
    const dashBoardComponent = rtl.render(<DashBoard />);
    const strike = dashBoardComponent.getByText(/strike/i)
    expect(strike).toBeVisible()
})
test('Render text foul', () => {
    const dashBoardComponent = rtl.render(<DashBoard />);
    const foul = dashBoardComponent.getByText(/foul/i)
    expect(foul).toBeVisible()
})
test('Render hit', () => {
    const dashBoardComponent = rtl.render(<DashBoard />);
    const hit = dashBoardComponent.getByText(/hit/i)
    expect(hit).toBeVisible()
})

// test('OnClick', ()=>{
//     const dashBoardComponent = rtl.render(<DashBoard 
//         handleClick={handleClick}/>);
//     const OnClick = jest.fn();
//     rtl.fireEvent.click(dashBoardComponent.getByText('strike'));
//     console.log(OnClick)
//     expect(OnClick).toHaveBeenCalled();
// })









test('Make sure there are 4 buttons on the page', () => {
    const displayComponent = rtl.render(<DashBoard />);
    const buttons = Array.from(displayComponent.container.getElementsByTagName('button'))
    console.log(buttons.length)
    expect(buttons.length).toBe(4)
})
// check if they are buttons 