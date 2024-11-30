import { Link } from "react-router-dom";

function navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar max-w-5xl mx-auto">
        <div className="navbar-start">
          <Link className="btn btn-secondary font-bold text-2xl" to="/">
            TODOS
          </Link>
        </div>
        <div className="navbar-centr"></div>
        <div className="navbar-end">
          <Link className="link link-primary" to="/create">
            Create
          </Link>
        </div>
      </div>
    </header>
  );
}

export default navbar;
