import React, { useState } from 'react';
import './mainForm.css'
import { submitForm } from './func';
import { useNavigate } from "react-router-dom";
import '../admitcard/loader.css'


function MainForm() {
    let navigate = useNavigate();


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fathername, setFathername] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [DOB, setDOB] = useState('')
    const [category, setCategory] = useState('')
    const [sscBoard, setSscBoard] = useState('')
    const [sscMarks, setSscMarks] = useState('')
    const [sscPercentage, setSscPercentage] = useState('')
    const [sscYear, setSscYear] = useState('')
    const [group, setGroup] = useState('')
    const [address, setAddress] = useState('')

    const [load, setLoad] = useState(false)



    // const percentageChecker = (e) => {
    //     e < 50 ? setSscPercentage(50) : e > 100 ? setSscPercentage(100) : setSscPercentage(e)
    // }
    return (
        <div className='main_div'>
            <header>
                <h1>FG BOYS INTER COLLEGE KARACHI CANTT</h1>
            </header>

            <h3>Online Registration Form For Admission ( Only For Federal Board 2022-2023 )</h3>

            <form onSubmit={(e) => submitForm(e, navigate, setLoad, { name, email, fathername, whatsapp, DOB, category, sscBoard, sscMarks, sscPercentage, sscYear, group, address })}>
                <p className='note'>NOTE: Please fill all fields carefully</p>
                {/* <!-- <div className="form-group"> --> */}
                <label htmlFor="name">Name<span className="asteric">*</span></label>
                <input type="text" id="name" placeholder="Enter your Name" required value={name} onChange={(e) => { setName(e.target.value) }} />

                <label htmlFor="email">Email<span className="asteric">*</span></label>
                <input type="email" id="Email" placeholder="Enter your Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />

                <label htmlFor="fatherName">Father Name<span className="asteric">*</span></label>
                <input type="text" id="fatherName" placeholder="Enter your Father Name" required value={fathername} onChange={(e) => { setFathername(e.target.value) }} />

                <label htmlFor="phoneNumber">WhatsApp Number<span className="asteric">*</span></label>
                <input type='number' id="phoneNumber" placeholder="Enter your Whatsapp Number" required value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />

                <label htmlFor="dob">Date of Birth<span className="asteric">*</span></label>
                <input type="date" id="dob" required min="1985-01-01" max="2030-12-31" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" value={DOB} onChange={(e) => { setDOB(e.target.value) }} />
                {/* <!--pattern="\d{4}-\d{2}-\d{2}"--> */}

                {/* <div className="padding">
                    <label for="fb">Federal Board</label>
                    <input type="radio" name="board" id="fb">
                        <label for="kb">Karachi Board</label>
                        <input type="radio" name="board" id="kb">
                        </div> */}



                <label htmlFor="formCategory">Category<span className="asteric">*</span></label>
                <select name="category" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                    <option value="0" defaultChecked>Select Category</option>
                    <option value="Armed Forces">Armed Forces</option>
                    <option value="Retired Army">Retired Army</option>
                    <option value="Defence Paid">Defence Paid</option>
                    <option value="FGEI Employee">FGEI Employee</option>
                    <option value="Civilian">Civilian</option>
                </select>


                <label htmlFor="form_ssc_board">SSC/Matriculation Board<span className="asteric">*</span> </label>
                <select name="form_ssc_passYear" value={sscBoard} onChange={(e) => { setSscBoard(e.target.value) }}>
                    <option value="0" defaultChecked>Select Board</option>
                    <option value="fb">Federal Board</option>
                    <option value="oLevel">O/A Levels</option>
                    <option value="agaKhan">Aga Khan Board</option>
                </select>



                <label htmlFor="form_ssc_marks">SSC/Matriculation Marks<span className="asteric">*</span></label>
                <input id="form_ssc_marks" type="number" name="ssc_marks" min="1" max="1100"
                    placeholder="Please enter SSC Marks" required value={sscMarks} onChange={(e) => { setSscMarks(e.target.value) }} />

                <label htmlFor="form_ssc_percentage">SSC/Matriculation Percentage<span className="asteric">*</span></label>
                <input id="form_ssc_percentage" type="number" name="ssc_percentage" min="50" max="100"
                    placeholder="Please enter SSC Percentage" required value={sscPercentage} onChange={(e) => { setSscPercentage(e.target.value); setGroup('') }} />
                <p className='message'>Percentage should be greater than 50</p>
                <label htmlFor="form_ssc_passYear">SSC/Matriculation Passing Year<span className="asteric">*</span> </label>
                <select name="form_ssc_passYear" value={sscYear} onChange={(e) => { setSscYear(e.target.value) }}>
                    <option value="0" defaultChecked>Select Passing Year</option>
                    <option value="2022">2022</option>
                </select>


                <label htmlFor="group">Chose your Group:<span className="asteric">*</span> </label>
                <select name="group" id="group" value={group} onChange={(e) => { setGroup(e.target.value) }}>
                    <option value="0" defaultChecked>Select Group for (XI) </option>
                    {
                        sscPercentage < 60 ?
                            <option value="arts">Arts </option>
                            :
                            <>
                                <option value="ics">Computer Science </option>
                                <option value="eng">Pre Engineering </option>
                                <option value="medical">Pre Medical </option>
                            </>

                    }
                    {/* <!-- <option value="arts"></option> --> */}

                </select>

                <label htmlFor="form_message">Home Address<span className="asteric">*</span></label>
                <textarea id="form_message" name="address" placeholder="Home Address" rows="4" required value={address} onChange={(e) => { setAddress(e.target.value) }}></textarea>



                <p id="errorMsg"></p>
                {
                    category !== '' && category !== '0' && sscBoard !== '' && sscBoard !== '0' && sscYear !== '' &&
                        sscYear !== '0' && group !== '' && group !== '0' && name !== '' && email !== '' &&
                        fathername !== '' && whatsapp !== '' && DOB !== '' && sscMarks !== '' && sscPercentage !== '' &&
                        address !== '' ?
                        <div className="mainDiv"><button type="submit" className="submit secondBTN" >{load ? <div className='loader3_div'><div class="loader3"></div></div> : "SUBMIT"}</button></div>
                        :
                        <div className="mainDiv"><button type="button" className="not_submit" onClick={() => { console.log("fill all fields") }}>SUBMIT</button></div>

                }


                <p className="thin">* These fields are required.</p>
            </form>
        </div>
    );
}

export default MainForm;