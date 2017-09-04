import React from 'react'
import {Link} from 'react-router-dom'

class MenCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="product">
                <select value={this.state.value} className="sort-select">
                    <option value="name">SIZE</option>
                    {this.props.element.size.map((option, key) => {
                        return (
                            <option key={key}>{option}</option>
                        )
                    })}
                </select>
                <div className="list-circles clearfix">
                    {this.props.element.colors.map((colors, key) => {
                        return (
                            <div className='circle' style={{'backgroundColor': colors}} key={key}></div>
                        )
                    })}
                </div>
                <Link key={this.props.id} to={`${this.props.gender}/${this.props.id}`}>
                    <img src={require('../img/' + this.props.element.img + '.png')} alt="Google"/>
                </Link>
                <div className="meta-info">
                    <span>{this.props.element.name}</span>
                    <span>{this.props.element.price + '€'}</span>
                </div>
            </div>
        )
    }
}
export default MenCatalog

