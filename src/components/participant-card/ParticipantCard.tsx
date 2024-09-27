
import { FC } from "react";
import { Card, SubTitle, Text, Wrapper } from "./ParticipantCard.style";
import { Avatar } from "@mui/material";


interface IParticipantCardProps {
    fullName: string;
    email: string;
    avatar: string;
}

const ParticipantCard: FC<IParticipantCardProps> = ({fullName,avatar, email}) => {
    return (
        <Card>
        <Wrapper>
            <Avatar
            alt={fullName}
            src={avatar}
             sx={{ width: 154, height: 154 }}
            />
        </Wrapper>
            <Text><SubTitle>Participant:</SubTitle>{fullName}</Text>
            <Text><SubTitle>Email:</SubTitle>{email}</Text>
  </Card>
  ) ;
};

export default ParticipantCard;



