
export default async function starsAverage(stars) {
    const average = stars.reduce((sum, current)=>{
        return sum+current.stars
    }, 0) / stars.length

    return average
}
