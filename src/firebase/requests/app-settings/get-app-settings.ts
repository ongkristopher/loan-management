import firebase_app from '@/firebase/config';
import { AppSettings } from '@/interface/app-settings';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const getAppSettings = async () => {
    const docRef = doc(db, 'appSettings', 'tDL0iit8kY7vnpnFJ1LU');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data() as AppSettings;
    } else {
        return {} as AppSettings;
    }
};