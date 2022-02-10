//@@viewOn:imports
import { Utils, createVisualComponent, useSession, useState, useDataObject, useDataList, Lsi } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import LSI from "./subject-lsi";
import RouteBar from "../core/route-bar.js";
import TermForm from "../bricks/term-form";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let SubjectDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SubjectDetail",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    subjectId: UU5.PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    
    const subjectData = useDataObject({
      handlerMap: {
        load: Calls.Subject.get,
      },
      initialDtoIn: {
        id: props.subjectId || props.params.id,
      },
    });

    
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [termToDelete, setTermToDelete] = useState(null);

    const termListData = useDataList({
      handlerMap: {
        load: Calls.Term.list,
        createItem: Calls.Term.create,
      },
      itemHandlerMap: {
        update: Calls.Term.edit,
        delete: Calls.Term.delete,
      },
      initialDtoIn: {},
    });

    //@@viewOff:private

    //@@viewOn:interface
        
    function handleCreateTerm(newTermData) {
      return termListData.handlerMap.createItem(newTermData);
    }

    function handleUpdateTerm(updatedTermData) {
      return selectedTerm.handlerMap.update(updatedTermData);
    }

    async function handleTermDelete() {
      await termToDelete.handlerMap.delete({ id: termToDelete.data.id });
      setTermToDelete(null);
    }

    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = Utils.VisualComponent.getAttrs(props,className);
    
    function getResult() {
      let result;

      if (subjectData.state.includes("pending")) {
        result = <UU5.Bricks.Loading />;
      } else if (subjectData.state.includes("error")) {
        result = <UU5.Common.Error errorData={subjectData.errorData} />;
      } else {
        if (currentNestingLevel) {
          result = (
            <UU5.Bricks.Block colorScheme="blue" card={"content"}>
              
             <b> <UU5.Bricks.Lsi lsi={Lsi.name}/> </b> : {subjectData.data.name}
              <br />
             <b> <UU5.Bricks.Lsi lsi={Lsi.description}/> </b> : {subjectData.data.description}
              <br />
             <b> <UU5.Bricks.Lsi lsi={Lsi.credits}/> </b> : {subjectData.data.credits}
              <br />
             <b> <UU5.Bricks.Lsi lsi={Lsi.supervisor}/> </b> : {subjectData.data.supervisor}
              <br />
             <b> <UU5.Bricks.Lsi lsi={Lsi.degree}/> </b> : {subjectData.data.degree}
              <br />
             <b> <UU5.Bricks.Lsi lsi={Lsi.language}/> </b> : {subjectData.data.language}
            <UU5.Bricks.Line />
            <UU5.Bricks.Header level="4" content="Subject Form" />
            <TermForm
            setSelectedTerm={setSelectedTerm}
            handleCreateTerm={handleCreateTerm}
            handleUpdateTerm={handleUpdateTerm}
            />
            </UU5.Bricks.Block>

          );
        } else {
          result = (
            <UU5.Bricks.Link
              onClick={() => UU5.Environment.getRouter().setRoute("subjectDetail", { id: props.subjectId })}
            >
              {subjectData.data.name}
            </UU5.Bricks.Link>
          );
        }
      }
      return result;
    }

    return getResult();

    //@@viewOff:render
  },
});

SubjectDetail = withRoute(SubjectDetail, { authenticated: true });

//@@viewOn:exports
export { SubjectDetail };
export default SubjectDetail;
//@@viewOff:exports
