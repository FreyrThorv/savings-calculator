import React from 'react';
import PropTypes from 'prop-types';

const FeedbackWidget = props =>
    <div className="margin-bottom-40">
      <div className={props.feedback.length < 1  ? "" : "hide"}>
        <p className="margin-top-40"><b>Was this helpful?</b></p>
        <button id="wasHelpful" onClick={props.handleFeedback}>Yes</button> - <button id="notHelpful" onClick={props.handleFeedback}>No</button>
      </div>
      <div className={props.feedback.length < 1  ? "hide" : ""}>
        <p className="margin-top-40"><b>{props.feedback === "wasHelpful" ?  "Good to hear! Thanks for the feedback! " : "We're sad to hear! If you have time we'd like to hear what went wrong. Please send us a message at WhyDontYouLoveUs@example.com" }</b></p>
      </div>
    </div>;


FeedbackWidget.propTypes = {
 feedback: PropTypes.string.isRequired,
 handleFeedback: PropTypes.func.isRequired,
}


export default FeedbackWidget;