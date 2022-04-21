import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import './StaffAdd.css';
import logo from '../../assets/noun-help-2492040.png';
import Tooltip from "./Tooltip";
// import EventCalendar from "./EventCalendar";

// also noticing another bug where the url is holding the value of the selected items in the modal. We should look at how to fix this in the next sprint because it might look different after the refactor
class StaffAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			show: false,
		};
	}

	//Used to generate an ID for each Staff entry.  We might want ID later to manipulate the staffs collection.
	generateUUID = () => {
		var s = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "-";
		return s.join("");
	}
	getShiftValue = (shiftString) => {
        //considered changing shift to just be 12,...8 so parseint would just work
        //but additional information from string i.e. day, night might be needed.
        let shiftValue = 0;
        switch (shiftString) {
            case '12 Hours Day':
                shiftValue = 12;
                break;
            case '12 Hours Night':
                shiftValue = 12;
                break;
            case '8 Hours Day':
                shiftValue = 8;
                break;
            case '8 Hours Evening':
                shiftValue = 8;
                break;
            case '8 Hours Night':
                shiftValue = 8;
                break;
            default:
                shiftValue = 0;
        }

        return shiftValue;
    }
	handleAdd = (value) => {
		value.preventDefault();
		const formData = new FormData(value.target),
			formDataObj = Object.fromEntries(formData.entries())

		var uuid = this.generateUUID();
		var shiftTotal = parseInt(formDataObj.quantity) * this.getShiftValue(formDataObj.shift);
		var timeStart = formDataObj.date;
		var timeEnd = formDataObj.date;
		//let year = timeStart.substring(0,4)
		//let month = timeStart.substring(5,7)
		//let day = timeStart.substring(8,10)
		var backgroundColorVar = 'lightgrey';

		//check for day times
		if(formDataObj.shift === "12 Hours Day"){
			timeStart = timeStart+"T07:00:00";
			timeEnd = timeEnd+"T19:00:00";
			backgroundColorVar = this.props.backgroundColor[0];
		}else if (formDataObj.shift === "12 Hours Night"){
			timeStart = timeStart+"T00:00:00";
			timeEnd = timeEnd+"T12:00:00";
			backgroundColorVar = this.props.backgroundColor[1];
		}else if (formDataObj.shift === "8 Hours Day"){
			timeStart = timeStart+"T07:00:00";
			timeEnd = timeEnd+"T15:00:00";
			backgroundColorVar = this.props.backgroundColor[2];
		}else if (formDataObj.shift === "8 Hours Evening"){
			timeStart = timeStart+"T15:00:00";
			timeEnd = timeEnd+"T23:00:00";
			backgroundColorVar = this.props.backgroundColor[3];
		}else if (formDataObj.shift === "8 Hours Night"){
			timeStart = timeStart+"T00:00:00";
			timeEnd = timeEnd+"T08:00:00";
			backgroundColorVar = this.props.backgroundColor[4];
		}


	
		let staff = {
			id: uuid,
			type: formDataObj.staffType, 
			shift: formDataObj.shift, 
			shiftTotal: shiftTotal, 
			start: timeStart, 
			end: timeEnd, 
			name: formDataObj.name, 
			textColor: "black", 
			backgroundColor: backgroundColorVar};
		
		this.props.onStaffAdd(staff);
		this.handleClose();
	}

	

	handleClose = () => {
		this.setState({ "show": false });
	}
	handleShow = () => {
		this.setState({ "show": true });
	}

	render() {


		return (
			this.props.showCal ?
            <div>  
			<button type="button" className="btn btn-outline-primary" data-testid="addstaff-id" onClick={this.handleShow}>Add Staff To Calendar</button>
			<Tooltip content="This button adds staff to the budget information used in the staffing simulator" direction="right">
                <img src={logo} alt="Add Staff Tooltip" width="50" height="50"/>
            </Tooltip>
				
				<Modal animation={false} show={this.state.show} data-testid="addStaffModal-id" onHide={this.handleClose}>
					<Form onSubmit={this.handleAdd}>
						<Modal.Header>
							<Modal.Title>Select your staff member</Modal.Title>
						</Modal.Header>
						<Modal.Body>

						<Form.Group className="mb-3" controlId="name" required>
							<Tooltip
                  				content="Name of staff"direction="right">
								<Form.Label>Staff Name</Form.Label>
							</Tooltip>
    							<Form.Control name="name" type="text"/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="staffType" required>
							<Tooltip
                  				content="This enables the nurses schedule staff members based on their license (RN, LVN, UNLICENSED)."direction="right">
								<Form.Label>Staff Type</Form.Label>
							</Tooltip>
								<Form.Control as="select" name="staffType" className="caret">
									<option value="RN">RN</option>
									<option value="LVN">LVN</option>
									<option value="Unlicensed">Unlicensed</option>
								</Form.Control>
							</Form.Group>

							<Form.Group className="mb-3" controlId="shiftType" required>
							<Tooltip
                  				content="The work schedule that employees complete at different rotations. It can be an 8 hour or a 12 hour rotation."direction="right">
								<Form.Label>Shift Type</Form.Label>
							</Tooltip>
								<Form.Control as="select" name="shift" className="caret">
									<option value="12 Hours Day">12 Hours Day</option>
									<option value="12 Hours Night">12 Hours Night</option>
									<option value="8 Hours Day">8 Hours Day</option>
									<option value="8 Hours Evening">8 Hours Evening</option>
									<option value="8 Hours Night">8 Hours Night</option>
								</Form.Control>
							</Form.Group>
							<Form.Group className="mb-3" controlId="dayOfWeek" required>
							<Tooltip
                  				content="Date they work"direction="right">
								<Form.Label>Date</Form.Label>
							</Tooltip>
    							<Form.Control name="date" type="text" placeholder="YYYY-MM-DD" />
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="outline-secondary" data-testid="cancelStaffAdd-id" onClick={this.handleClose}>
								Close
							</Button>
							<Button variant="outline-primary" data-testid = "addStaffConfirm-id" type="submit">
							<Tooltip content="This button enables nurses add the budget information to the staffing simulator." direction="top">
								Add New Staff
							</Tooltip>
							</Button>			
						</Modal.Footer>
					</Form>
				</Modal>
				</div>  
				: null
		);
	}



}
export default StaffAdd
