import { useState } from "react";

const toggleSidebarHook = (): {
  openSidebar: boolean;
  toggleSidebar(): void;
} => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return { openSidebar, toggleSidebar };
};

export default toggleSidebarHook;
