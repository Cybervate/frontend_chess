function checkForStalemates(cur, next) {
    curElem = document.getElementById(cur);
    nextElem = document.getElementById(next);

    let curNumber = Number(Array.from(cur)[1]);
    let curLetter = Array.from(cur)[0];
    let curLetterAsNumber = letterAsNumber(curLetter);

    let nextNumber = Number(Array.from(next)[1]);
    let nextLetter = Array.from(next)[0];
    let nextLetterAsNumber = letterAsNumber(nextLetter);

    let color, opoColor;
    turn % 2 == 0 ? color = 'white' : color = 'black';
    color == 'white' ? opoColor = 'black' : opoColor = 'white';
    console.log(color, opoColor, 9 * 90);

    alertError = 0

    let placeX, placeY;
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            console.log(i, j);

            if (document.getElementById(numberAsLetter(i) + String(j)).innerHTML.search(color) > 0)
            {
                placeX = i;
                placeY = j;

                if (document.getElementById(numberAsLetter(placeX) + String(placeY)).innerText == (pawn)) {

                    // up & down
                    for (k = 1; k <= 2; k++) {

                        // up
                        if (
                            (placeY + k <= 8) &&
                            move(
                                numberAsLetter(placeX) + String(placeY), 
                                numberAsLetter(placeX) + String(placeY + k), 1)
                            ) {return 0}
                        

                        // down
                        if (
                            (placeY - k >= 1) &&
                            move(
                                numberAsLetter(placeX) + String(placeY), 
                                numberAsLetter(placeX) + String(placeY - k), 1)
                            ) {return 0}
                            

                    }

                    // captures
                    // up right
                    if (
                        (placeY + 1 <= 8 && placeX + 1 <= 8) &&
                        move(
                            numberAsLetter(placeX) + String(placeY), 
                            numberAsLetter(placeX + 1) + String(placeY + 1), 1)
                        ) {return 0}

                    // down right
                    if (
                        (placeY - k >= 1 && placeX + 1 <= 8) &&
                        move(
                            numberAsLetter(placeX) + String(placeY), 
                            numberAsLetter(placeX + 1) + String(placeY - 1), 1)
                        ) {return 0}

                    // up left
                    if (
                        (placeX - 1 >= 1 && placeY + 1 <= 8) &&
                        move(
                            numberAsLetter(placeX) + String(placeY), 
                            numberAsLetter(placeX - 1) + String(placeY + 1), 1)
                        ) {return 0}

                    // down left
                    if (
                        (placeX - 1 >= 1 && placeY - 1 >= 1) &&
                        move(
                            numberAsLetter(placeX) + String(placeY), 
                            numberAsLetter(placeX - 1) + String(placeY - 1), 1)
                        ) {return 0}
                    
                }

                if (document.getElementById(numberAsLetter(placeX) + String(placeY)).innerText == (rook || queen)) {

                    for (k = 1; k <= 8; k++) {

                        // up
                        if (
                            (placeY + k <= 8) &&
                            move(
                                numberAsLetter(placeX) + String(placeY), 
                                numberAsLetter(placeX) + String(placeY + k), 1)
                            ) {return 0}

                        // down
                        if (
                            (placeY - k >= 1) &&
                            move(
                                numberAsLetter(placeX) + String(placeY), 
                                numberAsLetter(placeX) + String(placeY - k), 1)
                            ) {return 0}

                        // right
                        if (
                            (placeX + k <= 8) &&
                            move(
                                numberAsLetter(placeX) + String(placeY), 
                                numberAsLetter(placeX + k) + String(placeY), 1)
                            ) {return 0}

                        // left
                        if (
                            (placeX - k >= 1) &&
                            move(
                                numberAsLetter(placeX) + String(placeY), 
                                numberAsLetter(placeX - k) + String(placeY), 1)
                            ) {return 0}


                    }
                }

                if (document.getElementById(numberAsLetter(placeX) + String(placeY)).innerText == (knight)) {

                    for (k = 1; k <= 8; k++) {

                    }

                }

            }
            
        }
    }

    alertError = 1
    showError('Stalemate, Draw');
    return 1;
}