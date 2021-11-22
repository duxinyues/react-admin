import React, { useMemo } from "react";
function ComD(props) {
    console.log("D组件执行了")
    const renderText = (text) => {
        console.log("执行了text文本");
        return <p>D组件的文本：{text}</p>
    }
    const renderCount = (count) => {
        console.log('执行了count数字')
        return <p>D组件的count：{count}</p>
    }
    const  textContent = useMemo(()=>renderText(props.text),[props.text]);
    const countContent = useMemo(()=>renderCount(props.countD),[props.countD])
    return <React.Fragment>
        {textContent}
        {countContent}
    </React.Fragment>;
}

export default ComD;