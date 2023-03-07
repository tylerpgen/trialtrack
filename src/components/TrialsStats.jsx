import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TrialsStats = (props) => {
  const { palette } = useTheme();
  const primary = palette.primary;
  const { name } = props;

  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    // <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
    //   <Typography variant="h4" align="center" color="primary" gutterBottom>
    //     Trials Stats for {name}
    //   </Typography>
    //   <TableContainer color={primary} component={Paper}>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell align="center">Wins</TableCell>
    //           <TableCell align="center">Games Played</TableCell>
    //           <TableCell align="center">K/D Ratio</TableCell>
    //           <TableCell align="center">Win %</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         <TableRow>
    //           <TableCell align="center">1000</TableCell>
    //           <TableCell align="center">1000</TableCell>
    //           <TableCell align="center">1.2</TableCell>
    //           <TableCell align="center">100%</TableCell>
    //         </TableRow>
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Container>
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Trials Stats for {name}
      </Typography>
      <TableContainer color={primary} component={Paper}>
        <Table>
          {isMobile ? (
            <TableBody>
              <TableRow>
                <TableCell align="center">Wins</TableCell>
                <TableCell align="center">1000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Games Played</TableCell>
                <TableCell align="center">1000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">K/D Ratio</TableCell>
                <TableCell align="center">1.2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Win %</TableCell>
                <TableCell align="center">100%</TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Wins</TableCell>
                  <TableCell align="center">Games Played</TableCell>
                  <TableCell align="center">K/D Ratio</TableCell>
                  <TableCell align="center">Win %</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1000</TableCell>
                  <TableCell align="center">1000</TableCell>
                  <TableCell align="center">1.2</TableCell>
                  <TableCell align="center">100%</TableCell>
                </TableRow>
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TrialsStats;
