import firebase_app from '@/firebase/config';
import { collection, getCountFromServer, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const getClientCount = async () => {
    const col = collection(db, 'clients');
    const snap = await getCountFromServer(col);
    return snap.data().count;
};