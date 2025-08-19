import React from 'react'

export type Item = {
  /** 图片地址 */
  image: string;

  /**
   * 图片尺寸
   * - (width) 宽
   * - (height) 高
   */
  imageSize: [width: number, height: number];

  /** 文本 */
  text: string;

  /** 底部内容 */
  bottomView: React.ReactNode;
}

export type PaginationItemProps = {
  /**
   * 是否显示
   * - (true) 显示
   * - (false) 不显示
   */
  show: boolean;
}