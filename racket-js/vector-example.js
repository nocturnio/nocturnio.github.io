((function() {
    var js_boolean__predicate__;
    var js_integer__predicate__;
    var js_display;
    var js_displayln;
    var js_number__predicate__;
    var js_procedure__predicate__;
    var js_error;
    var js_undefined__predicate__;
    var js_even__predicate__;
    var js_odd__predicate__;
    ((function() {
        (js_undefined__predicate__ = (function(v) {
            return ((typeof(v)) === "undefined");
        }));
        (js_boolean__predicate__ = (function(v) {
            return ((typeof(v)) === "boolean");
        }));
        (js_integer__predicate__ = (function(v) {
            return ((parseInt(v)) === v);
        }));
        (js_display = (function(datum) {
            return ((console["log"])(datum));
        }));
        (js_displayln = (function(datum) {
            return ((console["log"])(datum));
        }));
        (js_number__predicate__ = (function(v) {
            return ((typeof(v)) === "number");
        }));
        (js_procedure__predicate__ = (function(v) {
            return ((typeof(v)) === "function");
        }));
        (js_error = (function(e) {
            throw e;
            return null;
        }));
        (js_even__predicate__ = (function(v) {
            return ((v % 2) === 0);
        }));
        (js_odd__predicate__ = (function(v) {
            return (!(((v % 2) === 0)));
        }));
        return false;
    })());
    var js_pipe = function() {
        for (var n = arguments, r = 0, t = function(n) {
                return n
            }, u = function(n, r) {
                return function(t) {
                    return r(n(t))
                }
            }; r < n.length;) {
            var e = n[r];
            t = u(t, e), r++
        }
        return t
    };
    var js_pipe_async = function() {
        var a = arguments;
        return function(b) {
            var c = a.length,
                d = function(b, e) {
                    if (b == c) return e;
                    var f = a[b],
                        g = function(a) {
                            return d(b + 1, a)
                        };
                    return f(e, g)
                };
            return d(0, b)
        }
    };;
    var js_vector__predicate__;
    var js_vector_empty__predicate__;
    var js_vector_member;
    var js_vector_length;
    var js_vector_append;
    var js_vector_append__mutable__;
    var js_vector_last;
    var js_vector_map;
    var js_vector_fold;
    var js_vector_filter;
    var js_vector_flatten;
    ((function() {
        (js_vector__predicate__ = (function(v) {
            return (v instanceof Array);
        }));
        (js_vector_member = (function(value, vec) {
            return ((vec["indexOf"])(value));
        }));
        (js_vector_length = (function(vec) {
            return (vec["length"]);
        }));
        (js_vector_empty__predicate__ = (function(vec) {
            return ((js_vector_length(vec)) === 0);
        }));
        (js_vector_append = (function() {
            var proto_slice = ((Array["prototype"])["slice"]);
            var rest = ((proto_slice["call"])(arguments, 0));
            return ((function(args) {
                var rtn = [];
                (for_loop__variant__local((function(i) {
                    return (((rtn["push"])["apply"])(rtn, (args[i])));
                }), (js_vector_length(args))));
                return rtn;
            })(rest));
        }));
        (js_vector_append__mutable__ = (function(vec) {
            var x_length = (js_vector_length([vec]));
            var prototype_slice = ((Array["prototype"])["slice"]);
            var rest = ((prototype_slice["call"])(arguments, x_length));
            var args = [vec, rest];
            return (((function(vec, args) {
                return (for_loop__variant__local((function(i) {
                    return (((vec["push"])["apply"])(vec, (args[i])));
                }), (js_vector_length(args))));
            })["apply"])(this, args));
        }));
        (js_vector_last = (function(vec) {
            return (vec[((js_vector_length(vec)) - 1)]);
        }));
        (js_vector_map = (function(func) {
            var x_length = (js_vector_length([func]));
            var prototype_slice = ((Array["prototype"])["slice"]);
            var rest = ((prototype_slice["call"])(arguments, x_length));
            var args = [func, rest];
            return (((function(func, args) {
                var outer_loop = (function(i) {
                    var inner_loop = (function(j) {
                        return ((elements["push"])(((args[j])[i])));
                    });
                    var elements = [];
                    (for_loop__variant__local(inner_loop, arg_length));
                    var value = ((func["apply"])(this, elements));
                    return ((rtn["push"])(value));
                });
                var rtn = [];
                var arg_length = (js_vector_length(args));
                var map_length = (js_vector_length((args[0])));
                (for_loop__variant__local(outer_loop, map_length));
                return rtn;
            })["apply"])(this, args));
        }));
        (js_vector_fold = (function(func, start, vec) {
            var accum = start;
            (js_for((function(v) {
                return (accum = (func(v, accum)));
            }), [vec], {}));
            return accum;
        }));
        (js_vector_filter = (function(func, vec) {
            return ((vec["filter"])(func));
        }));
        (js_vector_flatten = (function(vec) {
            var rtn = [];
            return (((rtn["concat"])["apply"])(rtn, vec));
        }));
        var for_loop__variant__local = function(f, l) {
            for (var i = 0; i < l; i++) {
                f(i);
            }
        };
        return false;
    })());;
    var js_for;
    var js_for__variant__vector;
    var js_for__variant__first;
    ((function() {
        (js_for__variant__first = (function(func, seqs, clauses) {
            (clauses = ((js_undefined__predicate__(clauses)) ? {} : clauses));
            var rtn = false;
            var first_clause = ((clauses["when"]) || (function() {
                return (((function(x) {
                    return true;
                })["apply"])(this, [arguments]));
            }));
            ((clauses["final"]) = first_clause);
            (js_for((function() {
                return (((function(x) {
                    return (rtn = ((func["apply"])(this, x)));
                })["apply"])(this, [arguments]));
            }), seqs, clauses));
            return rtn;
        }));
        (js_for__variant__vector = (function(func, seqs, clauses) {
            (clauses = ((js_undefined__predicate__(clauses)) ? {} : clauses));
            var rtn = [];
            (js_for((function() {
                return (((function(x) {
                    return ((rtn["push"])(((func["apply"])(this, x))));
                })["apply"])(this, [arguments]));
            }), seqs, clauses));
            return rtn;
        }));
        (js_for = (function(func, seqs, clauses) {
            (clauses = ((js_undefined__predicate__(clauses)) ? {} : clauses));
            var break_clause = (clauses["break"]);
            var final_clause = (clauses["final"]);
            var when_clause = (clauses["when"]);
            var unless_clause = (clauses["unless"]);
            var first = (seqs[0]);
            var length = ((first["length"]) || first);
            var loop_func = (when_clause ? (((function() {
                return ((when_clause && unless_clause) ? (create_loop_func__variant__when__variant__unless(func, seqs, when_clause, unless_clause)) : (create_loop_func__variant__when(func, seqs, when_clause)));
            })["apply"])(this, [])) : (unless_clause ? (((function() {
                return (create_loop_func__variant__unless(func, seqs, unless_clause));
            })["apply"])(this, [])) : (((function() {
                return (create_loop_func(func, seqs));
            })["apply"])(this, []))));
            return (break_clause ? (((function() {
                return (for_loop__variant__break__variant__local(loop_func, length, (create_loop_func(break_clause, seqs))));
            })["apply"])(this, [])) : (final_clause ? (((function() {
                return (for_loop__variant__final__variant__local(loop_func, length, (create_loop_func(final_clause, seqs))));
            })["apply"])(this, [])) : (((function() {
                return (for_loop__variant__local(loop_func, length));
            })["apply"])(this, []))));
        }));
        var create_loop_func = (function(func, seqs) {
            return (function(i) {
                var elements = [];
                var inner_loop_func = (create_inner_loop(seqs, i, elements));
                (for_loop__variant__local(inner_loop_func, (seqs["length"])));
                return ((func["apply"])(this, elements));
            });
        });
        var create_loop_func__variant__when = (function(func, seqs, when_clause) {
            return (function(i) {
                var elements = [];
                var inner_loop_func = (create_inner_loop(seqs, i, elements));
                (for_loop__variant__local(inner_loop_func, (seqs["length"])));
                return (((when_clause["apply"])(this, elements)) ? (((function() {
                    return ((func["apply"])(this, elements));
                })["apply"])(this, [])) : null);
            });
        });
        var create_loop_func__variant__unless = (function(func, seqs, unless_clause) {
            return (function(i) {
                var elements = [];
                var inner_loop_func = (create_inner_loop(seqs, i, elements));
                (for_loop__variant__local(inner_loop_func, (seqs["length"])));
                return (((unless_clause["apply"])(this, elements)) ? null : (((function() {
                    return ((func["apply"])(this, elements));
                })["apply"])(this, [])));
            });
        });
        var create_loop_func__variant__when__variant__unless = (function(func, seqs, when_clause, unless_clause) {
            return (function(i) {
                var elements = [];
                var inner_loop_func = (create_inner_loop(seqs, i, elements));
                (for_loop__variant__local(inner_loop_func, (seqs["length"])));
                var when__predicate__ = ((when_clause["apply"])(this, elements));
                var unless__predicate__ = ((unless_clause["apply"])(this, elements));
                return ((when__predicate__ && (!(unless__predicate__))) ? (((function() {
                    return ((func["apply"])(this, elements));
                })["apply"])(this, [])) : null);
            });
        });
        var create_inner_loop = (function(seqs, i, elements) {
            return (function(j) {
                var vec = (seqs[j]);
                var ref = (vec[i]);
                var current = ((js_undefined__predicate__(ref)) ? i : ref);
                return ((elements[j]) = current);
            });
        });
        var for_loop__variant__local = function(f, l) {
            for (var i = 0; i < l; i++) {
                f(i);
            }
        };
        var for_loop__variant__break__variant__local = function(f, l, b) {
            for (var i = 0; i < l; i++) {
                if (b(i)) break;
                else f(i);
            }
        };
        var for_loop__variant__final__variant__local = function(f, l, b) {
            for (var i = 0; i < l; i++) {
                if (b(i)) {
                    f(i);
                    break;
                } else f(i);
            }
        };
        return false;
    })());;
    (js_displayln((js_for__variant__first((function(i) {
        return i;
    }), [
        [1, 2, 3, 4, 5]
    ], {
        "when": (function(i) {
            return (i > 25);
        })
    }))));
    (js_displayln((js_for__variant__vector((function(i) {
        return i;
    }), [
        [1, 2, 3, 4, 5]
    ], {
        "when": (function(i) {
            return (i > 2);
        })
    }))));
    (js_displayln((js_for__variant__vector((function(i) {
        return i;
    }), [
        ["hi", "bye", ""]
    ], {
        "when": (function(i) {
            return (!(("" === i)));
        })
    }))));
    (js_displayln(((function() {
        var i = 10;
        var j = (i + 10);
        return (j + i);
    })())));
    return false;
})());