import { useEffect } from "react";

function App() {
  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    window.location.replace(base + "index.html");
  }, []);

  return null;
}

export default App;
