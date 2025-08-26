/** 操作类型 */
export const enum ActionType {
  /** 复制 */
  Copy,

  /** 请求验证码 */
  RequestVerificationCode
}

export type Item = {
  /** 标签文本 */
  label: string;

  /** 值显示的视图 */
  view: React.ReactNode;

  actionType: ActionType;
}