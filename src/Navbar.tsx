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
  profileUserName?: boolean;
  likedTracks?: boolean;
  navbarDefault?: boolean;
  navbarDefaultScrolled?: boolean;
}

const Navbar: FC<IProps> = ({
  toggleSidebar,
  openSidebar,
  profileData,
  libraryMenu,
  profileUserName,
  likedTracks,
  navbarDefault,
  navbarDefaultScrolled,
}) => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { scrolled } = scrollHook();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const toggleMenuUser = () => {
    setOpenUserMenu(!openUserMenu);
  };

  return (
    <StyledNavbar
      navbarDefault={navbarDefault}
      navbarDefaultScrolled={navbarDefaultScrolled}
    >
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

        {isLoggedIn ? (
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

        {profileUserName && (
          <>
            {scrolled ? (
              <h4 className="user-name">{profileData.display_name}</h4>
            ) : null}
          </>
        )}
        {likedTracks && (
          <>{scrolled ? <h4 className="liked-songs">Liked Songs</h4> : null}</>
        )}
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
                  { value: "Playlists", href: "playlists" },
                  { value: "Podcasts", href: "podcasts" },
                  { value: "Artists", href: "artists" },
                  { value: "Albums", href: "albums" },
                ].map((navElement) => (
                  <div className="library-item" key={navElement.value}>
                    <Link
                      href={`/collection/${navElement.href}`}
                      as={`/collection/${navElement.href}`}
                    >
                      {navElement.value}
                    </Link>
                  </div>
                ))}
              </Scrollspy>
            </nav>
          </div>
        )}
        <div className="user-menu">
          <div>
            {!isLoggedIn ? (
              <Link href="/[login]" as={`/login`}>
                <a>Login</a>
              </Link>
            ) : null}

            {isLoggedIn ? (
              <button className="btn-user" onClick={toggleMenuUser}>
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
