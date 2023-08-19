import React, { useState } from "react";
import "./App.css"; // Importe seus estilos CSS aqui

const Card = ({ title, content, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCards, setShowCards] = useState(true);

  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: "Content for Card 1",
      contentContinua: "Lorem",
    },
    {
      id: 2,
      title: "Card 2",
      content: "Content for Card 2",
      contentContinua: "Lorem",
    },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 4" },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowCards(false);
  };

  const handleCloseOverlay = () => {
    setSelectedCard(null);
    setShowCards(true);
  };

  return (
    <div className="App">
      <div className="card-container">
        {/* {showCards &&
            cards.map((card) => (
              <div className={`card${card.id}`} key={card.id}>
                <Card
                  title={card.title}
                  content={card.content}
                  onClick={() => handleCardClick(card)}
                />
              </div>
            ))} */}

        {showCards && (
          <>
            <div className="row">
              <div className="card1">
                <Card
                  title={cards[0].title}
                  content={cards[0].content}
                  onClick={() => handleCardClick(cards[0])}
                />
              </div>
              <div className="card2">
                <Card
                  title={cards[1].title}
                  content={cards[1].content}
                  onClick={() => handleCardClick(cards[1])}
                />
              </div>
            </div>
            <div className="row">
              <div className="card3">
                <Card
                  title={cards[2].title}
                  content={cards[2].content}
                  onClick={() => handleCardClick(cards[2])}
                />
              </div>
              <div className="card4">
                <Card
                  title={cards[3].title}
                  content={cards[3].content}
                  onClick={() => handleCardClick(cards[3])}
                />
              </div>
            </div>
          </>
        )}
      </div>
      {selectedCard && (
        <div className="overlay" onClick={handleCloseOverlay}>
          <div className="selected-card">
            <h3>{selectedCard.title}</h3>
            <p>{selectedCard.content}</p>
            <p>{selectedCard.contentContinua}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
