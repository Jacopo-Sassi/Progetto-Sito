import CardHero from "./CardHero"

function Section (){
    return (
        <div className="section">
            <h2>Section Title</h2>
            <div className="card-container">
                <CardHero />
                <CardHero />
                <CardHero />
            </div>
        </div>

    )
}

export default Section