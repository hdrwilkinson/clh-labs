import React from 'react'

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="left">
                    <div>
                        <h2>
                            Providing NFT projects on the Solana network end-to-end development services
                        </h2>
                        <p>
                            CHL Labs enables NFT projects on the Solana network to seamlessly realise the potential of their project.
                        </p>
                        <p>
                            From image generation to developing a minting website that can handle huge bursts in traffic we take the stress of development away, allowing you to do what you do best.
                        </p>
                        <a href="mailto:hello@clhlabs.io">
                            <h4>
                                Discover CHL Labs <i class="fas fa-long-arrow-alt-right"></i>
                            </h4>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="projects">
                        <div className="row">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/Shroomz_NFT" className="project">
                                <div className="shroomzProject projectWrapper">
                                    <div className="wrapper">
                                        <h3>ShroomZ</h3>
                                    </div>
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/ExiledApes" className="project">
                                <div className="exiledApesProject projectWrapper">
                                    <div className="wrapper">
                                        <h3>Exiled Apes</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <h2 className="desktop">NFT Projects</h2>
                        <div className="row">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/SOLgods_" className="project">
                                <div className="solgodsProject projectWrapper">
                                    <div className="wrapper">
                                       <h3>SolGods</h3>
                                    </div>
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://telegram.me/chazza1061" className="project">
                                <div className="projectWrapper">
                                    <div className="wrapper">
                                        <h3>You..?</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
