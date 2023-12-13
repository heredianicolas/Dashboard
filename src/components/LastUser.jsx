import { useEffect, useState } from 'react';
import mandalorian from '../assets/images/imgUserDefault.jpg';
// import { useParams } from 'react-router-dom';

function LastUser(props) {
    // const param = useParams();
    const [movie, setMovie] = useState({});
    const [img, setImg] = useState('');


    const getMovie = async (url,  ) =>{
      const data = await fetch(url)
      const response = await data.json();

      return response
    }



    useEffect(() =>{
      getMovie('http://localhost:3031/api/movies/2')
      .then(({ data }) => setMovie(data))

    }, [])

    return ( 
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            {/* <h3>Película con ID: { param.idParam }</h3> */}
            <h5 className="m-0 font-weight-bold text-gray-800">
            <h2>Sportify</h2>
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "20rem" }}
                src={mandalorian}
                alt=" Star Wars - Mandalorian "
              />
            </div>
            <ul>
                <li>Ultimo usuario:</li>
                <li>Email:</li>
            </ul>
            <p>Por cuestiones de seguridad se evita dar informaciones sensibles acerca del usuario.</p>
            {/* <a
              className="btn btn-danger"
              target="_blank"
              rel="nofollow"
              href="/"
            >
              View movie detail
            </a> */}
          </div>
        </div>
      </div>
     );
}

export default LastUser;