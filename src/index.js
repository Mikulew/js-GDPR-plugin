import "./styles/main.scss";
import "./lib/gdpr-plugin.min.css";
import GDPRBox from "./lib/gdpr-plugin.min";

const DAY_IN_SECONDS = 86400;

new GDPRBox({
  submitText: "accept",
  expirationTime: DAY_IN_SECONDS
}).init();
