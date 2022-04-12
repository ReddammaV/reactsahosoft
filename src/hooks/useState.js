// // Basic Usestate()
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const nameStateVariable = useState("Reddy");
//   return (
//     <div>
//       <h1>My Name is {nameStateVariable}</h1>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // Basic Usestate()
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const nameStateVariable = useState("Reddy");
//   console.log(nameStateVariable);

//   const changeName = () => {
//     nameStateVariable[1]("Aruna Mohan")
//   }
//   return (
//     <div>
//       <h1>My Name is {nameStateVariable[0]}</h1>
//       <button onClick={changeName}>Change</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // with variables
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const nameStateVariable = useState("Reddy");
//   const name = nameStateVariable[0];
//   const setName = nameStateVariable[1];

//   const changeName = () => {
//     setName("Aruna Mohan")
//   }
//   return (
//     <div>
//       <h1>My Name is {name}</h1>
//       <button onClick={changeName}>Change</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // With Actual syntax - with multiple states
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const [name, setName] = useState("Reddy");
//   const [email, setEmail] = useState("velasirireddamma@gmail.com");

//   const changeName = () => {
//     setName("Aruna Mohan")
//     setEmail("arunamohan@gmail.com")
//   }
//   return (
//     <div>
//       <h1>My Name is {name} and emailid {email}</h1>
//       <button onClick={changeName}>Change</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // With Boolean
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const [isShown, setIsShown] = useState(true);

//   const changeName = () => {
//     // setIsShown(false)
//     setIsShown(!isShown)
//   }
//   return (
//     <div>
//       <h1>My Name is {isShown ? 'Reddy' : 'Aruna Mohan'}</h1>
//       <button onClick={changeName}>Change</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// with props and Boolean
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Index({ text, maxLength }) {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      {hidden ? `${text.substr(0, maxLength).trim()}...` : text}
      {
        hidden ? <b><a onClick={() => setHidden(false)}>Read More</a></b>
          : <b><a onClick={() => setHidden(true)}>Read Less</a></b>
      }
    </>
  )
}
ReactDOM.render(<Index maxLength={200} text={`Tempor volutpat culpa, impedit minima leo, numquam eligendi, rem massa vestibulum erat, exercitationem nihil molestie nemo class eligendi culpa leo ex montes ullam quo ipsum tempore, pharetra duis inceptos phasellus. Laudantium ut, facilisis quos aperiam congue ratione. Eaque, quas perspiciatis scelerisque tempora proident, beatae commodo? Iure! Non cupidatat maiores? Quod alias! Maecenas leo sit ea, eos sequi vestibulum cursus massa? Doloribus reprehenderit wisi. Dictum senectus. Urna aspernatur omnis laboris? Excepturi, omnis sem cupiditate proident per ipsum gravida quo occaecati harum! Natoque lacinia tempus velit, phasellus, porro cupidatat officia recusandae ratione, hac rhoncus, exercitationem, dapibus sagittis, expedita. Orci ducimus vehicula, cursus.
Tincidunt inventore, ex fringilla ratione excepturi sapiente hymenaeos, pariatur autem laboriosam nobis adipisci tortor curae diam labore, earum tellus iure quam, illo, odit, sint, blanditiis. Ultrices dapibus donec illum, dictumst curae accumsan? Volutpat cupidatat vehicula officiis, congue laboris. Mauris aliquet et incidunt, nunc vehicula exercitation temporibus, quia sodales? Nobis porttitor doloribus aliqua dis egestas condimentum convallis est inventore odit sunt rem voluptates. Tortor cubilia aenean voluptatibus, occaecati tristique aspernatur. Curae? Nobis iste, litora ea sociosqu, cumque! Quod, aut. Sapien nulla, lacus nostra ultrices cupidatat dolorum pariatur convallis tincidunt accusantium platea. Lacinia magna, mi pretium curae. Dis torquent class tincidunt nesciunt.
Vivamus aliquid quisquam nullam? Dapibus. Quaerat pulvinar excepteur lobortis posuere? Aut vehicula minim minim? Adipiscing dignissim perferendis eget! Expedita alias fringilla eiusmod, voluptatum, iure. Nemo magnam anim, rerum taciti corporis! Nesciunt ducimus inceptos aliquet, lobortis sollicitudin, odio optio quidem adipiscing, ad quas minus vitae, diamlorem laboriosam metus laudantium, risus, mollitia! Saepe. Doloribus phasellus proin minim explicabo similique molestias vitae consequuntur, quod ullam, totam vestibulum risus laudantium, accusantium gravida mollitia natus. Nunc? Beatae, aliquet elementum tincidunt deleniti repellat officia hic commodo, exercitationem tellus taciti aut repellat aut maecenas posuere morbi voluptatum ligula, repudiandae numquam hymenaeos ipsum deleniti, aliqua sodales debitis praesentium.`} />, document.getElementById('root'))