import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Home from "../home/home";
import About from "../about/about";
import Footer from "../footer/footer";
import Projects from "../projects/projects";
import ProjectPage from "../projects/projectsite/project-site";
import "./app.scss";
import "../../resources/site.scss";
import projectData from "../../jsonData/projectData.json";
const App = () => {
  const projects = projectData.projects;
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <HashRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          {projects.map((project) => (
            <Route path={"/project/:assignID"} component={ProjectPage} />
          ))}
          <Route from="*" to="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
