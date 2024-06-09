import { firebase_app } from '@/firebase/config';
import { Client } from '@/interface/clients';
import { LoanEntries } from '@/interface/loan-entries';
import { timeFormatter } from '@/lib/utils';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const getLoanEntries = async () => {
    const col = collection(db, 'loanEntries');
    const snap = await getDocs(col);
    const loanEntriesData: LoanEntries[] = [];

    for (const loanDoc of snap.docs) {
        const loanData = loanDoc.data() as LoanEntries;
        loanData.id = loanDoc.id;

        loanData.date = timeFormatter(loanData.date);
        loanData.startPaymentDate = timeFormatter(loanData.startPaymentDate);

        // Query for Loan Entry Client using client id on loanEntries
        const clientDoc = await getDoc(doc(db, `clients/${loanData.client}`));
        if (clientDoc.exists()) {
            const clientData = clientDoc.data() as Client;
            loanData.client = clientData;
        }

        loanEntriesData.push(loanData);
    }

    return loanEntriesData;
};
