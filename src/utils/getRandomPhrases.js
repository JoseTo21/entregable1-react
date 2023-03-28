const getRandomPhrases = (Array) => {
    const indexRandom = Math.floor(Math.random() * Array.length)
    return Array[indexRandom]
};

export default getRandomPhrases