function pD(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
var C0 = { exports: {} }, St = {};
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
function vD() {
  if (lR) return St;
  lR = 1;
  var D = Symbol.for("react.element"), U = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), Ye = Symbol.for("react.profiler"), vt = Symbol.for("react.provider"), Qe = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), we = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Le = Symbol.iterator;
  function te(k) {
    return k === null || typeof k != "object" ? null : (k = Le && k[Le] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var de = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, pe = {};
  function We(k, I, Me) {
    this.props = k, this.context = I, this.refs = pe, this.updater = Me || de;
  }
  We.prototype.isReactComponent = {}, We.prototype.setState = function(k, I) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, I, "setState");
  }, We.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function At() {
  }
  At.prototype = We.prototype;
  function Et(k, I, Me) {
    this.props = k, this.context = I, this.refs = pe, this.updater = Me || de;
  }
  var Ze = Et.prototype = new At();
  Ze.constructor = Et, Z(Ze, We.prototype), Ze.isPureReactComponent = !0;
  var Fe = Array.isArray, xt = Object.prototype.hasOwnProperty, Re = { current: null }, ft = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qe(k, I, Me) {
    var $e, nt = {}, ut = null, mt = null;
    if (I != null) for ($e in I.ref !== void 0 && (mt = I.ref), I.key !== void 0 && (ut = "" + I.key), I) xt.call(I, $e) && !ft.hasOwnProperty($e) && (nt[$e] = I[$e]);
    var dt = arguments.length - 2;
    if (dt === 1) nt.children = Me;
    else if (1 < dt) {
      for (var Rt = Array(dt), $t = 0; $t < dt; $t++) Rt[$t] = arguments[$t + 2];
      nt.children = Rt;
    }
    if (k && k.defaultProps) for ($e in dt = k.defaultProps, dt) nt[$e] === void 0 && (nt[$e] = dt[$e]);
    return { $$typeof: D, type: k, key: ut, ref: mt, props: nt, _owner: Re.current };
  }
  function an(k, I) {
    return { $$typeof: D, type: k.type, key: I, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function En(k) {
    return typeof k == "object" && k !== null && k.$$typeof === D;
  }
  function en(k) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Me) {
      return I[Me];
    });
  }
  var Ct = /\/+/g;
  function ln(k, I) {
    return typeof k == "object" && k !== null && k.key != null ? en("" + k.key) : I.toString(36);
  }
  function Be(k, I, Me, $e, nt) {
    var ut = typeof k;
    (ut === "undefined" || ut === "boolean") && (k = null);
    var mt = !1;
    if (k === null) mt = !0;
    else switch (ut) {
      case "string":
      case "number":
        mt = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case D:
          case U:
            mt = !0;
        }
    }
    if (mt) return mt = k, nt = nt(mt), k = $e === "" ? "." + ln(mt, 0) : $e, Fe(nt) ? (Me = "", k != null && (Me = k.replace(Ct, "$&/") + "/"), Be(nt, I, Me, "", function($t) {
      return $t;
    })) : nt != null && (En(nt) && (nt = an(nt, Me + (!nt.key || mt && mt.key === nt.key ? "" : ("" + nt.key).replace(Ct, "$&/") + "/") + k)), I.push(nt)), 1;
    if (mt = 0, $e = $e === "" ? "." : $e + ":", Fe(k)) for (var dt = 0; dt < k.length; dt++) {
      ut = k[dt];
      var Rt = $e + ln(ut, dt);
      mt += Be(ut, I, Me, Rt, nt);
    }
    else if (Rt = te(k), typeof Rt == "function") for (k = Rt.call(k), dt = 0; !(ut = k.next()).done; ) ut = ut.value, Rt = $e + ln(ut, dt++), mt += Be(ut, I, Me, Rt, nt);
    else if (ut === "object") throw I = String(k), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return mt;
  }
  function it(k, I, Me) {
    if (k == null) return k;
    var $e = [], nt = 0;
    return Be(k, $e, "", "", function(ut) {
      return I.call(Me, ut, nt++);
    }), $e;
  }
  function _t(k) {
    if (k._status === -1) {
      var I = k._result;
      I = I(), I.then(function(Me) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Me);
      }, function(Me) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Me);
      }), k._status === -1 && (k._status = 0, k._result = I);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var lt = { current: null }, $ = { transition: null }, ge = { ReactCurrentDispatcher: lt, ReactCurrentBatchConfig: $, ReactCurrentOwner: Re };
  function oe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return St.Children = { map: it, forEach: function(k, I, Me) {
    it(k, function() {
      I.apply(this, arguments);
    }, Me);
  }, count: function(k) {
    var I = 0;
    return it(k, function() {
      I++;
    }), I;
  }, toArray: function(k) {
    return it(k, function(I) {
      return I;
    }) || [];
  }, only: function(k) {
    if (!En(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, St.Component = We, St.Fragment = w, St.Profiler = Ye, St.PureComponent = Et, St.StrictMode = ne, St.Suspense = je, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, St.act = oe, St.cloneElement = function(k, I, Me) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var $e = Z({}, k.props), nt = k.key, ut = k.ref, mt = k._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ut = I.ref, mt = Re.current), I.key !== void 0 && (nt = "" + I.key), k.type && k.type.defaultProps) var dt = k.type.defaultProps;
      for (Rt in I) xt.call(I, Rt) && !ft.hasOwnProperty(Rt) && ($e[Rt] = I[Rt] === void 0 && dt !== void 0 ? dt[Rt] : I[Rt]);
    }
    var Rt = arguments.length - 2;
    if (Rt === 1) $e.children = Me;
    else if (1 < Rt) {
      dt = Array(Rt);
      for (var $t = 0; $t < Rt; $t++) dt[$t] = arguments[$t + 2];
      $e.children = dt;
    }
    return { $$typeof: D, type: k.type, key: nt, ref: ut, props: $e, _owner: mt };
  }, St.createContext = function(k) {
    return k = { $$typeof: Qe, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: vt, _context: k }, k.Consumer = k;
  }, St.createElement = qe, St.createFactory = function(k) {
    var I = qe.bind(null, k);
    return I.type = k, I;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(k) {
    return { $$typeof: S, render: k };
  }, St.isValidElement = En, St.lazy = function(k) {
    return { $$typeof: le, _payload: { _status: -1, _result: k }, _init: _t };
  }, St.memo = function(k, I) {
    return { $$typeof: we, type: k, compare: I === void 0 ? null : I };
  }, St.startTransition = function(k) {
    var I = $.transition;
    $.transition = {};
    try {
      k();
    } finally {
      $.transition = I;
    }
  }, St.unstable_act = oe, St.useCallback = function(k, I) {
    return lt.current.useCallback(k, I);
  }, St.useContext = function(k) {
    return lt.current.useContext(k);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(k) {
    return lt.current.useDeferredValue(k);
  }, St.useEffect = function(k, I) {
    return lt.current.useEffect(k, I);
  }, St.useId = function() {
    return lt.current.useId();
  }, St.useImperativeHandle = function(k, I, Me) {
    return lt.current.useImperativeHandle(k, I, Me);
  }, St.useInsertionEffect = function(k, I) {
    return lt.current.useInsertionEffect(k, I);
  }, St.useLayoutEffect = function(k, I) {
    return lt.current.useLayoutEffect(k, I);
  }, St.useMemo = function(k, I) {
    return lt.current.useMemo(k, I);
  }, St.useReducer = function(k, I, Me) {
    return lt.current.useReducer(k, I, Me);
  }, St.useRef = function(k) {
    return lt.current.useRef(k);
  }, St.useState = function(k) {
    return lt.current.useState(k);
  }, St.useSyncExternalStore = function(k, I, Me) {
    return lt.current.useSyncExternalStore(k, I, Me);
  }, St.useTransition = function() {
    return lt.current.useTransition();
  }, St.version = "18.3.1", St;
}
var tv = { exports: {} };
tv.exports;
var uR;
function hD() {
  return uR || (uR = 1, function(D, U) {
    var w = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    w.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ne = "18.3.1", Ye = Symbol.for("react.element"), vt = Symbol.for("react.portal"), Qe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), we = Symbol.for("react.provider"), le = Symbol.for("react.context"), Le = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), de = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), We = Symbol.for("react.offscreen"), At = Symbol.iterator, Et = "@@iterator";
      function Ze(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = At && h[At] || h[Et];
        return typeof C == "function" ? C : null;
      }
      var Fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, xt = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ft = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, qe = {}, an = null;
      function En(h) {
        an = h;
      }
      qe.setExtraStackFrame = function(h) {
        an = h;
      }, qe.getCurrentStack = null, qe.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var C = qe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var en = !1, Ct = !1, ln = !1, Be = !1, it = !1, _t = {
        ReactCurrentDispatcher: Fe,
        ReactCurrentBatchConfig: xt,
        ReactCurrentOwner: ft
      };
      _t.ReactDebugCurrentFrame = qe, _t.ReactCurrentActQueue = Re;
      function lt(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          ge("warn", h, z);
        }
      }
      function $(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          ge("error", h, z);
        }
      }
      function ge(h, C, z) {
        {
          var H = _t.ReactDebugCurrentFrame, J = H.getStackAddendum();
          J !== "" && (C += "%s", z = z.concat([J]));
          var Ce = z.map(function(he) {
            return String(he);
          });
          Ce.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ce);
        }
      }
      var oe = {};
      function k(h, C) {
        {
          var z = h.constructor, H = z && (z.displayName || z.name) || "ReactClass", J = H + "." + C;
          if (oe[J])
            return;
          $("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), oe[J] = !0;
        }
      }
      var I = {
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
        enqueueForceUpdate: function(h, C, z) {
          k(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, z, H) {
          k(h, "replaceState");
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
        enqueueSetState: function(h, C, z, H) {
          k(h, "setState");
        }
      }, Me = Object.assign, $e = {};
      Object.freeze($e);
      function nt(h, C, z) {
        this.props = h, this.context = C, this.refs = $e, this.updater = z || I;
      }
      nt.prototype.isReactComponent = {}, nt.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, nt.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, mt = function(h, C) {
          Object.defineProperty(nt.prototype, h, {
            get: function() {
              lt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var dt in ut)
          ut.hasOwnProperty(dt) && mt(dt, ut[dt]);
      }
      function Rt() {
      }
      Rt.prototype = nt.prototype;
      function $t(h, C, z) {
        this.props = h, this.context = C, this.refs = $e, this.updater = z || I;
      }
      var Kn = $t.prototype = new Rt();
      Kn.constructor = $t, Me(Kn, nt.prototype), Kn.isPureReactComponent = !0;
      function Fr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var fr = Array.isArray;
      function Cn(h) {
        return fr(h);
      }
      function Xn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Hn(h) {
        try {
          return _n(h), !1;
        } catch {
          return !0;
        }
      }
      function _n(h) {
        return "" + h;
      }
      function Mn(h) {
        if (Hn(h))
          return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(h)), _n(h);
      }
      function gr(h, C, z) {
        var H = h.displayName;
        if (H)
          return H;
        var J = C.displayName || C.name || "";
        return J !== "" ? z + "(" + J + ")" : z;
      }
      function dr(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Qe:
            return "Fragment";
          case vt:
            return "Portal";
          case je:
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
            case le:
              var C = h;
              return dr(C) + ".Consumer";
            case we:
              var z = h;
              return dr(z._context) + ".Provider";
            case Le:
              return gr(h, h.render, "ForwardRef");
            case Z:
              var H = h.displayName || null;
              return H !== null ? H : Pn(h.type) || "Memo";
            case pe: {
              var J = h, Ce = J._payload, he = J._init;
              try {
                return Pn(he(Ce));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ra = Object.prototype.hasOwnProperty, aa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, pr, ia, Zn;
      Zn = {};
      function Sr(h) {
        if (ra.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function dn(h) {
        if (ra.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function la(h, C) {
        var z = function() {
          pr || (pr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function ua(h, C) {
        var z = function() {
          ia || (ia = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function oa(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = Pn(ft.current.type);
          Zn[C] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Zn[C] = !0);
        }
      }
      var ae = function(h, C, z, H, J, Ce, he) {
        var Ie = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ye,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: he,
          // Record the component responsible for creating this element.
          _owner: Ce
        };
        return Ie._store = {}, Object.defineProperty(Ie._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ie, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Ie, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
      };
      function Oe(h, C, z) {
        var H, J = {}, Ce = null, he = null, Ie = null, ct = null;
        if (C != null) {
          Sr(C) && (he = C.ref, oa(C)), dn(C) && (Mn(C.key), Ce = "" + C.key), Ie = C.__self === void 0 ? null : C.__self, ct = C.__source === void 0 ? null : C.__source;
          for (H in C)
            ra.call(C, H) && !aa.hasOwnProperty(H) && (J[H] = C[H]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1)
          J.children = z;
        else if (Pt > 1) {
          for (var Yt = Array(Pt), Qt = 0; Qt < Pt; Qt++)
            Yt[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(Yt), J.children = Yt;
        }
        if (h && h.defaultProps) {
          var Wt = h.defaultProps;
          for (H in Wt)
            J[H] === void 0 && (J[H] = Wt[H]);
        }
        if (Ce || he) {
          var on = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ce && la(J, on), he && ua(J, on);
        }
        return ae(h, Ce, he, Ie, ct, ft.current, J);
      }
      function ot(h, C) {
        var z = ae(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function jt(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, J = Me({}, h.props), Ce = h.key, he = h.ref, Ie = h._self, ct = h._source, Pt = h._owner;
        if (C != null) {
          Sr(C) && (he = C.ref, Pt = ft.current), dn(C) && (Mn(C.key), Ce = "" + C.key);
          var Yt;
          h.type && h.type.defaultProps && (Yt = h.type.defaultProps);
          for (H in C)
            ra.call(C, H) && !aa.hasOwnProperty(H) && (C[H] === void 0 && Yt !== void 0 ? J[H] = Yt[H] : J[H] = C[H]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          J.children = z;
        else if (Qt > 1) {
          for (var Wt = Array(Qt), on = 0; on < Qt; on++)
            Wt[on] = arguments[on + 2];
          J.children = Wt;
        }
        return ae(h.type, Ce, he, Ie, ct, Pt, J);
      }
      function Mt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ye;
      }
      var Dn = ".", hn = ":";
      function vr(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(J) {
          return z[J];
        });
        return "$" + H;
      }
      var It = !1, In = /\/+/g;
      function Ft(h) {
        return h.replace(In, "$&/");
      }
      function tn(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Mn(h.key), vr("" + h.key)) : C.toString(36);
      }
      function qa(h, C, z, H, J) {
        var Ce = typeof h;
        (Ce === "undefined" || Ce === "boolean") && (h = null);
        var he = !1;
        if (h === null)
          he = !0;
        else
          switch (Ce) {
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ye:
                case vt:
                  he = !0;
              }
          }
        if (he) {
          var Ie = h, ct = J(Ie), Pt = H === "" ? Dn + tn(Ie, 0) : H;
          if (Cn(ct)) {
            var Yt = "";
            Pt != null && (Yt = Ft(Pt) + "/"), qa(ct, C, Yt, "", function(If) {
              return If;
            });
          } else ct != null && (Mt(ct) && (ct.key && (!Ie || Ie.key !== ct.key) && Mn(ct.key), ct = ot(
            ct,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ct.key && (!Ie || Ie.key !== ct.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ft("" + ct.key) + "/"
            ) : "") + Pt
          )), C.push(ct));
          return 1;
        }
        var Qt, Wt, on = 0, Dt = H === "" ? Dn : H + hn;
        if (Cn(h))
          for (var bl = 0; bl < h.length; bl++)
            Qt = h[bl], Wt = Dt + tn(Qt, bl), on += qa(Qt, C, z, Wt, J);
        else {
          var ro = Ze(h);
          if (typeof ro == "function") {
            var ss = h;
            ro === ss.entries && (It || lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var cs = ro.call(ss), Bi, fs = 0; !(Bi = cs.next()).done; )
              Qt = Bi.value, Wt = Dt + tn(Qt, fs++), on += qa(Qt, C, z, Wt, J);
          } else if (Ce === "object") {
            var ds = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (ds === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : ds) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return on;
      }
      function Da(h, C, z) {
        if (h == null)
          return h;
        var H = [], J = 0;
        return qa(h, H, "", "", function(Ce) {
          return C.call(z, Ce, J++);
        }), H;
      }
      function ml(h) {
        var C = 0;
        return Da(h, function() {
          C++;
        }), C;
      }
      function au(h, C, z) {
        Da(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function iu(h) {
        return Da(h, function(C) {
          return C;
        }) || [];
      }
      function yl(h) {
        if (!Mt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Ka(h) {
        var C = {
          $$typeof: le,
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
          $$typeof: we,
          _context: C
        };
        var z = !1, H = !1, J = !1;
        {
          var Ce = {
            $$typeof: le,
            _context: C
          };
          Object.defineProperties(Ce, {
            Provider: {
              get: function() {
                return H || (H = !0, $("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(he) {
                C.Provider = he;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(he) {
                C._currentValue = he;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(he) {
                C._currentValue2 = he;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(he) {
                C._threadCount = he;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, $("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(he) {
                J || (lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", he), J = !0);
              }
            }
          }), C.Consumer = Ce;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Xa = -1, ka = 0, zi = 1, Er = 2;
      function Hr(h) {
        if (h._status === Xa) {
          var C = h._result, z = C();
          if (z.then(function(Ce) {
            if (h._status === ka || h._status === Xa) {
              var he = h;
              he._status = zi, he._result = Ce;
            }
          }, function(Ce) {
            if (h._status === ka || h._status === Xa) {
              var he = h;
              he._status = Er, he._result = Ce;
            }
          }), h._status === Xa) {
            var H = h;
            H._status = ka, H._result = z;
          }
        }
        if (h._status === zi) {
          var J = h._result;
          return J === void 0 && $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, J), "default" in J || $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, J), J.default;
        } else
          throw h._result;
      }
      function sa(h) {
        var C = {
          // We use these fields to store the result.
          _status: Xa,
          _result: h
        }, z = {
          $$typeof: pe,
          _payload: C,
          _init: Hr
        };
        {
          var H, J;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(Ce) {
                $("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = Ce, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(Ce) {
                $("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Ce, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function Ui(h) {
        h != null && h.$$typeof === Z ? $("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? $("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && $("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && $("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Le,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(H) {
              z = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var gl;
      gl = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Qe || h === je || it || h === S || h === te || h === de || Be || h === We || en || Ct || ln || typeof h == "object" && h !== null && (h.$$typeof === pe || h.$$typeof === Z || h.$$typeof === we || h.$$typeof === le || h.$$typeof === Le || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === gl || h.getModuleId !== void 0));
      }
      function W(h, C) {
        R(h) || $("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: Z,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(J) {
              H = J, !h.name && !h.displayName && (h.displayName = J);
            }
          });
        }
        return z;
      }
      function q() {
        var h = Fe.current;
        return h === null && $(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ze(h) {
        var C = q();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? $("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && $("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function pt(h) {
        var C = q();
        return C.useState(h);
      }
      function Tt(h, C, z) {
        var H = q();
        return H.useReducer(h, C, z);
      }
      function He(h) {
        var C = q();
        return C.useRef(h);
      }
      function st(h, C) {
        var z = q();
        return z.useEffect(h, C);
      }
      function Nn(h, C) {
        var z = q();
        return z.useInsertionEffect(h, C);
      }
      function Kt(h, C) {
        var z = q();
        return z.useLayoutEffect(h, C);
      }
      function pn(h, C) {
        var z = q();
        return z.useCallback(h, C);
      }
      function hr(h, C) {
        var z = q();
        return z.useMemo(h, C);
      }
      function Ht(h, C, z) {
        var H = q();
        return H.useImperativeHandle(h, C, z);
      }
      function Oa(h, C) {
        {
          var z = q();
          return z.useDebugValue(h, C);
        }
      }
      function zn() {
        var h = q();
        return h.useTransition();
      }
      function Pr(h) {
        var C = q();
        return C.useDeferredValue(h);
      }
      function rt() {
        var h = q();
        return h.useId();
      }
      function Ai(h, C, z) {
        var H = q();
        return H.useSyncExternalStore(h, C, z);
      }
      var ji = 0, Sl, Vr, Jo, Cr, es, ts, ns;
      function lu() {
      }
      lu.__reactDisabledLog = !0;
      function Ku() {
        {
          if (ji === 0) {
            Sl = console.log, Vr = console.info, Jo = console.warn, Cr = console.error, es = console.group, ts = console.groupCollapsed, ns = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: lu,
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
          ji++;
        }
      }
      function Fi() {
        {
          if (ji--, ji === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Me({}, h, {
                value: Sl
              }),
              info: Me({}, h, {
                value: Vr
              }),
              warn: Me({}, h, {
                value: Jo
              }),
              error: Me({}, h, {
                value: Cr
              }),
              group: Me({}, h, {
                value: es
              }),
              groupCollapsed: Me({}, h, {
                value: ts
              }),
              groupEnd: Me({}, h, {
                value: ns
              })
            });
          }
          ji < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = _t.ReactCurrentDispatcher, La;
      function El(h, C, z) {
        {
          if (La === void 0)
            try {
              throw Error();
            } catch (J) {
              var H = J.stack.trim().match(/\n( *(at )?)/);
              La = H && H[1] || "";
            }
          return `
` + La + h;
        }
      }
      var pi = !1, uu;
      {
        var ou = typeof WeakMap == "function" ? WeakMap : Map;
        uu = new ou();
      }
      function Cl(h, C) {
        if (!h || pi)
          return "";
        {
          var z = uu.get(h);
          if (z !== void 0)
            return z;
        }
        var H;
        pi = !0;
        var J = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ce;
        Ce = di.current, di.current = null, Ku();
        try {
          if (C) {
            var he = function() {
              throw Error();
            };
            if (Object.defineProperty(he.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(he, []);
              } catch (Dt) {
                H = Dt;
              }
              Reflect.construct(h, [], he);
            } else {
              try {
                he.call();
              } catch (Dt) {
                H = Dt;
              }
              h.call(he.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Dt) {
              H = Dt;
            }
            h();
          }
        } catch (Dt) {
          if (Dt && H && typeof Dt.stack == "string") {
            for (var Ie = Dt.stack.split(`
`), ct = H.stack.split(`
`), Pt = Ie.length - 1, Yt = ct.length - 1; Pt >= 1 && Yt >= 0 && Ie[Pt] !== ct[Yt]; )
              Yt--;
            for (; Pt >= 1 && Yt >= 0; Pt--, Yt--)
              if (Ie[Pt] !== ct[Yt]) {
                if (Pt !== 1 || Yt !== 1)
                  do
                    if (Pt--, Yt--, Yt < 0 || Ie[Pt] !== ct[Yt]) {
                      var Qt = `
` + Ie[Pt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && uu.set(h, Qt), Qt;
                    }
                  while (Pt >= 1 && Yt >= 0);
                break;
              }
          }
        } finally {
          pi = !1, di.current = Ce, Fi(), Error.prepareStackTrace = J;
        }
        var Wt = h ? h.displayName || h.name : "", on = Wt ? El(Wt) : "";
        return typeof h == "function" && uu.set(h, on), on;
      }
      function rs(h, C, z) {
        return Cl(h, !1);
      }
      function as(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function yt(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Cl(h, as(h));
        if (typeof h == "string")
          return El(h);
        switch (h) {
          case te:
            return El("Suspense");
          case de:
            return El("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Le:
              return rs(h.render);
            case Z:
              return yt(h.type, C, z);
            case pe: {
              var H = h, J = H._payload, Ce = H._init;
              try {
                return yt(Ce(J), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var is = {}, Xu = _t.ReactDebugCurrentFrame;
      function Rl(h) {
        if (h) {
          var C = h._owner, z = yt(h.type, h._source, C ? C.type : null);
          Xu.setExtraStackFrame(z);
        } else
          Xu.setExtraStackFrame(null);
      }
      function ls(h, C, z, H, J) {
        {
          var Ce = Function.call.bind(ra);
          for (var he in h)
            if (Ce(h, he)) {
              var Ie = void 0;
              try {
                if (typeof h[he] != "function") {
                  var ct = Error((H || "React class") + ": " + z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ct.name = "Invariant Violation", ct;
                }
                Ie = h[he](C, he, H, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pt) {
                Ie = Pt;
              }
              Ie && !(Ie instanceof Error) && (Rl(J), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", z, he, typeof Ie), Rl(null)), Ie instanceof Error && !(Ie.message in is) && (is[Ie.message] = !0, Rl(J), $("Failed %s type: %s", z, Ie.message), Rl(null));
            }
        }
      }
      function gt(h) {
        if (h) {
          var C = h._owner, z = yt(h.type, h._source, C ? C.type : null);
          En(z);
        } else
          En(null);
      }
      var Zu;
      Zu = !1;
      function su() {
        if (ft.current) {
          var h = Pn(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ke(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function Za(h) {
        return h != null ? Ke(h.__source) : "";
      }
      var mn = {};
      function Br(h) {
        var C = su();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function Ma(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = Br(C);
          if (!mn[z]) {
            mn[z] = !0;
            var H = "";
            h && h._owner && h._owner !== ft.current && (H = " It was passed a child from " + Pn(h._owner.type) + "."), gt(h), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, H), gt(null);
          }
        }
      }
      function Tl(h, C) {
        if (typeof h == "object") {
          if (Cn(h))
            for (var z = 0; z < h.length; z++) {
              var H = h[z];
              Mt(H) && Ma(H, C);
            }
          else if (Mt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var J = Ze(h);
            if (typeof J == "function" && J !== h.entries)
              for (var Ce = J.call(h), he; !(he = Ce.next()).done; )
                Mt(he.value) && Ma(he.value, C);
          }
        }
      }
      function un(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Le || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === Z))
            z = C.propTypes;
          else
            return;
          if (z) {
            var H = Pn(C);
            ls(z, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Zu) {
            Zu = !0;
            var J = Pn(C);
            $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function yn(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var H = C[z];
            if (H !== "children" && H !== "key") {
              gt(h), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), gt(null);
              break;
            }
          }
          h.ref !== null && (gt(h), $("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
        }
      }
      function us(h, C, z) {
        var H = R(h);
        if (!H) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = Za(C);
          Ce ? J += Ce : J += su();
          var he;
          h === null ? he = "null" : Cn(h) ? he = "array" : h !== void 0 && h.$$typeof === Ye ? (he = "<" + (Pn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : he = typeof h, $("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, J);
        }
        var Ie = Oe.apply(this, arguments);
        if (Ie == null)
          return Ie;
        if (H)
          for (var ct = 2; ct < arguments.length; ct++)
            Tl(arguments[ct], h);
        return h === Qe ? yn(Ie) : un(Ie), Ie;
      }
      var Jn = !1;
      function $r(h) {
        var C = us.bind(null, h);
        return C.type = h, Jn || (Jn = !0, lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, z) {
        for (var H = jt.apply(this, arguments), J = 2; J < arguments.length; J++)
          Tl(arguments[J], H.type);
        return un(H), H;
      }
      function Ju(h, C) {
        var z = xt.transition;
        xt.transition = {};
        var H = xt.transition;
        xt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (xt.transition = z, z === null && H._updatedFibers) {
            var J = H._updatedFibers.size;
            J > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var cu = !1, fu = null;
      function wl(h) {
        if (fu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = D && D[C];
            fu = z.call(D, "timers").setImmediate;
          } catch {
            fu = function(J) {
              cu === !1 && (cu = !0, typeof MessageChannel > "u" && $("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ce = new MessageChannel();
              Ce.port1.onmessage = J, Ce.port2.postMessage(void 0);
            };
          }
        return fu(h);
      }
      var Na = 0, Hi = !1;
      function du(h) {
        {
          var C = Na;
          Na++, Re.current === null && (Re.current = []);
          var z = Re.isBatchingLegacy, H;
          try {
            if (Re.isBatchingLegacy = !0, H = h(), !z && Re.didScheduleLegacyUpdate) {
              var J = Re.current;
              J !== null && (Re.didScheduleLegacyUpdate = !1, Vi(J));
            }
          } catch (Wt) {
            throw Pi(C), Wt;
          } finally {
            Re.isBatchingLegacy = z;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var Ce = H, he = !1, Ie = {
              then: function(Wt, on) {
                he = !0, Ce.then(function(Dt) {
                  Pi(C), Na === 0 ? eo(Dt, Wt, on) : Wt(Dt);
                }, function(Dt) {
                  Pi(C), on(Dt);
                });
              }
            };
            return !Hi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              he || (Hi = !0, $("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ie;
          } else {
            var ct = H;
            if (Pi(C), Na === 0) {
              var Pt = Re.current;
              Pt !== null && (Vi(Pt), Re.current = null);
              var Yt = {
                then: function(Wt, on) {
                  Re.current === null ? (Re.current = [], eo(ct, Wt, on)) : Wt(ct);
                }
              };
              return Yt;
            } else {
              var Qt = {
                then: function(Wt, on) {
                  Wt(ct);
                }
              };
              return Qt;
            }
          }
        }
      }
      function Pi(h) {
        h !== Na - 1 && $("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = h;
      }
      function eo(h, C, z) {
        {
          var H = Re.current;
          if (H !== null)
            try {
              Vi(H), wl(function() {
                H.length === 0 ? (Re.current = null, C(h)) : eo(h, C, z);
              });
            } catch (J) {
              z(J);
            }
          else
            C(h);
        }
      }
      var vi = !1;
      function Vi(h) {
        if (!vi) {
          vi = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            vi = !1;
          }
        }
      }
      var to = us, os = Ja, ei = $r, no = {
        map: Da,
        forEach: au,
        count: ml,
        toArray: iu,
        only: yl
      };
      U.Children = no, U.Component = nt, U.Fragment = Qe, U.Profiler = je, U.PureComponent = $t, U.StrictMode = S, U.Suspense = te, U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, U.act = du, U.cloneElement = os, U.createContext = Ka, U.createElement = to, U.createFactory = ei, U.createRef = Fr, U.forwardRef = Ui, U.isValidElement = Mt, U.lazy = sa, U.memo = W, U.startTransition = Ju, U.unstable_act = du, U.useCallback = pn, U.useContext = ze, U.useDebugValue = Oa, U.useDeferredValue = Pr, U.useEffect = st, U.useId = rt, U.useImperativeHandle = Ht, U.useInsertionEffect = Nn, U.useLayoutEffect = Kt, U.useMemo = hr, U.useReducer = Tt, U.useRef = He, U.useState = pt, U.useSyncExternalStore = Ai, U.useTransition = zn, U.version = ne, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(tv, tv.exports)), tv.exports;
}
var mD = {};
mD.NODE_ENV === "production" ? C0.exports = vD() : C0.exports = hD();
var _a = C0.exports;
const qu = /* @__PURE__ */ pD(_a);
var R0 = { exports: {} }, Wa = {}, Pm = { exports: {} }, g0 = {};
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
function yD() {
  return oR || (oR = 1, function(D) {
    function U($, ge) {
      var oe = $.length;
      $.push(ge);
      e: for (; 0 < oe; ) {
        var k = oe - 1 >>> 1, I = $[k];
        if (0 < Ye(I, ge)) $[k] = ge, $[oe] = I, oe = k;
        else break e;
      }
    }
    function w($) {
      return $.length === 0 ? null : $[0];
    }
    function ne($) {
      if ($.length === 0) return null;
      var ge = $[0], oe = $.pop();
      if (oe !== ge) {
        $[0] = oe;
        e: for (var k = 0, I = $.length, Me = I >>> 1; k < Me; ) {
          var $e = 2 * (k + 1) - 1, nt = $[$e], ut = $e + 1, mt = $[ut];
          if (0 > Ye(nt, oe)) ut < I && 0 > Ye(mt, nt) ? ($[k] = mt, $[ut] = oe, k = ut) : ($[k] = nt, $[$e] = oe, k = $e);
          else if (ut < I && 0 > Ye(mt, oe)) $[k] = mt, $[ut] = oe, k = ut;
          else break e;
        }
      }
      return ge;
    }
    function Ye($, ge) {
      var oe = $.sortIndex - ge.sortIndex;
      return oe !== 0 ? oe : $.id - ge.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var vt = performance;
      D.unstable_now = function() {
        return vt.now();
      };
    } else {
      var Qe = Date, S = Qe.now();
      D.unstable_now = function() {
        return Qe.now() - S;
      };
    }
    var je = [], we = [], le = 1, Le = null, te = 3, de = !1, Z = !1, pe = !1, We = typeof setTimeout == "function" ? setTimeout : null, At = typeof clearTimeout == "function" ? clearTimeout : null, Et = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ze($) {
      for (var ge = w(we); ge !== null; ) {
        if (ge.callback === null) ne(we);
        else if (ge.startTime <= $) ne(we), ge.sortIndex = ge.expirationTime, U(je, ge);
        else break;
        ge = w(we);
      }
    }
    function Fe($) {
      if (pe = !1, Ze($), !Z) if (w(je) !== null) Z = !0, _t(xt);
      else {
        var ge = w(we);
        ge !== null && lt(Fe, ge.startTime - $);
      }
    }
    function xt($, ge) {
      Z = !1, pe && (pe = !1, At(qe), qe = -1), de = !0;
      var oe = te;
      try {
        for (Ze(ge), Le = w(je); Le !== null && (!(Le.expirationTime > ge) || $ && !en()); ) {
          var k = Le.callback;
          if (typeof k == "function") {
            Le.callback = null, te = Le.priorityLevel;
            var I = k(Le.expirationTime <= ge);
            ge = D.unstable_now(), typeof I == "function" ? Le.callback = I : Le === w(je) && ne(je), Ze(ge);
          } else ne(je);
          Le = w(je);
        }
        if (Le !== null) var Me = !0;
        else {
          var $e = w(we);
          $e !== null && lt(Fe, $e.startTime - ge), Me = !1;
        }
        return Me;
      } finally {
        Le = null, te = oe, de = !1;
      }
    }
    var Re = !1, ft = null, qe = -1, an = 5, En = -1;
    function en() {
      return !(D.unstable_now() - En < an);
    }
    function Ct() {
      if (ft !== null) {
        var $ = D.unstable_now();
        En = $;
        var ge = !0;
        try {
          ge = ft(!0, $);
        } finally {
          ge ? ln() : (Re = !1, ft = null);
        }
      } else Re = !1;
    }
    var ln;
    if (typeof Et == "function") ln = function() {
      Et(Ct);
    };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), it = Be.port2;
      Be.port1.onmessage = Ct, ln = function() {
        it.postMessage(null);
      };
    } else ln = function() {
      We(Ct, 0);
    };
    function _t($) {
      ft = $, Re || (Re = !0, ln());
    }
    function lt($, ge) {
      qe = We(function() {
        $(D.unstable_now());
      }, ge);
    }
    D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function($) {
      $.callback = null;
    }, D.unstable_continueExecution = function() {
      Z || de || (Z = !0, _t(xt));
    }, D.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : an = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, D.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, D.unstable_getFirstCallbackNode = function() {
      return w(je);
    }, D.unstable_next = function($) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var ge = 3;
          break;
        default:
          ge = te;
      }
      var oe = te;
      te = ge;
      try {
        return $();
      } finally {
        te = oe;
      }
    }, D.unstable_pauseExecution = function() {
    }, D.unstable_requestPaint = function() {
    }, D.unstable_runWithPriority = function($, ge) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var oe = te;
      te = $;
      try {
        return ge();
      } finally {
        te = oe;
      }
    }, D.unstable_scheduleCallback = function($, ge, oe) {
      var k = D.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? k + oe : k) : oe = k, $) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = oe + I, $ = { id: le++, callback: ge, priorityLevel: $, startTime: oe, expirationTime: I, sortIndex: -1 }, oe > k ? ($.sortIndex = oe, U(we, $), w(je) === null && $ === w(we) && (pe ? (At(qe), qe = -1) : pe = !0, lt(Fe, oe - k))) : ($.sortIndex = I, U(je, $), Z || de || (Z = !0, _t(xt))), $;
    }, D.unstable_shouldYield = en, D.unstable_wrapCallback = function($) {
      var ge = te;
      return function() {
        var oe = te;
        te = ge;
        try {
          return $.apply(this, arguments);
        } finally {
          te = oe;
        }
      };
    };
  }(g0)), g0;
}
var S0 = {}, sR;
function gD() {
  return sR || (sR = 1, function(D) {
    var U = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    U.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = !1, ne = !1, Ye = 5;
      function vt(ae, Oe) {
        var ot = ae.length;
        ae.push(Oe), je(ae, Oe, ot);
      }
      function Qe(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function S(ae) {
        if (ae.length === 0)
          return null;
        var Oe = ae[0], ot = ae.pop();
        return ot !== Oe && (ae[0] = ot, we(ae, ot, 0)), Oe;
      }
      function je(ae, Oe, ot) {
        for (var jt = ot; jt > 0; ) {
          var Mt = jt - 1 >>> 1, Dn = ae[Mt];
          if (le(Dn, Oe) > 0)
            ae[Mt] = Oe, ae[jt] = Dn, jt = Mt;
          else
            return;
        }
      }
      function we(ae, Oe, ot) {
        for (var jt = ot, Mt = ae.length, Dn = Mt >>> 1; jt < Dn; ) {
          var hn = (jt + 1) * 2 - 1, vr = ae[hn], It = hn + 1, In = ae[It];
          if (le(vr, Oe) < 0)
            It < Mt && le(In, vr) < 0 ? (ae[jt] = In, ae[It] = Oe, jt = It) : (ae[jt] = vr, ae[hn] = Oe, jt = hn);
          else if (It < Mt && le(In, Oe) < 0)
            ae[jt] = In, ae[It] = Oe, jt = It;
          else
            return;
        }
      }
      function le(ae, Oe) {
        var ot = ae.sortIndex - Oe.sortIndex;
        return ot !== 0 ? ot : ae.id - Oe.id;
      }
      var Le = 1, te = 2, de = 3, Z = 4, pe = 5;
      function We(ae, Oe) {
      }
      var At = typeof performance == "object" && typeof performance.now == "function";
      if (At) {
        var Et = performance;
        D.unstable_now = function() {
          return Et.now();
        };
      } else {
        var Ze = Date, Fe = Ze.now();
        D.unstable_now = function() {
          return Ze.now() - Fe;
        };
      }
      var xt = 1073741823, Re = -1, ft = 250, qe = 5e3, an = 1e4, En = xt, en = [], Ct = [], ln = 1, Be = null, it = de, _t = !1, lt = !1, $ = !1, ge = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function I(ae) {
        for (var Oe = Qe(Ct); Oe !== null; ) {
          if (Oe.callback === null)
            S(Ct);
          else if (Oe.startTime <= ae)
            S(Ct), Oe.sortIndex = Oe.expirationTime, vt(en, Oe);
          else
            return;
          Oe = Qe(Ct);
        }
      }
      function Me(ae) {
        if ($ = !1, I(ae), !lt)
          if (Qe(en) !== null)
            lt = !0, Sr($e);
          else {
            var Oe = Qe(Ct);
            Oe !== null && dn(Me, Oe.startTime - ae);
          }
      }
      function $e(ae, Oe) {
        lt = !1, $ && ($ = !1, la()), _t = !0;
        var ot = it;
        try {
          var jt;
          if (!ne) return nt(ae, Oe);
        } finally {
          Be = null, it = ot, _t = !1;
        }
      }
      function nt(ae, Oe) {
        var ot = Oe;
        for (I(ot), Be = Qe(en); Be !== null && !w && !(Be.expirationTime > ot && (!ae || dr())); ) {
          var jt = Be.callback;
          if (typeof jt == "function") {
            Be.callback = null, it = Be.priorityLevel;
            var Mt = Be.expirationTime <= ot, Dn = jt(Mt);
            ot = D.unstable_now(), typeof Dn == "function" ? Be.callback = Dn : Be === Qe(en) && S(en), I(ot);
          } else
            S(en);
          Be = Qe(en);
        }
        if (Be !== null)
          return !0;
        var hn = Qe(Ct);
        return hn !== null && dn(Me, hn.startTime - ot), !1;
      }
      function ut(ae, Oe) {
        switch (ae) {
          case Le:
          case te:
          case de:
          case Z:
          case pe:
            break;
          default:
            ae = de;
        }
        var ot = it;
        it = ae;
        try {
          return Oe();
        } finally {
          it = ot;
        }
      }
      function mt(ae) {
        var Oe;
        switch (it) {
          case Le:
          case te:
          case de:
            Oe = de;
            break;
          default:
            Oe = it;
            break;
        }
        var ot = it;
        it = Oe;
        try {
          return ae();
        } finally {
          it = ot;
        }
      }
      function dt(ae) {
        var Oe = it;
        return function() {
          var ot = it;
          it = Oe;
          try {
            return ae.apply(this, arguments);
          } finally {
            it = ot;
          }
        };
      }
      function Rt(ae, Oe, ot) {
        var jt = D.unstable_now(), Mt;
        if (typeof ot == "object" && ot !== null) {
          var Dn = ot.delay;
          typeof Dn == "number" && Dn > 0 ? Mt = jt + Dn : Mt = jt;
        } else
          Mt = jt;
        var hn;
        switch (ae) {
          case Le:
            hn = Re;
            break;
          case te:
            hn = ft;
            break;
          case pe:
            hn = En;
            break;
          case Z:
            hn = an;
            break;
          case de:
          default:
            hn = qe;
            break;
        }
        var vr = Mt + hn, It = {
          id: ln++,
          callback: Oe,
          priorityLevel: ae,
          startTime: Mt,
          expirationTime: vr,
          sortIndex: -1
        };
        return Mt > jt ? (It.sortIndex = Mt, vt(Ct, It), Qe(en) === null && It === Qe(Ct) && ($ ? la() : $ = !0, dn(Me, Mt - jt))) : (It.sortIndex = vr, vt(en, It), !lt && !_t && (lt = !0, Sr($e))), It;
      }
      function $t() {
      }
      function Kn() {
        !lt && !_t && (lt = !0, Sr($e));
      }
      function Fr() {
        return Qe(en);
      }
      function fr(ae) {
        ae.callback = null;
      }
      function Cn() {
        return it;
      }
      var Xn = !1, Hn = null, _n = -1, Mn = Ye, gr = -1;
      function dr() {
        var ae = D.unstable_now() - gr;
        return !(ae < Mn);
      }
      function Pn() {
      }
      function ra(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? Mn = Math.floor(1e3 / ae) : Mn = Ye;
      }
      var aa = function() {
        if (Hn !== null) {
          var ae = D.unstable_now();
          gr = ae;
          var Oe = !0, ot = !0;
          try {
            ot = Hn(Oe, ae);
          } finally {
            ot ? pr() : (Xn = !1, Hn = null);
          }
        } else
          Xn = !1;
      }, pr;
      if (typeof k == "function")
        pr = function() {
          k(aa);
        };
      else if (typeof MessageChannel < "u") {
        var ia = new MessageChannel(), Zn = ia.port2;
        ia.port1.onmessage = aa, pr = function() {
          Zn.postMessage(null);
        };
      } else
        pr = function() {
          ge(aa, 0);
        };
      function Sr(ae) {
        Hn = ae, Xn || (Xn = !0, pr());
      }
      function dn(ae, Oe) {
        _n = ge(function() {
          ae(D.unstable_now());
        }, Oe);
      }
      function la() {
        oe(_n), _n = -1;
      }
      var ua = Pn, oa = null;
      D.unstable_IdlePriority = pe, D.unstable_ImmediatePriority = Le, D.unstable_LowPriority = Z, D.unstable_NormalPriority = de, D.unstable_Profiling = oa, D.unstable_UserBlockingPriority = te, D.unstable_cancelCallback = fr, D.unstable_continueExecution = Kn, D.unstable_forceFrameRate = ra, D.unstable_getCurrentPriorityLevel = Cn, D.unstable_getFirstCallbackNode = Fr, D.unstable_next = mt, D.unstable_pauseExecution = $t, D.unstable_requestPaint = ua, D.unstable_runWithPriority = ut, D.unstable_scheduleCallback = Rt, D.unstable_shouldYield = dr, D.unstable_wrapCallback = dt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(S0)), S0;
}
var cR;
function gR() {
  if (cR) return Pm.exports;
  cR = 1;
  var D = {};
  return D.NODE_ENV === "production" ? Pm.exports = yD() : Pm.exports = gD(), Pm.exports;
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
function SD() {
  if (fR) return Wa;
  fR = 1;
  var D = _a, U = gR();
  function w(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ne = /* @__PURE__ */ new Set(), Ye = {};
  function vt(n, r) {
    Qe(n, r), Qe(n + "Capture", r);
  }
  function Qe(n, r) {
    for (Ye[n] = r, n = 0; n < r.length; n++) ne.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), je = Object.prototype.hasOwnProperty, we = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, le = {}, Le = {};
  function te(n) {
    return je.call(Le, n) ? !0 : je.call(le, n) ? !1 : we.test(n) ? Le[n] = !0 : (le[n] = !0, !1);
  }
  function de(n, r, l, o) {
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
  function Z(n, r, l, o) {
    if (r === null || typeof r > "u" || de(n, r, l, o)) return !0;
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
  function pe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var We = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    We[n] = new pe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    We[r] = new pe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    We[n] = new pe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    We[n] = new pe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    We[n] = new pe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    We[n] = new pe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    We[n] = new pe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    We[n] = new pe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    We[n] = new pe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var At = /[\-:]([a-z])/g;
  function Et(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      At,
      Et
    );
    We[r] = new pe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(At, Et);
    We[r] = new pe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(At, Et);
    We[r] = new pe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    We[n] = new pe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), We.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    We[n] = new pe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ze(n, r, l, o) {
    var c = We.hasOwnProperty(r) ? We[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Z(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Fe = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xt = Symbol.for("react.element"), Re = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), an = Symbol.for("react.profiler"), En = Symbol.for("react.provider"), en = Symbol.for("react.context"), Ct = Symbol.for("react.forward_ref"), ln = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), it = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), lt = Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function ge(n) {
    return n === null || typeof n != "object" ? null : (n = $ && n[$] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oe = Object.assign, k;
  function I(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var Me = !1;
  function $e(n, r) {
    if (!n || Me) return "";
    Me = !0;
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
      Me = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? I(n) : "";
  }
  function nt(n) {
    switch (n.tag) {
      case 5:
        return I(n.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = $e(n.type, !1), n;
      case 11:
        return n = $e(n.type.render, !1), n;
      case 1:
        return n = $e(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ft:
        return "Fragment";
      case Re:
        return "Portal";
      case an:
        return "Profiler";
      case qe:
        return "StrictMode";
      case ln:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case en:
        return (n.displayName || "Context") + ".Consumer";
      case En:
        return (n._context.displayName || "Context") + ".Provider";
      case Ct:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case it:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case _t:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function mt(n) {
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
        return ut(r);
      case 8:
        return r === qe ? "StrictMode" : "Mode";
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
  function Rt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $t(n) {
    var r = Rt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function Kn(n) {
    n._valueTracker || (n._valueTracker = $t(n));
  }
  function Fr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Rt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function fr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Cn(n, r) {
    var l = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Xn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = dt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Hn(n, r) {
    r = r.checked, r != null && Ze(n, "checked", r, !1);
  }
  function _n(n, r) {
    Hn(n, r);
    var l = dt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? gr(n, r.type, l) : r.hasOwnProperty("defaultValue") && gr(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Mn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function gr(n, r, l) {
    (r !== "number" || fr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var dr = Array.isArray;
  function Pn(n, r, l, o) {
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
  function ra(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(w(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function aa(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(w(92));
        if (dr(l)) {
          if (1 < l.length) throw Error(w(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: dt(l) };
  }
  function pr(n, r) {
    var l = dt(r.value), o = dt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function ia(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Zn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Sr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Zn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var dn, la = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (dn = dn || document.createElement("div"), dn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = dn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ua(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var oa = {
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
  }, ae = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oa).forEach(function(n) {
    ae.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), oa[r] = oa[n];
    });
  });
  function Oe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || oa.hasOwnProperty(n) && oa[n] ? ("" + r).trim() : r + "px";
  }
  function ot(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Oe(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var jt = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Mt(n, r) {
    if (r) {
      if (jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(w(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(w(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(w(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(w(62));
    }
  }
  function Dn(n, r) {
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
  var hn = null;
  function vr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var It = null, In = null, Ft = null;
  function tn(n) {
    if (n = mi(n)) {
      if (typeof It != "function") throw Error(w(280));
      var r = n.stateNode;
      r && (r = Oc(r), It(n.stateNode, n.type, r));
    }
  }
  function qa(n) {
    In ? Ft ? Ft.push(n) : Ft = [n] : In = n;
  }
  function Da() {
    if (In) {
      var n = In, r = Ft;
      if (Ft = In = null, tn(n), r) for (n = 0; n < r.length; n++) tn(r[n]);
    }
  }
  function ml(n, r) {
    return n(r);
  }
  function au() {
  }
  var iu = !1;
  function yl(n, r, l) {
    if (iu) return n(r, l);
    iu = !0;
    try {
      return ml(n, r, l);
    } finally {
      iu = !1, (In !== null || Ft !== null) && (au(), Da());
    }
  }
  function Ka(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Oc(l);
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
  var Xa = !1;
  if (S) try {
    var ka = {};
    Object.defineProperty(ka, "passive", { get: function() {
      Xa = !0;
    } }), window.addEventListener("test", ka, ka), window.removeEventListener("test", ka, ka);
  } catch {
    Xa = !1;
  }
  function zi(n, r, l, o, c, d, m, E, T) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, j);
    } catch (G) {
      this.onError(G);
    }
  }
  var Er = !1, Hr = null, sa = !1, Ui = null, gl = { onError: function(n) {
    Er = !0, Hr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Er = !1, Hr = null, zi.apply(gl, arguments);
  }
  function W(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Er) {
      if (Er) {
        var j = Hr;
        Er = !1, Hr = null;
      } else throw Error(w(198));
      sa || (sa = !0, Ui = j);
    }
  }
  function q(n) {
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
  function ze(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function pt(n) {
    if (q(n) !== n) throw Error(w(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = q(n), r === null) throw Error(w(188));
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
          if (d === l) return pt(c), n;
          if (d === o) return pt(c), r;
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
  function He(n) {
    return n = Tt(n), n !== null ? st(n) : null;
  }
  function st(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = st(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Nn = U.unstable_scheduleCallback, Kt = U.unstable_cancelCallback, pn = U.unstable_shouldYield, hr = U.unstable_requestPaint, Ht = U.unstable_now, Oa = U.unstable_getCurrentPriorityLevel, zn = U.unstable_ImmediatePriority, Pr = U.unstable_UserBlockingPriority, rt = U.unstable_NormalPriority, Ai = U.unstable_LowPriority, ji = U.unstable_IdlePriority, Sl = null, Vr = null;
  function Jo(n) {
    if (Vr && typeof Vr.onCommitFiberRoot == "function") try {
      Vr.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Cr = Math.clz32 ? Math.clz32 : ns, es = Math.log, ts = Math.LN2;
  function ns(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (es(n) / ts | 0) | 0;
  }
  var lu = 64, Ku = 4194304;
  function Fi(n) {
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
  function di(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Fi(E) : (d &= m, d !== 0 && (o = Fi(d)));
    } else m = l & ~c, m !== 0 ? o = Fi(m) : d !== 0 && (o = Fi(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Cr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function La(n, r) {
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
  function El(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Cr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = La(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function pi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function uu() {
    var n = lu;
    return lu <<= 1, !(lu & 4194240) && (lu = 64), n;
  }
  function ou(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Cr(r), n[r] = l;
  }
  function rs(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Cr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function as(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Cr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var yt = 0;
  function is(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xu, Rl, ls, gt, Zu, su = !1, Ke = [], Za = null, mn = null, Br = null, Ma = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map(), un = [], yn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function us(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Za = null;
        break;
      case "dragenter":
      case "dragleave":
        mn = null;
        break;
      case "mouseover":
      case "mouseout":
        Br = null;
        break;
      case "pointerover":
      case "pointerout":
        Ma.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tl.delete(r.pointerId);
    }
  }
  function Jn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = mi(r), r !== null && Rl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function $r(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Za = Jn(Za, n, r, l, o, c), !0;
      case "dragenter":
        return mn = Jn(mn, n, r, l, o, c), !0;
      case "mouseover":
        return Br = Jn(Br, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Ma.set(d, Jn(Ma.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tl.set(d, Jn(Tl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ja(n) {
    var r = qi(n.target);
    if (r !== null) {
      var l = q(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ze(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              ls(l);
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
  function Ju(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = to(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        hn = o, l.target.dispatchEvent(o), hn = null;
      } else return r = mi(l), r !== null && Rl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function cu(n, r, l) {
    Ju(n) && l.delete(r);
  }
  function fu() {
    su = !1, Za !== null && Ju(Za) && (Za = null), mn !== null && Ju(mn) && (mn = null), Br !== null && Ju(Br) && (Br = null), Ma.forEach(cu), Tl.forEach(cu);
  }
  function wl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, su || (su = !0, U.unstable_scheduleCallback(U.unstable_NormalPriority, fu)));
  }
  function Na(n) {
    function r(c) {
      return wl(c, n);
    }
    if (0 < Ke.length) {
      wl(Ke[0], n);
      for (var l = 1; l < Ke.length; l++) {
        var o = Ke[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Za !== null && wl(Za, n), mn !== null && wl(mn, n), Br !== null && wl(Br, n), Ma.forEach(r), Tl.forEach(r), l = 0; l < un.length; l++) o = un[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < un.length && (l = un[0], l.blockedOn === null); ) Ja(l), l.blockedOn === null && un.shift();
  }
  var Hi = Fe.ReactCurrentBatchConfig, du = !0;
  function Pi(n, r, l, o) {
    var c = yt, d = Hi.transition;
    Hi.transition = null;
    try {
      yt = 1, vi(n, r, l, o);
    } finally {
      yt = c, Hi.transition = d;
    }
  }
  function eo(n, r, l, o) {
    var c = yt, d = Hi.transition;
    Hi.transition = null;
    try {
      yt = 4, vi(n, r, l, o);
    } finally {
      yt = c, Hi.transition = d;
    }
  }
  function vi(n, r, l, o) {
    if (du) {
      var c = to(n, r, l, o);
      if (c === null) nd(n, r, o, Vi, l), us(n, o);
      else if ($r(c, n, r, l, o)) o.stopPropagation();
      else if (us(n, o), r & 4 && -1 < yn.indexOf(n)) {
        for (; c !== null; ) {
          var d = mi(c);
          if (d !== null && Xu(d), d = to(n, r, l, o), d === null && nd(n, r, o, Vi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else nd(n, r, o, null, l);
    }
  }
  var Vi = null;
  function to(n, r, l, o) {
    if (Vi = null, n = vr(o), n = qi(n), n !== null) if (r = q(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ze(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
  }
  function os(n) {
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
        switch (Oa()) {
          case zn:
            return 1;
          case Pr:
            return 4;
          case rt:
          case Ai:
            return 16;
          case ji:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, no = null, h = null;
  function C() {
    if (h) return h;
    var n, r = no, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function H() {
    return !0;
  }
  function J() {
    return !1;
  }
  function Ce(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? H : J, this.isPropagationStopped = J, this;
    }
    return oe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = H);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = H);
    }, persist: function() {
    }, isPersistent: H }), r;
  }
  var he = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ie = Ce(he), ct = oe({}, he, { view: 0, detail: 0 }), Pt = Ce(ct), Yt, Qt, Wt, on = oe({}, ct, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ec, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Yt = n.screenX - Wt.screenX, Qt = n.screenY - Wt.screenY) : Qt = Yt = 0, Wt = n), Yt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Qt;
  } }), Dt = Ce(on), bl = oe({}, on, { dataTransfer: 0 }), ro = Ce(bl), ss = oe({}, ct, { relatedTarget: 0 }), cs = Ce(ss), Bi = oe({}, he, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fs = Ce(Bi), ds = oe({}, he, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), If = Ce(ds), Wm = oe({}, he, { data: 0 }), nv = Ce(Wm), rv = {
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
  }, Yf = {
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
  }, av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function iv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = av[n]) ? !!r[n] : !1;
  }
  function Ec() {
    return iv;
  }
  var Gm = oe({}, ct, { key: function(n) {
    if (n.key) {
      var r = rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Yf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ec, charCode: function(n) {
    return n.type === "keypress" ? z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $i = Ce(Gm), qm = oe({}, on, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cc = Ce(qm), Qf = oe({}, ct, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ec }), Wf = Ce(Qf), Km = oe({}, he, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rc = Ce(Km), lv = oe({}, on, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ir = Ce(lv), Ii = [9, 13, 27, 32], Rn = S && "CompositionEvent" in window, ca = null;
  S && "documentMode" in document && (ca = document.documentMode);
  var Gf = S && "TextEvent" in window && !ca, ps = S && (!Rn || ca && 8 < ca && 11 >= ca), uv = " ", ao = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return Ii.indexOf(r.keyCode) !== -1;
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
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var xl = !1;
  function Xm(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (ao = !0, uv);
      case "textInput":
        return n = r.data, n === uv && ao ? null : n;
      default:
        return null;
    }
  }
  function Zm(n, r) {
    if (xl) return n === "compositionend" || !Rn && ov(n, r) ? (n = C(), h = no = ei = null, xl = !1, n) : null;
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
        return ps && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function qf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jm[n.type] : r === "textarea";
  }
  function cv(n, r, l, o) {
    qa(o), r = Dc(r, "onChange"), 0 < r.length && (l = new Ie("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var vs = null, hs = null;
  function fv(n) {
    _v(n, 0);
  }
  function Yi(n) {
    var r = oo(n);
    if (Fr(r)) return n;
  }
  function Kf(n, r) {
    if (n === "change") return r;
  }
  var Xf = !1;
  if (S) {
    var Tc;
    if (S) {
      var Zf = "oninput" in document;
      if (!Zf) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"), Zf = typeof dv.oninput == "function";
      }
      Tc = Zf;
    } else Tc = !1;
    Xf = Tc && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    vs && (vs.detachEvent("onpropertychange", vv), hs = vs = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Yi(hs)) {
      var r = [];
      cv(r, hs, n, vr(n)), yl(fv, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (pv(), vs = r, hs = l, vs.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Yi(hs);
  }
  function ny(n, r) {
    if (n === "click") return Yi(r);
  }
  function ry(n, r) {
    if (n === "input" || n === "change") return Yi(r);
  }
  function hv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : hv;
  function io(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!je.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function mv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function yv(n, r) {
    var l = mv(n);
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
      l = mv(l);
    }
  }
  function gv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? gv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Sv() {
    for (var n = window, r = fr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = fr(n.document);
    }
    return r;
  }
  function ms(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function pu(n) {
    var r = Sv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && gv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ms(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = yv(l, d);
          var m = yv(
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
  var wc = S && "documentMode" in document && 11 >= document.documentMode, vu = null, _l = null, ys = null, Jf = !1;
  function Ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jf || vu == null || vu !== fr(o) || (o = vu, "selectionStart" in o && ms(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ys && io(ys, o) || (ys = o, o = Dc(_l, "onSelect"), 0 < o.length && (r = new Ie("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = vu)));
  }
  function bc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var lo = { animationend: bc("Animation", "AnimationEnd"), animationiteration: bc("Animation", "AnimationIteration"), animationstart: bc("Animation", "AnimationStart"), transitionend: bc("Transition", "TransitionEnd") }, xc = {}, Cv = {};
  S && (Cv = document.createElement("div").style, "AnimationEvent" in window || (delete lo.animationend.animation, delete lo.animationiteration.animation, delete lo.animationstart.animation), "TransitionEvent" in window || delete lo.transitionend.transition);
  function gs(n) {
    if (xc[n]) return xc[n];
    if (!lo[n]) return n;
    var r = lo[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Cv) return xc[n] = r[l];
    return n;
  }
  var mr = gs("animationend"), ed = gs("animationiteration"), Rv = gs("animationstart"), Tv = gs("transitionend"), wv = /* @__PURE__ */ new Map(), bv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dl(n, r) {
    wv.set(n, r), vt(r, [n]);
  }
  for (var _c = 0; _c < bv.length; _c++) {
    var Ss = bv[_c], Es = Ss.toLowerCase(), ay = Ss[0].toUpperCase() + Ss.slice(1);
    Dl(Es, "on" + ay);
  }
  Dl(mr, "onAnimationEnd"), Dl(ed, "onAnimationIteration"), Dl(Rv, "onAnimationStart"), Dl("dblclick", "onDoubleClick"), Dl("focusin", "onFocus"), Dl("focusout", "onBlur"), Dl(Tv, "onTransitionEnd"), Qe("onMouseEnter", ["mouseout", "mouseover"]), Qe("onMouseLeave", ["mouseout", "mouseover"]), Qe("onPointerEnter", ["pointerout", "pointerover"]), Qe("onPointerLeave", ["pointerout", "pointerover"]), vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Qi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), iy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));
  function xv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, W(o, r, void 0, n), n.currentTarget = null;
  }
  function _v(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, j = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          xv(c, E, j), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, j = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          xv(c, E, j), d = T;
        }
      }
    }
    if (sa) throw n = Ui, sa = !1, Ui = null, n;
  }
  function Xt(n, r) {
    var l = r[cd];
    l === void 0 && (l = r[cd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (td(r, n, 2, !1), l.add(o));
  }
  function Cs(n, r, l) {
    var o = 0;
    r && (o |= 4), td(l, n, o, r);
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function hi(n) {
    if (!n[Wi]) {
      n[Wi] = !0, ne.forEach(function(l) {
        l !== "selectionchange" && (iy.has(l) || Cs(l, !1, n), Cs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Wi] || (r[Wi] = !0, Cs("selectionchange", !1, r));
    }
  }
  function td(n, r, l, o) {
    switch (os(r)) {
      case 1:
        var c = Pi;
        break;
      case 4:
        c = eo;
        break;
      default:
        c = vi;
    }
    l = c.bind(null, r, l, n), c = void 0, !Xa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function nd(n, r, l, o, c) {
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
          if (m = qi(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    yl(function() {
      var j = d, G = vr(l), K = [];
      e: {
        var Q = wv.get(n);
        if (Q !== void 0) {
          var fe = Ie, Se = n;
          switch (n) {
            case "keypress":
              if (z(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = $i;
              break;
            case "focusin":
              Se = "focus", fe = cs;
              break;
            case "focusout":
              Se = "blur", fe = cs;
              break;
            case "beforeblur":
            case "afterblur":
              fe = cs;
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
              fe = Dt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = ro;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = Wf;
              break;
            case mr:
            case ed:
            case Rv:
              fe = fs;
              break;
            case Tv:
              fe = Rc;
              break;
            case "scroll":
              fe = Pt;
              break;
            case "wheel":
              fe = Ir;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = If;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = Cc;
          }
          var Te = (r & 4) !== 0, On = !Te && n === "scroll", O = Te ? Q !== null ? Q + "Capture" : null : Q;
          Te = [];
          for (var x = j, N; x !== null; ) {
            N = x;
            var ee = N.stateNode;
            if (N.tag === 5 && ee !== null && (N = ee, O !== null && (ee = Ka(x, O), ee != null && Te.push(uo(x, ee, N)))), On) break;
            x = x.return;
          }
          0 < Te.length && (Q = new fe(Q, Se, null, l, G), K.push({ event: Q, listeners: Te }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", Q && l !== hn && (Se = l.relatedTarget || l.fromElement) && (qi(Se) || Se[ni])) break e;
          if ((fe || Q) && (Q = G.window === G ? G : (Q = G.ownerDocument) ? Q.defaultView || Q.parentWindow : window, fe ? (Se = l.relatedTarget || l.toElement, fe = j, Se = Se ? qi(Se) : null, Se !== null && (On = q(Se), Se !== On || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (fe = null, Se = j), fe !== Se)) {
            if (Te = Dt, ee = "onMouseLeave", O = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Te = Cc, ee = "onPointerLeave", O = "onPointerEnter", x = "pointer"), On = fe == null ? Q : oo(fe), N = Se == null ? Q : oo(Se), Q = new Te(ee, x + "leave", fe, l, G), Q.target = On, Q.relatedTarget = N, ee = null, qi(G) === j && (Te = new Te(O, x + "enter", Se, l, G), Te.target = N, Te.relatedTarget = On, ee = Te), On = ee, fe && Se) t: {
              for (Te = fe, O = Se, x = 0, N = Te; N; N = hu(N)) x++;
              for (N = 0, ee = O; ee; ee = hu(ee)) N++;
              for (; 0 < x - N; ) Te = hu(Te), x--;
              for (; 0 < N - x; ) O = hu(O), N--;
              for (; x--; ) {
                if (Te === O || O !== null && Te === O.alternate) break t;
                Te = hu(Te), O = hu(O);
              }
              Te = null;
            }
            else Te = null;
            fe !== null && rd(K, Q, fe, Te, !1), Se !== null && On !== null && rd(K, On, Se, Te, !0);
          }
        }
        e: {
          if (Q = j ? oo(j) : window, fe = Q.nodeName && Q.nodeName.toLowerCase(), fe === "select" || fe === "input" && Q.type === "file") var xe = Kf;
          else if (qf(Q)) if (Xf) xe = ry;
          else {
            xe = ty;
            var Pe = ey;
          }
          else (fe = Q.nodeName) && fe.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (xe = ny);
          if (xe && (xe = xe(n, j))) {
            cv(K, xe, l, G);
            break e;
          }
          Pe && Pe(n, Q, j), n === "focusout" && (Pe = Q._wrapperState) && Pe.controlled && Q.type === "number" && gr(Q, "number", Q.value);
        }
        switch (Pe = j ? oo(j) : window, n) {
          case "focusin":
            (qf(Pe) || Pe.contentEditable === "true") && (vu = Pe, _l = j, ys = null);
            break;
          case "focusout":
            ys = _l = vu = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, Ev(K, l, G);
            break;
          case "selectionchange":
            if (wc) break;
          case "keydown":
          case "keyup":
            Ev(K, l, G);
        }
        var Ve;
        if (Rn) e: {
          switch (n) {
            case "compositionstart":
              var De = "onCompositionStart";
              break e;
            case "compositionend":
              De = "onCompositionEnd";
              break e;
            case "compositionupdate":
              De = "onCompositionUpdate";
              break e;
          }
          De = void 0;
        }
        else xl ? ov(n, l) && (De = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (De = "onCompositionStart");
        De && (ps && l.locale !== "ko" && (xl || De !== "onCompositionStart" ? De === "onCompositionEnd" && xl && (Ve = C()) : (ei = G, no = "value" in ei ? ei.value : ei.textContent, xl = !0)), Pe = Dc(j, De), 0 < Pe.length && (De = new nv(De, n, null, l, G), K.push({ event: De, listeners: Pe }), Ve ? De.data = Ve : (Ve = sv(l), Ve !== null && (De.data = Ve)))), (Ve = Gf ? Xm(n, l) : Zm(n, l)) && (j = Dc(j, "onBeforeInput"), 0 < j.length && (G = new nv("onBeforeInput", "beforeinput", null, l, G), K.push({ event: G, listeners: j }), G.data = Ve));
      }
      _v(K, r);
    });
  }
  function uo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Dc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ka(n, l), d != null && o.unshift(uo(n, d, c)), d = Ka(n, r), d != null && o.push(uo(n, d, c))), n = n.return;
    }
    return o;
  }
  function hu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function rd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, j = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && j !== null && (E = j, c ? (T = Ka(l, d), T != null && m.unshift(uo(l, T, E))) : c || (T = Ka(l, d), T != null && m.push(uo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Dv = /\r\n?/g, ad = /\u0000|\uFFFD/g;
  function kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Dv, `
`).replace(ad, "");
  }
  function Rs(n, r, l) {
    if (r = kv(r), kv(n) !== r && l) throw Error(w(425));
  }
  function kc() {
  }
  var id = null, ld = null;
  function mu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ts = typeof setTimeout == "function" ? setTimeout : void 0, ws = typeof clearTimeout == "function" ? clearTimeout : void 0, ud = typeof Promise == "function" ? Promise : void 0, Ov = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(n) {
    return ud.resolve(null).then(n).catch(od);
  } : Ts;
  function od(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function sd(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Na(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Na(r);
  }
  function fa(n) {
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
  function bs(n) {
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
  var Gi = Math.random().toString(36).slice(2), za = "__reactFiber$" + Gi, xs = "__reactProps$" + Gi, ni = "__reactContainer$" + Gi, cd = "__reactEvents$" + Gi, ly = "__reactListeners$" + Gi, uy = "__reactHandles$" + Gi;
  function qi(n) {
    var r = n[za];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ni] || l[za]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = bs(n); n !== null; ) {
          if (l = n[za]) return l;
          n = bs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function mi(n) {
    return n = n[za] || n[ni], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function oo(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(w(33));
  }
  function Oc(n) {
    return n[xs] || null;
  }
  var Ue = [], ri = -1;
  function Zt(n) {
    return { current: n };
  }
  function be(n) {
    0 > ri || (n.current = Ue[ri], Ue[ri] = null, ri--);
  }
  function Nt(n, r) {
    ri++, Ue[ri] = n.current, n.current = r;
  }
  var Ua = {}, Yn = Zt(Ua), Je = Zt(!1), Rr = Ua;
  function da(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ua;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Un(n) {
    return n = n.childContextTypes, n != null;
  }
  function Yr() {
    be(Je), be(Yn);
  }
  function yi(n, r, l) {
    if (Yn.current !== Ua) throw Error(w(168));
    Nt(Yn, r), Nt(Je, l);
  }
  function kl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(w(108, mt(n) || "Unknown", c));
    return oe({}, l, o);
  }
  function yu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ua, Rr = Yn.current, Nt(Yn, n), Nt(Je, Je.current), !0;
  }
  function Lv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(w(169));
    l ? (n = kl(n, r, Rr), o.__reactInternalMemoizedMergedChildContext = n, be(Je), be(Yn), Nt(Yn, n)) : be(Je), Nt(Je, l);
  }
  var Ki = null, Ol = !1, er = !1;
  function Lc(n) {
    Ki === null ? Ki = [n] : Ki.push(n);
  }
  function Mv(n) {
    Ol = !0, Lc(n);
  }
  function gi() {
    if (!er && Ki !== null) {
      er = !0;
      var n = 0, r = yt;
      try {
        var l = Ki;
        for (yt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ki = null, Ol = !1;
      } catch (c) {
        throw Ki !== null && (Ki = Ki.slice(n + 1)), Nn(zn, gi), c;
      } finally {
        yt = r, er = !1;
      }
    }
    return null;
  }
  var Aa = [], Ll = 0, ja = null, gu = 0, Qr = [], Wr = 0, ai = null, Gr = 1, tr = "";
  function Su(n, r) {
    Aa[Ll++] = gu, Aa[Ll++] = ja, ja = n, gu = r;
  }
  function Ml(n, r, l) {
    Qr[Wr++] = Gr, Qr[Wr++] = tr, Qr[Wr++] = ai, ai = n;
    var o = Gr;
    n = tr;
    var c = 32 - Cr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Cr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Gr = 1 << 32 - Cr(r) + c | l << c | o, tr = d + n;
    } else Gr = 1 << d | l << c | o, tr = n;
  }
  function Mc(n) {
    n.return !== null && (Su(n, 1), Ml(n, 1, 0));
  }
  function Nc(n) {
    for (; n === ja; ) ja = Aa[--Ll], Aa[Ll] = null, gu = Aa[--Ll], Aa[Ll] = null;
    for (; n === ai; ) ai = Qr[--Wr], Qr[Wr] = null, tr = Qr[--Wr], Qr[Wr] = null, Gr = Qr[--Wr], Qr[Wr] = null;
  }
  var pa = null, va = null, sn = !1, Fa = null;
  function fd(n, r) {
    var l = Ca(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function dd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, pa = n, va = fa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, pa = n, va = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ai !== null ? { id: Gr, overflow: tr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ca(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, pa = n, va = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function zc(n) {
    if (sn) {
      var r = va;
      if (r) {
        var l = r;
        if (!dd(n, r)) {
          if (pd(n)) throw Error(w(418));
          r = fa(l.nextSibling);
          var o = pa;
          r && dd(n, r) ? fd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, pa = n);
        }
      } else {
        if (pd(n)) throw Error(w(418));
        n.flags = n.flags & -4097 | 2, sn = !1, pa = n;
      }
    }
  }
  function vd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    pa = n;
  }
  function Uc(n) {
    if (n !== pa) return !1;
    if (!sn) return vd(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !mu(n.type, n.memoizedProps)), r && (r = va)) {
      if (pd(n)) throw Nv(), Error(w(418));
      for (; r; ) fd(n, r), r = fa(r.nextSibling);
    }
    if (vd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(w(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                va = fa(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        va = null;
      }
    } else va = pa ? fa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Nv() {
    for (var n = va; n; ) n = fa(n.nextSibling);
  }
  function so() {
    va = pa = null, sn = !1;
  }
  function An(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var oy = Fe.ReactCurrentBatchConfig;
  function Nl(n, r, l) {
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
  function co(n, r) {
    throw n = Object.prototype.toString.call(r), Error(w(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zl(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(O, x) {
      if (n) {
        var N = O.deletions;
        N === null ? (O.deletions = [x], O.flags |= 16) : N.push(x);
      }
    }
    function l(O, x) {
      if (!n) return null;
      for (; x !== null; ) r(O, x), x = x.sibling;
      return null;
    }
    function o(O, x) {
      for (O = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? O.set(x.key, x) : O.set(x.index, x), x = x.sibling;
      return O;
    }
    function c(O, x) {
      return O = Yl(O, x), O.index = 0, O.sibling = null, O;
    }
    function d(O, x, N) {
      return O.index = N, n ? (N = O.alternate, N !== null ? (N = N.index, N < x ? (O.flags |= 2, x) : N) : (O.flags |= 2, x)) : (O.flags |= 1048576, x);
    }
    function m(O) {
      return n && O.alternate === null && (O.flags |= 2), O;
    }
    function E(O, x, N, ee) {
      return x === null || x.tag !== 6 ? (x = Gd(N, O.mode, ee), x.return = O, x) : (x = c(x, N), x.return = O, x);
    }
    function T(O, x, N, ee) {
      var xe = N.type;
      return xe === ft ? G(O, x, N.props.children, ee, N.key) : x !== null && (x.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === _t && zl(xe) === x.type) ? (ee = c(x, N.props), ee.ref = Nl(O, x, N), ee.return = O, ee) : (ee = uf(N.type, N.key, N.props, null, O.mode, ee), ee.ref = Nl(O, x, N), ee.return = O, ee);
    }
    function j(O, x, N, ee) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = sf(N, O.mode, ee), x.return = O, x) : (x = c(x, N.children || []), x.return = O, x);
    }
    function G(O, x, N, ee, xe) {
      return x === null || x.tag !== 7 ? (x = zu(N, O.mode, ee, xe), x.return = O, x) : (x = c(x, N), x.return = O, x);
    }
    function K(O, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Gd("" + x, O.mode, N), x.return = O, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case xt:
            return N = uf(x.type, x.key, x.props, null, O.mode, N), N.ref = Nl(O, null, x), N.return = O, N;
          case Re:
            return x = sf(x, O.mode, N), x.return = O, x;
          case _t:
            var ee = x._init;
            return K(O, ee(x._payload), N);
        }
        if (dr(x) || ge(x)) return x = zu(x, O.mode, N, null), x.return = O, x;
        co(O, x);
      }
      return null;
    }
    function Q(O, x, N, ee) {
      var xe = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return xe !== null ? null : E(O, x, "" + N, ee);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case xt:
            return N.key === xe ? T(O, x, N, ee) : null;
          case Re:
            return N.key === xe ? j(O, x, N, ee) : null;
          case _t:
            return xe = N._init, Q(
              O,
              x,
              xe(N._payload),
              ee
            );
        }
        if (dr(N) || ge(N)) return xe !== null ? null : G(O, x, N, ee, null);
        co(O, N);
      }
      return null;
    }
    function fe(O, x, N, ee, xe) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") return O = O.get(N) || null, E(x, O, "" + ee, xe);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case xt:
            return O = O.get(ee.key === null ? N : ee.key) || null, T(x, O, ee, xe);
          case Re:
            return O = O.get(ee.key === null ? N : ee.key) || null, j(x, O, ee, xe);
          case _t:
            var Pe = ee._init;
            return fe(O, x, N, Pe(ee._payload), xe);
        }
        if (dr(ee) || ge(ee)) return O = O.get(N) || null, G(x, O, ee, xe, null);
        co(x, ee);
      }
      return null;
    }
    function Se(O, x, N, ee) {
      for (var xe = null, Pe = null, Ve = x, De = x = 0, xn = null; Ve !== null && De < N.length; De++) {
        Ve.index > De ? (xn = Ve, Ve = null) : xn = Ve.sibling;
        var Lt = Q(O, Ve, N[De], ee);
        if (Lt === null) {
          Ve === null && (Ve = xn);
          break;
        }
        n && Ve && Lt.alternate === null && r(O, Ve), x = d(Lt, x, De), Pe === null ? xe = Lt : Pe.sibling = Lt, Pe = Lt, Ve = xn;
      }
      if (De === N.length) return l(O, Ve), sn && Su(O, De), xe;
      if (Ve === null) {
        for (; De < N.length; De++) Ve = K(O, N[De], ee), Ve !== null && (x = d(Ve, x, De), Pe === null ? xe = Ve : Pe.sibling = Ve, Pe = Ve);
        return sn && Su(O, De), xe;
      }
      for (Ve = o(O, Ve); De < N.length; De++) xn = fe(Ve, O, De, N[De], ee), xn !== null && (n && xn.alternate !== null && Ve.delete(xn.key === null ? De : xn.key), x = d(xn, x, De), Pe === null ? xe = xn : Pe.sibling = xn, Pe = xn);
      return n && Ve.forEach(function(Ql) {
        return r(O, Ql);
      }), sn && Su(O, De), xe;
    }
    function Te(O, x, N, ee) {
      var xe = ge(N);
      if (typeof xe != "function") throw Error(w(150));
      if (N = xe.call(N), N == null) throw Error(w(151));
      for (var Pe = xe = null, Ve = x, De = x = 0, xn = null, Lt = N.next(); Ve !== null && !Lt.done; De++, Lt = N.next()) {
        Ve.index > De ? (xn = Ve, Ve = null) : xn = Ve.sibling;
        var Ql = Q(O, Ve, Lt.value, ee);
        if (Ql === null) {
          Ve === null && (Ve = xn);
          break;
        }
        n && Ve && Ql.alternate === null && r(O, Ve), x = d(Ql, x, De), Pe === null ? xe = Ql : Pe.sibling = Ql, Pe = Ql, Ve = xn;
      }
      if (Lt.done) return l(
        O,
        Ve
      ), sn && Su(O, De), xe;
      if (Ve === null) {
        for (; !Lt.done; De++, Lt = N.next()) Lt = K(O, Lt.value, ee), Lt !== null && (x = d(Lt, x, De), Pe === null ? xe = Lt : Pe.sibling = Lt, Pe = Lt);
        return sn && Su(O, De), xe;
      }
      for (Ve = o(O, Ve); !Lt.done; De++, Lt = N.next()) Lt = fe(Ve, O, De, Lt.value, ee), Lt !== null && (n && Lt.alternate !== null && Ve.delete(Lt.key === null ? De : Lt.key), x = d(Lt, x, De), Pe === null ? xe = Lt : Pe.sibling = Lt, Pe = Lt);
      return n && Ve.forEach(function(sh) {
        return r(O, sh);
      }), sn && Su(O, De), xe;
    }
    function On(O, x, N, ee) {
      if (typeof N == "object" && N !== null && N.type === ft && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case xt:
            e: {
              for (var xe = N.key, Pe = x; Pe !== null; ) {
                if (Pe.key === xe) {
                  if (xe = N.type, xe === ft) {
                    if (Pe.tag === 7) {
                      l(O, Pe.sibling), x = c(Pe, N.props.children), x.return = O, O = x;
                      break e;
                    }
                  } else if (Pe.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === _t && zl(xe) === Pe.type) {
                    l(O, Pe.sibling), x = c(Pe, N.props), x.ref = Nl(O, Pe, N), x.return = O, O = x;
                    break e;
                  }
                  l(O, Pe);
                  break;
                } else r(O, Pe);
                Pe = Pe.sibling;
              }
              N.type === ft ? (x = zu(N.props.children, O.mode, ee, N.key), x.return = O, O = x) : (ee = uf(N.type, N.key, N.props, null, O.mode, ee), ee.ref = Nl(O, x, N), ee.return = O, O = ee);
            }
            return m(O);
          case Re:
            e: {
              for (Pe = N.key; x !== null; ) {
                if (x.key === Pe) if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                  l(O, x.sibling), x = c(x, N.children || []), x.return = O, O = x;
                  break e;
                } else {
                  l(O, x);
                  break;
                }
                else r(O, x);
                x = x.sibling;
              }
              x = sf(N, O.mode, ee), x.return = O, O = x;
            }
            return m(O);
          case _t:
            return Pe = N._init, On(O, x, Pe(N._payload), ee);
        }
        if (dr(N)) return Se(O, x, N, ee);
        if (ge(N)) return Te(O, x, N, ee);
        co(O, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, x !== null && x.tag === 6 ? (l(O, x.sibling), x = c(x, N), x.return = O, O = x) : (l(O, x), x = Gd(N, O.mode, ee), x.return = O, O = x), m(O)) : l(O, x);
    }
    return On;
  }
  var Ul = zv(!0), Uv = zv(!1), Ac = Zt(null), Xi = null, kn = null, ue = null;
  function Ha() {
    ue = kn = Xi = null;
  }
  function ha(n) {
    var r = Ac.current;
    be(Ac), n._currentValue = r;
  }
  function hd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function fo(n, r) {
    Xi = n, ue = kn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Tr = !0), n.firstContext = null);
  }
  function Pa(n) {
    var r = n._currentValue;
    if (ue !== n) if (n = { context: n, memoizedValue: r, next: null }, kn === null) {
      if (Xi === null) throw Error(w(308));
      kn = n, Xi.dependencies = { lanes: 0, firstContext: n };
    } else kn = kn.next = n;
    return r;
  }
  var Eu = null;
  function md(n) {
    Eu === null ? Eu = [n] : Eu.push(n);
  }
  function Vn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, md(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Zi(n, o);
  }
  function Zi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Al = !1;
  function yd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function gd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ma(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ya(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ot & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Zi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, md(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Zi(n, l);
  }
  function jc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, as(n, l);
    }
  }
  function Av(n, r) {
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
  function Fc(n, r, l, o) {
    var c = n.updateQueue;
    Al = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, j = T.next;
      T.next = null, m === null ? d = j : m.next = j, m = T;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = j : E.next = j, G.lastBaseUpdate = T));
    }
    if (d !== null) {
      var K = c.baseState;
      m = 0, G = j = T = null, E = d;
      do {
        var Q = E.lane, fe = E.eventTime;
        if ((o & Q) === Q) {
          G !== null && (G = G.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Se = n, Te = E;
            switch (Q = r, fe = l, Te.tag) {
              case 1:
                if (Se = Te.payload, typeof Se == "function") {
                  K = Se.call(fe, K, Q);
                  break e;
                }
                K = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = Te.payload, Q = typeof Se == "function" ? Se.call(fe, K, Q) : Se, Q == null) break e;
                K = oe({}, K, Q);
                break e;
              case 2:
                Al = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [E] : Q.push(E));
        } else fe = { eventTime: fe, lane: Q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (j = G = fe, T = K) : G = G.next = fe, m |= Q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Q = E, E = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (T = K), c.baseState = T, c.firstBaseUpdate = j, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      _u |= m, n.lanes = m, n.memoizedState = K;
    }
  }
  function jv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(w(191, c));
        c.call(o);
      }
    }
  }
  var _s = {}, Si = Zt(_s), po = Zt(_s), vo = Zt(_s);
  function Cu(n) {
    if (n === _s) throw Error(w(174));
    return n;
  }
  function Sd(n, r) {
    switch (Nt(vo, r), Nt(po, n), Nt(Si, _s), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Sr(r, n);
    }
    be(Si), Nt(Si, r);
  }
  function ho() {
    be(Si), be(po), be(vo);
  }
  function Fv(n) {
    Cu(vo.current);
    var r = Cu(Si.current), l = Sr(r, n.type);
    r !== l && (Nt(po, n), Nt(Si, l));
  }
  function Ed(n) {
    po.current === n && (be(Si), be(po));
  }
  var gn = Zt(0);
  function Ds(n) {
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
  var Cd = [];
  function Hc() {
    for (var n = 0; n < Cd.length; n++) Cd[n]._workInProgressVersionPrimary = null;
    Cd.length = 0;
  }
  var Pc = Fe.ReactCurrentDispatcher, Rd = Fe.ReactCurrentBatchConfig, Ji = 0, ie = null, Ne = null, Xe = null, cn = !1, qr = !1, mo = 0, sy = 0;
  function yr() {
    throw Error(w(321));
  }
  function Td(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function ks(n, r, l, o, c, d) {
    if (Ji = d, ie = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Pc.current = n === null || n.memoizedState === null ? ga : cy, n = l(o, c), qr) {
      d = 0;
      do {
        if (qr = !1, mo = 0, 25 <= d) throw Error(w(301));
        d += 1, Xe = Ne = null, r.updateQueue = null, Pc.current = nn, n = l(o, c);
      } while (qr);
    }
    if (Pc.current = Ci, r = Ne !== null && Ne.next !== null, Ji = 0, Xe = Ne = ie = null, cn = !1, r) throw Error(w(300));
    return n;
  }
  function Y() {
    var n = mo !== 0;
    return mo = 0, n;
  }
  function Jt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xe === null ? ie.memoizedState = Xe = n : Xe = Xe.next = n, Xe;
  }
  function _e() {
    if (Ne === null) {
      var n = ie.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ne.next;
    var r = Xe === null ? ie.memoizedState : Xe.next;
    if (r !== null) Xe = r, Ne = n;
    else {
      if (n === null) throw Error(w(310));
      Ne = n, n = { memoizedState: Ne.memoizedState, baseState: Ne.baseState, baseQueue: Ne.baseQueue, queue: Ne.queue, next: null }, Xe === null ? ie.memoizedState = Xe = n : Xe = Xe.next = n;
    }
    return Xe;
  }
  function Ei(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ii(n) {
    var r = _e(), l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = Ne, c = o.baseQueue, d = l.pending;
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
        var G = j.lane;
        if ((Ji & G) === G) T !== null && (T = T.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), o = j.hasEagerState ? j.eagerState : n(o, j.action);
        else {
          var K = {
            lane: G,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          };
          T === null ? (E = T = K, m = o) : T = T.next = K, ie.lanes |= G, _u |= G;
        }
        j = j.next;
      } while (j !== null && j !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (Tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ie.lanes |= d, _u |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function el(n) {
    var r = _e(), l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (Tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function li() {
  }
  function yo(n, r) {
    var l = ie, o = _e(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tr = !0), o = o.queue, Os(Vc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Xe !== null && Xe.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, go.bind(null, l, o, c, r), void 0, null), Tn === null) throw Error(w(349));
      Ji & 30 || Ru(l, r, c);
    }
    return c;
  }
  function Ru(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ie.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function go(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Bc(r) && $c(n);
  }
  function Vc(n, r, l) {
    return l(function() {
      Bc(r) && $c(n);
    });
  }
  function Bc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function $c(n) {
    var r = Zi(n, 1);
    r !== null && Va(r, n, 1, -1);
  }
  function Ic(n) {
    var r = Jt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ei, lastRenderedState: n }, r.queue = n, n = n.dispatch = Hv.bind(null, ie, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ie.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Yc() {
    return _e().memoizedState;
  }
  function So(n, r, l, o) {
    var c = Jt();
    ie.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Eo(n, r, l, o) {
    var c = _e();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ne !== null) {
      var m = Ne.memoizedState;
      if (d = m.destroy, o !== null && Td(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    ie.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Qc(n, r) {
    return So(8390656, 8, n, r);
  }
  function Os(n, r) {
    return Eo(2048, 8, n, r);
  }
  function Wc(n, r) {
    return Eo(4, 2, n, r);
  }
  function Gc(n, r) {
    return Eo(4, 4, n, r);
  }
  function qc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Kc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eo(4, 4, qc.bind(null, r, n), l);
  }
  function Ls() {
  }
  function Ms(n, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Td(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function wu(n, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Td(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Xc(n, r, l) {
    return Ji & 21 ? (ti(l, r) || (l = uu(), ie.lanes |= l, _u |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tr = !0), n.memoizedState = l);
  }
  function wd(n, r) {
    var l = yt;
    yt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Rd.transition;
    Rd.transition = {};
    try {
      n(!1), r();
    } finally {
      yt = l, Rd.transition = o;
    }
  }
  function Zc() {
    return _e().memoizedState;
  }
  function bd(n, r, l) {
    var o = oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Co(n)) xd(r, l);
    else if (l = Vn(n, r, l, o), l !== null) {
      var c = Gn();
      Va(l, n, o, c), Ro(l, r, o);
    }
  }
  function Hv(n, r, l) {
    var o = oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Co(n)) xd(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, md(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Vn(n, r, c, o), l !== null && (c = Gn(), Va(l, n, o, c), Ro(l, r, o));
    }
  }
  function Co(n) {
    var r = n.alternate;
    return n === ie || r !== null && r === ie;
  }
  function xd(n, r) {
    qr = cn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ro(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, as(n, l);
    }
  }
  var Ci = { readContext: Pa, useCallback: yr, useContext: yr, useEffect: yr, useImperativeHandle: yr, useInsertionEffect: yr, useLayoutEffect: yr, useMemo: yr, useReducer: yr, useRef: yr, useState: yr, useDebugValue: yr, useDeferredValue: yr, useTransition: yr, useMutableSource: yr, useSyncExternalStore: yr, useId: yr, unstable_isNewReconciler: !1 }, ga = { readContext: Pa, useCallback: function(n, r) {
    return Jt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Pa, useEffect: Qc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, So(
      4194308,
      4,
      qc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return So(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return So(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Jt();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Jt();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = bd.bind(null, ie, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Jt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ic, useDebugValue: Ls, useDeferredValue: function(n) {
    return Jt().memoizedState = n;
  }, useTransition: function() {
    var n = Ic(!1), r = n[0];
    return n = wd.bind(null, n[1]), Jt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ie, c = Jt();
    if (sn) {
      if (l === void 0) throw Error(w(407));
      l = l();
    } else {
      if (l = r(), Tn === null) throw Error(w(349));
      Ji & 30 || Ru(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Qc(Vc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, go.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Jt(), r = Tn.identifierPrefix;
    if (sn) {
      var l = tr, o = Gr;
      l = (o & ~(1 << 32 - Cr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = mo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = sy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, cy = {
    readContext: Pa,
    useCallback: Ms,
    useContext: Pa,
    useEffect: Os,
    useImperativeHandle: Kc,
    useInsertionEffect: Wc,
    useLayoutEffect: Gc,
    useMemo: wu,
    useReducer: ii,
    useRef: Yc,
    useState: function() {
      return ii(Ei);
    },
    useDebugValue: Ls,
    useDeferredValue: function(n) {
      var r = _e();
      return Xc(r, Ne.memoizedState, n);
    },
    useTransition: function() {
      var n = ii(Ei)[0], r = _e().memoizedState;
      return [n, r];
    },
    useMutableSource: li,
    useSyncExternalStore: yo,
    useId: Zc,
    unstable_isNewReconciler: !1
  }, nn = { readContext: Pa, useCallback: Ms, useContext: Pa, useEffect: Os, useImperativeHandle: Kc, useInsertionEffect: Wc, useLayoutEffect: Gc, useMemo: wu, useReducer: el, useRef: Yc, useState: function() {
    return el(Ei);
  }, useDebugValue: Ls, useDeferredValue: function(n) {
    var r = _e();
    return Ne === null ? r.memoizedState = n : Xc(r, Ne.memoizedState, n);
  }, useTransition: function() {
    var n = el(Ei)[0], r = _e().memoizedState;
    return [n, r];
  }, useMutableSource: li, useSyncExternalStore: yo, useId: Zc, unstable_isNewReconciler: !1 };
  function Kr(n, r) {
    if (n && n.defaultProps) {
      r = oe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function To(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : oe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var jl = { isMounted: function(n) {
    return (n = n._reactInternals) ? q(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = oi(n), d = ma(o, c);
    d.payload = r, l != null && (d.callback = l), r = ya(n, d, c), r !== null && (Va(r, n, c, o), jc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = oi(n), d = ma(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = ya(n, d, c), r !== null && (Va(r, n, c, o), jc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Gn(), o = oi(n), c = ma(l, o);
    c.tag = 2, r != null && (c.callback = r), r = ya(n, c, o), r !== null && (Va(r, n, o, l), jc(r, n, o));
  } };
  function Ns(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !io(l, o) || !io(c, d) : !0;
  }
  function Pv(n, r, l) {
    var o = !1, c = Ua, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Pa(d) : (c = Un(r) ? Rr : Yn.current, o = r.contextTypes, d = (o = o != null) ? da(n, c) : Ua), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = jl, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Vv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && jl.enqueueReplaceState(r, r.state, null);
  }
  function _d(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, yd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Pa(d) : (d = Un(r) ? Rr : Yn.current, c.context = da(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (To(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && jl.enqueueReplaceState(c, c.state, null), Fc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function wo(n, r) {
    try {
      var l = "", o = r;
      do
        l += nt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function zs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Dd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var kd = typeof WeakMap == "function" ? WeakMap : Map;
  function Od(n, r, l) {
    l = ma(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      af || (af = !0, $d = o), Dd(n, r);
    }, l;
  }
  function Bv(n, r, l) {
    l = ma(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Dd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Dd(n, r), typeof o != "function" && (Vl === null ? Vl = /* @__PURE__ */ new Set([this]) : Vl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function $v(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new kd();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Sy.bind(null, n, r, l), r.then(n, n));
  }
  function Us(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Iv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ma(-1, 1), r.tag = 2, ya(l, r, 1))), l.lanes |= 1), n);
  }
  var Yv = Fe.ReactCurrentOwner, Tr = !1;
  function wr(n, r, l, o) {
    r.child = n === null ? Uv(r, null, l, o) : Ul(r, n.child, l, o);
  }
  function Fl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return fo(r, c), o = ks(n, r, l, o, d, c), l = Y(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ri(n, r, c)) : (sn && l && Mc(r), r.flags |= 1, wr(n, r, o, c), r.child);
  }
  function bo(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Hl(n, r, d, o, c)) : (n = uf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : io, l(m, o) && n.ref === r.ref) return Ri(n, r, c);
    }
    return r.flags |= 1, n = Yl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (io(d, o) && n.ref === r.ref) if (Tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tr = !0);
      else return r.lanes = n.lanes, Ri(n, r, c);
    }
    return Pl(n, r, l, o, c);
  }
  function Jc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Nt(xu, Dr), Dr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Nt(xu, Dr), Dr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Nt(xu, Dr), Dr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Nt(xu, Dr), Dr |= o;
    return wr(n, r, c, l), r.child;
  }
  function Xr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Pl(n, r, l, o, c) {
    var d = Un(l) ? Rr : Yn.current;
    return d = da(r, d), fo(r, c), l = ks(n, r, l, o, d, c), o = Y(), n !== null && !Tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ri(n, r, c)) : (sn && o && Mc(r), r.flags |= 1, wr(n, r, l, c), r.child);
  }
  function at(n, r, l, o, c) {
    if (Un(l)) {
      var d = !0;
      yu(r);
    } else d = !1;
    if (fo(r, c), r.stateNode === null) Fs(n, r), Pv(r, l, o), _d(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, j = l.contextType;
      typeof j == "object" && j !== null ? j = Pa(j) : (j = Un(l) ? Rr : Yn.current, j = da(r, j));
      var G = l.getDerivedStateFromProps, K = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      K || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== j) && Vv(r, m, o, j), Al = !1;
      var Q = r.memoizedState;
      m.state = Q, Fc(r, o, m, c), T = r.memoizedState, E !== o || Q !== T || Je.current || Al ? (typeof G == "function" && (To(r, l, G, o), T = r.memoizedState), (E = Al || Ns(r, l, E, o, Q, T, j)) ? (K || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = j, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, gd(n, r), E = r.memoizedProps, j = r.type === r.elementType ? E : Kr(r.type, E), m.props = j, K = r.pendingProps, Q = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Pa(T) : (T = Un(l) ? Rr : Yn.current, T = da(r, T));
      var fe = l.getDerivedStateFromProps;
      (G = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== K || Q !== T) && Vv(r, m, o, T), Al = !1, Q = r.memoizedState, m.state = Q, Fc(r, o, m, c);
      var Se = r.memoizedState;
      E !== K || Q !== Se || Je.current || Al ? (typeof fe == "function" && (To(r, l, fe, o), Se = r.memoizedState), (j = Al || Ns(r, l, j, o, Q, Se, T) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Se, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Se, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Se), m.props = o, m.state = Se, m.context = T, o = j) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return xo(n, r, l, o, d, c);
  }
  function xo(n, r, l, o, c, d) {
    Xr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Lv(r, l, !1), Ri(n, r, d);
    o = r.stateNode, Yv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ul(r, n.child, null, d), r.child = Ul(r, null, E, d)) : wr(n, r, E, d), r.memoizedState = o.state, c && Lv(r, l, !0), r.child;
  }
  function Ld(n) {
    var r = n.stateNode;
    r.pendingContext ? yi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && yi(n, r.context, !1), Sd(n, r.containerInfo);
  }
  function fy(n, r, l, o, c) {
    return so(), An(c), r.flags |= 256, wr(n, r, l, o), r.child;
  }
  var Md = { dehydrated: null, treeContext: null, retryLane: 0 };
  function As(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _o(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Nt(gn, c & 1), n === null)
      return zc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = of(m, o, 0, null), n = zu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = As(l), r.memoizedState = Md, n) : Nd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return dy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Yl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Yl(E, d) : (d = zu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? As(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Md, o;
    }
    return d = n.child, n = d.sibling, o = Yl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Nd(n, r) {
    return r = of({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function js(n, r, l, o) {
    return o !== null && An(o), Ul(r, n.child, null, l), n = Nd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function dy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = zs(Error(w(422))), js(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = of({ mode: "visible", children: o.children }, c, 0, null), d = zu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ul(r, n.child, null, m), r.child.memoizedState = As(m), r.memoizedState = Md, d);
    if (!(r.mode & 1)) return js(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(w(419)), o = zs(d, o, void 0), js(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Tr || E) {
      if (o = Tn, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Zi(n, c), Va(o, n, c, -1));
      }
      return Yd(), o = zs(Error(w(421))), js(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ey.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, va = fa(c.nextSibling), pa = r, sn = !0, Fa = null, n !== null && (Qr[Wr++] = Gr, Qr[Wr++] = tr, Qr[Wr++] = ai, Gr = n.id, tr = n.overflow, ai = r), r = Nd(r, o.children), r.flags |= 4096, r);
  }
  function ef(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), hd(n.return, r, l);
  }
  function zd(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ud(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (wr(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && ef(n, l, r);
        else if (n.tag === 19) ef(n, l, r);
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
    if (Nt(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Ds(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), zd(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Ds(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        zd(r, !0, l, null, d);
        break;
      case "together":
        zd(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Fs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ri(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), _u |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(w(153));
    if (r.child !== null) {
      for (n = r.child, l = Yl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Yl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Sa(n, r, l) {
    switch (r.tag) {
      case 3:
        Ld(r), so();
        break;
      case 5:
        Fv(r);
        break;
      case 1:
        Un(r.type) && yu(r);
        break;
      case 4:
        Sd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Nt(Ac, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Nt(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _o(n, r, l) : (Nt(gn, gn.current & 1), n = Ri(n, r, l), n !== null ? n.sibling : null);
        Nt(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ud(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Nt(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Jc(n, r, l);
    }
    return Ri(n, r, l);
  }
  var Ti, ui, Hs, Do;
  Ti = function(n, r) {
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
  }, ui = function() {
  }, Hs = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Cu(Si.current);
      var d = null;
      switch (l) {
        case "input":
          c = Cn(n, c), o = Cn(n, o), d = [];
          break;
        case "select":
          c = oe({}, c, { value: void 0 }), o = oe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ra(n, c), o = ra(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = kc);
      }
      Mt(l, o);
      var m;
      l = null;
      for (j in c) if (!o.hasOwnProperty(j) && c.hasOwnProperty(j) && c[j] != null) if (j === "style") {
        var E = c[j];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (Ye.hasOwnProperty(j) ? d || (d = []) : (d = d || []).push(j, null));
      for (j in o) {
        var T = o[j];
        if (E = c != null ? c[j] : void 0, o.hasOwnProperty(j) && T !== E && (T != null || E != null)) if (j === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          j,
          l
        )), l = T;
        else j === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(j, T)) : j === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(j, "" + T) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (Ye.hasOwnProperty(j) ? (T != null && j === "onScroll" && Xt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(j, T));
      }
      l && (d = d || []).push("style", l);
      var j = d;
      (r.updateQueue = j) && (r.flags |= 4);
    }
  }, Do = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function br(n, r) {
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
  function kt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function py(n, r, l) {
    var o = r.pendingProps;
    switch (Nc(r), r.tag) {
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
        return kt(r), null;
      case 1:
        return Un(r.type) && Yr(), kt(r), null;
      case 3:
        return o = r.stateNode, ho(), be(Je), be(Yn), Hc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (Ou(Fa), Fa = null))), ui(n, r), kt(r), null;
      case 5:
        Ed(r);
        var c = Cu(vo.current);
        if (l = r.type, n !== null && r.stateNode != null) Hs(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(w(166));
            return kt(r), null;
          }
          if (n = Cu(Si.current), Uc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[za] = r, o[xs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Xt("cancel", o), Xt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Xt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Qi.length; c++) Xt(Qi[c], o);
                break;
              case "source":
                Xt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Xt(
                  "error",
                  o
                ), Xt("load", o);
                break;
              case "details":
                Xt("toggle", o);
                break;
              case "input":
                Xn(o, d), Xt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Xt("invalid", o);
                break;
              case "textarea":
                aa(o, d), Xt("invalid", o);
            }
            Mt(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Rs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Rs(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ye.hasOwnProperty(m) && E != null && m === "onScroll" && Xt("scroll", o);
            }
            switch (l) {
              case "input":
                Kn(o), Mn(o, d, !0);
                break;
              case "textarea":
                Kn(o), ia(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = kc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Zn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[za] = r, n[xs] = o, Ti(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Dn(l, o), l) {
                case "dialog":
                  Xt("cancel", n), Xt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Xt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Qi.length; c++) Xt(Qi[c], n);
                  c = o;
                  break;
                case "source":
                  Xt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Xt(
                    "error",
                    n
                  ), Xt("load", n), c = o;
                  break;
                case "details":
                  Xt("toggle", n), c = o;
                  break;
                case "input":
                  Xn(n, o), c = Cn(n, o), Xt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = oe({}, o, { value: void 0 }), Xt("invalid", n);
                  break;
                case "textarea":
                  aa(n, o), c = ra(n, o), Xt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Mt(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? ot(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && la(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ua(n, T) : typeof T == "number" && ua(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ye.hasOwnProperty(d) ? T != null && d === "onScroll" && Xt("scroll", n) : T != null && Ze(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Kn(n), Mn(n, o, !1);
                  break;
                case "textarea":
                  Kn(n), ia(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + dt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pn(n, !!o.multiple, d, !1) : o.defaultValue != null && Pn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = kc);
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
        return kt(r), null;
      case 6:
        if (n && r.stateNode != null) Do(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(w(166));
          if (l = Cu(vo.current), Cu(Si.current), Uc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[za] = r, (d = o.nodeValue !== l) && (n = pa, n !== null)) switch (n.tag) {
              case 3:
                Rs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Rs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[za] = r, r.stateNode = o;
        }
        return kt(r), null;
      case 13:
        if (be(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && va !== null && r.mode & 1 && !(r.flags & 128)) Nv(), so(), r.flags |= 98560, d = !1;
          else if (d = Uc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(w(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(w(317));
              d[za] = r;
            } else so(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            kt(r), d = !1;
          } else Fa !== null && (Ou(Fa), Fa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? Bn === 0 && (Bn = 3) : Yd())), r.updateQueue !== null && (r.flags |= 4), kt(r), null);
      case 4:
        return ho(), ui(n, r), n === null && hi(r.stateNode.containerInfo), kt(r), null;
      case 10:
        return ha(r.type._context), kt(r), null;
      case 17:
        return Un(r.type) && Yr(), kt(r), null;
      case 19:
        if (be(gn), d = r.memoizedState, d === null) return kt(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) br(d, !1);
        else {
          if (Bn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Ds(n), m !== null) {
              for (r.flags |= 128, br(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Nt(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ht() > Du && (r.flags |= 128, o = !0, br(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Ds(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), br(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !sn) return kt(r), null;
          } else 2 * Ht() - d.renderingStartTime > Du && l !== 1073741824 && (r.flags |= 128, o = !0, br(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ht(), r.sibling = null, l = gn.current, Nt(gn, o ? l & 1 | 2 : l & 1), r) : (kt(r), null);
      case 22:
      case 23:
        return Mo(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Dr & 1073741824 && (kt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : kt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, r.tag));
  }
  function vy(n, r) {
    switch (Nc(r), r.tag) {
      case 1:
        return Un(r.type) && Yr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ho(), be(Je), be(Yn), Hc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ed(r), null;
      case 13:
        if (be(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(w(340));
          so();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return be(gn), null;
      case 4:
        return ho(), null;
      case 10:
        return ha(r.type._context), null;
      case 22:
      case 23:
        return Mo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var tf = !1, Qn = !1, Qv = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function bu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      bn(n, r, o);
    }
    else l.current = null;
  }
  function Ad(n, r, l) {
    try {
      l();
    } catch (o) {
      bn(n, r, o);
    }
  }
  var Wv = !1;
  function jd(n, r) {
    if (id = du, n = Sv(), ms(n)) {
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
          var m = 0, E = -1, T = -1, j = 0, G = 0, K = n, Q = null;
          t: for (; ; ) {
            for (var fe; K !== l || c !== 0 && K.nodeType !== 3 || (E = m + c), K !== d || o !== 0 && K.nodeType !== 3 || (T = m + o), K.nodeType === 3 && (m += K.nodeValue.length), (fe = K.firstChild) !== null; )
              Q = K, K = fe;
            for (; ; ) {
              if (K === n) break t;
              if (Q === l && ++j === c && (E = m), Q === d && ++G === o && (T = m), (fe = K.nextSibling) !== null) break;
              K = Q, Q = K.parentNode;
            }
            K = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ld = { focusedElem: n, selectionRange: l }, du = !1, me = r; me !== null; ) if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, me = n;
    else for (; me !== null; ) {
      r = me;
      try {
        var Se = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Se !== null) {
              var Te = Se.memoizedProps, On = Se.memoizedState, O = r.stateNode, x = O.getSnapshotBeforeUpdate(r.elementType === r.type ? Te : Kr(r.type, Te), On);
              O.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(w(163));
        }
      } catch (ee) {
        bn(r, r.return, ee);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, me = n;
        break;
      }
      me = r.return;
    }
    return Se = Wv, Wv = !1, Se;
  }
  function Ps(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ad(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Vs(n, r) {
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
  function Fd(n) {
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
  function Hd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Hd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[za], delete r[xs], delete r[cd], delete r[ly], delete r[uy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Gv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Pd(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Gv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Vd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = kc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Vd(n, r, l), n = n.sibling; n !== null; ) Vd(n, r, l), n = n.sibling;
  }
  function Bs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Bs(n, r, l), n = n.sibling; n !== null; ) Bs(n, r, l), n = n.sibling;
  }
  var jn = null, Wn = !1;
  function xr(n, r, l) {
    for (l = l.child; l !== null; ) tl(n, r, l), l = l.sibling;
  }
  function tl(n, r, l) {
    if (Vr && typeof Vr.onCommitFiberUnmount == "function") try {
      Vr.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Qn || bu(l, r);
      case 6:
        var o = jn, c = Wn;
        jn = null, xr(n, r, l), jn = o, Wn = c, jn !== null && (Wn ? (n = jn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : jn.removeChild(l.stateNode));
        break;
      case 18:
        jn !== null && (Wn ? (n = jn, l = l.stateNode, n.nodeType === 8 ? sd(n.parentNode, l) : n.nodeType === 1 && sd(n, l), Na(n)) : sd(jn, l.stateNode));
        break;
      case 4:
        o = jn, c = Wn, jn = l.stateNode.containerInfo, Wn = !0, xr(n, r, l), jn = o, Wn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ad(l, r, m), c = c.next;
          } while (c !== o);
        }
        xr(n, r, l);
        break;
      case 1:
        if (!Qn && (bu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          bn(l, r, E);
        }
        xr(n, r, l);
        break;
      case 21:
        xr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Qn = (o = Qn) || l.memoizedState !== null, xr(n, r, l), Qn = o) : xr(n, r, l);
        break;
      default:
        xr(n, r, l);
    }
  }
  function ko(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Qv()), r.forEach(function(o) {
        var c = Qd.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function _r(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              jn = E.stateNode, Wn = !1;
              break e;
            case 3:
              jn = E.stateNode.containerInfo, Wn = !0;
              break e;
            case 4:
              jn = E.stateNode.containerInfo, Wn = !0;
              break e;
          }
          E = E.return;
        }
        if (jn === null) throw Error(w(160));
        tl(d, m, c), jn = null, Wn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (j) {
        bn(c, r, j);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) nl(r, n), r = r.sibling;
  }
  function nl(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (_r(r, n), wi(n), o & 4) {
          try {
            Ps(3, n, n.return), Vs(3, n);
          } catch (Te) {
            bn(n, n.return, Te);
          }
          try {
            Ps(5, n, n.return);
          } catch (Te) {
            bn(n, n.return, Te);
          }
        }
        break;
      case 1:
        _r(r, n), wi(n), o & 512 && l !== null && bu(l, l.return);
        break;
      case 5:
        if (_r(r, n), wi(n), o & 512 && l !== null && bu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ua(c, "");
          } catch (Te) {
            bn(n, n.return, Te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Hn(c, d), Dn(E, m);
            var j = Dn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var G = T[m], K = T[m + 1];
              G === "style" ? ot(c, K) : G === "dangerouslySetInnerHTML" ? la(c, K) : G === "children" ? ua(c, K) : Ze(c, G, K, j);
            }
            switch (E) {
              case "input":
                _n(c, d);
                break;
              case "textarea":
                pr(c, d);
                break;
              case "select":
                var Q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Pn(c, !!d.multiple, fe, !1) : Q !== !!d.multiple && (d.defaultValue != null ? Pn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[xs] = d;
          } catch (Te) {
            bn(n, n.return, Te);
          }
        }
        break;
      case 6:
        if (_r(r, n), wi(n), o & 4) {
          if (n.stateNode === null) throw Error(w(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Te) {
            bn(n, n.return, Te);
          }
        }
        break;
      case 3:
        if (_r(r, n), wi(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Na(r.containerInfo);
        } catch (Te) {
          bn(n, n.return, Te);
        }
        break;
      case 4:
        _r(r, n), wi(n);
        break;
      case 13:
        _r(r, n), wi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Qs = Ht())), o & 4 && ko(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Qn = (j = Qn) || G, _r(r, n), Qn = j) : _r(r, n), wi(n), o & 8192) {
          if (j = n.memoizedState !== null, (n.stateNode.isHidden = j) && !G && n.mode & 1) for (me = n, G = n.child; G !== null; ) {
            for (K = me = G; me !== null; ) {
              switch (Q = me, fe = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ps(4, Q, Q.return);
                  break;
                case 1:
                  bu(Q, Q.return);
                  var Se = Q.stateNode;
                  if (typeof Se.componentWillUnmount == "function") {
                    o = Q, l = Q.return;
                    try {
                      r = o, Se.props = r.memoizedProps, Se.state = r.memoizedState, Se.componentWillUnmount();
                    } catch (Te) {
                      bn(o, l, Te);
                    }
                  }
                  break;
                case 5:
                  bu(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Oo(K);
                    continue;
                  }
              }
              fe !== null ? (fe.return = Q, me = fe) : Oo(K);
            }
            G = G.sibling;
          }
          e: for (G = null, K = n; ; ) {
            if (K.tag === 5) {
              if (G === null) {
                G = K;
                try {
                  c = K.stateNode, j ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = K.stateNode, T = K.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Oe("display", m));
                } catch (Te) {
                  bn(n, n.return, Te);
                }
              }
            } else if (K.tag === 6) {
              if (G === null) try {
                K.stateNode.nodeValue = j ? "" : K.memoizedProps;
              } catch (Te) {
                bn(n, n.return, Te);
              }
            } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === n) && K.child !== null) {
              K.child.return = K, K = K.child;
              continue;
            }
            if (K === n) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === n) break e;
              G === K && (G = null), K = K.return;
            }
            G === K && (G = null), K.sibling.return = K.return, K = K.sibling;
          }
        }
        break;
      case 19:
        _r(r, n), wi(n), o & 4 && ko(n);
        break;
      case 21:
        break;
      default:
        _r(
          r,
          n
        ), wi(n);
    }
  }
  function wi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Gv(l)) {
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
            o.flags & 32 && (ua(c, ""), o.flags &= -33);
            var d = Pd(n);
            Bs(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Pd(n);
            Vd(n, E, m);
            break;
          default:
            throw Error(w(161));
        }
      } catch (T) {
        bn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function hy(n, r, l) {
    me = n, qv(n);
  }
  function qv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || tf;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Qn;
          E = tf;
          var j = Qn;
          if (tf = m, (Qn = T) && !j) for (me = c; me !== null; ) m = me, T = m.child, m.tag === 22 && m.memoizedState !== null ? Kv(c) : T !== null ? (T.return = m, me = T) : Kv(c);
          for (; d !== null; ) me = d, qv(d), d = d.sibling;
          me = c, tf = E, Qn = j;
        }
        Bd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : Bd(n);
    }
  }
  function Bd(n) {
    for (; me !== null; ) {
      var r = me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Qn || Vs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Qn) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : Kr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && jv(r, d, o);
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
                jv(r, m, l);
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
                  var G = j.memoizedState;
                  if (G !== null) {
                    var K = G.dehydrated;
                    K !== null && Na(K);
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
          Qn || r.flags & 512 && Fd(r);
        } catch (Q) {
          bn(r, r.return, Q);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Oo(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Kv(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Vs(4, r);
            } catch (T) {
              bn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                bn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Fd(r);
            } catch (T) {
              bn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Fd(r);
            } catch (T) {
              bn(r, m, T);
            }
        }
      } catch (T) {
        bn(r, r.return, T);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var Xv = Math.ceil, nf = Fe.ReactCurrentDispatcher, Lo = Fe.ReactCurrentOwner, Ea = Fe.ReactCurrentBatchConfig, Ot = 0, Tn = null, vn = null, wn = 0, Dr = 0, xu = Zt(0), Bn = 0, $s = null, _u = 0, rf = 0, Is = 0, Ys = null, nr = null, Qs = 0, Du = 1 / 0, rl = null, af = !1, $d = null, Vl = null, Bl = !1, bi = null, $l = 0, Ws = 0, Id = null, Gs = -1, qs = 0;
  function Gn() {
    return Ot & 6 ? Ht() : Gs !== -1 ? Gs : Gs = Ht();
  }
  function oi(n) {
    return n.mode & 1 ? Ot & 2 && wn !== 0 ? wn & -wn : oy.transition !== null ? (qs === 0 && (qs = uu()), qs) : (n = yt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : os(n.type)), n) : 1;
  }
  function Va(n, r, l, o) {
    if (50 < Ws) throw Ws = 0, Id = null, Error(w(185));
    Cl(n, l, o), (!(Ot & 2) || n !== Tn) && (n === Tn && (!(Ot & 2) && (rf |= l), Bn === 4 && xi(n, wn)), rn(n, o), l === 1 && Ot === 0 && !(r.mode & 1) && (Du = Ht() + 500, Ol && gi()));
  }
  function rn(n, r) {
    var l = n.callbackNode;
    El(n, r);
    var o = di(n, n === Tn ? wn : 0);
    if (o === 0) l !== null && Kt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Kt(l), r === 1) n.tag === 0 ? Mv(lf.bind(null, n)) : Lc(lf.bind(null, n)), Ov(function() {
        !(Ot & 6) && gi();
      }), l = null;
      else {
        switch (is(o)) {
          case 1:
            l = zn;
            break;
          case 4:
            l = Pr;
            break;
          case 16:
            l = rt;
            break;
          case 536870912:
            l = ji;
            break;
          default:
            l = rt;
        }
        l = lh(l, ku.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ku(n, r) {
    if (Gs = -1, qs = 0, Ot & 6) throw Error(w(327));
    var l = n.callbackNode;
    if (zo() && n.callbackNode !== l) return null;
    var o = di(n, n === Tn ? wn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = No(n, o);
    else {
      r = o;
      var c = Ot;
      Ot |= 2;
      var d = Jv();
      (Tn !== n || wn !== r) && (rl = null, Du = Ht() + 500, Il(n, r));
      do
        try {
          gy();
          break;
        } catch (E) {
          Zv(n, E);
        }
      while (!0);
      Ha(), nf.current = d, Ot = c, vn !== null ? r = 0 : (Tn = null, wn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = pi(n), c !== 0 && (o = c, r = Ks(n, c))), r === 1) throw l = $s, Il(n, 0), xi(n, o), rn(n, Ht()), l;
      if (r === 6) xi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !my(c) && (r = No(n, o), r === 2 && (d = pi(n), d !== 0 && (o = d, r = Ks(n, d))), r === 1)) throw l = $s, Il(n, 0), xi(n, o), rn(n, Ht()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            Nu(n, nr, rl);
            break;
          case 3:
            if (xi(n, o), (o & 130023424) === o && (r = Qs + 500 - Ht(), 10 < r)) {
              if (di(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ts(Nu.bind(null, n, nr, rl), r);
              break;
            }
            Nu(n, nr, rl);
            break;
          case 4:
            if (xi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Cr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ht() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Xv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ts(Nu.bind(null, n, nr, rl), o);
              break;
            }
            Nu(n, nr, rl);
            break;
          case 5:
            Nu(n, nr, rl);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return rn(n, Ht()), n.callbackNode === l ? ku.bind(null, n) : null;
  }
  function Ks(n, r) {
    var l = Ys;
    return n.current.memoizedState.isDehydrated && (Il(n, r).flags |= 256), n = No(n, r), n !== 2 && (r = nr, nr = l, r !== null && Ou(r)), n;
  }
  function Ou(n) {
    nr === null ? nr = n : nr.push.apply(nr, n);
  }
  function my(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
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
  function xi(n, r) {
    for (r &= ~Is, r &= ~rf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Cr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function lf(n) {
    if (Ot & 6) throw Error(w(327));
    zo();
    var r = di(n, 0);
    if (!(r & 1)) return rn(n, Ht()), null;
    var l = No(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = pi(n);
      o !== 0 && (r = o, l = Ks(n, o));
    }
    if (l === 1) throw l = $s, Il(n, 0), xi(n, r), rn(n, Ht()), l;
    if (l === 6) throw Error(w(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, nr, rl), rn(n, Ht()), null;
  }
  function Lu(n, r) {
    var l = Ot;
    Ot |= 1;
    try {
      return n(r);
    } finally {
      Ot = l, Ot === 0 && (Du = Ht() + 500, Ol && gi());
    }
  }
  function Mu(n) {
    bi !== null && bi.tag === 0 && !(Ot & 6) && zo();
    var r = Ot;
    Ot |= 1;
    var l = Ea.transition, o = yt;
    try {
      if (Ea.transition = null, yt = 1, n) return n();
    } finally {
      yt = o, Ea.transition = l, Ot = r, !(Ot & 6) && gi();
    }
  }
  function Mo() {
    Dr = xu.current, be(xu);
  }
  function Il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ws(l)), vn !== null) for (l = vn.return; l !== null; ) {
      var o = l;
      switch (Nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Yr();
          break;
        case 3:
          ho(), be(Je), be(Yn), Hc();
          break;
        case 5:
          Ed(o);
          break;
        case 4:
          ho();
          break;
        case 13:
          be(gn);
          break;
        case 19:
          be(gn);
          break;
        case 10:
          ha(o.type._context);
          break;
        case 22:
        case 23:
          Mo();
      }
      l = l.return;
    }
    if (Tn = n, vn = n = Yl(n.current, null), wn = Dr = r, Bn = 0, $s = null, Is = rf = _u = 0, nr = Ys = null, Eu !== null) {
      for (r = 0; r < Eu.length; r++) if (l = Eu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Eu = null;
    }
    return n;
  }
  function Zv(n, r) {
    do {
      var l = vn;
      try {
        if (Ha(), Pc.current = Ci, cn) {
          for (var o = ie.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          cn = !1;
        }
        if (Ji = 0, Xe = Ne = ie = null, qr = !1, mo = 0, Lo.current = null, l === null || l.return === null) {
          Bn = 1, $s = r, vn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = wn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var j = T, G = E, K = G.tag;
            if (!(G.mode & 1) && (K === 0 || K === 11 || K === 15)) {
              var Q = G.alternate;
              Q ? (G.updateQueue = Q.updateQueue, G.memoizedState = Q.memoizedState, G.lanes = Q.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var fe = Us(m);
            if (fe !== null) {
              fe.flags &= -257, Iv(fe, m, E, d, r), fe.mode & 1 && $v(d, j, r), r = fe, T = j;
              var Se = r.updateQueue;
              if (Se === null) {
                var Te = /* @__PURE__ */ new Set();
                Te.add(T), r.updateQueue = Te;
              } else Se.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                $v(d, j, r), Yd();
                break e;
              }
              T = Error(w(426));
            }
          } else if (sn && E.mode & 1) {
            var On = Us(m);
            if (On !== null) {
              !(On.flags & 65536) && (On.flags |= 256), Iv(On, m, E, d, r), An(wo(T, E));
              break e;
            }
          }
          d = T = wo(T, E), Bn !== 4 && (Bn = 2), Ys === null ? Ys = [d] : Ys.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var O = Od(d, T, r);
                Av(d, O);
                break e;
              case 1:
                E = T;
                var x = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Vl === null || !Vl.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ee = Bv(d, E, r);
                  Av(d, ee);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        th(l);
      } catch (xe) {
        r = xe, vn === l && l !== null && (vn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Jv() {
    var n = nf.current;
    return nf.current = Ci, n === null ? Ci : n;
  }
  function Yd() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Tn === null || !(_u & 268435455) && !(rf & 268435455) || xi(Tn, wn);
  }
  function No(n, r) {
    var l = Ot;
    Ot |= 2;
    var o = Jv();
    (Tn !== n || wn !== r) && (rl = null, Il(n, r));
    do
      try {
        yy();
        break;
      } catch (c) {
        Zv(n, c);
      }
    while (!0);
    if (Ha(), Ot = l, nf.current = o, vn !== null) throw Error(w(261));
    return Tn = null, wn = 0, Bn;
  }
  function yy() {
    for (; vn !== null; ) eh(vn);
  }
  function gy() {
    for (; vn !== null && !pn(); ) eh(vn);
  }
  function eh(n) {
    var r = ih(n.alternate, n, Dr);
    n.memoizedProps = n.pendingProps, r === null ? th(n) : vn = r, Lo.current = null;
  }
  function th(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = vy(l, r), l !== null) {
          l.flags &= 32767, vn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, vn = null;
          return;
        }
      } else if (l = py(l, r, Dr), l !== null) {
        vn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        vn = r;
        return;
      }
      vn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Nu(n, r, l) {
    var o = yt, c = Ea.transition;
    try {
      Ea.transition = null, yt = 1, nh(n, r, l, o);
    } finally {
      Ea.transition = c, yt = o;
    }
    return null;
  }
  function nh(n, r, l, o) {
    do
      zo();
    while (bi !== null);
    if (Ot & 6) throw Error(w(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(w(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (rs(n, d), n === Tn && (vn = Tn = null, wn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Bl || (Bl = !0, lh(rt, function() {
      return zo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ea.transition, Ea.transition = null;
      var m = yt;
      yt = 1;
      var E = Ot;
      Ot |= 4, Lo.current = null, jd(n, l), nl(l, n), pu(ld), du = !!id, ld = id = null, n.current = l, hy(l), hr(), Ot = E, yt = m, Ea.transition = d;
    } else n.current = l;
    if (Bl && (Bl = !1, bi = n, $l = c), d = n.pendingLanes, d === 0 && (Vl = null), Jo(l.stateNode), rn(n, Ht()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (af) throw af = !1, n = $d, $d = null, n;
    return $l & 1 && n.tag !== 0 && zo(), d = n.pendingLanes, d & 1 ? n === Id ? Ws++ : (Ws = 0, Id = n) : Ws = 0, gi(), null;
  }
  function zo() {
    if (bi !== null) {
      var n = is($l), r = Ea.transition, l = yt;
      try {
        if (Ea.transition = null, yt = 16 > n ? 16 : n, bi === null) var o = !1;
        else {
          if (n = bi, bi = null, $l = 0, Ot & 6) throw Error(w(331));
          var c = Ot;
          for (Ot |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var j = E[T];
                  for (me = j; me !== null; ) {
                    var G = me;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ps(8, G, d);
                    }
                    var K = G.child;
                    if (K !== null) K.return = G, me = K;
                    else for (; me !== null; ) {
                      G = me;
                      var Q = G.sibling, fe = G.return;
                      if (Hd(G), G === j) {
                        me = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = fe, me = Q;
                        break;
                      }
                      me = fe;
                    }
                  }
                }
                var Se = d.alternate;
                if (Se !== null) {
                  var Te = Se.child;
                  if (Te !== null) {
                    Se.child = null;
                    do {
                      var On = Te.sibling;
                      Te.sibling = null, Te = On;
                    } while (Te !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, me = m;
            else e: for (; me !== null; ) {
              if (d = me, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ps(9, d, d.return);
              }
              var O = d.sibling;
              if (O !== null) {
                O.return = d.return, me = O;
                break e;
              }
              me = d.return;
            }
          }
          var x = n.current;
          for (me = x; me !== null; ) {
            m = me;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, me = N;
            else e: for (m = x; me !== null; ) {
              if (E = me, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vs(9, E);
                }
              } catch (xe) {
                bn(E, E.return, xe);
              }
              if (E === m) {
                me = null;
                break e;
              }
              var ee = E.sibling;
              if (ee !== null) {
                ee.return = E.return, me = ee;
                break e;
              }
              me = E.return;
            }
          }
          if (Ot = c, gi(), Vr && typeof Vr.onPostCommitFiberRoot == "function") try {
            Vr.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        yt = l, Ea.transition = r;
      }
    }
    return !1;
  }
  function rh(n, r, l) {
    r = wo(l, r), r = Od(n, r, 1), n = ya(n, r, 1), r = Gn(), n !== null && (Cl(n, 1, r), rn(n, r));
  }
  function bn(n, r, l) {
    if (n.tag === 3) rh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        rh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Vl === null || !Vl.has(o))) {
          n = wo(l, n), n = Bv(r, n, 1), r = ya(r, n, 1), n = Gn(), r !== null && (Cl(r, 1, n), rn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & l, Tn === n && (wn & l) === l && (Bn === 4 || Bn === 3 && (wn & 130023424) === wn && 500 > Ht() - Qs ? Il(n, 0) : Is |= l), rn(n, r);
  }
  function ah(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ku, Ku <<= 1, !(Ku & 130023424) && (Ku = 4194304)) : r = 1);
    var l = Gn();
    n = Zi(n, r), n !== null && (Cl(n, r, l), rn(n, l));
  }
  function Ey(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ah(n, l);
  }
  function Qd(n, r) {
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Je.current) Tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tr = !1, Sa(n, r, l);
      Tr = !!(n.flags & 131072);
    }
    else Tr = !1, sn && r.flags & 1048576 && Ml(r, gu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Fs(n, r), n = r.pendingProps;
        var c = da(r, Yn.current);
        fo(r, l), c = ks(null, r, o, n, c, l);
        var d = Y();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Un(o) ? (d = !0, yu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, yd(r), c.updater = jl, r.stateNode = c, c._reactInternals = r, _d(r, o, n, l), r = xo(null, r, o, !0, d, l)) : (r.tag = 0, sn && d && Mc(r), wr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Fs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ry(o), n = Kr(o, n), c) {
            case 0:
              r = Pl(null, r, o, n, l);
              break e;
            case 1:
              r = at(null, r, o, n, l);
              break e;
            case 11:
              r = Fl(null, r, o, n, l);
              break e;
            case 14:
              r = bo(null, r, o, Kr(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), Pl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), at(n, r, o, c, l);
      case 3:
        e: {
          if (Ld(r), n === null) throw Error(w(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, gd(n, r), Fc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = wo(Error(w(423)), r), r = fy(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = wo(Error(w(424)), r), r = fy(n, r, o, l, c);
            break e;
          } else for (va = fa(r.stateNode.containerInfo.firstChild), pa = r, sn = !0, Fa = null, l = Uv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (so(), o === c) {
              r = Ri(n, r, l);
              break e;
            }
            wr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fv(r), n === null && zc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, mu(o, c) ? m = null : d !== null && mu(o, d) && (r.flags |= 32), Xr(n, r), wr(n, r, m, l), r.child;
      case 6:
        return n === null && zc(r), null;
      case 13:
        return _o(n, r, l);
      case 4:
        return Sd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ul(r, null, o, l) : wr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), Fl(n, r, o, c, l);
      case 7:
        return wr(n, r, r.pendingProps, l), r.child;
      case 8:
        return wr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return wr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Nt(Ac, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !Je.current) {
              r = Ri(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = ma(-1, l & -l), T.tag = 2;
                    var j = d.updateQueue;
                    if (j !== null) {
                      j = j.shared;
                      var G = j.pending;
                      G === null ? T.next = T : (T.next = G.next, G.next = T), j.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), hd(
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
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), hd(m, l, r), m = d.sibling;
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
          wr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, fo(r, l), c = Pa(c), o = o(c), r.flags |= 1, wr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Kr(o, r.pendingProps), c = Kr(o.type, c), bo(n, r, o, c, l);
      case 15:
        return Hl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Kr(o, c), Fs(n, r), r.tag = 1, Un(o) ? (n = !0, yu(r)) : n = !1, fo(r, l), Pv(r, o, c), _d(r, o, c, l), xo(null, r, o, !0, n, l);
      case 19:
        return Ud(n, r, l);
      case 22:
        return Jc(n, r, l);
    }
    throw Error(w(156, r.tag));
  };
  function lh(n, r) {
    return Nn(n, r);
  }
  function Cy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ca(n, r, l, o) {
    return new Cy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ry(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ct) return 11;
      if (n === it) return 14;
    }
    return 2;
  }
  function Yl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ca(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function uf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ft:
        return zu(l.children, c, d, r);
      case qe:
        m = 8, c |= 8;
        break;
      case an:
        return n = Ca(12, l, r, c | 2), n.elementType = an, n.lanes = d, n;
      case ln:
        return n = Ca(13, l, r, c), n.elementType = ln, n.lanes = d, n;
      case Be:
        return n = Ca(19, l, r, c), n.elementType = Be, n.lanes = d, n;
      case lt:
        return of(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case En:
            m = 10;
            break e;
          case en:
            m = 9;
            break e;
          case Ct:
            m = 11;
            break e;
          case it:
            m = 14;
            break e;
          case _t:
            m = 16, o = null;
            break e;
        }
        throw Error(w(130, n == null ? n : typeof n, ""));
    }
    return r = Ca(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function zu(n, r, l, o) {
    return n = Ca(7, n, o, r), n.lanes = l, n;
  }
  function of(n, r, l, o) {
    return n = Ca(22, n, o, r), n.elementType = lt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Gd(n, r, l) {
    return n = Ca(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Ca(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function qd(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ou(0), this.expirationTimes = ou(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Uu(n, r, l, o, c, d, m, E, T) {
    return n = new qd(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ca(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yd(d), n;
  }
  function Ty(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Kd(n) {
    if (!n) return Ua;
    n = n._reactInternals;
    e: {
      if (q(n) !== n || n.tag !== 1) throw Error(w(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Un(r.type)) {
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
      if (Un(l)) return kl(n, l, r);
    }
    return r;
  }
  function Xd(n, r, l, o, c, d, m, E, T) {
    return n = Uu(l, o, !0, n, c, d, m, E, T), n.context = Kd(null), l = n.current, o = Gn(), c = oi(l), d = ma(o, c), d.callback = r ?? null, ya(l, d, c), n.current.lanes = c, Cl(n, c, o), rn(n, o), n;
  }
  function Xs(n, r, l, o) {
    var c = r.current, d = Gn(), m = oi(c);
    return l = Kd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ma(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ya(c, r, m), n !== null && (Va(n, c, m, d), jc(n, c, m)), m;
  }
  function cf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Zd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Jd(n, r) {
    Zd(n, r), (n = n.alternate) && Zd(n, r);
  }
  function wy() {
    return null;
  }
  var uh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ff(n) {
    this._internalRoot = n;
  }
  Zs.prototype.render = ff.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(w(409));
    Xs(n, r, null, null);
  }, Zs.prototype.unmount = ff.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mu(function() {
        Xs(null, n, null, null);
      }), r[ni] = null;
    }
  };
  function Zs(n) {
    this._internalRoot = n;
  }
  Zs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < un.length && r !== 0 && r < un[l].priority; l++) ;
      un.splice(l, 0, n), l === 0 && Ja(n);
    }
  };
  function df(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function al(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function oh() {
  }
  function by(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var j = cf(m);
          d.call(j);
        };
      }
      var m = Xd(r, o, n, 0, null, !1, !1, "", oh);
      return n._reactRootContainer = m, n[ni] = m.current, hi(n.nodeType === 8 ? n.parentNode : n), Mu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var j = cf(T);
        E.call(j);
      };
    }
    var T = Uu(n, 0, !1, null, null, !1, !1, "", oh);
    return n._reactRootContainer = T, n[ni] = T.current, hi(n.nodeType === 8 ? n.parentNode : n), Mu(function() {
      Xs(r, T, l, o);
    }), T;
  }
  function pf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = cf(m);
          E.call(T);
        };
      }
      Xs(r, m, n, c);
    } else m = by(l, r, n, c, o);
    return cf(m);
  }
  Xu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Fi(r.pendingLanes);
          l !== 0 && (as(r, l | 1), rn(r, Ht()), !(Ot & 6) && (Du = Ht() + 500, gi()));
        }
        break;
      case 13:
        Mu(function() {
          var o = Zi(n, 1);
          if (o !== null) {
            var c = Gn();
            Va(o, n, 1, c);
          }
        }), Jd(n, 1);
    }
  }, Rl = function(n) {
    if (n.tag === 13) {
      var r = Zi(n, 134217728);
      if (r !== null) {
        var l = Gn();
        Va(r, n, 134217728, l);
      }
      Jd(n, 134217728);
    }
  }, ls = function(n) {
    if (n.tag === 13) {
      var r = oi(n), l = Zi(n, r);
      if (l !== null) {
        var o = Gn();
        Va(l, n, r, o);
      }
      Jd(n, r);
    }
  }, gt = function() {
    return yt;
  }, Zu = function(n, r) {
    var l = yt;
    try {
      return yt = n, r();
    } finally {
      yt = l;
    }
  }, It = function(n, r, l) {
    switch (r) {
      case "input":
        if (_n(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Oc(o);
              if (!c) throw Error(w(90));
              Fr(o), _n(o, c);
            }
          }
        }
        break;
      case "textarea":
        pr(n, l);
        break;
      case "select":
        r = l.value, r != null && Pn(n, !!l.multiple, r, !1);
    }
  }, ml = Lu, au = Mu;
  var xy = { usingClientEntryPoint: !1, Events: [mi, oo, Oc, qa, Da, Lu] }, Js = { findFiberByHostInstance: qi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _y = { bundleType: Js.bundleType, version: Js.version, rendererPackageName: Js.rendererPackageName, rendererConfig: Js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Fe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = He(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Js.findFiberByHostInstance || wy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ec = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ec.isDisabled && ec.supportsFiber) try {
      Sl = ec.inject(_y), Vr = ec;
    } catch {
    }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, Wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!df(r)) throw Error(w(200));
    return Ty(n, r, null, l);
  }, Wa.createRoot = function(n, r) {
    if (!df(n)) throw Error(w(299));
    var l = !1, o = "", c = uh;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Uu(n, 1, !1, null, null, l, !1, o, c), n[ni] = r.current, hi(n.nodeType === 8 ? n.parentNode : n), new ff(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(w(188)) : (n = Object.keys(n).join(","), Error(w(268, n)));
    return n = He(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Mu(n);
  }, Wa.hydrate = function(n, r, l) {
    if (!al(r)) throw Error(w(200));
    return pf(null, n, r, !0, l);
  }, Wa.hydrateRoot = function(n, r, l) {
    if (!df(n)) throw Error(w(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = uh;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Xd(r, null, n, 1, l ?? null, c, !1, d, m), n[ni] = r.current, hi(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Zs(r);
  }, Wa.render = function(n, r, l) {
    if (!al(r)) throw Error(w(200));
    return pf(null, n, r, !1, l);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!al(n)) throw Error(w(40));
    return n._reactRootContainer ? (Mu(function() {
      pf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ni] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = Lu, Wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!al(l)) throw Error(w(200));
    if (n == null || n._reactInternals === void 0) throw Error(w(38));
    return pf(n, r, l, !1, o);
  }, Wa.version = "18.3.1-next-f1338f8080-20240426", Wa;
}
var Ga = {}, dR;
function ED() {
  if (dR) return Ga;
  dR = 1;
  var D = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return D.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var U = _a, w = gR(), ne = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ye = !1;
    function vt(e) {
      Ye = e;
    }
    function Qe(e) {
      if (!Ye) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        je("warn", e, a);
      }
    }
    function S(e) {
      if (!Ye) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        je("error", e, a);
      }
    }
    function je(e, t, a) {
      {
        var i = ne.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var we = 0, le = 1, Le = 2, te = 3, de = 4, Z = 5, pe = 6, We = 7, At = 8, Et = 9, Ze = 10, Fe = 11, xt = 12, Re = 13, ft = 14, qe = 15, an = 16, En = 17, en = 18, Ct = 19, ln = 21, Be = 22, it = 23, _t = 24, lt = 25, $ = !0, ge = !1, oe = !1, k = !1, I = !1, Me = !0, $e = !1, nt = !0, ut = !0, mt = !0, dt = !0, Rt = /* @__PURE__ */ new Set(), $t = {}, Kn = {};
    function Fr(e, t) {
      fr(e, t), fr(e + "Capture", t);
    }
    function fr(e, t) {
      $t[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), $t[e] = t;
      {
        var a = e.toLowerCase();
        Kn[a] = e, e === "onDoubleClick" && (Kn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Rt.add(t[i]);
    }
    var Cn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function _n(e) {
      try {
        return Mn(e), !1;
      } catch {
        return !0;
      }
    }
    function Mn(e) {
      return "" + e;
    }
    function gr(e, t) {
      if (_n(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Mn(e);
    }
    function dr(e) {
      if (_n(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Mn(e);
    }
    function Pn(e, t) {
      if (_n(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Mn(e);
    }
    function ra(e, t) {
      if (_n(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Mn(e);
    }
    function aa(e) {
      if (_n(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Mn(e);
    }
    function pr(e) {
      if (_n(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Mn(e);
    }
    var ia = 0, Zn = 1, Sr = 2, dn = 3, la = 4, ua = 5, oa = 6, ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Oe = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + ae + "][" + Oe + "]*$"), jt = {}, Mt = {};
    function Dn(e) {
      return Xn.call(Mt, e) ? !0 : Xn.call(jt, e) ? !1 : ot.test(e) ? (Mt[e] = !0, !0) : (jt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === ia : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function vr(e, t, a, i) {
      if (a !== null && a.type === ia)
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
    function It(e, t, a, i) {
      if (t === null || typeof t > "u" || vr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case dn:
            return !t;
          case la:
            return t === !1;
          case ua:
            return isNaN(t);
          case oa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function In(e) {
      return tn.hasOwnProperty(e) ? tn[e] : null;
    }
    function Ft(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Sr || t === dn || t === la, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var tn = {}, qa = [
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
    qa.forEach(function(e) {
      tn[e] = new Ft(
        e,
        ia,
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
      tn[t] = new Ft(
        t,
        Zn,
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
      tn[e] = new Ft(
        e,
        Sr,
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
      tn[e] = new Ft(
        e,
        Sr,
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
      tn[e] = new Ft(
        e,
        dn,
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
      tn[e] = new Ft(
        e,
        dn,
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
      tn[e] = new Ft(
        e,
        la,
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
      tn[e] = new Ft(
        e,
        oa,
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
      tn[e] = new Ft(
        e,
        ua,
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
    var Da = /[\-\:]([a-z])/g, ml = function(e) {
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
      var t = e.replace(Da, ml);
      tn[t] = new Ft(
        t,
        Zn,
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
      var t = e.replace(Da, ml);
      tn[t] = new Ft(
        t,
        Zn,
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
      var t = e.replace(Da, ml);
      tn[t] = new Ft(
        t,
        Zn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      tn[e] = new Ft(
        e,
        Zn,
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
    var au = "xlinkHref";
    tn[au] = new Ft(
      "xlinkHref",
      Zn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      tn[e] = new Ft(
        e,
        Zn,
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
    var iu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, yl = !1;
    function Ka(e) {
      !yl && iu.test(e) && (yl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Xa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        gr(a, t), i.sanitizeURL && Ka("" + a);
        var s = i.attributeName, f = null;
        if (i.type === la) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : It(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (It(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === dn)
            return a;
          f = e.getAttribute(s);
        }
        return It(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ka(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return gr(a, t), u === "" + a ? a : u;
      }
    }
    function zi(e, t, a, i) {
      var u = In(t);
      if (!hn(t, u, i)) {
        if (It(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (gr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === dn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, b;
          _ === dn || _ === la && a === !0 ? b = "" : (gr(a, y), b = "" + a, u.sanitizeURL && Ka(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var Er = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), sa = Symbol.for("react.fragment"), Ui = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), W = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), pt = Symbol.for("react.suspense_list"), Tt = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), st = Symbol.for("react.scope"), Nn = Symbol.for("react.debug_trace_mode"), Kt = Symbol.for("react.offscreen"), pn = Symbol.for("react.legacy_hidden"), hr = Symbol.for("react.cache"), Ht = Symbol.for("react.tracing_marker"), Oa = Symbol.iterator, zn = "@@iterator";
    function Pr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Oa && e[Oa] || e[zn];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, Ai = 0, ji, Sl, Vr, Jo, Cr, es, ts;
    function ns() {
    }
    ns.__reactDisabledLog = !0;
    function lu() {
      {
        if (Ai === 0) {
          ji = console.log, Sl = console.info, Vr = console.warn, Jo = console.error, Cr = console.group, es = console.groupCollapsed, ts = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ns,
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
        Ai++;
      }
    }
    function Ku() {
      {
        if (Ai--, Ai === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: ji
            }),
            info: rt({}, e, {
              value: Sl
            }),
            warn: rt({}, e, {
              value: Vr
            }),
            error: rt({}, e, {
              value: Jo
            }),
            group: rt({}, e, {
              value: Cr
            }),
            groupCollapsed: rt({}, e, {
              value: es
            }),
            groupEnd: rt({}, e, {
              value: ts
            })
          });
        }
        Ai < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fi = ne.ReactCurrentDispatcher, di;
    function La(e, t, a) {
      {
        if (di === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            di = i && i[1] || "";
          }
        return `
` + di + e;
      }
    }
    var El = !1, pi;
    {
      var uu = typeof WeakMap == "function" ? WeakMap : Map;
      pi = new uu();
    }
    function ou(e, t) {
      if (!e || El)
        return "";
      {
        var a = pi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      El = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Fi.current, Fi.current = null, lu();
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
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && pi.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        El = !1, Fi.current = s, Ku(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", A = b ? La(b) : "";
      return typeof e == "function" && pi.set(e, A), A;
    }
    function Cl(e, t, a) {
      return ou(e, !0);
    }
    function rs(e, t, a) {
      return ou(e, !1);
    }
    function as(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ou(e, as(e));
      if (typeof e == "string")
        return La(e);
      switch (e) {
        case ze:
          return La("Suspense");
        case pt:
          return La("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return rs(e.render);
          case Tt:
            return yt(e.type, t, a);
          case He: {
            var i = e, u = i._payload, s = i._init;
            try {
              return yt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function is(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return La(e.type);
        case an:
          return La("Lazy");
        case Re:
          return La("Suspense");
        case Ct:
          return La("SuspenseList");
        case we:
        case Le:
        case qe:
          return rs(e.type);
        case Fe:
          return rs(e.type.render);
        case le:
          return Cl(e.type);
        default:
          return "";
      }
    }
    function Xu(e) {
      try {
        var t = "", a = e;
        do
          t += is(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Rl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ls(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case sa:
          return "Fragment";
        case Hr:
          return "Portal";
        case gl:
          return "Profiler";
        case Ui:
          return "StrictMode";
        case ze:
          return "Suspense";
        case pt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            var t = e;
            return ls(t) + ".Consumer";
          case R:
            var a = e;
            return ls(a._context) + ".Provider";
          case q:
            return Rl(e, e.render, "ForwardRef");
          case Tt:
            var i = e.displayName || null;
            return i !== null ? i : gt(e.type) || "Memo";
          case He: {
            var u = e, s = u._payload, f = u._init;
            try {
              return gt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Zu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function su(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case Et:
          var i = a;
          return su(i) + ".Consumer";
        case Ze:
          var u = a;
          return su(u._context) + ".Provider";
        case en:
          return "DehydratedFragment";
        case Fe:
          return Zu(a, a.render, "ForwardRef");
        case We:
          return "Fragment";
        case Z:
          return a;
        case de:
          return "Portal";
        case te:
          return "Root";
        case pe:
          return "Text";
        case an:
          return gt(a);
        case At:
          return a === Ui ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case xt:
          return "Profiler";
        case ln:
          return "Scope";
        case Re:
          return "Suspense";
        case Ct:
          return "SuspenseList";
        case lt:
          return "TracingMarker";
        case le:
        case we:
        case En:
        case Le:
        case ft:
        case qe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Za = ne.ReactDebugCurrentFrame, mn = null, Br = !1;
    function Ma() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function Tl() {
      return mn === null ? "" : Xu(mn);
    }
    function un() {
      Za.getCurrentStack = null, mn = null, Br = !1;
    }
    function yn(e) {
      Za.getCurrentStack = e === null ? null : Tl, mn = e, Br = !1;
    }
    function us() {
      return mn;
    }
    function Jn(e) {
      Br = e;
    }
    function $r(e) {
      return "" + e;
    }
    function Ja(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return pr(e), e;
        default:
          return "";
      }
    }
    var Ju = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function cu(e, t) {
      Ju[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function fu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function wl(e) {
      return e._valueTracker;
    }
    function Na(e) {
      e._valueTracker = null;
    }
    function Hi(e) {
      var t = "";
      return e && (fu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function du(e) {
      var t = fu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      pr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            pr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            pr(p), i = "" + p;
          },
          stopTracking: function() {
            Na(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Pi(e) {
      wl(e) || (e._valueTracker = du(e));
    }
    function eo(e) {
      if (!e)
        return !1;
      var t = wl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Hi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function vi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Vi = !1, to = !1, os = !1, ei = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      cu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Vi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component", t.type), Vi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ja(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function z(e, t) {
      var a = e, i = t.checked;
      i != null && zi(a, "checked", i, !1);
    }
    function H(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !ei && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ei = !0), a._wrapperState.controlled && !i && !os && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), os = !0);
      }
      z(e, t);
      var u = Ja(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = $r(u)) : a.value !== $r(u) && (a.value = $r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ie(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ie(a, t.type, Ja(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function J(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = $r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ce(e, t) {
      var a = e;
      H(a, t), he(a, t);
    }
    function he(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        gr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = xh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            eo(f), H(f, p);
          }
        }
      }
    }
    function Ie(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || vi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = $r(e._wrapperState.initialValue) : e.defaultValue !== $r(a) && (e.defaultValue = $r(a)));
    }
    var ct = !1, Pt = !1, Yt = !1;
    function Qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? U.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pt || (Pt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Yt || (Yt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ct && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ct = !0);
    }
    function Wt(e, t) {
      t.value != null && e.setAttribute("value", $r(Ja(t.value)));
    }
    var on = Array.isArray;
    function Dt(e) {
      return on(e);
    }
    var bl;
    bl = !1;
    function ro() {
      var e = Ma();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ss = ["value", "defaultValue"];
    function cs(e) {
      {
        cu("select", e);
        for (var t = 0; t < ss.length; t++) {
          var a = ss[t];
          if (e[a] != null) {
            var i = Dt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ro()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ro());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = $r(Ja(a)), _ = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          _ === null && !u[b].disabled && (_ = u[b]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function fs(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function ds(e, t) {
      var a = e;
      cs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bl = !0);
    }
    function If(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Wm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function nv(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var rv = !1;
    function Yf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $r(a._wrapperState.initialValue)
      });
      return i;
    }
    function av(e, t) {
      var a = e;
      cu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !rv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component"), rv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Dt(u)) {
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
        initialValue: Ja(i)
      };
    }
    function iv(e, t) {
      var a = e, i = Ja(t.value), u = Ja(t.defaultValue);
      if (i != null) {
        var s = $r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = $r(u));
    }
    function Ec(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      iv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", qm = "http://www.w3.org/1998/Math/MathML", Cc = "http://www.w3.org/2000/svg";
    function Qf(e) {
      switch (e) {
        case "svg":
          return Cc;
        case "math":
          return qm;
        default:
          return $i;
      }
    }
    function Wf(e, t) {
      return e == null || e === $i ? Qf(t) : e === Cc && t === "foreignObject" ? $i : e;
    }
    var Km = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Rc, lv = Km(function(e, t) {
      if (e.namespaceURI === Cc && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ir = 1, Ii = 3, Rn = 8, ca = 9, Gf = 11, ps = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, uv = {
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
    }, ao = {
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
    function ov(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var sv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ao).forEach(function(e) {
      sv.forEach(function(t) {
        ao[ov(t, e)] = ao[e];
      });
    });
    function xl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ao.hasOwnProperty(e) && ao[e]) ? t + "px" : (ra(t, e), ("" + t).trim());
    }
    var Xm = /([A-Z])/g, Zm = /^ms-/;
    function Jm(e) {
      return e.replace(Xm, "-$1").toLowerCase().replace(Zm, "-ms-");
    }
    var qf = function() {
    };
    {
      var cv = /^(?:webkit|moz|o)[A-Z]/, vs = /^-ms-/, hs = /-(.)/g, fv = /;\s*$/, Yi = {}, Kf = {}, Xf = !1, Tc = !1, Zf = function(e) {
        return e.replace(hs, function(t, a) {
          return a.toUpperCase();
        });
      }, dv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zf(e.replace(vs, "ms-"))
        ));
      }, pv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vv = function(e, t) {
        Kf.hasOwnProperty(t) && Kf[t] || (Kf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fv, "")));
      }, ey = function(e, t) {
        Xf || (Xf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ty = function(e, t) {
        Tc || (Tc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      qf = function(e, t) {
        e.indexOf("-") > -1 ? dv(e) : cv.test(e) ? pv(e) : fv.test(t) && vv(e, t), typeof t == "number" && (isNaN(t) ? ey(e, t) : isFinite(t) || ty(e, t));
      };
    }
    var ny = qf;
    function ry(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Jm(i)) + ":", t += xl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ny(i, t[i]);
          var s = xl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ti(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function io(e) {
      var t = {};
      for (var a in e)
        for (var i = uv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function mv(e, t) {
      {
        if (!t)
          return;
        var a = io(e), i = io(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ti(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var yv = {
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
    }, gv = rt({
      menuitem: !0
    }, yv), Sv = "__html";
    function ms(e, t) {
      if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function pu(e, t) {
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
    var wc = {
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
    }, vu = {
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
    }, _l = {}, ys = new RegExp("^(aria)-[" + Oe + "]*$"), Jf = new RegExp("^(aria)[A-Z][" + Oe + "]*$");
    function Ev(e, t) {
      {
        if (Xn.call(_l, t) && _l[t])
          return !0;
        if (Jf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vu.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _l[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), _l[t] = !0, !0;
        }
        if (ys.test(t)) {
          var u = t.toLowerCase(), s = vu.hasOwnProperty(u) ? u : null;
          if (s == null)
            return _l[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), _l[t] = !0, !0;
        }
      }
      return !0;
    }
    function bc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Ev(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function lo(e, t) {
      pu(e, t) || bc(e, t);
    }
    var xc = !1;
    function Cv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !xc && (xc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var gs = function() {
    };
    {
      var mr = {}, ed = /^on./, Rv = /^on[^A-Z]/, Tv = new RegExp("^(aria)-[" + Oe + "]*$"), wv = new RegExp("^(aria)[A-Z][" + Oe + "]*$");
      gs = function(e, t, a, i) {
        if (Xn.call(mr, t) && mr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), mr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), mr[t] = !0, !0;
          if (ed.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), mr[t] = !0, !0;
        } else if (ed.test(t))
          return Rv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), mr[t] = !0, !0;
        if (Tv.test(t) || wv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), mr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), mr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), mr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), mr[t] = !0, !0;
        var v = In(t), y = v !== null && v.type === ia;
        if (wc.hasOwnProperty(u)) {
          var g = wc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), mr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), mr[t] = !0, !0;
        return typeof a == "boolean" && vr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), mr[t] = !0, !0) : y ? !0 : vr(t, a, v, !1) ? (mr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === dn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), mr[t] = !0), !0);
      };
    }
    var bv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = gs(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Dl(e, t, a) {
      pu(e, t) || bv(e, t, a);
    }
    var _c = 1, Ss = 2, Es = 4, ay = _c | Ss | Es, Qi = null;
    function iy(e) {
      Qi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Qi = e;
    }
    function xv() {
      Qi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Qi = null;
    }
    function _v(e) {
      return e === Qi;
    }
    function Xt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var Cs = null, Wi = null, hi = null;
    function td(e) {
      var t = jo(e);
      if (t) {
        if (typeof Cs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = xh(a);
          Cs(t.stateNode, t.type, i);
        }
      }
    }
    function nd(e) {
      Cs = e;
    }
    function uo(e) {
      Wi ? hi ? hi.push(e) : hi = [e] : Wi = e;
    }
    function Dc() {
      return Wi !== null || hi !== null;
    }
    function hu() {
      if (Wi) {
        var e = Wi, t = hi;
        if (Wi = null, hi = null, td(e), t)
          for (var a = 0; a < t.length; a++)
            td(t[a]);
      }
    }
    var rd = function(e, t) {
      return e(t);
    }, Dv = function() {
    }, ad = !1;
    function kv() {
      var e = Dc();
      e && (Dv(), hu());
    }
    function Rs(e, t, a) {
      if (ad)
        return e(t, a);
      ad = !0;
      try {
        return rd(e, t, a);
      } finally {
        ad = !1, kv();
      }
    }
    function kc(e, t, a) {
      rd = e, Dv = a;
    }
    function id(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ld(e, t, a) {
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
          return !!(a.disabled && id(t));
        default:
          return !1;
      }
    }
    function mu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = xh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ld(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Ts = !1;
    if (Cn)
      try {
        var ws = {};
        Object.defineProperty(ws, "passive", {
          get: function() {
            Ts = !0;
          }
        }), window.addEventListener("test", ws, ws), window.removeEventListener("test", ws, ws);
      } catch {
        Ts = !1;
      }
    function ud(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Ov = ud;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var od = document.createElement("react");
      Ov = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, b = !0, A = window.event, F = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          od.removeEventListener(V, Ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = A);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Ae() {
          _ = !0, P(), a.apply(i, se), b = !1;
        }
        var ke, bt = !1, ht = !1;
        function L(M) {
          if (ke = M.error, bt = !0, ke === null && M.colno === 0 && M.lineno === 0 && (ht = !0), M.defaultPrevented && ke != null && typeof ke == "object")
            try {
              ke._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), od.addEventListener(V, Ae, !1), g.initEvent(V, !1, !1), od.dispatchEvent(g), F && Object.defineProperty(window, "event", F), _ && b && (bt ? ht && (ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ke)), window.removeEventListener("error", L), !_)
          return P(), ud.apply(this, arguments);
      };
    }
    var sd = Ov, fa = !1, bs = null, Gi = !1, za = null, xs = {
      onError: function(e) {
        fa = !0, bs = e;
      }
    };
    function ni(e, t, a, i, u, s, f, p, v) {
      fa = !1, bs = null, sd.apply(xs, arguments);
    }
    function cd(e, t, a, i, u, s, f, p, v) {
      if (ni.apply(this, arguments), fa) {
        var y = qi();
        Gi || (Gi = !0, za = y);
      }
    }
    function ly() {
      if (Gi) {
        var e = za;
        throw Gi = !1, za = null, e;
      }
    }
    function uy() {
      return fa;
    }
    function qi() {
      if (fa) {
        var e = bs;
        return fa = !1, bs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mi(e) {
      return e._reactInternals;
    }
    function oo(e) {
      return e._reactInternals !== void 0;
    }
    function Oc(e, t) {
      e._reactInternals = t;
    }
    var Ue = (
      /*                      */
      0
    ), ri = (
      /*                */
      1
    ), Zt = (
      /*                    */
      2
    ), be = (
      /*                       */
      4
    ), Nt = (
      /*                */
      16
    ), Ua = (
      /*                 */
      32
    ), Yn = (
      /*                     */
      64
    ), Je = (
      /*                   */
      128
    ), Rr = (
      /*            */
      256
    ), da = (
      /*                          */
      512
    ), Un = (
      /*                     */
      1024
    ), Yr = (
      /*                      */
      2048
    ), yi = (
      /*                    */
      4096
    ), kl = (
      /*                   */
      8192
    ), yu = (
      /*             */
      16384
    ), Lv = Yr | be | Yn | da | Un | yu, Ki = (
      /*               */
      32767
    ), Ol = (
      /*                   */
      32768
    ), er = (
      /*                */
      65536
    ), Lc = (
      /* */
      131072
    ), Mv = (
      /*                       */
      1048576
    ), gi = (
      /*                    */
      2097152
    ), Aa = (
      /*                 */
      4194304
    ), Ll = (
      /*                */
      8388608
    ), ja = (
      /*               */
      16777216
    ), gu = (
      /*              */
      33554432
    ), Qr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      be | Un | 0
    ), Wr = Zt | be | Nt | Ua | da | yi | kl, ai = be | Yn | da | kl, Gr = Yr | Nt, tr = Aa | Ll | gi, Su = ne.ReactCurrentOwner;
    function Ml(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Zt | yi)) !== Ue && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Mc(e) {
      if (e.tag === Re) {
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
    function Nc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function pa(e) {
      return Ml(e) === e;
    }
    function va(e) {
      {
        var t = Su.current;
        if (t !== null && t.tag === le) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = mi(e);
      return u ? Ml(u) === u : !1;
    }
    function sn(e) {
      if (Ml(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Fa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ml(e);
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
              return sn(s), e;
            if (v === u)
              return sn(s), t;
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
    function fd(e) {
      var t = Fa(e);
      return t !== null ? dd(t) : null;
    }
    function dd(e) {
      if (e.tag === Z || e.tag === pe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = dd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function pd(e) {
      var t = Fa(e);
      return t !== null ? zc(t) : null;
    }
    function zc(e) {
      if (e.tag === Z || e.tag === pe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== de) {
          var a = zc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = w.unstable_scheduleCallback, Uc = w.unstable_cancelCallback, Nv = w.unstable_shouldYield, so = w.unstable_requestPaint, An = w.unstable_now, oy = w.unstable_getCurrentPriorityLevel, Nl = w.unstable_ImmediatePriority, co = w.unstable_UserBlockingPriority, zl = w.unstable_NormalPriority, zv = w.unstable_LowPriority, Ul = w.unstable_IdlePriority, Uv = w.unstable_yieldValue, Ac = w.unstable_setDisableYieldValue, Xi = null, kn = null, ue = null, Ha = !1, ha = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function hd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ut && (e = rt({}, e, {
          getLaneLabelMap: Al,
          injectProfilingHooks: Zi
        })), Xi = t.inject(e), kn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function fo(e, t) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(Xi, e, t);
        } catch (a) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Pa(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Je) === Je;
          if (mt) {
            var i;
            switch (t) {
              case Sa:
                i = Nl;
                break;
              case Ti:
                i = co;
                break;
              case ui:
                i = zl;
                break;
              case Hs:
                i = Ul;
                break;
              default:
                i = zl;
                break;
            }
            kn.onCommitFiberRoot(Xi, e, i, a);
          }
        } catch (u) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Eu(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(Xi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function md(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Xi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vn(e) {
      if (typeof Uv == "function" && (Ac(e), vt(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(Xi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Zi(e) {
      ue = e;
    }
    function Al() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ks; a++) {
          var i = cy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function yd(e) {
      ue !== null && typeof ue.markCommitStarted == "function" && ue.markCommitStarted(e);
    }
    function gd() {
      ue !== null && typeof ue.markCommitStopped == "function" && ue.markCommitStopped();
    }
    function ma(e) {
      ue !== null && typeof ue.markComponentRenderStarted == "function" && ue.markComponentRenderStarted(e);
    }
    function ya() {
      ue !== null && typeof ue.markComponentRenderStopped == "function" && ue.markComponentRenderStopped();
    }
    function jc(e) {
      ue !== null && typeof ue.markComponentPassiveEffectMountStarted == "function" && ue.markComponentPassiveEffectMountStarted(e);
    }
    function Av() {
      ue !== null && typeof ue.markComponentPassiveEffectMountStopped == "function" && ue.markComponentPassiveEffectMountStopped();
    }
    function Fc(e) {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStarted == "function" && ue.markComponentPassiveEffectUnmountStarted(e);
    }
    function jv() {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStopped == "function" && ue.markComponentPassiveEffectUnmountStopped();
    }
    function _s(e) {
      ue !== null && typeof ue.markComponentLayoutEffectMountStarted == "function" && ue.markComponentLayoutEffectMountStarted(e);
    }
    function Si() {
      ue !== null && typeof ue.markComponentLayoutEffectMountStopped == "function" && ue.markComponentLayoutEffectMountStopped();
    }
    function po(e) {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStarted == "function" && ue.markComponentLayoutEffectUnmountStarted(e);
    }
    function vo() {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStopped == "function" && ue.markComponentLayoutEffectUnmountStopped();
    }
    function Cu(e, t, a) {
      ue !== null && typeof ue.markComponentErrored == "function" && ue.markComponentErrored(e, t, a);
    }
    function Sd(e, t, a) {
      ue !== null && typeof ue.markComponentSuspended == "function" && ue.markComponentSuspended(e, t, a);
    }
    function ho(e) {
      ue !== null && typeof ue.markLayoutEffectsStarted == "function" && ue.markLayoutEffectsStarted(e);
    }
    function Fv() {
      ue !== null && typeof ue.markLayoutEffectsStopped == "function" && ue.markLayoutEffectsStopped();
    }
    function Ed(e) {
      ue !== null && typeof ue.markPassiveEffectsStarted == "function" && ue.markPassiveEffectsStarted(e);
    }
    function gn() {
      ue !== null && typeof ue.markPassiveEffectsStopped == "function" && ue.markPassiveEffectsStopped();
    }
    function Ds(e) {
      ue !== null && typeof ue.markRenderStarted == "function" && ue.markRenderStarted(e);
    }
    function Cd() {
      ue !== null && typeof ue.markRenderYielded == "function" && ue.markRenderYielded();
    }
    function Hc() {
      ue !== null && typeof ue.markRenderStopped == "function" && ue.markRenderStopped();
    }
    function Pc(e) {
      ue !== null && typeof ue.markRenderScheduled == "function" && ue.markRenderScheduled(e);
    }
    function Rd(e, t) {
      ue !== null && typeof ue.markForceUpdateScheduled == "function" && ue.markForceUpdateScheduled(e, t);
    }
    function Ji(e, t) {
      ue !== null && typeof ue.markStateUpdateScheduled == "function" && ue.markStateUpdateScheduled(e, t);
    }
    var ie = (
      /*                         */
      0
    ), Ne = (
      /*                 */
      1
    ), Xe = (
      /*                    */
      2
    ), cn = (
      /*               */
      8
    ), qr = (
      /*              */
      16
    ), mo = Math.clz32 ? Math.clz32 : Td, sy = Math.log, yr = Math.LN2;
    function Td(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (sy(t) / yr | 0) | 0;
    }
    var ks = 31, Y = (
      /*                        */
      0
    ), Jt = (
      /*                          */
      0
    ), _e = (
      /*                        */
      1
    ), Ei = (
      /*    */
      2
    ), ii = (
      /*             */
      4
    ), el = (
      /*            */
      8
    ), li = (
      /*                     */
      16
    ), yo = (
      /*                */
      32
    ), Ru = (
      /*                       */
      4194240
    ), go = (
      /*                        */
      64
    ), Vc = (
      /*                        */
      128
    ), Bc = (
      /*                        */
      256
    ), $c = (
      /*                        */
      512
    ), Ic = (
      /*                        */
      1024
    ), Tu = (
      /*                        */
      2048
    ), Yc = (
      /*                        */
      4096
    ), So = (
      /*                        */
      8192
    ), Eo = (
      /*                        */
      16384
    ), Qc = (
      /*                       */
      32768
    ), Os = (
      /*                       */
      65536
    ), Wc = (
      /*                       */
      131072
    ), Gc = (
      /*                       */
      262144
    ), qc = (
      /*                       */
      524288
    ), Kc = (
      /*                       */
      1048576
    ), Ls = (
      /*                       */
      2097152
    ), Ms = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Xc = (
      /*                             */
      8388608
    ), wd = (
      /*                             */
      16777216
    ), Zc = (
      /*                             */
      33554432
    ), bd = (
      /*                             */
      67108864
    ), Hv = wu, Co = (
      /*          */
      134217728
    ), xd = (
      /*                          */
      268435455
    ), Ro = (
      /*               */
      268435456
    ), Ci = (
      /*                        */
      536870912
    ), ga = (
      /*                   */
      1073741824
    );
    function cy(e) {
      {
        if (e & _e)
          return "Sync";
        if (e & Ei)
          return "InputContinuousHydration";
        if (e & ii)
          return "InputContinuous";
        if (e & el)
          return "DefaultHydration";
        if (e & li)
          return "Default";
        if (e & yo)
          return "TransitionHydration";
        if (e & Ru)
          return "Transition";
        if (e & Ms)
          return "Retry";
        if (e & Co)
          return "SelectiveHydration";
        if (e & Ro)
          return "IdleHydration";
        if (e & Ci)
          return "Idle";
        if (e & ga)
          return "Offscreen";
      }
    }
    var nn = -1, Kr = go, To = wu;
    function jl(e) {
      switch (Fl(e)) {
        case _e:
          return _e;
        case Ei:
          return Ei;
        case ii:
          return ii;
        case el:
          return el;
        case li:
          return li;
        case yo:
          return yo;
        case go:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Tu:
        case Yc:
        case So:
        case Eo:
        case Qc:
        case Os:
        case Wc:
        case Gc:
        case qc:
        case Kc:
        case Ls:
          return e & Ru;
        case wu:
        case Xc:
        case wd:
        case Zc:
        case bd:
          return e & Ms;
        case Co:
          return Co;
        case Ro:
          return Ro;
        case Ci:
          return Ci;
        case ga:
          return ga;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ns(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & xd;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = jl(p);
        else {
          var v = f & s;
          v !== Y && (i = jl(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = jl(y) : s !== Y && (i = jl(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = Fl(i), _ = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === li && (_ & Ru) !== Y
        )
          return t;
      }
      (i & ii) !== Y && (i |= a & li);
      var b = e.entangledLanes;
      if (b !== Y)
        for (var A = e.entanglements, F = i & b; F > 0; ) {
          var P = Hl(F), se = 1 << P;
          i |= A[P], F &= ~se;
        }
      return i;
    }
    function Pv(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var u = Hl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Vv(e, t) {
      switch (e) {
        case _e:
        case Ei:
        case ii:
          return t + 250;
        case el:
        case li:
        case yo:
        case go:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Tu:
        case Yc:
        case So:
        case Eo:
        case Qc:
        case Os:
        case Wc:
        case Gc:
        case qc:
        case Kc:
        case Ls:
          return t + 5e3;
        case wu:
        case Xc:
        case wd:
        case Zc:
        case bd:
          return nn;
        case Co:
        case Ro:
        case Ci:
        case ga:
          return nn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function _d(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p, y = s[p];
        y === nn ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Vv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function wo(e) {
      return jl(e.pendingLanes);
    }
    function zs(e) {
      var t = e.pendingLanes & ~ga;
      return t !== Y ? t : t & ga ? ga : Y;
    }
    function Dd(e) {
      return (e & _e) !== Y;
    }
    function kd(e) {
      return (e & xd) !== Y;
    }
    function Od(e) {
      return (e & Ms) === e;
    }
    function Bv(e) {
      var t = _e | ii | li;
      return (e & t) === Y;
    }
    function $v(e) {
      return (e & Ru) === e;
    }
    function Us(e, t) {
      var a = Ei | ii | el | li;
      return (t & a) !== Y;
    }
    function Iv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Yv(e) {
      return (e & Ru) !== Y;
    }
    function Tr() {
      var e = Kr;
      return Kr <<= 1, (Kr & Ru) === Y && (Kr = go), e;
    }
    function wr() {
      var e = To;
      return To <<= 1, (To & Ms) === Y && (To = wu), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function bo(e) {
      return Fl(e);
    }
    function Hl(e) {
      return 31 - mo(e);
    }
    function Jc(e) {
      return Hl(e);
    }
    function Xr(e, t) {
      return (e & t) !== Y;
    }
    function Pl(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function xo(e, t) {
      return e & ~t;
    }
    function Ld(e, t) {
      return e & t;
    }
    function fy(e) {
      return e;
    }
    function Md(e, t) {
      return e !== Jt && e < t ? e : t;
    }
    function As(e) {
      for (var t = [], a = 0; a < ks; a++)
        t.push(e);
      return t;
    }
    function _o(e, t, a) {
      e.pendingLanes |= t, t !== Ci && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = Jc(t);
      i[u] = a;
    }
    function Nd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Hl(i), s = 1 << u;
        a[u] = nn, i &= ~s;
      }
    }
    function js(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function dy(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p;
        i[p] = Y, u[p] = nn, s[p] = nn, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Hl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function zd(e, t) {
      var a = Fl(t), i;
      switch (a) {
        case ii:
          i = Ei;
          break;
        case li:
          i = el;
          break;
        case go:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Tu:
        case Yc:
        case So:
        case Eo:
        case Qc:
        case Os:
        case Wc:
        case Gc:
        case qc:
        case Kc:
        case Ls:
        case wu:
        case Xc:
        case wd:
        case Zc:
        case bd:
          i = yo;
          break;
        case Ci:
          i = Ro;
          break;
        default:
          i = Jt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Jt ? Jt : i;
    }
    function Ud(e, t, a) {
      if (ha)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Jc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Fs(e, t) {
      if (ha)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Jc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ri(e, t) {
      return null;
    }
    var Sa = _e, Ti = ii, ui = li, Hs = Ci, Do = Jt;
    function br() {
      return Do;
    }
    function kt(e) {
      Do = e;
    }
    function py(e, t) {
      var a = Do;
      try {
        return Do = e, t();
      } finally {
        Do = a;
      }
    }
    function vy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function tf(e, t) {
      return e > t ? e : t;
    }
    function Qn(e, t) {
      return e !== 0 && e < t;
    }
    function Qv(e) {
      var t = Fl(e);
      return Qn(Sa, t) ? Qn(Ti, t) ? kd(t) ? ui : Hs : Ti : Sa;
    }
    function me(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var bu;
    function Ad(e) {
      bu = e;
    }
    function Wv(e) {
      bu(e);
    }
    var jd;
    function Ps(e) {
      jd = e;
    }
    var Vs;
    function Fd(e) {
      Vs = e;
    }
    var Hd;
    function Gv(e) {
      Hd = e;
    }
    var Pd;
    function Vd(e) {
      Pd = e;
    }
    var Bs = !1, jn = [], Wn = null, xr = null, tl = null, ko = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), nl = [], wi = [
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
    function hy(e) {
      return wi.indexOf(e) > -1;
    }
    function qv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Bd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Wn = null;
          break;
        case "dragenter":
        case "dragleave":
          xr = null;
          break;
        case "mouseover":
        case "mouseout":
          tl = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ko.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          _r.delete(i);
          break;
        }
      }
    }
    function Oo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = qv(t, a, i, u, s);
        if (t !== null) {
          var p = jo(t);
          p !== null && jd(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Kv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Wn = Oo(Wn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return xr = Oo(xr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return tl = Oo(tl, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return ko.set(y, Oo(ko.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return _r.set(_, Oo(_r.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Xv(e) {
      var t = rc(e.target);
      if (t !== null) {
        var a = Ml(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = Mc(a);
            if (u !== null) {
              e.blockedOn = u, Pd(e.priority, function() {
                Vs(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (me(s)) {
              e.blockedOn = Nc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function nf(e) {
      for (var t = Hd(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < nl.length && Qn(t, nl[i].priority); i++)
        ;
      nl.splice(i, 0, a), i === 0 && Xv(a);
    }
    function Lo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Qs(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), xv();
        } else {
          var f = jo(i);
          return f !== null && jd(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ea(e, t, a) {
      Lo(e) && a.delete(t);
    }
    function Ot() {
      Bs = !1, Wn !== null && Lo(Wn) && (Wn = null), xr !== null && Lo(xr) && (xr = null), tl !== null && Lo(tl) && (tl = null), ko.forEach(Ea), _r.forEach(Ea);
    }
    function Tn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Bs || (Bs = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, Ot)));
    }
    function vn(e) {
      if (jn.length > 0) {
        Tn(jn[0], e);
        for (var t = 1; t < jn.length; t++) {
          var a = jn[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Wn !== null && Tn(Wn, e), xr !== null && Tn(xr, e), tl !== null && Tn(tl, e);
      var i = function(p) {
        return Tn(p, e);
      };
      ko.forEach(i), _r.forEach(i);
      for (var u = 0; u < nl.length; u++) {
        var s = nl[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; nl.length > 0; ) {
        var f = nl[0];
        if (f.blockedOn !== null)
          break;
        Xv(f), f.blockedOn === null && nl.shift();
      }
    }
    var wn = ne.ReactCurrentBatchConfig, Dr = !0;
    function xu(e) {
      Dr = !!e;
    }
    function Bn() {
      return Dr;
    }
    function $s(e, t, a) {
      var i = Du(t), u;
      switch (i) {
        case Sa:
          u = _u;
          break;
        case Ti:
          u = rf;
          break;
        case ui:
        default:
          u = Is;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function _u(e, t, a, i) {
      var u = br(), s = wn.transition;
      wn.transition = null;
      try {
        kt(Sa), Is(e, t, a, i);
      } finally {
        kt(u), wn.transition = s;
      }
    }
    function rf(e, t, a, i) {
      var u = br(), s = wn.transition;
      wn.transition = null;
      try {
        kt(Ti), Is(e, t, a, i);
      } finally {
        kt(u), wn.transition = s;
      }
    }
    function Is(e, t, a, i) {
      Dr && Ys(e, t, a, i);
    }
    function Ys(e, t, a, i) {
      var u = Qs(e, t, a, i);
      if (u === null) {
        zy(e, t, i, nr, a), Bd(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Bd(e, i), t & Es && hy(e)) {
        for (; u !== null; ) {
          var s = jo(u);
          s !== null && Wv(s);
          var f = Qs(e, t, a, i);
          if (f === null && zy(e, t, i, nr, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      zy(e, t, i, null, a);
    }
    var nr = null;
    function Qs(e, t, a, i) {
      nr = null;
      var u = Xt(i), s = rc(u);
      if (s !== null) {
        var f = Ml(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = Mc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (me(y))
              return Nc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return nr = s, null;
    }
    function Du(e) {
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
          return Sa;
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
          return Ti;
        case "message": {
          var t = oy();
          switch (t) {
            case Nl:
              return Sa;
            case co:
              return Ti;
            case zl:
            case zv:
              return ui;
            case Ul:
              return Hs;
            default:
              return ui;
          }
        }
        default:
          return ui;
      }
    }
    function rl(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function af(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function $d(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Vl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Bl = null, bi = null, $l = null;
    function Ws(e) {
      return Bl = e, bi = qs(), !0;
    }
    function Id() {
      Bl = null, bi = null, $l = null;
    }
    function Gs() {
      if ($l)
        return $l;
      var e, t = bi, a = t.length, i, u = qs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return $l = u.slice(e, p), $l;
    }
    function qs() {
      return "value" in Bl ? Bl.value : Bl.textContent;
    }
    function Gn(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function oi() {
      return !0;
    }
    function Va() {
      return !1;
    }
    function rn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = oi : this.isDefaultPrevented = Va, this.isPropagationStopped = Va, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = oi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = oi);
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
        isPersistent: oi
      }), t;
    }
    var ku = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ks = rn(ku), Ou = rt({}, ku, {
      view: 0,
      detail: 0
    }), my = rn(Ou), xi, lf, Lu;
    function Mu(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (xi = e.screenX - Lu.screenX, lf = e.screenY - Lu.screenY) : (xi = 0, lf = 0), Lu = e);
    }
    var Mo = rt({}, Ou, {
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
      getModifierState: Qd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Mu(e), xi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : lf;
      }
    }), Il = rn(Mo), Zv = rt({}, Mo, {
      dataTransfer: 0
    }), Jv = rn(Zv), Yd = rt({}, Ou, {
      relatedTarget: 0
    }), No = rn(Yd), yy = rt({}, ku, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), gy = rn(yy), eh = rt({}, ku, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), th = rn(eh), Nu = rt({}, ku, {
      data: 0
    }), nh = rn(Nu), zo = nh, rh = {
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
    }, bn = {
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
    function Sy(e) {
      if (e.key) {
        var t = rh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Gn(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? bn[e.keyCode] || "Unidentified" : "";
    }
    var ah = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Ey(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function Qd(e) {
      return Ey;
    }
    var ih = rt({}, Ou, {
      key: Sy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Qd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Gn(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Gn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lh = rn(ih), Cy = rt({}, Mo, {
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
    }), Ca = rn(Cy), Wd = rt({}, Ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Qd
    }), Ry = rn(Wd), Yl = rt({}, ku, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uf = rn(Yl), zu = rt({}, Mo, {
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
    }), of = rn(zu), Gd = [9, 13, 27, 32], sf = 229, qd = Cn && "CompositionEvent" in window, Uu = null;
    Cn && "documentMode" in document && (Uu = document.documentMode);
    var Ty = Cn && "TextEvent" in window && !Uu, Kd = Cn && (!qd || Uu && Uu > 8 && Uu <= 11), Xd = 32, Xs = String.fromCharCode(Xd);
    function cf() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zd = !1;
    function Jd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function wy(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function uh(e, t) {
      return e === "keydown" && t.keyCode === sf;
    }
    function ff(e, t) {
      switch (e) {
        case "keyup":
          return Gd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== sf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Zs(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function df(e) {
      return e.locale === "ko";
    }
    var al = !1;
    function oh(e, t, a, i, u) {
      var s, f;
      if (qd ? s = wy(t) : al ? ff(t, i) && (s = "onCompositionEnd") : uh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Kd && !df(i) && (!al && s === "onCompositionStart" ? al = Ws(u) : s === "onCompositionEnd" && al && (f = Gs()));
      var p = ph(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Zs(i);
          y !== null && (v.data = y);
        }
      }
    }
    function by(e, t) {
      switch (e) {
        case "compositionend":
          return Zs(t);
        case "keypress":
          var a = t.which;
          return a !== Xd ? null : (Zd = !0, Xs);
        case "textInput":
          var i = t.data;
          return i === Xs && Zd ? null : i;
        default:
          return null;
      }
    }
    function pf(e, t) {
      if (al) {
        if (e === "compositionend" || !qd && ff(e, t)) {
          var a = Gs();
          return Id(), al = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Jd(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Kd && !df(t) ? null : t.data;
        default:
          return null;
      }
    }
    function xy(e, t, a, i, u) {
      var s;
      if (Ty ? s = by(t, i) : s = pf(t, i), !s)
        return null;
      var f = ph(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new zo("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Js(e, t, a, i, u, s, f) {
      oh(e, t, a, i, u), xy(e, t, a, i, u);
    }
    var _y = {
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
    function ec(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!_y[e.type] : t === "textarea";
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
    function n(e) {
      if (!Cn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function r() {
      Fr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function l(e, t, a, i) {
      uo(i);
      var u = ph(t, "onChange");
      if (u.length > 0) {
        var s = new Ks("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var o = null, c = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      l(t, c, e, Xt(e)), Rs(E, t);
    }
    function E(e) {
      j0(e, 0);
    }
    function T(e) {
      var t = Sf(e);
      if (eo(t))
        return e;
    }
    function j(e, t) {
      if (e === "change")
        return t;
    }
    var G = !1;
    Cn && (G = n("input") && (!document.documentMode || document.documentMode > 9));
    function K(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", fe);
    }
    function Q() {
      o && (o.detachEvent("onpropertychange", fe), o = null, c = null);
    }
    function fe(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function Se(e, t, a) {
      e === "focusin" ? (Q(), K(t, a)) : e === "focusout" && Q();
    }
    function Te(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return T(c);
    }
    function On(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function O(e, t) {
      if (e === "click")
        return T(t);
    }
    function x(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function N(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ie(e, "number", e.value);
    }
    function ee(e, t, a, i, u, s, f) {
      var p = a ? Sf(a) : window, v, y;
      if (d(p) ? v = j : ec(p) ? G ? v = x : (v = Te, y = Se) : On(p) && (v = O), v) {
        var g = v(t, a);
        if (g) {
          l(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && N(p);
    }
    function xe() {
      fr("onMouseEnter", ["mouseout", "mouseover"]), fr("onMouseLeave", ["mouseout", "mouseover"]), fr("onPointerEnter", ["pointerout", "pointerover"]), fr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Pe(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !_v(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (rc(y) || pp(y)))
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
        var b, A;
        if (v) {
          var F = i.relatedTarget || i.toElement;
          if (b = a, A = F ? rc(F) : null, A !== null) {
            var P = Ml(A);
            (A !== P || A.tag !== Z && A.tag !== pe) && (A = null);
          }
        } else
          b = null, A = a;
        if (b !== A) {
          var se = Il, Ae = "onMouseLeave", ke = "onMouseEnter", bt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = Ca, Ae = "onPointerLeave", ke = "onPointerEnter", bt = "pointer");
          var ht = b == null ? g : Sf(b), L = A == null ? g : Sf(A), V = new se(Ae, bt + "leave", b, i, u);
          V.target = ht, V.relatedTarget = L;
          var M = null, X = rc(u);
          if (X === a) {
            var ye = new se(ke, bt + "enter", A, i, u);
            ye.target = L, ye.relatedTarget = ht, M = ye;
          }
          YR(e, V, M, b, A);
        }
      }
    }
    function Ve(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var De = typeof Object.is == "function" ? Object.is : Ve;
    function xn(e, t) {
      if (De(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Xn.call(t, s) || !De(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Lt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ql(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function sh(e, t) {
      for (var a = Lt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Lt(Ql(a));
      }
    }
    function wR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return bR(e, u, s, f, p);
    }
    function bR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var b = null; g === t && (a === 0 || g.nodeType === Ii) && (f = s + a), g === i && (u === 0 || g.nodeType === Ii) && (p = s + u), g.nodeType === Ii && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
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
    function xR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = sh(e, f), g = sh(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function b0(e) {
      return e && e.nodeType === Ii;
    }
    function x0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : b0(e) ? !1 : b0(t) ? x0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function _R(e) {
      return e && e.ownerDocument && x0(e.ownerDocument.documentElement, e);
    }
    function DR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function _0() {
      for (var e = window, t = vi(); t instanceof e.HTMLIFrameElement; ) {
        if (DR(t))
          e = t.contentWindow;
        else
          return t;
        t = vi(e.document);
      }
      return t;
    }
    function Dy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function kR() {
      var e = _0();
      return {
        focusedElem: e,
        selectionRange: Dy(e) ? LR(e) : null
      };
    }
    function OR(e) {
      var t = _0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && _R(a)) {
        i !== null && Dy(a) && MR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Ir && u.push({
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
    function LR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = wR(e), t || {
        start: 0,
        end: 0
      };
    }
    function MR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : xR(e, t);
    }
    var NR = Cn && "documentMode" in document && document.documentMode <= 11;
    function zR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var vf = null, ky = null, ep = null, Oy = !1;
    function UR(e) {
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
    function AR(e) {
      return e.window === e ? e.document : e.nodeType === ca ? e : e.ownerDocument;
    }
    function D0(e, t, a) {
      var i = AR(a);
      if (!(Oy || vf == null || vf !== vi(i))) {
        var u = UR(vf);
        if (!ep || !xn(ep, u)) {
          ep = u;
          var s = ph(ky, "onSelect");
          if (s.length > 0) {
            var f = new Ks("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = vf;
          }
        }
      }
    }
    function jR(e, t, a, i, u, s, f) {
      var p = a ? Sf(a) : window;
      switch (t) {
        case "focusin":
          (ec(p) || p.contentEditable === "true") && (vf = p, ky = a, ep = null);
          break;
        case "focusout":
          vf = null, ky = null, ep = null;
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
          if (NR)
            break;
        case "keydown":
        case "keyup":
          D0(e, i, u);
      }
    }
    function ch(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var hf = {
      animationend: ch("Animation", "AnimationEnd"),
      animationiteration: ch("Animation", "AnimationIteration"),
      animationstart: ch("Animation", "AnimationStart"),
      transitionend: ch("Transition", "TransitionEnd")
    }, Ly = {}, k0 = {};
    Cn && (k0 = document.createElement("div").style, "AnimationEvent" in window || (delete hf.animationend.animation, delete hf.animationiteration.animation, delete hf.animationstart.animation), "TransitionEvent" in window || delete hf.transitionend.transition);
    function fh(e) {
      if (Ly[e])
        return Ly[e];
      if (!hf[e])
        return e;
      var t = hf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in k0)
          return Ly[e] = t[a];
      return e;
    }
    var O0 = fh("animationend"), L0 = fh("animationiteration"), M0 = fh("animationstart"), N0 = fh("transitionend"), z0 = /* @__PURE__ */ new Map(), U0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Uo(e, t) {
      z0.set(e, t), Fr(t, [e]);
    }
    function FR() {
      for (var e = 0; e < U0.length; e++) {
        var t = U0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Uo(a, "on" + i);
      }
      Uo(O0, "onAnimationEnd"), Uo(L0, "onAnimationIteration"), Uo(M0, "onAnimationStart"), Uo("dblclick", "onDoubleClick"), Uo("focusin", "onFocus"), Uo("focusout", "onBlur"), Uo(N0, "onTransitionEnd");
    }
    function HR(e, t, a, i, u, s, f) {
      var p = z0.get(t);
      if (p !== void 0) {
        var v = Ks, y = t;
        switch (t) {
          case "keypress":
            if (Gn(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = lh;
            break;
          case "focusin":
            y = "focus", v = No;
            break;
          case "focusout":
            y = "blur", v = No;
            break;
          case "beforeblur":
          case "afterblur":
            v = No;
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
            v = Il;
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
            v = Ry;
            break;
          case O0:
          case L0:
          case M0:
            v = gy;
            break;
          case N0:
            v = uf;
            break;
          case "scroll":
            v = my;
            break;
          case "wheel":
            v = of;
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
            v = Ca;
            break;
        }
        var g = (s & Es) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = $R(a, p, i.type, g, _);
          if (b.length > 0) {
            var A = new v(p, y, null, i, u);
            e.push({
              event: A,
              listeners: b
            });
          }
        }
      }
    }
    FR(), xe(), r(), zR(), cf();
    function PR(e, t, a, i, u, s, f) {
      HR(e, t, a, i, u, s);
      var p = (s & ay) === 0;
      p && (Pe(e, t, a, i, u), ee(e, t, a, i, u), jR(e, t, a, i, u), Js(e, t, a, i, u));
    }
    var tp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], My = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tp));
    function A0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, cd(i, t, void 0, e), e.currentTarget = null;
    }
    function VR(e, t, a) {
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
          var g = t[y], _ = g.instance, b = g.currentTarget, A = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          A0(e, A, b), i = _;
        }
    }
    function j0(e, t) {
      for (var a = (t & Es) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        VR(s, f, a);
      }
      ly();
    }
    function BR(e, t, a, i, u) {
      var s = Xt(a), f = [];
      PR(f, e, i, a, s, t), j0(f, t);
    }
    function Sn(e, t) {
      My.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = gw(t), u = QR(e);
      i.has(u) || (F0(t, e, Ss, a), i.add(u));
    }
    function Ny(e, t, a) {
      My.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Es), F0(a, e, i, t);
    }
    var dh = "_reactListening" + Math.random().toString(36).slice(2);
    function np(e) {
      if (!e[dh]) {
        e[dh] = !0, Rt.forEach(function(a) {
          a !== "selectionchange" && (My.has(a) || Ny(a, !1, e), Ny(a, !0, e));
        });
        var t = e.nodeType === ca ? e : e.ownerDocument;
        t !== null && (t[dh] || (t[dh] = !0, Ny("selectionchange", !1, t)));
      }
    }
    function F0(e, t, a, i, u) {
      var s = $s(e, t, a), f = void 0;
      Ts && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? $d(e, t, s, f) : af(e, t, s) : f !== void 0 ? Vl(e, t, s, f) : rl(e, t, s);
    }
    function H0(e, t) {
      return e === t || e.nodeType === Rn && e.parentNode === t;
    }
    function zy(e, t, a, i, u) {
      var s = i;
      if (!(t & _c) && !(t & Ss)) {
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
                var A = rc(y);
                if (A === null)
                  return;
                var F = A.tag;
                if (F === Z || F === pe) {
                  p = s = A;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Rs(function() {
        return BR(e, t, a, s);
      });
    }
    function rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function $R(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, b = _.stateNode, A = _.tag;
        if (A === Z && b !== null && (g = b, p !== null)) {
          var F = mu(y, p);
          F != null && v.push(rp(y, F, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ph(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var v = f, y = mu(u, a);
          y != null && i.unshift(rp(u, y, v));
          var g = mu(u, t);
          g != null && i.push(rp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function IR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = mf(s))
        u++;
      for (var f = 0, p = i; p; p = mf(p))
        f++;
      for (; u - f > 0; )
        a = mf(a), u--;
      for (; f - u > 0; )
        i = mf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = mf(a), i = mf(i);
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
            var A = mu(p, s);
            A != null && f.unshift(rp(p, A, b));
          } else if (!u) {
            var F = mu(p, s);
            F != null && f.push(rp(p, F, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function YR(e, t, a, i, u) {
      var s = i && u ? IR(i, u) : null;
      i !== null && P0(e, t, i, s, !1), u !== null && a !== null && P0(e, a, u, s, !0);
    }
    function QR(e, t) {
      return e + "__bubble";
    }
    var Ba = !1, ap = "dangerouslySetInnerHTML", vh = "suppressContentEditableWarning", Ao = "suppressHydrationWarning", V0 = "autoFocus", tc = "children", nc = "style", hh = "__html", Uy, mh, ip, B0, yh, $0, I0;
    Uy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, mh = function(e, t) {
      lo(e, t), Cv(e, t), Dl(e, t, {
        registrationNameDependencies: $t,
        possibleRegistrationNames: Kn
      });
    }, $0 = Cn && !document.documentMode, ip = function(e, t, a) {
      if (!Ba) {
        var i = gh(a), u = gh(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, B0 = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, yh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, I0 = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var WR = /\r\n?/g, GR = /\u0000|\uFFFD/g;
    function gh(e) {
      aa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(WR, `
`).replace(GR, "");
    }
    function Sh(e, t, a, i) {
      var u = gh(t), s = gh(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && $))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Y0(e) {
      return e.nodeType === ca ? e : e.ownerDocument;
    }
    function qR() {
    }
    function Eh(e) {
      e.onclick = qR;
    }
    function KR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === nc)
            f && Object.freeze(f), hv(t, f);
          else if (s === ap) {
            var p = f ? f[hh] : void 0;
            p != null && lv(t, p);
          } else if (s === tc)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ps(t, f);
            } else typeof f == "number" && ps(t, "" + f);
          else s === vh || s === Ao || s === V0 || ($t.hasOwnProperty(s) ? f != null && (typeof f != "function" && yh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && zi(t, s, f, u));
        }
    }
    function XR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === nc ? hv(e, f) : s === ap ? lv(e, f) : s === tc ? ps(e, f) : zi(e, s, f, i);
      }
    }
    function ZR(e, t, a, i) {
      var u, s = Y0(a), f, p = i;
      if (p === $i && (p = Qf(e)), p === $i) {
        if (u = pu(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Xn.call(Uy, e) && (Uy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function JR(e, t) {
      return Y0(t).createTextNode(e);
    }
    function eT(e, t, a, i) {
      var u = pu(t, a);
      mh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < tp.length; f++)
            Sn(tp[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          Qt(e, a), s = a;
          break;
        case "select":
          ds(e, a), s = fs(e, a), Sn("invalid", e);
          break;
        case "textarea":
          av(e, a), s = Yf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ms(t, s), KR(t, e, i, s, u), t) {
        case "input":
          Pi(e), J(e, a, !1);
          break;
        case "textarea":
          Pi(e), Ec(e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          If(e, a);
          break;
        default:
          typeof s.onClick == "function" && Eh(e);
          break;
      }
    }
    function tT(e, t, a, i, u) {
      mh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = fs(e, a), p = fs(e, i), s = [];
          break;
        case "textarea":
          f = Yf(e, a), p = Yf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Eh(e);
          break;
      }
      ms(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === nc) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === ap || v === tc || v === vh || v === Ao || v === V0 || ($t.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], A = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === A || b == null && A == null))
          if (v === nc)
            if (b && Object.freeze(b), A) {
              for (y in A)
                A.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && A[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === ap) {
            var F = b ? b[hh] : void 0, P = A ? A[hh] : void 0;
            F != null && P !== F && (s = s || []).push(v, F);
          } else v === tc ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === vh || v === Ao || ($t.hasOwnProperty(v) ? (b != null && (typeof b != "function" && yh(v, b), v === "onScroll" && Sn("scroll", e)), !s && A !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (mv(g, p[nc]), (s = s || []).push(nc, g)), s;
    }
    function nT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && z(e, u);
      var s = pu(a, i), f = pu(a, u);
      switch (XR(e, t, s, f), a) {
        case "input":
          H(e, u);
          break;
        case "textarea":
          iv(e, u);
          break;
        case "select":
          Wm(e, u);
          break;
      }
    }
    function rT(e) {
      {
        var t = e.toLowerCase();
        return wc.hasOwnProperty(t) && wc[t] || null;
      }
    }
    function aT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = pu(t, a), mh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < tp.length; y++)
            Sn(tp[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          ds(e, a), Sn("invalid", e);
          break;
        case "textarea":
          av(e, a), Sn("invalid", e);
          break;
      }
      ms(t, a);
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
      var A = null;
      for (var F in a)
        if (a.hasOwnProperty(F)) {
          var P = a[F];
          if (F === tc)
            typeof P == "string" ? e.textContent !== P && (a[Ao] !== !0 && Sh(e.textContent, P, s, f), A = [tc, P]) : typeof P == "number" && e.textContent !== "" + P && (a[Ao] !== !0 && Sh(e.textContent, P, s, f), A = [tc, "" + P]);
          else if ($t.hasOwnProperty(F))
            P != null && (typeof P != "function" && yh(F, P), F === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Ae = p && $e ? null : In(F);
            if (a[Ao] !== !0) {
              if (!(F === vh || F === Ao || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              F === "value" || F === "checked" || F === "selected")) {
                if (F === ap) {
                  var ke = e.innerHTML, bt = P ? P[hh] : void 0;
                  if (bt != null) {
                    var ht = I0(e, bt);
                    ht !== ke && ip(F, ke, ht);
                  }
                } else if (F === nc) {
                  if (v.delete(F), $0) {
                    var L = ry(P);
                    se = e.getAttribute("style"), L !== se && ip(F, se, L);
                  }
                } else if (p && !$e)
                  v.delete(F.toLowerCase()), se = ka(e, F, P), P !== se && ip(F, se, P);
                else if (!hn(F, Ae, p) && !It(F, P, Ae, p)) {
                  var V = !1;
                  if (Ae !== null)
                    v.delete(Ae.attributeName), se = Xa(e, F, P, Ae);
                  else {
                    var M = i;
                    if (M === $i && (M = Qf(t)), M === $i)
                      v.delete(F.toLowerCase());
                    else {
                      var X = rT(F);
                      X !== null && X !== F && (V = !0, v.delete(X)), v.delete(F);
                    }
                    se = ka(e, F, P);
                  }
                  var ye = $e;
                  !ye && P !== se && !V && ip(F, se, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Ao] !== !0 && B0(v), t) {
        case "input":
          Pi(e), J(e, a, !0);
          break;
        case "textarea":
          Pi(e), Ec(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Eh(e);
          break;
      }
      return A;
    }
    function iT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ay(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function jy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Hy(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function lT(e, t, a) {
      switch (t) {
        case "input":
          Ce(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          nv(e, a);
          return;
      }
    }
    var lp = function() {
    }, up = function() {
    };
    {
      var uT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Q0 = [
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
      ], oT = Q0.concat(["button"]), sT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], W0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      up = function(e, t) {
        var a = rt({}, e || W0), i = {
          tag: t
        };
        return Q0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), oT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), uT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var cT = function(e, t) {
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
            return sT.indexOf(t) === -1;
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
      }, fT = function(e, t) {
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
      lp = function(e, t, a) {
        a = a || W0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = cT(e, u) ? null : i, f = s ? null : fT(e, a), p = s || f;
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
    var Ch = "suppressHydrationWarning", Rh = "$", Th = "/$", op = "$?", sp = "$!", dT = "style", Py = null, Vy = null;
    function pT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ca:
        case Gf: {
          t = i === ca ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Wf(null, "");
          break;
        }
        default: {
          var s = i === Rn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Wf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = up(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function vT(e, t, a) {
      {
        var i = e, u = Wf(i.namespace, t), s = up(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function nk(e) {
      return e;
    }
    function hT(e) {
      Py = Bn(), Vy = kR();
      var t = null;
      return xu(!1), t;
    }
    function mT(e) {
      OR(Vy), xu(Py), Py = null, Vy = null;
    }
    function yT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (lp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = up(f.ancestorInfo, e);
          lp(null, p, v);
        }
        s = f.namespace;
      }
      var y = ZR(e, t, a, s);
      return dp(u, y), qy(y, t), y;
    }
    function gT(e, t) {
      e.appendChild(t);
    }
    function ST(e, t, a, i, u) {
      switch (eT(e, t, a, i), t) {
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
    function ET(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = up(f.ancestorInfo, t);
          lp(null, p, v);
        }
      }
      return tT(e, t, a, i);
    }
    function By(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function CT(e, t, a, i) {
      {
        var u = a;
        lp(null, e, u.ancestorInfo);
      }
      var s = JR(e, t);
      return dp(i, s), s;
    }
    function RT() {
      var e = window.event;
      return e === void 0 ? ui : Du(e.type);
    }
    var $y = typeof setTimeout == "function" ? setTimeout : void 0, TT = typeof clearTimeout == "function" ? clearTimeout : void 0, Iy = -1, q0 = typeof Promise == "function" ? Promise : void 0, wT = typeof queueMicrotask == "function" ? queueMicrotask : typeof q0 < "u" ? function(e) {
      return q0.resolve(null).then(e).catch(bT);
    } : $y;
    function bT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function xT(e, t, a, i) {
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
    function _T(e, t, a, i, u, s) {
      nT(e, t, a, i, u), qy(e, u);
    }
    function K0(e) {
      ps(e, "");
    }
    function DT(e, t, a) {
      e.nodeValue = a;
    }
    function kT(e, t) {
      e.appendChild(t);
    }
    function OT(e, t) {
      var a;
      e.nodeType === Rn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Eh(a);
    }
    function LT(e, t, a) {
      e.insertBefore(t, a);
    }
    function MT(e, t, a) {
      e.nodeType === Rn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function NT(e, t) {
      e.removeChild(t);
    }
    function zT(e, t) {
      e.nodeType === Rn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Yy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Rn) {
          var s = u.data;
          if (s === Th)
            if (i === 0) {
              e.removeChild(u), vn(t);
              return;
            } else
              i--;
          else (s === Rh || s === op || s === sp) && i++;
        }
        a = u;
      } while (a);
      vn(t);
    }
    function UT(e, t) {
      e.nodeType === Rn ? Yy(e.parentNode, t) : e.nodeType === Ir && Yy(e, t), vn(e);
    }
    function AT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function jT(e) {
      e.nodeValue = "";
    }
    function FT(e, t) {
      e = e;
      var a = t[dT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xl("display", i);
    }
    function HT(e, t) {
      e.nodeValue = t;
    }
    function PT(e) {
      e.nodeType === Ir ? e.textContent = "" : e.nodeType === ca && e.documentElement && e.removeChild(e.documentElement);
    }
    function VT(e, t, a) {
      return e.nodeType !== Ir || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function BT(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function $T(e) {
      return e.nodeType !== Rn ? null : e;
    }
    function X0(e) {
      return e.data === op;
    }
    function Qy(e) {
      return e.data === sp;
    }
    function IT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function YT(e, t) {
      e._reactRetry = t;
    }
    function wh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Ir || t === Ii)
          break;
        if (t === Rn) {
          var a = e.data;
          if (a === Rh || a === sp || a === op)
            break;
          if (a === Th)
            return null;
        }
      }
      return e;
    }
    function cp(e) {
      return wh(e.nextSibling);
    }
    function QT(e) {
      return wh(e.firstChild);
    }
    function WT(e) {
      return wh(e.firstChild);
    }
    function GT(e) {
      return wh(e.nextSibling);
    }
    function qT(e, t, a, i, u, s, f) {
      dp(s, e), qy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Ne) !== ie;
      return aT(e, t, a, p, i, y, f);
    }
    function KT(e, t, a, i) {
      return dp(a, e), a.mode & Ne, iT(e, t);
    }
    function XT(e, t) {
      dp(t, e);
    }
    function ZT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Rn) {
          var i = t.data;
          if (i === Th) {
            if (a === 0)
              return cp(t);
            a--;
          } else (i === Rh || i === sp || i === op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Z0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Rn) {
          var i = t.data;
          if (i === Rh || i === sp || i === op) {
            if (a === 0)
              return t;
            a--;
          } else i === Th && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function JT(e) {
      vn(e);
    }
    function ew(e) {
      vn(e);
    }
    function tw(e) {
      return e !== "head" && e !== "body";
    }
    function nw(e, t, a, i) {
      var u = !0;
      Sh(t.nodeValue, a, i, u);
    }
    function rw(e, t, a, i, u, s) {
      if (t[Ch] !== !0) {
        var f = !0;
        Sh(i.nodeValue, u, s, f);
      }
    }
    function aw(e, t) {
      t.nodeType === Ir ? Ay(e, t) : t.nodeType === Rn || jy(e, t);
    }
    function iw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Ir ? Ay(a, t) : t.nodeType === Rn || jy(a, t));
      }
    }
    function lw(e, t, a, i, u) {
      (u || t[Ch] !== !0) && (i.nodeType === Ir ? Ay(a, i) : i.nodeType === Rn || jy(a, i));
    }
    function uw(e, t, a) {
      Fy(e, t);
    }
    function ow(e, t) {
      Hy(e, t);
    }
    function sw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Fy(i, t);
      }
    }
    function cw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Hy(a, t);
      }
    }
    function fw(e, t, a, i, u, s) {
      (s || t[Ch] !== !0) && Fy(a, i);
    }
    function dw(e, t, a, i, u) {
      (u || t[Ch] !== !0) && Hy(a, i);
    }
    function pw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function vw(e) {
      np(e);
    }
    var yf = Math.random().toString(36).slice(2), gf = "__reactFiber$" + yf, Wy = "__reactProps$" + yf, fp = "__reactContainer$" + yf, Gy = "__reactEvents$" + yf, hw = "__reactListeners$" + yf, mw = "__reactHandles$" + yf;
    function yw(e) {
      delete e[gf], delete e[Wy], delete e[Gy], delete e[hw], delete e[mw];
    }
    function dp(e, t) {
      t[gf] = e;
    }
    function bh(e, t) {
      t[fp] = e;
    }
    function J0(e) {
      e[fp] = null;
    }
    function pp(e) {
      return !!e[fp];
    }
    function rc(e) {
      var t = e[gf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[fp] || a[gf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Z0(e); u !== null; ) {
              var s = u[gf];
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
    function jo(e) {
      var t = e[gf] || e[fp];
      return t && (t.tag === Z || t.tag === pe || t.tag === Re || t.tag === te) ? t : null;
    }
    function Sf(e) {
      if (e.tag === Z || e.tag === pe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function xh(e) {
      return e[Wy] || null;
    }
    function qy(e, t) {
      e[Wy] = t;
    }
    function gw(e) {
      var t = e[Gy];
      return t === void 0 && (t = e[Gy] = /* @__PURE__ */ new Set()), t;
    }
    var eE = {}, tE = ne.ReactDebugCurrentFrame;
    function _h(e) {
      if (e) {
        var t = e._owner, a = yt(e.type, e._source, t ? t.type : null);
        tE.setExtraStackFrame(a);
      } else
        tE.setExtraStackFrame(null);
    }
    function il(e, t, a, i, u) {
      {
        var s = Function.call.bind(Xn);
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
            p && !(p instanceof Error) && (_h(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), _h(null)), p instanceof Error && !(p.message in eE) && (eE[p.message] = !0, _h(u), S("Failed %s type: %s", a, p.message), _h(null));
          }
      }
    }
    var Ky = [], Dh;
    Dh = [];
    var Au = -1;
    function Fo(e) {
      return {
        current: e
      };
    }
    function Zr(e, t) {
      if (Au < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Dh[Au] && S("Unexpected Fiber popped."), e.current = Ky[Au], Ky[Au] = null, Dh[Au] = null, Au--;
    }
    function Jr(e, t, a) {
      Au++, Ky[Au] = e.current, Dh[Au] = a, e.current = t;
    }
    var Xy;
    Xy = {};
    var si = {};
    Object.freeze(si);
    var ju = Fo(si), Wl = Fo(!1), Zy = si;
    function Ef(e, t, a) {
      return a && Gl(t) ? Zy : ju.current;
    }
    function nE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Cf(e, t) {
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
          var p = Ke(e) || "Unknown";
          il(i, s, "context", p);
        }
        return u && nE(e, t, s), s;
      }
    }
    function kh() {
      return Wl.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Oh(e) {
      Zr(Wl, e), Zr(ju, e);
    }
    function Jy(e) {
      Zr(Wl, e), Zr(ju, e);
    }
    function rE(e, t, a) {
      {
        if (ju.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Jr(ju, t, e), Jr(Wl, a, e);
      }
    }
    function aE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ke(e) || "Unknown";
            Xy[s] || (Xy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ke(e) || "Unknown";
          il(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function Lh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return Zy = ju.current, Jr(ju, a, e), Jr(Wl, Wl.current, e), !0;
      }
    }
    function iE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = aE(e, t, Zy);
          i.__reactInternalMemoizedMergedChildContext = u, Zr(Wl, e), Zr(ju, e), Jr(ju, u, e), Jr(Wl, a, e);
        } else
          Zr(Wl, e), Jr(Wl, a, e);
      }
    }
    function Sw(e) {
      {
        if (!pa(e) || e.tag !== le)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case le: {
              var a = t.type;
              if (Gl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ho = 0, Mh = 1, Fu = null, eg = !1, tg = !1;
    function lE(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function Ew(e) {
      eg = !0, lE(e);
    }
    function uE() {
      eg && Po();
    }
    function Po() {
      if (!tg && Fu !== null) {
        tg = !0;
        var e = 0, t = br();
        try {
          var a = !0, i = Fu;
          for (kt(Sa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, eg = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), vd(Nl, Po), s;
        } finally {
          kt(t), tg = !1;
        }
      }
      return null;
    }
    var Rf = [], Tf = 0, Nh = null, zh = 0, _i = [], Di = 0, ac = null, Hu = 1, Pu = "";
    function Cw(e) {
      return lc(), (e.flags & Mv) !== Ue;
    }
    function Rw(e) {
      return lc(), zh;
    }
    function Tw() {
      var e = Pu, t = Hu, a = t & ~ww(t);
      return a.toString(32) + e;
    }
    function ic(e, t) {
      lc(), Rf[Tf++] = zh, Rf[Tf++] = Nh, Nh = e, zh = t;
    }
    function oE(e, t, a) {
      lc(), _i[Di++] = Hu, _i[Di++] = Pu, _i[Di++] = ac, ac = e;
      var i = Hu, u = Pu, s = Uh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Uh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), b = f >> y, A = s - y, F = Uh(t) + A, P = p << A, se = P | b, Ae = _ + u;
        Hu = 1 << F | se, Pu = Ae;
      } else {
        var ke = p << s, bt = ke | f, ht = u;
        Hu = 1 << v | bt, Pu = ht;
      }
    }
    function ng(e) {
      lc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ic(e, a), oE(e, a, i);
      }
    }
    function Uh(e) {
      return 32 - mo(e);
    }
    function ww(e) {
      return 1 << Uh(e) - 1;
    }
    function rg(e) {
      for (; e === Nh; )
        Nh = Rf[--Tf], Rf[Tf] = null, zh = Rf[--Tf], Rf[Tf] = null;
      for (; e === ac; )
        ac = _i[--Di], _i[Di] = null, Pu = _i[--Di], _i[Di] = null, Hu = _i[--Di], _i[Di] = null;
    }
    function bw() {
      return lc(), ac !== null ? {
        id: Hu,
        overflow: Pu
      } : null;
    }
    function xw(e, t) {
      lc(), _i[Di++] = Hu, _i[Di++] = Pu, _i[Di++] = ac, Hu = t.id, Pu = t.overflow, ac = e;
    }
    function lc() {
      Or() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var kr = null, ki = null, ll = !1, uc = !1, Vo = null;
    function _w() {
      ll && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function sE() {
      uc = !0;
    }
    function Dw() {
      return uc;
    }
    function kw(e) {
      var t = e.stateNode.containerInfo;
      return ki = WT(t), kr = e, ll = !0, Vo = null, uc = !1, !0;
    }
    function Ow(e, t, a) {
      return ki = GT(t), kr = e, ll = !0, Vo = null, uc = !1, a !== null && xw(e, a), !0;
    }
    function cE(e, t) {
      switch (e.tag) {
        case te: {
          aw(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & Ne) !== ie;
          lw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && iw(i.dehydrated, t);
          break;
        }
      }
    }
    function fE(e, t) {
      cE(e, t);
      var a = z_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Nt) : i.push(a);
    }
    function ag(e, t) {
      {
        if (uc)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, uw(a, i);
                break;
              case pe:
                var u = t.pendingProps;
                ow(a, u);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Ne) !== ie;
                fw(
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
              case pe: {
                var _ = t.pendingProps, b = (e.mode & Ne) !== ie;
                dw(
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
          case Re: {
            var A = e.memoizedState, F = A.dehydrated;
            if (F !== null) switch (t.tag) {
              case Z:
                var P = t.type;
                t.pendingProps, sw(F, P);
                break;
              case pe:
                var se = t.pendingProps;
                cw(F, se);
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
      t.flags = t.flags & ~yi | Zt, ag(e, t);
    }
    function pE(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = VT(t, a);
          return i !== null ? (e.stateNode = i, kr = e, ki = QT(i), !0) : !1;
        }
        case pe: {
          var u = e.pendingProps, s = BT(t, u);
          return s !== null ? (e.stateNode = s, kr = e, ki = null, !0) : !1;
        }
        case Re: {
          var f = $T(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: bw(),
              retryLane: ga
            };
            e.memoizedState = p;
            var v = U_(f);
            return v.return = e, e.child = v, kr = e, ki = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ig(e) {
      return (e.mode & Ne) !== ie && (e.flags & Je) === Ue;
    }
    function lg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ug(e) {
      if (ll) {
        var t = ki;
        if (!t) {
          ig(e) && (ag(kr, e), lg()), dE(kr, e), ll = !1, kr = e;
          return;
        }
        var a = t;
        if (!pE(e, t)) {
          ig(e) && (ag(kr, e), lg()), t = cp(a);
          var i = kr;
          if (!t || !pE(e, t)) {
            dE(kr, e), ll = !1, kr = e;
            return;
          }
          fE(i, a);
        }
      }
    }
    function Lw(e, t, a) {
      var i = e.stateNode, u = !uc, s = qT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Mw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = KT(t, a, e);
      if (i) {
        var u = kr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ne) !== ie;
              nw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Ne) !== ie;
              rw(
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
    function Nw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      XT(a, e);
    }
    function zw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ZT(a);
    }
    function vE(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== te && t.tag !== Re; )
        t = t.return;
      kr = t;
    }
    function Ah(e) {
      if (e !== kr)
        return !1;
      if (!ll)
        return vE(e), ll = !0, !1;
      if (e.tag !== te && (e.tag !== Z || tw(e.type) && !By(e.type, e.memoizedProps))) {
        var t = ki;
        if (t)
          if (ig(e))
            hE(e), lg();
          else
            for (; t; )
              fE(e, t), t = cp(t);
      }
      return vE(e), e.tag === Re ? ki = zw(e) : ki = kr ? cp(e.stateNode) : null, !0;
    }
    function Uw() {
      return ll && ki !== null;
    }
    function hE(e) {
      for (var t = ki; t; )
        cE(e, t), t = cp(t);
    }
    function wf() {
      kr = null, ki = null, ll = !1, uc = !1;
    }
    function mE() {
      Vo !== null && (s1(Vo), Vo = null);
    }
    function Or() {
      return ll;
    }
    function og(e) {
      Vo === null ? Vo = [e] : Vo.push(e);
    }
    var Aw = ne.ReactCurrentBatchConfig, jw = null;
    function Fw() {
      return Aw.transition;
    }
    var ul = {
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
      var Hw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & cn && (t = a), a = a.return;
        return t;
      }, oc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], sc = /* @__PURE__ */ new Set();
      ul.recordUnsafeLifecycleWarnings = function(e, t) {
        sc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & cn && typeof t.UNSAFE_componentWillMount == "function" && hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & cn && typeof t.UNSAFE_componentWillReceiveProps == "function" && yp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & cn && typeof t.UNSAFE_componentWillUpdate == "function" && Sp.push(e));
      }, ul.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          e.add(Ke(b) || "Component"), sc.add(b.type);
        }), vp = []);
        var t = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          t.add(Ke(b) || "Component"), sc.add(b.type);
        }), hp = []);
        var a = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(b) {
          a.add(Ke(b) || "Component"), sc.add(b.type);
        }), mp = []);
        var i = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(b) {
          i.add(Ke(b) || "Component"), sc.add(b.type);
        }), yp = []);
        var u = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(b) {
          u.add(Ke(b) || "Component"), sc.add(b.type);
        }), gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Sp.length > 0 && (Sp.forEach(function(b) {
          s.add(Ke(b) || "Component"), sc.add(b.type);
        }), Sp = []), t.size > 0) {
          var f = oc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = oc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = oc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = oc(e);
          Qe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = oc(a);
          Qe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = oc(u);
          Qe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var jh = /* @__PURE__ */ new Map(), yE = /* @__PURE__ */ new Set();
      ul.recordLegacyContextWarning = function(e, t) {
        var a = Hw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!yE.has(e.type)) {
          var i = jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], jh.set(a, i)), i.push(e));
        }
      }, ul.flushLegacyContextWarning = function() {
        jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ke(s) || "Component"), yE.add(s.type);
            });
            var u = oc(i);
            try {
              yn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              un();
            }
          }
        });
      }, ul.discardPendingWarnings = function() {
        vp = [], hp = [], mp = [], yp = [], gp = [], Sp = [], jh = /* @__PURE__ */ new Map();
      };
    }
    var sg, cg, fg, dg, pg, gE = function(e, t) {
    };
    sg = !1, cg = !1, fg = {}, dg = {}, pg = {}, gE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        dg[a] || (dg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Pw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ep(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & cn || nt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== le) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Pw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ke(e) || "Component";
          fg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), fg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== le)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Pn(i, "ref");
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
    function Fh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Hh(e) {
      {
        var t = Ke(e) || "Component";
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
      function t(L, V) {
        if (e) {
          var M = L.deletions;
          M === null ? (L.deletions = [V], L.flags |= Nt) : M.push(V);
        }
      }
      function a(L, V) {
        if (!e)
          return null;
        for (var M = V; M !== null; )
          t(L, M), M = M.sibling;
        return null;
      }
      function i(L, V) {
        for (var M = /* @__PURE__ */ new Map(), X = V; X !== null; )
          X.key !== null ? M.set(X.key, X) : M.set(X.index, X), X = X.sibling;
        return M;
      }
      function u(L, V) {
        var M = gc(L, V);
        return M.index = 0, M.sibling = null, M;
      }
      function s(L, V, M) {
        if (L.index = M, !e)
          return L.flags |= Mv, V;
        var X = L.alternate;
        if (X !== null) {
          var ye = X.index;
          return ye < V ? (L.flags |= Zt, V) : ye;
        } else
          return L.flags |= Zt, V;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= Zt), L;
      }
      function p(L, V, M, X) {
        if (V === null || V.tag !== pe) {
          var ye = o0(M, L.mode, X);
          return ye.return = L, ye;
        } else {
          var ce = u(V, M);
          return ce.return = L, ce;
        }
      }
      function v(L, V, M, X) {
        var ye = M.type;
        if (ye === sa)
          return g(L, V, M.props.children, X, M.key);
        if (V !== null && (V.elementType === ye || // Keep this check inline so it only runs on the false path:
        b1(V, M) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === He && SE(ye) === V.type)) {
          var ce = u(V, M.props);
          return ce.ref = Ep(L, V, M), ce.return = L, ce._debugSource = M._source, ce._debugOwner = M._owner, ce;
        }
        var Ge = u0(M, L.mode, X);
        return Ge.ref = Ep(L, V, M), Ge.return = L, Ge;
      }
      function y(L, V, M, X) {
        if (V === null || V.tag !== de || V.stateNode.containerInfo !== M.containerInfo || V.stateNode.implementation !== M.implementation) {
          var ye = s0(M, L.mode, X);
          return ye.return = L, ye;
        } else {
          var ce = u(V, M.children || []);
          return ce.return = L, ce;
        }
      }
      function g(L, V, M, X, ye) {
        if (V === null || V.tag !== We) {
          var ce = Zo(M, L.mode, X, ye);
          return ce.return = L, ce;
        } else {
          var Ge = u(V, M);
          return Ge.return = L, Ge;
        }
      }
      function _(L, V, M) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var X = o0("" + V, L.mode, M);
          return X.return = L, X;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Er: {
              var ye = u0(V, L.mode, M);
              return ye.ref = Ep(L, null, V), ye.return = L, ye;
            }
            case Hr: {
              var ce = s0(V, L.mode, M);
              return ce.return = L, ce;
            }
            case He: {
              var Ge = V._payload, tt = V._init;
              return _(L, tt(Ge), M);
            }
          }
          if (Dt(V) || Pr(V)) {
            var qt = Zo(V, L.mode, M, null);
            return qt.return = L, qt;
          }
          Fh(L, V);
        }
        return typeof V == "function" && Hh(L), null;
      }
      function b(L, V, M, X) {
        var ye = V !== null ? V.key : null;
        if (typeof M == "string" && M !== "" || typeof M == "number")
          return ye !== null ? null : p(L, V, "" + M, X);
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case Er:
              return M.key === ye ? v(L, V, M, X) : null;
            case Hr:
              return M.key === ye ? y(L, V, M, X) : null;
            case He: {
              var ce = M._payload, Ge = M._init;
              return b(L, V, Ge(ce), X);
            }
          }
          if (Dt(M) || Pr(M))
            return ye !== null ? null : g(L, V, M, X, null);
          Fh(L, M);
        }
        return typeof M == "function" && Hh(L), null;
      }
      function A(L, V, M, X, ye) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var ce = L.get(M) || null;
          return p(V, ce, "" + X, ye);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Er: {
              var Ge = L.get(X.key === null ? M : X.key) || null;
              return v(V, Ge, X, ye);
            }
            case Hr: {
              var tt = L.get(X.key === null ? M : X.key) || null;
              return y(V, tt, X, ye);
            }
            case He:
              var qt = X._payload, zt = X._init;
              return A(L, V, M, zt(qt), ye);
          }
          if (Dt(X) || Pr(X)) {
            var $n = L.get(M) || null;
            return g(V, $n, X, ye, null);
          }
          Fh(V, X);
        }
        return typeof X == "function" && Hh(V), null;
      }
      function F(L, V, M) {
        {
          if (typeof L != "object" || L === null)
            return V;
          switch (L.$$typeof) {
            case Er:
            case Hr:
              gE(L, M);
              var X = L.key;
              if (typeof X != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(X);
                break;
              }
              if (!V.has(X)) {
                V.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case He:
              var ye = L._payload, ce = L._init;
              F(ce(ye), V, M);
              break;
          }
        }
        return V;
      }
      function P(L, V, M, X) {
        for (var ye = null, ce = 0; ce < M.length; ce++) {
          var Ge = M[ce];
          ye = F(Ge, ye, L);
        }
        for (var tt = null, qt = null, zt = V, $n = 0, Ut = 0, Fn = null; zt !== null && Ut < M.length; Ut++) {
          zt.index > Ut ? (Fn = zt, zt = null) : Fn = zt.sibling;
          var ta = b(L, zt, M[Ut], X);
          if (ta === null) {
            zt === null && (zt = Fn);
            break;
          }
          e && zt && ta.alternate === null && t(L, zt), $n = s(ta, $n, Ut), qt === null ? tt = ta : qt.sibling = ta, qt = ta, zt = Fn;
        }
        if (Ut === M.length) {
          if (a(L, zt), Or()) {
            var jr = Ut;
            ic(L, jr);
          }
          return tt;
        }
        if (zt === null) {
          for (; Ut < M.length; Ut++) {
            var fi = _(L, M[Ut], X);
            fi !== null && ($n = s(fi, $n, Ut), qt === null ? tt = fi : qt.sibling = fi, qt = fi);
          }
          if (Or()) {
            var ba = Ut;
            ic(L, ba);
          }
          return tt;
        }
        for (var xa = i(L, zt); Ut < M.length; Ut++) {
          var na = A(xa, L, Ut, M[Ut], X);
          na !== null && (e && na.alternate !== null && xa.delete(na.key === null ? Ut : na.key), $n = s(na, $n, Ut), qt === null ? tt = na : qt.sibling = na, qt = na);
        }
        if (e && xa.forEach(function($f) {
          return t(L, $f);
        }), Or()) {
          var Wu = Ut;
          ic(L, Wu);
        }
        return tt;
      }
      function se(L, V, M, X) {
        var ye = Pr(M);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          M[Symbol.toStringTag] === "Generator" && (cg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cg = !0), M.entries === ye && (sg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sg = !0);
          var ce = ye.call(M);
          if (ce)
            for (var Ge = null, tt = ce.next(); !tt.done; tt = ce.next()) {
              var qt = tt.value;
              Ge = F(qt, Ge, L);
            }
        }
        var zt = ye.call(M);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, Ut = null, Fn = V, ta = 0, jr = 0, fi = null, ba = zt.next(); Fn !== null && !ba.done; jr++, ba = zt.next()) {
          Fn.index > jr ? (fi = Fn, Fn = null) : fi = Fn.sibling;
          var xa = b(L, Fn, ba.value, X);
          if (xa === null) {
            Fn === null && (Fn = fi);
            break;
          }
          e && Fn && xa.alternate === null && t(L, Fn), ta = s(xa, ta, jr), Ut === null ? $n = xa : Ut.sibling = xa, Ut = xa, Fn = fi;
        }
        if (ba.done) {
          if (a(L, Fn), Or()) {
            var na = jr;
            ic(L, na);
          }
          return $n;
        }
        if (Fn === null) {
          for (; !ba.done; jr++, ba = zt.next()) {
            var Wu = _(L, ba.value, X);
            Wu !== null && (ta = s(Wu, ta, jr), Ut === null ? $n = Wu : Ut.sibling = Wu, Ut = Wu);
          }
          if (Or()) {
            var $f = jr;
            ic(L, $f);
          }
          return $n;
        }
        for (var Zp = i(L, Fn); !ba.done; jr++, ba = zt.next()) {
          var nu = A(Zp, L, jr, ba.value, X);
          nu !== null && (e && nu.alternate !== null && Zp.delete(nu.key === null ? jr : nu.key), ta = s(nu, ta, jr), Ut === null ? $n = nu : Ut.sibling = nu, Ut = nu);
        }
        if (e && Zp.forEach(function(dD) {
          return t(L, dD);
        }), Or()) {
          var fD = jr;
          ic(L, fD);
        }
        return $n;
      }
      function Ae(L, V, M, X) {
        if (V !== null && V.tag === pe) {
          a(L, V.sibling);
          var ye = u(V, M);
          return ye.return = L, ye;
        }
        a(L, V);
        var ce = o0(M, L.mode, X);
        return ce.return = L, ce;
      }
      function ke(L, V, M, X) {
        for (var ye = M.key, ce = V; ce !== null; ) {
          if (ce.key === ye) {
            var Ge = M.type;
            if (Ge === sa) {
              if (ce.tag === We) {
                a(L, ce.sibling);
                var tt = u(ce, M.props.children);
                return tt.return = L, tt._debugSource = M._source, tt._debugOwner = M._owner, tt;
              }
            } else if (ce.elementType === Ge || // Keep this check inline so it only runs on the false path:
            b1(ce, M) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === He && SE(Ge) === ce.type) {
              a(L, ce.sibling);
              var qt = u(ce, M.props);
              return qt.ref = Ep(L, ce, M), qt.return = L, qt._debugSource = M._source, qt._debugOwner = M._owner, qt;
            }
            a(L, ce);
            break;
          } else
            t(L, ce);
          ce = ce.sibling;
        }
        if (M.type === sa) {
          var zt = Zo(M.props.children, L.mode, X, M.key);
          return zt.return = L, zt;
        } else {
          var $n = u0(M, L.mode, X);
          return $n.ref = Ep(L, V, M), $n.return = L, $n;
        }
      }
      function bt(L, V, M, X) {
        for (var ye = M.key, ce = V; ce !== null; ) {
          if (ce.key === ye)
            if (ce.tag === de && ce.stateNode.containerInfo === M.containerInfo && ce.stateNode.implementation === M.implementation) {
              a(L, ce.sibling);
              var Ge = u(ce, M.children || []);
              return Ge.return = L, Ge;
            } else {
              a(L, ce);
              break;
            }
          else
            t(L, ce);
          ce = ce.sibling;
        }
        var tt = s0(M, L.mode, X);
        return tt.return = L, tt;
      }
      function ht(L, V, M, X) {
        var ye = typeof M == "object" && M !== null && M.type === sa && M.key === null;
        if (ye && (M = M.props.children), typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case Er:
              return f(ke(L, V, M, X));
            case Hr:
              return f(bt(L, V, M, X));
            case He:
              var ce = M._payload, Ge = M._init;
              return ht(L, V, Ge(ce), X);
          }
          if (Dt(M))
            return P(L, V, M, X);
          if (Pr(M))
            return se(L, V, M, X);
          Fh(L, M);
        }
        return typeof M == "string" && M !== "" || typeof M == "number" ? f(Ae(L, V, "" + M, X)) : (typeof M == "function" && Hh(L), a(L, V));
      }
      return ht;
    }
    var bf = EE(!0), CE = EE(!1);
    function Vw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = gc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = gc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Bw(e, t) {
      for (var a = e.child; a !== null; )
        k_(a, t), a = a.sibling;
    }
    var vg = Fo(null), hg;
    hg = {};
    var Ph = null, xf = null, mg = null, Vh = !1;
    function Bh() {
      Ph = null, xf = null, mg = null, Vh = !1;
    }
    function RE() {
      Vh = !0;
    }
    function TE() {
      Vh = !1;
    }
    function wE(e, t, a) {
      Jr(vg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== hg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = hg;
    }
    function yg(e, t) {
      var a = vg.current;
      Zr(vg, t), e._currentValue = a;
    }
    function gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Pl(i.childLanes, t) ? u !== null && !Pl(u.childLanes, t) && (u.childLanes = at(u.childLanes, t)) : (i.childLanes = at(i.childLanes, t), u !== null && (u.childLanes = at(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $w(e, t, a) {
      Iw(e, t, a);
    }
    function Iw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === le) {
                var p = bo(a), v = Vu(nn, p);
                v.tag = Ih;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = at(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = at(b.lanes, a)), gg(i.return, a, e), s.lanes = at(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ze)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === en) {
          var A = i.return;
          if (A === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          A.lanes = at(A.lanes, a);
          var F = A.alternate;
          F !== null && (F.lanes = at(F.lanes, a)), gg(A, a, e), u = i.sibling;
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
    function _f(e, t) {
      Ph = e, xf = null, mg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Xr(a.lanes, t) && Up(), a.firstContext = null);
      }
    }
    function qn(e) {
      Vh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (mg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (xf === null) {
          if (Ph === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          xf = a, Ph.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          xf = xf.next = a;
      }
      return t;
    }
    var cc = null;
    function Sg(e) {
      cc === null ? cc = [e] : cc.push(e);
    }
    function Yw() {
      if (cc !== null) {
        for (var e = 0; e < cc.length; e++) {
          var t = cc[e], a = t.interleaved;
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
        cc = null;
      }
    }
    function bE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, $h(e, i);
    }
    function Qw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ww(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, $h(e, i);
    }
    function $a(e, t) {
      return $h(e, t);
    }
    var Gw = $h;
    function $h(e, t) {
      e.lanes = at(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = at(a.lanes, t)), a === null && (e.flags & (Zt | yi)) !== Ue && C1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = at(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = at(a.childLanes, t) : (u.flags & (Zt | yi)) !== Ue && C1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var xE = 0, _E = 1, Ih = 2, Eg = 3, Yh = !1, Cg, Qh;
    Cg = !1, Qh = null;
    function Rg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
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
    function Vu(e, t) {
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
    function Bo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Qh === u && !Cg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Cg = !0), Qx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Gw(e, a);
      } else
        return Ww(e, u, t, a);
    }
    function Wh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Yv(a)) {
          var s = u.lanes;
          s = Ld(s, e.pendingLanes);
          var f = at(s, a);
          u.lanes = f, ef(e, f);
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
    function qw(e, t, a, i, u, s) {
      switch (a.tag) {
        case _E: {
          var f = a.payload;
          if (typeof f == "function") {
            RE();
            var p = f.call(s, i, u);
            {
              if (e.mode & cn) {
                Vn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Vn(!1);
                }
              }
              TE();
            }
            return p;
          }
          return f;
        }
        case Eg:
          e.flags = e.flags & ~er | Je;
        case xE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            RE(), y = v.call(s, i, u);
            {
              if (e.mode & cn) {
                Vn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Vn(!1);
                }
              }
              TE();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case Ih:
          return Yh = !0, i;
      }
      return i;
    }
    function Gh(e, t, a, i) {
      var u = e.updateQueue;
      Yh = !1, Qh = u.shared;
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
        var A = u.baseState, F = Y, P = null, se = null, Ae = null, ke = s;
        do {
          var bt = ke.lane, ht = ke.eventTime;
          if (Pl(i, bt)) {
            if (Ae !== null) {
              var V = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                tag: ke.tag,
                payload: ke.payload,
                callback: ke.callback,
                next: null
              };
              Ae = Ae.next = V;
            }
            A = qw(e, u, ke, A, t, a);
            var M = ke.callback;
            if (M !== null && // If the update was already committed, we should not queue its
            // callback again.
            ke.lane !== Jt) {
              e.flags |= Yn;
              var X = u.effects;
              X === null ? u.effects = [ke] : X.push(ke);
            }
          } else {
            var L = {
              eventTime: ht,
              lane: bt,
              tag: ke.tag,
              payload: ke.payload,
              callback: ke.callback,
              next: null
            };
            Ae === null ? (se = Ae = L, P = A) : Ae = Ae.next = L, F = at(F, bt);
          }
          if (ke = ke.next, ke === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, ce = ye.next;
            ye.next = null, ke = ce, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        Ae === null && (P = A), u.baseState = P, u.firstBaseUpdate = se, u.lastBaseUpdate = Ae;
        var Ge = u.shared.interleaved;
        if (Ge !== null) {
          var tt = Ge;
          do
            F = at(F, tt.lane), tt = tt.next;
          while (tt !== Ge);
        } else s === null && (u.shared.lanes = Y);
        Wp(F), e.lanes = F, e.memoizedState = A;
      }
      Qh = null;
    }
    function Kw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function kE() {
      Yh = !1;
    }
    function qh() {
      return Yh;
    }
    function OE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Kw(f, a));
        }
    }
    var Cp = {}, $o = Fo(Cp), Rp = Fo(Cp), Kh = Fo(Cp);
    function Xh(e) {
      if (e === Cp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function LE() {
      var e = Xh(Kh.current);
      return e;
    }
    function wg(e, t) {
      Jr(Kh, t, e), Jr(Rp, e, e), Jr($o, Cp, e);
      var a = pT(t);
      Zr($o, e), Jr($o, a, e);
    }
    function Df(e) {
      Zr($o, e), Zr(Rp, e), Zr(Kh, e);
    }
    function bg() {
      var e = Xh($o.current);
      return e;
    }
    function ME(e) {
      Xh(Kh.current);
      var t = Xh($o.current), a = vT(t, e.type);
      t !== a && (Jr(Rp, e, e), Jr($o, a, e));
    }
    function xg(e) {
      Rp.current === e && (Zr($o, e), Zr(Rp, e));
    }
    var Xw = 0, NE = 1, zE = 1, Tp = 2, ol = Fo(Xw);
    function _g(e, t) {
      return (e & t) !== 0;
    }
    function kf(e) {
      return e & NE;
    }
    function Dg(e, t) {
      return e & NE | t;
    }
    function Zw(e, t) {
      return e | t;
    }
    function Io(e, t) {
      Jr(ol, t, e);
    }
    function Of(e) {
      Zr(ol, e);
    }
    function Jw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Zh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || X0(i) || Qy(i))
              return t;
          }
        } else if (t.tag === Ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Je) !== Ue;
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
    var Ia = (
      /*   */
      0
    ), rr = (
      /* */
      1
    ), ql = (
      /*  */
      2
    ), ar = (
      /*    */
      4
    ), Lr = (
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
    function eb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = ne.ReactCurrentDispatcher, wp = ne.ReactCurrentBatchConfig, Lg, Lf;
    Lg = /* @__PURE__ */ new Set();
    var fc = Y, Gt = null, ir = null, lr = null, Jh = !1, bp = !1, xp = 0, tb = 0, nb = 25, B = null, Oi = null, Yo = -1, Mg = !1;
    function Vt() {
      {
        var e = B;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function re() {
      {
        var e = B;
        Oi !== null && (Yo++, Oi[Yo] !== e && rb(e));
      }
    }
    function Mf(e) {
      e != null && !Dt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function rb(e) {
      {
        var t = Ke(Gt);
        if (!Lg.has(t) && (Lg.add(t), Oi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Yo; u++) {
            for (var s = Oi[u], f = u === Yo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function ea() {
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
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!De(e[a], t[a]))
          return !1;
      return !0;
    }
    function Nf(e, t, a, i, u, s) {
      fc = s, Gt = t, Oi = e !== null ? e._debugHookTypes : null, Yo = -1, Mg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? ve.current = nC : Oi !== null ? ve.current = tC : ve.current = eC;
      var f = a(i, u);
      if (bp) {
        var p = 0;
        do {
          if (bp = !1, xp = 0, p >= nb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Mg = !1, ir = null, lr = null, t.updateQueue = null, Yo = -1, ve.current = rC, f = a(i, u);
        } while (bp);
      }
      ve.current = dm, t._debugHookTypes = Oi;
      var v = ir !== null && ir.next !== null;
      if (fc = Y, Gt = null, ir = null, lr = null, B = null, Oi = null, Yo = -1, e !== null && (e.flags & tr) !== (t.flags & tr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ne) !== ie && S("Internal React error: Expected static flag was missing. Please notify the React team."), Jh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function zf() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function UE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qr) !== ie ? t.flags &= ~(gu | ja | Yr | be) : t.flags &= ~(Yr | be), e.lanes = xo(e.lanes, a);
    }
    function AE() {
      if (ve.current = dm, Jh) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Jh = !1;
      }
      fc = Y, Gt = null, ir = null, lr = null, Oi = null, Yo = -1, B = null, qE = !1, bp = !1, xp = 0;
    }
    function Kl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return lr === null ? Gt.memoizedState = lr = e : lr = lr.next = e, lr;
    }
    function Li() {
      var e;
      if (ir === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ir.next;
      var a;
      if (lr === null ? a = Gt.memoizedState : a = lr.next, a !== null)
        lr = a, a = lr.next, ir = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ir = e;
        var i = {
          memoizedState: ir.memoizedState,
          baseState: ir.baseState,
          baseQueue: ir.baseQueue,
          queue: ir.queue,
          next: null
        };
        lr === null ? Gt.memoizedState = lr = i : lr = lr.next = i;
      }
      return lr;
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
      var i = Kl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = ub.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
      var i = Li(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ir, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, b = null, A = null, F = null, P = g;
        do {
          var se = P.lane;
          if (Pl(fc, se)) {
            if (F !== null) {
              var ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              F = F.next = ke;
            }
            if (P.hasEagerState)
              _ = P.eagerState;
            else {
              var bt = P.action;
              _ = e(_, bt);
            }
          } else {
            var Ae = {
              lane: se,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            F === null ? (A = F = Ae, b = _) : F = F.next = Ae, Gt.lanes = at(Gt.lanes, se), Wp(se);
          }
          P = P.next;
        } while (P !== null && P !== g);
        F === null ? b = _ : F.next = A, De(_, i.memoizedState) || Up(), i.memoizedState = _, i.baseState = b, i.baseQueue = F, u.lastRenderedState = _;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var L = ht;
        do {
          var V = L.lane;
          Gt.lanes = at(Gt.lanes, V), Wp(V), L = L.next;
        } while (L !== ht);
      } else f === null && (u.lanes = Y);
      var M = u.dispatch;
      return [i.memoizedState, M];
    }
    function jg(e, t, a) {
      var i = Li(), u = i.queue;
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
        De(p, i.memoizedState) || Up(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function rk(e, t, a) {
    }
    function ak(e, t, a) {
    }
    function Fg(e, t, a) {
      var i = Gt, u = Kl(), s, f = Or();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Lf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Lf = !0);
      } else {
        if (s = t(), !Lf) {
          var p = t();
          De(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Lf = !0);
        }
        var v = Lm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Us(v, fc) || FE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, am(PE.bind(null, i, y, e), [e]), i.flags |= Yr, _p(rr | Lr, HE.bind(null, i, y, s, t), void 0, null), s;
    }
    function em(e, t, a) {
      var i = Gt, u = Li(), s = t();
      if (!Lf) {
        var f = t();
        De(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Lf = !0);
      }
      var p = u.memoizedState, v = !De(p, s);
      v && (u.memoizedState = s, Up());
      var y = u.queue;
      if (kp(PE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      lr !== null && lr.memoizedState.tag & rr) {
        i.flags |= Yr, _p(rr | Lr, HE.bind(null, i, y, s, t), void 0, null);
        var g = Lm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Us(g, fc) || FE(i, t, s);
      }
      return s;
    }
    function FE(e, t, a) {
      e.flags |= yu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = jE(), Gt.updateQueue = u, u.stores = [i];
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
        return !De(a, i);
      } catch {
        return !0;
      }
    }
    function BE(e) {
      var t = $a(e, _e);
      t !== null && cr(t, e, _e, nn);
    }
    function tm(e) {
      var t = Kl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = ob.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Hg(e) {
      return Ag(zg);
    }
    function Pg(e) {
      return jg(zg);
    }
    function _p(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = jE(), Gt.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = Kl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function nm(e) {
      var t = Li();
      return t.memoizedState;
    }
    function Dp(e, t, a, i) {
      var u = Kl(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = _p(rr | t, a, void 0, s);
    }
    function rm(e, t, a, i) {
      var u = Li(), s = i === void 0 ? null : i, f = void 0;
      if (ir !== null) {
        var p = ir.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = _p(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = _p(rr | t, a, f, s);
    }
    function am(e, t) {
      return (Gt.mode & qr) !== ie ? Dp(gu | Yr | Ll, Lr, e, t) : Dp(Yr | Ll, Lr, e, t);
    }
    function kp(e, t) {
      return rm(Yr, Lr, e, t);
    }
    function Bg(e, t) {
      return Dp(be, ql, e, t);
    }
    function im(e, t) {
      return rm(be, ql, e, t);
    }
    function $g(e, t) {
      var a = be;
      return a |= Aa, (Gt.mode & qr) !== ie && (a |= ja), Dp(a, ar, e, t);
    }
    function lm(e, t) {
      return rm(be, ar, e, t);
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
      var i = a != null ? a.concat([e]) : null, u = be;
      return u |= Aa, (Gt.mode & qr) !== ie && (u |= ja), Dp(u, ar, $E.bind(null, t, e), i);
    }
    function um(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return rm(be, ar, $E.bind(null, t, e), i);
    }
    function ab(e, t) {
    }
    var om = ab;
    function Yg(e, t) {
      var a = Kl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function sm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Qg(e, t) {
      var a = Kl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function cm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Wg(e) {
      var t = Kl();
      return t.memoizedState = e, e;
    }
    function IE(e) {
      var t = Li(), a = ir, i = a.memoizedState;
      return QE(t, i, e);
    }
    function YE(e) {
      var t = Li();
      if (ir === null)
        return t.memoizedState = e, e;
      var a = ir.memoizedState;
      return QE(t, a, e);
    }
    function QE(e, t, a) {
      var i = !Bv(fc);
      if (i) {
        if (!De(a, t)) {
          var u = Tr();
          Gt.lanes = at(Gt.lanes, u), Wp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Up()), e.memoizedState = a, a;
    }
    function ib(e, t, a) {
      var i = br();
      kt(vy(i, Ti)), e(!0);
      var u = wp.transition;
      wp.transition = {};
      var s = wp.transition;
      wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (kt(i), wp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Gg() {
      var e = tm(!1), t = e[0], a = e[1], i = ib.bind(null, a), u = Kl();
      return u.memoizedState = i, [t, i];
    }
    function WE() {
      var e = Hg(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    function GE() {
      var e = Pg(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    var qE = !1;
    function lb() {
      return qE;
    }
    function qg() {
      var e = Kl(), t = Lm(), a = t.identifierPrefix, i;
      if (Or()) {
        var u = Tw();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = tb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function fm() {
      var e = Li(), t = e.memoizedState;
      return t;
    }
    function ub(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ko(e), u = {
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
          var f = wa();
          cr(s, e, i, f), ZE(s, t, i);
        }
      }
      JE(e, i);
    }
    function ob(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ko(e), u = {
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
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ve.current, ve.current = sl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, De(y, v)) {
                Qw(e, t, u, i);
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
          var _ = wa();
          cr(g, e, i, _), ZE(g, t, i);
        }
      }
      JE(e, i);
    }
    function KE(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function XE(e, t) {
      bp = Jh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ZE(e, t, a) {
      if (Yv(a)) {
        var i = t.lanes;
        i = Ld(i, e.pendingLanes);
        var u = at(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function JE(e, t, a) {
      Ji(e, t);
    }
    var dm = {
      readContext: qn,
      useCallback: ea,
      useContext: ea,
      useEffect: ea,
      useImperativeHandle: ea,
      useInsertionEffect: ea,
      useLayoutEffect: ea,
      useMemo: ea,
      useReducer: ea,
      useRef: ea,
      useState: ea,
      useDebugValue: ea,
      useDeferredValue: ea,
      useTransition: ea,
      useMutableSource: ea,
      useSyncExternalStore: ea,
      useId: ea,
      unstable_isNewReconciler: ge
    }, eC = null, tC = null, nC = null, rC = null, Xl = null, sl = null, pm = null;
    {
      var Kg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, et = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      eC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Vt(), Mf(t), Yg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Vt(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Vt(), Mf(t), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Vt(), Mf(a), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Vt(), Mf(t), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Vt(), Mf(t), $g(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Vt(), Mf(t);
          var a = ve.current;
          ve.current = Xl;
          try {
            return Qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Vt();
          var i = ve.current;
          ve.current = Xl;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Vt(), Vg(e);
        },
        useState: function(e) {
          B = "useState", Vt();
          var t = ve.current;
          ve.current = Xl;
          try {
            return tm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Vt(), Wg(e);
        },
        useTransition: function() {
          return B = "useTransition", Vt(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Vt(), Fg(e, t, a);
        },
        useId: function() {
          return B = "useId", Vt(), qg();
        },
        unstable_isNewReconciler: ge
      }, tC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), Yg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), $g(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ve.current;
          ve.current = Xl;
          try {
            return Qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ve.current;
          ve.current = Xl;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Vg(e);
        },
        useState: function(e) {
          B = "useState", re();
          var t = ve.current;
          ve.current = Xl;
          try {
            return tm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), Wg(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Fg(e, t, a);
        },
        useId: function() {
          return B = "useId", re(), qg();
        },
        unstable_isNewReconciler: ge
      }, nC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), sm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), lm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ve.current;
          ve.current = sl;
          try {
            return cm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ve.current;
          ve.current = sl;
          try {
            return Ag(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), nm();
        },
        useState: function(e) {
          B = "useState", re();
          var t = ve.current;
          ve.current = sl;
          try {
            return Hg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), om();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), IE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), WE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), em(e, t);
        },
        useId: function() {
          return B = "useId", re(), fm();
        },
        unstable_isNewReconciler: ge
      }, rC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), sm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), lm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ve.current;
          ve.current = pm;
          try {
            return cm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ve.current;
          ve.current = pm;
          try {
            return jg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), nm();
        },
        useState: function(e) {
          B = "useState", re();
          var t = ve.current;
          ve.current = pm;
          try {
            return Pg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), om();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), YE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), GE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), em(e, t);
        },
        useId: function() {
          return B = "useId", re(), fm();
        },
        unstable_isNewReconciler: ge
      }, Xl = {
        readContext: function(e) {
          return Kg(), qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", et(), Vt(), Yg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", et(), Vt(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", et(), Vt(), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", et(), Vt(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", et(), Vt(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", et(), Vt(), $g(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", et(), Vt();
          var a = ve.current;
          ve.current = Xl;
          try {
            return Qg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", et(), Vt();
          var i = ve.current;
          ve.current = Xl;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", et(), Vt(), Vg(e);
        },
        useState: function(e) {
          B = "useState", et(), Vt();
          var t = ve.current;
          ve.current = Xl;
          try {
            return tm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", et(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", et(), Vt(), Wg(e);
        },
        useTransition: function() {
          return B = "useTransition", et(), Vt(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", et(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", et(), Vt(), Fg(e, t, a);
        },
        useId: function() {
          return B = "useId", et(), Vt(), qg();
        },
        unstable_isNewReconciler: ge
      }, sl = {
        readContext: function(e) {
          return Kg(), qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", et(), re(), sm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", et(), re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", et(), re(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", et(), re(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", et(), re(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", et(), re(), lm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", et(), re();
          var a = ve.current;
          ve.current = sl;
          try {
            return cm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", et(), re();
          var i = ve.current;
          ve.current = sl;
          try {
            return Ag(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", et(), re(), nm();
        },
        useState: function(e) {
          B = "useState", et(), re();
          var t = ve.current;
          ve.current = sl;
          try {
            return Hg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", et(), re(), om();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", et(), re(), IE(e);
        },
        useTransition: function() {
          return B = "useTransition", et(), re(), WE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", et(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", et(), re(), em(e, t);
        },
        useId: function() {
          return B = "useId", et(), re(), fm();
        },
        unstable_isNewReconciler: ge
      }, pm = {
        readContext: function(e) {
          return Kg(), qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", et(), re(), sm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", et(), re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", et(), re(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", et(), re(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", et(), re(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", et(), re(), lm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", et(), re();
          var a = ve.current;
          ve.current = sl;
          try {
            return cm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", et(), re();
          var i = ve.current;
          ve.current = sl;
          try {
            return jg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", et(), re(), nm();
        },
        useState: function(e) {
          B = "useState", et(), re();
          var t = ve.current;
          ve.current = sl;
          try {
            return Pg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", et(), re(), om();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", et(), re(), YE(e);
        },
        useTransition: function() {
          return B = "useTransition", et(), re(), GE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", et(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", et(), re(), em(e, t);
        },
        useId: function() {
          return B = "useId", et(), re(), fm();
        },
        unstable_isNewReconciler: ge
      };
    }
    var Qo = w.unstable_now, aC = 0, vm = -1, Op = -1, hm = -1, Xg = !1, mm = !1;
    function iC() {
      return Xg;
    }
    function sb() {
      mm = !0;
    }
    function cb() {
      Xg = !1, mm = !1;
    }
    function fb() {
      Xg = mm, mm = !1;
    }
    function lC() {
      return aC;
    }
    function uC() {
      aC = Qo();
    }
    function Zg(e) {
      Op = Qo(), e.actualStartTime < 0 && (e.actualStartTime = Qo());
    }
    function oC(e) {
      Op = -1;
    }
    function ym(e, t) {
      if (Op >= 0) {
        var a = Qo() - Op;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Op = -1;
      }
    }
    function Zl(e) {
      if (vm >= 0) {
        var t = Qo() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case xt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (hm >= 0) {
        var t = Qo() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case xt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Jl() {
      vm = Qo();
    }
    function eS() {
      hm = Qo();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cl(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var nS = {}, rS, aS, iS, lS, uS, sC, gm, oS, sS, cS, Lp;
    {
      rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), Lp = /* @__PURE__ */ new Set();
      var cC = /* @__PURE__ */ new Set();
      gm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          cC.has(a) || (cC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, sC = function(e, t) {
        if (t === void 0) {
          var a = gt(e) || "Component";
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
        if (e.mode & cn) {
          Vn(!0);
          try {
            s = a(i, u);
          } finally {
            Vn(!1);
          }
        }
        sC(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var dS = {
      isMounted: va,
      enqueueSetState: function(e, t, a) {
        var i = mi(e), u = wa(), s = Ko(i), f = Vu(u, s);
        f.payload = t, a != null && (gm(a, "setState"), f.callback = a);
        var p = Bo(i, f, s);
        p !== null && (cr(p, i, s, u), Wh(p, i, s)), Ji(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = mi(e), u = wa(), s = Ko(i), f = Vu(u, s);
        f.tag = _E, f.payload = t, a != null && (gm(a, "replaceState"), f.callback = a);
        var p = Bo(i, f, s);
        p !== null && (cr(p, i, s, u), Wh(p, i, s)), Ji(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = mi(e), i = wa(), u = Ko(a), s = Vu(i, u);
        s.tag = Ih, t != null && (gm(t, "forceUpdate"), s.callback = t);
        var f = Bo(a, s, u);
        f !== null && (cr(f, a, u, i), Wh(f, a, u)), Rd(a, u);
      }
    };
    function fC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & cn) {
            Vn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Vn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", gt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !xn(a, i) || !xn(u, s) : !0;
    }
    function db(e, t, a) {
      var i = e.stateNode;
      {
        var u = gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Lp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & cn) === ie && (Lp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Lp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & cn) === ie && (Lp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !sS.has(t) && (sS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !iS.has(t) && (iS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Dt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function dC(e, t) {
      t.updater = dS, e.stateNode = t, Oc(t, e), t._reactInternalInstance = nS;
    }
    function pC(e, t, a) {
      var i = !1, u = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === W && f._context === void 0
        );
        if (!p && !cS.has(t)) {
          cS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = qn(f);
      else {
        u = Ef(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Cf(e, u) : si;
      }
      var g = new t(a, s);
      if (e.mode & cn) {
        Vn(!0);
        try {
          g = new t(a, s);
        } finally {
          Vn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      dC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = gt(t) || "Component";
          aS.has(b) || (aS.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var A = null, F = null, P = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? A = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (A = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? F = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (F = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), A !== null || F !== null || P !== null) {
            var se = gt(t) || "Component", Ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lS.has(se) || (lS.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Ae, A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && nE(e, u, s), g;
    }
    function pb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), dS.enqueueReplaceState(t, t.state, null));
    }
    function vC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          rS.has(s) || (rS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dS.enqueueReplaceState(t, t.state, null);
      }
    }
    function pS(e, t, a, i) {
      db(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Rg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = qn(s);
      else {
        var f = Ef(e, t, !0);
        u.context = Cf(e, f);
      }
      {
        if (u.state === a) {
          var p = gt(t) || "Component";
          oS.has(p) || (oS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & cn && ul.recordLegacyContextWarning(e, u), ul.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (fS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (pb(e, u), Gh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = be;
        y |= Aa, (e.mode & qr) !== ie && (y |= ja), e.flags |= y;
      }
    }
    function vb(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = qn(p);
      else {
        var y = Ef(e, t, !0);
        v = Cf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && vC(e, u, a, v), kE();
      var b = e.memoizedState, A = u.state = b;
      if (Gh(e, a, u, i), A = e.memoizedState, s === a && b === A && !kh() && !qh()) {
        if (typeof u.componentDidMount == "function") {
          var F = be;
          F |= Aa, (e.mode & qr) !== ie && (F |= ja), e.flags |= F;
        }
        return !1;
      }
      typeof g == "function" && (fS(e, t, g, a), A = e.memoizedState);
      var P = qh() || fC(e, t, s, a, b, A, v);
      if (P) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = be;
          se |= Aa, (e.mode & qr) !== ie && (se |= ja), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ae = be;
          Ae |= Aa, (e.mode & qr) !== ie && (Ae |= ja), e.flags |= Ae;
        }
        e.memoizedProps = a, e.memoizedState = A;
      }
      return u.props = a, u.state = A, u.context = v, P;
    }
    function hb(e, t, a, i, u) {
      var s = t.stateNode;
      DE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : cl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = si;
      if (typeof g == "object" && g !== null)
        _ = qn(g);
      else {
        var b = Ef(t, a, !0);
        _ = Cf(t, b);
      }
      var A = a.getDerivedStateFromProps, F = typeof A == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !F && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && vC(t, s, i, _), kE();
      var P = t.memoizedState, se = s.state = P;
      if (Gh(t, i, s, u), se = t.memoizedState, f === v && P === se && !kh() && !qh() && !oe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= be), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Un), !1;
      typeof A == "function" && (fS(t, a, A, i), se = t.memoizedState);
      var Ae = qh() || fC(t, a, p, i, P, se, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      oe;
      return Ae ? (!F && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, _)), typeof s.componentDidUpdate == "function" && (t.flags |= be), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Un)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= be), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Un), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = _, Ae;
    }
    function dc(e, t) {
      return {
        value: e,
        source: t,
        stack: Xu(t),
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
    function mb(e, t) {
      return !0;
    }
    function hS(e, t) {
      try {
        var a = mb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === le)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ke(e) || "Anonymous";
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
    var yb = typeof WeakMap == "function" ? WeakMap : Map;
    function hC(e, t, a) {
      var i = Vu(nn, a);
      i.tag = Eg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        s_(u), hS(e, t);
      }, i;
    }
    function mS(e, t, a) {
      var i = Vu(nn, a);
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
        x1(e), hS(e, t), typeof u != "function" && u_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Xr(e.lanes, _e) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function mC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new yb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = c_.bind(null, e, t, a);
        ha && Gp(e, a), t.then(s, s);
      }
    }
    function gb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Sb(e, t) {
      var a = e.tag;
      if ((e.mode & Ne) === ie && (a === we || a === Fe || a === qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function yC(e) {
      var t = e;
      do {
        if (t.tag === Re && Jw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function gC(e, t, a, i, u) {
      if ((e.mode & Ne) === ie) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= Je, a.flags |= Lc, a.flags &= ~(Lv | Ol), a.tag === le) {
            var s = a.alternate;
            if (s === null)
              a.tag = En;
            else {
              var f = Vu(nn, _e);
              f.tag = Ih, Bo(a, f, _e);
            }
          }
          a.lanes = at(a.lanes, _e);
        }
        return e;
      }
      return e.flags |= er, e.lanes = u, e;
    }
    function Eb(e, t, a, i, u) {
      if (a.flags |= Ol, ha && Gp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Sb(a), Or() && a.mode & Ne && sE();
        var f = yC(t);
        if (f !== null) {
          f.flags &= ~Rr, gC(f, t, a, e, u), f.mode & Ne && mC(e, s, u), gb(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            mC(e, s, u), qS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Or() && a.mode & Ne) {
        sE();
        var v = yC(t);
        if (v !== null) {
          (v.flags & er) === Ue && (v.flags |= Rr), gC(v, t, a, e, u), og(dc(i, a));
          return;
        }
      }
      i = dc(i, a), Jx(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= er;
            var _ = bo(u);
            y.lanes = at(y.lanes, _);
            var b = hC(y, g, _);
            Tg(y, b);
            return;
          }
          case le:
            var A = i, F = y.type, P = y.stateNode;
            if ((y.flags & Je) === Ue && (typeof F.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !y1(P))) {
              y.flags |= er;
              var se = bo(u);
              y.lanes = at(y.lanes, se);
              var Ae = mS(y, A, se);
              Tg(y, Ae);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Cb() {
      return null;
    }
    var Mp = ne.ReactCurrentOwner, fl = !1, yS, Np, gS, SS, ES, pc, CS, Sm, zp;
    yS = {}, Np = {}, gS = {}, SS = {}, ES = {}, pc = !1, CS = {}, Sm = {}, zp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = CE(t, null, a, i) : t.child = bf(t, e.child, a, i);
    }
    function Rb(e, t, a, i) {
      t.child = bf(t, e.child, null, i), t.child = bf(t, null, a, i);
    }
    function SC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      _f(t, u), ma(t);
      {
        if (Mp.current = t, Jn(!0), v = Nf(e, t, f, i, p, u), y = zf(), t.mode & cn) {
          Vn(!0);
          try {
            v = Nf(e, t, f, i, p, u), y = zf();
          } finally {
            Vn(!1);
          }
        }
        Jn(!1);
      }
      return ya(), e !== null && !fl ? (UE(e, t, u), Bu(e, t, u)) : (Or() && y && ng(t), t.flags |= ri, Ra(e, t, v, u), t.child);
    }
    function EC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (__(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Bf(s), t.tag = qe, t.type = f, wS(t, s), CC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && il(
            p,
            i,
            // Resolved props
            "prop",
            gt(s)
          ), a.defaultProps !== void 0) {
            var v = gt(s) || "Unknown";
            zp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), zp[v] = !0);
          }
        }
        var y = l0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && il(
          _,
          i,
          // Resolved props
          "prop",
          gt(g)
        );
      }
      var b = e.child, A = OS(e, u);
      if (!A) {
        var F = b.memoizedProps, P = a.compare;
        if (P = P !== null ? P : xn, P(F, i) && e.ref === t.ref)
          return Bu(e, t, u);
      }
      t.flags |= ri;
      var se = gc(b, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function CC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === He) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && il(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            gt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (xn(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = g, OS(e, u))
            (e.flags & Lc) !== Ue && (fl = !0);
          else return t.lanes = e.lanes, Bu(e, t, u);
      }
      return RS(e, t, a, i, u);
    }
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || k)
        if ((t.mode & Ne) === ie) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Mm(t, a);
        } else if (Xr(a, ga)) {
          var _ = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var b = s !== null ? s.baseLanes : a;
          Mm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = at(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ga;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Mm(t, v), null;
        }
      else {
        var A;
        s !== null ? (A = at(s.baseLanes, a), t.memoizedState = null) : A = a, Mm(t, A);
      }
      return Ra(e, t, u, a), t.child;
    }
    function Tb(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function wb(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function bb(e, t, a) {
      {
        t.flags |= be;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function TC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= da, t.flags |= gi);
    }
    function RS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f;
      {
        var p = Ef(t, a, !0);
        f = Cf(t, p);
      }
      var v, y;
      _f(t, u), ma(t);
      {
        if (Mp.current = t, Jn(!0), v = Nf(e, t, a, i, f, u), y = zf(), t.mode & cn) {
          Vn(!0);
          try {
            v = Nf(e, t, a, i, f, u), y = zf();
          } finally {
            Vn(!1);
          }
        }
        Jn(!1);
      }
      return ya(), e !== null && !fl ? (UE(e, t, u), Bu(e, t, u)) : (Or() && y && ng(t), t.flags |= ri, Ra(e, t, v, u), t.child);
    }
    function wC(e, t, a, i, u) {
      {
        switch (B_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Je, t.flags |= er;
            var y = new Error("Simulated error coming from DevTools"), g = bo(u);
            t.lanes = at(t.lanes, g);
            var _ = mS(t, dc(y, t), g);
            Tg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && il(
            b,
            i,
            // Resolved props
            "prop",
            gt(a)
          );
        }
      }
      var A;
      Gl(a) ? (A = !0, Lh(t)) : A = !1, _f(t, u);
      var F = t.stateNode, P;
      F === null ? (Cm(e, t), pC(t, a, i), pS(t, a, i, u), P = !0) : e === null ? P = vb(t, a, i, u) : P = hb(e, t, a, i, u);
      var se = TS(e, t, a, P, A, u);
      {
        var Ae = t.stateNode;
        P && Ae.props !== i && (pc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), pc = !0);
      }
      return se;
    }
    function TS(e, t, a, i, u, s) {
      TC(e, t);
      var f = (t.flags & Je) !== Ue;
      if (!i && !f)
        return u && iE(t, a, !1), Bu(e, t, s);
      var p = t.stateNode;
      Mp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, oC();
      else {
        ma(t);
        {
          if (Jn(!0), v = p.render(), t.mode & cn) {
            Vn(!0);
            try {
              p.render();
            } finally {
              Vn(!1);
            }
          }
          Jn(!1);
        }
        ya();
      }
      return t.flags |= ri, e !== null && f ? Rb(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && iE(t, a, !0), t.child;
    }
    function bC(e) {
      var t = e.stateNode;
      t.pendingContext ? rE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rE(e, t.context, !1), wg(e, t.containerInfo);
    }
    function xb(e, t, a) {
      if (bC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      DE(e, t), Gh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & Rr) {
          var g = dc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return xC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = dc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return xC(e, t, p, a, _);
        } else {
          kw(t);
          var b = CE(t, null, p, a);
          t.child = b;
          for (var A = b; A; )
            A.flags = A.flags & ~Zt | yi, A = A.sibling;
        }
      } else {
        if (wf(), p === s)
          return Bu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function xC(e, t, a, i, u) {
      return wf(), og(u), t.flags |= Rr, Ra(e, t, a, i), t.child;
    }
    function _b(e, t, a) {
      ME(t), e === null && ug(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = By(i, u);
      return p ? f = null : s !== null && By(i, s) && (t.flags |= Ua), TC(e, t), Ra(e, t, f, a), t.child;
    }
    function Db(e, t) {
      return e === null && ug(t), null;
    }
    function kb(e, t, a, i) {
      Cm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = D_(v), g = cl(v, u), _;
      switch (y) {
        case we:
          return wS(t, v), t.type = v = Bf(v), _ = RS(null, t, v, g, i), _;
        case le:
          return t.type = v = e0(v), _ = wC(null, t, v, g, i), _;
        case Fe:
          return t.type = v = t0(v), _ = SC(null, t, v, g, i), _;
        case ft: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && il(
              b,
              g,
              // Resolved for outer only
              "prop",
              gt(v)
            );
          }
          return _ = EC(
            null,
            t,
            v,
            cl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var A = "";
      throw v !== null && typeof v == "object" && v.$$typeof === He && (A = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + A));
    }
    function Ob(e, t, a, i, u) {
      Cm(e, t), t.tag = le;
      var s;
      return Gl(a) ? (s = !0, Lh(t)) : s = !1, _f(t, u), pC(t, a, i), pS(t, a, i, u), TS(null, t, a, !0, s, u);
    }
    function Lb(e, t, a, i) {
      Cm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Ef(t, a, !1);
        s = Cf(t, f);
      }
      _f(t, i);
      var p, v;
      ma(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = gt(a) || "Unknown";
          yS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), yS[y] = !0);
        }
        t.mode & cn && ul.recordLegacyContextWarning(t, null), Jn(!0), Mp.current = t, p = Nf(null, t, a, u, s, i), v = zf(), Jn(!1);
      }
      if (ya(), t.flags |= ri, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = gt(a) || "Unknown";
        Np[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Np[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = gt(a) || "Unknown";
          Np[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Np[_] = !0);
        }
        t.tag = le, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Gl(a) ? (b = !0, Lh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Rg(t), dC(t, p), pS(t, a, u, i), TS(null, t, a, !0, b, i);
      } else {
        if (t.tag = we, t.mode & cn) {
          Vn(!0);
          try {
            p = Nf(null, t, a, u, s, i), v = zf();
          } finally {
            Vn(!1);
          }
        }
        return Or() && v && ng(t), Ra(null, t, p, i), wS(t, a), t.child;
      }
    }
    function wS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ma();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), ES[u] || (ES[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = gt(t) || "Unknown";
          zp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), zp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = gt(t) || "Unknown";
          SS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), SS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = gt(t) || "Unknown";
          gS[v] || (S("%s: Function components do not support contextType.", v), gS[v] = !0);
        }
      }
    }
    var bS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Jt
    };
    function xS(e) {
      return {
        baseLanes: e,
        cachePool: Cb(),
        transitions: null
      };
    }
    function Mb(e, t) {
      var a = null;
      return {
        baseLanes: at(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Nb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return _g(e, Tp);
    }
    function zb(e, t) {
      return xo(e.childLanes, t);
    }
    function _C(e, t, a) {
      var i = t.pendingProps;
      $_(t) && (t.flags |= Je);
      var u = ol.current, s = !1, f = (t.flags & Je) !== Ue;
      if (f || Nb(u, e) ? (s = !0, t.flags &= ~Je) : (e === null || e.memoizedState !== null) && (u = Zw(u, zE)), u = kf(u), Io(t, u), e === null) {
        ug(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Hb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = Ub(t, y, g, a), b = t.child;
          return b.memoizedState = xS(a), t.memoizedState = bS, _;
        } else
          return _S(t, y);
      } else {
        var A = e.memoizedState;
        if (A !== null) {
          var F = A.dehydrated;
          if (F !== null)
            return Pb(e, t, f, i, F, A, a);
        }
        if (s) {
          var P = i.fallback, se = i.children, Ae = jb(e, t, se, P, a), ke = t.child, bt = e.child.memoizedState;
          return ke.memoizedState = bt === null ? xS(a) : Mb(bt, a), ke.childLanes = zb(e, a), t.memoizedState = bS, Ae;
        } else {
          var ht = i.children, L = Ab(e, t, ht, a);
          return t.memoizedState = null, L;
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
    function Ub(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ne) === ie && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Xe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Zo(a, u, i, null)) : (p = DS(f, u), v = Zo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function DS(e, t, a) {
      return D1(e, t, Y, null);
    }
    function DC(e, t) {
      return gc(e, t);
    }
    function Ab(e, t, a, i) {
      var u = e.child, s = u.sibling, f = DC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ne) === ie && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Nt) : p.push(s);
      }
      return t.child = f, f;
    }
    function jb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ne) === ie && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & Xe && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = DC(f, v), y.subtreeFlags = f.subtreeFlags & tr;
      var _;
      return p !== null ? _ = gc(p, i) : (_ = Zo(i, s, u, null), _.flags |= Zt), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Em(e, t, a, i) {
      i !== null && og(i), bf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = _S(t, s);
      return f.flags |= Zt, t.memoizedState = null, f;
    }
    function Fb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = DS(f, s), v = Zo(i, s, u, null);
      return v.flags |= Zt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ne) !== ie && bf(t, e.child, null, u), v;
    }
    function Hb(e, t, a) {
      return (e.mode & Ne) === ie ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = _e) : Qy(t) ? e.lanes = el : e.lanes = ga, null;
    }
    function Pb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var L = vS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Em(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Je, null;
          var V = i.children, M = i.fallback, X = Fb(e, t, V, M, f), ye = t.child;
          return ye.memoizedState = xS(f), t.memoizedState = bS, X;
        }
      else {
        if (_w(), (t.mode & Ne) === ie)
          return Em(
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
            var g = IT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = vS(_, p, y);
          return Em(e, t, f, b);
        }
        var A = Xr(f, e.childLanes);
        if (fl || A) {
          var F = Lm();
          if (F !== null) {
            var P = zd(F, f);
            if (P !== Jt && P !== s.retryLane) {
              s.retryLane = P;
              var se = nn;
              $a(e, P), cr(F, e, P, se);
            }
          }
          qS();
          var Ae = vS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Em(e, t, f, Ae);
        } else if (X0(u)) {
          t.flags |= Je, t.child = e.child;
          var ke = f_.bind(null, e);
          return YT(u, ke), null;
        } else {
          Ow(t, u, s.treeContext);
          var bt = i.children, ht = _S(t, bt);
          return ht.flags |= yi, ht;
        }
      }
    }
    function kC(e, t, a) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), gg(e.return, t, a);
    }
    function Vb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && kC(i, a, e);
        } else if (i.tag === Ct)
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
    function Bb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Zh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function $b(e) {
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
    function Ib(e, t) {
      e !== void 0 && !Sm[e] && (e !== "collapsed" && e !== "hidden" ? (Sm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Sm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function OC(e, t) {
      {
        var a = Dt(e), i = !a && typeof Pr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Yb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Dt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!OC(e[a], a))
              return;
        } else {
          var i = Pr(e);
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
      $b(u), Ib(s, u), Yb(f, u), Ra(e, t, f, a);
      var p = ol.current, v = _g(p, Tp);
      if (v)
        p = Dg(p, Tp), t.flags |= Je;
      else {
        var y = e !== null && (e.flags & Je) !== Ue;
        y && Vb(t, t.child, a), p = kf(p);
      }
      if (Io(t, p), (t.mode & Ne) === ie)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Bb(t.child), _;
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
            var b = null, A = t.child;
            for (t.child = null; A !== null; ) {
              var F = A.alternate;
              if (F !== null && Zh(F) === null) {
                t.child = A;
                break;
              }
              var P = A.sibling;
              A.sibling = b, b = A, A = P;
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
    function Qb(e, t, a) {
      wg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = bf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var MC = !1;
    function Wb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || MC || (MC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && il(v, s, "prop", "Context.Provider");
      }
      if (wE(t, u, p), f !== null) {
        var y = f.value;
        if (De(y, p)) {
          if (f.children === s.children && !kh())
            return Bu(e, t, a);
        } else
          $w(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var NC = !1;
    function Gb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (NC || (NC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), _f(t, a);
      var f = qn(i);
      ma(t);
      var p;
      return Mp.current = t, Jn(!0), p = s(f), Jn(!1), ya(), t.flags |= ri, Ra(e, t, p, a), t.child;
    }
    function Up() {
      fl = !0;
    }
    function Cm(e, t) {
      (t.mode & Ne) === ie && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
    }
    function Bu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), oC(), Wp(t.lanes), Xr(a, t.childLanes) ? (Vw(e, t), t.child) : null;
    }
    function qb(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Nt) : s.push(e), a.flags |= Zt, a;
      }
    }
    function OS(e, t) {
      var a = e.lanes;
      return !!Xr(a, t);
    }
    function Kb(e, t, a) {
      switch (t.tag) {
        case te:
          bC(t), t.stateNode, wf();
          break;
        case Z:
          ME(t);
          break;
        case le: {
          var i = t.type;
          Gl(i) && Lh(t);
          break;
        }
        case de:
          wg(t, t.stateNode.containerInfo);
          break;
        case Ze: {
          var u = t.memoizedProps.value, s = t.type._context;
          wE(t, s, u);
          break;
        }
        case xt:
          {
            var f = Xr(a, t.childLanes);
            f && (t.flags |= be);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Io(t, kf(ol.current)), t.flags |= Je, null;
            var y = t.child, g = y.childLanes;
            if (Xr(a, g))
              return _C(e, t, a);
            Io(t, kf(ol.current));
            var _ = Bu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Io(t, kf(ol.current));
          break;
        }
        case Ct: {
          var b = (e.flags & Je) !== Ue, A = Xr(a, t.childLanes);
          if (b) {
            if (A)
              return LC(e, t, a);
            t.flags |= Je;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), Io(t, ol.current), A)
            break;
          return null;
        }
        case Be:
        case it:
          return t.lanes = Y, RC(e, t, a);
      }
      return Bu(e, t, a);
    }
    function zC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return qb(e, t, l0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || kh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = OS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Je) === Ue)
            return fl = !1, Kb(e, t, a);
          (e.flags & Lc) !== Ue ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, Or() && Cw(t)) {
        var f = t.index, p = Rw();
        oE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Le:
          return Lb(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return kb(e, t, v, a);
        }
        case we: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : cl(y, g);
          return RS(e, t, y, _, a);
        }
        case le: {
          var b = t.type, A = t.pendingProps, F = t.elementType === b ? A : cl(b, A);
          return wC(e, t, b, F, a);
        }
        case te:
          return xb(e, t, a);
        case Z:
          return _b(e, t, a);
        case pe:
          return Db(e, t);
        case Re:
          return _C(e, t, a);
        case de:
          return Qb(e, t, a);
        case Fe: {
          var P = t.type, se = t.pendingProps, Ae = t.elementType === P ? se : cl(P, se);
          return SC(e, t, P, Ae, a);
        }
        case We:
          return Tb(e, t, a);
        case At:
          return wb(e, t, a);
        case xt:
          return bb(e, t, a);
        case Ze:
          return Wb(e, t, a);
        case Et:
          return Gb(e, t, a);
        case ft: {
          var ke = t.type, bt = t.pendingProps, ht = cl(ke, bt);
          if (t.type !== t.elementType) {
            var L = ke.propTypes;
            L && il(
              L,
              ht,
              // Resolved for outer only
              "prop",
              gt(ke)
            );
          }
          return ht = cl(ke.type, ht), EC(e, t, ke, ht, a);
        }
        case qe:
          return CC(e, t, t.type, t.pendingProps, a);
        case En: {
          var V = t.type, M = t.pendingProps, X = t.elementType === V ? M : cl(V, M);
          return Ob(e, t, V, X, a);
        }
        case Ct:
          return LC(e, t, a);
        case ln:
          break;
        case Be:
          return RC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uf(e) {
      e.flags |= be;
    }
    function UC(e) {
      e.flags |= da, e.flags |= gi;
    }
    var AC, LS, jC, FC;
    AC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === pe)
          gT(e, u.stateNode);
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
        var f = t.stateNode, p = bg(), v = ET(f, a, s, i, u, p);
        t.updateQueue = v, v && Uf(t);
      }
    }, FC = function(e, t, a, i) {
      a !== i && Uf(t);
    };
    function Ap(e, t) {
      if (!Or())
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
    function Mr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = Ue;
      if (t) {
        if ((e.mode & Xe) !== ie) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = at(a, at(y.lanes, y.childLanes)), i |= y.subtreeFlags & tr, i |= y.flags & tr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = at(a, at(g.lanes, g.childLanes)), i |= g.subtreeFlags & tr, i |= g.flags & tr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Xe) !== ie) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = at(a, at(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = at(a, at(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Xb(e, t, a) {
      if (Uw() && (t.mode & Ne) !== ie && (t.flags & Je) === Ue)
        return hE(t), wf(), t.flags |= Rr | Ol | er, !1;
      var i = Ah(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Nw(t), Mr(t), (t.mode & Xe) !== ie) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (wf(), (t.flags & Je) === Ue && (t.memoizedState = null), t.flags |= be, Mr(t), (t.mode & Xe) !== ie) {
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
        case Le:
        case an:
        case qe:
        case we:
        case Fe:
        case We:
        case At:
        case xt:
        case Et:
        case ft:
          return Mr(t), null;
        case le: {
          var u = t.type;
          return Gl(u) && Oh(t), Mr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Df(t), Jy(t), Og(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ah(t);
            if (f)
              Uf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== Ue) && (t.flags |= Un, mE());
            }
          }
          return LS(e, t), Mr(t), null;
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
              return Mr(t), null;
            }
            var g = bg(), _ = Ah(t);
            if (_)
              Lw(t, v, g) && Uf(t);
            else {
              var b = yT(y, i, v, g, t);
              AC(b, t, !1, !1), t.stateNode = b, ST(b, y, i, v) && Uf(t);
            }
            t.ref !== null && UC(t);
          }
          return Mr(t), null;
        }
        case pe: {
          var A = i;
          if (e && t.stateNode != null) {
            var F = e.memoizedProps;
            FC(e, t, F, A);
          } else {
            if (typeof A != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = LE(), se = bg(), Ae = Ah(t);
            Ae ? Mw(t) && Uf(t) : t.stateNode = CT(A, P, se, t);
          }
          return Mr(t), null;
        }
        case Re: {
          Of(t);
          var ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bt = Xb(e, t, ke);
            if (!bt)
              return t.flags & er ? t : null;
          }
          if ((t.flags & Je) !== Ue)
            return t.lanes = a, (t.mode & Xe) !== ie && tS(t), t;
          var ht = ke !== null, L = e !== null && e.memoizedState !== null;
          if (ht !== L && ht) {
            var V = t.child;
            if (V.flags |= kl, (t.mode & Ne) !== ie) {
              var M = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !I);
              M || _g(ol.current, zE) ? Zx() : qS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= be), Mr(t), (t.mode & Xe) !== ie && ht) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case de:
          return Df(t), LS(e, t), e === null && vw(t.stateNode.containerInfo), Mr(t), null;
        case Ze:
          var ce = t.type._context;
          return yg(ce, t), Mr(t), null;
        case En: {
          var Ge = t.type;
          return Gl(Ge) && Oh(t), Mr(t), null;
        }
        case Ct: {
          Of(t);
          var tt = t.memoizedState;
          if (tt === null)
            return Mr(t), null;
          var qt = (t.flags & Je) !== Ue, zt = tt.rendering;
          if (zt === null)
            if (qt)
              Ap(tt, !1);
            else {
              var $n = e_() && (e === null || (e.flags & Je) === Ue);
              if (!$n)
                for (var Ut = t.child; Ut !== null; ) {
                  var Fn = Zh(Ut);
                  if (Fn !== null) {
                    qt = !0, t.flags |= Je, Ap(tt, !1);
                    var ta = Fn.updateQueue;
                    return ta !== null && (t.updateQueue = ta, t.flags |= be), t.subtreeFlags = Ue, Bw(t, a), Io(t, Dg(ol.current, Tp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              tt.tail !== null && An() > l1() && (t.flags |= Je, qt = !0, Ap(tt, !1), t.lanes = Hv);
            }
          else {
            if (!qt) {
              var jr = Zh(zt);
              if (jr !== null) {
                t.flags |= Je, qt = !0;
                var fi = jr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= be), Ap(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !zt.alternate && !Or())
                  return Mr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              An() * 2 - tt.renderingStartTime > l1() && a !== ga && (t.flags |= Je, qt = !0, Ap(tt, !1), t.lanes = Hv);
            }
            if (tt.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var ba = tt.last;
              ba !== null ? ba.sibling = zt : t.child = zt, tt.last = zt;
            }
          }
          if (tt.tail !== null) {
            var xa = tt.tail;
            tt.rendering = xa, tt.tail = xa.sibling, tt.renderingStartTime = An(), xa.sibling = null;
            var na = ol.current;
            return qt ? na = Dg(na, Tp) : na = kf(na), Io(t, na), xa;
          }
          return Mr(t), null;
        }
        case ln:
          break;
        case Be:
        case it: {
          GS(t);
          var Wu = t.memoizedState, $f = Wu !== null;
          if (e !== null) {
            var Zp = e.memoizedState, nu = Zp !== null;
            nu !== $f && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !k && (t.flags |= kl);
          }
          return !$f || (t.mode & Ne) === ie ? Mr(t) : Xr(tu, ga) && (Mr(t), t.subtreeFlags & (Zt | be) && (t.flags |= kl)), null;
        }
        case _t:
          return null;
        case lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zb(e, t, a) {
      switch (rg(t), t.tag) {
        case le: {
          var i = t.type;
          Gl(i) && Oh(t);
          var u = t.flags;
          return u & er ? (t.flags = u & ~er | Je, (t.mode & Xe) !== ie && tS(t), t) : null;
        }
        case te: {
          t.stateNode, Df(t), Jy(t), Og();
          var s = t.flags;
          return (s & er) !== Ue && (s & Je) === Ue ? (t.flags = s & ~er | Je, t) : null;
        }
        case Z:
          return xg(t), null;
        case Re: {
          Of(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            wf();
          }
          var p = t.flags;
          return p & er ? (t.flags = p & ~er | Je, (t.mode & Xe) !== ie && tS(t), t) : null;
        }
        case Ct:
          return Of(t), null;
        case de:
          return Df(t), null;
        case Ze:
          var v = t.type._context;
          return yg(v, t), null;
        case Be:
        case it:
          return GS(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function PC(e, t, a) {
      switch (rg(t), t.tag) {
        case le: {
          var i = t.type.childContextTypes;
          i != null && Oh(t);
          break;
        }
        case te: {
          t.stateNode, Df(t), Jy(t), Og();
          break;
        }
        case Z: {
          xg(t);
          break;
        }
        case de:
          Df(t);
          break;
        case Re:
          Of(t);
          break;
        case Ct:
          Of(t);
          break;
        case Ze:
          var u = t.type._context;
          yg(u, t);
          break;
        case Be:
        case it:
          GS(t);
          break;
      }
    }
    var VC = null;
    VC = /* @__PURE__ */ new Set();
    var Rm = !1, Nr = !1, Jb = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Af = null, jf = null;
    function ex(e) {
      ni(null, function() {
        throw e;
      }), qi();
    }
    var tx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Xe)
        try {
          Jl(), t.componentWillUnmount();
        } finally {
          Zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function BC(e, t) {
      try {
        Wo(ar, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function MS(e, t, a) {
      try {
        tx(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function nx(e, t, a) {
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
    function Ff(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (mt && dt && e.mode & Xe)
              try {
                Jl(), i = a(null);
              } finally {
                Zl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function Tm(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var IC = !1;
    function rx(e, t) {
      hT(e.containerInfo), Ee = t, ax();
      var a = IC;
      return IC = !1, a;
    }
    function ax() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & Qr) !== Ue && t !== null ? (t.return = e, Ee = t) : ix();
      }
    }
    function ix() {
      for (; Ee !== null; ) {
        var e = Ee;
        yn(e);
        try {
          lx(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function lx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Un) !== Ue) {
        switch (yn(e), e.tag) {
          case we:
          case Fe:
          case qe:
            break;
          case le: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !pc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : cl(e.type, i), u);
              {
                var p = VC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              PT(v.containerInfo);
            }
            break;
          }
          case Z:
          case pe:
          case de:
          case En:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Lr) !== Ia ? Fc(t) : (e & ar) !== Ia && po(t), (e & ql) !== Ia && qp(!0), Tm(t, a, p), (e & ql) !== Ia && qp(!1), (e & Lr) !== Ia ? jv() : (e & ar) !== Ia && vo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Wo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Lr) !== Ia ? jc(t) : (e & ar) !== Ia && _s(t);
            var f = s.create;
            (e & ql) !== Ia && qp(!0), s.destroy = f(), (e & ql) !== Ia && qp(!1), (e & Lr) !== Ia ? Av() : (e & ar) !== Ia && Si();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ar) !== Ue ? v = "useLayoutEffect" : (s.tag & ql) !== Ue ? v = "useInsertionEffect" : v = "useEffect";
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
    function ux(e, t) {
      if ((t.flags & be) !== Ue)
        switch (t.tag) {
          case xt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = lC(), p = t.alternate === null ? "mount" : "update";
            iC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case xt:
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
    function ox(e, t, a, i) {
      if ((a.flags & ai) !== Ue)
        switch (a.tag) {
          case we:
          case Fe:
          case qe: {
            if (!Nr)
              if (a.mode & Xe)
                try {
                  Jl(), Wo(ar | rr, a);
                } finally {
                  Zl(a);
                }
              else
                Wo(ar | rr, a);
            break;
          }
          case le: {
            var u = a.stateNode;
            if (a.flags & be && !Nr)
              if (t === null)
                if (a.type === a.elementType && !pc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Xe)
                  try {
                    Jl(), u.componentDidMount();
                  } finally {
                    Zl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : cl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !pc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Xe)
                  try {
                    Jl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Zl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !pc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), OE(a, p, u));
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
                  case le:
                    y = a.child.stateNode;
                    break;
                }
              OE(a, v, y);
            }
            break;
          }
          case Z: {
            var g = a.stateNode;
            if (t === null && a.flags & be) {
              var _ = a.type, b = a.memoizedProps;
              xT(g, _, b);
            }
            break;
          }
          case pe:
            break;
          case de:
            break;
          case xt: {
            {
              var A = a.memoizedProps, F = A.onCommit, P = A.onRender, se = a.stateNode.effectDuration, Ae = lC(), ke = t === null ? "mount" : "update";
              iC() && (ke = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ae);
              {
                typeof F == "function" && F(a.memoizedProps.id, ke, se, Ae), i_(a);
                var bt = a.return;
                e: for (; bt !== null; ) {
                  switch (bt.tag) {
                    case te:
                      var ht = bt.stateNode;
                      ht.effectDuration += se;
                      break e;
                    case xt:
                      var L = bt.stateNode;
                      L.effectDuration += se;
                      break e;
                  }
                  bt = bt.return;
                }
              }
            }
            break;
          }
          case Re: {
            mx(e, a);
            break;
          }
          case Ct:
          case En:
          case ln:
          case Be:
          case it:
          case lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Nr || a.flags & da && YC(a);
    }
    function sx(e) {
      switch (e.tag) {
        case we:
        case Fe:
        case qe: {
          if (e.mode & Xe)
            try {
              Jl(), BC(e, e.return);
            } finally {
              Zl(e);
            }
          else
            BC(e, e.return);
          break;
        }
        case le: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && nx(e, e.return, t), $C(e, e.return);
          break;
        }
        case Z: {
          $C(e, e.return);
          break;
        }
      }
    }
    function cx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? AT(u) : FT(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === pe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? jT(s) : HT(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === it) && i.memoizedState !== null && i !== e)) {
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
          if (e.mode & Xe)
            try {
              Jl(), u = t(i);
            } finally {
              Zl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = i;
      }
    }
    function fx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function QC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, QC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && yw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function dx(e) {
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
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== pe && t.tag !== en; ) {
          if (t.flags & Zt || t.child === null || t.tag === de)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Zt))
          return t.stateNode;
      }
    }
    function px(e) {
      var t = dx(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & Ua && (K0(a), t.flags &= ~Ua);
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
      var i = e.tag, u = i === Z || i === pe;
      if (u) {
        var s = e.stateNode;
        t ? MT(a, s, t) : OT(a, s);
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
      var i = e.tag, u = i === Z || i === pe;
      if (u) {
        var s = e.stateNode;
        t ? LT(a, s, t) : kT(a, s);
      } else if (i !== de) {
        var f = e.child;
        if (f !== null) {
          zS(f, t, a);
          for (var p = f.sibling; p !== null; )
            zS(p, t, a), p = p.sibling;
        }
      }
    }
    var zr = null, pl = !1;
    function vx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Z: {
              zr = i.stateNode, pl = !1;
              break e;
            }
            case te: {
              zr = i.stateNode.containerInfo, pl = !0;
              break e;
            }
            case de: {
              zr = i.stateNode.containerInfo, pl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (zr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        qC(e, t, a), zr = null, pl = !1;
      }
      fx(a);
    }
    function Go(e, t, a) {
      for (var i = a.child; i !== null; )
        qC(e, t, i), i = i.sibling;
    }
    function qC(e, t, a) {
      switch (md(a), a.tag) {
        case Z:
          Nr || Ff(a, t);
        case pe: {
          {
            var i = zr, u = pl;
            zr = null, Go(e, t, a), zr = i, pl = u, zr !== null && (pl ? zT(zr, a.stateNode) : NT(zr, a.stateNode));
          }
          return;
        }
        case en: {
          zr !== null && (pl ? UT(zr, a.stateNode) : Yy(zr, a.stateNode));
          return;
        }
        case de: {
          {
            var s = zr, f = pl;
            zr = a.stateNode.containerInfo, pl = !0, Go(e, t, a), zr = s, pl = f;
          }
          return;
        }
        case we:
        case Fe:
        case ft:
        case qe: {
          if (!Nr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, b = _.destroy, A = _.tag;
                  b !== void 0 && ((A & ql) !== Ia ? Tm(a, t, b) : (A & ar) !== Ia && (po(a), a.mode & Xe ? (Jl(), Tm(a, t, b), Zl(a)) : Tm(a, t, b), vo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Go(e, t, a);
          return;
        }
        case le: {
          if (!Nr) {
            Ff(a, t);
            var F = a.stateNode;
            typeof F.componentWillUnmount == "function" && MS(a, t, F);
          }
          Go(e, t, a);
          return;
        }
        case ln: {
          Go(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ne
          ) {
            var P = Nr;
            Nr = P || a.memoizedState !== null, Go(e, t, a), Nr = P;
          } else
            Go(e, t, a);
          break;
        }
        default: {
          Go(e, t, a);
          return;
        }
      }
    }
    function hx(e) {
      e.memoizedState;
    }
    function mx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && ew(s);
          }
        }
      }
    }
    function KC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Jb()), t.forEach(function(i) {
          var u = d_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ha)
              if (Af !== null && jf !== null)
                Gp(jf, Af);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function yx(e, t, a) {
      Af = a, jf = e, yn(t), XC(t, e), yn(t), Af = null, jf = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            vx(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = us();
      if (t.subtreeFlags & Wr)
        for (var p = t.child; p !== null; )
          yn(p), XC(p, e), p = p.sibling;
      yn(f);
    }
    function XC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case we:
        case Fe:
        case ft:
        case qe: {
          if (vl(t, e), eu(e), u & be) {
            try {
              dl(ql | rr, e, e.return), Wo(ql | rr, e);
            } catch (Ge) {
              fn(e, e.return, Ge);
            }
            if (e.mode & Xe) {
              try {
                Jl(), dl(ar | rr, e, e.return);
              } catch (Ge) {
                fn(e, e.return, Ge);
              }
              Zl(e);
            } else
              try {
                dl(ar | rr, e, e.return);
              } catch (Ge) {
                fn(e, e.return, Ge);
              }
          }
          return;
        }
        case le: {
          vl(t, e), eu(e), u & da && i !== null && Ff(i, i.return);
          return;
        }
        case Z: {
          vl(t, e), eu(e), u & da && i !== null && Ff(i, i.return);
          {
            if (e.flags & Ua) {
              var s = e.stateNode;
              try {
                K0(s);
              } catch (Ge) {
                fn(e, e.return, Ge);
              }
            }
            if (u & be) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    _T(f, g, y, v, p, e);
                  } catch (Ge) {
                    fn(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case pe: {
          if (vl(t, e), eu(e), u & be) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, A = i !== null ? i.memoizedProps : b;
            try {
              DT(_, A, b);
            } catch (Ge) {
              fn(e, e.return, Ge);
            }
          }
          return;
        }
        case te: {
          if (vl(t, e), eu(e), u & be && i !== null) {
            var F = i.memoizedState;
            if (F.isDehydrated)
              try {
                JT(t.containerInfo);
              } catch (Ge) {
                fn(e, e.return, Ge);
              }
          }
          return;
        }
        case de: {
          vl(t, e), eu(e);
          return;
        }
        case Re: {
          vl(t, e), eu(e);
          var P = e.child;
          if (P.flags & kl) {
            var se = P.stateNode, Ae = P.memoizedState, ke = Ae !== null;
            if (se.isHidden = ke, ke) {
              var bt = P.alternate !== null && P.alternate.memoizedState !== null;
              bt || Xx();
            }
          }
          if (u & be) {
            try {
              hx(e);
            } catch (Ge) {
              fn(e, e.return, Ge);
            }
            KC(e);
          }
          return;
        }
        case Be: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ne
          ) {
            var L = Nr;
            Nr = L || ht, vl(t, e), Nr = L;
          } else
            vl(t, e);
          if (eu(e), u & kl) {
            var V = e.stateNode, M = e.memoizedState, X = M !== null, ye = e;
            if (V.isHidden = X, X && !ht && (ye.mode & Ne) !== ie) {
              Ee = ye;
              for (var ce = ye.child; ce !== null; )
                Ee = ce, Sx(ce), ce = ce.sibling;
            }
            cx(ye, X);
          }
          return;
        }
        case Ct: {
          vl(t, e), eu(e), u & be && KC(e);
          return;
        }
        case ln:
          return;
        default: {
          vl(t, e), eu(e);
          return;
        }
      }
    }
    function eu(e) {
      var t = e.flags;
      if (t & Zt) {
        try {
          px(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~Zt;
      }
      t & yi && (e.flags &= ~yi);
    }
    function gx(e, t, a) {
      Af = a, jf = t, Ee = e, ZC(e, t, a), Af = null, jf = null;
    }
    function ZC(e, t, a) {
      for (var i = (e.mode & Ne) !== ie; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Be && i) {
          var f = u.memoizedState !== null, p = f || Rm;
          if (p) {
            US(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Nr, _ = Rm, b = Nr;
            Rm = p, Nr = g, Nr && !b && (Ee = u, Ex(u));
            for (var A = s; A !== null; )
              Ee = A, ZC(
                A,
                // New root; bubble back up to here and stop.
                t,
                a
              ), A = A.sibling;
            Ee = u, Rm = _, Nr = b, US(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ai) !== Ue && s !== null ? (s.return = u, Ee = s) : US(e, t, a);
      }
    }
    function US(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & ai) !== Ue) {
          var u = i.alternate;
          yn(i);
          try {
            ox(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          un();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function Sx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case we:
          case Fe:
          case ft:
          case qe: {
            if (t.mode & Xe)
              try {
                Jl(), dl(ar, t, t.return);
              } finally {
                Zl(t);
              }
            else
              dl(ar, t, t.return);
            break;
          }
          case le: {
            Ff(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && MS(t, t.return, i);
            break;
          }
          case Z: {
            Ff(t, t.return);
            break;
          }
          case Be: {
            var u = t.memoizedState !== null;
            if (u) {
              JC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : JC(e);
      }
    }
    function JC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Ex(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            e1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : e1(e);
      }
    }
    function e1(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        yn(t);
        try {
          sx(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (un(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Cx(e, t, a, i) {
      Ee = t, Rx(t, e, a, i);
    }
    function Rx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & Gr) !== Ue && s !== null ? (s.return = u, Ee = s) : Tx(e, t, a, i);
      }
    }
    function Tx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & Yr) !== Ue) {
          yn(u);
          try {
            wx(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          un();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function wx(e, t, a, i) {
      switch (t.tag) {
        case we:
        case Fe:
        case qe: {
          if (t.mode & Xe) {
            eS();
            try {
              Wo(Lr | rr, t);
            } finally {
              Jg(t);
            }
          } else
            Wo(Lr | rr, t);
          break;
        }
      }
    }
    function bx(e) {
      Ee = e, xx();
    }
    function xx() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & Nt) !== Ue) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, kx(u, e);
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
            Ee = e;
          }
        }
        (e.subtreeFlags & Gr) !== Ue && t !== null ? (t.return = e, Ee = t) : _x();
      }
    }
    function _x() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & Yr) !== Ue && (yn(e), Dx(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Dx(e) {
      switch (e.tag) {
        case we:
        case Fe:
        case qe: {
          e.mode & Xe ? (eS(), dl(Lr | rr, e, e.return), Jg(e)) : dl(Lr | rr, e, e.return);
          break;
        }
      }
    }
    function kx(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        yn(a), Lx(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : Ox(e);
      }
    }
    function Ox(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (QC(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function Lx(e, t) {
      switch (e.tag) {
        case we:
        case Fe:
        case qe: {
          e.mode & Xe ? (eS(), dl(Lr, e, t), Jg(e)) : dl(Lr, e, t);
          break;
        }
      }
    }
    function Mx(e) {
      switch (e.tag) {
        case we:
        case Fe:
        case qe: {
          try {
            Wo(ar | rr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case le: {
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
    function Nx(e) {
      switch (e.tag) {
        case we:
        case Fe:
        case qe: {
          try {
            Wo(Lr | rr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function zx(e) {
      switch (e.tag) {
        case we:
        case Fe:
        case qe: {
          try {
            dl(ar | rr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case le: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && MS(e, e.return, t);
          break;
        }
      }
    }
    function Ux(e) {
      switch (e.tag) {
        case we:
        case Fe:
        case qe:
          try {
            dl(Lr | rr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var jp = Symbol.for;
      jp("selector.component"), jp("selector.has_pseudo_class"), jp("selector.role"), jp("selector.test_id"), jp("selector.text");
    }
    var Ax = [];
    function jx() {
      Ax.forEach(function(e) {
        return e();
      });
    }
    var Fx = ne.ReactCurrentActQueue;
    function Hx(e) {
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
        return !e && Fx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Px = Math.ceil, AS = ne.ReactCurrentDispatcher, jS = ne.ReactCurrentOwner, Ur = ne.ReactCurrentBatchConfig, hl = ne.ReactCurrentActQueue, ur = (
      /*             */
      0
    ), n1 = (
      /*               */
      1
    ), Ar = (
      /*                */
      2
    ), Mi = (
      /*                */
      4
    ), $u = 0, Fp = 1, vc = 2, wm = 3, Hp = 4, r1 = 5, FS = 6, wt = ur, Ta = null, Ln = null, or = Y, tu = Y, HS = Fo(Y), sr = $u, Pp = null, bm = Y, Vp = Y, xm = Y, Bp = null, Ya = null, PS = 0, a1 = 500, i1 = 1 / 0, Vx = 500, Iu = null;
    function $p() {
      i1 = An() + Vx;
    }
    function l1() {
      return i1;
    }
    var _m = !1, VS = null, Hf = null, hc = !1, qo = null, Ip = Y, BS = [], $S = null, Bx = 50, Yp = 0, IS = null, YS = !1, Dm = !1, $x = 50, Pf = 0, km = null, Qp = nn, Om = Y, u1 = !1;
    function Lm() {
      return Ta;
    }
    function wa() {
      return (wt & (Ar | Mi)) !== ur ? An() : (Qp !== nn || (Qp = An()), Qp);
    }
    function Ko(e) {
      var t = e.mode;
      if ((t & Ne) === ie)
        return _e;
      if ((wt & Ar) !== ur && or !== Y)
        return bo(or);
      var a = Fw() !== jw;
      if (a) {
        if (Ur.transition !== null) {
          var i = Ur.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Om === Jt && (Om = Tr()), Om;
      }
      var u = br();
      if (u !== Jt)
        return u;
      var s = RT();
      return s;
    }
    function Ix(e) {
      var t = e.mode;
      return (t & Ne) === ie ? _e : wr();
    }
    function cr(e, t, a, i) {
      v_(), u1 && S("useInsertionEffect must not schedule updates."), YS && (Dm = !0), _o(e, a, i), (wt & Ar) !== Y && e === Ta ? y_(t) : (ha && Ud(e, t, a), g_(t), e === Ta && ((wt & Ar) === ur && (Vp = at(Vp, a)), sr === Hp && Xo(e, or)), Qa(e, i), a === _e && wt === ur && (t.mode & Ne) === ie && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && ($p(), uE()));
    }
    function Yx(e, t, a) {
      var i = e.current;
      i.lanes = t, _o(e, t, a), Qa(e, a);
    }
    function Qx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (wt & Ar) !== ur
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      _d(e, t);
      var i = Ns(e, e === Ta ? or : Y);
      if (i === Y) {
        a !== null && T1(a), e.callbackNode = null, e.callbackPriority = Jt;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== ZS)) {
        a == null && s !== _e && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && T1(a);
      var f;
      if (u === _e)
        e.tag === Ho ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), Ew(c1.bind(null, e))) : lE(c1.bind(null, e)), hl.current !== null ? hl.current.push(Po) : wT(function() {
          (wt & (Ar | Mi)) === ur && Po();
        }), f = null;
      else {
        var p;
        switch (Qv(i)) {
          case Sa:
            p = Nl;
            break;
          case Ti:
            p = co;
            break;
          case ui:
            p = zl;
            break;
          case Hs:
            p = Ul;
            break;
          default:
            p = zl;
            break;
        }
        f = JS(p, o1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function o1(e, t) {
      if (cb(), Qp = nn, Om = Y, (wt & (Ar | Mi)) !== ur)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Qu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ns(e, e === Ta ? or : Y);
      if (u === Y)
        return null;
      var s = !Us(e, u) && !Iv(e, u) && !t, f = s ? n_(e, u) : Nm(e, u);
      if (f !== $u) {
        if (f === vc) {
          var p = zs(e);
          p !== Y && (u = p, f = QS(e, p));
        }
        if (f === Fp) {
          var v = Pp;
          throw mc(e, Y), Xo(e, u), Qa(e, An()), v;
        }
        if (f === FS)
          Xo(e, u);
        else {
          var y = !Us(e, u), g = e.current.alternate;
          if (y && !Gx(g)) {
            if (f = Nm(e, u), f === vc) {
              var _ = zs(e);
              _ !== Y && (u = _, f = QS(e, _));
            }
            if (f === Fp) {
              var b = Pp;
              throw mc(e, Y), Xo(e, u), Qa(e, An()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Wx(e, f, u);
        }
      }
      return Qa(e, An()), e.callbackNode === a ? o1.bind(null, e) : null;
    }
    function QS(e, t) {
      var a = Bp;
      if (me(e)) {
        var i = mc(e, t);
        i.flags |= Rr, pw(e.containerInfo);
      }
      var u = Nm(e, t);
      if (u !== vc) {
        var s = Ya;
        Ya = a, s !== null && s1(s);
      }
      return u;
    }
    function s1(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Wx(e, t, a) {
      switch (t) {
        case $u:
        case Fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case vc: {
          yc(e, Ya, Iu);
          break;
        }
        case wm: {
          if (Xo(e, a), Od(a) && // do not delay if we're inside an act() scope
          !w1()) {
            var i = PS + a1 - An();
            if (i > 10) {
              var u = Ns(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Pl(s, a)) {
                wa(), js(e, s);
                break;
              }
              e.timeoutHandle = $y(yc.bind(null, e, Ya, Iu), i);
              break;
            }
          }
          yc(e, Ya, Iu);
          break;
        }
        case Hp: {
          if (Xo(e, a), $v(a))
            break;
          if (!w1()) {
            var f = Pv(e, a), p = f, v = An() - p, y = p_(v) - v;
            if (y > 10) {
              e.timeoutHandle = $y(yc.bind(null, e, Ya, Iu), y);
              break;
            }
          }
          yc(e, Ya, Iu);
          break;
        }
        case r1: {
          yc(e, Ya, Iu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Gx(e) {
      for (var t = e; ; ) {
        if (t.flags & yu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!De(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & yu && v !== null) {
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
    function Xo(e, t) {
      t = xo(t, xm), t = xo(t, Vp), Nd(e, t);
    }
    function c1(e) {
      if (fb(), (wt & (Ar | Mi)) !== ur)
        throw new Error("Should not already be working.");
      Qu();
      var t = Ns(e, Y);
      if (!Xr(t, _e))
        return Qa(e, An()), null;
      var a = Nm(e, t);
      if (e.tag !== Ho && a === vc) {
        var i = zs(e);
        i !== Y && (t = i, a = QS(e, i));
      }
      if (a === Fp) {
        var u = Pp;
        throw mc(e, Y), Xo(e, t), Qa(e, An()), u;
      }
      if (a === FS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, yc(e, Ya, Iu), Qa(e, An()), null;
    }
    function qx(e, t) {
      t !== Y && (ef(e, at(t, _e)), Qa(e, An()), (wt & (Ar | Mi)) === ur && ($p(), Po()));
    }
    function WS(e, t) {
      var a = wt;
      wt |= n1;
      try {
        return e(t);
      } finally {
        wt = a, wt === ur && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && ($p(), uE());
      }
    }
    function Kx(e, t, a, i, u) {
      var s = br(), f = Ur.transition;
      try {
        return Ur.transition = null, kt(Sa), e(t, a, i, u);
      } finally {
        kt(s), Ur.transition = f, wt === ur && $p();
      }
    }
    function Yu(e) {
      qo !== null && qo.tag === Ho && (wt & (Ar | Mi)) === ur && Qu();
      var t = wt;
      wt |= n1;
      var a = Ur.transition, i = br();
      try {
        return Ur.transition = null, kt(Sa), e ? e() : void 0;
      } finally {
        kt(i), Ur.transition = a, wt = t, (wt & (Ar | Mi)) === ur && Po();
      }
    }
    function f1() {
      return (wt & (Ar | Mi)) !== ur;
    }
    function Mm(e, t) {
      Jr(HS, tu, e), tu = at(tu, t);
    }
    function GS(e) {
      tu = HS.current, Zr(HS, e);
    }
    function mc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Iy && (e.timeoutHandle = Iy, TT(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var u = i.alternate;
          PC(u, i), i = i.return;
        }
      Ta = e;
      var s = gc(e.current, null);
      return Ln = s, or = tu = t, sr = $u, Pp = null, bm = Y, Vp = Y, xm = Y, Bp = null, Ya = null, Yw(), ul.discardPendingWarnings(), s;
    }
    function d1(e, t) {
      do {
        var a = Ln;
        try {
          if (Bh(), AE(), un(), jS.current = null, a === null || a.return === null) {
            sr = Fp, Pp = t, Ln = null;
            return;
          }
          if (mt && a.mode & Xe && ym(a, !0), ut)
            if (ya(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Sd(a, i, or);
            } else
              Cu(a, t, or);
          Eb(e, a.return, a, t, or), m1(a);
        } catch (u) {
          t = u, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function p1() {
      var e = AS.current;
      return AS.current = dm, e === null ? dm : e;
    }
    function v1(e) {
      AS.current = e;
    }
    function Xx() {
      PS = An();
    }
    function Wp(e) {
      bm = at(e, bm);
    }
    function Zx() {
      sr === $u && (sr = wm);
    }
    function qS() {
      (sr === $u || sr === wm || sr === vc) && (sr = Hp), Ta !== null && (kd(bm) || kd(Vp)) && Xo(Ta, or);
    }
    function Jx(e) {
      sr !== Hp && (sr = vc), Bp === null ? Bp = [e] : Bp.push(e);
    }
    function e_() {
      return sr === $u;
    }
    function Nm(e, t) {
      var a = wt;
      wt |= Ar;
      var i = p1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Gp(e, or), u.clear()), Fs(e, t);
        }
        Iu = Ri(), mc(e, t);
      }
      Ds(t);
      do
        try {
          t_();
          break;
        } catch (s) {
          d1(e, s);
        }
      while (!0);
      if (Bh(), wt = a, v1(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Hc(), Ta = null, or = Y, sr;
    }
    function t_() {
      for (; Ln !== null; )
        h1(Ln);
    }
    function n_(e, t) {
      var a = wt;
      wt |= Ar;
      var i = p1();
      if (Ta !== e || or !== t) {
        if (ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Gp(e, or), u.clear()), Fs(e, t);
        }
        Iu = Ri(), $p(), mc(e, t);
      }
      Ds(t);
      do
        try {
          r_();
          break;
        } catch (s) {
          d1(e, s);
        }
      while (!0);
      return Bh(), v1(i), wt = a, Ln !== null ? (Cd(), $u) : (Hc(), Ta = null, or = Y, sr);
    }
    function r_() {
      for (; Ln !== null && !Nv(); )
        h1(Ln);
    }
    function h1(e) {
      var t = e.alternate;
      yn(e);
      var a;
      (e.mode & Xe) !== ie ? (Zg(e), a = KS(t, e, tu), ym(e, !0)) : a = KS(t, e, tu), un(), e.memoizedProps = e.pendingProps, a === null ? m1(e) : Ln = a, jS.current = null;
    }
    function m1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ol) === Ue) {
          yn(t);
          var u = void 0;
          if ((t.mode & Xe) === ie ? u = HC(a, t, tu) : (Zg(t), u = HC(a, t, tu), ym(t, !1)), un(), u !== null) {
            Ln = u;
            return;
          }
        } else {
          var s = Zb(a, t);
          if (s !== null) {
            s.flags &= Ki, Ln = s;
            return;
          }
          if ((t.mode & Xe) !== ie) {
            ym(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ol, i.subtreeFlags = Ue, i.deletions = null;
          else {
            sr = FS, Ln = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Ln = v;
          return;
        }
        t = i, Ln = t;
      } while (t !== null);
      sr === $u && (sr = r1);
    }
    function yc(e, t, a) {
      var i = br(), u = Ur.transition;
      try {
        Ur.transition = null, kt(Sa), a_(e, t, a, i);
      } finally {
        Ur.transition = u, kt(i);
      }
      return null;
    }
    function a_(e, t, a, i) {
      do
        Qu();
      while (qo !== null);
      if (h_(), (wt & (Ar | Mi)) !== ur)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (yd(s), u === null)
        return gd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Jt;
      var f = at(u.lanes, u.childLanes);
      dy(e, f), e === Ta && (Ta = null, Ln = null, or = Y), ((u.subtreeFlags & Gr) !== Ue || (u.flags & Gr) !== Ue) && (hc || (hc = !0, $S = a, JS(zl, function() {
        return Qu(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Wr | ai | Gr)) !== Ue, v = (u.flags & (Qr | Wr | ai | Gr)) !== Ue;
      if (p || v) {
        var y = Ur.transition;
        Ur.transition = null;
        var g = br();
        kt(Sa);
        var _ = wt;
        wt |= Mi, jS.current = null, rx(e, u), uC(), yx(e, u, s), mT(e.containerInfo), e.current = u, ho(s), gx(u, e, s), Fv(), so(), wt = _, kt(g), Ur.transition = y;
      } else
        e.current = u, uC();
      var b = hc;
      if (hc ? (hc = !1, qo = e, Ip = s) : (Pf = 0, km = null), f = e.pendingLanes, f === Y && (Hf = null), b || E1(e.current, !1), Pa(u.stateNode, i), ha && e.memoizedUpdaters.clear(), jx(), Qa(e, An()), t !== null)
        for (var A = e.onRecoverableError, F = 0; F < t.length; F++) {
          var P = t[F], se = P.stack, Ae = P.digest;
          A(P.value, {
            componentStack: se,
            digest: Ae
          });
        }
      if (_m) {
        _m = !1;
        var ke = VS;
        throw VS = null, ke;
      }
      return Xr(Ip, _e) && e.tag !== Ho && Qu(), f = e.pendingLanes, Xr(f, _e) ? (sb(), e === IS ? Yp++ : (Yp = 0, IS = e)) : Yp = 0, Po(), gd(), null;
    }
    function Qu() {
      if (qo !== null) {
        var e = Qv(Ip), t = tf(ui, e), a = Ur.transition, i = br();
        try {
          return Ur.transition = null, kt(t), l_();
        } finally {
          kt(i), Ur.transition = a;
        }
      }
      return !1;
    }
    function i_(e) {
      BS.push(e), hc || (hc = !0, JS(zl, function() {
        return Qu(), null;
      }));
    }
    function l_() {
      if (qo === null)
        return !1;
      var e = $S;
      $S = null;
      var t = qo, a = Ip;
      if (qo = null, Ip = Y, (wt & (Ar | Mi)) !== ur)
        throw new Error("Cannot flush passive effects while already rendering.");
      YS = !0, Dm = !1, Ed(a);
      var i = wt;
      wt |= Mi, bx(t.current), Cx(t, t.current, a, e);
      {
        var u = BS;
        BS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          ux(t, f);
        }
      }
      gn(), E1(t.current, !0), wt = i, Po(), Dm ? t === km ? Pf++ : (Pf = 0, km = t) : Pf = 0, YS = !1, Dm = !1, Eu(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function y1(e) {
      return Hf !== null && Hf.has(e);
    }
    function u_(e) {
      Hf === null ? Hf = /* @__PURE__ */ new Set([e]) : Hf.add(e);
    }
    function o_(e) {
      _m || (_m = !0, VS = e);
    }
    var s_ = o_;
    function g1(e, t, a) {
      var i = dc(a, t), u = hC(e, i, _e), s = Bo(e, u, _e), f = wa();
      s !== null && (_o(s, _e, f), Qa(s, f));
    }
    function fn(e, t, a) {
      if (ex(a), qp(!1), e.tag === te) {
        g1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          g1(i, e, a);
          return;
        } else if (i.tag === le) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !y1(s)) {
            var f = dc(a, e), p = mS(i, f, _e), v = Bo(i, p, _e), y = wa();
            v !== null && (_o(v, _e, y), Qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function c_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      js(e, a), S_(e), Ta === e && Pl(or, a) && (sr === Hp || sr === wm && Od(or) && An() - PS < a1 ? mc(e, Y) : xm = at(xm, a)), Qa(e, u);
    }
    function S1(e, t) {
      t === Jt && (t = Ix(e));
      var a = wa(), i = $a(e, t);
      i !== null && (_o(i, t, a), Qa(i, a));
    }
    function f_(e) {
      var t = e.memoizedState, a = Jt;
      t !== null && (a = t.retryLane), S1(e, a);
    }
    function d_(e, t) {
      var a = Jt, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ct:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), S1(e, a);
    }
    function p_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Px(e / 1960) * 1960;
    }
    function v_() {
      if (Yp > Bx)
        throw Yp = 0, IS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Pf > $x && (Pf = 0, km = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function h_() {
      ul.flushLegacyContextWarning(), ul.flushPendingUnsafeLifecycleWarnings();
    }
    function E1(e, t) {
      yn(e), zm(e, ja, zx), t && zm(e, gu, Ux), zm(e, ja, Mx), t && zm(e, gu, Nx), un();
    }
    function zm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ue ? i = i.child : ((i.flags & t) !== Ue && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Um = null;
    function C1(e) {
      {
        if ((wt & Ar) !== ur || !(e.mode & Ne))
          return;
        var t = e.tag;
        if (t !== Le && t !== te && t !== le && t !== we && t !== Fe && t !== ft && t !== qe)
          return;
        var a = Ke(e) || "ReactComponent";
        if (Um !== null) {
          if (Um.has(a))
            return;
          Um.add(a);
        } else
          Um = /* @__PURE__ */ new Set([a]);
        var i = mn;
        try {
          yn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? yn(e) : un();
        }
      }
    }
    var KS;
    {
      var m_ = null;
      KS = function(e, t, a) {
        var i = k1(m_, t);
        try {
          return zC(e, t, a);
        } catch (s) {
          if (Dw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Bh(), AE(), PC(e, t), k1(t, i), t.mode & Xe && Zg(t), ni(null, zC, null, e, t, a), uy()) {
            var u = qi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var R1 = !1, XS;
    XS = /* @__PURE__ */ new Set();
    function y_(e) {
      if (Br && !lb())
        switch (e.tag) {
          case we:
          case Fe:
          case qe: {
            var t = Ln && Ke(Ln) || "Unknown", a = t;
            if (!XS.has(a)) {
              XS.add(a);
              var i = Ke(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case le: {
            R1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), R1 = !0);
            break;
          }
        }
    }
    function Gp(e, t) {
      if (ha) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ud(e, i, t);
        });
      }
    }
    var ZS = {};
    function JS(e, t) {
      {
        var a = hl.current;
        return a !== null ? (a.push(t), ZS) : vd(e, t);
      }
    }
    function T1(e) {
      if (e !== ZS)
        return Uc(e);
    }
    function w1() {
      return hl.current !== null;
    }
    function g_(e) {
      {
        if (e.mode & Ne) {
          if (!t1())
            return;
        } else if (!Hx() || wt !== ur || e.tag !== we && e.tag !== Fe && e.tag !== qe)
          return;
        if (hl.current === null) {
          var t = mn;
          try {
            yn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? yn(e) : un();
          }
        }
      }
    }
    function S_(e) {
      e.tag !== Ho && t1() && hl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function qp(e) {
      u1 = e;
    }
    var Ni = null, Vf = null, E_ = function(e) {
      Ni = e;
    };
    function Bf(e) {
      {
        if (Ni === null)
          return e;
        var t = Ni(e);
        return t === void 0 ? e : t.current;
      }
    }
    function e0(e) {
      return Bf(e);
    }
    function t0(e) {
      {
        if (Ni === null)
          return e;
        var t = Ni(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Bf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: q,
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
        if (Ni === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case le: {
            typeof i == "function" && (u = !0);
            break;
          }
          case we: {
            (typeof i == "function" || s === He) && (u = !0);
            break;
          }
          case Fe: {
            (s === q || s === He) && (u = !0);
            break;
          }
          case ft:
          case qe: {
            (s === Tt || s === He) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Ni(a);
          if (f !== void 0 && f === Ni(i))
            return !0;
        }
        return !1;
      }
    }
    function x1(e) {
      {
        if (Ni === null || typeof WeakSet != "function")
          return;
        Vf === null && (Vf = /* @__PURE__ */ new WeakSet()), Vf.add(e);
      }
    }
    var C_ = function(e, t) {
      {
        if (Ni === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Qu(), Yu(function() {
          n0(e.current, i, a);
        });
      }
    }, R_ = function(e, t) {
      {
        if (e.context !== si)
          return;
        Qu(), Yu(function() {
          Kp(t, e, null, null);
        });
      }
    };
    function n0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case we:
          case qe:
          case le:
            v = p;
            break;
          case Fe:
            v = p.render;
            break;
        }
        if (Ni === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Ni(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === le ? g = !0 : y = !0));
        }
        if (Vf !== null && (Vf.has(e) || i !== null && Vf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = $a(e, _e);
          b !== null && cr(b, e, _e, nn);
        }
        u !== null && !g && n0(u, t, a), s !== null && n0(s, t, a);
      }
    }
    var T_ = function(e, t) {
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
          case we:
          case qe:
          case le:
            p = f;
            break;
          case Fe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? w_(e, a) : i !== null && r0(i, t, a), u !== null && r0(u, t, a);
      }
    }
    function w_(e, t) {
      {
        var a = b_(e, t);
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
    function b_(e, t) {
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
    function x_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ue, this.subtreeFlags = Ue, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !a0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new x_(e, t, a, i);
    };
    function i0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function __(e) {
      return typeof e == "function" && !i0(e) && e.defaultProps === void 0;
    }
    function D_(e) {
      if (typeof e == "function")
        return i0(e) ? le : we;
      if (e != null) {
        var t = e.$$typeof;
        if (t === q)
          return Fe;
        if (t === Tt)
          return ft;
      }
      return Le;
    }
    function gc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ue, a.subtreeFlags = Ue, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & tr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Le:
        case we:
        case qe:
          a.type = Bf(e.type);
          break;
        case le:
          a.type = e0(e.type);
          break;
        case Fe:
          a.type = t0(e.type);
          break;
      }
      return a;
    }
    function k_(e, t) {
      e.flags &= tr | Zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = Ue, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ue, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function O_(e, t, a) {
      var i;
      return e === Mh ? (i = Ne, t === !0 && (i |= cn, i |= qr)) : i = ie, ha && (i |= Xe), ci(te, null, null, i);
    }
    function l0(e, t, a, i, u, s) {
      var f = Le, p = e;
      if (typeof e == "function")
        i0(e) ? (f = le, p = e0(p)) : p = Bf(p);
      else if (typeof e == "string")
        f = Z;
      else
        e: switch (e) {
          case sa:
            return Zo(a.children, u, s, t);
          case Ui:
            f = At, u |= cn, (u & Ne) !== ie && (u |= qr);
            break;
          case gl:
            return L_(a, u, s, t);
          case ze:
            return M_(a, u, s, t);
          case pt:
            return N_(a, u, s, t);
          case Kt:
            return D1(a, u, s, t);
          case pn:
          case st:
          case hr:
          case Ht:
          case Nn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = Ze;
                  break e;
                case W:
                  f = Et;
                  break e;
                case q:
                  f = Fe, p = t0(p);
                  break e;
                case Tt:
                  f = ft;
                  break e;
                case He:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ke(i) : null;
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
    function Zo(e, t, a, i) {
      var u = ci(We, e, i, t);
      return u.lanes = a, u;
    }
    function L_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ci(xt, e, i, t | Xe);
      return u.elementType = gl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function M_(e, t, a, i) {
      var u = ci(Re, e, i, t);
      return u.elementType = ze, u.lanes = a, u;
    }
    function N_(e, t, a, i) {
      var u = ci(Ct, e, i, t);
      return u.elementType = pt, u.lanes = a, u;
    }
    function D1(e, t, a, i) {
      var u = ci(Be, e, i, t);
      u.elementType = Kt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function o0(e, t, a) {
      var i = ci(pe, e, null, t);
      return i.lanes = a, i;
    }
    function z_() {
      var e = ci(Z, null, null, ie);
      return e.elementType = "DELETED", e;
    }
    function U_(e) {
      var t = ci(en, null, null, ie);
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
      return e === null && (e = ci(Le, null, null, ie)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function A_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Iy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Jt, this.eventTimes = As(Y), this.expirationTimes = As(nn), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = As(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < ks; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Mh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ho:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function O1(e, t, a, i, u, s, f, p, v, y) {
      var g = new A_(e, t, a, p, v), _ = O_(t, s);
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
    function j_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return dr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Hr,
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
      var t = mi(e), a = Sw(t);
      if (t.tag === le) {
        var i = t.type;
        if (Gl(i))
          return aE(t, i, a);
      }
      return a;
    }
    function F_(e, t) {
      {
        var a = mi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = fd(a);
        if (u === null)
          return null;
        if (u.mode & cn) {
          var s = Ke(a) || "Component";
          if (!d0[s]) {
            d0[s] = !0;
            var f = mn;
            try {
              yn(u), a.mode & cn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? yn(f) : un();
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
      var b = _.current, A = wa(), F = Ko(b), P = Vu(A, F);
      return P.callback = t ?? null, Bo(b, P, F), Yx(_, F, A), _;
    }
    function Kp(e, t, a, i) {
      fo(t, e);
      var u = t.current, s = wa(), f = Ko(u);
      Pc(f);
      var p = L1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Br && mn !== null && !f0 && (f0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(mn) || "Unknown"));
      var v = Vu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Bo(u, v, f);
      return y !== null && (cr(y, u, f, s), Wh(y, u, f)), f;
    }
    function Am(e) {
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
    function H_(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (me(t)) {
            var a = wo(t);
            qx(t, a);
          }
          break;
        }
        case Re: {
          Yu(function() {
            var u = $a(e, _e);
            if (u !== null) {
              var s = wa();
              cr(u, e, _e, s);
            }
          });
          var i = _e;
          p0(e, i);
          break;
        }
      }
    }
    function z1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function p0(e, t) {
      z1(e, t);
      var a = e.alternate;
      a && z1(a, t);
    }
    function P_(e) {
      if (e.tag === Re) {
        var t = Co, a = $a(e, t);
        if (a !== null) {
          var i = wa();
          cr(a, e, t, i);
        }
        p0(e, t);
      }
    }
    function V_(e) {
      if (e.tag === Re) {
        var t = Ko(e), a = $a(e, t);
        if (a !== null) {
          var i = wa();
          cr(a, e, t, i);
        }
        p0(e, t);
      }
    }
    function U1(e) {
      var t = pd(e);
      return t === null ? null : t.stateNode;
    }
    var A1 = function(e) {
      return null;
    };
    function B_(e) {
      return A1(e);
    }
    var j1 = function(e) {
      return !1;
    };
    function $_(e) {
      return j1(e);
    }
    var F1 = null, H1 = null, P1 = null, V1 = null, B1 = null, $1 = null, I1 = null, Y1 = null, Q1 = null;
    {
      var W1 = function(e, t, a) {
        var i = t[a], u = Dt(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (Dt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = W1(e[i], t, a + 1), u);
      }, G1 = function(e, t) {
        return W1(e, t, 0);
      }, q1 = function(e, t, a, i) {
        var u = t[i], s = Dt(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Dt(s) ? s.splice(u, 1) : delete s[u];
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
          Qe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Qe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return q1(e, t, a, 0);
      }, X1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Dt(e) ? e.slice() : rt({}, e);
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
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = $a(e, _e);
          f !== null && cr(f, e, _e, nn);
        }
      }, H1 = function(e, t, a) {
        var i = v0(e, t);
        if (i !== null) {
          var u = G1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = $a(e, _e);
          s !== null && cr(s, e, _e, nn);
        }
      }, P1 = function(e, t, a, i) {
        var u = v0(e, t);
        if (u !== null) {
          var s = K1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = $a(e, _e);
          f !== null && cr(f, e, _e, nn);
        }
      }, V1 = function(e, t, a) {
        e.pendingProps = Z1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, _e);
        i !== null && cr(i, e, _e, nn);
      }, B1 = function(e, t) {
        e.pendingProps = G1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, _e);
        a !== null && cr(a, e, _e, nn);
      }, $1 = function(e, t, a) {
        e.pendingProps = K1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, _e);
        i !== null && cr(i, e, _e, nn);
      }, I1 = function(e) {
        var t = $a(e, _e);
        t !== null && cr(t, e, _e, nn);
      }, Y1 = function(e) {
        A1 = e;
      }, Q1 = function(e) {
        j1 = e;
      };
    }
    function I_(e) {
      var t = fd(e);
      return t === null ? null : t.stateNode;
    }
    function Y_(e) {
      return null;
    }
    function Q_() {
      return mn;
    }
    function W_(e) {
      var t = e.findFiberByHostInstance, a = ne.ReactCurrentDispatcher;
      return hd({
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
        findHostInstanceByFiber: I_,
        findFiberByHostInstance: t || Y_,
        // React Refresh
        findHostInstancesForRefresh: T_,
        scheduleRefresh: C_,
        scheduleRoot: R_,
        setRefreshHandler: E_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Q_,
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
    jm.prototype.render = h0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Fm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Rn) {
          var i = U1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Kp(e, t, null, null);
    }, jm.prototype.unmount = h0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        f1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          Kp(null, e, null, null);
        }), J0(t);
      }
    };
    function G_(e, t) {
      if (!Fm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      eR(e);
      var a = !1, i = !1, u = "", s = J1;
      t != null && (t.hydrate ? Qe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Er && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = M1(e, Mh, null, a, i, u, s);
      bh(f.current, e);
      var p = e.nodeType === Rn ? e.parentNode : e;
      return np(p), new h0(f);
    }
    function jm(e) {
      this._internalRoot = e;
    }
    function q_(e) {
      e && nf(e);
    }
    jm.prototype.unstable_scheduleHydration = q_;
    function K_(e, t, a) {
      if (!Fm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      eR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = J1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = N1(t, null, e, Mh, i, s, f, p, v);
      if (bh(y.current, e), np(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          eb(y, _);
        }
      return new jm(y);
    }
    function Fm(e) {
      return !!(e && (e.nodeType === Ir || e.nodeType === ca || e.nodeType === Gf || !Me));
    }
    function Xp(e) {
      return !!(e && (e.nodeType === Ir || e.nodeType === ca || e.nodeType === Gf || e.nodeType === Rn && e.nodeValue === " react-mount-point-unstable "));
    }
    function eR(e) {
      e.nodeType === Ir && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var X_ = ne.ReactCurrentOwner, tR;
    tR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Rn) {
        var t = U1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = m0(e), u = !!(i && jo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ir && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function m0(e) {
      return e ? e.nodeType === ca ? e.documentElement : e.firstChild : null;
    }
    function nR() {
    }
    function Z_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Am(f);
            s.call(b);
          };
        }
        var f = N1(
          t,
          i,
          e,
          Ho,
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
        e._reactRootContainer = f, bh(f.current, e);
        var p = e.nodeType === Rn ? e.parentNode : e;
        return np(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Am(g);
            y.call(b);
          };
        }
        var g = M1(
          e,
          Ho,
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
        e._reactRootContainer = g, bh(g.current, e);
        var _ = e.nodeType === Rn ? e.parentNode : e;
        return np(_), Yu(function() {
          Kp(t, g, a, i);
        }), g;
      }
    }
    function J_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Hm(e, t, a, i, u) {
      tR(a), J_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Z_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Am(f);
            p.call(v);
          };
        }
        Kp(t, f, e, u);
      }
      return Am(f);
    }
    var rR = !1;
    function eD(e) {
      {
        rR || (rR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = X_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ir ? e : F_(e, "findDOMNode");
    }
    function tD(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Hm(null, e, t, !0, a);
    }
    function nD(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = pp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Hm(null, e, t, !1, a);
    }
    function rD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !oo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Hm(e, t, a, !1, i);
    }
    var aR = !1;
    function aD(e) {
      if (aR || (aR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = m0(e), i = a && !jo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Hm(null, null, e, !1, function() {
            e._reactRootContainer = null, J0(e);
          });
        }), !0;
      } else {
        {
          var u = m0(e), s = !!(u && jo(u)), f = e.nodeType === Ir && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ad(H_), Ps(P_), Fd(V_), Gv(br), Vd(py), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), nd(lT), kc(WS, Kx, Yu);
    function iD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Fm(t))
        throw new Error("Target container is not a DOM element.");
      return j_(e, t, null, a);
    }
    function lD(e, t, a, i) {
      return rD(e, t, a, i);
    }
    var y0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [jo, Sf, xh, uo, hu, WS]
    };
    function uD(e, t) {
      return y0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), G_(e, t);
    }
    function oD(e, t, a) {
      return y0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), K_(e, t, a);
    }
    function sD(e) {
      return f1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var cD = W_({
      findFiberByHostInstance: rc,
      bundleType: 1,
      version: c0,
      rendererPackageName: "react-dom"
    });
    if (!cD && Cn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var iR = window.location.protocol;
      /^(https?|file):$/.test(iR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (iR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y0, Ga.createPortal = iD, Ga.createRoot = uD, Ga.findDOMNode = eD, Ga.flushSync = sD, Ga.hydrate = tD, Ga.hydrateRoot = oD, Ga.render = nD, Ga.unmountComponentAtNode = aD, Ga.unstable_batchedUpdates = WS, Ga.unstable_renderSubtreeIntoContainer = lD, Ga.version = c0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ga;
}
var SR = {};
function ER() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (SR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ER);
    } catch (D) {
      console.error(D);
    }
  }
}
SR.NODE_ENV === "production" ? (ER(), R0.exports = SD()) : R0.exports = ED();
var CD = R0.exports, T0, RD = {}, Vm = CD;
if (RD.NODE_ENV === "production")
  T0 = Vm.createRoot, Vm.hydrateRoot;
else {
  var pR = Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  T0 = function(D, U) {
    pR.usingClientEntryPoint = !0;
    try {
      return Vm.createRoot(D, U);
    } finally {
      pR.usingClientEntryPoint = !1;
    }
  };
}
var TD = Object.defineProperty, wD = (D, U, w) => U in D ? TD(D, U, { enumerable: !0, configurable: !0, writable: !0, value: w }) : D[U] = w, Bm = (D, U, w) => wD(D, typeof U != "symbol" ? U + "" : U, w);
const bD = {
  stringify: (D) => D ? "true" : "false",
  parse: (D) => /^[ty1-9]/i.test(D)
}, xD = {
  stringify: (D) => D.name,
  parse: (D, U, w) => {
    const ne = (() => {
      if (typeof window < "u" && D in window)
        return window[D];
      if (typeof global < "u" && D in global)
        return global[D];
    })();
    return typeof ne == "function" ? ne.bind(w) : void 0;
  }
}, _D = {
  stringify: (D) => JSON.stringify(D),
  parse: (D) => JSON.parse(D)
}, DD = {
  stringify: (D) => `${D}`,
  parse: (D) => parseFloat(D)
}, kD = {
  stringify: (D) => D,
  parse: (D) => D
}, E0 = {
  string: kD,
  number: DD,
  boolean: bD,
  function: xD,
  json: _D
};
function OD(D) {
  return D.replace(
    /([a-z0-9])([A-Z])/g,
    (U, w, ne) => `${w}-${ne.toLowerCase()}`
  );
}
const $m = Symbol.for("r2wc.render"), Im = Symbol.for("r2wc.connected"), Sc = Symbol.for("r2wc.context"), Gu = Symbol.for("r2wc.props");
function LD(D, U, w) {
  var ne, Ye, vt;
  U.props || (U.props = D.propTypes ? Object.keys(D.propTypes) : []), U.events || (U.events = []);
  const Qe = Array.isArray(U.props) ? U.props.slice() : Object.keys(U.props), S = Array.isArray(U.events) ? U.events.slice() : Object.keys(U.events), je = {}, we = {}, le = {}, Le = {};
  for (const de of Qe) {
    je[de] = Array.isArray(U.props) ? "string" : U.props[de];
    const Z = OD(de);
    le[de] = Z, Le[Z] = de;
  }
  for (const de of S)
    we[de] = Array.isArray(U.events) ? {} : U.events[de];
  class te extends HTMLElement {
    constructor() {
      super(), Bm(this, vt, !0), Bm(this, Ye), Bm(this, ne, {}), Bm(this, "container"), U.shadow ? this.container = this.attachShadow({
        mode: U.shadow
      }) : this.container = this, this[Gu].container = this.container;
      for (const Z of Qe) {
        const pe = le[Z], We = this.getAttribute(pe), At = je[Z], Et = At ? E0[At] : null;
        Et != null && Et.parse && We && (this[Gu][Z] = Et.parse(We, pe, this));
      }
      for (const Z of S)
        this[Gu][Z] = (pe) => {
          const We = Z.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(We, { detail: pe, ...we[Z] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(Le);
    }
    connectedCallback() {
      this[Im] = !0, this[$m]();
    }
    disconnectedCallback() {
      this[Im] = !1, this[Sc] && w.unmount(this[Sc]), delete this[Sc];
    }
    attributeChangedCallback(Z, pe, We) {
      const At = Le[Z], Et = je[At], Ze = Et ? E0[Et] : null;
      At in je && Ze != null && Ze.parse && We && (this[Gu][At] = Ze.parse(We, Z, this), this[$m]());
    }
    [(vt = Im, Ye = Sc, ne = Gu, $m)]() {
      this[Im] && (this[Sc] ? w.update(this[Sc], this[Gu]) : this[Sc] = w.mount(
        this.container,
        D,
        this[Gu]
      ));
    }
  }
  for (const de of Qe) {
    const Z = le[de], pe = je[de];
    Object.defineProperty(te.prototype, de, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Gu][de];
      },
      set(We) {
        this[Gu][de] = We;
        const At = pe ? E0[pe] : null;
        if (At != null && At.stringify) {
          const Et = At.stringify(We, Z, this);
          this.getAttribute(Z) !== Et && this.setAttribute(Z, Et);
        } else
          this[$m]();
      }
    });
  }
  return te;
}
function MD(D, U, w) {
  const ne = T0(D), Ye = qu.createElement(U, w);
  return ne.render(Ye), {
    root: ne,
    ReactComponent: U
  };
}
function ND({ root: D, ReactComponent: U }, w) {
  const ne = qu.createElement(U, w);
  D.render(ne);
}
function zD({ root: D }) {
  D.unmount();
}
function UD(D, U = {}) {
  return LD(D, U, { mount: MD, update: ND, unmount: zD });
}
var w0 = { exports: {} }, Jp = {};
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
function AD() {
  if (vR) return Jp;
  vR = 1;
  var D = _a, U = Symbol.for("react.element"), w = Symbol.for("react.fragment"), ne = Object.prototype.hasOwnProperty, Ye = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, vt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(S, je, we) {
    var le, Le = {}, te = null, de = null;
    we !== void 0 && (te = "" + we), je.key !== void 0 && (te = "" + je.key), je.ref !== void 0 && (de = je.ref);
    for (le in je) ne.call(je, le) && !vt.hasOwnProperty(le) && (Le[le] = je[le]);
    if (S && S.defaultProps) for (le in je = S.defaultProps, je) Le[le] === void 0 && (Le[le] = je[le]);
    return { $$typeof: U, type: S, key: te, ref: de, props: Le, _owner: Ye.current };
  }
  return Jp.Fragment = w, Jp.jsx = Qe, Jp.jsxs = Qe, Jp;
}
var ev = {}, hR;
function jD() {
  if (hR) return ev;
  hR = 1;
  var D = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return D.NODE_ENV !== "production" && function() {
    var U = _a, w = Symbol.for("react.element"), ne = Symbol.for("react.portal"), Ye = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), je = Symbol.for("react.context"), we = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), pe = Symbol.iterator, We = "@@iterator";
    function At(R) {
      if (R === null || typeof R != "object")
        return null;
      var W = pe && R[pe] || R[We];
      return typeof W == "function" ? W : null;
    }
    var Et = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ze(R) {
      {
        for (var W = arguments.length, q = new Array(W > 1 ? W - 1 : 0), ze = 1; ze < W; ze++)
          q[ze - 1] = arguments[ze];
        Fe("error", R, q);
      }
    }
    function Fe(R, W, q) {
      {
        var ze = Et.ReactDebugCurrentFrame, pt = ze.getStackAddendum();
        pt !== "" && (W += "%s", q = q.concat([pt]));
        var Tt = q.map(function(He) {
          return String(He);
        });
        Tt.unshift("Warning: " + W), Function.prototype.apply.call(console[R], console, Tt);
      }
    }
    var xt = !1, Re = !1, ft = !1, qe = !1, an = !1, En;
    En = Symbol.for("react.module.reference");
    function en(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ye || R === Qe || an || R === vt || R === le || R === Le || qe || R === Z || xt || Re || ft || typeof R == "object" && R !== null && (R.$$typeof === de || R.$$typeof === te || R.$$typeof === S || R.$$typeof === je || R.$$typeof === we || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === En || R.getModuleId !== void 0));
    }
    function Ct(R, W, q) {
      var ze = R.displayName;
      if (ze)
        return ze;
      var pt = W.displayName || W.name || "";
      return pt !== "" ? q + "(" + pt + ")" : q;
    }
    function ln(R) {
      return R.displayName || "Context";
    }
    function Be(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && Ze("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ye:
          return "Fragment";
        case ne:
          return "Portal";
        case Qe:
          return "Profiler";
        case vt:
          return "StrictMode";
        case le:
          return "Suspense";
        case Le:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case je:
            var W = R;
            return ln(W) + ".Consumer";
          case S:
            var q = R;
            return ln(q._context) + ".Provider";
          case we:
            return Ct(R, R.render, "ForwardRef");
          case te:
            var ze = R.displayName || null;
            return ze !== null ? ze : Be(R.type) || "Memo";
          case de: {
            var pt = R, Tt = pt._payload, He = pt._init;
            try {
              return Be(He(Tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var it = Object.assign, _t = 0, lt, $, ge, oe, k, I, Me;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function nt() {
      {
        if (_t === 0) {
          lt = console.log, $ = console.info, ge = console.warn, oe = console.error, k = console.group, I = console.groupCollapsed, Me = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: $e,
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
        _t++;
      }
    }
    function ut() {
      {
        if (_t--, _t === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: it({}, R, {
              value: lt
            }),
            info: it({}, R, {
              value: $
            }),
            warn: it({}, R, {
              value: ge
            }),
            error: it({}, R, {
              value: oe
            }),
            group: it({}, R, {
              value: k
            }),
            groupCollapsed: it({}, R, {
              value: I
            }),
            groupEnd: it({}, R, {
              value: Me
            })
          });
        }
        _t < 0 && Ze("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = Et.ReactCurrentDispatcher, dt;
    function Rt(R, W, q) {
      {
        if (dt === void 0)
          try {
            throw Error();
          } catch (pt) {
            var ze = pt.stack.trim().match(/\n( *(at )?)/);
            dt = ze && ze[1] || "";
          }
        return `
` + dt + R;
      }
    }
    var $t = !1, Kn;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      Kn = new Fr();
    }
    function fr(R, W) {
      if (!R || $t)
        return "";
      {
        var q = Kn.get(R);
        if (q !== void 0)
          return q;
      }
      var ze;
      $t = !0;
      var pt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Tt;
      Tt = mt.current, mt.current = null, nt();
      try {
        if (W) {
          var He = function() {
            throw Error();
          };
          if (Object.defineProperty(He.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(He, []);
            } catch (zn) {
              ze = zn;
            }
            Reflect.construct(R, [], He);
          } else {
            try {
              He.call();
            } catch (zn) {
              ze = zn;
            }
            R.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zn) {
            ze = zn;
          }
          R();
        }
      } catch (zn) {
        if (zn && ze && typeof zn.stack == "string") {
          for (var st = zn.stack.split(`
`), Nn = ze.stack.split(`
`), Kt = st.length - 1, pn = Nn.length - 1; Kt >= 1 && pn >= 0 && st[Kt] !== Nn[pn]; )
            pn--;
          for (; Kt >= 1 && pn >= 0; Kt--, pn--)
            if (st[Kt] !== Nn[pn]) {
              if (Kt !== 1 || pn !== 1)
                do
                  if (Kt--, pn--, pn < 0 || st[Kt] !== Nn[pn]) {
                    var hr = `
` + st[Kt].replace(" at new ", " at ");
                    return R.displayName && hr.includes("<anonymous>") && (hr = hr.replace("<anonymous>", R.displayName)), typeof R == "function" && Kn.set(R, hr), hr;
                  }
                while (Kt >= 1 && pn >= 0);
              break;
            }
        }
      } finally {
        $t = !1, mt.current = Tt, ut(), Error.prepareStackTrace = pt;
      }
      var Ht = R ? R.displayName || R.name : "", Oa = Ht ? Rt(Ht) : "";
      return typeof R == "function" && Kn.set(R, Oa), Oa;
    }
    function Cn(R, W, q) {
      return fr(R, !1);
    }
    function Xn(R) {
      var W = R.prototype;
      return !!(W && W.isReactComponent);
    }
    function Hn(R, W, q) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return fr(R, Xn(R));
      if (typeof R == "string")
        return Rt(R);
      switch (R) {
        case le:
          return Rt("Suspense");
        case Le:
          return Rt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case we:
            return Cn(R.render);
          case te:
            return Hn(R.type, W, q);
          case de: {
            var ze = R, pt = ze._payload, Tt = ze._init;
            try {
              return Hn(Tt(pt), W, q);
            } catch {
            }
          }
        }
      return "";
    }
    var _n = Object.prototype.hasOwnProperty, Mn = {}, gr = Et.ReactDebugCurrentFrame;
    function dr(R) {
      if (R) {
        var W = R._owner, q = Hn(R.type, R._source, W ? W.type : null);
        gr.setExtraStackFrame(q);
      } else
        gr.setExtraStackFrame(null);
    }
    function Pn(R, W, q, ze, pt) {
      {
        var Tt = Function.call.bind(_n);
        for (var He in R)
          if (Tt(R, He)) {
            var st = void 0;
            try {
              if (typeof R[He] != "function") {
                var Nn = Error((ze || "React class") + ": " + q + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nn.name = "Invariant Violation", Nn;
              }
              st = R[He](W, He, ze, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Kt) {
              st = Kt;
            }
            st && !(st instanceof Error) && (dr(pt), Ze("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ze || "React class", q, He, typeof st), dr(null)), st instanceof Error && !(st.message in Mn) && (Mn[st.message] = !0, dr(pt), Ze("Failed %s type: %s", q, st.message), dr(null));
          }
      }
    }
    var ra = Array.isArray;
    function aa(R) {
      return ra(R);
    }
    function pr(R) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, q = W && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return q;
      }
    }
    function ia(R) {
      try {
        return Zn(R), !1;
      } catch {
        return !0;
      }
    }
    function Zn(R) {
      return "" + R;
    }
    function Sr(R) {
      if (ia(R))
        return Ze("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(R)), Zn(R);
    }
    var dn = Et.ReactCurrentOwner, la = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ua, oa, ae;
    ae = {};
    function Oe(R) {
      if (_n.call(R, "ref")) {
        var W = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ot(R) {
      if (_n.call(R, "key")) {
        var W = Object.getOwnPropertyDescriptor(R, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function jt(R, W) {
      if (typeof R.ref == "string" && dn.current && W && dn.current.stateNode !== W) {
        var q = Be(dn.current.type);
        ae[q] || (Ze('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Be(dn.current.type), R.ref), ae[q] = !0);
      }
    }
    function Mt(R, W) {
      {
        var q = function() {
          ua || (ua = !0, Ze("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function Dn(R, W) {
      {
        var q = function() {
          oa || (oa = !0, Ze("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var hn = function(R, W, q, ze, pt, Tt, He) {
      var st = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: R,
        key: W,
        ref: q,
        props: He,
        // Record the component responsible for creating this element.
        _owner: Tt
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
        value: ze
      }), Object.defineProperty(st, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pt
      }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    };
    function vr(R, W, q, ze, pt) {
      {
        var Tt, He = {}, st = null, Nn = null;
        q !== void 0 && (Sr(q), st = "" + q), ot(W) && (Sr(W.key), st = "" + W.key), Oe(W) && (Nn = W.ref, jt(W, pt));
        for (Tt in W)
          _n.call(W, Tt) && !la.hasOwnProperty(Tt) && (He[Tt] = W[Tt]);
        if (R && R.defaultProps) {
          var Kt = R.defaultProps;
          for (Tt in Kt)
            He[Tt] === void 0 && (He[Tt] = Kt[Tt]);
        }
        if (st || Nn) {
          var pn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          st && Mt(He, pn), Nn && Dn(He, pn);
        }
        return hn(R, st, Nn, pt, ze, dn.current, He);
      }
    }
    var It = Et.ReactCurrentOwner, In = Et.ReactDebugCurrentFrame;
    function Ft(R) {
      if (R) {
        var W = R._owner, q = Hn(R.type, R._source, W ? W.type : null);
        In.setExtraStackFrame(q);
      } else
        In.setExtraStackFrame(null);
    }
    var tn;
    tn = !1;
    function qa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === w;
    }
    function Da() {
      {
        if (It.current) {
          var R = Be(It.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ml(R) {
      return "";
    }
    var au = {};
    function iu(R) {
      {
        var W = Da();
        if (!W) {
          var q = typeof R == "string" ? R : R.displayName || R.name;
          q && (W = `

Check the top-level render call using <` + q + ">.");
        }
        return W;
      }
    }
    function yl(R, W) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var q = iu(W);
        if (au[q])
          return;
        au[q] = !0;
        var ze = "";
        R && R._owner && R._owner !== It.current && (ze = " It was passed a child from " + Be(R._owner.type) + "."), Ft(R), Ze('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, ze), Ft(null);
      }
    }
    function Ka(R, W) {
      {
        if (typeof R != "object")
          return;
        if (aa(R))
          for (var q = 0; q < R.length; q++) {
            var ze = R[q];
            qa(ze) && yl(ze, W);
          }
        else if (qa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var pt = At(R);
          if (typeof pt == "function" && pt !== R.entries)
            for (var Tt = pt.call(R), He; !(He = Tt.next()).done; )
              qa(He.value) && yl(He.value, W);
        }
      }
    }
    function Xa(R) {
      {
        var W = R.type;
        if (W == null || typeof W == "string")
          return;
        var q;
        if (typeof W == "function")
          q = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === we || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === te))
          q = W.propTypes;
        else
          return;
        if (q) {
          var ze = Be(W);
          Pn(q, R.props, "prop", ze, R);
        } else if (W.PropTypes !== void 0 && !tn) {
          tn = !0;
          var pt = Be(W);
          Ze("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pt || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && Ze("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ka(R) {
      {
        for (var W = Object.keys(R.props), q = 0; q < W.length; q++) {
          var ze = W[q];
          if (ze !== "children" && ze !== "key") {
            Ft(R), Ze("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ze), Ft(null);
            break;
          }
        }
        R.ref !== null && (Ft(R), Ze("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    var zi = {};
    function Er(R, W, q, ze, pt, Tt) {
      {
        var He = en(R);
        if (!He) {
          var st = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (st += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nn = ml();
          Nn ? st += Nn : st += Da();
          var Kt;
          R === null ? Kt = "null" : aa(R) ? Kt = "array" : R !== void 0 && R.$$typeof === w ? (Kt = "<" + (Be(R.type) || "Unknown") + " />", st = " Did you accidentally export a JSX literal instead of a component?") : Kt = typeof R, Ze("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Kt, st);
        }
        var pn = vr(R, W, q, pt, Tt);
        if (pn == null)
          return pn;
        if (He) {
          var hr = W.children;
          if (hr !== void 0)
            if (ze)
              if (aa(hr)) {
                for (var Ht = 0; Ht < hr.length; Ht++)
                  Ka(hr[Ht], R);
                Object.freeze && Object.freeze(hr);
              } else
                Ze("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ka(hr, R);
        }
        if (_n.call(W, "key")) {
          var Oa = Be(R), zn = Object.keys(W).filter(function(Ai) {
            return Ai !== "key";
          }), Pr = zn.length > 0 ? "{key: someKey, " + zn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!zi[Oa + Pr]) {
            var rt = zn.length > 0 ? "{" + zn.join(": ..., ") + ": ...}" : "{}";
            Ze(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pr, Oa, rt, Oa), zi[Oa + Pr] = !0;
          }
        }
        return R === Ye ? ka(pn) : Xa(pn), pn;
      }
    }
    function Hr(R, W, q) {
      return Er(R, W, q, !0);
    }
    function sa(R, W, q) {
      return Er(R, W, q, !1);
    }
    var Ui = sa, gl = Hr;
    ev.Fragment = Ye, ev.jsx = Ui, ev.jsxs = gl;
  }(), ev;
}
var FD = {};
FD.NODE_ENV === "production" ? w0.exports = AD() : w0.exports = jD();
var Bt = w0.exports;
function HD() {
  return /* @__PURE__ */ Bt.jsxs("div", { className: "bg-zinc-400 rounded-t-sm p-1", children: [
    /* @__PURE__ */ Bt.jsx("div", { children: "Oppie Bot" }),
    /* @__PURE__ */ Bt.jsx("div", { className: "text-sm", children: "some description" })
  ] });
}
const ru = {
  BOT_ID: "",
  BOT_SECRET: "",
  SESSION_ID: "",
  CHAT_URL: "https://stg.optalk.ai/api/chatter/v1/bots/chat"
};
function PD({ user_avatar: D, message: U }) {
  return /* @__PURE__ */ Bt.jsxs("div", { className: "flex flex-col justify-center items-end px-1 my-2", children: [
    /* @__PURE__ */ Bt.jsx("div", {}),
    /* @__PURE__ */ Bt.jsx("div", { className: "bg-blue-300 flex-grow rounded-md", children: /* @__PURE__ */ Bt.jsx("span", { className: "text-base italic p-2", children: U }) })
  ] });
}
function VD({ messageField: D, setMessageField: U }) {
  const [w, ne] = _a.useState(!0), [Ye, vt] = _a.useState([]);
  _a.useEffect(() => {
    (!ru.BOT_ID || !ru.BOT_SECRET) && ne(!1);
  }, []), _a.useEffect(() => {
    vt([
      {
        type: "bot",
        message: "Hello! How can I help you today?"
      }
    ]);
  }, []), _a.useEffect(() => {
    D.trim() !== "" && (vt([
      ...Ye,
      {
        type: "user",
        message: D
      }
    ]), Qe(D));
  }, [D]);
  const Qe = _a.useCallback((S) => {
    (async (we) => {
      console.log("in here 2");
      let le = {
        request: {
          message: we
        },
        session_id: "",
        bot_id: ru.BOT_ID,
        bot_secret: ru.BOT_SECRET
      };
      console.log("in here 3");
      let Le;
      try {
        Le = await fetch(ru.CHAT_URL, {
          method: "POST",
          body: JSON.stringify(le),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }), Le = await Le.json(), vt([...Ye, {
          type: "bot",
          message: Le.data.response
        }]);
      } catch (te) {
        console.log("Error in fetching response from bot", te);
      }
    })(S);
  }, [ru.BOT_ID, ru.BOT_SECRET]);
  return console.log(Ye), /* @__PURE__ */ Bt.jsx(Bt.Fragment, { children: w ? (
    // show chat panel
    /* @__PURE__ */ Bt.jsx("div", { className: "flex-grow overflow-y-scroll px-1 py-1", children: Ye.map((S, je) => /* @__PURE__ */ Bt.jsx(
      PD,
      {
        message: S.message
      },
      je
    )) })
  ) : /* @__PURE__ */ Bt.jsx("div", { className: "flex-grow", children: /* @__PURE__ */ Bt.jsx("h3", { className: "flex h-full w-full justify-center items-center px-2 text-red-500", children: "Something went wrong! Check with your license provider." }) }) });
}
function BD({ setMessageField: D }) {
  function U() {
    let w = document.getElementById("botimoz-input-field").value;
    w = w.trim(), w.length > 0 && D(w), document.getElementById("botimoz-input-field").value = "";
  }
  return /* @__PURE__ */ Bt.jsx("div", { className: "bg-zinc-400 p-1", children: /* @__PURE__ */ Bt.jsxs("div", { className: "flex justify-start items-center", children: [
    /* @__PURE__ */ Bt.jsx("div", { className: "text-sm m-1", children: "speech" }),
    /* @__PURE__ */ Bt.jsx(
      "input",
      {
        id: "botimoz-input-field",
        type: "text",
        placeholder: "Type a message...",
        className: "w-full p-1 m-1",
        onKeyDown: (w) => {
          w.key === "Enter" && U();
        }
      }
    ),
    /* @__PURE__ */ Bt.jsx(
      "button",
      {
        className: "bg-blue-500 text-white p-1 m-1",
        onClick: () => U(),
        children: "Send"
      }
    )
  ] }) });
}
function $D() {
  const [D, U] = _a.useState("");
  return /* @__PURE__ */ Bt.jsxs("div", { className: "h-[450px] w-[350px] rounded-md border-2 border-black flex flex-col justify-start p-0", children: [
    /* @__PURE__ */ Bt.jsx(HD, {}),
    /* @__PURE__ */ Bt.jsx(VD, { messageField: D, setMessageField: U }),
    /* @__PURE__ */ Bt.jsx(BD, { setMessageField: U })
  ] });
}
var CR = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, mR = qu.createContext && /* @__PURE__ */ qu.createContext(CR), ID = ["attr", "size", "title"];
function YD(D, U) {
  if (D == null) return {};
  var w = QD(D, U), ne, Ye;
  if (Object.getOwnPropertySymbols) {
    var vt = Object.getOwnPropertySymbols(D);
    for (Ye = 0; Ye < vt.length; Ye++)
      ne = vt[Ye], !(U.indexOf(ne) >= 0) && Object.prototype.propertyIsEnumerable.call(D, ne) && (w[ne] = D[ne]);
  }
  return w;
}
function QD(D, U) {
  if (D == null) return {};
  var w = {};
  for (var ne in D)
    if (Object.prototype.hasOwnProperty.call(D, ne)) {
      if (U.indexOf(ne) >= 0) continue;
      w[ne] = D[ne];
    }
  return w;
}
function Ym() {
  return Ym = Object.assign ? Object.assign.bind() : function(D) {
    for (var U = 1; U < arguments.length; U++) {
      var w = arguments[U];
      for (var ne in w)
        Object.prototype.hasOwnProperty.call(w, ne) && (D[ne] = w[ne]);
    }
    return D;
  }, Ym.apply(this, arguments);
}
function yR(D, U) {
  var w = Object.keys(D);
  if (Object.getOwnPropertySymbols) {
    var ne = Object.getOwnPropertySymbols(D);
    U && (ne = ne.filter(function(Ye) {
      return Object.getOwnPropertyDescriptor(D, Ye).enumerable;
    })), w.push.apply(w, ne);
  }
  return w;
}
function Qm(D) {
  for (var U = 1; U < arguments.length; U++) {
    var w = arguments[U] != null ? arguments[U] : {};
    U % 2 ? yR(Object(w), !0).forEach(function(ne) {
      WD(D, ne, w[ne]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(w)) : yR(Object(w)).forEach(function(ne) {
      Object.defineProperty(D, ne, Object.getOwnPropertyDescriptor(w, ne));
    });
  }
  return D;
}
function WD(D, U, w) {
  return U = GD(U), U in D ? Object.defineProperty(D, U, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : D[U] = w, D;
}
function GD(D) {
  var U = qD(D, "string");
  return typeof U == "symbol" ? U : U + "";
}
function qD(D, U) {
  if (typeof D != "object" || !D) return D;
  var w = D[Symbol.toPrimitive];
  if (w !== void 0) {
    var ne = w.call(D, U || "default");
    if (typeof ne != "object") return ne;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (U === "string" ? String : Number)(D);
}
function RR(D) {
  return D && D.map((U, w) => /* @__PURE__ */ qu.createElement(U.tag, Qm({
    key: w
  }, U.attr), RR(U.child)));
}
function TR(D) {
  return (U) => /* @__PURE__ */ qu.createElement(KD, Ym({
    attr: Qm({}, D.attr)
  }, U), RR(D.child));
}
function KD(D) {
  var U = (w) => {
    var {
      attr: ne,
      size: Ye,
      title: vt
    } = D, Qe = YD(D, ID), S = Ye || w.size || "1em", je;
    return w.className && (je = w.className), D.className && (je = (je ? je + " " : "") + D.className), /* @__PURE__ */ qu.createElement("svg", Ym({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, w.attr, ne, Qe, {
      className: je,
      style: Qm(Qm({
        color: D.color || w.color
      }, w.style), D.style),
      height: S,
      width: S,
      xmlns: "http://www.w3.org/2000/svg"
    }), vt && /* @__PURE__ */ qu.createElement("title", null, vt), D.children);
  };
  return mR !== void 0 ? /* @__PURE__ */ qu.createElement(mR.Consumer, null, (w) => U(w)) : U(CR);
}
function XD(D) {
  return TR({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" }, child: [] }] })(D);
}
function ZD(D) {
  return TR({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" }, child: [] }] })(D);
}
function JD({ open: D, setOpen: U }) {
  return /* @__PURE__ */ Bt.jsx("main", { children: /* @__PURE__ */ Bt.jsx(
    "div",
    {
      className: "bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center",
      onClick: () => U(!D),
      children: /* @__PURE__ */ Bt.jsxs("div", { className: "fixed", children: [
        /* @__PURE__ */ Bt.jsx(ZD, { color: "white", className: `${D ? "scale-100 size-10" : "scale-0 size-0"} transition` }),
        /* @__PURE__ */ Bt.jsx(XD, { size: 40, color: "white", className: `${D ? "scale-0 size-0" : "scale-100 size-10"} transition` })
      ] })
    }
  ) });
}
function ek({
  bot_name: D,
  bot_avatar: U,
  bot_greeting: w,
  bot_user_input_placeholder: ne,
  user_avatar: Ye,
  chat_area_bg: vt,
  user_dialog_bg: Qe,
  bot_dialog_bg: S,
  chat_header_bg: je,
  license: we,
  host_url: le,
  height: Le,
  width: te,
  start_open: de = !1,
  right_position: Z,
  bottom_position: pe,
  chat_header_title: We,
  trigger_icon_open: At,
  trigger_icon_close: Et,
  trigger_icon_bg: Ze
}) {
  const [Fe, xt] = _a.useState(de), [Re, ft] = _a.useState(!1);
  return _a.useEffect(() => {
    const an = atob(we).split(";");
    ru.BOT_ID = an[0], ru.BOT_SECRET = an[1], ru.SESSION_ID = an[2], ft(!0);
  }, []), /* @__PURE__ */ Bt.jsx(Bt.Fragment, { children: Re && /* @__PURE__ */ Bt.jsxs("main", { className: "flex justify-start items-end m-5", children: [
    Fe && /* @__PURE__ */ Bt.jsx($D, {}),
    /* @__PURE__ */ Bt.jsx(JD, { open: Fe, setOpen: xt })
  ] }) });
}
const tk = UD(ek, {
  props: {
    license: "string"
  }
});
customElements.define("botimoz-widget", tk);
