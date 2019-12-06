import React from 'react';
import './App.css';

function App() {
  const clickMe = () => {
    alert(22)
  }

  return (
    <>
      <h1 onMouseEnter={clickMe}>Homework</h1>
    </>
  //   <Switch>
  //   <Route exact path="/" component={HomePage} />
  //   <Route path={`/episodes/:id`} component={EpisodePage} />
  //   <Route component={NotFoundPage} />
  // </Switch>
  );
}

export default App;
