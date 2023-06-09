//import React, { useState } from 'react';

//function Plus() {
//  const [count, setCount] = useState(0);

//  const handleClick = () => {
//    setCount(count + 1);
//  };

//  return (
//    <div>
//      <p>Đã click {count} lần</p>
//      <button onClick={handleClick}>Click me</button>
//    </div>
//  );
//}

import React from "react";

class Plus extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            count: 0
        };
        this.handelClick = this.handelClick.bind(this);
    };

    handelClick (){
        this.setState(prevState =>({
            count: prevState.count + 1
        }));
    };

    render (){
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handelClick}>Click me</button>
            </div>
        )
    };
}

export default Plus;