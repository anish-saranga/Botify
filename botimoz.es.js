function fD(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
var C0 = { exports: {} }, wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function dD() {
  if (lR) return wt;
  lR = 1;
  var D = Symbol.for("react.element"), O = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), et = Symbol.for("react.profiler"), ze = Symbol.for("react.provider"), S = Symbol.for("react.context"), vt = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), oe = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), te = Symbol.iterator;
  function de(k) {
    return k === null || typeof k != "object" ? null : (k = te && k[te] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, me = Object.assign, tt = {};
  function Ye(k, B, je) {
    this.props = k, this.context = B, this.refs = tt, this.updater = je || Z;
  }
  Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(k, B) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, B, "setState");
  }, Ye.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function bt() {
  }
  bt.prototype = Ye.prototype;
  function Ve(k, B, je) {
    this.props = k, this.context = B, this.refs = tt, this.updater = je || Z;
  }
  var Ie = Ve.prototype = new bt();
  Ie.constructor = Ve, me(Ie, Ye.prototype), Ie.isPureReactComponent = !0;
  var ft = Array.isArray, De = Object.prototype.hasOwnProperty, lt = { current: null }, Be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function tn(k, B, je) {
    var Qe, ut = {}, it = null, Et = null;
    if (B != null) for (Qe in B.ref !== void 0 && (Et = B.ref), B.key !== void 0 && (it = "" + B.key), B) De.call(B, Qe) && !Be.hasOwnProperty(Qe) && (ut[Qe] = B[Qe]);
    var dt = arguments.length - 2;
    if (dt === 1) ut.children = je;
    else if (1 < dt) {
      for (var pt = Array(dt), nn = 0; nn < dt; nn++) pt[nn] = arguments[nn + 2];
      ut.children = pt;
    }
    if (k && k.defaultProps) for (Qe in dt = k.defaultProps, dt) ut[Qe] === void 0 && (ut[Qe] = dt[Qe]);
    return { $$typeof: D, type: k, key: it, ref: Et, props: ut, _owner: lt.current };
  }
  function ln(k, B) {
    return { $$typeof: D, type: k.type, key: B, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Gt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === D;
  }
  function Ot(k) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(je) {
      return B[je];
    });
  }
  var Rn = /\/+/g;
  function Ae(k, B) {
    return typeof k == "object" && k !== null && k.key != null ? Ot("" + k.key) : B.toString(36);
  }
  function rt(k, B, je, Qe, ut) {
    var it = typeof k;
    (it === "undefined" || it === "boolean") && (k = null);
    var Et = !1;
    if (k === null) Et = !0;
    else switch (it) {
      case "string":
      case "number":
        Et = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case D:
          case O:
            Et = !0;
        }
    }
    if (Et) return Et = k, ut = ut(Et), k = Qe === "" ? "." + Ae(Et, 0) : Qe, ft(ut) ? (je = "", k != null && (je = k.replace(Rn, "$&/") + "/"), rt(ut, B, je, "", function(nn) {
      return nn;
    })) : ut != null && (Gt(ut) && (ut = ln(ut, je + (!ut.key || Et && Et.key === ut.key ? "" : ("" + ut.key).replace(Rn, "$&/") + "/") + k)), B.push(ut)), 1;
    if (Et = 0, Qe = Qe === "" ? "." : Qe + ":", ft(k)) for (var dt = 0; dt < k.length; dt++) {
      it = k[dt];
      var pt = Qe + Ae(it, dt);
      Et += rt(it, B, je, pt, ut);
    }
    else if (pt = de(k), typeof pt == "function") for (k = pt.call(k), dt = 0; !(it = k.next()).done; ) it = it.value, pt = Qe + Ae(it, dt++), Et += rt(it, B, je, pt, ut);
    else if (it === "object") throw B = String(k), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Et;
  }
  function Ft(k, B, je) {
    if (k == null) return k;
    var Qe = [], ut = 0;
    return rt(k, Qe, "", "", function(it) {
      return B.call(je, it, ut++);
    }), Qe;
  }
  function Dt(k) {
    if (k._status === -1) {
      var B = k._result;
      B = B(), B.then(function(je) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = je);
      }, function(je) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = je);
      }), k._status === -1 && (k._status = 0, k._result = B);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ge = { current: null }, ee = { transition: null }, ke = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: ee, ReactCurrentOwner: lt };
  function le() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: Ft, forEach: function(k, B, je) {
    Ft(k, function() {
      B.apply(this, arguments);
    }, je);
  }, count: function(k) {
    var B = 0;
    return Ft(k, function() {
      B++;
    }), B;
  }, toArray: function(k) {
    return Ft(k, function(B) {
      return B;
    }) || [];
  }, only: function(k) {
    if (!Gt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, wt.Component = Ye, wt.Fragment = w, wt.Profiler = et, wt.PureComponent = Ve, wt.StrictMode = ce, wt.Suspense = ne, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, wt.act = le, wt.cloneElement = function(k, B, je) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Qe = me({}, k.props), ut = k.key, it = k.ref, Et = k._owner;
    if (B != null) {
      if (B.ref !== void 0 && (it = B.ref, Et = lt.current), B.key !== void 0 && (ut = "" + B.key), k.type && k.type.defaultProps) var dt = k.type.defaultProps;
      for (pt in B) De.call(B, pt) && !Be.hasOwnProperty(pt) && (Qe[pt] = B[pt] === void 0 && dt !== void 0 ? dt[pt] : B[pt]);
    }
    var pt = arguments.length - 2;
    if (pt === 1) Qe.children = je;
    else if (1 < pt) {
      dt = Array(pt);
      for (var nn = 0; nn < pt; nn++) dt[nn] = arguments[nn + 2];
      Qe.children = dt;
    }
    return { $$typeof: D, type: k.type, key: ut, ref: it, props: Qe, _owner: Et };
  }, wt.createContext = function(k) {
    return k = { $$typeof: S, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: ze, _context: k }, k.Consumer = k;
  }, wt.createElement = tn, wt.createFactory = function(k) {
    var B = tn.bind(null, k);
    return B.type = k, B;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(k) {
    return { $$typeof: vt, render: k };
  }, wt.isValidElement = Gt, wt.lazy = function(k) {
    return { $$typeof: Ke, _payload: { _status: -1, _result: k }, _init: Dt };
  }, wt.memo = function(k, B) {
    return { $$typeof: oe, type: k, compare: B === void 0 ? null : B };
  }, wt.startTransition = function(k) {
    var B = ee.transition;
    ee.transition = {};
    try {
      k();
    } finally {
      ee.transition = B;
    }
  }, wt.unstable_act = le, wt.useCallback = function(k, B) {
    return ge.current.useCallback(k, B);
  }, wt.useContext = function(k) {
    return ge.current.useContext(k);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(k) {
    return ge.current.useDeferredValue(k);
  }, wt.useEffect = function(k, B) {
    return ge.current.useEffect(k, B);
  }, wt.useId = function() {
    return ge.current.useId();
  }, wt.useImperativeHandle = function(k, B, je) {
    return ge.current.useImperativeHandle(k, B, je);
  }, wt.useInsertionEffect = function(k, B) {
    return ge.current.useInsertionEffect(k, B);
  }, wt.useLayoutEffect = function(k, B) {
    return ge.current.useLayoutEffect(k, B);
  }, wt.useMemo = function(k, B) {
    return ge.current.useMemo(k, B);
  }, wt.useReducer = function(k, B, je) {
    return ge.current.useReducer(k, B, je);
  }, wt.useRef = function(k) {
    return ge.current.useRef(k);
  }, wt.useState = function(k) {
    return ge.current.useState(k);
  }, wt.useSyncExternalStore = function(k, B, je) {
    return ge.current.useSyncExternalStore(k, B, je);
  }, wt.useTransition = function() {
    return ge.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var Zp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Zp.exports;
var uR;
function pD() {
  return uR || (uR = 1, function(D, O) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = "18.3.1", ce = Symbol.for("react.element"), et = Symbol.for("react.portal"), ze = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), vt = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), oe = Symbol.for("react.context"), Ke = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), de = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), tt = Symbol.for("react.offscreen"), Ye = Symbol.iterator, bt = "@@iterator";
      function Ve(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Ye && h[Ye] || h[bt];
        return typeof C == "function" ? C : null;
      }
      var Ie = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ft = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, lt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Be = {}, tn = null;
      function ln(h) {
        tn = h;
      }
      Be.setExtraStackFrame = function(h) {
        tn = h;
      }, Be.getCurrentStack = null, Be.getStackAddendum = function() {
        var h = "";
        tn && (h += tn);
        var C = Be.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Gt = !1, Ot = !1, Rn = !1, Ae = !1, rt = !1, Ft = {
        ReactCurrentDispatcher: Ie,
        ReactCurrentBatchConfig: ft,
        ReactCurrentOwner: lt
      };
      Ft.ReactDebugCurrentFrame = Be, Ft.ReactCurrentActQueue = De;
      function Dt(h) {
        {
          for (var C = arguments.length, A = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            A[H - 1] = arguments[H];
          ee("warn", h, A);
        }
      }
      function ge(h) {
        {
          for (var C = arguments.length, A = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            A[H - 1] = arguments[H];
          ee("error", h, A);
        }
      }
      function ee(h, C, A) {
        {
          var H = Ft.ReactDebugCurrentFrame, X = H.getStackAddendum();
          X !== "" && (C += "%s", A = A.concat([X]));
          var He = A.map(function(ue) {
            return String(ue);
          });
          He.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, He);
        }
      }
      var ke = {};
      function le(h, C) {
        {
          var A = h.constructor, H = A && (A.displayName || A.name) || "ReactClass", X = H + "." + C;
          if (ke[X])
            return;
          ge("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), ke[X] = !0;
        }
      }
      var k = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, A) {
          le(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, A, H) {
          le(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, A, H) {
          le(h, "setState");
        }
      }, B = Object.assign, je = {};
      Object.freeze(je);
      function Qe(h, C, A) {
        this.props = h, this.context = C, this.refs = je, this.updater = A || k;
      }
      Qe.prototype.isReactComponent = {}, Qe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Qe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, it = function(h, C) {
          Object.defineProperty(Qe.prototype, h, {
            get: function() {
              Dt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Et in ut)
          ut.hasOwnProperty(Et) && it(Et, ut[Et]);
      }
      function dt() {
      }
      dt.prototype = Qe.prototype;
      function pt(h, C, A) {
        this.props = h, this.context = C, this.refs = je, this.updater = A || k;
      }
      var nn = pt.prototype = new dt();
      nn.constructor = pt, B(nn, Qe.prototype), nn.isPureReactComponent = !0;
      function hr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Br = Array.isArray;
      function hn(h) {
        return Br(h);
      }
      function Wn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, A = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return A;
        }
      }
      function Pn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function Dn(h) {
        if (Pn(h))
          return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wn(h)), zn(h);
      }
      function $r(h, C, A) {
        var H = h.displayName;
        if (H)
          return H;
        var X = C.displayName || C.name || "";
        return X !== "" ? A + "(" + X + ")" : A;
      }
      function Ir(h) {
        return h.displayName || "Context";
      }
      function Gn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ze:
            return "Fragment";
          case et:
            return "Portal";
          case vt:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case de:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case oe:
              var C = h;
              return Ir(C) + ".Consumer";
            case ne:
              var A = h;
              return Ir(A._context) + ".Provider";
            case Ke:
              return $r(h, h.render, "ForwardRef");
            case Z:
              var H = h.displayName || null;
              return H !== null ? H : Gn(h.type) || "Memo";
            case me: {
              var X = h, He = X._payload, ue = X._init;
              try {
                return Gn(ue(He));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yr, da, rr;
      rr = {};
      function Qr(h) {
        if (mr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function mn(h) {
        if (mr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function br(h, C) {
        var A = function() {
          yr || (yr = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        A.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: A,
          configurable: !0
        });
      }
      function di(h, C) {
        var A = function() {
          da || (da = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        A.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: A,
          configurable: !0
        });
      }
      function pa(h) {
        if (typeof h.ref == "string" && lt.current && h.__self && lt.current.stateNode !== h.__self) {
          var C = Gn(lt.current.type);
          rr[C] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), rr[C] = !0);
        }
      }
      var re = function(h, C, A, H, X, He, ue) {
        var Ue = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ce,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: A,
          props: ue,
          // Record the component responsible for creating this element.
          _owner: He
        };
        return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ue, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Ue, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
      };
      function Oe(h, C, A) {
        var H, X = {}, He = null, ue = null, Ue = null, ht = null;
        if (C != null) {
          Qr(C) && (ue = C.ref, pa(C)), mn(C) && (Dn(C.key), He = "" + C.key), Ue = C.__self === void 0 ? null : C.__self, ht = C.__source === void 0 ? null : C.__source;
          for (H in C)
            mr.call(C, H) && !Yr.hasOwnProperty(H) && (X[H] = C[H]);
        }
        var kt = arguments.length - 2;
        if (kt === 1)
          X.children = A;
        else if (kt > 1) {
          for (var Zt = Array(kt), Wt = 0; Wt < kt; Wt++)
            Zt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Zt), X.children = Zt;
        }
        if (h && h.defaultProps) {
          var Jt = h.defaultProps;
          for (H in Jt)
            X[H] === void 0 && (X[H] = Jt[H]);
        }
        if (He || ue) {
          var rn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          He && br(X, rn), ue && di(X, rn);
        }
        return re(h, He, ue, Ue, ht, lt.current, X);
      }
      function ot(h, C) {
        var A = re(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return A;
      }
      function At(h, C, A) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, X = B({}, h.props), He = h.key, ue = h.ref, Ue = h._self, ht = h._source, kt = h._owner;
        if (C != null) {
          Qr(C) && (ue = C.ref, kt = lt.current), mn(C) && (Dn(C.key), He = "" + C.key);
          var Zt;
          h.type && h.type.defaultProps && (Zt = h.type.defaultProps);
          for (H in C)
            mr.call(C, H) && !Yr.hasOwnProperty(H) && (C[H] === void 0 && Zt !== void 0 ? X[H] = Zt[H] : X[H] = C[H]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          X.children = A;
        else if (Wt > 1) {
          for (var Jt = Array(Wt), rn = 0; rn < Wt; rn++)
            Jt[rn] = arguments[rn + 2];
          X.children = Jt;
        }
        return re(h.type, He, ue, Ue, ht, kt, X);
      }
      function Ht(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ce;
      }
      var kn = ".", yn = ":";
      function gr(h) {
        var C = /[=:]/g, A = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(X) {
          return A[X];
        });
        return "$" + H;
      }
      var Qt = !1, xr = /\/+/g;
      function Pt(h) {
        return h.replace(xr, "$&/");
      }
      function Vt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Dn(h.key), gr("" + h.key)) : C.toString(36);
      }
      function ei(h, C, A, H, X) {
        var He = typeof h;
        (He === "undefined" || He === "boolean") && (h = null);
        var ue = !1;
        if (h === null)
          ue = !0;
        else
          switch (He) {
            case "string":
            case "number":
              ue = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ce:
                case et:
                  ue = !0;
              }
          }
        if (ue) {
          var Ue = h, ht = X(Ue), kt = H === "" ? kn + Vt(Ue, 0) : H;
          if (hn(ht)) {
            var Zt = "";
            kt != null && (Zt = Pt(kt) + "/"), ei(ht, C, Zt, "", function(qf) {
              return qf;
            });
          } else ht != null && (Ht(ht) && (ht.key && (!Ue || Ue.key !== ht.key) && Dn(ht.key), ht = ot(
            ht,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            A + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ht.key && (!Ue || Ue.key !== ht.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Pt("" + ht.key) + "/"
            ) : "") + kt
          )), C.push(ht));
          return 1;
        }
        var Wt, Jt, rn = 0, Tt = H === "" ? kn : H + yn;
        if (hn(h))
          for (var ji = 0; ji < h.length; ji++)
            Wt = h[ji], Jt = Tt + Vt(Wt, ji), rn += ei(Wt, C, A, Jt, X);
        else {
          var Wu = Ve(h);
          if (typeof Wu == "function") {
            var Jo = h;
            Wu === Jo.entries && (Qt || Dt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var Gf = Wu.call(Jo), ai, es = 0; !(ai = Gf.next()).done; )
              Wt = ai.value, Jt = Tt + Vt(Wt, es++), rn += ei(Wt, C, A, Jt, X);
          } else if (He === "object") {
            var ts = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (ts === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : ts) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function ka(h, C, A) {
        if (h == null)
          return h;
        var H = [], X = 0;
        return ei(h, H, "", "", function(He) {
          return C.call(A, He, X++);
        }), H;
      }
      function sl(h) {
        var C = 0;
        return ka(h, function() {
          C++;
        }), C;
      }
      function Gl(h, C, A) {
        ka(h, function() {
          C.apply(this, arguments);
        }, A);
      }
      function Au(h) {
        return ka(h, function(C) {
          return C;
        }) || [];
      }
      function Ni(h) {
        if (!Ht(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function cl(h) {
        var C = {
          $$typeof: oe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ne,
          _context: C
        };
        var A = !1, H = !1, X = !1;
        {
          var He = {
            $$typeof: oe,
            _context: C
          };
          Object.defineProperties(He, {
            Provider: {
              get: function() {
                return H || (H = !0, ge("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ue) {
                C.Provider = ue;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ue) {
                C._currentValue = ue;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ue) {
                C._currentValue2 = ue;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ue) {
                C._threadCount = ue;
              }
            },
            Consumer: {
              get: function() {
                return A || (A = !0, ge("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ue) {
                X || (Dt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ue), X = !0);
              }
            }
          }), C.Consumer = He;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var va = -1, pi = 0, ha = 1, ti = 2;
      function _r(h) {
        if (h._status === va) {
          var C = h._result, A = C();
          if (A.then(function(He) {
            if (h._status === pi || h._status === va) {
              var ue = h;
              ue._status = ha, ue._result = He;
            }
          }, function(He) {
            if (h._status === pi || h._status === va) {
              var ue = h;
              ue._status = ti, ue._result = He;
            }
          }), h._status === va) {
            var H = h;
            H._status = pi, H._result = A;
          }
        }
        if (h._status === ha) {
          var X = h._result;
          return X === void 0 && ge(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || ge(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function ma(h) {
        var C = {
          // We use these fields to store the result.
          _status: va,
          _result: h
        }, A = {
          $$typeof: me,
          _payload: C,
          _init: _r
        };
        {
          var H, X;
          Object.defineProperties(A, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(He) {
                ge("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = He, Object.defineProperty(A, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(He) {
                ge("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = He, Object.defineProperty(A, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return A;
      }
      function vi(h) {
        h != null && h.$$typeof === Z ? ge("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ge("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ge("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ge("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ke,
          render: h
        };
        {
          var A;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(H) {
              A = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var hi;
      hi = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ze || h === vt || rt || h === S || h === te || h === de || Ae || h === tt || Gt || Ot || Rn || typeof h == "object" && h !== null && (h.$$typeof === me || h.$$typeof === Z || h.$$typeof === ne || h.$$typeof === oe || h.$$typeof === Ke || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === hi || h.getModuleId !== void 0));
      }
      function Q(h, C) {
        R(h) || ge("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var A = {
          $$typeof: Z,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(A, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(X) {
              H = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return A;
      }
      function K() {
        var h = Ie.current;
        return h === null && ge(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function be(h) {
        var C = K();
        if (h._context !== void 0) {
          var A = h._context;
          A.Consumer === h ? ge("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : A.Provider === h && ge("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function yt(h) {
        var C = K();
        return C.useState(h);
      }
      function Ct(h, C, A) {
        var H = K();
        return H.useReducer(h, C, A);
      }
      function Fe(h) {
        var C = K();
        return C.useRef(h);
      }
      function st(h, C) {
        var A = K();
        return A.useEffect(h, C);
      }
      function Un(h, C) {
        var A = K();
        return A.useInsertionEffect(h, C);
      }
      function Xt(h, C) {
        var A = K();
        return A.useLayoutEffect(h, C);
      }
      function un(h, C) {
        var A = K();
        return A.useCallback(h, C);
      }
      function Sr(h, C) {
        var A = K();
        return A.useMemo(h, C);
      }
      function mi(h, C, A) {
        var H = K();
        return H.useImperativeHandle(h, C, A);
      }
      function Lt(h, C) {
        {
          var A = K();
          return A.useDebugValue(h, C);
        }
      }
      function qn() {
        var h = K();
        return h.useTransition();
      }
      function Dr(h) {
        var C = K();
        return C.useDeferredValue(h);
      }
      function ct() {
        var h = K();
        return h.useId();
      }
      function Oa(h, C, A) {
        var H = K();
        return H.useSyncExternalStore(h, C, A);
      }
      var fl = 0, ju, dl, Wr, qo, kr, Ko, Xo;
      function nc() {
      }
      nc.__reactDisabledLog = !0;
      function Fu() {
        {
          if (fl === 0) {
            ju = console.log, dl = console.info, Wr = console.warn, qo = console.error, kr = console.group, Ko = console.groupCollapsed, Xo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: nc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          fl++;
        }
      }
      function pl() {
        {
          if (fl--, fl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: B({}, h, {
                value: ju
              }),
              info: B({}, h, {
                value: dl
              }),
              warn: B({}, h, {
                value: Wr
              }),
              error: B({}, h, {
                value: qo
              }),
              group: B({}, h, {
                value: kr
              }),
              groupCollapsed: B({}, h, {
                value: Ko
              }),
              groupEnd: B({}, h, {
                value: Xo
              })
            });
          }
          fl < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ni = Ft.ReactCurrentDispatcher, Or;
      function vl(h, C, A) {
        {
          if (Or === void 0)
            try {
              throw Error();
            } catch (X) {
              var H = X.stack.trim().match(/\n( *(at )?)/);
              Or = H && H[1] || "";
            }
          return `
` + Or + h;
        }
      }
      var hl = !1, ml;
      {
        var Hu = typeof WeakMap == "function" ? WeakMap : Map;
        ml = new Hu();
      }
      function Pu(h, C) {
        if (!h || hl)
          return "";
        {
          var A = ml.get(h);
          if (A !== void 0)
            return A;
        }
        var H;
        hl = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var He;
        He = ni.current, ni.current = null, Fu();
        try {
          if (C) {
            var ue = function() {
              throw Error();
            };
            if (Object.defineProperty(ue.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ue, []);
              } catch (Tt) {
                H = Tt;
              }
              Reflect.construct(h, [], ue);
            } else {
              try {
                ue.call();
              } catch (Tt) {
                H = Tt;
              }
              h.call(ue.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Tt) {
              H = Tt;
            }
            h();
          }
        } catch (Tt) {
          if (Tt && H && typeof Tt.stack == "string") {
            for (var Ue = Tt.stack.split(`
`), ht = H.stack.split(`
`), kt = Ue.length - 1, Zt = ht.length - 1; kt >= 1 && Zt >= 0 && Ue[kt] !== ht[Zt]; )
              Zt--;
            for (; kt >= 1 && Zt >= 0; kt--, Zt--)
              if (Ue[kt] !== ht[Zt]) {
                if (kt !== 1 || Zt !== 1)
                  do
                    if (kt--, Zt--, Zt < 0 || Ue[kt] !== ht[Zt]) {
                      var Wt = `
` + Ue[kt].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && ml.set(h, Wt), Wt;
                    }
                  while (kt >= 1 && Zt >= 0);
                break;
              }
          }
        } finally {
          hl = !1, ni.current = He, pl(), Error.prepareStackTrace = X;
        }
        var Jt = h ? h.displayName || h.name : "", rn = Jt ? vl(Jt) : "";
        return typeof h == "function" && ml.set(h, rn), rn;
      }
      function zi(h, C, A) {
        return Pu(h, !1);
      }
      function Wf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function yi(h, C, A) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Pu(h, Wf(h));
        if (typeof h == "string")
          return vl(h);
        switch (h) {
          case te:
            return vl("Suspense");
          case de:
            return vl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ke:
              return zi(h.render);
            case Z:
              return yi(h.type, C, A);
            case me: {
              var H = h, X = H._payload, He = H._init;
              try {
                return yi(He(X), C, A);
              } catch {
              }
            }
          }
        return "";
      }
      var Mt = {}, Vu = Ft.ReactDebugCurrentFrame;
      function ql(h) {
        if (h) {
          var C = h._owner, A = yi(h.type, h._source, C ? C.type : null);
          Vu.setExtraStackFrame(A);
        } else
          Vu.setExtraStackFrame(null);
      }
      function Bu(h, C, A, H, X) {
        {
          var He = Function.call.bind(mr);
          for (var ue in h)
            if (He(h, ue)) {
              var Ue = void 0;
              try {
                if (typeof h[ue] != "function") {
                  var ht = Error((H || "React class") + ": " + A + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ht.name = "Invariant Violation", ht;
                }
                Ue = h[ue](C, ue, H, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (kt) {
                Ue = kt;
              }
              Ue && !(Ue instanceof Error) && (ql(X), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", A, ue, typeof Ue), ql(null)), Ue instanceof Error && !(Ue.message in Mt) && (Mt[Ue.message] = !0, ql(X), ge("Failed %s type: %s", A, Ue.message), ql(null));
            }
        }
      }
      function Rt(h) {
        if (h) {
          var C = h._owner, A = yi(h.type, h._source, C ? C.type : null);
          ln(A);
        } else
          ln(null);
      }
      var $u;
      $u = !1;
      function Iu() {
        if (lt.current) {
          var h = Gn(lt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Xe(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), A = h.lineNumber;
          return `

Check your code at ` + C + ":" + A + ".";
        }
        return "";
      }
      function Kl(h) {
        return h != null ? Xe(h.__source) : "";
      }
      var gn = {};
      function Gr(h) {
        var C = Iu();
        if (!C) {
          var A = typeof h == "string" ? h : h.displayName || h.name;
          A && (C = `

Check the top-level render call using <` + A + ">.");
        }
        return C;
      }
      function Lr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var A = Gr(C);
          if (!gn[A]) {
            gn[A] = !0;
            var H = "";
            h && h._owner && h._owner !== lt.current && (H = " It was passed a child from " + Gn(h._owner.type) + "."), Rt(h), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, H), Rt(null);
          }
        }
      }
      function yl(h, C) {
        if (typeof h == "object") {
          if (hn(h))
            for (var A = 0; A < h.length; A++) {
              var H = h[A];
              Ht(H) && Lr(H, C);
            }
          else if (Ht(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = Ve(h);
            if (typeof X == "function" && X !== h.entries)
              for (var He = X.call(h), ue; !(ue = He.next()).done; )
                Ht(ue.value) && Lr(ue.value, C);
          }
        }
      }
      function Tn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var A;
          if (typeof C == "function")
            A = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ke || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === Z))
            A = C.propTypes;
          else
            return;
          if (A) {
            var H = Gn(C);
            Bu(A, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !$u) {
            $u = !0;
            var X = Gn(C);
            ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Bt(h) {
        {
          for (var C = Object.keys(h.props), A = 0; A < C.length; A++) {
            var H = C[A];
            if (H !== "children" && H !== "key") {
              Rt(h), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), Rt(null);
              break;
            }
          }
          h.ref !== null && (Rt(h), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
        }
      }
      function rc(h, C, A) {
        var H = R(h);
        if (!H) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = Kl(C);
          He ? X += He : X += Iu();
          var ue;
          h === null ? ue = "null" : hn(h) ? ue = "array" : h !== void 0 && h.$$typeof === ce ? (ue = "<" + (Gn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof h, ge("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, X);
        }
        var Ue = Oe.apply(this, arguments);
        if (Ue == null)
          return Ue;
        if (H)
          for (var ht = 2; ht < arguments.length; ht++)
            yl(arguments[ht], h);
        return h === ze ? Bt(Ue) : Tn(Ue), Ue;
      }
      var qr = !1;
      function Kn(h) {
        var C = rc.bind(null, h);
        return C.type = h, qr || (qr = !0, Dt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Dt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function gi(h, C, A) {
        for (var H = At.apply(this, arguments), X = 2; X < arguments.length; X++)
          yl(arguments[X], H.type);
        return Tn(H), H;
      }
      function ac(h, C) {
        var A = ft.transition;
        ft.transition = {};
        var H = ft.transition;
        ft.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ft.transition = A, A === null && H._updatedFibers) {
            var X = H._updatedFibers.size;
            X > 10 && Dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Ui = !1, gl = null;
      function ic(h) {
        if (gl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), A = D && D[C];
            gl = A.call(D, "timers").setImmediate;
          } catch {
            gl = function(X) {
              Ui === !1 && (Ui = !0, typeof MessageChannel > "u" && ge("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var He = new MessageChannel();
              He.port1.onmessage = X, He.port2.postMessage(void 0);
            };
          }
        return gl(h);
      }
      var La = 0, Sl = !1;
      function Ai(h) {
        {
          var C = La;
          La++, De.current === null && (De.current = []);
          var A = De.isBatchingLegacy, H;
          try {
            if (De.isBatchingLegacy = !0, H = h(), !A && De.didScheduleLegacyUpdate) {
              var X = De.current;
              X !== null && (De.didScheduleLegacyUpdate = !1, Cl(X));
            }
          } catch (Jt) {
            throw Ma(C), Jt;
          } finally {
            De.isBatchingLegacy = A;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var He = H, ue = !1, Ue = {
              then: function(Jt, rn) {
                ue = !0, He.then(function(Tt) {
                  Ma(C), La === 0 ? Yu(Tt, Jt, rn) : Jt(Tt);
                }, function(Tt) {
                  Ma(C), rn(Tt);
                });
              }
            };
            return !Sl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ue || (Sl = !0, ge("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ue;
          } else {
            var ht = H;
            if (Ma(C), La === 0) {
              var kt = De.current;
              kt !== null && (Cl(kt), De.current = null);
              var Zt = {
                then: function(Jt, rn) {
                  De.current === null ? (De.current = [], Yu(ht, Jt, rn)) : Jt(ht);
                }
              };
              return Zt;
            } else {
              var Wt = {
                then: function(Jt, rn) {
                  Jt(ht);
                }
              };
              return Wt;
            }
          }
        }
      }
      function Ma(h) {
        h !== La - 1 && ge("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = h;
      }
      function Yu(h, C, A) {
        {
          var H = De.current;
          if (H !== null)
            try {
              Cl(H), ic(function() {
                H.length === 0 ? (De.current = null, C(h)) : Yu(h, C, A);
              });
            } catch (X) {
              A(X);
            }
          else
            C(h);
        }
      }
      var El = !1;
      function Cl(h) {
        if (!El) {
          El = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var A = h[C];
              do
                A = A(!0);
              while (A !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            El = !1;
          }
        }
      }
      var Xl = rc, Qu = gi, Zo = Kn, ri = {
        map: ka,
        forEach: Gl,
        count: sl,
        toArray: Au,
        only: Ni
      };
      O.Children = ri, O.Component = Qe, O.Fragment = ze, O.Profiler = vt, O.PureComponent = pt, O.StrictMode = S, O.Suspense = te, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ft, O.act = Ai, O.cloneElement = Qu, O.createContext = cl, O.createElement = Xl, O.createFactory = Zo, O.createRef = hr, O.forwardRef = vi, O.isValidElement = Ht, O.lazy = ma, O.memo = Q, O.startTransition = ac, O.unstable_act = Ai, O.useCallback = un, O.useContext = be, O.useDebugValue = Lt, O.useDeferredValue = Dr, O.useEffect = st, O.useId = ct, O.useImperativeHandle = mi, O.useInsertionEffect = Un, O.useLayoutEffect = Xt, O.useMemo = Sr, O.useReducer = Ct, O.useRef = Fe, O.useState = yt, O.useSyncExternalStore = Oa, O.useTransition = qn, O.version = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
process.env.NODE_ENV === "production" ? C0.exports = dD() : C0.exports = pD();
var Da = C0.exports;
const Uu = /* @__PURE__ */ fD(Da);
var R0 = { exports: {} }, Za = {}, Bm = { exports: {} }, g0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oR;
function vD() {
  return oR || (oR = 1, function(D) {
    function O(ee, ke) {
      var le = ee.length;
      ee.push(ke);
      e: for (; 0 < le; ) {
        var k = le - 1 >>> 1, B = ee[k];
        if (0 < et(B, ke)) ee[k] = ke, ee[le] = B, le = k;
        else break e;
      }
    }
    function w(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function ce(ee) {
      if (ee.length === 0) return null;
      var ke = ee[0], le = ee.pop();
      if (le !== ke) {
        ee[0] = le;
        e: for (var k = 0, B = ee.length, je = B >>> 1; k < je; ) {
          var Qe = 2 * (k + 1) - 1, ut = ee[Qe], it = Qe + 1, Et = ee[it];
          if (0 > et(ut, le)) it < B && 0 > et(Et, ut) ? (ee[k] = Et, ee[it] = le, k = it) : (ee[k] = ut, ee[Qe] = le, k = Qe);
          else if (it < B && 0 > et(Et, le)) ee[k] = Et, ee[it] = le, k = it;
          else break e;
        }
      }
      return ke;
    }
    function et(ee, ke) {
      var le = ee.sortIndex - ke.sortIndex;
      return le !== 0 ? le : ee.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ze = performance;
      D.unstable_now = function() {
        return ze.now();
      };
    } else {
      var S = Date, vt = S.now();
      D.unstable_now = function() {
        return S.now() - vt;
      };
    }
    var ne = [], oe = [], Ke = 1, te = null, de = 3, Z = !1, me = !1, tt = !1, Ye = typeof setTimeout == "function" ? setTimeout : null, bt = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ie(ee) {
      for (var ke = w(oe); ke !== null; ) {
        if (ke.callback === null) ce(oe);
        else if (ke.startTime <= ee) ce(oe), ke.sortIndex = ke.expirationTime, O(ne, ke);
        else break;
        ke = w(oe);
      }
    }
    function ft(ee) {
      if (tt = !1, Ie(ee), !me) if (w(ne) !== null) me = !0, Dt(De);
      else {
        var ke = w(oe);
        ke !== null && ge(ft, ke.startTime - ee);
      }
    }
    function De(ee, ke) {
      me = !1, tt && (tt = !1, bt(tn), tn = -1), Z = !0;
      var le = de;
      try {
        for (Ie(ke), te = w(ne); te !== null && (!(te.expirationTime > ke) || ee && !Ot()); ) {
          var k = te.callback;
          if (typeof k == "function") {
            te.callback = null, de = te.priorityLevel;
            var B = k(te.expirationTime <= ke);
            ke = D.unstable_now(), typeof B == "function" ? te.callback = B : te === w(ne) && ce(ne), Ie(ke);
          } else ce(ne);
          te = w(ne);
        }
        if (te !== null) var je = !0;
        else {
          var Qe = w(oe);
          Qe !== null && ge(ft, Qe.startTime - ke), je = !1;
        }
        return je;
      } finally {
        te = null, de = le, Z = !1;
      }
    }
    var lt = !1, Be = null, tn = -1, ln = 5, Gt = -1;
    function Ot() {
      return !(D.unstable_now() - Gt < ln);
    }
    function Rn() {
      if (Be !== null) {
        var ee = D.unstable_now();
        Gt = ee;
        var ke = !0;
        try {
          ke = Be(!0, ee);
        } finally {
          ke ? Ae() : (lt = !1, Be = null);
        }
      } else lt = !1;
    }
    var Ae;
    if (typeof Ve == "function") Ae = function() {
      Ve(Rn);
    };
    else if (typeof MessageChannel < "u") {
      var rt = new MessageChannel(), Ft = rt.port2;
      rt.port1.onmessage = Rn, Ae = function() {
        Ft.postMessage(null);
      };
    } else Ae = function() {
      Ye(Rn, 0);
    };
    function Dt(ee) {
      Be = ee, lt || (lt = !0, Ae());
    }
    function ge(ee, ke) {
      tn = Ye(function() {
        ee(D.unstable_now());
      }, ke);
    }
    D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, D.unstable_continueExecution = function() {
      me || Z || (me = !0, Dt(De));
    }, D.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ln = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, D.unstable_getCurrentPriorityLevel = function() {
      return de;
    }, D.unstable_getFirstCallbackNode = function() {
      return w(ne);
    }, D.unstable_next = function(ee) {
      switch (de) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = de;
      }
      var le = de;
      de = ke;
      try {
        return ee();
      } finally {
        de = le;
      }
    }, D.unstable_pauseExecution = function() {
    }, D.unstable_requestPaint = function() {
    }, D.unstable_runWithPriority = function(ee, ke) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var le = de;
      de = ee;
      try {
        return ke();
      } finally {
        de = le;
      }
    }, D.unstable_scheduleCallback = function(ee, ke, le) {
      var k = D.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? k + le : k) : le = k, ee) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = le + B, ee = { id: Ke++, callback: ke, priorityLevel: ee, startTime: le, expirationTime: B, sortIndex: -1 }, le > k ? (ee.sortIndex = le, O(oe, ee), w(ne) === null && ee === w(oe) && (tt ? (bt(tn), tn = -1) : tt = !0, ge(ft, le - k))) : (ee.sortIndex = B, O(ne, ee), me || Z || (me = !0, Dt(De))), ee;
    }, D.unstable_shouldYield = Ot, D.unstable_wrapCallback = function(ee) {
      var ke = de;
      return function() {
        var le = de;
        de = ke;
        try {
          return ee.apply(this, arguments);
        } finally {
          de = le;
        }
      };
    };
  }(g0)), g0;
}
var S0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sR;
function hD() {
  return sR || (sR = 1, function(D) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var O = !1, w = !1, ce = 5;
      function et(re, Oe) {
        var ot = re.length;
        re.push(Oe), vt(re, Oe, ot);
      }
      function ze(re) {
        return re.length === 0 ? null : re[0];
      }
      function S(re) {
        if (re.length === 0)
          return null;
        var Oe = re[0], ot = re.pop();
        return ot !== Oe && (re[0] = ot, ne(re, ot, 0)), Oe;
      }
      function vt(re, Oe, ot) {
        for (var At = ot; At > 0; ) {
          var Ht = At - 1 >>> 1, kn = re[Ht];
          if (oe(kn, Oe) > 0)
            re[Ht] = Oe, re[At] = kn, At = Ht;
          else
            return;
        }
      }
      function ne(re, Oe, ot) {
        for (var At = ot, Ht = re.length, kn = Ht >>> 1; At < kn; ) {
          var yn = (At + 1) * 2 - 1, gr = re[yn], Qt = yn + 1, xr = re[Qt];
          if (oe(gr, Oe) < 0)
            Qt < Ht && oe(xr, gr) < 0 ? (re[At] = xr, re[Qt] = Oe, At = Qt) : (re[At] = gr, re[yn] = Oe, At = yn);
          else if (Qt < Ht && oe(xr, Oe) < 0)
            re[At] = xr, re[Qt] = Oe, At = Qt;
          else
            return;
        }
      }
      function oe(re, Oe) {
        var ot = re.sortIndex - Oe.sortIndex;
        return ot !== 0 ? ot : re.id - Oe.id;
      }
      var Ke = 1, te = 2, de = 3, Z = 4, me = 5;
      function tt(re, Oe) {
      }
      var Ye = typeof performance == "object" && typeof performance.now == "function";
      if (Ye) {
        var bt = performance;
        D.unstable_now = function() {
          return bt.now();
        };
      } else {
        var Ve = Date, Ie = Ve.now();
        D.unstable_now = function() {
          return Ve.now() - Ie;
        };
      }
      var ft = 1073741823, De = -1, lt = 250, Be = 5e3, tn = 1e4, ln = ft, Gt = [], Ot = [], Rn = 1, Ae = null, rt = de, Ft = !1, Dt = !1, ge = !1, ee = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function k(re) {
        for (var Oe = ze(Ot); Oe !== null; ) {
          if (Oe.callback === null)
            S(Ot);
          else if (Oe.startTime <= re)
            S(Ot), Oe.sortIndex = Oe.expirationTime, et(Gt, Oe);
          else
            return;
          Oe = ze(Ot);
        }
      }
      function B(re) {
        if (ge = !1, k(re), !Dt)
          if (ze(Gt) !== null)
            Dt = !0, Qr(je);
          else {
            var Oe = ze(Ot);
            Oe !== null && mn(B, Oe.startTime - re);
          }
      }
      function je(re, Oe) {
        Dt = !1, ge && (ge = !1, br()), Ft = !0;
        var ot = rt;
        try {
          var At;
          if (!w) return Qe(re, Oe);
        } finally {
          Ae = null, rt = ot, Ft = !1;
        }
      }
      function Qe(re, Oe) {
        var ot = Oe;
        for (k(ot), Ae = ze(Gt); Ae !== null && !O && !(Ae.expirationTime > ot && (!re || Ir())); ) {
          var At = Ae.callback;
          if (typeof At == "function") {
            Ae.callback = null, rt = Ae.priorityLevel;
            var Ht = Ae.expirationTime <= ot, kn = At(Ht);
            ot = D.unstable_now(), typeof kn == "function" ? Ae.callback = kn : Ae === ze(Gt) && S(Gt), k(ot);
          } else
            S(Gt);
          Ae = ze(Gt);
        }
        if (Ae !== null)
          return !0;
        var yn = ze(Ot);
        return yn !== null && mn(B, yn.startTime - ot), !1;
      }
      function ut(re, Oe) {
        switch (re) {
          case Ke:
          case te:
          case de:
          case Z:
          case me:
            break;
          default:
            re = de;
        }
        var ot = rt;
        rt = re;
        try {
          return Oe();
        } finally {
          rt = ot;
        }
      }
      function it(re) {
        var Oe;
        switch (rt) {
          case Ke:
          case te:
          case de:
            Oe = de;
            break;
          default:
            Oe = rt;
            break;
        }
        var ot = rt;
        rt = Oe;
        try {
          return re();
        } finally {
          rt = ot;
        }
      }
      function Et(re) {
        var Oe = rt;
        return function() {
          var ot = rt;
          rt = Oe;
          try {
            return re.apply(this, arguments);
          } finally {
            rt = ot;
          }
        };
      }
      function dt(re, Oe, ot) {
        var At = D.unstable_now(), Ht;
        if (typeof ot == "object" && ot !== null) {
          var kn = ot.delay;
          typeof kn == "number" && kn > 0 ? Ht = At + kn : Ht = At;
        } else
          Ht = At;
        var yn;
        switch (re) {
          case Ke:
            yn = De;
            break;
          case te:
            yn = lt;
            break;
          case me:
            yn = ln;
            break;
          case Z:
            yn = tn;
            break;
          case de:
          default:
            yn = Be;
            break;
        }
        var gr = Ht + yn, Qt = {
          id: Rn++,
          callback: Oe,
          priorityLevel: re,
          startTime: Ht,
          expirationTime: gr,
          sortIndex: -1
        };
        return Ht > At ? (Qt.sortIndex = Ht, et(Ot, Qt), ze(Gt) === null && Qt === ze(Ot) && (ge ? br() : ge = !0, mn(B, Ht - At))) : (Qt.sortIndex = gr, et(Gt, Qt), !Dt && !Ft && (Dt = !0, Qr(je))), Qt;
      }
      function pt() {
      }
      function nn() {
        !Dt && !Ft && (Dt = !0, Qr(je));
      }
      function hr() {
        return ze(Gt);
      }
      function Br(re) {
        re.callback = null;
      }
      function hn() {
        return rt;
      }
      var Wn = !1, Pn = null, zn = -1, Dn = ce, $r = -1;
      function Ir() {
        var re = D.unstable_now() - $r;
        return !(re < Dn);
      }
      function Gn() {
      }
      function mr(re) {
        if (re < 0 || re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        re > 0 ? Dn = Math.floor(1e3 / re) : Dn = ce;
      }
      var Yr = function() {
        if (Pn !== null) {
          var re = D.unstable_now();
          $r = re;
          var Oe = !0, ot = !0;
          try {
            ot = Pn(Oe, re);
          } finally {
            ot ? yr() : (Wn = !1, Pn = null);
          }
        } else
          Wn = !1;
      }, yr;
      if (typeof le == "function")
        yr = function() {
          le(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var da = new MessageChannel(), rr = da.port2;
        da.port1.onmessage = Yr, yr = function() {
          rr.postMessage(null);
        };
      } else
        yr = function() {
          ee(Yr, 0);
        };
      function Qr(re) {
        Pn = re, Wn || (Wn = !0, yr());
      }
      function mn(re, Oe) {
        zn = ee(function() {
          re(D.unstable_now());
        }, Oe);
      }
      function br() {
        ke(zn), zn = -1;
      }
      var di = Gn, pa = null;
      D.unstable_IdlePriority = me, D.unstable_ImmediatePriority = Ke, D.unstable_LowPriority = Z, D.unstable_NormalPriority = de, D.unstable_Profiling = pa, D.unstable_UserBlockingPriority = te, D.unstable_cancelCallback = Br, D.unstable_continueExecution = nn, D.unstable_forceFrameRate = mr, D.unstable_getCurrentPriorityLevel = hn, D.unstable_getFirstCallbackNode = hr, D.unstable_next = it, D.unstable_pauseExecution = pt, D.unstable_requestPaint = di, D.unstable_runWithPriority = ut, D.unstable_scheduleCallback = dt, D.unstable_shouldYield = Ir, D.unstable_wrapCallback = Et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(S0)), S0;
}
var cR;
function gR() {
  return cR || (cR = 1, process.env.NODE_ENV === "production" ? Bm.exports = vD() : Bm.exports = hD()), Bm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fR;
function mD() {
  if (fR) return Za;
  fR = 1;
  var D = Da, O = gR();
  function w(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ce = /* @__PURE__ */ new Set(), et = {};
  function ze(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (et[n] = r, n = 0; n < r.length; n++) ce.add(r[n]);
  }
  var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ne = Object.prototype.hasOwnProperty, oe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ke = {}, te = {};
  function de(n) {
    return ne.call(te, n) ? !0 : ne.call(Ke, n) ? !1 : oe.test(n) ? te[n] = !0 : (Ke[n] = !0, !1);
  }
  function Z(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function me(n, r, l, o) {
    if (r === null || typeof r > "u" || Z(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function tt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ye = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ye[n] = new tt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ye[r] = new tt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ye[n] = new tt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ye[n] = new tt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ye[n] = new tt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ye[n] = new tt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ye[n] = new tt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ye[n] = new tt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ye[n] = new tt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var bt = /[\-:]([a-z])/g;
  function Ve(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      bt,
      Ve
    );
    Ye[r] = new tt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(bt, Ve);
    Ye[r] = new tt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(bt, Ve);
    Ye[r] = new tt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ye[n] = new tt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ye.xlinkHref = new tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ye[n] = new tt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ie(n, r, l, o) {
    var c = Ye.hasOwnProperty(r) ? Ye[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (me(r, l, c, o) && (l = null), o || c === null ? de(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ft = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), lt = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), tn = Symbol.for("react.strict_mode"), ln = Symbol.for("react.profiler"), Gt = Symbol.for("react.provider"), Ot = Symbol.for("react.context"), Rn = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), rt = Symbol.for("react.suspense_list"), Ft = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var le = Object.assign, k;
  function B(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var je = !1;
  function Qe(n, r) {
    if (!n || je) return "";
    je = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (j) {
          var o = j;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (j) {
          o = j;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (j) {
          o = j;
        }
        n();
      }
    } catch (j) {
      if (j && o && typeof j.stack == "string") {
        for (var c = j.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      je = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function ut(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function it(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Be:
        return "Fragment";
      case lt:
        return "Portal";
      case ln:
        return "Profiler";
      case tn:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case rt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Ot:
        return (n.displayName || "Context") + ".Consumer";
      case Gt:
        return (n._context.displayName || "Context") + ".Provider";
      case Rn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ft:
        return r = n.displayName || null, r !== null ? r : it(n.type) || "Memo";
      case Dt:
        r = n._payload, n = n._init;
        try {
          return it(n(r));
        } catch {
        }
    }
    return null;
  }
  function Et(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return it(r);
      case 8:
        return r === tn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function dt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function pt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function nn(n) {
    var r = pt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function hr(n) {
    n._valueTracker || (n._valueTracker = nn(n));
  }
  function Br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = pt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function hn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Wn(n, r) {
    var l = r.checked;
    return le({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = dt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function zn(n, r) {
    r = r.checked, r != null && Ie(n, "checked", r, !1);
  }
  function Dn(n, r) {
    zn(n, r);
    var l = dt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ir(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ir(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function $r(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ir(n, r, l) {
    (r !== "number" || hn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Gn = Array.isArray;
  function mr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + dt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(w(91));
    return le({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(w(92));
        if (Gn(l)) {
          if (1 < l.length) throw Error(w(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: dt(l) };
  }
  function da(n, r) {
    var l = dt(r.value), o = dt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function rr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Qr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function mn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Qr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var br, di = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (br = br || document.createElement("div"), br.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = br.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function pa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var re = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Oe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(re).forEach(function(n) {
    Oe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), re[r] = re[n];
    });
  });
  function ot(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || re.hasOwnProperty(n) && re[n] ? ("" + r).trim() : r + "px";
  }
  function At(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = ot(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Ht = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function kn(n, r) {
    if (r) {
      if (Ht[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(w(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(w(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(w(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(w(62));
    }
  }
  function yn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gr = null;
  function Qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var xr = null, Pt = null, Vt = null;
  function ei(n) {
    if (n = ds(n)) {
      if (typeof xr != "function") throw Error(w(280));
      var r = n.stateNode;
      r && (r = Me(r), xr(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    Pt ? Vt ? Vt.push(n) : Vt = [n] : Pt = n;
  }
  function sl() {
    if (Pt) {
      var n = Pt, r = Vt;
      if (Vt = Pt = null, ei(n), r) for (n = 0; n < r.length; n++) ei(r[n]);
    }
  }
  function Gl(n, r) {
    return n(r);
  }
  function Au() {
  }
  var Ni = !1;
  function cl(n, r, l) {
    if (Ni) return n(r, l);
    Ni = !0;
    try {
      return Gl(n, r, l);
    } finally {
      Ni = !1, (Pt !== null || Vt !== null) && (Au(), sl());
    }
  }
  function va(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Me(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(w(231, r, typeof l));
    return l;
  }
  var pi = !1;
  if (vt) try {
    var ha = {};
    Object.defineProperty(ha, "passive", { get: function() {
      pi = !0;
    } }), window.addEventListener("test", ha, ha), window.removeEventListener("test", ha, ha);
  } catch {
    pi = !1;
  }
  function ti(n, r, l, o, c, d, m, E, T) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, j);
    } catch (W) {
      this.onError(W);
    }
  }
  var _r = !1, ma = null, vi = !1, hi = null, R = { onError: function(n) {
    _r = !0, ma = n;
  } };
  function Q(n, r, l, o, c, d, m, E, T) {
    _r = !1, ma = null, ti.apply(R, arguments);
  }
  function K(n, r, l, o, c, d, m, E, T) {
    if (Q.apply(this, arguments), _r) {
      if (_r) {
        var j = ma;
        _r = !1, ma = null;
      } else throw Error(w(198));
      vi || (vi = !0, hi = j);
    }
  }
  function be(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function yt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ct(n) {
    if (be(n) !== n) throw Error(w(188));
  }
  function Fe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = be(n), r === null) throw Error(w(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Ct(c), n;
          if (d === o) return Ct(c), r;
          d = d.sibling;
        }
        throw Error(w(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(w(189));
        }
      }
      if (l.alternate !== o) throw Error(w(190));
    }
    if (l.tag !== 3) throw Error(w(188));
    return l.stateNode.current === l ? n : r;
  }
  function st(n) {
    return n = Fe(n), n !== null ? Un(n) : null;
  }
  function Un(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Un(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Xt = O.unstable_scheduleCallback, un = O.unstable_cancelCallback, Sr = O.unstable_shouldYield, mi = O.unstable_requestPaint, Lt = O.unstable_now, qn = O.unstable_getCurrentPriorityLevel, Dr = O.unstable_ImmediatePriority, ct = O.unstable_UserBlockingPriority, Oa = O.unstable_NormalPriority, fl = O.unstable_LowPriority, ju = O.unstable_IdlePriority, dl = null, Wr = null;
  function qo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(dl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : nc, Ko = Math.log, Xo = Math.LN2;
  function nc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ko(n) / Xo | 0) | 0;
  }
  var Fu = 64, pl = 4194304;
  function ni(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Or(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = ni(E) : (d &= m, d !== 0 && (o = ni(d)));
    } else m = l & ~c, m !== 0 ? o = ni(m) : d !== 0 && (o = ni(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function vl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = vl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function ml(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Hu() {
    var n = Fu;
    return Fu <<= 1, !(Fu & 4194240) && (Fu = 64), n;
  }
  function Pu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function zi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Wf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function yi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Mt = 0;
  function Vu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ql, Bu, Rt, $u, Iu, Xe = !1, Kl = [], gn = null, Gr = null, Lr = null, yl = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Bt = [], rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gr = null;
        break;
      case "mouseover":
      case "mouseout":
        Lr = null;
        break;
      case "pointerover":
      case "pointerout":
        yl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(r.pointerId);
    }
  }
  function Kn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ds(r), r !== null && Bu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function gi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return gn = Kn(gn, n, r, l, o, c), !0;
      case "dragenter":
        return Gr = Kn(Gr, n, r, l, o, c), !0;
      case "mouseover":
        return Lr = Kn(Lr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return yl.set(d, Kn(yl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tn.set(d, Kn(Tn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function ac(n) {
    var r = za(n.target);
    if (r !== null) {
      var l = be(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = yt(l), r !== null) {
            n.blockedOn = r, Iu(n.priority, function() {
              Rt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ui(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Qu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        gr = o, l.target.dispatchEvent(o), gr = null;
      } else return r = ds(l), r !== null && Bu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function gl(n, r, l) {
    Ui(n) && l.delete(r);
  }
  function ic() {
    Xe = !1, gn !== null && Ui(gn) && (gn = null), Gr !== null && Ui(Gr) && (Gr = null), Lr !== null && Ui(Lr) && (Lr = null), yl.forEach(gl), Tn.forEach(gl);
  }
  function La(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xe || (Xe = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, ic)));
  }
  function Sl(n) {
    function r(c) {
      return La(c, n);
    }
    if (0 < Kl.length) {
      La(Kl[0], n);
      for (var l = 1; l < Kl.length; l++) {
        var o = Kl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (gn !== null && La(gn, n), Gr !== null && La(Gr, n), Lr !== null && La(Lr, n), yl.forEach(r), Tn.forEach(r), l = 0; l < Bt.length; l++) o = Bt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Bt.length && (l = Bt[0], l.blockedOn === null); ) ac(l), l.blockedOn === null && Bt.shift();
  }
  var Ai = ft.ReactCurrentBatchConfig, Ma = !0;
  function Yu(n, r, l, o) {
    var c = Mt, d = Ai.transition;
    Ai.transition = null;
    try {
      Mt = 1, Cl(n, r, l, o);
    } finally {
      Mt = c, Ai.transition = d;
    }
  }
  function El(n, r, l, o) {
    var c = Mt, d = Ai.transition;
    Ai.transition = null;
    try {
      Mt = 4, Cl(n, r, l, o);
    } finally {
      Mt = c, Ai.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (Ma) {
      var c = Qu(n, r, l, o);
      if (c === null) vc(n, r, o, Xl, l), qr(n, o);
      else if (gi(c, n, r, l, o)) o.stopPropagation();
      else if (qr(n, o), r & 4 && -1 < rc.indexOf(n)) {
        for (; c !== null; ) {
          var d = ds(c);
          if (d !== null && ql(d), d = Qu(n, r, l, o), d === null && vc(n, r, o, Xl, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else vc(n, r, o, null, l);
    }
  }
  var Xl = null;
  function Qu(n, r, l, o) {
    if (Xl = null, n = Qt(o), n = za(n), n !== null) if (r = be(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = yt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Xl = n, null;
  }
  function Zo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (qn()) {
          case Dr:
            return 1;
          case ct:
            return 4;
          case Oa:
          case fl:
            return 16;
          case ju:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ri = null, h = null, C = null;
  function A() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ri ? ri.value : ri.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function H(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function X() {
    return !0;
  }
  function He() {
    return !1;
  }
  function ue(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? X : He, this.isPropagationStopped = He, this;
    }
    return le(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = X);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = X);
    }, persist: function() {
    }, isPersistent: X }), r;
  }
  var Ue = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ht = ue(Ue), kt = le({}, Ue, { view: 0, detail: 0 }), Zt = ue(kt), Wt, Jt, rn, Tt = le({}, kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== rn && (rn && n.type === "mousemove" ? (Wt = n.screenX - rn.screenX, Jt = n.screenY - rn.screenY) : Jt = Wt = 0, rn = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Jt;
  } }), ji = ue(Tt), Wu = le({}, Tt, { dataTransfer: 0 }), Jo = ue(Wu), Gf = le({}, kt, { relatedTarget: 0 }), ai = ue(Gf), es = le({}, Ue, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ts = ue(es), qf = le({}, Ue, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), qm = ue(qf), Km = le({}, Ue, { data: 0 }), Kf = ue(Km), Xf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ev = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function tv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ev[n]) ? !!r[n] : !1;
  }
  function Zf() {
    return tv;
  }
  var Fi = le({}, kt, { key: function(n) {
    if (n.key) {
      var r = Xf[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = H(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Jp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zf, charCode: function(n) {
    return n.type === "keypress" ? H(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? H(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Xm = ue(Fi), Jf = le({}, Tt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), lc = ue(Jf), ed = le({}, kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zf }), Zm = ue(ed), uc = le({}, Ue, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nv = ue(uc), Kr = le({}, Tt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hi = ue(Kr), An = [9, 13, 27, 32], ii = vt && "CompositionEvent" in window, Zl = null;
  vt && "documentMode" in document && (Zl = document.documentMode);
  var oc = vt && "TextEvent" in window && !Zl, rv = vt && (!ii || Zl && 8 < Zl && 11 >= Zl), Gu = " ", av = !1;
  function iv(n, r) {
    switch (n) {
      case "keyup":
        return An.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var qu = !1;
  function Jm(n, r) {
    switch (n) {
      case "compositionend":
        return sc(r);
      case "keypress":
        return r.which !== 32 ? null : (av = !0, Gu);
      case "textInput":
        return n = r.data, n === Gu && av ? null : n;
      default:
        return null;
    }
  }
  function ey(n, r) {
    if (qu) return n === "compositionend" || !ii && iv(n, r) ? (n = A(), C = h = ri = null, qu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return rv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var lv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function uv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!lv[n.type] : r === "textarea";
  }
  function ov(n, r, l, o) {
    ka(o), r = ss(r, "onChange"), 0 < r.length && (l = new ht("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ns = null, Ku = null;
  function Xu(n) {
    pc(n, 0);
  }
  function Zu(n) {
    var r = eo(n);
    if (Br(r)) return n;
  }
  function sv(n, r) {
    if (n === "change") return r;
  }
  var td = !1;
  if (vt) {
    var nd;
    if (vt) {
      var rd = "oninput" in document;
      if (!rd) {
        var cv = document.createElement("div");
        cv.setAttribute("oninput", "return;"), rd = typeof cv.oninput == "function";
      }
      nd = rd;
    } else nd = !1;
    td = nd && (!document.documentMode || 9 < document.documentMode);
  }
  function fv() {
    ns && (ns.detachEvent("onpropertychange", dv), Ku = ns = null);
  }
  function dv(n) {
    if (n.propertyName === "value" && Zu(Ku)) {
      var r = [];
      ov(r, Ku, n, Qt(n)), cl(Xu, r);
    }
  }
  function ty(n, r, l) {
    n === "focusin" ? (fv(), ns = r, Ku = l, ns.attachEvent("onpropertychange", dv)) : n === "focusout" && fv();
  }
  function ny(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zu(Ku);
  }
  function ry(n, r) {
    if (n === "click") return Zu(r);
  }
  function pv(n, r) {
    if (n === "input" || n === "change") return Zu(r);
  }
  function ay(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Na = typeof Object.is == "function" ? Object.is : ay;
  function rs(n, r) {
    if (Na(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ne.call(r, c) || !Na(n[c], r[c])) return !1;
    }
    return !0;
  }
  function vv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function hv(n, r) {
    var l = vv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = vv(l);
    }
  }
  function mv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? mv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function cc() {
    for (var n = window, r = hn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = hn(n.document);
    }
    return r;
  }
  function Pi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function fc(n) {
    var r = cc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && mv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Pi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = hv(l, d);
          var m = hv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var yv = vt && "documentMode" in document && 11 >= document.documentMode, li = null, ad = null, as = null, id = !1;
  function gv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    id || li == null || li !== hn(o) || (o = li, "selectionStart" in o && Pi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), as && rs(as, o) || (as = o, o = ss(ad, "onSelect"), 0 < o.length && (r = new ht("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = li)));
  }
  function dc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Jl = { animationend: dc("Animation", "AnimationEnd"), animationiteration: dc("Animation", "AnimationIteration"), animationstart: dc("Animation", "AnimationStart"), transitionend: dc("Transition", "TransitionEnd") }, ld = {}, ud = {};
  vt && (ud = document.createElement("div").style, "AnimationEvent" in window || (delete Jl.animationend.animation, delete Jl.animationiteration.animation, delete Jl.animationstart.animation), "TransitionEvent" in window || delete Jl.transitionend.transition);
  function Xn(n) {
    if (ld[n]) return ld[n];
    if (!Jl[n]) return n;
    var r = Jl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in ud) return ld[n] = r[l];
    return n;
  }
  var od = Xn("animationend"), Sv = Xn("animationiteration"), Ev = Xn("animationstart"), Cv = Xn("transitionend"), Rv = /* @__PURE__ */ new Map(), Tv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Vi(n, r) {
    Rv.set(n, r), ze(r, [n]);
  }
  for (var is = 0; is < Tv.length; is++) {
    var eu = Tv[is], iy = eu.toLowerCase(), ls = eu[0].toUpperCase() + eu.slice(1);
    Vi(iy, "on" + ls);
  }
  Vi(od, "onAnimationEnd"), Vi(Sv, "onAnimationIteration"), Vi(Ev, "onAnimationStart"), Vi("dblclick", "onDoubleClick"), Vi("focusin", "onFocus"), Vi("focusout", "onBlur"), Vi(Cv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), ze("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ze("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ze("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ze("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ze("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
  function wv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, K(o, r, void 0, n), n.currentTarget = null;
  }
  function pc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, j = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          wv(c, E, j), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, j = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          wv(c, E, j), d = T;
        }
      }
    }
    if (vi) throw n = hi, vi = !1, hi = null, n;
  }
  function en(n, r) {
    var l = r[hd];
    l === void 0 && (l = r[hd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (bv(r, n, 2, !1), l.add(o));
  }
  function Rl(n, r, l) {
    var o = 0;
    r && (o |= 4), bv(l, n, o, r);
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ju(n) {
    if (!n[Bi]) {
      n[Bi] = !0, ce.forEach(function(l) {
        l !== "selectionchange" && (ly.has(l) || Rl(l, !1, n), Rl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Bi] || (r[Bi] = !0, Rl("selectionchange", !1, r));
    }
  }
  function bv(n, r, l, o) {
    switch (Zo(r)) {
      case 1:
        var c = Yu;
        break;
      case 4:
        c = El;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !pi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function vc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = za(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    cl(function() {
      var j = d, W = Qt(l), G = [];
      e: {
        var Y = Rv.get(n);
        if (Y !== void 0) {
          var pe = ht, Se = n;
          switch (n) {
            case "keypress":
              if (H(l) === 0) break e;
            case "keydown":
            case "keyup":
              pe = Xm;
              break;
            case "focusin":
              Se = "focus", pe = ai;
              break;
            case "focusout":
              Se = "blur", pe = ai;
              break;
            case "beforeblur":
            case "afterblur":
              pe = ai;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = ji;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Jo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = Zm;
              break;
            case od:
            case Sv:
            case Ev:
              pe = ts;
              break;
            case Cv:
              pe = nv;
              break;
            case "scroll":
              pe = Zt;
              break;
            case "wheel":
              pe = Hi;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = qm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = lc;
          }
          var Re = (r & 4) !== 0, Mn = !Re && n === "scroll", L = Re ? Y !== null ? Y + "Capture" : null : Y;
          Re = [];
          for (var x = j, z; x !== null; ) {
            z = x;
            var J = z.stateNode;
            if (z.tag === 5 && J !== null && (z = J, L !== null && (J = va(x, L), J != null && Re.push(os(x, J, z)))), Mn) break;
            x = x.return;
          }
          0 < Re.length && (Y = new pe(Y, Se, null, l, W), G.push({ event: Y, listeners: Re }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", Y && l !== gr && (Se = l.relatedTarget || l.fromElement) && (za(Se) || Se[$i])) break e;
          if ((pe || Y) && (Y = W.window === W ? W : (Y = W.ownerDocument) ? Y.defaultView || Y.parentWindow : window, pe ? (Se = l.relatedTarget || l.toElement, pe = j, Se = Se ? za(Se) : null, Se !== null && (Mn = be(Se), Se !== Mn || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (pe = null, Se = j), pe !== Se)) {
            if (Re = ji, J = "onMouseLeave", L = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Re = lc, J = "onPointerLeave", L = "onPointerEnter", x = "pointer"), Mn = pe == null ? Y : eo(pe), z = Se == null ? Y : eo(Se), Y = new Re(J, x + "leave", pe, l, W), Y.target = Mn, Y.relatedTarget = z, J = null, za(W) === j && (Re = new Re(L, x + "enter", Se, l, W), Re.target = z, Re.relatedTarget = Mn, J = Re), Mn = J, pe && Se) t: {
              for (Re = pe, L = Se, x = 0, z = Re; z; z = tu(z)) x++;
              for (z = 0, J = L; J; J = tu(J)) z++;
              for (; 0 < x - z; ) Re = tu(Re), x--;
              for (; 0 < z - x; ) L = tu(L), z--;
              for (; x--; ) {
                if (Re === L || L !== null && Re === L.alternate) break t;
                Re = tu(Re), L = tu(L);
              }
              Re = null;
            }
            else Re = null;
            pe !== null && sd(G, Y, pe, Re, !1), Se !== null && Mn !== null && sd(G, Mn, Se, Re, !0);
          }
        }
        e: {
          if (Y = j ? eo(j) : window, pe = Y.nodeName && Y.nodeName.toLowerCase(), pe === "select" || pe === "input" && Y.type === "file") var we = sv;
          else if (uv(Y)) if (td) we = pv;
          else {
            we = ny;
            var Pe = ty;
          }
          else (pe = Y.nodeName) && pe.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (we = ry);
          if (we && (we = we(n, j))) {
            ov(G, we, l, W);
            break e;
          }
          Pe && Pe(n, Y, j), n === "focusout" && (Pe = Y._wrapperState) && Pe.controlled && Y.type === "number" && Ir(Y, "number", Y.value);
        }
        switch (Pe = j ? eo(j) : window, n) {
          case "focusin":
            (uv(Pe) || Pe.contentEditable === "true") && (li = Pe, ad = j, as = null);
            break;
          case "focusout":
            as = ad = li = null;
            break;
          case "mousedown":
            id = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            id = !1, gv(G, l, W);
            break;
          case "selectionchange":
            if (yv) break;
          case "keydown":
          case "keyup":
            gv(G, l, W);
        }
        var Ee;
        if (ii) e: {
          switch (n) {
            case "compositionstart":
              var $e = "onCompositionStart";
              break e;
            case "compositionend":
              $e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $e = "onCompositionUpdate";
              break e;
          }
          $e = void 0;
        }
        else qu ? iv(n, l) && ($e = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && ($e = "onCompositionStart");
        $e && (rv && l.locale !== "ko" && (qu || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && qu && (Ee = A()) : (ri = W, h = "value" in ri ? ri.value : ri.textContent, qu = !0)), Pe = ss(j, $e), 0 < Pe.length && ($e = new Kf($e, n, null, l, W), G.push({ event: $e, listeners: Pe }), Ee ? $e.data = Ee : (Ee = sc(l), Ee !== null && ($e.data = Ee)))), (Ee = oc ? Jm(n, l) : ey(n, l)) && (j = ss(j, "onBeforeInput"), 0 < j.length && (W = new Kf("onBeforeInput", "beforeinput", null, l, W), G.push({ event: W, listeners: j }), W.data = Ee));
      }
      pc(G, r);
    });
  }
  function os(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ss(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = va(n, l), d != null && o.unshift(os(n, d, c)), d = va(n, r), d != null && o.push(os(n, d, c))), n = n.return;
    }
    return o;
  }
  function tu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function sd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, j = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && j !== null && (E = j, c ? (T = va(l, d), T != null && m.unshift(os(l, T, E))) : c || (T = va(l, d), T != null && m.push(os(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var cd = /\r\n?/g, uy = /\u0000|\uFFFD/g;
  function fd(n) {
    return (typeof n == "string" ? n : "" + n).replace(cd, `
`).replace(uy, "");
  }
  function hc(n, r, l) {
    if (r = fd(r), fd(n) !== r && l) throw Error(w(425));
  }
  function mc() {
  }
  var dd = null, nu = null;
  function cs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ru = typeof setTimeout == "function" ? setTimeout : void 0, xv = typeof clearTimeout == "function" ? clearTimeout : void 0, pd = typeof Promise == "function" ? Promise : void 0, vd = typeof queueMicrotask == "function" ? queueMicrotask : typeof pd < "u" ? function(n) {
    return pd.resolve(null).then(n).catch(oy);
  } : ru;
  function oy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Tl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Sl(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Sl(r);
  }
  function ui(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function fs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wl = Math.random().toString(36).slice(2), Si = "__reactFiber$" + wl, au = "__reactProps$" + wl, $i = "__reactContainer$" + wl, hd = "__reactEvents$" + wl, sy = "__reactListeners$" + wl, md = "__reactHandles$" + wl;
  function za(n) {
    var r = n[Si];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[$i] || l[Si]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = fs(n); n !== null; ) {
          if (l = n[Si]) return l;
          n = fs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ds(n) {
    return n = n[Si] || n[$i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function eo(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(w(33));
  }
  function Me(n) {
    return n[au] || null;
  }
  var bl = [], on = -1;
  function at(n) {
    return { current: n };
  }
  function jt(n) {
    0 > on || (n.current = bl[on], bl[on] = null, on--);
  }
  function $t(n, r) {
    on++, bl[on] = n.current, n.current = r;
  }
  var Ei = {}, Ge = at(Ei), wn = at(!1), Xr = Ei;
  function Ua(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ei;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function dn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Aa() {
    jt(wn), jt(Ge);
  }
  function xl(n, r, l) {
    if (Ge.current !== Ei) throw Error(w(168));
    $t(Ge, r), $t(wn, l);
  }
  function ps(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(w(108, Et(n) || "Unknown", c));
    return le({}, l, o);
  }
  function yc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ei, Xr = Ge.current, $t(Ge, n), $t(wn, wn.current), !0;
  }
  function _v(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(w(169));
    l ? (n = ps(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, jt(wn), jt(Ge), $t(Ge, n)) : jt(wn), $t(wn, l);
  }
  var ya = null, Zn = !1, vs = !1;
  function yd(n) {
    ya === null ? ya = [n] : ya.push(n);
  }
  function gd(n) {
    Zn = !0, yd(n);
  }
  function Zr() {
    if (!vs && ya !== null) {
      vs = !0;
      var n = 0, r = Mt;
      try {
        var l = ya;
        for (Mt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ya = null, Zn = !1;
      } catch (c) {
        throw ya !== null && (ya = ya.slice(n + 1)), Xt(Dr, Zr), c;
      } finally {
        Mt = r, vs = !1;
      }
    }
    return null;
  }
  var _l = [], Jr = 0, iu = null, to = 0, ea = [], Er = 0, ja = null, ar = 1, Ii = "";
  function ga(n, r) {
    _l[Jr++] = to, _l[Jr++] = iu, iu = n, to = r;
  }
  function Sd(n, r, l) {
    ea[Er++] = ar, ea[Er++] = Ii, ea[Er++] = ja, ja = n;
    var o = ar;
    n = Ii;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, ar = 1 << 32 - kr(r) + c | l << c | o, Ii = d + n;
    } else ar = 1 << d | l << c | o, Ii = n;
  }
  function gc(n) {
    n.return !== null && (ga(n, 1), Sd(n, 1, 0));
  }
  function Ed(n) {
    for (; n === iu; ) iu = _l[--Jr], _l[Jr] = null, to = _l[--Jr], _l[Jr] = null;
    for (; n === ja; ) ja = ea[--Er], ea[Er] = null, Ii = ea[--Er], ea[Er] = null, ar = ea[--Er], ea[Er] = null;
  }
  var Sa = null, ta = null, sn = !1, Fa = null;
  function Cd(n, r) {
    var l = Qa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Dv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Sa = n, ta = ui(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Sa = n, ta = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ja !== null ? { id: ar, overflow: Ii } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Qa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Sa = n, ta = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Sc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ec(n) {
    if (sn) {
      var r = ta;
      if (r) {
        var l = r;
        if (!Dv(n, r)) {
          if (Sc(n)) throw Error(w(418));
          r = ui(l.nextSibling);
          var o = Sa;
          r && Dv(n, r) ? Cd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, Sa = n);
        }
      } else {
        if (Sc(n)) throw Error(w(418));
        n.flags = n.flags & -4097 | 2, sn = !1, Sa = n;
      }
    }
  }
  function kv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Sa = n;
  }
  function Cc(n) {
    if (n !== Sa) return !1;
    if (!sn) return kv(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !cs(n.type, n.memoizedProps)), r && (r = ta)) {
      if (Sc(n)) throw Ov(), Error(w(418));
      for (; r; ) Cd(n, r), r = ui(r.nextSibling);
    }
    if (kv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(w(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ta = ui(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ta = null;
      }
    } else ta = Sa ? ui(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ov() {
    for (var n = ta; n; ) n = ui(n.nextSibling);
  }
  function Sn() {
    ta = Sa = null, sn = !1;
  }
  function Rd(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var Rc = ft.ReactCurrentBatchConfig;
  function lu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(w(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(w(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(w(284));
      if (!l._owner) throw Error(w(290, n));
    }
    return n;
  }
  function Ci(n, r) {
    throw n = Object.prototype.toString.call(r), Error(w(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Lv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Tc(n) {
    function r(L, x) {
      if (n) {
        var z = L.deletions;
        z === null ? (L.deletions = [x], L.flags |= 16) : z.push(x);
      }
    }
    function l(L, x) {
      if (!n) return null;
      for (; x !== null; ) r(L, x), x = x.sibling;
      return null;
    }
    function o(L, x) {
      for (L = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? L.set(x.key, x) : L.set(x.index, x), x = x.sibling;
      return L;
    }
    function c(L, x) {
      return L = Ul(L, x), L.index = 0, L.sibling = null, L;
    }
    function d(L, x, z) {
      return L.index = z, n ? (z = L.alternate, z !== null ? (z = z.index, z < x ? (L.flags |= 2, x) : z) : (L.flags |= 2, x)) : (L.flags |= 1048576, x);
    }
    function m(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function E(L, x, z, J) {
      return x === null || x.tag !== 6 ? (x = ff(z, L.mode, J), x.return = L, x) : (x = c(x, z), x.return = L, x);
    }
    function T(L, x, z, J) {
      var we = z.type;
      return we === Be ? W(L, x, z.props.children, J, z.key) : x !== null && (x.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Dt && Lv(we) === x.type) ? (J = c(x, z.props), J.ref = lu(L, x, z), J.return = L, J) : (J = sf(z.type, z.key, z.props, null, L.mode, J), J.ref = lu(L, x, z), J.return = L, J);
    }
    function j(L, x, z, J) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== z.containerInfo || x.stateNode.implementation !== z.implementation ? (x = Ms(z, L.mode, J), x.return = L, x) : (x = c(x, z.children || []), x.return = L, x);
    }
    function W(L, x, z, J, we) {
      return x === null || x.tag !== 7 ? (x = Cu(z, L.mode, J, we), x.return = L, x) : (x = c(x, z), x.return = L, x);
    }
    function G(L, x, z) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = ff("" + x, L.mode, z), x.return = L, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case De:
            return z = sf(x.type, x.key, x.props, null, L.mode, z), z.ref = lu(L, null, x), z.return = L, z;
          case lt:
            return x = Ms(x, L.mode, z), x.return = L, x;
          case Dt:
            var J = x._init;
            return G(L, J(x._payload), z);
        }
        if (Gn(x) || ke(x)) return x = Cu(x, L.mode, z, null), x.return = L, x;
        Ci(L, x);
      }
      return null;
    }
    function Y(L, x, z, J) {
      var we = x !== null ? x.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number") return we !== null ? null : E(L, x, "" + z, J);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case De:
            return z.key === we ? T(L, x, z, J) : null;
          case lt:
            return z.key === we ? j(L, x, z, J) : null;
          case Dt:
            return we = z._init, Y(
              L,
              x,
              we(z._payload),
              J
            );
        }
        if (Gn(z) || ke(z)) return we !== null ? null : W(L, x, z, J, null);
        Ci(L, z);
      }
      return null;
    }
    function pe(L, x, z, J, we) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return L = L.get(z) || null, E(x, L, "" + J, we);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case De:
            return L = L.get(J.key === null ? z : J.key) || null, T(x, L, J, we);
          case lt:
            return L = L.get(J.key === null ? z : J.key) || null, j(x, L, J, we);
          case Dt:
            var Pe = J._init;
            return pe(L, x, z, Pe(J._payload), we);
        }
        if (Gn(J) || ke(J)) return L = L.get(z) || null, W(x, L, J, we, null);
        Ci(x, J);
      }
      return null;
    }
    function Se(L, x, z, J) {
      for (var we = null, Pe = null, Ee = x, $e = x = 0, Yn = null; Ee !== null && $e < z.length; $e++) {
        Ee.index > $e ? (Yn = Ee, Ee = null) : Yn = Ee.sibling;
        var Nt = Y(L, Ee, z[$e], J);
        if (Nt === null) {
          Ee === null && (Ee = Yn);
          break;
        }
        n && Ee && Nt.alternate === null && r(L, Ee), x = d(Nt, x, $e), Pe === null ? we = Nt : Pe.sibling = Nt, Pe = Nt, Ee = Yn;
      }
      if ($e === z.length) return l(L, Ee), sn && ga(L, $e), we;
      if (Ee === null) {
        for (; $e < z.length; $e++) Ee = G(L, z[$e], J), Ee !== null && (x = d(Ee, x, $e), Pe === null ? we = Ee : Pe.sibling = Ee, Pe = Ee);
        return sn && ga(L, $e), we;
      }
      for (Ee = o(L, Ee); $e < z.length; $e++) Yn = pe(Ee, L, $e, z[$e], J), Yn !== null && (n && Yn.alternate !== null && Ee.delete(Yn.key === null ? $e : Yn.key), x = d(Yn, x, $e), Pe === null ? we = Yn : Pe.sibling = Yn, Pe = Yn);
      return n && Ee.forEach(function(Xi) {
        return r(L, Xi);
      }), sn && ga(L, $e), we;
    }
    function Re(L, x, z, J) {
      var we = ke(z);
      if (typeof we != "function") throw Error(w(150));
      if (z = we.call(z), z == null) throw Error(w(151));
      for (var Pe = we = null, Ee = x, $e = x = 0, Yn = null, Nt = z.next(); Ee !== null && !Nt.done; $e++, Nt = z.next()) {
        Ee.index > $e ? (Yn = Ee, Ee = null) : Yn = Ee.sibling;
        var Xi = Y(L, Ee, Nt.value, J);
        if (Xi === null) {
          Ee === null && (Ee = Yn);
          break;
        }
        n && Ee && Xi.alternate === null && r(L, Ee), x = d(Xi, x, $e), Pe === null ? we = Xi : Pe.sibling = Xi, Pe = Xi, Ee = Yn;
      }
      if (Nt.done) return l(
        L,
        Ee
      ), sn && ga(L, $e), we;
      if (Ee === null) {
        for (; !Nt.done; $e++, Nt = z.next()) Nt = G(L, Nt.value, J), Nt !== null && (x = d(Nt, x, $e), Pe === null ? we = Nt : Pe.sibling = Nt, Pe = Nt);
        return sn && ga(L, $e), we;
      }
      for (Ee = o(L, Ee); !Nt.done; $e++, Nt = z.next()) Nt = pe(Ee, L, $e, Nt.value, J), Nt !== null && (n && Nt.alternate !== null && Ee.delete(Nt.key === null ? $e : Nt.key), x = d(Nt, x, $e), Pe === null ? we = Nt : Pe.sibling = Nt, Pe = Nt);
      return n && Ee.forEach(function(_y) {
        return r(L, _y);
      }), sn && ga(L, $e), we;
    }
    function Mn(L, x, z, J) {
      if (typeof z == "object" && z !== null && z.type === Be && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case De:
            e: {
              for (var we = z.key, Pe = x; Pe !== null; ) {
                if (Pe.key === we) {
                  if (we = z.type, we === Be) {
                    if (Pe.tag === 7) {
                      l(L, Pe.sibling), x = c(Pe, z.props.children), x.return = L, L = x;
                      break e;
                    }
                  } else if (Pe.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Dt && Lv(we) === Pe.type) {
                    l(L, Pe.sibling), x = c(Pe, z.props), x.ref = lu(L, Pe, z), x.return = L, L = x;
                    break e;
                  }
                  l(L, Pe);
                  break;
                } else r(L, Pe);
                Pe = Pe.sibling;
              }
              z.type === Be ? (x = Cu(z.props.children, L.mode, J, z.key), x.return = L, L = x) : (J = sf(z.type, z.key, z.props, null, L.mode, J), J.ref = lu(L, x, z), J.return = L, L = J);
            }
            return m(L);
          case lt:
            e: {
              for (Pe = z.key; x !== null; ) {
                if (x.key === Pe) if (x.tag === 4 && x.stateNode.containerInfo === z.containerInfo && x.stateNode.implementation === z.implementation) {
                  l(L, x.sibling), x = c(x, z.children || []), x.return = L, L = x;
                  break e;
                } else {
                  l(L, x);
                  break;
                }
                else r(L, x);
                x = x.sibling;
              }
              x = Ms(z, L.mode, J), x.return = L, L = x;
            }
            return m(L);
          case Dt:
            return Pe = z._init, Mn(L, x, Pe(z._payload), J);
        }
        if (Gn(z)) return Se(L, x, z, J);
        if (ke(z)) return Re(L, x, z, J);
        Ci(L, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" ? (z = "" + z, x !== null && x.tag === 6 ? (l(L, x.sibling), x = c(x, z), x.return = L, L = x) : (l(L, x), x = ff(z, L.mode, J), x.return = L, L = x), m(L)) : l(L, x);
    }
    return Mn;
  }
  var no = Tc(!0), Mv = Tc(!1), Yi = at(null), Vn = null, ae = null, Ha = null;
  function Ea() {
    Ha = ae = Vn = null;
  }
  function Td(n) {
    var r = Yi.current;
    jt(Yi), n._currentValue = r;
  }
  function wd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function ro(n, r) {
    Vn = n, Ha = ae = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (aa = !0), n.firstContext = null);
  }
  function Pa(n) {
    var r = n._currentValue;
    if (Ha !== n) if (n = { context: n, memoizedValue: r, next: null }, ae === null) {
      if (Vn === null) throw Error(w(308));
      ae = n, Vn.dependencies = { lanes: 0, firstContext: n };
    } else ae = ae.next = n;
    return r;
  }
  var uu = null;
  function jn(n) {
    uu === null ? uu = [n] : uu.push(n);
  }
  function Nv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, jn(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Qi(n, o);
  }
  function Qi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Dl = !1;
  function wc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ao(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function na(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, gt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Qi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, jn(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Qi(n, l);
  }
  function bc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, yi(n, l);
    }
  }
  function zv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function xc(n, r, l, o) {
    var c = n.updateQueue;
    Dl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, j = T.next;
      T.next = null, m === null ? d = j : m.next = j, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = j : E.next = j, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, W = j = T = null, E = d;
      do {
        var Y = E.lane, pe = E.eventTime;
        if ((o & Y) === Y) {
          W !== null && (W = W.next = {
            eventTime: pe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Se = n, Re = E;
            switch (Y = r, pe = l, Re.tag) {
              case 1:
                if (Se = Re.payload, typeof Se == "function") {
                  G = Se.call(pe, G, Y);
                  break e;
                }
                G = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = Re.payload, Y = typeof Se == "function" ? Se.call(pe, G, Y) : Se, Y == null) break e;
                G = le({}, G, Y);
                break e;
              case 2:
                Dl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else pe = { eventTime: pe, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (j = W = pe, T = G) : W = W.next = pe, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = G), c.baseState = T, c.firstBaseUpdate = j, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      yu |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function Uv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(w(191, c));
        c.call(o);
      }
    }
  }
  var hs = {}, oi = at(hs), io = at(hs), ms = at(hs);
  function ou(n) {
    if (n === hs) throw Error(w(174));
    return n;
  }
  function bd(n, r) {
    switch ($t(ms, r), $t(io, n), $t(oi, hs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : mn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = mn(r, n);
    }
    jt(oi), $t(oi, r);
  }
  function lo() {
    jt(oi), jt(io), jt(ms);
  }
  function Av(n) {
    ou(ms.current);
    var r = ou(oi.current), l = mn(r, n.type);
    r !== l && ($t(io, n), $t(oi, l));
  }
  function xd(n) {
    io.current === n && (jt(oi), jt(io));
  }
  var pn = at(0);
  function _c(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Dc = [];
  function _d() {
    for (var n = 0; n < Dc.length; n++) Dc[n]._workInProgressVersionPrimary = null;
    Dc.length = 0;
  }
  var kc = ft.ReactCurrentDispatcher, ys = ft.ReactCurrentBatchConfig, Te = 0, xe = null, qe = null, mt = null, Ca = !1, uo = !1, gs = 0, cy = 0;
  function Cr() {
    throw Error(w(321));
  }
  function Ss(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Na(n[l], r[l])) return !1;
    return !0;
  }
  function I(n, r, l, o, c, d) {
    if (Te = d, xe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, kc.current = n === null || n.memoizedState === null ? fy : an, n = l(o, c), uo) {
      d = 0;
      do {
        if (uo = !1, gs = 0, 25 <= d) throw Error(w(301));
        d += 1, mt = qe = null, r.updateQueue = null, kc.current = Ic, n = l(o, c);
      } while (uo);
    }
    if (kc.current = Rr, r = qe !== null && qe.next !== null, Te = 0, mt = qe = xe = null, Ca = !1, r) throw Error(w(300));
    return n;
  }
  function Fn() {
    var n = gs !== 0;
    return gs = 0, n;
  }
  function Le() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? xe.memoizedState = mt = n : mt = mt.next = n, mt;
  }
  function ir() {
    if (qe === null) {
      var n = xe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = qe.next;
    var r = mt === null ? xe.memoizedState : mt.next;
    if (r !== null) mt = r, qe = n;
    else {
      if (n === null) throw Error(w(310));
      qe = n, n = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, mt === null ? xe.memoizedState = mt = n : mt = mt.next = n;
    }
    return mt;
  }
  function Ra(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Wi(n) {
    var r = ir(), l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = qe, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, j = d;
      do {
        var W = j.lane;
        if ((Te & W) === W) T !== null && (T = T.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), o = j.hasEagerState ? j.eagerState : n(o, j.action);
        else {
          var G = {
            lane: W,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          };
          T === null ? (E = T = G, m = o) : T = T.next = G, xe.lanes |= W, yu |= W;
        }
        j = j.next;
      } while (j !== null && j !== d);
      T === null ? m = o : T.next = E, Na(o, r.memoizedState) || (aa = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, xe.lanes |= d, yu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Va(n) {
    var r = ir(), l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Na(d, r.memoizedState) || (aa = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function oo() {
  }
  function su(n, r) {
    var l = xe, o = ir(), c = r(), d = !Na(o.memoizedState, c);
    if (d && (o.memoizedState = c, aa = !0), o = o.queue, Es(Lc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || mt !== null && mt.memoizedState.tag & 1) {
      if (l.flags |= 2048, cu(9, Oc.bind(null, l, o, c, r), void 0, null), xn === null) throw Error(w(349));
      Te & 30 || so(l, r, c);
    }
    return c;
  }
  function so(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = xe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, xe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Oc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Mc(r) && Nc(n);
  }
  function Lc(n, r, l) {
    return l(function() {
      Mc(r) && Nc(n);
    });
  }
  function Mc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Na(n, l);
    } catch {
      return !0;
    }
  }
  function Nc(n) {
    var r = Qi(n, 1);
    r !== null && En(r, n, 1, -1);
  }
  function zc(n) {
    var r = Le();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ra, lastRenderedState: n }, r.queue = n, n = n.dispatch = Cs.bind(null, xe, n), [r.memoizedState, n];
  }
  function cu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = xe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, xe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Uc() {
    return ir().memoizedState;
  }
  function co(n, r, l, o) {
    var c = Le();
    xe.flags |= n, c.memoizedState = cu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = ir();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (qe !== null) {
      var m = qe.memoizedState;
      if (d = m.destroy, o !== null && Ss(o, m.deps)) {
        c.memoizedState = cu(r, l, d, o);
        return;
      }
    }
    xe.flags |= n, c.memoizedState = cu(1 | r, l, d, o);
  }
  function Ac(n, r) {
    return co(8390656, 8, n, r);
  }
  function Es(n, r) {
    return fo(2048, 8, n, r);
  }
  function jc(n, r) {
    return fo(4, 2, n, r);
  }
  function Fc(n, r) {
    return fo(4, 4, n, r);
  }
  function Hc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Pc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(4, 4, Hc.bind(null, r, n), l);
  }
  function po() {
  }
  function fu(n, r) {
    var l = ir();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ss(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Vc(n, r) {
    var l = ir();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ss(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Bc(n, r, l) {
    return Te & 21 ? (Na(l, r) || (l = Hu(), xe.lanes |= l, yu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, aa = !0), n.memoizedState = l);
  }
  function Dd(n, r) {
    var l = Mt;
    Mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ys.transition;
    ys.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = l, ys.transition = o;
    }
  }
  function $c() {
    return ir().memoizedState;
  }
  function jv(n, r, l) {
    var o = Ki(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, kd(n)) vo(r, l);
    else if (l = Nv(n, r, l, o), l !== null) {
      var c = tr();
      En(l, n, o, c), Ol(l, r, o);
    }
  }
  function Cs(n, r, l) {
    var o = Ki(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (kd(n)) vo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Na(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, jn(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Nv(n, r, c, o), l !== null && (c = tr(), En(l, n, o, c), Ol(l, r, o));
    }
  }
  function kd(n) {
    var r = n.alternate;
    return n === xe || r !== null && r === xe;
  }
  function vo(n, r) {
    uo = Ca = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ol(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, yi(n, l);
    }
  }
  var Rr = { readContext: Pa, useCallback: Cr, useContext: Cr, useEffect: Cr, useImperativeHandle: Cr, useInsertionEffect: Cr, useLayoutEffect: Cr, useMemo: Cr, useReducer: Cr, useRef: Cr, useState: Cr, useDebugValue: Cr, useDeferredValue: Cr, useTransition: Cr, useMutableSource: Cr, useSyncExternalStore: Cr, useId: Cr, unstable_isNewReconciler: !1 }, fy = { readContext: Pa, useCallback: function(n, r) {
    return Le().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Pa, useEffect: Ac, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(
      4194308,
      4,
      Hc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return co(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return co(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Le();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Le();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = jv.bind(null, xe, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Le();
    return n = { current: n }, r.memoizedState = n;
  }, useState: zc, useDebugValue: po, useDeferredValue: function(n) {
    return Le().memoizedState = n;
  }, useTransition: function() {
    var n = zc(!1), r = n[0];
    return n = Dd.bind(null, n[1]), Le().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = xe, c = Le();
    if (sn) {
      if (l === void 0) throw Error(w(407));
      l = l();
    } else {
      if (l = r(), xn === null) throw Error(w(349));
      Te & 30 || so(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ac(Lc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, cu(9, Oc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Le(), r = xn.identifierPrefix;
    if (sn) {
      var l = Ii, o = ar;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = cy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, an = {
    readContext: Pa,
    useCallback: fu,
    useContext: Pa,
    useEffect: Es,
    useImperativeHandle: Pc,
    useInsertionEffect: jc,
    useLayoutEffect: Fc,
    useMemo: Vc,
    useReducer: Wi,
    useRef: Uc,
    useState: function() {
      return Wi(Ra);
    },
    useDebugValue: po,
    useDeferredValue: function(n) {
      var r = ir();
      return Bc(r, qe.memoizedState, n);
    },
    useTransition: function() {
      var n = Wi(Ra)[0], r = ir().memoizedState;
      return [n, r];
    },
    useMutableSource: oo,
    useSyncExternalStore: su,
    useId: $c,
    unstable_isNewReconciler: !1
  }, Ic = { readContext: Pa, useCallback: fu, useContext: Pa, useEffect: Es, useImperativeHandle: Pc, useInsertionEffect: jc, useLayoutEffect: Fc, useMemo: Vc, useReducer: Va, useRef: Uc, useState: function() {
    return Va(Ra);
  }, useDebugValue: po, useDeferredValue: function(n) {
    var r = ir();
    return qe === null ? r.memoizedState = n : Bc(r, qe.memoizedState, n);
  }, useTransition: function() {
    var n = Va(Ra)[0], r = ir().memoizedState;
    return [n, r];
  }, useMutableSource: oo, useSyncExternalStore: su, useId: $c, unstable_isNewReconciler: !1 };
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = le({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function du(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : le({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var pu = { isMounted: function(n) {
    return (n = n._reactInternals) ? be(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = tr(), c = Ki(n), d = na(o, c);
    d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (En(r, n, c, o), bc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = tr(), c = Ki(n), d = na(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (En(r, n, c, o), bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = tr(), o = Ki(n), c = na(l, o);
    c.tag = 2, r != null && (c.callback = r), r = kl(n, c, o), r !== null && (En(r, n, o, l), bc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !rs(l, o) || !rs(c, d) : !0;
  }
  function Hv(n, r, l) {
    var o = !1, c = Ei, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Pa(d) : (c = dn(r) ? Xr : Ge.current, o = r.contextTypes, d = (o = o != null) ? Ua(n, c) : Ei), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = pu, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Pv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && pu.enqueueReplaceState(r, r.state, null);
  }
  function Od(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, wc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Pa(d) : (d = dn(r) ? Xr : Ge.current, c.context = Ua(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (du(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && pu.enqueueReplaceState(c, c.state, null), xc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ll(n, r) {
    try {
      var l = "", o = r;
      do
        l += ut(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ld(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Rs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Vv = typeof WeakMap == "function" ? WeakMap : Map;
  function Bv(n, r, l) {
    l = na(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      nf || (nf = !0, Pd = o), Rs(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = na(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Rs(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Rs(n, r), typeof o != "function" && (Ia === null ? Ia = /* @__PURE__ */ new Set([this]) : Ia.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ts(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Vv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Cy.bind(null, n, r, l), r.then(n, n));
  }
  function Iv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Md(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = na(-1, 1), r.tag = 2, kl(l, r, 1))), l.lanes |= 1), n);
  }
  var Yv = ft.ReactCurrentOwner, aa = !1;
  function On(n, r, l, o) {
    r.child = n === null ? Mv(r, null, l, o) : no(r, n.child, l, o);
  }
  function ho(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ro(r, c), o = I(n, r, l, o, d, c), l = Fn(), n !== null && !aa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (sn && l && gc(r), r.flags |= 1, On(n, r, o, c), r.child);
  }
  function Ml(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Yc(n, r, d, o, c)) : (n = sf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : rs, l(m, o) && n.ref === r.ref) return Ln(n, r, c);
    }
    return r.flags |= 1, n = Ul(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Yc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (rs(d, o) && n.ref === r.ref) if (aa = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (aa = !0);
      else return r.lanes = n.lanes, Ln(n, r, c);
    }
    return nt(n, r, l, o, c);
  }
  function ia(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $t(bo, la), la |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, $t(bo, la), la |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, $t(bo, la), la |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, $t(bo, la), la |= o;
    return On(n, r, c, l), r.child;
  }
  function vu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function nt(n, r, l, o, c) {
    var d = dn(l) ? Xr : Ge.current;
    return d = Ua(r, d), ro(r, c), l = I(n, r, l, o, d, c), o = Fn(), n !== null && !aa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (sn && o && gc(r), r.flags |= 1, On(n, r, l, c), r.child);
  }
  function ws(n, r, l, o, c) {
    if (dn(l)) {
      var d = !0;
      yc(r);
    } else d = !1;
    if (ro(r, c), r.stateNode === null) xs(n, r), Hv(r, l, o), Od(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, j = l.contextType;
      typeof j == "object" && j !== null ? j = Pa(j) : (j = dn(l) ? Xr : Ge.current, j = Ua(r, j));
      var W = l.getDerivedStateFromProps, G = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== j) && Pv(r, m, o, j), Dl = !1;
      var Y = r.memoizedState;
      m.state = Y, xc(r, o, m, c), T = r.memoizedState, E !== o || Y !== T || wn.current || Dl ? (typeof W == "function" && (du(r, l, W, o), T = r.memoizedState), (E = Dl || Fv(r, l, E, o, Y, T, j)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = j, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, ao(n, r), E = r.memoizedProps, j = r.type === r.elementType ? E : ra(r.type, E), m.props = j, G = r.pendingProps, Y = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Pa(T) : (T = dn(l) ? Xr : Ge.current, T = Ua(r, T));
      var pe = l.getDerivedStateFromProps;
      (W = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || Y !== T) && Pv(r, m, o, T), Dl = !1, Y = r.memoizedState, m.state = Y, xc(r, o, m, c);
      var Se = r.memoizedState;
      E !== G || Y !== Se || wn.current || Dl ? (typeof pe == "function" && (du(r, l, pe, o), Se = r.memoizedState), (j = Dl || Fv(r, l, j, o, Y, Se, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Se, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Se, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Se), m.props = o, m.state = Se, m.context = T, o = j) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Qc(n, r, l, o, d, c);
  }
  function Qc(n, r, l, o, c, d) {
    vu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && _v(r, l, !1), Ln(n, r, d);
    o = r.stateNode, Yv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = no(r, n.child, null, d), r.child = no(r, null, E, d)) : On(n, r, E, d), r.memoizedState = o.state, c && _v(r, l, !0), r.child;
  }
  function dy(n) {
    var r = n.stateNode;
    r.pendingContext ? xl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && xl(n, r.context, !1), bd(n, r.containerInfo);
  }
  function Qv(n, r, l, o, c) {
    return Sn(), Rd(c), r.flags |= 256, On(n, r, l, o), r.child;
  }
  var bs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Wv(n, r, l) {
    var o = r.pendingProps, c = pn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), $t(pn, c & 1), n === null)
      return Ec(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = cf(m, o, 0, null), n = Cu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = hu(l), r.memoizedState = bs, n) : Wc(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Nd(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ul(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ul(E, d) : (d = Cu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? hu(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = bs, o;
    }
    return d = n.child, n = d.sibling, o = Ul(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Wc(n, r) {
    return r = cf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Gc(n, r, l, o) {
    return o !== null && Rd(o), no(r, n.child, null, l), n = Wc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Nd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ld(Error(w(422))), Gc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = cf({ mode: "visible", children: o.children }, c, 0, null), d = Cu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && no(r, n.child, null, m), r.child.memoizedState = hu(m), r.memoizedState = bs, d);
    if (!(r.mode & 1)) return Gc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(w(419)), o = Ld(d, o, void 0), Gc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, aa || E) {
      if (o = xn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Qi(n, c), En(o, n, c, -1));
      }
      return Ls(), o = Ld(Error(w(421))), Gc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Id.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ta = ui(c.nextSibling), Sa = r, sn = !0, Fa = null, n !== null && (ea[Er++] = ar, ea[Er++] = Ii, ea[Er++] = ja, ar = n.id, Ii = n.overflow, ja = r), r = Wc(r, o.children), r.flags |= 4096, r);
  }
  function Gv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), wd(n.return, r, l);
  }
  function qc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function zd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (On(n, r, o.children, l), o = pn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Gv(n, l, r);
        else if (n.tag === 19) Gv(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if ($t(pn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && _c(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), qc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && _c(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        qc(r, !0, l, null, d);
        break;
      case "together":
        qc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function xs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ln(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), yu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(w(153));
    if (r.child !== null) {
      for (n = r.child, l = Ul(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ul(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Gi(n, r, l) {
    switch (r.tag) {
      case 3:
        dy(r), Sn();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        dn(r.type) && yc(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        $t(Yi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? ($t(pn, pn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Wv(n, r, l) : ($t(pn, pn.current & 1), n = Ln(n, r, l), n !== null ? n.sibling : null);
        $t(pn, pn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return zd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), $t(pn, pn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ia(n, r, l);
    }
    return Ln(n, r, l);
  }
  var Ri, mo, yo, Ba;
  Ri = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, mo = function() {
  }, yo = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ou(oi.current);
      var d = null;
      switch (l) {
        case "input":
          c = Wn(n, c), o = Wn(n, o), d = [];
          break;
        case "select":
          c = le({}, c, { value: void 0 }), o = le({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = mc);
      }
      kn(l, o);
      var m;
      l = null;
      for (j in c) if (!o.hasOwnProperty(j) && c.hasOwnProperty(j) && c[j] != null) if (j === "style") {
        var E = c[j];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (et.hasOwnProperty(j) ? d || (d = []) : (d = d || []).push(j, null));
      for (j in o) {
        var T = o[j];
        if (E = c != null ? c[j] : void 0, o.hasOwnProperty(j) && T !== E && (T != null || E != null)) if (j === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          j,
          l
        )), l = T;
        else j === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(j, T)) : j === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(j, "" + T) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (et.hasOwnProperty(j) ? (T != null && j === "onScroll" && en("scroll", n), d || E === T || (d = [])) : (d = d || []).push(j, T));
      }
      l && (d = d || []).push("style", l);
      var j = d;
      (r.updateQueue = j) && (r.flags |= 4);
    }
  }, Ba = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function bn(n, r) {
    if (!sn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Tr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function py(n, r, l) {
    var o = r.pendingProps;
    switch (Ed(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tr(r), null;
      case 1:
        return dn(r.type) && Aa(), Tr(r), null;
      case 3:
        return o = r.stateNode, lo(), jt(wn), jt(Ge), _d(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Cc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (Vd(Fa), Fa = null))), mo(n, r), Tr(r), null;
      case 5:
        xd(r);
        var c = ou(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) yo(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(w(166));
            return Tr(r), null;
          }
          if (n = ou(oi.current), Cc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Si] = r, o[au] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                en("cancel", o), en("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                en("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < us.length; c++) en(us[c], o);
                break;
              case "source":
                en("error", o);
                break;
              case "img":
              case "image":
              case "link":
                en(
                  "error",
                  o
                ), en("load", o);
                break;
              case "details":
                en("toggle", o);
                break;
              case "input":
                Pn(o, d), en("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, en("invalid", o);
                break;
              case "textarea":
                yr(o, d), en("invalid", o);
            }
            kn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && hc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && hc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : et.hasOwnProperty(m) && E != null && m === "onScroll" && en("scroll", o);
            }
            switch (l) {
              case "input":
                hr(o), $r(o, d, !0);
                break;
              case "textarea":
                hr(o), rr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = mc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Qr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Si] = r, n[au] = o, Ri(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = yn(l, o), l) {
                case "dialog":
                  en("cancel", n), en("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  en("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < us.length; c++) en(us[c], n);
                  c = o;
                  break;
                case "source":
                  en("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  en(
                    "error",
                    n
                  ), en("load", n), c = o;
                  break;
                case "details":
                  en("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = Wn(n, o), en("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = le({}, o, { value: void 0 }), en("invalid", n);
                  break;
                case "textarea":
                  yr(n, o), c = Yr(n, o), en("invalid", n);
                  break;
                default:
                  c = o;
              }
              kn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? At(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && di(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && pa(n, T) : typeof T == "number" && pa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (et.hasOwnProperty(d) ? T != null && d === "onScroll" && en("scroll", n) : T != null && Ie(n, d, T, m));
              }
              switch (l) {
                case "input":
                  hr(n), $r(n, o, !1);
                  break;
                case "textarea":
                  hr(n), rr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + dt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? mr(n, !!o.multiple, d, !1) : o.defaultValue != null && mr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = mc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Tr(r), null;
      case 6:
        if (n && r.stateNode != null) Ba(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(w(166));
          if (l = ou(ms.current), ou(oi.current), Cc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Si] = r, (d = o.nodeValue !== l) && (n = Sa, n !== null)) switch (n.tag) {
              case 3:
                hc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && hc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Si] = r, r.stateNode = o;
        }
        return Tr(r), null;
      case 13:
        if (jt(pn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && ta !== null && r.mode & 1 && !(r.flags & 128)) Ov(), Sn(), r.flags |= 98560, d = !1;
          else if (d = Cc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(w(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(w(317));
              d[Si] = r;
            } else Sn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Tr(r), d = !1;
          } else Fa !== null && (Vd(Fa), Fa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pn.current & 1 ? $n === 0 && ($n = 3) : Ls())), r.updateQueue !== null && (r.flags |= 4), Tr(r), null);
      case 4:
        return lo(), mo(n, r), n === null && Ju(r.stateNode.containerInfo), Tr(r), null;
      case 10:
        return Td(r.type._context), Tr(r), null;
      case 17:
        return dn(r.type) && Aa(), Tr(r), null;
      case 19:
        if (jt(pn), d = r.memoizedState, d === null) return Tr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) bn(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = _c(n), m !== null) {
              for (r.flags |= 128, bn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return $t(pn, pn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Lt() > _o && (r.flags |= 128, o = !0, bn(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = _c(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), bn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !sn) return Tr(r), null;
          } else 2 * Lt() - d.renderingStartTime > _o && l !== 1073741824 && (r.flags |= 128, o = !0, bn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Lt(), r.sibling = null, l = pn.current, $t(pn, o ? l & 1 | 2 : l & 1), r) : (Tr(r), null);
      case 22:
      case 23:
        return uf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? la & 1073741824 && (Tr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Tr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, r.tag));
  }
  function vy(n, r) {
    switch (Ed(r), r.tag) {
      case 1:
        return dn(r.type) && Aa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return lo(), jt(wn), jt(Ge), _d(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xd(r), null;
      case 13:
        if (jt(pn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(w(340));
          Sn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return jt(pn), null;
      case 4:
        return lo(), null;
      case 10:
        return Td(r.type._context), null;
      case 22:
      case 23:
        return uf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var go = !1, lr = !1, Kc = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function So(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      _n(n, r, o);
    }
    else l.current = null;
  }
  function Ud(n, r, l) {
    try {
      l();
    } catch (o) {
      _n(n, r, o);
    }
  }
  var Xc = !1;
  function hy(n, r) {
    if (dd = Ma, n = cc(), Pi(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, j = 0, W = 0, G = n, Y = null;
          t: for (; ; ) {
            for (var pe; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (T = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (pe = G.firstChild) !== null; )
              Y = G, G = pe;
            for (; ; ) {
              if (G === n) break t;
              if (Y === l && ++j === c && (E = m), Y === d && ++W === o && (T = m), (pe = G.nextSibling) !== null) break;
              G = Y, Y = G.parentNode;
            }
            G = pe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (nu = { focusedElem: n, selectionRange: l }, Ma = !1, ye = r; ye !== null; ) if (r = ye, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ye = n;
    else for (; ye !== null; ) {
      r = ye;
      try {
        var Se = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Se !== null) {
              var Re = Se.memoizedProps, Mn = Se.memoizedState, L = r.stateNode, x = L.getSnapshotBeforeUpdate(r.elementType === r.type ? Re : ra(r.type, Re), Mn);
              L.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var z = r.stateNode.containerInfo;
            z.nodeType === 1 ? z.textContent = "" : z.nodeType === 9 && z.documentElement && z.removeChild(z.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(w(163));
        }
      } catch (J) {
        _n(r, r.return, J);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ye = n;
        break;
      }
      ye = r.return;
    }
    return Se = Xc, Xc = !1, Se;
  }
  function Eo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ud(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Zc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Jc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function qv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, qv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Si], delete r[au], delete r[hd], delete r[sy], delete r[md])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ad(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Kv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ad(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function _s(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = mc));
    else if (o !== 4 && (n = n.child, n !== null)) for (_s(n, r, l), n = n.sibling; n !== null; ) _s(n, r, l), n = n.sibling;
  }
  function Co(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Co(n, r, l), n = n.sibling; n !== null; ) Co(n, r, l), n = n.sibling;
  }
  var vn = null, Jn = !1;
  function Mr(n, r, l) {
    for (l = l.child; l !== null; ) Ro(n, r, l), l = l.sibling;
  }
  function Ro(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(dl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        lr || So(l, r);
      case 6:
        var o = vn, c = Jn;
        vn = null, Mr(n, r, l), vn = o, Jn = c, vn !== null && (Jn ? (n = vn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vn.removeChild(l.stateNode));
        break;
      case 18:
        vn !== null && (Jn ? (n = vn, l = l.stateNode, n.nodeType === 8 ? Tl(n.parentNode, l) : n.nodeType === 1 && Tl(n, l), Sl(n)) : Tl(vn, l.stateNode));
        break;
      case 4:
        o = vn, c = Jn, vn = l.stateNode.containerInfo, Jn = !0, Mr(n, r, l), vn = o, Jn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!lr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ud(l, r, m), c = c.next;
          } while (c !== o);
        }
        Mr(n, r, l);
        break;
      case 1:
        if (!lr && (So(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          _n(l, r, E);
        }
        Mr(n, r, l);
        break;
      case 21:
        Mr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (lr = (o = lr) || l.memoizedState !== null, Mr(n, r, l), lr = o) : Mr(n, r, l);
        break;
      default:
        Mr(n, r, l);
    }
  }
  function To(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Kc()), r.forEach(function(o) {
        var c = Ry.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function er(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              vn = E.stateNode, Jn = !1;
              break e;
            case 3:
              vn = E.stateNode.containerInfo, Jn = !0;
              break e;
            case 4:
              vn = E.stateNode.containerInfo, Jn = !0;
              break e;
          }
          E = E.return;
        }
        if (vn === null) throw Error(w(160));
        Ro(d, m, c), vn = null, Jn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (j) {
        _n(c, r, j);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Xv(r, n), r = r.sibling;
  }
  function Xv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (er(r, n), Ti(n), o & 4) {
          try {
            Eo(3, n, n.return), Zc(3, n);
          } catch (Re) {
            _n(n, n.return, Re);
          }
          try {
            Eo(5, n, n.return);
          } catch (Re) {
            _n(n, n.return, Re);
          }
        }
        break;
      case 1:
        er(r, n), Ti(n), o & 512 && l !== null && So(l, l.return);
        break;
      case 5:
        if (er(r, n), Ti(n), o & 512 && l !== null && So(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            pa(c, "");
          } catch (Re) {
            _n(n, n.return, Re);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && zn(c, d), yn(E, m);
            var j = yn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], G = T[m + 1];
              W === "style" ? At(c, G) : W === "dangerouslySetInnerHTML" ? di(c, G) : W === "children" ? pa(c, G) : Ie(c, W, G, j);
            }
            switch (E) {
              case "input":
                Dn(c, d);
                break;
              case "textarea":
                da(c, d);
                break;
              case "select":
                var Y = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var pe = d.value;
                pe != null ? mr(c, !!d.multiple, pe, !1) : Y !== !!d.multiple && (d.defaultValue != null ? mr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : mr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[au] = d;
          } catch (Re) {
            _n(n, n.return, Re);
          }
        }
        break;
      case 6:
        if (er(r, n), Ti(n), o & 4) {
          if (n.stateNode === null) throw Error(w(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Re) {
            _n(n, n.return, Re);
          }
        }
        break;
      case 3:
        if (er(r, n), Ti(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Sl(r.containerInfo);
        } catch (Re) {
          _n(n, n.return, Re);
        }
        break;
      case 4:
        er(r, n), Ti(n);
        break;
      case 13:
        er(r, n), Ti(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (tf = Lt())), o & 4 && To(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (lr = (j = lr) || W, er(r, n), lr = j) : er(r, n), Ti(n), o & 8192) {
          if (j = n.memoizedState !== null, (n.stateNode.isHidden = j) && !W && n.mode & 1) for (ye = n, W = n.child; W !== null; ) {
            for (G = ye = W; ye !== null; ) {
              switch (Y = ye, pe = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Eo(4, Y, Y.return);
                  break;
                case 1:
                  So(Y, Y.return);
                  var Se = Y.stateNode;
                  if (typeof Se.componentWillUnmount == "function") {
                    o = Y, l = Y.return;
                    try {
                      r = o, Se.props = r.memoizedProps, Se.state = r.memoizedState, Se.componentWillUnmount();
                    } catch (Re) {
                      _n(o, l, Re);
                    }
                  }
                  break;
                case 5:
                  So(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    Zv(G);
                    continue;
                  }
              }
              pe !== null ? (pe.return = Y, ye = pe) : Zv(G);
            }
            W = W.sibling;
          }
          e: for (W = null, G = n; ; ) {
            if (G.tag === 5) {
              if (W === null) {
                W = G;
                try {
                  c = G.stateNode, j ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, T = G.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = ot("display", m));
                } catch (Re) {
                  _n(n, n.return, Re);
                }
              }
            } else if (G.tag === 6) {
              if (W === null) try {
                G.stateNode.nodeValue = j ? "" : G.memoizedProps;
              } catch (Re) {
                _n(n, n.return, Re);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === n) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === n) break e;
              W === G && (W = null), G = G.return;
            }
            W === G && (W = null), G.sibling.return = G.return, G = G.sibling;
          }
        }
        break;
      case 19:
        er(r, n), Ti(n), o & 4 && To(n);
        break;
      case 21:
        break;
      default:
        er(
          r,
          n
        ), Ti(n);
    }
  }
  function Ti(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ad(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(w(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (pa(c, ""), o.flags &= -33);
            var d = Kv(n);
            Co(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Kv(n);
            _s(n, E, m);
            break;
          default:
            throw Error(w(161));
        }
      } catch (T) {
        _n(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function my(n, r, l) {
    ye = n, jd(n);
  }
  function jd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ye !== null; ) {
      var c = ye, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || go;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || lr;
          E = go;
          var j = lr;
          if (go = m, (lr = T) && !j) for (ye = c; ye !== null; ) m = ye, T = m.child, m.tag === 22 && m.memoizedState !== null ? Fd(c) : T !== null ? (T.return = m, ye = T) : Fd(c);
          for (; d !== null; ) ye = d, jd(d), d = d.sibling;
          ye = c, go = E, lr = j;
        }
        wo(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ye = d) : wo(n);
    }
  }
  function wo(n) {
    for (; ye !== null; ) {
      var r = ye;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              lr || Zc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !lr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Uv(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Uv(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var j = r.alternate;
                if (j !== null) {
                  var W = j.memoizedState;
                  if (W !== null) {
                    var G = W.dehydrated;
                    G !== null && Sl(G);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
          lr || r.flags & 512 && Jc(r);
        } catch (Y) {
          _n(r, r.return, Y);
        }
      }
      if (r === n) {
        ye = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function Zv(n) {
    for (; ye !== null; ) {
      var r = ye;
      if (r === n) {
        ye = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function Fd(n) {
    for (; ye !== null; ) {
      var r = ye;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Zc(4, r);
            } catch (T) {
              _n(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                _n(r, c, T);
              }
            }
            var d = r.return;
            try {
              Jc(r);
            } catch (T) {
              _n(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Jc(r);
            } catch (T) {
              _n(r, m, T);
            }
        }
      } catch (T) {
        _n(r, r.return, T);
      }
      if (r === n) {
        ye = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ye = E;
        break;
      }
      ye = r.return;
    }
  }
  var yy = Math.ceil, mu = ft.ReactCurrentDispatcher, ef = ft.ReactCurrentOwner, $a = ft.ReactCurrentBatchConfig, gt = 0, xn = null, cn = null, Bn = 0, la = 0, bo = at(0), $n = 0, Ds = null, yu = 0, xo = 0, Hd = 0, Nl = null, wr = null, tf = 0, _o = 1 / 0, qi = null, nf = !1, Pd = null, Ia = null, Do = !1, Ya = null, rf = 0, ks = 0, af = null, Os = -1, gu = 0;
  function tr() {
    return gt & 6 ? Lt() : Os !== -1 ? Os : Os = Lt();
  }
  function Ki(n) {
    return n.mode & 1 ? gt & 2 && Bn !== 0 ? Bn & -Bn : Rc.transition !== null ? (gu === 0 && (gu = Hu()), gu) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Zo(n.type)), n) : 1;
  }
  function En(n, r, l, o) {
    if (50 < ks) throw ks = 0, af = null, Error(w(185));
    zi(n, l, o), (!(gt & 2) || n !== xn) && (n === xn && (!(gt & 2) && (xo |= l), $n === 4 && wi(n, Bn)), In(n, o), l === 1 && gt === 0 && !(r.mode & 1) && (_o = Lt() + 500, Zn && Zr()));
  }
  function In(n, r) {
    var l = n.callbackNode;
    hl(n, r);
    var o = Or(n, n === xn ? Bn : 0);
    if (o === 0) l !== null && un(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && un(l), r === 1) n.tag === 0 ? gd(ko.bind(null, n)) : yd(ko.bind(null, n)), vd(function() {
        !(gt & 6) && Zr();
      }), l = null;
      else {
        switch (Vu(o)) {
          case 1:
            l = Dr;
            break;
          case 4:
            l = ct;
            break;
          case 16:
            l = Oa;
            break;
          case 536870912:
            l = ju;
            break;
          default:
            l = Oa;
        }
        l = lh(l, lf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function lf(n, r) {
    if (Os = -1, gu = 0, gt & 6) throw Error(w(327));
    var l = n.callbackNode;
    if (Oo() && n.callbackNode !== l) return null;
    var o = Or(n, n === xn ? Bn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = gt;
      gt |= 2;
      var d = eh();
      (xn !== n || Bn !== r) && (qi = null, _o = Lt() + 500, Eu(n, r));
      do
        try {
          Sy();
          break;
        } catch (E) {
          Jv(n, E);
        }
      while (!0);
      Ea(), mu.current = d, gt = c, cn !== null ? r = 0 : (xn = null, Bn = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = ml(n), c !== 0 && (o = c, r = Su(n, c))), r === 1) throw l = Ds, Eu(n, 0), wi(n, o), In(n, Lt()), l;
      if (r === 6) wi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Bd(c) && (r = of(n, o), r === 2 && (d = ml(n), d !== 0 && (o = d, r = Su(n, d))), r === 1)) throw l = Ds, Eu(n, 0), wi(n, o), In(n, Lt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            zl(n, wr, qi);
            break;
          case 3:
            if (wi(n, o), (o & 130023424) === o && (r = tf + 500 - Lt(), 10 < r)) {
              if (Or(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                tr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ru(zl.bind(null, n, wr, qi), r);
              break;
            }
            zl(n, wr, qi);
            break;
          case 4:
            if (wi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Lt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * yy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ru(zl.bind(null, n, wr, qi), o);
              break;
            }
            zl(n, wr, qi);
            break;
          case 5:
            zl(n, wr, qi);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return In(n, Lt()), n.callbackNode === l ? lf.bind(null, n) : null;
  }
  function Su(n, r) {
    var l = Nl;
    return n.current.memoizedState.isDehydrated && (Eu(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = wr, wr = l, r !== null && Vd(r)), n;
  }
  function Vd(n) {
    wr === null ? wr = n : wr.push.apply(wr, n);
  }
  function Bd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Na(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function wi(n, r) {
    for (r &= ~Hd, r &= ~xo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function ko(n) {
    if (gt & 6) throw Error(w(327));
    Oo();
    var r = Or(n, 0);
    if (!(r & 1)) return In(n, Lt()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ml(n);
      o !== 0 && (r = o, l = Su(n, o));
    }
    if (l === 1) throw l = Ds, Eu(n, 0), wi(n, r), In(n, Lt()), l;
    if (l === 6) throw Error(w(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, zl(n, wr, qi), In(n, Lt()), null;
  }
  function $d(n, r) {
    var l = gt;
    gt |= 1;
    try {
      return n(r);
    } finally {
      gt = l, gt === 0 && (_o = Lt() + 500, Zn && Zr());
    }
  }
  function bi(n) {
    Ya !== null && Ya.tag === 0 && !(gt & 6) && Oo();
    var r = gt;
    gt |= 1;
    var l = $a.transition, o = Mt;
    try {
      if ($a.transition = null, Mt = 1, n) return n();
    } finally {
      Mt = o, $a.transition = l, gt = r, !(gt & 6) && Zr();
    }
  }
  function uf() {
    la = bo.current, jt(bo);
  }
  function Eu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, xv(l)), cn !== null) for (l = cn.return; l !== null; ) {
      var o = l;
      switch (Ed(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Aa();
          break;
        case 3:
          lo(), jt(wn), jt(Ge), _d();
          break;
        case 5:
          xd(o);
          break;
        case 4:
          lo();
          break;
        case 13:
          jt(pn);
          break;
        case 19:
          jt(pn);
          break;
        case 10:
          Td(o.type._context);
          break;
        case 22:
        case 23:
          uf();
      }
      l = l.return;
    }
    if (xn = n, cn = n = Ul(n.current, null), Bn = la = r, $n = 0, Ds = null, Hd = xo = yu = 0, wr = Nl = null, uu !== null) {
      for (r = 0; r < uu.length; r++) if (l = uu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      uu = null;
    }
    return n;
  }
  function Jv(n, r) {
    do {
      var l = cn;
      try {
        if (Ea(), kc.current = Rr, Ca) {
          for (var o = xe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ca = !1;
        }
        if (Te = 0, mt = qe = xe = null, uo = !1, gs = 0, ef.current = null, l === null || l.return === null) {
          $n = 1, Ds = r, cn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Bn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var j = T, W = E, G = W.tag;
            if (!(W.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var Y = W.alternate;
              Y ? (W.updateQueue = Y.updateQueue, W.memoizedState = Y.memoizedState, W.lanes = Y.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var pe = Iv(m);
            if (pe !== null) {
              pe.flags &= -257, Md(pe, m, E, d, r), pe.mode & 1 && Ts(d, j, r), r = pe, T = j;
              var Se = r.updateQueue;
              if (Se === null) {
                var Re = /* @__PURE__ */ new Set();
                Re.add(T), r.updateQueue = Re;
              } else Se.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Ts(d, j, r), Ls();
                break e;
              }
              T = Error(w(426));
            }
          } else if (sn && E.mode & 1) {
            var Mn = Iv(m);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), Md(Mn, m, E, d, r), Rd(Ll(T, E));
              break e;
            }
          }
          d = T = Ll(T, E), $n !== 4 && ($n = 2), Nl === null ? Nl = [d] : Nl.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = Bv(d, T, r);
                zv(d, L);
                break e;
              case 1:
                E = T;
                var x = d.type, z = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && (Ia === null || !Ia.has(z)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = $v(d, E, r);
                  zv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        nh(l);
      } catch (we) {
        r = we, cn === l && l !== null && (cn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eh() {
    var n = mu.current;
    return mu.current = Rr, n === null ? Rr : n;
  }
  function Ls() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), xn === null || !(yu & 268435455) && !(xo & 268435455) || wi(xn, Bn);
  }
  function of(n, r) {
    var l = gt;
    gt |= 2;
    var o = eh();
    (xn !== n || Bn !== r) && (qi = null, Eu(n, r));
    do
      try {
        gy();
        break;
      } catch (c) {
        Jv(n, c);
      }
    while (!0);
    if (Ea(), gt = l, mu.current = o, cn !== null) throw Error(w(261));
    return xn = null, Bn = 0, $n;
  }
  function gy() {
    for (; cn !== null; ) th(cn);
  }
  function Sy() {
    for (; cn !== null && !Sr(); ) th(cn);
  }
  function th(n) {
    var r = ih(n.alternate, n, la);
    n.memoizedProps = n.pendingProps, r === null ? nh(n) : cn = r, ef.current = null;
  }
  function nh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = vy(l, r), l !== null) {
          l.flags &= 32767, cn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $n = 6, cn = null;
          return;
        }
      } else if (l = py(l, r, la), l !== null) {
        cn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        cn = r;
        return;
      }
      cn = r = n;
    } while (r !== null);
    $n === 0 && ($n = 5);
  }
  function zl(n, r, l) {
    var o = Mt, c = $a.transition;
    try {
      $a.transition = null, Mt = 1, Ey(n, r, l, o);
    } finally {
      $a.transition = c, Mt = o;
    }
    return null;
  }
  function Ey(n, r, l, o) {
    do
      Oo();
    while (Ya !== null);
    if (gt & 6) throw Error(w(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(w(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Wf(n, d), n === xn && (cn = xn = null, Bn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Do || (Do = !0, lh(Oa, function() {
      return Oo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = $a.transition, $a.transition = null;
      var m = Mt;
      Mt = 1;
      var E = gt;
      gt |= 4, ef.current = null, hy(n, l), Xv(l, n), fc(nu), Ma = !!dd, nu = dd = null, n.current = l, my(l), mi(), gt = E, Mt = m, $a.transition = d;
    } else n.current = l;
    if (Do && (Do = !1, Ya = n, rf = c), d = n.pendingLanes, d === 0 && (Ia = null), qo(l.stateNode), In(n, Lt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (nf) throw nf = !1, n = Pd, Pd = null, n;
    return rf & 1 && n.tag !== 0 && Oo(), d = n.pendingLanes, d & 1 ? n === af ? ks++ : (ks = 0, af = n) : ks = 0, Zr(), null;
  }
  function Oo() {
    if (Ya !== null) {
      var n = Vu(rf), r = $a.transition, l = Mt;
      try {
        if ($a.transition = null, Mt = 16 > n ? 16 : n, Ya === null) var o = !1;
        else {
          if (n = Ya, Ya = null, rf = 0, gt & 6) throw Error(w(331));
          var c = gt;
          for (gt |= 4, ye = n.current; ye !== null; ) {
            var d = ye, m = d.child;
            if (ye.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var j = E[T];
                  for (ye = j; ye !== null; ) {
                    var W = ye;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Eo(8, W, d);
                    }
                    var G = W.child;
                    if (G !== null) G.return = W, ye = G;
                    else for (; ye !== null; ) {
                      W = ye;
                      var Y = W.sibling, pe = W.return;
                      if (qv(W), W === j) {
                        ye = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = pe, ye = Y;
                        break;
                      }
                      ye = pe;
                    }
                  }
                }
                var Se = d.alternate;
                if (Se !== null) {
                  var Re = Se.child;
                  if (Re !== null) {
                    Se.child = null;
                    do {
                      var Mn = Re.sibling;
                      Re.sibling = null, Re = Mn;
                    } while (Re !== null);
                  }
                }
                ye = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ye = m;
            else e: for (; ye !== null; ) {
              if (d = ye, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Eo(9, d, d.return);
              }
              var L = d.sibling;
              if (L !== null) {
                L.return = d.return, ye = L;
                break e;
              }
              ye = d.return;
            }
          }
          var x = n.current;
          for (ye = x; ye !== null; ) {
            m = ye;
            var z = m.child;
            if (m.subtreeFlags & 2064 && z !== null) z.return = m, ye = z;
            else e: for (m = x; ye !== null; ) {
              if (E = ye, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zc(9, E);
                }
              } catch (we) {
                _n(E, E.return, we);
              }
              if (E === m) {
                ye = null;
                break e;
              }
              var J = E.sibling;
              if (J !== null) {
                J.return = E.return, ye = J;
                break e;
              }
              ye = E.return;
            }
          }
          if (gt = c, Zr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(dl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Mt = l, $a.transition = r;
      }
    }
    return !1;
  }
  function rh(n, r, l) {
    r = Ll(l, r), r = Bv(n, r, 1), n = kl(n, r, 1), r = tr(), n !== null && (zi(n, 1, r), In(n, r));
  }
  function _n(n, r, l) {
    if (n.tag === 3) rh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        rh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ia === null || !Ia.has(o))) {
          n = Ll(l, n), n = $v(r, n, 1), r = kl(r, n, 1), n = tr(), r !== null && (zi(r, 1, n), In(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Cy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = tr(), n.pingedLanes |= n.suspendedLanes & l, xn === n && (Bn & l) === l && ($n === 4 || $n === 3 && (Bn & 130023424) === Bn && 500 > Lt() - tf ? Eu(n, 0) : Hd |= l), In(n, r);
  }
  function ah(n, r) {
    r === 0 && (n.mode & 1 ? (r = pl, pl <<= 1, !(pl & 130023424) && (pl = 4194304)) : r = 1);
    var l = tr();
    n = Qi(n, r), n !== null && (zi(n, r, l), In(n, l));
  }
  function Id(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ah(n, l);
  }
  function Ry(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(w(314));
    }
    o !== null && o.delete(r), ah(n, l);
  }
  var ih;
  ih = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || wn.current) aa = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return aa = !1, Gi(n, r, l);
      aa = !!(n.flags & 131072);
    }
    else aa = !1, sn && r.flags & 1048576 && Sd(r, to, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        xs(n, r), n = r.pendingProps;
        var c = Ua(r, Ge.current);
        ro(r, l), c = I(null, r, o, n, c, l);
        var d = Fn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, dn(o) ? (d = !0, yc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, wc(r), c.updater = pu, r.stateNode = c, c._reactInternals = r, Od(r, o, n, l), r = Qc(null, r, o, !0, d, l)) : (r.tag = 0, sn && d && gc(r), On(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (xs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ty(o), n = ra(o, n), c) {
            case 0:
              r = nt(null, r, o, n, l);
              break e;
            case 1:
              r = ws(null, r, o, n, l);
              break e;
            case 11:
              r = ho(null, r, o, n, l);
              break e;
            case 14:
              r = Ml(null, r, o, ra(o.type, n), l);
              break e;
          }
          throw Error(w(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), nt(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), ws(n, r, o, c, l);
      case 3:
        e: {
          if (dy(r), n === null) throw Error(w(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, ao(n, r), xc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ll(Error(w(423)), r), r = Qv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Ll(Error(w(424)), r), r = Qv(n, r, o, l, c);
            break e;
          } else for (ta = ui(r.stateNode.containerInfo.firstChild), Sa = r, sn = !0, Fa = null, l = Mv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Sn(), o === c) {
              r = Ln(n, r, l);
              break e;
            }
            On(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Av(r), n === null && Ec(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, cs(o, c) ? m = null : d !== null && cs(o, d) && (r.flags |= 32), vu(n, r), On(n, r, m, l), r.child;
      case 6:
        return n === null && Ec(r), null;
      case 13:
        return Wv(n, r, l);
      case 4:
        return bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = no(r, null, o, l) : On(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), ho(n, r, o, c, l);
      case 7:
        return On(n, r, r.pendingProps, l), r.child;
      case 8:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, $t(Yi, o._currentValue), o._currentValue = m, d !== null) if (Na(d.value, m)) {
            if (d.children === c.children && !wn.current) {
              r = Ln(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = na(-1, l & -l), T.tag = 2;
                    var j = d.updateQueue;
                    if (j !== null) {
                      j = j.shared;
                      var W = j.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), j.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), wd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(w(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), wd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          On(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ro(r, l), c = Pa(c), o = o(c), r.flags |= 1, On(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ra(o, r.pendingProps), c = ra(o.type, c), Ml(n, r, o, c, l);
      case 15:
        return Yc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), xs(n, r), r.tag = 1, dn(o) ? (n = !0, yc(r)) : n = !1, ro(r, l), Hv(r, o, c), Od(r, o, c, l), Qc(null, r, o, !0, n, l);
      case 19:
        return zd(n, r, l);
      case 22:
        return ia(n, r, l);
    }
    throw Error(w(156, r.tag));
  };
  function lh(n, r) {
    return Xt(n, r);
  }
  function uh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qa(n, r, l, o) {
    return new uh(n, r, l, o);
  }
  function Yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ty(n) {
    if (typeof n == "function") return Yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Rn) return 11;
      if (n === Ft) return 14;
    }
    return 2;
  }
  function Ul(n, r) {
    var l = n.alternate;
    return l === null ? (l = Qa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function sf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Yd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Be:
        return Cu(l.children, c, d, r);
      case tn:
        m = 8, c |= 8;
        break;
      case ln:
        return n = Qa(12, l, r, c | 2), n.elementType = ln, n.lanes = d, n;
      case Ae:
        return n = Qa(13, l, r, c), n.elementType = Ae, n.lanes = d, n;
      case rt:
        return n = Qa(19, l, r, c), n.elementType = rt, n.lanes = d, n;
      case ge:
        return cf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Gt:
            m = 10;
            break e;
          case Ot:
            m = 9;
            break e;
          case Rn:
            m = 11;
            break e;
          case Ft:
            m = 14;
            break e;
          case Dt:
            m = 16, o = null;
            break e;
        }
        throw Error(w(130, n == null ? n : typeof n, ""));
    }
    return r = Qa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Cu(n, r, l, o) {
    return n = Qa(7, n, o, r), n.lanes = l, n;
  }
  function cf(n, r, l, o) {
    return n = Qa(22, n, o, r), n.elementType = ge, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function ff(n, r, l) {
    return n = Qa(6, n, null, r), n.lanes = l, n;
  }
  function Ms(n, r, l) {
    return r = Qa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ns(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pu(0), this.expirationTimes = Pu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Qd(n, r, l, o, c, d, m, E, T) {
    return n = new Ns(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Qa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wc(d), n;
  }
  function oh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: lt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Wd(n) {
    if (!n) return Ei;
    n = n._reactInternals;
    e: {
      if (be(n) !== n || n.tag !== 1) throw Error(w(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (dn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(w(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (dn(l)) return ps(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = Qd(l, o, !0, n, c, d, m, E, T), n.context = Wd(null), l = n.current, o = tr(), c = Ki(l), d = na(o, c), d.callback = r ?? null, kl(l, d, c), n.current.lanes = c, zi(n, c, o), In(n, o), n;
  }
  function df(n, r, l, o) {
    var c = r.current, d = tr(), m = Ki(c);
    return l = Wd(l), r.context === null ? r.context = l : r.pendingContext = l, r = na(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = kl(c, r, m), n !== null && (En(n, c, m, d), bc(n, c, m)), m;
  }
  function zs(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function sh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function qd(n, r) {
    sh(n, r), (n = n.alternate) && sh(n, r);
  }
  function wy() {
    return null;
  }
  var Kd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function pf(n) {
    this._internalRoot = n;
  }
  Us.prototype.render = pf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(w(409));
    df(n, r, null, null);
  }, Us.prototype.unmount = pf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      bi(function() {
        df(null, n, null, null);
      }), r[$i] = null;
    }
  };
  function Us(n) {
    this._internalRoot = n;
  }
  Us.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = $u();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Bt.length && r !== 0 && r < Bt[l].priority; l++) ;
      Bt.splice(l, 0, n), l === 0 && ac(n);
    }
  };
  function Al(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function vf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ch() {
  }
  function by(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var j = zs(m);
          d.call(j);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", ch);
      return n._reactRootContainer = m, n[$i] = m.current, Ju(n.nodeType === 8 ? n.parentNode : n), bi(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var j = zs(T);
        E.call(j);
      };
    }
    var T = Qd(n, 0, !1, null, null, !1, !1, "", ch);
    return n._reactRootContainer = T, n[$i] = T.current, Ju(n.nodeType === 8 ? n.parentNode : n), bi(function() {
      df(r, T, l, o);
    }), T;
  }
  function hf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = zs(m);
          E.call(T);
        };
      }
      df(r, m, n, c);
    } else m = by(l, r, n, c, o);
    return zs(m);
  }
  ql = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ni(r.pendingLanes);
          l !== 0 && (yi(r, l | 1), In(r, Lt()), !(gt & 6) && (_o = Lt() + 500, Zr()));
        }
        break;
      case 13:
        bi(function() {
          var o = Qi(n, 1);
          if (o !== null) {
            var c = tr();
            En(o, n, 1, c);
          }
        }), qd(n, 1);
    }
  }, Bu = function(n) {
    if (n.tag === 13) {
      var r = Qi(n, 134217728);
      if (r !== null) {
        var l = tr();
        En(r, n, 134217728, l);
      }
      qd(n, 134217728);
    }
  }, Rt = function(n) {
    if (n.tag === 13) {
      var r = Ki(n), l = Qi(n, r);
      if (l !== null) {
        var o = tr();
        En(l, n, r, o);
      }
      qd(n, r);
    }
  }, $u = function() {
    return Mt;
  }, Iu = function(n, r) {
    var l = Mt;
    try {
      return Mt = n, r();
    } finally {
      Mt = l;
    }
  }, xr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Dn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Me(o);
              if (!c) throw Error(w(90));
              Br(o), Dn(o, c);
            }
          }
        }
        break;
      case "textarea":
        da(n, l);
        break;
      case "select":
        r = l.value, r != null && mr(n, !!l.multiple, r, !1);
    }
  }, Gl = $d, Au = bi;
  var xy = { usingClientEntryPoint: !1, Events: [ds, eo, Me, ka, sl, $d] }, As = { findFiberByHostInstance: za, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fh = { bundleType: As.bundleType, version: As.version, rendererPackageName: As.rendererPackageName, rendererConfig: As.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = st(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: As.findFiberByHostInstance || wy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mf.isDisabled && mf.supportsFiber) try {
      dl = mf.inject(fh), Wr = mf;
    } catch {
    }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, Za.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Al(r)) throw Error(w(200));
    return oh(n, r, null, l);
  }, Za.createRoot = function(n, r) {
    if (!Al(n)) throw Error(w(299));
    var l = !1, o = "", c = Kd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Qd(n, 1, !1, null, null, l, !1, o, c), n[$i] = r.current, Ju(n.nodeType === 8 ? n.parentNode : n), new pf(r);
  }, Za.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(w(188)) : (n = Object.keys(n).join(","), Error(w(268, n)));
    return n = st(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return bi(n);
  }, Za.hydrate = function(n, r, l) {
    if (!vf(r)) throw Error(w(200));
    return hf(null, n, r, !0, l);
  }, Za.hydrateRoot = function(n, r, l) {
    if (!Al(n)) throw Error(w(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Kd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[$i] = r.current, Ju(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Us(r);
  }, Za.render = function(n, r, l) {
    if (!vf(r)) throw Error(w(200));
    return hf(null, n, r, !1, l);
  }, Za.unmountComponentAtNode = function(n) {
    if (!vf(n)) throw Error(w(40));
    return n._reactRootContainer ? (bi(function() {
      hf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$i] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = $d, Za.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!vf(l)) throw Error(w(200));
    if (n == null || n._reactInternals === void 0) throw Error(w(38));
    return hf(n, r, l, !1, o);
  }, Za.version = "18.3.1-next-f1338f8080-20240426", Za;
}
var Ja = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dR;
function yD() {
  return dR || (dR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var D = Da, O = gR(), w = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ce = !1;
    function et(e) {
      ce = e;
    }
    function ze(e) {
      if (!ce) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        vt("warn", e, a);
      }
    }
    function S(e) {
      if (!ce) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        vt("error", e, a);
      }
    }
    function vt(e, t, a) {
      {
        var i = w.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ne = 0, oe = 1, Ke = 2, te = 3, de = 4, Z = 5, me = 6, tt = 7, Ye = 8, bt = 9, Ve = 10, Ie = 11, ft = 12, De = 13, lt = 14, Be = 15, tn = 16, ln = 17, Gt = 18, Ot = 19, Rn = 21, Ae = 22, rt = 23, Ft = 24, Dt = 25, ge = !0, ee = !1, ke = !1, le = !1, k = !1, B = !0, je = !1, Qe = !0, ut = !0, it = !0, Et = !0, dt = /* @__PURE__ */ new Set(), pt = {}, nn = {};
    function hr(e, t) {
      Br(e, t), Br(e + "Capture", t);
    }
    function Br(e, t) {
      pt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), pt[e] = t;
      {
        var a = e.toLowerCase();
        nn[a] = e, e === "onDoubleClick" && (nn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        dt.add(t[i]);
    }
    var hn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Wn = Object.prototype.hasOwnProperty;
    function Pn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function zn(e) {
      try {
        return Dn(e), !1;
      } catch {
        return !0;
      }
    }
    function Dn(e) {
      return "" + e;
    }
    function $r(e, t) {
      if (zn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), Dn(e);
    }
    function Ir(e) {
      if (zn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pn(e)), Dn(e);
    }
    function Gn(e, t) {
      if (zn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), Dn(e);
    }
    function mr(e, t) {
      if (zn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), Dn(e);
    }
    function Yr(e) {
      if (zn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Pn(e)), Dn(e);
    }
    function yr(e) {
      if (zn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Pn(e)), Dn(e);
    }
    var da = 0, rr = 1, Qr = 2, mn = 3, br = 4, di = 5, pa = 6, re = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Oe = re + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + re + "][" + Oe + "]*$"), At = {}, Ht = {};
    function kn(e) {
      return Wn.call(Ht, e) ? !0 : Wn.call(At, e) ? !1 : ot.test(e) ? (Ht[e] = !0, !0) : (At[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === da : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gr(e, t, a, i) {
      if (a !== null && a.type === da)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Qt(e, t, a, i) {
      if (t === null || typeof t > "u" || gr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case mn:
            return !t;
          case br:
            return t === !1;
          case di:
            return isNaN(t);
          case pa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function xr(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function Pt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Qr || t === mn || t === br, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, ei = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ei.forEach(function(e) {
      Vt[e] = new Pt(
        e,
        da,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Vt[t] = new Pt(
        t,
        rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        Qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        Qr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        mn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        mn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        br,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        pa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        di,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, sl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, sl);
      Vt[t] = new Pt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, sl);
      Vt[t] = new Pt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, sl);
      Vt[t] = new Pt(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Gl = "xlinkHref";
    Vt[Gl] = new Pt(
      "xlinkHref",
      rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Au = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ni = !1;
    function cl(e) {
      !Ni && Au.test(e) && (Ni = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function va(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        $r(a, t), i.sanitizeURL && cl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === br) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Qt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Qt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === mn)
            return a;
          f = e.getAttribute(s);
        }
        return Qt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function pi(e, t, a, i) {
      {
        if (!kn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return $r(a, t), u === "" + a ? a : u;
      }
    }
    function ha(e, t, a, i) {
      var u = xr(t);
      if (!yn(t, u, i)) {
        if (Qt(t, a, u, i) && (a = null), i || u === null) {
          if (kn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : ($r(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === mn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, b;
          _ === mn || _ === br && a === !0 ? b = "" : ($r(a, y), b = "" + a, u.sanitizeURL && cl(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var ti = Symbol.for("react.element"), _r = Symbol.for("react.portal"), ma = Symbol.for("react.fragment"), vi = Symbol.for("react.strict_mode"), hi = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), be = Symbol.for("react.suspense"), yt = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), st = Symbol.for("react.scope"), Un = Symbol.for("react.debug_trace_mode"), Xt = Symbol.for("react.offscreen"), un = Symbol.for("react.legacy_hidden"), Sr = Symbol.for("react.cache"), mi = Symbol.for("react.tracing_marker"), Lt = Symbol.iterator, qn = "@@iterator";
    function Dr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Lt && e[Lt] || e[qn];
      return typeof t == "function" ? t : null;
    }
    var ct = Object.assign, Oa = 0, fl, ju, dl, Wr, qo, kr, Ko;
    function Xo() {
    }
    Xo.__reactDisabledLog = !0;
    function nc() {
      {
        if (Oa === 0) {
          fl = console.log, ju = console.info, dl = console.warn, Wr = console.error, qo = console.group, kr = console.groupCollapsed, Ko = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Xo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Oa++;
      }
    }
    function Fu() {
      {
        if (Oa--, Oa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ct({}, e, {
              value: fl
            }),
            info: ct({}, e, {
              value: ju
            }),
            warn: ct({}, e, {
              value: dl
            }),
            error: ct({}, e, {
              value: Wr
            }),
            group: ct({}, e, {
              value: qo
            }),
            groupCollapsed: ct({}, e, {
              value: kr
            }),
            groupEnd: ct({}, e, {
              value: Ko
            })
          });
        }
        Oa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pl = w.ReactCurrentDispatcher, ni;
    function Or(e, t, a) {
      {
        if (ni === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ni = i && i[1] || "";
          }
        return `
` + ni + e;
      }
    }
    var vl = !1, hl;
    {
      var ml = typeof WeakMap == "function" ? WeakMap : Map;
      hl = new ml();
    }
    function Hu(e, t) {
      if (!e || vl)
        return "";
      {
        var a = hl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      vl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = pl.current, pl.current = null, nc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (F) {
              i = F;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (F) {
              i = F;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            i = F;
          }
          e();
        }
      } catch (F) {
        if (F && i && typeof F.stack == "string") {
          for (var p = F.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && hl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        vl = !1, pl.current = s, Fu(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", U = b ? Or(b) : "";
      return typeof e == "function" && hl.set(e, U), U;
    }
    function Pu(e, t, a) {
      return Hu(e, !0);
    }
    function zi(e, t, a) {
      return Hu(e, !1);
    }
    function Wf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Hu(e, Wf(e));
      if (typeof e == "string")
        return Or(e);
      switch (e) {
        case be:
          return Or("Suspense");
        case yt:
          return Or("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case K:
            return zi(e.render);
          case Ct:
            return yi(e.type, t, a);
          case Fe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return yi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Mt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return Or(e.type);
        case tn:
          return Or("Lazy");
        case De:
          return Or("Suspense");
        case Ot:
          return Or("SuspenseList");
        case ne:
        case Ke:
        case Be:
          return zi(e.type);
        case Ie:
          return zi(e.type.render);
        case oe:
          return Pu(e.type);
        default:
          return "";
      }
    }
    function Vu(e) {
      try {
        var t = "", a = e;
        do
          t += Mt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ql(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Bu(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ma:
          return "Fragment";
        case _r:
          return "Portal";
        case hi:
          return "Profiler";
        case vi:
          return "StrictMode";
        case be:
          return "Suspense";
        case yt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            var t = e;
            return Bu(t) + ".Consumer";
          case R:
            var a = e;
            return Bu(a._context) + ".Provider";
          case K:
            return ql(e, e.render, "ForwardRef");
          case Ct:
            var i = e.displayName || null;
            return i !== null ? i : Rt(e.type) || "Memo";
          case Fe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Rt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function $u(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Iu(e) {
      return e.displayName || "Context";
    }
    function Xe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ft:
          return "Cache";
        case bt:
          var i = a;
          return Iu(i) + ".Consumer";
        case Ve:
          var u = a;
          return Iu(u._context) + ".Provider";
        case Gt:
          return "DehydratedFragment";
        case Ie:
          return $u(a, a.render, "ForwardRef");
        case tt:
          return "Fragment";
        case Z:
          return a;
        case de:
          return "Portal";
        case te:
          return "Root";
        case me:
          return "Text";
        case tn:
          return Rt(a);
        case Ye:
          return a === vi ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case ft:
          return "Profiler";
        case Rn:
          return "Scope";
        case De:
          return "Suspense";
        case Ot:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case oe:
        case ne:
        case ln:
        case Ke:
        case lt:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Kl = w.ReactDebugCurrentFrame, gn = null, Gr = !1;
    function Lr() {
      {
        if (gn === null)
          return null;
        var e = gn._debugOwner;
        if (e !== null && typeof e < "u")
          return Xe(e);
      }
      return null;
    }
    function yl() {
      return gn === null ? "" : Vu(gn);
    }
    function Tn() {
      Kl.getCurrentStack = null, gn = null, Gr = !1;
    }
    function Bt(e) {
      Kl.getCurrentStack = e === null ? null : yl, gn = e, Gr = !1;
    }
    function rc() {
      return gn;
    }
    function qr(e) {
      Gr = e;
    }
    function Kn(e) {
      return "" + e;
    }
    function gi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return yr(e), e;
        default:
          return "";
      }
    }
    var ac = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ui(e, t) {
      ac[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function gl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ic(e) {
      return e._valueTracker;
    }
    function La(e) {
      e._valueTracker = null;
    }
    function Sl(e) {
      var t = "";
      return e && (gl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ai(e) {
      var t = gl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      yr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            yr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            yr(p), i = "" + p;
          },
          stopTracking: function() {
            La(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ma(e) {
      ic(e) || (e._valueTracker = Ai(e));
    }
    function Yu(e) {
      if (!e)
        return !1;
      var t = ic(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Sl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function El(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Cl = !1, Xl = !1, Qu = !1, Zo = !1;
    function ri(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = ct({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Ui("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Xl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), Xl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Cl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), Cl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: gi(t.value != null ? t.value : i),
        controlled: ri(t)
      };
    }
    function A(e, t) {
      var a = e, i = t.checked;
      i != null && ha(a, "checked", i, !1);
    }
    function H(e, t) {
      var a = e;
      {
        var i = ri(t);
        !a._wrapperState.controlled && i && !Zo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Zo = !0), a._wrapperState.controlled && !i && !Qu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Qu = !0);
      }
      A(e, t);
      var u = gi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Kn(u)) : a.value !== Kn(u) && (a.value = Kn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ue(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ue(a, t.type, gi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function X(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Kn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function He(e, t) {
      var a = e;
      H(a, t), ue(a, t);
    }
    function ue(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        $r(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Dh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Yu(f), H(f, p);
          }
        }
      }
    }
    function Ue(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || El(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Kn(e._wrapperState.initialValue) : e.defaultValue !== Kn(a) && (e.defaultValue = Kn(a)));
    }
    var ht = !1, kt = !1, Zt = !1;
    function Wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? D.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || kt || (kt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Zt || (Zt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ht && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ht = !0);
    }
    function Jt(e, t) {
      t.value != null && e.setAttribute("value", Kn(gi(t.value)));
    }
    var rn = Array.isArray;
    function Tt(e) {
      return rn(e);
    }
    var ji;
    ji = !1;
    function Wu() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Jo = ["value", "defaultValue"];
    function Gf(e) {
      {
        Ui("select", e);
        for (var t = 0; t < Jo.length; t++) {
          var a = Jo[t];
          if (e[a] != null) {
            var i = Tt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Wu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Wu());
          }
        }
      }
    }
    function ai(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Kn(gi(a)), _ = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          _ === null && !u[b].disabled && (_ = u[b]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function es(e, t) {
      return ct({}, t, {
        value: void 0
      });
    }
    function ts(e, t) {
      var a = e;
      Gf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ji && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ji = !0);
    }
    function qf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ai(a, !!t.multiple, i, !1) : t.defaultValue != null && ai(a, !!t.multiple, t.defaultValue, !0);
    }
    function qm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ai(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ai(a, !!t.multiple, t.defaultValue, !0) : ai(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Km(e, t) {
      var a = e, i = t.value;
      i != null && ai(a, !!t.multiple, i, !1);
    }
    var Kf = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ct({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Kn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jp(e, t) {
      var a = e;
      Ui("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Kf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), Kf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Tt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: gi(i)
      };
    }
    function ev(e, t) {
      var a = e, i = gi(t.value), u = gi(t.defaultValue);
      if (i != null) {
        var s = Kn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Kn(u));
    }
    function tv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Zf(e, t) {
      ev(e, t);
    }
    var Fi = "http://www.w3.org/1999/xhtml", Xm = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function lc(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Xm;
        default:
          return Fi;
      }
    }
    function ed(e, t) {
      return e == null || e === Fi ? lc(t) : e === Jf && t === "foreignObject" ? Fi : e;
    }
    var Zm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, uc, nv = Zm(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        uc = uc || document.createElement("div"), uc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = uc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Kr = 1, Hi = 3, An = 8, ii = 9, Zl = 11, oc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Hi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, rv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Gu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var iv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Gu).forEach(function(e) {
      iv.forEach(function(t) {
        Gu[av(t, e)] = Gu[e];
      });
    });
    function sc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Gu.hasOwnProperty(e) && Gu[e]) ? t + "px" : (mr(t, e), ("" + t).trim());
    }
    var qu = /([A-Z])/g, Jm = /^ms-/;
    function ey(e) {
      return e.replace(qu, "-$1").toLowerCase().replace(Jm, "-ms-");
    }
    var lv = function() {
    };
    {
      var uv = /^(?:webkit|moz|o)[A-Z]/, ov = /^-ms-/, ns = /-(.)/g, Ku = /;\s*$/, Xu = {}, Zu = {}, sv = !1, td = !1, nd = function(e) {
        return e.replace(ns, function(t, a) {
          return a.toUpperCase();
        });
      }, rd = function(e) {
        Xu.hasOwnProperty(e) && Xu[e] || (Xu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          nd(e.replace(ov, "ms-"))
        ));
      }, cv = function(e) {
        Xu.hasOwnProperty(e) && Xu[e] || (Xu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fv = function(e, t) {
        Zu.hasOwnProperty(t) && Zu[t] || (Zu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ku, "")));
      }, dv = function(e, t) {
        sv || (sv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ty = function(e, t) {
        td || (td = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      lv = function(e, t) {
        e.indexOf("-") > -1 ? rd(e) : uv.test(e) ? cv(e) : Ku.test(t) && fv(e, t), typeof t == "number" && (isNaN(t) ? dv(e, t) : isFinite(t) || ty(e, t));
      };
    }
    var ny = lv;
    function ry(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ey(i)) + ":", t += sc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function pv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ny(i, t[i]);
          var s = sc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ay(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Na(e) {
      var t = {};
      for (var a in e)
        for (var i = rv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function rs(e, t) {
      {
        if (!t)
          return;
        var a = Na(e), i = Na(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ay(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var vv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, hv = ct({
      menuitem: !0
    }, vv), mv = "__html";
    function cc(e, t) {
      if (t) {
        if (hv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(mv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Pi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var fc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, yv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, li = {}, ad = new RegExp("^(aria)-[" + Oe + "]*$"), as = new RegExp("^(aria)[A-Z][" + Oe + "]*$");
    function id(e, t) {
      {
        if (Wn.call(li, t) && li[t])
          return !0;
        if (as.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = yv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), li[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), li[t] = !0, !0;
        }
        if (ad.test(t)) {
          var u = t.toLowerCase(), s = yv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return li[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), li[t] = !0, !0;
        }
      }
      return !0;
    }
    function gv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = id(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function dc(e, t) {
      Pi(e, t) || gv(e, t);
    }
    var Jl = !1;
    function ld(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Jl && (Jl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ud = function() {
    };
    {
      var Xn = {}, od = /^on./, Sv = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + Oe + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + Oe + "]*$");
      ud = function(e, t, a, i) {
        if (Wn.call(Xn, t) && Xn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Xn[t] = !0, !0;
          if (od.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Xn[t] = !0, !0;
        } else if (od.test(t))
          return Sv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xn[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xn[t] = !0, !0;
        var v = xr(t), y = v !== null && v.type === da;
        if (fc.hasOwnProperty(u)) {
          var g = fc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Xn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Xn[t] = !0, !0;
        return typeof a == "boolean" && gr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xn[t] = !0, !0) : y ? !0 : gr(t, a, v, !1) ? (Xn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === mn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xn[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ud(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      Pi(e, t) || Rv(e, t, a);
    }
    var Vi = 1, is = 2, eu = 4, iy = Vi | is | eu, ls = null;
    function us(e) {
      ls !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ls = e;
    }
    function ly() {
      ls === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ls = null;
    }
    function wv(e) {
      return e === ls;
    }
    function pc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Hi ? t.parentNode : t;
    }
    var en = null, Rl = null, Bi = null;
    function Ju(e) {
      var t = No(e);
      if (t) {
        if (typeof en != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Dh(a);
          en(t.stateNode, t.type, i);
        }
      }
    }
    function bv(e) {
      en = e;
    }
    function vc(e) {
      Rl ? Bi ? Bi.push(e) : Bi = [e] : Rl = e;
    }
    function os() {
      return Rl !== null || Bi !== null;
    }
    function ss() {
      if (Rl) {
        var e = Rl, t = Bi;
        if (Rl = null, Bi = null, Ju(e), t)
          for (var a = 0; a < t.length; a++)
            Ju(t[a]);
      }
    }
    var tu = function(e, t) {
      return e(t);
    }, sd = function() {
    }, cd = !1;
    function uy() {
      var e = os();
      e && (sd(), ss());
    }
    function fd(e, t, a) {
      if (cd)
        return e(t, a);
      cd = !0;
      try {
        return tu(e, t, a);
      } finally {
        cd = !1, uy();
      }
    }
    function hc(e, t, a) {
      tu = e, sd = a;
    }
    function mc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function dd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && mc(t));
        default:
          return !1;
      }
    }
    function nu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Dh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (dd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var cs = !1;
    if (hn)
      try {
        var ru = {};
        Object.defineProperty(ru, "passive", {
          get: function() {
            cs = !0;
          }
        }), window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
      } catch {
        cs = !1;
      }
    function xv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var pd = xv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var vd = document.createElement("react");
      pd = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, b = !0, U = window.event, F = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          vd.removeEventListener(V, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          _ = !0, P(), a.apply(i, se), b = !1;
        }
        var _e, _t = !1, St = !1;
        function M(N) {
          if (_e = N.error, _t = !0, _e === null && N.colno === 0 && N.lineno === 0 && (St = !0), N.defaultPrevented && _e != null && typeof _e == "object")
            try {
              _e._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", M), vd.addEventListener(V, Ne, !1), g.initEvent(V, !1, !1), vd.dispatchEvent(g), F && Object.defineProperty(window, "event", F), _ && b && (_t ? St && (_e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : _e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(_e)), window.removeEventListener("error", M), !_)
          return P(), xv.apply(this, arguments);
      };
    }
    var oy = pd, Tl = !1, ui = null, fs = !1, wl = null, Si = {
      onError: function(e) {
        Tl = !0, ui = e;
      }
    };
    function au(e, t, a, i, u, s, f, p, v) {
      Tl = !1, ui = null, oy.apply(Si, arguments);
    }
    function $i(e, t, a, i, u, s, f, p, v) {
      if (au.apply(this, arguments), Tl) {
        var y = md();
        fs || (fs = !0, wl = y);
      }
    }
    function hd() {
      if (fs) {
        var e = wl;
        throw fs = !1, wl = null, e;
      }
    }
    function sy() {
      return Tl;
    }
    function md() {
      if (Tl) {
        var e = ui;
        return Tl = !1, ui = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function za(e) {
      return e._reactInternals;
    }
    function ds(e) {
      return e._reactInternals !== void 0;
    }
    function eo(e, t) {
      e._reactInternals = t;
    }
    var Me = (
      /*                      */
      0
    ), bl = (
      /*                */
      1
    ), on = (
      /*                    */
      2
    ), at = (
      /*                       */
      4
    ), jt = (
      /*                */
      16
    ), $t = (
      /*                 */
      32
    ), Ei = (
      /*                     */
      64
    ), Ge = (
      /*                   */
      128
    ), wn = (
      /*            */
      256
    ), Xr = (
      /*                          */
      512
    ), Ua = (
      /*                     */
      1024
    ), dn = (
      /*                      */
      2048
    ), Aa = (
      /*                    */
      4096
    ), xl = (
      /*                   */
      8192
    ), ps = (
      /*             */
      16384
    ), yc = dn | at | Ei | Xr | Ua | ps, _v = (
      /*               */
      32767
    ), ya = (
      /*                   */
      32768
    ), Zn = (
      /*                */
      65536
    ), vs = (
      /* */
      131072
    ), yd = (
      /*                       */
      1048576
    ), gd = (
      /*                    */
      2097152
    ), Zr = (
      /*                 */
      4194304
    ), _l = (
      /*                */
      8388608
    ), Jr = (
      /*               */
      16777216
    ), iu = (
      /*              */
      33554432
    ), to = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      at | Ua | 0
    ), ea = on | at | jt | $t | Xr | Aa | xl, Er = at | Ei | Xr | xl, ja = dn | jt, ar = Zr | _l | gd, Ii = w.ReactCurrentOwner;
    function ga(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (on | Aa)) !== Me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Sd(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function gc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function Ed(e) {
      return ga(e) === e;
    }
    function Sa(e) {
      {
        var t = Ii.current;
        if (t !== null && t.tag === oe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Xe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = za(e);
      return u ? ga(u) === u : !1;
    }
    function ta(e) {
      if (ga(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function sn(e) {
      var t = e.alternate;
      if (!t) {
        var a = ga(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ta(s), e;
            if (v === u)
              return ta(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Fa(e) {
      var t = sn(e);
      return t !== null ? Cd(t) : null;
    }
    function Cd(e) {
      if (e.tag === Z || e.tag === me)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Cd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Dv(e) {
      var t = sn(e);
      return t !== null ? Sc(t) : null;
    }
    function Sc(e) {
      if (e.tag === Z || e.tag === me)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== de) {
          var a = Sc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ec = O.unstable_scheduleCallback, kv = O.unstable_cancelCallback, Cc = O.unstable_shouldYield, Ov = O.unstable_requestPaint, Sn = O.unstable_now, Rd = O.unstable_getCurrentPriorityLevel, Rc = O.unstable_ImmediatePriority, lu = O.unstable_UserBlockingPriority, Ci = O.unstable_NormalPriority, Lv = O.unstable_LowPriority, Tc = O.unstable_IdlePriority, no = O.unstable_yieldValue, Mv = O.unstable_setDisableYieldValue, Yi = null, Vn = null, ae = null, Ha = !1, Ea = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Td(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ut && (e = ct({}, e, {
          getLaneLabelMap: Qi,
          injectProfilingHooks: Nv
        })), Yi = t.inject(e), Vn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function wd(e, t) {
      if (Vn && typeof Vn.onScheduleFiberRoot == "function")
        try {
          Vn.onScheduleFiberRoot(Yi, e, t);
        } catch (a) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function ro(e, t) {
      if (Vn && typeof Vn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ge) === Ge;
          if (it) {
            var i;
            switch (t) {
              case Ln:
                i = Rc;
                break;
              case Gi:
                i = lu;
                break;
              case Ri:
                i = Ci;
                break;
              case mo:
                i = Tc;
                break;
              default:
                i = Ci;
                break;
            }
            Vn.onCommitFiberRoot(Yi, e, i, a);
          }
        } catch (u) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Pa(e) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot(Yi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function uu(e) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount(Yi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function jn(e) {
      if (typeof no == "function" && (Mv(e), et(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(Yi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Nv(e) {
      ae = e;
    }
    function Qi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ss; a++) {
          var i = fy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Dl(e) {
      ae !== null && typeof ae.markCommitStarted == "function" && ae.markCommitStarted(e);
    }
    function wc() {
      ae !== null && typeof ae.markCommitStopped == "function" && ae.markCommitStopped();
    }
    function ao(e) {
      ae !== null && typeof ae.markComponentRenderStarted == "function" && ae.markComponentRenderStarted(e);
    }
    function na() {
      ae !== null && typeof ae.markComponentRenderStopped == "function" && ae.markComponentRenderStopped();
    }
    function kl(e) {
      ae !== null && typeof ae.markComponentPassiveEffectMountStarted == "function" && ae.markComponentPassiveEffectMountStarted(e);
    }
    function bc() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function zv(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function xc() {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStopped == "function" && ae.markComponentPassiveEffectUnmountStopped();
    }
    function Uv(e) {
      ae !== null && typeof ae.markComponentLayoutEffectMountStarted == "function" && ae.markComponentLayoutEffectMountStarted(e);
    }
    function hs() {
      ae !== null && typeof ae.markComponentLayoutEffectMountStopped == "function" && ae.markComponentLayoutEffectMountStopped();
    }
    function oi(e) {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStarted == "function" && ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function io() {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStopped == "function" && ae.markComponentLayoutEffectUnmountStopped();
    }
    function ms(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function ou(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function bd(e) {
      ae !== null && typeof ae.markLayoutEffectsStarted == "function" && ae.markLayoutEffectsStarted(e);
    }
    function lo() {
      ae !== null && typeof ae.markLayoutEffectsStopped == "function" && ae.markLayoutEffectsStopped();
    }
    function Av(e) {
      ae !== null && typeof ae.markPassiveEffectsStarted == "function" && ae.markPassiveEffectsStarted(e);
    }
    function xd() {
      ae !== null && typeof ae.markPassiveEffectsStopped == "function" && ae.markPassiveEffectsStopped();
    }
    function pn(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function _c() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function Dc() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function _d(e) {
      ae !== null && typeof ae.markRenderScheduled == "function" && ae.markRenderScheduled(e);
    }
    function kc(e, t) {
      ae !== null && typeof ae.markForceUpdateScheduled == "function" && ae.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      ae !== null && typeof ae.markStateUpdateScheduled == "function" && ae.markStateUpdateScheduled(e, t);
    }
    var Te = (
      /*                         */
      0
    ), xe = (
      /*                 */
      1
    ), qe = (
      /*                    */
      2
    ), mt = (
      /*               */
      8
    ), Ca = (
      /*              */
      16
    ), uo = Math.clz32 ? Math.clz32 : Cr, gs = Math.log, cy = Math.LN2;
    function Cr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (gs(t) / cy | 0) | 0;
    }
    var Ss = 31, I = (
      /*                        */
      0
    ), Fn = (
      /*                          */
      0
    ), Le = (
      /*                        */
      1
    ), ir = (
      /*    */
      2
    ), Ra = (
      /*             */
      4
    ), Wi = (
      /*            */
      8
    ), Va = (
      /*                     */
      16
    ), oo = (
      /*                */
      32
    ), su = (
      /*                       */
      4194240
    ), so = (
      /*                        */
      64
    ), Oc = (
      /*                        */
      128
    ), Lc = (
      /*                        */
      256
    ), Mc = (
      /*                        */
      512
    ), Nc = (
      /*                        */
      1024
    ), zc = (
      /*                        */
      2048
    ), cu = (
      /*                        */
      4096
    ), Uc = (
      /*                        */
      8192
    ), co = (
      /*                        */
      16384
    ), fo = (
      /*                       */
      32768
    ), Ac = (
      /*                       */
      65536
    ), Es = (
      /*                       */
      131072
    ), jc = (
      /*                       */
      262144
    ), Fc = (
      /*                       */
      524288
    ), Hc = (
      /*                       */
      1048576
    ), Pc = (
      /*                       */
      2097152
    ), po = (
      /*                            */
      130023424
    ), fu = (
      /*                             */
      4194304
    ), Vc = (
      /*                             */
      8388608
    ), Bc = (
      /*                             */
      16777216
    ), Dd = (
      /*                             */
      33554432
    ), $c = (
      /*                             */
      67108864
    ), jv = fu, Cs = (
      /*          */
      134217728
    ), kd = (
      /*                          */
      268435455
    ), vo = (
      /*               */
      268435456
    ), Ol = (
      /*                        */
      536870912
    ), Rr = (
      /*                   */
      1073741824
    );
    function fy(e) {
      {
        if (e & Le)
          return "Sync";
        if (e & ir)
          return "InputContinuousHydration";
        if (e & Ra)
          return "InputContinuous";
        if (e & Wi)
          return "DefaultHydration";
        if (e & Va)
          return "Default";
        if (e & oo)
          return "TransitionHydration";
        if (e & su)
          return "Transition";
        if (e & po)
          return "Retry";
        if (e & Cs)
          return "SelectiveHydration";
        if (e & vo)
          return "IdleHydration";
        if (e & Ol)
          return "Idle";
        if (e & Rr)
          return "Offscreen";
      }
    }
    var an = -1, Ic = so, ra = fu;
    function du(e) {
      switch (On(e)) {
        case Le:
          return Le;
        case ir:
          return ir;
        case Ra:
          return Ra;
        case Wi:
          return Wi;
        case Va:
          return Va;
        case oo:
          return oo;
        case so:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case cu:
        case Uc:
        case co:
        case fo:
        case Ac:
        case Es:
        case jc:
        case Fc:
        case Hc:
        case Pc:
          return e & su;
        case fu:
        case Vc:
        case Bc:
        case Dd:
        case $c:
          return e & po;
        case Cs:
          return Cs;
        case vo:
          return vo;
        case Ol:
          return Ol;
        case Rr:
          return Rr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function pu(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, u = e.suspendedLanes, s = e.pingedLanes, f = a & kd;
      if (f !== I) {
        var p = f & ~u;
        if (p !== I)
          i = du(p);
        else {
          var v = f & s;
          v !== I && (i = du(v));
        }
      } else {
        var y = a & ~u;
        y !== I ? i = du(y) : s !== I && (i = du(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === I) {
        var g = On(i), _ = On(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Va && (_ & su) !== I
        )
          return t;
      }
      (i & Ra) !== I && (i |= a & Va);
      var b = e.entangledLanes;
      if (b !== I)
        for (var U = e.entanglements, F = i & b; F > 0; ) {
          var P = Ml(F), se = 1 << P;
          i |= U[P], F &= ~se;
        }
      return i;
    }
    function Fv(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var u = Ml(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Hv(e, t) {
      switch (e) {
        case Le:
        case ir:
        case Ra:
          return t + 250;
        case Wi:
        case Va:
        case oo:
        case so:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case cu:
        case Uc:
        case co:
        case fo:
        case Ac:
        case Es:
        case jc:
        case Fc:
        case Hc:
        case Pc:
          return t + 5e3;
        case fu:
        case Vc:
        case Bc:
        case Dd:
        case $c:
          return an;
        case Cs:
        case vo:
        case Ol:
        case Rr:
          return an;
        default:
          return S("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function Pv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p, y = s[p];
        y === an ? ((v & i) === I || (v & u) !== I) && (s[p] = Hv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Od(e) {
      return du(e.pendingLanes);
    }
    function Ll(e) {
      var t = e.pendingLanes & ~Rr;
      return t !== I ? t : t & Rr ? Rr : I;
    }
    function Ld(e) {
      return (e & Le) !== I;
    }
    function Rs(e) {
      return (e & kd) !== I;
    }
    function Vv(e) {
      return (e & po) === e;
    }
    function Bv(e) {
      var t = Le | Ra | Va;
      return (e & t) === I;
    }
    function $v(e) {
      return (e & su) === e;
    }
    function Ts(e, t) {
      var a = ir | Ra | Wi | Va;
      return (t & a) !== I;
    }
    function Iv(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function Md(e) {
      return (e & su) !== I;
    }
    function Yv() {
      var e = Ic;
      return Ic <<= 1, (Ic & su) === I && (Ic = so), e;
    }
    function aa() {
      var e = ra;
      return ra <<= 1, (ra & po) === I && (ra = fu), e;
    }
    function On(e) {
      return e & -e;
    }
    function ho(e) {
      return On(e);
    }
    function Ml(e) {
      return 31 - uo(e);
    }
    function Yc(e) {
      return Ml(e);
    }
    function ia(e, t) {
      return (e & t) !== I;
    }
    function vu(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Qc(e, t) {
      return e & t;
    }
    function dy(e) {
      return e;
    }
    function Qv(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function bs(e) {
      for (var t = [], a = 0; a < Ss; a++)
        t.push(e);
      return t;
    }
    function hu(e, t, a) {
      e.pendingLanes |= t, t !== Ol && (e.suspendedLanes = I, e.pingedLanes = I);
      var i = e.eventTimes, u = Yc(t);
      i[u] = a;
    }
    function Wv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ml(i), s = 1 << u;
        a[u] = an, i &= ~s;
      }
    }
    function Wc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Gc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ml(f), v = 1 << p;
        i[p] = I, u[p] = an, s[p] = an, f &= ~v;
      }
    }
    function Nd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ml(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Gv(e, t) {
      var a = On(t), i;
      switch (a) {
        case Ra:
          i = ir;
          break;
        case Va:
          i = Wi;
          break;
        case so:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case cu:
        case Uc:
        case co:
        case fo:
        case Ac:
        case Es:
        case jc:
        case Fc:
        case Hc:
        case Pc:
        case fu:
        case Vc:
        case Bc:
        case Dd:
        case $c:
          i = oo;
          break;
        case Ol:
          i = vo;
          break;
        default:
          i = Fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fn ? Fn : i;
    }
    function qc(e, t, a) {
      if (Ea)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Yc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function zd(e, t) {
      if (Ea)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Yc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function xs(e, t) {
      return null;
    }
    var Ln = Le, Gi = Ra, Ri = Va, mo = Ol, yo = Fn;
    function Ba() {
      return yo;
    }
    function bn(e) {
      yo = e;
    }
    function Tr(e, t) {
      var a = yo;
      try {
        return yo = e, t();
      } finally {
        yo = a;
      }
    }
    function py(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function vy(e, t) {
      return e > t ? e : t;
    }
    function go(e, t) {
      return e !== 0 && e < t;
    }
    function lr(e) {
      var t = On(e);
      return go(Ln, t) ? go(Gi, t) ? Rs(t) ? Ri : mo : Gi : Ln;
    }
    function Kc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ye;
    function So(e) {
      ye = e;
    }
    function Ud(e) {
      ye(e);
    }
    var Xc;
    function hy(e) {
      Xc = e;
    }
    var Eo;
    function Zc(e) {
      Eo = e;
    }
    var Jc;
    function qv(e) {
      Jc = e;
    }
    var Ad;
    function Kv(e) {
      Ad = e;
    }
    var _s = !1, Co = [], vn = null, Jn = null, Mr = null, Ro = /* @__PURE__ */ new Map(), To = /* @__PURE__ */ new Map(), er = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ti(e) {
      return Xv.indexOf(e) > -1;
    }
    function my(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function jd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          vn = null;
          break;
        case "dragenter":
        case "dragleave":
          Jn = null;
          break;
        case "mouseover":
        case "mouseout":
          Mr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ro.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          To.delete(i);
          break;
        }
      }
    }
    function wo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = my(t, a, i, u, s);
        if (t !== null) {
          var p = No(t);
          p !== null && Xc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Zv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return vn = wo(vn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Jn = wo(Jn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Mr = wo(Mr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ro.set(y, wo(Ro.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return To.set(_, wo(To.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Fd(e) {
      var t = Hs(e.target);
      if (t !== null) {
        var a = ga(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var u = Sd(a);
            if (u !== null) {
              e.blockedOn = u, Ad(e.priority, function() {
                Eo(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (Kc(s)) {
              e.blockedOn = gc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function yy(e) {
      for (var t = Jc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < er.length && go(t, er[i].priority); i++)
        ;
      er.splice(i, 0, a), i === 0 && Fd(a);
    }
    function mu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = wr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          us(s), u.target.dispatchEvent(s), ly();
        } else {
          var f = No(i);
          return f !== null && Xc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ef(e, t, a) {
      mu(e) && a.delete(t);
    }
    function $a() {
      _s = !1, vn !== null && mu(vn) && (vn = null), Jn !== null && mu(Jn) && (Jn = null), Mr !== null && mu(Mr) && (Mr = null), Ro.forEach(ef), To.forEach(ef);
    }
    function gt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, _s || (_s = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, $a)));
    }
    function xn(e) {
      if (Co.length > 0) {
        gt(Co[0], e);
        for (var t = 1; t < Co.length; t++) {
          var a = Co[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      vn !== null && gt(vn, e), Jn !== null && gt(Jn, e), Mr !== null && gt(Mr, e);
      var i = function(p) {
        return gt(p, e);
      };
      Ro.forEach(i), To.forEach(i);
      for (var u = 0; u < er.length; u++) {
        var s = er[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; er.length > 0; ) {
        var f = er[0];
        if (f.blockedOn !== null)
          break;
        Fd(f), f.blockedOn === null && er.shift();
      }
    }
    var cn = w.ReactCurrentBatchConfig, Bn = !0;
    function la(e) {
      Bn = !!e;
    }
    function bo() {
      return Bn;
    }
    function $n(e, t, a) {
      var i = tf(t), u;
      switch (i) {
        case Ln:
          u = Ds;
          break;
        case Gi:
          u = yu;
          break;
        case Ri:
        default:
          u = xo;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Ds(e, t, a, i) {
      var u = Ba(), s = cn.transition;
      cn.transition = null;
      try {
        bn(Ln), xo(e, t, a, i);
      } finally {
        bn(u), cn.transition = s;
      }
    }
    function yu(e, t, a, i) {
      var u = Ba(), s = cn.transition;
      cn.transition = null;
      try {
        bn(Gi), xo(e, t, a, i);
      } finally {
        bn(u), cn.transition = s;
      }
    }
    function xo(e, t, a, i) {
      Bn && Hd(e, t, a, i);
    }
    function Hd(e, t, a, i) {
      var u = wr(e, t, a, i);
      if (u === null) {
        zy(e, t, i, Nl, a), jd(e, i);
        return;
      }
      if (Zv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (jd(e, i), t & eu && Ti(e)) {
        for (; u !== null; ) {
          var s = No(u);
          s !== null && Ud(s);
          var f = wr(e, t, a, i);
          if (f === null && zy(e, t, i, Nl, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      zy(e, t, i, null, a);
    }
    var Nl = null;
    function wr(e, t, a, i) {
      Nl = null;
      var u = pc(i), s = Hs(u);
      if (s !== null) {
        var f = ga(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === De) {
            var v = Sd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (Kc(y))
              return gc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Nl = s, null;
    }
    function tf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ln;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Gi;
        case "message": {
          var t = Rd();
          switch (t) {
            case Rc:
              return Ln;
            case lu:
              return Gi;
            case Ci:
            case Lv:
              return Ri;
            case Tc:
              return mo;
            default:
              return Ri;
          }
        }
        default:
          return Ri;
      }
    }
    function _o(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function qi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function nf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Pd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ia = null, Do = null, Ya = null;
    function rf(e) {
      return Ia = e, Do = Os(), !0;
    }
    function ks() {
      Ia = null, Do = null, Ya = null;
    }
    function af() {
      if (Ya)
        return Ya;
      var e, t = Do, a = t.length, i, u = Os(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ya = u.slice(e, p), Ya;
    }
    function Os() {
      return "value" in Ia ? Ia.value : Ia.textContent;
    }
    function gu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function tr() {
      return !0;
    }
    function Ki() {
      return !1;
    }
    function En(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = tr : this.isDefaultPrevented = Ki, this.isPropagationStopped = Ki, this;
      }
      return ct(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = tr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = tr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: tr
      }), t;
    }
    var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, lf = En(In), Su = ct({}, In, {
      view: 0,
      detail: 0
    }), Vd = En(Su), Bd, wi, ko;
    function $d(e) {
      e !== ko && (ko && e.type === "mousemove" ? (Bd = e.screenX - ko.screenX, wi = e.screenY - ko.screenY) : (Bd = 0, wi = 0), ko = e);
    }
    var bi = ct({}, Su, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Id,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : ($d(e), Bd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : wi;
      }
    }), uf = En(bi), Eu = ct({}, bi, {
      dataTransfer: 0
    }), Jv = En(Eu), eh = ct({}, Su, {
      relatedTarget: 0
    }), Ls = En(eh), of = ct({}, In, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), gy = En(of), Sy = ct({}, In, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), th = En(Sy), nh = ct({}, In, {
      data: 0
    }), zl = En(nh), Ey = zl, Oo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, rh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function _n(e) {
      if (e.key) {
        var t = Oo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = gu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? rh[e.keyCode] || "Unidentified" : "";
    }
    var Cy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ah(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Cy[e];
      return i ? !!a[i] : !1;
    }
    function Id(e) {
      return ah;
    }
    var Ry = ct({}, Su, {
      key: _n,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Id,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? gu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? gu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ih = En(Ry), lh = ct({}, bi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), uh = En(lh), Qa = ct({}, Su, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Id
    }), Yd = En(Qa), Ty = ct({}, In, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ul = En(Ty), sf = ct({}, bi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Cu = En(sf), cf = [9, 13, 27, 32], ff = 229, Ms = hn && "CompositionEvent" in window, Ns = null;
    hn && "documentMode" in document && (Ns = document.documentMode);
    var Qd = hn && "TextEvent" in window && !Ns, oh = hn && (!Ms || Ns && Ns > 8 && Ns <= 11), Wd = 32, Gd = String.fromCharCode(Wd);
    function df() {
      hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var zs = !1;
    function sh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function qd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function wy(e, t) {
      return e === "keydown" && t.keyCode === ff;
    }
    function Kd(e, t) {
      switch (e) {
        case "keyup":
          return cf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ff;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Us(e) {
      return e.locale === "ko";
    }
    var Al = !1;
    function vf(e, t, a, i, u) {
      var s, f;
      if (Ms ? s = qd(t) : Al ? Kd(t, i) && (s = "onCompositionEnd") : wy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      oh && !Us(i) && (!Al && s === "onCompositionStart" ? Al = rf(u) : s === "onCompositionEnd" && Al && (f = af()));
      var p = hh(a, s);
      if (p.length > 0) {
        var v = new zl(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function ch(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== Wd ? null : (zs = !0, Gd);
        case "textInput":
          var i = t.data;
          return i === Gd && zs ? null : i;
        default:
          return null;
      }
    }
    function by(e, t) {
      if (Al) {
        if (e === "compositionend" || !Ms && Kd(e, t)) {
          var a = af();
          return ks(), Al = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!sh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return oh && !Us(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Qd ? s = ch(t, i) : s = by(t, i), !s)
        return null;
      var f = hh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Ey("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function xy(e, t, a, i, u, s, f) {
      vf(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var As = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function fh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!As[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function mf(e) {
      if (!hn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      hr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      vc(i);
      var u = hh(t, "onChange");
      if (u.length > 0) {
        var s = new lf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, pc(e)), fd(m, t);
    }
    function m(e) {
      j0(e, 0);
    }
    function E(e) {
      var t = Rf(e);
      if (Yu(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var j = !1;
    hn && (j = mf("input") && (!document.documentMode || document.documentMode > 9));
    function W(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", Y);
    }
    function G() {
      l && (l.detachEvent("onpropertychange", Y), l = null, o = null);
    }
    function Y(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function pe(e, t, a) {
      e === "focusin" ? (G(), W(t, a)) : e === "focusout" && G();
    }
    function Se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Mn(e, t) {
      if (e === "click")
        return E(t);
    }
    function L(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ue(e, "number", e.value);
    }
    function z(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window, v, y;
      if (c(p) ? v = T : fh(p) ? j ? v = L : (v = Se, y = pe) : Re(p) && (v = Mn), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && x(p);
    }
    function J() {
      Br("onMouseEnter", ["mouseout", "mouseover"]), Br("onMouseLeave", ["mouseout", "mouseover"]), Br("onPointerEnter", ["pointerout", "pointerover"]), Br("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function we(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !wv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Hs(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var b, U;
        if (v) {
          var F = i.relatedTarget || i.toElement;
          if (b = a, U = F ? Hs(F) : null, U !== null) {
            var P = ga(U);
            (U !== P || U.tag !== Z && U.tag !== me) && (U = null);
          }
        } else
          b = null, U = a;
        if (b !== U) {
          var se = uf, Ne = "onMouseLeave", _e = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = uh, Ne = "onPointerLeave", _e = "onPointerEnter", _t = "pointer");
          var St = b == null ? g : Rf(b), M = U == null ? g : Rf(U), V = new se(Ne, _t + "leave", b, i, u);
          V.target = St, V.relatedTarget = M;
          var N = null, q = Hs(u);
          if (q === a) {
            var he = new se(_e, _t + "enter", U, i, u);
            he.target = M, he.relatedTarget = St, N = he;
          }
          $R(e, V, N, b, U);
        }
      }
    }
    function Pe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ee = typeof Object.is == "function" ? Object.is : Pe;
    function $e(e, t) {
      if (Ee(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Wn.call(t, s) || !Ee(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Yn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Nt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Xi(e, t) {
      for (var a = Yn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Hi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Yn(Nt(a));
      }
    }
    function _y(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return TR(e, u, s, f, p);
    }
    function TR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var b = null; g === t && (a === 0 || g.nodeType === Hi) && (f = s + a), g === i && (u === 0 || g.nodeType === Hi) && (p = s + u), g.nodeType === Hi && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
          _ = g, g = b;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (b = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = b;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function wR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Xi(e, f), g = Xi(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function b0(e) {
      return e && e.nodeType === Hi;
    }
    function x0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : b0(e) ? !1 : b0(t) ? x0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function bR(e) {
      return e && e.ownerDocument && x0(e.ownerDocument.documentElement, e);
    }
    function xR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function _0() {
      for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
        if (xR(t))
          e = t.contentWindow;
        else
          return t;
        t = El(e.document);
      }
      return t;
    }
    function Dy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function _R() {
      var e = _0();
      return {
        focusedElem: e,
        selectionRange: Dy(e) ? kR(e) : null
      };
    }
    function DR(e) {
      var t = _0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && bR(a)) {
        i !== null && Dy(a) && OR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Kr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function kR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = _y(e), t || {
        start: 0,
        end: 0
      };
    }
    function OR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : wR(e, t);
    }
    var LR = hn && "documentMode" in document && document.documentMode <= 11;
    function MR() {
      hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var yf = null, ky = null, Xd = null, Oy = !1;
    function NR(e) {
      if ("selectionStart" in e && Dy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function zR(e) {
      return e.window === e ? e.document : e.nodeType === ii ? e : e.ownerDocument;
    }
    function D0(e, t, a) {
      var i = zR(a);
      if (!(Oy || yf == null || yf !== El(i))) {
        var u = NR(yf);
        if (!Xd || !$e(Xd, u)) {
          Xd = u;
          var s = hh(ky, "onSelect");
          if (s.length > 0) {
            var f = new lf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = yf;
          }
        }
      }
    }
    function UR(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window;
      switch (t) {
        case "focusin":
          (fh(p) || p.contentEditable === "true") && (yf = p, ky = a, Xd = null);
          break;
        case "focusout":
          yf = null, ky = null, Xd = null;
          break;
        case "mousedown":
          Oy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Oy = !1, D0(e, i, u);
          break;
        case "selectionchange":
          if (LR)
            break;
        case "keydown":
        case "keyup":
          D0(e, i, u);
      }
    }
    function dh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var gf = {
      animationend: dh("Animation", "AnimationEnd"),
      animationiteration: dh("Animation", "AnimationIteration"),
      animationstart: dh("Animation", "AnimationStart"),
      transitionend: dh("Transition", "TransitionEnd")
    }, Ly = {}, k0 = {};
    hn && (k0 = document.createElement("div").style, "AnimationEvent" in window || (delete gf.animationend.animation, delete gf.animationiteration.animation, delete gf.animationstart.animation), "TransitionEvent" in window || delete gf.transitionend.transition);
    function ph(e) {
      if (Ly[e])
        return Ly[e];
      if (!gf[e])
        return e;
      var t = gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in k0)
          return Ly[e] = t[a];
      return e;
    }
    var O0 = ph("animationend"), L0 = ph("animationiteration"), M0 = ph("animationstart"), N0 = ph("transitionend"), z0 = /* @__PURE__ */ new Map(), U0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Lo(e, t) {
      z0.set(e, t), hr(t, [e]);
    }
    function AR() {
      for (var e = 0; e < U0.length; e++) {
        var t = U0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Lo(a, "on" + i);
      }
      Lo(O0, "onAnimationEnd"), Lo(L0, "onAnimationIteration"), Lo(M0, "onAnimationStart"), Lo("dblclick", "onDoubleClick"), Lo("focusin", "onFocus"), Lo("focusout", "onBlur"), Lo(N0, "onTransitionEnd");
    }
    function jR(e, t, a, i, u, s, f) {
      var p = z0.get(t);
      if (p !== void 0) {
        var v = lf, y = t;
        switch (t) {
          case "keypress":
            if (gu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ih;
            break;
          case "focusin":
            y = "focus", v = Ls;
            break;
          case "focusout":
            y = "blur", v = Ls;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ls;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Jv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Yd;
            break;
          case O0:
          case L0:
          case M0:
            v = gy;
            break;
          case N0:
            v = Ul;
            break;
          case "scroll":
            v = Vd;
            break;
          case "wheel":
            v = Cu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = th;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = uh;
            break;
        }
        var g = (s & eu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = VR(a, p, i.type, g, _);
          if (b.length > 0) {
            var U = new v(p, y, null, i, u);
            e.push({
              event: U,
              listeners: b
            });
          }
        }
      }
    }
    AR(), J(), n(), MR(), df();
    function FR(e, t, a, i, u, s, f) {
      jR(e, t, a, i, u, s);
      var p = (s & iy) === 0;
      p && (we(e, t, a, i, u), z(e, t, a, i, u), UR(e, t, a, i, u), xy(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], My = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function A0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, $i(i, t, void 0, e), e.currentTarget = null;
    }
    function HR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          A0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, b = g.currentTarget, U = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          A0(e, U, b), i = _;
        }
    }
    function j0(e, t) {
      for (var a = (t & eu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        HR(s, f, a);
      }
      hd();
    }
    function PR(e, t, a, i, u) {
      var s = pc(a), f = [];
      FR(f, e, i, a, s, t), j0(f, t);
    }
    function Cn(e, t) {
      My.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = mw(t), u = IR(e);
      i.has(u) || (F0(t, e, is, a), i.add(u));
    }
    function Ny(e, t, a) {
      My.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= eu), F0(a, e, i, t);
    }
    var vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[vh]) {
        e[vh] = !0, dt.forEach(function(a) {
          a !== "selectionchange" && (My.has(a) || Ny(a, !1, e), Ny(a, !0, e));
        });
        var t = e.nodeType === ii ? e : e.ownerDocument;
        t !== null && (t[vh] || (t[vh] = !0, Ny("selectionchange", !1, t)));
      }
    }
    function F0(e, t, a, i, u) {
      var s = $n(e, t, a), f = void 0;
      cs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? nf(e, t, s, f) : qi(e, t, s) : f !== void 0 ? Pd(e, t, s, f) : _o(e, t, s);
    }
    function H0(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function zy(e, t, a, i, u) {
      var s = i;
      if (!(t & Vi) && !(t & is)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === te || v === de) {
              var y = p.stateNode.containerInfo;
              if (H0(y, f))
                break;
              if (v === de)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === te || _ === de) {
                    var b = g.stateNode.containerInfo;
                    if (H0(b, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var U = Hs(y);
                if (U === null)
                  return;
                var F = U.tag;
                if (F === Z || F === me) {
                  p = s = U;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      fd(function() {
        return PR(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function VR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, b = _.stateNode, U = _.tag;
        if (U === Z && b !== null && (g = b, p !== null)) {
          var F = nu(y, p);
          F != null && v.push(ep(y, F, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function hh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var v = f, y = nu(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = nu(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function BR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Sf(s))
        u++;
      for (var f = 0, p = i; p; p = Sf(p))
        f++;
      for (; u - f > 0; )
        a = Sf(a), u--;
      for (; f - u > 0; )
        i = Sf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Sf(a), i = Sf(i);
      }
      return null;
    }
    function P0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === Z && g !== null) {
          var b = g;
          if (u) {
            var U = nu(p, s);
            U != null && f.unshift(ep(p, U, b));
          } else if (!u) {
            var F = nu(p, s);
            F != null && f.push(ep(p, F, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function $R(e, t, a, i, u) {
      var s = i && u ? BR(i, u) : null;
      i !== null && P0(e, t, i, s, !1), u !== null && a !== null && P0(e, a, u, s, !0);
    }
    function IR(e, t) {
      return e + "__bubble";
    }
    var Wa = !1, tp = "dangerouslySetInnerHTML", mh = "suppressContentEditableWarning", Mo = "suppressHydrationWarning", V0 = "autoFocus", js = "children", Fs = "style", yh = "__html", Uy, gh, np, B0, Sh, $0, I0;
    Uy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, gh = function(e, t) {
      dc(e, t), ld(e, t), Tv(e, t, {
        registrationNameDependencies: pt,
        possibleRegistrationNames: nn
      });
    }, $0 = hn && !document.documentMode, np = function(e, t, a) {
      if (!Wa) {
        var i = Eh(a), u = Eh(t);
        u !== i && (Wa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, B0 = function(e) {
      if (!Wa) {
        Wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Sh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, I0 = function(e, t) {
      var a = e.namespaceURI === Fi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var YR = /\r\n?/g, QR = /\u0000|\uFFFD/g;
    function Eh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(YR, `
`).replace(QR, "");
    }
    function Ch(e, t, a, i) {
      var u = Eh(t), s = Eh(e);
      if (s !== u && (i && (Wa || (Wa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ge))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Y0(e) {
      return e.nodeType === ii ? e : e.ownerDocument;
    }
    function WR() {
    }
    function Rh(e) {
      e.onclick = WR;
    }
    function GR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Fs)
            f && Object.freeze(f), pv(t, f);
          else if (s === tp) {
            var p = f ? f[yh] : void 0;
            p != null && nv(t, p);
          } else if (s === js)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && oc(t, f);
            } else typeof f == "number" && oc(t, "" + f);
          else s === mh || s === Mo || s === V0 || (pt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sh(s, f), s === "onScroll" && Cn("scroll", t)) : f != null && ha(t, s, f, u));
        }
    }
    function qR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Fs ? pv(e, f) : s === tp ? nv(e, f) : s === js ? oc(e, f) : ha(e, s, f, i);
      }
    }
    function KR(e, t, a, i) {
      var u, s = Y0(a), f, p = i;
      if (p === Fi && (p = lc(e)), p === Fi) {
        if (u = Pi(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Fi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Wn.call(Uy, e) && (Uy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function XR(e, t) {
      return Y0(t).createTextNode(e);
    }
    function ZR(e, t, a, i) {
      var u = Pi(t, a);
      gh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            Cn(Zd[f], e);
          s = a;
          break;
        case "source":
          Cn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e), s = a;
          break;
        case "details":
          Cn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Cn("invalid", e);
          break;
        case "option":
          Wt(e, a), s = a;
          break;
        case "select":
          ts(e, a), s = es(e, a), Cn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), s = Xf(e, a), Cn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (cc(t, s), GR(t, e, i, s, u), t) {
        case "input":
          Ma(e), X(e, a, !1);
          break;
        case "textarea":
          Ma(e), tv(e);
          break;
        case "option":
          Jt(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Rh(e);
          break;
      }
    }
    function JR(e, t, a, i, u) {
      gh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = es(e, a), p = es(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Rh(e);
          break;
      }
      cc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Fs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === js || v === mh || v === Mo || v === V0 || (pt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], U = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === U || b == null && U == null))
          if (v === Fs)
            if (b && Object.freeze(b), U) {
              for (y in U)
                U.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && U[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === tp) {
            var F = b ? b[yh] : void 0, P = U ? U[yh] : void 0;
            F != null && P !== F && (s = s || []).push(v, F);
          } else v === js ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === mh || v === Mo || (pt.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Sh(v, b), v === "onScroll" && Cn("scroll", e)), !s && U !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (rs(g, p[Fs]), (s = s || []).push(Fs, g)), s;
    }
    function eT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && A(e, u);
      var s = Pi(a, i), f = Pi(a, u);
      switch (qR(e, t, s, f), a) {
        case "input":
          H(e, u);
          break;
        case "textarea":
          ev(e, u);
          break;
        case "select":
          qm(e, u);
          break;
      }
    }
    function tT(e) {
      {
        var t = e.toLowerCase();
        return fc.hasOwnProperty(t) && fc[t] || null;
      }
    }
    function nT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Pi(t, a), gh(t, a), t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            Cn(Zd[y], e);
          break;
        case "source":
          Cn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e);
          break;
        case "details":
          Cn("toggle", e);
          break;
        case "input":
          C(e, a), Cn("invalid", e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          ts(e, a), Cn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), Cn("invalid", e);
          break;
      }
      cc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var b = g[_].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var U = null;
      for (var F in a)
        if (a.hasOwnProperty(F)) {
          var P = a[F];
          if (F === js)
            typeof P == "string" ? e.textContent !== P && (a[Mo] !== !0 && Ch(e.textContent, P, s, f), U = [js, P]) : typeof P == "number" && e.textContent !== "" + P && (a[Mo] !== !0 && Ch(e.textContent, P, s, f), U = [js, "" + P]);
          else if (pt.hasOwnProperty(F))
            P != null && (typeof P != "function" && Sh(F, P), F === "onScroll" && Cn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Ne = p && je ? null : xr(F);
            if (a[Mo] !== !0) {
              if (!(F === mh || F === Mo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              F === "value" || F === "checked" || F === "selected")) {
                if (F === tp) {
                  var _e = e.innerHTML, _t = P ? P[yh] : void 0;
                  if (_t != null) {
                    var St = I0(e, _t);
                    St !== _e && np(F, _e, St);
                  }
                } else if (F === Fs) {
                  if (v.delete(F), $0) {
                    var M = ry(P);
                    se = e.getAttribute("style"), M !== se && np(F, se, M);
                  }
                } else if (p && !je)
                  v.delete(F.toLowerCase()), se = pi(e, F, P), P !== se && np(F, se, P);
                else if (!yn(F, Ne, p) && !Qt(F, P, Ne, p)) {
                  var V = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), se = va(e, F, P, Ne);
                  else {
                    var N = i;
                    if (N === Fi && (N = lc(t)), N === Fi)
                      v.delete(F.toLowerCase());
                    else {
                      var q = tT(F);
                      q !== null && q !== F && (V = !0, v.delete(q)), v.delete(F);
                    }
                    se = pi(e, F, P);
                  }
                  var he = je;
                  !he && P !== se && !V && np(F, se, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Mo] !== !0 && B0(v), t) {
        case "input":
          Ma(e), X(e, a, !0);
          break;
        case "textarea":
          Ma(e), tv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Rh(e);
          break;
      }
      return U;
    }
    function rT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ay(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function jy(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t, a) {
      {
        if (Wa)
          return;
        Wa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Hy(e, t) {
      {
        if (t === "" || Wa)
          return;
        Wa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function aT(e, t, a) {
      switch (t) {
        case "input":
          He(e, a);
          return;
        case "textarea":
          Zf(e, a);
          return;
        case "select":
          Km(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var iT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Q0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], lT = Q0.concat(["button"]), uT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], W0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = ct({}, e || W0), i = {
          tag: t
        };
        return Q0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), lT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), iT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var oT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return uT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, sT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, G0 = {};
      rp = function(e, t, a) {
        a = a || W0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = oT(e, u) ? null : i, f = s ? null : sT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!G0[y]) {
            G0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, b);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Th = "suppressHydrationWarning", wh = "$", bh = "/$", ip = "$?", lp = "$!", cT = "style", Py = null, Vy = null;
    function fT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ii:
        case Zl: {
          t = i === ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ed(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = ed(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function dT(e, t, a) {
      {
        var i = e, u = ed(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function XD(e) {
      return e;
    }
    function pT(e) {
      Py = bo(), Vy = _R();
      var t = null;
      return la(!1), t;
    }
    function vT(e) {
      DR(Vy), la(Py), Py = null, Vy = null;
    }
    function hT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = KR(e, t, a, s);
      return sp(u, y), qy(y, t), y;
    }
    function mT(e, t) {
      e.appendChild(t);
    }
    function yT(e, t, a, i, u) {
      switch (ZR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function gT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return JR(e, t, a, i);
    }
    function By(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ST(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = XR(e, t);
      return sp(i, s), s;
    }
    function ET() {
      var e = window.event;
      return e === void 0 ? Ri : tf(e.type);
    }
    var $y = typeof setTimeout == "function" ? setTimeout : void 0, CT = typeof clearTimeout == "function" ? clearTimeout : void 0, Iy = -1, q0 = typeof Promise == "function" ? Promise : void 0, RT = typeof queueMicrotask == "function" ? queueMicrotask : typeof q0 < "u" ? function(e) {
      return q0.resolve(null).then(e).catch(TT);
    } : $y;
    function TT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function wT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function bT(e, t, a, i, u, s) {
      eT(e, t, a, i, u), qy(e, u);
    }
    function K0(e) {
      oc(e, "");
    }
    function xT(e, t, a) {
      e.nodeValue = a;
    }
    function _T(e, t) {
      e.appendChild(t);
    }
    function DT(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Rh(a);
    }
    function kT(e, t, a) {
      e.insertBefore(t, a);
    }
    function OT(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function LT(e, t) {
      e.removeChild(t);
    }
    function MT(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Yy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === An) {
          var s = u.data;
          if (s === bh)
            if (i === 0) {
              e.removeChild(u), xn(t);
              return;
            } else
              i--;
          else (s === wh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      xn(t);
    }
    function NT(e, t) {
      e.nodeType === An ? Yy(e.parentNode, t) : e.nodeType === Kr && Yy(e, t), xn(e);
    }
    function zT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function UT(e) {
      e.nodeValue = "";
    }
    function AT(e, t) {
      e = e;
      var a = t[cT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = sc("display", i);
    }
    function jT(e, t) {
      e.nodeValue = t;
    }
    function FT(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function HT(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function PT(e, t) {
      return t === "" || e.nodeType !== Hi ? null : e;
    }
    function VT(e) {
      return e.nodeType !== An ? null : e;
    }
    function X0(e) {
      return e.data === ip;
    }
    function Qy(e) {
      return e.data === lp;
    }
    function BT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function $T(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Hi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === wh || a === lp || a === ip)
            break;
          if (a === bh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return xh(e.nextSibling);
    }
    function IT(e) {
      return xh(e.firstChild);
    }
    function YT(e) {
      return xh(e.firstChild);
    }
    function QT(e) {
      return xh(e.nextSibling);
    }
    function WT(e, t, a, i, u, s, f) {
      sp(s, e), qy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & xe) !== Te;
      return nT(e, t, a, p, i, y, f);
    }
    function GT(e, t, a, i) {
      return sp(a, e), a.mode & xe, rT(e, t);
    }
    function qT(e, t) {
      sp(t, e);
    }
    function KT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === bh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === wh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Z0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === wh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === bh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function XT(e) {
      xn(e);
    }
    function ZT(e) {
      xn(e);
    }
    function JT(e) {
      return e !== "head" && e !== "body";
    }
    function ew(e, t, a, i) {
      var u = !0;
      Ch(t.nodeValue, a, i, u);
    }
    function tw(e, t, a, i, u, s) {
      if (t[Th] !== !0) {
        var f = !0;
        Ch(i.nodeValue, u, s, f);
      }
    }
    function nw(e, t) {
      t.nodeType === Kr ? Ay(e, t) : t.nodeType === An || jy(e, t);
    }
    function rw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? Ay(a, t) : t.nodeType === An || jy(a, t));
      }
    }
    function aw(e, t, a, i, u) {
      (u || t[Th] !== !0) && (i.nodeType === Kr ? Ay(a, i) : i.nodeType === An || jy(a, i));
    }
    function iw(e, t, a) {
      Fy(e, t);
    }
    function lw(e, t) {
      Hy(e, t);
    }
    function uw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Fy(i, t);
      }
    }
    function ow(e, t) {
      {
        var a = e.parentNode;
        a !== null && Hy(a, t);
      }
    }
    function sw(e, t, a, i, u, s) {
      (s || t[Th] !== !0) && Fy(a, i);
    }
    function cw(e, t, a, i, u) {
      (u || t[Th] !== !0) && Hy(a, i);
    }
    function fw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function dw(e) {
      Jd(e);
    }
    var Ef = Math.random().toString(36).slice(2), Cf = "__reactFiber$" + Ef, Wy = "__reactProps$" + Ef, op = "__reactContainer$" + Ef, Gy = "__reactEvents$" + Ef, pw = "__reactListeners$" + Ef, vw = "__reactHandles$" + Ef;
    function hw(e) {
      delete e[Cf], delete e[Wy], delete e[Gy], delete e[pw], delete e[vw];
    }
    function sp(e, t) {
      t[Cf] = e;
    }
    function _h(e, t) {
      t[op] = e;
    }
    function J0(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Hs(e) {
      var t = e[Cf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[Cf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Z0(e); u !== null; ) {
              var s = u[Cf];
              if (s)
                return s;
              u = Z0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function No(e) {
      var t = e[Cf] || e[op];
      return t && (t.tag === Z || t.tag === me || t.tag === De || t.tag === te) ? t : null;
    }
    function Rf(e) {
      if (e.tag === Z || e.tag === me)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[Wy] || null;
    }
    function qy(e, t) {
      e[Wy] = t;
    }
    function mw(e) {
      var t = e[Gy];
      return t === void 0 && (t = e[Gy] = /* @__PURE__ */ new Set()), t;
    }
    var eE = {}, tE = w.ReactDebugCurrentFrame;
    function kh(e) {
      if (e) {
        var t = e._owner, a = yi(e.type, e._source, t ? t.type : null);
        tE.setExtraStackFrame(a);
      } else
        tE.setExtraStackFrame(null);
    }
    function Zi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Wn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (kh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), kh(null)), p instanceof Error && !(p.message in eE) && (eE[p.message] = !0, kh(u), S("Failed %s type: %s", a, p.message), kh(null));
          }
      }
    }
    var Ky = [], Oh;
    Oh = [];
    var Ru = -1;
    function zo(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Ru < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Oh[Ru] && S("Unexpected Fiber popped."), e.current = Ky[Ru], Ky[Ru] = null, Oh[Ru] = null, Ru--;
    }
    function oa(e, t, a) {
      Ru++, Ky[Ru] = e.current, Oh[Ru] = a, e.current = t;
    }
    var Xy;
    Xy = {};
    var si = {};
    Object.freeze(si);
    var Tu = zo(si), jl = zo(!1), Zy = si;
    function Tf(e, t, a) {
      return a && Fl(t) ? Zy : Tu.current;
    }
    function nE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function wf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Xe(e) || "Unknown";
          Zi(i, s, "context", p);
        }
        return u && nE(e, t, s), s;
      }
    }
    function Lh() {
      return jl.current;
    }
    function Fl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Mh(e) {
      ua(jl, e), ua(Tu, e);
    }
    function Jy(e) {
      ua(jl, e), ua(Tu, e);
    }
    function rE(e, t, a) {
      {
        if (Tu.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        oa(Tu, t, e), oa(jl, a, e);
      }
    }
    function aE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Xe(e) || "Unknown";
            Xy[s] || (Xy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Xe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Xe(e) || "Unknown";
          Zi(u, f, "child context", v);
        }
        return ct({}, a, f);
      }
    }
    function Nh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return Zy = Tu.current, oa(Tu, a, e), oa(jl, jl.current, e), !0;
      }
    }
    function iE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = aE(e, t, Zy);
          i.__reactInternalMemoizedMergedChildContext = u, ua(jl, e), ua(Tu, e), oa(Tu, u, e), oa(jl, a, e);
        } else
          ua(jl, e), oa(jl, a, e);
      }
    }
    function yw(e) {
      {
        if (!Ed(e) || e.tag !== oe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case oe: {
              var a = t.type;
              if (Fl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Uo = 0, zh = 1, wu = null, eg = !1, tg = !1;
    function lE(e) {
      wu === null ? wu = [e] : wu.push(e);
    }
    function gw(e) {
      eg = !0, lE(e);
    }
    function uE() {
      eg && Ao();
    }
    function Ao() {
      if (!tg && wu !== null) {
        tg = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = wu;
          for (bn(Ln); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          wu = null, eg = !1;
        } catch (s) {
          throw wu !== null && (wu = wu.slice(e + 1)), Ec(Rc, Ao), s;
        } finally {
          bn(t), tg = !1;
        }
      }
      return null;
    }
    var bf = [], xf = 0, Uh = null, Ah = 0, xi = [], _i = 0, Ps = null, bu = 1, xu = "";
    function Sw(e) {
      return Bs(), (e.flags & yd) !== Me;
    }
    function Ew(e) {
      return Bs(), Ah;
    }
    function Cw() {
      var e = xu, t = bu, a = t & ~Rw(t);
      return a.toString(32) + e;
    }
    function Vs(e, t) {
      Bs(), bf[xf++] = Ah, bf[xf++] = Uh, Uh = e, Ah = t;
    }
    function oE(e, t, a) {
      Bs(), xi[_i++] = bu, xi[_i++] = xu, xi[_i++] = Ps, Ps = e;
      var i = bu, u = xu, s = jh(i) - 1, f = i & ~(1 << s), p = a + 1, v = jh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), b = f >> y, U = s - y, F = jh(t) + U, P = p << U, se = P | b, Ne = _ + u;
        bu = 1 << F | se, xu = Ne;
      } else {
        var _e = p << s, _t = _e | f, St = u;
        bu = 1 << v | _t, xu = St;
      }
    }
    function ng(e) {
      Bs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Vs(e, a), oE(e, a, i);
      }
    }
    function jh(e) {
      return 32 - uo(e);
    }
    function Rw(e) {
      return 1 << jh(e) - 1;
    }
    function rg(e) {
      for (; e === Uh; )
        Uh = bf[--xf], bf[xf] = null, Ah = bf[--xf], bf[xf] = null;
      for (; e === Ps; )
        Ps = xi[--_i], xi[_i] = null, xu = xi[--_i], xi[_i] = null, bu = xi[--_i], xi[_i] = null;
    }
    function Tw() {
      return Bs(), Ps !== null ? {
        id: bu,
        overflow: xu
      } : null;
    }
    function ww(e, t) {
      Bs(), xi[_i++] = bu, xi[_i++] = xu, xi[_i++] = Ps, bu = t.id, xu = t.overflow, Ps = e;
    }
    function Bs() {
      zr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Nr = null, Di = null, Ji = !1, $s = !1, jo = null;
    function bw() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function sE() {
      $s = !0;
    }
    function xw() {
      return $s;
    }
    function _w(e) {
      var t = e.stateNode.containerInfo;
      return Di = YT(t), Nr = e, Ji = !0, jo = null, $s = !1, !0;
    }
    function Dw(e, t, a) {
      return Di = QT(t), Nr = e, Ji = !0, jo = null, $s = !1, a !== null && ww(e, a), !0;
    }
    function cE(e, t) {
      switch (e.tag) {
        case te: {
          nw(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & xe) !== Te;
          aw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && rw(i.dehydrated, t);
          break;
        }
      }
    }
    function fE(e, t) {
      cE(e, t);
      var a = M_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= jt) : i.push(a);
    }
    function ag(e, t) {
      {
        if ($s)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, iw(a, i);
                break;
              case me:
                var u = t.pendingProps;
                lw(a, u);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var v = t.type, y = t.pendingProps, g = (e.mode & xe) !== Te;
                sw(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case me: {
                var _ = t.pendingProps, b = (e.mode & xe) !== Te;
                cw(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case De: {
            var U = e.memoizedState, F = U.dehydrated;
            if (F !== null) switch (t.tag) {
              case Z:
                var P = t.type;
                t.pendingProps, uw(F, P);
                break;
              case me:
                var se = t.pendingProps;
                ow(F, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function dE(e, t) {
      t.flags = t.flags & ~Aa | on, ag(e, t);
    }
    function pE(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = HT(t, a);
          return i !== null ? (e.stateNode = i, Nr = e, Di = IT(i), !0) : !1;
        }
        case me: {
          var u = e.pendingProps, s = PT(t, u);
          return s !== null ? (e.stateNode = s, Nr = e, Di = null, !0) : !1;
        }
        case De: {
          var f = VT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Tw(),
              retryLane: Rr
            };
            e.memoizedState = p;
            var v = N_(f);
            return v.return = e, e.child = v, Nr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ig(e) {
      return (e.mode & xe) !== Te && (e.flags & Ge) === Me;
    }
    function lg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ug(e) {
      if (Ji) {
        var t = Di;
        if (!t) {
          ig(e) && (ag(Nr, e), lg()), dE(Nr, e), Ji = !1, Nr = e;
          return;
        }
        var a = t;
        if (!pE(e, t)) {
          ig(e) && (ag(Nr, e), lg()), t = up(a);
          var i = Nr;
          if (!t || !pE(e, t)) {
            dE(Nr, e), Ji = !1, Nr = e;
            return;
          }
          fE(i, a);
        }
      }
    }
    function kw(e, t, a) {
      var i = e.stateNode, u = !$s, s = WT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Ow(e) {
      var t = e.stateNode, a = e.memoizedProps, i = GT(t, a, e);
      if (i) {
        var u = Nr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & xe) !== Te;
              ew(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & xe) !== Te;
              tw(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Lw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      qT(a, e);
    }
    function Mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return KT(a);
    }
    function vE(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== te && t.tag !== De; )
        t = t.return;
      Nr = t;
    }
    function Fh(e) {
      if (e !== Nr)
        return !1;
      if (!Ji)
        return vE(e), Ji = !0, !1;
      if (e.tag !== te && (e.tag !== Z || JT(e.type) && !By(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (ig(e))
            hE(e), lg();
          else
            for (; t; )
              fE(e, t), t = up(t);
      }
      return vE(e), e.tag === De ? Di = Mw(e) : Di = Nr ? up(e.stateNode) : null, !0;
    }
    function Nw() {
      return Ji && Di !== null;
    }
    function hE(e) {
      for (var t = Di; t; )
        cE(e, t), t = up(t);
    }
    function _f() {
      Nr = null, Di = null, Ji = !1, $s = !1;
    }
    function mE() {
      jo !== null && (s1(jo), jo = null);
    }
    function zr() {
      return Ji;
    }
    function og(e) {
      jo === null ? jo = [e] : jo.push(e);
    }
    var zw = w.ReactCurrentBatchConfig, Uw = null;
    function Aw() {
      return zw.transition;
    }
    var el = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var jw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & mt && (t = a), a = a.return;
        return t;
      }, Is = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Ys = /* @__PURE__ */ new Set();
      el.recordUnsafeLifecycleWarnings = function(e, t) {
        Ys.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & mt && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & mt && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & mt && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, el.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(b) {
          e.add(Xe(b) || "Component"), Ys.add(b.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          t.add(Xe(b) || "Component"), Ys.add(b.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          a.add(Xe(b) || "Component"), Ys.add(b.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          i.add(Xe(b) || "Component"), Ys.add(b.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          u.add(Xe(b) || "Component"), Ys.add(b.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(b) {
          s.add(Xe(b) || "Component"), Ys.add(b.type);
        }), mp = []), t.size > 0) {
          var f = Is(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Is(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Is(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Is(e);
          ze(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Is(a);
          ze(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Is(u);
          ze(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Hh = /* @__PURE__ */ new Map(), yE = /* @__PURE__ */ new Set();
      el.recordLegacyContextWarning = function(e, t) {
        var a = jw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!yE.has(e.type)) {
          var i = Hh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Hh.set(a, i)), i.push(e));
        }
      }, el.flushLegacyContextWarning = function() {
        Hh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Xe(s) || "Component"), yE.add(s.type);
            });
            var u = Is(i);
            try {
              Bt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Tn();
            }
          }
        });
      }, el.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Hh = /* @__PURE__ */ new Map();
      };
    }
    var sg, cg, fg, dg, pg, gE = function(e, t) {
    };
    sg = !1, cg = !1, fg = {}, dg = {}, pg = {}, gE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Xe(t) || "Component";
        dg[a] || (dg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Fw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & mt || Qe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== oe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Fw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Xe(e) || "Component";
          fg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), fg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== oe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Gn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var b = v.refs;
            _ === null ? delete b[y] : b[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ph(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Vh(e) {
      {
        var t = Xe(e) || "Component";
        if (pg[t])
          return;
        pg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function SE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function EE(e) {
      function t(M, V) {
        if (e) {
          var N = M.deletions;
          N === null ? (M.deletions = [V], M.flags |= jt) : N.push(V);
        }
      }
      function a(M, V) {
        if (!e)
          return null;
        for (var N = V; N !== null; )
          t(M, N), N = N.sibling;
        return null;
      }
      function i(M, V) {
        for (var N = /* @__PURE__ */ new Map(), q = V; q !== null; )
          q.key !== null ? N.set(q.key, q) : N.set(q.index, q), q = q.sibling;
        return N;
      }
      function u(M, V) {
        var N = ec(M, V);
        return N.index = 0, N.sibling = null, N;
      }
      function s(M, V, N) {
        if (M.index = N, !e)
          return M.flags |= yd, V;
        var q = M.alternate;
        if (q !== null) {
          var he = q.index;
          return he < V ? (M.flags |= on, V) : he;
        } else
          return M.flags |= on, V;
      }
      function f(M) {
        return e && M.alternate === null && (M.flags |= on), M;
      }
      function p(M, V, N, q) {
        if (V === null || V.tag !== me) {
          var he = o0(N, M.mode, q);
          return he.return = M, he;
        } else {
          var fe = u(V, N);
          return fe.return = M, fe;
        }
      }
      function v(M, V, N, q) {
        var he = N.type;
        if (he === ma)
          return g(M, V, N.props.children, q, N.key);
        if (V !== null && (V.elementType === he || // Keep this check inline so it only runs on the false path:
        b1(V, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof he == "object" && he !== null && he.$$typeof === Fe && SE(he) === V.type)) {
          var fe = u(V, N.props);
          return fe.ref = yp(M, V, N), fe.return = M, fe._debugSource = N._source, fe._debugOwner = N._owner, fe;
        }
        var We = u0(N, M.mode, q);
        return We.ref = yp(M, V, N), We.return = M, We;
      }
      function y(M, V, N, q) {
        if (V === null || V.tag !== de || V.stateNode.containerInfo !== N.containerInfo || V.stateNode.implementation !== N.implementation) {
          var he = s0(N, M.mode, q);
          return he.return = M, he;
        } else {
          var fe = u(V, N.children || []);
          return fe.return = M, fe;
        }
      }
      function g(M, V, N, q, he) {
        if (V === null || V.tag !== tt) {
          var fe = Go(N, M.mode, q, he);
          return fe.return = M, fe;
        } else {
          var We = u(V, N);
          return We.return = M, We;
        }
      }
      function _(M, V, N) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var q = o0("" + V, M.mode, N);
          return q.return = M, q;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ti: {
              var he = u0(V, M.mode, N);
              return he.ref = yp(M, null, V), he.return = M, he;
            }
            case _r: {
              var fe = s0(V, M.mode, N);
              return fe.return = M, fe;
            }
            case Fe: {
              var We = V._payload, Je = V._init;
              return _(M, Je(We), N);
            }
          }
          if (Tt(V) || Dr(V)) {
            var Kt = Go(V, M.mode, N, null);
            return Kt.return = M, Kt;
          }
          Ph(M, V);
        }
        return typeof V == "function" && Vh(M), null;
      }
      function b(M, V, N, q) {
        var he = V !== null ? V.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return he !== null ? null : p(M, V, "" + N, q);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ti:
              return N.key === he ? v(M, V, N, q) : null;
            case _r:
              return N.key === he ? y(M, V, N, q) : null;
            case Fe: {
              var fe = N._payload, We = N._init;
              return b(M, V, We(fe), q);
            }
          }
          if (Tt(N) || Dr(N))
            return he !== null ? null : g(M, V, N, q, null);
          Ph(M, N);
        }
        return typeof N == "function" && Vh(M), null;
      }
      function U(M, V, N, q, he) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var fe = M.get(N) || null;
          return p(V, fe, "" + q, he);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case ti: {
              var We = M.get(q.key === null ? N : q.key) || null;
              return v(V, We, q, he);
            }
            case _r: {
              var Je = M.get(q.key === null ? N : q.key) || null;
              return y(V, Je, q, he);
            }
            case Fe:
              var Kt = q._payload, zt = q._init;
              return U(M, V, N, zt(Kt), he);
          }
          if (Tt(q) || Dr(q)) {
            var Qn = M.get(N) || null;
            return g(V, Qn, q, he, null);
          }
          Ph(V, q);
        }
        return typeof q == "function" && Vh(V), null;
      }
      function F(M, V, N) {
        {
          if (typeof M != "object" || M === null)
            return V;
          switch (M.$$typeof) {
            case ti:
            case _r:
              gE(M, N);
              var q = M.key;
              if (typeof q != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(q);
                break;
              }
              if (!V.has(q)) {
                V.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case Fe:
              var he = M._payload, fe = M._init;
              F(fe(he), V, N);
              break;
          }
        }
        return V;
      }
      function P(M, V, N, q) {
        for (var he = null, fe = 0; fe < N.length; fe++) {
          var We = N[fe];
          he = F(We, he, M);
        }
        for (var Je = null, Kt = null, zt = V, Qn = 0, Ut = 0, Hn = null; zt !== null && Ut < N.length; Ut++) {
          zt.index > Ut ? (Hn = zt, zt = null) : Hn = zt.sibling;
          var ca = b(M, zt, N[Ut], q);
          if (ca === null) {
            zt === null && (zt = Hn);
            break;
          }
          e && zt && ca.alternate === null && t(M, zt), Qn = s(ca, Qn, Ut), Kt === null ? Je = ca : Kt.sibling = ca, Kt = ca, zt = Hn;
        }
        if (Ut === N.length) {
          if (a(M, zt), zr()) {
            var Vr = Ut;
            Vs(M, Vr);
          }
          return Je;
        }
        if (zt === null) {
          for (; Ut < N.length; Ut++) {
            var fi = _(M, N[Ut], q);
            fi !== null && (Qn = s(fi, Qn, Ut), Kt === null ? Je = fi : Kt.sibling = fi, Kt = fi);
          }
          if (zr()) {
            var xa = Ut;
            Vs(M, xa);
          }
          return Je;
        }
        for (var _a = i(M, zt); Ut < N.length; Ut++) {
          var fa = U(_a, M, Ut, N[Ut], q);
          fa !== null && (e && fa.alternate !== null && _a.delete(fa.key === null ? Ut : fa.key), Qn = s(fa, Qn, Ut), Kt === null ? Je = fa : Kt.sibling = fa, Kt = fa);
        }
        if (e && _a.forEach(function(Qf) {
          return t(M, Qf);
        }), zr()) {
          var Nu = Ut;
          Vs(M, Nu);
        }
        return Je;
      }
      function se(M, V, N, q) {
        var he = Dr(N);
        if (typeof he != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (cg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cg = !0), N.entries === he && (sg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sg = !0);
          var fe = he.call(N);
          if (fe)
            for (var We = null, Je = fe.next(); !Je.done; Je = fe.next()) {
              var Kt = Je.value;
              We = F(Kt, We, M);
            }
        }
        var zt = he.call(N);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, Ut = null, Hn = V, ca = 0, Vr = 0, fi = null, xa = zt.next(); Hn !== null && !xa.done; Vr++, xa = zt.next()) {
          Hn.index > Vr ? (fi = Hn, Hn = null) : fi = Hn.sibling;
          var _a = b(M, Hn, xa.value, q);
          if (_a === null) {
            Hn === null && (Hn = fi);
            break;
          }
          e && Hn && _a.alternate === null && t(M, Hn), ca = s(_a, ca, Vr), Ut === null ? Qn = _a : Ut.sibling = _a, Ut = _a, Hn = fi;
        }
        if (xa.done) {
          if (a(M, Hn), zr()) {
            var fa = Vr;
            Vs(M, fa);
          }
          return Qn;
        }
        if (Hn === null) {
          for (; !xa.done; Vr++, xa = zt.next()) {
            var Nu = _(M, xa.value, q);
            Nu !== null && (ca = s(Nu, ca, Vr), Ut === null ? Qn = Nu : Ut.sibling = Nu, Ut = Nu);
          }
          if (zr()) {
            var Qf = Vr;
            Vs(M, Qf);
          }
          return Qn;
        }
        for (var qp = i(M, Hn); !xa.done; Vr++, xa = zt.next()) {
          var Ql = U(qp, M, Vr, xa.value, q);
          Ql !== null && (e && Ql.alternate !== null && qp.delete(Ql.key === null ? Vr : Ql.key), ca = s(Ql, ca, Vr), Ut === null ? Qn = Ql : Ut.sibling = Ql, Ut = Ql);
        }
        if (e && qp.forEach(function(cD) {
          return t(M, cD);
        }), zr()) {
          var sD = Vr;
          Vs(M, sD);
        }
        return Qn;
      }
      function Ne(M, V, N, q) {
        if (V !== null && V.tag === me) {
          a(M, V.sibling);
          var he = u(V, N);
          return he.return = M, he;
        }
        a(M, V);
        var fe = o0(N, M.mode, q);
        return fe.return = M, fe;
      }
      function _e(M, V, N, q) {
        for (var he = N.key, fe = V; fe !== null; ) {
          if (fe.key === he) {
            var We = N.type;
            if (We === ma) {
              if (fe.tag === tt) {
                a(M, fe.sibling);
                var Je = u(fe, N.props.children);
                return Je.return = M, Je._debugSource = N._source, Je._debugOwner = N._owner, Je;
              }
            } else if (fe.elementType === We || // Keep this check inline so it only runs on the false path:
            b1(fe, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof We == "object" && We !== null && We.$$typeof === Fe && SE(We) === fe.type) {
              a(M, fe.sibling);
              var Kt = u(fe, N.props);
              return Kt.ref = yp(M, fe, N), Kt.return = M, Kt._debugSource = N._source, Kt._debugOwner = N._owner, Kt;
            }
            a(M, fe);
            break;
          } else
            t(M, fe);
          fe = fe.sibling;
        }
        if (N.type === ma) {
          var zt = Go(N.props.children, M.mode, q, N.key);
          return zt.return = M, zt;
        } else {
          var Qn = u0(N, M.mode, q);
          return Qn.ref = yp(M, V, N), Qn.return = M, Qn;
        }
      }
      function _t(M, V, N, q) {
        for (var he = N.key, fe = V; fe !== null; ) {
          if (fe.key === he)
            if (fe.tag === de && fe.stateNode.containerInfo === N.containerInfo && fe.stateNode.implementation === N.implementation) {
              a(M, fe.sibling);
              var We = u(fe, N.children || []);
              return We.return = M, We;
            } else {
              a(M, fe);
              break;
            }
          else
            t(M, fe);
          fe = fe.sibling;
        }
        var Je = s0(N, M.mode, q);
        return Je.return = M, Je;
      }
      function St(M, V, N, q) {
        var he = typeof N == "object" && N !== null && N.type === ma && N.key === null;
        if (he && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ti:
              return f(_e(M, V, N, q));
            case _r:
              return f(_t(M, V, N, q));
            case Fe:
              var fe = N._payload, We = N._init;
              return St(M, V, We(fe), q);
          }
          if (Tt(N))
            return P(M, V, N, q);
          if (Dr(N))
            return se(M, V, N, q);
          Ph(M, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(Ne(M, V, "" + N, q)) : (typeof N == "function" && Vh(M), a(M, V));
      }
      return St;
    }
    var Df = EE(!0), CE = EE(!1);
    function Hw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ec(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ec(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Pw(e, t) {
      for (var a = e.child; a !== null; )
        __(a, t), a = a.sibling;
    }
    var vg = zo(null), hg;
    hg = {};
    var Bh = null, kf = null, mg = null, $h = !1;
    function Ih() {
      Bh = null, kf = null, mg = null, $h = !1;
    }
    function RE() {
      $h = !0;
    }
    function TE() {
      $h = !1;
    }
    function wE(e, t, a) {
      oa(vg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== hg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = hg;
    }
    function yg(e, t) {
      var a = vg.current;
      ua(vg, t), e._currentValue = a;
    }
    function gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (vu(i.childLanes, t) ? u !== null && !vu(u.childLanes, t) && (u.childLanes = nt(u.childLanes, t)) : (i.childLanes = nt(i.childLanes, t), u !== null && (u.childLanes = nt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vw(e, t, a) {
      Bw(e, t, a);
    }
    function Bw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === oe) {
                var p = ho(a), v = _u(an, p);
                v.tag = Qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = nt(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = nt(b.lanes, a)), gg(i.return, a, e), s.lanes = nt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ve)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Gt) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = nt(U.lanes, a);
          var F = U.alternate;
          F !== null && (F.lanes = nt(F.lanes, a)), gg(U, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Of(e, t) {
      Bh = e, kf = null, mg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ia(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function nr(e) {
      $h && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (mg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Bh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Bh.dependencies = {
            lanes: I,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Qs = null;
    function Sg(e) {
      Qs === null ? Qs = [e] : Qs.push(e);
    }
    function $w() {
      if (Qs !== null) {
        for (var e = 0; e < Qs.length; e++) {
          var t = Qs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Qs = null;
      }
    }
    function bE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Yh(e, i);
    }
    function Iw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Yw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Yh(e, i);
    }
    function Ga(e, t) {
      return Yh(e, t);
    }
    var Qw = Yh;
    function Yh(e, t) {
      e.lanes = nt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = nt(a.lanes, t)), a === null && (e.flags & (on | Aa)) !== Me && C1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = nt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = nt(a.childLanes, t) : (u.flags & (on | Aa)) !== Me && C1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var xE = 0, _E = 1, Qh = 2, Eg = 3, Wh = !1, Cg, Gh;
    Cg = !1, Gh = null;
    function Rg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function DE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function _u(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: xE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Fo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Gh === u && !Cg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Cg = !0), Ix()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Qw(e, a);
      } else
        return Yw(e, u, t, a);
    }
    function qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Md(a)) {
          var s = u.lanes;
          s = Qc(s, e.pendingLanes);
          var f = nt(s, a);
          u.lanes = f, Nd(e, f);
        }
      }
    }
    function Tg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Ww(e, t, a, i, u, s) {
      switch (a.tag) {
        case _E: {
          var f = a.payload;
          if (typeof f == "function") {
            RE();
            var p = f.call(s, i, u);
            {
              if (e.mode & mt) {
                jn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              TE();
            }
            return p;
          }
          return f;
        }
        case Eg:
          e.flags = e.flags & ~Zn | Ge;
        case xE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            RE(), y = v.call(s, i, u);
            {
              if (e.mode & mt) {
                jn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              TE();
            }
          } else
            y = v;
          return y == null ? i : ct({}, i, y);
        }
        case Qh:
          return Wh = !0, i;
      }
      return i;
    }
    function Kh(e, t, a, i) {
      var u = e.updateQueue;
      Wh = !1, Gh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, b = _.lastBaseUpdate;
          b !== f && (b === null ? _.firstBaseUpdate = y : b.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = u.baseState, F = I, P = null, se = null, Ne = null, _e = s;
        do {
          var _t = _e.lane, St = _e.eventTime;
          if (vu(i, _t)) {
            if (Ne !== null) {
              var V = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: _e.tag,
                payload: _e.payload,
                callback: _e.callback,
                next: null
              };
              Ne = Ne.next = V;
            }
            U = Ww(e, u, _e, U, t, a);
            var N = _e.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            _e.lane !== Fn) {
              e.flags |= Ei;
              var q = u.effects;
              q === null ? u.effects = [_e] : q.push(_e);
            }
          } else {
            var M = {
              eventTime: St,
              lane: _t,
              tag: _e.tag,
              payload: _e.payload,
              callback: _e.callback,
              next: null
            };
            Ne === null ? (se = Ne = M, P = U) : Ne = Ne.next = M, F = nt(F, _t);
          }
          if (_e = _e.next, _e === null) {
            if (p = u.shared.pending, p === null)
              break;
            var he = p, fe = he.next;
            he.next = null, _e = fe, u.lastBaseUpdate = he, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (P = U), u.baseState = P, u.firstBaseUpdate = se, u.lastBaseUpdate = Ne;
        var We = u.shared.interleaved;
        if (We !== null) {
          var Je = We;
          do
            F = nt(F, Je.lane), Je = Je.next;
          while (Je !== We);
        } else s === null && (u.shared.lanes = I);
        Ip(F), e.lanes = F, e.memoizedState = U;
      }
      Gh = null;
    }
    function Gw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function kE() {
      Wh = !1;
    }
    function Xh() {
      return Wh;
    }
    function OE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Gw(f, a));
        }
    }
    var gp = {}, Ho = zo(gp), Sp = zo(gp), Zh = zo(gp);
    function Jh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function LE() {
      var e = Jh(Zh.current);
      return e;
    }
    function wg(e, t) {
      oa(Zh, t, e), oa(Sp, e, e), oa(Ho, gp, e);
      var a = fT(t);
      ua(Ho, e), oa(Ho, a, e);
    }
    function Lf(e) {
      ua(Ho, e), ua(Sp, e), ua(Zh, e);
    }
    function bg() {
      var e = Jh(Ho.current);
      return e;
    }
    function ME(e) {
      Jh(Zh.current);
      var t = Jh(Ho.current), a = dT(t, e.type);
      t !== a && (oa(Sp, e, e), oa(Ho, a, e));
    }
    function xg(e) {
      Sp.current === e && (ua(Ho, e), ua(Sp, e));
    }
    var qw = 0, NE = 1, zE = 1, Ep = 2, tl = zo(qw);
    function _g(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & NE;
    }
    function Dg(e, t) {
      return e & NE | t;
    }
    function Kw(e, t) {
      return e | t;
    }
    function Po(e, t) {
      oa(tl, t, e);
    }
    function Nf(e) {
      ua(tl, e);
    }
    function Xw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || X0(i) || Qy(i))
              return t;
          }
        } else if (t.tag === Ot && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ge) !== Me;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var qa = (
      /*   */
      0
    ), ur = (
      /* */
      1
    ), Hl = (
      /*  */
      2
    ), or = (
      /*    */
      4
    ), Ur = (
      /*   */
      8
    ), kg = [];
    function Og() {
      for (var e = 0; e < kg.length; e++) {
        var t = kg[e];
        t._workInProgressVersionPrimary = null;
      }
      kg.length = 0;
    }
    function Zw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = w.ReactCurrentDispatcher, Cp = w.ReactCurrentBatchConfig, Lg, zf;
    Lg = /* @__PURE__ */ new Set();
    var Ws = I, qt = null, sr = null, cr = null, tm = !1, Rp = !1, Tp = 0, Jw = 0, eb = 25, $ = null, ki = null, Vo = -1, Mg = !1;
    function It() {
      {
        var e = $;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function ie() {
      {
        var e = $;
        ki !== null && (Vo++, ki[Vo] !== e && tb(e));
      }
    }
    function Uf(e) {
      e != null && !Tt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", $, typeof e);
    }
    function tb(e) {
      {
        var t = Xe(qt);
        if (!Lg.has(t) && (Lg.add(t), ki !== null)) {
          for (var a = "", i = 30, u = 0; u <= Vo; u++) {
            for (var s = ki[u], f = u === Vo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function sa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ng(e, t) {
      if (Mg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", $), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, $, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ee(e[a], t[a]))
          return !1;
      return !0;
    }
    function Af(e, t, a, i, u, s) {
      Ws = s, qt = t, ki = e !== null ? e._debugHookTypes : null, Vo = -1, Mg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? ve.current = nC : ki !== null ? ve.current = tC : ve.current = eC;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= eb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Mg = !1, sr = null, cr = null, t.updateQueue = null, Vo = -1, ve.current = rC, f = a(i, u);
        } while (Rp);
      }
      ve.current = vm, t._debugHookTypes = ki;
      var v = sr !== null && sr.next !== null;
      if (Ws = I, qt = null, sr = null, cr = null, $ = null, ki = null, Vo = -1, e !== null && (e.flags & ar) !== (t.flags & ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & xe) !== Te && S("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function UE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ca) !== Te ? t.flags &= ~(iu | Jr | dn | at) : t.flags &= ~(dn | at), e.lanes = ws(e.lanes, a);
    }
    function AE() {
      if (ve.current = vm, tm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      Ws = I, qt = null, sr = null, cr = null, ki = null, Vo = -1, $ = null, qE = !1, Rp = !1, Tp = 0;
    }
    function Pl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return cr === null ? qt.memoizedState = cr = e : cr = cr.next = e, cr;
    }
    function Oi() {
      var e;
      if (sr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = sr.next;
      var a;
      if (cr === null ? a = qt.memoizedState : a = cr.next, a !== null)
        cr = a, a = cr.next, sr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        sr = e;
        var i = {
          memoizedState: sr.memoizedState,
          baseState: sr.baseState,
          baseQueue: sr.baseQueue,
          queue: sr.queue,
          next: null
        };
        cr === null ? qt.memoizedState = cr = i : cr = cr.next = i;
      }
      return cr;
    }
    function jE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ug(e, t, a) {
      var i = Pl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = ib.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = sr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, b = null, U = null, F = null, P = g;
        do {
          var se = P.lane;
          if (vu(Ws, se)) {
            if (F !== null) {
              var _e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              F = F.next = _e;
            }
            if (P.hasEagerState)
              _ = P.eagerState;
            else {
              var _t = P.action;
              _ = e(_, _t);
            }
          } else {
            var Ne = {
              lane: se,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            F === null ? (U = F = Ne, b = _) : F = F.next = Ne, qt.lanes = nt(qt.lanes, se), Ip(se);
          }
          P = P.next;
        } while (P !== null && P !== g);
        F === null ? b = _ : F.next = U, Ee(_, i.memoizedState) || Mp(), i.memoizedState = _, i.baseState = b, i.baseQueue = F, u.lastRenderedState = _;
      }
      var St = u.interleaved;
      if (St !== null) {
        var M = St;
        do {
          var V = M.lane;
          qt.lanes = nt(qt.lanes, V), Ip(V), M = M.next;
        } while (M !== St);
      } else f === null && (u.lanes = I);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function jg(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Ee(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function ZD(e, t, a) {
    }
    function JD(e, t, a) {
    }
    function Fg(e, t, a) {
      var i = qt, u = Pl(), s, f = zr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), zf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), zf = !0);
      } else {
        if (s = t(), !zf) {
          var p = t();
          Ee(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
        }
        var v = Nm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(v, Ws) || FE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, lm(PE.bind(null, i, y, e), [e]), i.flags |= dn, wp(ur | Ur, HE.bind(null, i, y, s, t), void 0, null), s;
    }
    function nm(e, t, a) {
      var i = qt, u = Oi(), s = t();
      if (!zf) {
        var f = t();
        Ee(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
      }
      var p = u.memoizedState, v = !Ee(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (xp(PE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      cr !== null && cr.memoizedState.tag & ur) {
        i.flags |= dn, wp(ur | Ur, HE.bind(null, i, y, s, t), void 0, null);
        var g = Nm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(g, Ws) || FE(i, t, s);
      }
      return s;
    }
    function FE(e, t, a) {
      e.flags |= ps;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = jE(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function HE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, VE(t) && BE(e);
    }
    function PE(e, t, a) {
      var i = function() {
        VE(t) && BE(e);
      };
      return a(i);
    }
    function VE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ee(a, i);
      } catch {
        return !0;
      }
    }
    function BE(e) {
      var t = Ga(e, Le);
      t !== null && vr(t, e, Le, an);
    }
    function rm(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = lb.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function Hg(e) {
      return Ag(zg);
    }
    function Pg(e) {
      return jg(zg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = jE(), qt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Vg(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function am(e) {
      var t = Oi();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Pl(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = wp(ur | t, a, void 0, s);
    }
    function im(e, t, a, i) {
      var u = Oi(), s = i === void 0 ? null : i, f = void 0;
      if (sr !== null) {
        var p = sr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = wp(ur | t, a, f, s);
    }
    function lm(e, t) {
      return (qt.mode & Ca) !== Te ? bp(iu | dn | _l, Ur, e, t) : bp(dn | _l, Ur, e, t);
    }
    function xp(e, t) {
      return im(dn, Ur, e, t);
    }
    function Bg(e, t) {
      return bp(at, Hl, e, t);
    }
    function um(e, t) {
      return im(at, Hl, e, t);
    }
    function $g(e, t) {
      var a = at;
      return a |= Zr, (qt.mode & Ca) !== Te && (a |= Jr), bp(a, or, e, t);
    }
    function om(e, t) {
      return im(at, or, e, t);
    }
    function $E(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ig(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = at;
      return u |= Zr, (qt.mode & Ca) !== Te && (u |= Jr), bp(u, or, $E.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(at, or, $E.bind(null, t, e), i);
    }
    function nb(e, t) {
    }
    var cm = nb;
    function Yg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Qg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function dm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Wg(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function IE(e) {
      var t = Oi(), a = sr, i = a.memoizedState;
      return QE(t, i, e);
    }
    function YE(e) {
      var t = Oi();
      if (sr === null)
        return t.memoizedState = e, e;
      var a = sr.memoizedState;
      return QE(t, a, e);
    }
    function QE(e, t, a) {
      var i = !Bv(Ws);
      if (i) {
        if (!Ee(a, t)) {
          var u = Yv();
          qt.lanes = nt(qt.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function rb(e, t, a) {
      var i = Ba();
      bn(py(i, Gi)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (bn(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ze("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Gg() {
      var e = rm(!1), t = e[0], a = e[1], i = rb.bind(null, a), u = Pl();
      return u.memoizedState = i, [t, i];
    }
    function WE() {
      var e = Hg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    function GE() {
      var e = Pg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    var qE = !1;
    function ab() {
      return qE;
    }
    function qg() {
      var e = Pl(), t = Nm(), a = t.identifierPrefix, i;
      if (zr()) {
        var u = Cw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Jw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = Oi(), t = e.memoizedState;
      return t;
    }
    function ib(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KE(e))
        XE(t, u);
      else {
        var s = bE(e, t, u, i);
        if (s !== null) {
          var f = ba();
          vr(s, e, i, f), ZE(s, t, i);
        }
      }
      JE(e, i);
    }
    function lb(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KE(e))
        XE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ve.current, ve.current = nl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Ee(y, v)) {
                Iw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ve.current = p;
            }
          }
        }
        var g = bE(e, t, u, i);
        if (g !== null) {
          var _ = ba();
          vr(g, e, i, _), ZE(g, t, i);
        }
      }
      JE(e, i);
    }
    function KE(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function XE(e, t) {
      Rp = tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ZE(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = Qc(i, e.pendingLanes);
        var u = nt(i, a);
        t.lanes = u, Nd(e, u);
      }
    }
    function JE(e, t, a) {
      ys(e, t);
    }
    var vm = {
      readContext: nr,
      useCallback: sa,
      useContext: sa,
      useEffect: sa,
      useImperativeHandle: sa,
      useInsertionEffect: sa,
      useLayoutEffect: sa,
      useMemo: sa,
      useReducer: sa,
      useRef: sa,
      useState: sa,
      useDebugValue: sa,
      useDeferredValue: sa,
      useTransition: sa,
      useMutableSource: sa,
      useSyncExternalStore: sa,
      useId: sa,
      unstable_isNewReconciler: ee
    }, eC = null, tC = null, nC = null, rC = null, Vl = null, nl = null, hm = null;
    {
      var Kg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ze = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      eC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", It(), Uf(t), Yg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", It(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", It(), Uf(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", It(), Uf(a), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", It(), Uf(t), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", It(), Uf(t), $g(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", It(), Uf(t);
          var a = ve.current;
          ve.current = Vl;
          try {
            return Qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", It();
          var i = ve.current;
          ve.current = Vl;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", It(), Vg(e);
        },
        useState: function(e) {
          $ = "useState", It();
          var t = ve.current;
          ve.current = Vl;
          try {
            return rm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", It(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", It(), Wg(e);
        },
        useTransition: function() {
          return $ = "useTransition", It(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", It(), Fg(e, t, a);
        },
        useId: function() {
          return $ = "useId", It(), qg();
        },
        unstable_isNewReconciler: ee
      }, tC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), Yg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), $g(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = ve.current;
          ve.current = Vl;
          try {
            return Qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = ve.current;
          ve.current = Vl;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), Vg(e);
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = ve.current;
          ve.current = Vl;
          try {
            return rm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), Wg(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), Fg(e, t, a);
        },
        useId: function() {
          return $ = "useId", ie(), qg();
        },
        unstable_isNewReconciler: ee
      }, nC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), fm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), om(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = ve.current;
          ve.current = nl;
          try {
            return dm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = ve.current;
          ve.current = nl;
          try {
            return Ag(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), am();
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = ve.current;
          ve.current = nl;
          try {
            return Hg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), cm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), IE(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), WE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), nm(e, t);
        },
        useId: function() {
          return $ = "useId", ie(), pm();
        },
        unstable_isNewReconciler: ee
      }, rC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), fm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), om(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = ve.current;
          ve.current = hm;
          try {
            return dm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = ve.current;
          ve.current = hm;
          try {
            return jg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), am();
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = ve.current;
          ve.current = hm;
          try {
            return Pg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), cm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), YE(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), GE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), nm(e, t);
        },
        useId: function() {
          return $ = "useId", ie(), pm();
        },
        unstable_isNewReconciler: ee
      }, Vl = {
        readContext: function(e) {
          return Kg(), nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Ze(), It(), Yg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Ze(), It(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Ze(), It(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Ze(), It(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Ze(), It(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Ze(), It(), $g(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Ze(), It();
          var a = ve.current;
          ve.current = Vl;
          try {
            return Qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Ze(), It();
          var i = ve.current;
          ve.current = Vl;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Ze(), It(), Vg(e);
        },
        useState: function(e) {
          $ = "useState", Ze(), It();
          var t = ve.current;
          ve.current = Vl;
          try {
            return rm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Ze(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Ze(), It(), Wg(e);
        },
        useTransition: function() {
          return $ = "useTransition", Ze(), It(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Ze(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Ze(), It(), Fg(e, t, a);
        },
        useId: function() {
          return $ = "useId", Ze(), It(), qg();
        },
        unstable_isNewReconciler: ee
      }, nl = {
        readContext: function(e) {
          return Kg(), nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Ze(), ie(), fm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Ze(), ie(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Ze(), ie(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Ze(), ie(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Ze(), ie(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Ze(), ie(), om(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Ze(), ie();
          var a = ve.current;
          ve.current = nl;
          try {
            return dm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Ze(), ie();
          var i = ve.current;
          ve.current = nl;
          try {
            return Ag(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Ze(), ie(), am();
        },
        useState: function(e) {
          $ = "useState", Ze(), ie();
          var t = ve.current;
          ve.current = nl;
          try {
            return Hg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Ze(), ie(), cm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Ze(), ie(), IE(e);
        },
        useTransition: function() {
          return $ = "useTransition", Ze(), ie(), WE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Ze(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Ze(), ie(), nm(e, t);
        },
        useId: function() {
          return $ = "useId", Ze(), ie(), pm();
        },
        unstable_isNewReconciler: ee
      }, hm = {
        readContext: function(e) {
          return Kg(), nr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Ze(), ie(), fm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Ze(), ie(), nr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Ze(), ie(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Ze(), ie(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Ze(), ie(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Ze(), ie(), om(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Ze(), ie();
          var a = ve.current;
          ve.current = nl;
          try {
            return dm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Ze(), ie();
          var i = ve.current;
          ve.current = nl;
          try {
            return jg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Ze(), ie(), am();
        },
        useState: function(e) {
          $ = "useState", Ze(), ie();
          var t = ve.current;
          ve.current = nl;
          try {
            return Pg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Ze(), ie(), cm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Ze(), ie(), YE(e);
        },
        useTransition: function() {
          return $ = "useTransition", Ze(), ie(), GE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Ze(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Ze(), ie(), nm(e, t);
        },
        useId: function() {
          return $ = "useId", Ze(), ie(), pm();
        },
        unstable_isNewReconciler: ee
      };
    }
    var Bo = O.unstable_now, aC = 0, mm = -1, _p = -1, ym = -1, Xg = !1, gm = !1;
    function iC() {
      return Xg;
    }
    function ub() {
      gm = !0;
    }
    function ob() {
      Xg = !1, gm = !1;
    }
    function sb() {
      Xg = gm, gm = !1;
    }
    function lC() {
      return aC;
    }
    function uC() {
      aC = Bo();
    }
    function Zg(e) {
      _p = Bo(), e.actualStartTime < 0 && (e.actualStartTime = Bo());
    }
    function oC(e) {
      _p = -1;
    }
    function Sm(e, t) {
      if (_p >= 0) {
        var a = Bo() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Bl(e) {
      if (mm >= 0) {
        var t = Bo() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ft:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (ym >= 0) {
        var t = Bo() - ym;
        ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ft:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function $l() {
      mm = Bo();
    }
    function eS() {
      ym = Bo();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function rl(e, t) {
      if (e && e.defaultProps) {
        var a = ct({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var nS = {}, rS, aS, iS, lS, uS, sC, Em, oS, sS, cS, Dp;
    {
      rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var cC = /* @__PURE__ */ new Set();
      Em = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          cC.has(a) || (cC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, sC = function(e, t) {
        if (t === void 0) {
          var a = Rt(e) || "Component";
          uS.has(a) || (uS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(nS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(nS);
    }
    function fS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & mt) {
          jn(!0);
          try {
            s = a(i, u);
          } finally {
            jn(!1);
          }
        }
        sC(t, s);
      }
      var f = s == null ? u : ct({}, u, s);
      if (e.memoizedState = f, e.lanes === I) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var dS = {
      isMounted: Sa,
      enqueueSetState: function(e, t, a) {
        var i = za(e), u = ba(), s = Qo(i), f = _u(u, s);
        f.payload = t, a != null && (Em(a, "setState"), f.callback = a);
        var p = Fo(i, f, s);
        p !== null && (vr(p, i, s, u), qh(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = za(e), u = ba(), s = Qo(i), f = _u(u, s);
        f.tag = _E, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var p = Fo(i, f, s);
        p !== null && (vr(p, i, s, u), qh(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = za(e), i = ba(), u = Qo(a), s = _u(i, u);
        s.tag = Qh, t != null && (Em(t, "forceUpdate"), s.callback = t);
        var f = Fo(a, s, u);
        f !== null && (vr(f, a, u, i), qh(f, a, u)), kc(a, u);
      }
    };
    function fC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & mt) {
            jn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              jn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Rt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !$e(a, i) || !$e(u, s) : !0;
    }
    function cb(e, t, a) {
      var i = e.stateNode;
      {
        var u = Rt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & mt) === Te && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & mt) === Te && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !sS.has(t) && (sS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Rt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !iS.has(t) && (iS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Rt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Tt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function dC(e, t) {
      t.updater = dS, e.stateNode = t, eo(t, e), t._reactInternalInstance = nS;
    }
    function pC(e, t, a) {
      var i = !1, u = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Q && f._context === void 0
        );
        if (!p && !cS.has(t)) {
          cS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Rt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = Tf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? wf(e, u) : si;
      }
      var g = new t(a, s);
      if (e.mode & mt) {
        jn(!0);
        try {
          g = new t(a, s);
        } finally {
          jn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      dC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = Rt(t) || "Component";
          aS.has(b) || (aS.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var U = null, F = null, P = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? F = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (F = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), U !== null || F !== null || P !== null) {
            var se = Rt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lS.has(se) || (lS.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Ne, U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && nE(e, u, s), g;
    }
    function fb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), dS.enqueueReplaceState(t, t.state, null));
    }
    function vC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Xe(e) || "Component";
          rS.has(s) || (rS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dS.enqueueReplaceState(t, t.state, null);
      }
    }
    function pS(e, t, a, i) {
      cb(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Rg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = Tf(e, t, !0);
        u.context = wf(e, f);
      }
      {
        if (u.state === a) {
          var p = Rt(t) || "Component";
          oS.has(p) || (oS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & mt && el.recordLegacyContextWarning(e, u), el.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (fS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (fb(e, u), Kh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = at;
        y |= Zr, (e.mode & Ca) !== Te && (y |= Jr), e.flags |= y;
      }
    }
    function db(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = Tf(e, t, !0);
        v = wf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && vC(e, u, a, v), kE();
      var b = e.memoizedState, U = u.state = b;
      if (Kh(e, a, u, i), U = e.memoizedState, s === a && b === U && !Lh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var F = at;
          F |= Zr, (e.mode & Ca) !== Te && (F |= Jr), e.flags |= F;
        }
        return !1;
      }
      typeof g == "function" && (fS(e, t, g, a), U = e.memoizedState);
      var P = Xh() || fC(e, t, s, a, b, U, v);
      if (P) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = at;
          se |= Zr, (e.mode & Ca) !== Te && (se |= Jr), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = at;
          Ne |= Zr, (e.mode & Ca) !== Te && (Ne |= Jr), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, P;
    }
    function pb(e, t, a, i, u) {
      var s = t.stateNode;
      DE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : rl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = si;
      if (typeof g == "object" && g !== null)
        _ = nr(g);
      else {
        var b = Tf(t, a, !0);
        _ = wf(t, b);
      }
      var U = a.getDerivedStateFromProps, F = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !F && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && vC(t, s, i, _), kE();
      var P = t.memoizedState, se = s.state = P;
      if (Kh(t, i, s, u), se = t.memoizedState, f === v && P === se && !Lh() && !Xh() && !ke)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof U == "function" && (fS(t, a, U, i), se = t.memoizedState);
      var Ne = Xh() || fC(t, a, p, i, P, se, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return Ne ? (!F && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, _)), typeof s.componentDidUpdate == "function" && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = _, Ne;
    }
    function Gs(e, t) {
      return {
        value: e,
        source: t,
        stack: Vu(t),
        digest: null
      };
    }
    function vS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function vb(e, t) {
      return !0;
    }
    function hS(e, t) {
      try {
        var a = vb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === oe)
            return;
          console.error(i);
        }
        var p = u ? Xe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Xe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var hb = typeof WeakMap == "function" ? WeakMap : Map;
    function hC(e, t, a) {
      var i = _u(an, a);
      i.tag = Eg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        u_(u), hS(e, t);
      }, i;
    }
    function mS(e, t, a) {
      var i = _u(an, a);
      i.tag = Eg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          x1(e), hS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        x1(e), hS(e, t), typeof u != "function" && i_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ia(e.lanes, Le) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Xe(e) || "Unknown"));
      }), i;
    }
    function mC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new hb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = o_.bind(null, e, t, a);
        Ea && Yp(e, a), t.then(s, s);
      }
    }
    function mb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function yb(e, t) {
      var a = e.tag;
      if ((e.mode & xe) === Te && (a === ne || a === Ie || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function yC(e) {
      var t = e;
      do {
        if (t.tag === De && Xw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function gC(e, t, a, i, u) {
      if ((e.mode & xe) === Te) {
        if (e === t)
          e.flags |= Zn;
        else {
          if (e.flags |= Ge, a.flags |= vs, a.flags &= ~(yc | ya), a.tag === oe) {
            var s = a.alternate;
            if (s === null)
              a.tag = ln;
            else {
              var f = _u(an, Le);
              f.tag = Qh, Fo(a, f, Le);
            }
          }
          a.lanes = nt(a.lanes, Le);
        }
        return e;
      }
      return e.flags |= Zn, e.lanes = u, e;
    }
    function gb(e, t, a, i, u) {
      if (a.flags |= ya, Ea && Yp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        yb(a), zr() && a.mode & xe && sE();
        var f = yC(t);
        if (f !== null) {
          f.flags &= ~wn, gC(f, t, a, e, u), f.mode & xe && mC(e, s, u), mb(f, e, s);
          return;
        } else {
          if (!Ld(u)) {
            mC(e, s, u), qS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (zr() && a.mode & xe) {
        sE();
        var v = yC(t);
        if (v !== null) {
          (v.flags & Zn) === Me && (v.flags |= wn), gC(v, t, a, e, u), og(Gs(i, a));
          return;
        }
      }
      i = Gs(i, a), Xx(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= Zn;
            var _ = ho(u);
            y.lanes = nt(y.lanes, _);
            var b = hC(y, g, _);
            Tg(y, b);
            return;
          }
          case oe:
            var U = i, F = y.type, P = y.stateNode;
            if ((y.flags & Ge) === Me && (typeof F.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !y1(P))) {
              y.flags |= Zn;
              var se = ho(u);
              y.lanes = nt(y.lanes, se);
              var Ne = mS(y, U, se);
              Tg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Sb() {
      return null;
    }
    var kp = w.ReactCurrentOwner, al = !1, yS, Op, gS, SS, ES, qs, CS, Cm, Lp;
    yS = {}, Op = {}, gS = {}, SS = {}, ES = {}, qs = !1, CS = {}, Cm = {}, Lp = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = CE(t, null, a, i) : t.child = Df(t, e.child, a, i);
    }
    function Eb(e, t, a, i) {
      t.child = Df(t, e.child, null, i), t.child = Df(t, null, a, i);
    }
    function SC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Zi(
          s,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Of(t, u), ao(t);
      {
        if (kp.current = t, qr(!0), v = Af(e, t, f, i, p, u), y = jf(), t.mode & mt) {
          jn(!0);
          try {
            v = Af(e, t, f, i, p, u), y = jf();
          } finally {
            jn(!1);
          }
        }
        qr(!1);
      }
      return na(), e !== null && !al ? (UE(e, t, u), Du(e, t, u)) : (zr() && y && ng(t), t.flags |= bl, Ta(e, t, v, u), t.child);
    }
    function EC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (b_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Be, t.type = f, wS(t, s), CC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Zi(
            p,
            i,
            // Resolved props
            "prop",
            Rt(s)
          ), a.defaultProps !== void 0) {
            var v = Rt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = l0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Zi(
          _,
          i,
          // Resolved props
          "prop",
          Rt(g)
        );
      }
      var b = e.child, U = OS(e, u);
      if (!U) {
        var F = b.memoizedProps, P = a.compare;
        if (P = P !== null ? P : $e, P(F, i) && e.ref === t.ref)
          return Du(e, t, u);
      }
      t.flags |= bl;
      var se = ec(b, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function CC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Fe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Zi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Rt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if ($e(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (al = !1, t.pendingProps = i = g, OS(e, u))
            (e.flags & vs) !== Me && (al = !0);
          else return t.lanes = e.lanes, Du(e, t, u);
      }
      return RS(e, t, a, i, u);
    }
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || le)
        if ((t.mode & xe) === Te) {
          var f = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (ia(a, Rr)) {
          var _ = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var b = s !== null ? s.baseLanes : a;
          zm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = nt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Rr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, zm(t, v), null;
        }
      else {
        var U;
        s !== null ? (U = nt(s.baseLanes, a), t.memoizedState = null) : U = a, zm(t, U);
      }
      return Ta(e, t, u, a), t.child;
    }
    function Cb(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function Rb(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function Tb(e, t, a) {
      {
        t.flags |= at;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ta(e, t, s, a), t.child;
    }
    function TC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= gd);
    }
    function RS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Zi(
          s,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var f;
      {
        var p = Tf(t, a, !0);
        f = wf(t, p);
      }
      var v, y;
      Of(t, u), ao(t);
      {
        if (kp.current = t, qr(!0), v = Af(e, t, a, i, f, u), y = jf(), t.mode & mt) {
          jn(!0);
          try {
            v = Af(e, t, a, i, f, u), y = jf();
          } finally {
            jn(!1);
          }
        }
        qr(!1);
      }
      return na(), e !== null && !al ? (UE(e, t, u), Du(e, t, u)) : (zr() && y && ng(t), t.flags |= bl, Ta(e, t, v, u), t.child);
    }
    function wC(e, t, a, i, u) {
      {
        switch (P_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ge, t.flags |= Zn;
            var y = new Error("Simulated error coming from DevTools"), g = ho(u);
            t.lanes = nt(t.lanes, g);
            var _ = mS(t, Gs(y, t), g);
            Tg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && Zi(
            b,
            i,
            // Resolved props
            "prop",
            Rt(a)
          );
        }
      }
      var U;
      Fl(a) ? (U = !0, Nh(t)) : U = !1, Of(t, u);
      var F = t.stateNode, P;
      F === null ? (Tm(e, t), pC(t, a, i), pS(t, a, i, u), P = !0) : e === null ? P = db(t, a, i, u) : P = pb(e, t, a, i, u);
      var se = TS(e, t, a, P, U, u);
      {
        var Ne = t.stateNode;
        P && Ne.props !== i && (qs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(t) || "a component"), qs = !0);
      }
      return se;
    }
    function TS(e, t, a, i, u, s) {
      TC(e, t);
      var f = (t.flags & Ge) !== Me;
      if (!i && !f)
        return u && iE(t, a, !1), Du(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, oC();
      else {
        ao(t);
        {
          if (qr(!0), v = p.render(), t.mode & mt) {
            jn(!0);
            try {
              p.render();
            } finally {
              jn(!1);
            }
          }
          qr(!1);
        }
        na();
      }
      return t.flags |= bl, e !== null && f ? Eb(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && iE(t, a, !0), t.child;
    }
    function bC(e) {
      var t = e.stateNode;
      t.pendingContext ? rE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rE(e, t.context, !1), wg(e, t.containerInfo);
    }
    function wb(e, t, a) {
      if (bC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      DE(e, t), Kh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & wn) {
          var g = Gs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return xC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Gs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return xC(e, t, p, a, _);
        } else {
          _w(t);
          var b = CE(t, null, p, a);
          t.child = b;
          for (var U = b; U; )
            U.flags = U.flags & ~on | Aa, U = U.sibling;
        }
      } else {
        if (_f(), p === s)
          return Du(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function xC(e, t, a, i, u) {
      return _f(), og(u), t.flags |= wn, Ta(e, t, a, i), t.child;
    }
    function bb(e, t, a) {
      ME(t), e === null && ug(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = By(i, u);
      return p ? f = null : s !== null && By(i, s) && (t.flags |= $t), TC(e, t), Ta(e, t, f, a), t.child;
    }
    function xb(e, t) {
      return e === null && ug(t), null;
    }
    function _b(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = x_(v), g = rl(v, u), _;
      switch (y) {
        case ne:
          return wS(t, v), t.type = v = Yf(v), _ = RS(null, t, v, g, i), _;
        case oe:
          return t.type = v = e0(v), _ = wC(null, t, v, g, i), _;
        case Ie:
          return t.type = v = t0(v), _ = SC(null, t, v, g, i), _;
        case lt: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Zi(
              b,
              g,
              // Resolved for outer only
              "prop",
              Rt(v)
            );
          }
          return _ = EC(
            null,
            t,
            v,
            rl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var U = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Fe && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function Db(e, t, a, i, u) {
      Tm(e, t), t.tag = oe;
      var s;
      return Fl(a) ? (s = !0, Nh(t)) : s = !1, Of(t, u), pC(t, a, i), pS(t, a, i, u), TS(null, t, a, !0, s, u);
    }
    function kb(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Tf(t, a, !1);
        s = wf(t, f);
      }
      Of(t, i);
      var p, v;
      ao(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Rt(a) || "Unknown";
          yS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), yS[y] = !0);
        }
        t.mode & mt && el.recordLegacyContextWarning(t, null), qr(!0), kp.current = t, p = Af(null, t, a, u, s, i), v = jf(), qr(!1);
      }
      if (na(), t.flags |= bl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Rt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = Rt(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = oe, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Fl(a) ? (b = !0, Nh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Rg(t), dC(t, p), pS(t, a, u, i), TS(null, t, a, !0, b, i);
      } else {
        if (t.tag = ne, t.mode & mt) {
          jn(!0);
          try {
            p = Af(null, t, a, u, s, i), v = jf();
          } finally {
            jn(!1);
          }
        }
        return zr() && v && ng(t), Ta(null, t, p, i), wS(t, a), t.child;
      }
    }
    function wS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), ES[u] || (ES[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Rt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Rt(t) || "Unknown";
          SS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), SS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Rt(t) || "Unknown";
          gS[v] || (S("%s: Function components do not support contextType.", v), gS[v] = !0);
        }
      }
    }
    var bS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fn
    };
    function xS(e) {
      return {
        baseLanes: e,
        cachePool: Sb(),
        transitions: null
      };
    }
    function Ob(e, t) {
      var a = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Lb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return _g(e, Ep);
    }
    function Mb(e, t) {
      return ws(e.childLanes, t);
    }
    function _C(e, t, a) {
      var i = t.pendingProps;
      V_(t) && (t.flags |= Ge);
      var u = tl.current, s = !1, f = (t.flags & Ge) !== Me;
      if (f || Lb(u, e) ? (s = !0, t.flags &= ~Ge) : (e === null || e.memoizedState !== null) && (u = Kw(u, zE)), u = Mf(u), Po(t, u), e === null) {
        ug(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return jb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = Nb(t, y, g, a), b = t.child;
          return b.memoizedState = xS(a), t.memoizedState = bS, _;
        } else
          return _S(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var F = U.dehydrated;
          if (F !== null)
            return Fb(e, t, f, i, F, U, a);
        }
        if (s) {
          var P = i.fallback, se = i.children, Ne = Ub(e, t, se, P, a), _e = t.child, _t = e.child.memoizedState;
          return _e.memoizedState = _t === null ? xS(a) : Ob(_t, a), _e.childLanes = Mb(e, a), t.memoizedState = bS, Ne;
        } else {
          var St = i.children, M = zb(e, t, St, a);
          return t.memoizedState = null, M;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = DS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Nb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & xe) === Te && s !== null ? (p = s, p.childLanes = I, p.pendingProps = f, e.mode & qe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Go(a, u, i, null)) : (p = DS(f, u), v = Go(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function DS(e, t, a) {
      return D1(e, t, I, null);
    }
    function DC(e, t) {
      return ec(e, t);
    }
    function zb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = DC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xe) === Te && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= jt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ub(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & xe) === Te && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = I, y.pendingProps = v, t.mode & qe && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = DC(f, v), y.subtreeFlags = f.subtreeFlags & ar;
      var _;
      return p !== null ? _ = ec(p, i) : (_ = Go(i, s, u, null), _.flags |= on), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Rm(e, t, a, i) {
      i !== null && og(i), Df(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = _S(t, s);
      return f.flags |= on, t.memoizedState = null, f;
    }
    function Ab(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = DS(f, s), v = Go(i, s, u, null);
      return v.flags |= on, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & xe) !== Te && Df(t, e.child, null, u), v;
    }
    function jb(e, t, a) {
      return (e.mode & xe) === Te ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Le) : Qy(t) ? e.lanes = Wi : e.lanes = Rr, null;
    }
    function Fb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & wn) {
          t.flags &= ~wn;
          var M = vS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Rm(e, t, f, M);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ge, null;
          var V = i.children, N = i.fallback, q = Ab(e, t, V, N, f), he = t.child;
          return he.memoizedState = xS(f), t.memoizedState = bS, q;
        }
      else {
        if (bw(), (t.mode & xe) === Te)
          return Rm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Qy(u)) {
          var p, v, y;
          {
            var g = BT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = vS(_, p, y);
          return Rm(e, t, f, b);
        }
        var U = ia(f, e.childLanes);
        if (al || U) {
          var F = Nm();
          if (F !== null) {
            var P = Gv(F, f);
            if (P !== Fn && P !== s.retryLane) {
              s.retryLane = P;
              var se = an;
              Ga(e, P), vr(F, e, P, se);
            }
          }
          qS();
          var Ne = vS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Rm(e, t, f, Ne);
        } else if (X0(u)) {
          t.flags |= Ge, t.child = e.child;
          var _e = s_.bind(null, e);
          return $T(u, _e), null;
        } else {
          Dw(t, u, s.treeContext);
          var _t = i.children, St = _S(t, _t);
          return St.flags |= Aa, St;
        }
      }
    }
    function kC(e, t, a) {
      e.lanes = nt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = nt(i.lanes, t)), gg(e.return, t, a);
    }
    function Hb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var u = i.memoizedState;
          u !== null && kC(i, a, e);
        } else if (i.tag === Ot)
          kC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Pb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Vb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !CS[e])
        if (CS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Bb(e, t) {
      e !== void 0 && !Cm[e] && (e !== "collapsed" && e !== "hidden" ? (Cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function OC(e, t) {
      {
        var a = Tt(e), i = !a && typeof Dr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function $b(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!OC(e[a], a))
              return;
        } else {
          var i = Dr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!OC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function kS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function LC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Vb(u), Bb(s, u), $b(f, u), Ta(e, t, f, a);
      var p = tl.current, v = _g(p, Ep);
      if (v)
        p = Dg(p, Ep), t.flags |= Ge;
      else {
        var y = e !== null && (e.flags & Ge) !== Me;
        y && Hb(t, t.child, a), p = Mf(p);
      }
      if (Po(t, p), (t.mode & xe) === Te)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Pb(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), kS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var F = U.alternate;
              if (F !== null && em(F) === null) {
                t.child = U;
                break;
              }
              var P = U.sibling;
              U.sibling = b, b = U, U = P;
            }
            kS(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            kS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ib(e, t, a) {
      wg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Df(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var MC = !1;
    function Yb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || MC || (MC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Zi(v, s, "prop", "Context.Provider");
      }
      if (wE(t, u, p), f !== null) {
        var y = f.value;
        if (Ee(y, p)) {
          if (f.children === s.children && !Lh())
            return Du(e, t, a);
        } else
          Vw(t, u, a);
      }
      var g = s.children;
      return Ta(e, t, g, a), t.child;
    }
    var NC = !1;
    function Qb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (NC || (NC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Of(t, a);
      var f = nr(i);
      ao(t);
      var p;
      return kp.current = t, qr(!0), p = s(f), qr(!1), na(), t.flags |= bl, Ta(e, t, p, a), t.child;
    }
    function Mp() {
      al = !0;
    }
    function Tm(e, t) {
      (t.mode & xe) === Te && e !== null && (e.alternate = null, t.alternate = null, t.flags |= on);
    }
    function Du(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), oC(), Ip(t.lanes), ia(a, t.childLanes) ? (Hw(e, t), t.child) : null;
    }
    function Wb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= jt) : s.push(e), a.flags |= on, a;
      }
    }
    function OS(e, t) {
      var a = e.lanes;
      return !!ia(a, t);
    }
    function Gb(e, t, a) {
      switch (t.tag) {
        case te:
          bC(t), t.stateNode, _f();
          break;
        case Z:
          ME(t);
          break;
        case oe: {
          var i = t.type;
          Fl(i) && Nh(t);
          break;
        }
        case de:
          wg(t, t.stateNode.containerInfo);
          break;
        case Ve: {
          var u = t.memoizedProps.value, s = t.type._context;
          wE(t, s, u);
          break;
        }
        case ft:
          {
            var f = ia(a, t.childLanes);
            f && (t.flags |= at);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Po(t, Mf(tl.current)), t.flags |= Ge, null;
            var y = t.child, g = y.childLanes;
            if (ia(a, g))
              return _C(e, t, a);
            Po(t, Mf(tl.current));
            var _ = Du(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Po(t, Mf(tl.current));
          break;
        }
        case Ot: {
          var b = (e.flags & Ge) !== Me, U = ia(a, t.childLanes);
          if (b) {
            if (U)
              return LC(e, t, a);
            t.flags |= Ge;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), Po(t, tl.current), U)
            break;
          return null;
        }
        case Ae:
        case rt:
          return t.lanes = I, RC(e, t, a);
      }
      return Du(e, t, a);
    }
    function zC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Wb(e, t, l0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Lh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          al = !0;
        else {
          var s = OS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ge) === Me)
            return al = !1, Gb(e, t, a);
          (e.flags & vs) !== Me ? al = !0 : al = !1;
        }
      } else if (al = !1, zr() && Sw(t)) {
        var f = t.index, p = Ew();
        oE(t, p, f);
      }
      switch (t.lanes = I, t.tag) {
        case Ke:
          return kb(e, t, t.type, a);
        case tn: {
          var v = t.elementType;
          return _b(e, t, v, a);
        }
        case ne: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : rl(y, g);
          return RS(e, t, y, _, a);
        }
        case oe: {
          var b = t.type, U = t.pendingProps, F = t.elementType === b ? U : rl(b, U);
          return wC(e, t, b, F, a);
        }
        case te:
          return wb(e, t, a);
        case Z:
          return bb(e, t, a);
        case me:
          return xb(e, t);
        case De:
          return _C(e, t, a);
        case de:
          return Ib(e, t, a);
        case Ie: {
          var P = t.type, se = t.pendingProps, Ne = t.elementType === P ? se : rl(P, se);
          return SC(e, t, P, Ne, a);
        }
        case tt:
          return Cb(e, t, a);
        case Ye:
          return Rb(e, t, a);
        case ft:
          return Tb(e, t, a);
        case Ve:
          return Yb(e, t, a);
        case bt:
          return Qb(e, t, a);
        case lt: {
          var _e = t.type, _t = t.pendingProps, St = rl(_e, _t);
          if (t.type !== t.elementType) {
            var M = _e.propTypes;
            M && Zi(
              M,
              St,
              // Resolved for outer only
              "prop",
              Rt(_e)
            );
          }
          return St = rl(_e.type, St), EC(e, t, _e, St, a);
        }
        case Be:
          return CC(e, t, t.type, t.pendingProps, a);
        case ln: {
          var V = t.type, N = t.pendingProps, q = t.elementType === V ? N : rl(V, N);
          return Db(e, t, V, q, a);
        }
        case Ot:
          return LC(e, t, a);
        case Rn:
          break;
        case Ae:
          return RC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= at;
    }
    function UC(e) {
      e.flags |= Xr, e.flags |= gd;
    }
    var AC, LS, jC, FC;
    AC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === me)
          mT(e, u.stateNode);
        else if (u.tag !== de) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, LS = function(e, t) {
    }, jC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = bg(), v = gT(f, a, s, i, u, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, FC = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function Np(e, t) {
      if (!zr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Ar(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = Me;
      if (t) {
        if ((e.mode & qe) !== Te) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = nt(a, nt(y.lanes, y.childLanes)), i |= y.subtreeFlags & ar, i |= y.flags & ar, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = nt(a, nt(g.lanes, g.childLanes)), i |= g.subtreeFlags & ar, i |= g.flags & ar, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & qe) !== Te) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = nt(a, nt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = nt(a, nt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function qb(e, t, a) {
      if (Nw() && (t.mode & xe) !== Te && (t.flags & Ge) === Me)
        return hE(t), _f(), t.flags |= wn | ya | Zn, !1;
      var i = Fh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Lw(t), Ar(t), (t.mode & qe) !== Te) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (_f(), (t.flags & Ge) === Me && (t.memoizedState = null), t.flags |= at, Ar(t), (t.mode & qe) !== Te) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return mE(), !0;
    }
    function HC(e, t, a) {
      var i = t.pendingProps;
      switch (rg(t), t.tag) {
        case Ke:
        case tn:
        case Be:
        case ne:
        case Ie:
        case tt:
        case Ye:
        case ft:
        case bt:
        case lt:
          return Ar(t), null;
        case oe: {
          var u = t.type;
          return Fl(u) && Mh(t), Ar(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Lf(t), Jy(t), Og(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Fh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wn) !== Me) && (t.flags |= Ua, mE());
            }
          }
          return LS(e, t), Ar(t), null;
        }
        case Z: {
          xg(t);
          var v = LE(), y = t.type;
          if (e !== null && t.stateNode != null)
            jC(e, t, y, i, v), e.ref !== t.ref && UC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ar(t), null;
            }
            var g = bg(), _ = Fh(t);
            if (_)
              kw(t, v, g) && Ff(t);
            else {
              var b = hT(y, i, v, g, t);
              AC(b, t, !1, !1), t.stateNode = b, yT(b, y, i, v) && Ff(t);
            }
            t.ref !== null && UC(t);
          }
          return Ar(t), null;
        }
        case me: {
          var U = i;
          if (e && t.stateNode != null) {
            var F = e.memoizedProps;
            FC(e, t, F, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = LE(), se = bg(), Ne = Fh(t);
            Ne ? Ow(t) && Ff(t) : t.stateNode = ST(U, P, se, t);
          }
          return Ar(t), null;
        }
        case De: {
          Nf(t);
          var _e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = qb(e, t, _e);
            if (!_t)
              return t.flags & Zn ? t : null;
          }
          if ((t.flags & Ge) !== Me)
            return t.lanes = a, (t.mode & qe) !== Te && tS(t), t;
          var St = _e !== null, M = e !== null && e.memoizedState !== null;
          if (St !== M && St) {
            var V = t.child;
            if (V.flags |= xl, (t.mode & xe) !== Te) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !k);
              N || _g(tl.current, zE) ? Kx() : qS();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= at), Ar(t), (t.mode & qe) !== Te && St) {
            var he = t.child;
            he !== null && (t.treeBaseDuration -= he.treeBaseDuration);
          }
          return null;
        }
        case de:
          return Lf(t), LS(e, t), e === null && dw(t.stateNode.containerInfo), Ar(t), null;
        case Ve:
          var fe = t.type._context;
          return yg(fe, t), Ar(t), null;
        case ln: {
          var We = t.type;
          return Fl(We) && Mh(t), Ar(t), null;
        }
        case Ot: {
          Nf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return Ar(t), null;
          var Kt = (t.flags & Ge) !== Me, zt = Je.rendering;
          if (zt === null)
            if (Kt)
              Np(Je, !1);
            else {
              var Qn = Zx() && (e === null || (e.flags & Ge) === Me);
              if (!Qn)
                for (var Ut = t.child; Ut !== null; ) {
                  var Hn = em(Ut);
                  if (Hn !== null) {
                    Kt = !0, t.flags |= Ge, Np(Je, !1);
                    var ca = Hn.updateQueue;
                    return ca !== null && (t.updateQueue = ca, t.flags |= at), t.subtreeFlags = Me, Pw(t, a), Po(t, Dg(tl.current, Ep)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              Je.tail !== null && Sn() > l1() && (t.flags |= Ge, Kt = !0, Np(Je, !1), t.lanes = jv);
            }
          else {
            if (!Kt) {
              var Vr = em(zt);
              if (Vr !== null) {
                t.flags |= Ge, Kt = !0;
                var fi = Vr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= at), Np(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !zt.alternate && !zr())
                  return Ar(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Sn() * 2 - Je.renderingStartTime > l1() && a !== Rr && (t.flags |= Ge, Kt = !0, Np(Je, !1), t.lanes = jv);
            }
            if (Je.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var xa = Je.last;
              xa !== null ? xa.sibling = zt : t.child = zt, Je.last = zt;
            }
          }
          if (Je.tail !== null) {
            var _a = Je.tail;
            Je.rendering = _a, Je.tail = _a.sibling, Je.renderingStartTime = Sn(), _a.sibling = null;
            var fa = tl.current;
            return Kt ? fa = Dg(fa, Ep) : fa = Mf(fa), Po(t, fa), _a;
          }
          return Ar(t), null;
        }
        case Rn:
          break;
        case Ae:
        case rt: {
          GS(t);
          var Nu = t.memoizedState, Qf = Nu !== null;
          if (e !== null) {
            var qp = e.memoizedState, Ql = qp !== null;
            Ql !== Qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !le && (t.flags |= xl);
          }
          return !Qf || (t.mode & xe) === Te ? Ar(t) : ia(Yl, Rr) && (Ar(t), t.subtreeFlags & (on | at) && (t.flags |= xl)), null;
        }
        case Ft:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kb(e, t, a) {
      switch (rg(t), t.tag) {
        case oe: {
          var i = t.type;
          Fl(i) && Mh(t);
          var u = t.flags;
          return u & Zn ? (t.flags = u & ~Zn | Ge, (t.mode & qe) !== Te && tS(t), t) : null;
        }
        case te: {
          t.stateNode, Lf(t), Jy(t), Og();
          var s = t.flags;
          return (s & Zn) !== Me && (s & Ge) === Me ? (t.flags = s & ~Zn | Ge, t) : null;
        }
        case Z:
          return xg(t), null;
        case De: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _f();
          }
          var p = t.flags;
          return p & Zn ? (t.flags = p & ~Zn | Ge, (t.mode & qe) !== Te && tS(t), t) : null;
        }
        case Ot:
          return Nf(t), null;
        case de:
          return Lf(t), null;
        case Ve:
          var v = t.type._context;
          return yg(v, t), null;
        case Ae:
        case rt:
          return GS(t), null;
        case Ft:
          return null;
        default:
          return null;
      }
    }
    function PC(e, t, a) {
      switch (rg(t), t.tag) {
        case oe: {
          var i = t.type.childContextTypes;
          i != null && Mh(t);
          break;
        }
        case te: {
          t.stateNode, Lf(t), Jy(t), Og();
          break;
        }
        case Z: {
          xg(t);
          break;
        }
        case de:
          Lf(t);
          break;
        case De:
          Nf(t);
          break;
        case Ot:
          Nf(t);
          break;
        case Ve:
          var u = t.type._context;
          yg(u, t);
          break;
        case Ae:
        case rt:
          GS(t);
          break;
      }
    }
    var VC = null;
    VC = /* @__PURE__ */ new Set();
    var wm = !1, jr = !1, Xb = typeof WeakSet == "function" ? WeakSet : Set, Ce = null, Hf = null, Pf = null;
    function Zb(e) {
      au(null, function() {
        throw e;
      }), md();
    }
    var Jb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & qe)
        try {
          $l(), t.componentWillUnmount();
        } finally {
          Bl(e);
        }
      else
        t.componentWillUnmount();
    };
    function BC(e, t) {
      try {
        $o(or, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function MS(e, t, a) {
      try {
        Jb(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function ex(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function $C(e, t) {
      try {
        YC(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Vf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (it && Et && e.mode & qe)
              try {
                $l(), i = a(null);
              } finally {
                Bl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          a.current = null;
    }
    function bm(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var IC = !1;
    function tx(e, t) {
      pT(e.containerInfo), Ce = t, nx();
      var a = IC;
      return IC = !1, a;
    }
    function nx() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        (e.subtreeFlags & to) !== Me && t !== null ? (t.return = e, Ce = t) : rx();
      }
    }
    function rx() {
      for (; Ce !== null; ) {
        var e = Ce;
        Bt(e);
        try {
          ax(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        Tn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function ax(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ua) !== Me) {
        switch (Bt(e), e.tag) {
          case ne:
          case Ie:
          case Be:
            break;
          case oe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !qs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : rl(e.type, i), u);
              {
                var p = VC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Xe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              FT(v.containerInfo);
            }
            break;
          }
          case Z:
          case me:
          case de:
          case ln:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Tn();
      }
    }
    function il(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ur) !== qa ? zv(t) : (e & or) !== qa && oi(t), (e & Hl) !== qa && Qp(!0), bm(t, a, p), (e & Hl) !== qa && Qp(!1), (e & Ur) !== qa ? xc() : (e & or) !== qa && io());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function $o(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ur) !== qa ? kl(t) : (e & or) !== qa && Uv(t);
            var f = s.create;
            (e & Hl) !== qa && Qp(!0), s.destroy = f(), (e & Hl) !== qa && Qp(!1), (e & Ur) !== qa ? bc() : (e & or) !== qa && hs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & or) !== Me ? v = "useLayoutEffect" : (s.tag & Hl) !== Me ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function ix(e, t) {
      if ((t.flags & at) !== Me)
        switch (t.tag) {
          case ft: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = lC(), p = t.alternate === null ? "mount" : "update";
            iC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case ft:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function lx(e, t, a, i) {
      if ((a.flags & Er) !== Me)
        switch (a.tag) {
          case ne:
          case Ie:
          case Be: {
            if (!jr)
              if (a.mode & qe)
                try {
                  $l(), $o(or | ur, a);
                } finally {
                  Bl(a);
                }
              else
                $o(or | ur, a);
            break;
          }
          case oe: {
            var u = a.stateNode;
            if (a.flags & at && !jr)
              if (t === null)
                if (a.type === a.elementType && !qs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & qe)
                  try {
                    $l(), u.componentDidMount();
                  } finally {
                    Bl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : rl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !qs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & qe)
                  try {
                    $l(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Bl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !qs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), OE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    y = a.child.stateNode;
                    break;
                  case oe:
                    y = a.child.stateNode;
                    break;
                }
              OE(a, v, y);
            }
            break;
          }
          case Z: {
            var g = a.stateNode;
            if (t === null && a.flags & at) {
              var _ = a.type, b = a.memoizedProps;
              wT(g, _, b);
            }
            break;
          }
          case me:
            break;
          case de:
            break;
          case ft: {
            {
              var U = a.memoizedProps, F = U.onCommit, P = U.onRender, se = a.stateNode.effectDuration, Ne = lC(), _e = t === null ? "mount" : "update";
              iC() && (_e = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, _e, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof F == "function" && F(a.memoizedProps.id, _e, se, Ne), r_(a);
                var _t = a.return;
                e: for (; _t !== null; ) {
                  switch (_t.tag) {
                    case te:
                      var St = _t.stateNode;
                      St.effectDuration += se;
                      break e;
                    case ft:
                      var M = _t.stateNode;
                      M.effectDuration += se;
                      break e;
                  }
                  _t = _t.return;
                }
              }
            }
            break;
          }
          case De: {
            vx(e, a);
            break;
          }
          case Ot:
          case ln:
          case Rn:
          case Ae:
          case rt:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      jr || a.flags & Xr && YC(a);
    }
    function ux(e) {
      switch (e.tag) {
        case ne:
        case Ie:
        case Be: {
          if (e.mode & qe)
            try {
              $l(), BC(e, e.return);
            } finally {
              Bl(e);
            }
          else
            BC(e, e.return);
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ex(e, e.return, t), $C(e, e.return);
          break;
        }
        case Z: {
          $C(e, e.return);
          break;
        }
      }
    }
    function ox(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? zT(u) : AT(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === me) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? UT(s) : jT(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === rt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function YC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & qe)
            try {
              $l(), u = t(i);
            } finally {
              Bl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Xe(e)), t.current = i;
      }
    }
    function sx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function QC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, QC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && hw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function cx(e) {
      for (var t = e.return; t !== null; ) {
        if (WC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function WC(e) {
      return e.tag === Z || e.tag === te || e.tag === de;
    }
    function GC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || WC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== me && t.tag !== Gt; ) {
          if (t.flags & on || t.child === null || t.tag === de)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & on))
          return t.stateNode;
      }
    }
    function fx(e) {
      var t = cx(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & $t && (K0(a), t.flags &= ~$t);
          var i = GC(e);
          zS(e, i, a);
          break;
        }
        case te:
        case de: {
          var u = t.stateNode.containerInfo, s = GC(e);
          NS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function NS(e, t, a) {
      var i = e.tag, u = i === Z || i === me;
      if (u) {
        var s = e.stateNode;
        t ? OT(a, s, t) : DT(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          NS(f, t, a);
          for (var p = f.sibling; p !== null; )
            NS(p, t, a), p = p.sibling;
        }
      }
    }
    function zS(e, t, a) {
      var i = e.tag, u = i === Z || i === me;
      if (u) {
        var s = e.stateNode;
        t ? kT(a, s, t) : _T(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          zS(f, t, a);
          for (var p = f.sibling; p !== null; )
            zS(p, t, a), p = p.sibling;
        }
      }
    }
    var Fr = null, ll = !1;
    function dx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Z: {
              Fr = i.stateNode, ll = !1;
              break e;
            }
            case te: {
              Fr = i.stateNode.containerInfo, ll = !0;
              break e;
            }
            case de: {
              Fr = i.stateNode.containerInfo, ll = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        qC(e, t, a), Fr = null, ll = !1;
      }
      sx(a);
    }
    function Io(e, t, a) {
      for (var i = a.child; i !== null; )
        qC(e, t, i), i = i.sibling;
    }
    function qC(e, t, a) {
      switch (uu(a), a.tag) {
        case Z:
          jr || Vf(a, t);
        case me: {
          {
            var i = Fr, u = ll;
            Fr = null, Io(e, t, a), Fr = i, ll = u, Fr !== null && (ll ? MT(Fr, a.stateNode) : LT(Fr, a.stateNode));
          }
          return;
        }
        case Gt: {
          Fr !== null && (ll ? NT(Fr, a.stateNode) : Yy(Fr, a.stateNode));
          return;
        }
        case de: {
          {
            var s = Fr, f = ll;
            Fr = a.stateNode.containerInfo, ll = !0, Io(e, t, a), Fr = s, ll = f;
          }
          return;
        }
        case ne:
        case Ie:
        case lt:
        case Be: {
          if (!jr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, b = _.destroy, U = _.tag;
                  b !== void 0 && ((U & Hl) !== qa ? bm(a, t, b) : (U & or) !== qa && (oi(a), a.mode & qe ? ($l(), bm(a, t, b), Bl(a)) : bm(a, t, b), io())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Io(e, t, a);
          return;
        }
        case oe: {
          if (!jr) {
            Vf(a, t);
            var F = a.stateNode;
            typeof F.componentWillUnmount == "function" && MS(a, t, F);
          }
          Io(e, t, a);
          return;
        }
        case Rn: {
          Io(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & xe
          ) {
            var P = jr;
            jr = P || a.memoizedState !== null, Io(e, t, a), jr = P;
          } else
            Io(e, t, a);
          break;
        }
        default: {
          Io(e, t, a);
          return;
        }
      }
    }
    function px(e) {
      e.memoizedState;
    }
    function vx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && ZT(s);
          }
        }
      }
    }
    function KC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Xb()), t.forEach(function(i) {
          var u = c_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ea)
              if (Hf !== null && Pf !== null)
                Yp(Pf, Hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function hx(e, t, a) {
      Hf = a, Pf = e, Bt(t), XC(t, e), Bt(t), Hf = null, Pf = null;
    }
    function ul(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            dx(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = rc();
      if (t.subtreeFlags & ea)
        for (var p = t.child; p !== null; )
          Bt(p), XC(p, e), p = p.sibling;
      Bt(f);
    }
    function XC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ne:
        case Ie:
        case lt:
        case Be: {
          if (ul(t, e), Il(e), u & at) {
            try {
              il(Hl | ur, e, e.return), $o(Hl | ur, e);
            } catch (We) {
              fn(e, e.return, We);
            }
            if (e.mode & qe) {
              try {
                $l(), il(or | ur, e, e.return);
              } catch (We) {
                fn(e, e.return, We);
              }
              Bl(e);
            } else
              try {
                il(or | ur, e, e.return);
              } catch (We) {
                fn(e, e.return, We);
              }
          }
          return;
        }
        case oe: {
          ul(t, e), Il(e), u & Xr && i !== null && Vf(i, i.return);
          return;
        }
        case Z: {
          ul(t, e), Il(e), u & Xr && i !== null && Vf(i, i.return);
          {
            if (e.flags & $t) {
              var s = e.stateNode;
              try {
                K0(s);
              } catch (We) {
                fn(e, e.return, We);
              }
            }
            if (u & at) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    bT(f, g, y, v, p, e);
                  } catch (We) {
                    fn(e, e.return, We);
                  }
              }
            }
          }
          return;
        }
        case me: {
          if (ul(t, e), Il(e), u & at) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, U = i !== null ? i.memoizedProps : b;
            try {
              xT(_, U, b);
            } catch (We) {
              fn(e, e.return, We);
            }
          }
          return;
        }
        case te: {
          if (ul(t, e), Il(e), u & at && i !== null) {
            var F = i.memoizedState;
            if (F.isDehydrated)
              try {
                XT(t.containerInfo);
              } catch (We) {
                fn(e, e.return, We);
              }
          }
          return;
        }
        case de: {
          ul(t, e), Il(e);
          return;
        }
        case De: {
          ul(t, e), Il(e);
          var P = e.child;
          if (P.flags & xl) {
            var se = P.stateNode, Ne = P.memoizedState, _e = Ne !== null;
            if (se.isHidden = _e, _e) {
              var _t = P.alternate !== null && P.alternate.memoizedState !== null;
              _t || qx();
            }
          }
          if (u & at) {
            try {
              px(e);
            } catch (We) {
              fn(e, e.return, We);
            }
            KC(e);
          }
          return;
        }
        case Ae: {
          var St = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & xe
          ) {
            var M = jr;
            jr = M || St, ul(t, e), jr = M;
          } else
            ul(t, e);
          if (Il(e), u & xl) {
            var V = e.stateNode, N = e.memoizedState, q = N !== null, he = e;
            if (V.isHidden = q, q && !St && (he.mode & xe) !== Te) {
              Ce = he;
              for (var fe = he.child; fe !== null; )
                Ce = fe, yx(fe), fe = fe.sibling;
            }
            ox(he, q);
          }
          return;
        }
        case Ot: {
          ul(t, e), Il(e), u & at && KC(e);
          return;
        }
        case Rn:
          return;
        default: {
          ul(t, e), Il(e);
          return;
        }
      }
    }
    function Il(e) {
      var t = e.flags;
      if (t & on) {
        try {
          fx(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~on;
      }
      t & Aa && (e.flags &= ~Aa);
    }
    function mx(e, t, a) {
      Hf = a, Pf = t, Ce = e, ZC(e, t, a), Hf = null, Pf = null;
    }
    function ZC(e, t, a) {
      for (var i = (e.mode & xe) !== Te; Ce !== null; ) {
        var u = Ce, s = u.child;
        if (u.tag === Ae && i) {
          var f = u.memoizedState !== null, p = f || wm;
          if (p) {
            US(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || jr, _ = wm, b = jr;
            wm = p, jr = g, jr && !b && (Ce = u, gx(u));
            for (var U = s; U !== null; )
              Ce = U, ZC(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            Ce = u, wm = _, jr = b, US(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Er) !== Me && s !== null ? (s.return = u, Ce = s) : US(e, t, a);
      }
    }
    function US(e, t, a) {
      for (; Ce !== null; ) {
        var i = Ce;
        if ((i.flags & Er) !== Me) {
          var u = i.alternate;
          Bt(i);
          try {
            lx(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          Tn();
        }
        if (i === e) {
          Ce = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ce = s;
          return;
        }
        Ce = i.return;
      }
    }
    function yx(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.child;
        switch (t.tag) {
          case ne:
          case Ie:
          case lt:
          case Be: {
            if (t.mode & qe)
              try {
                $l(), il(or, t, t.return);
              } finally {
                Bl(t);
              }
            else
              il(or, t, t.return);
            break;
          }
          case oe: {
            Vf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && MS(t, t.return, i);
            break;
          }
          case Z: {
            Vf(t, t.return);
            break;
          }
          case Ae: {
            var u = t.memoizedState !== null;
            if (u) {
              JC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ce = a) : JC(e);
      }
    }
    function JC(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        if (t === e) {
          Ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ce = a;
          return;
        }
        Ce = t.return;
      }
    }
    function gx(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            e1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ce = a) : e1(e);
      }
    }
    function e1(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        Bt(t);
        try {
          ux(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (Tn(), t === e) {
          Ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ce = a;
          return;
        }
        Ce = t.return;
      }
    }
    function Sx(e, t, a, i) {
      Ce = t, Ex(t, e, a, i);
    }
    function Ex(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce, s = u.child;
        (u.subtreeFlags & ja) !== Me && s !== null ? (s.return = u, Ce = s) : Cx(e, t, a, i);
      }
    }
    function Cx(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce;
        if ((u.flags & dn) !== Me) {
          Bt(u);
          try {
            Rx(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          Tn();
        }
        if (u === e) {
          Ce = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ce = s;
          return;
        }
        Ce = u.return;
      }
    }
    function Rx(e, t, a, i) {
      switch (t.tag) {
        case ne:
        case Ie:
        case Be: {
          if (t.mode & qe) {
            eS();
            try {
              $o(Ur | ur, t);
            } finally {
              Jg(t);
            }
          } else
            $o(Ur | ur, t);
          break;
        }
      }
    }
    function Tx(e) {
      Ce = e, wx();
    }
    function wx() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        if ((Ce.flags & jt) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ce = u, _x(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ce = e;
          }
        }
        (e.subtreeFlags & ja) !== Me && t !== null ? (t.return = e, Ce = t) : bx();
      }
    }
    function bx() {
      for (; Ce !== null; ) {
        var e = Ce;
        (e.flags & dn) !== Me && (Bt(e), xx(e), Tn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function xx(e) {
      switch (e.tag) {
        case ne:
        case Ie:
        case Be: {
          e.mode & qe ? (eS(), il(Ur | ur, e, e.return), Jg(e)) : il(Ur | ur, e, e.return);
          break;
        }
      }
    }
    function _x(e, t) {
      for (; Ce !== null; ) {
        var a = Ce;
        Bt(a), kx(a, t), Tn();
        var i = a.child;
        i !== null ? (i.return = a, Ce = i) : Dx(e);
      }
    }
    function Dx(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.sibling, i = t.return;
        if (QC(t), t === e) {
          Ce = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ce = a;
          return;
        }
        Ce = i;
      }
    }
    function kx(e, t) {
      switch (e.tag) {
        case ne:
        case Ie:
        case Be: {
          e.mode & qe ? (eS(), il(Ur, e, t), Jg(e)) : il(Ur, e, t);
          break;
        }
      }
    }
    function Ox(e) {
      switch (e.tag) {
        case ne:
        case Ie:
        case Be: {
          try {
            $o(or | ur, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Lx(e) {
      switch (e.tag) {
        case ne:
        case Ie:
        case Be: {
          try {
            $o(Ur | ur, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Mx(e) {
      switch (e.tag) {
        case ne:
        case Ie:
        case Be: {
          try {
            il(or | ur, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && MS(e, e.return, t);
          break;
        }
      }
    }
    function Nx(e) {
      switch (e.tag) {
        case ne:
        case Ie:
        case Be:
          try {
            il(Ur | ur, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var zx = [];
    function Ux() {
      zx.forEach(function(e) {
        return e();
      });
    }
    var Ax = w.ReactCurrentActQueue;
    function jx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function t1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Ax.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Fx = Math.ceil, AS = w.ReactCurrentDispatcher, jS = w.ReactCurrentOwner, Hr = w.ReactCurrentBatchConfig, ol = w.ReactCurrentActQueue, fr = (
      /*             */
      0
    ), n1 = (
      /*               */
      1
    ), Pr = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), ku = 0, Up = 1, Ks = 2, xm = 3, Ap = 4, r1 = 5, FS = 6, xt = fr, wa = null, Nn = null, dr = I, Yl = I, HS = zo(I), pr = ku, jp = null, _m = I, Fp = I, Dm = I, Hp = null, Ka = null, PS = 0, a1 = 500, i1 = 1 / 0, Hx = 500, Ou = null;
    function Pp() {
      i1 = Sn() + Hx;
    }
    function l1() {
      return i1;
    }
    var km = !1, VS = null, Bf = null, Xs = !1, Yo = null, Vp = I, BS = [], $S = null, Px = 50, Bp = 0, IS = null, YS = !1, Om = !1, Vx = 50, $f = 0, Lm = null, $p = an, Mm = I, u1 = !1;
    function Nm() {
      return wa;
    }
    function ba() {
      return (xt & (Pr | Li)) !== fr ? Sn() : ($p !== an || ($p = Sn()), $p);
    }
    function Qo(e) {
      var t = e.mode;
      if ((t & xe) === Te)
        return Le;
      if ((xt & Pr) !== fr && dr !== I)
        return ho(dr);
      var a = Aw() !== Uw;
      if (a) {
        if (Hr.transition !== null) {
          var i = Hr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Mm === Fn && (Mm = Yv()), Mm;
      }
      var u = Ba();
      if (u !== Fn)
        return u;
      var s = ET();
      return s;
    }
    function Bx(e) {
      var t = e.mode;
      return (t & xe) === Te ? Le : aa();
    }
    function vr(e, t, a, i) {
      d_(), u1 && S("useInsertionEffect must not schedule updates."), YS && (Om = !0), hu(e, a, i), (xt & Pr) !== I && e === wa ? h_(t) : (Ea && qc(e, t, a), m_(t), e === wa && ((xt & Pr) === fr && (Fp = nt(Fp, a)), pr === Ap && Wo(e, dr)), Xa(e, i), a === Le && xt === fr && (t.mode & xe) === Te && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ol.isBatchingLegacy && (Pp(), uE()));
    }
    function $x(e, t, a) {
      var i = e.current;
      i.lanes = t, hu(e, t, a), Xa(e, a);
    }
    function Ix(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (xt & Pr) !== fr
      );
    }
    function Xa(e, t) {
      var a = e.callbackNode;
      Pv(e, t);
      var i = pu(e, e === wa ? dr : I);
      if (i === I) {
        a !== null && T1(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = On(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ol.current !== null && a !== ZS)) {
        a == null && s !== Le && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && T1(a);
      var f;
      if (u === Le)
        e.tag === Uo ? (ol.isBatchingLegacy !== null && (ol.didScheduleLegacyUpdate = !0), gw(c1.bind(null, e))) : lE(c1.bind(null, e)), ol.current !== null ? ol.current.push(Ao) : RT(function() {
          (xt & (Pr | Li)) === fr && Ao();
        }), f = null;
      else {
        var p;
        switch (lr(i)) {
          case Ln:
            p = Rc;
            break;
          case Gi:
            p = lu;
            break;
          case Ri:
            p = Ci;
            break;
          case mo:
            p = Tc;
            break;
          default:
            p = Ci;
            break;
        }
        f = JS(p, o1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function o1(e, t) {
      if (ob(), $p = an, Mm = I, (xt & (Pr | Li)) !== fr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Mu();
      if (i && e.callbackNode !== a)
        return null;
      var u = pu(e, e === wa ? dr : I);
      if (u === I)
        return null;
      var s = !Ts(e, u) && !Iv(e, u) && !t, f = s ? e_(e, u) : Um(e, u);
      if (f !== ku) {
        if (f === Ks) {
          var p = Ll(e);
          p !== I && (u = p, f = QS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw Zs(e, I), Wo(e, u), Xa(e, Sn()), v;
        }
        if (f === FS)
          Wo(e, u);
        else {
          var y = !Ts(e, u), g = e.current.alternate;
          if (y && !Qx(g)) {
            if (f = Um(e, u), f === Ks) {
              var _ = Ll(e);
              _ !== I && (u = _, f = QS(e, _));
            }
            if (f === Up) {
              var b = jp;
              throw Zs(e, I), Wo(e, u), Xa(e, Sn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Yx(e, f, u);
        }
      }
      return Xa(e, Sn()), e.callbackNode === a ? o1.bind(null, e) : null;
    }
    function QS(e, t) {
      var a = Hp;
      if (Kc(e)) {
        var i = Zs(e, t);
        i.flags |= wn, fw(e.containerInfo);
      }
      var u = Um(e, t);
      if (u !== Ks) {
        var s = Ka;
        Ka = a, s !== null && s1(s);
      }
      return u;
    }
    function s1(e) {
      Ka === null ? Ka = e : Ka.push.apply(Ka, e);
    }
    function Yx(e, t, a) {
      switch (t) {
        case ku:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ks: {
          Js(e, Ka, Ou);
          break;
        }
        case xm: {
          if (Wo(e, a), Vv(a) && // do not delay if we're inside an act() scope
          !w1()) {
            var i = PS + a1 - Sn();
            if (i > 10) {
              var u = pu(e, I);
              if (u !== I)
                break;
              var s = e.suspendedLanes;
              if (!vu(s, a)) {
                ba(), Wc(e, s);
                break;
              }
              e.timeoutHandle = $y(Js.bind(null, e, Ka, Ou), i);
              break;
            }
          }
          Js(e, Ka, Ou);
          break;
        }
        case Ap: {
          if (Wo(e, a), $v(a))
            break;
          if (!w1()) {
            var f = Fv(e, a), p = f, v = Sn() - p, y = f_(v) - v;
            if (y > 10) {
              e.timeoutHandle = $y(Js.bind(null, e, Ka, Ou), y);
              break;
            }
          }
          Js(e, Ka, Ou);
          break;
        }
        case r1: {
          Js(e, Ka, Ou);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Qx(e) {
      for (var t = e; ; ) {
        if (t.flags & ps) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ee(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ps && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Wo(e, t) {
      t = ws(t, Dm), t = ws(t, Fp), Wv(e, t);
    }
    function c1(e) {
      if (sb(), (xt & (Pr | Li)) !== fr)
        throw new Error("Should not already be working.");
      Mu();
      var t = pu(e, I);
      if (!ia(t, Le))
        return Xa(e, Sn()), null;
      var a = Um(e, t);
      if (e.tag !== Uo && a === Ks) {
        var i = Ll(e);
        i !== I && (t = i, a = QS(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw Zs(e, I), Wo(e, t), Xa(e, Sn()), u;
      }
      if (a === FS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Js(e, Ka, Ou), Xa(e, Sn()), null;
    }
    function Wx(e, t) {
      t !== I && (Nd(e, nt(t, Le)), Xa(e, Sn()), (xt & (Pr | Li)) === fr && (Pp(), Ao()));
    }
    function WS(e, t) {
      var a = xt;
      xt |= n1;
      try {
        return e(t);
      } finally {
        xt = a, xt === fr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ol.isBatchingLegacy && (Pp(), uE());
      }
    }
    function Gx(e, t, a, i, u) {
      var s = Ba(), f = Hr.transition;
      try {
        return Hr.transition = null, bn(Ln), e(t, a, i, u);
      } finally {
        bn(s), Hr.transition = f, xt === fr && Pp();
      }
    }
    function Lu(e) {
      Yo !== null && Yo.tag === Uo && (xt & (Pr | Li)) === fr && Mu();
      var t = xt;
      xt |= n1;
      var a = Hr.transition, i = Ba();
      try {
        return Hr.transition = null, bn(Ln), e ? e() : void 0;
      } finally {
        bn(i), Hr.transition = a, xt = t, (xt & (Pr | Li)) === fr && Ao();
      }
    }
    function f1() {
      return (xt & (Pr | Li)) !== fr;
    }
    function zm(e, t) {
      oa(HS, Yl, e), Yl = nt(Yl, t);
    }
    function GS(e) {
      Yl = HS.current, ua(HS, e);
    }
    function Zs(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== Iy && (e.timeoutHandle = Iy, CT(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var u = i.alternate;
          PC(u, i), i = i.return;
        }
      wa = e;
      var s = ec(e.current, null);
      return Nn = s, dr = Yl = t, pr = ku, jp = null, _m = I, Fp = I, Dm = I, Hp = null, Ka = null, $w(), el.discardPendingWarnings(), s;
    }
    function d1(e, t) {
      do {
        var a = Nn;
        try {
          if (Ih(), AE(), Tn(), jS.current = null, a === null || a.return === null) {
            pr = Up, jp = t, Nn = null;
            return;
          }
          if (it && a.mode & qe && Sm(a, !0), ut)
            if (na(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ou(a, i, dr);
            } else
              ms(a, t, dr);
          gb(e, a.return, a, t, dr), m1(a);
        } catch (u) {
          t = u, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function p1() {
      var e = AS.current;
      return AS.current = vm, e === null ? vm : e;
    }
    function v1(e) {
      AS.current = e;
    }
    function qx() {
      PS = Sn();
    }
    function Ip(e) {
      _m = nt(e, _m);
    }
    function Kx() {
      pr === ku && (pr = xm);
    }
    function qS() {
      (pr === ku || pr === xm || pr === Ks) && (pr = Ap), wa !== null && (Rs(_m) || Rs(Fp)) && Wo(wa, dr);
    }
    function Xx(e) {
      pr !== Ap && (pr = Ks), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function Zx() {
      return pr === ku;
    }
    function Um(e, t) {
      var a = xt;
      xt |= Pr;
      var i = p1();
      if (wa !== e || dr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, dr), u.clear()), zd(e, t);
        }
        Ou = xs(), Zs(e, t);
      }
      pn(t);
      do
        try {
          Jx();
          break;
        } catch (s) {
          d1(e, s);
        }
      while (!0);
      if (Ih(), xt = a, v1(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Dc(), wa = null, dr = I, pr;
    }
    function Jx() {
      for (; Nn !== null; )
        h1(Nn);
    }
    function e_(e, t) {
      var a = xt;
      xt |= Pr;
      var i = p1();
      if (wa !== e || dr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, dr), u.clear()), zd(e, t);
        }
        Ou = xs(), Pp(), Zs(e, t);
      }
      pn(t);
      do
        try {
          t_();
          break;
        } catch (s) {
          d1(e, s);
        }
      while (!0);
      return Ih(), v1(i), xt = a, Nn !== null ? (_c(), ku) : (Dc(), wa = null, dr = I, pr);
    }
    function t_() {
      for (; Nn !== null && !Cc(); )
        h1(Nn);
    }
    function h1(e) {
      var t = e.alternate;
      Bt(e);
      var a;
      (e.mode & qe) !== Te ? (Zg(e), a = KS(t, e, Yl), Sm(e, !0)) : a = KS(t, e, Yl), Tn(), e.memoizedProps = e.pendingProps, a === null ? m1(e) : Nn = a, jS.current = null;
    }
    function m1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ya) === Me) {
          Bt(t);
          var u = void 0;
          if ((t.mode & qe) === Te ? u = HC(a, t, Yl) : (Zg(t), u = HC(a, t, Yl), Sm(t, !1)), Tn(), u !== null) {
            Nn = u;
            return;
          }
        } else {
          var s = Kb(a, t);
          if (s !== null) {
            s.flags &= _v, Nn = s;
            return;
          }
          if ((t.mode & qe) !== Te) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ya, i.subtreeFlags = Me, i.deletions = null;
          else {
            pr = FS, Nn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Nn = v;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      pr === ku && (pr = r1);
    }
    function Js(e, t, a) {
      var i = Ba(), u = Hr.transition;
      try {
        Hr.transition = null, bn(Ln), n_(e, t, a, i);
      } finally {
        Hr.transition = u, bn(i);
      }
      return null;
    }
    function n_(e, t, a, i) {
      do
        Mu();
      while (Yo !== null);
      if (p_(), (xt & (Pr | Li)) !== fr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Dl(s), u === null)
        return wc(), null;
      if (s === I && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = nt(u.lanes, u.childLanes);
      Gc(e, f), e === wa && (wa = null, Nn = null, dr = I), ((u.subtreeFlags & ja) !== Me || (u.flags & ja) !== Me) && (Xs || (Xs = !0, $S = a, JS(Ci, function() {
        return Mu(), null;
      })));
      var p = (u.subtreeFlags & (to | ea | Er | ja)) !== Me, v = (u.flags & (to | ea | Er | ja)) !== Me;
      if (p || v) {
        var y = Hr.transition;
        Hr.transition = null;
        var g = Ba();
        bn(Ln);
        var _ = xt;
        xt |= Li, jS.current = null, tx(e, u), uC(), hx(e, u, s), vT(e.containerInfo), e.current = u, bd(s), mx(u, e, s), lo(), Ov(), xt = _, bn(g), Hr.transition = y;
      } else
        e.current = u, uC();
      var b = Xs;
      if (Xs ? (Xs = !1, Yo = e, Vp = s) : ($f = 0, Lm = null), f = e.pendingLanes, f === I && (Bf = null), b || E1(e.current, !1), ro(u.stateNode, i), Ea && e.memoizedUpdaters.clear(), Ux(), Xa(e, Sn()), t !== null)
        for (var U = e.onRecoverableError, F = 0; F < t.length; F++) {
          var P = t[F], se = P.stack, Ne = P.digest;
          U(P.value, {
            componentStack: se,
            digest: Ne
          });
        }
      if (km) {
        km = !1;
        var _e = VS;
        throw VS = null, _e;
      }
      return ia(Vp, Le) && e.tag !== Uo && Mu(), f = e.pendingLanes, ia(f, Le) ? (ub(), e === IS ? Bp++ : (Bp = 0, IS = e)) : Bp = 0, Ao(), wc(), null;
    }
    function Mu() {
      if (Yo !== null) {
        var e = lr(Vp), t = vy(Ri, e), a = Hr.transition, i = Ba();
        try {
          return Hr.transition = null, bn(t), a_();
        } finally {
          bn(i), Hr.transition = a;
        }
      }
      return !1;
    }
    function r_(e) {
      BS.push(e), Xs || (Xs = !0, JS(Ci, function() {
        return Mu(), null;
      }));
    }
    function a_() {
      if (Yo === null)
        return !1;
      var e = $S;
      $S = null;
      var t = Yo, a = Vp;
      if (Yo = null, Vp = I, (xt & (Pr | Li)) !== fr)
        throw new Error("Cannot flush passive effects while already rendering.");
      YS = !0, Om = !1, Av(a);
      var i = xt;
      xt |= Li, Tx(t.current), Sx(t, t.current, a, e);
      {
        var u = BS;
        BS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          ix(t, f);
        }
      }
      xd(), E1(t.current, !0), xt = i, Ao(), Om ? t === Lm ? $f++ : ($f = 0, Lm = t) : $f = 0, YS = !1, Om = !1, Pa(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function y1(e) {
      return Bf !== null && Bf.has(e);
    }
    function i_(e) {
      Bf === null ? Bf = /* @__PURE__ */ new Set([e]) : Bf.add(e);
    }
    function l_(e) {
      km || (km = !0, VS = e);
    }
    var u_ = l_;
    function g1(e, t, a) {
      var i = Gs(a, t), u = hC(e, i, Le), s = Fo(e, u, Le), f = ba();
      s !== null && (hu(s, Le, f), Xa(s, f));
    }
    function fn(e, t, a) {
      if (Zb(a), Qp(!1), e.tag === te) {
        g1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          g1(i, e, a);
          return;
        } else if (i.tag === oe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !y1(s)) {
            var f = Gs(a, e), p = mS(i, f, Le), v = Fo(i, p, Le), y = ba();
            v !== null && (hu(v, Le, y), Xa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function o_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ba();
      Wc(e, a), y_(e), wa === e && vu(dr, a) && (pr === Ap || pr === xm && Vv(dr) && Sn() - PS < a1 ? Zs(e, I) : Dm = nt(Dm, a)), Xa(e, u);
    }
    function S1(e, t) {
      t === Fn && (t = Bx(e));
      var a = ba(), i = Ga(e, t);
      i !== null && (hu(i, t, a), Xa(i, a));
    }
    function s_(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), S1(e, a);
    }
    function c_(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ot:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), S1(e, a);
    }
    function f_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Fx(e / 1960) * 1960;
    }
    function d_() {
      if (Bp > Px)
        throw Bp = 0, IS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > Vx && ($f = 0, Lm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function p_() {
      el.flushLegacyContextWarning(), el.flushPendingUnsafeLifecycleWarnings();
    }
    function E1(e, t) {
      Bt(e), Am(e, Jr, Mx), t && Am(e, iu, Nx), Am(e, Jr, Ox), t && Am(e, iu, Lx), Tn();
    }
    function Am(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var jm = null;
    function C1(e) {
      {
        if ((xt & Pr) !== fr || !(e.mode & xe))
          return;
        var t = e.tag;
        if (t !== Ke && t !== te && t !== oe && t !== ne && t !== Ie && t !== lt && t !== Be)
          return;
        var a = Xe(e) || "ReactComponent";
        if (jm !== null) {
          if (jm.has(a))
            return;
          jm.add(a);
        } else
          jm = /* @__PURE__ */ new Set([a]);
        var i = gn;
        try {
          Bt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Bt(e) : Tn();
        }
      }
    }
    var KS;
    {
      var v_ = null;
      KS = function(e, t, a) {
        var i = k1(v_, t);
        try {
          return zC(e, t, a);
        } catch (s) {
          if (xw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ih(), AE(), PC(e, t), k1(t, i), t.mode & qe && Zg(t), au(null, zC, null, e, t, a), sy()) {
            var u = md();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var R1 = !1, XS;
    XS = /* @__PURE__ */ new Set();
    function h_(e) {
      if (Gr && !ab())
        switch (e.tag) {
          case ne:
          case Ie:
          case Be: {
            var t = Nn && Xe(Nn) || "Unknown", a = t;
            if (!XS.has(a)) {
              XS.add(a);
              var i = Xe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case oe: {
            R1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), R1 = !0);
            break;
          }
        }
    }
    function Yp(e, t) {
      if (Ea) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          qc(e, i, t);
        });
      }
    }
    var ZS = {};
    function JS(e, t) {
      {
        var a = ol.current;
        return a !== null ? (a.push(t), ZS) : Ec(e, t);
      }
    }
    function T1(e) {
      if (e !== ZS)
        return kv(e);
    }
    function w1() {
      return ol.current !== null;
    }
    function m_(e) {
      {
        if (e.mode & xe) {
          if (!t1())
            return;
        } else if (!jx() || xt !== fr || e.tag !== ne && e.tag !== Ie && e.tag !== Be)
          return;
        if (ol.current === null) {
          var t = gn;
          try {
            Bt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Xe(e));
          } finally {
            t ? Bt(e) : Tn();
          }
        }
      }
    }
    function y_(e) {
      e.tag !== Uo && t1() && ol.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      u1 = e;
    }
    var Mi = null, If = null, g_ = function(e) {
      Mi = e;
    };
    function Yf(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function e0(e) {
      return Yf(e);
    }
    function t0(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: K,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function b1(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case oe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ne: {
            (typeof i == "function" || s === Fe) && (u = !0);
            break;
          }
          case Ie: {
            (s === K || s === Fe) && (u = !0);
            break;
          }
          case lt:
          case Be: {
            (s === Ct || s === Fe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Mi(a);
          if (f !== void 0 && f === Mi(i))
            return !0;
        }
        return !1;
      }
    }
    function x1(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var S_ = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Mu(), Lu(function() {
          n0(e.current, i, a);
        });
      }
    }, E_ = function(e, t) {
      {
        if (e.context !== si)
          return;
        Mu(), Lu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function n0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ne:
          case Be:
          case oe:
            v = p;
            break;
          case Ie:
            v = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Mi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === oe ? g = !0 : y = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = Ga(e, Le);
          b !== null && vr(b, e, Le, an);
        }
        u !== null && !g && n0(u, t, a), s !== null && n0(s, t, a);
      }
    }
    var C_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return r0(e.current, i, a), a;
      }
    };
    function r0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ne:
          case Be:
          case oe:
            p = f;
            break;
          case Ie:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? R_(e, a) : i !== null && r0(i, t, a), u !== null && r0(u, t, a);
      }
    }
    function R_(e, t) {
      {
        var a = T_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case de:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function T_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var a0;
    {
      a0 = !1;
      try {
        var _1 = Object.preventExtensions({});
      } catch {
        a0 = !0;
      }
    }
    function w_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !a0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new w_(e, t, a, i);
    };
    function i0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function b_(e) {
      return typeof e == "function" && !i0(e) && e.defaultProps === void 0;
    }
    function x_(e) {
      if (typeof e == "function")
        return i0(e) ? oe : ne;
      if (e != null) {
        var t = e.$$typeof;
        if (t === K)
          return Ie;
        if (t === Ct)
          return lt;
      }
      return Ke;
    }
    function ec(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ar, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ke:
        case ne:
        case Be:
          a.type = Yf(e.type);
          break;
        case oe:
          a.type = e0(e.type);
          break;
        case Ie:
          a.type = t0(e.type);
          break;
      }
      return a;
    }
    function __(e, t) {
      e.flags &= ar | on;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function D_(e, t, a) {
      var i;
      return e === zh ? (i = xe, t === !0 && (i |= mt, i |= Ca)) : i = Te, Ea && (i |= qe), ci(te, null, null, i);
    }
    function l0(e, t, a, i, u, s) {
      var f = Ke, p = e;
      if (typeof e == "function")
        i0(e) ? (f = oe, p = e0(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = Z;
      else
        e: switch (e) {
          case ma:
            return Go(a.children, u, s, t);
          case vi:
            f = Ye, u |= mt, (u & xe) !== Te && (u |= Ca);
            break;
          case hi:
            return k_(a, u, s, t);
          case be:
            return O_(a, u, s, t);
          case yt:
            return L_(a, u, s, t);
          case Xt:
            return D1(a, u, s, t);
          case un:
          case st:
          case Sr:
          case mi:
          case Un:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = Ve;
                  break e;
                case Q:
                  f = bt;
                  break e;
                case K:
                  f = Ie, p = t0(p);
                  break e;
                case Ct:
                  f = lt;
                  break e;
                case Fe:
                  f = tn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Xe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ci(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function u0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = l0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Go(e, t, a, i) {
      var u = ci(tt, e, i, t);
      return u.lanes = a, u;
    }
    function k_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ci(ft, e, i, t | qe);
      return u.elementType = hi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function O_(e, t, a, i) {
      var u = ci(De, e, i, t);
      return u.elementType = be, u.lanes = a, u;
    }
    function L_(e, t, a, i) {
      var u = ci(Ot, e, i, t);
      return u.elementType = yt, u.lanes = a, u;
    }
    function D1(e, t, a, i) {
      var u = ci(Ae, e, i, t);
      u.elementType = Xt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function o0(e, t, a) {
      var i = ci(me, e, null, t);
      return i.lanes = a, i;
    }
    function M_() {
      var e = ci(Z, null, null, Te);
      return e.elementType = "DELETED", e;
    }
    function N_(e) {
      var t = ci(Gt, null, null, Te);
      return t.stateNode = e, t;
    }
    function s0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ci(de, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function k1(e, t) {
      return e === null && (e = ci(Ke, null, null, Te)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function z_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Iy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = bs(I), this.expirationTimes = bs(an), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = bs(I), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ss; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case zh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Uo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function O1(e, t, a, i, u, s, f, p, v, y) {
      var g = new z_(e, t, a, p, v), _ = D_(t, s);
      g.current = _, _.stateNode = g;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = b;
      }
      return Rg(_), g;
    }
    var c0 = "18.3.1";
    function U_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: _r,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var f0, d0;
    f0 = !1, d0 = {};
    function L1(e) {
      if (!e)
        return si;
      var t = za(e), a = yw(t);
      if (t.tag === oe) {
        var i = t.type;
        if (Fl(i))
          return aE(t, i, a);
      }
      return a;
    }
    function A_(e, t) {
      {
        var a = za(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Fa(a);
        if (u === null)
          return null;
        if (u.mode & mt) {
          var s = Xe(a) || "Component";
          if (!d0[s]) {
            d0[s] = !0;
            var f = gn;
            try {
              Bt(u), a.mode & mt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Bt(f) : Tn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function M1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return O1(e, t, v, y, a, i, u, s, f);
    }
    function N1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = O1(a, i, g, e, u, s, f, p, v);
      _.context = L1(null);
      var b = _.current, U = ba(), F = Qo(b), P = _u(U, F);
      return P.callback = t ?? null, Fo(b, P, F), $x(_, F, U), _;
    }
    function Wp(e, t, a, i) {
      wd(t, e);
      var u = t.current, s = ba(), f = Qo(u);
      _d(f);
      var p = L1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && gn !== null && !f0 && (f0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Xe(gn) || "Unknown"));
      var v = _u(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Fo(u, v, f);
      return y !== null && (vr(y, u, f, s), qh(y, u, f)), f;
    }
    function Fm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function j_(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (Kc(t)) {
            var a = Od(t);
            Wx(t, a);
          }
          break;
        }
        case De: {
          Lu(function() {
            var u = Ga(e, Le);
            if (u !== null) {
              var s = ba();
              vr(u, e, Le, s);
            }
          });
          var i = Le;
          p0(e, i);
          break;
        }
      }
    }
    function z1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Qv(a.retryLane, t));
    }
    function p0(e, t) {
      z1(e, t);
      var a = e.alternate;
      a && z1(a, t);
    }
    function F_(e) {
      if (e.tag === De) {
        var t = Cs, a = Ga(e, t);
        if (a !== null) {
          var i = ba();
          vr(a, e, t, i);
        }
        p0(e, t);
      }
    }
    function H_(e) {
      if (e.tag === De) {
        var t = Qo(e), a = Ga(e, t);
        if (a !== null) {
          var i = ba();
          vr(a, e, t, i);
        }
        p0(e, t);
      }
    }
    function U1(e) {
      var t = Dv(e);
      return t === null ? null : t.stateNode;
    }
    var A1 = function(e) {
      return null;
    };
    function P_(e) {
      return A1(e);
    }
    var j1 = function(e) {
      return !1;
    };
    function V_(e) {
      return j1(e);
    }
    var F1 = null, H1 = null, P1 = null, V1 = null, B1 = null, $1 = null, I1 = null, Y1 = null, Q1 = null;
    {
      var W1 = function(e, t, a) {
        var i = t[a], u = Tt(e) ? e.slice() : ct({}, e);
        return a + 1 === t.length ? (Tt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = W1(e[i], t, a + 1), u);
      }, G1 = function(e, t) {
        return W1(e, t, 0);
      }, q1 = function(e, t, a, i) {
        var u = t[i], s = Tt(e) ? e.slice() : ct({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Tt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = q1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, K1 = function(e, t, a) {
        if (t.length !== a.length) {
          ze("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ze("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return q1(e, t, a, 0);
      }, X1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Tt(e) ? e.slice() : ct({}, e);
        return s[u] = X1(e[u], t, a + 1, i), s;
      }, Z1 = function(e, t, a) {
        return X1(e, t, 0, a);
      }, v0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      F1 = function(e, t, a, i) {
        var u = v0(e, t);
        if (u !== null) {
          var s = Z1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ct({}, e.memoizedProps);
          var f = Ga(e, Le);
          f !== null && vr(f, e, Le, an);
        }
      }, H1 = function(e, t, a) {
        var i = v0(e, t);
        if (i !== null) {
          var u = G1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ct({}, e.memoizedProps);
          var s = Ga(e, Le);
          s !== null && vr(s, e, Le, an);
        }
      }, P1 = function(e, t, a, i) {
        var u = v0(e, t);
        if (u !== null) {
          var s = K1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ct({}, e.memoizedProps);
          var f = Ga(e, Le);
          f !== null && vr(f, e, Le, an);
        }
      }, V1 = function(e, t, a) {
        e.pendingProps = Z1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, Le);
        i !== null && vr(i, e, Le, an);
      }, B1 = function(e, t) {
        e.pendingProps = G1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ga(e, Le);
        a !== null && vr(a, e, Le, an);
      }, $1 = function(e, t, a) {
        e.pendingProps = K1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, Le);
        i !== null && vr(i, e, Le, an);
      }, I1 = function(e) {
        var t = Ga(e, Le);
        t !== null && vr(t, e, Le, an);
      }, Y1 = function(e) {
        A1 = e;
      }, Q1 = function(e) {
        j1 = e;
      };
    }
    function B_(e) {
      var t = Fa(e);
      return t === null ? null : t.stateNode;
    }
    function $_(e) {
      return null;
    }
    function I_() {
      return gn;
    }
    function Y_(e) {
      var t = e.findFiberByHostInstance, a = w.ReactCurrentDispatcher;
      return Td({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: F1,
        overrideHookStateDeletePath: H1,
        overrideHookStateRenamePath: P1,
        overrideProps: V1,
        overridePropsDeletePath: B1,
        overridePropsRenamePath: $1,
        setErrorHandler: Y1,
        setSuspenseHandler: Q1,
        scheduleUpdate: I1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: B_,
        findFiberByHostInstance: t || $_,
        // React Refresh
        findHostInstancesForRefresh: C_,
        scheduleRefresh: S_,
        scheduleRoot: E_,
        setRefreshHandler: g_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: I_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: c0
      });
    }
    var J1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function h0(e) {
      this._internalRoot = e;
    }
    Hm.prototype.render = h0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Pm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = U1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Hm.prototype.unmount = h0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        f1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Lu(function() {
          Wp(null, e, null, null);
        }), J0(t);
      }
    };
    function Q_(e, t) {
      if (!Pm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      eR(e);
      var a = !1, i = !1, u = "", s = J1;
      t != null && (t.hydrate ? ze("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ti && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = M1(e, zh, null, a, i, u, s);
      _h(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return Jd(p), new h0(f);
    }
    function Hm(e) {
      this._internalRoot = e;
    }
    function W_(e) {
      e && yy(e);
    }
    Hm.prototype.unstable_scheduleHydration = W_;
    function G_(e, t, a) {
      if (!Pm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      eR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = J1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = N1(t, null, e, zh, i, s, f, p, v);
      if (_h(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Zw(y, _);
        }
      return new Hm(y);
    }
    function Pm(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === ii || e.nodeType === Zl || !B));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === ii || e.nodeType === Zl || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function eR(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var q_ = w.ReactCurrentOwner, tR;
    tR = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = U1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = m0(e), u = !!(i && No(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function m0(e) {
      return e ? e.nodeType === ii ? e.documentElement : e.firstChild : null;
    }
    function nR() {
    }
    function K_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Fm(f);
            s.call(b);
          };
        }
        var f = N1(
          t,
          i,
          e,
          Uo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          nR
        );
        e._reactRootContainer = f, _h(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return Jd(p), Lu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Fm(g);
            y.call(b);
          };
        }
        var g = M1(
          e,
          Uo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          nR
        );
        e._reactRootContainer = g, _h(g.current, e);
        var _ = e.nodeType === An ? e.parentNode : e;
        return Jd(_), Lu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function X_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      tR(a), X_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = K_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Fm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return Fm(f);
    }
    var rR = !1;
    function Z_(e) {
      {
        rR || (rR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = q_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : A_(e, "findDOMNode");
    }
    function J_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function eD(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function tD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ds(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var aR = !1;
    function nD(e) {
      if (aR || (aR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = m0(e), i = a && !No(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Lu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, J0(e);
          });
        }), !0;
      } else {
        {
          var u = m0(e), s = !!(u && No(u)), f = e.nodeType === Kr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    So(j_), hy(F_), Zc(H_), qv(Ba), Kv(Tr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), bv(aT), hc(WS, Gx, Lu);
    function rD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Pm(t))
        throw new Error("Target container is not a DOM element.");
      return U_(e, t, null, a);
    }
    function aD(e, t, a, i) {
      return tD(e, t, a, i);
    }
    var y0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, Rf, Dh, vc, ss, WS]
    };
    function iD(e, t) {
      return y0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Q_(e, t);
    }
    function lD(e, t, a) {
      return y0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), G_(e, t, a);
    }
    function uD(e) {
      return f1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Lu(e);
    }
    var oD = Y_({
      findFiberByHostInstance: Hs,
      bundleType: 1,
      version: c0,
      rendererPackageName: "react-dom"
    });
    if (!oD && hn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var iR = window.location.protocol;
      /^(https?|file):$/.test(iR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (iR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y0, Ja.createPortal = rD, Ja.createRoot = iD, Ja.findDOMNode = Z_, Ja.flushSync = uD, Ja.hydrate = J_, Ja.hydrateRoot = lD, Ja.render = eD, Ja.unmountComponentAtNode = nD, Ja.unstable_batchedUpdates = WS, Ja.unstable_renderSubtreeIntoContainer = aD, Ja.version = c0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ja;
}
function SR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SR);
    } catch (D) {
      console.error(D);
    }
  }
}
process.env.NODE_ENV === "production" ? (SR(), R0.exports = mD()) : R0.exports = yD();
var gD = R0.exports, T0, $m = gD;
if (process.env.NODE_ENV === "production")
  T0 = $m.createRoot, $m.hydrateRoot;
else {
  var pR = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  T0 = function(D, O) {
    pR.usingClientEntryPoint = !0;
    try {
      return $m.createRoot(D, O);
    } finally {
      pR.usingClientEntryPoint = !1;
    }
  };
}
var SD = Object.defineProperty, ED = (D, O, w) => O in D ? SD(D, O, { enumerable: !0, configurable: !0, writable: !0, value: w }) : D[O] = w, Im = (D, O, w) => ED(D, typeof O != "symbol" ? O + "" : O, w);
const CD = {
  stringify: (D) => D ? "true" : "false",
  parse: (D) => /^[ty1-9]/i.test(D)
}, RD = {
  stringify: (D) => D.name,
  parse: (D, O, w) => {
    const ce = (() => {
      if (typeof window < "u" && D in window)
        return window[D];
      if (typeof global < "u" && D in global)
        return global[D];
    })();
    return typeof ce == "function" ? ce.bind(w) : void 0;
  }
}, TD = {
  stringify: (D) => JSON.stringify(D),
  parse: (D) => JSON.parse(D)
}, wD = {
  stringify: (D) => `${D}`,
  parse: (D) => parseFloat(D)
}, bD = {
  stringify: (D) => D,
  parse: (D) => D
}, E0 = {
  string: bD,
  number: wD,
  boolean: CD,
  function: RD,
  json: TD
};
function xD(D) {
  return D.replace(
    /([a-z0-9])([A-Z])/g,
    (O, w, ce) => `${w}-${ce.toLowerCase()}`
  );
}
const Ym = Symbol.for("r2wc.render"), Qm = Symbol.for("r2wc.connected"), tc = Symbol.for("r2wc.context"), zu = Symbol.for("r2wc.props");
function _D(D, O, w) {
  var ce, et, ze;
  O.props || (O.props = D.propTypes ? Object.keys(D.propTypes) : []), O.events || (O.events = []);
  const S = Array.isArray(O.props) ? O.props.slice() : Object.keys(O.props), vt = Array.isArray(O.events) ? O.events.slice() : Object.keys(O.events), ne = {}, oe = {}, Ke = {}, te = {};
  for (const Z of S) {
    ne[Z] = Array.isArray(O.props) ? "string" : O.props[Z];
    const me = xD(Z);
    Ke[Z] = me, te[me] = Z;
  }
  for (const Z of vt)
    oe[Z] = Array.isArray(O.events) ? {} : O.events[Z];
  class de extends HTMLElement {
    constructor() {
      super(), Im(this, ze, !0), Im(this, et), Im(this, ce, {}), Im(this, "container"), O.shadow ? this.container = this.attachShadow({
        mode: O.shadow
      }) : this.container = this, this[zu].container = this.container;
      for (const me of S) {
        const tt = Ke[me], Ye = this.getAttribute(tt), bt = ne[me], Ve = bt ? E0[bt] : null;
        Ve != null && Ve.parse && Ye && (this[zu][me] = Ve.parse(Ye, tt, this));
      }
      for (const me of vt)
        this[zu][me] = (tt) => {
          const Ye = me.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Ye, { detail: tt, ...oe[me] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(te);
    }
    connectedCallback() {
      this[Qm] = !0, this[Ym]();
    }
    disconnectedCallback() {
      this[Qm] = !1, this[tc] && w.unmount(this[tc]), delete this[tc];
    }
    attributeChangedCallback(me, tt, Ye) {
      const bt = te[me], Ve = ne[bt], Ie = Ve ? E0[Ve] : null;
      bt in ne && Ie != null && Ie.parse && Ye && (this[zu][bt] = Ie.parse(Ye, me, this), this[Ym]());
    }
    [(ze = Qm, et = tc, ce = zu, Ym)]() {
      this[Qm] && (this[tc] ? w.update(this[tc], this[zu]) : this[tc] = w.mount(
        this.container,
        D,
        this[zu]
      ));
    }
  }
  for (const Z of S) {
    const me = Ke[Z], tt = ne[Z];
    Object.defineProperty(de.prototype, Z, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[zu][Z];
      },
      set(Ye) {
        this[zu][Z] = Ye;
        const bt = tt ? E0[tt] : null;
        if (bt != null && bt.stringify) {
          const Ve = bt.stringify(Ye, me, this);
          this.getAttribute(me) !== Ve && this.setAttribute(me, Ve);
        } else
          this[Ym]();
      }
    });
  }
  return de;
}
function DD(D, O, w) {
  const ce = T0(D), et = Uu.createElement(O, w);
  return ce.render(et), {
    root: ce,
    ReactComponent: O
  };
}
function kD({ root: D, ReactComponent: O }, w) {
  const ce = Uu.createElement(O, w);
  D.render(ce);
}
function OD({ root: D }) {
  D.unmount();
}
function LD(D, O = {}) {
  return _D(D, O, { mount: DD, update: kD, unmount: OD });
}
var w0 = { exports: {} }, Kp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vR;
function MD() {
  if (vR) return Kp;
  vR = 1;
  var D = Da, O = Symbol.for("react.element"), w = Symbol.for("react.fragment"), ce = Object.prototype.hasOwnProperty, et = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(vt, ne, oe) {
    var Ke, te = {}, de = null, Z = null;
    oe !== void 0 && (de = "" + oe), ne.key !== void 0 && (de = "" + ne.key), ne.ref !== void 0 && (Z = ne.ref);
    for (Ke in ne) ce.call(ne, Ke) && !ze.hasOwnProperty(Ke) && (te[Ke] = ne[Ke]);
    if (vt && vt.defaultProps) for (Ke in ne = vt.defaultProps, ne) te[Ke] === void 0 && (te[Ke] = ne[Ke]);
    return { $$typeof: O, type: vt, key: de, ref: Z, props: te, _owner: et.current };
  }
  return Kp.Fragment = w, Kp.jsx = S, Kp.jsxs = S, Kp;
}
var Xp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hR;
function ND() {
  return hR || (hR = 1, process.env.NODE_ENV !== "production" && function() {
    var D = Da, O = Symbol.for("react.element"), w = Symbol.for("react.portal"), ce = Symbol.for("react.fragment"), et = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), vt = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), me = Symbol.iterator, tt = "@@iterator";
    function Ye(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = me && R[me] || R[tt];
      return typeof Q == "function" ? Q : null;
    }
    var bt = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ve(R) {
      {
        for (var Q = arguments.length, K = new Array(Q > 1 ? Q - 1 : 0), be = 1; be < Q; be++)
          K[be - 1] = arguments[be];
        Ie("error", R, K);
      }
    }
    function Ie(R, Q, K) {
      {
        var be = bt.ReactDebugCurrentFrame, yt = be.getStackAddendum();
        yt !== "" && (Q += "%s", K = K.concat([yt]));
        var Ct = K.map(function(Fe) {
          return String(Fe);
        });
        Ct.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, Ct);
      }
    }
    var ft = !1, De = !1, lt = !1, Be = !1, tn = !1, ln;
    ln = Symbol.for("react.module.reference");
    function Gt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === ce || R === ze || tn || R === et || R === oe || R === Ke || Be || R === Z || ft || De || lt || typeof R == "object" && R !== null && (R.$$typeof === de || R.$$typeof === te || R.$$typeof === S || R.$$typeof === vt || R.$$typeof === ne || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === ln || R.getModuleId !== void 0));
    }
    function Ot(R, Q, K) {
      var be = R.displayName;
      if (be)
        return be;
      var yt = Q.displayName || Q.name || "";
      return yt !== "" ? K + "(" + yt + ")" : K;
    }
    function Rn(R) {
      return R.displayName || "Context";
    }
    function Ae(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && Ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case ce:
          return "Fragment";
        case w:
          return "Portal";
        case ze:
          return "Profiler";
        case et:
          return "StrictMode";
        case oe:
          return "Suspense";
        case Ke:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case vt:
            var Q = R;
            return Rn(Q) + ".Consumer";
          case S:
            var K = R;
            return Rn(K._context) + ".Provider";
          case ne:
            return Ot(R, R.render, "ForwardRef");
          case te:
            var be = R.displayName || null;
            return be !== null ? be : Ae(R.type) || "Memo";
          case de: {
            var yt = R, Ct = yt._payload, Fe = yt._init;
            try {
              return Ae(Fe(Ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var rt = Object.assign, Ft = 0, Dt, ge, ee, ke, le, k, B;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function Qe() {
      {
        if (Ft === 0) {
          Dt = console.log, ge = console.info, ee = console.warn, ke = console.error, le = console.group, k = console.groupCollapsed, B = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Ft++;
      }
    }
    function ut() {
      {
        if (Ft--, Ft === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, R, {
              value: Dt
            }),
            info: rt({}, R, {
              value: ge
            }),
            warn: rt({}, R, {
              value: ee
            }),
            error: rt({}, R, {
              value: ke
            }),
            group: rt({}, R, {
              value: le
            }),
            groupCollapsed: rt({}, R, {
              value: k
            }),
            groupEnd: rt({}, R, {
              value: B
            })
          });
        }
        Ft < 0 && Ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var it = bt.ReactCurrentDispatcher, Et;
    function dt(R, Q, K) {
      {
        if (Et === void 0)
          try {
            throw Error();
          } catch (yt) {
            var be = yt.stack.trim().match(/\n( *(at )?)/);
            Et = be && be[1] || "";
          }
        return `
` + Et + R;
      }
    }
    var pt = !1, nn;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      nn = new hr();
    }
    function Br(R, Q) {
      if (!R || pt)
        return "";
      {
        var K = nn.get(R);
        if (K !== void 0)
          return K;
      }
      var be;
      pt = !0;
      var yt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ct;
      Ct = it.current, it.current = null, Qe();
      try {
        if (Q) {
          var Fe = function() {
            throw Error();
          };
          if (Object.defineProperty(Fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Fe, []);
            } catch (qn) {
              be = qn;
            }
            Reflect.construct(R, [], Fe);
          } else {
            try {
              Fe.call();
            } catch (qn) {
              be = qn;
            }
            R.call(Fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qn) {
            be = qn;
          }
          R();
        }
      } catch (qn) {
        if (qn && be && typeof qn.stack == "string") {
          for (var st = qn.stack.split(`
`), Un = be.stack.split(`
`), Xt = st.length - 1, un = Un.length - 1; Xt >= 1 && un >= 0 && st[Xt] !== Un[un]; )
            un--;
          for (; Xt >= 1 && un >= 0; Xt--, un--)
            if (st[Xt] !== Un[un]) {
              if (Xt !== 1 || un !== 1)
                do
                  if (Xt--, un--, un < 0 || st[Xt] !== Un[un]) {
                    var Sr = `
` + st[Xt].replace(" at new ", " at ");
                    return R.displayName && Sr.includes("<anonymous>") && (Sr = Sr.replace("<anonymous>", R.displayName)), typeof R == "function" && nn.set(R, Sr), Sr;
                  }
                while (Xt >= 1 && un >= 0);
              break;
            }
        }
      } finally {
        pt = !1, it.current = Ct, ut(), Error.prepareStackTrace = yt;
      }
      var mi = R ? R.displayName || R.name : "", Lt = mi ? dt(mi) : "";
      return typeof R == "function" && nn.set(R, Lt), Lt;
    }
    function hn(R, Q, K) {
      return Br(R, !1);
    }
    function Wn(R) {
      var Q = R.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Pn(R, Q, K) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Br(R, Wn(R));
      if (typeof R == "string")
        return dt(R);
      switch (R) {
        case oe:
          return dt("Suspense");
        case Ke:
          return dt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ne:
            return hn(R.render);
          case te:
            return Pn(R.type, Q, K);
          case de: {
            var be = R, yt = be._payload, Ct = be._init;
            try {
              return Pn(Ct(yt), Q, K);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, Dn = {}, $r = bt.ReactDebugCurrentFrame;
    function Ir(R) {
      if (R) {
        var Q = R._owner, K = Pn(R.type, R._source, Q ? Q.type : null);
        $r.setExtraStackFrame(K);
      } else
        $r.setExtraStackFrame(null);
    }
    function Gn(R, Q, K, be, yt) {
      {
        var Ct = Function.call.bind(zn);
        for (var Fe in R)
          if (Ct(R, Fe)) {
            var st = void 0;
            try {
              if (typeof R[Fe] != "function") {
                var Un = Error((be || "React class") + ": " + K + " type `" + Fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Un.name = "Invariant Violation", Un;
              }
              st = R[Fe](Q, Fe, be, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Xt) {
              st = Xt;
            }
            st && !(st instanceof Error) && (Ir(yt), Ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", be || "React class", K, Fe, typeof st), Ir(null)), st instanceof Error && !(st.message in Dn) && (Dn[st.message] = !0, Ir(yt), Ve("Failed %s type: %s", K, st.message), Ir(null));
          }
      }
    }
    var mr = Array.isArray;
    function Yr(R) {
      return mr(R);
    }
    function yr(R) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, K = Q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return K;
      }
    }
    function da(R) {
      try {
        return rr(R), !1;
      } catch {
        return !0;
      }
    }
    function rr(R) {
      return "" + R;
    }
    function Qr(R) {
      if (da(R))
        return Ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(R)), rr(R);
    }
    var mn = bt.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, di, pa, re;
    re = {};
    function Oe(R) {
      if (zn.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ot(R) {
      if (zn.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function At(R, Q) {
      if (typeof R.ref == "string" && mn.current && Q && mn.current.stateNode !== Q) {
        var K = Ae(mn.current.type);
        re[K] || (Ve('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(mn.current.type), R.ref), re[K] = !0);
      }
    }
    function Ht(R, Q) {
      {
        var K = function() {
          di || (di = !0, Ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        K.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function kn(R, Q) {
      {
        var K = function() {
          pa || (pa = !0, Ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        K.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var yn = function(R, Q, K, be, yt, Ct, Fe) {
      var st = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: K,
        props: Fe,
        // Record the component responsible for creating this element.
        _owner: Ct
      };
      return st._store = {}, Object.defineProperty(st._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(st, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.defineProperty(st, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: yt
      }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    };
    function gr(R, Q, K, be, yt) {
      {
        var Ct, Fe = {}, st = null, Un = null;
        K !== void 0 && (Qr(K), st = "" + K), ot(Q) && (Qr(Q.key), st = "" + Q.key), Oe(Q) && (Un = Q.ref, At(Q, yt));
        for (Ct in Q)
          zn.call(Q, Ct) && !br.hasOwnProperty(Ct) && (Fe[Ct] = Q[Ct]);
        if (R && R.defaultProps) {
          var Xt = R.defaultProps;
          for (Ct in Xt)
            Fe[Ct] === void 0 && (Fe[Ct] = Xt[Ct]);
        }
        if (st || Un) {
          var un = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          st && Ht(Fe, un), Un && kn(Fe, un);
        }
        return yn(R, st, Un, yt, be, mn.current, Fe);
      }
    }
    var Qt = bt.ReactCurrentOwner, xr = bt.ReactDebugCurrentFrame;
    function Pt(R) {
      if (R) {
        var Q = R._owner, K = Pn(R.type, R._source, Q ? Q.type : null);
        xr.setExtraStackFrame(K);
      } else
        xr.setExtraStackFrame(null);
    }
    var Vt;
    Vt = !1;
    function ei(R) {
      return typeof R == "object" && R !== null && R.$$typeof === O;
    }
    function ka() {
      {
        if (Qt.current) {
          var R = Ae(Qt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function sl(R) {
      return "";
    }
    var Gl = {};
    function Au(R) {
      {
        var Q = ka();
        if (!Q) {
          var K = typeof R == "string" ? R : R.displayName || R.name;
          K && (Q = `

Check the top-level render call using <` + K + ">.");
        }
        return Q;
      }
    }
    function Ni(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var K = Au(Q);
        if (Gl[K])
          return;
        Gl[K] = !0;
        var be = "";
        R && R._owner && R._owner !== Qt.current && (be = " It was passed a child from " + Ae(R._owner.type) + "."), Pt(R), Ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, be), Pt(null);
      }
    }
    function cl(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var K = 0; K < R.length; K++) {
            var be = R[K];
            ei(be) && Ni(be, Q);
          }
        else if (ei(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var yt = Ye(R);
          if (typeof yt == "function" && yt !== R.entries)
            for (var Ct = yt.call(R), Fe; !(Fe = Ct.next()).done; )
              ei(Fe.value) && Ni(Fe.value, Q);
        }
      }
    }
    function va(R) {
      {
        var Q = R.type;
        if (Q == null || typeof Q == "string")
          return;
        var K;
        if (typeof Q == "function")
          K = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === ne || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === te))
          K = Q.propTypes;
        else
          return;
        if (K) {
          var be = Ae(Q);
          Gn(K, R.props, "prop", be, R);
        } else if (Q.PropTypes !== void 0 && !Vt) {
          Vt = !0;
          var yt = Ae(Q);
          Ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", yt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && Ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pi(R) {
      {
        for (var Q = Object.keys(R.props), K = 0; K < Q.length; K++) {
          var be = Q[K];
          if (be !== "children" && be !== "key") {
            Pt(R), Ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", be), Pt(null);
            break;
          }
        }
        R.ref !== null && (Pt(R), Ve("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var ha = {};
    function ti(R, Q, K, be, yt, Ct) {
      {
        var Fe = Gt(R);
        if (!Fe) {
          var st = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (st += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Un = sl();
          Un ? st += Un : st += ka();
          var Xt;
          R === null ? Xt = "null" : Yr(R) ? Xt = "array" : R !== void 0 && R.$$typeof === O ? (Xt = "<" + (Ae(R.type) || "Unknown") + " />", st = " Did you accidentally export a JSX literal instead of a component?") : Xt = typeof R, Ve("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Xt, st);
        }
        var un = gr(R, Q, K, yt, Ct);
        if (un == null)
          return un;
        if (Fe) {
          var Sr = Q.children;
          if (Sr !== void 0)
            if (be)
              if (Yr(Sr)) {
                for (var mi = 0; mi < Sr.length; mi++)
                  cl(Sr[mi], R);
                Object.freeze && Object.freeze(Sr);
              } else
                Ve("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cl(Sr, R);
        }
        if (zn.call(Q, "key")) {
          var Lt = Ae(R), qn = Object.keys(Q).filter(function(Oa) {
            return Oa !== "key";
          }), Dr = qn.length > 0 ? "{key: someKey, " + qn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ha[Lt + Dr]) {
            var ct = qn.length > 0 ? "{" + qn.join(": ..., ") + ": ...}" : "{}";
            Ve(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Dr, Lt, ct, Lt), ha[Lt + Dr] = !0;
          }
        }
        return R === ce ? pi(un) : va(un), un;
      }
    }
    function _r(R, Q, K) {
      return ti(R, Q, K, !0);
    }
    function ma(R, Q, K) {
      return ti(R, Q, K, !1);
    }
    var vi = ma, hi = _r;
    Xp.Fragment = ce, Xp.jsx = vi, Xp.jsxs = hi;
  }()), Xp;
}
process.env.NODE_ENV === "production" ? w0.exports = MD() : w0.exports = ND();
var Yt = w0.exports;
function zD() {
  return /* @__PURE__ */ Yt.jsxs("div", { className: "bg-zinc-400 rounded-t-sm p-1", children: [
    /* @__PURE__ */ Yt.jsx("div", { children: "Oppie Bot" }),
    /* @__PURE__ */ Yt.jsx("div", { className: "text-sm", children: "some description" })
  ] });
}
const Wl = {
  BOT_ID: "",
  BOT_SECRET: "",
  SESSION_ID: "",
  CHAT_URL: "https://stg.optalk.ai/api/chatter/v1/bots/chat"
};
function UD({ user_avatar: D, message: O }) {
  return /* @__PURE__ */ Yt.jsxs("div", { className: "flex flex-col justify-center items-end px-1 my-2", children: [
    /* @__PURE__ */ Yt.jsx("div", {}),
    /* @__PURE__ */ Yt.jsx("div", { className: "bg-blue-300 flex-grow rounded-md", children: /* @__PURE__ */ Yt.jsx("span", { className: "text-base italic p-2", children: O }) })
  ] });
}
function AD({ messageField: D, setMessageField: O }) {
  const [w, ce] = Da.useState(!0), [et, ze] = Da.useState([]);
  Da.useEffect(() => {
    (!Wl.BOT_ID || !Wl.BOT_SECRET) && ce(!1);
  }, []), Da.useEffect(() => {
    ze([
      {
        type: "bot",
        message: "Hello! How can I help you today?"
      }
    ]);
  }, []), Da.useEffect(() => {
    D.trim() !== "" && (ze([
      ...et,
      {
        type: "user",
        message: D
      }
    ]), S(D));
  }, [D]);
  const S = Da.useCallback((vt) => {
    (async (oe) => {
      console.log("in here 2");
      let Ke = {
        request: {
          message: oe
        },
        session_id: "",
        bot_id: Wl.BOT_ID,
        bot_secret: Wl.BOT_SECRET
      };
      console.log("in here 3");
      let te;
      try {
        te = await fetch(Wl.CHAT_URL, {
          method: "POST",
          body: JSON.stringify(Ke),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }), te = await te.json(), ze([...et, {
          type: "bot",
          message: te.data.response
        }]);
      } catch (de) {
        console.log("Error in fetching response from bot", de);
      }
    })(vt);
  }, [Wl.BOT_ID, Wl.BOT_SECRET]);
  return console.log(et), /* @__PURE__ */ Yt.jsx(Yt.Fragment, { children: w ? (
    // show chat panel
    /* @__PURE__ */ Yt.jsx("div", { className: "flex-grow overflow-y-scroll px-1 py-1", children: et.map((vt, ne) => /* @__PURE__ */ Yt.jsx(
      UD,
      {
        message: vt.message
      },
      ne
    )) })
  ) : /* @__PURE__ */ Yt.jsx("div", { className: "flex-grow", children: /* @__PURE__ */ Yt.jsx("h3", { className: "flex h-full w-full justify-center items-center px-2 text-red-500", children: "Something went wrong! Check with your license provider." }) }) });
}
function jD({ setMessageField: D }) {
  function O() {
    let w = document.getElementById("botimoz-input-field").value;
    w = w.trim(), w.length > 0 && D(w), document.getElementById("botimoz-input-field").value = "";
  }
  return /* @__PURE__ */ Yt.jsx("div", { className: "bg-zinc-400 p-1", children: /* @__PURE__ */ Yt.jsxs("div", { className: "flex justify-start items-center", children: [
    /* @__PURE__ */ Yt.jsx("div", { className: "text-sm m-1", children: "speech" }),
    /* @__PURE__ */ Yt.jsx(
      "input",
      {
        id: "botimoz-input-field",
        type: "text",
        placeholder: "Type a message...",
        className: "w-full p-1 m-1",
        onKeyDown: (w) => {
          w.key === "Enter" && O();
        }
      }
    ),
    /* @__PURE__ */ Yt.jsx(
      "button",
      {
        className: "bg-blue-500 text-white p-1 m-1",
        onClick: () => O(),
        children: "Send"
      }
    )
  ] }) });
}
function FD() {
  const [D, O] = Da.useState("");
  return /* @__PURE__ */ Yt.jsxs("div", { className: "h-[450px] w-[350px] rounded-md border-2 border-black flex flex-col justify-start p-0", children: [
    /* @__PURE__ */ Yt.jsx(zD, {}),
    /* @__PURE__ */ Yt.jsx(AD, { messageField: D, setMessageField: O }),
    /* @__PURE__ */ Yt.jsx(jD, { setMessageField: O })
  ] });
}
var ER = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, mR = Uu.createContext && /* @__PURE__ */ Uu.createContext(ER), HD = ["attr", "size", "title"];
function PD(D, O) {
  if (D == null) return {};
  var w = VD(D, O), ce, et;
  if (Object.getOwnPropertySymbols) {
    var ze = Object.getOwnPropertySymbols(D);
    for (et = 0; et < ze.length; et++)
      ce = ze[et], !(O.indexOf(ce) >= 0) && Object.prototype.propertyIsEnumerable.call(D, ce) && (w[ce] = D[ce]);
  }
  return w;
}
function VD(D, O) {
  if (D == null) return {};
  var w = {};
  for (var ce in D)
    if (Object.prototype.hasOwnProperty.call(D, ce)) {
      if (O.indexOf(ce) >= 0) continue;
      w[ce] = D[ce];
    }
  return w;
}
function Wm() {
  return Wm = Object.assign ? Object.assign.bind() : function(D) {
    for (var O = 1; O < arguments.length; O++) {
      var w = arguments[O];
      for (var ce in w)
        Object.prototype.hasOwnProperty.call(w, ce) && (D[ce] = w[ce]);
    }
    return D;
  }, Wm.apply(this, arguments);
}
function yR(D, O) {
  var w = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var ce = Object.getOwnPropertySymbols(D);
    O && (ce = ce.filter(function(et) {
      return Object.getOwnPropertyDescriptor(D, et).enumerable;
    })), w.push.apply(w, ce);
  }
  return w;
}
function Gm(D) {
  for (var O = 1; O < arguments.length; O++) {
    var w = arguments[O] != null ? arguments[O] : {};
    O % 2 ? yR(Object(w), !0).forEach(function(ce) {
      BD(D, ce, w[ce]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(w)) : yR(Object(w)).forEach(function(ce) {
      Object.defineProperty(D, ce, Object.getOwnPropertyDescriptor(w, ce));
    });
  }
  return D;
}
function BD(D, O, w) {
  return O = $D(O), O in D ? Object.defineProperty(D, O, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : D[O] = w, D;
}
function $D(D) {
  var O = ID(D, "string");
  return typeof O == "symbol" ? O : O + "";
}
function ID(D, O) {
  if (typeof D != "object" || !D) return D;
  var w = D[Symbol.toPrimitive];
  if (w !== void 0) {
    var ce = w.call(D, O || "default");
    if (typeof ce != "object") return ce;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (O === "string" ? String : Number)(D);
}
function CR(D) {
  return D && D.map((O, w) => /* @__PURE__ */ Uu.createElement(O.tag, Gm({
    key: w
  }, O.attr), CR(O.child)));
}
function RR(D) {
  return (O) => /* @__PURE__ */ Uu.createElement(YD, Wm({
    attr: Gm({}, D.attr)
  }, O), CR(D.child));
}
function YD(D) {
  var O = (w) => {
    var {
      attr: ce,
      size: et,
      title: ze
    } = D, S = PD(D, HD), vt = et || w.size || "1em", ne;
    return w.className && (ne = w.className), D.className && (ne = (ne ? ne + " " : "") + D.className), /* @__PURE__ */ Uu.createElement("svg", Wm({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, w.attr, ce, S, {
      className: ne,
      style: Gm(Gm({
        color: D.color || w.color
      }, w.style), D.style),
      height: vt,
      width: vt,
      xmlns: "http://www.w3.org/2000/svg"
    }), ze && /* @__PURE__ */ Uu.createElement("title", null, ze), D.children);
  };
  return mR !== void 0 ? /* @__PURE__ */ Uu.createElement(mR.Consumer, null, (w) => O(w)) : O(ER);
}
function QD(D) {
  return RR({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" }, child: [] }] })(D);
}
function WD(D) {
  return RR({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" }, child: [] }] })(D);
}
function GD({ open: D, setOpen: O }) {
  return /* @__PURE__ */ Yt.jsx("main", { children: /* @__PURE__ */ Yt.jsx(
    "div",
    {
      className: "bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center",
      onClick: () => O(!D),
      children: /* @__PURE__ */ Yt.jsxs("div", { className: "fixed", children: [
        /* @__PURE__ */ Yt.jsx(WD, { color: "white", className: `${D ? "scale-100 size-10" : "scale-0 size-0"} transition` }),
        /* @__PURE__ */ Yt.jsx(QD, { size: 40, color: "white", className: `${D ? "scale-0 size-0" : "scale-100 size-10"} transition` })
      ] })
    }
  ) });
}
function qD({
  bot_name: D,
  bot_avatar: O,
  bot_greeting: w,
  bot_user_input_placeholder: ce,
  user_avatar: et,
  chat_area_bg: ze,
  user_dialog_bg: S,
  bot_dialog_bg: vt,
  chat_header_bg: ne,
  license: oe,
  host_url: Ke,
  height: te,
  width: de,
  start_open: Z = !1,
  right_position: me,
  bottom_position: tt,
  chat_header_title: Ye,
  trigger_icon_open: bt,
  trigger_icon_close: Ve,
  trigger_icon_bg: Ie
}) {
  const [ft, De] = Da.useState(Z), [lt, Be] = Da.useState(!1);
  return Da.useEffect(() => {
    const ln = atob(oe).split(";");
    Wl.BOT_ID = ln[0], Wl.BOT_SECRET = ln[1], Wl.SESSION_ID = ln[2], Be(!0);
  }, []), /* @__PURE__ */ Yt.jsx(Yt.Fragment, { children: lt && /* @__PURE__ */ Yt.jsxs("main", { className: "flex justify-start items-end m-5", children: [
    ft && /* @__PURE__ */ Yt.jsx(FD, {}),
    /* @__PURE__ */ Yt.jsx(GD, { open: ft, setOpen: De })
  ] }) });
}
const KD = LD(qD, {
  props: {
    license: "string"
  }
});
customElements.define("botimoz-widget", KD);
