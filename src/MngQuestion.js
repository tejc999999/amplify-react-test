import {useEffect, useState} from "react";
import React from "react";

const INITIAL_COUNT=0;
const INITIAL_NAME="Java Script";


/* src/App.js */
const TestReact = () => {

  const editDOM = () => {
    let element = document.createElement('div');
    element.value="abc";
    element.textContent = "def";
    document.getElementById("reactabc").appendChild(element);
  }
  



  // 変数countの状態が変わる＝更新用関数setCount実行.初期値はINITIAL_COUNT(0)
  const [count, setCount] = useState(INITIAL_COUNT);
  // 変数nameの状態が変わる＝更新用関数setName実行.初期値はINITIAL_NAME(Java Script)
  const [name, setName] = useState(INITIAL_NAME);

  // countIncrementは関数が格納されている
  // 関数は引数の値を+1して戻り値とする関数をsetCountに渡している

  
//  const countIncrement = () => setCount((prevCount) => prevCount + 1);
  const countIncrement = () => {
    
    let func = (prevCount) => prevCount + 1
    setCount(func);
//    setCount(count + 1)
  };

  const callBackFunction = () => {
    console.log("name:" + name + ", count:" + count)
    const timer = setInterval(countIncrement, 10000);
    return () => {
      console.log("timer削除/" + count)
      clearInterval(timer);

    };
  };

  useEffect(callBackFunction, []);


  const countDecrement = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div id="reactabc" style={styles.container}>
      <button onClick={editDOM}>editDOM</button>
      <div id="title">count:{count}, name:{name}</div>

      <p>
        {/* コメント */}
        現在のcount値：<b>{count}</b>
        <br />
        countの初期値：<b>{INITIAL_COUNT}</b>
      </p>

      <button onClick={countIncrement}>incremnet</button>
      <button onClick={countDecrement}>decremnet</button>
      <button onClick={countReset}>reset</button>

      <p>

        Name is {name}
        <br />
        nameの初期値：<b>{INITIAL_NAME}</b>
      </p>

      <input type="text" onChange={handleChangeName} />

      <h2>Manage Question</h2>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
}

export default function MngQuestion() {
  return (
    <>
      <TestReact />
      <TestReact />
    </>
  );
}