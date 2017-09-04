import React from 'react'
import Catalog from './Catalog'
import Men from '../men.json'
import Women from '../women.json'
import {connect} from 'react-redux'

class ListStores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MenCatalog: Men,
            WomenCatalog: Women,
            value: 'SIZE',
            mencatalogleft: 0,
            mencatalogright: 3,
            mencount: 1,
            womencatalogleft: 0,
            womencatalogright: 3,
            womencount: 1,
            sort: null
        };
        this.buttonLeft = this.buttonLeft.bind(this)
        this.buttonRight = this.buttonRight.bind(this)
        this.WomenbuttonRight = this.WomenbuttonRight.bind(this)
        this.WomenbuttonLeft = this.WomenbuttonLeft.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sort !== this.state.sort) {
            if (nextProps.sort == 'name') {
                this.sortbyName()
            }
            else if (nextProps.sort == 'price') {
                this.sortbyPrice()
            }
        }
    }

    buttonLeft() {
        if (this.state.mencatalogleft !== 0)
            this.setState({
                mencatalogleft: this.state.mencatalogleft - 3,
                mencatalogright: this.state.mencatalogright - 3,
                mencount: this.state.mencount - 1
            })
    }

    buttonRight() {
        if (this.state.mencatalogright !== this.state.MenCatalog.total)
            this.setState({
                mencatalogright: this.state.mencatalogright + 3,
                mencatalogleft: this.state.mencatalogleft + 3,
                mencount: this.state.mencount + 1
            })
    }

    WomenbuttonLeft() {
        if (this.state.womencatalogleft !== 0)
            this.setState({
                womencatalogleft: this.state.womencatalogleft - 3,
                womencatalogright: this.state.womencatalogright - 3,
                womencount: this.state.womencount - 1
            })
    }

    WomenbuttonRight() {
        if (this.state.womencatalogright !== this.state.WomenCatalog.total)
            this.setState({
                womencatalogright: this.state.womencatalogright + 3,
                womencatalogleft: this.state.womencatalogleft + 3,
                womencount: this.state.womencount + 1
            })
    }

    sortbyName() {
        let arr = this.state.MenCatalog
        arr.items.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
        let arr2 = this.state.WomenCatalog
        arr2.items.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
        this.setState({
            WomenCatalog: arr2,
            MenCatalog: arr
        })
    }

    sortbyPrice() {
        let arr = this.state.MenCatalog
        arr.items.sort(function (a, b) {
            return a.price - b.price
        });
        let arr2 = this.state.WomenCatalog
        arr2.items.sort(function (a, b) {
            return a.price - b.price
        });
        this.setState({
            WomenCatalog: arr2,
            MenCatalog: arr
        })
        console.log(arr)
    }

    renderMenCatalog() {
        if (this.props.state.men === true) {
            var gender = 'men'
            var elements = this.state.MenCatalog.items.slice(this.state.mencatalogleft, this.state.mencatalogright)
            return (<div>
                    <div className="men-catalog clearfix">
                        <h3 className="men-catalog-h3"><span>MEN</span></h3>
                        <div className="slider">
                            <span>{this.state.mencount}</span><span>/</span><span>{Math.ceil(this.state.MenCatalog.total / 3)}</span>
                            <br/>
                            <button className="left" onClick={this.buttonLeft}/>
                            &nbsp;
                            <button className="right" onClick={this.buttonRight}/>
                        </div>
                    </div>
                    <div className="product-list clearfix">
                        {this.parseMenCatalog(elements, gender)}
                    </div>
                </div>
            )
        }
        else {
            return ''
        }
    }

    parseMenCatalog(elements, gender) {
        return elements.map((element) => {
            return (
                <Catalog id={element.id} gender={gender} element={element} key={element.id}/>
            )
        })
    }

    renderWomenCatalog() {
        if (this.props.state.women === true) {
            var elements = this.state.WomenCatalog.items.slice(this.state.womencatalogleft, this.state.womencatalogright)
            var gender = 'women'
            return (
                <div>
                    <div className="women-catalog">
                        <h3 className="women-catalog-h3"><span>WOMEN</span></h3>
                        <div className="slider">
                            <span>{this.state.womencount}</span><span>/</span><span>{Math.ceil(this.state.WomenCatalog.total / 3)}</span>
                            <br/>
                            <button className="left" onClick={this.WomenbuttonLeft}/>
                            &nbsp;
                            <button className="right" onClick={this.WomenbuttonRight}/>
                        </div>
                    </div>
                    < div
                        className="product-list clearfix">
                        {this.parseMenCatalog(elements, gender)}
                    </div>
                </div>
            )
        }
        else {
            return ''
        }
    }

    render() {
        return (
            <div className="catalog">
                {this.renderMenCatalog()}
                {this.renderWomenCatalog()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.store_reducer.state,
        sort: state.store_reducer.sort
    }
}
export default connect(mapStateToProps)(ListStores)

