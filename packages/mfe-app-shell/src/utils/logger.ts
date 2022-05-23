export function error(err: any): void {
  if (__DEV__) {
    console.error(err)
  }
}