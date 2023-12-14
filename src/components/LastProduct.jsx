import { useEffect, useState } from 'react';
import mandalorian from '../assets/images/imgProductDefault.png';
// import { useParams } from 'react-router-dom';

function LastProduct(props) {
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
            <h2>Ultimo Producto</h2>
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "20rem" }}
                src={mandalorian}
                alt=" imagen de product "
              />
            </div>
            <ul>
                <li>Nombre de ultimo Producto: Zapatillas Puma</li>
                <li>ID de producto: 42</li>
                <li>Descripcion: Zapatillas deportivas para correr</li>
                <li>Precio: 52000 </li>
            </ul>
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

export default LastProduct;