import React from 'react'
import ListStores from './ListStores'
import SortElements from './SortElements'

class StoresGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="wrapper">
                <SortElements/>
                <ListStores />
            </div>
        )
    }
}

export default (StoresGroup)
