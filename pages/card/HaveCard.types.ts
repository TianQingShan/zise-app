export type ActionItem = {
  /** 标题 */
  title: string;

  /** 描述 */
  description: string;

  handlePress: () => void;
}