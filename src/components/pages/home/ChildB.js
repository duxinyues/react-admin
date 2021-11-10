/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-11-09 23:08:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-09 23:49:11
 * @Description: 文件描述
 */
import React from "react";
export default class ChildB extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.text === this.props.text) {
            return false
        }
        return true;
    }
    render() {
        console.log("ChildB的render执行了");
        return (
            <div>
                B组件的内容：
                {this.props.text}
            </div>
        )
    }
}