//制定输入规则
export const rules = {
  //用户名规则
  username: [
    //必传
    {
      required: true,
      message: '请输入用户名！',
      trigger: 'blur'
    },
    //正则匹配内容
    {
      pattern: /^[0-9a-zA-Z]{3,12}$/,
      message: '请输入3-12数字或英文用户名！',
      trigger: 'blur'
    }
  ],
  password: [
    //必传
    {
      required: true,
      message: '请输入密码！',
      trigger: 'blur'
    },
    //正则匹配内容
    {
      pattern: /^[0-9a-zA-Z]{6,15}$/,
      message: '请输入6-15位密码！',
      trigger: 'blur'
    }
  ]
}
