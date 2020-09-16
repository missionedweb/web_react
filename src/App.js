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
import AboutUs from "./components/AboutUs/AboutUs";
import Counselling from "./components/Counselling/counselling";
import contactUs from "./components/contactUs/contactUs";
import Faq from "./pages/faq/faq";
import Testim from "./components/Testim/Testim";
import AllImports from "./components/AllImports";
import cards from "./components/cards";

import Addfeatures from "./components/FeatureComponents/Features/Addfeatures";
import Class8 from "./components/Class/Class8/Class8";
import Class9 from "./components/Class/Class9/Class9";
import Class10 from "./components/Class/Class10/Class10";
import Class11_Commerce from "./components/Class/Class11_Commerce/Class11_Commerce";
import Class11_Science from "./components/Class/Class11_Science/Class11_Science";
import Class12_Commerce from "./components/Class/Class12_Commerce/Class12_Commerce";
import Class12_Science from "./components/Class/Class12_Science/Class12_Science";
import Class12_ICSE from "./components/Class/Class12_Science/Class12_ICSE";
import Class12_CICSE from "./components/Class/Class12_Commerce/Class12_CICSE";
import Class11_SICSE from "./components/Class/Class11_Science/Class_11SICSE";
import Class11_CICSE from "./components/Class/Class11_Commerce/Class11_CICSE";
import Class10ICSE from "./components/Class/Class10/Class10ICSE";
import Class9ICSE from "./components/Class/Class9/Class9ICSE";
import Class8ICSE from "./components/Class/Class8/Class8ICSE";

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
        <Route
          exact
          path="/"
          render={() => (currentUser ? <Redirect to="/dashboard" /> : <AllImports />)}
        />
        <Route
          exact
          path="/dashboard"
          render={() => (currentUser ? <Dashboard /> : <Redirect to="/" />)}
        />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/feature1" component={engagingAssignments} />
        <Route path="/feature2" component={convenientSafe} />
        <Route path="/feature3" component={bestTeacher} />
        <Route path="/feature4" component={liveInteractive} />
        <Route path="/feature5" component={personalizedLearning} />
        <Route path="/feature6" component={trustedContent} />
        <Route path="/features" component={Addfeatures} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/counselling" component={Counselling} />
        <Route path="/cards" component={cards} />
        <Route path="/contactus" component={contactUs} />
        <Route path="/faq" component={Faq} />
        <Route path="/testim" component={Testim} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/class8" component={Class8} />
        <Route path="/class9" component={Class9} />
        <Route path="/class10" component={Class10} />
        <Route path="/class11C" component={Class11_Commerce} />
        <Route path="/class11S" component={Class11_Science} />
        <Route path="/class12C" component={Class12_Commerce} />
        <Route path="/class12S" component={Class12_Science} />
        <Route path="/class12SICSE" component={Class12_ICSE} />
        <Route path="/class12CICSE" component={Class12_CICSE} />
        <Route path="/class11SICSE" component={Class11_SICSE} />
        <Route path="/class11CICSE" component={Class11_CICSE} />
        <Route path="/class10ICSE" component={Class10ICSE} />
        <Route path="/class9ICSE" component={Class9ICSE} />
        <Route path="/class8ICSE" component={Class8ICSE} />
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
