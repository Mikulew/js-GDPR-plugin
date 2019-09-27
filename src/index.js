import "./styles/main.scss";
import "./lib/gdpr-plugin.css";
import GDPR from "./lib/gdpr-plugin";

const DAY_IN_SECONDS = 86400;

new GDPR({
  submitText: "accept",
  timeExpired: DAY_IN_SECONDS
}).init();
