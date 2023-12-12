// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
