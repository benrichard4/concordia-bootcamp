import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  //console.log("TODO: use the store to create the base UI", store);

  return (
    <Router>
      <GlobalStyle />
      <main className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          {/* ArticlePage below not built but it would show all the articles  */}
          {/* <Route path="/article/:articleId">
            <ArticlePage />
          </Route> */}
        </Switch>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
