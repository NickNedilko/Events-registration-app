import { Event, EventParticipant } from "../types/types";
import { axiosInstance } from "./instance"

export enum ApiRoutes {
    GET_EVENTS = "events",
    ADD_PARTICIPANT = "registration"
   

}


export interface EventProp {
    events: Event[],
    quantity: number
} 

export interface EventParticipantProp extends EventParticipant{
    id: string;

}

export const getAllEvents = async (page: number):Promise<EventProp> => {
   return (await axiosInstance.get<EventProp>(ApiRoutes.GET_EVENTS, {params:{page}})).data    
}

export const addEventParticipant = async (id: string, values:EventParticipant ): Promise<EventParticipantProp> => {
    return (await axiosInstance.post<EventParticipantProp>(`${id}/${ApiRoutes.ADD_PARTICIPANT}`, values)).data;
 
}