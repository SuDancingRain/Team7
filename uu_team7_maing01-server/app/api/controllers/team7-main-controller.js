"use strict";
const Team7MainAbl = require("../../abl/team7-main-abl.js");

class Team7MainController {
  init(ucEnv) {
    return Team7MainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new Team7MainController();
