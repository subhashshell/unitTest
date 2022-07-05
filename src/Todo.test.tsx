import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import Todo from './Todo';
import { BrowserRouter } from "react-router-dom";

const mockedSetTodo = jest.fn();

const MockTodo = () => {
    return (
        <BrowserRouter>
          <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i} );
    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

describe("Todo", () => {
    test('renders correctly', () => {
        const tree = render(<Todo/>);
        expect(tree).toMatchSnapshot()
    });

    test('should be able to type into input', () => {
        render(
            <MockTodo />
        );
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).toBeInTheDocument()
    });

    test('should render multiple items', () => {
        render(
            <MockTodo />
        );
        addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
        const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
        expect(divElements.length).toBe(3)
    });

    test('task should not have complete class when initally rendered', () => {
        render(
            <MockTodo />
        );
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active")
    });
    
    test('task should have complete class when clicked', () => {
        render(
            <MockTodo />
        );
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    });

    test('task should not have complete class when click out side', () => {
        render(
            <MockTodo />
        );
        addTask(["Go Grocery Shopping1", "Go Grocery Shopping2"])
        const divElement = screen.getByText(/Go Grocery Shopping1/i);
        const divElement2 = screen.getByText(/Go Grocery Shopping2/i);
        fireEvent.click(divElement)
        expect(divElement2).not.toHaveClass("todo-item-active")
    });
});
