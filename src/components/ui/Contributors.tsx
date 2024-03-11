import { themesTypes } from '@/store/Theme'
import React, { useState } from 'react'

type Props = {
    theme: themesTypes
}

const Contributors = ({ theme }: Props) => {
    const [openContributorSection, setOpenContributorSection] = useState<boolean>(true)
    // TODO: add the "add new contributor " button to the right hand side of the title section
    return (
        <div className='min-h-9 max-h-[30%] overflow-auto'>
            <div onClick={() => setOpenContributorSection(prev => !prev)} className={`flex gap-2 ${theme.colors.editor} w-full -left-2  py-1 absolute`}>
                <span className="block w-4 pl-2">{openContributorSection ? "+" : "-"}</span>
                <p>Contributors</p>
            </div>
            <div className='mt-9 mb-5'>

            {
                openContributorSection && (
                    
                    <div>
                        <li>ABABABABAB</li>
                        <li>ABABABABAB</li>
                    </div>
                )
            }
            </div>

        </div>
    )
}

export default Contributors