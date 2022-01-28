import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

// Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const AuthProvider = (props) => {
  const history = useHistory();
  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };
  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    audience: config.audience ? config.audience : null,
    redirectUri: window.location.origin,
    onRedirectCallback,
  };
  return <Auth0Provider {...providerConfig}>{props.children}</Auth0Provider>;
};

export default AuthProvider;
