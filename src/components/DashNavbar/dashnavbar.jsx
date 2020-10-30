import React from "react";
import "./dashnavbar.styles.scss";
import Avatar from "@material-ui/core/Avatar";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {auth} from '../../firebase/firebase.utils';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function DashNavbar({ currentUser }) {
  return (
    <React.Fragment>
      <div>
        {console.log(currentUser.displayName)}
        {currentUser.displayName && (
          <div className="dashnav__main">
            {" "}
            <Avatar alt={currentUser.displayName} style={{ background: "orange" }}>
              {auth.currentUser.displayName.charAt(0).toUpperCase()}
            </Avatar>
            <div style={{ marginLeft: "10px" }}>{auth.currentUser.displayName.split(" ")[0]}</div>
            <ArrowDropDownIcon />
            <br/>
            <br/>
            <br/>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(DashNavbar);
