import { IAdapterApi } from "../adapter";
import { IEventBus } from "../utils/eventBus";

export interface IAppShell {
  applyAdapter(api: IAdapterApi): void,
  eventBus: IEventBus<Record<string,unknown>>
}

export function createAppShell() {

}
