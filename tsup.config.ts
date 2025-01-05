/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-01-03 19:19:01
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-01-03 20:02:29
 * @FilePath: /npm/add-package/tsup.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ["esm","cjs","iife"],
  minify: true,
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
})
