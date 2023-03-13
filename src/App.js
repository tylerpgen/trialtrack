import { useState } from "react";
import { CssBaseline, Typography } from "@mui/material";
import PlayerForm from "./components/PlayerForm";
import TrialsStats from "./components/TrialsStats";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
  const [bungieName, setBungieName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (newName) => {
    setBungieName(newName);
    setFormSubmitted(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Typography variant="h3" align="center" color="primary" gutterBottom sx={{ padding: "15px" }}>
          Should I Dodge You? (Valorant Stats)
        </Typography>
        <PlayerForm onSubmit={handleSubmit} />
        {formSubmitted && <TrialsStats name={bungieName} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
