const PARTNUM = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ'];
const CHINIESENUMBERMAPPER = ['一', '二', '三', '四'];

const QUESTIONTYPE = ['选择题', '非选择题'];

export const SUITHEADER = {
  PARTNUM,
  QUESTIONTYPE,
};

const QUESTIONTITLES = ['选择题', '填空题', '解答题'];
const QUESTIONINFO = [
  '在每小题给出的四个选项中，只有一项是最符合题目要求的',
  '把答案填在题中横线上',
  '解答应写出文字说明，证明过程或演算步骤',
];

export const GROUPHEADERINFO = (questionTypeIndex, questionNums, marks) =>
  `${CHINIESENUMBERMAPPER[questionTypeIndex]}、 ${
    QUESTIONTITLES[questionTypeIndex]
  }（本大题共 ${questionNums} 小题， 每小题 ${marks} 分，共 ${questionNums * marks} 分，${
    QUESTIONINFO[questionTypeIndex]
  }。）`;
