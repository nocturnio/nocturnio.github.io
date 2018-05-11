(displayln (for/first ([i (vector 1 2 3 4 5)] #:when (> i 25)) i))
(displayln (for/vector ([i (vector 1 2 3 4 5)] #:when (> i 2)) i))
(displayln (for/vector ([i (vector "hi" "bye" "")] #:when (not (string=? "" i))) i))
(displayln (let* ([i 10] [j (+ i 10)]) (+ j i)))
