module.exports = {
  default: {
    paths: [
      "features/userPreferences.feature"
    ],
    require: [
      "stepDefinitions/*.js"
    ],
    format: [
      "progress"
    ],
    publishQuiet: true
  }
};
