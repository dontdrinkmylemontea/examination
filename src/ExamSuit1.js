import { QUESTIONTYPES, COMPLETESYMBOL } from './StaticAttr';

const nums = [5, 6, 6];

const choiceQues = [
  {
    type: QUESTIONTYPES.CHOICE,
    content: '下列状态中，哪个不是TCP三次握手的状态？',
    choices: ['SYN_SEND', 'SYN_OPEN', 'SYN_RECV', 'ESTABLISHED'],
  },
  {
    type: QUESTIONTYPES.CHOICE,
    content: 'JavaScript中有几种数据类型？',
    choices: ['7', '8', '9', '10'],
  },
  {
    type: QUESTIONTYPES.CHOICE,
    content: '下列对于HTTP状态码的说法错误的是：',
    choices: [
      '1xx：指示信息–表示请求已接收，继续处理。',
      '2xx：成功–表示请求已被成功接收、理解、接受。',
      '3xx：服务器端错误–服务器未能实现合法的请求。',
      '4xx：客户端错误–请求有语法错误或请求无法实现。',
    ],
  },
];

const completeQues = [
  {
    type: QUESTIONTYPES.COMPLETE,
    content: `HTTP 404 状态代表的含义是${COMPLETESYMBOL}`,
  },
];

const answerQues = [
  {
    type: QUESTIONTYPES.ANSWER,
    content: '请列举常用的 HTTP 方法，并介绍 GET 与 POST 请求之间的区别',
  },
  {
    type: QUESTIONTYPES.ANSWER,
    content: '请分别介绍 Cookie 和 Session 的作用及它们之间的区别',
  },
  {
    type: QUESTIONTYPES.ANSWER,
    content: '请介绍 HTTP 请求报文与响应报文格式',
  },
  {
    type: QUESTIONTYPES.ANSWER,
    content: 'HTTP/1.1 有什么优缺点',
  },
  {
    type: QUESTIONTYPES.ANSWER,
    content: '相比 HTTP/1.1，HTTP/2.0 有哪些新特性',
  },
  {
    type: QUESTIONTYPES.ANSWER,
    content: '请简述 HTTPS 工作原理',
  },
];

const quesArrs = [choiceQues, completeQues, answerQues];

const getQuestions = () => {
  const ques = [];
  let counter = 1;
  nums.forEach((num, index) => {
    for (let i = 0; i < num; i += 1) {
      ques.push({ index: counter, ...quesArrs[index][i % quesArrs[index].length] });
      counter += 1;
    }
  });
  return ques;
};

const value = getQuestions();

export default {
  value,
  get: (begin, end) => {
    return value.slice(begin, end);
  },
};
