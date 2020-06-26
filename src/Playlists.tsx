import { FC, useState } from "react";
import { useSelector } from "react-redux";
import StyledPlaylists from "./styles/playlists";
import Scrollspy from "react-scrollspy";
import Link from "next/link";
import { withRedux } from "./redux/redux";

interface IProps {
  toggleSidebar: () => void;
}

const Playlists: FC<IProps> = ({ toggleSidebar, props }) => {
  const [openList, setOpenList] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const token = useSelector((state) => state.spotify.access_token);

  console.log("aaafff", props);
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
                    <Link href="/[profile]" as={`/profile`}>
                      <a>Profile</a>
                    </Link>
                  </div>
                </nav>
              ) : null}
            </div>
          </div>
        </div>
        <div className="playlist-container">
          <div className="cards-container">
            <div className="card">
              {props.newReleases.map((obj) => (
                <div key="obj.id">
                  <img src={obj.images[1].url} alt="artist-img" />
                  <h5>{obj.artists[0].name}</h5>
                  <h5>{obj.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledPlaylists>
  );
};

export default withRedux(Playlists);
