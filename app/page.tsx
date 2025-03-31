import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center py-20 space-y-12 text-center">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI Image Generation Platform</h1>
        <p className="text-xl text-muted-foreground">
          Create stunning AI-generated images with our powerful platform. Choose from multiple Fal models and customize your creations with advanced parameters.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/register">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline" size="lg" className="px-8">
            Sign In
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Multiple AI Models</CardTitle>
            <CardDescription>Choose from four powerful Fal models</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Access premium AI models including rundiffusion-photo-flux, flux-pro, juggernaut-flux/pro, and juggernaut-flux/lightning.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Parameters</CardTitle>
            <CardDescription>Fine-tune your image generation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Customize style, resolution, negative prompts, and other parameters to get exactly the image you want.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Permanent Storage</CardTitle>
            <CardDescription>Never lose your creations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All generated images are stored permanently. Download them anytime or share them with others via short links.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Flexible Subscription Plans</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Start with our free tier offering 100 image generations per month, or upgrade to a paid plan for more credits. No overage charges - your usage stops when your quota is reached.
        </p>
      </div>
    </div>
  );
}
