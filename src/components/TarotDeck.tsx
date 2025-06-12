import React, { useState, useEffect } from 'react';
import { TarotCard, getShuffledCards } from '../assets/tarot-cards';

// 定义组件的Props接口
interface TarotDeckProps {
  onCardSelected: (card: TarotCard) => void;
  maxSelections: number;
}

// 塔罗牌组件
const TarotDeck: React.FC<TarotDeckProps> = ({ onCardSelected, maxSelections }) => {
  // 状态管理
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [isShuffling, setIsShuffling] = useState<boolean>(true);
  const [isDealt, setIsDealt] = useState<boolean>(false);
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);

  // 初始化和洗牌
  useEffect(() => {
    const shuffleAnimation = async () => {
      setIsShuffling(true);
      setIsDealt(false);
      
      // 模拟洗牌动画时间
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 洗牌完成后设置牌组
      setCards(getShuffledCards());
      setIsShuffling(false);
      
      // 模拟发牌动画时间
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsDealt(true);
    };

    shuffleAnimation();
  }, []);

  // 处理牌的点击事件
  const handleCardClick = (card: TarotCard) => {
    if (selectedCards.length >= maxSelections || selectedCards.some(c => c.id === card.id)) {
      return;
    }

    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);
    onCardSelected(card);
  };

  // 重新洗牌
  const reshuffleCards = async () => {
    setSelectedCards([]);
    setIsShuffling(true);
    setIsDealt(false);
    
    // 模拟洗牌动画时间
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 洗牌完成后设置牌组
    setCards(getShuffledCards());
    setIsShuffling(false);
    
    // 模拟发牌动画时间
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsDealt(true);
  };

  return (
    <div className="tarot-container">
      {/* 洗牌动画区域 */}
      {isShuffling && (
        <div className="shuffle-animation">
          <div className="shuffling-deck">
            {Array(10).fill(0).map((_, index) => (
              <div 
                key={`shuffle-${index}`} 
                className="shuffling-card"
                style={{ 
                  transform: `translateX(${Math.sin(index) * 20}px) 
                              translateY(${Math.cos(index) * 10}px) 
                              rotate(${Math.random() * 40 - 20}deg)`,
                  animationDelay: `${index * 0.1}s`
                }}
              />
            ))}
          </div>
          <p className="shuffle-text">洗牌中...</p>
        </div>
      )}

      {/* 平铺的牌组 */}
      {!isShuffling && (
        <div className={`tarot-deck ${isDealt ? 'dealt' : ''}`}>
          {cards.slice(0, 21).map((card, index) => (
            <div 
              key={card.id}
              className={`tarot-card ${selectedCards.some(c => c.id === card.id) ? 'selected' : ''}`}
              style={{ 
                transform: isDealt 
                  ? `translateX(${(index % 7 - 3) * 60}px) 
                     translateY(${Math.floor(index / 7) * 100}px) 
                     rotate(${Math.random() * 4 - 2}deg)`
                  : `translateX(0) translateY(0) rotate(0deg)`,
                transitionDelay: `${index * 0.05}s`
              }}
              onClick={() => isDealt && handleCardClick(card)}
            >
              <div className="card-back"></div>
            </div>
          ))}
        </div>
      )}

      {/* 重新洗牌按钮 */}
      {isDealt && selectedCards.length === maxSelections && (
        <button 
          className="reshuffle-button"
          onClick={reshuffleCards}
        >
          重新洗牌
        </button>
      )}

      {/* 已选择的牌数量指示器 */}
      {isDealt && (
        <div className="selection-indicator">
          已选择: {selectedCards.length}/{maxSelections}
        </div>
      )}
    </div>
  );
};

export default TarotDeck;
