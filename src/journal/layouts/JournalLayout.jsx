import { Box } from "@mui/material";

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/**NavBar */}
      {/**Slider */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/**Toolbar */}

        {children}
      </Box>
    </Box>
  );
};
