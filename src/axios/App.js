// // Axios - With class component using Lifecycle Hook componentDidMount
// import axios from 'axios';
// import React, { Component } from 'react'

// export default class GetRequest extends Component {
//   constructor() {
//     super();
//     this.state = {
//       totalRow: 0,
//       recordData: ''
//     }
//   }
//   componentDidMount() {
//     axios.get('http://sahosoftweb.com/api/ProductMaster/GetProductList')
//       .then(data => {
//         this.setState({
//           totalRow: data.data.length
//         })
//         console.log(data);
//       })
//   }
//   render() {
//     return (
//       <div>
//         <h4>Simple GET Request</h4>
//         <div>
//           Total Records: {this.state.totalRow}
//         </div>
//       </div>
//     )
//   }
// }


// // Axios - With Function component using useEffect Hook 
// import axios from 'axios'
// import React, { useState, useEffect } from 'react'

// const GetRequest = () => {
//   const [totalRow, setTotalRow] = useState(0)
//   useEffect(() => {
//     axios.get('http://sahosoftweb.com/api/ProductMaster/GetProductList')
//       .then(data => {
//         setTotalRow(data.data.length)
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


// // Axios - Async Await 
// import axios from 'axios';
// import React, { Component } from 'react'

// export default class GetRequest extends Component {
//   constructor() {
//     super();
//     this.state = {
//       totalRow: 0
//     }
//   }
//   async componentDidMount() {
//     const response = await axios.get('http://sahosoftweb.com/api/ProductMaster/GetProductList')
//     this.setState({
//       totalRow: response.data.length
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


// // Axios - Error Handling
// import React, { Component } from 'react'
// import axios from 'axios';

// export default class GetRequestErrorHandling extends Component {
//     constructor() {
//         super();
//         this.state = {
//             totalRow: 0,
//             errorMsg: ""
//         };
//     }

// componentDidMount() {
//     axios.get('http://sahosoftweb.com/api/ProductMaster/GetProductList1')
//         .then(response => {
//             this.setState({
//                 totalRow: response.data.length
//             });
//         }).catch(error => {
//             this.setState({
//                 errorMsg: error.toString()
//             });
//            // console.log(error);
//         });

// }

//     render() {
//         const { totalRow, errorMsg } = this.state;
//         return (
//             <div>
//                 <h2>Get Request with Error Handling</h2>
//                 <div>
//                     Total Records : {totalRow}
//                 </div>
//                 <div>
//                     Error Message : {errorMsg}
//                 </div>
//             </div>
//         )
//     }
// }



// // Axios - GetRequest SET Headers
// import axios from 'axios';
// import React, { Component } from 'react'

// export default class GetRequest extends Component {
//   constructor() {
//     super();
//     this.state = {
//       totalRow: 0,
//       errorMsg: ""
//     }
//   }
//   componentDidMount() {
//     const header = { 'Content-Type': 'application/json' };

//     axios.get('http://sahosoftweb.com/api/ProductMaster/GetProductList', {header})
//       .then(response => {
//         this.setState({
//           totalRow: response.data.length
//         });
//       }).catch(error => {
//         this.setState({
//           errorMsg: error.toString()
//         });
//         console.log(error);
//       });
//   }
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


// Multiple Requests with Axios
import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  componentDidMount() {
    axios.all([
      axios.get('http://sahosoftweb.com/api/ProductMaster/GetProductList'),
      axios.get('http://sahosoftweb.com/api/BrandLogo/GetAll')
    ]).then(res => {
      console.log(res[0].data.length);
      console.log(res[0].data);

      console.log(res[1].data.data.length);
      console.log(res[1].data.data);
    });
  }

  render() {
    return (
      <div>
        <h1>Making multiple requests with axios</h1>
      </div>
    )
  }
}
