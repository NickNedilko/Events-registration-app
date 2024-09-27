
import { FC } from "react";
import { MdEditCalendar,  MdPerson  } from "react-icons/md";

import { Card, LinkWrapper, StyledLink, SubTitle, Text, Title } from "./EventCard.styled";
import { Event } from "../../types/types";





export const EventCard: FC<Event> = ({ _id, title, description, organizer, event_date }) => {
  
  const formattedDate = new Date(event_date).toLocaleDateString();
  return (
    <Card>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Text><SubTitle> <MdPerson/>  Organizer:</SubTitle> {organizer }</Text>
      <Text><SubTitle><MdEditCalendar/> Date:</SubTitle> {formattedDate}</Text>
      <LinkWrapper>
        <StyledLink to={`${_id}/registration`}>Register</StyledLink>
        <StyledLink to={`${_id}/participants`}>View</StyledLink>
      </LinkWrapper>
  </Card>
  );
};