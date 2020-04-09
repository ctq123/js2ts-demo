import * as React from 'react';
import { Hello } from "./components/Hello";// 引用ts
import Hello2 from "./components/Hello2";// 引用js

export default function App() {
  return (
    <div>
      <Hello compiler="TypeScript" framework="React" />
      <Hello2 name="Jack" />
    </div>
  )
}