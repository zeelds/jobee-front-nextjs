
export default function pronounFix(preferredPronoun, possibilities) {

    const [he, her, they] = possibilities.split('/')

    if(!preferredPronoun) return he

    if (preferredPronoun.toLowerCase() == "ele/dele") return he

    if (preferredPronoun.toLowerCase() == "ela/dela") return her

    if (preferredPronoun.toLowerCase() == "elu/delu") return they

    return he

}
