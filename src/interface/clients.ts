import { Timestamp } from "firebase/firestore";

export interface Client {
    id?: string;
    address: string;
    contactNumber: string;
    email: string;
    firstname: string;
    lastname: string;
    dateAdded?: Timestamp | string;
}