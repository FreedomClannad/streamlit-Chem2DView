import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib"

import {Chem2DIMG as ChemIMG, MolIMGProps} from "chem2dview"

const Chem2DIMGCom = (props: ComponentProps) => {
  const {args} = props
  const MolSvgProps = args as MolIMGProps
  return ( <ChemIMG mol={MolSvgProps.mol} height={500} width={500}/>)
}
const Chem2DIMG = withStreamlitConnection(Chem2DIMGCom)
export {Chem2DIMG}