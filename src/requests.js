const getPuzzle = async (wordCount) => {
    const response  = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200){
        const data = await response.json();
        console.log(data.puzzle);
        return data.puzzle;
    } else {
        throw new Error('Unable to grab puzzle from api');
    }
};
export {getPuzzle as default}