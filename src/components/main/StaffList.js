import React from 'react';
import './StaffList.css';
import { Dash, Plus, Trash } from 'react-bootstrap-icons';
import { Form } from "react-bootstrap";
import logo from '../../assets/noun-help-2492040.png';
import Tooltip from "./Tooltip";

class StaffList extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = { 
            shiftFilter: "All",
	    filterStaffTypeAsc: false, 
            filterNameAsc: false, 
            filterShiftTypeAsc: false, 
            filterQtyAsc:  false 
        };
      }

    listAdd = (index) =>{
        let quantity = parseInt(this.props.staffs[index].quantity)
        let shiftTotal = parseInt(this.props.staffs[index].shiftTotal)
        let shift = parseInt(this.props.staffs[index].shift)
        quantity = quantity + 1

        if (shift === 12) {
            shiftTotal = parseInt(shiftTotal) + 12;
        }else{
            shiftTotal = parseInt(shiftTotal) + 8;
        }
       
       if(quantity <= 100){
           this.props.staffs[index].quantity = quantity
           this.props.staffs[index].shiftTotal = shiftTotal
           this.props.onStaffChangeOnUpdate(this.props.staffs)
       }
       
    }

    listSub = (index) =>{
        let quantity = parseInt(this.props.staffs[index].quantity)
        let shiftTotal = parseInt(this.props.staffs[index].shiftTotal)
        let shift = parseInt(this.props.staffs[index].shift)
        quantity = quantity - 1;

        if (shift === 12) {
            shiftTotal = parseInt(shiftTotal) - 12;
        }
        else {
            shiftTotal = parseInt(shiftTotal) - 8;
        }

       if(quantity <= 0){
           this.props.staffs.splice(index,1)
       }else{
           this.props.staffs[index].quantity = quantity
           this.props.staffs[index].shiftTotal = shiftTotal
       }
        this.props.onStaffChangeOnUpdate(this.props.staffs)
        // this.props.calChange(this.props.events)
    }

    listRemove = (index) =>{

        this.props.staffs.splice(index,1)
        this.props.onStaffChangeOnUpdate(this.props.staffs)
        // this.props.calChange(this.props.events)


    }

     //Sorts the tables.
     filter = (criteria,isAscend) => {
        if (criteria === "staff_type"){
           this.props.staffs.sort((a,b)=> {
                if (a.type === b.type) return 0;
                //Sorts in ascending order
                if (isAscend){
                    if (a.type < b.type ) return -1;
                    else return 1;
                }else{
                    if (a.type < b.type ) return 1;
                    else return -1;
                }
               


           });
        }else if (criteria === "shift_type"){
            this.props.staffs.sort((a,b)=> {

                if (a.shift === b.shift) return 0;
                //Sorts in ascending order
                if (isAscend){
                    if (a.shift < b.shift ) return -1;
                    else return 1;
                }else{
                    if (a.shift < b.shift ) return 1;
                    else return -1;
                }


           });
        }
        else if (criteria === "name"){
            this.props.staffs.sort((a,b)=> {

                if (a.name === b.name) return 0;
                //Sorts in ascending order
                if (isAscend){
                    if (a.name < b.name ) return -1;
                    else return 1;
                }else{
                    if (a.name < b.name ) return 1;
                    else return -1;
                }


           });
        }
        else if (criteria === "quantity"){
            this.props.staffs.sort((a,b)=> {
                if (isAscend){
                    if (a.quantity < b.quantity ) return -1;
                    else return 1;
                }else{
                    if (a.quantity < b.quantity ) return 1;
                    else return -1;
                }


           });
        }
           this.props.onStaffChangeOnUpdate(this.props.staffs)
    }


    render() {
        const staffList = this.props.staffs
            .filter((staff) =>{
                if(this.state.shiftFilter)
                {
                    return staff.shift === this.state.shiftFilter || staff.type === this.state.shiftFilter ||this.state.shiftFilter === "All";  
                }  
                return true;
            })
            .map((staff, i) =>
        <tr key={staff.id} id={staff.id} >
            <td >
                <Trash className="bTrash" data-testid="delete-id" onClick={this.listRemove.bind(staff,i)} />
            </td>
            <td>{staff.type}</td>
            <td>
               <Plus className="bPlus" data-testid="add-id" onClick={this.listAdd.bind(staff,i)}/> 
               {staff.quantity} 
               <Dash className="bDash" data-testid="minus-id" onClick={this.listSub.bind(staff,i)}/>
            </td>
            <td>{staff.shift}</td>
            <td>{staff.shiftTotal}</td>
        </tr>

    );

        return (
                 this.props.staffs.length > 0 ?
            <div>

                <Form.Group className="mb-3" controlId="shiftType" required>
                    
								<Form.Label>Filter by Shift</Form.Label>
                                <Tooltip content="This helps nurses filter the shift schedule by various groupings" direction="right">
                                    <img src={logo} alt="Filter shift Tooltip" width="50" height="50"/>
                                </Tooltip>
								<Form.Control as="select" name="shift"                 
                                onChange={e => {
                                    this.setState({ shiftFilter: e.target.value });
                                  }}
                                className="caret">
									<option value="All">All</option>
                                    <option value="RN">RN</option>
									<option value="LVN">LVN</option>
									<option value="Unlicensed">Unlicensed</option>
									<option value="12 Hours Day">12 Hours Day</option>
									<option value="12 Hours Night">12 Hours Night</option>
									<option value="8 Hours Day">8 Hours Day</option>
									<option value="8 Hours Evening">8 Hours Evening</option>
									<option value="8 Hours Night">8 Hours Night</option>
								</Form.Control>
							</Form.Group>
            <table className="table table-striped table-hover" id="staffCont">
                <thead className="table-BSU">
                    {staffList.length > 0 ? <tr data-testid="staffList-id">
                        <th></th>
                        <th scope="col">

								<Form.Label>Staff Type</Form.Label> <span/>
						                        <Form.Label className='bi bi-arrow-down-square' name="toggle_filter"  onClick={e => {
                                    this.setState({ filterStaffTypeAsc: !this.state.filterStaffTypeAsc,filterNameAsc:false  , filterShiftTypeAsc: false, filterQtyAsc:  false});
                                    this.filter("staff_type",this.state.filterStaffTypeAsc);
				    //e.target.className = e.target.className == "bi bi-arrow-up-square" ? "bi bi-arrow-down-square": "bi bi-arrow-down-square";
                                  }}> <i class={this.state.filterStaffTypeAsc?"arrow up": "arrow down"}></i> </Form.Label>
                        </th>
                        <th scope="col">
                        <Form.Label>Quantity</Form.Label> <span/>
                        <Form.Label className='bi bi-arrow-down-square' name="toggle_filter"  onClick={e => {
                                    this.setState({filterNameAsc:false  , filterStaffTypeAsc: false, filterShiftTypeAsc: false, filterQtyAsc: !this.state.filterQtyAsc});

                                    this.filter("quantity",this.state.filterQtyAsc);
				    //e.target.className = e.target.className == "bi bi-arrow-up-square" ? "bi bi-arrow-down-square": "bi bi-arrow-down-square";
                                  }}><i class={this.state.filterQtyAsc?"arrow up": "arrow down"}></i> </Form.Label>
                        
                        </th>
                        <th scope="col">
                        <Form.Label>Shift </Form.Label> <span/>
                        <Form.Label className='bi bi-arrow-down-square' name="toggle_filter"  onClick={e => {
                                    this.setState({ filterNameAsc:false  ,filterStaffTypeAsc: false, filterShiftTypeAsc: !this.state.filterShiftTypeAsc, filterQtyAsc:  false});
                                    this.filter("shift_type",this.state.filterShiftTypeAsc);
				    //e.target.className = e.target.className == "bi bi-arrow-up-square" ? "bi bi-arrow-down-square": "bi bi-arrow-down-square";
                                  }}> <i class={this.state.filterShiftTypeAsc?"arrow up": "arrow down"}></i></Form.Label>
                        </th>
                        <th scope="col">
                        <Form.Label>Shift Total</Form.Label>
                        </th>
                    </tr> : false}
                </thead>
                <tbody>

                    {staffList}
                </tbody>

            </table>
            </div>
: null
        
        );
    }
}

export default StaffList;
