import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Home from "../home/home";
import About from "../about/about"
import Footer from "../footer/footer";
import Projects from "../projects/projects";
import ProjectPage from "../projects/projectside/project-side"
import "./app.scss";
import "../../resources/site.scss";


const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Navigation />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route from="*" to="/" component={Home} />
          <Route path="/projects-side" component={ProjectPage}/>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
