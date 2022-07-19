import XcomButton from "./src/button";

/* istanbul ignore next */
XcomButton.install = function(Vue) {
  Vue.component(XcomButton.name, XcomButton);
};

export default XcomButton;
