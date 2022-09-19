import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

// アプリのエントリポイントで、認証の構成ファイルを読み込む
// 既存の認証リソース（Cognito）を使用する場合、configureに詳細な既存構成を指定する
import { Amplify, AuthModeStrategyType } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure({awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
