
import Sidebar from './components/Sidebar';
// import Sidebar from './components/Sidebar-v5'

import ContentWrapper from './components/ContentWrapper'

import DataContent from './components/DataContent';
import ContentRowTop from './components/ContentRowTop';
import Topbar from './components/Topbar';
import LastMovie from './components/LastMovie';
import Genres from './components/Genres';
import Movies from './components/Movies';
import Form from './components/Form';
import LastProduct from './components/LastProduct';

// Switch ---> Routes
import { Routes, Route } from 'react-router-dom';
import Demo from './components/demo';
import DemoChildren from './components/DemoChildren';
import TiraPeliculas from './components/TiraPeliculas';
import LastUser from './components/LastUser';

/**
 * 
 * Movies
  ContentRowTop
  Genres
  LastMovie
 */

function App() {

  return (
    <>
      <div id="wrapper">

        {/* Sidebar */}
        <Sidebar />
        {/* <Form/> */}
        {/* End of Sidebar */}

        {/* Ruteo */}
        <Routes>
          <Route path='/' exact element={<ContentWrapper/>} />
          <Route path='/last-Product' exact element={<LastProduct/>} />
          <Route path='/last-User' exact element={<LastUser/>} />
          <Route path='/productos' exact element=
          {<TiraPeliculas/>} />
        </Routes>



        {/* ********* */}

        {/* Content Wrapper */}
        {/* <ContentWrapper/> */}
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
      
      <DemoChildren>
        <Demo title="demo  de props" />
      </DemoChildren>
      <DemoChildren>
        <Demo title="demo  de props 2do llamado" />
      </DemoChildren>

      

    </>

  )
}

export default App

// function App() {

//   return (
//     <>
//       <div id="wrapper">

//         {/* Sidebar */}
//         <Sidebar />
//         {/* <Form/> */}
//         {/* End of Sidebar */}

// {/*         
//         <Routes>
//           <Route
//             path='/'
//             exact
//             element={<Movies/>}
//           />

//           <Route
//             exact
//             path='/pages'
//             element={<ContentRowTop />}
//           />
//           <Route
//             exact
//             path='/tables'
//             element={<Genres />}
//           />
//           <Route
//             exact
//             path='/charts/:id'
//             element={<LastMovie />}
//           />

//         </Routes> */}
//         {/* Content Wrapper */}
//         <ContentWrapper/>
//         {/* End of Content Wrapper */}
//       </div>
//       {/* End of Page Wrapper */}
//     </>

//   )
// }

// export default App
