import { render, screen, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import Task from "./Task";
import TaskList from './TaskList';

afterEach(() => {
    cleanup();
});

test('should render example task list', () => {
    const taskList = [
        {
            id: 1,
            description: "Clean apartment",
            date: "2022-04-27",
            completed: "no"
        }, {
            id: 2,
            description: "Pay rent",
            date: "2022-05-01",
            completed: "no"
        }
    ];
    render(<TaskList data={taskList} />)
    const taskListElement1 = screen.getByTestId('task-1');
    const taskListElement2 = screen.getByTestId('task-2');
    expect(taskListElement1).toBeInTheDocument();
    expect(taskListElement2).toBeInTheDocument();
})

test('should render footer even if list is empty', () => {
    const taskList = [];
    render(<TaskList data={taskList} />)
    const taskListElement = screen.getByTestId('footer-1');
    expect(taskListElement).toBeInTheDocument();
})

test('matches snapshot', () => {
    const taskList = [
        {
            id: 1,
            description: "Clean apartment",
            date: "2022-04-27",
            completed: "no"
        }, {
            id: 2,
            description: "Pay rent",
            date: "2022-05-01",
            completed: "no"
        }
    ];
    const tree = renderer.create(<TaskList data={taskList} />).toJSON();
    expect(tree).toMatchSnapshot();
})