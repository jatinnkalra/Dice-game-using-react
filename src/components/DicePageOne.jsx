import img from '/images/dices.png'
import Button from './Button.jsx'
import styles from './DicePageOne.module.css'
function DicePageOne({ setIsGameStarted }) {
    return (
        <div className={styles.dicepageonemaincont}>
            <div className={styles.dicepageoneinnercont}>
                <div className={styles.imgcont}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.dicepageonerightcont}>
                    <h1>DICE GAME</h1>
                    <Button width="151px" text="Play Now" color="white" backgroundcolor="black" onClick={() => {
                        setIsGameStarted(true);
                    }} border="none" />
                </div>
            </div>
        </div>
    );
}


export default DicePageOne