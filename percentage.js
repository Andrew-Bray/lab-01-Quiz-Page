export function roundedPercentage(number) {
    const normalPercentage = number / 3 * 100;
    const finalPercentage = Math.round(normalPercentage);
    console.log(finalPercentage + '%');
    return (finalPercentage + '%');
}