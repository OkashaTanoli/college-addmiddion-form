import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase/firebase";


export const submitForm = (e, navigate,setLoad, obj) => {
    e.preventDefault();
    setLoad(true)
    onValue(ref(db, `fg_boys_inter_college/federal_board/${obj.group}/sr_no`), (snapshot) => {
        if (obj.group === 'medical' && snapshot.val() === 150) {
            alert("Seats are full for Medical")
            return;
        }

        else if (obj.group === 'eng' && snapshot.val() === 300) {
            alert("Seats are full for Engineering")
            return;
        }

        else if (obj.group === 'ics' && snapshot.val() === 400) {
            alert("Seats are full for Computer Science")
            return;
        }
        else if (obj.group === 'arts' && snapshot.val() === 450) {
            alert("Seats are full for Arts")
            return;
        }
        let sr_no = snapshot.val();
        let updated_serial_no = sr_no + 1
        set(ref(db, `fg_boys_inter_college/federal_board/${obj.group}/sr_no`),
            updated_serial_no
        )
        set(ref(db, `fg_boys_inter_college/federal_board/${obj.group}/students/` + updated_serial_no),
            { serial_no: updated_serial_no, ...obj }
        )
            .then(() => {
                setLoad(false)
                let path = updated_serial_no;
                navigate(`admitcard/${path}`, { replace: true });
            })

    },
        {
            onlyOnce: true
        });

}