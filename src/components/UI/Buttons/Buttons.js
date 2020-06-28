import React from 'react';
import Button from '../Button/Button';
import * as actions from '../../../store/actions';
import classes from './Buttons.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ClientButtons = props => {

    const editMode = () => {
        if (!props.isClient) props.editMode();
        props.closeSidebar();
    }

    return (
        <div className={classes.Buttons}>
            {/* <Button btnType='Success' clicked={() => props.closeSidebar()} >
                {props.isClient ? <NavLink to='/client'>Ver Pedidos</NavLink> :
                    <NavLink to='/pedidos'>Ver Pedidos</NavLink>}
            </Button> */}
            <NavLink to={props.isClient ? '/editClient' : '/negocio'}>
                <Button btnType='Success' clicked={() => editMode()} >
                    Editar Perfil
                </Button>
            </NavLink>
            {/* <Button btnType='Success' >Ayuda</Button> */}
            <NavLink to='/Home' >
                <Button btnType='Success' clicked={() => props.logOut()} >
                    Salir
                </Button>
            </NavLink>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isClient: state.home.isCustomer
    }
}

const mapDispatchToProps = {

    editMode: actions.changeEditMode,
    closeSidebar: actions.burguerHandler,
    logOut: actions.logOut,

}

export default connect(mapStateToProps, mapDispatchToProps)(ClientButtons);