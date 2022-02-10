//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent,useDataList } from "uu5g05";
import Calls from "../calls.js";
//@@viewOff:imports

function TermDataList(Component, displayName) {
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
      const termListData = useDataList({
        handlerMap: {
          load: Calls.Term.list
        },
        initialDtoIn: {},
      });

      let result;

      switch (termListData.state) {
        case "pendingNoData":
        case "pending":
          result = <UU5.Bricks.Loading />;
          break;
        case "readyNoData":
        case "ready":
          result = <Component {...props} data={termListData.data} />;
          break;
        case "errorNoData":
        case "error":
          result = <UU5.Bricks.Error data={termListData.error} />;
      }

      return result;
    },
  });
  //@@viewOff:render
}


//@@viewOn:exports
export { TermDataList };
export default TermDataList;
//@@viewOff:exports
