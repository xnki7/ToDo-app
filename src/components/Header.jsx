import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";

function Header() {
  return (
    <div>
      <header>
        <h1>
          <div className="lg">
            <ListAltIcon className="logoo" fontSize="large" />
            ToDo list app
          </div>
        </h1>
      </header>
    </div>
  );
}

export default Header;
