import { Environment } from "uu5g05";
import Plus4U5 from "uu_plus4u5g02";

// the base URI of calls for development / staging environments can be configured in *-hi/env/development.json
// (or <stagingEnv>.json), e.g.:
//   "uu5Environment": {
//     "callsBaseUri": "http://localhost:8080/vnd-app/awid"
//   }
const CALLS_BASE_URI = (
  (process.env.NODE_ENV !== "production" ? Environment.get("callsBaseUri") : null) || Environment.appBaseUri
).replace(/\/*$/, "/");

const Calls = {
  async call(method, url, dtoIn, clientOptions) {
    const response = await Plus4U5.Utils.AppClient[method](url, dtoIn, clientOptions);
    return response.data;
  },

  // // example for mock calls
  // loadDemoContent(dtoIn) {
  //   const commandUri = Calls.getCommandUri("loadDemoContent");
  //   return Calls.call("get", commandUri, dtoIn);
  // },

  loadIdentityProfiles() {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/initUve");
    return Calls.call("get", commandUri, {});
  },

  initWorkspace(dtoInData) {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/init");
    return Calls.call("post", commandUri, dtoInData);
  },

  getWorkspace() {
    const commandUri = Calls.getCommandUri("sys/uuAppWorkspace/get");
    return Calls.call("get", commandUri, {});
  },

  async initAndGetWorkspace(dtoInData) {
    await Calls.initWorkspace(dtoInData);
    return await Calls.getWorkspace();
  },

  getCommandUri(useCase) {
    return CALLS_BASE_URI + useCase.replace(/^\/+/, "");
  },

  
Subject:{
  create(dtoIn) {
    let commandUri = Calls.getCommandUri("subject/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  delete(dtoIn) {
    let commandUri = Calls.getCommandUri("subject/delete");
    return Calls.call("post", commandUri, dtoIn);
  },

  update(dtoIn) {
    let commandUri = Calls.getCommandUri("subject/update");
    return Calls.call("post", commandUri, dtoIn);
  },

  get(dtoIn) {
    let commandUri = Calls.getCommandUri("subject/get");
    return Calls.call("get", commandUri, dtoIn);
  },

  list(dtoIn) {
    let commandUri = Calls.getCommandUri("subject/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  
  filter(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/filter");
    return Calls.call("get", commandUri, dtoIn);
  },
},

Term:{
  create(dtoIn) {
    let commandUri = Calls.getCommandUri("term/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  delete(dtoIn) {
    let commandUri = Calls.getCommandUri("term/delete");
    return Calls.call("post", commandUri, dtoIn);
  },

  update(dtoIn) {
    let commandUri = Calls.getCommandUri("term/update");
    return Calls.call("post", commandUri, dtoIn);
  },

  get(dtoIn) {
    let commandUri = Calls.getCommandUri("term/get");
    return Calls.call("get", commandUri, dtoIn);
  },

  list(dtoIn) {
    let commandUri = Calls.getCommandUri("term/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  
  filter(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/filter");
    return Calls.call("get", commandUri, dtoIn);
  },
},

User:{
  create(dtoIn) {
    let commandUri = Calls.getCommandUri("user/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  delete(dtoIn) {
    let commandUri = Calls.getCommandUri("user/delete");
    return Calls.call("post", commandUri, dtoIn);
  },

  update(dtoIn) {
    let commandUri = Calls.getCommandUri("user/update");
    return Calls.call("post", commandUri, dtoIn);
  },

  get(dtoIn) {
    let commandUri = Calls.getCommandUri("user/get");
    return Calls.call("get", commandUri, dtoIn);
  },

  list(dtoIn) {
    let commandUri = Calls.getCommandUri("user/list");
    return Calls.call("get", commandUri, dtoIn);
  },

  filter(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/filter");
    return Calls.call("get", commandUri, dtoIn);
  },
},

Grade:{
  
  create(dtoIn) {
    let commandUri = Calls.getCommandUri("grade/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  delete(dtoIn) {
    let commandUri = Calls.getCommandUri("grade/delete");
    return Calls.call("post", commandUri, dtoIn);
  },

  update(dtoIn) {
    let commandUri = Calls.getCommandUri("grade/update");
    return Calls.call("post", commandUri, dtoIn);
  },

  get(dtoIn) {
    let commandUri = Calls.getCommandUri("grade/get")
    return Calls.call("get", commandUri, dtoIn);
  },

  list(dtoIn) {
    let commandUri = Calls.getCommandUri("grade/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  
  filter(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/filter");
    return Calls.call("get", commandUri, dtoIn);
  },
},

Assignment:{
  create(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/create");
    return Calls.call("post", commandUri, dtoIn);
  },

  delete(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/delete");
    return Calls.call("post", commandUri, dtoIn);
  },

  update(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/update");
    return Calls.call("post", commandUri, dtoIn);
  },

  get(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/get");
    return Calls.call("get", commandUri, dtoIn);
  },

  list(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/list");
    return Calls.call("get", commandUri, dtoIn);
  },

  filter(dtoIn) {
    let commandUri = Calls.getCommandUri("assignment/filter");
    return Calls.call("get", commandUri, dtoIn);
  },
},
};

export default Calls;
