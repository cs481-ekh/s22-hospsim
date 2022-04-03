(this["webpackJsonps22-hospsim"]=this["webpackJsonps22-hospsim"]||[]).push([[0],{52:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},69:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(19),r=s.n(i),c=(s(61),s(62),s(9)),o=s(11),l=s(12),d=s(13),h=s(14),j=s(90),u=s(89),f=s.p+"static/media/budget.adcb126c.jpeg",b=s.p+"static/media/error.eba8aeea.jpeg",p=s.p+"static/media/initialpg.11b079f6.jpeg",O=s.p+"static/media/input.a9a76a69.jpeg",m=s.p+"static/media/shifts.fff9adcb.jpeg",g=s.p+"static/media/staffModal.211817ac.jpeg",x=s(3),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("h3",{children:"Senior Design Project"}),Object(x.jsx)("h3",{children:"CS 481 Fall 2021"}),Object(x.jsx)("h3",{children:"Boise State University"})]}),Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("h4",{children:"Project Members"}),Object(x.jsx)("p",{children:"Emma Lytle, Lih Wei Liang, and Becka Seevers"})]}),Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("h4",{children:"Sponsor"}),Object(x.jsx)("p",{children:"Dr. Renee Walters - reneewalters@boisestate.edu"})]}),Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("h4",{children:"Project Statement"}),Object(x.jsx)("p",{children:"The goal of the Inpatient Nurse Staffing Simulator was to create an interactive interface that will help Boise State nursing students simulate how to staff a hospital unit."})]}),Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("h4",{children:"Project Description"}),Object(x.jsx)("p",{children:'The Boise State Nursing Department requires that students practice staffing a hospital unit. In the past, students were given scenarios and they were expected to calculate the HPPD, which is the measurement of the average number of hours needed to care for each patient on the unit. After calculating the HPPD, students then fill out their staffing choices and subtract the hours staffed from the HPPD to determine how many hours they have left in the budget. The goal is to staff the unit so that the HPPD is met, or is 0. If HPPD is a negative value, the unit is overstaffed and if it is positive, then it is understaffed. The purpose of the simulator was to take the math component out of the equation, to allow students to just focus on allocating resources appropriately. The simulator will usually be used in class where the instructor is providing the scenario values, but students have the option to create values with the "Random Scenario" button for more practice.'}),Object(x.jsx)("p",{children:'Students can prepopulate the hospital staffing scenario fields by clicking the "Random Scenario" button or they can enter values manually. Once values are entered in the scenario fields, the HPPD value will change in the "Hours Remaining in the Day" box. Students are then expected to add staff members to determine how to staff for this scenario while still remaining within budget. If they schedule too many staff members, the HPPD value will become negative and display red. Students can also choose to show the salary budget by selecting the "Show Budget" checkbox. This will display the total cost to staff the unit based off of their staffing decisions. For this application\'s calculations, RNs are $35/hour, LVNs are $24/hour, and Unlicensed are $15/hour. Once students add staff members, they appear in the table below the scenario fields and total staff hours for each shift are shown to the right of the page. Calculations used for this project are shown below:'}),Object(x.jsx)(j.a,{className:"mb-4",children:Object(x.jsxs)(j.a.Body,{children:[Object(x.jsx)("h6",{children:"Calculating HPPD"}),Object(x.jsx)("p",{children:"totalHPPD = (numberPatients * inputHPPD) - totalStaffHours"}),Object(x.jsx)("h6",{children:"Calculating Staff Budgets"}),Object(x.jsx)("p",{children:"totalBudget = totalRNs * 35 + totalLVNs * 24 + totalUnlicensed * 15"})]})}),Object(x.jsx)("p",{children:"This project is written in ReactJS and hosted on Github Pages. ReactJS was chosen as the framework for this project because it is a popular web development framework and we, as a team, wanted to gain more experience with it, as well as it is useful when creating responsive web pages. With ReactJS, it is important to keep components simple as each of them are considered building blocks that stack on top of one another. We built our file structure as follows:"}),Object(x.jsx)(j.a,{className:"mb-4",children:Object(x.jsx)(j.a.Body,{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Index.js "}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"App.js"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Header.js "}),Object(x.jsx)("li",{children:"Scenario.js "}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"RandomHPPDInfo.js "}),Object(x.jsx)("li",{children:"Result.js"}),Object(x.jsx)("li",{children:"StaffBudget.js "}),Object(x.jsx)("li",{children:"ShiftTotals.js "}),Object(x.jsx)("li",{children:"StaffAdd.js "}),Object(x.jsx)("li",{children:"StaffList.js  "})]}),Object(x.jsx)("li",{children:"About.js "}),Object(x.jsx)("li",{children:"Footer.js"})]})]})]})})}),Object(x.jsx)("p",{children:"State was used to pass information between components, such as adding a new staff member updates the state, which allows StaffList.js to display that new staff member in the table below the scenario. React-Bootstrap was used in all of our styling to keep it consistent between developers. React-Bootstrap also has a lot of documentation on how to write the HTML tags and classes to utilize their various styling options. NPM was used as the package manager and to build, test, run, and deploy the web application."}),Object(x.jsx)("p",{children:"Here are some example screenshots from the web application:"}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Inital load",src:p}),Object(x.jsx)(u.a.Caption,{children:"Web application on initial load."})]}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Page after input is entered",src:O}),Object(x.jsx)(u.a.Caption,{children:"Web application after scenario information is entered and staff are added."})]}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Error handling",src:b}),Object(x.jsx)(u.a.Caption,{children:"Error handling in form."})]}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Staff modal",src:g}),Object(x.jsx)(u.a.Caption,{children:"Staff modal."})]}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Staff shifts",src:m}),Object(x.jsx)(u.a.Caption,{children:"Staff shifts displayed."})]}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.a.Image,{width:"60%",height:"60%",alt:"Budget",src:f}),Object(x.jsx)(u.a.Caption,{children:"Budget is displayed."})]})]}),Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("h4",{children:"Technical Details"}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"ReactJS"}),Object(x.jsx)("li",{children:"React-Bootstrap styling"}),Object(x.jsx)("li",{children:"Hosted on Github Pages"}),Object(x.jsx)("li",{children:"NPM"})]})})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("a",{href:"https://boisestate.github.io/nursestaffingsim/",children:"Nurse Staffing Simulator"})," is maintained by ",Object(x.jsx)("a",{href:"https://github.com/cs481-ekh",children:"Dr. Eric Henderson"}),"  - ehenderson@boisestate.edu"]})]})}}]),s}(n.a.Component),y=v,w=s(32),C=s(39),N=s(18),S=(s(52),s(86)),H=s(81),k=(s(66),s.p+"static/media/noun-help-2492040.f2380c03.png"),T=s(23),P=(s(67),function(e){var t,s=Object(a.useState)(!1),n=Object(T.a)(s,2),i=n[0],r=n[1];return Object(x.jsxs)("div",{className:"Tooltip-Wrapper",onMouseEnter:function(){t=setTimeout((function(){r(!0)}),e.delay||400)},onMouseLeave:function(){clearInterval(t),r(!1)},children:[e.children,i&&Object(x.jsx)("div",{className:"Tooltip-Tip ".concat(e.direction||"top"),children:e.content})]})}),D=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).generateUUID=function(){for(var e=[],t="0123456789abcdef",s=0;s<36;s++)e[s]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},a.getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},a.handleAdd=function(e){e.preventDefault();var t=new FormData(e.target),s=Object.fromEntries(t.entries()),n=a.generateUUID(),i=parseInt(s.quantity)*a.getShiftValue(s.shift),r=s.date,c=s.date,o=r.substring(0,4),l=r.substring(5,7),d=r.substring(8,10),h="lightgrey";"12 Hours Day"===s.shift?(r+="T07:00:00",c+="T19:00:00",h=a.props.backgroundColor[0]):"12 Hours Night"===s.shift?(r+="T19:00:00",c=o+"-"+l+"-"+ ++d+"T07:00:00",h=a.props.backgroundColor[1]):"8 Hours Day"===s.shift?(r+="T07:00:00",c+="T15:00:00",h=a.props.backgroundColor[2]):"8 Hours Evening"===s.shift?(r+="T15:00:00",c+="T23:00:00",h=a.props.backgroundColor[3]):"8 Hours Night"===s.shift&&(r+="T23:00:00",c=o+"-"+l+"-"+ ++d+"T07:00:00",h=a.props.backgroundColor[4]);var j={id:n,quantity:s.quantity,type:s.staffType,shift:s.shift,shiftTotal:i,start:r,end:c,name:s.name,textColor:"black",backgroundColor:h};a.props.onStaffAdd(j),a.handleClose()},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.state={open:!1,show:!1},a}return Object(l.a)(s,[{key:"render",value:function(){for(var e=[],t=1;t<=50;t++)e.push(t);var s=e.map((function(e){return Object(x.jsx)("option",{value:e,children:e},e)}));return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"addstaff-id",onClick:this.handleShow,children:"Add Staff"}),Object(x.jsx)(P,{content:"This button adds staff to the budget information used in the staffing simulator",direction:"right",children:Object(x.jsx)("img",{src:k,alt:"Add Staff Tooltip",width:"50",height:"50"})}),Object(x.jsx)(S.a,{animation:!1,show:this.state.show,"data-testid":"addStaffModal-id",onHide:this.handleClose,children:Object(x.jsxs)(N.a,{onSubmit:this.handleAdd,children:[Object(x.jsx)(S.a.Header,{children:Object(x.jsx)(S.a.Title,{children:"Select your staff member"})}),Object(x.jsxs)(S.a.Body,{children:[Object(x.jsxs)(N.a.Group,{className:"mb-3",controlId:"name",required:!0,children:[Object(x.jsx)(P,{content:"Name of staff",direction:"right",children:Object(x.jsx)(N.a.Label,{children:"Staff Name"})}),Object(x.jsx)(N.a.Control,{name:"name",type:"text"})]}),Object(x.jsxs)(N.a.Group,{className:"mb-3",controlId:"staffType",required:!0,children:[Object(x.jsx)(P,{content:"This enables the nurses schedule staff members based on their license (RN, LVN, UNLICENSED).",direction:"right",children:Object(x.jsx)(N.a.Label,{children:"Staff Type"})}),Object(x.jsxs)(N.a.Control,{as:"select",name:"staffType",className:"caret",children:[Object(x.jsx)("option",{value:"RN",children:"RN"}),Object(x.jsx)("option",{value:"LVN",children:"LVN"}),Object(x.jsx)("option",{value:"Unlicensed",children:"Unlicensed"})]})]}),Object(x.jsxs)(N.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(x.jsx)(P,{content:"The work schedule that employees complete at different rotations. It can be an 8 hour or a 12 hour rotation.",direction:"right",children:Object(x.jsx)(N.a.Label,{children:"Shift Type"})}),Object(x.jsxs)(N.a.Control,{as:"select",name:"shift",className:"caret",children:[Object(x.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(x.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(x.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(x.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(x.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(x.jsxs)(N.a.Group,{className:"mb-3",controlId:"quantity",required:!0,children:[Object(x.jsx)(P,{content:"The total amount of rotations a nurse completes in a day.",direction:"right",children:Object(x.jsx)(N.a.Label,{children:"Quantity"})}),Object(x.jsx)(N.a.Control,{as:"select",name:"quantity",children:s})]}),Object(x.jsxs)(N.a.Group,{className:"mb-3",controlId:"dayOfWeek",required:!0,children:[Object(x.jsx)(P,{content:"Date they work",direction:"right",children:Object(x.jsx)(N.a.Label,{children:"Date"})}),Object(x.jsx)(N.a.Control,{name:"date",type:"text",placeholder:"YYYY-MM-DD"})]})]}),Object(x.jsxs)(S.a.Footer,{children:[Object(x.jsx)(H.a,{variant:"outline-secondary","data-testid":"cancelStaffAdd-id",onClick:this.handleClose,children:"Close"}),Object(x.jsx)(H.a,{variant:"outline-primary","data-testid":"addStaffConfirm-id",type:"submit",children:Object(x.jsx)(P,{content:"This button enables nurses add the budget information to the staffing simulator.",direction:"top",children:"Add New Staff"})})]})]})})]})}}]),s}(n.a.Component),I=(s(69),s(82)),U=s(83),B=s(84),R=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).listAdd=function(e){var t=parseInt(a.props.staffs[e].quantity),s=parseInt(a.props.staffs[e].shiftTotal);t+=1,s=12===parseInt(a.props.staffs[e].shift)?parseInt(s)+12:parseInt(s)+8,t<=100&&(a.props.staffs[e].quantity=t,a.props.staffs[e].shiftTotal=s,a.props.onStaffChangeOnUpdate(a.props.staffs))},a.listSub=function(e){var t=parseInt(a.props.staffs[e].quantity),s=parseInt(a.props.staffs[e].shiftTotal);t-=1,s=12===parseInt(a.props.staffs[e].shift)?parseInt(s)-12:parseInt(s)-8,t<=0?a.props.staffs.splice(e,1):(a.props.staffs[e].quantity=t,a.props.staffs[e].shiftTotal=s),a.props.onStaffChangeOnUpdate(a.props.staffs)},a.listRemove=function(e){a.props.staffs.splice(e,1),a.props.events.splice(e,1),a.props.onStaffChangeOnUpdateCal(a.props.events),a.props.onStaffChangeOnUpdateCal(a.props.events),a.props.onStaffChangeOnUpdate(a.props.staffs)},a.state={shiftFilter:"All"},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.staffs.filter((function(t){return!e.state.shiftFilter||(t.shift===e.state.shiftFilter||t.type===e.state.shiftFilter||"All"===e.state.shiftFilter)})).map((function(t,s){return Object(x.jsxs)("tr",{id:t.id,children:[Object(x.jsx)("td",{children:Object(x.jsx)(I.a,{className:"bTrash","data-testid":"delete-id",onClick:e.listRemove.bind(t,s)})}),Object(x.jsx)("td",{children:t.name}),Object(x.jsx)("td",{children:t.type}),Object(x.jsxs)("td",{children:[Object(x.jsx)(U.a,{className:"bPlus","data-testid":"add-id",onClick:e.listAdd.bind(t,s)}),t.quantity,Object(x.jsx)(B.a,{className:"bDash","data-testid":"minus-id",onClick:e.listSub.bind(t,s)})]}),Object(x.jsx)("td",{children:t.shift}),Object(x.jsx)("td",{children:t.shiftTotal})]},t.id)}));return this.props.staffs.length>0?Object(x.jsxs)("div",{children:[Object(x.jsxs)(N.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(x.jsx)(N.a.Label,{children:"Filter by Shift"}),Object(x.jsx)(P,{content:"This helps nurses filter the shift schedule by various groupings",direction:"right",children:Object(x.jsx)("img",{src:k,alt:"Filter shift Tooltip",width:"50",height:"50"})}),Object(x.jsxs)(N.a.Control,{as:"select",name:"shift",onChange:function(t){e.setState({shiftFilter:t.target.value})},className:"caret",children:[Object(x.jsx)("option",{value:"All",children:"All"}),Object(x.jsx)("option",{value:"RN",children:"RN"}),Object(x.jsx)("option",{value:"LVN",children:"LVN"}),Object(x.jsx)("option",{value:"Unlicensed",children:"Unlicensed"}),Object(x.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(x.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(x.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(x.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(x.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(x.jsxs)("table",{className:"table table-striped table-hover",id:"staffCont",children:[Object(x.jsx)("thead",{className:"table-BSU",children:t.length>0&&Object(x.jsxs)("tr",{"data-testid":"staffList-id",children:[Object(x.jsx)("th",{}),Object(x.jsx)("th",{scope:"col",children:"Name"}),Object(x.jsx)("th",{scope:"col",children:"Staff Type"}),Object(x.jsx)("th",{scope:"col",children:"Quantity"}),Object(x.jsx)("th",{scope:"col",children:"Shift"}),Object(x.jsx)("th",{scope:"col",children:"Shift Total"})]})}),Object(x.jsx)("tbody",{children:t})]})]}):null}}]),s}(n.a.Component),L=s(56),A=s(45),E=s(54),F=s(55),V=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return console.log("rendered cal"),this.props.showCal?Object(x.jsx)("div",{children:Object(x.jsx)(L.a,{plugins:[A.b,F.a,E.a],initialView:"twoWeekView",headerToolbar:{end:"dayGridMonth,twoWeekView,timeGridDay,prev,next"},views:{twoWeekView:{type:"timeGridWeek",duration:{week:2},buttonText:"2 weeks"}},events:this.props.eventsArry})}):null}}]),s}(a.Component),q=(s(73),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getShiftValue=function(e){var t=0;switch(e){case"12 Hours Day":case"12 Hours Night":t=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":t=8;break;default:t=0}return t},e.getStaffHours=function(t){for(var s=0,a=0;a<t.length;a++){s+=e.getShiftValue(t[a].shift)*parseInt(t[a].quantity)}return s},e.calculation=function(t,s){var a=parseInt(t.census)*parseInt(t.HPPD)-e.getStaffHours(s);return a||"--"},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.calculation(this.props.info,this.props.staffs);return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)(P,{content:"The amount of hours left in the budget after staffing.",direction:"top",children:Object(x.jsx)("div",{className:"card-header",children:"Hours for Day Remaining"})}),Object(x.jsxs)("div",{id:"results",className:"card-body",children:[Object(x.jsx)(P,{content:"To calculate HPPD: totalHPPD = (numberPatients * inputHPPD) - totalStaffHours",direction:"top",children:Object(x.jsx)("label",{children:"HPPD"})}),Object(x.jsx)("h1",{"data-testid":"result",className:e<0?"negCalc":"",children:"--"!==e?e.toFixed(0):e})]})]})}}]),s}(n.a.Component)),M=q,W=(s(74),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).random=function(e,t){var s=t-e,a=Math.random();return e+Math.round(a*s)},e.setRandomValues=function(){var t=e.random(1,30),s=e.random(1,60),a={unit:"Random Hospital Unit",HPPD:t,bedUnit:s,census:e.random(1,s)};e.props.onInfoChange(a)},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"random-id",onClick:this.setRandomValues,children:"Random Scenario"}),Object(x.jsx)(P,{content:"Prepopulates the hospital staffing scenario fields",direction:"right",children:Object(x.jsx)("img",{src:k,alt:"Random Sim Tooltip",width:"50",height:"50"})})]})}}]),s}(n.a.Component)),G=W,J=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getShiftBudget=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);"RN"===e[s].type?t+=35*a:"LVN"===e[s].type?t+=24*a:t+=15*a}return t},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.getShiftBudget(this.props.staffs);return this.props.showBudget?Object(x.jsxs)("div",{className:"card mt-4",children:[Object(x.jsx)(P,{content:"The total amount of money budgeted by the hospital for staff welfare",direction:"left",children:Object(x.jsx)("div",{className:"card-header",children:"Total Staff Expenses"})}),Object(x.jsx)(P,{content:"(Total number of RNs x 35) + (Total number of LVNs x 24) + (Total Unlicensed Staff x 15)",direction:"left",children:Object(x.jsx)("div",{id:"budget",className:"card-body",children:Object(x.jsxs)("h1",{"data-testid":"shiftBudgetValue-id",children:["$",e]})})})]}):null}}]),s}(n.a.Component),Y=J,$=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getDayShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);("12 Hours Day"===e[s].shift||"8 Hours Day"===e[s].shift)&&(t+=a)}return t},e.getEveningShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);"8 Hours Evening"===e[s].shift&&(t+=a)}return t},e.getNightShift=function(e){for(var t=0,s=0;s<e.length;s++){var a=parseInt(e[s].shiftTotal);("12 Hours Night"===e[s].shift||"8 Hours Night"===e[s].shift)&&(t+=a)}return t},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.getDayShift(this.props.staffs),t=this.getEveningShift(this.props.staffs),s=this.getNightShift(this.props.staffs);return this.props.staffs.length>0?Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"card mt-4",children:[Object(x.jsx)(P,{content:"The shift that is done during the day. It usually occur between morning - afternoon period.",direction:"top",children:Object(x.jsx)("div",{className:"card-header",children:" Day Shift Hours"})}),Object(x.jsx)("div",{id:"dayTotal",className:"card-body",children:Object(x.jsx)("h1",{children:e})})]}),Object(x.jsxs)("div",{className:"card mt-4",children:[Object(x.jsx)(P,{content:"This can also be called swing shift. It's a shift that starts in the evenings and ends sometimes in the early hours of the night.",direction:"left",children:Object(x.jsx)("div",{className:"card-header",children:"Evening Shift Hours"})}),Object(x.jsx)("div",{id:"eveningTotal",className:"card-body",children:Object(x.jsx)("h1",{children:t})})]}),Object(x.jsxs)("div",{className:"card mt-4",children:[Object(x.jsx)(P,{content:"This shift can also be called graveyard shift. It's a shift that starts at midnight and ends in the early hours of the morning .",direction:"left",children:Object(x.jsx)("div",{className:"card-header",children:" Night Shift Hours"})}),Object(x.jsx)("div",{id:"nightTotal",className:"card-body",children:Object(x.jsx)("h1",{children:s})})]})]}):null}}]),s}(n.a.Component),Q=$,z=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleStaffChange=function(e){a.setState({staffs:e})},a.handleStaffChangeCal=function(e){a.setState({calEvents:e})},a.handleStaffAdd=function(e){var t=[].concat(Object(w.a)(a.state.staffs),[e]);if(a.setState({staffs:t}),"RN"===e.type){var s=[].concat(Object(w.a)(a.state.eventsRN),[{title:e.name+", "+e.type,start:e.start,end:e.end,textColor:e.textColor,backgroundColor:e.backgroundColor}]);a.setState({eventsRN:s}),console.log(s)}else if("LVN"===e.type){var n=[].concat(Object(w.a)(a.state.eventsLVN),[{title:e.name+", "+e.type,start:e.start,end:e.end,textColor:e.textColor,backgroundColor:e.backgroundColor}]);a.setState({eventsLVN:n}),console.log(n)}else if("Unlicensed"===e.type){var i=[].concat(Object(w.a)(a.state.eventsUN),[{title:e.name+", "+e.type,start:e.start,end:e.end,textColor:e.textColor,backgroundColor:e.backgroundColor}]);a.setState({eventsUN:i}),console.log(i)}var r=[].concat(Object(w.a)(a.state.calEvents),[{title:e.name+", "+e.type,start:e.start,end:e.end,textColor:e.textColor,backgroundColor:e.backgroundColor}]);a.setState({calEvents:r})},a.handleInfoChange=function(e){a.setState({info:e})},a.handleCheckChangeBudget=function(e){var t=e.target.checked;a.setState((function(e){Object.assign({},e.showBudget);return{showBudget:t}}))},a.handleCheckChangeCal=function(e){var t=e.target.checked;a.setState((function(e){Object.assign({},e.showCal);return{showCal:t}}))},a.findFormErrors=function(e,t){var s={};return t=parseInt(t),"HPPD"===e?t&&""!==t?(t<1||t>30)&&(s.HPPD="HPPD should be between 1 and 30"):s.HPPD="HPPD cannot be blank!":"bedUnit"===e?t&&""!==t?(t<1||t>60)&&(s.bedUnit="Number of beds should be between 1 and 60"):s.bedUnit="Number of beds cannot be blank!":"census"===e&&(t&&""!==t?t<1?s.census="Census cannot be less than 1":t>a.state.info.bedUnit&&(s.census="Census cannot exceed the number of beds in a unit!"):s.census="Census cannot be blank!"),s},a.state={results:"",staffNum:"The Results:",num:"",center:{"text-align":"center"},staffs:[],backgroundColor:["#ceeafd","#39adf9","#ffe4b3","#ffc14d","#ffa500"],showBudget:!1,showCal:!0,calEvents:[],eventsRN:[],eventsLVN:[],eventsUN:[],info:{unit:"",HPPD:"",bedUnit:"",census:""},errors:{HPPD:"",bedUnit:"",census:""}},a.handleInputChange=a.handleInputChange.bind(Object(C.a)(a)),a}return Object(l.a)(s,[{key:"handleInputChange",value:function(e){var t=e.target,s=t.value,a=t.name,n={};"unit"!==a&&(n=this.findFormErrors(a,s),Object.keys(n).length>0&&this.setState((function(e){var t=Object.assign({},e.errors);return t[a]=n[a],{errors:t}}))),this.setState((function(e){var t=Object.assign({},e.info);t[a]=s,"bedUnit"===a&&(t.census=s);var i=Object.assign({},e.errors);return i[a]&&i[a]!==n[a]&&(i[a]=null),{info:t,errors:i}}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("div",{className:"col-md-4 ",children:Object(x.jsx)(G,{onInfoChange:this.handleInfoChange})}),Object(x.jsx)("div",{className:"col-md-8 fs-5",children:Object(x.jsxs)("div",{className:"float-sm-end",children:[Object(x.jsxs)("div",{id:"righticon",children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",id:"showBudget",label:"Show Budget",name:"showBudget","data-testid":"showbudget-id",checked:this.state.showBudget,onChange:this.handleCheckChangeBudget}),"Show Budget"]}),Object(x.jsx)(P,{content:"This displays the budget of Hours for days remaining, total staff expenses, shift per hours and time of day (Day shift hours, evening shift hours, and night shift hours)",direction:"left",children:Object(x.jsx)("img",{src:k,alt:"Budget Tooltip",width:"50",height:"50"})})]}),Object(x.jsxs)("div",{id:"show cal",children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",id:"showCal",label:"Show Calender",name:"showCal","data-testid":"showcal-id",checked:this.state.showCal,onChange:this.handleCheckChangeCal}),"Show Calender"]}),Object(x.jsx)(P,{content:"This displays the monthly calender for use with staffing",direction:"left",children:Object(x.jsx)("img",{src:k,alt:"Budget Tooltip",width:"50",height:"50"})})]}),Object(x.jsx)("div",{})]})})]}),Object(x.jsxs)("div",{className:"row mt-5",children:[Object(x.jsxs)("div",{className:"col-md-3 col-sm-6 order-sm-last",children:[Object(x.jsx)(M,{staffs:this.state.staffs,info:this.state.info}),Object(x.jsx)(Y,{staffs:this.state.staffs,showBudget:this.state.showBudget}),Object(x.jsx)(Q,{staffs:this.state.staffs})]}),Object(x.jsxs)("div",{className:"col-md-9 col-sm-6 order-sm-first",children:[Object(x.jsxs)(N.a,{className:"row",noValidate:!0,children:[Object(x.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(x.jsx)(P,{content:"These are wards where patients are admitted depending on the severity of their health condition.",direction:"right",children:Object(x.jsx)(N.a.Label,{htmlFor:"unit",children:"Hospital unit"})}),Object(x.jsx)(N.a.Control,{type:"text",name:"unit",id:"unit","data-testid":"unit-id",placeholder:"Hospital Unit",onChange:this.handleInputChange,value:this.state.info.unit})]}),Object(x.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(x.jsx)(P,{content:"The total number of beds available in the hospital wards.",direction:"top",children:Object(x.jsx)(N.a.Label,{htmlFor:"bedUnit",children:"Number of beds"})}),Object(x.jsx)(N.a.Control,{type:"number",name:"bedUnit",id:"bedUnit","data-testid":"numbeds-id",placeholder:"Number of Beds",onChange:this.handleInputChange,value:this.state.info.bedUnit,isInvalid:!!this.state.errors.bedUnit}),Object(x.jsxs)(N.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.bedUnit," "]})]}),Object(x.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(x.jsx)(P,{content:"This is the measurement of the average number of hours needed to care for each patient on the unit.",direction:"right",children:Object(x.jsx)(N.a.Label,{htmlFor:"HPPD",children:"HPPD"})}),Object(x.jsx)(N.a.Control,{type:"number",name:"HPPD",id:"HPPD","data-testid":"hppd-id",placeholder:"HPPD",onChange:this.handleInputChange,value:this.state.info.HPPD,isInvalid:!!this.state.errors.HPPD}),Object(x.jsxs)(N.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.HPPD," "]})]}),Object(x.jsxs)("div",{className:"col-md-6 mt-3 fs-5",children:[Object(x.jsx)(P,{content:"This is the total number of patients admitted to the health facility at any time of the day. ",direction:"right",children:Object(x.jsx)(N.a.Label,{htmlFor:"census",children:"Census"})}),Object(x.jsx)(N.a.Control,{type:"number",name:"census",id:"census","data-testid":"census-id",placeholder:"Census",onChange:this.handleInputChange,value:this.state.info.census,isInvalid:!!this.state.errors.census}),Object(x.jsxs)(N.a.Control.Feedback,{type:"invalid",children:[" ",this.state.errors.census," "]})]})]}),Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-md-4 mt-4 ",children:Object(x.jsx)(D,{onStaffChange:this.handleStaffChange,onStaffAdd:this.handleStaffAdd,staffs:this.state.staffs,backgroundColor:this.state.backgroundColor,textColor:this.state.textColor})})}),Object(x.jsx)("div",{className:"row mt-5 ",children:Object(x.jsx)("div",{className:"mb-10",children:Object(x.jsx)(R,{staffs:this.state.staffs,onStaffChangeOnUpdate:this.handleStaffChange,onStaffChangeOnUpdateCal:this.handleStaffChangeCal,events:this.state.calEvents})})})]})]}),Object(x.jsx)("div",{id:"calendar",children:Object(x.jsx)(V,{eventsArry:this.state.calEvents,showCal:this.state.showCal,bc:this.state.backgroundColor})})]})}}]),s}(n.a.Component),K=(s(75),s.p+"static/media/Left-aligned-square-gray-2.11bbe62b.png"),X=s(88),Z=s(85),_=s(87),ee=s(30),te=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onReload=function(){console.log("Reload clicked"),window.location.reload()},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("header",{children:[Object(x.jsx)(X.a,{bg:"light",children:Object(x.jsxs)(Z.a,{children:[Object(x.jsx)("img",{src:K,alt:"Logo","data-testid":"reload",onClick:this.onReload}),Object(x.jsxs)(_.a,{className:"me-auto",children:[Object(x.jsx)(ee.b,{className:"text-dark nav-link",to:"/",children:"Home"}),Object(x.jsx)(ee.b,{className:"text-dark nav-link",to:"/about",children:"About"}),Object(x.jsx)(_.a.Link,{className:"text-dark",href:"https://www.boisestate.edu/nursing/",children:"BSU Nursing Department"})]})]})}),Object(x.jsx)("div",{className:"p-5 bg-primary text-white rounded",children:Object(x.jsx)("h1",{children:"Inpatient Nurse Staffing Simulator"})})]})}}]),s}(n.a.Component),se=te;s(76);var ae=function(){return Object(x.jsx)("footer",{id:"footer",children:"BSU Nursing |   Dr. Renee Walters   |   reneewalters@boisestate.edu"})};var ne=function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(se,{}),Object(x.jsxs)(c.c,{children:[Object(x.jsx)(c.a,{exact:!0,path:"/",element:Object(x.jsx)(z,{})}),Object(x.jsx)(c.a,{path:"/about",element:Object(x.jsx)(y,{})})]})]}),Object(x.jsx)(ae,{})]})})},ie=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,91)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))};s(77);r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ee.a,{children:Object(x.jsx)(ne,{})})}),document.getElementById("root")),ie()}},[[78,1,2]]]);
//# sourceMappingURL=main.dc82c98e.chunk.js.map