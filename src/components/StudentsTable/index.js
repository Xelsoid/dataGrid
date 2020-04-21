import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {sortDataByType} from "@actions/"
import TableRow from "@components/StudentsTable/TableRow";
import TableHeader from "@components/StudentsTable/TableHeader";
import TableCell from "@components/StudentsTable/TableCell";
import {formatDate} from "@helpers/";
import PropTypes from "prop-types";


const StudentsTable = ({tableData, sortRow}) => {

  const handleSortStringData = (e, sortOrder, value) => {
    sortRow(value, sortOrder, 'string');
  };

  const handleSortNumberData = (e, sortOrder, value) => {
    sortRow(value, sortOrder, 'number');
  };

  const handleSortDateData = (e, sortOrder, value) => {
    sortRow(value, sortOrder, 'date');
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <TableRow>
          <TableHeader value='rank' text='#' onClickCallback={handleSortNumberData}/>
          <TableHeader value='name' text='Name' onClickCallback={handleSortStringData}/>
          <TableHeader value='githubId' text='GithubId' onClickCallback={handleSortStringData}/>
          <TableHeader value='countryName' text='Country' onClickCallback={handleSortStringData}/>
          <TableHeader value='cityName' text='City' onClickCallback={handleSortStringData}/>
          <TableHeader value='totalScoreChangeDate' text='Date' onClickCallback={handleSortDateData}/>
          <TableHeader value='totalScore' text='Score' onClickCallback={handleSortNumberData}/>
        </TableRow>
      </thead>
      <tbody>
        {tableData.map((row, index) => {
          const {rank, name, githubId, countryName, cityName, totalScoreChangeDate, totalScore} = row;
          return(
            <TableRow key={row.id} row={row} index={index}>
              <TableCell value={rank} />
              <TableCell value={name} />
              <TableCell value={githubId} />
              <TableCell value={countryName} />
              <TableCell value={cityName} />
              <TableCell value={formatDate(totalScoreChangeDate)} />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({sortRow: sortDataByType}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsTable);

StudentsTable.propTypes = {
  tableData: PropTypes.array,
  sortRow: PropTypes.func
};

StudentsTable.defaultProps = {
  tableData: null,
  sortRow: null
};
