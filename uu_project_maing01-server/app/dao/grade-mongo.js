"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class GradeMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = GradeMongo;
