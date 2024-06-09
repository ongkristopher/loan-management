"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { firebase_auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AccountWidget() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    firebase_auth.onAuthStateChanged(async (user) => {
      if (!user) {
        router.push("/");
      } else {
        setImageUrl(user.photoURL as string);
      }
    });
  }, []);

  const logout = async () => {
    try {
      await signOut(firebase_auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          {imageUrl ? (
            <Image
              className="rounded-full"
              src={imageUrl}
              alt="Picture of the user"
              width={40}
              height={40}
              priority
              style={{
                objectFit: "cover",
              }}
            />
          ) : (
            <CircleUser className="h-5 w-5" />
          )}

          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
