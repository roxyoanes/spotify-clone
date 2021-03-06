import React from "react";
import { NextPage, NextPageContext } from "next";
import { Store } from "redux";
import { Provider } from "react-redux";
import App from "next/app";

import { IState } from "./reducers";
import { initializeStore } from "./store";
import { IActions } from "./actions";

export interface IReduxStoreProps extends NextPageContext {
  reduxStore: Store<IState, IActions>;
}

type withReduxType = {
  ({ initialReduxState, ...props }: { initialReduxState: IState }): JSX.Element;
  getInitialProps(
    context: IReduxStoreProps
  ): Promise<{
    initialReduxState: IState;
  }>;
};

export const withRedux = (
  PageComponent: NextPage,
  { ssr = true } = {}
): withReduxType => {
  const WithRedux = ({ initialReduxState, ...props }) => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  // Make sure people don't use this HOC on _app.js level
  if (process.env.NODE_ENV !== "production") {
    const isAppHoc =
      (PageComponent as any) === App || PageComponent.prototype instanceof App;
    if (isAppHoc) {
      throw new Error("The withRedux HOC only works with PageComponents");
    }
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (context: IReduxStoreProps) => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(undefined);

      // Provide the store to getInitialProps of pages
      context.reduxStore = reduxStore;

      // Run getInitialProps from HOCed PageComponent
      const pageProps =
        typeof PageComponent.getInitialProps === "function"
          ? await PageComponent.getInitialProps(context)
          : {};

      // Pass props to PageComponent
      return {
        ...pageProps,
        initialReduxState: reduxStore.getState(),
      };
    };
  }

  return WithRedux;
};

let reduxStore: Store<IState, IActions>;
const getOrInitializeStore = (initialState: IState) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === "undefined") {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};
