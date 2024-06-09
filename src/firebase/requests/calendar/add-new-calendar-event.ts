import { firebase_app } from '@/firebase/config';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const addNewCalendarEvent = async (collectionName: string, data: any) => {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, collectionName), data)
    } catch (e) {
        error = e;
    }

    return { result, error };
};