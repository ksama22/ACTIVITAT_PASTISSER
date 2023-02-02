export const CardComponent = (props) => {
  return (
    <div class="card">
      <div class="image">
        <img
          src="images/espagueti.jpg"
          height="120"
          width="200"
          alt="Mama mia vaya pasta de espagueti"
        />
      </div>
      <div className="text-info">
        <div class="text text-bold">{props.firstname}</div>
        <div class="text text-bold">{props.ofici}</div>
        <div class="text">{props.shortdesc}</div>
      </div>
    </div>
  );
};

export const InfoComponent = () => {
  return (
    <h1>Activitat on hem de crear un component i passar diferents valors</h1>
  );
};
