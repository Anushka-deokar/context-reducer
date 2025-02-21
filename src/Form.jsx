import React, { useContext } from 'react'
import { ThemeContext } from './App'

export const Form = ({ count, theme }) => {
    const state = useContext(ThemeContext);


    return (
        <div style={{ backgroundColor: state.theme == 'light' ? 'white' : 'black' }}>
            <h1 style={{ color: state.theme == 'light' ? 'black' : 'white' }}>Form</h1>
            <input type='text ' name='count' value={state.count} readOnly />

        </div>
    );
}

export default Form
