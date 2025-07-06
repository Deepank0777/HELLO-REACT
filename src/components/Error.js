import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log("Error:", error);
  return (
    <div className="error">
      <h1>404</h1>
      <h1>Oops! Something went wrong.</h1>
      <h3>
        {error.status} - {error.statusText || error.message}
      </h3>
    </div>
  );
};

export default Error;
