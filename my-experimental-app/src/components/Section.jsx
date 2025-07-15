import CardHero from "./CardHero";

function Section() {
  return (
    <div className="section">
      <h2 className="section-title">Our Destinations</h2>
      <div className="card-grid">
        {/* Prima riga (3 card) */}
        <CardHero 
          imageUrl="https://imgs.search.brave.com/k6jJPlrqc2h3kXA9QpCJcY6EAlXRI-7Vcbnp4TESSqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQxOTY3/MjYuanBn" 
          title="Grecia Classica" 
          text="Tour dell'Acropoli e delle isole Cicladi."
          buttonText="Prenota ora"
        />
        <CardHero 
          imageUrl="https://imgs.search.brave.com/cdaTyvcnBZxOp3ut4S9BAmSJpUL3t5MfT0gsuTg8AKs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0dWl0/by9pbGx1c3RyYXpp/b25lLWRpLXVuYS1j/aXR0YS1naWFwcG9u/ZXNlXzIzLTIxNTE4/NTIyNjQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA" 
          title="Giappone" 
          text="Esperienza tra templi e modernità di Tokyo."
          buttonText="Scopri il tour"
        />
        <CardHero 
          imageUrl="https://imgs.search.brave.com/kqCvjClgYCxrUnQHuNi7fjl6PYq3lNlalMwc_AYiEx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hdWRsZXl0cmF2/ZWwuY29tLy0vbWVk/aWEvaW1hZ2VzL2hv/bWUvaW5kaWFuLW9j/ZWFuL21hbGRpdmVz/L2Jlc3QtdGltZS10/by12aXNpdC9naV8y/MTU0ODM2NzM5X21h/bGRpdmVzX292ZXJ3/YXRlcl92aWxsYXNf/MzAwMHgxMDAwLmpw/Zz9xPTc5Jnc9MTky/MCZoPTY4NQ" 
          title="Maldive" 
          text="Relax in bungalow sull'acqua cristallina."
          buttonText="Scegli l'offerta"
        />

        {/* Seconda riga (3 card) */}
        <CardHero 
          imageUrl="https://imgs.search.brave.com/olGord7EMyEZ_qdWWHuG4XNaTfgL7eWlrETNSlDPrbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/ODc2OTc1L3Bob3Rv/L3Bhbm9yYW1hLW9m/LWZsb3JlbmNlLWFu/ZC1zYWludC1tYXJ5/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz10SzJmUzJWYW9x/Ni1yMGtEMU5PZno4/SXJnWENyUDNiVmpm/VEJVWnY3ejVJPQ" 
          title="Italia" 
          text="Roma, Venezia e Firenze in un tour unico."
          buttonText="Scopri"
        />
        <CardHero 
          imageUrl="https://imgs.search.brave.com/QmFfj8ftJgyyV3Os9fjRI84hxz8SQhIpBa-IqrbYO0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdw/cm94eS5uYXR1Y2F0/ZS5jb20vSFlhM0xo/b0N2SUZwVXdORGR4/WExDRl81emt3ZUhw/LVJYd3A0cFRNbkp5/dy9yczpmaWxsL2c6/Y2UvdzoxNzgwL2g6/MTAwMS9hSFIwY0hN/Nkx5OTNkM2N1Ym1G/MGRXTmhkR1V1WTI5/dEwyMWxaR2xoTDNC/aFoyVnpMM0psYVhO/bGVtbGxiR1V2WXpR/M1ltTTJNekF0T1dZ/NVlpMDBOall3TFRr/eU16Y3RZemMwT0Rn/MVpqa3dOVEkzTHpj/ek1tRmtOMlUwWkRZ/dE1UWTNPVFE0Tmpn/d09DOTBhR0ZwYkdG/dVpDMXNZV1Z1WkdW/eWFXNW1iM0p0WVhS/cGIyNWxiaTFpWVc1/bmEyOXJMWFJsYlhC/bGJDMXpkR0ZrZEMx/dVlYUjFZMkYwWlM1/cWNHYw" 
          title="Thailandia" 
          text="Tra templi buddhisti e spiagge da sogno."
          buttonText="Prenota"
        />
        <CardHero 
          imageUrl="https://imgs.search.brave.com/-xobvkzr2IRGoX1mV-p8CDCGpCmmPiFTJ7hIR1zVSQw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk0/NjExNzk0L3Bob3Rv/L3ZpZXctb24tYnJ1/Z2VzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1oYVlMaFY2/VWxfTWxBMWttZFdV/LWpEYnRwYWZmWWRU/SE9EX04zQ3dFMTBB/PQ" 
          title="Norvegia" 
          text="Aurora boreale e fiordi mozzafiato."
          buttonText="Viaggia"
        />
      </div>
    </div>
  );
}

export default Section;