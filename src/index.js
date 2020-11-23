import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/app/'
import 'bootstrap/dist/css/bootstrap.css'


// class WhowAmI extends Component{
//     constructor(props){
//         super(props);
//         this.state ={

//             years:26
//         }

//     }
//     nextYear = () =>{
//      this.setState( state =>({
//         years: ++state.years
//      }))      
//     }

//     render(){
//       const {name,surname,link} = this.props;
//       const {years} = this.state;
//         return (

//             <React.Fragment>
//         <button onClick={this.nextYear}></button>
//         <h1>My name is {name},surname - {surname}, years  - {years}</h1>
//                 <a href = {link}>My profile</a>
//             </React.Fragment>
            
//                 )
//             }
    
// }



// const All = ()=>{

//     return (
// <React.Fragment>
//     <WhowAmI name = "Vasea" surname = "Verdes" link = "odnoklassniki.ru"/>
//     <WhowAmI name = "Ivan" surname = "Verdes" link = "vk.ru"/>
//     <WhowAmI name = "Ann" surname = "Verdes" link = "twitter.ru"/>
// </React.Fragment>


//     )
// }

ReactDOM.render(<App/>,document.getElementById('root'));


