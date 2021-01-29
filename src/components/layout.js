
export default function Layout({children}){



    return (
        <div className="wrapper">
            <div className="wrapper__left">
                left
            </div>
            <div className="content">

                <div className="content__main">


                    <div className="grid full">
                        <div className="grid__item a">

                            <header className="content__header">

                                <div className="deco1">
                                    t
                                </div>
                                <div className="content__header__elements">
                                    <div className="intro">
                                        <h1>Haltestellen</h1>
                                        <h2>Content goes here</h2>
                                    </div>
                                </div>

                            </header>

                        </div>
                        <div className="grid__item b">.b</div>
                    </div>


                    {children}
                </div>

            </div>
        </div>

    )
}