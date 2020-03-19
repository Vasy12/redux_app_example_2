import React       from 'react';
import { connect } from 'react-redux';

const OddUsersList = (props) => {
  const { users } = props;
  return (
    <ul>
      {
        users.filter( (item, index) => index % 2 !== 0 )
             .map( item => (<li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>) )
      }
    </ul>
  );
};

function mapStateToProps (state) {
  const { usersState: { users } } = state;
  return { users };
}

export default connect(
  mapStateToProps
)( OddUsersList );