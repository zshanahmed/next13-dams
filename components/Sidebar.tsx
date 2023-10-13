"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";

const drawerWidth = 240;

interface NavItemProps {
  name: string;
  path: string;
}

interface SidebarProps {
  navItems: NavItemProps[];
}

const list = (navItems: NavItemProps[]) => (
  <Box sx={{ overflow: "auto" }} role="presentation">
    <List>
      {navItems.map((item, index) => (
        <Link key={index} href={item.path}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  </Box>
);

const Sidebar = ({ navItems }: SidebarProps) => {
  return (
    <nav>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        {list(navItems)}
      </Drawer>
      ;
    </nav>
  );
};

export default Sidebar;
