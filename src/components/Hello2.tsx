import * as React from 'react';
/**
 * 这里内部实际上是js
 * @param props 
 */
function Hello2(props) {
  return (
    <div>
      <div>
        这里是js组件
      </div>
      <div>
        Hi, { props.name } welcome to JavaScript Programming.
      </div>
    </div>
  )
}

export default Hello2;