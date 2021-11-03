//msg中内容检测 git commit -m '' 不符合规范无法提交
module.exports = {
  extends: ['@commitlint/config-conventional']
}
