import React, {useState} from "react";
import PropTypes from "prop-types";

const TableHeader = ({value, text, onClickCallback}) => {
  const [isSortedASC, setIsSortedASC] = useState('true');

  const handleSortingCallback = (e) => {
    onClickCallback(e, isSortedASC, value);
    setIsSortedASC(!isSortedASC);
  };

  return (
    <th scope="col" onClick={handleSortingCallback}>{text}</th>
  )
};

export default TableHeader;

TableHeader.propTypes = {
  value: PropTypes.any,
  text: PropTypes.string,
  onClickCallback: PropTypes.func
};

TableHeader.defaultProps = {
  value: null,
  onClickCallback: null,
  text: null
};
