const defaultOptions = {
  autoOpen: true,
  className: "",
  titleText: "GDPR consent",
  contentText:
    "This web site complies with the UK Privacy and Electronic Communications Regulations and the UK DPA 2018 in its understanding of consent as it applies to the regulations. We only deploy by default essential cookies, we list and give you the user the option to opt into cookie deployment for other categories of cookies if you expand the 'Cookie settings' link. By clicking the 'Accept cookie settings' button you agree to the default privacy settings of only essential cookies, if you select do not deploy any cookies then none will be deployed. Your settings and options can only be remembered with the minimum essential cookies deployed.",
  submitText: "submit",
  cancelText: "cancel",
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
    this.createModal();
  }

  createModal() {
    this.modal = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const title = document.createElement("p");
    const content = document.createElement("p");
    const submitButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    document.body.className = "gdpr-container";
    this.options.overlay ? (document.body.className += " gdpr-layout") : null;
    this.modal.className = "gdpr-modal " + this.options.className;
    title.className = "gdpr-title";
    content.className = "gdpr-content";
    buttonContainer.className = "gdpr-button-container";
    submitButton.className = "gdpr-button gdpr-button__submit";
    cancelButton.className = "gdpr-button gdpr-button__cancel";

    title.innerText = this.options.titleText;
    content.innerText = this.options.contentText;
    submitButton.innerText = this.options.submitText;
    cancelButton.innerText = this.options.cancelText;

    this.modal.style.width = this.options.width + "px";
    this.modal.style.height = this.options.height + "px";

    textContainer.appendChild(title);
    textContainer.appendChild(content);
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);
    this.modal.appendChild(textContainer);
    this.modal.appendChild(buttonContainer);

    document.body.appendChild(this.modal);
  }

  init() {
    if (this.options.autoOpen) this.open();
    this.displayOptions();
  }
}

export default GDPR;
