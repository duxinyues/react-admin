import React from 'react';
export default function FormPost() {
    const onSubmit=(value)=>{
        value.preventDefault()
        console.log("这是什么",value)
    }
    return <React.Fragment>
        <form onSubmit={onSubmit}>
            <input type="hidden" name="hush" val="hidden,but not secret!" />
            <div>
                <label htmlFor="fieldColor">你的颜色是：</label>
                <input type="text" id="fieldColor" name="fieldColor" />
            </div>
            <div>
            <input type='submit' value="提交"/>
            </div>
        </form>
    </React.Fragment>
}