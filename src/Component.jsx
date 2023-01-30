export function CardComponent() {
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
      <div class="name">Oriol</div>
      <div class="ofici">Pastisser</div>
      <div class="description">Lorem ipsum dolor sit amet.</div>
    </div>
  );
}

export function InfoComponent() {
  return (
    <h1>Activitat on hem de crear un component i passar diferents valors</h1>
  );
}
