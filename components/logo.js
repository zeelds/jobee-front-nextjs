import styles from '../styles/Home.module.css'
import responsive from '../styles/Responsive.module.css'
import Image from 'next/image'

export default function Logo() {

    return (
        <>

            <div id='logo-default' className={styles.jb_default_logo+' '+responsive.prelative_on_sm}>

                <img id='logo-image' className={styles.img_logo+' '+responsive.prelative_on_sm} src="/jobee.png" alt="Jobee Logo" width={256} height={256} />

                <br />

                <div className={styles.text_logo+' '}  id='logo-title'>

                    <span className={styles.text_logo}>
                        Jo<b>bee</b>
                    </span>
                    <span className={styles.copyright_text_logo}>
                        ©
                    </span>
                </div>

            </div>
            
        </>
    )

}