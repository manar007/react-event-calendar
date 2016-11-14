import React, {PropTypes} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createNewEvent} from '../../actions/actionCreators';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            from: null,
            to: null,
            description: null
        };

        this.onFromSelect = this.onFromSelect.bind(this);
        this.onToSelect = this.onToSelect.bind(this);
        this.onDescChange = this.onDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFromSelect(e) {
        this.setState({from: e.target.value});
    }

    onToSelect(e) {
        this.setState({to: e.target.value});
    }

    onDescChange(e) {
        this.setState({description: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.actions.createNewEvent(this.state);

        this.context.router.transitionTo('/');

    }

    render() {
        return <div>
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <h1 style={{textAlign: 'center'}}>Create new Event</h1>
                <div>
                    <form className="form-horizontal">


                        <div className="form-group">
                            <label >From</label>
                            <input type="date" onChange={this.onFromSelect} className="form-control"
                                   id="exampleInputEmail1"/>
                        </div>
                        <div className="form-group">
                            <label>To</label>
                            <input type="date" onChange={this.onToSelect} className="form-control"
                                   id="exampleInputPassword1"/>
                        </div>
                        <div className="form-group">

                            <label>Description</label>
                            <textarea onChange={this.onDescChange} className="form-control" rows="3"
                                      id="exampleInputFile"></textarea>
                        </div>

                        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    }

}



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({createNewEvent}, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(CreateEvent);


CreateEvent.contextTypes = {router: PropTypes.object.isRequired};

