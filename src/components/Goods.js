import React from 'react'
import bigtshirt from '../img/bigtshirt.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Men from '../men.json'
import Women from '../women.json'

class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        };
    }

    componentWillMount() {
        var element = null
        if (this.props.gender === 'women') {
            element = Women
        }
        else if (this.props.gender === 'men') {
            element = Men
        }
        let arr = element.items
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === this.props.id) {
                return this.setState({article: arr[i]})
            }
        }
    }

    renderArticle() {
        return (
            <div>
                <div className="filter">
                    <div className="wrapper goods">
                        <Link to="/">
                            <button className="label-back"/>
                            <h3>BACK TO CATALOG</h3>
                        </Link>
                    </div>
                </div>
                <div className="wrapper">
                    <h3 className="panel-title"><span>{this.state.article.name}</span></h3>
                    <div className="content">
                        <img alt="element" src={bigtshirt}/>
                        <div className="info">
                            <ul>
                                <li><span className="Price">{this.state.article.price + '€' }</span><span>PRICE</span>
                                </li>
                                <li>{this.state.article.colors.map((colors, key) => {
                                    return (
                                        <div className='circle' style={{'backgroundColor': colors}} key={key}></div>
                                    )
                                })}<span>COLOR</span>S
                                </li>
                                <li>{this.state.article.size.map((size, key) => {
                                    if (key !== this.state.article.size.length - 1) {
                                        return (
                                            <span key={key}>{size},</span>
                                        )
                                    }
                                    return (
                                        <span key={key}>{size}&nbsp;</span>
                                    )
                                })}<span>SIZES</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.renderArticle()
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params
    var gender = ownProps.match.url.split('/')[1]
    return {
        id,
        gender
    }
}

export default connect(mapStateToProps)(Goods)

