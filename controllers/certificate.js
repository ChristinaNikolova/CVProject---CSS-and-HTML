import extend from "../utils/context.js";

export default {
    get: {
        certificate(context) {
            extend(context).then(function () {
                this.partial("../views/certificate/certificate.hbs");
            })
            //     .then(
            //       document.removeClass("site-header-nav-li graduation")[0].opacity = 1)
        },
    },
};
