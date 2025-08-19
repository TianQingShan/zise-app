import { AuthType } from '@/types/index.types';

export type Item = {
  type: AuthType;

  /** tab文本 */
  text: string;
}

export type ItemProps = {
  item: Item;

  /**
   * 是否选中
   * - (true) 选中
   * - (false) 未选中
   */
  isSelected: boolean;
}

export type TabsProps = {
  onChange(type: AuthType): void;
}