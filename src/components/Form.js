import React from 'react'
import {connect} from 'react-redux'
import * as store from '../actions/store'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            men: true,
            women: true,
            children: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        this.setState({
            men: this.props.state.men,
            women: this.props.state.women,
            children: this.props.state.children
        })
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        var state = this.state
        state[name] = value
        this.props.onUpdate(state)
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            men: true,
            women: true,
            children: true
        })
        this.props.onUpdate({
            men: true,
            women: true,
            children: true
        })
    }

    render() {
        return (
            <form>
                <div className="checkbox-list">
                    <div className="checkbox-item">
                        <input type="checkbox" name="men" id="men" checked={this.state.men}
                               onChange={this.handleInputChange}/>
                        <label htmlFor="men">MEN</label>
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox" id="women" name="women" checked={this.state.women}
                               onChange={this.handleInputChange}/>
                        <label htmlFor="women">WOMEN</label>
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox" id="children" name="children" checked={this.state.children}
                               onChange={this.handleInputChange}/>
                        <label htmlFor="children">CHILDREN</label>
                    </div>
                </div>
                <button onClick={this.handleSubmit}>SEE ALL PRODUCTS</button>
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdate: (state) => dispatch(store.onUpdate(state))
    }
}
const mapStateToProps = (state) => {
    return {state: state.store_reducer.state}
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
