import phrases from "../utils/phrases.json";
import getRandomPhrases from "../utils/getRandomPhrases"


const ButtonPhr = ({ changePhrases, setNumberImg }) => {

    const handleChangePhrase = () => {
        changePhrases(getRandomPhrases(phrases))
        setNumberImg(getRandomPhrases([1, 2, 3 ,4]))
    }

return (
    <button className="App__btn" onClick={handleChangePhrase}>Prueba tu suerte!</button>
)
}

export default ButtonPhr