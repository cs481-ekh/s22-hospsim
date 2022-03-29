import React from "react";
import Form from "react-bootstrap/Form";
import "./Scenario.css";
import StaffAdd from "./StaffAdd";
import StaffList from "./StaffList";
import EventCalendar from "./EventCalendar";
import Result from "./Result";
import RandomHPPDInfo from "./RandomHPPDInfo";
import StaffBudget from "./StaffBudget";
import ShiftTotals from "./ShiftTotals";
import logo from "../../assets/noun-help-2492040.png";
import Tooltip from "./Tooltip";

class Scenario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "",
      staffNum: "The Results:",
      num: "",
      center: { "text-align": "center" },
      staffs: [],
      backgroundColor: ["#ceeafd","#39adf9","#ffe4b3","#ffc14d","#ffa500"], //0 is 12 day, 1 is 12 night, 2 is 8 day, 3 is 8 evening, 4 is 8 night
      showBudget: false,
      showCal: true,  //just cuz
      calEvents: [],
      eventsRN: [],
      eventsLVN: [],
      eventsUN: [],
      info: {
        unit: "",
        HPPD: "",
        bedUnit: "",
        census: "",
      },
      errors: {
        HPPD: "",
        bedUnit: "",
        census: "",
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleStaffChange = (staff) => {
    this.setState({ staffs: staff });
  };
  handleStaffChangeCal = (event) => {
    this.setState({ calEvents: event})
  };


  handleStaffAdd = (staffItem) => {
    let staffCopy = [...this.state.staffs, staffItem];
    this.setState({ staffs: staffCopy });
    console.log(staffItem);
    //check for shift type
		// if(staffItem.type === "RN"){

		// }else if(formDataObj.staffType === "LVN"){

		// }else if(formDataObj.staffType === "Unlicensed"){
			
		// }

    let events = [...this.state.calEvents, {title: staffItem.name+", "+staffItem.type, start: staffItem.start, end:staffItem.end, textColor: staffItem.textColor, backgroundColor: staffItem.backgroundColor}]
    this.setState({ calEvents: events});
    console.log(events);
  };

  handleInfoChange = (info) => {
    this.setState({ info: info });

    
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let newErrors = {};
    // form validation
    if (name !== "unit") {
      newErrors = this.findFormErrors(name, value);

      // set errors in state if they exist
      if (Object.keys(newErrors).length > 0) {
        this.setState((prevState) => {
          let errors = Object.assign({}, prevState.errors);
          errors[name] = newErrors[name];
          return { errors };
        });
      }
    }

    //https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    this.setState((prevState) => {
      let info = Object.assign({}, prevState.info); // creating copy of state variable info
      info[name] = value; // update the name property, assign a new value
      if (name === "bedUnit") {
        // if bedUnit, census should default to same value
        info["census"] = value;
      }

      // clear error if it's been resolved
      let errors = Object.assign({}, prevState.errors);
      if (!!errors[name] && errors[name] !== newErrors[name]) {
        errors[name] = null;
      }

      return { info, errors }; // return new info and error objects
    });
  }

  // handle show budget check change
  handleCheckChangeBudget = (event) => {
    const target = event.target;
    const value = target.checked;

    this.setState((prevState) => {
      let showBudget = Object.assign({}, prevState.showBudget);
      showBudget = value;
      return { showBudget };
    });
  };
  // handle show budget check change
  handleCheckChangeCal = (event) => {
    const target = event.target;
    const value = target.checked;

    this.setState((prevState) => {
      let showCal = Object.assign({}, prevState.showCal);
      showCal = value;
      return { showCal };
    });

  };

  // https://dev.to/alecgrey/controlled-forms-with-front-and-backend-validations-using-react-bootstrap-5a2
  findFormErrors = (name, val) => {
    const newErrors = {};
    val = parseInt(val);
    if (name === "HPPD") {
      // HPPD errors
      if (!val || val === "") newErrors.HPPD = "HPPD cannot be blank!";
      else if (val < 1 || val > 30)
        newErrors.HPPD = "HPPD should be between 1 and 30";
    } else if (name === "bedUnit") {
      // bedUnit errors
      if (!val || val === "")
        newErrors.bedUnit = "Number of beds cannot be blank!";
      else if (val < 1 || val > 60)
        newErrors.bedUnit = "Number of beds should be between 1 and 60";
    } else if (name === "census") {
      // census errors
      if (!val || val === "") newErrors.census = "Census cannot be blank!";
      else if (val < 1) newErrors.census = "Census cannot be less than 1";
      else if (val > this.state.info.bedUnit)
        newErrors.census = "Census cannot exceed the number of beds in a unit!";
    }
    return newErrors;
  };

  //https://paladini.dev/posts/how-to-make-an-extremely-reusable-tooltip-component-with-react--and-nothing-else/

  render() {
    return (
      <div className="App">
        <div className="row mt-3">
          <div className="col-md-4 ">
            <RandomHPPDInfo onInfoChange={this.handleInfoChange} />
          </div>

          <div className="col-md-8 fs-5">
            <div className="float-sm-end">
              <div id="righticon">
                <label>
                  <input
                    type="checkbox"

                    id="showBudget"
                    label="Show Budget"
                    name="showBudget"
                    data-testid="showbudget-id"
                    checked={this.state.showBudget}
                    onChange={this.handleCheckChangeBudget}

                  />
                  Show Budget
                </label>
                <Tooltip
                  content="This displays the budget of Hours for days remaining, total staff expenses, shift per hours
                          and time of day (Day shift hours, evening shift hours, and night shift hours)"
                  direction="left"
                >
                  <img src={logo} alt="Budget Tooltip" width="50" height="50" />
                </Tooltip>
              </div>
              <div id="show cal">
                <label>
                  <input
                    type="checkbox"
                    id="showCal"
                    label="Show Calender"
                    name="showCal"
                    data-testid="showcal-id"
                    checked={this.state.showCal}
                    onChange={this.handleCheckChangeCal}

                  />
                  Show Calender
                </label>
                <Tooltip
                  content="This displays the monthly calender for use with staffing"
                  direction="left"
                >
                  <img src={logo} alt="Budget Tooltip" width="50" height="50" />
                </Tooltip>
              </div>

              <div></div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-3 col-sm-6 order-sm-last">
            <Result staffs={this.state.staffs} info={this.state.info}></Result>
            <StaffBudget
              staffs={this.state.staffs}
              showBudget={this.state.showBudget}
            ></StaffBudget>
            <ShiftTotals staffs={this.state.staffs}></ShiftTotals>
          </div>

          {/* Form has to be used instead of form because of validation feedback and bootstrap version used */}

            

          <div className="col-md-9 col-sm-6 order-sm-first">
            <Form className="row" noValidate>
              <div className="col-md-6 mt-3 fs-5">

                <Tooltip
                  content="These are wards where patients are admitted depending on the severity of their health condition."
                  direction="right">
                  <Form.Label htmlFor="unit">Hospital unit</Form.Label>
                </Tooltip>
                  <Form.Control
                    type="text"
                    name="unit"
                    id="unit"
                    data-testid="unit-id"
                    placeholder="Hospital Unit"
                    onChange={this.handleInputChange}
                    value={this.state.info.unit}
                  />
                


              </div>

              <div className="col-md-6 mt-3 fs-5">
              <Tooltip
                  content="The total number of beds available in the hospital wards." direction="top">
                <Form.Label htmlFor="bedUnit">Number of beds</Form.Label>
              </Tooltip>
                <Form.Control
                  type="number"
                  name="bedUnit"
                  id="bedUnit"
                  data-testid="numbeds-id"
                  placeholder="Number of Beds"
                  onChange={this.handleInputChange}
                  value={this.state.info.bedUnit}
                  isInvalid={!!this.state.errors.bedUnit}
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {this.state.errors.bedUnit}{" "}
                </Form.Control.Feedback>
              </div>

              <div className="col-md-6 mt-3 fs-5">

              <Tooltip
                  content="This is the measurement of the average number of hours needed to care for each patient on the unit." direction="right">
                <Form.Label htmlFor="HPPD">HPPD</Form.Label>
              </Tooltip>
                <Form.Control
                  type="number"
                  name="HPPD"
                  id="HPPD"
                  data-testid="hppd-id"
                  placeholder="HPPD"
                  onChange={this.handleInputChange}
                  value={this.state.info.HPPD}
                  isInvalid={!!this.state.errors.HPPD}
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {this.state.errors.HPPD}{" "}
                </Form.Control.Feedback>
              </div>

              <div className="col-md-6 mt-3 fs-5">

              <Tooltip
                  content="This is the total number of patients admitted to the health facility at any time of the day.
                  " direction="right">
                <Form.Label htmlFor="census">Census</Form.Label>
              </Tooltip>
                <Form.Control
                  type="number"
                  name="census"
                  id="census"
                  data-testid="census-id"
                  placeholder="Census"
                  onChange={this.handleInputChange}
                  value={this.state.info.census}
                  isInvalid={!!this.state.errors.census}
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  {this.state.errors.census}{" "}
                </Form.Control.Feedback>

              </div>
            </Form>
            <div className="row">
              <div className="col-md-4 mt-4 ">
                <StaffAdd
                  onStaffChange={this.handleStaffChange}
                  onStaffAdd={this.handleStaffAdd}
                  staffs={this.state.staffs}
                  backgroundColor = {this.state.backgroundColor}
                  textColor = {this.state.textColor}
                />
              </div>
            </div>

            <div className="row mt-5 ">
              <div className="mb-10">
                <StaffList
                  staffs={this.state.staffs}
                  onStaffChangeOnUpdate={this.handleStaffChange}
                  onStaffChangeOnUpdateCal={this.handleStaffChangeCal}
                  events={this.state.calEvents}
                ></StaffList>
              </div>
            </div>
          </div>
        </div>
        <div id='calendar'>

            <EventCalendar
            eventsArry={this.state.calEvents}
            showCal={this.state.showCal}
            bc={this.state.backgroundColor}>
            
            
            </EventCalendar>
          </div>

      </div>
      
    );
  }
}


export default Scenario;
