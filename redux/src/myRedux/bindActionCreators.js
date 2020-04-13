export const bindActionCreators = (actions, dispatch) => {
    return Object.keys(actions).reduce((nextState, key) => {
        nextState[key] = () => dispatch(actions[key]);
        return nextState;
      },
      {} 
    );
}