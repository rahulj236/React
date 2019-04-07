import React, {Component} from 'react';
import MyContext from '../../MyContext'


export default (WrappedComponent) => {


    class Hoc extends Component {
        static contextType = MyContext;
        render() {
            return (
                <WrappedComponent
                    value={this.context}
                />
            )
        }
    }
    return Hoc
};
