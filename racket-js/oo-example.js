var animal__object__;
var lion__object__;
var lion_like;
((function() {
    var cat_like = (function(__object__) {
        return ((function() {
            var _internal_parent = __object__;
            var _internal_constructor = (function(_internal_param_hash) {
                var self = this;
                ((self["_params"]) = _internal_param_hash);
                (bind_optional_field(_internal_param_hash, "food", []));
                (bind_private_field(self, _internal_param_hash, "_food", (self["_params"]["food"])));
                ((__object__["call"])(self, _internal_param_hash));
                return self;
            });
            (bind_parent(_internal_constructor, __object__));
            (bind_public_method(_internal_constructor, "get-food", (function() {
                var self = this;
                return (self["(_food)"]);
            })));
            (bind_public_method(_internal_constructor, "add-food:", (function(f) {
                var self = this;
                return (((self["(_food)"])["push"])(f));
            })));
            (bind_public_method(_internal_constructor, "eat", (function() {
                var self = this;
                return (js_displayln((self["(_food)"])));
            })));
            (bind_override_method(_internal_constructor, "speak", (function() {
                var self = this;
                ((((_internal_parent["prototype"])["speak"])["apply"])(self, []));
                return (js_displayln("meow"));
            })));
            return _internal_constructor;
        })());
    });
    (lion_like = (function(__object__) {
        return ((function() {
            var _internal_parent = __object__;
            var _internal_constructor = (function(_internal_param_hash) {
                var self = this;
                ((self["_params"]) = _internal_param_hash);
                ((__object__["call"])(self, _internal_param_hash));
                return self;
            });
            (bind_parent(_internal_constructor, __object__));
            (bind_override_method(_internal_constructor, "eat", (function() {
                var self = this;
                return (js_displayln("hello"));
            })));
            return _internal_constructor;
        })());
    }));
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
    var public_method_error;
    var override_method_error;
    var bind_public_method;
    var bind_private_method;
    var bind_override_method;
    var bind_public_field;
    var bind_parent_field;
    var bind_private_field;
    var bind_public_init_field;
    var bind_optional_field;
    var verify_init_field;
    var bind_parent;
    var make_class;
    var js_object__predicate__;
    ((function() {
        (js_object__predicate__ = (function(v) {
            return ((typeof(v)) === "object");
        }));
        (public_method_error = (function(name) {
            return (js_error(("class*: superclass already contains method\n" + "method name: " + name)));
        }));
        (override_method_error = (function(name) {
            return (js_error(("class*: superclass does not provide an expected method for everride\n" + "override name: " + name)));
        }));
        var init_field_error = (function(name) {
            return (js_error(("instantiate: no argument for required init variable\n" + "required: " + name)));
        });
        (bind_parent = (function(obj, parent) {
            var parent_prototype = (parent["prototype"]);
            return ((obj["prototype"]) = ((Object["create"])(parent_prototype)));
        }));
        (bind_private_method = (function(obj, name, func) {
            return (((obj["prototype"])[("(" + name + ")")]) = func);
        }));
        (bind_public_method = (function(obj, name, func) {
            return ((js_undefined__predicate__(((obj["prototype"])[name]))) ? (((obj["prototype"])[name]) = func) : (public_method_error(name)));
        }));
        (bind_public_init_field = (function(obj, params, name) {
            var init_param = (params[name]);
            return ((js_undefined__predicate__(init_param)) ? (init_field_error(name)) : ((obj[name]) = init_param));
        }));
        (bind_override_method = (function(obj, name, func) {
            return ((js_undefined__predicate__(((obj["prototype"])[name]))) ? (override_method_error(name)) : (((obj["prototype"])[name]) = func));
        }));
        (bind_public_field = (function(obj, params, name, value) {
            var init_param = (params[name]);
            return ((js_undefined__predicate__(init_param)) ? ((obj[name]) = value) : ((obj[name]) = init_param));
        }));
        (bind_private_field = (function(obj, params, name, value) {
            return (bind_public_field(obj, params, ("(" + name + ")"), value));
        }));
        (bind_optional_field = (function(params, name, value) {
            var init_param = (params[name]);
            return ((js_undefined__predicate__(init_param)) ? (((function() {
                return ((params[name]) = value);
            })["apply"])(this, [])) : null);
        }));
        (bind_parent_field = (function(params, name, value) {
            return ((js_undefined__predicate__((params[name]))) ? (((function() {
                return ((params[name]) = value);
            })["apply"])(this, [])) : null);
        }));
        (verify_init_field = (function(params, name) {
            var init_param = (params[name]);
            return ((js_undefined__predicate__(init_param)) ? (((function() {
                return (init_field_error(name));
            })["apply"])(this, [])) : null);
        }));
        (make_class = (function(properties) {
            var constructor = (function(params) {
                var self = this;
                ((self["_private"]) = {});
                ((local_closure["apply"])(this, [params]));
                (js_for((function(name) {
                    return (verify_init_field(params, name));
                }), [init_names], {}));
                (js_for((function(field) {
                    var name = (field[0]);
                    var value = (field[1]);
                    return (bind_optional_field(params, name, value));
                }), [optional_fields], {}));
                (js_for((function(field) {
                    var name = (field[0]);
                    var value = (field[1]);
                    return (bind_public_field(self, params, name, value));
                }), [public_fields], {}));
                (js_for((function(name) {
                    return (bind_public_init_field(self, params, name));
                }), [public_init_names], {}));
                ((field_closure["apply"])(this, [params]));
                (js_for((function(field) {
                    var name = (field[0]);
                    var value = (field[1]);
                    return (bind_parent_field(params, name, value));
                }), [parent_fields], {}));
                ((Object["call"])(self, params));
                return self;
            });
            var parent = (properties["parent"]);
            var parent_fields = (properties["parent-fields"]);
            var init_names = (properties["init-names"]);
            var public_fields = (properties["public-fields"]);
            var public_init_names = (properties["public-init-names"]);
            var optional_fields = (properties["optional-fields"]);
            var override_methods = (properties["override-methods"]);
            var public_methods = (properties["public-methods"]);
            var local_closure = (properties["local-closure"]);
            var field_closure = (properties["field-closure"]);
            (bind_parent(constructor, parent));
            (js_for((function(method) {
                var name = (method[0]);
                var value = (method[1]);
                return (bind_public_method(constructor, name, value));
            }), [public_methods], {}));
            (js_for((function(method) {
                var name = (method[0]);
                var value = (method[1]);
                return (bind_override_method(constructor, name, value));
            }), [override_methods], {}));
            return constructor;
        }));
        return false;
    })());;
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
    (animal__object__ = ((function() {
        var _internal_parent = Object;
        var _internal_constructor = (function(_internal_param_hash) {
            var self = this;
            ((self["_params"]) = _internal_param_hash);
            ((Object["call"])(self, _internal_param_hash));
            return self;
        });
        (bind_parent(_internal_constructor, Object));
        (bind_public_method(_internal_constructor, "speak", (function() {
            var self = this;
            return (js_displayln("abstract called"));
        })));
        return _internal_constructor;
    })()));
    var dog__object__ = ((function() {
        var _internal_parent = animal__object__;
        var _internal_constructor = (function(_internal_param_hash) {
            var self = this;
            ((self["_params"]) = _internal_param_hash);
            ((animal__object__["call"])(self, _internal_param_hash));
            return self;
        });
        (bind_parent(_internal_constructor, animal__object__));
        (bind_override_method(_internal_constructor, "speak", (function() {
            var self = this;
            return (js_displayln("bark"));
        })));
        return _internal_constructor;
    })());
    (lion__object__ = (lion_like((cat_like(animal__object__)))));
    var lion = (new lion__object__({}));
    ((lion["speak"])());
    return false;
})());