import controllers from "../controllers/index.js";

const app = new Sammy(".card", function () {
  this.use("Handlebars", "hbs");

  //Home
  this.get("#/home", controllers.home.get.home);

  //Resume
  this.get("#/resume", controllers.resume.get.resume);

  //Work
  this.get("#/work", controllers.work.get.work);

  //Ecudation
  this.get("#/education", controllers.education.get.education);

  //Certificate
  this.get("#/certificate", controllers.certificate.get.certificate);

  //Portfolio
  this.get("#/portfolio", controllers.portfolio.get.portfolio);
});

(() => {
  app.run("#/home");
})();
