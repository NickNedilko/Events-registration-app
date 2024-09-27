
import {  FC} from "react";
import { Card, LinkWrapper, StyledLink, SubTitle, Text, Title } from "./EventCard.styled";
import { Event } from "../../types/types";





export const EventCard: FC<Event> = ({ _id, title, description, organizer, event_date }) => {
  
  const formattedDate = new Date(event_date).toLocaleDateString();
  return (
    <Card>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Text><SubTitle>Organizer:</SubTitle> {organizer }</Text>
      <Text><SubTitle>Date:</SubTitle> {formattedDate}</Text>
      <LinkWrapper>
        <StyledLink to={`${_id}/registration`}>Register</StyledLink>
        <StyledLink to={`${_id}/participants`}>View</StyledLink>
      </LinkWrapper>
  </Card>
  );
};