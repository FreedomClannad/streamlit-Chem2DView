import { Chem2DSVG } from "./svg"
import { Chem2DIMG } from "./img"
import { ChemKetcher } from "./ketcher-edit"

export const ComponentMap: Record<string, React.ComponentType<any>> = {
  Chem2DSVG: Chem2DSVG,
  Chem2DIMG: Chem2DIMG,
  ChemKetcher: ChemKetcher,
}