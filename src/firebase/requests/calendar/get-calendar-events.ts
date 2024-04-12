import firebase_app from '@/firebase/config';
import { Event } from '@/interface/calendar-events';
import { getDocs, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const getCalendarEvents = async () => {
    const calendarEventsCol = collection(db, 'calendarEvents');
    const calendarEventsSnapshot = await getDocs(calendarEventsCol);
    return calendarEventsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Event));
};