import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Logo() {

    return (
        <>


            <div id='logo-default' className='text-dark' style={{ position: 'relative', display: 'inline-block'}}>

                <Image id='logo-image' className={styles.img_logo} src="/jobee.png" alt="Jobee Logo" width={256} height={256} />

                <div style={{ position: 'absolute', top: '4.5em', left: '11em' }} id='logo-title'>
                    <a style={{ fontSize: '96px' }}>
                        Jo<b>bee</b>
                    </a>
                    <a style={{ fontSize: '32px' }}>
                        ©
                    </a>
                </div>

            </div>
            
        </>
    )

}