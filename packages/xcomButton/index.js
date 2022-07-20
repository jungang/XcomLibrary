import xcomButton from "./src/button";

xcomButton.install = function(Vue) {
  Vue.component(xcomButton.name, xcomButton);
};

export const XcomButton = xcomButton;
export default XcomButton;
