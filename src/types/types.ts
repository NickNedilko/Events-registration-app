export interface Event{
    _id: string;
    title: string;
    description: string;
    event_date: string;
    organizer: string;
}

export interface EventParticipant{
        _id?: string;
        fullName: string;
        email: string;
        dateOfBirth: string;
        info: string;
}