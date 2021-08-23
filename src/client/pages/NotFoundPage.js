import React from "react";

// staticContext is not received in the browser bc its using a browser router
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h3>Ooops, route not found.</h3>;
};

export default { component: NotFoundPage };
