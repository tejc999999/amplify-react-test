// https://reffect.co.jp/react/react-router-6
/* src/App.js */
import { Routes, Route, Link } from 'react-router-dom';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Todo from './Todo';

/* src/App.js */
function App({ signOut, user }) {
  // Todo logic here

  return (
    <>
      {/* Add Todo JSX here  */}
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <Routes>
        <Route path="/" element={<><Link to='todo'>todo(link)</Link><a href='todo'>todo(a)</a></>} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<h1>Not found.</h1>} />
      </Routes>
    </>
  );
}

export default withAuthenticator(App);