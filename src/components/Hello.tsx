import * as React from "react";
/** ts */
export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
  return (
    <div>
      <h1>这里是ts组件</h1>
      <h1>Hello, welcome to {props.compiler} and {props.framework}!</h1>
    </div>
  )
};