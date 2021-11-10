/*
 * @Author       : duxinyue
 * @Date         : 2021-04-28 11:02:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-02 02:36:46
 * @FilePath     : \app1\src\components\pages\editor\editor.js
 */
import React, { useEffect, useState } from 'react'
import { Button } from "antd"
// 引入编辑器组件
import BraftEditor from 'braft-editor'
import CodeHighlighter from "braft-extensions/dist/code-highlighter"
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import "../../../style/css/style.css"
import "./editor.css"
BraftEditor.use(CodeHighlighter({
  includeEditors: ['editor-with-code-highlighter'],
}))

export default function Editor() {
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState());
  const [defualtContent, setDefualtContent] = useState("<div></div>");

  useEffect(() => {
    // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await fetchEditorContent()
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
    // const sss = BraftEditor.createEditorState("");
    setEditorState(BraftEditor.createEditorState())
  }, [])
  const handleEditorChange = (editorState) => {
    const htmlContent = editorState.toHTML();
    setEditorState(editorState);
    setDefualtContent(htmlContent)

  }
  const submitContent = () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = editorState.toHTML();
    console.log(htmlContent)
  }
  const onRelease = () => {
    const str = editorState.toHTML()
    const parman = {
      content: str,
    }
    console.log(JSON.stringify(parman))
    fetch("http://127.0.0.1:3003/addArticles", {
      method: "POST",
      body: JSON.stringify(parman)
    })
      .then(res => { return res.json() })
      .then(res => {
        console.log(res)
      })
  }
  return <React.Fragment>
    <div>标题</div>
    <div className="save-btn">
      <Button type="primary" onClick={onRelease}>发布</Button>
    </div>
    <div className="editor-content">
      <div className="my-component">
        <BraftEditor
          className="yyyy"
          value={editorState}
          onChange={handleEditorChange}
          onSave={submitContent}
        />
      </div>
      <div className="review" dangerouslySetInnerHTML={{ __html: defualtContent }}></div>
    </div>

  </React.Fragment>
}
