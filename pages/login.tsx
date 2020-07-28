import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";

import { authorizeURL } from "../src/server/spotifyApi";
import { withRedux, IReduxStoreProps } from "../src/redux/redux";

interface IProps {
  tokenUrl: string;
}

const Login: NextPage<IProps> = ({ tokenUrl }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf("code") !== -1) {
      const code = window.location.href.split("code=")[1].split("&")[0].trim();

      fetch(`/api/${code}`, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "SET_TOKEN",
            payload: data,
          });
        })
        .then(() => {
          dispatch({
            type: "SET_PROFILE",
            payload: "dd",
          });
        })
        .catch((error) => error);
    } else {
      if (tokenUrl) {
        document.location.href = tokenUrl;
      }
    }
  }, []);

  return <button onClick={() => Router.push("/")}>Click me</button>;
};

Login.getInitialProps = ({ reduxStore }: IReduxStoreProps) => {
  // Pass data to the page via props
  return { tokenUrl: authorizeURL };
};

export default withRedux(Login);
