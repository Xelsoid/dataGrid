import React, {useState} from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {sortSiteDataByName} from "@actions/"
import TableRow from "@components/StudentsTable/TableRow";
import TableHeader from "@components/StudentsTable/TableHeader";
import TableCell from "@components/StudentsTable/TableCell";
import PropTypes from "prop-types";

const StudentsTable = ({tableData, sortSiteDataByName}) => {

  const [sortRate, setSortRate] = useState('true');

  const handleSortDataByName = (e) => {
    setSortRate(!sortRate);
    sortSiteDataByName(e.target.getAttribute("data-id"), sortRate);
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <TableRow>
          <TableHeader dataAttr='rank' value='#' onClickCallback={handleSortDataByName}/>
          <TableHeader dataAttr="name" value='Name' onClickCallback={handleSortDataByName}/>
          <TableHeader dataAttr='githubId' value='Github' onClickCallback={handleSortDataByName}/>
          <TableHeader dataAttr='countryName' value='Country' onClickCallback={handleSortDataByName}/>
          <TableHeader dataAttr='cityName' value='City' onClickCallback={handleSortDataByName}/>
          <TableHeader dataAttr='totalScoreChangeDate' value='Date' onClickCallback={handleSortDataByName}/>
          <TableHeader dataAttr='totalScore' value='Score' onClickCallback={handleSortDataByName}/>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({sortSiteDataByName}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsTable);

StudentsTable.propTypes = {
  tableData: PropTypes.array,
  sortSiteDataByName: PropTypes.func
};

StudentsTable.defaultProps = {
  tableData: null,
  sortSiteDataByName: null
};
