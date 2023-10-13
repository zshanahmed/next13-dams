import { Sidebar } from "@/components";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Submit Pledge",
      path: "/pledge",
    },
    {
      name: "Create Event",
      path: "/event",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 9999 }}>
        <Typography variant="h6" px={2} py={1}>
          Disaster Assistance Management System
        </Typography>
      </AppBar>
      <Box sx={{ display: "flex", maxWidth: "100vw" }}>
        <Sidebar navItems={navItems} />
        <Container>
          <Toolbar />
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default layout;
