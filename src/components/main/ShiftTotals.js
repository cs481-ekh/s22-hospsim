import React from 'react';
import Tooltip from "./Tooltip";

class ShiftTotals extends React.Component {

    // grab staff info and add up budget
    getDayShift = (staffs) => {
        let dayShiftHours = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            if (staffs[i].shift === '12 Hours Day') {
                dayShiftHours += shiftTotal;
            } else if (staffs[i].shift === '8 Hours Day') {
                dayShiftHours += shiftTotal;
            }
        }

        return dayShiftHours;
    }

    getEveningShift = (staffs) => {
        let eveningShiftHours = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            if (staffs[i].shift === '8 Hours Evening') {
                eveningShiftHours += shiftTotal;
            }
        }

        return eveningShiftHours;
    }
    getNightShift = (staffs) => {
        let nightShiftHours = 0;

        for (var i = 0; i < staffs.length; i++) {
            let shiftTotal = parseInt(staffs[i].shiftTotal);
            if (staffs[i].shift === '12 Hours Night') {
                nightShiftHours += shiftTotal;
            } else if (staffs[i].shift === '8 Hours Night') {
                nightShiftHours += shiftTotal;
            }
        }

        return nightShiftHours;
    }

    render() {

        const dayShiftHours = this.getDayShift(this.props.staffs);
        const eveningShiftHours = this.getEveningShift(this.props.staffs);
        const nightShiftHours = this.getNightShift(this.props.staffs);
        return (
            this.props.staffs.length > 0 ?
            <div>
                <div className="card mt-4">

                <Tooltip
                  content="The shift that is done during the day. It usually occur between morning - afternoon period."direction="top">
                    <div className="card-header"> Day Shift Hours</div>
                </Tooltip>
                    <div id="dayTotal" className="card-body">
                        <h1>{dayShiftHours}</h1>
                    </div>
                </div>

                <div className="card mt-4">
                <Tooltip
                  content="This can also be called swing shift. It's a shift that starts in the evenings and ends sometimes in the early hours of the night."direction="left">
                    <div className="card-header">Evening Shift Hours</div>
                </Tooltip>
                    <div id="eveningTotal" className="card-body">
                        <h1>{eveningShiftHours}</h1>
                    </div>
                </div>

                <div className="card mt-4">
                <Tooltip
                  content="This shift can also be called graveyard shift. It's a shift that starts at midnight and ends in the early hours of the morning ."direction="left">
                    <div className="card-header"> Night Shift Hours</div>
                </Tooltip>
                    <div id="nightTotal" className="card-body">
                        <h1>{nightShiftHours}</h1>
                    </div>
                </div>
            
            </div>
            : null
        )
    }
}

export default ShiftTotals;