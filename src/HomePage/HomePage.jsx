import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import ReactTable from 'react-table';



class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          },
          {
            Header: 'Age',
            accessor: 'age' // String-based value accessors!
          },
          {
            Header: 'Gender',
            accessor: 'gender' // String-based value accessors!
          },
          {
            Header: 'Email',
            accessor: 'email' // String-based value accessors!
          },
          {
            Header: 'Phone No',
            accessor: 'phoneNo' // String-based value accessors!
          }];
        return (
            <div className="">
                <h3>EmployeeList</h3>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone No
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Gender
                            </th>
                        </tr>
                    </thead>
                    {
                        users.items && users.items.user 
                            &&
                        <tbody>
                        {
                            users.items.user.map((user, index) =>
                            <tr>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.phoneNo} 
                                </td>
                                <td>
                                    {user.age}
                                </td>
                                <td>
                                    {user.gender}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    }
                </table>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };