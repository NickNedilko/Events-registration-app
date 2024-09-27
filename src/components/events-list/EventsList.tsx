import { FC} from "react";
import { EventCard } from "../event-card/EventCard";
import { List } from "./EventList.styled";
import PaginationRounded from "../pagination/Pagination";
import { Event } from "../../types/types";
import { Loader } from "../loader/Loader";

interface EventList {
    loading: boolean;
    page: number;
    quantity: number;
    events: Event[];
    onClick: (page: number)=>void;
} 

const EventsList: FC<EventList> = ({loading, page, events, onClick, quantity}) => {
   

    return (
        <>
            
            {loading ? <Loader/> :
         <List>
            {events.map((event) => 
                <EventCard
                    key={event._id}
                    _id={event._id}
                    title={event.title}
                    description={event.description}
                    event_date={event.event_date}
                    organizer={event.organizer} />
           )} 
            </List>
        }

            <PaginationRounded quantity={quantity} page={page} onClick={onClick} />
        </>
  ) ;
};

export default EventsList;





