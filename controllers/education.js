import extend from "../utils/context.js";

export default {
  get: {
    education(context) {
      extend(context).then(function () {
        this.partial("../views/education/education.hbs");
      })
      //     .then(
      //       document.removeClass("site-header-nav-li graduation")[0].opacity = 1)
    },
  },
};
