import {
    Streamlit,
    withStreamlitConnection,
    ComponentProps,
} from "streamlit-component-lib"

import { KetcherStandaloneEdit, KetcherEdit, useKetcherEditHook } from "chem2dview"
import { useMemo } from "react"

const KetcherEditCom = (props: ComponentProps) => {
    const {args} = props
    const {staticResourcesUrl, mode} = args

    const staticResourcesURL = useMemo(() => {
        if(staticResourcesUrl) {
            return staticResourcesUrl
        } else {
            return "./"
        }
    }, [staticResourcesUrl])
    const { KetcherRef } = useKetcherEditHook();
    const handleChangeSmiles = (smiles: string) => {
            Streamlit.setComponentValue( {
                smiles
            })
    }
    const render = () => {
        if(mode === 'background') {
            return <KetcherEdit
              ref={KetcherRef}
              staticResourcesUrl={staticResourcesURL}
              onChangeSmiles={handleChangeSmiles}
            />
        } else {
            return <KetcherStandaloneEdit
              ref={KetcherRef}
              staticResourcesUrl={staticResourcesURL}
              onChangeSmiles={handleChangeSmiles}
            />
        }
    }
    return (
        <div style={{width: "600px", height: "600px"}}>
            {render()}
        </div>
    )
}
const ChemKetcher = withStreamlitConnection(KetcherEditCom)
export {ChemKetcher}