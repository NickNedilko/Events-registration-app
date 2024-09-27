
import { FC } from "react";
import { Card, SubTitle, Text } from "./ParticipantCard.style";


interface IParticipantCardProps {
    fullName: string;
    email: string;
}

const ParticipantCard: FC<IParticipantCardProps> = ({fullName, email}) => {
    return (
       <Card>
            <Text><SubTitle>Participant:</SubTitle>{fullName}</Text>
            <Text><SubTitle>Email:</SubTitle>{email}</Text>
  </Card>
  ) ;
};

export default ParticipantCard;



