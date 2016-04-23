import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import InputArea from '../components/InputArea';
import PreviewArea from '../components/PreviewArea';

class Editor extends Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: '# This is Gitebook!!'
    };
  }

  render(){
    const {markdown} = this.state;

    return (
      <div className="pane-group">
        <div className="pane">
          <InputArea
            markdown={markdown}
            updateMarkdown={(md) => this.setState({markdown: md})}
          />
        </div>
        <div className="pane">
          <PreviewArea
            markdown={markdown}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
