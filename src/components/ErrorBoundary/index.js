import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isErrorOccurred: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log('gg');
    return {isErrorOccurred: true};
  };

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

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
