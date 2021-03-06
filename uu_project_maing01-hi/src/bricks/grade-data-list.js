//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent,useDataList } from "uu5g05";
import Calls from "../calls.js";
//@@viewOff:imports

function GradeDataList(Component, displayName) {
  return createComponent({
    //@@viewOn:statics
    displayName,
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {},
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {},
    //@@viewOff:defaultProps

    //@@viewOn:render
    render(props) {
      const gradeListData = useDataList({
        handlerMap: {
          load: Calls.Grade.list
        },
        initialDtoIn: {},
      });

      let result;

      switch (gradeListData.state) {
        case "pendingNoData":
        case "pending":
          result = <UU5.Bricks.Loading />;
          break;
        case "readyNoData":
        case "ready":
          result = <Component {...props} data={gradeListData.data} />;
          break;
        case "errorNoData":
        case "error":
          result = <UU5.Bricks.Error data={gradeListData.error} />;
      }

      return result;
    },
  });
  //@@viewOff:render
}


//@@viewOn:exports
export { GradeDataList };
export default GradeDataList;
//@@viewOff:exports
