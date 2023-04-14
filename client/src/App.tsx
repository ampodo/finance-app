

import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box, createTheme } from "@mui/system";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "./components/navbar";
import  Dashboard  from "./pages/dashboard";
import  Predictions  from "./pages/predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
         <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
           <Navbar />
          <Routes>

            <Route path="/" element={<Dashboard />}  />
            <Route path="/predictions" element={<Predictions />} />
          </Routes>
         </Box>

      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

