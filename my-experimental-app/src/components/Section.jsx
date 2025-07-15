import CardHero from "./CardHero";

function Section() {
  return (
    <div className="section">
      <h2 className="section-title">Our Destinations</h2>
      <div className="card-container">
        {/* Card 1 */}
        <CardHero 
          imageUrl="https://imgs.search.brave.com/k6jJPlrqc2h3kXA9QpCJcY6EAlXRI-7Vcbnp4TESSqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQxOTY3/MjYuanBn" 
          title="Grecia Classica" 
          text="Tour dell'Acropoli e delle isole Cicladi."
          buttonText="Prenota ora"
        />
        
        {/* Card 2 */}
        <CardHero 
          imageUrl="https://imgs.search.brave.com/cdaTyvcnBZxOp3ut4S9BAmSJpUL3t5MfT0gsuTg8AKs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0dWl0/by9pbGx1c3RyYXpp/b25lLWRpLXVuYS1j/aXR0YS1naWFwcG9u/ZXNlXzIzLTIxNTE4/NTIyNjQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA" 
          title="Giappone" 
          text="Esperienza tra templi e modernità di Tokyo."
          buttonText="Scopri il tour"
        />
        
        {/* Card 3 */}
        <CardHero 
          imageUrl="https://imgs.search.brave.com/kqCvjClgYCxrUnQHuNi7fjl6PYq3lNlalMwc_AYiEx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hdWRsZXl0cmF2/ZWwuY29tLy0vbWVk/aWEvaW1hZ2VzL2hv/bWUvaW5kaWFuLW9j/ZWFuL21hbGRpdmVz/L2Jlc3QtdGltZS10/by12aXNpdC9naV8y/MTU0ODM2NzM5X21h/bGRpdmVzX292ZXJ3/YXRlcl92aWxsYXNf/MzAwMHgxMDAwLmpw/Zz9xPTc5Jnc9MTky/MCZoPTY4NQ" 
          title="Maldive" 
          text="Relax in bungalow sull'acqua cristallina."
          buttonText="Scegli l'offerta"
        />
      </div>
    </div>
  );
}

export default Section;