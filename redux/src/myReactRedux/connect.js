import React from 'react';
import PropTypes from 'prop-types';

export function connect(mapStateToProps, mapDispatchToProps) {    
    return function(Component) {      
        class Connect extends React.Component {        
            componentDidMount() {          
                //从context获取store并订阅更新          
                this.context.store.subscribe(this.handleStoreChange.bind(this));        
            }       
            handleStoreChange() {          
                // 触发更新          
                // 触发的方法有多种,这里为了简洁起见,直接forceUpdate强制更新,读者也可以通过setState来触发子组件更新          
                this.forceUpdate()        
            }        
            render() {          
                const {store} = this.context;
                const {getState, dispatch} = store;
                return (            
                    <Component              
                        // 传入该组件的props,需要由connect这个高阶组件原样传回原组件              
                        { ...this.props }              
                        // 根据mapStateToProps把state挂到this.props上              
                        { ...mapStateToProps(getState()) }               
                        // 根据mapDispatchToProps把dispatch(action)挂到this.props上              
                        { ...mapDispatchToProps(dispatch) }                 
                    />              
                )        
            }      
        }      
        //接收context的固定写法      
        Connect.contextTypes = {        
            store: PropTypes.object      
        }      
        return Connect    
    }
}