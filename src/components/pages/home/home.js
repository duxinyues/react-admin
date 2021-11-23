/*
 * @Author: duxinyue
 * @Date: 2021-04-27 17:44:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-23 23:08:55
 * @FilePath: \app1\src\components\pages\home\home.js
 */
import { useState } from "react"
// import ChildA from "./ChildA";
// import ChildB from "./ChildB";
// import ChildC from "./ChildC";
import ComD from "./ChildD";
function Home() {
    // const [textA, setTextA] = useState("A组件的文本");
    // const [textB, setTextB] = useState("B组件的文本");
    // const [textC, setTextC] = useState("C组件的文本");
    const [textD, setTextD] = useState("D组件的文本");
    const [countD,setCountD] = useState(100);
    // const changeA = () => {
    //     setTextA("A组件的文本发生的改变");
    // }
    // const changeB = () => {
    //     setTextB("B组件文本发生改变了");
    // }
    // const changeC = () => {
    //     setTextC("C组件文本发生改变了");
    // }
    const changeD = () => {
        setTextD("D组件的文本");
        setCountD(1092);
    }
    return <div className="App">
        {/* <button onClick={changeA}>changeA</button>
        <button onClick={changeB}>changeB</button>
        <button onClick={changeC}>changeC</button> */}
        <button onClick={changeD}>changeD</button>
        <ul>
            {/* <li><ChildA text={textA} /></li>
            <li><ChildB text={textB} /></li>
            <li><ChildC text={textC} /></li> */}
            <li><ComD text={textD} countD={countD} /></li>
        </ul>
    </div>
}
export default Home 