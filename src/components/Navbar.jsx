import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#B6C7AA' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/templates" style={{ marginRight: '10px' }}>Templates</Link>
      <Link to="/editor">Editor</Link>
    </nav>
  );
}

export default Navbar;
