#lang racket

(require racket-js)

(module/js oo-example

  (require basejs)
  (require classjs)
  (require vectorjs)

  (provide animal%)
  (provide lion%)
  (provide lion-like)

  (define animal%
    (class object%
      (super-new)

      (define/public (speak)
        ;; abstract
        (displayln "abstract called"))))

  (define dog%
    (class animal%
      (super-new)

      (define/override (speak)
        (displayln "bark"))))

  (define (cat-like %)
    (class %
      (init [food (vector)])
      (define _food food)
      (super-new)

      (define/public (get-food)
        _food)

      (define/public (add-food: f)
        (send _food push f))

      (define/public (eat)
        (displayln _food))

      (define/override (speak)
        (super speak)
        ;;(eat)
        (displayln "meow"))))

  (define (lion-like %)
    (class %
      (super-new)
      (inherit get-food)

      (define/override (eat)
        (displayln "hello"))))

  (define lion% (lion-like (cat-like animal%)))

  (define lion (new lion%))

  (send lion speak)

  )
