//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import LSI from "../config/lsi.js";
import RouteBar from "../core/route-bar.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let TermDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TermDetail",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
      </div>
    );
    //@@viewOff:render
  },
});

TermDetail = withRoute(TermDetail, { authenticated: true });

//@@viewOn:exports
export { TermDetail };
export default TermDetail;
//@@viewOff:exports
