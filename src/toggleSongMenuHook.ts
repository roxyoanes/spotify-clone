import { useState } from "react";

const toggleSongMenuHook = (): {
  openSongMenu: boolean;
  toggleSongMenu: (e: any) => void;
} => {
  const [openSongMenu, setOpenSongMenu] = useState(false);
  const [number, setNumber] = useState(0);

  const toggleSongMenu = (e) => {
    setOpenSongMenu(!openSongMenu);
    setNumber(e);
  };

  return { openSongMenu, toggleSongMenu };
};
export default toggleSongMenuHook;
