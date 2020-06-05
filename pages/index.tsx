import { FC } from "react";
import React from "react";
import Sidebar from "../App/Sidebar";
import Playlists from "../App/Playlists";

const Home: FC = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="container">
      {openSidebar ? (
        <>
          <Sidebar />
          <Playlists toggleSidebar={toggleSidebar} />
        </>
      ) : (
        <Playlists toggleSidebar={toggleSidebar} />
      )}
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 10fr;
          grid-template-rows: 1fr;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
