(this["webpackJsonps22-hospsim"]=this["webpackJsonps22-hospsim"]||[]).push([[0],{52:function(e,t,s){},53:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},68:function(e,t,s){},70:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},79:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(19),r=s.n(i),c=(s(62),s(63),s(9)),o=s(11),l=s(12),d=s(13),h=s(14),j=(s(64),s(91)),f=s(90),u=s.p+"static/media/budget.adcb126c.jpeg",b=s.p+"static/media/Calendar1.4df590b0.jpeg",p=s.p+"static/media/error.eba8aeea.jpeg",O=s.p+"static/media/initialpg.11b079f6.jpeg",m=s.p+"static/media/input.a9a76a69.jpeg",x=s.p+"static/media/shifts.fff9adcb.jpeg",g=s.p+"static/media/staffModal.211817ac.jpeg",v=s.p+"static/media/sdp-logo-infinity.5f20fc5c.png",y=s(2),w=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)("h3",{children:"Senior Design Project"}),Object(y.jsx)("h3",{children:"CS 481 Spring 2022"}),Object(y.jsx)("h3",{children:"Boise State University"})]}),Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)("h4",{children:"Project Members"}),Object(y.jsx)("p",{children:"Spring 2022: Derek Valenzuela, Jonathan McLeod, Andrew Gerber, and Chinwendum Njoku"}),Object(y.jsx)("p",{children:"Fall 2021: Emma Lytle, Lih Wei Liang, and Becka Seevers"})]}),Object(y.jsx)("img",{src:v,alt:"senior design project logo",width:"300px"}),Object(y.jsxs)("div",{id:"sdp_info",onmouseleave:"$('#sdp_info').css('visibility', 'collapse')",children:[Object(y.jsx)("br",{}),Object(y.jsx)("h4",{children:"Site Information:"}),"Boise State University",Object(y.jsx)("br",{}),"Computer Science Senior Design Project by",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"Fall 2021:",Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:"Emma Lytle, Lih Wei Liang, and Becka Seevers"}),Object(y.jsx)("br",{}),"Spring 2022:",Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:" Derek Valenzuela, Andrew Gerber, Jonathan McLeod, and Chinwendum Njoku"}),"For information about sponsoring a project go to",Object(y.jsx)("br",{}),Object(y.jsx)("a",{href:"https://www.boisestate.edu/coen-cs/community/cs481-senior-design-project/",children:"https://www.boisestate.edu/coen-cs/community/cs481-senior-design-project/"})]}),"main",Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)("h4",{children:"Sponsor"}),Object(y.jsx)("p",{children:"Dr. Renee Walters - reneewalters@boisestate.edu"})]}),Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)("h4",{children:"Project Statement"}),Object(y.jsx)("p",{children:"The goal of the Inpatient Nurse Staffing Simulator was to create an interactive interface that will help Boise State nursing students simulate how to staff a hospital unit."})]}),Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)("h4",{children:"Project Description"}),Object(y.jsx)("p",{children:'The Boise State Nursing Department requires that students practice staffing a hospital unit. In the past, students were given scenarios and they were expected to calculate the HPPD, which is the measurement of the average number of hours needed to care for each patient on the unit. After calculating the HPPD, students then fill out their staffing choices and subtract the hours staffed from the HPPD to determine how many hours they have left in the budget. The goal is to staff the unit so that the HPPD is met, or is 0. If HPPD is a negative value, the unit is overstaffed and if it is positive, then it is understaffed. The purpose of the simulator was to take the math component out of the equation, to allow students to just focus on allocating resources appropriately. The simulator will usually be used in class where the instructor is providing the scenario values, but students have the option to create values with the "Random Scenario" button for more practice. Students have the option of putting staff into a generated calendar which will provide the student with a visual representation of the scenario.'}),Object(y.jsx)("p",{children:'Students can prepopulate the hospital staffing scenario fields by clicking the "Random Scenario" button or they can enter values manually. Once values are entered in the scenario fields, the HPPD value will change in the "Hours Remaining in the Day" box. Students are then expected to add staff members to determine how to staff for this scenario while still remaining within budget. If they schedule too many staff members, the HPPD value will become negative and display red. Students can also choose to show the salary budget by selecting the "Show Budget" checkbox. This will display the total cost to staff the unit based off of their staffing decisions. For this application\'s calculations, RNs are $35/hour, LVNs are $24/hour, and Unlicensed are $15/hour. Once students add staff members, they appear in the table as well as the calendar below the scenario fields and total staff hours for each shift are shown to the right of the page. Calculations used for this project are shown below:'}),Object(y.jsx)(j.a,{className:"mb-4",children:Object(y.jsxs)(j.a.Body,{children:[Object(y.jsx)("h6",{children:"Calculating HPPD"}),Object(y.jsx)("p",{children:"totalHPPD = (numberPatients * inputHPPD) - totalStaffHours"}),Object(y.jsx)("h6",{children:"Calculating Staff Budgets"}),Object(y.jsx)("p",{children:"totalBudget = totalRNs * 35 + totalLVNs * 24 + totalUnlicensed * 15"})]})}),Object(y.jsx)("p",{children:"This project is written in ReactJS and hosted on Github Pages. ReactJS was chosen as the framework for this project because it is a popular web development framework and we, as a team, wanted to gain more experience with it, as well as it is useful when creating responsive web pages. With ReactJS, it is important to keep components simple as each of them are considered building blocks that stack on top of one another. We built our file structure as follows:"}),Object(y.jsx)(j.a,{className:"mb-4",children:Object(y.jsx)(j.a.Body,{children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Index.js "}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"App.js"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Header.js "}),Object(y.jsx)("li",{children:"Scenario.js "}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"EvenCalendar.js "}),Object(y.jsx)("li",{children:"RandomHPPDInfo.js "}),Object(y.jsx)("li",{children:"Result.js"}),Object(y.jsx)("li",{children:"Scenario.js "}),Object(y.jsx)("li",{children:"StaffBudget.js "}),Object(y.jsx)("li",{children:"ShiftTotals.js "}),Object(y.jsx)("li",{children:"StaffAdd.js "}),Object(y.jsx)("li",{children:"StaffList.js  "}),Object(y.jsx)("li",{children:"Tooltip.js  "})]}),Object(y.jsx)("li",{children:"About.js "}),Object(y.jsx)("li",{children:"Footer.js"})]})]})]})})}),Object(y.jsx)("p",{children:"State was used to pass information between components, such as adding a new staff member updates the state, which allows StaffList.js to display that new staff member in the table below the scenario. React-Bootstrap was used in all of our styling to keep it consistent between developers. React-Bootstrap also has a lot of documentation on how to write the HTML tags and classes to utilize their various styling options. NPM was used as the package manager and to build, test, run, and deploy the web application."}),Object(y.jsx)("p",{children:"Here are some example screenshots from the web application:"}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(f.a.Image,{width:"60%",height:"60%",alt:"Inital load",src:O}),Object(y.jsx)(f.a.Caption,{children:"Web application on initial load."})]}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(f.a.Image,{width:"60%",height:"60%",alt:"Page after input is entered",src:m}),Object(y.jsx)(f.a.Caption,{children:"Web application after scenario information is entered and staff are added."})]}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(f.a.Image,{width:"60%",height:"60%",alt:"Error handling",src:p}),Object(y.jsx)(f.a.Caption,{children:"Error handling in form."})]}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(f.a.Image,{width:"60%",height:"60%",alt:"Staff modal",src:g}),Object(y.jsx)(f.a.Caption,{children:"Staff modal."})]}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(f.a.Image,{width:"60%",height:"60%",alt:"Staff shifts",src:x}),Object(y.jsx)(f.a.Caption,{children:"Staff shifts displayed."})]}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(f.a.Image,{width:"60%",height:"60%",alt:"Budget",src:u}),Object(y.jsx)(f.a.Caption,{children:"Budget is displayed."})]}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(f.a.Image,{width:"60%",height:"60%",alt:"calendar",src:b}),Object(y.jsx)(f.a.Caption,{children:"Calendar is displayed."})]})]}),Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)("h4",{children:"Technical Details"}),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"ReactJS"}),Object(y.jsx)("li",{children:"React-Bootstrap styling"}),Object(y.jsx)("li",{children:"Hosted on Github Pages"}),Object(y.jsx)("li",{children:"NPM"})]})})]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("a",{href:"https://cs481-ekh.github.io/s22-hospsim/",children:"Nurse Staffing Simulator"})," is maintained by ",Object(y.jsx)("a",{href:"https://github.com/cs481-ekh",children:"Dr. Eric Henderson"}),"  - ehenderson@boisestate.edu"]})]})}}]),s}(n.a.Component),C=w,S=s(32),N=s(40),k=s(18),H=(s(52),s(87)),T=s(82),D=(s(53),s.p+"static/media/noun-help-2492040.f2380c03.png"),P=s(23),A=(s(68),function(e){var t,s=Object(a.useState)(!1),n=Object(P.a)(s,2),i=n[0],r=n[1];return Object(y.jsxs)("div",{className:"Tooltip-Wrapper",onMouseEnter:function(){t=setTimeout((function(){r(!0)}),e.delay||400)},onMouseLeave:function(){clearInterval(t),r(!1)},children:[e.children,i&&Object(y.jsx)("div",{className:"Tooltip-Tip ".concat(e.direction||"top"),children:e.content})]})}),I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).generateUUID=function(){for(var e=[],t="0123456789abcdef",s=0;s<36;s++)e[s]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},a.getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},a.handleAdd=function(e){e.preventDefault();var t=new FormData(e.target),s=Object.fromEntries(t.entries()),n=a.generateUUID(),i=parseInt(s.quantity)*a.getShiftValue(s.shift),r={id:n,quantity:s.quantity,type:s.staffType,shift:s.shift,shiftTotal:i};a.props.onStaffAdd(r),a.handleClose()},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.state={open:!1,show:!1},a}return Object(l.a)(s,[{key:"render",value:function(){for(var e=[],t=1;t<=50;t++)e.push(t);var s=e.map((function(e){return Object(y.jsx)("option",{value:e,children:e},e)}));return this.props.showBud?Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"addstaff-id",onClick:this.handleShow,children:"Add Staff to Budget"}),Object(y.jsx)(A,{content:"This button adds staff to the budget information used in the staffing simulator",direction:"right",children:Object(y.jsx)("img",{src:D,alt:"Add Staff Tooltip",width:"50",height:"50"})}),Object(y.jsx)(H.a,{animation:!1,show:this.state.show,"data-testid":"addStaffModal-id",onHide:this.handleClose,children:Object(y.jsxs)(k.a,{onSubmit:this.handleAdd,children:[Object(y.jsx)(H.a.Header,{children:Object(y.jsx)(H.a.Title,{children:"Select your staff member"})}),Object(y.jsxs)(H.a.Body,{children:[Object(y.jsxs)(k.a.Group,{className:"mb-3",controlId:"staffType",required:!0,children:[Object(y.jsx)(A,{content:"Type of staff.",direction:"right",children:Object(y.jsx)(k.a.Label,{children:"Staff Type"})}),Object(y.jsxs)(k.a.Control,{as:"select",name:"staffType",className:"caret",children:[Object(y.jsx)("option",{value:"RN",children:"RN"}),Object(y.jsx)("option",{value:"LVN",children:"LVN"}),Object(y.jsx)("option",{value:"Unlicensed",children:"Unlicensed"})]})]}),Object(y.jsxs)(k.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(y.jsx)(A,{content:"Type of shift.",direction:"right",children:Object(y.jsx)(k.a.Label,{children:"Shift Type"})}),Object(y.jsxs)(k.a.Control,{as:"select",name:"shift",className:"caret",children:[Object(y.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(y.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(y.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(y.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(y.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(y.jsxs)(k.a.Group,{className:"mb-3",controlId:"quantity",required:!0,children:[Object(y.jsx)(A,{content:"Total amount of shift a nurse completes.",direction:"right",children:Object(y.jsx)(k.a.Label,{children:"Quantity"})}),Object(y.jsx)(k.a.Control,{as:"select",name:"quantity",children:s})]})]}),Object(y.jsxs)(H.a.Footer,{children:[Object(y.jsx)(T.a,{variant:"outline-secondary","data-testid":"cancelStaffAdd-id",onClick:this.handleClose,children:"Close"}),Object(y.jsx)(T.a,{variant:"outline-primary","data-testid":"addStaffConfirm-id",type:"submit",children:Object(y.jsx)(A,{content:"Adds staff to the staffing simulator.",direction:"top",children:"Add New Staff"})})]})]})})]}):null}}]),s}(n.a.Component),L=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).generateUUID=function(){for(var e=[],t="0123456789abcdef",s=0;s<36;s++)e[s]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},a.getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},a.handleAdd=function(e){e.preventDefault();var t=new FormData(e.target),s=Object.fromEntries(t.entries()),n=a.generateUUID(),i=parseInt(s.quantity)*a.getShiftValue(s.shift),r=s.date,c=s.date,o="lightgrey";"12 Hours Day"===s.shift?(r+="T07:00:00",c+="T19:00:00",o=a.props.backgroundColor[0]):"12 Hours Night"===s.shift?(r+="T00:00:00",c+="T12:00:00",o=a.props.backgroundColor[1]):"8 Hours Day"===s.shift?(r+="T07:00:00",c+="T15:00:00",o=a.props.backgroundColor[2]):"8 Hours Evening"===s.shift?(r+="T15:00:00",c+="T23:00:00",o=a.props.backgroundColor[3]):"8 Hours Night"===s.shift&&(r+="T00:00:00",c+="T08:00:00",o=a.props.backgroundColor[4]);var l={id:n,type:s.staffType,shift:s.shift,shiftTotal:i,start:r,end:c,name:s.name,textColor:"black",backgroundColor:o};a.props.onStaffAdd(l),a.handleClose()},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.state={open:!1,show:!1},a}return Object(l.a)(s,[{key:"render",value:function(){return this.props.showCal?Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"addstaff-id",onClick:this.handleShow,children:"Add Staff To Calendar"}),Object(y.jsx)(A,{content:"This button adds staff to the budget information used in the staffing simulator",direction:"right",children:Object(y.jsx)("img",{src:D,alt:"Add Staff Tooltip",width:"50",height:"50"})}),Object(y.jsx)(H.a,{animation:!1,show:this.state.show,"data-testid":"addStaffModal-id",onHide:this.handleClose,children:Object(y.jsxs)(k.a,{onSubmit:this.handleAdd,children:[Object(y.jsx)(H.a.Header,{children:Object(y.jsx)(H.a.Title,{children:"Select your staff member"})}),Object(y.jsxs)(H.a.Body,{children:[Object(y.jsxs)(k.a.Group,{className:"mb-3",controlId:"name",required:!0,children:[Object(y.jsx)(A,{content:"Name of staff",direction:"right",children:Object(y.jsx)(k.a.Label,{children:"Staff Name"})}),Object(y.jsx)(k.a.Control,{name:"name",type:"text"})]}),Object(y.jsxs)(k.a.Group,{className:"mb-3",controlId:"staffType",required:!0,children:[Object(y.jsx)(A,{content:"This enables the nurses schedule staff members based on their license (RN, LVN, UNLICENSED).",direction:"right",children:Object(y.jsx)(k.a.Label,{children:"Staff Type"})}),Object(y.jsxs)(k.a.Control,{as:"select",name:"staffType",className:"caret",children:[Object(y.jsx)("option",{value:"RN",children:"RN"}),Object(y.jsx)("option",{value:"LVN",children:"LVN"}),Object(y.jsx)("option",{value:"Unlicensed",children:"Unlicensed"})]})]}),Object(y.jsxs)(k.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(y.jsx)(A,{content:"The work schedule that employees complete at different rotations. It can be an 8 hour or a 12 hour rotation.",direction:"right",children:Object(y.jsx)(k.a.Label,{children:"Shift Type"})}),Object(y.jsxs)(k.a.Control,{as:"select",name:"shift",className:"caret",children:[Object(y.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(y.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(y.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(y.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(y.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(y.jsxs)(k.a.Group,{className:"mb-3",controlId:"dayOfWeek",required:!0,children:[Object(y.jsx)(A,{content:"Date they work",direction:"right",children:Object(y.jsx)(k.a.Label,{children:"Date"})}),Object(y.jsx)(k.a.Control,{name:"date",type:"text",placeholder:"YYYY-MM-DD"})]})]}),Object(y.jsxs)(H.a.Footer,{children:[Object(y.jsx)(T.a,{variant:"outline-secondary","data-testid":"cancelStaffAdd-id",onClick:this.handleClose,children:"Close"}),Object(y.jsx)(T.a,{variant:"outline-primary","data-testid":"addStaffConfirm-id",type:"submit",children:Object(y.jsx)(A,{content:"This button enables nurses add the budget information to the staffing simulator.",direction:"top",children:"Add New Staff"})})]})]})})]}):null}}]),s}(n.a.Component),U=(s(70),s(83)),B=s(84),R=s(85),E=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).listAdd=function(e){var t=parseInt(a.props.staffs[e].quantity),s=parseInt(a.props.staffs[e].shiftTotal);t+=1,s=12===parseInt(a.props.staffs[e].shift)?parseInt(s)+12:parseInt(s)+8,t<=100&&(a.props.staffs[e].quantity=t,a.props.staffs[e].shiftTotal=s,a.props.onStaffChangeOnUpdate(a.props.staffs))},a.listSub=function(e){var t=parseInt(a.props.staffs[e].quantity),s=parseInt(a.props.staffs[e].shiftTotal);t-=1,s=12===parseInt(a.props.staffs[e].shift)?parseInt(s)-12:parseInt(s)-8,t<=0?a.props.staffs.splice(e,1):(a.props.staffs[e].quantity=t,a.props.staffs[e].shiftTotal=s),a.props.onStaffChangeOnUpdate(a.props.staffs)},a.listRemove=function(e){a.props.staffs.splice(e,1),a.props.onStaffChangeOnUpdate(a.props.staffs)},a.filter=function(e,t){"staff_type"===e?a.props.staffs.sort((function(e,s){return e.type===s.type?0:t?e.type<s.type?-1:1:e.type<s.type?1:-1})):"shift_type"===e?a.props.staffs.sort((function(e,s){return e.shift===s.shift?0:t?e.shift<s.shift?-1:1:e.shift<s.shift?1:-1})):"name"===e?a.props.staffs.sort((function(e,s){return e.name===s.name?0:t?e.name<s.name?-1:1:e.name<s.name?1:-1})):"quantity"===e&&a.props.staffs.sort((function(e,s){return t?e.quantity<s.quantity?-1:1:e.quantity<s.quantity?1:-1})),a.props.onStaffChangeOnUpdate(a.props.staffs)},a.state={shiftFilter:"All",filterStaffTypeAsc:!1,filterNameAsc:!1,filterShiftTypeAsc:!1,filterQtyAsc:!1},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.staffs.filter((function(t){return!e.state.shiftFilter||(t.shift===e.state.shiftFilter||t.type===e.state.shiftFilter||"All"===e.state.shiftFilter)})).map((function(t,s){return Object(y.jsxs)("tr",{id:t.id,children:[Object(y.jsx)("td",{children:Object(y.jsx)(U.a,{className:"bTrash","data-testid":"delete-id",onClick:e.listRemove.bind(t,s)})}),Object(y.jsx)("td",{children:t.type}),Object(y.jsxs)("td",{children:[Object(y.jsx)(B.a,{className:"bPlus","data-testid":"add-id",onClick:e.listAdd.bind(t,s)}),t.quantity,Object(y.jsx)(R.a,{className:"bDash","data-testid":"minus-id",onClick:e.listSub.bind(t,s)})]}),Object(y.jsx)("td",{children:t.shift}),Object(y.jsx)("td",{children:t.shiftTotal})]},t.id)}));return this.props.staffs.length>0?Object(y.jsxs)("div",{children:[Object(y.jsxs)(k.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(y.jsx)(k.a.Label,{children:"Filter by Shift"}),Object(y.jsx)(A,{content:"This helps nurses filter the shift schedule by various groupings",direction:"right",children:Object(y.jsx)("img",{src:D,alt:"Filter shift Tooltip",width:"50",height:"50"})}),Object(y.jsxs)(k.a.Control,{as:"select",name:"shift",onChange:function(t){e.setState({shiftFilter:t.target.value})},className:"caret",children:[Object(y.jsx)("option",{value:"All",children:"All"}),Object(y.jsx)("option",{value:"RN",children:"RN"}),Object(y.jsx)("option",{value:"LVN",children:"LVN"}),Object(y.jsx)("option",{value:"Unlicensed",children:"Unlicensed"}),Object(y.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(y.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(y.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(y.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(y.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(y.jsxs)("table",{className:"table table-striped table-hover",id:"staffCont",children:[Object(y.jsx)("thead",{className:"table-BSU",children:t.length>0&&Object(y.jsxs)("tr",{"data-testid":"staffList-id",children:[Object(y.jsx)("th",{}),Object(y.jsxs)("th",{scope:"col",children:[Object(y.jsx)(k.a.Label,{children:"Staff Type"})," ",Object(y.jsx)("span",{}),Object(y.jsxs)(k.a.Label,{className:"bi bi-arrow-down-square",name:"toggle_filter",onClick:function(t){e.setState({filterStaffTypeAsc:!e.state.filterStaffTypeAsc,filterNameAsc:!1,filterShiftTypeAsc:!1,filterQtyAsc:!1}),e.filter("staff_type",e.state.filterStaffTypeAsc)},children:[" ",Object(y.jsx)("i",{class:this.state.filterStaffTypeAsc?"arrow up":"arrow down"})," "]})]}),Object(y.jsxs)("th",{scope:"col",children:[Object(y.jsx)(k.a.Label,{children:"Quantity"})," ",Object(y.jsx)("span",{}),Object(y.jsxs)(k.a.Label,{className:"bi bi-arrow-down-square",name:"toggle_filter",onClick:function(t){e.setState({filterNameAsc:!1,filterStaffTypeAsc:!1,filterShiftTypeAsc:!1,filterQtyAsc:!e.state.filterQtyAsc}),e.filter("quantity",e.state.filterQtyAsc)},children:[Object(y.jsx)("i",{class:this.state.filterQtyAsc?"arrow up":"arrow down"})," "]})]}),Object(y.jsxs)("th",{scope:"col",children:[Object(y.jsx)(k.a.Label,{children:"Shift "})," ",Object(y.jsx)("span",{}),Object(y.jsxs)(k.a.Label,{className:"bi bi-arrow-down-square",name:"toggle_filter",onClick:function(t){e.setState({filterNameAsc:!1,filterStaffTypeAsc:!1,filterShiftTypeAsc:!e.state.filterShiftTypeAsc,filterQtyAsc:!1}),e.filter("shift_type",e.state.filterShiftTypeAsc)},children:[" ",Object(y.jsx)("i",{class:this.state.filterShiftTypeAsc?"arrow up":"arrow down"})]})]}),Object(y.jsx)("th",{scope:"col",children:Object(y.jsx)(k.a.Label,{children:"Shift Total"})})]})}),Object(y.jsx)("tbody",{children:t})]})]}):null}}]),s}(n.a.Component),q=s(57),F=s(46),V=s(55),M=s(56),G=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onTrigger=function(t){for(var s=e.props.eventsArry,a=[],n=0;n<s.length;n++)t.event.id!==s[n].id&&a.push(s[n]);e.props.parentCallback(a)},e}return Object(l.a)(s,[{key:"render",value:function(){return this.props.showCal?Object(y.jsx)("div",{children:Object(y.jsx)(q.a,{plugins:[F.b,M.a,V.a],eventClick:this.onTrigger,initialView:"twoWeekView",headerToolbar:{end:"dayGridMonth,twoWeekView,timeGridDay,prev,next"},views:{twoWeekView:{type:"timeGridWeek",duration:{week:2},buttonText:"2 weeks"}},events:this.props.eventsArry})}):null}}]),s}(a.Component),W=(s(74),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},e.getStaffHours=function(t){for(var s=0,a=0;a<t.length;a++){s+=e.getShiftValue(t[a].shift)*parseInt(t[a].quantity)}return s},e.calculation=function(t,s){var a=parseInt(t.census)*parseInt(t.HPPD)-e.getStaffHours(s);return a||"--"},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.calculation(this.props.info,this.props.staffs);return Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)(A,{content:"Amount of hours left in the budget after staffing.",direction:"top",children:Object(y.jsx)("div",{className:"card-header",children:"Hours for Day Remaining"})}),Object(y.jsxs)("div",{id:"results",className:"card-body",children:[Object(y.jsx)(A,{content:"HPPD: totalHPPD = (numberPatients * inputHPPD) - totalStaffHours",direction:"top",children:Object(y.jsx)("label",{children:"HPPD"})}),Object(y.jsx)("h1",{"data-testid":"result",className:e<0?"negCalc":"",children:"--"!==e?e.toFixed(0):e})]})]})}}]),s}(n.a.Component)),Q=W,_=(s(75),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).random=function(e,t){var s=t-e,a=Math.random();return e+Math.round(a*s)},e.setRandomValues=function(){var t=e.random(1,30),s=e.random(1,60),a={unit:"Random Hospital Unit",HPPD:t,bedUnit:s,census:e.random(1,s)};e.props.onInfoChange(a)},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"random-id",onClick:this.setRandomValues,children:"Random Scenario"}),Object(y.jsx)(A,{content:"Prepopulates the hospital staffing scenario fields",direction:"right",children:Object(y.jsx)("img",{src:D,alt:"Random Sim Tooltip",width:"50",height:"50"})})]})}}]),s}(n.a.Component)),J=_,$=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getShiftBudget=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);"RN"===e[s].type?t+=35*a:"LVN"===e[s].type?t+=24*a:t+=15*a}return t},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.getShiftBudget(this.props.staffs);return this.props.showBudget?Object(y.jsxs)("div",{className:"card mt-4",children:[Object(y.jsx)(A,{content:"Total amount of money budgeted by the hospital for the staff welfare",direction:"top",children:Object(y.jsx)("div",{className:"card-header",children:"Total Staff Expenses"})}),Object(y.jsx)(A,{content:"(Total number of RNs x 35) + (Total number of LVNs x 24) + (Total Unlicensed Staff x 15)",direction:"left",children:Object(y.jsx)("div",{id:"budget",className:"card-body",children:Object(y.jsxs)("h1",{"data-testid":"shiftBudgetValue-id",children:["$",e]})})})]}):null}}]),s}(n.a.Component),Y=$,z=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getDayShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);("12 Hours Day"===e[s].shift||"8 Hours Day"===e[s].shift)&&(t+=a)}return t},e.getEveningShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);"8 Hours Evening"===e[s].shift&&(t+=a)}return t},e.getNightShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);("12 Hours Night"===e[s].shift||"8 Hours Night"===e[s].shift)&&(t+=a)}return t},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.getDayShift(this.props.staffs),t=this.getEveningShift(this.props.staffs),s=this.getNightShift(this.props.staffs);return this.props.staffs.length>0?Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"card mt-4",children:[Object(y.jsx)(A,{content:"Day shift is the shift between morning to afternoon.",direction:"top",children:Object(y.jsx)("div",{className:"card-header",children:" Day Shift Hours"})}),Object(y.jsx)("div",{id:"dayTotal",className:"card-body",children:Object(y.jsx)("h1",{children:e})})]}),Object(y.jsxs)("div",{className:"card mt-4",children:[Object(y.jsx)(A,{content:"Evening shift starts in the evening and ends in the night.",direction:"top",children:Object(y.jsx)("div",{className:"card-header",children:"Evening Shift Hours"})}),Object(y.jsx)("div",{id:"eveningTotal",className:"card-body",children:Object(y.jsx)("h1",{children:t})})]}),Object(y.jsxs)("div",{className:"card mt-4",children:[Object(y.jsx)(A,{content:"Night shift is a shift that starts at midnight and ends in the morning .",direction:"top",children:Object(y.jsx)("div",{className:"card-header",children:" Night Shift Hours"})}),Object(y.jsx)("div",{id:"nightTotal",className:"card-body",children:Object(y.jsx)("h1",{children:s})})]})]}):null}}]),s}(n.a.Component),K=z,X=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleStaffChange=function(e){a.setState({staffs:e})},a.handleStaffChangeCal=function(e){a.setState({calEvents:e})},a.handleStaffAdd=function(e){var t=[].concat(Object(S.a)(a.state.staffs),[e]);a.setState({staffs:t})},a.handleCallback=function(e){a.setState({calEvents:e})},a.handleStaffAddCal=function(e){if("RN"===e.type){var t=[].concat(Object(S.a)(a.state.eventsRN),[{title:e.name+", "+e.type,start:e.start,end:e.end,textColor:e.textColor,backgroundColor:e.backgroundColor}]);a.setState({eventsRN:t})}else if("LVN"===e.type){var s=[].concat(Object(S.a)(a.state.eventsLVN),[{title:e.name+", "+e.type,start:e.start,end:e.end,textColor:e.textColor,backgroundColor:e.backgroundColor}]);a.setState({eventsLVN:s})}else if("Unlicensed"===e.type){var n=[].concat(Object(S.a)(a.state.eventsUN),[{title:e.name+", "+e.type,start:e.start,end:e.end,textColor:e.textColor,backgroundColor:e.backgroundColor}]);a.setState({eventsUN:n})}var i=[].concat(Object(S.a)(a.state.calEvents),[{id:e.id,type:e.type,title:e.name+", "+e.type,start:e.start,end:e.end,textColor:e.textColor,backgroundColor:e.backgroundColor}]);a.setState({calEvents:i})},a.handleInfoChange=function(e){a.setState({info:e})},a.handleCheckChangeBudget=function(e){var t=e.target.checked;a.setState((function(e){Object.assign({},e.showBudget);return{showBudget:t}}))},a.handleCheckChangeCal=function(e){var t=e.target.checked;a.setState((function(e){Object.assign({},e.showCal);return{showCal:t}}))},a.findFormErrors=function(e,t){var s={};return t=parseInt(t),"HPPD"===e?t&&""!==t?(t<1||t>30)&&(s.HPPD="HPPD should be between 1 and 30"):s.HPPD="HPPD cannot be blank!":"bedUnit"===e?t&&""!==t?(t<1||t>60)&&(s.bedUnit="Number of beds should be between 1 and 60"):s.bedUnit="Number of beds cannot be blank!":"census"===e&&(t&&""!==t?t<1?s.census="Census cannot be less than 1":t>a.state.info.bedUnit&&(s.census="Census cannot exceed the number of beds in a unit!"):s.census="Census cannot be blank!"),s},a.state={results:"",staffNum:"The Results:",num:"",center:{"text-align":"center"},staffs:[],backgroundColor:["#ceeafd","#39adf9","#ffe4b3","#ffc14d","#ffa500"],showBudget:!1,showCal:!0,calEvents:[],eventsRN:[],eventsLVN:[],eventsUN:[],info:{unit:"",HPPD:"",bedUnit:"",census:""},errors:{HPPD:"",bedUnit:"",census:""}},a.handleInputChange=a.handleInputChange.bind(Object(N.a)(a)),a}return Object(l.a)(s,[{key:"handleInputChange",value:function(e){var t=e.target,s=t.value,a=t.name,n={};"unit"!==a&&(n=this.findFormErrors(a,s),Object.keys(n).length>0&&this.setState((function(e){var t=Object.assign({},e.errors);return t[a]=n[a],{errors:t}}))),this.setState((function(e){var t=Object.assign({},e.info);t[a]=s,"bedUnit"===a&&(t.census=s);var i=Object.assign({},e.errors);return i[a]&&i[a]!==n[a]&&(i[a]=null),{info:t,errors:i}}))}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)("div",{className:"col-md-4 ",children:Object(y.jsx)(J,{onInfoChange:this.handleInfoChange})}),Object(y.jsx)("div",{className:"col-md-8 fs-5",children:Object(y.jsxs)("div",{className:"float-sm-end",children:[Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"checkbox",id:"showBudget",label:"Show Budget",name:"showBudget","data-testid":"showbudget-id",checked:this.state.showBudget,onChange:this.handleCheckChangeBudget}),"Show Budget"]}),Object(y.jsx)(A,{content:"This displays the staffing budget.",direction:"left",children:Object(y.jsx)("img",{src:D,alt:"Budget Tooltip",width:"50",height:"50"})}),Object(y.jsx)("br",{}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"checkbox",id:"showCal",label:"Show Calendar",name:"showCal","data-testid":"showcal-id",checked:this.state.showCal,onChange:this.handleCheckChangeCal}),"Show Calender"]}),Object(y.jsx)(A,{content:"This displays the monthly calender for use with staffing",direction:"left",children:Object(y.jsx)("img",{src:D,alt:"Budget Tooltip",width:"50",height:"50"})}),Object(y.jsx)("div",{})]})})]}),Object(y.jsxs)("div",{className:"row mt-5",children:[Object(y.jsxs)("div",{className:"col-md-3 col-sm-6 order-sm-last",children:[Object(y.jsx)(Q,{staffs:this.state.staffs,info:this.state.info}),Object(y.jsx)(Y,{staffs:this.state.staffs,showBudget:this.state.showBudget}),Object(y.jsx)(K,{staffs:this.state.staffs})]}),Object(y.jsxs)("div",{className:"col-md-9 col-sm-6 order-sm-first",children:[Object(y.jsxs)(k.a,{className:"row",noValidate:!0,children:[Object(y.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(y.jsx)(A,{content:"Wards where patients are admitted.",direction:"right",children:Object(y.jsx)(k.a.Label,{htmlFor:"unit",children:"Hospital unit"})}),Object(y.jsx)(k.a.Control,{type:"text",name:"unit",id:"unit","data-testid":"unit-id",placeholder:"Hospital Unit",onChange:this.handleInputChange,value:this.state.info.unit})]}),Object(y.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(y.jsx)(A,{content:"Total number of beds available in the hospital wards.",direction:"top",children:Object(y.jsx)(k.a.Label,{htmlFor:"bedUnit",children:"Number of beds"})}),Object(y.jsx)(k.a.Control,{type:"number",name:"bedUnit",id:"bedUnit","data-testid":"numbeds-id",placeholder:"Number of Beds",onChange:this.handleInputChange,value:this.state.info.bedUnit,isInvalid:!!this.state.errors.bedUnit}),Object(y.jsxs)(k.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.bedUnit," "]})]}),Object(y.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(y.jsx)(A,{content:"Average number of hours needed to care for each patient on the unit.",direction:"right",children:Object(y.jsx)(k.a.Label,{htmlFor:"HPPD",children:"HPPD"})}),Object(y.jsx)(k.a.Control,{type:"number",name:"HPPD",id:"HPPD","data-testid":"hppd-id",placeholder:"HPPD",onChange:this.handleInputChange,value:this.state.info.HPPD,isInvalid:!!this.state.errors.HPPD}),Object(y.jsxs)(k.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.HPPD," "]})]}),Object(y.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(y.jsx)(A,{content:"Total number of patients admitted to the health facility at any time of the day. ",direction:"right",children:Object(y.jsx)(k.a.Label,{htmlFor:"census",children:"Census"})}),Object(y.jsx)(k.a.Control,{type:"number",name:"census",id:"census","data-testid":"census-id",placeholder:"Census",onChange:this.handleInputChange,value:this.state.info.census,isInvalid:!!this.state.errors.census}),Object(y.jsxs)(k.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.census," "]})]})]}),Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col-md-4 mt-4 ",children:Object(y.jsx)(I,{onStaffChange:this.handleStaffChange,onStaffAdd:this.handleStaffAdd,staffs:this.state.staffs,backgroundColor:this.state.backgroundColor,textColor:this.state.textColor,showBud:this.state.showBudget})})}),Object(y.jsx)("div",{className:"row mt-5 ",children:Object(y.jsx)("div",{className:"mb-10",children:Object(y.jsx)(E,{staffs:this.state.staffs,onStaffChangeOnUpdate:this.handleStaffChange})})})]})]}),Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col-md-4 mt-4 ",children:Object(y.jsx)(L,{onStaffAdd:this.handleStaffAddCal,calChange:this.handleStaffChangeCal,staffs:this.state.staffs,backgroundColor:this.state.backgroundColor,textColor:this.state.textColor,showCal:this.state.showCal})})}),Object(y.jsx)("div",{id:"calendar",children:Object(y.jsx)(G,{eventsArry:this.state.calEvents,showCal:this.state.showCal,bc:this.state.backgroundColor,parentCallback:this.handleCallback})})]})}}]),s}(n.a.Component),Z=(s(76),s.p+"static/media/Left-aligned-square-gray-2.11bbe62b.png"),ee=s(89),te=s(86),se=s(88),ae=s(30),ne=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onReload=function(){console.log("Reload clicked"),window.location.reload()},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(y.jsxs)("header",{children:[Object(y.jsx)(ee.a,{bg:"light",children:Object(y.jsxs)(te.a,{children:[Object(y.jsx)("img",{src:Z,alt:"Logo","data-testid":"reload",onClick:this.onReload}),Object(y.jsxs)(se.a,{className:"me-auto",children:[Object(y.jsx)(ae.b,{className:"text-dark nav-link",to:"/",children:"Home"}),Object(y.jsx)(ae.b,{className:"text-dark nav-link",to:"/about",children:"About"}),Object(y.jsx)(se.a.Link,{className:"text-dark",href:"https://www.boisestate.edu/nursing/",children:"BSU Nursing Department"})]})]})}),Object(y.jsx)("div",{className:"p-5 bg-primary text-white rounded",children:Object(y.jsx)("h1",{children:"Inpatient Nurse Staffing Simulator"})})]})}}]),s}(n.a.Component),ie=ne;s(77);var re=function(){return Object(y.jsx)("footer",{id:"footer",children:"BSU Nursing |   Dr. Renee Walters   |   reneewalters@boisestate.edu"})};var ce=function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(ie,{}),Object(y.jsxs)(c.c,{children:[Object(y.jsx)(c.a,{exact:!0,path:"/",element:Object(y.jsx)(X,{})}),Object(y.jsx)(c.a,{path:"/about",element:Object(y.jsx)(C,{})})]})]}),Object(y.jsx)(re,{})]})})},oe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,92)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))};s(78);r.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(ae.a,{children:Object(y.jsx)(ce,{})})}),document.getElementById("root")),oe()}},[[79,1,2]]]);
//# sourceMappingURL=main.548b55f4.chunk.js.map