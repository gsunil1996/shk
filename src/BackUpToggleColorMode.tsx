"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { toggleColorMode } from "@/redux/features/colorModeSlice";

export default function Home() {
  const mode = useAppSelector((state) => state.colorMode.mode);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Box>
        {mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(toggleColorMode())}
          color="inherit"
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </div>
  );
}
