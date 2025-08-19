import { AccountType } from '@/types/index.types';

export type Item = {
  type: AccountType;

  /** 图标 */
  icon: string;

  /** 文本 */
  text: string;
}