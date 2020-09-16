import extend from "../utils/context.js";

export default {
  get: {
    resume(context) {
      extend(context).then(function () {
        this.partial("../views/resume/resume.hbs");
      });
    },
  },
};