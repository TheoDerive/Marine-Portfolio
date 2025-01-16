import useUtilities from "@/hooks/useUtilities";
import React from "react";

export default function Connection({
  setIsConnected,
}: {
  setIsConnected: (isConnected: boolean) => void;
}) {
  const [log, setLog] = React.useState("");

  const { windowProperties } = useUtilities();

  function handleValidate() {
    if (!windowProperties) return;

    if (log === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsConnected(true);
      windowProperties.sessionStorage.setItem("connection", "true");
    }
  }

  return (
    <section className="connection-container">
      <input
        placeholder="Email"
        type="text"
        value={log}
        onChange={(e) => setLog(e.target.value)}
      />

      <input placeholder="Mot de passe" type="password" />

      <button onClick={() => handleValidate()} className="validate">
        Valider
      </button>
    </section>
  );
}
