
import { FC, } from "react";



import { Hourglass } from "react-loader-spinner";
import { List, Title, Wrapper } from "./ParticipantList.styled";
import { EventParticipant, SearchParams } from "../../types/types";
import ParticipantCard from "../participant-card/ParticipantCard";
import { SearchInput } from "../search-input/SearchInput";

interface ParticipantList{
    loading: boolean;
    title: string;
    participants: EventParticipant[];
    search: string;
    onSearch: (query: string) => void;
    setSearchParams: (param: SearchParams) => void
}

const ParticipantList: FC<ParticipantList> = ({loading, participants, search, onSearch, title, setSearchParams}) => {
  
   
    return (
        <>
            {loading ? <Hourglass
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="hourglass-loading"
                      wrapperStyle={{display: 'block', margin: '0 auto'}}
                      colors={['#306cce', '#72a1ed']}
                      /> :
                <>
                    <Title>Event {title} participants:</Title>

                    <Wrapper>
                        <SearchInput value={search} setSearch={onSearch} setSearchParams={setSearchParams}/>
                    </Wrapper>

                 <List>
                    {!participants.length && <div>There are no registered participants. Be the first one and register for the event</div> }
            {participants.map((participant) => 
                <ParticipantCard
                    key={participant._id}
                    fullName={participant.fullName}
                    email={participant.email}
                    avatar={participant.avatar as string}
                    
                />
           )} 
            </List>
                </>
        }

           
        </>
  ) ;
};

export default ParticipantList;