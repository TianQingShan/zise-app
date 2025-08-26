export type PaymentMethodItem = {
  /** 图片地址 */
  image: string;

  /**
   * 图片大小
   * - (width) 宽
   * - (height) 高
   */
  imageSize: [width: number, height: number];
}

export const enum CardApplicationStatus {
  /** 未申请 */
  NotApplied,

  /** 申请中 */
  InProcess
}