
import { FC } from "react";
import { MdPerson, MdEmail  } from "react-icons/md";

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
            <Text><SubTitle> <MdPerson/>   Participant:</SubTitle>{fullName}</Text>
            <Text><SubTitle><MdEmail/>  Email:</SubTitle>{email}</Text>
  </Card>
  ) ;
};

export default ParticipantCard;



