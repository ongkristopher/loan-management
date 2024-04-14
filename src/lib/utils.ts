import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeFormatter(date: string | Timestamp) {
  date = date as Timestamp;
  const jsDate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
  return format(jsDate, 'MMMM dd, yyyy hh:mm a');
}