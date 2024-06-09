import { firebase_app } from '@/firebase/config';
import { Client } from '@/interface/clients';
import { timeFormatter } from '@/lib/utils';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);

export const getClients = async (): Promise<Client[]> => {
    try {
        const col = collection(db, 'clients');
        const snap = await getDocs(col);
        const clients = snap.docs.map((doc) => {
            const client = { id: doc.id, ...doc.data() } as Client;
            client.dateAdded = timeFormatter(client.dateAdded);
            return client;
        });
        return clients;
    } catch (error) {
        console.error("Error fetching clients:", error);
        return [];
    }
};
