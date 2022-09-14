// https://reffect.co.jp/react/react-router-6
/* src/App.js */
import { Routes, Route, Link } from 'react-router-dom';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { NavBar } from "./ui-components";


import MngQuestion from './MngQuestion.js';
import Todo from './Todo';

import { Auth } from 'aws-amplify';

async function signOutOrg() {
  console.log("sign out.");
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}


async function check() {
  
  Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => console.log(user))
  .catch(err => console.log(err));

  const { attributes } = await Auth.currentAuthenticatedUser();
  console.log(attributes);
}

/* src/App.js */
// Amplify を使用して認証フローを実装するには、
// Amplify UI ライブラリを使用するか、
// Authクラスで直接認証メソッドを呼び出します。
function App({ signOut, user }) {
  // Todo logic here

  return (
    <>
      {/* Add Todo JSX here  */}
      <NavBar item1="演習" item2="TODO" item3="問題登録" item4="東北電子" />

      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <Routes>
        <Route path="/" element={<><Link to='todo'>todo</Link><Link to='mng-question'>MngQuestion</Link></>} />
        <Route path="/mng-question" element={<MngQuestion />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<h1>Not found.</h1>} />
      </Routes>
    </>
  );
}


// Appコンポーネントを認証必須にする
// 対象となったコンポーネントは引数にSignOut, userのオブジェクトが提供される
export default withAuthenticator(App);