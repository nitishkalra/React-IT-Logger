import React, {  useEffect } from 'react';
import LogItems from './LogItems';
import Preloader from  '../layout/Preloader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
const Logs = ({ log: { logs, loading }, getLogs }) => {
    
    
    
    useEffect(()=>{
        getLogs();
        //eslint-disable-next-line
    },[])
    
    if(loading || logs === null){
        return <Preloader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0? (<p className="center">No logs to show...</p>): (
                logs.map(log => <LogItems log={log} key={log.id}/>)
            )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    log: state.log
});
export default connect(mapStateToProps, { getLogs })(Logs); // 2nd parameter is an object to cnnect ot any action whic we are gonna run