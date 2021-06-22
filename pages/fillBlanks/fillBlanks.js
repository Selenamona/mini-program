Page({
  /**
   * 页面的初始数据
   */
  data: {
    isFirst: false,

    btnList: ["易鑫的", "详细解释", "理解并同意", "本确认函内容", "本人确认"],
    textList: ["________", "________", "________", "________", "________"],

    fillList: [
      { original: "易鑫的", value: "", active: true, fail: false },
      { original: "详细解释", value: "", active: false, fail: false },
      { original: "理解并同意", value: "", active: false, fail: false },
      { original: "本确认函内容", value: "", active: false, fail: false },
      { original: "本人确认", value: "", active: false, fail: false }
    ],
    btnShowList: [
      { name: "易鑫的", show: true },
      { name: "详细解释", show: true },
      { name: "理解并同意", show: true },
      { name: "本确认函内容", show: true },
      { name: "本人确认", show: true }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.activeBlank = 0;
  },

  /**
   * 方式二：选择填空位置
   */
  selectBlank(e) {
    const num = Number(e.target.dataset.id);
    const text = this.data.fillList[num].value;
    if (text) {
      // 有值则清空
      let btnK = 0;
      this.data.btnShowList.forEach((item, k) => {
        if (item.name === text) {
          btnK = k;
        }
      });
      this.setData(
        {
          [`fillList[${this.activeBlank}].active`]: false,
          [`fillList[${num}].active`]: true,
          [`fillList[${num}].value`]: "",
          [`btnShowList[${btnK}].show`]: true
        },
        () => {
          this.activeBlank = num;
        }
      );
    } else {
      // 没值
      this.setData(
        {
          [`fillList[${this.activeBlank}].active`]: false,
          [`fillList[${num}].active`]: true
        },
        () => {
          this.activeBlank = num;
        }
      );
    }
  },

  /**
   * 方式二：选择选中项
   */
  selectItem(e) {
    const index = e.target.dataset.index;
    const text = this.data.btnShowList[index].name;
    if (text === this.data.fillList[this.activeBlank].original) {
      // 选择正确
      this.setData(
        {
          [`fillList[${this.activeBlank}].value`]: text, // 设置选中值
          [`fillList[${this.activeBlank}].fail`]: false,
          [`btnShowList[${index}].show`]: false // 设置被选中项隐藏
        },
        () => {
          //  设置active项
          for (let i = 0; i < this.data.fillList.length; i++) {
            const element = this.data.fillList[i];
            if (!element.value) {
              this.setData({
                [`fillList[${this.activeBlank}].active`]: false,
                [`fillList[${i}].active`]: true
              });
              this.activeBlank = i;
              return;
            }
          }
        }
      );
    } else {
      // 选择错误
      this.setData({ [`fillList[${this.activeBlank}].fail`]: true });
    }
  },

  /**
   * 方式一：选择按钮
   * @param {*} e
   */
  selectEvent(e) {
    const index = e.target.dataset.index;
    const n = this.data.textList.length - this.data.btnList.length;
    const ls = JSON.parse(JSON.stringify(this.data.btnList));
    if (index === 0) {
      const text = ls[0];
      ls.splice(0, 1);
      this.setData({
        btnList: ls,
        [`textList[${n}]`]: text
      });
    }
  },

  /**
   * 重置数据
   */
  resetData() {
    this.setData({
      btnList: ["易鑫的", "详细解释", "理解并同意", "本确认函内容", "本人确认"],
      textList: ["________", "________", "________", "________", "________"],
      fillList: [
        { original: "易鑫的", value: "", active: true, fail: false },
        { original: "详细解释", value: "", active: false, fail: false },
        { original: "理解并同意", value: "", active: false, fail: false },
        { original: "本确认函内容", value: "", active: false, fail: false },
        { original: "本人确认", value: "", active: false, fail: false }
      ],
      btnShowList: [
        { name: "易鑫的", show: true },
        { name: "详细解释", show: true },
        { name: "理解并同意", show: true },
        { name: "本确认函内容", show: true },
        { name: "本人确认", show: true }
      ]
    });
  },

  /**
   * 切换实现方式
   */
  switchMethod() {
    this.setData({
      isFirst: !this.data.isFirst,
      btnList: ["易鑫的", "详细解释", "理解并同意", "本确认函内容", "本人确认"],
      textList: ["________", "________", "________", "________", "________"],
      fillList: [
        { original: "易鑫的", value: "", active: true, fail: false },
        { original: "详细解释", value: "", active: false, fail: false },
        { original: "理解并同意", value: "", active: false, fail: false },
        { original: "本确认函内容", value: "", active: false, fail: false },
        { original: "本人确认", value: "", active: false, fail: false }
      ],
      btnShowList: [
        { name: "易鑫的", show: true },
        { name: "详细解释", show: true },
        { name: "理解并同意", show: true },
        { name: "本确认函内容", show: true },
        { name: "本人确认", show: true }
      ]
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
});
