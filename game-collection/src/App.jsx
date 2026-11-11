import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
    return (
        <div className="container">
            <Header title="🎮 Game Collection" />

            <div className="games">
                <h2>Welkom bij mijn eerste React-applicatie!</h2>
                <p>Naam: Oussama</p>
                <p>Studentnummer: 2235595</p>
                <p>Klas: 25B</p>
            </div>

            <div className="game-list">
                <GameCard
                    title="Minecraft"
                    platform="PC"
                />

                <GameCard
                    title="Mario Kart"
                    platform="Nintendo Switch"
                />

                <GameCard
                    title="Rocket League"
                    platform="PlayStation 5"
                />
            </div>

            <Footer />
        </div>
    );
}

export default App;