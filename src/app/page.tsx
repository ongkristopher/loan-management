'use client';

import {firebase_auth} from "@/firebase/config";
import { Button } from "@/components/ui/button";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    firebase_auth.onAuthStateChanged(async (user) => {
      if (user) {
        router.push("/admin");
      }
    });
  }, []);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(firebase_auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Loan Management for Kenneth
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your loans with ease.
        </p>
      </div>
      <Button
        className="h-12 inline-flex items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        onClick={loginWithGoogle}
      >
        Login
      </Button>
    </div>
  );
}
