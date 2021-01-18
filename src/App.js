 import React from 'react';
import Container from './components/container';
 import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

 const App=()=>{
   return(
     <>
     <Provider store={store}>
       <Container />
       </Provider>
     </>
   )
 }

 export default App;