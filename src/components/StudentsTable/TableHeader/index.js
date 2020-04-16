import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({value}) => {
  return (
    <th scope="col">{value}</th>
  )
};

export default TableHeader;

TableHeader.propTypes = {
  value: PropTypes.any,
};

TableHeader.defaultProps = {
  value: null,
};
