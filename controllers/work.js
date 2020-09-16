import extend from "../utils/context.js";

export default {
    get: {
        work(context) {
            extend(context).then(function () {
                this.partial("../views/work/work.hbs");
            })
        },
    },
};
