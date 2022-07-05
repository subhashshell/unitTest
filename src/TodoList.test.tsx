import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

const mockedSetTodo = jest.fn();

describe("TodoList", () => {
    test('renders correctly', () => {
        const tree = render(<TodoList
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        expect(tree).toMatchSnapshot()
    });
});
