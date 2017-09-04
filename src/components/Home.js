import React from 'react'
import StoresGroup from './StoresGroup'
import Filter from './Filter'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Filter/>
                <StoresGroup />
            </div>
        )
    }
}
export default Home
