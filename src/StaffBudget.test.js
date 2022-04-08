import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scenario from './components/main/Scenario.js';
import StaffAdd from './components/main/StaffAdd.js';

// Test budget
describe("<StaffBudget />", () => {
    test('Test show budget', () => {
        render(<Scenario />);
        const showDropDown = screen.queryByTestId("DD-id");
        userEvent.click(screen.queryByTestId('DD-id'));

        const showBudget = screen.queryByTestId('showbudget-id')
        userEvent.click(showBudget);

        // show budget checked
        expect(showBudget).toBeChecked();
        expect(screen.getByText("Total Staff Expenses")).toBeInTheDocument();
    });

    test('Test budget accuracy', () => {
        render(<Scenario/>);
        const showDropDown = screen.queryByTestId("DD-id");
        userEvent.click(screen.queryByTestId('DD-id'));

        const showBudget = screen.queryByTestId('showbudget-id')
        userEvent.click(showBudget);
        expect(showBudget).toBeChecked();
        expect(screen.getByText("$0")).toBeInTheDocument();

        // add staff
        const staffAddBtn = screen.getByTestId("addstaff-id");
        userEvent.click(staffAddBtn);
        const confirmStaffAddBtn = screen.getByTestId("addStaffConfirm-id");
        userEvent.click(confirmStaffAddBtn);

        // check budget value
        expect(screen.getByText("$420")).toBeInTheDocument();
    });
})
