import { Link } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

function Home({ todos, deleteTodo }) {
  return (
    <div className="mx-auto my-10 grid max-w-5xl">
      <ul className="grid grid-cols-3 gap-5">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>{todo.description.slice(0, 50)}...</p>
                <div className="card-actions justify-end">
                  <Link to="/" className="btn btn-secondary">
                    Read More
                  </Link>
                  <button
                    className="btn-danger btn"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <IoTrashBin /> {/* Trash ikona */}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
