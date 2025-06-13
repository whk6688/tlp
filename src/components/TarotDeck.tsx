import { useState, useEffect, useRef } from 'react';
import { TarotCard, getShuffledCards, getCardBackPattern } from '../assets/tarot-cards';
import './TarotDeck.css';

interface TarotDeckProps {
  onCardSelected: (card: TarotCard, sourcePosition: {x: number, y: number}) => void;
  maxSelections: number;
  onShuffleComplete: () => void;
  selectedCardIds: number[];
}

const TarotDeck = ({ onCardSelected, maxSelections, onShuffleComplete, selectedCardIds }: TarotDeckProps) => {
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [isShuffling, setIsShuffling] = useState<boolean>(true);
  const [isDealt, setIsDealt] = useState<boolean>(false);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardBackPattern = getCardBackPattern();
  
  // 初始化和洗牌
  useEffect(() => {
    const initializeCards = async () => {
      // 设置初始牌组
      setCards(getShuffledCards());
      
      // 开始洗牌动画
      setIsShuffling(true);
      setIsDealt(false);
      
      // 延迟后完成洗牌动画
      setTimeout(() => {
        setIsShuffling(false);
        
        // 延迟后展示排列好的牌
        setTimeout(() => {
          setIsDealt(true);
          onShuffleComplete();
        }, 1000);
      }, 5000); // 洗牌动画持续5秒
    };

    initializeCards();
    
    // 初始化卡片引用数组
    cardRefs.current = Array(78).fill(null);
  }, []); // 移除onShuffleComplete依赖，确保只在组件挂载时执行一次

  // 处理牌的点击事件
  const handleCardClick = (card: TarotCard, index: number) => {
    if (selectedCardIds.length >= maxSelections || selectedCardIds.includes(card.id)) {
      return;
    }

    // 获取卡片当前位置
    const cardElement = cardRefs.current[index];
    if (!cardElement) return;
    
    const rect = cardElement.getBoundingClientRect();
    const sourcePosition = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };

    // 触发选择事件，传递卡片和源位置
    onCardSelected(card, sourcePosition);
  };

  // 生成旋转洗牌动画的牌
  const renderShufflingCards = () => {
    // 创建78张牌的数组用于动画
    return Array(78).fill(0).map((_, index) => {
      // 计算每张牌的动画延迟，确保只旋转1圈
      const delay = index * 0.01; // 错开动画开始时间
      
      return (
        <div 
          key={`shuffle-${index}`} 
          className="shuffling-card"
          style={{ 
            backgroundImage: `url(${cardBackPattern})`,
            animationDelay: `${delay}s`
          }}
        />
      );
    });
  };

  return (
    <div className="tarot-container" ref={deckRef}>
      {/* 洗牌动画区域 */}
      {isShuffling && (
        <div className="shuffle-animation">
          <div className="rotating-deck">
            {renderShufflingCards()}
          </div>
          <p className="shuffle-text">洗牌中...</p>
        </div>
      )}

      {/* 平铺的牌组 */}
      {!isShuffling && (
        <div className={`tarot-deck ${isDealt ? 'dealt' : ''}`}>
          {cards.map((card, index) => (
            <div 
              key={card.id}
              ref={el => cardRefs.current[index] = el}
              className={`tarot-card ${selectedCardIds.includes(card.id) ? 'selected' : ''}`}
              style={{ 
                backgroundImage: `url(${cardBackPattern})`,
                transform: isDealt 
                  ? `translateX(${(index - 39) * 10}px) translateY(0) rotate(${Math.random() * 2 - 1}deg)`
                  : `translateX(0) translateY(0) rotate(0deg)`,
                zIndex: index,
                transitionDelay: `${index * 0.01}s`,
                opacity: selectedCardIds.includes(card.id) ? 0 : 1
              }}
              onClick={() => isDealt && handleCardClick(card, index)}
            />
          ))}
        </div>
      )}

      {/* 已选择的牌数量指示器 */}
      {isDealt && (
        <div className="selection-indicator">
          已选择: {selectedCardIds.length}/{maxSelections}
        </div>
      )}
    </div>
  );
};

export default TarotDeck;
