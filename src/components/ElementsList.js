import React, { Component } from 'react';
import { connect } from 'react-redux';
import Element from './Element';
import { addNewElement } from '../actions/elementActions';

class ElementsList extends Component {
    handleClick = () => {
        this.props.addNewElement();
    };

    render() {
        const { elements } = this.props;
        return (
            <div className="section">{
                Object.keys(elements).map(function (key) {
                    return <Element key={Number(key)} name={elements[key].name} />
                })
            }
                <div className="element">
                    <p onClick={this.handleClick}>Agregar Elemento</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        elements: state.elements
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewElement: () => {
            dispatch(addNewElement())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementsList);