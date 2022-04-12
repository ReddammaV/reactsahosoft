// // Fetch - With class component using Lifecycle Hook componentDidMount
// import React, { Component } from 'react'

// export default class GetRequest extends Component {
//   constructor(){
//     super();
//     this.state = {
//       totalRow : 0,
//       recordData : ''
//     }
//   }
//   componentDidMount(){
// fetch('http://sahosoftweb.com/api/ProductMaster/GetProductList')
// .then(response => response.json())
// .then(data => {      
//   // this.setState({
//   //   totalRow : data.length
//   // })
//   this.setState({
//     totalRow : data.length
//   })
//   console.log(data);
// })
//   }
//   render() {
//     return (
// <div>
//   <h4>Simple GET Request</h4>
//   <div>
//     Total Records: {this.state.totalRow}
//   </div>
// </div>
//     )
//   }
// }

// // Fetch - With Function component using useEffect Hook 
// import React, { useState, useEffect } from 'react'

// const GetRequest = () => {
//   const [totalRow, setTotalRow] = useState(0)
//   useEffect(() => {
//     fetch('http://sahosoftweb.com/api/ProductMaster/GetProductList')
//       .then(response => response.json())
//       .then(data => {
//         setTotalRow(data.length)
//         console.log(data);
//       })
//   }, [])

//   return (
//     <div>
//       <div>
//         <h4>Simple GET Request with Function</h4>
//         <div>
//           Total Records: {totalRow}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GetRequest


// // Fetch - Async Await 
// import React, { Component } from 'react'

// export default class GetRequest extends Component {
//   constructor() {
//     super();
//     this.state = {
//       totalRow: 0
//     }
//   }
//   async componentDidMount() {
//     const response = await fetch('http://sahosoftweb.com/api/ProductMaster/GetProductList')
//     const data = await response.json()
//     this.setState({
//       totalRow: data.length
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h4>Simple GET Request - Async/Await</h4>
//         <div>
//           Total Records: {this.state.totalRow}
//         </div>
//       </div>
//     )
//   }
// }

// // Fetch - Error Handling
// import React, { Component } from 'react'

// export default class GetRequest extends Component {
//   constructor() {
//     super();
//     this.state = {
//       totalRow : 0,
//       errorMsg : ""
//     }
//   }
//   componentDidMount() {
//     fetch('http://sahosoftweb.com/api/ProductMaster/GetProductList1')
//         .then(async response => {
//             const data = await response.json();

//             //Check for error
//             if (!response.ok) {
//                 const error = (data && data.message) || response.statusText;
//                 return Promise.reject(error);
//             }
//             this.setState({
//                 totalRow: data.length
//             });
//         }).catch(error => {
//             this.setState({
//                 errorMsg: error.toString()
//                 // errorMsg: 'Error'
//             });
//            console.log(error);
//         });

// }

//   render() {
//     return (
//       <div>
//         <h4>Simple GET Request - With Error handling</h4>
//         <div>
//           Total Records: {this.state.totalRow}
//         </div>
//         <div>
//           Error Message: {this.state.errorMsg}
//         </div>
//       </div>
//     )
//   }
// }



// // Fetch - GetRequest SET Headers
// import React, { Component } from 'react'

// export default class GetRequest extends Component {
//   constructor() {
//     super();
//     this.state = {
//       totalRow : 0,
//       errorMsg : ""
//     }
//   }
//   componentDidMount() {
//     const header = {'Content-Type' : 'application/json'};

//     fetch('http://sahosoftweb.com/api/ProductMaster/GetProductList', {header})
//         .then(async response => {
//             const data = await response.json();

//             //Check for error
//             if (!response.ok) {
//                 const error = (data && data.message) || response.statusText;
//                 return Promise.reject(error);
//             }
//             this.setState({
//                 totalRow: data.length
//             });
//         }).catch(error => {
//             this.setState({
//                 errorMsg: error.toString()
//                 // errorMsg: 'Error'
//             });
//            console.log(error);
//         });

// }

//   render() {
//     return (
//       <div>
//         <h4>Simple GET Request - With Error handling</h4>
//         <div>
//           Total Records: {this.state.totalRow}
//         </div>
//         <div>
//           Error Message: {this.state.errorMsg}
//         </div>
//       </div>
//     )
//   }
// }