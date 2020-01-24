import React from "react";
import Search from "../search/Search";
import Results from "../results/Results";
import Logo from "../utils/Logo";
import ErrorBoundary from "../utils/ErrorBoundary";

export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <header>
            <Logo />
            <Search />
          </header>
        </ErrorBoundary>
        <Results />
        <footer>
          <Logo />
        </footer>
      </>
    );
  }
}
