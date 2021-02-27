import React from 'react'
import styles from './contentWrapperSearch.module.css'


function Drawer({ drawerKo, drawerZh, drawerEn, drawerId, isLoading }) {

    return (
        <div className={styles.DrawerContainer}>
            { isLoading 
                ? '' 
                : 
                <React.Fragment>
                <li>Result: {drawerId.length} sentences found</li>
                <li>Range: before and after 5 secs from target sentence</li>
                </React.Fragment>
            }
            
            {isLoading
                ? 'Fetching...'
                : drawerId && drawerId.map((each, i) =>
                    <div key={i} className={styles.DrawerContainer_SubtextRow}>
                        {/* {drawerKo[i] ? <p>{drawerKo[i]}</p> : <p> - </p>}
                        {drawerZh[i] ? <p>{drawerZh[i]}</p> : <p> - </p>}
                        {drawerEn[i] ? <p>{drawerEn[i]}</p> : <p> - </p>} */}
                        <p>{drawerKo[i]}</p>
                        <p>{drawerZh[i]}</p>
                        <p>{drawerEn[i]}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Drawer
