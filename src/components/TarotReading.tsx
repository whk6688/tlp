import React, { useState } from 'react';
import { TarotCard } from '../assets/tarot-cards';

interface SelectedCardDisplayProps {
  card: TarotCard;
  index: number;
  isFlipped: boolean;
}

const SelectedCardDisplay: React.FC<SelectedCardDisplayProps> = ({ card, index, isFlipped }) => {
  return (
    <div className="selected-card-container">
      <div className={`selected-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <img src={card.image} alt={card.name} />
          <h3>{card.name}</h3>
        </div>
        <div className="card-back"></div>
      </div>
      <div className="card-position">
        {index === 0 && "过去"}
        {index === 1 && "现在"}
        {index === 2 && "未来"}
      </div>
    </div>
  );
};

interface TarotReadingProps {
  selectedCards: TarotCard[];
  onRequestAnalysis: () => void;
  analysisResult: string;
}

const TarotReading: React.FC<TarotReadingProps> = ({ 
  selectedCards, 
  onRequestAnalysis,
  analysisResult
}) => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);

  // 翻转卡片
  const flipCard = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = true;
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className="tarot-reading">
      <h2>您的塔罗牌解读</h2>
      
      <div className="selected-cards-display">
        {selectedCards.map((card, index) => (
          <div 
            key={card.id} 
            className="card-slot"
            onClick={() => flipCard(index)}
          >
            {card ? (
              <SelectedCardDisplay 
                card={card} 
                index={index} 
                isFlipped={flippedCards[index]} 
              />
            ) : (
              <div className="empty-slot">等待选择...</div>
            )}
          </div>
        ))}
      </div>

      {selectedCards.length === 3 && flippedCards.every(Boolean) && (
        <div className="analysis-section">
          <button 
            className="analysis-button"
            onClick={onRequestAnalysis}
            disabled={!!analysisResult}
          >
            分析本月运势
          </button>
          
          {analysisResult && (
            <div className="analysis-result">
              <h3>本月运势分析</h3>
              <p>{analysisResult}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TarotReading;
