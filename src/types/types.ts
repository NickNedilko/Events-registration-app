export interface Event{
    id: string;
    title: string;
    description: string;
    event_date: string;
    organizer: string;
}

export interface EventParticipant{
        fullName: string;
        email: string;
        dateOfBirth: string;
        info: string;
}