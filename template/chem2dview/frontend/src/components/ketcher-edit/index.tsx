import {
    Streamlit,
    withStreamlitConnection,
    ComponentProps,
} from "streamlit-component-lib"

import { KetcherEdit, useKetcherEditHook } from "chem2dview"
import { useMemo } from "react"

const KetcherEditCom = (props: ComponentProps) => {
    const {args} = props
    const {staticResourcesUrl} = args

    const staticResourcesURL = useMemo(() => {
        console.log(staticResourcesUrl)
        if(staticResourcesUrl) {
            return staticResourcesUrl
        } else {
            return "./"
        }
    }, [staticResourcesUrl])
    const { KetcherRef } = useKetcherEditHook();
    const handleChangeSmiles = (smiles: string) => {
        console.log(smiles)
            Streamlit.setComponentValue( {
                smiles
            })
    }
    return (
        <div style={{width: "600px", height: "600px"}}>
            <KetcherEdit
                ref={KetcherRef}
                staticResourcesUrl={staticResourcesURL}
                onChangeSmiles={handleChangeSmiles}
            />
        </div>
    )
}
const ChemKetcher = withStreamlitConnection(KetcherEditCom)
export {ChemKetcher}