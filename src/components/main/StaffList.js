import React from 'react';
import './StaffList.css';
import { Dash, Plus, Trash,ArrowUp,ArrowDown } from 'react-bootstrap-icons';
import { Form } from "react-bootstrap";
import logo from '../../assets/noun-help-2492040.png';
import Tooltip from "./Tooltip";

class StaffList extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = { 
            shiftFilter: "All" 
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
    }

    listRemove = (index) =>{

        this.props.staffs.splice(index,1)
        this.props.onStaffChangeOnUpdate(this.props.staffs)


    }

    filter = (criteria,isAscend) => {
    
        if (criteria === "staff_type"){
           this.props.staffs.sort((a,b)=> {
                if (a.type === b.type) return 0;
                //Sorts in ascending order
                if (a.type < b.type && isAscend ) return -1;
                else return 1;


           });
        }else if (criteria === "shift_type"){
            this.props.staffs.sort((a,b)=> {
                if (a.shift === b.shift) return 0;
                //Sorts in ascending order
                if (a.shift < b.shift && isAscend ) return -1;
                else return 1;


           });
        }
        else if (criteria === "quantity"){
            this.props.staffs.sort((a,b)=> {
                if (a.quantity === b.quantity) return 0;
                //Sorts in ascending order
                if (a.quantity < b.quantity && isAscend ) return -1;
                else return 1;


           });
        }
        this.props.onStaffChangeOnUpdate(this.props.staffs);
    }

    //Filter by staff
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

								<Form.Label>Staff Type</Form.Label>
								<select id="DropdownMenu">
                                var string = [
                                    "Select",
                                    "LVN",
                                    "RN",
                                    "UNLICENSED",
                                    "8 Hours Night",
                                    "12 Hours Night"
                                ];
                                {/* var stringArray = string.split('');
                                stringArray.sort();
                                stringArray.join(' ');
                                return stringArray === this.state.shiftFilter || staff.type === this.state.shiftFilter ||this.state.shiftFilter === "All"; */}
                            </select>								
                        </th>
                        <th scope="col">
                        <Form.Label>Shift Type</Form.Label>
                        <ArrowDown className='ml-4' name="toggle_filter"  onClick={e => {
                                    this.setState({ shiftFilter: e.target.value });
                                  }}> </ArrowDown>
                        
                        </th>
                        <th scope="col">
                        <Form.Label>Shift </Form.Label>
                        <select id="DropdownMenu ">
                                var string = [
                                    "Select",
                                    " Day",                             
                                    " Evening",
                                    " Night"                                  
                                ];

                        </select>                              
                        </th>
                        <th scope="col">
                        <Form.Label>Shift Total</Form.Label>
                        <select id= "DropdownMenu ">
                                var string = [
                                    "Select",
                                    "8 ",
                                    "12 "
                                ];
                            </select>                          
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
