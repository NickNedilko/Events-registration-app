
import { FC, } from "react";



import { Hourglass } from "react-loader-spinner";
import { List } from "./ParticipantList.styled";
import { EventParticipant } from "../../types/types";
import ParticipantCard from "../participant-card/ParticipantCard";

interface ParticipantList{
    loading: boolean;
    participants: EventParticipant[]
}

const ParticipantList: FC<ParticipantList> = ({loading, participants}) => {
  
   
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
         <List>
            {participants.map((participant) => 
                <ParticipantCard
                    key={participant._id}
                    fullName={participant.fullName}
                    email={participant.email}
                />
           )} 
            </List>
        }

           
        </>
  ) ;
};

export default ParticipantList;