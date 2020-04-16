import React from "react";
import { connect } from 'react-redux';
import TableRow from "@components/StudentsTable/TableRow";
import TableHeader from "@components/StudentsTable/TableHeader";
import TableCell from "@components/StudentsTable/TableCell";
import PropTypes from "prop-types";

const StudentsTable = ({tableData}) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <TableRow>
          <TableHeader value='#'/>
          <TableHeader value='Name'/>
          <TableHeader value='Github'/>
          <TableHeader value='Country'/>
          <TableHeader value='City'/>
          <TableHeader value='Date'/>
          <TableHeader value='Score'/>
        </TableRow>
      </thead>
      <tbody>
        {tableData.map((row, index) => {
          const {rank, name, githubId, countryName, cityName,totalScoreChangeDate, totalScore} = row;
          return(
            <TableRow key={row.id} row={row} index={index}>
              <TableHeader value={rank}/>
              <TableCell value={name} />
              <TableCell value={githubId} />
              <TableCell value={countryName} />
              <TableCell value={cityName} />
              <TableCell value={totalScoreChangeDate} />
              <TableCell value={totalScore} />
            </TableRow>
          )
        })}
      </tbody>
    </table>
  )
};

const mapStateToProps = (state) => {
  return {tableData: state.data}
};

export default connect(mapStateToProps)(StudentsTable);

StudentsTable.propTypes = {
  tableData: PropTypes.object,
};

StudentsTable.defaultProps = {
  tableData: null,
};
