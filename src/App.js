import React, { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import "react-phone-number-input/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import engagingAssignments from "./components/FeatureComponents/Feature1/engagingAssignments";
import convenientSafe from "./components/FeatureComponents/Feature2/convenientSafe";
import bestTeacher from "./components/FeatureComponents/Feature3/bestTeacher";
import liveInteractive from "./components/FeatureComponents/Feature4/liveInteractive";
import personalizedLearning from "./components/FeatureComponents/Feature5/personalizedLearning";
import trustedContent from "./components/FeatureComponents/Feature6/trustedContent";
import Pricing from "./components/Price/Pricing";
import Counselling from "./components/Counselling/counselling";
import contactUs from "./components/contactUs/contactUs";
import Faq from "./pages/faq/faq";
import Testim from "./components/Testim/Testim";
import AllImports from "./components/AllImports";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import Dashboard from "./pages/dashboard/dashboard";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    //check Auth
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
    //clean up
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={AllImports} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/feature1" component={engagingAssignments} />
        <Route path="/feature2" component={convenientSafe} />
        <Route path="/feature3" component={bestTeacher} />
        <Route path="/feature4" component={liveInteractive} />
        <Route path="/feature5" component={personalizedLearning} />
        <Route path="/feature6" component={trustedContent} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/counselling" component={Counselling} />
        <Route path="/contactus" component={contactUs} />
        <Route path="/faq" component={Faq} />
        <Route path="/testim" component={Testim} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
