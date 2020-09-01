import React from "react";
import "./App.css";
// import "./script.js";
import "aos/dist/aos.css";
import "react-phone-number-input/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import engagingAssignments from "./components/FeatureComponents/Feature1/engagingAssignments";
import convenientSafe from "./components/FeatureComponents/Feature2/convenientSafe";
import bestTeacher from "./components/FeatureComponents/Feature3/bestTeacher";
import liveInteractive from "./components/FeatureComponents/Feature4/liveInteractive";
import personalizedLearning from "./components/FeatureComponents/Feature5/personalizedLearning";
import trustedContent from "./components/FeatureComponents/Feature6/trustedContent";
import AfterLogin from "./components/Dashboard/AfterLogin";
import Pricing from "./components/Price/Pricing";
import Counselling from "./components/Counselling/counselling";
import contactUs from "./components/contactUs/contactUs";
import FAQ from "./components/FAQ/FAQ";
import Testim from "./components/Testim/Testim";
import AllImports from "./components/AllImports";

function App() {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={AllImports} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={AfterLogin} />
        <Route path="/feature1" component={engagingAssignments} />
        <Route path="/feature2" component={convenientSafe} />
        <Route path="/feature3" component={bestTeacher} />
        <Route path="/feature4" component={liveInteractive} />
        <Route path="/feature5" component={personalizedLearning} />
        <Route path="/feature6" component={trustedContent} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/counselling" component={Counselling} />
        <Route path="/contactus" component={contactUs} />
        <Route path="/faq" component={FAQ} />
        <Route path="/testim" component={Testim} />
      </Switch>
    </div>
  );
}

export default App;
