import React from "react";
import PropTypes from "prop-types";

const TableCell = ({value}) => {
  return (
    <td>{value}</td>
  )
};

export default TableCell;

TableCell.propTypes = {
  value: PropTypes.any,
};

TableCell.defaultProps = {
  value: null,
};
