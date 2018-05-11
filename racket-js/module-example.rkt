(require "vector-example.rkt")
(require "oo-example.rkt")

(module/js module-example

  (require vector-example)
  (require oo-example)

  (define dog (new dog%))

  (send dog speak)

  )

(send module-example write-to-file: "module-example.js")
