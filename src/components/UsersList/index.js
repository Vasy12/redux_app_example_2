import React, { Component } from 'react';
import { connect }          from 'react-redux';
import ACTION_TYPES         from '../../actions/actionTypes.js';

class UsersList extends Component {

  loadUsers = () => {
    this.props.getUsersRequest();
    fetch( 'http://localhost:3000/api/admin/users' )
      .then( response => response.json() )
      .then( data => {
        this.props.getUsersSuccess( data );
      } )
      .catch( e => {
        this.props.getUsersError( e );
      } );
  };

  componentDidMount () {
    this.loadUsers();
  }

  render () {

    if (this.props.error) {
      return <div>Error!</div>;
    }
    if (this.props.isFetching) {
      return <div>ЖДИ!!1</div>;
    }

    return (
      <ol>
        {
          this.props.users.map( item => (<li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>) )
        }
      </ol>
    );
  }
}

const mapStateToProps = state => {

  const { usersState } = state;

  return usersState;

};

const mapDispatchToProps = dispatch => {

  return {
    getUsersRequest: () => dispatch( {
                                       type: ACTION_TYPES.GET_USERS_REQUEST,
                                     } ),

    getUsersSuccess: (data) => dispatch( {
                                           type: ACTION_TYPES.GET_USERS_SUCCESS,
                                           users: data,
                                         } ),
    getUsersError: (error) => dispatch( {
                                          type: ACTION_TYPES.GET_USERS_ERROR,
                                          error,
                                        } )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( UsersList );