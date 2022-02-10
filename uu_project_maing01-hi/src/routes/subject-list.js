//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { Utils, createVisualComponent, useSession, useState, useDataList, Lsi } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import Uu5Tiles from "uu5tilesg02";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";

import Calls from "../calls";
import Config from "./config/config.js";
import LSI from "./subject-lsi";
import RouteBar from "../core/route-bar.js";
import SubjectForm from "../bricks/subject-form";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let SubjectList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SubjectList",
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
    
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [subjectToDelete, setSubjectToDelete] = useState(null);

    const subjectListData = useDataList({
      handlerMap: {
        load: Calls.Subject.list,
        createItem: Calls.Subject.create,
      },
      itemHandlerMap: {
        update: Calls.Subject.update,
        delete: Calls.Subject.delete,
      },
      initialDtoIn: {},
    });


    const assignmentAvailableTags = [];
    if (props.data) {
      props.data.forEach((assignment) => {
        assignmentAvailableTags.push({
          value: assignment.data.id,
          content: assignment.data.name,
        });
      });
    }
    //@@viewOff:private

    //@@viewOn:interface
    function handleCreateSubject(newSubjectData) {
        return subjectListData.handlerMap.createItem(newSubjectData);
      }
  
      function handleUpdateSubject(updatedSubjectData) {
        return selectedSubject.handlerMap.update(updatedSubjectData);
      }
  
      async function handleSubjectDelete() {
        await subjectToDelete.handlerMap.delete({ id: subjectToDelete.data.id });
        setSubjectToDelete(null);
      }
  
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = Utils.VisualComponent.getAttrs(props, className);
    
    function getCollumns() {
        return [
          {
            header: <UU5.Bricks.Lsi lsi={LSI.name} />,
            sorterKey: "nameAsc",
            cell: (cellProps) => cellProps.data.data.name,
  
          },
          {
            header: <UU5.Bricks.Lsi lsi={LSI.degree}/>,
            cell: (cellProps) => cellProps.data.data.degree,
          },
          {
            header: <UU5.Bricks.Lsi lsi={LSI.language}/>,
            cell: (cellProps) => cellProps.data.data.language,
          },
          {
            cell: (cellProps) => {
              if (cellProps.data.state.includes("pending")) {
                return <UU5.Bricks.Loading />
              } else {
                return (
                  <>
                    <UU5.Bricks.Button
                      colorSchema="blue"
                      onClick={() => { UU5.Environment.getRouter().setRoute("subjectDetail", { id: cellProps.data.data.id }) }}
                    >
                      <UU5.Bricks.Icon
                        icon="mdi-magnify"
                      />
                    </UU5.Bricks.Button>
                    <UU5.Bricks.Button
                      colorSchema="blue"
                      onClick={() => setSelectedSubject(cellProps.data)}
                    >
                      <UU5.Bricks.Icon icon="mdi-pencil" />
                    </UU5.Bricks.Button>
                    <UU5.Bricks.Button
                      colorSchema="red"
                      onClick={() => setSubjectToDelete(cellProps.data)}
                    >
                      <UU5.Bricks.Icon
                        icon="mdi-close"
                      />
                    </UU5.Bricks.Button>
                  </>
                );
              }
            },
          },
        ];
      }
  
    return (
      <div {...attrs}>
        <RouteBar />
        
        {
          selectedSubject && (
            <UU5.Bricks.Modal
              header={<UU5.Bricks.Lsi lsi={props.selectedSubject?.id ? Lsi.updateSubject : Lsi.createSubject} />}
              shown={!!selectedSubject}
              onClose={() => setSelectedSubject(null)}
            >
              <SubjectForm
                selectedSubject={selectedSubject.data}
                setSelectedSubject={setSelectedSubject}
                handleCreateSubject={handleCreateSubject}
                handleUpdateSubject={handleUpdateSubject}
              />
            </UU5.Bricks.Modal>
          )
        }

        {subjectToDelete && (
          <UU5.Bricks.Modal
            header={"Confirm Subject Deletion"}
            shown={true}
            onClose={() => setSubjectToDelete(null)}
          >
            <div className={"center uu5-common-padding-s"}>
              <UU5.Bricks.Button onClick={() => setSubjectToDelete(null)}>
                Refuse
              </UU5.Bricks.Button>
              {""}
              <UU5.Bricks.Button colorSchema={"red"} onClick={handleSubjectDelete}>
                Confirm
              </UU5.Bricks.Button>
            </div>
          </UU5.Bricks.Modal>
        )
        }
        <UU5.Bricks.Button colorSchema={"green"} onClick={()=> setSelectedSubject({data: {} })}>
          <UU5.Bricks.Icon icon={"mdi-plus"} />
          <UU5.Bricks.Lsi lsi={LSI.create} />
        </UU5.Bricks.Button>

        <Uu5Tiles.List columns={getCollumns()} data={subjectListData.data || []} rowAlignment="center" rowHeight={150} />

      </div>
    );
    //@@viewOff:render
  },
});

SubjectList = withRoute(SubjectList, { authenticated: true });

//@@viewOn:exports
export { SubjectList };
export default SubjectList;
//@@viewOff:exports
