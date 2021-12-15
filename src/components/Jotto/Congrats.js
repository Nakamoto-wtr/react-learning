import React from "react";
import { checkPropTypes } from "prop-types";

const Congrats = (props) => {
  if (props.success) {
    return (
      <div className="component-congrats">
        <span className="congrats-message">
          Congratulations! You gussed tyhe word!
        </span>
      </div>
    );
  } else {
    return <div className="component-congrats" />;
  }
};

// Congrats.propTypes = {
//  success: checkPropTypes.bool.isRequired,
// };

export default Congrats;
