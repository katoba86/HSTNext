import style from './SectionHeader.module.scss';
import classNames from "classnames";
const SectionHeader = () => (

            <div className={style.Subhead}>
                <h2 className={style[`Subhead-heading`]}>Buslinien in Hamm NRW</h2>
                <div className={style[`Subhead-actions`]}><a href="#url" className="btn btn-sm btn-primary"
                                                    role="button">Zu den Haltestellen</a></div>
                <div className={style[`Subhead-description`]}>Welche Buslinien fahren in Hamm? Wo muss ich aussteigen? Welche Strecke fährt der Bus?</div>
        </div>
);
export default SectionHeader;
