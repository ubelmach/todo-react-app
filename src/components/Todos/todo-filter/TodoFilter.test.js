import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import TodoFilter from "./TodoFilter";
import {
  TODO_FILTER_ALL_BUTTON_NAME,
  TODO_FILTER_ACTIVE_BUTTON_NAME,
  TODO_FILTER_COMPLITED_BUTTON_NAME,
} from "../../../constants";

describe("TodoFilter", () => {
  it("should renders correctly", () => {
    // Arrange
    const tree = renderer.create(<TodoFilter />).toJSON();

    //Assert
    expect(tree).toMatchSnapshot();
  });

  it("renders all filter button", () => {
    // Arrange
    render(<TodoFilter />);

    // Assert
    const allButton = screen.getByText(TODO_FILTER_ALL_BUTTON_NAME);
    expect(allButton).toBeInTheDocument();
  });

  it("renders active filter button", () => {
    // Arrange
    render(<TodoFilter />);

    // Assert
    const activeButton = screen.getByText(TODO_FILTER_ACTIVE_BUTTON_NAME);
    expect(activeButton).toBeInTheDocument();
  });

  it("renders completed filter button", () => {
    // Arrange
    render(<TodoFilter />);

    // Assert
    const completedButton = screen.getByText(TODO_FILTER_COMPLITED_BUTTON_NAME);
    expect(completedButton).toBeInTheDocument();
  });

  it("calls onFilterHandler with correct value when All button is clicked", () => {
    // Arrange
    const onFilterHandler = jest.fn();
    render(<TodoFilter onFilterHandler={onFilterHandler} />);

    // Act
    const allButton = screen.getByText(TODO_FILTER_ALL_BUTTON_NAME);
    fireEvent.click(allButton);

    // Assert
    expect(onFilterHandler).toHaveBeenCalledWith(TODO_FILTER_ALL_BUTTON_NAME);
  });

  it("calls onFilterHandler with correct value when Active button is clicked", () => {
    // Arrange
    const onFilterHandler = jest.fn();
    render(<TodoFilter onFilterHandler={onFilterHandler} />);

    // Act
    const activeButton = screen.getByText(TODO_FILTER_ACTIVE_BUTTON_NAME);
    fireEvent.click(activeButton);

    // Assert
    expect(onFilterHandler).toHaveBeenCalledWith(
      TODO_FILTER_ACTIVE_BUTTON_NAME
    );
  });

  it("calls onFilterHandler with correct value when Completed button is clicked", () => {
    // Arrange
    const onFilterHandler = jest.fn();
    render(<TodoFilter onFilterHandler={onFilterHandler} />);
    // Act
    const completedButton = screen.getByText(TODO_FILTER_COMPLITED_BUTTON_NAME);
    fireEvent.click(completedButton);

    // Assert
    expect(onFilterHandler).toHaveBeenCalledWith(
      TODO_FILTER_COMPLITED_BUTTON_NAME
    );
  });
});
