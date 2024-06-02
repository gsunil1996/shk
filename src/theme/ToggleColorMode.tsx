import { useMemo } from "react";
import { useAppSelector } from "../redux/hooks/hooks";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Paper } from "@mui/material";
import { ChildrenProps } from "@/types/common.types";

const ToggleColorMode = ({ children }: ChildrenProps) => {
  const mode = useAppSelector((state) => state.colorMode.mode);

  const theme = useMemo(() => {
    const isDarkMode = mode === 'dark';

    return createTheme({
      palette: {
        mode,
        ...(isDarkMode
          ? {
            // Dark mode specific colors
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
              secondary: "#bbbbbb",
            },
          }
          : {
            // Light mode specific colors
            background: {
              default: "#f7fafc",
              paper: "#ffffff",
            },
            text: {
              primary: "#000000",
              secondary: "#333333",
            },
          }),
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundColor: isDarkMode ? "#121212" : "#f7fafc",
            },
          },
        },
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={0} style={{ backgroundColor: theme.palette.background.default }}>
        {children}
      </Paper>
    </ThemeProvider>
  );
};

export default ToggleColorMode;
