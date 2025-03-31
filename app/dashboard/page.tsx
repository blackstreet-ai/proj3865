import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | AI Image Generator",
  description: "Your AI Image Generation Dashboard",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }
  
  // Safely access subscription data with optional chaining
  const subscription = session.user?.subscription;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Subscription Status</CardTitle>
            <CardDescription>Your current plan and usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Plan:</span>
                <span className="capitalize">{subscription?.plan || "Free"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Credits per month:</span>
                <span>{subscription?.creditsPerMonth || 100}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Credits remaining:</span>
                <span>{subscription?.creditsRemaining || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Renewal date:</span>
                <span>
                  {subscription?.renewalDate 
                    ? new Date(subscription.renewalDate.toString()).toLocaleDateString() 
                    : "N/A"}
                </span>
              </div>
              
              <div className="mt-6">
                <Link href="/subscription">
                  <Button variant="outline" className="w-full">
                    Manage Subscription
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Generate Images</CardTitle>
            <CardDescription>Create AI-generated images</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Use your credits to generate custom images with our AI models.
            </p>
            <Link href="/generate">
              <Button className="w-full">
                Create New Image
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Recent Images</h2>
        <div className="bg-muted p-10 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Your generated images will appear here</p>
        </div>
      </div>
    </div>
  );
}
