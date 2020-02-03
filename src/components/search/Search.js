import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { performSearch } from "../../store/actions";
import { withRouter } from "react-router-dom";
import styles from "./Search.module.css";
import SearchFilter from "./SearchFilter";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const query = this.props.match.params.query;
    if (query) this.props.performSearch(query, this.props.searchType);
  }

  handleClick = async () => {
    this.props.history.push(`/search/${this.textInput.current.value}`);
    await this.props.performSearch(
      this.textInput.current.value,
      this.props.searchType
    );
  };

  render() {
    return (
      <div className={styles.searchContainer}>
        <h1>Find your movie</h1>
        <section className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
            ref={this.textInput}
          />
          <Button type="primary" size="large" onClick={this.handleClick}>
            SEARCH
          </Button>
        </section>
        <SearchFilter />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  films: state,
  searchType: state.searchBy
});

const mapDispatchToProps = {
  performSearch
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
