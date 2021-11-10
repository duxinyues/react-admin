/*
 * @Author: duxinyue
 * @Date: 2021-04-27 17:44:40
<<<<<<< HEAD
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-09 23:55:03
 * @FilePath: \app1\src\components\pages\home\home.js
 */
import { useState } from "react"
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
function Home() {
    const [textA, setTextA] = useState("A组件的文本");
    const [textB, setTextB] = useState("B组件的文本");
    const [textC, setTextC] = useState("C组件的文本");
    const changeA = () => {
        setTextA("A组件的文本发生的改变");
    }
    const changeB = () => {
        setTextB("B组件文本发生改变了");
    }
    const changeC = () => {
        setTextC("C组件文本发生改变了");
    }
    return <div className="App">
        <button onClick={changeA}>changeA</button>
        <button onClick={changeB}>changeB</button>
        <button onClick={changeC}>changeC</button>
        <ul>
            <li><ChildA text={textA} /></li>
            <li><ChildB text={textB} /></li>
            <li><ChildC text={textC} /></li>
        </ul>
    </div>
=======
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-19 15:27:25
 * @FilePath: \app1\src\components\pages\home\home.js
 */
import  React, { useEffect } from "react"
import  {connect}  from  "react-redux"
import { withRouter } from "react-router-dom";
import {fetchPost}  from "../../../actions/actions"
function Home(props){
    console.log(props)
    useEffect(()=>{
        props.fetchPost()
    },[])
    return <div>首页</div>
>>>>>>> 545987219298e17b9b7ab872922c34976ad69150
}

const  mapStateToProps=(state)=>{
    return {
        homeData:state.posts
    }
}
export default connect(mapStateToProps,{fetchPost})(withRouter(Home)) 