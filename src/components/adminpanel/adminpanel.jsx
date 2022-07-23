import React, { useEffect, useState } from 'react';
import './adminpanel.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { db } from '../firebase/firebase';
import { ref, onValue, } from "firebase/database";
import '../admitcard/loader.css'
import Adminpanelfirstcol from './adminpanelfirstcol';
import Datafields from './datafields';

function Adminpanel() {



    const [show, setShow] = useState(false)
    const [active, setActive] = useState()
    const [group, setGroup] = useState('medical')
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        setLoad(true)
        onValue(ref(db, `fg_boys_inter_college/federal_board/${group}/students`), (snapshot) => {
            setData(snapshot.val() !== null ? Object.values(snapshot.val()) : null)

            setLoad(false)
        }, { onlyOnce: true })
    }, [group])

    if (!localStorage.getItem('login')) {
        return (
            <div className='loader_div'>
                <h1>Page Not Found</h1>
            </div>
        )
    }

    if (load) {
        return (
            <div className='admin_panel_main_div'>
                <Adminpanelfirstcol group={group} setGroup={setGroup} menu={menu} setMenu={setMenu} />
                <div className='second_col'>
                    <div className='loader_div'>
                        <div className="loader"></div>
                    </div>
                </div>
            </div>
        )
    }
    if (!data) {
        return (
            <div className='admin_panel_main_div'>
                <Adminpanelfirstcol group={group} setGroup={setGroup} menu={menu} setMenu={setMenu} />
                <div className='second_col'>
                    <div className='loader_div'>
                        <h1>No data Found</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='admin_panel_main_div'>
            <Adminpanelfirstcol group={group} setGroup={setGroup} menu={menu} setMenu={setMenu} />
            <div className='second_col'>
                <div className='respondsive_menu'>
                    <HiMenuAlt1 size={30} onClick={() => { setMenu(true) }} />
                </div>
                <div className='search_div'>
                    <h2> {group} Students List</h2>
                    <input type="text" placeholder='filter by ID' onChange={(e) => { setSearch(String(e.target.value)) }} />
                </div>

                <div className='students_list'>
                    {
                        data.filter((val) => {
                            if (search === '') {
                                return val
                            }
                            else if (String(val.serial_no).includes(search)) {
                                return val
                            }
                        }).map((val, index) => {
                            return (

                                <div className='individual_student' key={index}>
                                    <div className='individual_student_head'>
                                        <p className='individual_student_head_first'>{val.serial_no < 10 ? "00" + val.serial_no : val.serial_no < 100 ? "0" + val.serial_no : val.serial_no}</p>
                                        <div className='individual_student_head_second'>
                                            <p>{val.name}</p>
                                            {show && active === index ? <AiOutlineUp onClick={() => { setShow(false); setActive() }} /> : <AiOutlineDown onClick={() => { setShow(true); setActive(index) }} />}
                                        </div>

                                    </div>
                                    <div className='individual_student_data' id={show && active === index ? 'show' : 'hide'}>
                                        <Datafields property='Name' val={val.name} />
                                        <Datafields property='Father Name' val={val.fathername} />
                                        <Datafields property='Email' val={val.email} />
                                        <Datafields property='Whatsapp' val={val.whatsapp} />
                                        <Datafields property='Date of Birth' val={val.DOB} />
                                        <Datafields property='Category' val={val.category} />
                                        <Datafields property='SSC Board' val={val.sscBoard} />
                                        <Datafields property='SSC Marks' val={val.sscMarks} />
                                        <Datafields property='SSC Percentage' val={val.sscPercentage + ' %'} />
                                        <Datafields property='SSC Year' val={val.sscYear} />
                                        <Datafields property='Group' val={val.group} />
                                        <Datafields property='Address' val={val.address} />

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Adminpanel;