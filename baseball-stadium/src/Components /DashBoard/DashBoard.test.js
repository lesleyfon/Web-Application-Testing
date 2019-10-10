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
test('Render right Button text', () => {
    const dashBoardComponent = rtl.render(<DashBoard />);
   
    // expect(strike).toBeVisible()
})
// test('Hit Be visible', () => {
//     const displayComponent = rtl.render(<DashBoard />);
//     const buttons = Array.from(displayComponent.container.getElementsByTagName('button').namedItem('button'))
//     console.log(buttons)
//     // expect(buttons).toBe('<button>')
// })
// // check if they are buttons 