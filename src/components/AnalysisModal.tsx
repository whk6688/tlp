import { useState } from 'react';
import { TarotCard } from '../assets/tarot-cards';
import './AnalysisModal.css';

interface AnalysisModalProps {
  isVisible: boolean;
  onClose: () => void;
  selectedCards: TarotCard[];
}

const AnalysisModal = ({ isVisible, onClose, selectedCards }: AnalysisModalProps) => {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  
  // 动画完成后的回调
  const handleAnimationEnd = () => {
    if (isVisible) {
      setAnimationComplete(true);
    }
  };
  
  // 关闭时重置动画状态
  const handleClose = () => {
    setAnimationComplete(false);
    onClose();
  };
  
  return (
    <div className={`analysis-modal ${isVisible ? 'visible' : ''}`}>
      <div 
        className={`modal-content ${animationComplete ? 'animation-complete' : ''}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <h2>塔罗牌解读</h2>
        <div className="cards-names">
          {selectedCards.length === 3 && (
            <p>三张分别是：{selectedCards.map(card => card.name).join('，')}</p>
          )}
        </div>
        <button className="close-button" onClick={handleClose}>
          关闭
        </button>
      </div>
    </div>
  );
};

export default AnalysisModal;
