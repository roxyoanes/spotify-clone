import { useState } from "react";
import { useSelector } from "react-redux";

import Scrollspy from "react-scrollspy";
import Link from "next/link";

import StyledNavbar from "./styles/navbar";

interface IProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }) => {
  const [openList, setOpenList] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const token = useSelector((state) => state.spotify.access_token);

  const toggleListOptions = () => {
    setOpenList(!openList);
  };
  const toggleMenuUser = () => {
    setOpenUserMenu(!openUserMenu);
  };

  return (
    <StyledNavbar>
      <div className="navbar-container">
        <div>
          <button onClick={toggleSidebar}>Open</button>
        </div>
        <div>
          {token ? (
            <button className="list" onClick={toggleListOptions}>
              List
            </button>
          ) : null}

          {openList ? (
            <nav className="open-list">
              <Scrollspy
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0",
                  alignItems: "flex-start",
                  margin: "0",
                }}
                items={["Playlists", "Podcasts", "Artists", "Albums"]}
                currentClassName="navbar-is-current"
              >
                {[
                  { value: "Playlists", href: "#playlists" },
                  { value: "Podcasts", href: "#podcasts" },
                  { value: "Artists", href: "#artists" },
                  { value: "Albums", href: "#albums" },
                ].map((navElement) => (
                  <a
                    href={navElement.href}
                    key={navElement.value}
                    className="list-item"
                  >
                    {navElement.value}
                  </a>
                ))}
              </Scrollspy>
            </nav>
          ) : null}
        </div>
        <div className="user-menu">
          <div>
            {!token ? (
              <Link href="/[login]" as={`/login`}>
                <a>Login</a>
              </Link>
            ) : null}

            {token ? (
              <button className="user" onClick={toggleMenuUser}>
                User
              </button>
            ) : null}

            {openUserMenu ? (
              <nav className="user-menu-list">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0",
                    alignItems: "center",
                    margin: "0",
                  }}
                >
                  {token ? (
                    <Link href="/[profile]" as={`/profile`}>
                      <a>Profile</a>
                    </Link>
                  ) : null}
                </div>
              </nav>
            ) : null}
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
