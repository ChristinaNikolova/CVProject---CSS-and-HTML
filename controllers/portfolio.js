import extend from "../utils/context.js";

export default {
    get: {
        portfolio(context) {
            extend(context).then(function () {
                this.partial("../views/portfolio/portfolio.hbs");
            });
        },
    },
};