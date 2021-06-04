const pirate1 = new Audio(`${process.env.PUBLIC_URL}/sounds/pirate-1.m4a`);
const pirate2 = new Audio(`${process.env.PUBLIC_URL}/sounds/pirate-2.m4a`);

let cannonCount = 0;
const cannon1 = new Audio(`${process.env.PUBLIC_URL}/sounds/cannon-1.m4a`);
const cannon2 = new Audio(`${process.env.PUBLIC_URL}/sounds/cannon-2.m4a`);

const hoNo = new Audio(`${process.env.PUBLIC_URL}/sounds/ho_no.m4a`);
const gold = new Audio(`${process.env.PUBLIC_URL}/sounds/gold.m4a`);

export const playPirate = (pirateNo: number) => {
    if (pirateNo % 2 === 0) pirate1.play();
    pirate2.play();
}

export const playCannon = () => {
    if (cannonCount % 2 === 0) cannon1.play();
    if (cannonCount % 2 === 1) cannon2.play();
    cannonCount++;
}

export const playHoNo = () => {
    hoNo.play();
}

export const playGold = () => {
    gold.play();
}