export interface IPageLifecycle {
  bootstrap(): void
  mount(): void
  unmount(): void
  render(): void
}

export interface IComponentLifecycle {
  bootstrap(): void
  mount(): void
  unmount(): void
  render(): void
}