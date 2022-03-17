//NPM Packages

import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          {' '}
          <Link to="/">(LOGO)</Link>
        </li>
      </ul>

      <ul>
        <li>
          {' '}
          <Link to="menu/dishes">DISHES</Link>
        </li>
      </ul>

      <ul>
        <li>
          {' '}
          <Link to="menu/deserts">DESERTS</Link>
        </li>
      </ul>

      <ul>
        <li>
          {' '}
          <Link to="menu/drinks">DRINKS</Link>
        </li>
      </ul>

      <ul>
        <li>
          {' '}
          <Link to="menu/contact">Contacts</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
