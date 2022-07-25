import React from 'react';
import './admitcard.css'

function PrintableAdmitcard({ data }) {

    return (
        <>
            <div className='printable_admit_card'>
                <h1>FG BOYS INTER COLLEGE KARACHI CANTT
                    REGISTRATION SLIP FOR ENTRY TEST
                </h1>
                <div className='photoDiv'>
                    <div className='photoBox'>
                        <p>Paste Photograph 1 X 1</p>
                    </div>
                </div>
                <div className='userData'>
                    <div className='userDataDiv'>
                        <p>Student Name :</p>
                        <p>{data.name}</p>
                    </div>
                    <div className='userDataDiv'>
                        <p>Father Name :</p>
                        <p>{data.fathername} </p>
                    </div>
                    <div className='userDataDiv'>
                        <p>Category :</p>
                        <p>{data.category} </p>
                    </div>
                    <div className='userDataDiv'>
                        <p>Group :</p>
                        <p>{data.group}</p>
                    </div>
                    <div className='userDataDiv'>
                        <p>Board :</p>
                        <p>{data.sscBoard}</p>
                    </div>
                </div>
                <div className='main_table_div'>
                    <div className='table_div'>
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
                    <div className='instructions'>
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
        </>

    );
}

export default PrintableAdmitcard;