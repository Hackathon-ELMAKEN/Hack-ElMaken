"use client";
import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw,ContentState } from "draft-js";
import './add.css';

const Page = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [jsonHtml, setJsonHtml] = useState();

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    const onSave = () => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
       
       localStorage.setItem("blog",JSON.stringify(rawContentState));
    };
    const handlePastedText = (text, html, editorState) => {
      const contentState = ContentState.createFromText(text);
      const newEditorState = EditorState.push(editorState, contentState, 'insert-characters');
      setEditorState(newEditorState);
      return 'handled';
  };

    return (
        <div className='text-editor'>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                handlePastedText={handlePastedText}
                onEditorStateChange={onEditorStateChange}
            />
            <button onClick={onSave}>Save</button>
            <div>
                {jsonHtml}
            </div>
        </div>
    );
};

export default Page;
