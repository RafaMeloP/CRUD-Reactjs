import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="text-decoration-none" to="/">
                    <span className="navbar-brand mb-0 h1">Cadastro de funcionários</span>
                </Link>
            </div>
        </nav>
    );
}