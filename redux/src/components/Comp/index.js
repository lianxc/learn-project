import React from 'react'
import PropTypes from 'prop-types'
import { connect } from '../../myReactRedux/connect'
import { addItemAction, delItemAction } from '../../action/comp';

const namespace = 'comp';

@connect(mapStateToProps, mapDispatchToProps)

class Comp extends React.Component {  

    constructor(props) {    
        super(props)    
    }  

    handleAddItem = () => {
        const {dispatch} = this.props;
        // dispatch(addItemAction('new item'))
        dispatch({
            type: `${namespace}/ADD_ITEM`,
            text: 2
        })
    }

    handleDelItem = () => {
        const {dispatch} = this.props;
        // dispatch(delItemAction()) 
        dispatch({
            type: `${namespace}/DEL_ITEM`,
            text: 2
        })
    }

    render() {
        const {comp} = this.props;
        const {list} = comp;

        return (
            <div>
                <ul>
                    {
                        list.map(i => {
                            return <li>{i}</li>
                        })
                    }
                </ul>
                <button onClick={this.handleAddItem}>add li</button>
                <button onClick={this.handleDelItem}>del li</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        comp: state.comp
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}

export default Comp;

// export default connect(mapStateToProps, mapDispatchToProps)(Comp);