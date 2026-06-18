import { useState } from 'react';
import styles from './DicePageTwo.module.css'
import Button from './Button.jsx'
function DicePageTwo() {
    const numbers = [1, 2, 3, 4, 5, 6]
    const [score, setScore] = useState(0)
    const [diceSrc, setDiceSrc] = useState(1)
    const [showRules, setShowRules] = useState(false)
    const [selectedNum, setSelectedNum] = useState(null);
    const [showError, setShowError] = useState(false);
    return (
        <main className={styles.dicepagetwomaincont}>
            <div className={styles.dicepagetwoinnercont}>
                <div className={styles.dicetwouppercont}>
                    <div className={styles.scorecont}>
                        <p className={styles.scorecount}>{score}</p>
                        <p className={styles.scoretext} >TOTAL SCORE</p>
                    </div>
                    <div className={styles.numbercont}>
                        {showError && <p className={styles.error}>Please Select a number</p>}

                        <div className={styles.numberdiv}>
                            {numbers.map((num) => {
                                return <p onClick={() => {
                                    setSelectedNum(num)
                                }}
                                    style={{
                                        backgroundColor: selectedNum === num ? "black" : "transparent",
                                        color: selectedNum === num ? "white" : "black",
                                    }}>{num}</p>
                            })}
                        </div>
                        <p className={styles.selectnumtxt}>Select Number</p>
                    </div>
                </div>
                <div className={styles.dicetwolowercont}>
                    <img src={`/images/dice_${diceSrc}.png`} alt="" onClick={() => {
                        if (!selectedNum) {
                            setShowError(true)
                            return
                        };
                        setShowError(false)
                        let randomDice = Math.floor(Math.random() * 6) + 1;
                        setDiceSrc(randomDice);

                        if (selectedNum === randomDice) {
                            setScore((prev) => prev + randomDice);
                        } else {
                            setScore((prev) => prev - 2);
                        }
                        setSelectedNum(null);
                    }} />
                    <p>CLick On Dice To roll</p>
                    <Button width="151px" text="Reset Score " color="black" backgroundcolor="white" className={styles.resetbtn} border="1px solid black" onClick={() => {
                        setDiceSrc(1)
                        setScore(0)
                        setSelectedNum(null)
                    }} />
                    <Button width="151px" text={!showRules ? "Show Rules" : "Hide Rules"} color="white" backgroundcolor="black" border="none" onClick={() => {
                        setShowRules((prev) => !prev)
                    }} />
                </div>

                {showRules && <div className={styles.rulescont}>
                    <h2>How to play the game</h2>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>After click on dice , if selected number is equal to the dice number you will get same point as dice</p>
                    <p>if you get wrong guess then 2 points will be deducted</p>
                </div>}
            </div>
        </main>
    );
}

export default DicePageTwo