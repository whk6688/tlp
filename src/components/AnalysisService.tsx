import React, { useState } from 'react';

interface AnalysisServiceProps {
  selectedCards: any[];
  onAnalysisComplete: (result: string) => void;
}

const AnalysisService: React.FC<AnalysisServiceProps> = ({ 
  selectedCards, 
  onAnalysisComplete 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // 触发分析
  const requestAnalysis = async () => {
    if (selectedCards.length !== 3) return;
    
    setIsLoading(true);
    
    try {
      // 这里可以替换为实际的API调用
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 生成分析结果
      const cardNames = selectedCards.map(card => card.name).join('、');
	  console.log(cardNames)
      const analysisResult = generateAnalysis(selectedCards);
      
      // 返回结果
      onAnalysisComplete(analysisResult);
    } catch (error) {
      console.error('分析请求失败:', error);
      onAnalysisComplete('很抱歉，分析请求失败，请稍后再试。');
    } finally {
      setIsLoading(false);
    }
  };
  
  // 生成分析结果
  const generateAnalysis = (cards: any[]) => {
    // 卡片含义映射
    const cardMeanings: {[key: string]: {past: string, present: string, future: string}} = {
      "愚者": {
        past: "过去您勇于尝试新事物，不惧风险",
        present: "现在您正处于人生的十字路口，需要做出重要决定",
        future: "未来充满无限可能，保持开放心态将获得意外收获"
      },
      "魔术师": {
        past: "过去您善于利用自身技能解决问题",
        present: "现在是展示才华和实现目标的最佳时机",
        future: "未来您将掌握更多技能，成为领域内的专家"
      },
      "女祭司": {
        past: "过去您依靠直觉做出了正确决定",
        present: "现在需要倾听内心的声音，寻找隐藏的真相",
        future: "未来将揭示重要秘密，带来深刻的自我认知"
      },
      "女皇": {
        past: "过去您创造了丰硕成果，收获颇丰",
        present: "现在正享受成长与丰盛，人际关系和谐",
        future: "未来将迎来更多创造力和丰盛，可能与家庭有关"
      },
      "皇帝": {
        past: "过去您建立了稳固的基础和结构",
        present: "现在需要掌控局面，展现领导力",
        future: "未来将获得更多权威和成就，事业上有重大突破"
      }
    };
    
    // 为未包含的卡片提供默认解释
    const getCardMeaning = (card: any, position: string) => {
      if (cardMeanings[card.name] && cardMeanings[card.name][position as keyof typeof cardMeanings[typeof card.name]]) {
        return cardMeanings[card.name][position as keyof typeof cardMeanings[typeof card.name]];
      }
      
      // 默认解释
      const defaultMeanings = {
        past: `过去的${card.name}暗示您经历了重要的人生课题`,
        present: `现在的${card.name}表明您正处于转变阶段`,
        future: `未来的${card.name}预示着新的机遇与挑战即将到来`
      };
      
      return defaultMeanings[position as keyof typeof defaultMeanings];
    };
    
    // 生成完整分析
    return `
      根据您抽取的${cards.map(card => card.name).join('、')}，您本月的运势分析如下：
      
      【过去】${getCardMeaning(cards[0], 'past')}
      
      【现在】${getCardMeaning(cards[1], 'present')}
      
      【未来】${getCardMeaning(cards[2], 'future')}
      
      【综合解读】
      本月您将经历一段转变期，过去的经验为您奠定了基础，现在正是整合资源、明确方向的关键时刻。
      未来一个月内，建议您：
      1. 保持开放的心态，接纳变化
      2. 相信自己的直觉和能力
      3. 在关键决策前充分收集信息
      4. 注意工作与生活的平衡
      
      总体来说，这是一个充满潜力的月份，只要保持专注和耐心，您将能够克服挑战，迎来新的发展机遇。
    `;
  };
  
  return (
    <div className="analysis-service">
      <button 
        className={`analysis-button ${isLoading ? 'loading' : ''}`}
        onClick={requestAnalysis}
        disabled={isLoading || selectedCards.length !== 3}
      >
        {isLoading ? '分析中...' : '分析本月运势'}
      </button>
      
      {isLoading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>正在连接大模型分析您的塔罗牌...</p>
        </div>
      )}
    </div>
  );
};

export default AnalysisService;
