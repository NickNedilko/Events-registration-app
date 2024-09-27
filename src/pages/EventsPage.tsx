import { useQuery } from "@tanstack/react-query";
import EventsList from "../components/events-list/EventsList";
import { getAllEvents } from "../services/eventsApi";
import { useState } from "react";
import SortedByEvents from "../components/sorted-by-events/SortedByEvents";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../components/participants-list/ParticipantList.styled";


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const EventPage = () => {
      const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

    
    
 const [page, setPage] = useState(1);
    const { data, isLoading } = useQuery({
        queryKey: ['events', page, sortBy],
        queryFn: () => getAllEvents(page, sortBy),
        
    })
    if (!data) {
        return
    }


    return (
    <>
                <Title>The best events</Title>
            <Wrapper>
                 <SortedByEvents sortBy={sortBy} handleChange={(sortBy) => setSearchParams(sortBy)} />
            <p>Find Events: {data.quantity}</p>
            </Wrapper>
        <EventsList loading={isLoading} page={page} events={data.events} onClick={(page)=>setPage(page)} quantity={data.quantity} />
            
    </>
    )
}
export default EventPage;