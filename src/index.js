import "./styles/main.scss";
import "./lib/gdpr-plugin.css";
import GDPR from "./lib/gdpr-plugin";

new GDPR({
  submitText: "accept",
  timeExpired: 86400 // 1 day in seconds
}).init();
