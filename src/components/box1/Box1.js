import React from "react";
import style from './Box1.module.scss';

const Box1 = ({image}) => {
    return (
        <div className={style.blankslate}>
            <img className="mb-3" src={image} />
            <h3 className="mb-1">Buslinien aller Städte</h3>
            <p>
                Haltestellen-Buslinien.de zeigt dir (fast) alle Buslinien in nahezu allen Städten Deutschlands.
                Ein Klick auf die jeweilgen Buslinien öffnet den Streckenverlauf. Selbstverständlich kannst du
                komfortabel nach deiner Busverbindung suchen!
            </p>
        </div>
    );
}
export default Box1;