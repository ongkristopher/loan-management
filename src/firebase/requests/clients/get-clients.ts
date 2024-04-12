import firebase_app from '@/firebase/config';
import { Client } from '@/interface/clients';
import { format } from 'date-fns';
import { Timestamp, collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const getClients = async () => {
    const col = collection(db, 'clients');
    const snap = await getDocs(col);
    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Client)).map((doc) => {
        const date = doc.dateAdded as Timestamp;
        const jsDate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
        const formattedDateTime = format(jsDate, 'MMMM dd, yyyy hh:mm a');
        doc.dateAdded = formattedDateTime;
        return doc as Client;
    });
};