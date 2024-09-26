import { useParams } from "react-router-dom";
import RegistrationForm  from "../components/registration-form/RegistrationForm";



const RegistrationPage = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <>
            <RegistrationForm itemId={id} />
        </>
    )
}
export default RegistrationPage;