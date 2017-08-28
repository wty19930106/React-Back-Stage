import React, {Component} from 'react';
import LzEditor from 'react-lz-editor';
import {Button, message} from 'antd';
import '../css/editor.css';

class Editor extends Component {
   constructor(props) {
      super(props);
      this.state = {
         responseList: [],
         txt: ''
      }
   }
   receiveMarkdown = (content) => {
      this.setState({txt: content});
   }

   render() {
      let policy = "";
      const uploadProps = {
         action: "http://v0.api.upyun.com/devopee",
         onChange: this.onChange,
         listType: 'picture',
         fileList: this.state.responseList,
         data: (file) => {},
         multiple: true,
         beforeUpload: this.beforeUpload,
         showUploadList: true
      }
      return (
         <div className="editorBox">
            <div>
               <LzEditor active={true} importContent={this.state.markdownContent} cbReceiver={this.receiveMarkdown} image={false} video={false} audio={false} convertFormat="markdown"/>
            </div>
         </div>
      );
   };
};

export default Editor;
