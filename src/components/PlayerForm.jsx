import { useState } from "react";
import { Button, FormControl, TextField, Container } from "@mui/material";

const PlayerForm = (props) => {
  const [bungieName, setBungieName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(bungieName);
    console.log(bungieName);
  };

  const handleBungieNameChange = (e) => {
    setBungieName(e.target.value);
  };

  return (
    <Container maxWidth="md">
      <FormControl fullWidth>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="bungieName"
            value={bungieName}
            onChange={handleBungieNameChange}
            required
            fullWidth
            margin="normal"
            placeholder="BungieName#1234"
            InputProps={{ style: { color: "#fff" } }}
            sx={{
              border: "1px solid #FFD700",
              borderRadius: "6px",
              "& .MuiOutlinedInput-root.Mui-focused": {
                borderWidht: 0,
              },
            }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </FormControl>
    </Container>
  );
};

export default PlayerForm;
