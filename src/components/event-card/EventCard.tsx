
import {  FC} from "react";
import { Link } from "react-router-dom";
import { Card, SubTitle, Text, Title } from "./EventCard.styled";
import { Event } from "../../types/types";





export const EventCard: FC<Event> = ({ id, title, description, organizer, event_date }) => {
  
  const formattedDate = new Date(event_date).toLocaleDateString();
  return (
    <Card>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Text><SubTitle>Organizer:</SubTitle> {organizer }</Text>
      <Text><SubTitle>Date:</SubTitle> {formattedDate}</Text>
      <div>
        <Link to={`${id}/registration`}>Register</Link>
        <Link to={`${id}/participants`}>View</Link>
      </div>
  </Card>
  );
};