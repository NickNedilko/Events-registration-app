import { useParams, useSearchParams } from "react-router-dom";
import ParticipantList from "../components/participants-list/ParticipantsList";
import { getEventParticipants } from "../services/eventsApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SearchParams } from "../types/types";





const ParcitipantPage = () => {
    const { id: owner, } = useParams();
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

    
     const { data, isLoading } = useQuery({
        queryKey: ['participants', owner],
        queryFn: () => getEventParticipants(owner as string),
        
    })
    
    if (!data) {
        return
    }

const normalizedSearch = searchQuery.toLocaleLowerCase()

    const participants = data.participants.filter((participant) =>
        participant.fullName.toLocaleLowerCase().includes(normalizedSearch) ||
        participant.email.toLocaleLowerCase().includes(normalizedSearch))

    return (
        
        <ParticipantList
            participants={participants}
            loading={isLoading}
            title={data.event_title}
            search={searchQuery}
            onSearch={(search) => setSearchQuery(search)}
            setSearchParams={(param) => setSearchParams(param as string)} />        
    )
}
export default ParcitipantPage;