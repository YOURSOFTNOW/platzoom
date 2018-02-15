//Import sin default
////Import {platzom} from platzom
//Con default
////Import platzom from platzom -> No requerimos llaves
export default function platzom(word) {
    let traslation = word
    if (word.toLowerCase().endsWith('ar')) {
        traslation = word.slice(0, -2)
    }

    if (word.toLowerCase().startsWith('z')) {
        traslation += 'pe'
    }

    let length = traslation.length
    if (length >= 10) {
        let half = Math.round(length / 2)
        traslation = `${traslation.slice(0,half)}-${traslation.slice(half)}`
    }

    const reverse = () => word.split('').reverse().join('')
    const minMay = () => {
        traslation = ''
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i)
            traslation += (i % 2 == 0) ? char.toUpperCase() : char.toLowerCase()
        }
        return traslation
    }
    if (word.toLowerCase() == reverse().toLowerCase()) {
        return minMay()
    }
    return traslation
}