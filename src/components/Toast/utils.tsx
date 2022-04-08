// 获取装载容器
export const getMountContainer = (
  mountContainer?: HTMLElement | (() => HTMLElement) | Window,
): HTMLElement => {
  if (mountContainer) {
    if (typeof mountContainer === 'function') {
      return mountContainer();
    }
    if (
      typeof mountContainer === 'object' &&
      mountContainer instanceof HTMLElement
    ) {
      return mountContainer;
    }
  }
  return document.body;
};
