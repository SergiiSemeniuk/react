import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import style from './Paginator.module.css';


class PaginatorClass extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    debugger
    return (
      <div className={style.paginator}>
        <Pagination
          activePage={this.props.currentPage}
          itemsCountPerPage={this.props.pageSize}
          totalItemsCount={this.props.totalItemCount}
          pageRangeDisplayed={5}
          onChange={this.props.onPageChanged}
        />
      </div>
    );
  }
}

export default PaginatorClass;