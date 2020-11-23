import { useState } from "react";

const togglePlaylistMenuHook = (): {
  openPlaylistMenu: boolean;
  togglePlaylistMenu(): void;
} => {
  const [openPlaylistMenu, setOpenPlaylistMenu] = useState(false);

  const togglePlaylistMenu = () => {
    setOpenPlaylistMenu(!openPlaylistMenu);
  };
  return { openPlaylistMenu, togglePlaylistMenu };
};

export default togglePlaylistMenuHook;
