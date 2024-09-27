import { useParams } from "react-router-dom";
import ParticipantList from "../components/participants-list/ParticipantsList";
import { getEventParticipants } from "../services/eventsApi";
import { useQuery } from "@tanstack/react-query";





const ParcitipantPage = () => {
    const { id: owner } = useParams();

    
     const { data, isLoading } = useQuery({
        queryKey: ['participants', owner],
        queryFn: () => getEventParticipants(owner as string),
        
    })
    
    
   
    if (!data) {
        return
    }

    return (
        
        <ParticipantList participants={data.participants} loading={isLoading } title={data.event_title} />        
    )
}
export default ParcitipantPage;