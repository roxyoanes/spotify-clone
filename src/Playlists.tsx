import { FC, useState } from "react";
import { useSelector } from "react-redux";
import StyledPlaylists from "./styles/playlists";
import Scrollspy from "react-scrollspy";
import Link from "next/link";
import { withRedux } from "./redux/redux";

import CategoryHipHop from "./CategoryHipHop";
import CategoryChill from "./CategoryChill";
import CategoryFeatured from "./CategoryFeatured";
import CategoryParty from "./CategoryParty";
import CategoryNewReleases from "./CategoryNewReleases";

interface IProps {
  toggleSidebar: () => void;
  props: any;
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
      <div className="main-container">
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
        {token ? (
          <div className="playlist-container">
            <div>
              <h4 className="card-title">New Releases</h4>
              <div className="cards-container">
                <CategoryNewReleases category={props.NewReleases} />
              </div>
            </div>
            <div>
              <h4 className="card-title">Party</h4>
              <div className="cards-container">
                <CategoryParty category={props.categoryParty} />
              </div>
            </div>
            <div>
              <h4 className="card-title">Featured Playlists</h4>
              <div className="cards-container">
                <CategoryFeatured category={props.CategoryFeatured} />
              </div>
            </div>
            <div>
              <h4 className="card-title">Chill</h4>
              <div className="cards-container">
                <CategoryChill category={props.categoryChill} />
              </div>
            </div>
            <div>
              <h4 className="card-title">Hip Hop</h4>
              <div className="cards-container">
                <CategoryHipHop category={props.categoryHipHop} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </StyledPlaylists>
  );
};

export default withRedux(Playlists);