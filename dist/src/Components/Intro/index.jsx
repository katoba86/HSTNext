"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Intro_module_scss_1 = __importDefault(require("./Intro.module.scss"));
const Intro = () => {
    return (<div className={[Intro_module_scss_1.default.intro, 'intro'].join(' ')}>
            <div className="d-sm-none d-lg-flex flex-lg-column  p-lg-5 col-lg-6 col-sm-12">
                <h1>
                    Erhalte deinen Fahrplan!
                    <br />
                    Deine Haltestellen
                </h1>
                <p className="pt-3">
                    Egal wo du bist, egal wohin du möchtest. Wir finden die
                    passende Haltestelle bzw. Buslinie für dich! In über 3
                    Millionen Verkehrsverbindungen wird auch deine sicherlich
                    dabei sein!
                </p>
            </div>
        </div>);
};
exports.default = Intro;
