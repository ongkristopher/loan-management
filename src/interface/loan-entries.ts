import { Timestamp } from "firebase/firestore";
import { Client } from "./clients";

export interface LoanEntries {
    id: string;
    amount: number;
    client: Client;
    date: string | Timestamp;
    monthlyPayment: number;
    paymentDay: number;
    rate: number;
    startPaymentDate: string | Timestamp;
    terms: number;
    totalLoanAmount: number;
}