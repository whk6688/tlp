import { useState, useEffect } from 'react';
import { TarotCard } from '../assets/tarot-cards';
import { cardBackUrl } from '../assets/card-back-url';
import './SelectedCards.css';

interface SelectedCardsProps {
  selectedCards: TarotCard[];
  maxSelections: number;
  onAnalysisRequest: () => void;
}

const SelectedCards = ({ selectedCards, maxSelections, onAnalysisRequest }: SelectedCardsProps) => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
  const [showAnalysisButton, setShowAnalysisButton] = useState<boolean>(false);
  
  // 监听选中牌的变化
  useEffect(() => {
    // 当有新牌被选中时，自动翻转该牌
    if (selectedCards.length > 0) {
      const newIndex = selectedCards.length - 1;
      setTimeout(() => {
        const newFlippedCards = [...flippedCards];
        newFlippedCards[newIndex] = true;
        setFlippedCards(newFlippedCards);
      }, 500); // 给牌移动到位置留出时间
    }
    
    // 当选满3张牌且全部翻转后，显示分析按钮
    if (selectedCards.length === maxSelections) {
      setTimeout(() => {
        setShowAnalysisButton(true);
      }, 1500);
    } else {
      setShowAnalysisButton(false);
    }
  }, [selectedCards, flippedCards, maxSelections]);

  // 渲染选中的牌
  const renderSelectedCard = (index: number) => {
    if (index < selectedCards.length) {
      const card = selectedCards[index];
      return (
        <div className="selected-card-container">
          <div className={`selected-card ${flippedCards[index] ? 'flipped' : ''}`}>
            <div className="card-front">
              <img src={card.image} alt={card.name} />
              <h3>{card.name}</h3>
            </div>
            <div 
              className="card-back"
              style={{ backgroundImage: `url(${cardBackUrl})` }}
            ></div>
          </div>
          <div className="card-position">
            {index === 0 && "位置一"}
            {index === 1 && "位置二"}
            {index === 2 && "位置三"}
          </div>
        </div>
      );
    }
    
    // 空位占位符
    return (
      <div className="selected-card-container empty">
        <div className="empty-slot">
          {index === 0 && "第一张牌"}
          {index === 1 && "第二张牌"}
          {index === 2 && "第三张牌"}
        </div>
      </div>
    );
  };

  return (
    <div className="selected-cards-section">
      <div className="selected-cards-area">
        {[0, 1, 2].map(index => renderSelectedCard(index))}
      </div>
      
      <button 
        className={`analysis-button ${showAnalysisButton ? 'visible' : ''}`}
        onClick={onAnalysisRequest}
      >
        分析
      </button>
    </div>
  );
};

export default SelectedCards;
