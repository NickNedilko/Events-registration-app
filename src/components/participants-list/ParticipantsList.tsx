
import { FC, } from "react";



import { Hourglass } from "react-loader-spinner";
import { List } from "./ParticipantList.styled";
import { EventParticipant } from "../../types/types";
import ParticipantCard from "../participant-card/ParticipantCard";

interface ParticipantList{
    loading: boolean;
    title: string;
    participants: EventParticipant[]
}

const ParticipantList: FC<ParticipantList> = ({loading, participants, title}) => {
  
   
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
                    <h1>{title}</h1>
                 <List>
                    {!participants.length && <div>There are no registered participants. Be the first one and register for the event</div> }
            {participants.map((participant) => 
                <ParticipantCard
                    key={participant._id}
                    fullName={participant.fullName}
                    email={participant.email}
                    avatar={participant.avatar}
                    
                />
           )} 
            </List>
                </>
        }

           
        </>
  ) ;
};

export default ParticipantList;