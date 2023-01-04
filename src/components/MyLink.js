import { Link } from "react-router-dom";

const MyLink = ({dest, content}) => {
  return (
    <li>
      <Link to={dest}>{content}</Link>
    </li>
  );
}

export default MyLink