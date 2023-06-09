import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../../../stores/todosSlice";
import Checkbox from "../../UI/Checkbox/Checkbox";
import Button from "../../UI/Button/Button";
import styles from "./TodoItem.module.css";
import { TODO_ITEM_DELETE_BUTTON_NAME } from "../../../constants";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const role = "todo-item";

  const onDeleteHandler = (event) => {
    event.stopPropagation();
    dispatch(
      deleteTodo({
        id: props.id,
      })
    );
  };

  const onCompleteHandler = (event) => {
    event.stopPropagation();
    dispatch(
      completeTodo({
        id: props.id,
      })
    );
  };

  return (
    <li
      className={props.isCompleted ? "complete" : "incomplete"}
      style={{ opacity: props.draggedIndex === props.index ? 0.5 : 1 }}
      role={role}
      key={props.id}
      onDragStart={(event) => props.onDragStartHandle(event, props.index)}
      onDragOver={props.onDragOverHandle}
      onDrop={(event) => props.onDropHandle(event, props.index)}
      onDragEnd={props.onDragEndHandle}
      draggable
    >
      <Checkbox
        id={props.id}
        name={props.id}
        description={props.description}
        isCompleted={props.isCompleted}
        isDisabled={false}
        onChange={onCompleteHandler}
      />
      <Button className={styles["delete-btn"]} onClick={onDeleteHandler}>
        {TODO_ITEM_DELETE_BUTTON_NAME}
      </Button>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  draggedIndex: PropTypes.number,
  onDragStartHandle: PropTypes.func.isRequired,
  onDragOverHandle: PropTypes.func.isRequired,
  onDropHandle: PropTypes.func.isRequired,
  onDragEndHandle: PropTypes.func.isRequired,
};

export default TodoItem;
