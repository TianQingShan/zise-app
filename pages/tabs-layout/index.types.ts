import { type Href } from 'expo-router'
import { type TabTriggerSlotProps } from 'expo-router/ui'

export type Item = {
  /** 未激活时显示的图标 */
  unActivedIcon: string;

  /** 激活时显示的图标 */
  activedIcon: string;

  /** 文本 */
  text: string;

  /** 跳转的路由地址 */
  href: Href;
}

export type ItemProps = TabTriggerSlotProps & { item: Item; }