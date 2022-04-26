import React from 'react';

import Tooltip from './Tooltip';

class StaffBudget extends React.Component {
    
    
    // grab staff info and add up budget
    getShiftBudgetDay = (staffs) => {
        let shiftBudget = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            if (staffs[i].type === 'RN') {
                shiftBudget += shiftTotal * 35;
            } else if (staffs[i].type === 'LVN') {
                shiftBudget += shiftTotal * 24;
            } else {
                shiftBudget += shiftTotal * 15;
            }
        }

        return shiftBudget;
    }

    getShiftBudgetWeek = (staffs) => {
        let shiftBudget = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            let shifts = parseInt(staffs[i].shiftsPerWeek)
            if (staffs[i].type === 'RN') {
                shiftBudget += shiftTotal * 35 * shifts;
            } else if (staffs[i].type === 'LVN') {
                shiftBudget += shiftTotal * 24 * shifts;
            } else {
                shiftBudget += shiftTotal * 15 * shifts;
            }
        }

        return shiftBudget;
    }
  
  

    render() {

        const shiftBudgetDay = this.getShiftBudgetDay(this.props.staffs) * this.props.weeks;
        const shiftBudgetWeek = this.getShiftBudgetWeek(this.props.staffs) * this.props.weeks;
        return (
            
                this.props.showBudget ?

                
                
                <div className="card mt-4">
                    <button type="button" onClick={this.props.up}>+</button>
                    <button onClick={this.props.down}>-</button>
                    <Tooltip content="Total amount of money budgeted by the hospital for the staff welfare for a week" direction="top">
                    <div className="card-header">Total Staff Expenses for {this.props.weeks} weeks</div>
                    </Tooltip>
                    <Tooltip content="(Total number of RNs x 35 x WeekShifts) + (Total number of LVNs x 24 x WeekShifts) + (Total Unlicensed Staff x 15 x WeekShifts)" direction="left">
                    <div id="budget" className="card-body">
                        <h1 data-testid="shiftBudgetValue-id">${shiftBudgetWeek}</h1>
                    </div>
                    </Tooltip>



                    <Tooltip content="Total amount of money budgeted by the hospital for the staff welfare" direction="top">
                    <div className="card-header">Total Staff Expenses for Day</div>
                    </Tooltip>
                    <Tooltip content="(Total number of RNs x 35) + (Total number of LVNs x 24) + (Total Unlicensed Staff x 15)" direction="left">
                    <div id="budget" className="card-body">
                        <h1 data-testid="shiftBudgetValue-id">${shiftBudgetDay}</h1>
                    </div>
                    </Tooltip>
                </div>
            :
            null
            
        )
    }
}

export default StaffBudget;