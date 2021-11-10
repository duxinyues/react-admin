/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-11-09 23:08:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-09 23:59:54
 * @Description: 文件描述
 */
import React from "react";
export default class ChildC extends React.PureComponent {

    render() {
        console.log("ChildC的render执行了");
        return (
            <div>
                C组件的内容：
                {this.props.text}
            </div>
        )
    }
}