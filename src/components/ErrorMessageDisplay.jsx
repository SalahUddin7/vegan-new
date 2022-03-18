//NPM packages
import { Link } from 'react-router-dom';

//Project files
import ErrorImage from '../assets/Sorry.png';

export default function ErrorMessageDisplay() {
  return (
    <div className="error-message">
      <img src={ErrorImage} alt=" Sad vegatable" />
      <p>
        {' '}
        Sorry, Menu or Meal not FOUND!! Please go back to the main page!!!-
      </p>
      <Link to="/">Go back to home !</Link>
    </div>
  );
}
