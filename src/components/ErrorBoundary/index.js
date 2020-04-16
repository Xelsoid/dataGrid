import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isErrorOccurred: false
    }
  }

  static getDerivedStateFromError() {
    return {isErrorOccurred: true};
  };

  render() {
    const {isErrorOccurred} = this.state;
    const {children} = this.props;

    if(isErrorOccurred) {
      return(<h2>Error happened</h2>);
    }

    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.object
};

ErrorBoundary.defaultProps = {
  children: null
};
