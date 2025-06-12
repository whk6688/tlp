// 塔罗牌数据
export interface TarotCard {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const tarotCards: TarotCard[] = [
  {
    id: 0,
    name: "愚者",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    description: "代表新的开始、冒险、自由和不确定性。"
  },
  {
    id: 1,
    name: "魔术师",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    description: "代表创造力、技能、意志力和自信。"
  },
  {
    id: 2,
    name: "女祭司",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    description: "代表直觉、潜意识、神秘和内在知识。"
  },
  {
    id: 3,
    name: "女皇",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
    description: "代表丰收、母性、创造力和感性。"
  },
  {
    id: 4,
    name: "皇帝",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    description: "代表权威、结构、控制和父性。"
  },
  {
    id: 5,
    name: "教皇",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    description: "代表传统、信仰、教育和精神指导。"
  },
  {
    id: 6,
    name: "恋人",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
    description: "代表爱情、和谐、关系和选择。"
  },
  {
    id: 7,
    name: "战车",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    description: "代表决心、控制、胜利和进步。"
  },
  {
    id: 8,
    name: "力量",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    description: "代表勇气、耐心、控制和同情心。"
  },
  {
    id: 9,
    name: "隐士",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
    description: "代表内省、寻找内在真理、指导和孤独。"
  },
  {
    id: 10,
    name: "命运之轮",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    description: "代表命运、转变、机会和循环。"
  },
  {
    id: 11,
    name: "正义",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
    description: "代表公正、真理、法律和平衡。"
  },
  {
    id: 12,
    name: "倒吊人",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    description: "代表牺牲、暂停、新视角和放弃。"
  },
  {
    id: 13,
    name: "死神",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
    description: "代表结束、变化、转变和重生。"
  },
  {
    id: 14,
    name: "节制",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    description: "代表平衡、适度、耐心和目的。"
  },
  {
    id: 15,
    name: "恶魔",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
    description: "代表束缚、物质主义、欲望和阴影面。"
  },
  {
    id: 16,
    name: "塔",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    description: "代表突然变化、混乱、启示和释放。"
  },
  {
    id: 17,
    name: "星星",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
    description: "代表希望、灵感、宁静和慷慨。"
  },
  {
    id: 18,
    name: "月亮",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
    description: "代表幻觉、恐惧、潜意识和直觉。"
  },
  {
    id: 19,
    name: "太阳",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    description: "代表快乐、成功、活力和自信。"
  },
  {
    id: 20,
    name: "审判",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
    description: "代表重生、内在呼唤、赦免和解放。"
  },
  {
    id: 21,
    name: "世界",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
    description: "代表完成、整合、成就和旅程。"
  }
];

// 获取随机洗牌后的塔罗牌
export const getShuffledCards = (): TarotCard[] => {
  return [...tarotCards].sort(() => Math.random() - 0.5);
};
