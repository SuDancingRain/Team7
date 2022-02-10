//@@viewOn:imports
import { createVisualComponent, withLazy } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5 from "uu_plus4u5g02";
import Plus4U5App from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Home from "../routes/home.js";


import SubjectList from '../routes/subject-list';
import SubjectDetail from '../routes/subject-detail';
import TermDetail from '../routes/term-detail';
import AssignmentDetail from '../routes/assignment-detail';
import UserList from '../routes/user-list';
import UserDetail from '../routes/user-detail';
import GradeDetail from "../routes/grade-detail";

import CreateTerm from '../routes/term/create';
import DeleteTerm from '../routes/term/delete';
import UpdateTerm from '../routes/term/update';
import ListTerm from '../routes/term/list';
import GetTerm from '../routes/term/get';
import FilterTerm from '../routes/term/filter';

import CreateSubject from '../routes/subject/create';
import DeleteSubject from '../routes/subject/delete';
import UpdateSubject from '../routes/subject/update';
import ListSubject from '../routes/subject/list';
import GetSubject from '../routes/subject/get';
import FilterSubject from '../routes/subject/filter';

import CreateAssignment from '../routes/assignment/create';
import DeleteAssignment from '../routes/assignment/delete';
import UpdateAssignment from '../routes/assignment/update';
import ListAssignment from '../routes/assignment/list';
import GetAssignment from '../routes/assignment/get';
import FilterAssignment from '../routes/assignment/filter';

import CreateUser from '../routes/user/create';
import DeleteUser from '../routes/user/delete';
import UpdateUser from '../routes/user/update';
import ListUser from '../routes/user/list';
import GetUser from '../routes/user/get';
import FilterUser from '../routes/user/filter';

import ListGrade from '../routes/grade/list';
import GetGrade from '../routes/grade/get';
import CreateGrade from '../routes/grade/create';
import UpdateGrade from '../routes/grade/update';
import DeleteGrade from '../routes/grade/delete';
import FilterGrade from '../routes/grade/filter';

//@@viewOff:imports

//@@viewOn:constants
const About = withLazy(() => import("../routes/about.js"), <Plus4U5App.SpaPending />);
const InitAppWorkspace = withLazy(() => import("../routes/init-app-workspace.js"), <Plus4U5App.SpaPending />);
const ControlPanel = withLazy(() => import("../routes/control-panel.js"), <Plus4U5App.SpaPending />);

const ROUTE_MAP = {
  "": { redirect: "home" },
  home: (props) => <Home {...props} />,
  about: (props) => <About {...props} />,
  "sys/uuAppWorkspace/initUve": (props) => <InitAppWorkspace {...props} />,
  controlPanel: (props) => <ControlPanel {...props} />,

  
  subjectDetail: { component: <SubjectDetail /> },
  subjectList: { component: <SubjectList /> },
  termDetail: { component: <TermDetail /> },
  assignmentDetail: { component: <AssignmentDetail /> },
  userDetail: { component: <UserDetail /> },
  userList: { component: <UserList /> },
  gradeDetail: { component: <GradeDetail /> },

  createTerm: { component: <CreateTerm /> },
  deleteTerm: { component: <DeleteTerm /> },
  updateTerm: { component: <UpdateTerm /> },
  listTerm: { component: <ListTerm /> },
  getTerm: { component: <GetTerm /> },
  filterTerm: {component: <FilterTerm />},

  createSubject: { component: <CreateSubject /> },
  deleteSubject: { component: <DeleteSubject /> },
  updateSubject: { component: <UpdateSubject /> },
  listSubject: { component: <ListSubject /> },
  getSubject: { component: <GetSubject /> },
  filterSubject: {component: <FilterSubject />},

  createUser: { component: <CreateUser /> },
  deleteUser: { component: <DeleteUser /> },
  updateUser: { component: <UpdateUser /> },
  listUser: { component: <ListUser /> },
  getUser: { component: <GetUser /> },
  filterUser: {component: <FilterUser />},

  createGrade: { component: <CreateGrade /> },
  deleteGrade: { component: <DeleteGrade /> },
  updateGrade: { component: <UpdateGrade /> },
  getGrade: { component: <GetGrade /> },
  listGrade: { component: <ListGrade /> },
  filterGrade: {component: <FilterGrade />},


  createAssignment: { component: <CreateAssignment /> },
  deleteAssignment: { component: <DeleteAssignment /> },
  updateAssignment: { component: <UpdateAssignment /> },
  listAssignment: { component: <ListAssignment /> },
  getAssignment: { component: <GetAssignment /> },
  filterAssignment: {component: <FilterAssignment />},

  "*": () => (
    <Uu5Elements.Text category="story" segment="heading" type="h1">
      Not Found
    </Uu5Elements.Text>
  ),
};
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Spa = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Spa",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.SpaProvider initialLanguageList={["en", "cs"]}>
        <Uu5Elements.ModalBus>
          <Plus4U5App.Spa routeMap={ROUTE_MAP} />
        </Uu5Elements.ModalBus>
      </Plus4U5.SpaProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Spa };
export default Spa;
//@@viewOff:exports
