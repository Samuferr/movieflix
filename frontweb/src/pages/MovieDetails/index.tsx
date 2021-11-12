const MovieDetails = () => {
  return (
    <div className="details-container container">
      <div className="row">
        <div className="col-xl-6">
          <div className="img-container">
              <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg" alt="Movie Name" />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="title-subtitle-container">
            <h1>O Retorno do Rei</h1>
            <h6>2013</h6>
            <p>O olho do inimigo está se movendo.</p>
          </div>
          <div className="sinopse-container">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste est ex similique optio, nostrum quam debitis necessitatibus cum tenetur saepe architecto? Omnis distinctio quasi assumenda dicta, ipsam perspiciatis sequi illo!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
