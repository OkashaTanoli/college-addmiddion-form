import React, { useEffect, useState } from 'react';
import './admitcard.css'
import './loader.css'
import PrintableAdmitcard from './printableadmitcard';
import { useParams } from 'react-router-dom';
import { ref, onValue, } from "firebase/database";
import { db } from '../firebase/firebase';


function Admitcard() {
    const [data, setData] = useState()
    const [load, setLoad] = useState(true)
    let { id } = useParams();

    let group = id > 0 && id <= 150 ? 'medical' : id > 150 && id <= 300 ? 'eng' : id > 300 && id <= 400 ? 'ics' : id > 400 && id <= 450 ? 'arts' : ''
    useEffect(() => {
        onValue(ref(db, `fg_boys_inter_college/federal_board/${group}/students/${id}`), (snapshot) => {
            setData(snapshot.val())
            setLoad(false)
        }, { onlyOnce: true })
    },[group,id])
    console.log(data)
    if (load) {
        return (
            <div className='loader_div'>
                <div className="loader"></div>
            </div>
        )
    }
    if (!data) {
        return (
            <div className='loader_div'>
                <h1>No data with this id</h1>
            </div>
        )
    }
    return (
        <>
            <PrintableAdmitcard data={data} />
            <div id='admit_card' className='admit_card'>
                <h1>FG BOYS INTER COLLEGE KARACHI CANTT
                    REGISTRATION SLIP FOR ENTRY TEST
                </h1>
                <div className='photoDiv'>
                    <div className='photoBox'>
                        <p>Paste Photograph 1 X 1</p>
                    </div>
                </div>
                <div className='userData'>
                    <div className='userDataDiv userDataDivAdmitCard'>
                        <p>Student Name :</p>
                        <p>{data.name}</p>
                    </div>
                    <div className='userDataDiv userDataDivAdmitCard'>
                        <p>Father Name :</p>
                        <p>{data.fathername} </p>
                    </div>
                    <div className='userDataDiv userDataDivAdmitCard'>
                        <p>Category :</p>
                        <p>{data.category}</p>
                    </div>
                </div>
                <div className='main_table_div'>
                    <div className='table_div table_div_admit_card'>
                        <div>
                            <div>Roll no :</div>
                            <div>{data.serial_no < 10 ? "00" + data.serial_no : data.serial_no < 100 ? "0" + data.serial_no : data.serial_no}</div>
                        </div>
                        <div>
                            <div>Written Test Day & Date :</div>
                            <div>Tuesday 13 July 2021</div>
                        </div>
                        <div>
                            <div>Reporting Time :</div>
                            <div>08:00 AM</div>
                        </div>
                        <div>
                            <div>Test Center : </div>
                            <div>FG BOYS INTER COLLEGE KARACHI CANTT</div>
                        </div>
                    </div>
                    <div className='instructions instructionsAdmitCard'>
                        <p>IMPORTANT INSTRUCTIONS</p>
                        <ol>
                            <li>Please get the print of the Registration Slip.</li>
                            <li>Paste Photograph of Candidate</li>
                            <li>NO ENTRY will be allowed without Registration Slip</li>
                            <li>Only one of the parents will be allowed to accompany the candidate</li>
                            <li>Must wear a mask</li>
                            <li>Bring RS: 120 registration fee while coming for test </li>
                        </ol>
                        <ol className='urdu_instructions'>
                            <li>براہ کرم رجسٹریشن سلپ کا پرنٹ حاصل کریں</li>
                            <li>امیدوار کی تصویر چسپاں کریں</li>
                            <li>رجسٹریشن سلپ کے بغیر داخلے کی اجازت نہیں ہوگی</li>
                            <li>امیدوار کہ ساتھ والدین میں سے صرف ایک فرد کو آنے کی اجازت ہوگی</li>
                            <li>ماسک لازمی پہن کر آئیں</li>
                            <li>ٹیسٹ کے لیے آتے وقت رجسٹریشن فیس لے کر آئیں   <span>( RS: 120 )</span></li>
                        </ol>
                        <p>PLEASE OBSERVE COVID-19 SOPS STRICTLY</p>
                    </div>

                </div>


            </div>
            <div className='print_btn_div'>
                <button onClick={() => window.print()} className='print_btn '>Print</button>
            </div>
        </>

    );
}

export default Admitcard;