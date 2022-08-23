const isPolyndrom = (text: string) => {
    let reversedText: string = "" 
    const loverText: string = text.toLowerCase()
    for(let i=text.length; i > 0; i--) {
        reversedText += loverText[i -1]
    }
    
    if( reversedText == loverText ) {
        console.log("The text is " + text + " and text is poliynomal " + true)
    } else if( reversedText != loverText ) {
        console.log("The text is " + text + " but text is not polinomal " + false)
    }
}

isPolyndrom('SaJak')
isPolyndrom('Kabak')