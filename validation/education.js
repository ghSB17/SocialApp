const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

 
  
  if (Validator.isEmpty(data.school)) {
    errors.school = "Education chool field is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Education degree field is required";
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Education fieldofstudy field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "School from field is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
