import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function Routes() {
  const [colors, setColors] = useState({
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  });

  function handleAdd(newColor) {
    setColors((prevColors) => ({ ...prevColors, ...newColor }));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleAdd} />
        </Route>
        <Route path="/colors/:name">
          <Color colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;