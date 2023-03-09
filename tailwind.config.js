/*
 * @Description: 
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-08 15:44:09
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-09 23:02:44
 * @FilePath: \newssystem\tailwind.config.js
 */
module.exports = {
  important: '#root',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
