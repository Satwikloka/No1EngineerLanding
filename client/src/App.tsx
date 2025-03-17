import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WelcomeOpener from "@/components/WelcomeOpener";
import { useState, useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showOpener, setShowOpener] = useState(true);
  
  // Check if we've shown the opener before in this session
  useEffect(() => {
    const hasSeenOpener = sessionStorage.getItem('hasSeenOpener');
    if (hasSeenOpener) {
      setShowOpener(false);
    }
  }, []);
  
  const handleOpenerComplete = () => {
    setShowOpener(false);
    sessionStorage.setItem('hasSeenOpener', 'true');
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      {showOpener && <WelcomeOpener onComplete={handleOpenerComplete} />}
      <Router />
    </QueryClientProvider>
  );
}

export default App;
