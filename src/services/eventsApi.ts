import { Event, EventParticipant } from "../types/types";
import { axiosInstance } from "./instance"


export interface EventProp {
    events: Event[],
    quantity: number
} 

export interface EventParticipantProp{
    id: string;
    values: EventParticipant

}

export interface EventParticipantsProp{
    participants: EventParticipant[];
    event_title: string;
}

export const getAllEvents = async (page: number):Promise<EventProp> => {
   return (await axiosInstance.get<EventProp>('events', {params:{page}})).data    
}

export const addEventParticipant = async (data:EventParticipantProp): Promise<EventParticipantsProp> => {
    const { id, values } = data;
    return (await axiosInstance.post<EventParticipantsProp>(`events/${id}/registration`, values)).data;
 
}

export const getEventParticipants = async (owner: string):Promise<EventParticipantsProp> => {
   return (await axiosInstance.get<EventParticipantsProp>(`events/${owner}/participants`, {params:{owner}})).data    
}