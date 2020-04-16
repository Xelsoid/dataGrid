import React from "react";
import PropTypes from "prop-types";

const TableRow = ({children}) => {
  return (
    <tr>
      {children}
    </tr>
  )
};

export default TableRow;

TableRow.propTypes = {
  children: PropTypes.object,
};

TableRow.defaultProps = {
  children: null,
};
