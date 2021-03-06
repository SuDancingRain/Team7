//@@viewOn:imports
import { Utils, createVisualComponent, PropTypes, useScreenSize } from "uu5g05";

import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const UserForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "UserForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
      
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { UserForm };
export default UserForm;
//@@viewOff:exports
