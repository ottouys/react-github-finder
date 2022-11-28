import React, { Component, Fragment } from 'react';
import Users from '../users/Users';
import Search from '../users/Search';
import Alert from '../layout/Alert';
import axios from 'axios';

export class Home extends Component { 
    state = {
        users: [],
        loading: false,
        alert: null
    }                
    
    // Search Github users
    searchUsers = async (text) => {
        this.setState({ loading: true });
        
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);    

        this.setState({ users:res.data.items, loading:false });
    }

    // Clear users from state
    clearUsers = () => this.setState({ users: [], loading: false });

    // Set Alert
    setAlert = (msg, type) => {
        console.log(this.state.alert);
        this.setState({ alert: { msg, type } });

        setTimeout(() => this.setState({ alert:null }), 5000);
    }    

    render() {           
        const { users, loading } = this.state;        

        return (
            <Fragment>  
                <Alert alert={this.state.alert} />
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false } setAlert={this.setAlert} />
                <Users loading={loading} users={users}></Users>     
            </Fragment>
        )
        
    }    
}

export default Home