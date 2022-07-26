
export default async function starsAverage(stars) {
    const average = await stars.reduce((sum, current)=>{
        return sum+current.stars
    }, 0) / stars.length

    return average.toFixed(1)
}
