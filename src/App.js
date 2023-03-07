import { useState } from "react";
import { Container, CssBaseline, Typography } from "@mui/material";
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
      <Container>
        <Typography variant="h3" align="center" color="primary" gutterBottom sx={{ marginTop: "2rem" }}>
          Are You Good Enough To Play Trials?
        </Typography>
        <PlayerForm onSubmit={handleSubmit} />
        {formSubmitted && <TrialsStats name={bungieName} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
