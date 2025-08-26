import { type TextInputProps } from 'react-native'

export type CustomTextInputProps = TextInputProps & {
  /** 输入框高度 */
  height?: number;

  /** 圆角大小 */
  borderRadius?: number;

  /** 未聚焦时的边框大小 */
  borderWidth?: number;

  /** 未聚焦时的边框颜色 */
  borderColor?: string;

  /** 聚焦时的边框大小 */
  focusBorderWidth?: number;

  /** 聚焦时的边框颜色 */
  focusBorderColor?: string;

  /** 左右间距 */
  paddingHorizontal?: number;

  /**
   * 是否显示小眼睛, 一般是输入框为密码类型时才需要
   * - (true) 显示
   * - (false) 不显示
   */
  isShowSmallEyes?: boolean;
}