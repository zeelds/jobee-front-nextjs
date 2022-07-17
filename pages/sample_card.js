

const Card = () => {

    return (

        <>
            <Link href="/404">
                <a>
                    <Card class={cardstyles.card_s_100 + " card mb-3"}>
                        <div className="card-body">
                            <h4>Assine o Jobee PRO</h4>
                            O Jobee PRO é uma assinatura mensal que oferece aos nossos clientes mais fiéis acesso exclusivo a recursos premium e personalizações de aplicativos por uma pequena taxa.
                            <br />
                            <div className='mt-3' style={{ display: 'inline-flex' }}>
                                <span className={jobeestyles.ad_badge + " badge rounded-pill text-dark mx-1"}>Anúncio📢</span>
                            </div>
                        </div>
                    </Card>
                </a>
            </Link>

            <Link href="/404">
                <a>
                    <Card class={cardstyles.card_s_100 + " card mb-3"}>
                        <div className="card-body">
                            <h4>Minha apresentação</h4>
                            Olá eu sou a Dona Célia, esse é meu primeiro post na plataforma do Jobee. Espero que eu faça muitos amigos e descubra muitas oportunidades!
                            <br />
                            <div className='mt-3' style={{ display: 'inline-flex' }}>
                                <span className={jobeestyles.premium_badge + " badge rounded-pill text-dark mx-1"}>PRO🌟</span>
                                <span className={jobeestyles.default_badge + " badge rounded-pill text-light mx-1"}>Costura</span>
                                <span className={jobeestyles.default_badge + " badge rounded-pill text-light mx-1"}>Idosa</span>
                                <span className={jobeestyles.default_badge + " badge rounded-pill text-light mx-1"}>Felicidade</span>
                            </div>
                        </div>
                    </Card>
                </a>
            </Link>
        </>
    )

}