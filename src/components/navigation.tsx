import {
    SignInButton,
    SignOutButton,
    SignedIn,
    SignedOut,
    SignUpButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

export const Navigation = () => {
    return (
        <nav className="border-b border-[var(--foreground)]/10">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="text-xl font-semibold">
                    RAG Chatbot
                </div>

                <div className="flex gap-2">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant={"ghost"}>Sign In</Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button variant={"default"}>Sign Up</Button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <SignOutButton>
                            <Button variant={"outline"}>Sign Out</Button>
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};