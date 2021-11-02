import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Header;
