import { Link } from "react-router-dom";

const MyLink = ({dest, content}) => {
  return (
    <li className='navbar-link'>
      <Link to={dest}>{content}</Link>
    </li>
  );
}

export default MyLink