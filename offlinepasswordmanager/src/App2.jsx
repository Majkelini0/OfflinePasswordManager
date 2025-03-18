import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import PopUp from "./components/PopUp.jsx";

function App(){
    return (
        <>
            <PopUp notification={"Usunac na zawsze ?"}></PopUp>
            <br></br>
            <Login></Login>
            <br></br>
            <Register></Register>
        </>
    )
}

export default App;