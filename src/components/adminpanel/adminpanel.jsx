import React, { useEffect, useState } from 'react';
import './adminpanel.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { SiMicrosoftexcel } from 'react-icons/si'
import { db } from '../firebase/firebase';
import { ref, onValue, } from "firebase/database";
import '../admitcard/loader.css'
import Adminpanelfirstcol from './adminpanelfirstcol';
import Datafields from './datafields';

import { CSVLink } from 'react-csv';


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

    const arrangeData = () => {
        return data.map((val) => {
            return {
                serial_no: val.serial_no,
                name: val.name,
                fathername: val.fathername,
                group: val.group,
                email: val.email,
                category: val.category,
                sscBoard: val.sscBoard,
                sscMarks: val.sscMarks,
                sscPercentage: val.sscPercentage,
                sscYear: val.sscYear,
                dateOfBirth: val.DOB,
                whatsapp: val.whatsapp,
                address: val.address
            }
        })
    }

    let headers = [
        { label: 'Serial No', key: 'serial_no' },
        { label: 'Name', key: 'name' },
        { label: 'Father Name', key: 'fathername' },
        { label: 'Group', key: 'group' },
        { label: 'Email', key: 'email' },
        { label: 'Category', key: 'category' },
        { label: 'SSC Board', key: 'sscBoard' },
        { label: 'SSC Marks', key: 'sscMarks' },
        { label: 'SSC Percentage', key: 'sscPercentage' },
        { label: 'SSC Year', key: 'sscYear' },
        { label: 'Date Of Birth', key: 'dateOfBirth' },
        { label: 'WhatsApp', key: 'whatsapp' },
        { label: 'Address', key: 'address' },
    ];
    return (
        <div className='admin_panel_main_div'>
            <Adminpanelfirstcol group={group} setGroup={setGroup} menu={menu} setMenu={setMenu} />
            <div className='second_col'>
                <div className='respondsive_menu'>
                    <HiMenuAlt1 size={30} onClick={() => { setMenu(true) }} />
                    <CSVLink className='csvLink csvLinkMenu' data={arrangeData()} headers={headers} filename={`${group}_students_data.csv`} ><SiMicrosoftexcel size={40} /></CSVLink>

                </div>
                <div className='search_div'>
                    <h2> {group} Students List</h2>
                    <input type="text" placeholder='filter by ID' onChange={(e) => { setSearch(String(e.target.value)) }} />
                    <CSVLink className='csvLink' data={arrangeData()} headers={headers} filename={`${group}_students_data.csv`} ><SiMicrosoftexcel size={40} /></CSVLink>

                </div>

                <div className='students_list'>
                    {
                        data.filter((val) => {
                            return (search === '' || String(val.serial_no).includes(search)) && val
                            // if (search === '') {
                            //     return val
                            // }
                            // else if (String(val.serial_no).includes(search)) {
                            //     return val
                            // }
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