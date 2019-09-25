import "./styles/main.scss";
import "./lib/gdpr-plugin.css";
import GDPR from "./lib/gdpr-plugin";

const GDPRPlugin = new GDPR({
  className: "fade-and-drop",
  submitText: "accept"
}).init();
