export const enum OtherLoginType {
  Google,
  Apple
}

export type OtherItem = {
  type: OtherLoginType;

  /** 图标 */
  icon: string;

  /** 文本 */
  text: string;
}