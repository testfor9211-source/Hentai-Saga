import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Zap, ShieldCheck, ShieldX, Lock, User } from "lucide-react";
import { Link } from "wouter";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await response.json();

      setDialogMessage(data.message);
      setIsSuccess(data.success);
      setDialogOpen(true);

    } catch (error) {
      setDialogMessage("An error occurred. Please try again.");
      setIsSuccess(false);
      setDialogOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white flex flex-col">
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-xl font-bold tracking-wider text-white group-hover:text-primary transition-colors">
              HENTAI
            </span>
            <Zap className="h-8 w-8 text-primary fill-primary" />
            <span className="font-display text-xl font-bold tracking-wider text-white group-hover:text-primary transition-colors">
              SAGA
            </span>
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card border border-white/10 rounded-xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lock className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-display font-bold text-white">ADMIN ACCESS</h1>
            </div>
            
            <p className="text-muted-foreground text-center text-sm mb-8">
              This area is reserved for administrators only
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-white font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="bg-secondary border-transparent focus-visible:ring-primary text-white placeholder:text-muted-foreground"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium flex items-center gap-2">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="bg-secondary border-transparent focus-visible:ring-primary text-white placeholder:text-muted-foreground"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-base tracking-wide rounded uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
                disabled={isLoading}
              >
                {isLoading ? "Authenticating..." : "Login"}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-muted-foreground text-center">
                Unauthorized access attempts are logged and monitored.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className={`bg-card border ${isSuccess ? 'border-green-500/30' : 'border-red-500/30'}`}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-white">
              {isSuccess ? (
                <>
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  Authentication Successful
                </>
              ) : (
                <>
                  <ShieldX className="h-5 w-5 text-red-500" />
                  Authentication Failed
                </>
              )}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              {dialogMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={() => setDialogOpen(false)}
              className={`${isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'} text-white`}
            >
              {isSuccess ? "Continue" : "Try Again"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
