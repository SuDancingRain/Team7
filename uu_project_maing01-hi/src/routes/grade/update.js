//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const UpdateGrade = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Update",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return children ?? null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { UpdateGrade };
export default UpdateGrade;
//@@viewOff:exports
