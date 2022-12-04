const kurs = (vrednost) => {

    const cenaDin = vrednost;
    const cenaEur = cenaDin / 117.5;
    const zaokEur = Math.round(cenaEur) + ' eur.';
    const zaokDin = cenaDin + ',00 din.';
}

export default kurs