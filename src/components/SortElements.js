import React from 'react'
import {connect} from 'react-redux'
import * as store from '../actions/store'

class SortElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'id'};
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if (this.props.sort !== null) {
            this.setState({
                value: this.props.sort
            })
        }
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({value: event.target.value});
        this.props.onchange(event.target.value)
    }

    render() {
        return (
            <div className="sort-elements">
                <label>SORT BY</label>
                <select value={this.state.value} onChange={this.handleChange} className="sort-select">
                    <option value="id">ID</option>
                    <option value="price">PRICE</option>
                    <option value="name">NAME</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state: state.store_reducer.state, sort: state.store_reducer.sort}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onchange: (state) => dispatch(store.sortemenents(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortElements)
