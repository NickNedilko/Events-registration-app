import { axiosInstance } from "./instance"

export enum ApiRoutes {
    GET_EVENTS = "events",
   

}

export interface Event{
    id: string;
    title: string;
    description: string;
    event_date: string;
    organizer: string;
}

export interface EventProp {
    events: Event[],
    quantity: number
} 

export const getAllEvents = async (page: number):Promise<EventProp> => {
   return (await axiosInstance.get<EventProp>(ApiRoutes.GET_EVENTS, {params:{page}})).data    
}