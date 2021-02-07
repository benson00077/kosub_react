import React from 'react'
import styles from './contentWrapperSearch.module.css'


function Drawer({isOpen, drawerKo, drawerZh, drawerEn, drawerId}) {
    
    return (
        <div className={styles.DrawerContainer}>
         {drawerId && drawerId.map((each, i) => 
            <div key={i} className={styles.appCardOneSubtextRow}>
                <p>{drawerKo[i]}</p>
                <p>{drawerZh[i]}</p>
                <p>{drawerEn[i]}</p>
            </div>
         )}
        </div>
    )
}

export default Drawer
