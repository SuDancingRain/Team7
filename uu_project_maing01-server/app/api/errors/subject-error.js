"use strict";

const ProjectMainUseCaseError = require("./project-main-use-case-error.js");
const SUBJECT_ERROR_PREFIX = `${ProjectMainUseCaseError.ERROR_PREFIX}subject/`;

const Create = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}create/`,
  
};

const Delete = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}delete/`,
  
};

const Update = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}update/`,
  
};

const List = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}list/`,
  
};

const Get = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}get/`,
  
};

const Filter = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}filter/`,
  
};

module.exports = {
  Filter,
  Get,
  List,
  Update,
  Delete,
  Create
};
