import { FC, useState } from "react";
import StyledPlaylists from "./styles/playlists";
import Scrollspy from "react-scrollspy";

interface IProps {
  toggleSidebar: () => void;
}

const Playlists: FC<IProps> = ({ toggleSidebar }) => {
  const [openList, setOpenList] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const toggleListOptions = () => {
    setOpenList(!openList);
  };
  const toggleMenuUser = () => {
    setOpenUserMenu(!openUserMenu);
  };

  return (
    <StyledPlaylists>
      <div className="playlists-container">
        <div className="navbar-container">
          <div>
            <button onClick={toggleSidebar}>Open</button>
          </div>
          <div>
            <button onClick={toggleListOptions}>List</button>
            {openList ? (
              <nav className="open-list">
                <Scrollspy
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0",
                    alignItems: "center",
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
              <button onClick={toggleMenuUser}>User</button>

              {openUserMenu ? (
                <nav className="user-menu-list">
                  <Scrollspy
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0",
                      alignItems: "center",
                      margin: "0",
                    }}
                    items={["Account", "Profile", "Logout"]}
                    currentClassName="menu-is-current"
                  >
                    {[
                      { value: "Account", href: "#account" },
                      { value: "Profile", href: "#profile" },
                      { value: "Logout", href: "#logout" },
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
          </div>
        </div>
      </div>
    </StyledPlaylists>
  );
};

export default Playlists;
