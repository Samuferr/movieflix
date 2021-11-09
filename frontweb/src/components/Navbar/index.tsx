import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav navbar bg-primary">
        <div className="container-fluid navbar-content">
          <Link to="/" className="nav-logo-text">
            <h4>MovieFlix</h4>
          </Link>
        </div>
      </nav>
      
    );
  }
  
  export default Navbar;