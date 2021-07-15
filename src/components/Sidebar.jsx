import React from 'react';

function Sidebar() {
    function handleClick(name) {
        // this will accept string name and pass it to the action to render search result, default is none
    }
    return (
        <div className="card" style={{ height: "90vh" }}>
            <div className="card-header">
                Person List
            </div>
            <div className="card-body">
                <ul className="list-unstyled ps-0">
                    <span className="fs-5 fw-semibold">Actors</span>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#international-actor-collapse" aria-expanded="false">
                            International
                        </button>
                        <div className="collapse" id="international-actor-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={() => handleClick(`tom+cruise`)} className="link-dark rounded">Tom Cruise</a></li>
                                <li><a href="/#" onClick={() => handleClick(`johnny+depp`)} className="link-dark rounded">Johnny Depp</a></li>
                                <li><a href="/#" onClick={() => handleClick(`lindsay+lohan`)} className="link-dark rounded">Lindsay Lohan</a></li>
                                <li><a href="/#" onClick={() => handleClick(`drew+berrymore`)} className="link-dark rounded">Drew Berrymore</a></li>
                                <li><a href="/#" onClick={() => handleClick(`julia+roberts`)} className="link-dark rounded">Julia Roberts</a></li>
                                <li><a href="/#" onClick={() => handleClick(`angelina+jolie`)} className="link-dark rounded">Angelina Jolie</a></li>
                                <li><a href="/#" onClick={() => handleClick(`robert+downey+jr`)} className="link-dark rounded">Robert Downey Jr.</a></li>
                                <li><a href="/#" onClick={() => handleClick(`sylvester+stallone`)} className="link-dark rounded">Sylvester Stallone</a></li>
                                <li><a href="/#" onClick={() => handleClick(`ben+whishaw`)} className="link-dark rounded">Ben Whishaw</a></li>
                                <li><a href="/#" onClick={() => handleClick(`aamir+khan`)} className="link-dark rounded">Aamir Khan</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#indonesian-actor-collapse" aria-expanded="false">
                            Indonesian
                        </button>
                        <div className="collapse" id="indonesian-actor-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={() => handleClick(`reza+rahadian`)} className="link-dark rounded">Reza Rahadian</a></li>
                                <li><a href="/#" onClick={() => handleClick(`lukman+sardi`)} className="link-dark rounded">Lukman Sardi</a></li>
                                <li><a href="/#" onClick={() => handleClick(`iko+uwais`)} className="link-dark rounded">Iko Uwais</a></li>
                                <li><a href="/#" onClick={() => handleClick(`nicholas+saputra`)} className="link-dark rounded">Nicholas Saputra</a></li>
                                <li><a href="/#" onClick={() => handleClick(`joe+taslim`)} className="link-dark rounded">Joe Taslim</a></li>
                                <li><a href="/#" onClick={() => handleClick(`christine+hakim`)} className="link-dark rounded">Christine Hakim</a></li>
                                <li><a href="/#" onClick={() => handleClick(`dian+sastrowardoyo`)} className="link-dark rounded">Dian Sastrowardoyo</a></li>
                                <li><a href="/#" onClick={() => handleClick(`rio+dewanto`)} className="link-dark rounded">Rio Dewanto</a></li>
                                <li><a href="/#" onClick={() => handleClick(`adipati+dolken`)} className="link-dark rounded">Adipati Dolken</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <span className="fs-5 fw-semibold">Scientist</span>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#international-scientist-collapse" aria-expanded="false">
                            International
                        </button>
                        <div className="collapse" id="international-scientist-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={() => handleClick(`albert+einstein`)} className="link-dark rounded">Albert Einstein</a></li>
                                <li><a href="/#" onClick={() => handleClick(`marie+curie`)} className="link-dark rounded">Marie Curie</a></li>
                                <li><a href="/#" onClick={() => handleClick(`isaac+newton`)} className="link-dark rounded">Isaac Newton</a></li>
                                <li><a href="/#" onClick={() => handleClick(`charles+darwin`)} className="link-dark rounded">Charles Darwin</a></li>
                                <li><a href="/#" onClick={() => handleClick(`nikola+tesla`)} className="link-dark rounded">Nikola Tesla</a></li>
                                <li><a href="/#" onClick={() => handleClick(`galileo+galilei`)} className="link-dark rounded">Galileo Galilei</a></li>
                                <li><a href="/#" onClick={() => handleClick(`ada+lovelace`)} className="link-dark rounded">Ada Lovelace</a></li>
                                <li><a href="/#" onClick={() => handleClick(`alexander+graham+bell`)} className="link-dark rounded">Alexander Graham Bell</a></li>
                                <li><a href="/#" onClick={() => handleClick(`elon+musk`)} className="link-dark rounded">Elon Musk</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#indonesian-scientist-collapse" aria-expanded="false">
                            Indonesian
                        </button>
                        <div className="collapse" id="indonesian-scientist-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={() => handleClick(`bj+habibie`)} className="link-dark rounded">B.J. Habibie</a></li>
                                <li><a href="/#" onClick={() => handleClick(`samaun+samadikun`)} className="link-dark rounded">Samaun Samadikun</a></li>
                                <li><a href="/#" onClick={() => handleClick(`herman+johannes`)} className="link-dark rounded">Herman Johannes</a></li>
                                <li><a href="/#" onClick={() => handleClick(`teuku+jacob`)} className="link-dark rounded">Teuku Jacob</a></li>
                                <li><a href="/#" onClick={() => handleClick(`bambang+heru+saharjo`)} className="link-dark rounded">Bambang Heru Saharjo</a></li>
                                <li><a href="/#" onClick={() => handleClick(`khoirul+anwar`)} className="link-dark rounded">Khoirul Anwar</a></li>
                                <li><a href="/#" onClick={() => handleClick(`hasan+shadily`)} className="link-dark rounded">Hasan Shadily</a></li>
                                <li><a href="/#" onClick={() => handleClick(`yohannes+surya`)} className="link-dark rounded">Yohannes Surya</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <span className="fs-5 fw-semibold">Politicians</span>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#international-politician-collapse" aria-expanded="false">
                            International
                        </button>
                        <div className="collapse" id="international-politician-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={() => handleClick(`bill+clinton`)} className="link-dark rounded">Bill Clinton</a></li>
                                <li><a href="/#" onClick={() => handleClick(`shinzo+abe`)} className="link-dark rounded">Shinzo Abe</a></li>
                                <li><a href="/#" onClick={() => handleClick(`vladimir+putin`)} className="link-dark rounded">Vladimir Putin</a></li>
                                <li><a href="/#" onClick={() => handleClick(`recep+tayyip+erdogan`)} className="link-dark rounded">Recep Tayyip Erdogan</a></li>
                                <li><a href="/#" onClick={() => handleClick(`tony+abbott`)} className="link-dark rounded">Tony Abbott</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#indonesian-politician-collapse" aria-expanded="false">
                            Indonesian
                        </button>
                        <div className="collapse" id="indonesian-politician-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={() => handleClick(`ruhut+sitompul`)} className="link-dark rounded">Ruhut Sitompul</a></li>
                                <li><a href="/#" onClick={() => handleClick(`amien+rais`)} className="link-dark rounded">Amien Rais</a></li>
                                <li><a href="/#" onClick={() => handleClick(`aburizal+bakrie`)} className="link-dark rounded">Aburizal Bakrie</a></li>
                                <li><a href="/#" onClick={() => handleClick(`hashim+djojohadikusumo`)} className="link-dark rounded">Hashim Djojohadikusumo</a></li>
                                <li><a href="/#" onClick={() => handleClick(`muhammad+aksa+mahmud`)} className="link-dark rounded">Muhammad Aksa Mahmud</a></li>
                                <li><a href="/#" onClick={() => handleClick(`tommy+soeharto`)} className="link-dark rounded">Tommy Soeharto</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;