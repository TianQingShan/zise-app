export type DateItem = {
  /** 文本 */
  text: string;
}

export type DateItemProps = {
  item: DateItem;

  /**
   * 是否激活
   * - (true) 激活
   * - (false) 未激活
   */
  isSelected: boolean;
}