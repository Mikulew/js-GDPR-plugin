const WEEK_IN_SECONDS = 604800;
const defaultOptions = {
  autoOpen: true,
  className: "gdpr-modal",
  titleText: "GDPR consent",
  contentText:
    "This web site complies with the UK Privacy and Electronic Communications Regulations and the UK DPA 2018 in its understanding of consent as it applies to the regulations. We only deploy by default essential cookies, we list and give you the user the option to opt into cookie deployment for other categories of cookies if you expand the 'Cookie settings' link. By clicking the 'Accept cookie settings' button you agree to the default privacy settings of only essential cookies, if you select do not deploy any cookies then none will be deployed. Your settings and options can only be remembered with the minimum essential cookies deployed.",
  submitText: "submit",
  cancelText: "cancel",
  width: 600,
  height: 300,
  overlay: true,
  expirationTime: WEEK_IN_SECONDS
};

class GDPR {
  constructor(options = {}) {
    this.modal = null;
    this.options = Object.assign({}, defaultOptions, options);
  }

  init() {
    const isTimeExpired = this.checkTime();
    if (localStorage.getItem("agreement") !== null && isTimeExpired) return;
    if (this.options.autoOpen) this.openModal();
  }

  openModal() {
    this.modal = document.createElement("div");
    const modalBox = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const title = document.createElement("p");
    const content = document.createElement("p");
    const submitButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    this.modal.classList.add("gdpr-container");
    this.options.overlay ? this.modal.classList.add("gdpr-layout") : null;
    modalBox.classList.add("gdpr-modal", this.options.className);
    title.classList.add("gdpr-title");
    content.classList.add("gdpr-content");
    buttonContainer.classList.add("gdpr-button-container");
    submitButton.classList.add("gdpr-button", "gdpr-button__submit");
    cancelButton.classList.add("gdpr-button", "gdpr-button__cancel");

    title.innerText = this.options.titleText;
    content.innerText = this.options.contentText;
    submitButton.innerText = this.options.submitText;
    cancelButton.innerText = this.options.cancelText;

    modalBox.style.width = this.options.width + "px";
    modalBox.style.height = this.options.height + "px";

    submitButton.addEventListener("click", this.submit, false);
    cancelButton.addEventListener("click", this.cancel, false);

    textContainer.appendChild(title);
    textContainer.appendChild(content);
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);
    modalBox.appendChild(textContainer);
    modalBox.appendChild(buttonContainer);
    this.modal.appendChild(modalBox);

    document.body.classList.add("gdpr");
    document.body.appendChild(this.modal);
  }

  closeModal() {
    document.body.classList.remove("gdpr");
    document.body.removeChild(this.modal);
  }

  submit = () => {
    this.setAgreement(true);
    this.closeModal();
    this.setCurrentTime();
  };

  cancel = () => {
    this.setAgreement(false);
    this.closeModal();
    this.setCurrentTime();
  };

  setAgreement(boolean) {
    localStorage.setItem("agreement", boolean);
  }

  setCurrentTime() {
    const currentTime = Math.round(Date.now() / 1000);
    localStorage.setItem("agreement_time", currentTime);
  }

  checkTime() {
    if (localStorage.getItem("agreement_time") === null) return false;
    const agreementTime = Number(localStorage.getItem("agreement_time"));
    const currentTime = Math.round(Date.now() / 1000);
    return currentTime - agreementTime < this.options.expirationTime;
  }
}

export default GDPR;
