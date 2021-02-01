import './App.css';
import {useSelector, useDispatch} from 'react-redux';

import {increment, decrement, signIn, signOut} from './actions';

// // Actions
// const increment = () =>{
//   return {type:"INCREMENT"};
// }

// const decrement = () =>{
//   return {type:"DECREMENT"};
// }
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());


function App() {
  const counter = useSelector((state) =>state.counterReducer);
  const isLogged = useSelector((state)=>state.isLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
       <h1>Counter {counter}&nbsp;
       <button onClick={(e)=>{
         e.preventDefault();
         dispatch(increment())
         }}>+</button>
       <button onClick={
         (e)=>{
           e.preventDefault();
           dispatch(decrement())
         }
       }>-</button>
       </h1>
       {isLogged ? <button onClick={(e)=>{
         e.preventDefault();
         dispatch(signOut());
       }}>Deconnexion</button> : <button onClick={
         (e)=>{
         e.preventDefault();
         dispatch(signIn());
       }}>Connexion</button>}
       {isLogged ? <p>Infos secretes</p> : <p>*****************</p>}
      </header>
    </div>
  );
}

export default App;
