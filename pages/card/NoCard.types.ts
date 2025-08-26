import React from 'react'

/** 卡片类型 */
export const enum CardType {
  /** 电子卡 */
  ElectronicCard,

  /** 实体卡 */
  PhysicalCard
}

export type TabItem = {
  cardType: CardType;

  /** 文本 */
  text: string;

  /** 视图 */
  view: React.JSX.Element;
}

export type TabItemProps = {
  item: TabItem;

  /**
   * 是否选中
   * - (true) 选中
   * - (false) 未选中
   */
  isSelected: boolean;
}