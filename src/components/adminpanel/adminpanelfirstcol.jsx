import React from 'react';
import './adminpanel.css'
import { MdOutlineCancel } from 'react-icons/md'
import { useNavigate } from "react-router-dom";


function Adminpanelfirstcol({ group, setGroup, menu, setMenu }) {
    let navigate = useNavigate();

    const Logout = () => {
        navigate('/login', { replace: true })
        localStorage.removeItem('login');

    }

    return (
        <div className='first_col' id={menu ? 'showMenu' : 'hideMenu'}>
            <div className='responsive_cross'>
                <MdOutlineCancel size={35} onClick={() => { setMenu(false) }} />
            </div>
            <div className='clip_div'></div>
            <h1 className='admin_panel_heading'>Admin Panel</h1>
            <div className='buttons_div'>
                <div className={group === 'medical' ? 'active_btn' : ''} onClick={() => { setMenu(false); setGroup('medical') }}>Medical</div>
                <div className={group === 'eng' ? 'active_btn' : ''} onClick={() => { setMenu(false); setGroup('eng') }}>Engineering</div>
                <div className={group === 'ics' ? 'active_btn' : ''} onClick={() => { setMenu(false); setGroup('ics') }}>ICS</div>
                <div className={group === 'arts' ? 'active_btn' : ''} onClick={() => { setMenu(false); setGroup('arts') }}>Arts</div>
            </div>
            <h2 className='logout_btn' onClick={() => { Logout() }}>Log out</h2>
        </div>
    );
}

export default Adminpanelfirstcol;