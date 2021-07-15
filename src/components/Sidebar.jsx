import React from 'react';
import { search } from '../store/actions/personAction';
import { useDispatch } from 'react-redux';

function Sidebar() {
    const dispatch = useDispatch();

    function handleClick(event, name) {
        // this will accept string name and pass it to the action to render search result, default is none
        event.preventDefault();
        dispatch(search(name));
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
                                <li><a href="/#" onClick={(event) => handleClick(event, `tom+cruise`)} className="link-dark rounded">Tom Cruise</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `johnny+depp`)} className="link-dark rounded">Johnny Depp</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `lindsay+lohan`)} className="link-dark rounded">Lindsay Lohan</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `drew+berrymore`)} className="link-dark rounded">Drew Berrymore</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `julia+roberts`)} className="link-dark rounded">Julia Roberts</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `angelina+jolie`)} className="link-dark rounded">Angelina Jolie</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `robert+downey+jr`)} className="link-dark rounded">Robert Downey Jr.</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `sylvester+stallone`)} className="link-dark rounded">Sylvester Stallone</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `ben+whishaw`)} className="link-dark rounded">Ben Whishaw</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `aamir+khan`)} className="link-dark rounded">Aamir Khan</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#indonesian-actor-collapse" aria-expanded="false">
                            Indonesian
                        </button>
                        <div className="collapse" id="indonesian-actor-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={(event) => handleClick(event, `reza+rahadian`)} className="link-dark rounded">Reza Rahadian</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `lukman+sardi`)} className="link-dark rounded">Lukman Sardi</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `iko+uwais`)} className="link-dark rounded">Iko Uwais</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `nicholas+saputra`)} className="link-dark rounded">Nicholas Saputra</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `joe+taslim`)} className="link-dark rounded">Joe Taslim</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `christine+hakim`)} className="link-dark rounded">Christine Hakim</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `dian+sastrowardoyo`)} className="link-dark rounded">Dian Sastrowardoyo</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `rio+dewanto`)} className="link-dark rounded">Rio Dewanto</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `adipati+dolken`)} className="link-dark rounded">Adipati Dolken</a></li>
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
                                <li><a href="/#" onClick={(event) => handleClick(event, `albert+einstein`)} className="link-dark rounded">Albert Einstein</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `marie+curie`)} className="link-dark rounded">Marie Curie</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `isaac+newton`)} className="link-dark rounded">Isaac Newton</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `charles+darwin`)} className="link-dark rounded">Charles Darwin</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `nikola+tesla`)} className="link-dark rounded">Nikola Tesla</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `galileo+galilei`)} className="link-dark rounded">Galileo Galilei</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `ada+lovelace`)} className="link-dark rounded">Ada Lovelace</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `alexander+graham+bell`)} className="link-dark rounded">Alexander Graham Bell</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `elon+musk`)} className="link-dark rounded">Elon Musk</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#indonesian-scientist-collapse" aria-expanded="false">
                            Indonesian
                        </button>
                        <div className="collapse" id="indonesian-scientist-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={(event) => handleClick(event, `bj+habibie`)} className="link-dark rounded">B.J. Habibie</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `samaun+samadikun`)} className="link-dark rounded">Samaun Samadikun</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `herman+johannes`)} className="link-dark rounded">Herman Johannes</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `teuku+jacob`)} className="link-dark rounded">Teuku Jacob</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `bambang+heru+saharjo`)} className="link-dark rounded">Bambang Heru Saharjo</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `khoirul+anwar`)} className="link-dark rounded">Khoirul Anwar</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `hasan+shadily`)} className="link-dark rounded">Hasan Shadily</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `yohannes+surya`)} className="link-dark rounded">Yohannes Surya</a></li>
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
                                <li><a href="/#" onClick={(event) => handleClick(event, `bill+clinton`)} className="link-dark rounded">Bill Clinton</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `shinzo+abe`)} className="link-dark rounded">Shinzo Abe</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `vladimir+putin`)} className="link-dark rounded">Vladimir Putin</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `recep+tayyip+erdogan`)} className="link-dark rounded">Recep Tayyip Erdogan</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(event, `tony+abbott`)} className="link-dark rounded">Tony Abbott</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#indonesian-politician-collapse" aria-expanded="false">
                            Indonesian
                        </button>
                        <div className="collapse" id="indonesian-politician-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/#" onClick={(event) => handleClick(`ruhut+sitompul`)} className="link-dark rounded">Ruhut Sitompul</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(`amien+rais`)} className="link-dark rounded">Amien Rais</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(`aburizal+bakrie`)} className="link-dark rounded">Aburizal Bakrie</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(`hashim+djojohadikusumo`)} className="link-dark rounded">Hashim Djojohadikusumo</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(`muhammad+aksa+mahmud`)} className="link-dark rounded">Muhammad Aksa Mahmud</a></li>
                                <li><a href="/#" onClick={(event) => handleClick(`tommy+soeharto`)} className="link-dark rounded">Tommy Soeharto</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;