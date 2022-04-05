const GetDate = {
  methods: {
    // 獲取今日日期 ex: 2022-02-22
    getToday(){
      const date = new Date();
      let year = date.getFullYear();
      let month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      let day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
      return `${year}-${month}-${day}`;
    },

    // 時間轉換數字
    timeToString(time) {
      return (Date.parse(time)).valueOf();
    },

  },
};
export default GetDate;