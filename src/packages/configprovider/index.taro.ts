import {
  ConfigProvider,
  useConfig,
  setDefaultConfig,
  getDefaultConfig,
} from './configprovider.taro'

export type { ConfigProviderProps, Direction } from './configprovider.taro'
export type { NutCSSVariables } from './types'
export { useConfig, setDefaultConfig, getDefaultConfig }
export default ConfigProvider
