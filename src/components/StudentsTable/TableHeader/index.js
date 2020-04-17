import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({dataAttr, value, onClickCallback}) => {
  return (
    <th data-id={dataAttr} scope="col" onClick={onClickCallback}>{value}</th>
  )
};

export default TableHeader;

TableHeader.propTypes = {
  value: PropTypes.any,
  dataAttr: PropTypes.string,
  onClickCallback: PropTypes.func
};

TableHeader.defaultProps = {
  value: null,
  onClickCallback: null,
  dataAttr: null
};
