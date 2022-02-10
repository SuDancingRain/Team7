//@@viewOn:imports
import { Utils, createVisualComponent, useDataList, LSI } from "uu5g05";

import Config from "./config/config.js";
import Calls from "../calls.js";
import Lsi from "../routes/subject-lsi";
import TermDataList from "./term-data-list.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const SubjectForm = TermDataList(
    createVisualComponent({
        //@@viewOn:statics
        uu5Tag: Config.TAG + "SubjectForm",
        //@@viewOff:statics

        //@@viewOn:propTypes
        propTypes: {
            shown: UU5.PropTypes.bool,
            selectedSubject: UU5.PropTypes.object,
            setFormOpened: UU5.PropTypes.func,
            setSelectedSubject: UU5.PropTypes.func,
            handleCreateSubject: UU5.PropTypes.func,
            handleUpdateSubject: UU5.PropTypes.func,
        },
        //@@viewOff:propTypes

        //@@viewOn:defaultProps
        defaultProps: {},
        //@@viewOff:defaultProps

        render(props) {
            //@@viewOn:private
            const subjectListData = useDataList({
                handlerMap: {
                    load: Calls.Subject.list,
                },
                initialDtoIn: {},
            });

            const subjectAvailableTags = [];
            if (subjectListData.data) {
                subjectListData.data.forEach((subject) => {
                    subjectAvailableTags.push({
                        value: subject.data.id,
                        content: subject.data.name,
                        content: subject.data.description,
                        value: subject.data.credits,
                        content: subject.data.supervisor,
                        content: subject.data.degree,
                        content: subject.data.language,
                    });
                });
            }

            async function handleOnSave(opt) {
                opt.component.setPending();
                try {
                    if (props.selectedSubject?.id) await props.handleUpdateSubject({ id: props.selectedSubject.id, ...opt.values });
                    else await props.handleCreateSubject(opt.values);
                    opt.component.setReady();
                    props.setSelectedSubject(null);
                } catch (e) {
                    opt.component.getAlertBus().setAlert({
                        content: <UU5.Bricks.Lsi lsi={LSI.unsuccessful} />,
                        colorSchema: "red",
                    });
                    opt.component.setReady();
                }
            }
            //@@viewOff:private

            //@@viewOn:interface
            //@@viewOff:interface

            //@@viewOn:render
            const className = Config.Css.css``;
            const attrs = Utils.VisualComponent.getAttrs(props,className);

            return (
                <div {...attrs}>
                    
        <UU5.Forms.Form
          labelColWidth={"xs-12 s-12 m-4 l-3 xl-3"}
          valueColWidth={"xs-12 s-12 m-8 l-7 xl-7"}
          onSave={handleOnSave}
          onCancel={() => props.setSelectedSubject(null)}
        >
          <UU5.Forms.Text
            name={"name"}

            label={<UU5.Bricks.Lsi lsi={Lsi.name} />}
            value={props.selectedSubject?.name || ""}
          />

          <UU5.Forms.Text
            valueColWidth={"xs-15 s-15 m-11 l-10 xl-10"}
            name={"description"}
            label={<UU5.Bricks.Lsi lsi={Lsi.description} />}

            value={props.selectedSubject?.description || ""}

          />
          <UU5.Forms.Number
            name={"credits"}
            label={<UU5.Bricks.Lsi lsi={Lsi.credits} />}

            value={props.selectedSubject?.credits || ""}
          />
          <UU5.Forms.Text
            name={"supervisor"}
            label={<UU5.Bricks.Lsi lsi={Lsi.supervisor} />}

            value={props.selectedSubject?.supervisor || ""}
          />

          <UU5.Forms.Select
            name={"degree"}
            label={<UU5.Bricks.Lsi lsi={Lsi.degree} />}

            value={props.selectedSubject?.degree || ""}
          >
            <UU5.Forms.Select.Option value="bachelors" />
            <UU5.Forms.Select.Option value="masters" />
          </UU5.Forms.Select>

          <UU5.Forms.Select
            name={"language"}
            label={<UU5.Bricks.Lsi lsi={Lsi.language} />}

            value={props.selectedSubject?.language || ""}
          >
            <UU5.Forms.Select.Option value="english" />
            <UU5.Forms.Select.Option value="czech" />
          </UU5.Forms.Select>

          <UU5.Bricks.Line size={"s"} />
          <UU5.Forms.Controls
            buttonReset
          />
        </UU5.Forms.Form>

                </div>
            );
            //@@viewOff:render
        },
    })
);

//@@viewOn:exports
export { SubjectForm };
export default SubjectForm;
//@@viewOff:exports
