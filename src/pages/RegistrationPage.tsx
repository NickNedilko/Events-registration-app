import { useParams } from "react-router-dom";
import RegistrationForm  from "../components/registration-form/RegistrationForm";



const RegistrationPage = () => {
    const { id } = useParams();
    if (!id) {
        return
    }
    return (
        <>
            <RegistrationForm id={id} />
        </>
    )
}
export default RegistrationPage;