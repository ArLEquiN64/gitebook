import React, {Component, PropTypes} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/github';

export default class InputArea extends Component {
  static get propTypes(){
    return {
      markdown: PropTypes.string.isRequired,
      updateMarkdown: PropTypes.func.isRequired
    };
  }

  render(){
    const {markdown, updateMarkdown} = this.props;
    return (
      <div>
        <AceEditor
          className="input-area"
          name="input-area"
          mode="markdown"
          theme="github"
          value={markdown}
          editorProps={{$blockScrolling: true}}
          onChange={(md) => updateMarkdown(md)}
          width="100%"
          wrapEnabled
        />
      </div>
    );
  }
}
