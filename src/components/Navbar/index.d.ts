export type XNavBarBgType = 'light' | 'dark';
// export type XNavBarBgType = 'light' | 'dark'

export interface XNavBarProps {
  prefixCls?: string;
  title: string; // 标题
  rightText?: string; // 右侧内容
  bgType?: XNavBarBgType; // 背景色
  closeable?: boolean;
  closeFunc?: () => void;
  rightFunc?: () => void;
  leftFunc?: () => void;
}
