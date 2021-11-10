/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-11-09 23:08:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-09 23:47:55
 * @Description: 文件描述
 */
import React from "react";
export default class ChilA extends React.Component {
    render() {
        console.log("ChildA的render执行了");
        return (
            <div>
                A组件的内容：
                {this.props.text}
            </div>
        )
    }
}