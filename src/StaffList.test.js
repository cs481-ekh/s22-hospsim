import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StaffAdd from './components/main/StaffAdd';
import Scenario from './components/main/Scenario';
import { Form } from 'react-bootstrap';


// Test buttons for StaffList
describe("<StaffList/>", () => {
    test('Test delete staff button', () => {
        render(<Scenario />);

        const staffAddBtn = screen.getByTestId("addstaff-id");

        // expected initial values
        expect(staffAddBtn).toBeInTheDocument();

        // button click to get modal up
        userEvent.click(staffAddBtn);

        // make sure modal and "Add New Staff" button are there
        const staffAddModal = screen.getByTestId("addStaffModal-id");
        expect(staffAddModal).toBeInTheDocument();
        const confirmStaffAddBtn = screen.getByTestId("addStaffConfirm-id");
        expect(confirmStaffAddBtn).toBeInTheDocument();

        // add default staff choices
        userEvent.click(confirmStaffAddBtn);
        expect(staffAddModal).not.toBeInTheDocument(); // modal disappears on add

        // make sure staff member was added
        const staffListTable = screen.getByTestId("staffList-id");
        expect(staffListTable).toBeInTheDocument();
        const newStaff = screen.getAllByText("RN");
        expect (newStaff.includes("RN"));

        // delete staff
        const deleteBtn = screen.getByTestId("delete-id");
        expect(deleteBtn).toBeInTheDocument();
        userEvent.click(deleteBtn);
        expect (!(newStaff.includes("RN")));
    });

    test('Test add and minus buttons', () => {
        render(<Scenario />);

        const staffAddBtn = screen.getByTestId("addstaff-id");

        // expected initial values
        expect(staffAddBtn).toBeInTheDocument();

        // button click to get modal up
        userEvent.click(staffAddBtn);

        // make sure modal and "Add New Staff" button are there
        const staffAddModal = screen.getByTestId("addStaffModal-id");
        expect(staffAddModal).toBeInTheDocument();
        const confirmStaffAddBtn = screen.getByTestId("addStaffConfirm-id");
        expect(confirmStaffAddBtn).toBeInTheDocument();

        // add default staff choices
        userEvent.click(confirmStaffAddBtn);
        expect(staffAddModal).not.toBeInTheDocument(); // modal disappears on add

        // make sure staff member was added
        const staffListTable = screen.getByTestId("staffList-id");
        expect(staffListTable).toBeInTheDocument();
        const newStaff = screen.getAllByText("RN");
        expect (newStaff.includes("RN"));
        let staffQty = screen.getAllByText("1");
        expect(staffQty.includes("1"));

        // add staff quantity
        const addBtn = screen.getByTestId("add-id");
        expect(addBtn).toBeInTheDocument();
        userEvent.click(addBtn);
        staffQty = screen.getAllByText("2");
        expect(staffQty.includes("2"));

        // subtract staff quantity
        const subtractBtn = screen.getByTestId("minus-id");
        expect(subtractBtn).toBeInTheDocument();
        userEvent.click(subtractBtn);
        staffQty = screen.getAllByText("1");
        expect(staffQty.includes("1"));
    });
})