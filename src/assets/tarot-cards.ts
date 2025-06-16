// 塔罗牌数据集 - 包含78张标准塔罗牌
// 22张大阿卡纳牌和56张小阿卡纳牌

export interface TarotCard {
  id: number;
  name: string;
  type: 'major' | 'minor';
  suit?: string; // 小阿卡纳牌的花色
  value?: number; // 小阿卡纳牌的数值
  image: string;
  description: string;
}

// 大阿卡纳牌 - 22张
const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "愚者",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    description: "代表新的开始、冒险、自由和不确定性。"
  },
  {
    id: 1,
    name: "魔术师",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    description: "代表创造力、技能、意志力和自信。"
  },
  {
    id: 2,
    name: "女祭司",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    description: "代表直觉、潜意识、神秘和内在知识。"
  },
  {
    id: 3,
    name: "女皇",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
    description: "代表丰收、母性、创造力和感性。"
  },
  {
    id: 4,
    name: "皇帝",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    description: "代表权威、结构、控制和父性。"
  },
  {
    id: 5,
    name: "教皇",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    description: "代表传统、信仰、教育和精神指导。"
  },
  {
    id: 6,
    name: "恋人",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
    description: "代表爱情、和谐、关系和选择。"
  },
  {
    id: 7,
    name: "战车",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    description: "代表决心、控制、胜利和进步。"
  },
  {
    id: 8,
    name: "力量",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    description: "代表勇气、耐心、控制和同情心。"
  },
  {
    id: 9,
    name: "隐士",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
    description: "代表内省、寻找内在真理、指导和孤独。"
  },
  {
    id: 10,
    name: "命运之轮",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    description: "代表命运、转变、机会和循环。"
  },
  {
    id: 11,
    name: "正义",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
    description: "代表公正、真理、法律和平衡。"
  },
  {
    id: 12,
    name: "倒吊人",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    description: "代表牺牲、暂停、新视角和放弃。"
  },
  {
    id: 13,
    name: "死神",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
    description: "代表结束、变化、转变和重生。"
  },
  {
    id: 14,
    name: "节制",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    description: "代表平衡、适度、耐心和目的。"
  },
  {
    id: 15,
    name: "恶魔",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
    description: "代表束缚、物质主义、欲望和阴影面。"
  },
  {
    id: 16,
    name: "塔",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    description: "代表突然变化、混乱、启示和释放。"
  },
  {
    id: 17,
    name: "星星",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
    description: "代表希望、灵感、宁静和慷慨。"
  },
  {
    id: 18,
    name: "月亮",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
    description: "代表幻觉、恐惧、潜意识和直觉。"
  },
  {
    id: 19,
    name: "太阳",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    description: "代表快乐、成功、活力和自信。"
  },
  {
    id: 20,
    name: "审判",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
    description: "代表重生、内在呼唤、赦免和解放。"
  },
  {
    id: 21,
    name: "世界",
    type: "major",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
    description: "代表完成、整合、成就和旅程。"
  }
];

// 小阿卡纳牌 - 56张
// 创建小阿卡纳牌数据
const createMinorArcana = (): TarotCard[] => {
  const suits = ["权杖", "圣杯", "宝剑", "钱币"];
  const suitImages = {
    "权杖": "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
    "圣杯": "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    "宝剑": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
    "钱币": "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents01.jpg"
  };
  
  const courtCards = ["侍从", "骑士", "王后", "国王"];
  const minorArcana: TarotCard[] = [];
  let id = 22; // 从22开始，因为大阿卡纳牌已占用0-21
  
  suits.forEach(suit => {
    // 添加数字牌 (Ace-10)
    for (let value = 1; value <= 10; value++) {
      let name = "";
      if (value === 1) {
        name = `${suit}王牌`;
      } else {
        name = `${value}号${suit}`;
      }
      
      minorArcana.push({
        id: id++,
        name: name,
        type: "minor",
        suit: suit,
        value: value,
        image: suitImages[suit as keyof typeof suitImages].replace("01", value < 10 ? `0${value}` : `${value}`),
        description: `${suit}牌组的第${value}张，代表${suit}元素的${value}级能量。`
      });
    }
    
    // 添加宫廷牌
    courtCards.forEach((court, index) => {
      minorArcana.push({
        id: id++,
        name: `${suit}${court}`,
        type: "minor",
        suit: suit,
        value: 11 + index, // 11=侍从, 12=骑士, 13=王后, 14=国王 
        image: suitImages[suit as keyof typeof suitImages].replace("01", `${11 + index}`),
        description: `${suit}${court}，代表${suit}元素中的${court}能量。`
      });
    });
  });
  
  return minorArcana;
};

// 合并大阿卡纳和小阿卡纳
export const tarotCards: TarotCard[] = [...majorArcana, ...createMinorArcana()];

// 获取随机洗牌后的塔罗牌
export const getShuffledCards = (): TarotCard[] => {
  return [...tarotCards].sort(() => Math.random() - 0.5);
};

import { imgurl } from '../assets/bj.jpg';
// 获取牌背图案URL - 统一的太阳、绿地、河流和花草图案
export const getCardBackPattern = (): string => {
  // 使用描绘有太阳、绿地、河流和花草的塔罗牌背面图案
  return {imgurl};
};
