import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import './Footer.css'
export default function Footer() {
    const { theme, nav, toggle, dark } = useContext(ThemeContext)
    return (
        <footer className='footer' style={{ backgroundColor: '#207c97' }}>
            <p style={{ color: 'white' }}>Copyright © hcmuni.fpt.edu.vn. All Rights Reserved</p>
            <p><a href="https://www.facebook.com/FPTU.HCM">Fanpage: FPT FU</a></p>
        </footer >
    )
}
