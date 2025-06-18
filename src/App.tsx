import { useState } from 'react';
import { TarotCard } from './assets/tarot-cards';
import { cardBackUrl } from './assets/card-back-url';
import TarotDeck from './components/TarotDeck';
import SelectedCards from './components/SelectedCards';
import AnalysisModal from './components/AnalysisModal';
import './App.css';

function App() {
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [showAnalysisModal, setShowAnalysisModal] = useState<boolean>(false);
  const [isShuffleComplete, setIsShuffleComplete] = useState<boolean>(false);
  const [selectedCardAnimating, setSelectedCardAnimating] = useState<boolean>(false);
  const [movingCard, setMovingCard] = useState<{
    card: TarotCard | null,
    sourceX: number,
    sourceY: number,
    targetX: number,
    targetY: number,
    isMoving: boolean,
    isFlipping: boolean
  }>({
    card: null,
    sourceX: 0,
    sourceY: 0,
    targetX: 0,
    targetY: 0,
    isMoving: false,
    isFlipping: false
  });

  // 处理卡片选择
  const handleCardSelected = (card: TarotCard, sourcePosition: {x: number, y: number}) => {
    if (selectedCards.length < 3 && !selectedCardAnimating) {
      setSelectedCardAnimating(true);
      
      // 计算目标位置 - 底部预留槽的位置
      const targetSlot = document.querySelectorAll('.selected-card-container')[selectedCards.length];
      const targetRect = targetSlot?.getBoundingClientRect();
      
      if (targetRect) {
        // 设置移动卡片的初始位置和目标位置
        setMovingCard({
          card: card,
          sourceX: sourcePosition.x,
          sourceY: sourcePosition.y,
          targetX: targetRect.left + targetRect.width / 2,
          targetY: targetRect.top + targetRect.height / 2,
          isMoving: true,
          isFlipping: false
        });
        
        // 开始移动动画
        setTimeout(() => {
          setMovingCard(prev => ({
            ...prev,
            isMoving: true,
            sourceX: prev.targetX,
            sourceY: prev.targetY
          }));
          
          // 移动完成后开始翻转动画
          setTimeout(() => {
            setMovingCard(prev => ({
              ...prev,
              isFlipping: true
            }));
            
            // 翻转动画完成后添加卡片到选中区域
            setTimeout(() => {
              setSelectedCards(prev => [...prev, card]);
              setSelectedCardAnimating(false);
            }, 1000); // 翻转动画持续时间
          }, 500); // 移动到位置后的延迟
        }, 50); // 设置初始位置后的短暂延迟
      }
    }
  };

  // 处理洗牌完成
  const handleShuffleComplete = () => {
    setIsShuffleComplete(true);
  };

  // 处理分析请求
  const handleAnalysisRequest = () => {
    setShowAnalysisModal(true);
  };

  // 关闭分析弹窗
  const handleCloseAnalysis = () => {
    setShowAnalysisModal(false);
  };

  // 重置应用 - 不再重新洗牌，只重置选择的牌
  const resetApp = () => {
    setSelectedCards([]);
    setShowAnalysisModal(false);
    setSelectedCardAnimating(false);
    setMovingCard({
      card: null,
      sourceX: 0,
      sourceY: 0,
      targetX: 0,
      targetY: 0,
      isMoving: false,
      isFlipping: false
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>塔罗牌占卜</h1>
      </header>

      <main className="App-main">
        {/* 塔罗牌组件 */}
        <TarotDeck 
          onCardSelected={handleCardSelected} 
          maxSelections={3}
          onShuffleComplete={handleShuffleComplete}
          selectedCardIds={selectedCards.map(card => card.id)}
        />
        
        {/* 选中的牌区域 */}
        {isShuffleComplete && (
          <SelectedCards 
            selectedCards={selectedCards}
            maxSelections={3}
            onAnalysisRequest={handleAnalysisRequest}
          />
        )}
        
        {/* 分析结果弹窗 */}
        <AnalysisModal 
          isVisible={showAnalysisModal}
          onClose={handleCloseAnalysis}
          selectedCards={selectedCards}
        />
        
        {/* 移动中的卡片动画 */}
        {movingCard.card && movingCard.isMoving && (
          <div 
            className={`card-moving ${movingCard.isFlipping ? 'flipping' : ''}`}
            style={{
              backgroundImage: !movingCard.isFlipping ? `url(${cardBackUrl})` : 'none',
              left: movingCard.sourceX,
              top: movingCard.sourceY,
              transform: `translate(-50%, -50%) ${movingCard.isFlipping ? 'rotateY(180deg)' : ''}`,
            }}
          >
            {movingCard.isFlipping && (
              <div className="card-front-moving">
                <img src={movingCard.card.image} alt={movingCard.card.name} />
                <h3>{movingCard.card.name}</h3>
              </div>
            )}
          </div>
        )}
      </main>
      
      {/* 重置按钮 - 仅在分析后显示 */}
      {showAnalysisModal && (
        <button className="reset-button" onClick={resetApp}>
          重新选牌
        </button>
      )}
    </div>
  );
}

export default App;
