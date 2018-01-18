const complementaryDNA = dna => {
    const strand = {
       T : 'A',
        A : 'T',
        G : 'C',
        C : 'G'
    }

    let compSide = '';
    for (let char of dna) {
        compSide += strand[char]
    }
    return compSide

}

complementaryDNA('TCAGGGAT') //==>AGTCCCTA

// complementaryDNA('ATGC') //==>TACG

// complementaryDNA('GATC') //==>CTAG

/*
    ANSWER

    const complementaryDNA = dna => {
        const strand = {
            'T' : 'A',
            'A' : 'T',
            'G' : 'C',
            'C' : 'G'
        }

        let compSide = '';
        for (let i of dna) {
            compSide += strand[i]
        }
        return compSide
    }


    CHALLENGE
    MAKE A 2D ARRAY OF EACH PAIR, TAKE EACH CHARACTER
    AND FIND ITS PAIR, RETURN THE PROVIDED CHARACTER 
    AS THE FIRST ELEMENT IN EACH ARRAY PAIR
    
    //complementaryDNA('ATCG') ==> [['A','T'],['T','A'],['C','G'],['G','C']]

    ANSWER
    const complementaryDNA = dna => {
        const strand = {
            'T' : 'A',
            'A' : 'T',
            'G' : 'C',
            'C' : 'G'
        }

        let arr = [];
        for (let i of dna) {
            arr.push([i,strand[i]])
        }
        return arr
    }

*/