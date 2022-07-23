import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainForm from "../mainForm/mainForm";
import Admitcard from "../admitcard/admitcard";
import Login from "../Login/login";
import Adminpanel from "../adminpanel/adminpanel";

function PagesRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainForm />} />
                <Route path="/admitcard/:id" element={<Admitcard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/adminpanel" element={<Adminpanel />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default PagesRouter