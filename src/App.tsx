import { useState } from 'react';
import { TarotCard } from './assets/tarot-cards';
import TarotDeck from './components/TarotDeck';
import TarotReading from './components/TarotReading';
import AnalysisService from './components/AnalysisService';
import './App.css';

function App() {
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [showReading, setShowReading] = useState<boolean>(false);
  const [setIsAnalyzing] = useState<boolean>(false);

  // 处理卡片选择
  const handleCardSelected = (card: TarotCard) => {
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, card]);
      
      // 当选择了3张牌后，显示解读区域
      if (selectedCards.length === 2) {
        setTimeout(() => {
          setShowReading(true);
        }, 500);
      }
    }
  };

  // 处理分析请求
  const handleRequestAnalysis = () => {
    setIsAnalyzing(true);
  };

  // 处理分析完成
  const handleAnalysisComplete = (result: string) => {
    setAnalysisResult(result);
    setIsAnalyzing(false);
  };

  // 重置应用
  const resetApp = () => {
    setSelectedCards([]);
    setAnalysisResult('');
    setShowReading(false);
    setIsAnalyzing(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>塔罗牌月运势</h1>
        <p>洗牌后选择三张牌，揭示您的过去、现在和未来</p>
      </header>

      <main>
        <div className={`tarot-section ${showReading ? 'with-reading' : ''}`}>
          <div className={`deck-container ${showReading ? 'minimized' : ''}`}>
            <TarotDeck 
              onCardSelected={handleCardSelected} 
              maxSelections={3} 
            />
          </div>
          
          {showReading && (
            <div className="reading-container">
              <TarotReading 
                selectedCards={selectedCards}
                onRequestAnalysis={handleRequestAnalysis}
                analysisResult={analysisResult}
              />
              
              {selectedCards.length === 3 && !analysisResult && (
                <AnalysisService 
                  selectedCards={selectedCards}
                  onAnalysisComplete={handleAnalysisComplete}
                />
              )}
              
              {analysisResult && (
                <button className="reset-button" onClick={resetApp}>
                  重新开始
                </button>
              )}
            </div>
          )}
        </div>
      </main>
      
      <footer className="App-footer">
        <p>塔罗牌动画交互演示 &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
