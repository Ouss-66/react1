import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
  const games = [
    {
      id: 1,
      title: "Minecraft",
      platform: "PC"
    },
    {
      id: 2,
      title: "Mario Kart",
      platform: "Nintendo Switch"
    },
    {
      id: 3,
      title: "Rocket League",
      platform: "PlayStation 5"
    },
    {
      id: 4,
      title: "EA Sports FC 24",
      platform: "PlayStation 5"
    }
  ];

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
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            platform={game.platform}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;