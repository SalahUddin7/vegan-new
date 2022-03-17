//NPM Packages

import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav>
      <Link to="/">(LOGO)</Link>
      <Link to="menu/dishes">DISHES</Link>

      <Link to="menu/deserts">DESERTS</Link>

      <Link to="menu/drinks">DRINKS</Link>
      <Link to="menu/contact">Contacts</Link>
    </nav>
  );
}
