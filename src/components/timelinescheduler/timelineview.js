import * as React from "react";
import {
  ScheduleComponent,
  ResourceDirective,
  ResourcesDirective,
  ViewsDirective,
  ViewDirective,
  Agenda,
  TimelineViews,
  TimelineMonth,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import "./index.css";
// import "./schedule-component.css";
import { extend } from "@syncfusion/ej2-base";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { SampleBase } from "./sample-base";
import { PropertyPane } from "./property-pane";
import Grow from "@material-ui/core/Grow";
import * as dataSource from "./datasource.json";
/**
 * Schedule timeline sample
 */
export default class TimelineView extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource, null, true);
    this.roomData = [
      { RoomText: 'Schedule', Id: 1, RoomColor: '#cb6bb2' },
      { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
  ];
  this.ownerData = [
      { OwnerText: 'Prev', Id: 1, GroupId: 1, OwnerColor: '#ffaa00' },
      { OwnerText: 'relise', Id: 2, GroupId: 1, OwnerColor: '#f8a398' },
      { OwnerText: 'Valid', Id: 3, GroupId: 1, OwnerColor: '#7499e1' }
  ];
  }

  onEventRendered(args) {
    let categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.scheduleObj.currentView === "Agenda") {
      args.element.firstChild.style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }

  change(args) {
    this.scheduleObj.selectedDate = args.value;
    this.scheduleObj.dataBind();
  }
  render() {
    return (
      <div className="schedule-control-section" style={{marginTop:"2.5rem"}}>
        <Grow in={true} {...{ timeout: 1200 }}>
          <div className="col-lg-9 control-section">
            <div className="control-wrapper">
              <ScheduleComponent
                height="400px"
                ref={(schedule) => (this.scheduleObj = schedule)}
                selectedDate={new Date(2019, 0, 10)}
                eventRendered={this.onEventRendered.bind(this)}
                eventSettings={{ dataSource: this.data.default.scheduleData }}
                group={{ resources: ['Rooms', 'Owners'] }}
              >
                <ViewsDirective>
                  <ViewDirective option="TimelineDay" />
                  {/* <ViewDirective option="TimelineWeek" />
                <ViewDirective option="TimelineWorkWeek" />
                <ViewDirective option="TimelineMonth" />
                <ViewDirective option="Agenda" /> */}
                </ViewsDirective>
                <ResourcesDirective>
                <ResourceDirective field='RoomId' title='Room' name='Rooms' dataSource={this.roomData} textField='RoomText' idField='Id' colorField='RoomColor'>
                </ResourceDirective>
                <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={this.ownerData} textField='OwnerText' idField='Id' groupIDField='GroupId' colorField='OwnerColor'>
                </ResourceDirective>
            </ResourcesDirective>
                <Inject
                  services={[
                    TimelineViews,
                    TimelineMonth,
                    Agenda,
                    Resize,
                    DragAndDrop,
                  ]}
                />
              </ScheduleComponent>
            </div>
          </div>
          {/* <div className="col-lg-3 property-section">
          <PropertyPane title="Properties">
            <table
              id="property"
              title="Properties"
              className="property-panel-table"
              style={{ width: "100%" }}
            >
              <tbody>
                <tr style={{ height: "50px" }}>
                  <td style={{ width: "30%" }}>
                    <div className="col-md-4" style={{ paddingTop: "8px" }}>
                      Current Date
                    </div>
                  </td>
                  <td style={{ width: "70%" }}>
                    <div className="datepicker-control-section">
                      <DatePickerComponent
                        value={new Date(2019, 0, 10)}
                        showClearButton={false}
                        change={this.change.bind(this)}
                      ></DatePickerComponent>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>
        </div> */}
        </Grow>
      </div>
    );
  }
}
