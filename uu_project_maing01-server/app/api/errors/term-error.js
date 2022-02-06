"use strict";

const ProjectMainUseCaseError = require("./project-main-use-case-error.js");
const TERM_ERROR_PREFIX = `${ProjectMainUseCaseError.ERROR_PREFIX}term/`;

const Create = {
  UC_CODE: `${TERM_ERROR_PREFIX}create/`,
  
};

const Delete = {
  UC_CODE: `${TERM_ERROR_PREFIX}delete/`,
  
};

const Update = {
  UC_CODE: `${TERM_ERROR_PREFIX}update/`,
  
};

const List = {
  UC_CODE: `${TERM_ERROR_PREFIX}list/`,
  
};

const Get = {
  UC_CODE: `${TERM_ERROR_PREFIX}get/`,
  
};

const Filter = {
  UC_CODE: `${TERM_ERROR_PREFIX}filter/`,
  
};

module.exports = {
  Filter,
  Get,
  List,
  Update,
  Delete,
  Create
};
