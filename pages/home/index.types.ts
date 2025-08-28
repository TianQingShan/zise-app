export const enum ButtonActionType {
  /** 存款 */
  Deposit,
  /** 汇款 */
  Remittance,
  /** 兑换 */
  Exchange,
  /** 更多 */
  More
}

export type ButtonItem = {
  actionType: ButtonActionType;

  /** 图标 */
  icon: string;

  /**
   * 图标大小
   * - (width) 宽
   * - (height) 高
   */
  iconSize: [width: number, height: number];

  /** 文本 */
  text: string;
}