const defaultOptions = {
  autoOpen: true,
  className: "",
  content: "GDPR consent",
  width: 600,
  height: 300,
  overlay: true
};

class GDPR {
  constructor(options = {}) {
    this.modal = null;
    this.options = Object.assign({}, defaultOptions, options);
  }

  displayOptions() {
    console.log(this.options);
  }

  open() {
    const gdprContainer = document.createElement("div");
    this.modal = document.createElement("div");

    document.body.className = "gdpr-container";
    this.options.overlay ? (document.body.className += " gdpr-layout") : null;
    this.modal.className = "gdpr-modal " + this.options.className;
    this.modal.style.width = this.options.width + "px";
    this.modal.style.height = this.options.height + "px";

    document.body.appendChild(this.modal);
  }

  init() {
    if (this.options.autoOpen) this.open();
    this.displayOptions();
  }
}

export default GDPR;
