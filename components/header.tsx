'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            AI Image Generator
          </Link>
          
          {isAuthenticated && (
            <nav className="hidden md:flex gap-6">
              <Link 
                href="/dashboard" 
                className={`text-sm ${pathname === '/dashboard' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              >
                Dashboard
              </Link>
              <Link 
                href="/generate" 
                className={`text-sm ${pathname === '/generate' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              >
                Generate
              </Link>
              <Link 
                href="/gallery" 
                className={`text-sm ${pathname === '/gallery' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              >
                Gallery
              </Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm hidden md:inline-block">
                {session?.user?.email}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
