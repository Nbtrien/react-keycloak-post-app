import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8181/",
  realm: "spring-realm",
  clientId: "post-app",
});

export default keycloak;
