import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"

import {Chem2DSVG as ChemSVG, MolSVGProps} from "chem2dview"

const Chem2DSVGCom = (props: ComponentProps) => {
  const {args} = props
  const MolSvgProps = args as MolSVGProps
  return (
    <ChemSVG mol={MolSvgProps.mol}/>
  )
}
const Chem2DSVG = withStreamlitConnection(Chem2DSVGCom)
export {Chem2DSVG}