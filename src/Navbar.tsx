import Scrollspy from "react-scrollspy";
import Link from "next/link";
import { useState, FC } from "react";
import { useSelector } from "react-redux";

import StyledNavbar from "./styles/navbar";
import Router from "next/router";
import { IProfileData } from "./types";
import scrollHook from "./scrollHook";

interface IProps {
  toggleSidebar: () => void;
  profileData: IProfileData;
  openSidebar: boolean;
  libraryMenu?: boolean;
}

const Navbar: FC<IProps> = ({
  toggleSidebar,
  openSidebar,
  profileData,
  libraryMenu,
}) => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { scrolled } = scrollHook();

  const token = useSelector((state) => state.spotify.access_token);

  const toggleMenuUser = () => {
    setOpenUserMenu(!openUserMenu);
  };

  return (
    <StyledNavbar>
      <div className={scrolled ? "navbar-scrolled" : "navbar-container"}>
        <div>
          {!openSidebar ? (
            <button className="sidebar-btn" onClick={toggleSidebar}>
              Open
            </button>
          ) : (
            <button className="sidebar-btn" onClick={toggleSidebar}>
              Close
            </button>
          )}
        </div>

        {token ? (
          <div className="arrows-container">
            <button className="arrow-btn" onClick={() => Router.back()}>
              <img
                src="/angle-left-solid.svg"
                className="arrow-img"
                alt="arrow"
              />
            </button>
            <button onClick={() => window.history.go(1)} className="arrow-btn">
              <img
                className="arrow-img"
                src="/angle-right-solid.svg"
                alt="arrow"
              />
            </button>
          </div>
        ) : null}

        {libraryMenu && (
          <div>
            <nav className="library-list">
              <Scrollspy
                style={{
                  display: "flex",
                  flexDirection: "row",
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
                    className="library-item"
                  >
                    {navElement.value}
                  </a>
                ))}
              </Scrollspy>
            </nav>
          </div>
        )}

        <div className="user-menu">
          <div>
            {!token ? (
              <Link href="/[login]" as={`/login`}>
                <a>Login</a>
              </Link>
            ) : null}

            {token ? (
              <button className="user" onClick={toggleMenuUser}>
                <img
                  className="user-pic"
                  src={profileData.images[0].url}
                  alt="profile-pic"
                />
                {profileData.display_name}
                {openUserMenu ? (
                  <img
                    className="user-menu-arrow"
                    src="/sort-up-solid.svg"
                    alt="arrow-up"
                  ></img>
                ) : (
                  <img
                    className="user-menu-arrow"
                    src="/sort-down-solid.svg"
                    alt="arrow-up"
                  ></img>
                )}
              </button>
            ) : null}

            {openUserMenu ? (
              <nav className="user-menu-list">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <button
                    className="user-menu-btn"
                    onClick={() => Router.push("/profile")}
                  >
                    Profile
                  </button>
                  <button className="user-menu-btn">Account</button>
                  <button className="user-menu-btn">Log out</button>
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
