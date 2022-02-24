import React from 'react';
import Tooltip from './Tooltip';

class StaffBudget extends React.Component {

    // grab staff info and add up budget
    getShiftBudget = (staffs) => {
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
  

    render() {

        const shiftBudget = this.getShiftBudget(this.props.staffs);
        return (
            
                this.props.showBudget ?
                
                <div className="card mt-4">
                    <Tooltip content="The total amount of money budgeted by the hospital for staff welfare" direction="left">
                    <div className="card-header">Total Staff Expenses</div>
                    </Tooltip>
                    <Tooltip content="(Total number of RNs x 35) + (Total number of LVNs x 24) + (Total Unlicensed Staff x 15)" direction="left">
                    <div id="budget" className="card-body">
                        <h1 data-testid="shiftBudgetValue-id">${shiftBudget}</h1>
                    </div>
                    </Tooltip>
                </div>
            :
            null
            
        )
    }
}

export default StaffBudget;