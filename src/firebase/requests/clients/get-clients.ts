import { firebase_app } from '@/firebase/config';
import { Client } from '@/interface/clients';
import { timeFormatter } from '@/lib/utils';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const getClients = async () => {
    const col = collection(db, 'clients');
    const snap = await getDocs(col);
    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Client)).map((doc) => {
        doc.dateAdded = timeFormatter(doc.dateAdded);
        return doc as Client;
    });
};