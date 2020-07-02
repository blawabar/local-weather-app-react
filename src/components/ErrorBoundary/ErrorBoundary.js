import React from "react";

import { ErrorScreen } from "components";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { error, errorInfo } = this.state;

    if (error) {
      return <ErrorScreen error={`${error} - ${errorInfo.componentStack}`} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
