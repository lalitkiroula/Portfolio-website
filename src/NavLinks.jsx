import React from "react"
import {Link} from "react-router-dom"

function NavLinks(props) {
  return(
    <Link className="hover:border-b-2 hover:border-teal-300" to={props.to}>{props.children}</Link>
  );
}
export default NavLinks;