import './App.css';
import React, { Component } from 'react'
// import Greet from './components/Greet'
// import Wellcome from './components/Wellcome'
// import FunctionClick from './components/FunctionClick'
// import InputLable from './components/Employee/InputLable'
// import FRParentInput from './components/FRParentInput'
import Modal from './components/Modal'
import ClickCounter from './components/higher-order-component/ClickCounter'
import HoverCounter from './components/higher-order-component/HoverCounter'
import WithCounter from './components/higher-order-component/WithCounter'
import ReactDOM from 'react-dom'
import Mouse from './components/Mouse'
import ComponentC from './components/context/ComponentC'
import { UserProvider } from './components/context/UserContext'
import UserContext from './components/context/UserContext'
import HookArray from './components/HookArray'


// const root = document.getElementById('root')
// const modalRoot = document.getElementById('modal-root')

// function App() {

//   // function handleClick(name){
//   //   alert(name);
//   // };

//   const [showModal, setModal] = useState(false)
//   const handleShowMessageClick = () => setModal(true)
//   const handleCloseModal = () => setModal(false)


//   return (
//     <div className="App">
//       {/* <Greet></Greet>
//       <Wellcome userName="Harry Pham" />
//       <FunctionClick/> */}
//       {/* <InputLable displayName="huy" handleClick={handleClick}></InputLable>
//       <InputLable displayName="ly" handleClick={handleClick}></InputLable>
//       <InputLable displayName="pham" handleClick={handleClick}></InputLable> */}
//       {/* <FRParentInput/> */}
//       {/* <button onClick={handleShowMessageClick}>
//         Show Secret Modal
//       </button>
//       {showModal ? (
//         <Modal closeModal={handleCloseModal}>
//           This is the secret modal message!
//         </Modal>
//       ) : null} */}

//       {/* higher order component */}

//       <ClickCounter/>
//     </div>
//   );
// }


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <ClickCounter name="Harry Pham"/>
//         <HoverCounter/>
//       </div>
//     )
//   }
// }

class App extends React.Component{
    render() {
        return (
            // <div style={{ height: '100%' }}>
            //     <Mouse
            //         render={({ x, y }) => (
            //             <h1>The mouse position is {x}, {y}</h1>
            //         )}
            //     />

            //     <Mouse
            //         render={({ x, y }) => (
            //             <h1>The mouse position is {x}, {y}</h1>
            //         )}
            //     />
            // </div>
            <div className="App">
                {/* <UserContext.Provider value="Harry Pham">
                    <ComponentC />
                </UserContext.Provider> */}
                <HookArray/>
            </div>
        )
    }
}




export default App;
