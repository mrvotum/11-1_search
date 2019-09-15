import React, { Fragment } from "react";
import { connect } from "react-redux";
import { changeSearchField } from "../actions";

function Skills({ items, loading, error, search, onChange }) {
  const handleSearch = evt => {
    const { value } = evt.target;
    onChange(value);
  };

  return (
    <Fragment>
      <div>
        <input type="search" value={search} onChange={handleSearch} placeholder="Type something to search..."/>
      </div>
      {loading ? (
        <div>searching...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {items.map(o => (
            <li key={o.id}>{o.name}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

const mapStateToProps = state => {
  const { items, loading, error, search } = state.skills;

  return { items, loading, error, search };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => dispatch(changeSearchField(value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
