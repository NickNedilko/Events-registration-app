import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { getAllEvents } from "../../services/eventsApi";
import { EventCard } from "../event-card/EventCard";
import { List } from "./EventList.styled";
import PaginationRounded from "../pagination/Pagination";
import { Hourglass } from "react-loader-spinner";



const EventsList: FC = () => {
    const [page, setPage] = useState(1);
   
    const { data, isLoading } = useQuery({
        queryKey: ['events', page],
        queryFn: () => getAllEvents(page),
        
    })
    if (!data) {
        return
    }

    return (
        <>
            {isLoading ? <Hourglass
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="hourglass-loading"
                      wrapperStyle={{display: 'block', margin: '0 auto'}}
                      colors={['#306cce', '#72a1ed']}
                      /> :
         <List>
            {data?.events.map((event) => 
                <EventCard
                    key={event._id}
                    id={event._id}
                    title={event.title}
                    description={event.description}
                    event_date={event.event_date}
                    organizer={event.organizer} />
           )} 
            </List>
        }

            <PaginationRounded quantity={data.quantity} page={page} onClick={setPage} />
        </>
  ) ;
};

export default EventsList;





