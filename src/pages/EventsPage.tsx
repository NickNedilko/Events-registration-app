import { useQuery } from "@tanstack/react-query";
import EventsList from "../components/events-list/EventsList";
import { getAllEvents } from "../services/eventsApi";
import { useState } from "react";





const EventPage = () => {
 const [page, setPage] = useState(1);
   
    const { data, isLoading } = useQuery({
        queryKey: ['events', page],
        queryFn: () => getAllEvents(page),
        
    })
    if (!data) {
        return
    }


    return (
        <EventsList loading={isLoading} page={page} events={data.events} onClick={setPage} quantity={data.quantity} />
    )
}
export default EventPage;