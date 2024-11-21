function vD(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var R0 = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oR;
function hD() {
  if (oR) return Et;
  oR = 1;
  var b = Symbol.for("react.element"), M = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), ht = Symbol.for("react.provider"), Be = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), ke = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Ne = Symbol.iterator;
  function ne(k) {
    return k === null || typeof k != "object" ? null : (k = Ne && k[Ne] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var pe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, ve = {};
  function Ge(k, I, Le) {
    this.props = k, this.context = I, this.refs = ve, this.updater = Le || pe;
  }
  Ge.prototype.isReactComponent = {}, Ge.prototype.setState = function(k, I) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, I, "setState");
  }, Ge.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function jt() {
  }
  jt.prototype = Ge.prototype;
  function xt(k, I, Le) {
    this.props = k, this.context = I, this.refs = ve, this.updater = Le || pe;
  }
  var et = xt.prototype = new jt();
  et.constructor = xt, Z(et, Ge.prototype), et.isPureReactComponent = !0;
  var $e = Array.isArray, Nt = Object.prototype.hasOwnProperty, Te = { current: null }, pt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qe(k, I, Le) {
    var Ye, nt = {}, ot = null, yt = null;
    if (I != null) for (Ye in I.ref !== void 0 && (yt = I.ref), I.key !== void 0 && (ot = "" + I.key), I) Nt.call(I, Ye) && !pt.hasOwnProperty(Ye) && (nt[Ye] = I[Ye]);
    var dt = arguments.length - 2;
    if (dt === 1) nt.children = Le;
    else if (1 < dt) {
      for (var Rt = Array(dt), $t = 0; $t < dt; $t++) Rt[$t] = arguments[$t + 2];
      nt.children = Rt;
    }
    if (k && k.defaultProps) for (Ye in dt = k.defaultProps, dt) nt[Ye] === void 0 && (nt[Ye] = dt[Ye]);
    return { $$typeof: b, type: k, key: ot, ref: yt, props: nt, _owner: Te.current };
  }
  function xn(k, I) {
    return { $$typeof: b, type: k.type, key: I, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Sn(k) {
    return typeof k == "object" && k !== null && k.$$typeof === b;
  }
  function en(k) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Le) {
      return I[Le];
    });
  }
  var Ct = /\/+/g;
  function an(k, I) {
    return typeof k == "object" && k !== null && k.key != null ? en("" + k.key) : I.toString(36);
  }
  function Ie(k, I, Le, Ye, nt) {
    var ot = typeof k;
    (ot === "undefined" || ot === "boolean") && (k = null);
    var yt = !1;
    if (k === null) yt = !0;
    else switch (ot) {
      case "string":
      case "number":
        yt = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case b:
          case M:
            yt = !0;
        }
    }
    if (yt) return yt = k, nt = nt(yt), k = Ye === "" ? "." + an(yt, 0) : Ye, $e(nt) ? (Le = "", k != null && (Le = k.replace(Ct, "$&/") + "/"), Ie(nt, I, Le, "", function($t) {
      return $t;
    })) : nt != null && (Sn(nt) && (nt = xn(nt, Le + (!nt.key || yt && yt.key === nt.key ? "" : ("" + nt.key).replace(Ct, "$&/") + "/") + k)), I.push(nt)), 1;
    if (yt = 0, Ye = Ye === "" ? "." : Ye + ":", $e(k)) for (var dt = 0; dt < k.length; dt++) {
      ot = k[dt];
      var Rt = Ye + an(ot, dt);
      yt += Ie(ot, I, Le, Rt, nt);
    }
    else if (Rt = ne(k), typeof Rt == "function") for (k = Rt.call(k), dt = 0; !(ot = k.next()).done; ) ot = ot.value, Rt = Ye + an(ot, dt++), yt += Ie(ot, I, Le, Rt, nt);
    else if (ot === "object") throw I = String(k), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return yt;
  }
  function lt(k, I, Le) {
    if (k == null) return k;
    var Ye = [], nt = 0;
    return Ie(k, Ye, "", "", function(ot) {
      return I.call(Le, ot, nt++);
    }), Ye;
  }
  function _t(k) {
    if (k._status === -1) {
      var I = k._result;
      I = I(), I.then(function(Le) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Le);
      }, function(Le) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Le);
      }), k._status === -1 && (k._status = 0, k._result = I);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ut = { current: null }, $ = { transition: null }, ge = { ReactCurrentDispatcher: ut, ReactCurrentBatchConfig: $, ReactCurrentOwner: Te };
  function oe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: lt, forEach: function(k, I, Le) {
    lt(k, function() {
      I.apply(this, arguments);
    }, Le);
  }, count: function(k) {
    var I = 0;
    return lt(k, function() {
      I++;
    }), I;
  }, toArray: function(k) {
    return lt(k, function(I) {
      return I;
    }) || [];
  }, only: function(k) {
    if (!Sn(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Et.Component = Ge, Et.Fragment = w, Et.Profiler = Pe, Et.PureComponent = xt, Et.StrictMode = te, Et.Suspense = ze, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, Et.act = oe, Et.cloneElement = function(k, I, Le) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Ye = Z({}, k.props), nt = k.key, ot = k.ref, yt = k._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ot = I.ref, yt = Te.current), I.key !== void 0 && (nt = "" + I.key), k.type && k.type.defaultProps) var dt = k.type.defaultProps;
      for (Rt in I) Nt.call(I, Rt) && !pt.hasOwnProperty(Rt) && (Ye[Rt] = I[Rt] === void 0 && dt !== void 0 ? dt[Rt] : I[Rt]);
    }
    var Rt = arguments.length - 2;
    if (Rt === 1) Ye.children = Le;
    else if (1 < Rt) {
      dt = Array(Rt);
      for (var $t = 0; $t < Rt; $t++) dt[$t] = arguments[$t + 2];
      Ye.children = dt;
    }
    return { $$typeof: b, type: k.type, key: nt, ref: ot, props: Ye, _owner: yt };
  }, Et.createContext = function(k) {
    return k = { $$typeof: Be, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: ht, _context: k }, k.Consumer = k;
  }, Et.createElement = qe, Et.createFactory = function(k) {
    var I = qe.bind(null, k);
    return I.type = k, I;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(k) {
    return { $$typeof: S, render: k };
  }, Et.isValidElement = Sn, Et.lazy = function(k) {
    return { $$typeof: ue, _payload: { _status: -1, _result: k }, _init: _t };
  }, Et.memo = function(k, I) {
    return { $$typeof: ke, type: k, compare: I === void 0 ? null : I };
  }, Et.startTransition = function(k) {
    var I = $.transition;
    $.transition = {};
    try {
      k();
    } finally {
      $.transition = I;
    }
  }, Et.unstable_act = oe, Et.useCallback = function(k, I) {
    return ut.current.useCallback(k, I);
  }, Et.useContext = function(k) {
    return ut.current.useContext(k);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(k) {
    return ut.current.useDeferredValue(k);
  }, Et.useEffect = function(k, I) {
    return ut.current.useEffect(k, I);
  }, Et.useId = function() {
    return ut.current.useId();
  }, Et.useImperativeHandle = function(k, I, Le) {
    return ut.current.useImperativeHandle(k, I, Le);
  }, Et.useInsertionEffect = function(k, I) {
    return ut.current.useInsertionEffect(k, I);
  }, Et.useLayoutEffect = function(k, I) {
    return ut.current.useLayoutEffect(k, I);
  }, Et.useMemo = function(k, I) {
    return ut.current.useMemo(k, I);
  }, Et.useReducer = function(k, I, Le) {
    return ut.current.useReducer(k, I, Le);
  }, Et.useRef = function(k) {
    return ut.current.useRef(k);
  }, Et.useState = function(k) {
    return ut.current.useState(k);
  }, Et.useSyncExternalStore = function(k, I, Le) {
    return ut.current.useSyncExternalStore(k, I, Le);
  }, Et.useTransition = function() {
    return ut.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var nv = { exports: {} };
nv.exports;
var sR;
function mD() {
  return sR || (sR = 1, function(b, M) {
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
      var te = "18.3.1", Pe = Symbol.for("react.element"), ht = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Ge = Symbol.for("react.offscreen"), jt = Symbol.iterator, xt = "@@iterator";
      function et(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = jt && h[jt] || h[xt];
        return typeof C == "function" ? C : null;
      }
      var $e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Nt = {
        transition: null
      }, Te = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, pt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, qe = {}, xn = null;
      function Sn(h) {
        xn = h;
      }
      qe.setExtraStackFrame = function(h) {
        xn = h;
      }, qe.getCurrentStack = null, qe.getStackAddendum = function() {
        var h = "";
        xn && (h += xn);
        var C = qe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var en = !1, Ct = !1, an = !1, Ie = !1, lt = !1, _t = {
        ReactCurrentDispatcher: $e,
        ReactCurrentBatchConfig: Nt,
        ReactCurrentOwner: pt
      };
      _t.ReactDebugCurrentFrame = qe, _t.ReactCurrentActQueue = Te;
      function ut(h) {
        {
          for (var C = arguments.length, U = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            U[H - 1] = arguments[H];
          ge("warn", h, U);
        }
      }
      function $(h) {
        {
          for (var C = arguments.length, U = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            U[H - 1] = arguments[H];
          ge("error", h, U);
        }
      }
      function ge(h, C, U) {
        {
          var H = _t.ReactDebugCurrentFrame, J = H.getStackAddendum();
          J !== "" && (C += "%s", U = U.concat([J]));
          var Ce = U.map(function(he) {
            return String(he);
          });
          Ce.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ce);
        }
      }
      var oe = {};
      function k(h, C) {
        {
          var U = h.constructor, H = U && (U.displayName || U.name) || "ReactClass", J = H + "." + C;
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
        enqueueForceUpdate: function(h, C, U) {
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
        enqueueReplaceState: function(h, C, U, H) {
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
        enqueueSetState: function(h, C, U, H) {
          k(h, "setState");
        }
      }, Le = Object.assign, Ye = {};
      Object.freeze(Ye);
      function nt(h, C, U) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = U || I;
      }
      nt.prototype.isReactComponent = {}, nt.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, nt.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ot = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, yt = function(h, C) {
          Object.defineProperty(nt.prototype, h, {
            get: function() {
              ut("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var dt in ot)
          ot.hasOwnProperty(dt) && yt(dt, ot[dt]);
      }
      function Rt() {
      }
      Rt.prototype = nt.prototype;
      function $t(h, C, U) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = U || I;
      }
      var Xn = $t.prototype = new Rt();
      Xn.constructor = $t, Le(Xn, nt.prototype), Xn.isPureReactComponent = !0;
      function Hr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var dr = Array.isArray;
      function En(h) {
        return dr(h);
      }
      function Zn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, U = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return U;
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
      function Nn(h) {
        if (Hn(h))
          return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zn(h)), _n(h);
      }
      function Sr(h, C, U) {
        var H = h.displayName;
        if (H)
          return H;
        var J = C.displayName || C.name || "";
        return J !== "" ? U + "(" + J + ")" : U;
      }
      function pr(h) {
        return h.displayName || "Context";
      }
      function Vn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Be:
            return "Fragment";
          case ht:
            return "Portal";
          case ze:
            return "Profiler";
          case S:
            return "StrictMode";
          case ne:
            return "Suspense";
          case pe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ue:
              var C = h;
              return pr(C) + ".Consumer";
            case ke:
              var U = h;
              return pr(U._context) + ".Provider";
            case Ne:
              return Sr(h, h.render, "ForwardRef");
            case Z:
              var H = h.displayName || null;
              return H !== null ? H : Vn(h.type) || "Memo";
            case ve: {
              var J = h, Ce = J._payload, he = J._init;
              try {
                return Vn(he(Ce));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var aa = Object.prototype.hasOwnProperty, ia = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, vr, la, Jn;
      Jn = {};
      function Er(h) {
        if (aa.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function fn(h) {
        if (aa.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function ua(h, C) {
        var U = function() {
          vr || (vr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        U.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: U,
          configurable: !0
        });
      }
      function oa(h, C) {
        var U = function() {
          la || (la = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        U.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: U,
          configurable: !0
        });
      }
      function sa(h) {
        if (typeof h.ref == "string" && pt.current && h.__self && pt.current.stateNode !== h.__self) {
          var C = Vn(pt.current.type);
          Jn[C] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Jn[C] = !0);
        }
      }
      var ae = function(h, C, U, H, J, Ce, he) {
        var We = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Pe,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: U,
          props: he,
          // Record the component responsible for creating this element.
          _owner: Ce
        };
        return We._store = {}, Object.defineProperty(We._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(We, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(We, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.freeze && (Object.freeze(We.props), Object.freeze(We)), We;
      };
      function Oe(h, C, U) {
        var H, J = {}, Ce = null, he = null, We = null, ft = null;
        if (C != null) {
          Er(C) && (he = C.ref, sa(C)), fn(C) && (Nn(C.key), Ce = "" + C.key), We = C.__self === void 0 ? null : C.__self, ft = C.__source === void 0 ? null : C.__source;
          for (H in C)
            aa.call(C, H) && !ia.hasOwnProperty(H) && (J[H] = C[H]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1)
          J.children = U;
        else if (Pt > 1) {
          for (var Yt = Array(Pt), Wt = 0; Wt < Pt; Wt++)
            Yt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Yt), J.children = Yt;
        }
        if (h && h.defaultProps) {
          var Qt = h.defaultProps;
          for (H in Qt)
            J[H] === void 0 && (J[H] = Qt[H]);
        }
        if (Ce || he) {
          var un = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ce && ua(J, un), he && oa(J, un);
        }
        return ae(h, Ce, he, We, ft, pt.current, J);
      }
      function st(h, C) {
        var U = ae(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return U;
      }
      function Ft(h, C, U) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, J = Le({}, h.props), Ce = h.key, he = h.ref, We = h._self, ft = h._source, Pt = h._owner;
        if (C != null) {
          Er(C) && (he = C.ref, Pt = pt.current), fn(C) && (Nn(C.key), Ce = "" + C.key);
          var Yt;
          h.type && h.type.defaultProps && (Yt = h.type.defaultProps);
          for (H in C)
            aa.call(C, H) && !ia.hasOwnProperty(H) && (C[H] === void 0 && Yt !== void 0 ? J[H] = Yt[H] : J[H] = C[H]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          J.children = U;
        else if (Wt > 1) {
          for (var Qt = Array(Wt), un = 0; un < Wt; un++)
            Qt[un] = arguments[un + 2];
          J.children = Qt;
        }
        return ae(h.type, Ce, he, We, ft, Pt, J);
      }
      function Mt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Pe;
      }
      var Dn = ".", vn = ":";
      function hr(h) {
        var C = /[=:]/g, U = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(J) {
          return U[J];
        });
        return "$" + H;
      }
      var It = !1, In = /\/+/g;
      function Ht(h) {
        return h.replace(In, "$&/");
      }
      function tn(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Nn(h.key), hr("" + h.key)) : C.toString(36);
      }
      function qa(h, C, U, H, J) {
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
                case Pe:
                case ht:
                  he = !0;
              }
          }
        if (he) {
          var We = h, ft = J(We), Pt = H === "" ? Dn + tn(We, 0) : H;
          if (En(ft)) {
            var Yt = "";
            Pt != null && (Yt = Ht(Pt) + "/"), qa(ft, C, Yt, "", function(Yf) {
              return Yf;
            });
          } else ft != null && (Mt(ft) && (ft.key && (!We || We.key !== ft.key) && Nn(ft.key), ft = st(
            ft,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            U + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ft.key && (!We || We.key !== ft.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ht("" + ft.key) + "/"
            ) : "") + Pt
          )), C.push(ft));
          return 1;
        }
        var Wt, Qt, un = 0, Dt = H === "" ? Dn : H + vn;
        if (En(h))
          for (var bl = 0; bl < h.length; bl++)
            Wt = h[bl], Qt = Dt + tn(Wt, bl), un += qa(Wt, C, U, Qt, J);
        else {
          var no = et(h);
          if (typeof no == "function") {
            var os = h;
            no === os.entries && (It || ut("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var ss = no.call(os), Bi, cs = 0; !(Bi = ss.next()).done; )
              Wt = Bi.value, Qt = Dt + tn(Wt, cs++), un += qa(Wt, C, U, Qt, J);
          } else if (Ce === "object") {
            var fs = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (fs === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : fs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return un;
      }
      function Da(h, C, U) {
        if (h == null)
          return h;
        var H = [], J = 0;
        return qa(h, H, "", "", function(Ce) {
          return C.call(U, Ce, J++);
        }), H;
      }
      function ml(h) {
        var C = 0;
        return Da(h, function() {
          C++;
        }), C;
      }
      function ru(h, C, U) {
        Da(h, function() {
          C.apply(this, arguments);
        }, U);
      }
      function au(h) {
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
          $$typeof: ue,
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
          $$typeof: ke,
          _context: C
        };
        var U = !1, H = !1, J = !1;
        {
          var Ce = {
            $$typeof: ue,
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
                return U || (U = !0, $("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(he) {
                J || (ut("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", he), J = !0);
              }
            }
          }), C.Consumer = Ce;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Xa = -1, ka = 0, zi = 1, Cr = 2;
      function Vr(h) {
        if (h._status === Xa) {
          var C = h._result, U = C();
          if (U.then(function(Ce) {
            if (h._status === ka || h._status === Xa) {
              var he = h;
              he._status = zi, he._result = Ce;
            }
          }, function(Ce) {
            if (h._status === ka || h._status === Xa) {
              var he = h;
              he._status = Cr, he._result = Ce;
            }
          }), h._status === Xa) {
            var H = h;
            H._status = ka, H._result = U;
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
      function ca(h) {
        var C = {
          // We use these fields to store the result.
          _status: Xa,
          _result: h
        }, U = {
          $$typeof: ve,
          _payload: C,
          _init: Vr
        };
        {
          var H, J;
          Object.defineProperties(U, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(Ce) {
                $("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = Ce, Object.defineProperty(U, "defaultProps", {
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
                $("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Ce, Object.defineProperty(U, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return U;
      }
      function Ui(h) {
        h != null && h.$$typeof === Z ? $("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? $("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && $("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && $("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ne,
          render: h
        };
        {
          var U;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return U;
            },
            set: function(H) {
              U = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var gl;
      gl = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Be || h === ze || lt || h === S || h === ne || h === pe || Ie || h === Ge || en || Ct || an || typeof h == "object" && h !== null && (h.$$typeof === ve || h.$$typeof === Z || h.$$typeof === ke || h.$$typeof === ue || h.$$typeof === Ne || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === gl || h.getModuleId !== void 0));
      }
      function Q(h, C) {
        R(h) || $("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var U = {
          $$typeof: Z,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(U, "displayName", {
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
        return U;
      }
      function q() {
        var h = $e.current;
        return h === null && $(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ue(h) {
        var C = q();
        if (h._context !== void 0) {
          var U = h._context;
          U.Consumer === h ? $("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : U.Provider === h && $("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function vt(h) {
        var C = q();
        return C.useState(h);
      }
      function Tt(h, C, U) {
        var H = q();
        return H.useReducer(h, C, U);
      }
      function Fe(h) {
        var C = q();
        return C.useRef(h);
      }
      function ct(h, C) {
        var U = q();
        return U.useEffect(h, C);
      }
      function Mn(h, C) {
        var U = q();
        return U.useInsertionEffect(h, C);
      }
      function Kt(h, C) {
        var U = q();
        return U.useLayoutEffect(h, C);
      }
      function dn(h, C) {
        var U = q();
        return U.useCallback(h, C);
      }
      function mr(h, C) {
        var U = q();
        return U.useMemo(h, C);
      }
      function Vt(h, C, U) {
        var H = q();
        return H.useImperativeHandle(h, C, U);
      }
      function Oa(h, C) {
        {
          var U = q();
          return U.useDebugValue(h, C);
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
      function Ai(h, C, U) {
        var H = q();
        return H.useSyncExternalStore(h, C, U);
      }
      var ji = 0, Sl, Br, Zo, Rr, Jo, es, ts;
      function iu() {
      }
      iu.__reactDisabledLog = !0;
      function qu() {
        {
          if (ji === 0) {
            Sl = console.log, Br = console.info, Zo = console.warn, Rr = console.error, Jo = console.group, es = console.groupCollapsed, ts = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: iu,
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
              log: Le({}, h, {
                value: Sl
              }),
              info: Le({}, h, {
                value: Br
              }),
              warn: Le({}, h, {
                value: Zo
              }),
              error: Le({}, h, {
                value: Rr
              }),
              group: Le({}, h, {
                value: Jo
              }),
              groupCollapsed: Le({}, h, {
                value: es
              }),
              groupEnd: Le({}, h, {
                value: ts
              })
            });
          }
          ji < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = _t.ReactCurrentDispatcher, La;
      function El(h, C, U) {
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
      var pi = !1, lu;
      {
        var uu = typeof WeakMap == "function" ? WeakMap : Map;
        lu = new uu();
      }
      function Cl(h, C) {
        if (!h || pi)
          return "";
        {
          var U = lu.get(h);
          if (U !== void 0)
            return U;
        }
        var H;
        pi = !0;
        var J = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ce;
        Ce = di.current, di.current = null, qu();
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
            for (var We = Dt.stack.split(`
`), ft = H.stack.split(`
`), Pt = We.length - 1, Yt = ft.length - 1; Pt >= 1 && Yt >= 0 && We[Pt] !== ft[Yt]; )
              Yt--;
            for (; Pt >= 1 && Yt >= 0; Pt--, Yt--)
              if (We[Pt] !== ft[Yt]) {
                if (Pt !== 1 || Yt !== 1)
                  do
                    if (Pt--, Yt--, Yt < 0 || We[Pt] !== ft[Yt]) {
                      var Wt = `
` + We[Pt].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && lu.set(h, Wt), Wt;
                    }
                  while (Pt >= 1 && Yt >= 0);
                break;
              }
          }
        } finally {
          pi = !1, di.current = Ce, Fi(), Error.prepareStackTrace = J;
        }
        var Qt = h ? h.displayName || h.name : "", un = Qt ? El(Qt) : "";
        return typeof h == "function" && lu.set(h, un), un;
      }
      function ns(h, C, U) {
        return Cl(h, !1);
      }
      function rs(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function gt(h, C, U) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Cl(h, rs(h));
        if (typeof h == "string")
          return El(h);
        switch (h) {
          case ne:
            return El("Suspense");
          case pe:
            return El("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ne:
              return ns(h.render);
            case Z:
              return gt(h.type, C, U);
            case ve: {
              var H = h, J = H._payload, Ce = H._init;
              try {
                return gt(Ce(J), C, U);
              } catch {
              }
            }
          }
        return "";
      }
      var as = {}, Ku = _t.ReactDebugCurrentFrame;
      function Rl(h) {
        if (h) {
          var C = h._owner, U = gt(h.type, h._source, C ? C.type : null);
          Ku.setExtraStackFrame(U);
        } else
          Ku.setExtraStackFrame(null);
      }
      function is(h, C, U, H, J) {
        {
          var Ce = Function.call.bind(aa);
          for (var he in h)
            if (Ce(h, he)) {
              var We = void 0;
              try {
                if (typeof h[he] != "function") {
                  var ft = Error((H || "React class") + ": " + U + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ft.name = "Invariant Violation", ft;
                }
                We = h[he](C, he, H, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pt) {
                We = Pt;
              }
              We && !(We instanceof Error) && (Rl(J), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", U, he, typeof We), Rl(null)), We instanceof Error && !(We.message in as) && (as[We.message] = !0, Rl(J), $("Failed %s type: %s", U, We.message), Rl(null));
            }
        }
      }
      function St(h) {
        if (h) {
          var C = h._owner, U = gt(h.type, h._source, C ? C.type : null);
          Sn(U);
        } else
          Sn(null);
      }
      var Xu;
      Xu = !1;
      function ou() {
        if (pt.current) {
          var h = Vn(pt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ke(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), U = h.lineNumber;
          return `

Check your code at ` + C + ":" + U + ".";
        }
        return "";
      }
      function Za(h) {
        return h != null ? Ke(h.__source) : "";
      }
      var hn = {};
      function $r(h) {
        var C = ou();
        if (!C) {
          var U = typeof h == "string" ? h : h.displayName || h.name;
          U && (C = `

Check the top-level render call using <` + U + ">.");
        }
        return C;
      }
      function Na(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var U = $r(C);
          if (!hn[U]) {
            hn[U] = !0;
            var H = "";
            h && h._owner && h._owner !== pt.current && (H = " It was passed a child from " + Vn(h._owner.type) + "."), St(h), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, H), St(null);
          }
        }
      }
      function Tl(h, C) {
        if (typeof h == "object") {
          if (En(h))
            for (var U = 0; U < h.length; U++) {
              var H = h[U];
              Mt(H) && Na(H, C);
            }
          else if (Mt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var J = et(h);
            if (typeof J == "function" && J !== h.entries)
              for (var Ce = J.call(h), he; !(he = Ce.next()).done; )
                Mt(he.value) && Na(he.value, C);
          }
        }
      }
      function ln(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var U;
          if (typeof C == "function")
            U = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ne || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === Z))
            U = C.propTypes;
          else
            return;
          if (U) {
            var H = Vn(C);
            is(U, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Xu) {
            Xu = !0;
            var J = Vn(C);
            $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function mn(h) {
        {
          for (var C = Object.keys(h.props), U = 0; U < C.length; U++) {
            var H = C[U];
            if (H !== "children" && H !== "key") {
              St(h), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), St(null);
              break;
            }
          }
          h.ref !== null && (St(h), $("Invalid attribute `ref` supplied to `React.Fragment`."), St(null));
        }
      }
      function ls(h, C, U) {
        var H = R(h);
        if (!H) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = Za(C);
          Ce ? J += Ce : J += ou();
          var he;
          h === null ? he = "null" : En(h) ? he = "array" : h !== void 0 && h.$$typeof === Pe ? (he = "<" + (Vn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : he = typeof h, $("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, J);
        }
        var We = Oe.apply(this, arguments);
        if (We == null)
          return We;
        if (H)
          for (var ft = 2; ft < arguments.length; ft++)
            Tl(arguments[ft], h);
        return h === Be ? mn(We) : ln(We), We;
      }
      var er = !1;
      function Ir(h) {
        var C = ls.bind(null, h);
        return C.type = h, er || (er = !0, ut("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return ut("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, U) {
        for (var H = Ft.apply(this, arguments), J = 2; J < arguments.length; J++)
          Tl(arguments[J], H.type);
        return ln(H), H;
      }
      function Zu(h, C) {
        var U = Nt.transition;
        Nt.transition = {};
        var H = Nt.transition;
        Nt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Nt.transition = U, U === null && H._updatedFibers) {
            var J = H._updatedFibers.size;
            J > 10 && ut("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var su = !1, cu = null;
      function wl(h) {
        if (cu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), U = b && b[C];
            cu = U.call(b, "timers").setImmediate;
          } catch {
            cu = function(J) {
              su === !1 && (su = !0, typeof MessageChannel > "u" && $("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ce = new MessageChannel();
              Ce.port1.onmessage = J, Ce.port2.postMessage(void 0);
            };
          }
        return cu(h);
      }
      var Ma = 0, Hi = !1;
      function fu(h) {
        {
          var C = Ma;
          Ma++, Te.current === null && (Te.current = []);
          var U = Te.isBatchingLegacy, H;
          try {
            if (Te.isBatchingLegacy = !0, H = h(), !U && Te.didScheduleLegacyUpdate) {
              var J = Te.current;
              J !== null && (Te.didScheduleLegacyUpdate = !1, Pi(J));
            }
          } catch (Qt) {
            throw Vi(C), Qt;
          } finally {
            Te.isBatchingLegacy = U;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var Ce = H, he = !1, We = {
              then: function(Qt, un) {
                he = !0, Ce.then(function(Dt) {
                  Vi(C), Ma === 0 ? Ju(Dt, Qt, un) : Qt(Dt);
                }, function(Dt) {
                  Vi(C), un(Dt);
                });
              }
            };
            return !Hi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              he || (Hi = !0, $("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), We;
          } else {
            var ft = H;
            if (Vi(C), Ma === 0) {
              var Pt = Te.current;
              Pt !== null && (Pi(Pt), Te.current = null);
              var Yt = {
                then: function(Qt, un) {
                  Te.current === null ? (Te.current = [], Ju(ft, Qt, un)) : Qt(ft);
                }
              };
              return Yt;
            } else {
              var Wt = {
                then: function(Qt, un) {
                  Qt(ft);
                }
              };
              return Wt;
            }
          }
        }
      }
      function Vi(h) {
        h !== Ma - 1 && $("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = h;
      }
      function Ju(h, C, U) {
        {
          var H = Te.current;
          if (H !== null)
            try {
              Pi(H), wl(function() {
                H.length === 0 ? (Te.current = null, C(h)) : Ju(h, C, U);
              });
            } catch (J) {
              U(J);
            }
          else
            C(h);
        }
      }
      var vi = !1;
      function Pi(h) {
        if (!vi) {
          vi = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var U = h[C];
              do
                U = U(!0);
              while (U !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            vi = !1;
          }
        }
      }
      var eo = ls, us = Ja, ei = Ir, to = {
        map: Da,
        forEach: ru,
        count: ml,
        toArray: au,
        only: yl
      };
      M.Children = to, M.Component = nt, M.Fragment = Be, M.Profiler = ze, M.PureComponent = $t, M.StrictMode = S, M.Suspense = ne, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, M.act = fu, M.cloneElement = us, M.createContext = Ka, M.createElement = eo, M.createFactory = ei, M.createRef = Hr, M.forwardRef = Ui, M.isValidElement = Mt, M.lazy = ca, M.memo = Q, M.startTransition = Zu, M.unstable_act = fu, M.useCallback = dn, M.useContext = Ue, M.useDebugValue = Oa, M.useDeferredValue = Pr, M.useEffect = ct, M.useId = rt, M.useImperativeHandle = Vt, M.useInsertionEffect = Mn, M.useLayoutEffect = Kt, M.useMemo = mr, M.useReducer = Tt, M.useRef = Fe, M.useState = vt, M.useSyncExternalStore = Ai, M.useTransition = zn, M.version = te, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(nv, nv.exports)), nv.exports;
}
var yD = {};
yD.NODE_ENV === "production" ? R0.exports = hD() : R0.exports = mD();
var Kn = R0.exports;
const Gu = /* @__PURE__ */ vD(Kn);
var T0 = { exports: {} }, Qa = {}, Pm = { exports: {} }, S0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cR;
function gD() {
  return cR || (cR = 1, function(b) {
    function M($, ge) {
      var oe = $.length;
      $.push(ge);
      e: for (; 0 < oe; ) {
        var k = oe - 1 >>> 1, I = $[k];
        if (0 < Pe(I, ge)) $[k] = ge, $[oe] = I, oe = k;
        else break e;
      }
    }
    function w($) {
      return $.length === 0 ? null : $[0];
    }
    function te($) {
      if ($.length === 0) return null;
      var ge = $[0], oe = $.pop();
      if (oe !== ge) {
        $[0] = oe;
        e: for (var k = 0, I = $.length, Le = I >>> 1; k < Le; ) {
          var Ye = 2 * (k + 1) - 1, nt = $[Ye], ot = Ye + 1, yt = $[ot];
          if (0 > Pe(nt, oe)) ot < I && 0 > Pe(yt, nt) ? ($[k] = yt, $[ot] = oe, k = ot) : ($[k] = nt, $[Ye] = oe, k = Ye);
          else if (ot < I && 0 > Pe(yt, oe)) $[k] = yt, $[ot] = oe, k = ot;
          else break e;
        }
      }
      return ge;
    }
    function Pe($, ge) {
      var oe = $.sortIndex - ge.sortIndex;
      return oe !== 0 ? oe : $.id - ge.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ht = performance;
      b.unstable_now = function() {
        return ht.now();
      };
    } else {
      var Be = Date, S = Be.now();
      b.unstable_now = function() {
        return Be.now() - S;
      };
    }
    var ze = [], ke = [], ue = 1, Ne = null, ne = 3, pe = !1, Z = !1, ve = !1, Ge = typeof setTimeout == "function" ? setTimeout : null, jt = typeof clearTimeout == "function" ? clearTimeout : null, xt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function et($) {
      for (var ge = w(ke); ge !== null; ) {
        if (ge.callback === null) te(ke);
        else if (ge.startTime <= $) te(ke), ge.sortIndex = ge.expirationTime, M(ze, ge);
        else break;
        ge = w(ke);
      }
    }
    function $e($) {
      if (ve = !1, et($), !Z) if (w(ze) !== null) Z = !0, _t(Nt);
      else {
        var ge = w(ke);
        ge !== null && ut($e, ge.startTime - $);
      }
    }
    function Nt($, ge) {
      Z = !1, ve && (ve = !1, jt(qe), qe = -1), pe = !0;
      var oe = ne;
      try {
        for (et(ge), Ne = w(ze); Ne !== null && (!(Ne.expirationTime > ge) || $ && !en()); ) {
          var k = Ne.callback;
          if (typeof k == "function") {
            Ne.callback = null, ne = Ne.priorityLevel;
            var I = k(Ne.expirationTime <= ge);
            ge = b.unstable_now(), typeof I == "function" ? Ne.callback = I : Ne === w(ze) && te(ze), et(ge);
          } else te(ze);
          Ne = w(ze);
        }
        if (Ne !== null) var Le = !0;
        else {
          var Ye = w(ke);
          Ye !== null && ut($e, Ye.startTime - ge), Le = !1;
        }
        return Le;
      } finally {
        Ne = null, ne = oe, pe = !1;
      }
    }
    var Te = !1, pt = null, qe = -1, xn = 5, Sn = -1;
    function en() {
      return !(b.unstable_now() - Sn < xn);
    }
    function Ct() {
      if (pt !== null) {
        var $ = b.unstable_now();
        Sn = $;
        var ge = !0;
        try {
          ge = pt(!0, $);
        } finally {
          ge ? an() : (Te = !1, pt = null);
        }
      } else Te = !1;
    }
    var an;
    if (typeof xt == "function") an = function() {
      xt(Ct);
    };
    else if (typeof MessageChannel < "u") {
      var Ie = new MessageChannel(), lt = Ie.port2;
      Ie.port1.onmessage = Ct, an = function() {
        lt.postMessage(null);
      };
    } else an = function() {
      Ge(Ct, 0);
    };
    function _t($) {
      pt = $, Te || (Te = !0, an());
    }
    function ut($, ge) {
      qe = Ge(function() {
        $(b.unstable_now());
      }, ge);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function($) {
      $.callback = null;
    }, b.unstable_continueExecution = function() {
      Z || pe || (Z = !0, _t(Nt));
    }, b.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return ne;
    }, b.unstable_getFirstCallbackNode = function() {
      return w(ze);
    }, b.unstable_next = function($) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
          var ge = 3;
          break;
        default:
          ge = ne;
      }
      var oe = ne;
      ne = ge;
      try {
        return $();
      } finally {
        ne = oe;
      }
    }, b.unstable_pauseExecution = function() {
    }, b.unstable_requestPaint = function() {
    }, b.unstable_runWithPriority = function($, ge) {
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
      var oe = ne;
      ne = $;
      try {
        return ge();
      } finally {
        ne = oe;
      }
    }, b.unstable_scheduleCallback = function($, ge, oe) {
      var k = b.unstable_now();
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
      return I = oe + I, $ = { id: ue++, callback: ge, priorityLevel: $, startTime: oe, expirationTime: I, sortIndex: -1 }, oe > k ? ($.sortIndex = oe, M(ke, $), w(ze) === null && $ === w(ke) && (ve ? (jt(qe), qe = -1) : ve = !0, ut($e, oe - k))) : ($.sortIndex = I, M(ze, $), Z || pe || (Z = !0, _t(Nt))), $;
    }, b.unstable_shouldYield = en, b.unstable_wrapCallback = function($) {
      var ge = ne;
      return function() {
        var oe = ne;
        ne = ge;
        try {
          return $.apply(this, arguments);
        } finally {
          ne = oe;
        }
      };
    };
  }(S0)), S0;
}
var E0 = {}, fR;
function SD() {
  return fR || (fR = 1, function(b) {
    var M = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    M.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = !1, te = !1, Pe = 5;
      function ht(ae, Oe) {
        var st = ae.length;
        ae.push(Oe), ze(ae, Oe, st);
      }
      function Be(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function S(ae) {
        if (ae.length === 0)
          return null;
        var Oe = ae[0], st = ae.pop();
        return st !== Oe && (ae[0] = st, ke(ae, st, 0)), Oe;
      }
      function ze(ae, Oe, st) {
        for (var Ft = st; Ft > 0; ) {
          var Mt = Ft - 1 >>> 1, Dn = ae[Mt];
          if (ue(Dn, Oe) > 0)
            ae[Mt] = Oe, ae[Ft] = Dn, Ft = Mt;
          else
            return;
        }
      }
      function ke(ae, Oe, st) {
        for (var Ft = st, Mt = ae.length, Dn = Mt >>> 1; Ft < Dn; ) {
          var vn = (Ft + 1) * 2 - 1, hr = ae[vn], It = vn + 1, In = ae[It];
          if (ue(hr, Oe) < 0)
            It < Mt && ue(In, hr) < 0 ? (ae[Ft] = In, ae[It] = Oe, Ft = It) : (ae[Ft] = hr, ae[vn] = Oe, Ft = vn);
          else if (It < Mt && ue(In, Oe) < 0)
            ae[Ft] = In, ae[It] = Oe, Ft = It;
          else
            return;
        }
      }
      function ue(ae, Oe) {
        var st = ae.sortIndex - Oe.sortIndex;
        return st !== 0 ? st : ae.id - Oe.id;
      }
      var Ne = 1, ne = 2, pe = 3, Z = 4, ve = 5;
      function Ge(ae, Oe) {
      }
      var jt = typeof performance == "object" && typeof performance.now == "function";
      if (jt) {
        var xt = performance;
        b.unstable_now = function() {
          return xt.now();
        };
      } else {
        var et = Date, $e = et.now();
        b.unstable_now = function() {
          return et.now() - $e;
        };
      }
      var Nt = 1073741823, Te = -1, pt = 250, qe = 5e3, xn = 1e4, Sn = Nt, en = [], Ct = [], an = 1, Ie = null, lt = pe, _t = !1, ut = !1, $ = !1, ge = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function I(ae) {
        for (var Oe = Be(Ct); Oe !== null; ) {
          if (Oe.callback === null)
            S(Ct);
          else if (Oe.startTime <= ae)
            S(Ct), Oe.sortIndex = Oe.expirationTime, ht(en, Oe);
          else
            return;
          Oe = Be(Ct);
        }
      }
      function Le(ae) {
        if ($ = !1, I(ae), !ut)
          if (Be(en) !== null)
            ut = !0, Er(Ye);
          else {
            var Oe = Be(Ct);
            Oe !== null && fn(Le, Oe.startTime - ae);
          }
      }
      function Ye(ae, Oe) {
        ut = !1, $ && ($ = !1, ua()), _t = !0;
        var st = lt;
        try {
          var Ft;
          if (!te) return nt(ae, Oe);
        } finally {
          Ie = null, lt = st, _t = !1;
        }
      }
      function nt(ae, Oe) {
        var st = Oe;
        for (I(st), Ie = Be(en); Ie !== null && !w && !(Ie.expirationTime > st && (!ae || pr())); ) {
          var Ft = Ie.callback;
          if (typeof Ft == "function") {
            Ie.callback = null, lt = Ie.priorityLevel;
            var Mt = Ie.expirationTime <= st, Dn = Ft(Mt);
            st = b.unstable_now(), typeof Dn == "function" ? Ie.callback = Dn : Ie === Be(en) && S(en), I(st);
          } else
            S(en);
          Ie = Be(en);
        }
        if (Ie !== null)
          return !0;
        var vn = Be(Ct);
        return vn !== null && fn(Le, vn.startTime - st), !1;
      }
      function ot(ae, Oe) {
        switch (ae) {
          case Ne:
          case ne:
          case pe:
          case Z:
          case ve:
            break;
          default:
            ae = pe;
        }
        var st = lt;
        lt = ae;
        try {
          return Oe();
        } finally {
          lt = st;
        }
      }
      function yt(ae) {
        var Oe;
        switch (lt) {
          case Ne:
          case ne:
          case pe:
            Oe = pe;
            break;
          default:
            Oe = lt;
            break;
        }
        var st = lt;
        lt = Oe;
        try {
          return ae();
        } finally {
          lt = st;
        }
      }
      function dt(ae) {
        var Oe = lt;
        return function() {
          var st = lt;
          lt = Oe;
          try {
            return ae.apply(this, arguments);
          } finally {
            lt = st;
          }
        };
      }
      function Rt(ae, Oe, st) {
        var Ft = b.unstable_now(), Mt;
        if (typeof st == "object" && st !== null) {
          var Dn = st.delay;
          typeof Dn == "number" && Dn > 0 ? Mt = Ft + Dn : Mt = Ft;
        } else
          Mt = Ft;
        var vn;
        switch (ae) {
          case Ne:
            vn = Te;
            break;
          case ne:
            vn = pt;
            break;
          case ve:
            vn = Sn;
            break;
          case Z:
            vn = xn;
            break;
          case pe:
          default:
            vn = qe;
            break;
        }
        var hr = Mt + vn, It = {
          id: an++,
          callback: Oe,
          priorityLevel: ae,
          startTime: Mt,
          expirationTime: hr,
          sortIndex: -1
        };
        return Mt > Ft ? (It.sortIndex = Mt, ht(Ct, It), Be(en) === null && It === Be(Ct) && ($ ? ua() : $ = !0, fn(Le, Mt - Ft))) : (It.sortIndex = hr, ht(en, It), !ut && !_t && (ut = !0, Er(Ye))), It;
      }
      function $t() {
      }
      function Xn() {
        !ut && !_t && (ut = !0, Er(Ye));
      }
      function Hr() {
        return Be(en);
      }
      function dr(ae) {
        ae.callback = null;
      }
      function En() {
        return lt;
      }
      var Zn = !1, Hn = null, _n = -1, Nn = Pe, Sr = -1;
      function pr() {
        var ae = b.unstable_now() - Sr;
        return !(ae < Nn);
      }
      function Vn() {
      }
      function aa(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? Nn = Math.floor(1e3 / ae) : Nn = Pe;
      }
      var ia = function() {
        if (Hn !== null) {
          var ae = b.unstable_now();
          Sr = ae;
          var Oe = !0, st = !0;
          try {
            st = Hn(Oe, ae);
          } finally {
            st ? vr() : (Zn = !1, Hn = null);
          }
        } else
          Zn = !1;
      }, vr;
      if (typeof k == "function")
        vr = function() {
          k(ia);
        };
      else if (typeof MessageChannel < "u") {
        var la = new MessageChannel(), Jn = la.port2;
        la.port1.onmessage = ia, vr = function() {
          Jn.postMessage(null);
        };
      } else
        vr = function() {
          ge(ia, 0);
        };
      function Er(ae) {
        Hn = ae, Zn || (Zn = !0, vr());
      }
      function fn(ae, Oe) {
        _n = ge(function() {
          ae(b.unstable_now());
        }, Oe);
      }
      function ua() {
        oe(_n), _n = -1;
      }
      var oa = Vn, sa = null;
      b.unstable_IdlePriority = ve, b.unstable_ImmediatePriority = Ne, b.unstable_LowPriority = Z, b.unstable_NormalPriority = pe, b.unstable_Profiling = sa, b.unstable_UserBlockingPriority = ne, b.unstable_cancelCallback = dr, b.unstable_continueExecution = Xn, b.unstable_forceFrameRate = aa, b.unstable_getCurrentPriorityLevel = En, b.unstable_getFirstCallbackNode = Hr, b.unstable_next = yt, b.unstable_pauseExecution = $t, b.unstable_requestPaint = oa, b.unstable_runWithPriority = ot, b.unstable_scheduleCallback = Rt, b.unstable_shouldYield = pr, b.unstable_wrapCallback = dt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(E0)), E0;
}
var dR;
function ER() {
  if (dR) return Pm.exports;
  dR = 1;
  var b = {};
  return b.NODE_ENV === "production" ? Pm.exports = gD() : Pm.exports = SD(), Pm.exports;
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
var pR;
function ED() {
  if (pR) return Qa;
  pR = 1;
  var b = Kn, M = ER();
  function w(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var te = /* @__PURE__ */ new Set(), Pe = {};
  function ht(n, r) {
    Be(n, r), Be(n + "Capture", r);
  }
  function Be(n, r) {
    for (Pe[n] = r, n = 0; n < r.length; n++) te.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ze = Object.prototype.hasOwnProperty, ke = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ue = {}, Ne = {};
  function ne(n) {
    return ze.call(Ne, n) ? !0 : ze.call(ue, n) ? !1 : ke.test(n) ? Ne[n] = !0 : (ue[n] = !0, !1);
  }
  function pe(n, r, l, o) {
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
    if (r === null || typeof r > "u" || pe(n, r, l, o)) return !0;
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
  function ve(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ge[n] = new ve(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ge[r] = new ve(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ge[n] = new ve(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ge[n] = new ve(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ge[n] = new ve(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ge[n] = new ve(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ge[n] = new ve(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ge[n] = new ve(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ge[n] = new ve(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var jt = /[\-:]([a-z])/g;
  function xt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      jt,
      xt
    );
    Ge[r] = new ve(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(jt, xt);
    Ge[r] = new ve(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(jt, xt);
    Ge[r] = new ve(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ge[n] = new ve(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ge.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ge[n] = new ve(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function et(n, r, l, o) {
    var c = Ge.hasOwnProperty(r) ? Ge[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Z(r, l, c, o) && (l = null), o || c === null ? ne(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var $e = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nt = Symbol.for("react.element"), Te = Symbol.for("react.portal"), pt = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), Sn = Symbol.for("react.provider"), en = Symbol.for("react.context"), Ct = Symbol.for("react.forward_ref"), an = Symbol.for("react.suspense"), Ie = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), ut = Symbol.for("react.offscreen"), $ = Symbol.iterator;
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
  var Le = !1;
  function Ye(n, r) {
    if (!n || Le) return "";
    Le = !0;
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
      Le = !1, Error.prepareStackTrace = l;
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
        return n = Ye(n.type, !1), n;
      case 11:
        return n = Ye(n.type.render, !1), n;
      case 1:
        return n = Ye(n.type, !0), n;
      default:
        return "";
    }
  }
  function ot(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case pt:
        return "Fragment";
      case Te:
        return "Portal";
      case xn:
        return "Profiler";
      case qe:
        return "StrictMode";
      case an:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case en:
        return (n.displayName || "Context") + ".Consumer";
      case Sn:
        return (n._context.displayName || "Context") + ".Provider";
      case Ct:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case lt:
        return r = n.displayName || null, r !== null ? r : ot(n.type) || "Memo";
      case _t:
        r = n._payload, n = n._init;
        try {
          return ot(n(r));
        } catch {
        }
    }
    return null;
  }
  function yt(n) {
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
        return ot(r);
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
  function Xn(n) {
    n._valueTracker || (n._valueTracker = $t(n));
  }
  function Hr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Rt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function dr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function En(n, r) {
    var l = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Zn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = dt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Hn(n, r) {
    r = r.checked, r != null && et(n, "checked", r, !1);
  }
  function _n(n, r) {
    Hn(n, r);
    var l = dt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Sr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Sr(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Nn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Sr(n, r, l) {
    (r !== "number" || dr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var pr = Array.isArray;
  function Vn(n, r, l, o) {
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
  function aa(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(w(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ia(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(w(92));
        if (pr(l)) {
          if (1 < l.length) throw Error(w(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: dt(l) };
  }
  function vr(n, r) {
    var l = dt(r.value), o = dt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function la(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Jn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Er(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Jn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var fn, ua = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (fn = fn || document.createElement("div"), fn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = fn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function oa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var sa = {
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
  Object.keys(sa).forEach(function(n) {
    ae.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), sa[r] = sa[n];
    });
  });
  function Oe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || sa.hasOwnProperty(n) && sa[n] ? ("" + r).trim() : r + "px";
  }
  function st(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Oe(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Ft = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Mt(n, r) {
    if (r) {
      if (Ft[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(w(137, n));
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
  var vn = null;
  function hr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var It = null, In = null, Ht = null;
  function tn(n) {
    if (n = mi(n)) {
      if (typeof It != "function") throw Error(w(280));
      var r = n.stateNode;
      r && (r = kc(r), It(n.stateNode, n.type, r));
    }
  }
  function qa(n) {
    In ? Ht ? Ht.push(n) : Ht = [n] : In = n;
  }
  function Da() {
    if (In) {
      var n = In, r = Ht;
      if (Ht = In = null, tn(n), r) for (n = 0; n < r.length; n++) tn(r[n]);
    }
  }
  function ml(n, r) {
    return n(r);
  }
  function ru() {
  }
  var au = !1;
  function yl(n, r, l) {
    if (au) return n(r, l);
    au = !0;
    try {
      return ml(n, r, l);
    } finally {
      au = !1, (In !== null || Ht !== null) && (ru(), Da());
    }
  }
  function Ka(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = kc(l);
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
  var Cr = !1, Vr = null, ca = !1, Ui = null, gl = { onError: function(n) {
    Cr = !0, Vr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Cr = !1, Vr = null, zi.apply(gl, arguments);
  }
  function Q(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Cr) {
      if (Cr) {
        var j = Vr;
        Cr = !1, Vr = null;
      } else throw Error(w(198));
      ca || (ca = !0, Ui = j);
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
  function Ue(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function vt(n) {
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
          if (d === l) return vt(c), n;
          if (d === o) return vt(c), r;
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
  function Fe(n) {
    return n = Tt(n), n !== null ? ct(n) : null;
  }
  function ct(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ct(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Mn = M.unstable_scheduleCallback, Kt = M.unstable_cancelCallback, dn = M.unstable_shouldYield, mr = M.unstable_requestPaint, Vt = M.unstable_now, Oa = M.unstable_getCurrentPriorityLevel, zn = M.unstable_ImmediatePriority, Pr = M.unstable_UserBlockingPriority, rt = M.unstable_NormalPriority, Ai = M.unstable_LowPriority, ji = M.unstable_IdlePriority, Sl = null, Br = null;
  function Zo(n) {
    if (Br && typeof Br.onCommitFiberRoot == "function") try {
      Br.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Rr = Math.clz32 ? Math.clz32 : ts, Jo = Math.log, es = Math.LN2;
  function ts(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Jo(n) / es | 0) | 0;
  }
  var iu = 64, qu = 4194304;
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
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Rr(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var m = 31 - Rr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = La(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function pi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var n = iu;
    return iu <<= 1, !(iu & 4194240) && (iu = 64), n;
  }
  function uu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Rr(r), n[r] = l;
  }
  function ns(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Rr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function rs(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Rr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var gt = 0;
  function as(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ku, Rl, is, St, Xu, ou = !1, Ke = [], Za = null, hn = null, $r = null, Na = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map(), ln = [], mn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ls(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Za = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        $r = null;
        break;
      case "pointerover":
      case "pointerout":
        Na.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tl.delete(r.pointerId);
    }
  }
  function er(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = mi(r), r !== null && Rl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ir(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Za = er(Za, n, r, l, o, c), !0;
      case "dragenter":
        return hn = er(hn, n, r, l, o, c), !0;
      case "mouseover":
        return $r = er($r, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Na.set(d, er(Na.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tl.set(d, er(Tl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ja(n) {
    var r = qi(n.target);
    if (r !== null) {
      var l = q(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ue(l), r !== null) {
            n.blockedOn = r, Xu(n.priority, function() {
              is(l);
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
  function Zu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = eo(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        vn = o, l.target.dispatchEvent(o), vn = null;
      } else return r = mi(l), r !== null && Rl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function su(n, r, l) {
    Zu(n) && l.delete(r);
  }
  function cu() {
    ou = !1, Za !== null && Zu(Za) && (Za = null), hn !== null && Zu(hn) && (hn = null), $r !== null && Zu($r) && ($r = null), Na.forEach(su), Tl.forEach(su);
  }
  function wl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ou || (ou = !0, M.unstable_scheduleCallback(M.unstable_NormalPriority, cu)));
  }
  function Ma(n) {
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
    for (Za !== null && wl(Za, n), hn !== null && wl(hn, n), $r !== null && wl($r, n), Na.forEach(r), Tl.forEach(r), l = 0; l < ln.length; l++) o = ln[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ln.length && (l = ln[0], l.blockedOn === null); ) Ja(l), l.blockedOn === null && ln.shift();
  }
  var Hi = $e.ReactCurrentBatchConfig, fu = !0;
  function Vi(n, r, l, o) {
    var c = gt, d = Hi.transition;
    Hi.transition = null;
    try {
      gt = 1, vi(n, r, l, o);
    } finally {
      gt = c, Hi.transition = d;
    }
  }
  function Ju(n, r, l, o) {
    var c = gt, d = Hi.transition;
    Hi.transition = null;
    try {
      gt = 4, vi(n, r, l, o);
    } finally {
      gt = c, Hi.transition = d;
    }
  }
  function vi(n, r, l, o) {
    if (fu) {
      var c = eo(n, r, l, o);
      if (c === null) rd(n, r, o, Pi, l), ls(n, o);
      else if (Ir(c, n, r, l, o)) o.stopPropagation();
      else if (ls(n, o), r & 4 && -1 < mn.indexOf(n)) {
        for (; c !== null; ) {
          var d = mi(c);
          if (d !== null && Ku(d), d = eo(n, r, l, o), d === null && rd(n, r, o, Pi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else rd(n, r, o, null, l);
    }
  }
  var Pi = null;
  function eo(n, r, l, o) {
    if (Pi = null, n = hr(o), n = qi(n), n !== null) if (r = q(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ue(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Pi = n, null;
  }
  function us(n) {
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
  var ei = null, to = null, h = null;
  function C() {
    if (h) return h;
    var n, r = to, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function U(n) {
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
  }, defaultPrevented: 0, isTrusted: 0 }, We = Ce(he), ft = oe({}, he, { view: 0, detail: 0 }), Pt = Ce(ft), Yt, Wt, Qt, un = oe({}, ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? (Yt = n.screenX - Qt.screenX, Wt = n.screenY - Qt.screenY) : Wt = Yt = 0, Qt = n), Yt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Dt = Ce(un), bl = oe({}, un, { dataTransfer: 0 }), no = Ce(bl), os = oe({}, ft, { relatedTarget: 0 }), ss = Ce(os), Bi = oe({}, he, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cs = Ce(Bi), fs = oe({}, he, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Yf = Ce(fs), Gm = oe({}, he, { data: 0 }), rv = Ce(Gm), av = {
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
  }, Wf = {
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
  }, iv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = iv[n]) ? !!r[n] : !1;
  }
  function Sc() {
    return lv;
  }
  var qm = oe({}, ft, { key: function(n) {
    if (n.key) {
      var r = av[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = U(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Wf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sc, charCode: function(n) {
    return n.type === "keypress" ? U(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? U(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $i = Ce(qm), Km = oe({}, un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ec = Ce(Km), Qf = oe({}, ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sc }), Gf = Ce(Qf), Xm = oe({}, he, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = Ce(Xm), uv = oe({}, un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yr = Ce(uv), Ii = [9, 13, 27, 32], Cn = S && "CompositionEvent" in window, fa = null;
  S && "documentMode" in document && (fa = document.documentMode);
  var qf = S && "TextEvent" in window && !fa, ds = S && (!Cn || fa && 8 < fa && 11 >= fa), ov = " ", ro = !1;
  function sv(n, r) {
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
  function cv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var xl = !1;
  function Zm(n, r) {
    switch (n) {
      case "compositionend":
        return cv(r);
      case "keypress":
        return r.which !== 32 ? null : (ro = !0, ov);
      case "textInput":
        return n = r.data, n === ov && ro ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (xl) return n === "compositionend" || !Cn && sv(n, r) ? (n = C(), h = to = ei = null, xl = !1, n) : null;
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
        return ds && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ey = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Kf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ey[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    qa(o), r = _c(r, "onChange"), 0 < r.length && (l = new We("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ps = null, vs = null;
  function dv(n) {
    Dv(n, 0);
  }
  function Yi(n) {
    var r = uo(n);
    if (Hr(r)) return n;
  }
  function Xf(n, r) {
    if (n === "change") return r;
  }
  var Zf = !1;
  if (S) {
    var Rc;
    if (S) {
      var Jf = "oninput" in document;
      if (!Jf) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), Jf = typeof pv.oninput == "function";
      }
      Rc = Jf;
    } else Rc = !1;
    Zf = Rc && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    ps && (ps.detachEvent("onpropertychange", hv), vs = ps = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Yi(vs)) {
      var r = [];
      fv(r, vs, n, hr(n)), yl(dv, r);
    }
  }
  function ty(n, r, l) {
    n === "focusin" ? (vv(), ps = r, vs = l, ps.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function ny(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Yi(vs);
  }
  function ry(n, r) {
    if (n === "click") return Yi(r);
  }
  function ay(n, r) {
    if (n === "input" || n === "change") return Yi(r);
  }
  function mv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : mv;
  function ao(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ze.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function yv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function gv(n, r) {
    var l = yv(n);
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
      l = yv(l);
    }
  }
  function Sv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Sv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ev() {
    for (var n = window, r = dr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = dr(n.document);
    }
    return r;
  }
  function hs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function du(n) {
    var r = Ev(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && hs(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = gv(l, d);
          var m = gv(
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
  var Tc = S && "documentMode" in document && 11 >= document.documentMode, pu = null, _l = null, ms = null, ed = !1;
  function Cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ed || pu == null || pu !== dr(o) || (o = pu, "selectionStart" in o && hs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ms && ao(ms, o) || (ms = o, o = _c(_l, "onSelect"), 0 < o.length && (r = new We("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = pu)));
  }
  function wc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var io = { animationend: wc("Animation", "AnimationEnd"), animationiteration: wc("Animation", "AnimationIteration"), animationstart: wc("Animation", "AnimationStart"), transitionend: wc("Transition", "TransitionEnd") }, bc = {}, Rv = {};
  S && (Rv = document.createElement("div").style, "AnimationEvent" in window || (delete io.animationend.animation, delete io.animationiteration.animation, delete io.animationstart.animation), "TransitionEvent" in window || delete io.transitionend.transition);
  function ys(n) {
    if (bc[n]) return bc[n];
    if (!io[n]) return n;
    var r = io[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Rv) return bc[n] = r[l];
    return n;
  }
  var yr = ys("animationend"), td = ys("animationiteration"), Tv = ys("animationstart"), wv = ys("transitionend"), bv = /* @__PURE__ */ new Map(), xv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dl(n, r) {
    bv.set(n, r), ht(r, [n]);
  }
  for (var xc = 0; xc < xv.length; xc++) {
    var gs = xv[xc], Ss = gs.toLowerCase(), iy = gs[0].toUpperCase() + gs.slice(1);
    Dl(Ss, "on" + iy);
  }
  Dl(yr, "onAnimationEnd"), Dl(td, "onAnimationIteration"), Dl(Tv, "onAnimationStart"), Dl("dblclick", "onDoubleClick"), Dl("focusin", "onFocus"), Dl("focusout", "onBlur"), Dl(wv, "onTransitionEnd"), Be("onMouseEnter", ["mouseout", "mouseover"]), Be("onMouseLeave", ["mouseout", "mouseover"]), Be("onPointerEnter", ["pointerout", "pointerover"]), Be("onPointerLeave", ["pointerout", "pointerover"]), ht("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ht("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ht("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ht("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ht("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));
  function _v(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Q(o, r, void 0, n), n.currentTarget = null;
  }
  function Dv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, j = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          _v(c, E, j), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, j = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          _v(c, E, j), d = T;
        }
      }
    }
    if (ca) throw n = Ui, ca = !1, Ui = null, n;
  }
  function Xt(n, r) {
    var l = r[fd];
    l === void 0 && (l = r[fd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (nd(r, n, 2, !1), l.add(o));
  }
  function Es(n, r, l) {
    var o = 0;
    r && (o |= 4), nd(l, n, o, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function hi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, te.forEach(function(l) {
        l !== "selectionchange" && (ly.has(l) || Es(l, !1, n), Es(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, Es("selectionchange", !1, r));
    }
  }
  function nd(n, r, l, o) {
    switch (us(r)) {
      case 1:
        var c = Vi;
        break;
      case 4:
        c = Ju;
        break;
      default:
        c = vi;
    }
    l = c.bind(null, r, l, n), c = void 0, !Xa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function rd(n, r, l, o, c) {
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
      var j = d, G = hr(l), K = [];
      e: {
        var W = bv.get(n);
        if (W !== void 0) {
          var fe = We, Se = n;
          switch (n) {
            case "keypress":
              if (U(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = $i;
              break;
            case "focusin":
              Se = "focus", fe = ss;
              break;
            case "focusout":
              Se = "blur", fe = ss;
              break;
            case "beforeblur":
            case "afterblur":
              fe = ss;
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
              fe = no;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = Gf;
              break;
            case yr:
            case td:
            case Tv:
              fe = cs;
              break;
            case wv:
              fe = Cc;
              break;
            case "scroll":
              fe = Pt;
              break;
            case "wheel":
              fe = Yr;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = Yf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = Ec;
          }
          var Re = (r & 4) !== 0, On = !Re && n === "scroll", O = Re ? W !== null ? W + "Capture" : null : W;
          Re = [];
          for (var _ = j, z; _ !== null; ) {
            z = _;
            var ee = z.stateNode;
            if (z.tag === 5 && ee !== null && (z = ee, O !== null && (ee = Ka(_, O), ee != null && Re.push(lo(_, ee, z)))), On) break;
            _ = _.return;
          }
          0 < Re.length && (W = new fe(W, Se, null, l, G), K.push({ event: W, listeners: Re }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", W && l !== vn && (Se = l.relatedTarget || l.fromElement) && (qi(Se) || Se[ni])) break e;
          if ((fe || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, fe ? (Se = l.relatedTarget || l.toElement, fe = j, Se = Se ? qi(Se) : null, Se !== null && (On = q(Se), Se !== On || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (fe = null, Se = j), fe !== Se)) {
            if (Re = Dt, ee = "onMouseLeave", O = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Re = Ec, ee = "onPointerLeave", O = "onPointerEnter", _ = "pointer"), On = fe == null ? W : uo(fe), z = Se == null ? W : uo(Se), W = new Re(ee, _ + "leave", fe, l, G), W.target = On, W.relatedTarget = z, ee = null, qi(G) === j && (Re = new Re(O, _ + "enter", Se, l, G), Re.target = z, Re.relatedTarget = On, ee = Re), On = ee, fe && Se) t: {
              for (Re = fe, O = Se, _ = 0, z = Re; z; z = vu(z)) _++;
              for (z = 0, ee = O; ee; ee = vu(ee)) z++;
              for (; 0 < _ - z; ) Re = vu(Re), _--;
              for (; 0 < z - _; ) O = vu(O), z--;
              for (; _--; ) {
                if (Re === O || O !== null && Re === O.alternate) break t;
                Re = vu(Re), O = vu(O);
              }
              Re = null;
            }
            else Re = null;
            fe !== null && ad(K, W, fe, Re, !1), Se !== null && On !== null && ad(K, On, Se, Re, !0);
          }
        }
        e: {
          if (W = j ? uo(j) : window, fe = W.nodeName && W.nodeName.toLowerCase(), fe === "select" || fe === "input" && W.type === "file") var be = Xf;
          else if (Kf(W)) if (Zf) be = ay;
          else {
            be = ny;
            var He = ty;
          }
          else (fe = W.nodeName) && fe.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (be = ry);
          if (be && (be = be(n, j))) {
            fv(K, be, l, G);
            break e;
          }
          He && He(n, W, j), n === "focusout" && (He = W._wrapperState) && He.controlled && W.type === "number" && Sr(W, "number", W.value);
        }
        switch (He = j ? uo(j) : window, n) {
          case "focusin":
            (Kf(He) || He.contentEditable === "true") && (pu = He, _l = j, ms = null);
            break;
          case "focusout":
            ms = _l = pu = null;
            break;
          case "mousedown":
            ed = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ed = !1, Cv(K, l, G);
            break;
          case "selectionchange":
            if (Tc) break;
          case "keydown":
          case "keyup":
            Cv(K, l, G);
        }
        var Ve;
        if (Cn) e: {
          switch (n) {
            case "compositionstart":
              var _e = "onCompositionStart";
              break e;
            case "compositionend":
              _e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _e = "onCompositionUpdate";
              break e;
          }
          _e = void 0;
        }
        else xl ? sv(n, l) && (_e = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (_e = "onCompositionStart");
        _e && (ds && l.locale !== "ko" && (xl || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && xl && (Ve = C()) : (ei = G, to = "value" in ei ? ei.value : ei.textContent, xl = !0)), He = _c(j, _e), 0 < He.length && (_e = new rv(_e, n, null, l, G), K.push({ event: _e, listeners: He }), Ve ? _e.data = Ve : (Ve = cv(l), Ve !== null && (_e.data = Ve)))), (Ve = qf ? Zm(n, l) : Jm(n, l)) && (j = _c(j, "onBeforeInput"), 0 < j.length && (G = new rv("onBeforeInput", "beforeinput", null, l, G), K.push({ event: G, listeners: j }), G.data = Ve));
      }
      Dv(K, r);
    });
  }
  function lo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function _c(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ka(n, l), d != null && o.unshift(lo(n, d, c)), d = Ka(n, r), d != null && o.push(lo(n, d, c))), n = n.return;
    }
    return o;
  }
  function vu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ad(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, j = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && j !== null && (E = j, c ? (T = Ka(l, d), T != null && m.unshift(lo(l, T, E))) : c || (T = Ka(l, d), T != null && m.push(lo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var kv = /\r\n?/g, id = /\u0000|\uFFFD/g;
  function Ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(kv, `
`).replace(id, "");
  }
  function Cs(n, r, l) {
    if (r = Ov(r), Ov(n) !== r && l) throw Error(w(425));
  }
  function Dc() {
  }
  var ld = null, ud = null;
  function hu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rs = typeof setTimeout == "function" ? setTimeout : void 0, Ts = typeof clearTimeout == "function" ? clearTimeout : void 0, od = typeof Promise == "function" ? Promise : void 0, Lv = typeof queueMicrotask == "function" ? queueMicrotask : typeof od < "u" ? function(n) {
    return od.resolve(null).then(n).catch(sd);
  } : Rs;
  function sd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function cd(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ma(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ma(r);
  }
  function da(n) {
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
  function ws(n) {
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
  var Gi = Math.random().toString(36).slice(2), za = "__reactFiber$" + Gi, bs = "__reactProps$" + Gi, ni = "__reactContainer$" + Gi, fd = "__reactEvents$" + Gi, uy = "__reactListeners$" + Gi, oy = "__reactHandles$" + Gi;
  function qi(n) {
    var r = n[za];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ni] || l[za]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = ws(n); n !== null; ) {
          if (l = n[za]) return l;
          n = ws(n);
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
  function uo(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(w(33));
  }
  function kc(n) {
    return n[bs] || null;
  }
  var Ae = [], ri = -1;
  function Zt(n) {
    return { current: n };
  }
  function we(n) {
    0 > ri || (n.current = Ae[ri], Ae[ri] = null, ri--);
  }
  function zt(n, r) {
    ri++, Ae[ri] = n.current, n.current = r;
  }
  var Ua = {}, Yn = Zt(Ua), Ze = Zt(!1), Tr = Ua;
  function pa(n, r) {
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
  function Wr() {
    we(Ze), we(Yn);
  }
  function yi(n, r, l) {
    if (Yn.current !== Ua) throw Error(w(168));
    zt(Yn, r), zt(Ze, l);
  }
  function kl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(w(108, yt(n) || "Unknown", c));
    return oe({}, l, o);
  }
  function mu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ua, Tr = Yn.current, zt(Yn, n), zt(Ze, Ze.current), !0;
  }
  function Nv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(w(169));
    l ? (n = kl(n, r, Tr), o.__reactInternalMemoizedMergedChildContext = n, we(Ze), we(Yn), zt(Yn, n)) : we(Ze), zt(Ze, l);
  }
  var Ki = null, Ol = !1, tr = !1;
  function Oc(n) {
    Ki === null ? Ki = [n] : Ki.push(n);
  }
  function Mv(n) {
    Ol = !0, Oc(n);
  }
  function gi() {
    if (!tr && Ki !== null) {
      tr = !0;
      var n = 0, r = gt;
      try {
        var l = Ki;
        for (gt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ki = null, Ol = !1;
      } catch (c) {
        throw Ki !== null && (Ki = Ki.slice(n + 1)), Mn(zn, gi), c;
      } finally {
        gt = r, tr = !1;
      }
    }
    return null;
  }
  var Aa = [], Ll = 0, ja = null, yu = 0, Qr = [], Gr = 0, ai = null, qr = 1, nr = "";
  function gu(n, r) {
    Aa[Ll++] = yu, Aa[Ll++] = ja, ja = n, yu = r;
  }
  function Nl(n, r, l) {
    Qr[Gr++] = qr, Qr[Gr++] = nr, Qr[Gr++] = ai, ai = n;
    var o = qr;
    n = nr;
    var c = 32 - Rr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Rr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, qr = 1 << 32 - Rr(r) + c | l << c | o, nr = d + n;
    } else qr = 1 << d | l << c | o, nr = n;
  }
  function Lc(n) {
    n.return !== null && (gu(n, 1), Nl(n, 1, 0));
  }
  function Nc(n) {
    for (; n === ja; ) ja = Aa[--Ll], Aa[Ll] = null, yu = Aa[--Ll], Aa[Ll] = null;
    for (; n === ai; ) ai = Qr[--Gr], Qr[Gr] = null, nr = Qr[--Gr], Qr[Gr] = null, qr = Qr[--Gr], Qr[Gr] = null;
  }
  var va = null, ha = null, on = !1, Fa = null;
  function dd(n, r) {
    var l = Ra(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function pd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, va = n, ha = da(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, va = n, ha = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ai !== null ? { id: qr, overflow: nr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ra(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, va = n, ha = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Mc(n) {
    if (on) {
      var r = ha;
      if (r) {
        var l = r;
        if (!pd(n, r)) {
          if (vd(n)) throw Error(w(418));
          r = da(l.nextSibling);
          var o = va;
          r && pd(n, r) ? dd(o, l) : (n.flags = n.flags & -4097 | 2, on = !1, va = n);
        }
      } else {
        if (vd(n)) throw Error(w(418));
        n.flags = n.flags & -4097 | 2, on = !1, va = n;
      }
    }
  }
  function hd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    va = n;
  }
  function zc(n) {
    if (n !== va) return !1;
    if (!on) return hd(n), on = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !hu(n.type, n.memoizedProps)), r && (r = ha)) {
      if (vd(n)) throw zv(), Error(w(418));
      for (; r; ) dd(n, r), r = da(r.nextSibling);
    }
    if (hd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(w(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ha = da(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ha = null;
      }
    } else ha = va ? da(n.stateNode.nextSibling) : null;
    return !0;
  }
  function zv() {
    for (var n = ha; n; ) n = da(n.nextSibling);
  }
  function oo() {
    ha = va = null, on = !1;
  }
  function An(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var sy = $e.ReactCurrentBatchConfig;
  function Ml(n, r, l) {
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
  function so(n, r) {
    throw n = Object.prototype.toString.call(r), Error(w(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zl(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(O, _) {
      if (n) {
        var z = O.deletions;
        z === null ? (O.deletions = [_], O.flags |= 16) : z.push(_);
      }
    }
    function l(O, _) {
      if (!n) return null;
      for (; _ !== null; ) r(O, _), _ = _.sibling;
      return null;
    }
    function o(O, _) {
      for (O = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? O.set(_.key, _) : O.set(_.index, _), _ = _.sibling;
      return O;
    }
    function c(O, _) {
      return O = Yl(O, _), O.index = 0, O.sibling = null, O;
    }
    function d(O, _, z) {
      return O.index = z, n ? (z = O.alternate, z !== null ? (z = z.index, z < _ ? (O.flags |= 2, _) : z) : (O.flags |= 2, _)) : (O.flags |= 1048576, _);
    }
    function m(O) {
      return n && O.alternate === null && (O.flags |= 2), O;
    }
    function E(O, _, z, ee) {
      return _ === null || _.tag !== 6 ? (_ = qd(z, O.mode, ee), _.return = O, _) : (_ = c(_, z), _.return = O, _);
    }
    function T(O, _, z, ee) {
      var be = z.type;
      return be === pt ? G(O, _, z.props.children, ee, z.key) : _ !== null && (_.elementType === be || typeof be == "object" && be !== null && be.$$typeof === _t && zl(be) === _.type) ? (ee = c(_, z.props), ee.ref = Ml(O, _, z), ee.return = O, ee) : (ee = lf(z.type, z.key, z.props, null, O.mode, ee), ee.ref = Ml(O, _, z), ee.return = O, ee);
    }
    function j(O, _, z, ee) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== z.containerInfo || _.stateNode.implementation !== z.implementation ? (_ = of(z, O.mode, ee), _.return = O, _) : (_ = c(_, z.children || []), _.return = O, _);
    }
    function G(O, _, z, ee, be) {
      return _ === null || _.tag !== 7 ? (_ = Mu(z, O.mode, ee, be), _.return = O, _) : (_ = c(_, z), _.return = O, _);
    }
    function K(O, _, z) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = qd("" + _, O.mode, z), _.return = O, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Nt:
            return z = lf(_.type, _.key, _.props, null, O.mode, z), z.ref = Ml(O, null, _), z.return = O, z;
          case Te:
            return _ = of(_, O.mode, z), _.return = O, _;
          case _t:
            var ee = _._init;
            return K(O, ee(_._payload), z);
        }
        if (pr(_) || ge(_)) return _ = Mu(_, O.mode, z, null), _.return = O, _;
        so(O, _);
      }
      return null;
    }
    function W(O, _, z, ee) {
      var be = _ !== null ? _.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number") return be !== null ? null : E(O, _, "" + z, ee);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Nt:
            return z.key === be ? T(O, _, z, ee) : null;
          case Te:
            return z.key === be ? j(O, _, z, ee) : null;
          case _t:
            return be = z._init, W(
              O,
              _,
              be(z._payload),
              ee
            );
        }
        if (pr(z) || ge(z)) return be !== null ? null : G(O, _, z, ee, null);
        so(O, z);
      }
      return null;
    }
    function fe(O, _, z, ee, be) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") return O = O.get(z) || null, E(_, O, "" + ee, be);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case Nt:
            return O = O.get(ee.key === null ? z : ee.key) || null, T(_, O, ee, be);
          case Te:
            return O = O.get(ee.key === null ? z : ee.key) || null, j(_, O, ee, be);
          case _t:
            var He = ee._init;
            return fe(O, _, z, He(ee._payload), be);
        }
        if (pr(ee) || ge(ee)) return O = O.get(z) || null, G(_, O, ee, be, null);
        so(_, ee);
      }
      return null;
    }
    function Se(O, _, z, ee) {
      for (var be = null, He = null, Ve = _, _e = _ = 0, bn = null; Ve !== null && _e < z.length; _e++) {
        Ve.index > _e ? (bn = Ve, Ve = null) : bn = Ve.sibling;
        var Lt = W(O, Ve, z[_e], ee);
        if (Lt === null) {
          Ve === null && (Ve = bn);
          break;
        }
        n && Ve && Lt.alternate === null && r(O, Ve), _ = d(Lt, _, _e), He === null ? be = Lt : He.sibling = Lt, He = Lt, Ve = bn;
      }
      if (_e === z.length) return l(O, Ve), on && gu(O, _e), be;
      if (Ve === null) {
        for (; _e < z.length; _e++) Ve = K(O, z[_e], ee), Ve !== null && (_ = d(Ve, _, _e), He === null ? be = Ve : He.sibling = Ve, He = Ve);
        return on && gu(O, _e), be;
      }
      for (Ve = o(O, Ve); _e < z.length; _e++) bn = fe(Ve, O, _e, z[_e], ee), bn !== null && (n && bn.alternate !== null && Ve.delete(bn.key === null ? _e : bn.key), _ = d(bn, _, _e), He === null ? be = bn : He.sibling = bn, He = bn);
      return n && Ve.forEach(function(Wl) {
        return r(O, Wl);
      }), on && gu(O, _e), be;
    }
    function Re(O, _, z, ee) {
      var be = ge(z);
      if (typeof be != "function") throw Error(w(150));
      if (z = be.call(z), z == null) throw Error(w(151));
      for (var He = be = null, Ve = _, _e = _ = 0, bn = null, Lt = z.next(); Ve !== null && !Lt.done; _e++, Lt = z.next()) {
        Ve.index > _e ? (bn = Ve, Ve = null) : bn = Ve.sibling;
        var Wl = W(O, Ve, Lt.value, ee);
        if (Wl === null) {
          Ve === null && (Ve = bn);
          break;
        }
        n && Ve && Wl.alternate === null && r(O, Ve), _ = d(Wl, _, _e), He === null ? be = Wl : He.sibling = Wl, He = Wl, Ve = bn;
      }
      if (Lt.done) return l(
        O,
        Ve
      ), on && gu(O, _e), be;
      if (Ve === null) {
        for (; !Lt.done; _e++, Lt = z.next()) Lt = K(O, Lt.value, ee), Lt !== null && (_ = d(Lt, _, _e), He === null ? be = Lt : He.sibling = Lt, He = Lt);
        return on && gu(O, _e), be;
      }
      for (Ve = o(O, Ve); !Lt.done; _e++, Lt = z.next()) Lt = fe(Ve, O, _e, Lt.value, ee), Lt !== null && (n && Lt.alternate !== null && Ve.delete(Lt.key === null ? _e : Lt.key), _ = d(Lt, _, _e), He === null ? be = Lt : He.sibling = Lt, He = Lt);
      return n && Ve.forEach(function(ch) {
        return r(O, ch);
      }), on && gu(O, _e), be;
    }
    function On(O, _, z, ee) {
      if (typeof z == "object" && z !== null && z.type === pt && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Nt:
            e: {
              for (var be = z.key, He = _; He !== null; ) {
                if (He.key === be) {
                  if (be = z.type, be === pt) {
                    if (He.tag === 7) {
                      l(O, He.sibling), _ = c(He, z.props.children), _.return = O, O = _;
                      break e;
                    }
                  } else if (He.elementType === be || typeof be == "object" && be !== null && be.$$typeof === _t && zl(be) === He.type) {
                    l(O, He.sibling), _ = c(He, z.props), _.ref = Ml(O, He, z), _.return = O, O = _;
                    break e;
                  }
                  l(O, He);
                  break;
                } else r(O, He);
                He = He.sibling;
              }
              z.type === pt ? (_ = Mu(z.props.children, O.mode, ee, z.key), _.return = O, O = _) : (ee = lf(z.type, z.key, z.props, null, O.mode, ee), ee.ref = Ml(O, _, z), ee.return = O, O = ee);
            }
            return m(O);
          case Te:
            e: {
              for (He = z.key; _ !== null; ) {
                if (_.key === He) if (_.tag === 4 && _.stateNode.containerInfo === z.containerInfo && _.stateNode.implementation === z.implementation) {
                  l(O, _.sibling), _ = c(_, z.children || []), _.return = O, O = _;
                  break e;
                } else {
                  l(O, _);
                  break;
                }
                else r(O, _);
                _ = _.sibling;
              }
              _ = of(z, O.mode, ee), _.return = O, O = _;
            }
            return m(O);
          case _t:
            return He = z._init, On(O, _, He(z._payload), ee);
        }
        if (pr(z)) return Se(O, _, z, ee);
        if (ge(z)) return Re(O, _, z, ee);
        so(O, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" ? (z = "" + z, _ !== null && _.tag === 6 ? (l(O, _.sibling), _ = c(_, z), _.return = O, O = _) : (l(O, _), _ = qd(z, O.mode, ee), _.return = O, O = _), m(O)) : l(O, _);
    }
    return On;
  }
  var Ul = Uv(!0), Av = Uv(!1), Uc = Zt(null), Xi = null, kn = null, le = null;
  function Ha() {
    le = kn = Xi = null;
  }
  function ma(n) {
    var r = Uc.current;
    we(Uc), n._currentValue = r;
  }
  function md(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function co(n, r) {
    Xi = n, le = kn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (wr = !0), n.firstContext = null);
  }
  function Va(n) {
    var r = n._currentValue;
    if (le !== n) if (n = { context: n, memoizedValue: r, next: null }, kn === null) {
      if (Xi === null) throw Error(w(308));
      kn = n, Xi.dependencies = { lanes: 0, firstContext: n };
    } else kn = kn.next = n;
    return r;
  }
  var Su = null;
  function yd(n) {
    Su === null ? Su = [n] : Su.push(n);
  }
  function Pn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, yd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Zi(n, o);
  }
  function Zi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Al = !1;
  function gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Sd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ya(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ga(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ot & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Zi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, yd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Zi(n, l);
  }
  function Ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, rs(n, l);
    }
  }
  function jv(n, r) {
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
  function jc(n, r, l, o) {
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
        var W = E.lane, fe = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Se = n, Re = E;
            switch (W = r, fe = l, Re.tag) {
              case 1:
                if (Se = Re.payload, typeof Se == "function") {
                  K = Se.call(fe, K, W);
                  break e;
                }
                K = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = Re.payload, W = typeof Se == "function" ? Se.call(fe, K, W) : Se, W == null) break e;
                K = oe({}, K, W);
                break e;
              case 2:
                Al = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else fe = { eventTime: fe, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (j = G = fe, T = K) : G = G.next = fe, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (T = K), c.baseState = T, c.firstBaseUpdate = j, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      xu |= m, n.lanes = m, n.memoizedState = K;
    }
  }
  function Fv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(w(191, c));
        c.call(o);
      }
    }
  }
  var xs = {}, Si = Zt(xs), fo = Zt(xs), po = Zt(xs);
  function Eu(n) {
    if (n === xs) throw Error(w(174));
    return n;
  }
  function Ed(n, r) {
    switch (zt(po, r), zt(fo, n), zt(Si, xs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Er(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Er(r, n);
    }
    we(Si), zt(Si, r);
  }
  function vo() {
    we(Si), we(fo), we(po);
  }
  function Hv(n) {
    Eu(po.current);
    var r = Eu(Si.current), l = Er(r, n.type);
    r !== l && (zt(fo, n), zt(Si, l));
  }
  function Cd(n) {
    fo.current === n && (we(Si), we(fo));
  }
  var yn = Zt(0);
  function _s(n) {
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
  var Rd = [];
  function Fc() {
    for (var n = 0; n < Rd.length; n++) Rd[n]._workInProgressVersionPrimary = null;
    Rd.length = 0;
  }
  var Hc = $e.ReactCurrentDispatcher, Td = $e.ReactCurrentBatchConfig, Ji = 0, ie = null, Me = null, Xe = null, sn = !1, Kr = !1, ho = 0, cy = 0;
  function gr() {
    throw Error(w(321));
  }
  function wd(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Ds(n, r, l, o, c, d) {
    if (Ji = d, ie = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Hc.current = n === null || n.memoizedState === null ? Sa : fy, n = l(o, c), Kr) {
      d = 0;
      do {
        if (Kr = !1, ho = 0, 25 <= d) throw Error(w(301));
        d += 1, Xe = Me = null, r.updateQueue = null, Hc.current = nn, n = l(o, c);
      } while (Kr);
    }
    if (Hc.current = Ci, r = Me !== null && Me.next !== null, Ji = 0, Xe = Me = ie = null, sn = !1, r) throw Error(w(300));
    return n;
  }
  function Y() {
    var n = ho !== 0;
    return ho = 0, n;
  }
  function Jt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xe === null ? ie.memoizedState = Xe = n : Xe = Xe.next = n, Xe;
  }
  function xe() {
    if (Me === null) {
      var n = ie.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Me.next;
    var r = Xe === null ? ie.memoizedState : Xe.next;
    if (r !== null) Xe = r, Me = n;
    else {
      if (n === null) throw Error(w(310));
      Me = n, n = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, Xe === null ? ie.memoizedState = Xe = n : Xe = Xe.next = n;
    }
    return Xe;
  }
  function Ei(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ii(n) {
    var r = xe(), l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = Me, c = o.baseQueue, d = l.pending;
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
          T === null ? (E = T = K, m = o) : T = T.next = K, ie.lanes |= G, xu |= G;
        }
        j = j.next;
      } while (j !== null && j !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (wr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ie.lanes |= d, xu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function el(n) {
    var r = xe(), l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (wr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function li() {
  }
  function mo(n, r) {
    var l = ie, o = xe(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, wr = !0), o = o.queue, ks(Vc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Xe !== null && Xe.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ru(9, yo.bind(null, l, o, c, r), void 0, null), Rn === null) throw Error(w(349));
      Ji & 30 || Cu(l, r, c);
    }
    return c;
  }
  function Cu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ie.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function yo(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Pc(r) && Bc(n);
  }
  function Vc(n, r, l) {
    return l(function() {
      Pc(r) && Bc(n);
    });
  }
  function Pc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Bc(n) {
    var r = Zi(n, 1);
    r !== null && Pa(r, n, 1, -1);
  }
  function $c(n) {
    var r = Jt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ei, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vv.bind(null, ie, n), [r.memoizedState, n];
  }
  function Ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ie.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ic() {
    return xe().memoizedState;
  }
  function go(n, r, l, o) {
    var c = Jt();
    ie.flags |= n, c.memoizedState = Ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function So(n, r, l, o) {
    var c = xe();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Me !== null) {
      var m = Me.memoizedState;
      if (d = m.destroy, o !== null && wd(o, m.deps)) {
        c.memoizedState = Ru(r, l, d, o);
        return;
      }
    }
    ie.flags |= n, c.memoizedState = Ru(1 | r, l, d, o);
  }
  function Yc(n, r) {
    return go(8390656, 8, n, r);
  }
  function ks(n, r) {
    return So(2048, 8, n, r);
  }
  function Wc(n, r) {
    return So(4, 2, n, r);
  }
  function Qc(n, r) {
    return So(4, 4, n, r);
  }
  function Gc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function qc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, So(4, 4, Gc.bind(null, r, n), l);
  }
  function Os() {
  }
  function Ls(n, r) {
    var l = xe();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && wd(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Tu(n, r) {
    var l = xe();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && wd(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Kc(n, r, l) {
    return Ji & 21 ? (ti(l, r) || (l = lu(), ie.lanes |= l, xu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, wr = !0), n.memoizedState = l);
  }
  function bd(n, r) {
    var l = gt;
    gt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Td.transition;
    Td.transition = {};
    try {
      n(!1), r();
    } finally {
      gt = l, Td.transition = o;
    }
  }
  function Xc() {
    return xe().memoizedState;
  }
  function xd(n, r, l) {
    var o = oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Eo(n)) _d(r, l);
    else if (l = Pn(n, r, l, o), l !== null) {
      var c = Gn();
      Pa(l, n, o, c), Co(l, r, o);
    }
  }
  function Vv(n, r, l) {
    var o = oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Eo(n)) _d(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, yd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Pn(n, r, c, o), l !== null && (c = Gn(), Pa(l, n, o, c), Co(l, r, o));
    }
  }
  function Eo(n) {
    var r = n.alternate;
    return n === ie || r !== null && r === ie;
  }
  function _d(n, r) {
    Kr = sn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Co(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, rs(n, l);
    }
  }
  var Ci = { readContext: Va, useCallback: gr, useContext: gr, useEffect: gr, useImperativeHandle: gr, useInsertionEffect: gr, useLayoutEffect: gr, useMemo: gr, useReducer: gr, useRef: gr, useState: gr, useDebugValue: gr, useDeferredValue: gr, useTransition: gr, useMutableSource: gr, useSyncExternalStore: gr, useId: gr, unstable_isNewReconciler: !1 }, Sa = { readContext: Va, useCallback: function(n, r) {
    return Jt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Va, useEffect: Yc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(
      4194308,
      4,
      Gc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return go(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return go(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Jt();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Jt();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = xd.bind(null, ie, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Jt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: $c, useDebugValue: Os, useDeferredValue: function(n) {
    return Jt().memoizedState = n;
  }, useTransition: function() {
    var n = $c(!1), r = n[0];
    return n = bd.bind(null, n[1]), Jt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ie, c = Jt();
    if (on) {
      if (l === void 0) throw Error(w(407));
      l = l();
    } else {
      if (l = r(), Rn === null) throw Error(w(349));
      Ji & 30 || Cu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Yc(Vc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ru(9, yo.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Jt(), r = Rn.identifierPrefix;
    if (on) {
      var l = nr, o = qr;
      l = (o & ~(1 << 32 - Rr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ho++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = cy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, fy = {
    readContext: Va,
    useCallback: Ls,
    useContext: Va,
    useEffect: ks,
    useImperativeHandle: qc,
    useInsertionEffect: Wc,
    useLayoutEffect: Qc,
    useMemo: Tu,
    useReducer: ii,
    useRef: Ic,
    useState: function() {
      return ii(Ei);
    },
    useDebugValue: Os,
    useDeferredValue: function(n) {
      var r = xe();
      return Kc(r, Me.memoizedState, n);
    },
    useTransition: function() {
      var n = ii(Ei)[0], r = xe().memoizedState;
      return [n, r];
    },
    useMutableSource: li,
    useSyncExternalStore: mo,
    useId: Xc,
    unstable_isNewReconciler: !1
  }, nn = { readContext: Va, useCallback: Ls, useContext: Va, useEffect: ks, useImperativeHandle: qc, useInsertionEffect: Wc, useLayoutEffect: Qc, useMemo: Tu, useReducer: el, useRef: Ic, useState: function() {
    return el(Ei);
  }, useDebugValue: Os, useDeferredValue: function(n) {
    var r = xe();
    return Me === null ? r.memoizedState = n : Kc(r, Me.memoizedState, n);
  }, useTransition: function() {
    var n = el(Ei)[0], r = xe().memoizedState;
    return [n, r];
  }, useMutableSource: li, useSyncExternalStore: mo, useId: Xc, unstable_isNewReconciler: !1 };
  function Xr(n, r) {
    if (n && n.defaultProps) {
      r = oe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Ro(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : oe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var jl = { isMounted: function(n) {
    return (n = n._reactInternals) ? q(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = oi(n), d = ya(o, c);
    d.payload = r, l != null && (d.callback = l), r = ga(n, d, c), r !== null && (Pa(r, n, c, o), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = oi(n), d = ya(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = ga(n, d, c), r !== null && (Pa(r, n, c, o), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Gn(), o = oi(n), c = ya(l, o);
    c.tag = 2, r != null && (c.callback = r), r = ga(n, c, o), r !== null && (Pa(r, n, o, l), Ac(r, n, o));
  } };
  function Ns(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ao(l, o) || !ao(c, d) : !0;
  }
  function Pv(n, r, l) {
    var o = !1, c = Ua, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Va(d) : (c = Un(r) ? Tr : Yn.current, o = r.contextTypes, d = (o = o != null) ? pa(n, c) : Ua), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = jl, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Bv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && jl.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, gd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Va(d) : (d = Un(r) ? Tr : Yn.current, c.context = pa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ro(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && jl.enqueueReplaceState(c, c.state, null), jc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function To(n, r) {
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
  function Ms(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function kd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Od = typeof WeakMap == "function" ? WeakMap : Map;
  function Ld(n, r, l) {
    l = ya(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      rf || (rf = !0, Id = o), kd(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = ya(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        kd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      kd(n, r), typeof o != "function" && (Pl === null ? Pl = /* @__PURE__ */ new Set([this]) : Pl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Iv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Od();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Ey.bind(null, n, r, l), r.then(n, n));
  }
  function zs(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ya(-1, 1), r.tag = 2, ga(l, r, 1))), l.lanes |= 1), n);
  }
  var Wv = $e.ReactCurrentOwner, wr = !1;
  function br(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : Ul(r, n.child, l, o);
  }
  function Fl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return co(r, c), o = Ds(n, r, l, o, d, c), l = Y(), n !== null && !wr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ri(n, r, c)) : (on && l && Lc(r), r.flags |= 1, br(n, r, o, c), r.child);
  }
  function wo(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Gd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Hl(n, r, d, o, c)) : (n = lf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ao, l(m, o) && n.ref === r.ref) return Ri(n, r, c);
    }
    return r.flags |= 1, n = Yl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ao(d, o) && n.ref === r.ref) if (wr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (wr = !0);
      else return r.lanes = n.lanes, Ri(n, r, c);
    }
    return Vl(n, r, l, o, c);
  }
  function Zc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, zt(bu, kr), kr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, zt(bu, kr), kr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, zt(bu, kr), kr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, zt(bu, kr), kr |= o;
    return br(n, r, c, l), r.child;
  }
  function Zr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Vl(n, r, l, o, c) {
    var d = Un(l) ? Tr : Yn.current;
    return d = pa(r, d), co(r, c), l = Ds(n, r, l, o, d, c), o = Y(), n !== null && !wr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ri(n, r, c)) : (on && o && Lc(r), r.flags |= 1, br(n, r, l, c), r.child);
  }
  function at(n, r, l, o, c) {
    if (Un(l)) {
      var d = !0;
      mu(r);
    } else d = !1;
    if (co(r, c), r.stateNode === null) js(n, r), Pv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, j = l.contextType;
      typeof j == "object" && j !== null ? j = Va(j) : (j = Un(l) ? Tr : Yn.current, j = pa(r, j));
      var G = l.getDerivedStateFromProps, K = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      K || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== j) && Bv(r, m, o, j), Al = !1;
      var W = r.memoizedState;
      m.state = W, jc(r, o, m, c), T = r.memoizedState, E !== o || W !== T || Ze.current || Al ? (typeof G == "function" && (Ro(r, l, G, o), T = r.memoizedState), (E = Al || Ns(r, l, E, o, W, T, j)) ? (K || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = j, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Sd(n, r), E = r.memoizedProps, j = r.type === r.elementType ? E : Xr(r.type, E), m.props = j, K = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Va(T) : (T = Un(l) ? Tr : Yn.current, T = pa(r, T));
      var fe = l.getDerivedStateFromProps;
      (G = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== K || W !== T) && Bv(r, m, o, T), Al = !1, W = r.memoizedState, m.state = W, jc(r, o, m, c);
      var Se = r.memoizedState;
      E !== K || W !== Se || Ze.current || Al ? (typeof fe == "function" && (Ro(r, l, fe, o), Se = r.memoizedState), (j = Al || Ns(r, l, j, o, W, Se, T) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Se, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Se, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Se), m.props = o, m.state = Se, m.context = T, o = j) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return bo(n, r, l, o, d, c);
  }
  function bo(n, r, l, o, c, d) {
    Zr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Nv(r, l, !1), Ri(n, r, d);
    o = r.stateNode, Wv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ul(r, n.child, null, d), r.child = Ul(r, null, E, d)) : br(n, r, E, d), r.memoizedState = o.state, c && Nv(r, l, !0), r.child;
  }
  function Nd(n) {
    var r = n.stateNode;
    r.pendingContext ? yi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && yi(n, r.context, !1), Ed(n, r.containerInfo);
  }
  function dy(n, r, l, o, c) {
    return oo(), An(c), r.flags |= 256, br(n, r, l, o), r.child;
  }
  var Md = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Us(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function xo(n, r, l) {
    var o = r.pendingProps, c = yn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), zt(yn, c & 1), n === null)
      return Mc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = uf(m, o, 0, null), n = Mu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Us(l), r.memoizedState = Md, n) : zd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return py(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Yl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Yl(E, d) : (d = Mu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Us(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Md, o;
    }
    return d = n.child, n = d.sibling, o = Yl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function zd(n, r) {
    return r = uf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function As(n, r, l, o) {
    return o !== null && An(o), Ul(r, n.child, null, l), n = zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function py(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ms(Error(w(422))), As(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = uf({ mode: "visible", children: o.children }, c, 0, null), d = Mu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ul(r, n.child, null, m), r.child.memoizedState = Us(m), r.memoizedState = Md, d);
    if (!(r.mode & 1)) return As(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(w(419)), o = Ms(d, o, void 0), As(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, wr || E) {
      if (o = Rn, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Zi(n, c), Pa(o, n, c, -1));
      }
      return Wd(), o = Ms(Error(w(421))), As(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ha = da(c.nextSibling), va = r, on = !0, Fa = null, n !== null && (Qr[Gr++] = qr, Qr[Gr++] = nr, Qr[Gr++] = ai, qr = n.id, nr = n.overflow, ai = r), r = zd(r, o.children), r.flags |= 4096, r);
  }
  function Jc(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), md(n.return, r, l);
  }
  function Ud(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ad(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (br(n, r, o.children, l), o = yn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Jc(n, l, r);
        else if (n.tag === 19) Jc(n, l, r);
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
    if (zt(yn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && _s(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ud(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && _s(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Ud(r, !0, l, null, d);
        break;
      case "together":
        Ud(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function js(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ri(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), xu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(w(153));
    if (r.child !== null) {
      for (n = r.child, l = Yl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Yl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ea(n, r, l) {
    switch (r.tag) {
      case 3:
        Nd(r), oo();
        break;
      case 5:
        Hv(r);
        break;
      case 1:
        Un(r.type) && mu(r);
        break;
      case 4:
        Ed(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        zt(Uc, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (zt(yn, yn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? xo(n, r, l) : (zt(yn, yn.current & 1), n = Ri(n, r, l), n !== null ? n.sibling : null);
        zt(yn, yn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ad(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), zt(yn, yn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Zc(n, r, l);
    }
    return Ri(n, r, l);
  }
  var Ti, ui, Fs, _o;
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
  }, Fs = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Eu(Si.current);
      var d = null;
      switch (l) {
        case "input":
          c = En(n, c), o = En(n, o), d = [];
          break;
        case "select":
          c = oe({}, c, { value: void 0 }), o = oe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = aa(n, c), o = aa(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Dc);
      }
      Mt(l, o);
      var m;
      l = null;
      for (j in c) if (!o.hasOwnProperty(j) && c.hasOwnProperty(j) && c[j] != null) if (j === "style") {
        var E = c[j];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (Pe.hasOwnProperty(j) ? d || (d = []) : (d = d || []).push(j, null));
      for (j in o) {
        var T = o[j];
        if (E = c != null ? c[j] : void 0, o.hasOwnProperty(j) && T !== E && (T != null || E != null)) if (j === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          j,
          l
        )), l = T;
        else j === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(j, T)) : j === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(j, "" + T) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (Pe.hasOwnProperty(j) ? (T != null && j === "onScroll" && Xt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(j, T));
      }
      l && (d = d || []).push("style", l);
      var j = d;
      (r.updateQueue = j) && (r.flags |= 4);
    }
  }, _o = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function xr(n, r) {
    if (!on) switch (n.tailMode) {
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
  function vy(n, r, l) {
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
        return Un(r.type) && Wr(), kt(r), null;
      case 3:
        return o = r.stateNode, vo(), we(Ze), we(Yn), Fc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (zc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (ku(Fa), Fa = null))), ui(n, r), kt(r), null;
      case 5:
        Cd(r);
        var c = Eu(po.current);
        if (l = r.type, n !== null && r.stateNode != null) Fs(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(w(166));
            return kt(r), null;
          }
          if (n = Eu(Si.current), zc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[za] = r, o[bs] = d, n = (r.mode & 1) !== 0, l) {
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
                for (c = 0; c < Wi.length; c++) Xt(Wi[c], o);
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
                Zn(o, d), Xt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Xt("invalid", o);
                break;
              case "textarea":
                ia(o, d), Xt("invalid", o);
            }
            Mt(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Cs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Cs(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Pe.hasOwnProperty(m) && E != null && m === "onScroll" && Xt("scroll", o);
            }
            switch (l) {
              case "input":
                Xn(o), Nn(o, d, !0);
                break;
              case "textarea":
                Xn(o), la(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Dc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Jn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[za] = r, n[bs] = o, Ti(n, r, !1, !1), r.stateNode = n;
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
                  for (c = 0; c < Wi.length; c++) Xt(Wi[c], n);
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
                  Zn(n, o), c = En(n, o), Xt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = oe({}, o, { value: void 0 }), Xt("invalid", n);
                  break;
                case "textarea":
                  ia(n, o), c = aa(n, o), Xt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Mt(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? st(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ua(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && oa(n, T) : typeof T == "number" && oa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Pe.hasOwnProperty(d) ? T != null && d === "onScroll" && Xt("scroll", n) : T != null && et(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Xn(n), Nn(n, o, !1);
                  break;
                case "textarea":
                  Xn(n), la(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + dt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Vn(n, !!o.multiple, d, !1) : o.defaultValue != null && Vn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Dc);
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
        if (n && r.stateNode != null) _o(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(w(166));
          if (l = Eu(po.current), Eu(Si.current), zc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[za] = r, (d = o.nodeValue !== l) && (n = va, n !== null)) switch (n.tag) {
              case 3:
                Cs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Cs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[za] = r, r.stateNode = o;
        }
        return kt(r), null;
      case 13:
        if (we(yn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (on && ha !== null && r.mode & 1 && !(r.flags & 128)) zv(), oo(), r.flags |= 98560, d = !1;
          else if (d = zc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(w(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(w(317));
              d[za] = r;
            } else oo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            kt(r), d = !1;
          } else Fa !== null && (ku(Fa), Fa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || yn.current & 1 ? Bn === 0 && (Bn = 3) : Wd())), r.updateQueue !== null && (r.flags |= 4), kt(r), null);
      case 4:
        return vo(), ui(n, r), n === null && hi(r.stateNode.containerInfo), kt(r), null;
      case 10:
        return ma(r.type._context), kt(r), null;
      case 17:
        return Un(r.type) && Wr(), kt(r), null;
      case 19:
        if (we(yn), d = r.memoizedState, d === null) return kt(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) xr(d, !1);
        else {
          if (Bn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = _s(n), m !== null) {
              for (r.flags |= 128, xr(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return zt(yn, yn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Vt() > _u && (r.flags |= 128, o = !0, xr(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = _s(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), xr(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !on) return kt(r), null;
          } else 2 * Vt() - d.renderingStartTime > _u && l !== 1073741824 && (r.flags |= 128, o = !0, xr(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Vt(), r.sibling = null, l = yn.current, zt(yn, o ? l & 1 | 2 : l & 1), r) : (kt(r), null);
      case 22:
      case 23:
        return Lo(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? kr & 1073741824 && (kt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : kt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, r.tag));
  }
  function hy(n, r) {
    switch (Nc(r), r.tag) {
      case 1:
        return Un(r.type) && Wr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return vo(), we(Ze), we(Yn), Fc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Cd(r), null;
      case 13:
        if (we(yn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(w(340));
          oo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return we(yn), null;
      case 4:
        return vo(), null;
      case 10:
        return ma(r.type._context), null;
      case 22:
      case 23:
        return Lo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ef = !1, Wn = !1, Qv = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function wu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      wn(n, r, o);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (o) {
      wn(n, r, o);
    }
  }
  var Gv = !1;
  function Fd(n, r) {
    if (ld = fu, n = Ev(), hs(n)) {
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
          var m = 0, E = -1, T = -1, j = 0, G = 0, K = n, W = null;
          t: for (; ; ) {
            for (var fe; K !== l || c !== 0 && K.nodeType !== 3 || (E = m + c), K !== d || o !== 0 && K.nodeType !== 3 || (T = m + o), K.nodeType === 3 && (m += K.nodeValue.length), (fe = K.firstChild) !== null; )
              W = K, K = fe;
            for (; ; ) {
              if (K === n) break t;
              if (W === l && ++j === c && (E = m), W === d && ++G === o && (T = m), (fe = K.nextSibling) !== null) break;
              K = W, W = K.parentNode;
            }
            K = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ud = { focusedElem: n, selectionRange: l }, fu = !1, me = r; me !== null; ) if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, me = n;
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
              var Re = Se.memoizedProps, On = Se.memoizedState, O = r.stateNode, _ = O.getSnapshotBeforeUpdate(r.elementType === r.type ? Re : Xr(r.type, Re), On);
              O.__reactInternalSnapshotBeforeUpdate = _;
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
      } catch (ee) {
        wn(r, r.return, ee);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, me = n;
        break;
      }
      me = r.return;
    }
    return Se = Gv, Gv = !1, Se;
  }
  function Hs(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && jd(r, l, d);
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
  function Hd(n) {
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
  function Vd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Vd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[za], delete r[bs], delete r[fd], delete r[uy], delete r[oy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function qv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Pd(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || qv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Bd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Dc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Bd(n, r, l), n = n.sibling; n !== null; ) Bd(n, r, l), n = n.sibling;
  }
  function Ps(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ps(n, r, l), n = n.sibling; n !== null; ) Ps(n, r, l), n = n.sibling;
  }
  var jn = null, Qn = !1;
  function _r(n, r, l) {
    for (l = l.child; l !== null; ) tl(n, r, l), l = l.sibling;
  }
  function tl(n, r, l) {
    if (Br && typeof Br.onCommitFiberUnmount == "function") try {
      Br.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Wn || wu(l, r);
      case 6:
        var o = jn, c = Qn;
        jn = null, _r(n, r, l), jn = o, Qn = c, jn !== null && (Qn ? (n = jn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : jn.removeChild(l.stateNode));
        break;
      case 18:
        jn !== null && (Qn ? (n = jn, l = l.stateNode, n.nodeType === 8 ? cd(n.parentNode, l) : n.nodeType === 1 && cd(n, l), Ma(n)) : cd(jn, l.stateNode));
        break;
      case 4:
        o = jn, c = Qn, jn = l.stateNode.containerInfo, Qn = !0, _r(n, r, l), jn = o, Qn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Wn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && jd(l, r, m), c = c.next;
          } while (c !== o);
        }
        _r(n, r, l);
        break;
      case 1:
        if (!Wn && (wu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          wn(l, r, E);
        }
        _r(n, r, l);
        break;
      case 21:
        _r(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Wn = (o = Wn) || l.memoizedState !== null, _r(n, r, l), Wn = o) : _r(n, r, l);
        break;
      default:
        _r(n, r, l);
    }
  }
  function Do(n) {
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
  function Dr(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              jn = E.stateNode, Qn = !1;
              break e;
            case 3:
              jn = E.stateNode.containerInfo, Qn = !0;
              break e;
            case 4:
              jn = E.stateNode.containerInfo, Qn = !0;
              break e;
          }
          E = E.return;
        }
        if (jn === null) throw Error(w(160));
        tl(d, m, c), jn = null, Qn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (j) {
        wn(c, r, j);
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
        if (Dr(r, n), wi(n), o & 4) {
          try {
            Hs(3, n, n.return), Vs(3, n);
          } catch (Re) {
            wn(n, n.return, Re);
          }
          try {
            Hs(5, n, n.return);
          } catch (Re) {
            wn(n, n.return, Re);
          }
        }
        break;
      case 1:
        Dr(r, n), wi(n), o & 512 && l !== null && wu(l, l.return);
        break;
      case 5:
        if (Dr(r, n), wi(n), o & 512 && l !== null && wu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            oa(c, "");
          } catch (Re) {
            wn(n, n.return, Re);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Hn(c, d), Dn(E, m);
            var j = Dn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var G = T[m], K = T[m + 1];
              G === "style" ? st(c, K) : G === "dangerouslySetInnerHTML" ? ua(c, K) : G === "children" ? oa(c, K) : et(c, G, K, j);
            }
            switch (E) {
              case "input":
                _n(c, d);
                break;
              case "textarea":
                vr(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Vn(c, !!d.multiple, fe, !1) : W !== !!d.multiple && (d.defaultValue != null ? Vn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Vn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[bs] = d;
          } catch (Re) {
            wn(n, n.return, Re);
          }
        }
        break;
      case 6:
        if (Dr(r, n), wi(n), o & 4) {
          if (n.stateNode === null) throw Error(w(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Re) {
            wn(n, n.return, Re);
          }
        }
        break;
      case 3:
        if (Dr(r, n), wi(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ma(r.containerInfo);
        } catch (Re) {
          wn(n, n.return, Re);
        }
        break;
      case 4:
        Dr(r, n), wi(n);
        break;
      case 13:
        Dr(r, n), wi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Ys = Vt())), o & 4 && Do(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Wn = (j = Wn) || G, Dr(r, n), Wn = j) : Dr(r, n), wi(n), o & 8192) {
          if (j = n.memoizedState !== null, (n.stateNode.isHidden = j) && !G && n.mode & 1) for (me = n, G = n.child; G !== null; ) {
            for (K = me = G; me !== null; ) {
              switch (W = me, fe = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hs(4, W, W.return);
                  break;
                case 1:
                  wu(W, W.return);
                  var Se = W.stateNode;
                  if (typeof Se.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, Se.props = r.memoizedProps, Se.state = r.memoizedState, Se.componentWillUnmount();
                    } catch (Re) {
                      wn(o, l, Re);
                    }
                  }
                  break;
                case 5:
                  wu(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    ko(K);
                    continue;
                  }
              }
              fe !== null ? (fe.return = W, me = fe) : ko(K);
            }
            G = G.sibling;
          }
          e: for (G = null, K = n; ; ) {
            if (K.tag === 5) {
              if (G === null) {
                G = K;
                try {
                  c = K.stateNode, j ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = K.stateNode, T = K.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Oe("display", m));
                } catch (Re) {
                  wn(n, n.return, Re);
                }
              }
            } else if (K.tag === 6) {
              if (G === null) try {
                K.stateNode.nodeValue = j ? "" : K.memoizedProps;
              } catch (Re) {
                wn(n, n.return, Re);
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
        Dr(r, n), wi(n), o & 4 && Do(n);
        break;
      case 21:
        break;
      default:
        Dr(
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
            if (qv(l)) {
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
            o.flags & 32 && (oa(c, ""), o.flags &= -33);
            var d = Pd(n);
            Ps(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Pd(n);
            Bd(n, E, m);
            break;
          default:
            throw Error(w(161));
        }
      } catch (T) {
        wn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function my(n, r, l) {
    me = n, Kv(n);
  }
  function Kv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || ef;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Wn;
          E = ef;
          var j = Wn;
          if (ef = m, (Wn = T) && !j) for (me = c; me !== null; ) m = me, T = m.child, m.tag === 22 && m.memoizedState !== null ? Xv(c) : T !== null ? (T.return = m, me = T) : Xv(c);
          for (; d !== null; ) me = d, Kv(d), d = d.sibling;
          me = c, ef = E, Wn = j;
        }
        $d(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : $d(n);
    }
  }
  function $d(n) {
    for (; me !== null; ) {
      var r = me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Wn || Vs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Wn) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : Xr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Fv(r, d, o);
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
                Fv(r, m, l);
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
                    K !== null && Ma(K);
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
          Wn || r.flags & 512 && Hd(r);
        } catch (W) {
          wn(r, r.return, W);
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
  function ko(n) {
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
  function Xv(n) {
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
              wn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                wn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Hd(r);
            } catch (T) {
              wn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Hd(r);
            } catch (T) {
              wn(r, m, T);
            }
        }
      } catch (T) {
        wn(r, r.return, T);
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
  var Zv = Math.ceil, tf = $e.ReactCurrentDispatcher, Oo = $e.ReactCurrentOwner, Ca = $e.ReactCurrentBatchConfig, Ot = 0, Rn = null, pn = null, Tn = 0, kr = 0, bu = Zt(0), Bn = 0, Bs = null, xu = 0, nf = 0, $s = 0, Is = null, rr = null, Ys = 0, _u = 1 / 0, rl = null, rf = !1, Id = null, Pl = null, Bl = !1, bi = null, $l = 0, Ws = 0, Yd = null, Qs = -1, Gs = 0;
  function Gn() {
    return Ot & 6 ? Vt() : Qs !== -1 ? Qs : Qs = Vt();
  }
  function oi(n) {
    return n.mode & 1 ? Ot & 2 && Tn !== 0 ? Tn & -Tn : sy.transition !== null ? (Gs === 0 && (Gs = lu()), Gs) : (n = gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : us(n.type)), n) : 1;
  }
  function Pa(n, r, l, o) {
    if (50 < Ws) throw Ws = 0, Yd = null, Error(w(185));
    Cl(n, l, o), (!(Ot & 2) || n !== Rn) && (n === Rn && (!(Ot & 2) && (nf |= l), Bn === 4 && xi(n, Tn)), rn(n, o), l === 1 && Ot === 0 && !(r.mode & 1) && (_u = Vt() + 500, Ol && gi()));
  }
  function rn(n, r) {
    var l = n.callbackNode;
    El(n, r);
    var o = di(n, n === Rn ? Tn : 0);
    if (o === 0) l !== null && Kt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Kt(l), r === 1) n.tag === 0 ? Mv(af.bind(null, n)) : Oc(af.bind(null, n)), Lv(function() {
        !(Ot & 6) && gi();
      }), l = null;
      else {
        switch (as(o)) {
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
        l = uh(l, Du.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Du(n, r) {
    if (Qs = -1, Gs = 0, Ot & 6) throw Error(w(327));
    var l = n.callbackNode;
    if (Mo() && n.callbackNode !== l) return null;
    var o = di(n, n === Rn ? Tn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = No(n, o);
    else {
      r = o;
      var c = Ot;
      Ot |= 2;
      var d = eh();
      (Rn !== n || Tn !== r) && (rl = null, _u = Vt() + 500, Il(n, r));
      do
        try {
          Sy();
          break;
        } catch (E) {
          Jv(n, E);
        }
      while (!0);
      Ha(), tf.current = d, Ot = c, pn !== null ? r = 0 : (Rn = null, Tn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = pi(n), c !== 0 && (o = c, r = qs(n, c))), r === 1) throw l = Bs, Il(n, 0), xi(n, o), rn(n, Vt()), l;
      if (r === 6) xi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !yy(c) && (r = No(n, o), r === 2 && (d = pi(n), d !== 0 && (o = d, r = qs(n, d))), r === 1)) throw l = Bs, Il(n, 0), xi(n, o), rn(n, Vt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            Nu(n, rr, rl);
            break;
          case 3:
            if (xi(n, o), (o & 130023424) === o && (r = Ys + 500 - Vt(), 10 < r)) {
              if (di(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rs(Nu.bind(null, n, rr, rl), r);
              break;
            }
            Nu(n, rr, rl);
            break;
          case 4:
            if (xi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Rr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Vt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Zv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rs(Nu.bind(null, n, rr, rl), o);
              break;
            }
            Nu(n, rr, rl);
            break;
          case 5:
            Nu(n, rr, rl);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return rn(n, Vt()), n.callbackNode === l ? Du.bind(null, n) : null;
  }
  function qs(n, r) {
    var l = Is;
    return n.current.memoizedState.isDehydrated && (Il(n, r).flags |= 256), n = No(n, r), n !== 2 && (r = rr, rr = l, r !== null && ku(r)), n;
  }
  function ku(n) {
    rr === null ? rr = n : rr.push.apply(rr, n);
  }
  function yy(n) {
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
    for (r &= ~$s, r &= ~nf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Rr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function af(n) {
    if (Ot & 6) throw Error(w(327));
    Mo();
    var r = di(n, 0);
    if (!(r & 1)) return rn(n, Vt()), null;
    var l = No(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = pi(n);
      o !== 0 && (r = o, l = qs(n, o));
    }
    if (l === 1) throw l = Bs, Il(n, 0), xi(n, r), rn(n, Vt()), l;
    if (l === 6) throw Error(w(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, rr, rl), rn(n, Vt()), null;
  }
  function Ou(n, r) {
    var l = Ot;
    Ot |= 1;
    try {
      return n(r);
    } finally {
      Ot = l, Ot === 0 && (_u = Vt() + 500, Ol && gi());
    }
  }
  function Lu(n) {
    bi !== null && bi.tag === 0 && !(Ot & 6) && Mo();
    var r = Ot;
    Ot |= 1;
    var l = Ca.transition, o = gt;
    try {
      if (Ca.transition = null, gt = 1, n) return n();
    } finally {
      gt = o, Ca.transition = l, Ot = r, !(Ot & 6) && gi();
    }
  }
  function Lo() {
    kr = bu.current, we(bu);
  }
  function Il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ts(l)), pn !== null) for (l = pn.return; l !== null; ) {
      var o = l;
      switch (Nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Wr();
          break;
        case 3:
          vo(), we(Ze), we(Yn), Fc();
          break;
        case 5:
          Cd(o);
          break;
        case 4:
          vo();
          break;
        case 13:
          we(yn);
          break;
        case 19:
          we(yn);
          break;
        case 10:
          ma(o.type._context);
          break;
        case 22:
        case 23:
          Lo();
      }
      l = l.return;
    }
    if (Rn = n, pn = n = Yl(n.current, null), Tn = kr = r, Bn = 0, Bs = null, $s = nf = xu = 0, rr = Is = null, Su !== null) {
      for (r = 0; r < Su.length; r++) if (l = Su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Su = null;
    }
    return n;
  }
  function Jv(n, r) {
    do {
      var l = pn;
      try {
        if (Ha(), Hc.current = Ci, sn) {
          for (var o = ie.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          sn = !1;
        }
        if (Ji = 0, Xe = Me = ie = null, Kr = !1, ho = 0, Oo.current = null, l === null || l.return === null) {
          Bn = 1, Bs = r, pn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Tn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var j = T, G = E, K = G.tag;
            if (!(G.mode & 1) && (K === 0 || K === 11 || K === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var fe = zs(m);
            if (fe !== null) {
              fe.flags &= -257, Yv(fe, m, E, d, r), fe.mode & 1 && Iv(d, j, r), r = fe, T = j;
              var Se = r.updateQueue;
              if (Se === null) {
                var Re = /* @__PURE__ */ new Set();
                Re.add(T), r.updateQueue = Re;
              } else Se.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Iv(d, j, r), Wd();
                break e;
              }
              T = Error(w(426));
            }
          } else if (on && E.mode & 1) {
            var On = zs(m);
            if (On !== null) {
              !(On.flags & 65536) && (On.flags |= 256), Yv(On, m, E, d, r), An(To(T, E));
              break e;
            }
          }
          d = T = To(T, E), Bn !== 4 && (Bn = 2), Is === null ? Is = [d] : Is.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var O = Ld(d, T, r);
                jv(d, O);
                break e;
              case 1:
                E = T;
                var _ = d.type, z = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && (Pl === null || !Pl.has(z)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ee = $v(d, E, r);
                  jv(d, ee);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        nh(l);
      } catch (be) {
        r = be, pn === l && l !== null && (pn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eh() {
    var n = tf.current;
    return tf.current = Ci, n === null ? Ci : n;
  }
  function Wd() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Rn === null || !(xu & 268435455) && !(nf & 268435455) || xi(Rn, Tn);
  }
  function No(n, r) {
    var l = Ot;
    Ot |= 2;
    var o = eh();
    (Rn !== n || Tn !== r) && (rl = null, Il(n, r));
    do
      try {
        gy();
        break;
      } catch (c) {
        Jv(n, c);
      }
    while (!0);
    if (Ha(), Ot = l, tf.current = o, pn !== null) throw Error(w(261));
    return Rn = null, Tn = 0, Bn;
  }
  function gy() {
    for (; pn !== null; ) th(pn);
  }
  function Sy() {
    for (; pn !== null && !dn(); ) th(pn);
  }
  function th(n) {
    var r = lh(n.alternate, n, kr);
    n.memoizedProps = n.pendingProps, r === null ? nh(n) : pn = r, Oo.current = null;
  }
  function nh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = hy(l, r), l !== null) {
          l.flags &= 32767, pn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, pn = null;
          return;
        }
      } else if (l = vy(l, r, kr), l !== null) {
        pn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        pn = r;
        return;
      }
      pn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Nu(n, r, l) {
    var o = gt, c = Ca.transition;
    try {
      Ca.transition = null, gt = 1, rh(n, r, l, o);
    } finally {
      Ca.transition = c, gt = o;
    }
    return null;
  }
  function rh(n, r, l, o) {
    do
      Mo();
    while (bi !== null);
    if (Ot & 6) throw Error(w(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(w(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ns(n, d), n === Rn && (pn = Rn = null, Tn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Bl || (Bl = !0, uh(rt, function() {
      return Mo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ca.transition, Ca.transition = null;
      var m = gt;
      gt = 1;
      var E = Ot;
      Ot |= 4, Oo.current = null, Fd(n, l), nl(l, n), du(ud), fu = !!ld, ud = ld = null, n.current = l, my(l), mr(), Ot = E, gt = m, Ca.transition = d;
    } else n.current = l;
    if (Bl && (Bl = !1, bi = n, $l = c), d = n.pendingLanes, d === 0 && (Pl = null), Zo(l.stateNode), rn(n, Vt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (rf) throw rf = !1, n = Id, Id = null, n;
    return $l & 1 && n.tag !== 0 && Mo(), d = n.pendingLanes, d & 1 ? n === Yd ? Ws++ : (Ws = 0, Yd = n) : Ws = 0, gi(), null;
  }
  function Mo() {
    if (bi !== null) {
      var n = as($l), r = Ca.transition, l = gt;
      try {
        if (Ca.transition = null, gt = 16 > n ? 16 : n, bi === null) var o = !1;
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
                        Hs(8, G, d);
                    }
                    var K = G.child;
                    if (K !== null) K.return = G, me = K;
                    else for (; me !== null; ) {
                      G = me;
                      var W = G.sibling, fe = G.return;
                      if (Vd(G), G === j) {
                        me = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = fe, me = W;
                        break;
                      }
                      me = fe;
                    }
                  }
                }
                var Se = d.alternate;
                if (Se !== null) {
                  var Re = Se.child;
                  if (Re !== null) {
                    Se.child = null;
                    do {
                      var On = Re.sibling;
                      Re.sibling = null, Re = On;
                    } while (Re !== null);
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
                  Hs(9, d, d.return);
              }
              var O = d.sibling;
              if (O !== null) {
                O.return = d.return, me = O;
                break e;
              }
              me = d.return;
            }
          }
          var _ = n.current;
          for (me = _; me !== null; ) {
            m = me;
            var z = m.child;
            if (m.subtreeFlags & 2064 && z !== null) z.return = m, me = z;
            else e: for (m = _; me !== null; ) {
              if (E = me, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vs(9, E);
                }
              } catch (be) {
                wn(E, E.return, be);
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
          if (Ot = c, gi(), Br && typeof Br.onPostCommitFiberRoot == "function") try {
            Br.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        gt = l, Ca.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = To(l, r), r = Ld(n, r, 1), n = ga(n, r, 1), r = Gn(), n !== null && (Cl(n, 1, r), rn(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pl === null || !Pl.has(o))) {
          n = To(l, n), n = $v(r, n, 1), r = ga(r, n, 1), n = Gn(), r !== null && (Cl(r, 1, n), rn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Ey(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & l, Rn === n && (Tn & l) === l && (Bn === 4 || Bn === 3 && (Tn & 130023424) === Tn && 500 > Vt() - Ys ? Il(n, 0) : $s |= l), rn(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = qu, qu <<= 1, !(qu & 130023424) && (qu = 4194304)) : r = 1);
    var l = Gn();
    n = Zi(n, r), n !== null && (Cl(n, r, l), rn(n, l));
  }
  function Cy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
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
    o !== null && o.delete(r), ih(n, l);
  }
  var lh;
  lh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Ze.current) wr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return wr = !1, Ea(n, r, l);
      wr = !!(n.flags & 131072);
    }
    else wr = !1, on && r.flags & 1048576 && Nl(r, yu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        js(n, r), n = r.pendingProps;
        var c = pa(r, Yn.current);
        co(r, l), c = Ds(null, r, o, n, c, l);
        var d = Y();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Un(o) ? (d = !0, mu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, gd(r), c.updater = jl, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = bo(null, r, o, !0, d, l)) : (r.tag = 0, on && d && Lc(r), br(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (js(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ty(o), n = Xr(o, n), c) {
            case 0:
              r = Vl(null, r, o, n, l);
              break e;
            case 1:
              r = at(null, r, o, n, l);
              break e;
            case 11:
              r = Fl(null, r, o, n, l);
              break e;
            case 14:
              r = wo(null, r, o, Xr(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), Vl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), at(n, r, o, c, l);
      case 3:
        e: {
          if (Nd(r), n === null) throw Error(w(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Sd(n, r), jc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = To(Error(w(423)), r), r = dy(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = To(Error(w(424)), r), r = dy(n, r, o, l, c);
            break e;
          } else for (ha = da(r.stateNode.containerInfo.firstChild), va = r, on = !0, Fa = null, l = Av(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (oo(), o === c) {
              r = Ri(n, r, l);
              break e;
            }
            br(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Hv(r), n === null && Mc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, hu(o, c) ? m = null : d !== null && hu(o, d) && (r.flags |= 32), Zr(n, r), br(n, r, m, l), r.child;
      case 6:
        return n === null && Mc(r), null;
      case 13:
        return xo(n, r, l);
      case 4:
        return Ed(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ul(r, null, o, l) : br(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), Fl(n, r, o, c, l);
      case 7:
        return br(n, r, r.pendingProps, l), r.child;
      case 8:
        return br(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return br(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, zt(Uc, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !Ze.current) {
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
                    T = ya(-1, l & -l), T.tag = 2;
                    var j = d.updateQueue;
                    if (j !== null) {
                      j = j.shared;
                      var G = j.pending;
                      G === null ? T.next = T : (T.next = G.next, G.next = T), j.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), md(
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
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), md(m, l, r), m = d.sibling;
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
          br(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, co(r, l), c = Va(c), o = o(c), r.flags |= 1, br(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Xr(o, r.pendingProps), c = Xr(o.type, c), wo(n, r, o, c, l);
      case 15:
        return Hl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Xr(o, c), js(n, r), r.tag = 1, Un(o) ? (n = !0, mu(r)) : n = !1, co(r, l), Pv(r, o, c), Dd(r, o, c, l), bo(null, r, o, !0, n, l);
      case 19:
        return Ad(n, r, l);
      case 22:
        return Zc(n, r, l);
    }
    throw Error(w(156, r.tag));
  };
  function uh(n, r) {
    return Mn(n, r);
  }
  function Ry(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ra(n, r, l, o) {
    return new Ry(n, r, l, o);
  }
  function Gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ty(n) {
    if (typeof n == "function") return Gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ct) return 11;
      if (n === lt) return 14;
    }
    return 2;
  }
  function Yl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ra(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function lf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Gd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case pt:
        return Mu(l.children, c, d, r);
      case qe:
        m = 8, c |= 8;
        break;
      case xn:
        return n = Ra(12, l, r, c | 2), n.elementType = xn, n.lanes = d, n;
      case an:
        return n = Ra(13, l, r, c), n.elementType = an, n.lanes = d, n;
      case Ie:
        return n = Ra(19, l, r, c), n.elementType = Ie, n.lanes = d, n;
      case ut:
        return uf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Sn:
            m = 10;
            break e;
          case en:
            m = 9;
            break e;
          case Ct:
            m = 11;
            break e;
          case lt:
            m = 14;
            break e;
          case _t:
            m = 16, o = null;
            break e;
        }
        throw Error(w(130, n == null ? n : typeof n, ""));
    }
    return r = Ra(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Mu(n, r, l, o) {
    return n = Ra(7, n, o, r), n.lanes = l, n;
  }
  function uf(n, r, l, o) {
    return n = Ra(22, n, o, r), n.elementType = ut, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function qd(n, r, l) {
    return n = Ra(6, n, null, r), n.lanes = l, n;
  }
  function of(n, r, l) {
    return r = Ra(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Kd(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function zu(n, r, l, o, c, d, m, E, T) {
    return n = new Kd(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ra(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gd(d), n;
  }
  function wy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Xd(n) {
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
  function Zd(n, r, l, o, c, d, m, E, T) {
    return n = zu(l, o, !0, n, c, d, m, E, T), n.context = Xd(null), l = n.current, o = Gn(), c = oi(l), d = ya(o, c), d.callback = r ?? null, ga(l, d, c), n.current.lanes = c, Cl(n, c, o), rn(n, o), n;
  }
  function Ks(n, r, l, o) {
    var c = r.current, d = Gn(), m = oi(c);
    return l = Xd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ya(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ga(c, r, m), n !== null && (Pa(n, c, m, d), Ac(n, c, m)), m;
  }
  function sf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Jd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function ep(n, r) {
    Jd(n, r), (n = n.alternate) && Jd(n, r);
  }
  function by() {
    return null;
  }
  var oh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function cf(n) {
    this._internalRoot = n;
  }
  Xs.prototype.render = cf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(w(409));
    Ks(n, r, null, null);
  }, Xs.prototype.unmount = cf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        Ks(null, n, null, null);
      }), r[ni] = null;
    }
  };
  function Xs(n) {
    this._internalRoot = n;
  }
  Xs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = St();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ln.length && r !== 0 && r < ln[l].priority; l++) ;
      ln.splice(l, 0, n), l === 0 && Ja(n);
    }
  };
  function ff(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function al(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function sh() {
  }
  function xy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var j = sf(m);
          d.call(j);
        };
      }
      var m = Zd(r, o, n, 0, null, !1, !1, "", sh);
      return n._reactRootContainer = m, n[ni] = m.current, hi(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var j = sf(T);
        E.call(j);
      };
    }
    var T = zu(n, 0, !1, null, null, !1, !1, "", sh);
    return n._reactRootContainer = T, n[ni] = T.current, hi(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      Ks(r, T, l, o);
    }), T;
  }
  function df(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = sf(m);
          E.call(T);
        };
      }
      Ks(r, m, n, c);
    } else m = xy(l, r, n, c, o);
    return sf(m);
  }
  Ku = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Fi(r.pendingLanes);
          l !== 0 && (rs(r, l | 1), rn(r, Vt()), !(Ot & 6) && (_u = Vt() + 500, gi()));
        }
        break;
      case 13:
        Lu(function() {
          var o = Zi(n, 1);
          if (o !== null) {
            var c = Gn();
            Pa(o, n, 1, c);
          }
        }), ep(n, 1);
    }
  }, Rl = function(n) {
    if (n.tag === 13) {
      var r = Zi(n, 134217728);
      if (r !== null) {
        var l = Gn();
        Pa(r, n, 134217728, l);
      }
      ep(n, 134217728);
    }
  }, is = function(n) {
    if (n.tag === 13) {
      var r = oi(n), l = Zi(n, r);
      if (l !== null) {
        var o = Gn();
        Pa(l, n, r, o);
      }
      ep(n, r);
    }
  }, St = function() {
    return gt;
  }, Xu = function(n, r) {
    var l = gt;
    try {
      return gt = n, r();
    } finally {
      gt = l;
    }
  }, It = function(n, r, l) {
    switch (r) {
      case "input":
        if (_n(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = kc(o);
              if (!c) throw Error(w(90));
              Hr(o), _n(o, c);
            }
          }
        }
        break;
      case "textarea":
        vr(n, l);
        break;
      case "select":
        r = l.value, r != null && Vn(n, !!l.multiple, r, !1);
    }
  }, ml = Ou, ru = Lu;
  var _y = { usingClientEntryPoint: !1, Events: [mi, uo, kc, qa, Da, Ou] }, Zs = { findFiberByHostInstance: qi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Dy = { bundleType: Zs.bundleType, version: Zs.version, rendererPackageName: Zs.rendererPackageName, rendererConfig: Zs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $e.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Fe(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Zs.findFiberByHostInstance || by, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Js.isDisabled && Js.supportsFiber) try {
      Sl = Js.inject(Dy), Br = Js;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ff(r)) throw Error(w(200));
    return wy(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!ff(n)) throw Error(w(299));
    var l = !1, o = "", c = oh;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = zu(n, 1, !1, null, null, l, !1, o, c), n[ni] = r.current, hi(n.nodeType === 8 ? n.parentNode : n), new cf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(w(188)) : (n = Object.keys(n).join(","), Error(w(268, n)));
    return n = Fe(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Lu(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!al(r)) throw Error(w(200));
    return df(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!ff(n)) throw Error(w(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = oh;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Zd(r, null, n, 1, l ?? null, c, !1, d, m), n[ni] = r.current, hi(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Xs(r);
  }, Qa.render = function(n, r, l) {
    if (!al(r)) throw Error(w(200));
    return df(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!al(n)) throw Error(w(40));
    return n._reactRootContainer ? (Lu(function() {
      df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ni] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = Ou, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!al(l)) throw Error(w(200));
    if (n == null || n._reactInternals === void 0) throw Error(w(38));
    return df(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ga = {}, vR;
function CD() {
  if (vR) return Ga;
  vR = 1;
  var b = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return b.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var M = Kn, w = ER(), te = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Pe = !1;
    function ht(e) {
      Pe = e;
    }
    function Be(e) {
      if (!Pe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ze("warn", e, a);
      }
    }
    function S(e) {
      if (!Pe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ze("error", e, a);
      }
    }
    function ze(e, t, a) {
      {
        var i = te.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = 0, ue = 1, Ne = 2, ne = 3, pe = 4, Z = 5, ve = 6, Ge = 7, jt = 8, xt = 9, et = 10, $e = 11, Nt = 12, Te = 13, pt = 14, qe = 15, xn = 16, Sn = 17, en = 18, Ct = 19, an = 21, Ie = 22, lt = 23, _t = 24, ut = 25, $ = !0, ge = !1, oe = !1, k = !1, I = !1, Le = !0, Ye = !1, nt = !0, ot = !0, yt = !0, dt = !0, Rt = /* @__PURE__ */ new Set(), $t = {}, Xn = {};
    function Hr(e, t) {
      dr(e, t), dr(e + "Capture", t);
    }
    function dr(e, t) {
      $t[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), $t[e] = t;
      {
        var a = e.toLowerCase();
        Xn[a] = e, e === "onDoubleClick" && (Xn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Rt.add(t[i]);
    }
    var En = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Zn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function _n(e) {
      try {
        return Nn(e), !1;
      } catch {
        return !0;
      }
    }
    function Nn(e) {
      return "" + e;
    }
    function Sr(e, t) {
      if (_n(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function pr(e) {
      if (_n(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    function Vn(e, t) {
      if (_n(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function aa(e, t) {
      if (_n(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Nn(e);
    }
    function ia(e) {
      if (_n(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    function vr(e) {
      if (_n(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Nn(e);
    }
    var la = 0, Jn = 1, Er = 2, fn = 3, ua = 4, oa = 5, sa = 6, ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Oe = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", st = new RegExp("^[" + ae + "][" + Oe + "]*$"), Ft = {}, Mt = {};
    function Dn(e) {
      return Zn.call(Mt, e) ? !0 : Zn.call(Ft, e) ? !1 : st.test(e) ? (Mt[e] = !0, !0) : (Ft[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === la : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function hr(e, t, a, i) {
      if (a !== null && a.type === la)
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
      if (t === null || typeof t > "u" || hr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case fn:
            return !t;
          case ua:
            return t === !1;
          case oa:
            return isNaN(t);
          case sa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function In(e) {
      return tn.hasOwnProperty(e) ? tn[e] : null;
    }
    function Ht(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Er || t === fn || t === ua, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
      tn[e] = new Ht(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      tn[t] = new Ht(
        t,
        Jn,
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
      tn[e] = new Ht(
        e,
        Er,
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
      tn[e] = new Ht(
        e,
        Er,
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
      tn[e] = new Ht(
        e,
        fn,
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
      tn[e] = new Ht(
        e,
        fn,
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
      tn[e] = new Ht(
        e,
        ua,
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
      tn[e] = new Ht(
        e,
        sa,
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
      tn[e] = new Ht(
        e,
        oa,
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
      tn[t] = new Ht(
        t,
        Jn,
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
      tn[t] = new Ht(
        t,
        Jn,
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
      tn[t] = new Ht(
        t,
        Jn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      tn[e] = new Ht(
        e,
        Jn,
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
    var ru = "xlinkHref";
    tn[ru] = new Ht(
      "xlinkHref",
      Jn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      tn[e] = new Ht(
        e,
        Jn,
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
    var au = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, yl = !1;
    function Ka(e) {
      !yl && au.test(e) && (yl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Xa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Sr(a, t), i.sanitizeURL && Ka("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ua) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : It(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (It(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === fn)
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
        return Sr(a, t), u === "" + a ? a : u;
      }
    }
    function zi(e, t, a, i) {
      var u = In(t);
      if (!vn(t, u, i)) {
        if (It(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Sr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === fn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var D = u.type, x;
          D === fn || D === ua && a === !0 ? x = "" : (Sr(a, y), x = "" + a, u.sanitizeURL && Ka(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var Cr = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), ca = Symbol.for("react.fragment"), Ui = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Q = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), vt = Symbol.for("react.suspense_list"), Tt = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), ct = Symbol.for("react.scope"), Mn = Symbol.for("react.debug_trace_mode"), Kt = Symbol.for("react.offscreen"), dn = Symbol.for("react.legacy_hidden"), mr = Symbol.for("react.cache"), Vt = Symbol.for("react.tracing_marker"), Oa = Symbol.iterator, zn = "@@iterator";
    function Pr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Oa && e[Oa] || e[zn];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, Ai = 0, ji, Sl, Br, Zo, Rr, Jo, es;
    function ts() {
    }
    ts.__reactDisabledLog = !0;
    function iu() {
      {
        if (Ai === 0) {
          ji = console.log, Sl = console.info, Br = console.warn, Zo = console.error, Rr = console.group, Jo = console.groupCollapsed, es = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ts,
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
    function qu() {
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
              value: Br
            }),
            error: rt({}, e, {
              value: Zo
            }),
            group: rt({}, e, {
              value: Rr
            }),
            groupCollapsed: rt({}, e, {
              value: Jo
            }),
            groupEnd: rt({}, e, {
              value: es
            })
          });
        }
        Ai < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fi = te.ReactCurrentDispatcher, di;
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
      var lu = typeof WeakMap == "function" ? WeakMap : Map;
      pi = new lu();
    }
    function uu(e, t) {
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
      s = Fi.current, Fi.current = null, iu();
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
                    var D = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && pi.set(e, D), D;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        El = !1, Fi.current = s, qu(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", A = x ? La(x) : "";
      return typeof e == "function" && pi.set(e, A), A;
    }
    function Cl(e, t, a) {
      return uu(e, !0);
    }
    function ns(e, t, a) {
      return uu(e, !1);
    }
    function rs(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function gt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uu(e, rs(e));
      if (typeof e == "string")
        return La(e);
      switch (e) {
        case Ue:
          return La("Suspense");
        case vt:
          return La("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return ns(e.render);
          case Tt:
            return gt(e.type, t, a);
          case Fe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return gt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function as(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return La(e.type);
        case xn:
          return La("Lazy");
        case Te:
          return La("Suspense");
        case Ct:
          return La("SuspenseList");
        case ke:
        case Ne:
        case qe:
          return ns(e.type);
        case $e:
          return ns(e.type.render);
        case ue:
          return Cl(e.type);
        default:
          return "";
      }
    }
    function Ku(e) {
      try {
        var t = "", a = e;
        do
          t += as(a), a = a.return;
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
    function is(e) {
      return e.displayName || "Context";
    }
    function St(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ca:
          return "Fragment";
        case Vr:
          return "Portal";
        case gl:
          return "Profiler";
        case Ui:
          return "StrictMode";
        case Ue:
          return "Suspense";
        case vt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            var t = e;
            return is(t) + ".Consumer";
          case R:
            var a = e;
            return is(a._context) + ".Provider";
          case q:
            return Rl(e, e.render, "ForwardRef");
          case Tt:
            var i = e.displayName || null;
            return i !== null ? i : St(e.type) || "Memo";
          case Fe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return St(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Xu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ou(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case xt:
          var i = a;
          return ou(i) + ".Consumer";
        case et:
          var u = a;
          return ou(u._context) + ".Provider";
        case en:
          return "DehydratedFragment";
        case $e:
          return Xu(a, a.render, "ForwardRef");
        case Ge:
          return "Fragment";
        case Z:
          return a;
        case pe:
          return "Portal";
        case ne:
          return "Root";
        case ve:
          return "Text";
        case xn:
          return St(a);
        case jt:
          return a === Ui ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case Nt:
          return "Profiler";
        case an:
          return "Scope";
        case Te:
          return "Suspense";
        case Ct:
          return "SuspenseList";
        case ut:
          return "TracingMarker";
        case ue:
        case ke:
        case Sn:
        case Ne:
        case pt:
        case qe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Za = te.ReactDebugCurrentFrame, hn = null, $r = !1;
    function Na() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function Tl() {
      return hn === null ? "" : Ku(hn);
    }
    function ln() {
      Za.getCurrentStack = null, hn = null, $r = !1;
    }
    function mn(e) {
      Za.getCurrentStack = e === null ? null : Tl, hn = e, $r = !1;
    }
    function ls() {
      return hn;
    }
    function er(e) {
      $r = e;
    }
    function Ir(e) {
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
          return vr(e), e;
        default:
          return "";
      }
    }
    var Zu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function su(e, t) {
      Zu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function cu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function wl(e) {
      return e._valueTracker;
    }
    function Ma(e) {
      e._valueTracker = null;
    }
    function Hi(e) {
      var t = "";
      return e && (cu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function fu(e) {
      var t = cu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      vr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            vr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            vr(p), i = "" + p;
          },
          stopTracking: function() {
            Ma(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Vi(e) {
      wl(e) || (e._valueTracker = fu(e));
    }
    function Ju(e) {
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
    var Pi = !1, eo = !1, us = !1, ei = !1;
    function to(e) {
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
      su("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !eo && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), eo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Pi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), Pi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ja(t.value != null ? t.value : i),
        controlled: to(t)
      };
    }
    function U(e, t) {
      var a = e, i = t.checked;
      i != null && zi(a, "checked", i, !1);
    }
    function H(e, t) {
      var a = e;
      {
        var i = to(t);
        !a._wrapperState.controlled && i && !ei && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ei = !0), a._wrapperState.controlled && !i && !us && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), us = !0);
      }
      U(e, t);
      var u = Ja(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Ir(u)) : a.value !== Ir(u) && (a.value = Ir(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? We(a, t.type, u) : t.hasOwnProperty("defaultValue") && We(a, t.type, Ja(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function J(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Ir(i._wrapperState.initialValue);
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
        Sr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = _h(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ju(f), H(f, p);
          }
        }
      }
    }
    function We(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || vi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ir(e._wrapperState.initialValue) : e.defaultValue !== Ir(a) && (e.defaultValue = Ir(a)));
    }
    var ft = !1, Pt = !1, Yt = !1;
    function Wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? M.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pt || (Pt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Yt || (Yt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ft && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ft = !0);
    }
    function Qt(e, t) {
      t.value != null && e.setAttribute("value", Ir(Ja(t.value)));
    }
    var un = Array.isArray;
    function Dt(e) {
      return un(e);
    }
    var bl;
    bl = !1;
    function no() {
      var e = Na();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var os = ["value", "defaultValue"];
    function ss(e) {
      {
        su("select", e);
        for (var t = 0; t < os.length; t++) {
          var a = os[t];
          if (e[a] != null) {
            var i = Dt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, no()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, no());
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
        for (var g = Ir(Ja(a)), D = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          D === null && !u[x].disabled && (D = u[x]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function cs(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function fs(e, t) {
      var a = e;
      ss(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bl = !0);
    }
    function Yf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Gm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rv(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var av = !1;
    function Wf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ir(a._wrapperState.initialValue)
      });
      return i;
    }
    function iv(e, t) {
      var a = e;
      su("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !av && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component"), av = !0);
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
    function lv(e, t) {
      var a = e, i = Ja(t.value), u = Ja(t.defaultValue);
      if (i != null) {
        var s = Ir(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Ir(u));
    }
    function Sc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function qm(e, t) {
      lv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", Km = "http://www.w3.org/1998/Math/MathML", Ec = "http://www.w3.org/2000/svg";
    function Qf(e) {
      switch (e) {
        case "svg":
          return Ec;
        case "math":
          return Km;
        default:
          return $i;
      }
    }
    function Gf(e, t) {
      return e == null || e === $i ? Qf(t) : e === Ec && t === "foreignObject" ? $i : e;
    }
    var Xm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Cc, uv = Xm(function(e, t) {
      if (e.namespaceURI === Ec && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yr = 1, Ii = 3, Cn = 8, fa = 9, qf = 11, ds = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ov = {
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
    }, ro = {
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
    function sv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var cv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ro).forEach(function(e) {
      cv.forEach(function(t) {
        ro[sv(t, e)] = ro[e];
      });
    });
    function xl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ro.hasOwnProperty(e) && ro[e]) ? t + "px" : (aa(t, e), ("" + t).trim());
    }
    var Zm = /([A-Z])/g, Jm = /^ms-/;
    function ey(e) {
      return e.replace(Zm, "-$1").toLowerCase().replace(Jm, "-ms-");
    }
    var Kf = function() {
    };
    {
      var fv = /^(?:webkit|moz|o)[A-Z]/, ps = /^-ms-/, vs = /-(.)/g, dv = /;\s*$/, Yi = {}, Xf = {}, Zf = !1, Rc = !1, Jf = function(e) {
        return e.replace(vs, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Jf(e.replace(ps, "ms-"))
        ));
      }, vv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, hv = function(e, t) {
        Xf.hasOwnProperty(t) && Xf[t] || (Xf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(dv, "")));
      }, ty = function(e, t) {
        Zf || (Zf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ny = function(e, t) {
        Rc || (Rc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Kf = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : fv.test(e) ? vv(e) : dv.test(t) && hv(e, t), typeof t == "number" && (isNaN(t) ? ty(e, t) : isFinite(t) || ny(e, t));
      };
    }
    var ry = Kf;
    function ay(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ey(i)) + ":", t += xl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ry(i, t[i]);
          var s = xl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ti(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ao(e) {
      var t = {};
      for (var a in e)
        for (var i = ov[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function yv(e, t) {
      {
        if (!t)
          return;
        var a = ao(e), i = ao(t), u = {};
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
    var gv = {
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
    }, Sv = rt({
      menuitem: !0
    }, gv), Ev = "__html";
    function hs(e, t) {
      if (t) {
        if (Sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function du(e, t) {
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
    var Tc = {
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
    }, pu = {
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
    }, _l = {}, ms = new RegExp("^(aria)-[" + Oe + "]*$"), ed = new RegExp("^(aria)[A-Z][" + Oe + "]*$");
    function Cv(e, t) {
      {
        if (Zn.call(_l, t) && _l[t])
          return !0;
        if (ed.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = pu.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _l[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), _l[t] = !0, !0;
        }
        if (ms.test(t)) {
          var u = t.toLowerCase(), s = pu.hasOwnProperty(u) ? u : null;
          if (s == null)
            return _l[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), _l[t] = !0, !0;
        }
      }
      return !0;
    }
    function wc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Cv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function io(e, t) {
      du(e, t) || wc(e, t);
    }
    var bc = !1;
    function Rv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !bc && (bc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ys = function() {
    };
    {
      var yr = {}, td = /^on./, Tv = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + Oe + "]*$"), bv = new RegExp("^(aria)[A-Z][" + Oe + "]*$");
      ys = function(e, t, a, i) {
        if (Zn.call(yr, t) && yr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), yr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), yr[t] = !0, !0;
          if (td.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), yr[t] = !0, !0;
        } else if (td.test(t))
          return Tv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), yr[t] = !0, !0;
        if (wv.test(t) || bv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), yr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), yr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), yr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), yr[t] = !0, !0;
        var v = In(t), y = v !== null && v.type === la;
        if (Tc.hasOwnProperty(u)) {
          var g = Tc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), yr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), yr[t] = !0, !0;
        return typeof a == "boolean" && hr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), yr[t] = !0, !0) : y ? !0 : hr(t, a, v, !1) ? (yr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === fn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), yr[t] = !0), !0);
      };
    }
    var xv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ys(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Dl(e, t, a) {
      du(e, t) || xv(e, t, a);
    }
    var xc = 1, gs = 2, Ss = 4, iy = xc | gs | Ss, Wi = null;
    function ly(e) {
      Wi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Wi = e;
    }
    function _v() {
      Wi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Wi = null;
    }
    function Dv(e) {
      return e === Wi;
    }
    function Xt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var Es = null, Qi = null, hi = null;
    function nd(e) {
      var t = Ao(e);
      if (t) {
        if (typeof Es != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = _h(a);
          Es(t.stateNode, t.type, i);
        }
      }
    }
    function rd(e) {
      Es = e;
    }
    function lo(e) {
      Qi ? hi ? hi.push(e) : hi = [e] : Qi = e;
    }
    function _c() {
      return Qi !== null || hi !== null;
    }
    function vu() {
      if (Qi) {
        var e = Qi, t = hi;
        if (Qi = null, hi = null, nd(e), t)
          for (var a = 0; a < t.length; a++)
            nd(t[a]);
      }
    }
    var ad = function(e, t) {
      return e(t);
    }, kv = function() {
    }, id = !1;
    function Ov() {
      var e = _c();
      e && (kv(), vu());
    }
    function Cs(e, t, a) {
      if (id)
        return e(t, a);
      id = !0;
      try {
        return ad(e, t, a);
      } finally {
        id = !1, Ov();
      }
    }
    function Dc(e, t, a) {
      ad = e, kv = a;
    }
    function ld(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ud(e, t, a) {
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
          return !!(a.disabled && ld(t));
        default:
          return !1;
      }
    }
    function hu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = _h(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ud(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Rs = !1;
    if (En)
      try {
        var Ts = {};
        Object.defineProperty(Ts, "passive", {
          get: function() {
            Rs = !0;
          }
        }), window.addEventListener("test", Ts, Ts), window.removeEventListener("test", Ts, Ts);
      } catch {
        Rs = !1;
      }
    function od(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Lv = od;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var sd = document.createElement("react");
      Lv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), D = !1, x = !0, A = window.event, F = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          sd.removeEventListener(P, je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = A);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function je() {
          D = !0, V(), a.apply(i, se), x = !1;
        }
        var De, bt = !1, mt = !1;
        function L(N) {
          if (De = N.error, bt = !0, De === null && N.colno === 0 && N.lineno === 0 && (mt = !0), N.defaultPrevented && De != null && typeof De == "object")
            try {
              De._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), sd.addEventListener(P, je, !1), g.initEvent(P, !1, !1), sd.dispatchEvent(g), F && Object.defineProperty(window, "event", F), D && x && (bt ? mt && (De = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : De = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(De)), window.removeEventListener("error", L), !D)
          return V(), od.apply(this, arguments);
      };
    }
    var cd = Lv, da = !1, ws = null, Gi = !1, za = null, bs = {
      onError: function(e) {
        da = !0, ws = e;
      }
    };
    function ni(e, t, a, i, u, s, f, p, v) {
      da = !1, ws = null, cd.apply(bs, arguments);
    }
    function fd(e, t, a, i, u, s, f, p, v) {
      if (ni.apply(this, arguments), da) {
        var y = qi();
        Gi || (Gi = !0, za = y);
      }
    }
    function uy() {
      if (Gi) {
        var e = za;
        throw Gi = !1, za = null, e;
      }
    }
    function oy() {
      return da;
    }
    function qi() {
      if (da) {
        var e = ws;
        return da = !1, ws = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mi(e) {
      return e._reactInternals;
    }
    function uo(e) {
      return e._reactInternals !== void 0;
    }
    function kc(e, t) {
      e._reactInternals = t;
    }
    var Ae = (
      /*                      */
      0
    ), ri = (
      /*                */
      1
    ), Zt = (
      /*                    */
      2
    ), we = (
      /*                       */
      4
    ), zt = (
      /*                */
      16
    ), Ua = (
      /*                 */
      32
    ), Yn = (
      /*                     */
      64
    ), Ze = (
      /*                   */
      128
    ), Tr = (
      /*            */
      256
    ), pa = (
      /*                          */
      512
    ), Un = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), yi = (
      /*                    */
      4096
    ), kl = (
      /*                   */
      8192
    ), mu = (
      /*             */
      16384
    ), Nv = Wr | we | Yn | pa | Un | mu, Ki = (
      /*               */
      32767
    ), Ol = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), Oc = (
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
    ), yu = (
      /*              */
      33554432
    ), Qr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      we | Un | 0
    ), Gr = Zt | we | zt | Ua | pa | yi | kl, ai = we | Yn | pa | kl, qr = Wr | zt, nr = Aa | Ll | gi, gu = te.ReactCurrentOwner;
    function Nl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Zt | yi)) !== Ae && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ne ? a : null;
    }
    function Lc(e) {
      if (e.tag === Te) {
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
      return e.tag === ne ? e.stateNode.containerInfo : null;
    }
    function va(e) {
      return Nl(e) === e;
    }
    function ha(e) {
      {
        var t = gu.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = mi(e);
      return u ? Nl(u) === u : !1;
    }
    function on(e) {
      if (Nl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Fa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Nl(e);
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
              return on(s), e;
            if (v === u)
              return on(s), t;
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
      if (i.tag !== ne)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function dd(e) {
      var t = Fa(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === Z || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function vd(e) {
      var t = Fa(e);
      return t !== null ? Mc(t) : null;
    }
    function Mc(e) {
      if (e.tag === Z || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== pe) {
          var a = Mc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = w.unstable_scheduleCallback, zc = w.unstable_cancelCallback, zv = w.unstable_shouldYield, oo = w.unstable_requestPaint, An = w.unstable_now, sy = w.unstable_getCurrentPriorityLevel, Ml = w.unstable_ImmediatePriority, so = w.unstable_UserBlockingPriority, zl = w.unstable_NormalPriority, Uv = w.unstable_LowPriority, Ul = w.unstable_IdlePriority, Av = w.unstable_yieldValue, Uc = w.unstable_setDisableYieldValue, Xi = null, kn = null, le = null, Ha = !1, ma = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function md(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ot && (e = rt({}, e, {
          getLaneLabelMap: Al,
          injectProfilingHooks: Zi
        })), Xi = t.inject(e), kn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function co(e, t) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(Xi, e, t);
        } catch (a) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Va(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ze) === Ze;
          if (yt) {
            var i;
            switch (t) {
              case Ea:
                i = Ml;
                break;
              case Ti:
                i = so;
                break;
              case ui:
                i = zl;
                break;
              case Fs:
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
    function Su(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(Xi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function yd(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Xi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof Av == "function" && (Uc(e), ht(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(Xi, e);
        } catch (t) {
          Ha || (Ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Zi(e) {
      le = e;
    }
    function Al() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ds; a++) {
          var i = fy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function gd(e) {
      le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
    }
    function Sd() {
      le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
    }
    function ya(e) {
      le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
    }
    function ga() {
      le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
    }
    function Ac(e) {
      le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
    }
    function jv() {
      le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
    }
    function jc(e) {
      le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fv() {
      le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
    }
    function xs(e) {
      le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
    }
    function Si() {
      le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
    }
    function fo(e) {
      le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
    }
    function po() {
      le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
    }
    function Eu(e, t, a) {
      le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
    }
    function Ed(e, t, a) {
      le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
    }
    function vo(e) {
      le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
    }
    function Hv() {
      le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
    }
    function Cd(e) {
      le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
    }
    function yn() {
      le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
    }
    function _s(e) {
      le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
    }
    function Rd() {
      le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
    }
    function Fc() {
      le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
    }
    function Hc(e) {
      le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
    }
    function Td(e, t) {
      le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
    }
    function Ji(e, t) {
      le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
    }
    var ie = (
      /*                         */
      0
    ), Me = (
      /*                 */
      1
    ), Xe = (
      /*                    */
      2
    ), sn = (
      /*               */
      8
    ), Kr = (
      /*              */
      16
    ), ho = Math.clz32 ? Math.clz32 : wd, cy = Math.log, gr = Math.LN2;
    function wd(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (cy(t) / gr | 0) | 0;
    }
    var Ds = 31, Y = (
      /*                        */
      0
    ), Jt = (
      /*                          */
      0
    ), xe = (
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
    ), mo = (
      /*                */
      32
    ), Cu = (
      /*                       */
      4194240
    ), yo = (
      /*                        */
      64
    ), Vc = (
      /*                        */
      128
    ), Pc = (
      /*                        */
      256
    ), Bc = (
      /*                        */
      512
    ), $c = (
      /*                        */
      1024
    ), Ru = (
      /*                        */
      2048
    ), Ic = (
      /*                        */
      4096
    ), go = (
      /*                        */
      8192
    ), So = (
      /*                        */
      16384
    ), Yc = (
      /*                       */
      32768
    ), ks = (
      /*                       */
      65536
    ), Wc = (
      /*                       */
      131072
    ), Qc = (
      /*                       */
      262144
    ), Gc = (
      /*                       */
      524288
    ), qc = (
      /*                       */
      1048576
    ), Os = (
      /*                       */
      2097152
    ), Ls = (
      /*                            */
      130023424
    ), Tu = (
      /*                             */
      4194304
    ), Kc = (
      /*                             */
      8388608
    ), bd = (
      /*                             */
      16777216
    ), Xc = (
      /*                             */
      33554432
    ), xd = (
      /*                             */
      67108864
    ), Vv = Tu, Eo = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Co = (
      /*               */
      268435456
    ), Ci = (
      /*                        */
      536870912
    ), Sa = (
      /*                   */
      1073741824
    );
    function fy(e) {
      {
        if (e & xe)
          return "Sync";
        if (e & Ei)
          return "InputContinuousHydration";
        if (e & ii)
          return "InputContinuous";
        if (e & el)
          return "DefaultHydration";
        if (e & li)
          return "Default";
        if (e & mo)
          return "TransitionHydration";
        if (e & Cu)
          return "Transition";
        if (e & Ls)
          return "Retry";
        if (e & Eo)
          return "SelectiveHydration";
        if (e & Co)
          return "IdleHydration";
        if (e & Ci)
          return "Idle";
        if (e & Sa)
          return "Offscreen";
      }
    }
    var nn = -1, Xr = yo, Ro = Tu;
    function jl(e) {
      switch (Fl(e)) {
        case xe:
          return xe;
        case Ei:
          return Ei;
        case ii:
          return ii;
        case el:
          return el;
        case li:
          return li;
        case mo:
          return mo;
        case yo:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Ru:
        case Ic:
        case go:
        case So:
        case Yc:
        case ks:
        case Wc:
        case Qc:
        case Gc:
        case qc:
        case Os:
          return e & Cu;
        case Tu:
        case Kc:
        case bd:
        case Xc:
        case xd:
          return e & Ls;
        case Eo:
          return Eo;
        case Co:
          return Co;
        case Ci:
          return Ci;
        case Sa:
          return Sa;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ns(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
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
        var g = Fl(i), D = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === li && (D & Cu) !== Y
        )
          return t;
      }
      (i & ii) !== Y && (i |= a & li);
      var x = e.entangledLanes;
      if (x !== Y)
        for (var A = e.entanglements, F = i & x; F > 0; ) {
          var V = Hl(F), se = 1 << V;
          i |= A[V], F &= ~se;
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
    function Bv(e, t) {
      switch (e) {
        case xe:
        case Ei:
        case ii:
          return t + 250;
        case el:
        case li:
        case mo:
        case yo:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Ru:
        case Ic:
        case go:
        case So:
        case Yc:
        case ks:
        case Wc:
        case Qc:
        case Gc:
        case qc:
        case Os:
          return t + 5e3;
        case Tu:
        case Kc:
        case bd:
        case Xc:
        case xd:
          return nn;
        case Eo:
        case Co:
        case Ci:
        case Sa:
          return nn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function Dd(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p, y = s[p];
        y === nn ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Bv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function To(e) {
      return jl(e.pendingLanes);
    }
    function Ms(e) {
      var t = e.pendingLanes & ~Sa;
      return t !== Y ? t : t & Sa ? Sa : Y;
    }
    function kd(e) {
      return (e & xe) !== Y;
    }
    function Od(e) {
      return (e & _d) !== Y;
    }
    function Ld(e) {
      return (e & Ls) === e;
    }
    function $v(e) {
      var t = xe | ii | li;
      return (e & t) === Y;
    }
    function Iv(e) {
      return (e & Cu) === e;
    }
    function zs(e, t) {
      var a = Ei | ii | el | li;
      return (t & a) !== Y;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Wv(e) {
      return (e & Cu) !== Y;
    }
    function wr() {
      var e = Xr;
      return Xr <<= 1, (Xr & Cu) === Y && (Xr = yo), e;
    }
    function br() {
      var e = Ro;
      return Ro <<= 1, (Ro & Ls) === Y && (Ro = Tu), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function wo(e) {
      return Fl(e);
    }
    function Hl(e) {
      return 31 - ho(e);
    }
    function Zc(e) {
      return Hl(e);
    }
    function Zr(e, t) {
      return (e & t) !== Y;
    }
    function Vl(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function bo(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function dy(e) {
      return e;
    }
    function Md(e, t) {
      return e !== Jt && e < t ? e : t;
    }
    function Us(e) {
      for (var t = [], a = 0; a < Ds; a++)
        t.push(e);
      return t;
    }
    function xo(e, t, a) {
      e.pendingLanes |= t, t !== Ci && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = Zc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Hl(i), s = 1 << u;
        a[u] = nn, i &= ~s;
      }
    }
    function As(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function py(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Hl(f), v = 1 << p;
        i[p] = Y, u[p] = nn, s[p] = nn, f &= ~v;
      }
    }
    function Jc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Hl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ud(e, t) {
      var a = Fl(t), i;
      switch (a) {
        case ii:
          i = Ei;
          break;
        case li:
          i = el;
          break;
        case yo:
        case Vc:
        case Pc:
        case Bc:
        case $c:
        case Ru:
        case Ic:
        case go:
        case So:
        case Yc:
        case ks:
        case Wc:
        case Qc:
        case Gc:
        case qc:
        case Os:
        case Tu:
        case Kc:
        case bd:
        case Xc:
        case xd:
          i = mo;
          break;
        case Ci:
          i = Co;
          break;
        default:
          i = Jt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Jt ? Jt : i;
    }
    function Ad(e, t, a) {
      if (ma)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Zc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function js(e, t) {
      if (ma)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Zc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ri(e, t) {
      return null;
    }
    var Ea = xe, Ti = ii, ui = li, Fs = Ci, _o = Jt;
    function xr() {
      return _o;
    }
    function kt(e) {
      _o = e;
    }
    function vy(e, t) {
      var a = _o;
      try {
        return _o = e, t();
      } finally {
        _o = a;
      }
    }
    function hy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ef(e, t) {
      return e > t ? e : t;
    }
    function Wn(e, t) {
      return e !== 0 && e < t;
    }
    function Qv(e) {
      var t = Fl(e);
      return Wn(Ea, t) ? Wn(Ti, t) ? Od(t) ? ui : Fs : Ti : Ea;
    }
    function me(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var wu;
    function jd(e) {
      wu = e;
    }
    function Gv(e) {
      wu(e);
    }
    var Fd;
    function Hs(e) {
      Fd = e;
    }
    var Vs;
    function Hd(e) {
      Vs = e;
    }
    var Vd;
    function qv(e) {
      Vd = e;
    }
    var Pd;
    function Bd(e) {
      Pd = e;
    }
    var Ps = !1, jn = [], Qn = null, _r = null, tl = null, Do = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map(), nl = [], wi = [
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
    function my(e) {
      return wi.indexOf(e) > -1;
    }
    function Kv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function $d(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Qn = null;
          break;
        case "dragenter":
        case "dragleave":
          _r = null;
          break;
        case "mouseover":
        case "mouseout":
          tl = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Do.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Dr.delete(i);
          break;
        }
      }
    }
    function ko(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Kv(t, a, i, u, s);
        if (t !== null) {
          var p = Ao(t);
          p !== null && Fd(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Xv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Qn = ko(Qn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _r = ko(_r, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return tl = ko(tl, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Do.set(y, ko(Do.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, D = g.pointerId;
          return Dr.set(D, ko(Dr.get(D) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Zv(e) {
      var t = nc(e.target);
      if (t !== null) {
        var a = Nl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = Lc(a);
            if (u !== null) {
              e.blockedOn = u, Pd(e.priority, function() {
                Vs(a);
              });
              return;
            }
          } else if (i === ne) {
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
    function tf(e) {
      for (var t = Vd(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < nl.length && Wn(t, nl[i].priority); i++)
        ;
      nl.splice(i, 0, a), i === 0 && Zv(a);
    }
    function Oo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ys(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ly(s), u.target.dispatchEvent(s), _v();
        } else {
          var f = Ao(i);
          return f !== null && Fd(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ca(e, t, a) {
      Oo(e) && a.delete(t);
    }
    function Ot() {
      Ps = !1, Qn !== null && Oo(Qn) && (Qn = null), _r !== null && Oo(_r) && (_r = null), tl !== null && Oo(tl) && (tl = null), Do.forEach(Ca), Dr.forEach(Ca);
    }
    function Rn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ps || (Ps = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, Ot)));
    }
    function pn(e) {
      if (jn.length > 0) {
        Rn(jn[0], e);
        for (var t = 1; t < jn.length; t++) {
          var a = jn[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Qn !== null && Rn(Qn, e), _r !== null && Rn(_r, e), tl !== null && Rn(tl, e);
      var i = function(p) {
        return Rn(p, e);
      };
      Do.forEach(i), Dr.forEach(i);
      for (var u = 0; u < nl.length; u++) {
        var s = nl[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; nl.length > 0; ) {
        var f = nl[0];
        if (f.blockedOn !== null)
          break;
        Zv(f), f.blockedOn === null && nl.shift();
      }
    }
    var Tn = te.ReactCurrentBatchConfig, kr = !0;
    function bu(e) {
      kr = !!e;
    }
    function Bn() {
      return kr;
    }
    function Bs(e, t, a) {
      var i = _u(t), u;
      switch (i) {
        case Ea:
          u = xu;
          break;
        case Ti:
          u = nf;
          break;
        case ui:
        default:
          u = $s;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function xu(e, t, a, i) {
      var u = xr(), s = Tn.transition;
      Tn.transition = null;
      try {
        kt(Ea), $s(e, t, a, i);
      } finally {
        kt(u), Tn.transition = s;
      }
    }
    function nf(e, t, a, i) {
      var u = xr(), s = Tn.transition;
      Tn.transition = null;
      try {
        kt(Ti), $s(e, t, a, i);
      } finally {
        kt(u), Tn.transition = s;
      }
    }
    function $s(e, t, a, i) {
      kr && Is(e, t, a, i);
    }
    function Is(e, t, a, i) {
      var u = Ys(e, t, a, i);
      if (u === null) {
        Uy(e, t, i, rr, a), $d(e, i);
        return;
      }
      if (Xv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if ($d(e, i), t & Ss && my(e)) {
        for (; u !== null; ) {
          var s = Ao(u);
          s !== null && Gv(s);
          var f = Ys(e, t, a, i);
          if (f === null && Uy(e, t, i, rr, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Uy(e, t, i, null, a);
    }
    var rr = null;
    function Ys(e, t, a, i) {
      rr = null;
      var u = Xt(i), s = nc(u);
      if (s !== null) {
        var f = Nl(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Te) {
            var v = Lc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ne) {
            var y = f.stateNode;
            if (me(y))
              return Nc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return rr = s, null;
    }
    function _u(e) {
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
          return Ea;
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
          var t = sy();
          switch (t) {
            case Ml:
              return Ea;
            case so:
              return Ti;
            case zl:
            case Uv:
              return ui;
            case Ul:
              return Fs;
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
    function rf(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Id(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Pl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Bl = null, bi = null, $l = null;
    function Ws(e) {
      return Bl = e, bi = Gs(), !0;
    }
    function Yd() {
      Bl = null, bi = null, $l = null;
    }
    function Qs() {
      if ($l)
        return $l;
      var e, t = bi, a = t.length, i, u = Gs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return $l = u.slice(e, p), $l;
    }
    function Gs() {
      return "value" in Bl ? Bl.value : Bl.textContent;
    }
    function Gn(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function oi() {
      return !0;
    }
    function Pa() {
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
        return y ? this.isDefaultPrevented = oi : this.isDefaultPrevented = Pa, this.isPropagationStopped = Pa, this;
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
    var Du = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, qs = rn(Du), ku = rt({}, Du, {
      view: 0,
      detail: 0
    }), yy = rn(ku), xi, af, Ou;
    function Lu(e) {
      e !== Ou && (Ou && e.type === "mousemove" ? (xi = e.screenX - Ou.screenX, af = e.screenY - Ou.screenY) : (xi = 0, af = 0), Ou = e);
    }
    var Lo = rt({}, ku, {
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
        return "movementX" in e ? e.movementX : (Lu(e), xi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : af;
      }
    }), Il = rn(Lo), Jv = rt({}, Lo, {
      dataTransfer: 0
    }), eh = rn(Jv), Wd = rt({}, ku, {
      relatedTarget: 0
    }), No = rn(Wd), gy = rt({}, Du, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Sy = rn(gy), th = rt({}, Du, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), nh = rn(th), Nu = rt({}, Du, {
      data: 0
    }), rh = rn(Nu), Mo = rh, ah = {
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
    }, wn = {
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
    function Ey(e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Gn(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? wn[e.keyCode] || "Unidentified" : "";
    }
    var ih = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Cy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ih[e];
      return i ? !!a[i] : !1;
    }
    function Qd(e) {
      return Cy;
    }
    var lh = rt({}, ku, {
      key: Ey,
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
    }), uh = rn(lh), Ry = rt({}, Lo, {
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
    }), Ra = rn(Ry), Gd = rt({}, ku, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Qd
    }), Ty = rn(Gd), Yl = rt({}, Du, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), lf = rn(Yl), Mu = rt({}, Lo, {
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
    }), uf = rn(Mu), qd = [9, 13, 27, 32], of = 229, Kd = En && "CompositionEvent" in window, zu = null;
    En && "documentMode" in document && (zu = document.documentMode);
    var wy = En && "TextEvent" in window && !zu, Xd = En && (!Kd || zu && zu > 8 && zu <= 11), Zd = 32, Ks = String.fromCharCode(Zd);
    function sf() {
      Hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Jd = !1;
    function ep(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function by(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function oh(e, t) {
      return e === "keydown" && t.keyCode === of;
    }
    function cf(e, t) {
      switch (e) {
        case "keyup":
          return qd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== of;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Xs(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ff(e) {
      return e.locale === "ko";
    }
    var al = !1;
    function sh(e, t, a, i, u) {
      var s, f;
      if (Kd ? s = by(t) : al ? cf(t, i) && (s = "onCompositionEnd") : oh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Xd && !ff(i) && (!al && s === "onCompositionStart" ? al = Ws(u) : s === "onCompositionEnd" && al && (f = Qs()));
      var p = vh(a, s);
      if (p.length > 0) {
        var v = new rh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Xs(i);
          y !== null && (v.data = y);
        }
      }
    }
    function xy(e, t) {
      switch (e) {
        case "compositionend":
          return Xs(t);
        case "keypress":
          var a = t.which;
          return a !== Zd ? null : (Jd = !0, Ks);
        case "textInput":
          var i = t.data;
          return i === Ks && Jd ? null : i;
        default:
          return null;
      }
    }
    function df(e, t) {
      if (al) {
        if (e === "compositionend" || !Kd && cf(e, t)) {
          var a = Qs();
          return Yd(), al = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ep(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Xd && !ff(t) ? null : t.data;
        default:
          return null;
      }
    }
    function _y(e, t, a, i, u) {
      var s;
      if (wy ? s = xy(t, i) : s = df(t, i), !s)
        return null;
      var f = vh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Mo("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Zs(e, t, a, i, u, s, f) {
      sh(e, t, a, i, u), _y(e, t, a, i, u);
    }
    var Dy = {
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
    function Js(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Dy[e.type] : t === "textarea";
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
      if (!En)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function r() {
      Hr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function l(e, t, a, i) {
      lo(i);
      var u = vh(t, "onChange");
      if (u.length > 0) {
        var s = new qs("onChange", "change", null, a, i);
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
      l(t, c, e, Xt(e)), Cs(E, t);
    }
    function E(e) {
      H0(e, 0);
    }
    function T(e) {
      var t = gf(e);
      if (Ju(t))
        return e;
    }
    function j(e, t) {
      if (e === "change")
        return t;
    }
    var G = !1;
    En && (G = n("input") && (!document.documentMode || document.documentMode > 9));
    function K(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", fe);
    }
    function W() {
      o && (o.detachEvent("onpropertychange", fe), o = null, c = null);
    }
    function fe(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function Se(e, t, a) {
      e === "focusin" ? (W(), K(t, a)) : e === "focusout" && W();
    }
    function Re(e, t) {
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
    function _(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function z(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || We(e, "number", e.value);
    }
    function ee(e, t, a, i, u, s, f) {
      var p = a ? gf(a) : window, v, y;
      if (d(p) ? v = j : Js(p) ? G ? v = _ : (v = Re, y = Se) : On(p) && (v = O), v) {
        var g = v(t, a);
        if (g) {
          l(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && z(p);
    }
    function be() {
      dr("onMouseEnter", ["mouseout", "mouseover"]), dr("onMouseLeave", ["mouseout", "mouseover"]), dr("onPointerEnter", ["pointerout", "pointerover"]), dr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function He(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Dv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (nc(y) || vp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var D = u.ownerDocument;
          D ? g = D.defaultView || D.parentWindow : g = window;
        }
        var x, A;
        if (v) {
          var F = i.relatedTarget || i.toElement;
          if (x = a, A = F ? nc(F) : null, A !== null) {
            var V = Nl(A);
            (A !== V || A.tag !== Z && A.tag !== ve) && (A = null);
          }
        } else
          x = null, A = a;
        if (x !== A) {
          var se = Il, je = "onMouseLeave", De = "onMouseEnter", bt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = Ra, je = "onPointerLeave", De = "onPointerEnter", bt = "pointer");
          var mt = x == null ? g : gf(x), L = A == null ? g : gf(A), P = new se(je, bt + "leave", x, i, u);
          P.target = mt, P.relatedTarget = L;
          var N = null, X = nc(u);
          if (X === a) {
            var ye = new se(De, bt + "enter", A, i, u);
            ye.target = L, ye.relatedTarget = mt, N = ye;
          }
          WR(e, P, N, x, A);
        }
      }
    }
    function Ve(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var _e = typeof Object.is == "function" ? Object.is : Ve;
    function bn(e, t) {
      if (_e(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Zn.call(t, s) || !_e(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Lt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Wl(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ch(e, t) {
      for (var a = Lt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Lt(Wl(a));
      }
    }
    function bR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return xR(e, u, s, f, p);
    }
    function xR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, D = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Ii) && (f = s + a), g === i && (u === 0 || g.nodeType === Ii) && (p = s + u), g.nodeType === Ii && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          D = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (D === t && ++v === a && (f = s), D === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = D, D = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function _R(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = ch(e, f), g = ch(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var D = a.createRange();
          D.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(D), u.extend(g.node, g.offset)) : (D.setEnd(g.node, g.offset), u.addRange(D));
        }
      }
    }
    function _0(e) {
      return e && e.nodeType === Ii;
    }
    function D0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : _0(e) ? !1 : _0(t) ? D0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function DR(e) {
      return e && e.ownerDocument && D0(e.ownerDocument.documentElement, e);
    }
    function kR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function k0() {
      for (var e = window, t = vi(); t instanceof e.HTMLIFrameElement; ) {
        if (kR(t))
          e = t.contentWindow;
        else
          return t;
        t = vi(e.document);
      }
      return t;
    }
    function ky(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function OR() {
      var e = k0();
      return {
        focusedElem: e,
        selectionRange: ky(e) ? NR(e) : null
      };
    }
    function LR(e) {
      var t = k0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && DR(a)) {
        i !== null && ky(a) && MR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Yr && u.push({
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
    function NR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = bR(e), t || {
        start: 0,
        end: 0
      };
    }
    function MR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : _R(e, t);
    }
    var zR = En && "documentMode" in document && document.documentMode <= 11;
    function UR() {
      Hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var pf = null, Oy = null, tp = null, Ly = !1;
    function AR(e) {
      if ("selectionStart" in e && ky(e))
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
    function jR(e) {
      return e.window === e ? e.document : e.nodeType === fa ? e : e.ownerDocument;
    }
    function O0(e, t, a) {
      var i = jR(a);
      if (!(Ly || pf == null || pf !== vi(i))) {
        var u = AR(pf);
        if (!tp || !bn(tp, u)) {
          tp = u;
          var s = vh(Oy, "onSelect");
          if (s.length > 0) {
            var f = new qs("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = pf;
          }
        }
      }
    }
    function FR(e, t, a, i, u, s, f) {
      var p = a ? gf(a) : window;
      switch (t) {
        case "focusin":
          (Js(p) || p.contentEditable === "true") && (pf = p, Oy = a, tp = null);
          break;
        case "focusout":
          pf = null, Oy = null, tp = null;
          break;
        case "mousedown":
          Ly = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ly = !1, O0(e, i, u);
          break;
        case "selectionchange":
          if (zR)
            break;
        case "keydown":
        case "keyup":
          O0(e, i, u);
      }
    }
    function fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var vf = {
      animationend: fh("Animation", "AnimationEnd"),
      animationiteration: fh("Animation", "AnimationIteration"),
      animationstart: fh("Animation", "AnimationStart"),
      transitionend: fh("Transition", "TransitionEnd")
    }, Ny = {}, L0 = {};
    En && (L0 = document.createElement("div").style, "AnimationEvent" in window || (delete vf.animationend.animation, delete vf.animationiteration.animation, delete vf.animationstart.animation), "TransitionEvent" in window || delete vf.transitionend.transition);
    function dh(e) {
      if (Ny[e])
        return Ny[e];
      if (!vf[e])
        return e;
      var t = vf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in L0)
          return Ny[e] = t[a];
      return e;
    }
    var N0 = dh("animationend"), M0 = dh("animationiteration"), z0 = dh("animationstart"), U0 = dh("transitionend"), A0 = /* @__PURE__ */ new Map(), j0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function zo(e, t) {
      A0.set(e, t), Hr(t, [e]);
    }
    function HR() {
      for (var e = 0; e < j0.length; e++) {
        var t = j0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        zo(a, "on" + i);
      }
      zo(N0, "onAnimationEnd"), zo(M0, "onAnimationIteration"), zo(z0, "onAnimationStart"), zo("dblclick", "onDoubleClick"), zo("focusin", "onFocus"), zo("focusout", "onBlur"), zo(U0, "onTransitionEnd");
    }
    function VR(e, t, a, i, u, s, f) {
      var p = A0.get(t);
      if (p !== void 0) {
        var v = qs, y = t;
        switch (t) {
          case "keypress":
            if (Gn(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = uh;
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
            v = eh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ty;
            break;
          case N0:
          case M0:
          case z0:
            v = Sy;
            break;
          case U0:
            v = lf;
            break;
          case "scroll":
            v = yy;
            break;
          case "wheel":
            v = uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = nh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ra;
            break;
        }
        var g = (s & Ss) !== 0;
        {
          var D = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = IR(a, p, i.type, g, D);
          if (x.length > 0) {
            var A = new v(p, y, null, i, u);
            e.push({
              event: A,
              listeners: x
            });
          }
        }
      }
    }
    HR(), be(), r(), UR(), sf();
    function PR(e, t, a, i, u, s, f) {
      VR(e, t, a, i, u, s);
      var p = (s & iy) === 0;
      p && (He(e, t, a, i, u), ee(e, t, a, i, u), FR(e, t, a, i, u), Zs(e, t, a, i, u));
    }
    var np = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], My = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(np));
    function F0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, fd(i, t, void 0, e), e.currentTarget = null;
    }
    function BR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          F0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], D = g.instance, x = g.currentTarget, A = g.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          F0(e, A, x), i = D;
        }
    }
    function H0(e, t) {
      for (var a = (t & Ss) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        BR(s, f, a);
      }
      uy();
    }
    function $R(e, t, a, i, u) {
      var s = Xt(a), f = [];
      PR(f, e, i, a, s, t), H0(f, t);
    }
    function gn(e, t) {
      My.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Sw(t), u = QR(e);
      i.has(u) || (V0(t, e, gs, a), i.add(u));
    }
    function zy(e, t, a) {
      My.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ss), V0(a, e, i, t);
    }
    var ph = "_reactListening" + Math.random().toString(36).slice(2);
    function rp(e) {
      if (!e[ph]) {
        e[ph] = !0, Rt.forEach(function(a) {
          a !== "selectionchange" && (My.has(a) || zy(a, !1, e), zy(a, !0, e));
        });
        var t = e.nodeType === fa ? e : e.ownerDocument;
        t !== null && (t[ph] || (t[ph] = !0, zy("selectionchange", !1, t)));
      }
    }
    function V0(e, t, a, i, u) {
      var s = Bs(e, t, a), f = void 0;
      Rs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Id(e, t, s, f) : rf(e, t, s) : f !== void 0 ? Pl(e, t, s, f) : rl(e, t, s);
    }
    function P0(e, t) {
      return e === t || e.nodeType === Cn && e.parentNode === t;
    }
    function Uy(e, t, a, i, u) {
      var s = i;
      if (!(t & xc) && !(t & gs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ne || v === pe) {
              var y = p.stateNode.containerInfo;
              if (P0(y, f))
                break;
              if (v === pe)
                for (var g = p.return; g !== null; ) {
                  var D = g.tag;
                  if (D === ne || D === pe) {
                    var x = g.stateNode.containerInfo;
                    if (P0(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var A = nc(y);
                if (A === null)
                  return;
                var F = A.tag;
                if (F === Z || F === ve) {
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
      Cs(function() {
        return $R(e, t, a, s);
      });
    }
    function ap(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function IR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var D = y, x = D.stateNode, A = D.tag;
        if (A === Z && x !== null && (g = x, p !== null)) {
          var F = hu(y, p);
          F != null && v.push(ap(y, F, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function vh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var v = f, y = hu(u, a);
          y != null && i.unshift(ap(u, y, v));
          var g = hu(u, t);
          g != null && i.push(ap(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function hf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function YR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = hf(s))
        u++;
      for (var f = 0, p = i; p; p = hf(p))
        f++;
      for (; u - f > 0; )
        a = hf(a), u--;
      for (; f - u > 0; )
        i = hf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = hf(a), i = hf(i);
      }
      return null;
    }
    function B0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, D = v.tag;
        if (y !== null && y === i)
          break;
        if (D === Z && g !== null) {
          var x = g;
          if (u) {
            var A = hu(p, s);
            A != null && f.unshift(ap(p, A, x));
          } else if (!u) {
            var F = hu(p, s);
            F != null && f.push(ap(p, F, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function WR(e, t, a, i, u) {
      var s = i && u ? YR(i, u) : null;
      i !== null && B0(e, t, i, s, !1), u !== null && a !== null && B0(e, a, u, s, !0);
    }
    function QR(e, t) {
      return e + "__bubble";
    }
    var Ba = !1, ip = "dangerouslySetInnerHTML", hh = "suppressContentEditableWarning", Uo = "suppressHydrationWarning", $0 = "autoFocus", ec = "children", tc = "style", mh = "__html", Ay, yh, lp, I0, gh, Y0, W0;
    Ay = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, yh = function(e, t) {
      io(e, t), Rv(e, t), Dl(e, t, {
        registrationNameDependencies: $t,
        possibleRegistrationNames: Xn
      });
    }, Y0 = En && !document.documentMode, lp = function(e, t, a) {
      if (!Ba) {
        var i = Sh(a), u = Sh(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, I0 = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, gh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, W0 = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var GR = /\r\n?/g, qR = /\u0000|\uFFFD/g;
    function Sh(e) {
      ia(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(GR, `
`).replace(qR, "");
    }
    function Eh(e, t, a, i) {
      var u = Sh(t), s = Sh(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && $))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Q0(e) {
      return e.nodeType === fa ? e : e.ownerDocument;
    }
    function KR() {
    }
    function Ch(e) {
      e.onclick = KR;
    }
    function XR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === tc)
            f && Object.freeze(f), mv(t, f);
          else if (s === ip) {
            var p = f ? f[mh] : void 0;
            p != null && uv(t, p);
          } else if (s === ec)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ds(t, f);
            } else typeof f == "number" && ds(t, "" + f);
          else s === hh || s === Uo || s === $0 || ($t.hasOwnProperty(s) ? f != null && (typeof f != "function" && gh(s, f), s === "onScroll" && gn("scroll", t)) : f != null && zi(t, s, f, u));
        }
    }
    function ZR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === tc ? mv(e, f) : s === ip ? uv(e, f) : s === ec ? ds(e, f) : zi(e, s, f, i);
      }
    }
    function JR(e, t, a, i) {
      var u, s = Q0(a), f, p = i;
      if (p === $i && (p = Qf(e)), p === $i) {
        if (u = du(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Zn.call(Ay, e) && (Ay[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function eT(e, t) {
      return Q0(t).createTextNode(e);
    }
    function tT(e, t, a, i) {
      var u = du(t, a);
      yh(t, a);
      var s;
      switch (t) {
        case "dialog":
          gn("cancel", e), gn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < np.length; f++)
            gn(np[f], e);
          s = a;
          break;
        case "source":
          gn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e), s = a;
          break;
        case "details":
          gn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), gn("invalid", e);
          break;
        case "option":
          Wt(e, a), s = a;
          break;
        case "select":
          fs(e, a), s = cs(e, a), gn("invalid", e);
          break;
        case "textarea":
          iv(e, a), s = Wf(e, a), gn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (hs(t, s), XR(t, e, i, s, u), t) {
        case "input":
          Vi(e), J(e, a, !1);
          break;
        case "textarea":
          Vi(e), Sc(e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          Yf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ch(e);
          break;
      }
    }
    function nT(e, t, a, i, u) {
      yh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = cs(e, a), p = cs(e, i), s = [];
          break;
        case "textarea":
          f = Wf(e, a), p = Wf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ch(e);
          break;
      }
      hs(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === tc) {
            var D = f[v];
            for (y in D)
              D.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === ip || v === ec || v === hh || v === Uo || v === $0 || ($t.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], A = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === A || x == null && A == null))
          if (v === tc)
            if (x && Object.freeze(x), A) {
              for (y in A)
                A.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && A[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === ip) {
            var F = x ? x[mh] : void 0, V = A ? A[mh] : void 0;
            F != null && V !== F && (s = s || []).push(v, F);
          } else v === ec ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === hh || v === Uo || ($t.hasOwnProperty(v) ? (x != null && (typeof x != "function" && gh(v, x), v === "onScroll" && gn("scroll", e)), !s && A !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (yv(g, p[tc]), (s = s || []).push(tc, g)), s;
    }
    function rT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && U(e, u);
      var s = du(a, i), f = du(a, u);
      switch (ZR(e, t, s, f), a) {
        case "input":
          H(e, u);
          break;
        case "textarea":
          lv(e, u);
          break;
        case "select":
          Gm(e, u);
          break;
      }
    }
    function aT(e) {
      {
        var t = e.toLowerCase();
        return Tc.hasOwnProperty(t) && Tc[t] || null;
      }
    }
    function iT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = du(t, a), yh(t, a), t) {
        case "dialog":
          gn("cancel", e), gn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < np.length; y++)
            gn(np[y], e);
          break;
        case "source":
          gn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e);
          break;
        case "details":
          gn("toggle", e);
          break;
        case "input":
          C(e, a), gn("invalid", e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          fs(e, a), gn("invalid", e);
          break;
        case "textarea":
          iv(e, a), gn("invalid", e);
          break;
      }
      hs(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, D = 0; D < g.length; D++) {
          var x = g[D].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[D].name);
          }
        }
      }
      var A = null;
      for (var F in a)
        if (a.hasOwnProperty(F)) {
          var V = a[F];
          if (F === ec)
            typeof V == "string" ? e.textContent !== V && (a[Uo] !== !0 && Eh(e.textContent, V, s, f), A = [ec, V]) : typeof V == "number" && e.textContent !== "" + V && (a[Uo] !== !0 && Eh(e.textContent, V, s, f), A = [ec, "" + V]);
          else if ($t.hasOwnProperty(F))
            V != null && (typeof V != "function" && gh(F, V), F === "onScroll" && gn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, je = p && Ye ? null : In(F);
            if (a[Uo] !== !0) {
              if (!(F === hh || F === Uo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              F === "value" || F === "checked" || F === "selected")) {
                if (F === ip) {
                  var De = e.innerHTML, bt = V ? V[mh] : void 0;
                  if (bt != null) {
                    var mt = W0(e, bt);
                    mt !== De && lp(F, De, mt);
                  }
                } else if (F === tc) {
                  if (v.delete(F), Y0) {
                    var L = ay(V);
                    se = e.getAttribute("style"), L !== se && lp(F, se, L);
                  }
                } else if (p && !Ye)
                  v.delete(F.toLowerCase()), se = ka(e, F, V), V !== se && lp(F, se, V);
                else if (!vn(F, je, p) && !It(F, V, je, p)) {
                  var P = !1;
                  if (je !== null)
                    v.delete(je.attributeName), se = Xa(e, F, V, je);
                  else {
                    var N = i;
                    if (N === $i && (N = Qf(t)), N === $i)
                      v.delete(F.toLowerCase());
                    else {
                      var X = aT(F);
                      X !== null && X !== F && (P = !0, v.delete(X)), v.delete(F);
                    }
                    se = ka(e, F, V);
                  }
                  var ye = Ye;
                  !ye && V !== se && !P && lp(F, se, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Uo] !== !0 && I0(v), t) {
        case "input":
          Vi(e), J(e, a, !0);
          break;
        case "textarea":
          Vi(e), Sc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ch(e);
          break;
      }
      return A;
    }
    function lT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function jy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Hy(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Vy(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function uT(e, t, a) {
      switch (t) {
        case "input":
          Ce(e, a);
          return;
        case "textarea":
          qm(e, a);
          return;
        case "select":
          rv(e, a);
          return;
      }
    }
    var up = function() {
    }, op = function() {
    };
    {
      var oT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], G0 = [
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
      ], sT = G0.concat(["button"]), cT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], q0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      op = function(e, t) {
        var a = rt({}, e || q0), i = {
          tag: t
        };
        return G0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), sT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), oT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var fT = function(e, t) {
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
            return cT.indexOf(t) === -1;
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
      }, dT = function(e, t) {
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
      }, K0 = {};
      up = function(e, t, a) {
        a = a || q0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = fT(e, u) ? null : i, f = s ? null : dT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!K0[y]) {
            K0[y] = !0;
            var g = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, D, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Rh = "suppressHydrationWarning", Th = "$", wh = "/$", sp = "$?", cp = "$!", pT = "style", Py = null, By = null;
    function vT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case fa:
        case qf: {
          t = i === fa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Gf(null, "");
          break;
        }
        default: {
          var s = i === Cn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Gf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = op(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function hT(e, t, a) {
      {
        var i = e, u = Gf(i.namespace, t), s = op(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ik(e) {
      return e;
    }
    function mT(e) {
      Py = Bn(), By = OR();
      var t = null;
      return bu(!1), t;
    }
    function yT(e) {
      LR(By), bu(Py), Py = null, By = null;
    }
    function gT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (up(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = op(f.ancestorInfo, e);
          up(null, p, v);
        }
        s = f.namespace;
      }
      var y = JR(e, t, a, s);
      return pp(u, y), Ky(y, t), y;
    }
    function ST(e, t) {
      e.appendChild(t);
    }
    function ET(e, t, a, i, u) {
      switch (tT(e, t, a, i), t) {
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
    function CT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = op(f.ancestorInfo, t);
          up(null, p, v);
        }
      }
      return nT(e, t, a, i);
    }
    function $y(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function RT(e, t, a, i) {
      {
        var u = a;
        up(null, e, u.ancestorInfo);
      }
      var s = eT(e, t);
      return pp(i, s), s;
    }
    function TT() {
      var e = window.event;
      return e === void 0 ? ui : _u(e.type);
    }
    var Iy = typeof setTimeout == "function" ? setTimeout : void 0, wT = typeof clearTimeout == "function" ? clearTimeout : void 0, Yy = -1, X0 = typeof Promise == "function" ? Promise : void 0, bT = typeof queueMicrotask == "function" ? queueMicrotask : typeof X0 < "u" ? function(e) {
      return X0.resolve(null).then(e).catch(xT);
    } : Iy;
    function xT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function _T(e, t, a, i) {
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
    function DT(e, t, a, i, u, s) {
      rT(e, t, a, i, u), Ky(e, u);
    }
    function Z0(e) {
      ds(e, "");
    }
    function kT(e, t, a) {
      e.nodeValue = a;
    }
    function OT(e, t) {
      e.appendChild(t);
    }
    function LT(e, t) {
      var a;
      e.nodeType === Cn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ch(a);
    }
    function NT(e, t, a) {
      e.insertBefore(t, a);
    }
    function MT(e, t, a) {
      e.nodeType === Cn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function zT(e, t) {
      e.removeChild(t);
    }
    function UT(e, t) {
      e.nodeType === Cn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Wy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Cn) {
          var s = u.data;
          if (s === wh)
            if (i === 0) {
              e.removeChild(u), pn(t);
              return;
            } else
              i--;
          else (s === Th || s === sp || s === cp) && i++;
        }
        a = u;
      } while (a);
      pn(t);
    }
    function AT(e, t) {
      e.nodeType === Cn ? Wy(e.parentNode, t) : e.nodeType === Yr && Wy(e, t), pn(e);
    }
    function jT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function FT(e) {
      e.nodeValue = "";
    }
    function HT(e, t) {
      e = e;
      var a = t[pT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xl("display", i);
    }
    function VT(e, t) {
      e.nodeValue = t;
    }
    function PT(e) {
      e.nodeType === Yr ? e.textContent = "" : e.nodeType === fa && e.documentElement && e.removeChild(e.documentElement);
    }
    function BT(e, t, a) {
      return e.nodeType !== Yr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function $T(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function IT(e) {
      return e.nodeType !== Cn ? null : e;
    }
    function J0(e) {
      return e.data === sp;
    }
    function Qy(e) {
      return e.data === cp;
    }
    function YT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function WT(e, t) {
      e._reactRetry = t;
    }
    function bh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yr || t === Ii)
          break;
        if (t === Cn) {
          var a = e.data;
          if (a === Th || a === cp || a === sp)
            break;
          if (a === wh)
            return null;
        }
      }
      return e;
    }
    function fp(e) {
      return bh(e.nextSibling);
    }
    function QT(e) {
      return bh(e.firstChild);
    }
    function GT(e) {
      return bh(e.firstChild);
    }
    function qT(e) {
      return bh(e.nextSibling);
    }
    function KT(e, t, a, i, u, s, f) {
      pp(s, e), Ky(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Me) !== ie;
      return iT(e, t, a, p, i, y, f);
    }
    function XT(e, t, a, i) {
      return pp(a, e), a.mode & Me, lT(e, t);
    }
    function ZT(e, t) {
      pp(t, e);
    }
    function JT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Cn) {
          var i = t.data;
          if (i === wh) {
            if (a === 0)
              return fp(t);
            a--;
          } else (i === Th || i === cp || i === sp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function eE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Cn) {
          var i = t.data;
          if (i === Th || i === cp || i === sp) {
            if (a === 0)
              return t;
            a--;
          } else i === wh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ew(e) {
      pn(e);
    }
    function tw(e) {
      pn(e);
    }
    function nw(e) {
      return e !== "head" && e !== "body";
    }
    function rw(e, t, a, i) {
      var u = !0;
      Eh(t.nodeValue, a, i, u);
    }
    function aw(e, t, a, i, u, s) {
      if (t[Rh] !== !0) {
        var f = !0;
        Eh(i.nodeValue, u, s, f);
      }
    }
    function iw(e, t) {
      t.nodeType === Yr ? jy(e, t) : t.nodeType === Cn || Fy(e, t);
    }
    function lw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yr ? jy(a, t) : t.nodeType === Cn || Fy(a, t));
      }
    }
    function uw(e, t, a, i, u) {
      (u || t[Rh] !== !0) && (i.nodeType === Yr ? jy(a, i) : i.nodeType === Cn || Fy(a, i));
    }
    function ow(e, t, a) {
      Hy(e, t);
    }
    function sw(e, t) {
      Vy(e, t);
    }
    function cw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Hy(i, t);
      }
    }
    function fw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Vy(a, t);
      }
    }
    function dw(e, t, a, i, u, s) {
      (s || t[Rh] !== !0) && Hy(a, i);
    }
    function pw(e, t, a, i, u) {
      (u || t[Rh] !== !0) && Vy(a, i);
    }
    function vw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function hw(e) {
      rp(e);
    }
    var mf = Math.random().toString(36).slice(2), yf = "__reactFiber$" + mf, Gy = "__reactProps$" + mf, dp = "__reactContainer$" + mf, qy = "__reactEvents$" + mf, mw = "__reactListeners$" + mf, yw = "__reactHandles$" + mf;
    function gw(e) {
      delete e[yf], delete e[Gy], delete e[qy], delete e[mw], delete e[yw];
    }
    function pp(e, t) {
      t[yf] = e;
    }
    function xh(e, t) {
      t[dp] = e;
    }
    function tE(e) {
      e[dp] = null;
    }
    function vp(e) {
      return !!e[dp];
    }
    function nc(e) {
      var t = e[yf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[dp] || a[yf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = eE(e); u !== null; ) {
              var s = u[yf];
              if (s)
                return s;
              u = eE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ao(e) {
      var t = e[yf] || e[dp];
      return t && (t.tag === Z || t.tag === ve || t.tag === Te || t.tag === ne) ? t : null;
    }
    function gf(e) {
      if (e.tag === Z || e.tag === ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function _h(e) {
      return e[Gy] || null;
    }
    function Ky(e, t) {
      e[Gy] = t;
    }
    function Sw(e) {
      var t = e[qy];
      return t === void 0 && (t = e[qy] = /* @__PURE__ */ new Set()), t;
    }
    var nE = {}, rE = te.ReactDebugCurrentFrame;
    function Dh(e) {
      if (e) {
        var t = e._owner, a = gt(e.type, e._source, t ? t.type : null);
        rE.setExtraStackFrame(a);
      } else
        rE.setExtraStackFrame(null);
    }
    function il(e, t, a, i, u) {
      {
        var s = Function.call.bind(Zn);
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
            p && !(p instanceof Error) && (Dh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Dh(null)), p instanceof Error && !(p.message in nE) && (nE[p.message] = !0, Dh(u), S("Failed %s type: %s", a, p.message), Dh(null));
          }
      }
    }
    var Xy = [], kh;
    kh = [];
    var Uu = -1;
    function jo(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== kh[Uu] && S("Unexpected Fiber popped."), e.current = Xy[Uu], Xy[Uu] = null, kh[Uu] = null, Uu--;
    }
    function ea(e, t, a) {
      Uu++, Xy[Uu] = e.current, kh[Uu] = a, e.current = t;
    }
    var Zy;
    Zy = {};
    var si = {};
    Object.freeze(si);
    var Au = jo(si), Ql = jo(!1), Jy = si;
    function Sf(e, t, a) {
      return a && Gl(t) ? Jy : Au.current;
    }
    function aE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Ef(e, t) {
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
        return u && aE(e, t, s), s;
      }
    }
    function Oh() {
      return Ql.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lh(e) {
      Jr(Ql, e), Jr(Au, e);
    }
    function eg(e) {
      Jr(Ql, e), Jr(Au, e);
    }
    function iE(e, t, a) {
      {
        if (Au.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ea(Au, t, e), ea(Ql, a, e);
      }
    }
    function lE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ke(e) || "Unknown";
            Zy[s] || (Zy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
    function Nh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return Jy = Au.current, ea(Au, a, e), ea(Ql, Ql.current, e), !0;
      }
    }
    function uE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = lE(e, t, Jy);
          i.__reactInternalMemoizedMergedChildContext = u, Jr(Ql, e), Jr(Au, e), ea(Au, u, e), ea(Ql, a, e);
        } else
          Jr(Ql, e), ea(Ql, a, e);
      }
    }
    function Ew(e) {
      {
        if (!va(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ne:
              return t.stateNode.context;
            case ue: {
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
    var Fo = 0, Mh = 1, ju = null, tg = !1, ng = !1;
    function oE(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    function Cw(e) {
      tg = !0, oE(e);
    }
    function sE() {
      tg && Ho();
    }
    function Ho() {
      if (!ng && ju !== null) {
        ng = !0;
        var e = 0, t = xr();
        try {
          var a = !0, i = ju;
          for (kt(Ea); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ju = null, tg = !1;
        } catch (s) {
          throw ju !== null && (ju = ju.slice(e + 1)), hd(Ml, Ho), s;
        } finally {
          kt(t), ng = !1;
        }
      }
      return null;
    }
    var Cf = [], Rf = 0, zh = null, Uh = 0, _i = [], Di = 0, rc = null, Fu = 1, Hu = "";
    function Rw(e) {
      return ic(), (e.flags & Mv) !== Ae;
    }
    function Tw(e) {
      return ic(), Uh;
    }
    function ww() {
      var e = Hu, t = Fu, a = t & ~bw(t);
      return a.toString(32) + e;
    }
    function ac(e, t) {
      ic(), Cf[Rf++] = Uh, Cf[Rf++] = zh, zh = e, Uh = t;
    }
    function cE(e, t, a) {
      ic(), _i[Di++] = Fu, _i[Di++] = Hu, _i[Di++] = rc, rc = e;
      var i = Fu, u = Hu, s = Ah(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ah(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, D = (f & g).toString(32), x = f >> y, A = s - y, F = Ah(t) + A, V = p << A, se = V | x, je = D + u;
        Fu = 1 << F | se, Hu = je;
      } else {
        var De = p << s, bt = De | f, mt = u;
        Fu = 1 << v | bt, Hu = mt;
      }
    }
    function rg(e) {
      ic();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ac(e, a), cE(e, a, i);
      }
    }
    function Ah(e) {
      return 32 - ho(e);
    }
    function bw(e) {
      return 1 << Ah(e) - 1;
    }
    function ag(e) {
      for (; e === zh; )
        zh = Cf[--Rf], Cf[Rf] = null, Uh = Cf[--Rf], Cf[Rf] = null;
      for (; e === rc; )
        rc = _i[--Di], _i[Di] = null, Hu = _i[--Di], _i[Di] = null, Fu = _i[--Di], _i[Di] = null;
    }
    function xw() {
      return ic(), rc !== null ? {
        id: Fu,
        overflow: Hu
      } : null;
    }
    function _w(e, t) {
      ic(), _i[Di++] = Fu, _i[Di++] = Hu, _i[Di++] = rc, Fu = t.id, Hu = t.overflow, rc = e;
    }
    function ic() {
      Lr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Or = null, ki = null, ll = !1, lc = !1, Vo = null;
    function Dw() {
      ll && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function fE() {
      lc = !0;
    }
    function kw() {
      return lc;
    }
    function Ow(e) {
      var t = e.stateNode.containerInfo;
      return ki = GT(t), Or = e, ll = !0, Vo = null, lc = !1, !0;
    }
    function Lw(e, t, a) {
      return ki = qT(t), Or = e, ll = !0, Vo = null, lc = !1, a !== null && _w(e, a), !0;
    }
    function dE(e, t) {
      switch (e.tag) {
        case ne: {
          iw(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & Me) !== ie;
          uw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Te: {
          var i = e.memoizedState;
          i.dehydrated !== null && lw(i.dehydrated, t);
          break;
        }
      }
    }
    function pE(e, t) {
      dE(e, t);
      var a = U_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= zt) : i.push(a);
    }
    function ig(e, t) {
      {
        if (lc)
          return;
        switch (e.tag) {
          case ne: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, ow(a, i);
                break;
              case ve:
                var u = t.pendingProps;
                sw(a, u);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Me) !== ie;
                dw(
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
              case ve: {
                var D = t.pendingProps, x = (e.mode & Me) !== ie;
                pw(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case Te: {
            var A = e.memoizedState, F = A.dehydrated;
            if (F !== null) switch (t.tag) {
              case Z:
                var V = t.type;
                t.pendingProps, cw(F, V);
                break;
              case ve:
                var se = t.pendingProps;
                fw(F, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function vE(e, t) {
      t.flags = t.flags & ~yi | Zt, ig(e, t);
    }
    function hE(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = BT(t, a);
          return i !== null ? (e.stateNode = i, Or = e, ki = QT(i), !0) : !1;
        }
        case ve: {
          var u = e.pendingProps, s = $T(t, u);
          return s !== null ? (e.stateNode = s, Or = e, ki = null, !0) : !1;
        }
        case Te: {
          var f = IT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: xw(),
              retryLane: Sa
            };
            e.memoizedState = p;
            var v = A_(f);
            return v.return = e, e.child = v, Or = e, ki = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function lg(e) {
      return (e.mode & Me) !== ie && (e.flags & Ze) === Ae;
    }
    function ug(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function og(e) {
      if (ll) {
        var t = ki;
        if (!t) {
          lg(e) && (ig(Or, e), ug()), vE(Or, e), ll = !1, Or = e;
          return;
        }
        var a = t;
        if (!hE(e, t)) {
          lg(e) && (ig(Or, e), ug()), t = fp(a);
          var i = Or;
          if (!t || !hE(e, t)) {
            vE(Or, e), ll = !1, Or = e;
            return;
          }
          pE(i, a);
        }
      }
    }
    function Nw(e, t, a) {
      var i = e.stateNode, u = !lc, s = KT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Mw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = XT(t, a, e);
      if (i) {
        var u = Or;
        if (u !== null)
          switch (u.tag) {
            case ne: {
              var s = u.stateNode.containerInfo, f = (u.mode & Me) !== ie;
              rw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Me) !== ie;
              aw(
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
    function zw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ZT(a, e);
    }
    function Uw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return JT(a);
    }
    function mE(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== ne && t.tag !== Te; )
        t = t.return;
      Or = t;
    }
    function jh(e) {
      if (e !== Or)
        return !1;
      if (!ll)
        return mE(e), ll = !0, !1;
      if (e.tag !== ne && (e.tag !== Z || nw(e.type) && !$y(e.type, e.memoizedProps))) {
        var t = ki;
        if (t)
          if (lg(e))
            yE(e), ug();
          else
            for (; t; )
              pE(e, t), t = fp(t);
      }
      return mE(e), e.tag === Te ? ki = Uw(e) : ki = Or ? fp(e.stateNode) : null, !0;
    }
    function Aw() {
      return ll && ki !== null;
    }
    function yE(e) {
      for (var t = ki; t; )
        dE(e, t), t = fp(t);
    }
    function Tf() {
      Or = null, ki = null, ll = !1, lc = !1;
    }
    function gE() {
      Vo !== null && (f1(Vo), Vo = null);
    }
    function Lr() {
      return ll;
    }
    function sg(e) {
      Vo === null ? Vo = [e] : Vo.push(e);
    }
    var jw = te.ReactCurrentBatchConfig, Fw = null;
    function Hw() {
      return jw.transition;
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
      var Vw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & sn && (t = a), a = a.return;
        return t;
      }, uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, hp = [], mp = [], yp = [], gp = [], Sp = [], Ep = [], oc = /* @__PURE__ */ new Set();
      ul.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & sn && typeof t.UNSAFE_componentWillMount == "function" && mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & sn && typeof t.UNSAFE_componentWillReceiveProps == "function" && gp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & sn && typeof t.UNSAFE_componentWillUpdate == "function" && Ep.push(e));
      }, ul.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          e.add(Ke(x) || "Component"), oc.add(x.type);
        }), hp = []);
        var t = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          t.add(Ke(x) || "Component"), oc.add(x.type);
        }), mp = []);
        var a = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(x) {
          a.add(Ke(x) || "Component"), oc.add(x.type);
        }), yp = []);
        var i = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(x) {
          i.add(Ke(x) || "Component"), oc.add(x.type);
        }), gp = []);
        var u = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(x) {
          u.add(Ke(x) || "Component"), oc.add(x.type);
        }), Sp = []);
        var s = /* @__PURE__ */ new Set();
        if (Ep.length > 0 && (Ep.forEach(function(x) {
          s.add(Ke(x) || "Component"), oc.add(x.type);
        }), Ep = []), t.size > 0) {
          var f = uc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = uc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = uc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = uc(e);
          Be(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = uc(a);
          Be(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var D = uc(u);
          Be(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Fh = /* @__PURE__ */ new Map(), SE = /* @__PURE__ */ new Set();
      ul.recordLegacyContextWarning = function(e, t) {
        var a = Vw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!SE.has(e.type)) {
          var i = Fh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Fh.set(a, i)), i.push(e));
        }
      }, ul.flushLegacyContextWarning = function() {
        Fh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ke(s) || "Component"), SE.add(s.type);
            });
            var u = uc(i);
            try {
              mn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              ln();
            }
          }
        });
      }, ul.discardPendingWarnings = function() {
        hp = [], mp = [], yp = [], gp = [], Sp = [], Ep = [], Fh = /* @__PURE__ */ new Map();
      };
    }
    var cg, fg, dg, pg, vg, EE = function(e, t) {
    };
    cg = !1, fg = !1, dg = {}, pg = {}, vg = {}, EE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        pg[a] || (pg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Pw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Cp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & sn || nt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ue) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Pw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ke(e) || "Component";
          dg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), dg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Vn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(D) {
            var x = v.refs;
            D === null ? delete x[y] : x[y] = D;
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
    function Hh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Vh(e) {
      {
        var t = Ke(e) || "Component";
        if (vg[t])
          return;
        vg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function CE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function RE(e) {
      function t(L, P) {
        if (e) {
          var N = L.deletions;
          N === null ? (L.deletions = [P], L.flags |= zt) : N.push(P);
        }
      }
      function a(L, P) {
        if (!e)
          return null;
        for (var N = P; N !== null; )
          t(L, N), N = N.sibling;
        return null;
      }
      function i(L, P) {
        for (var N = /* @__PURE__ */ new Map(), X = P; X !== null; )
          X.key !== null ? N.set(X.key, X) : N.set(X.index, X), X = X.sibling;
        return N;
      }
      function u(L, P) {
        var N = yc(L, P);
        return N.index = 0, N.sibling = null, N;
      }
      function s(L, P, N) {
        if (L.index = N, !e)
          return L.flags |= Mv, P;
        var X = L.alternate;
        if (X !== null) {
          var ye = X.index;
          return ye < P ? (L.flags |= Zt, P) : ye;
        } else
          return L.flags |= Zt, P;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= Zt), L;
      }
      function p(L, P, N, X) {
        if (P === null || P.tag !== ve) {
          var ye = s0(N, L.mode, X);
          return ye.return = L, ye;
        } else {
          var ce = u(P, N);
          return ce.return = L, ce;
        }
      }
      function v(L, P, N, X) {
        var ye = N.type;
        if (ye === ca)
          return g(L, P, N.props.children, X, N.key);
        if (P !== null && (P.elementType === ye || // Keep this check inline so it only runs on the false path:
        _1(P, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Fe && CE(ye) === P.type)) {
          var ce = u(P, N.props);
          return ce.ref = Cp(L, P, N), ce.return = L, ce._debugSource = N._source, ce._debugOwner = N._owner, ce;
        }
        var Qe = o0(N, L.mode, X);
        return Qe.ref = Cp(L, P, N), Qe.return = L, Qe;
      }
      function y(L, P, N, X) {
        if (P === null || P.tag !== pe || P.stateNode.containerInfo !== N.containerInfo || P.stateNode.implementation !== N.implementation) {
          var ye = c0(N, L.mode, X);
          return ye.return = L, ye;
        } else {
          var ce = u(P, N.children || []);
          return ce.return = L, ce;
        }
      }
      function g(L, P, N, X, ye) {
        if (P === null || P.tag !== Ge) {
          var ce = Xo(N, L.mode, X, ye);
          return ce.return = L, ce;
        } else {
          var Qe = u(P, N);
          return Qe.return = L, Qe;
        }
      }
      function D(L, P, N) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var X = s0("" + P, L.mode, N);
          return X.return = L, X;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Cr: {
              var ye = o0(P, L.mode, N);
              return ye.ref = Cp(L, null, P), ye.return = L, ye;
            }
            case Vr: {
              var ce = c0(P, L.mode, N);
              return ce.return = L, ce;
            }
            case Fe: {
              var Qe = P._payload, tt = P._init;
              return D(L, tt(Qe), N);
            }
          }
          if (Dt(P) || Pr(P)) {
            var qt = Xo(P, L.mode, N, null);
            return qt.return = L, qt;
          }
          Hh(L, P);
        }
        return typeof P == "function" && Vh(L), null;
      }
      function x(L, P, N, X) {
        var ye = P !== null ? P.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return ye !== null ? null : p(L, P, "" + N, X);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case Cr:
              return N.key === ye ? v(L, P, N, X) : null;
            case Vr:
              return N.key === ye ? y(L, P, N, X) : null;
            case Fe: {
              var ce = N._payload, Qe = N._init;
              return x(L, P, Qe(ce), X);
            }
          }
          if (Dt(N) || Pr(N))
            return ye !== null ? null : g(L, P, N, X, null);
          Hh(L, N);
        }
        return typeof N == "function" && Vh(L), null;
      }
      function A(L, P, N, X, ye) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var ce = L.get(N) || null;
          return p(P, ce, "" + X, ye);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Cr: {
              var Qe = L.get(X.key === null ? N : X.key) || null;
              return v(P, Qe, X, ye);
            }
            case Vr: {
              var tt = L.get(X.key === null ? N : X.key) || null;
              return y(P, tt, X, ye);
            }
            case Fe:
              var qt = X._payload, Ut = X._init;
              return A(L, P, N, Ut(qt), ye);
          }
          if (Dt(X) || Pr(X)) {
            var $n = L.get(N) || null;
            return g(P, $n, X, ye, null);
          }
          Hh(P, X);
        }
        return typeof X == "function" && Vh(P), null;
      }
      function F(L, P, N) {
        {
          if (typeof L != "object" || L === null)
            return P;
          switch (L.$$typeof) {
            case Cr:
            case Vr:
              EE(L, N);
              var X = L.key;
              if (typeof X != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(X);
                break;
              }
              if (!P.has(X)) {
                P.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", X);
              break;
            case Fe:
              var ye = L._payload, ce = L._init;
              F(ce(ye), P, N);
              break;
          }
        }
        return P;
      }
      function V(L, P, N, X) {
        for (var ye = null, ce = 0; ce < N.length; ce++) {
          var Qe = N[ce];
          ye = F(Qe, ye, L);
        }
        for (var tt = null, qt = null, Ut = P, $n = 0, At = 0, Fn = null; Ut !== null && At < N.length; At++) {
          Ut.index > At ? (Fn = Ut, Ut = null) : Fn = Ut.sibling;
          var na = x(L, Ut, N[At], X);
          if (na === null) {
            Ut === null && (Ut = Fn);
            break;
          }
          e && Ut && na.alternate === null && t(L, Ut), $n = s(na, $n, At), qt === null ? tt = na : qt.sibling = na, qt = na, Ut = Fn;
        }
        if (At === N.length) {
          if (a(L, Ut), Lr()) {
            var Fr = At;
            ac(L, Fr);
          }
          return tt;
        }
        if (Ut === null) {
          for (; At < N.length; At++) {
            var fi = D(L, N[At], X);
            fi !== null && ($n = s(fi, $n, At), qt === null ? tt = fi : qt.sibling = fi, qt = fi);
          }
          if (Lr()) {
            var xa = At;
            ac(L, xa);
          }
          return tt;
        }
        for (var _a = i(L, Ut); At < N.length; At++) {
          var ra = A(_a, L, At, N[At], X);
          ra !== null && (e && ra.alternate !== null && _a.delete(ra.key === null ? At : ra.key), $n = s(ra, $n, At), qt === null ? tt = ra : qt.sibling = ra, qt = ra);
        }
        if (e && _a.forEach(function(Bf) {
          return t(L, Bf);
        }), Lr()) {
          var Wu = At;
          ac(L, Wu);
        }
        return tt;
      }
      function se(L, P, N, X) {
        var ye = Pr(N);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (fg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), fg = !0), N.entries === ye && (cg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), cg = !0);
          var ce = ye.call(N);
          if (ce)
            for (var Qe = null, tt = ce.next(); !tt.done; tt = ce.next()) {
              var qt = tt.value;
              Qe = F(qt, Qe, L);
            }
        }
        var Ut = ye.call(N);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var $n = null, At = null, Fn = P, na = 0, Fr = 0, fi = null, xa = Ut.next(); Fn !== null && !xa.done; Fr++, xa = Ut.next()) {
          Fn.index > Fr ? (fi = Fn, Fn = null) : fi = Fn.sibling;
          var _a = x(L, Fn, xa.value, X);
          if (_a === null) {
            Fn === null && (Fn = fi);
            break;
          }
          e && Fn && _a.alternate === null && t(L, Fn), na = s(_a, na, Fr), At === null ? $n = _a : At.sibling = _a, At = _a, Fn = fi;
        }
        if (xa.done) {
          if (a(L, Fn), Lr()) {
            var ra = Fr;
            ac(L, ra);
          }
          return $n;
        }
        if (Fn === null) {
          for (; !xa.done; Fr++, xa = Ut.next()) {
            var Wu = D(L, xa.value, X);
            Wu !== null && (na = s(Wu, na, Fr), At === null ? $n = Wu : At.sibling = Wu, At = Wu);
          }
          if (Lr()) {
            var Bf = Fr;
            ac(L, Bf);
          }
          return $n;
        }
        for (var Jp = i(L, Fn); !xa.done; Fr++, xa = Ut.next()) {
          var nu = A(Jp, L, Fr, xa.value, X);
          nu !== null && (e && nu.alternate !== null && Jp.delete(nu.key === null ? Fr : nu.key), na = s(nu, na, Fr), At === null ? $n = nu : At.sibling = nu, At = nu);
        }
        if (e && Jp.forEach(function(pD) {
          return t(L, pD);
        }), Lr()) {
          var dD = Fr;
          ac(L, dD);
        }
        return $n;
      }
      function je(L, P, N, X) {
        if (P !== null && P.tag === ve) {
          a(L, P.sibling);
          var ye = u(P, N);
          return ye.return = L, ye;
        }
        a(L, P);
        var ce = s0(N, L.mode, X);
        return ce.return = L, ce;
      }
      function De(L, P, N, X) {
        for (var ye = N.key, ce = P; ce !== null; ) {
          if (ce.key === ye) {
            var Qe = N.type;
            if (Qe === ca) {
              if (ce.tag === Ge) {
                a(L, ce.sibling);
                var tt = u(ce, N.props.children);
                return tt.return = L, tt._debugSource = N._source, tt._debugOwner = N._owner, tt;
              }
            } else if (ce.elementType === Qe || // Keep this check inline so it only runs on the false path:
            _1(ce, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Qe == "object" && Qe !== null && Qe.$$typeof === Fe && CE(Qe) === ce.type) {
              a(L, ce.sibling);
              var qt = u(ce, N.props);
              return qt.ref = Cp(L, ce, N), qt.return = L, qt._debugSource = N._source, qt._debugOwner = N._owner, qt;
            }
            a(L, ce);
            break;
          } else
            t(L, ce);
          ce = ce.sibling;
        }
        if (N.type === ca) {
          var Ut = Xo(N.props.children, L.mode, X, N.key);
          return Ut.return = L, Ut;
        } else {
          var $n = o0(N, L.mode, X);
          return $n.ref = Cp(L, P, N), $n.return = L, $n;
        }
      }
      function bt(L, P, N, X) {
        for (var ye = N.key, ce = P; ce !== null; ) {
          if (ce.key === ye)
            if (ce.tag === pe && ce.stateNode.containerInfo === N.containerInfo && ce.stateNode.implementation === N.implementation) {
              a(L, ce.sibling);
              var Qe = u(ce, N.children || []);
              return Qe.return = L, Qe;
            } else {
              a(L, ce);
              break;
            }
          else
            t(L, ce);
          ce = ce.sibling;
        }
        var tt = c0(N, L.mode, X);
        return tt.return = L, tt;
      }
      function mt(L, P, N, X) {
        var ye = typeof N == "object" && N !== null && N.type === ca && N.key === null;
        if (ye && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case Cr:
              return f(De(L, P, N, X));
            case Vr:
              return f(bt(L, P, N, X));
            case Fe:
              var ce = N._payload, Qe = N._init;
              return mt(L, P, Qe(ce), X);
          }
          if (Dt(N))
            return V(L, P, N, X);
          if (Pr(N))
            return se(L, P, N, X);
          Hh(L, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(je(L, P, "" + N, X)) : (typeof N == "function" && Vh(L), a(L, P));
      }
      return mt;
    }
    var wf = RE(!0), TE = RE(!1);
    function Bw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = yc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = yc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function $w(e, t) {
      for (var a = e.child; a !== null; )
        O_(a, t), a = a.sibling;
    }
    var hg = jo(null), mg;
    mg = {};
    var Ph = null, bf = null, yg = null, Bh = !1;
    function $h() {
      Ph = null, bf = null, yg = null, Bh = !1;
    }
    function wE() {
      Bh = !0;
    }
    function bE() {
      Bh = !1;
    }
    function xE(e, t, a) {
      ea(hg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== mg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = mg;
    }
    function gg(e, t) {
      var a = hg.current;
      Jr(hg, t), e._currentValue = a;
    }
    function Sg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Vl(i.childLanes, t) ? u !== null && !Vl(u.childLanes, t) && (u.childLanes = at(u.childLanes, t)) : (i.childLanes = at(i.childLanes, t), u !== null && (u.childLanes = at(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Iw(e, t, a) {
      Yw(e, t, a);
    }
    function Yw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = wo(a), v = Vu(nn, p);
                v.tag = Yh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, D = g.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), g.pending = v;
                }
              }
              i.lanes = at(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = at(x.lanes, a)), Sg(i.return, a, e), s.lanes = at(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === et)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === en) {
          var A = i.return;
          if (A === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          A.lanes = at(A.lanes, a);
          var F = A.alternate;
          F !== null && (F.lanes = at(F.lanes, a)), Sg(A, a, e), u = i.sibling;
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
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function xf(e, t) {
      Ph = e, bf = null, yg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zr(a.lanes, t) && Ap(), a.firstContext = null);
      }
    }
    function qn(e) {
      Bh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (yg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (bf === null) {
          if (Ph === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          bf = a, Ph.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          bf = bf.next = a;
      }
      return t;
    }
    var sc = null;
    function Eg(e) {
      sc === null ? sc = [e] : sc.push(e);
    }
    function Ww() {
      if (sc !== null) {
        for (var e = 0; e < sc.length; e++) {
          var t = sc[e], a = t.interleaved;
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
        sc = null;
      }
    }
    function _E(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Eg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Qw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Eg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Gw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Eg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function $a(e, t) {
      return Ih(e, t);
    }
    var qw = Ih;
    function Ih(e, t) {
      e.lanes = at(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = at(a.lanes, t)), a === null && (e.flags & (Zt | yi)) !== Ae && T1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = at(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = at(a.childLanes, t) : (u.flags & (Zt | yi)) !== Ae && T1(e), i = u, u = u.return;
      if (i.tag === ne) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var DE = 0, kE = 1, Yh = 2, Cg = 3, Wh = !1, Rg, Qh;
    Rg = !1, Qh = null;
    function Tg(e) {
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
    function OE(e, t) {
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
        tag: DE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Po(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Qh === u && !Rg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Rg = !0), Qx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, qw(e, a);
      } else
        return Gw(e, u, t, a);
    }
    function Gh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Wv(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = at(s, a);
          u.lanes = f, Jc(e, f);
        }
      }
    }
    function wg(e, t) {
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
    function Kw(e, t, a, i, u, s) {
      switch (a.tag) {
        case kE: {
          var f = a.payload;
          if (typeof f == "function") {
            wE();
            var p = f.call(s, i, u);
            {
              if (e.mode & sn) {
                Pn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              bE();
            }
            return p;
          }
          return f;
        }
        case Cg:
          e.flags = e.flags & ~tr | Ze;
        case DE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            wE(), y = v.call(s, i, u);
            {
              if (e.mode & sn) {
                Pn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              bE();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case Yh:
          return Wh = !0, i;
      }
      return i;
    }
    function qh(e, t, a, i) {
      var u = e.updateQueue;
      Wh = !1, Qh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var D = g.updateQueue, x = D.lastBaseUpdate;
          x !== f && (x === null ? D.firstBaseUpdate = y : x.next = y, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var A = u.baseState, F = Y, V = null, se = null, je = null, De = s;
        do {
          var bt = De.lane, mt = De.eventTime;
          if (Vl(i, bt)) {
            if (je !== null) {
              var P = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                tag: De.tag,
                payload: De.payload,
                callback: De.callback,
                next: null
              };
              je = je.next = P;
            }
            A = Kw(e, u, De, A, t, a);
            var N = De.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            De.lane !== Jt) {
              e.flags |= Yn;
              var X = u.effects;
              X === null ? u.effects = [De] : X.push(De);
            }
          } else {
            var L = {
              eventTime: mt,
              lane: bt,
              tag: De.tag,
              payload: De.payload,
              callback: De.callback,
              next: null
            };
            je === null ? (se = je = L, V = A) : je = je.next = L, F = at(F, bt);
          }
          if (De = De.next, De === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, ce = ye.next;
            ye.next = null, De = ce, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        je === null && (V = A), u.baseState = V, u.firstBaseUpdate = se, u.lastBaseUpdate = je;
        var Qe = u.shared.interleaved;
        if (Qe !== null) {
          var tt = Qe;
          do
            F = at(F, tt.lane), tt = tt.next;
          while (tt !== Qe);
        } else s === null && (u.shared.lanes = Y);
        Gp(F), e.lanes = F, e.memoizedState = A;
      }
      Qh = null;
    }
    function Xw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function LE() {
      Wh = !1;
    }
    function Kh() {
      return Wh;
    }
    function NE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Xw(f, a));
        }
    }
    var Rp = {}, Bo = jo(Rp), Tp = jo(Rp), Xh = jo(Rp);
    function Zh(e) {
      if (e === Rp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function ME() {
      var e = Zh(Xh.current);
      return e;
    }
    function bg(e, t) {
      ea(Xh, t, e), ea(Tp, e, e), ea(Bo, Rp, e);
      var a = vT(t);
      Jr(Bo, e), ea(Bo, a, e);
    }
    function _f(e) {
      Jr(Bo, e), Jr(Tp, e), Jr(Xh, e);
    }
    function xg() {
      var e = Zh(Bo.current);
      return e;
    }
    function zE(e) {
      Zh(Xh.current);
      var t = Zh(Bo.current), a = hT(t, e.type);
      t !== a && (ea(Tp, e, e), ea(Bo, a, e));
    }
    function _g(e) {
      Tp.current === e && (Jr(Bo, e), Jr(Tp, e));
    }
    var Zw = 0, UE = 1, AE = 1, wp = 2, ol = jo(Zw);
    function Dg(e, t) {
      return (e & t) !== 0;
    }
    function Df(e) {
      return e & UE;
    }
    function kg(e, t) {
      return e & UE | t;
    }
    function Jw(e, t) {
      return e | t;
    }
    function $o(e, t) {
      ea(ol, t, e);
    }
    function kf(e) {
      Jr(ol, e);
    }
    function eb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Jh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || J0(i) || Qy(i))
              return t;
          }
        } else if (t.tag === Ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ze) !== Ae;
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
    ), ar = (
      /* */
      1
    ), ql = (
      /*  */
      2
    ), ir = (
      /*    */
      4
    ), Nr = (
      /*   */
      8
    ), Og = [];
    function Lg() {
      for (var e = 0; e < Og.length; e++) {
        var t = Og[e];
        t._workInProgressVersionPrimary = null;
      }
      Og.length = 0;
    }
    function tb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = te.ReactCurrentDispatcher, bp = te.ReactCurrentBatchConfig, Ng, Of;
    Ng = /* @__PURE__ */ new Set();
    var cc = Y, Gt = null, lr = null, ur = null, em = !1, xp = !1, _p = 0, nb = 0, rb = 25, B = null, Oi = null, Io = -1, Mg = !1;
    function Bt() {
      {
        var e = B;
        Oi === null ? Oi = [e] : Oi.push(e);
      }
    }
    function re() {
      {
        var e = B;
        Oi !== null && (Io++, Oi[Io] !== e && ab(e));
      }
    }
    function Lf(e) {
      e != null && !Dt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function ab(e) {
      {
        var t = Ke(Gt);
        if (!Ng.has(t) && (Ng.add(t), Oi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Io; u++) {
            for (var s = Oi[u], f = u === Io ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function ta() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function zg(e, t) {
      if (Mg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!_e(e[a], t[a]))
          return !1;
      return !0;
    }
    function Nf(e, t, a, i, u, s) {
      cc = s, Gt = t, Oi = e !== null ? e._debugHookTypes : null, Io = -1, Mg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? de.current = aC : Oi !== null ? de.current = rC : de.current = nC;
      var f = a(i, u);
      if (xp) {
        var p = 0;
        do {
          if (xp = !1, _p = 0, p >= rb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Mg = !1, lr = null, ur = null, t.updateQueue = null, Io = -1, de.current = iC, f = a(i, u);
        } while (xp);
      }
      de.current = pm, t._debugHookTypes = Oi;
      var v = lr !== null && lr.next !== null;
      if (cc = Y, Gt = null, lr = null, ur = null, B = null, Oi = null, Io = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Me) !== ie && S("Internal React error: Expected static flag was missing. Please notify the React team."), em = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Mf() {
      var e = _p !== 0;
      return _p = 0, e;
    }
    function jE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Kr) !== ie ? t.flags &= ~(yu | ja | Wr | we) : t.flags &= ~(Wr | we), e.lanes = bo(e.lanes, a);
    }
    function FE() {
      if (de.current = pm, em) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        em = !1;
      }
      cc = Y, Gt = null, lr = null, ur = null, Oi = null, Io = -1, B = null, XE = !1, xp = !1, _p = 0;
    }
    function Kl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ur === null ? Gt.memoizedState = ur = e : ur = ur.next = e, ur;
    }
    function Li() {
      var e;
      if (lr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = lr.next;
      var a;
      if (ur === null ? a = Gt.memoizedState : a = ur.next, a !== null)
        ur = a, a = ur.next, lr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        lr = e;
        var i = {
          memoizedState: lr.memoizedState,
          baseState: lr.baseState,
          baseQueue: lr.baseQueue,
          queue: lr.queue,
          next: null
        };
        ur === null ? Gt.memoizedState = ur = i : ur = ur.next = i;
      }
      return ur;
    }
    function HE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ug(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ag(e, t, a) {
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
      var f = s.dispatch = ob.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function jg(e, t, a) {
      var i = Li(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = lr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, D = s.baseState, x = null, A = null, F = null, V = g;
        do {
          var se = V.lane;
          if (Vl(cc, se)) {
            if (F !== null) {
              var De = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Jt,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              F = F.next = De;
            }
            if (V.hasEagerState)
              D = V.eagerState;
            else {
              var bt = V.action;
              D = e(D, bt);
            }
          } else {
            var je = {
              lane: se,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            F === null ? (A = F = je, x = D) : F = F.next = je, Gt.lanes = at(Gt.lanes, se), Gp(se);
          }
          V = V.next;
        } while (V !== null && V !== g);
        F === null ? x = D : F.next = A, _e(D, i.memoizedState) || Ap(), i.memoizedState = D, i.baseState = x, i.baseQueue = F, u.lastRenderedState = D;
      }
      var mt = u.interleaved;
      if (mt !== null) {
        var L = mt;
        do {
          var P = L.lane;
          Gt.lanes = at(Gt.lanes, P), Gp(P), L = L.next;
        } while (L !== mt);
      } else f === null && (u.lanes = Y);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function Fg(e, t, a) {
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
        _e(p, i.memoizedState) || Ap(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function lk(e, t, a) {
    }
    function uk(e, t, a) {
    }
    function Hg(e, t, a) {
      var i = Gt, u = Kl(), s, f = Lr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Of || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Of = !0);
      } else {
        if (s = t(), !Of) {
          var p = t();
          _e(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Of = !0);
        }
        var v = Nm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(v, cc) || VE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, im(BE.bind(null, i, y, e), [e]), i.flags |= Wr, Dp(ar | Nr, PE.bind(null, i, y, s, t), void 0, null), s;
    }
    function tm(e, t, a) {
      var i = Gt, u = Li(), s = t();
      if (!Of) {
        var f = t();
        _e(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Of = !0);
      }
      var p = u.memoizedState, v = !_e(p, s);
      v && (u.memoizedState = s, Ap());
      var y = u.queue;
      if (Op(BE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      ur !== null && ur.memoizedState.tag & ar) {
        i.flags |= Wr, Dp(ar | Nr, PE.bind(null, i, y, s, t), void 0, null);
        var g = Nm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(g, cc) || VE(i, t, s);
      }
      return s;
    }
    function VE(e, t, a) {
      e.flags |= mu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = HE(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function PE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, $E(t) && IE(e);
    }
    function BE(e, t, a) {
      var i = function() {
        $E(t) && IE(e);
      };
      return a(i);
    }
    function $E(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !_e(a, i);
      } catch {
        return !0;
      }
    }
    function IE(e) {
      var t = $a(e, xe);
      t !== null && fr(t, e, xe, nn);
    }
    function nm(e) {
      var t = Kl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Ug,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = sb.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Vg(e) {
      return jg(Ug);
    }
    function Pg(e) {
      return Fg(Ug);
    }
    function Dp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = HE(), Gt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Bg(e) {
      var t = Kl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function rm(e) {
      var t = Li();
      return t.memoizedState;
    }
    function kp(e, t, a, i) {
      var u = Kl(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = Dp(ar | t, a, void 0, s);
    }
    function am(e, t, a, i) {
      var u = Li(), s = i === void 0 ? null : i, f = void 0;
      if (lr !== null) {
        var p = lr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (zg(s, v)) {
            u.memoizedState = Dp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = Dp(ar | t, a, f, s);
    }
    function im(e, t) {
      return (Gt.mode & Kr) !== ie ? kp(yu | Wr | Ll, Nr, e, t) : kp(Wr | Ll, Nr, e, t);
    }
    function Op(e, t) {
      return am(Wr, Nr, e, t);
    }
    function $g(e, t) {
      return kp(we, ql, e, t);
    }
    function lm(e, t) {
      return am(we, ql, e, t);
    }
    function Ig(e, t) {
      var a = we;
      return a |= Aa, (Gt.mode & Kr) !== ie && (a |= ja), kp(a, ir, e, t);
    }
    function um(e, t) {
      return am(we, ir, e, t);
    }
    function YE(e, t) {
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
    function Yg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = we;
      return u |= Aa, (Gt.mode & Kr) !== ie && (u |= ja), kp(u, ir, YE.bind(null, t, e), i);
    }
    function om(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return am(we, ir, YE.bind(null, t, e), i);
    }
    function ib(e, t) {
    }
    var sm = ib;
    function Wg(e, t) {
      var a = Kl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function cm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (zg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Qg(e, t) {
      var a = Kl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function fm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (zg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Gg(e) {
      var t = Kl();
      return t.memoizedState = e, e;
    }
    function WE(e) {
      var t = Li(), a = lr, i = a.memoizedState;
      return GE(t, i, e);
    }
    function QE(e) {
      var t = Li();
      if (lr === null)
        return t.memoizedState = e, e;
      var a = lr.memoizedState;
      return GE(t, a, e);
    }
    function GE(e, t, a) {
      var i = !$v(cc);
      if (i) {
        if (!_e(a, t)) {
          var u = wr();
          Gt.lanes = at(Gt.lanes, u), Gp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ap()), e.memoizedState = a, a;
    }
    function lb(e, t, a) {
      var i = xr();
      kt(hy(i, Ti)), e(!0);
      var u = bp.transition;
      bp.transition = {};
      var s = bp.transition;
      bp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (kt(i), bp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Be("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function qg() {
      var e = nm(!1), t = e[0], a = e[1], i = lb.bind(null, a), u = Kl();
      return u.memoizedState = i, [t, i];
    }
    function qE() {
      var e = Vg(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    function KE() {
      var e = Pg(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    var XE = !1;
    function ub() {
      return XE;
    }
    function Kg() {
      var e = Kl(), t = Nm(), a = t.identifierPrefix, i;
      if (Lr()) {
        var u = ww();
        i = ":" + a + "R" + u;
        var s = _p++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = nb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function dm() {
      var e = Li(), t = e.memoizedState;
      return t;
    }
    function ob(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ZE(e))
        JE(t, u);
      else {
        var s = _E(e, t, u, i);
        if (s !== null) {
          var f = ba();
          fr(s, e, i, f), eC(s, t, i);
        }
      }
      tC(e, i);
    }
    function sb(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ZE(e))
        JE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = sl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, _e(y, v)) {
                Qw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = _E(e, t, u, i);
        if (g !== null) {
          var D = ba();
          fr(g, e, i, D), eC(g, t, i);
        }
      }
      tC(e, i);
    }
    function ZE(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function JE(e, t) {
      xp = em = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function eC(e, t, a) {
      if (Wv(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = at(i, a);
        t.lanes = u, Jc(e, u);
      }
    }
    function tC(e, t, a) {
      Ji(e, t);
    }
    var pm = {
      readContext: qn,
      useCallback: ta,
      useContext: ta,
      useEffect: ta,
      useImperativeHandle: ta,
      useInsertionEffect: ta,
      useLayoutEffect: ta,
      useMemo: ta,
      useReducer: ta,
      useRef: ta,
      useState: ta,
      useDebugValue: ta,
      useDeferredValue: ta,
      useTransition: ta,
      useMutableSource: ta,
      useSyncExternalStore: ta,
      useId: ta,
      unstable_isNewReconciler: ge
    }, nC = null, rC = null, aC = null, iC = null, Xl = null, sl = null, vm = null;
    {
      var Xg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Je = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      nC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Bt(), Lf(t), Wg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Bt(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Bt(), Lf(t), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Bt(), Lf(a), Yg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Bt(), Lf(t), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Bt(), Lf(t), Ig(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Bt(), Lf(t);
          var a = de.current;
          de.current = Xl;
          try {
            return Qg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Bt();
          var i = de.current;
          de.current = Xl;
          try {
            return Ag(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Bt(), Bg(e);
        },
        useState: function(e) {
          B = "useState", Bt();
          var t = de.current;
          de.current = Xl;
          try {
            return nm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Bt(), Gg(e);
        },
        useTransition: function() {
          return B = "useTransition", Bt(), qg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Bt(), Hg(e, t, a);
        },
        useId: function() {
          return B = "useId", Bt(), Kg();
        },
        unstable_isNewReconciler: ge
      }, rC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), Wg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), Yg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), Ig(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = de.current;
          de.current = Xl;
          try {
            return Qg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = de.current;
          de.current = Xl;
          try {
            return Ag(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Bg(e);
        },
        useState: function(e) {
          B = "useState", re();
          var t = de.current;
          de.current = Xl;
          try {
            return nm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), Gg(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), qg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Hg(e, t, a);
        },
        useId: function() {
          return B = "useId", re(), Kg();
        },
        unstable_isNewReconciler: ge
      }, aC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), cm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), um(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = de.current;
          de.current = sl;
          try {
            return fm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = de.current;
          de.current = sl;
          try {
            return jg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), rm();
        },
        useState: function(e) {
          B = "useState", re();
          var t = de.current;
          de.current = sl;
          try {
            return Vg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), sm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), WE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), qE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), tm(e, t);
        },
        useId: function() {
          return B = "useId", re(), dm();
        },
        unstable_isNewReconciler: ge
      }, iC = {
        readContext: function(e) {
          return qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), cm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), um(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = de.current;
          de.current = vm;
          try {
            return fm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = de.current;
          de.current = vm;
          try {
            return Fg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), rm();
        },
        useState: function(e) {
          B = "useState", re();
          var t = de.current;
          de.current = vm;
          try {
            return Pg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), sm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), QE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), KE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), tm(e, t);
        },
        useId: function() {
          return B = "useId", re(), dm();
        },
        unstable_isNewReconciler: ge
      }, Xl = {
        readContext: function(e) {
          return Xg(), qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Je(), Bt(), Wg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Je(), Bt(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Je(), Bt(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Je(), Bt(), Yg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Je(), Bt(), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Je(), Bt(), Ig(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Je(), Bt();
          var a = de.current;
          de.current = Xl;
          try {
            return Qg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Je(), Bt();
          var i = de.current;
          de.current = Xl;
          try {
            return Ag(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Je(), Bt(), Bg(e);
        },
        useState: function(e) {
          B = "useState", Je(), Bt();
          var t = de.current;
          de.current = Xl;
          try {
            return nm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Je(), Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Je(), Bt(), Gg(e);
        },
        useTransition: function() {
          return B = "useTransition", Je(), Bt(), qg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Je(), Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Je(), Bt(), Hg(e, t, a);
        },
        useId: function() {
          return B = "useId", Je(), Bt(), Kg();
        },
        unstable_isNewReconciler: ge
      }, sl = {
        readContext: function(e) {
          return Xg(), qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Je(), re(), cm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Je(), re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Je(), re(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Je(), re(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Je(), re(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Je(), re(), um(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Je(), re();
          var a = de.current;
          de.current = sl;
          try {
            return fm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Je(), re();
          var i = de.current;
          de.current = sl;
          try {
            return jg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Je(), re(), rm();
        },
        useState: function(e) {
          B = "useState", Je(), re();
          var t = de.current;
          de.current = sl;
          try {
            return Vg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Je(), re(), sm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Je(), re(), WE(e);
        },
        useTransition: function() {
          return B = "useTransition", Je(), re(), qE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Je(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Je(), re(), tm(e, t);
        },
        useId: function() {
          return B = "useId", Je(), re(), dm();
        },
        unstable_isNewReconciler: ge
      }, vm = {
        readContext: function(e) {
          return Xg(), qn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Je(), re(), cm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Je(), re(), qn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Je(), re(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Je(), re(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Je(), re(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Je(), re(), um(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Je(), re();
          var a = de.current;
          de.current = sl;
          try {
            return fm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Je(), re();
          var i = de.current;
          de.current = sl;
          try {
            return Fg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Je(), re(), rm();
        },
        useState: function(e) {
          B = "useState", Je(), re();
          var t = de.current;
          de.current = sl;
          try {
            return Pg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Je(), re(), sm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Je(), re(), QE(e);
        },
        useTransition: function() {
          return B = "useTransition", Je(), re(), KE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Je(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Je(), re(), tm(e, t);
        },
        useId: function() {
          return B = "useId", Je(), re(), dm();
        },
        unstable_isNewReconciler: ge
      };
    }
    var Yo = w.unstable_now, lC = 0, hm = -1, Lp = -1, mm = -1, Zg = !1, ym = !1;
    function uC() {
      return Zg;
    }
    function cb() {
      ym = !0;
    }
    function fb() {
      Zg = !1, ym = !1;
    }
    function db() {
      Zg = ym, ym = !1;
    }
    function oC() {
      return lC;
    }
    function sC() {
      lC = Yo();
    }
    function Jg(e) {
      Lp = Yo(), e.actualStartTime < 0 && (e.actualStartTime = Yo());
    }
    function cC(e) {
      Lp = -1;
    }
    function gm(e, t) {
      if (Lp >= 0) {
        var a = Yo() - Lp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Lp = -1;
      }
    }
    function Zl(e) {
      if (hm >= 0) {
        var t = Yo() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Nt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function eS(e) {
      if (mm >= 0) {
        var t = Yo() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Nt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Jl() {
      hm = Yo();
    }
    function tS() {
      mm = Yo();
    }
    function nS(e) {
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
    var rS = {}, aS, iS, lS, uS, oS, fC, Sm, sS, cS, fS, Np;
    {
      aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), Np = /* @__PURE__ */ new Set();
      var dC = /* @__PURE__ */ new Set();
      Sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          dC.has(a) || (dC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, fC = function(e, t) {
        if (t === void 0) {
          var a = St(e) || "Component";
          oS.has(a) || (oS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(rS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(rS);
    }
    function dS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & sn) {
          Pn(!0);
          try {
            s = a(i, u);
          } finally {
            Pn(!1);
          }
        }
        fC(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var pS = {
      isMounted: ha,
      enqueueSetState: function(e, t, a) {
        var i = mi(e), u = ba(), s = qo(i), f = Vu(u, s);
        f.payload = t, a != null && (Sm(a, "setState"), f.callback = a);
        var p = Po(i, f, s);
        p !== null && (fr(p, i, s, u), Gh(p, i, s)), Ji(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = mi(e), u = ba(), s = qo(i), f = Vu(u, s);
        f.tag = kE, f.payload = t, a != null && (Sm(a, "replaceState"), f.callback = a);
        var p = Po(i, f, s);
        p !== null && (fr(p, i, s, u), Gh(p, i, s)), Ji(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = mi(e), i = ba(), u = qo(a), s = Vu(i, u);
        s.tag = Yh, t != null && (Sm(t, "forceUpdate"), s.callback = t);
        var f = Po(a, s, u);
        f !== null && (fr(f, a, u, i), Gh(f, a, u)), Td(a, u);
      }
    };
    function pC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & sn) {
            Pn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", St(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !bn(a, i) || !bn(u, s) : !0;
    }
    function pb(e, t, a) {
      var i = e.stateNode;
      {
        var u = St(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & sn) === ie && (Np.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & sn) === ie && (Np.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !cS.has(t) && (cS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", St(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !lS.has(t) && (lS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", St(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Dt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function vC(e, t) {
      t.updater = pS, e.stateNode = t, kc(t, e), t._reactInternalInstance = rS;
    }
    function hC(e, t, a) {
      var i = !1, u = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Q && f._context === void 0
        );
        if (!p && !fS.has(t)) {
          fS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", St(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = qn(f);
      else {
        u = Sf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Ef(e, u) : si;
      }
      var g = new t(a, s);
      if (e.mode & sn) {
        Pn(!0);
        try {
          g = new t(a, s);
        } finally {
          Pn(!1);
        }
      }
      var D = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      vC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var x = St(t) || "Component";
          iS.has(x) || (iS.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var A = null, F = null, V = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? A = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (A = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? F = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (F = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), A !== null || F !== null || V !== null) {
            var se = St(t) || "Component", je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            uS.has(se) || (uS.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, je, A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && aE(e, u, s), g;
    }
    function vb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), pS.enqueueReplaceState(t, t.state, null));
    }
    function mC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          aS.has(s) || (aS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        pS.enqueueReplaceState(t, t.state, null);
      }
    }
    function vS(e, t, a, i) {
      pb(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Tg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = qn(s);
      else {
        var f = Sf(e, t, !0);
        u.context = Ef(e, f);
      }
      {
        if (u.state === a) {
          var p = St(t) || "Component";
          sS.has(p) || (sS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & sn && ul.recordLegacyContextWarning(e, u), ul.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (dS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (vb(e, u), qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = we;
        y |= Aa, (e.mode & Kr) !== ie && (y |= ja), e.flags |= y;
      }
    }
    function hb(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = qn(p);
      else {
        var y = Sf(e, t, !0);
        v = Ef(e, y);
      }
      var g = t.getDerivedStateFromProps, D = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && mC(e, u, a, v), LE();
      var x = e.memoizedState, A = u.state = x;
      if (qh(e, a, u, i), A = e.memoizedState, s === a && x === A && !Oh() && !Kh()) {
        if (typeof u.componentDidMount == "function") {
          var F = we;
          F |= Aa, (e.mode & Kr) !== ie && (F |= ja), e.flags |= F;
        }
        return !1;
      }
      typeof g == "function" && (dS(e, t, g, a), A = e.memoizedState);
      var V = Kh() || pC(e, t, s, a, x, A, v);
      if (V) {
        if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = we;
          se |= Aa, (e.mode & Kr) !== ie && (se |= ja), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var je = we;
          je |= Aa, (e.mode & Kr) !== ie && (je |= ja), e.flags |= je;
        }
        e.memoizedProps = a, e.memoizedState = A;
      }
      return u.props = a, u.state = A, u.context = v, V;
    }
    function mb(e, t, a, i, u) {
      var s = t.stateNode;
      OE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : cl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, D = si;
      if (typeof g == "object" && g !== null)
        D = qn(g);
      else {
        var x = Sf(t, a, !0);
        D = Ef(t, x);
      }
      var A = a.getDerivedStateFromProps, F = typeof A == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !F && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== D) && mC(t, s, i, D), LE();
      var V = t.memoizedState, se = s.state = V;
      if (qh(t, i, s, u), se = t.memoizedState, f === v && V === se && !Oh() && !Kh() && !oe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Un), !1;
      typeof A == "function" && (dS(t, a, A, i), se = t.memoizedState);
      var je = Kh() || pC(t, a, p, i, V, se, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      oe;
      return je ? (!F && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, D)), typeof s.componentDidUpdate == "function" && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Un)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Un), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = D, je;
    }
    function fc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ku(t),
        digest: null
      };
    }
    function hS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function yb(e, t) {
      return !0;
    }
    function mS(e, t) {
      try {
        var a = yb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ne)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ke(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var D = v + `
` + f + `

` + ("" + y);
        console.error(D);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var gb = typeof WeakMap == "function" ? WeakMap : Map;
    function yC(e, t, a) {
      var i = Vu(nn, a);
      i.tag = Cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        c_(u), mS(e, t);
      }, i;
    }
    function yS(e, t, a) {
      var i = Vu(nn, a);
      i.tag = Cg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          D1(e), mS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        D1(e), mS(e, t), typeof u != "function" && o_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Zr(e.lanes, xe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function gC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new gb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = f_.bind(null, e, t, a);
        ma && qp(e, a), t.then(s, s);
      }
    }
    function Sb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Eb(e, t) {
      var a = e.tag;
      if ((e.mode & Me) === ie && (a === ke || a === $e || a === qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function SC(e) {
      var t = e;
      do {
        if (t.tag === Te && eb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function EC(e, t, a, i, u) {
      if ((e.mode & Me) === ie) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= Ze, a.flags |= Oc, a.flags &= ~(Nv | Ol), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = Sn;
            else {
              var f = Vu(nn, xe);
              f.tag = Yh, Po(a, f, xe);
            }
          }
          a.lanes = at(a.lanes, xe);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = u, e;
    }
    function Cb(e, t, a, i, u) {
      if (a.flags |= Ol, ma && qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Eb(a), Lr() && a.mode & Me && fE();
        var f = SC(t);
        if (f !== null) {
          f.flags &= ~Tr, EC(f, t, a, e, u), f.mode & Me && gC(e, s, u), Sb(f, e, s);
          return;
        } else {
          if (!kd(u)) {
            gC(e, s, u), KS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Lr() && a.mode & Me) {
        fE();
        var v = SC(t);
        if (v !== null) {
          (v.flags & tr) === Ae && (v.flags |= Tr), EC(v, t, a, e, u), sg(fc(i, a));
          return;
        }
      }
      i = fc(i, a), e_(i);
      var y = t;
      do {
        switch (y.tag) {
          case ne: {
            var g = i;
            y.flags |= tr;
            var D = wo(u);
            y.lanes = at(y.lanes, D);
            var x = yC(y, g, D);
            wg(y, x);
            return;
          }
          case ue:
            var A = i, F = y.type, V = y.stateNode;
            if ((y.flags & Ze) === Ae && (typeof F.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !S1(V))) {
              y.flags |= tr;
              var se = wo(u);
              y.lanes = at(y.lanes, se);
              var je = yS(y, A, se);
              wg(y, je);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Rb() {
      return null;
    }
    var Mp = te.ReactCurrentOwner, fl = !1, gS, zp, SS, ES, CS, dc, RS, Em, Up;
    gS = {}, zp = {}, SS = {}, ES = {}, CS = {}, dc = !1, RS = {}, Em = {}, Up = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = TE(t, null, a, i) : t.child = wf(t, e.child, a, i);
    }
    function Tb(e, t, a, i) {
      t.child = wf(t, e.child, null, i), t.child = wf(t, null, a, i);
    }
    function CC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          St(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      xf(t, u), ya(t);
      {
        if (Mp.current = t, er(!0), v = Nf(e, t, f, i, p, u), y = Mf(), t.mode & sn) {
          Pn(!0);
          try {
            v = Nf(e, t, f, i, p, u), y = Mf();
          } finally {
            Pn(!1);
          }
        }
        er(!1);
      }
      return ga(), e !== null && !fl ? (jE(e, t, u), Pu(e, t, u)) : (Lr() && y && rg(t), t.flags |= ri, Ta(e, t, v, u), t.child);
    }
    function RC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (D_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Pf(s), t.tag = qe, t.type = f, bS(t, s), TC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && il(
            p,
            i,
            // Resolved props
            "prop",
            St(s)
          ), a.defaultProps !== void 0) {
            var v = St(s) || "Unknown";
            Up[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Up[v] = !0);
          }
        }
        var y = u0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, D = g.propTypes;
        D && il(
          D,
          i,
          // Resolved props
          "prop",
          St(g)
        );
      }
      var x = e.child, A = LS(e, u);
      if (!A) {
        var F = x.memoizedProps, V = a.compare;
        if (V = V !== null ? V : bn, V(F, i) && e.ref === t.ref)
          return Pu(e, t, u);
      }
      t.flags |= ri;
      var se = yc(x, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function TC(e, t, a, i, u) {
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
          y && il(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            St(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (bn(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = g, LS(e, u))
            (e.flags & Oc) !== Ae && (fl = !0);
          else return t.lanes = e.lanes, Pu(e, t, u);
      }
      return TS(e, t, a, i, u);
    }
    function wC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || k)
        if ((t.mode & Me) === ie) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Mm(t, a);
        } else if (Zr(a, Sa)) {
          var D = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var x = s !== null ? s.baseLanes : a;
          Mm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = at(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Sa;
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
      return Ta(e, t, u, a), t.child;
    }
    function wb(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function bb(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function xb(e, t, a) {
      {
        t.flags |= we;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ta(e, t, s, a), t.child;
    }
    function bC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= pa, t.flags |= gi);
    }
    function TS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          St(a)
        );
      }
      var f;
      {
        var p = Sf(t, a, !0);
        f = Ef(t, p);
      }
      var v, y;
      xf(t, u), ya(t);
      {
        if (Mp.current = t, er(!0), v = Nf(e, t, a, i, f, u), y = Mf(), t.mode & sn) {
          Pn(!0);
          try {
            v = Nf(e, t, a, i, f, u), y = Mf();
          } finally {
            Pn(!1);
          }
        }
        er(!1);
      }
      return ga(), e !== null && !fl ? (jE(e, t, u), Pu(e, t, u)) : (Lr() && y && rg(t), t.flags |= ri, Ta(e, t, v, u), t.child);
    }
    function xC(e, t, a, i, u) {
      {
        switch ($_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ze, t.flags |= tr;
            var y = new Error("Simulated error coming from DevTools"), g = wo(u);
            t.lanes = at(t.lanes, g);
            var D = yS(t, fc(y, t), g);
            wg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && il(
            x,
            i,
            // Resolved props
            "prop",
            St(a)
          );
        }
      }
      var A;
      Gl(a) ? (A = !0, Nh(t)) : A = !1, xf(t, u);
      var F = t.stateNode, V;
      F === null ? (Rm(e, t), hC(t, a, i), vS(t, a, i, u), V = !0) : e === null ? V = hb(t, a, i, u) : V = mb(e, t, a, i, u);
      var se = wS(e, t, a, V, A, u);
      {
        var je = t.stateNode;
        V && je.props !== i && (dc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), dc = !0);
      }
      return se;
    }
    function wS(e, t, a, i, u, s) {
      bC(e, t);
      var f = (t.flags & Ze) !== Ae;
      if (!i && !f)
        return u && uE(t, a, !1), Pu(e, t, s);
      var p = t.stateNode;
      Mp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, cC();
      else {
        ya(t);
        {
          if (er(!0), v = p.render(), t.mode & sn) {
            Pn(!0);
            try {
              p.render();
            } finally {
              Pn(!1);
            }
          }
          er(!1);
        }
        ga();
      }
      return t.flags |= ri, e !== null && f ? Tb(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && uE(t, a, !0), t.child;
    }
    function _C(e) {
      var t = e.stateNode;
      t.pendingContext ? iE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && iE(e, t.context, !1), bg(e, t.containerInfo);
    }
    function _b(e, t, a) {
      if (_C(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      OE(e, t), qh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & Tr) {
          var g = fc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return DC(e, t, p, a, g);
        } else if (p !== s) {
          var D = fc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return DC(e, t, p, a, D);
        } else {
          Ow(t);
          var x = TE(t, null, p, a);
          t.child = x;
          for (var A = x; A; )
            A.flags = A.flags & ~Zt | yi, A = A.sibling;
        }
      } else {
        if (Tf(), p === s)
          return Pu(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function DC(e, t, a, i, u) {
      return Tf(), sg(u), t.flags |= Tr, Ta(e, t, a, i), t.child;
    }
    function Db(e, t, a) {
      zE(t), e === null && og(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = $y(i, u);
      return p ? f = null : s !== null && $y(i, s) && (t.flags |= Ua), bC(e, t), Ta(e, t, f, a), t.child;
    }
    function kb(e, t) {
      return e === null && og(t), null;
    }
    function Ob(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = k_(v), g = cl(v, u), D;
      switch (y) {
        case ke:
          return bS(t, v), t.type = v = Pf(v), D = TS(null, t, v, g, i), D;
        case ue:
          return t.type = v = t0(v), D = xC(null, t, v, g, i), D;
        case $e:
          return t.type = v = n0(v), D = CC(null, t, v, g, i), D;
        case pt: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && il(
              x,
              g,
              // Resolved for outer only
              "prop",
              St(v)
            );
          }
          return D = RC(
            null,
            t,
            v,
            cl(v.type, g),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var A = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Fe && (A = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + A));
    }
    function Lb(e, t, a, i, u) {
      Rm(e, t), t.tag = ue;
      var s;
      return Gl(a) ? (s = !0, Nh(t)) : s = !1, xf(t, u), hC(t, a, i), vS(t, a, i, u), wS(null, t, a, !0, s, u);
    }
    function Nb(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Sf(t, a, !1);
        s = Ef(t, f);
      }
      xf(t, i);
      var p, v;
      ya(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = St(a) || "Unknown";
          gS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), gS[y] = !0);
        }
        t.mode & sn && ul.recordLegacyContextWarning(t, null), er(!0), Mp.current = t, p = Nf(null, t, a, u, s, i), v = Mf(), er(!1);
      }
      if (ga(), t.flags |= ri, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = St(a) || "Unknown";
        zp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), zp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = St(a) || "Unknown";
          zp[D] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), zp[D] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Gl(a) ? (x = !0, Nh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Tg(t), vC(t, p), vS(t, a, u, i), wS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ke, t.mode & sn) {
          Pn(!0);
          try {
            p = Nf(null, t, a, u, s, i), v = Mf();
          } finally {
            Pn(!1);
          }
        }
        return Lr() && v && rg(t), Ta(null, t, p, i), bS(t, a), t.child;
      }
    }
    function bS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Na();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), CS[u] || (CS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = St(t) || "Unknown";
          Up[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Up[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = St(t) || "Unknown";
          ES[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), ES[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = St(t) || "Unknown";
          SS[v] || (S("%s: Function components do not support contextType.", v), SS[v] = !0);
        }
      }
    }
    var xS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Jt
    };
    function _S(e) {
      return {
        baseLanes: e,
        cachePool: Rb(),
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
    function zb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Dg(e, wp);
    }
    function Ub(e, t) {
      return bo(e.childLanes, t);
    }
    function kC(e, t, a) {
      var i = t.pendingProps;
      I_(t) && (t.flags |= Ze);
      var u = ol.current, s = !1, f = (t.flags & Ze) !== Ae;
      if (f || zb(u, e) ? (s = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (u = Jw(u, AE)), u = Df(u), $o(t, u), e === null) {
        og(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Vb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var D = Ab(t, y, g, a), x = t.child;
          return x.memoizedState = _S(a), t.memoizedState = xS, D;
        } else
          return DS(t, y);
      } else {
        var A = e.memoizedState;
        if (A !== null) {
          var F = A.dehydrated;
          if (F !== null)
            return Pb(e, t, f, i, F, A, a);
        }
        if (s) {
          var V = i.fallback, se = i.children, je = Fb(e, t, se, V, a), De = t.child, bt = e.child.memoizedState;
          return De.memoizedState = bt === null ? _S(a) : Mb(bt, a), De.childLanes = Ub(e, a), t.memoizedState = xS, je;
        } else {
          var mt = i.children, L = jb(e, t, mt, a);
          return t.memoizedState = null, L;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = kS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Ab(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Me) === ie && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & Xe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Xo(a, u, i, null)) : (p = kS(f, u), v = Xo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function kS(e, t, a) {
      return O1(e, t, Y, null);
    }
    function OC(e, t) {
      return yc(e, t);
    }
    function jb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = OC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Me) === ie && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= zt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Fb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Me) === ie && // Make sure we're on the second pass, i.e. the primary child fragment was
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
        y = OC(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var D;
      return p !== null ? D = yc(p, i) : (D = Xo(i, s, u, null), D.flags |= Zt), D.return = t, y.return = t, y.sibling = D, t.child = y, D;
    }
    function Cm(e, t, a, i) {
      i !== null && sg(i), wf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = DS(t, s);
      return f.flags |= Zt, t.memoizedState = null, f;
    }
    function Hb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = kS(f, s), v = Xo(i, s, u, null);
      return v.flags |= Zt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Me) !== ie && wf(t, e.child, null, u), v;
    }
    function Vb(e, t, a) {
      return (e.mode & Me) === ie ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = xe) : Qy(t) ? e.lanes = el : e.lanes = Sa, null;
    }
    function Pb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Tr) {
          t.flags &= ~Tr;
          var L = hS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cm(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ze, null;
          var P = i.children, N = i.fallback, X = Hb(e, t, P, N, f), ye = t.child;
          return ye.memoizedState = _S(f), t.memoizedState = xS, X;
        }
      else {
        if (Dw(), (t.mode & Me) === ie)
          return Cm(
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
            var g = YT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = hS(D, p, y);
          return Cm(e, t, f, x);
        }
        var A = Zr(f, e.childLanes);
        if (fl || A) {
          var F = Nm();
          if (F !== null) {
            var V = Ud(F, f);
            if (V !== Jt && V !== s.retryLane) {
              s.retryLane = V;
              var se = nn;
              $a(e, V), fr(F, e, V, se);
            }
          }
          KS();
          var je = hS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cm(e, t, f, je);
        } else if (J0(u)) {
          t.flags |= Ze, t.child = e.child;
          var De = d_.bind(null, e);
          return WT(u, De), null;
        } else {
          Lw(t, u, s.treeContext);
          var bt = i.children, mt = DS(t, bt);
          return mt.flags |= yi, mt;
        }
      }
    }
    function LC(e, t, a) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), Sg(e.return, t, a);
    }
    function Bb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && LC(i, a, e);
        } else if (i.tag === Ct)
          LC(i, a, e);
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
    function $b(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Jh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ib(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !RS[e])
        if (RS[e] = !0, typeof e == "string")
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
    function Yb(e, t) {
      e !== void 0 && !Em[e] && (e !== "collapsed" && e !== "hidden" ? (Em[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Em[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function NC(e, t) {
      {
        var a = Dt(e), i = !a && typeof Pr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Wb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Dt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!NC(e[a], a))
              return;
        } else {
          var i = Pr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!NC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function OS(e, t, a, i, u) {
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
    function MC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ib(u), Yb(s, u), Wb(f, u), Ta(e, t, f, a);
      var p = ol.current, v = Dg(p, wp);
      if (v)
        p = kg(p, wp), t.flags |= Ze;
      else {
        var y = e !== null && (e.flags & Ze) !== Ae;
        y && Bb(t, t.child, a), p = Df(p);
      }
      if ($o(t, p), (t.mode & Me) === ie)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = $b(t.child), D;
            g === null ? (D = t.child, t.child = null) : (D = g.sibling, g.sibling = null), OS(
              t,
              !1,
              // isBackwards
              D,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, A = t.child;
            for (t.child = null; A !== null; ) {
              var F = A.alternate;
              if (F !== null && Jh(F) === null) {
                t.child = A;
                break;
              }
              var V = A.sibling;
              A.sibling = x, x = A, A = V;
            }
            OS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            OS(
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
      bg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = wf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var zC = !1;
    function Gb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || zC || (zC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && il(v, s, "prop", "Context.Provider");
      }
      if (xE(t, u, p), f !== null) {
        var y = f.value;
        if (_e(y, p)) {
          if (f.children === s.children && !Oh())
            return Pu(e, t, a);
        } else
          Iw(t, u, a);
      }
      var g = s.children;
      return Ta(e, t, g, a), t.child;
    }
    var UC = !1;
    function qb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (UC || (UC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), xf(t, a);
      var f = qn(i);
      ya(t);
      var p;
      return Mp.current = t, er(!0), p = s(f), er(!1), ga(), t.flags |= ri, Ta(e, t, p, a), t.child;
    }
    function Ap() {
      fl = !0;
    }
    function Rm(e, t) {
      (t.mode & Me) === ie && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
    }
    function Pu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), cC(), Gp(t.lanes), Zr(a, t.childLanes) ? (Bw(e, t), t.child) : null;
    }
    function Kb(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= zt) : s.push(e), a.flags |= Zt, a;
      }
    }
    function LS(e, t) {
      var a = e.lanes;
      return !!Zr(a, t);
    }
    function Xb(e, t, a) {
      switch (t.tag) {
        case ne:
          _C(t), t.stateNode, Tf();
          break;
        case Z:
          zE(t);
          break;
        case ue: {
          var i = t.type;
          Gl(i) && Nh(t);
          break;
        }
        case pe:
          bg(t, t.stateNode.containerInfo);
          break;
        case et: {
          var u = t.memoizedProps.value, s = t.type._context;
          xE(t, s, u);
          break;
        }
        case Nt:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= we);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Te: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return $o(t, Df(ol.current)), t.flags |= Ze, null;
            var y = t.child, g = y.childLanes;
            if (Zr(a, g))
              return kC(e, t, a);
            $o(t, Df(ol.current));
            var D = Pu(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            $o(t, Df(ol.current));
          break;
        }
        case Ct: {
          var x = (e.flags & Ze) !== Ae, A = Zr(a, t.childLanes);
          if (x) {
            if (A)
              return MC(e, t, a);
            t.flags |= Ze;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), $o(t, ol.current), A)
            break;
          return null;
        }
        case Ie:
        case lt:
          return t.lanes = Y, wC(e, t, a);
      }
      return Pu(e, t, a);
    }
    function AC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Kb(e, t, u0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Oh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = LS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ze) === Ae)
            return fl = !1, Xb(e, t, a);
          (e.flags & Oc) !== Ae ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, Lr() && Rw(t)) {
        var f = t.index, p = Tw();
        cE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Ne:
          return Nb(e, t, t.type, a);
        case xn: {
          var v = t.elementType;
          return Ob(e, t, v, a);
        }
        case ke: {
          var y = t.type, g = t.pendingProps, D = t.elementType === y ? g : cl(y, g);
          return TS(e, t, y, D, a);
        }
        case ue: {
          var x = t.type, A = t.pendingProps, F = t.elementType === x ? A : cl(x, A);
          return xC(e, t, x, F, a);
        }
        case ne:
          return _b(e, t, a);
        case Z:
          return Db(e, t, a);
        case ve:
          return kb(e, t);
        case Te:
          return kC(e, t, a);
        case pe:
          return Qb(e, t, a);
        case $e: {
          var V = t.type, se = t.pendingProps, je = t.elementType === V ? se : cl(V, se);
          return CC(e, t, V, je, a);
        }
        case Ge:
          return wb(e, t, a);
        case jt:
          return bb(e, t, a);
        case Nt:
          return xb(e, t, a);
        case et:
          return Gb(e, t, a);
        case xt:
          return qb(e, t, a);
        case pt: {
          var De = t.type, bt = t.pendingProps, mt = cl(De, bt);
          if (t.type !== t.elementType) {
            var L = De.propTypes;
            L && il(
              L,
              mt,
              // Resolved for outer only
              "prop",
              St(De)
            );
          }
          return mt = cl(De.type, mt), RC(e, t, De, mt, a);
        }
        case qe:
          return TC(e, t, t.type, t.pendingProps, a);
        case Sn: {
          var P = t.type, N = t.pendingProps, X = t.elementType === P ? N : cl(P, N);
          return Lb(e, t, P, X, a);
        }
        case Ct:
          return MC(e, t, a);
        case an:
          break;
        case Ie:
          return wC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zf(e) {
      e.flags |= we;
    }
    function jC(e) {
      e.flags |= pa, e.flags |= gi;
    }
    var FC, NS, HC, VC;
    FC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === ve)
          ST(e, u.stateNode);
        else if (u.tag !== pe) {
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
    }, NS = function(e, t) {
    }, HC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = xg(), v = CT(f, a, s, i, u, p);
        t.updateQueue = v, v && zf(t);
      }
    }, VC = function(e, t, a, i) {
      a !== i && zf(t);
    };
    function jp(e, t) {
      if (!Lr())
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = Ae;
      if (t) {
        if ((e.mode & Xe) !== ie) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = at(a, at(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = at(a, at(g.lanes, g.childLanes)), i |= g.subtreeFlags & nr, i |= g.flags & nr, g.return = e, g = g.sibling;
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
    function Zb(e, t, a) {
      if (Aw() && (t.mode & Me) !== ie && (t.flags & Ze) === Ae)
        return yE(t), Tf(), t.flags |= Tr | Ol | tr, !1;
      var i = jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (zw(t), Mr(t), (t.mode & Xe) !== ie) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Tf(), (t.flags & Ze) === Ae && (t.memoizedState = null), t.flags |= we, Mr(t), (t.mode & Xe) !== ie) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return gE(), !0;
    }
    function PC(e, t, a) {
      var i = t.pendingProps;
      switch (ag(t), t.tag) {
        case Ne:
        case xn:
        case qe:
        case ke:
        case $e:
        case Ge:
        case jt:
        case Nt:
        case xt:
        case pt:
          return Mr(t), null;
        case ue: {
          var u = t.type;
          return Gl(u) && Lh(t), Mr(t), null;
        }
        case ne: {
          var s = t.stateNode;
          if (_f(t), eg(t), Lg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = jh(t);
            if (f)
              zf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tr) !== Ae) && (t.flags |= Un, gE());
            }
          }
          return NS(e, t), Mr(t), null;
        }
        case Z: {
          _g(t);
          var v = ME(), y = t.type;
          if (e !== null && t.stateNode != null)
            HC(e, t, y, i, v), e.ref !== t.ref && jC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Mr(t), null;
            }
            var g = xg(), D = jh(t);
            if (D)
              Nw(t, v, g) && zf(t);
            else {
              var x = gT(y, i, v, g, t);
              FC(x, t, !1, !1), t.stateNode = x, ET(x, y, i, v) && zf(t);
            }
            t.ref !== null && jC(t);
          }
          return Mr(t), null;
        }
        case ve: {
          var A = i;
          if (e && t.stateNode != null) {
            var F = e.memoizedProps;
            VC(e, t, F, A);
          } else {
            if (typeof A != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = ME(), se = xg(), je = jh(t);
            je ? Mw(t) && zf(t) : t.stateNode = RT(A, V, se, t);
          }
          return Mr(t), null;
        }
        case Te: {
          kf(t);
          var De = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bt = Zb(e, t, De);
            if (!bt)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & Ze) !== Ae)
            return t.lanes = a, (t.mode & Xe) !== ie && nS(t), t;
          var mt = De !== null, L = e !== null && e.memoizedState !== null;
          if (mt !== L && mt) {
            var P = t.child;
            if (P.flags |= kl, (t.mode & Me) !== ie) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !I);
              N || Dg(ol.current, AE) ? Jx() : KS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= we), Mr(t), (t.mode & Xe) !== ie && mt) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case pe:
          return _f(t), NS(e, t), e === null && hw(t.stateNode.containerInfo), Mr(t), null;
        case et:
          var ce = t.type._context;
          return gg(ce, t), Mr(t), null;
        case Sn: {
          var Qe = t.type;
          return Gl(Qe) && Lh(t), Mr(t), null;
        }
        case Ct: {
          kf(t);
          var tt = t.memoizedState;
          if (tt === null)
            return Mr(t), null;
          var qt = (t.flags & Ze) !== Ae, Ut = tt.rendering;
          if (Ut === null)
            if (qt)
              jp(tt, !1);
            else {
              var $n = t_() && (e === null || (e.flags & Ze) === Ae);
              if (!$n)
                for (var At = t.child; At !== null; ) {
                  var Fn = Jh(At);
                  if (Fn !== null) {
                    qt = !0, t.flags |= Ze, jp(tt, !1);
                    var na = Fn.updateQueue;
                    return na !== null && (t.updateQueue = na, t.flags |= we), t.subtreeFlags = Ae, $w(t, a), $o(t, kg(ol.current, wp)), t.child;
                  }
                  At = At.sibling;
                }
              tt.tail !== null && An() > o1() && (t.flags |= Ze, qt = !0, jp(tt, !1), t.lanes = Vv);
            }
          else {
            if (!qt) {
              var Fr = Jh(Ut);
              if (Fr !== null) {
                t.flags |= Ze, qt = !0;
                var fi = Fr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= we), jp(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !Ut.alternate && !Lr())
                  return Mr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              An() * 2 - tt.renderingStartTime > o1() && a !== Sa && (t.flags |= Ze, qt = !0, jp(tt, !1), t.lanes = Vv);
            }
            if (tt.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var xa = tt.last;
              xa !== null ? xa.sibling = Ut : t.child = Ut, tt.last = Ut;
            }
          }
          if (tt.tail !== null) {
            var _a = tt.tail;
            tt.rendering = _a, tt.tail = _a.sibling, tt.renderingStartTime = An(), _a.sibling = null;
            var ra = ol.current;
            return qt ? ra = kg(ra, wp) : ra = Df(ra), $o(t, ra), _a;
          }
          return Mr(t), null;
        }
        case an:
          break;
        case Ie:
        case lt: {
          qS(t);
          var Wu = t.memoizedState, Bf = Wu !== null;
          if (e !== null) {
            var Jp = e.memoizedState, nu = Jp !== null;
            nu !== Bf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !k && (t.flags |= kl);
          }
          return !Bf || (t.mode & Me) === ie ? Mr(t) : Zr(tu, Sa) && (Mr(t), t.subtreeFlags & (Zt | we) && (t.flags |= kl)), null;
        }
        case _t:
          return null;
        case ut:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jb(e, t, a) {
      switch (ag(t), t.tag) {
        case ue: {
          var i = t.type;
          Gl(i) && Lh(t);
          var u = t.flags;
          return u & tr ? (t.flags = u & ~tr | Ze, (t.mode & Xe) !== ie && nS(t), t) : null;
        }
        case ne: {
          t.stateNode, _f(t), eg(t), Lg();
          var s = t.flags;
          return (s & tr) !== Ae && (s & Ze) === Ae ? (t.flags = s & ~tr | Ze, t) : null;
        }
        case Z:
          return _g(t), null;
        case Te: {
          kf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Tf();
          }
          var p = t.flags;
          return p & tr ? (t.flags = p & ~tr | Ze, (t.mode & Xe) !== ie && nS(t), t) : null;
        }
        case Ct:
          return kf(t), null;
        case pe:
          return _f(t), null;
        case et:
          var v = t.type._context;
          return gg(v, t), null;
        case Ie:
        case lt:
          return qS(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function BC(e, t, a) {
      switch (ag(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Lh(t);
          break;
        }
        case ne: {
          t.stateNode, _f(t), eg(t), Lg();
          break;
        }
        case Z: {
          _g(t);
          break;
        }
        case pe:
          _f(t);
          break;
        case Te:
          kf(t);
          break;
        case Ct:
          kf(t);
          break;
        case et:
          var u = t.type._context;
          gg(u, t);
          break;
        case Ie:
        case lt:
          qS(t);
          break;
      }
    }
    var $C = null;
    $C = /* @__PURE__ */ new Set();
    var Tm = !1, zr = !1, ex = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Uf = null, Af = null;
    function tx(e) {
      ni(null, function() {
        throw e;
      }), qi();
    }
    var nx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Xe)
        try {
          Jl(), t.componentWillUnmount();
        } finally {
          Zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function IC(e, t) {
      try {
        Wo(ir, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function MS(e, t, a) {
      try {
        nx(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function rx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function YC(e, t) {
      try {
        QC(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (yt && dt && e.mode & Xe)
              try {
                Jl(), i = a(null);
              } finally {
                Zl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function wm(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var WC = !1;
    function ax(e, t) {
      mT(e.containerInfo), Ee = t, ix();
      var a = WC;
      return WC = !1, a;
    }
    function ix() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & Qr) !== Ae && t !== null ? (t.return = e, Ee = t) : lx();
      }
    }
    function lx() {
      for (; Ee !== null; ) {
        var e = Ee;
        mn(e);
        try {
          ux(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function ux(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Un) !== Ae) {
        switch (mn(e), e.tag) {
          case ke:
          case $e:
          case qe:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !dc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : cl(e.type, i), u);
              {
                var p = $C;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ne: {
            {
              var v = e.stateNode;
              PT(v.containerInfo);
            }
            break;
          }
          case Z:
          case ve:
          case pe:
          case Sn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        ln();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== Ia ? jc(t) : (e & ir) !== Ia && fo(t), (e & ql) !== Ia && Kp(!0), wm(t, a, p), (e & ql) !== Ia && Kp(!1), (e & Nr) !== Ia ? Fv() : (e & ir) !== Ia && po());
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
            (e & Nr) !== Ia ? Ac(t) : (e & ir) !== Ia && xs(t);
            var f = s.create;
            (e & ql) !== Ia && Kp(!0), s.destroy = f(), (e & ql) !== Ia && Kp(!1), (e & Nr) !== Ia ? jv() : (e & ir) !== Ia && Si();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ir) !== Ae ? v = "useLayoutEffect" : (s.tag & ql) !== Ae ? v = "useInsertionEffect" : v = "useEffect";
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
    function ox(e, t) {
      if ((t.flags & we) !== Ae)
        switch (t.tag) {
          case Nt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = oC(), p = t.alternate === null ? "mount" : "update";
            uC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ne:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Nt:
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
    function sx(e, t, a, i) {
      if ((a.flags & ai) !== Ae)
        switch (a.tag) {
          case ke:
          case $e:
          case qe: {
            if (!zr)
              if (a.mode & Xe)
                try {
                  Jl(), Wo(ir | ar, a);
                } finally {
                  Zl(a);
                }
              else
                Wo(ir | ar, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & we && !zr)
              if (t === null)
                if (a.type === a.elementType && !dc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Xe)
                  try {
                    Jl(), u.componentDidMount();
                  } finally {
                    Zl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : cl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !dc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Xe)
                  try {
                    Jl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Zl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !dc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), NE(a, p, u));
            break;
          }
          case ne: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    y = a.child.stateNode;
                    break;
                  case ue:
                    y = a.child.stateNode;
                    break;
                }
              NE(a, v, y);
            }
            break;
          }
          case Z: {
            var g = a.stateNode;
            if (t === null && a.flags & we) {
              var D = a.type, x = a.memoizedProps;
              _T(g, D, x);
            }
            break;
          }
          case ve:
            break;
          case pe:
            break;
          case Nt: {
            {
              var A = a.memoizedProps, F = A.onCommit, V = A.onRender, se = a.stateNode.effectDuration, je = oC(), De = t === null ? "mount" : "update";
              uC() && (De = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, De, a.actualDuration, a.treeBaseDuration, a.actualStartTime, je);
              {
                typeof F == "function" && F(a.memoizedProps.id, De, se, je), l_(a);
                var bt = a.return;
                e: for (; bt !== null; ) {
                  switch (bt.tag) {
                    case ne:
                      var mt = bt.stateNode;
                      mt.effectDuration += se;
                      break e;
                    case Nt:
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
          case Te: {
            yx(e, a);
            break;
          }
          case Ct:
          case Sn:
          case an:
          case Ie:
          case lt:
          case ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      zr || a.flags & pa && QC(a);
    }
    function cx(e) {
      switch (e.tag) {
        case ke:
        case $e:
        case qe: {
          if (e.mode & Xe)
            try {
              Jl(), IC(e, e.return);
            } finally {
              Zl(e);
            }
          else
            IC(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && rx(e, e.return, t), YC(e, e.return);
          break;
        }
        case Z: {
          YC(e, e.return);
          break;
        }
      }
    }
    function fx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? jT(u) : HT(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? FT(s) : VT(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Ie || i.tag === lt) && i.memoizedState !== null && i !== e)) {
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
    function QC(e) {
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
    function dx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function GC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, GC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && gw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function px(e) {
      for (var t = e.return; t !== null; ) {
        if (qC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function qC(e) {
      return e.tag === Z || e.tag === ne || e.tag === pe;
    }
    function KC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || qC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== ve && t.tag !== en; ) {
          if (t.flags & Zt || t.child === null || t.tag === pe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Zt))
          return t.stateNode;
      }
    }
    function vx(e) {
      var t = px(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & Ua && (Z0(a), t.flags &= ~Ua);
          var i = KC(e);
          US(e, i, a);
          break;
        }
        case ne:
        case pe: {
          var u = t.stateNode.containerInfo, s = KC(e);
          zS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function zS(e, t, a) {
      var i = e.tag, u = i === Z || i === ve;
      if (u) {
        var s = e.stateNode;
        t ? MT(a, s, t) : LT(a, s);
      } else if (i !== pe) {
        var f = e.child;
        if (f !== null) {
          zS(f, t, a);
          for (var p = f.sibling; p !== null; )
            zS(p, t, a), p = p.sibling;
        }
      }
    }
    function US(e, t, a) {
      var i = e.tag, u = i === Z || i === ve;
      if (u) {
        var s = e.stateNode;
        t ? NT(a, s, t) : OT(a, s);
      } else if (i !== pe) {
        var f = e.child;
        if (f !== null) {
          US(f, t, a);
          for (var p = f.sibling; p !== null; )
            US(p, t, a), p = p.sibling;
        }
      }
    }
    var Ur = null, pl = !1;
    function hx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Z: {
              Ur = i.stateNode, pl = !1;
              break e;
            }
            case ne: {
              Ur = i.stateNode.containerInfo, pl = !0;
              break e;
            }
            case pe: {
              Ur = i.stateNode.containerInfo, pl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        XC(e, t, a), Ur = null, pl = !1;
      }
      dx(a);
    }
    function Qo(e, t, a) {
      for (var i = a.child; i !== null; )
        XC(e, t, i), i = i.sibling;
    }
    function XC(e, t, a) {
      switch (yd(a), a.tag) {
        case Z:
          zr || jf(a, t);
        case ve: {
          {
            var i = Ur, u = pl;
            Ur = null, Qo(e, t, a), Ur = i, pl = u, Ur !== null && (pl ? UT(Ur, a.stateNode) : zT(Ur, a.stateNode));
          }
          return;
        }
        case en: {
          Ur !== null && (pl ? AT(Ur, a.stateNode) : Wy(Ur, a.stateNode));
          return;
        }
        case pe: {
          {
            var s = Ur, f = pl;
            Ur = a.stateNode.containerInfo, pl = !0, Qo(e, t, a), Ur = s, pl = f;
          }
          return;
        }
        case ke:
        case $e:
        case pt:
        case qe: {
          if (!zr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var D = g, x = D.destroy, A = D.tag;
                  x !== void 0 && ((A & ql) !== Ia ? wm(a, t, x) : (A & ir) !== Ia && (fo(a), a.mode & Xe ? (Jl(), wm(a, t, x), Zl(a)) : wm(a, t, x), po())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Qo(e, t, a);
          return;
        }
        case ue: {
          if (!zr) {
            jf(a, t);
            var F = a.stateNode;
            typeof F.componentWillUnmount == "function" && MS(a, t, F);
          }
          Qo(e, t, a);
          return;
        }
        case an: {
          Qo(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & Me
          ) {
            var V = zr;
            zr = V || a.memoizedState !== null, Qo(e, t, a), zr = V;
          } else
            Qo(e, t, a);
          break;
        }
        default: {
          Qo(e, t, a);
          return;
        }
      }
    }
    function mx(e) {
      e.memoizedState;
    }
    function yx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && tw(s);
          }
        }
      }
    }
    function ZC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ex()), t.forEach(function(i) {
          var u = p_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ma)
              if (Uf !== null && Af !== null)
                qp(Af, Uf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function gx(e, t, a) {
      Uf = a, Af = e, mn(t), JC(t, e), mn(t), Uf = null, Af = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            hx(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = ls();
      if (t.subtreeFlags & Gr)
        for (var p = t.child; p !== null; )
          mn(p), JC(p, e), p = p.sibling;
      mn(f);
    }
    function JC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ke:
        case $e:
        case pt:
        case qe: {
          if (vl(t, e), eu(e), u & we) {
            try {
              dl(ql | ar, e, e.return), Wo(ql | ar, e);
            } catch (Qe) {
              cn(e, e.return, Qe);
            }
            if (e.mode & Xe) {
              try {
                Jl(), dl(ir | ar, e, e.return);
              } catch (Qe) {
                cn(e, e.return, Qe);
              }
              Zl(e);
            } else
              try {
                dl(ir | ar, e, e.return);
              } catch (Qe) {
                cn(e, e.return, Qe);
              }
          }
          return;
        }
        case ue: {
          vl(t, e), eu(e), u & pa && i !== null && jf(i, i.return);
          return;
        }
        case Z: {
          vl(t, e), eu(e), u & pa && i !== null && jf(i, i.return);
          {
            if (e.flags & Ua) {
              var s = e.stateNode;
              try {
                Z0(s);
              } catch (Qe) {
                cn(e, e.return, Qe);
              }
            }
            if (u & we) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    DT(f, g, y, v, p, e);
                  } catch (Qe) {
                    cn(e, e.return, Qe);
                  }
              }
            }
          }
          return;
        }
        case ve: {
          if (vl(t, e), eu(e), u & we) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, x = e.memoizedProps, A = i !== null ? i.memoizedProps : x;
            try {
              kT(D, A, x);
            } catch (Qe) {
              cn(e, e.return, Qe);
            }
          }
          return;
        }
        case ne: {
          if (vl(t, e), eu(e), u & we && i !== null) {
            var F = i.memoizedState;
            if (F.isDehydrated)
              try {
                ew(t.containerInfo);
              } catch (Qe) {
                cn(e, e.return, Qe);
              }
          }
          return;
        }
        case pe: {
          vl(t, e), eu(e);
          return;
        }
        case Te: {
          vl(t, e), eu(e);
          var V = e.child;
          if (V.flags & kl) {
            var se = V.stateNode, je = V.memoizedState, De = je !== null;
            if (se.isHidden = De, De) {
              var bt = V.alternate !== null && V.alternate.memoizedState !== null;
              bt || Zx();
            }
          }
          if (u & we) {
            try {
              mx(e);
            } catch (Qe) {
              cn(e, e.return, Qe);
            }
            ZC(e);
          }
          return;
        }
        case Ie: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Me
          ) {
            var L = zr;
            zr = L || mt, vl(t, e), zr = L;
          } else
            vl(t, e);
          if (eu(e), u & kl) {
            var P = e.stateNode, N = e.memoizedState, X = N !== null, ye = e;
            if (P.isHidden = X, X && !mt && (ye.mode & Me) !== ie) {
              Ee = ye;
              for (var ce = ye.child; ce !== null; )
                Ee = ce, Ex(ce), ce = ce.sibling;
            }
            fx(ye, X);
          }
          return;
        }
        case Ct: {
          vl(t, e), eu(e), u & we && ZC(e);
          return;
        }
        case an:
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
          vx(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~Zt;
      }
      t & yi && (e.flags &= ~yi);
    }
    function Sx(e, t, a) {
      Uf = a, Af = t, Ee = e, e1(e, t, a), Uf = null, Af = null;
    }
    function e1(e, t, a) {
      for (var i = (e.mode & Me) !== ie; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Ie && i) {
          var f = u.memoizedState !== null, p = f || Tm;
          if (p) {
            AS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || zr, D = Tm, x = zr;
            Tm = p, zr = g, zr && !x && (Ee = u, Cx(u));
            for (var A = s; A !== null; )
              Ee = A, e1(
                A,
                // New root; bubble back up to here and stop.
                t,
                a
              ), A = A.sibling;
            Ee = u, Tm = D, zr = x, AS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ai) !== Ae && s !== null ? (s.return = u, Ee = s) : AS(e, t, a);
      }
    }
    function AS(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & ai) !== Ae) {
          var u = i.alternate;
          mn(i);
          try {
            sx(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          ln();
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
    function Ex(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case ke:
          case $e:
          case pt:
          case qe: {
            if (t.mode & Xe)
              try {
                Jl(), dl(ir, t, t.return);
              } finally {
                Zl(t);
              }
            else
              dl(ir, t, t.return);
            break;
          }
          case ue: {
            jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && MS(t, t.return, i);
            break;
          }
          case Z: {
            jf(t, t.return);
            break;
          }
          case Ie: {
            var u = t.memoizedState !== null;
            if (u) {
              t1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : t1(e);
      }
    }
    function t1(e) {
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
    function Cx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Ie) {
          var i = t.memoizedState !== null;
          if (i) {
            n1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : n1(e);
      }
    }
    function n1(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        mn(t);
        try {
          cx(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (ln(), t === e) {
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
    function Rx(e, t, a, i) {
      Ee = t, Tx(t, e, a, i);
    }
    function Tx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & qr) !== Ae && s !== null ? (s.return = u, Ee = s) : wx(e, t, a, i);
      }
    }
    function wx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & Wr) !== Ae) {
          mn(u);
          try {
            bx(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          ln();
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
    function bx(e, t, a, i) {
      switch (t.tag) {
        case ke:
        case $e:
        case qe: {
          if (t.mode & Xe) {
            tS();
            try {
              Wo(Nr | ar, t);
            } finally {
              eS(t);
            }
          } else
            Wo(Nr | ar, t);
          break;
        }
      }
    }
    function xx(e) {
      Ee = e, _x();
    }
    function _x() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & zt) !== Ae) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, Ox(u, e);
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
        (e.subtreeFlags & qr) !== Ae && t !== null ? (t.return = e, Ee = t) : Dx();
      }
    }
    function Dx() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & Wr) !== Ae && (mn(e), kx(e), ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function kx(e) {
      switch (e.tag) {
        case ke:
        case $e:
        case qe: {
          e.mode & Xe ? (tS(), dl(Nr | ar, e, e.return), eS(e)) : dl(Nr | ar, e, e.return);
          break;
        }
      }
    }
    function Ox(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        mn(a), Nx(a, t), ln();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : Lx(e);
      }
    }
    function Lx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (GC(t), t === e) {
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
    function Nx(e, t) {
      switch (e.tag) {
        case ke:
        case $e:
        case qe: {
          e.mode & Xe ? (tS(), dl(Nr, e, t), eS(e)) : dl(Nr, e, t);
          break;
        }
      }
    }
    function Mx(e) {
      switch (e.tag) {
        case ke:
        case $e:
        case qe: {
          try {
            Wo(ir | ar, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function zx(e) {
      switch (e.tag) {
        case ke:
        case $e:
        case qe: {
          try {
            Wo(Nr | ar, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ux(e) {
      switch (e.tag) {
        case ke:
        case $e:
        case qe: {
          try {
            dl(ir | ar, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && MS(e, e.return, t);
          break;
        }
      }
    }
    function Ax(e) {
      switch (e.tag) {
        case ke:
        case $e:
        case qe:
          try {
            dl(Nr | ar, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Fp = Symbol.for;
      Fp("selector.component"), Fp("selector.has_pseudo_class"), Fp("selector.role"), Fp("selector.test_id"), Fp("selector.text");
    }
    var jx = [];
    function Fx() {
      jx.forEach(function(e) {
        return e();
      });
    }
    var Hx = te.ReactCurrentActQueue;
    function Vx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function r1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Hx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Px = Math.ceil, jS = te.ReactCurrentDispatcher, FS = te.ReactCurrentOwner, Ar = te.ReactCurrentBatchConfig, hl = te.ReactCurrentActQueue, or = (
      /*             */
      0
    ), a1 = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), Bu = 0, Hp = 1, pc = 2, bm = 3, Vp = 4, i1 = 5, HS = 6, wt = or, wa = null, Ln = null, sr = Y, tu = Y, VS = jo(Y), cr = Bu, Pp = null, xm = Y, Bp = Y, _m = Y, $p = null, Ya = null, PS = 0, l1 = 500, u1 = 1 / 0, Bx = 500, $u = null;
    function Ip() {
      u1 = An() + Bx;
    }
    function o1() {
      return u1;
    }
    var Dm = !1, BS = null, Ff = null, vc = !1, Go = null, Yp = Y, $S = [], IS = null, $x = 50, Wp = 0, YS = null, WS = !1, km = !1, Ix = 50, Hf = 0, Om = null, Qp = nn, Lm = Y, s1 = !1;
    function Nm() {
      return wa;
    }
    function ba() {
      return (wt & (jr | Ni)) !== or ? An() : (Qp !== nn || (Qp = An()), Qp);
    }
    function qo(e) {
      var t = e.mode;
      if ((t & Me) === ie)
        return xe;
      if ((wt & jr) !== or && sr !== Y)
        return wo(sr);
      var a = Hw() !== Fw;
      if (a) {
        if (Ar.transition !== null) {
          var i = Ar.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Lm === Jt && (Lm = wr()), Lm;
      }
      var u = xr();
      if (u !== Jt)
        return u;
      var s = TT();
      return s;
    }
    function Yx(e) {
      var t = e.mode;
      return (t & Me) === ie ? xe : br();
    }
    function fr(e, t, a, i) {
      h_(), s1 && S("useInsertionEffect must not schedule updates."), WS && (km = !0), xo(e, a, i), (wt & jr) !== Y && e === wa ? g_(t) : (ma && Ad(e, t, a), S_(t), e === wa && ((wt & jr) === or && (Bp = at(Bp, a)), cr === Vp && Ko(e, sr)), Wa(e, i), a === xe && wt === or && (t.mode & Me) === ie && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && (Ip(), sE()));
    }
    function Wx(e, t, a) {
      var i = e.current;
      i.lanes = t, xo(e, t, a), Wa(e, a);
    }
    function Qx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (wt & jr) !== or
      );
    }
    function Wa(e, t) {
      var a = e.callbackNode;
      Dd(e, t);
      var i = Ns(e, e === wa ? sr : Y);
      if (i === Y) {
        a !== null && b1(a), e.callbackNode = null, e.callbackPriority = Jt;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== JS)) {
        a == null && s !== xe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && b1(a);
      var f;
      if (u === xe)
        e.tag === Fo ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), Cw(d1.bind(null, e))) : oE(d1.bind(null, e)), hl.current !== null ? hl.current.push(Ho) : bT(function() {
          (wt & (jr | Ni)) === or && Ho();
        }), f = null;
      else {
        var p;
        switch (Qv(i)) {
          case Ea:
            p = Ml;
            break;
          case Ti:
            p = so;
            break;
          case ui:
            p = zl;
            break;
          case Fs:
            p = Ul;
            break;
          default:
            p = zl;
            break;
        }
        f = e0(p, c1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function c1(e, t) {
      if (fb(), Qp = nn, Lm = Y, (wt & (jr | Ni)) !== or)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ns(e, e === wa ? sr : Y);
      if (u === Y)
        return null;
      var s = !zs(e, u) && !Yv(e, u) && !t, f = s ? r_(e, u) : zm(e, u);
      if (f !== Bu) {
        if (f === pc) {
          var p = Ms(e);
          p !== Y && (u = p, f = QS(e, p));
        }
        if (f === Hp) {
          var v = Pp;
          throw hc(e, Y), Ko(e, u), Wa(e, An()), v;
        }
        if (f === HS)
          Ko(e, u);
        else {
          var y = !zs(e, u), g = e.current.alternate;
          if (y && !qx(g)) {
            if (f = zm(e, u), f === pc) {
              var D = Ms(e);
              D !== Y && (u = D, f = QS(e, D));
            }
            if (f === Hp) {
              var x = Pp;
              throw hc(e, Y), Ko(e, u), Wa(e, An()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Gx(e, f, u);
        }
      }
      return Wa(e, An()), e.callbackNode === a ? c1.bind(null, e) : null;
    }
    function QS(e, t) {
      var a = $p;
      if (me(e)) {
        var i = hc(e, t);
        i.flags |= Tr, vw(e.containerInfo);
      }
      var u = zm(e, t);
      if (u !== pc) {
        var s = Ya;
        Ya = a, s !== null && f1(s);
      }
      return u;
    }
    function f1(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Gx(e, t, a) {
      switch (t) {
        case Bu:
        case Hp:
          throw new Error("Root did not complete. This is a bug in React.");
        case pc: {
          mc(e, Ya, $u);
          break;
        }
        case bm: {
          if (Ko(e, a), Ld(a) && // do not delay if we're inside an act() scope
          !x1()) {
            var i = PS + l1 - An();
            if (i > 10) {
              var u = Ns(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!Vl(s, a)) {
                ba(), As(e, s);
                break;
              }
              e.timeoutHandle = Iy(mc.bind(null, e, Ya, $u), i);
              break;
            }
          }
          mc(e, Ya, $u);
          break;
        }
        case Vp: {
          if (Ko(e, a), Iv(a))
            break;
          if (!x1()) {
            var f = Pv(e, a), p = f, v = An() - p, y = v_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Iy(mc.bind(null, e, Ya, $u), y);
              break;
            }
          }
          mc(e, Ya, $u);
          break;
        }
        case i1: {
          mc(e, Ya, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function qx(e) {
      for (var t = e; ; ) {
        if (t.flags & mu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!_e(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mu && v !== null) {
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
    function Ko(e, t) {
      t = bo(t, _m), t = bo(t, Bp), zd(e, t);
    }
    function d1(e) {
      if (db(), (wt & (jr | Ni)) !== or)
        throw new Error("Should not already be working.");
      Yu();
      var t = Ns(e, Y);
      if (!Zr(t, xe))
        return Wa(e, An()), null;
      var a = zm(e, t);
      if (e.tag !== Fo && a === pc) {
        var i = Ms(e);
        i !== Y && (t = i, a = QS(e, i));
      }
      if (a === Hp) {
        var u = Pp;
        throw hc(e, Y), Ko(e, t), Wa(e, An()), u;
      }
      if (a === HS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, mc(e, Ya, $u), Wa(e, An()), null;
    }
    function Kx(e, t) {
      t !== Y && (Jc(e, at(t, xe)), Wa(e, An()), (wt & (jr | Ni)) === or && (Ip(), Ho()));
    }
    function GS(e, t) {
      var a = wt;
      wt |= a1;
      try {
        return e(t);
      } finally {
        wt = a, wt === or && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && (Ip(), sE());
      }
    }
    function Xx(e, t, a, i, u) {
      var s = xr(), f = Ar.transition;
      try {
        return Ar.transition = null, kt(Ea), e(t, a, i, u);
      } finally {
        kt(s), Ar.transition = f, wt === or && Ip();
      }
    }
    function Iu(e) {
      Go !== null && Go.tag === Fo && (wt & (jr | Ni)) === or && Yu();
      var t = wt;
      wt |= a1;
      var a = Ar.transition, i = xr();
      try {
        return Ar.transition = null, kt(Ea), e ? e() : void 0;
      } finally {
        kt(i), Ar.transition = a, wt = t, (wt & (jr | Ni)) === or && Ho();
      }
    }
    function p1() {
      return (wt & (jr | Ni)) !== or;
    }
    function Mm(e, t) {
      ea(VS, tu, e), tu = at(tu, t);
    }
    function qS(e) {
      tu = VS.current, Jr(VS, e);
    }
    function hc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Yy && (e.timeoutHandle = Yy, wT(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var u = i.alternate;
          BC(u, i), i = i.return;
        }
      wa = e;
      var s = yc(e.current, null);
      return Ln = s, sr = tu = t, cr = Bu, Pp = null, xm = Y, Bp = Y, _m = Y, $p = null, Ya = null, Ww(), ul.discardPendingWarnings(), s;
    }
    function v1(e, t) {
      do {
        var a = Ln;
        try {
          if ($h(), FE(), ln(), FS.current = null, a === null || a.return === null) {
            cr = Hp, Pp = t, Ln = null;
            return;
          }
          if (yt && a.mode & Xe && gm(a, !0), ot)
            if (ga(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ed(a, i, sr);
            } else
              Eu(a, t, sr);
          Cb(e, a.return, a, t, sr), g1(a);
        } catch (u) {
          t = u, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function h1() {
      var e = jS.current;
      return jS.current = pm, e === null ? pm : e;
    }
    function m1(e) {
      jS.current = e;
    }
    function Zx() {
      PS = An();
    }
    function Gp(e) {
      xm = at(e, xm);
    }
    function Jx() {
      cr === Bu && (cr = bm);
    }
    function KS() {
      (cr === Bu || cr === bm || cr === pc) && (cr = Vp), wa !== null && (Od(xm) || Od(Bp)) && Ko(wa, sr);
    }
    function e_(e) {
      cr !== Vp && (cr = pc), $p === null ? $p = [e] : $p.push(e);
    }
    function t_() {
      return cr === Bu;
    }
    function zm(e, t) {
      var a = wt;
      wt |= jr;
      var i = h1();
      if (wa !== e || sr !== t) {
        if (ma) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (qp(e, sr), u.clear()), js(e, t);
        }
        $u = Ri(), hc(e, t);
      }
      _s(t);
      do
        try {
          n_();
          break;
        } catch (s) {
          v1(e, s);
        }
      while (!0);
      if ($h(), wt = a, m1(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Fc(), wa = null, sr = Y, cr;
    }
    function n_() {
      for (; Ln !== null; )
        y1(Ln);
    }
    function r_(e, t) {
      var a = wt;
      wt |= jr;
      var i = h1();
      if (wa !== e || sr !== t) {
        if (ma) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (qp(e, sr), u.clear()), js(e, t);
        }
        $u = Ri(), Ip(), hc(e, t);
      }
      _s(t);
      do
        try {
          a_();
          break;
        } catch (s) {
          v1(e, s);
        }
      while (!0);
      return $h(), m1(i), wt = a, Ln !== null ? (Rd(), Bu) : (Fc(), wa = null, sr = Y, cr);
    }
    function a_() {
      for (; Ln !== null && !zv(); )
        y1(Ln);
    }
    function y1(e) {
      var t = e.alternate;
      mn(e);
      var a;
      (e.mode & Xe) !== ie ? (Jg(e), a = XS(t, e, tu), gm(e, !0)) : a = XS(t, e, tu), ln(), e.memoizedProps = e.pendingProps, a === null ? g1(e) : Ln = a, FS.current = null;
    }
    function g1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ol) === Ae) {
          mn(t);
          var u = void 0;
          if ((t.mode & Xe) === ie ? u = PC(a, t, tu) : (Jg(t), u = PC(a, t, tu), gm(t, !1)), ln(), u !== null) {
            Ln = u;
            return;
          }
        } else {
          var s = Jb(a, t);
          if (s !== null) {
            s.flags &= Ki, Ln = s;
            return;
          }
          if ((t.mode & Xe) !== ie) {
            gm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ol, i.subtreeFlags = Ae, i.deletions = null;
          else {
            cr = HS, Ln = null;
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
      cr === Bu && (cr = i1);
    }
    function mc(e, t, a) {
      var i = xr(), u = Ar.transition;
      try {
        Ar.transition = null, kt(Ea), i_(e, t, a, i);
      } finally {
        Ar.transition = u, kt(i);
      }
      return null;
    }
    function i_(e, t, a, i) {
      do
        Yu();
      while (Go !== null);
      if (m_(), (wt & (jr | Ni)) !== or)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (gd(s), u === null)
        return Sd(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Jt;
      var f = at(u.lanes, u.childLanes);
      py(e, f), e === wa && (wa = null, Ln = null, sr = Y), ((u.subtreeFlags & qr) !== Ae || (u.flags & qr) !== Ae) && (vc || (vc = !0, IS = a, e0(zl, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Gr | ai | qr)) !== Ae, v = (u.flags & (Qr | Gr | ai | qr)) !== Ae;
      if (p || v) {
        var y = Ar.transition;
        Ar.transition = null;
        var g = xr();
        kt(Ea);
        var D = wt;
        wt |= Ni, FS.current = null, ax(e, u), sC(), gx(e, u, s), yT(e.containerInfo), e.current = u, vo(s), Sx(u, e, s), Hv(), oo(), wt = D, kt(g), Ar.transition = y;
      } else
        e.current = u, sC();
      var x = vc;
      if (vc ? (vc = !1, Go = e, Yp = s) : (Hf = 0, Om = null), f = e.pendingLanes, f === Y && (Ff = null), x || R1(e.current, !1), Va(u.stateNode, i), ma && e.memoizedUpdaters.clear(), Fx(), Wa(e, An()), t !== null)
        for (var A = e.onRecoverableError, F = 0; F < t.length; F++) {
          var V = t[F], se = V.stack, je = V.digest;
          A(V.value, {
            componentStack: se,
            digest: je
          });
        }
      if (Dm) {
        Dm = !1;
        var De = BS;
        throw BS = null, De;
      }
      return Zr(Yp, xe) && e.tag !== Fo && Yu(), f = e.pendingLanes, Zr(f, xe) ? (cb(), e === YS ? Wp++ : (Wp = 0, YS = e)) : Wp = 0, Ho(), Sd(), null;
    }
    function Yu() {
      if (Go !== null) {
        var e = Qv(Yp), t = ef(ui, e), a = Ar.transition, i = xr();
        try {
          return Ar.transition = null, kt(t), u_();
        } finally {
          kt(i), Ar.transition = a;
        }
      }
      return !1;
    }
    function l_(e) {
      $S.push(e), vc || (vc = !0, e0(zl, function() {
        return Yu(), null;
      }));
    }
    function u_() {
      if (Go === null)
        return !1;
      var e = IS;
      IS = null;
      var t = Go, a = Yp;
      if (Go = null, Yp = Y, (wt & (jr | Ni)) !== or)
        throw new Error("Cannot flush passive effects while already rendering.");
      WS = !0, km = !1, Cd(a);
      var i = wt;
      wt |= Ni, xx(t.current), Rx(t, t.current, a, e);
      {
        var u = $S;
        $S = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          ox(t, f);
        }
      }
      yn(), R1(t.current, !0), wt = i, Ho(), km ? t === Om ? Hf++ : (Hf = 0, Om = t) : Hf = 0, WS = !1, km = !1, Su(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function S1(e) {
      return Ff !== null && Ff.has(e);
    }
    function o_(e) {
      Ff === null ? Ff = /* @__PURE__ */ new Set([e]) : Ff.add(e);
    }
    function s_(e) {
      Dm || (Dm = !0, BS = e);
    }
    var c_ = s_;
    function E1(e, t, a) {
      var i = fc(a, t), u = yC(e, i, xe), s = Po(e, u, xe), f = ba();
      s !== null && (xo(s, xe, f), Wa(s, f));
    }
    function cn(e, t, a) {
      if (tx(a), Kp(!1), e.tag === ne) {
        E1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ne) {
          E1(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !S1(s)) {
            var f = fc(a, e), p = yS(i, f, xe), v = Po(i, p, xe), y = ba();
            v !== null && (xo(v, xe, y), Wa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function f_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ba();
      As(e, a), E_(e), wa === e && Vl(sr, a) && (cr === Vp || cr === bm && Ld(sr) && An() - PS < l1 ? hc(e, Y) : _m = at(_m, a)), Wa(e, u);
    }
    function C1(e, t) {
      t === Jt && (t = Yx(e));
      var a = ba(), i = $a(e, t);
      i !== null && (xo(i, t, a), Wa(i, a));
    }
    function d_(e) {
      var t = e.memoizedState, a = Jt;
      t !== null && (a = t.retryLane), C1(e, a);
    }
    function p_(e, t) {
      var a = Jt, i;
      switch (e.tag) {
        case Te:
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
      i !== null && i.delete(t), C1(e, a);
    }
    function v_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Px(e / 1960) * 1960;
    }
    function h_() {
      if (Wp > $x)
        throw Wp = 0, YS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hf > Ix && (Hf = 0, Om = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function m_() {
      ul.flushLegacyContextWarning(), ul.flushPendingUnsafeLifecycleWarnings();
    }
    function R1(e, t) {
      mn(e), Um(e, ja, Ux), t && Um(e, yu, Ax), Um(e, ja, Mx), t && Um(e, yu, zx), ln();
    }
    function Um(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ae ? i = i.child : ((i.flags & t) !== Ae && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Am = null;
    function T1(e) {
      {
        if ((wt & jr) !== or || !(e.mode & Me))
          return;
        var t = e.tag;
        if (t !== Ne && t !== ne && t !== ue && t !== ke && t !== $e && t !== pt && t !== qe)
          return;
        var a = Ke(e) || "ReactComponent";
        if (Am !== null) {
          if (Am.has(a))
            return;
          Am.add(a);
        } else
          Am = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          mn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? mn(e) : ln();
        }
      }
    }
    var XS;
    {
      var y_ = null;
      XS = function(e, t, a) {
        var i = L1(y_, t);
        try {
          return AC(e, t, a);
        } catch (s) {
          if (kw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if ($h(), FE(), BC(e, t), L1(t, i), t.mode & Xe && Jg(t), ni(null, AC, null, e, t, a), oy()) {
            var u = qi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var w1 = !1, ZS;
    ZS = /* @__PURE__ */ new Set();
    function g_(e) {
      if ($r && !ub())
        switch (e.tag) {
          case ke:
          case $e:
          case qe: {
            var t = Ln && Ke(Ln) || "Unknown", a = t;
            if (!ZS.has(a)) {
              ZS.add(a);
              var i = Ke(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            w1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), w1 = !0);
            break;
          }
        }
    }
    function qp(e, t) {
      if (ma) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ad(e, i, t);
        });
      }
    }
    var JS = {};
    function e0(e, t) {
      {
        var a = hl.current;
        return a !== null ? (a.push(t), JS) : hd(e, t);
      }
    }
    function b1(e) {
      if (e !== JS)
        return zc(e);
    }
    function x1() {
      return hl.current !== null;
    }
    function S_(e) {
      {
        if (e.mode & Me) {
          if (!r1())
            return;
        } else if (!Vx() || wt !== or || e.tag !== ke && e.tag !== $e && e.tag !== qe)
          return;
        if (hl.current === null) {
          var t = hn;
          try {
            mn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? mn(e) : ln();
          }
        }
      }
    }
    function E_(e) {
      e.tag !== Fo && r1() && hl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Kp(e) {
      s1 = e;
    }
    var Mi = null, Vf = null, C_ = function(e) {
      Mi = e;
    };
    function Pf(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function t0(e) {
      return Pf(e);
    }
    function n0(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Pf(e.render);
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
    function _1(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ke: {
            (typeof i == "function" || s === Fe) && (u = !0);
            break;
          }
          case $e: {
            (s === q || s === Fe) && (u = !0);
            break;
          }
          case pt:
          case qe: {
            (s === Tt || s === Fe) && (u = !0);
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
    function D1(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        Vf === null && (Vf = /* @__PURE__ */ new WeakSet()), Vf.add(e);
      }
    }
    var R_ = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          r0(e.current, i, a);
        });
      }
    }, T_ = function(e, t) {
      {
        if (e.context !== si)
          return;
        Yu(), Iu(function() {
          Xp(t, e, null, null);
        });
      }
    };
    function r0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ke:
          case qe:
          case ue:
            v = p;
            break;
          case $e:
            v = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var D = Mi(v);
          D !== void 0 && (a.has(D) ? g = !0 : t.has(D) && (f === ue ? g = !0 : y = !0));
        }
        if (Vf !== null && (Vf.has(e) || i !== null && Vf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = $a(e, xe);
          x !== null && fr(x, e, xe, nn);
        }
        u !== null && !g && r0(u, t, a), s !== null && r0(s, t, a);
      }
    }
    var w_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return a0(e.current, i, a), a;
      }
    };
    function a0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ke:
          case qe:
          case ue:
            p = f;
            break;
          case $e:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? b_(e, a) : i !== null && a0(i, t, a), u !== null && a0(u, t, a);
      }
    }
    function b_(e, t) {
      {
        var a = x_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case pe:
              t.add(i.stateNode.containerInfo);
              return;
            case ne:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function x_(e, t) {
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
    var i0;
    {
      i0 = !1;
      try {
        var k1 = Object.preventExtensions({});
      } catch {
        i0 = !0;
      }
    }
    function __(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ae, this.subtreeFlags = Ae, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !i0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new __(e, t, a, i);
    };
    function l0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function D_(e) {
      return typeof e == "function" && !l0(e) && e.defaultProps === void 0;
    }
    function k_(e) {
      if (typeof e == "function")
        return l0(e) ? ue : ke;
      if (e != null) {
        var t = e.$$typeof;
        if (t === q)
          return $e;
        if (t === Tt)
          return pt;
      }
      return Ne;
    }
    function yc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ae, a.subtreeFlags = Ae, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ne:
        case ke:
        case qe:
          a.type = Pf(e.type);
          break;
        case ue:
          a.type = t0(e.type);
          break;
        case $e:
          a.type = n0(e.type);
          break;
      }
      return a;
    }
    function O_(e, t) {
      e.flags &= nr | Zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = Ae, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ae, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function L_(e, t, a) {
      var i;
      return e === Mh ? (i = Me, t === !0 && (i |= sn, i |= Kr)) : i = ie, ma && (i |= Xe), ci(ne, null, null, i);
    }
    function u0(e, t, a, i, u, s) {
      var f = Ne, p = e;
      if (typeof e == "function")
        l0(e) ? (f = ue, p = t0(p)) : p = Pf(p);
      else if (typeof e == "string")
        f = Z;
      else
        e: switch (e) {
          case ca:
            return Xo(a.children, u, s, t);
          case Ui:
            f = jt, u |= sn, (u & Me) !== ie && (u |= Kr);
            break;
          case gl:
            return N_(a, u, s, t);
          case Ue:
            return M_(a, u, s, t);
          case vt:
            return z_(a, u, s, t);
          case Kt:
            return O1(a, u, s, t);
          case dn:
          case ct:
          case mr:
          case Vt:
          case Mn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = et;
                  break e;
                case Q:
                  f = xt;
                  break e;
                case q:
                  f = $e, p = n0(p);
                  break e;
                case Tt:
                  f = pt;
                  break e;
                case Fe:
                  f = xn, p = null;
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
    function o0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = u0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Xo(e, t, a, i) {
      var u = ci(Ge, e, i, t);
      return u.lanes = a, u;
    }
    function N_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ci(Nt, e, i, t | Xe);
      return u.elementType = gl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function M_(e, t, a, i) {
      var u = ci(Te, e, i, t);
      return u.elementType = Ue, u.lanes = a, u;
    }
    function z_(e, t, a, i) {
      var u = ci(Ct, e, i, t);
      return u.elementType = vt, u.lanes = a, u;
    }
    function O1(e, t, a, i) {
      var u = ci(Ie, e, i, t);
      u.elementType = Kt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function s0(e, t, a) {
      var i = ci(ve, e, null, t);
      return i.lanes = a, i;
    }
    function U_() {
      var e = ci(Z, null, null, ie);
      return e.elementType = "DELETED", e;
    }
    function A_(e) {
      var t = ci(en, null, null, ie);
      return t.stateNode = e, t;
    }
    function c0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ci(pe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function L1(e, t) {
      return e === null && (e = ci(Ne, null, null, ie)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function j_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Yy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Jt, this.eventTimes = Us(Y), this.expirationTimes = Us(nn), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Us(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Ds; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Mh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Fo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function N1(e, t, a, i, u, s, f, p, v, y) {
      var g = new j_(e, t, a, p, v), D = L_(t, s);
      g.current = D, D.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = x;
      }
      return Tg(D), g;
    }
    var f0 = "18.3.1";
    function F_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return pr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Vr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var d0, p0;
    d0 = !1, p0 = {};
    function M1(e) {
      if (!e)
        return si;
      var t = mi(e), a = Ew(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Gl(i))
          return lE(t, i, a);
      }
      return a;
    }
    function H_(e, t) {
      {
        var a = mi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = dd(a);
        if (u === null)
          return null;
        if (u.mode & sn) {
          var s = Ke(a) || "Component";
          if (!p0[s]) {
            p0[s] = !0;
            var f = hn;
            try {
              mn(u), a.mode & sn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? mn(f) : ln();
            }
          }
        }
        return u.stateNode;
      }
    }
    function z1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return N1(e, t, v, y, a, i, u, s, f);
    }
    function U1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, D = N1(a, i, g, e, u, s, f, p, v);
      D.context = M1(null);
      var x = D.current, A = ba(), F = qo(x), V = Vu(A, F);
      return V.callback = t ?? null, Po(x, V, F), Wx(D, F, A), D;
    }
    function Xp(e, t, a, i) {
      co(t, e);
      var u = t.current, s = ba(), f = qo(u);
      Hc(f);
      var p = M1(a);
      t.context === null ? t.context = p : t.pendingContext = p, $r && hn !== null && !d0 && (d0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(hn) || "Unknown"));
      var v = Vu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Po(u, v, f);
      return y !== null && (fr(y, u, f, s), Gh(y, u, f)), f;
    }
    function jm(e) {
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
    function V_(e) {
      switch (e.tag) {
        case ne: {
          var t = e.stateNode;
          if (me(t)) {
            var a = To(t);
            Kx(t, a);
          }
          break;
        }
        case Te: {
          Iu(function() {
            var u = $a(e, xe);
            if (u !== null) {
              var s = ba();
              fr(u, e, xe, s);
            }
          });
          var i = xe;
          v0(e, i);
          break;
        }
      }
    }
    function A1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function v0(e, t) {
      A1(e, t);
      var a = e.alternate;
      a && A1(a, t);
    }
    function P_(e) {
      if (e.tag === Te) {
        var t = Eo, a = $a(e, t);
        if (a !== null) {
          var i = ba();
          fr(a, e, t, i);
        }
        v0(e, t);
      }
    }
    function B_(e) {
      if (e.tag === Te) {
        var t = qo(e), a = $a(e, t);
        if (a !== null) {
          var i = ba();
          fr(a, e, t, i);
        }
        v0(e, t);
      }
    }
    function j1(e) {
      var t = vd(e);
      return t === null ? null : t.stateNode;
    }
    var F1 = function(e) {
      return null;
    };
    function $_(e) {
      return F1(e);
    }
    var H1 = function(e) {
      return !1;
    };
    function I_(e) {
      return H1(e);
    }
    var V1 = null, P1 = null, B1 = null, $1 = null, I1 = null, Y1 = null, W1 = null, Q1 = null, G1 = null;
    {
      var q1 = function(e, t, a) {
        var i = t[a], u = Dt(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (Dt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = q1(e[i], t, a + 1), u);
      }, K1 = function(e, t) {
        return q1(e, t, 0);
      }, X1 = function(e, t, a, i) {
        var u = t[i], s = Dt(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Dt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = X1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Z1 = function(e, t, a) {
        if (t.length !== a.length) {
          Be("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Be("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return X1(e, t, a, 0);
      }, J1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Dt(e) ? e.slice() : rt({}, e);
        return s[u] = J1(e[u], t, a + 1, i), s;
      }, eR = function(e, t, a) {
        return J1(e, t, 0, a);
      }, h0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      V1 = function(e, t, a, i) {
        var u = h0(e, t);
        if (u !== null) {
          var s = eR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = $a(e, xe);
          f !== null && fr(f, e, xe, nn);
        }
      }, P1 = function(e, t, a) {
        var i = h0(e, t);
        if (i !== null) {
          var u = K1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = $a(e, xe);
          s !== null && fr(s, e, xe, nn);
        }
      }, B1 = function(e, t, a, i) {
        var u = h0(e, t);
        if (u !== null) {
          var s = Z1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = $a(e, xe);
          f !== null && fr(f, e, xe, nn);
        }
      }, $1 = function(e, t, a) {
        e.pendingProps = eR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, xe);
        i !== null && fr(i, e, xe, nn);
      }, I1 = function(e, t) {
        e.pendingProps = K1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, xe);
        a !== null && fr(a, e, xe, nn);
      }, Y1 = function(e, t, a) {
        e.pendingProps = Z1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, xe);
        i !== null && fr(i, e, xe, nn);
      }, W1 = function(e) {
        var t = $a(e, xe);
        t !== null && fr(t, e, xe, nn);
      }, Q1 = function(e) {
        F1 = e;
      }, G1 = function(e) {
        H1 = e;
      };
    }
    function Y_(e) {
      var t = dd(e);
      return t === null ? null : t.stateNode;
    }
    function W_(e) {
      return null;
    }
    function Q_() {
      return hn;
    }
    function G_(e) {
      var t = e.findFiberByHostInstance, a = te.ReactCurrentDispatcher;
      return md({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: V1,
        overrideHookStateDeletePath: P1,
        overrideHookStateRenamePath: B1,
        overrideProps: $1,
        overridePropsDeletePath: I1,
        overridePropsRenamePath: Y1,
        setErrorHandler: Q1,
        setSuspenseHandler: G1,
        scheduleUpdate: W1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Y_,
        findFiberByHostInstance: t || W_,
        // React Refresh
        findHostInstancesForRefresh: w_,
        scheduleRefresh: R_,
        scheduleRoot: T_,
        setRefreshHandler: C_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Q_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: f0
      });
    }
    var tR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function m0(e) {
      this._internalRoot = e;
    }
    Fm.prototype.render = m0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Hm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Cn) {
          var i = j1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Xp(e, t, null, null);
    }, Fm.prototype.unmount = m0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        p1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          Xp(null, e, null, null);
        }), tE(t);
      }
    };
    function q_(e, t) {
      if (!Hm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      nR(e);
      var a = !1, i = !1, u = "", s = tR;
      t != null && (t.hydrate ? Be("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Cr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = z1(e, Mh, null, a, i, u, s);
      xh(f.current, e);
      var p = e.nodeType === Cn ? e.parentNode : e;
      return rp(p), new m0(f);
    }
    function Fm(e) {
      this._internalRoot = e;
    }
    function K_(e) {
      e && tf(e);
    }
    Fm.prototype.unstable_scheduleHydration = K_;
    function X_(e, t, a) {
      if (!Hm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      nR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = tR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = U1(t, null, e, Mh, i, s, f, p, v);
      if (xh(y.current, e), rp(e), u)
        for (var g = 0; g < u.length; g++) {
          var D = u[g];
          tb(y, D);
        }
      return new Fm(y);
    }
    function Hm(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === fa || e.nodeType === qf || !Le));
    }
    function Zp(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === fa || e.nodeType === qf || e.nodeType === Cn && e.nodeValue === " react-mount-point-unstable "));
    }
    function nR(e) {
      e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), vp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Z_ = te.ReactCurrentOwner, rR;
    rR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Cn) {
        var t = j1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = y0(e), u = !!(i && Ao(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function y0(e) {
      return e ? e.nodeType === fa ? e.documentElement : e.firstChild : null;
    }
    function aR() {
    }
    function J_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = jm(f);
            s.call(x);
          };
        }
        var f = U1(
          t,
          i,
          e,
          Fo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          aR
        );
        e._reactRootContainer = f, xh(f.current, e);
        var p = e.nodeType === Cn ? e.parentNode : e;
        return rp(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = jm(g);
            y.call(x);
          };
        }
        var g = z1(
          e,
          Fo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          aR
        );
        e._reactRootContainer = g, xh(g.current, e);
        var D = e.nodeType === Cn ? e.parentNode : e;
        return rp(D), Iu(function() {
          Xp(t, g, a, i);
        }), g;
      }
    }
    function eD(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      rR(a), eD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = J_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = jm(f);
            p.call(v);
          };
        }
        Xp(t, f, e, u);
      }
      return jm(f);
    }
    var iR = !1;
    function tD(e) {
      {
        iR || (iR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Z_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", St(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yr ? e : H_(e, "findDOMNode");
    }
    function nD(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = vp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function rD(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = vp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function aD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !uo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var lR = !1;
    function iD(e) {
      if (lR || (lR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Zp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = vp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = y0(e), i = a && !Ao(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, tE(e);
          });
        }), !0;
      } else {
        {
          var u = y0(e), s = !!(u && Ao(u)), f = e.nodeType === Yr && Zp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    jd(V_), Hs(P_), Hd(B_), qv(xr), Bd(vy), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), rd(uT), Dc(GS, Xx, Iu);
    function lD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hm(t))
        throw new Error("Target container is not a DOM element.");
      return F_(e, t, null, a);
    }
    function uD(e, t, a, i) {
      return aD(e, t, a, i);
    }
    var g0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ao, gf, _h, lo, vu, GS]
    };
    function oD(e, t) {
      return g0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), q_(e, t);
    }
    function sD(e, t, a) {
      return g0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), X_(e, t, a);
    }
    function cD(e) {
      return p1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var fD = G_({
      findFiberByHostInstance: nc,
      bundleType: 1,
      version: f0,
      rendererPackageName: "react-dom"
    });
    if (!fD && En && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var uR = window.location.protocol;
      /^(https?|file):$/.test(uR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (uR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g0, Ga.createPortal = lD, Ga.createRoot = oD, Ga.findDOMNode = tD, Ga.flushSync = cD, Ga.hydrate = nD, Ga.hydrateRoot = sD, Ga.render = rD, Ga.unmountComponentAtNode = iD, Ga.unstable_batchedUpdates = GS, Ga.unstable_renderSubtreeIntoContainer = uD, Ga.version = f0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ga;
}
var CR = {};
function RR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (CR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RR);
    } catch (b) {
      console.error(b);
    }
  }
}
CR.NODE_ENV === "production" ? (RR(), T0.exports = ED()) : T0.exports = CD();
var RD = T0.exports, w0, TD = {}, Bm = RD;
if (TD.NODE_ENV === "production")
  w0 = Bm.createRoot, Bm.hydrateRoot;
else {
  var hR = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  w0 = function(b, M) {
    hR.usingClientEntryPoint = !0;
    try {
      return Bm.createRoot(b, M);
    } finally {
      hR.usingClientEntryPoint = !1;
    }
  };
}
var wD = Object.defineProperty, bD = (b, M, w) => M in b ? wD(b, M, { enumerable: !0, configurable: !0, writable: !0, value: w }) : b[M] = w, $m = (b, M, w) => bD(b, typeof M != "symbol" ? M + "" : M, w);
const xD = {
  stringify: (b) => b ? "true" : "false",
  parse: (b) => /^[ty1-9]/i.test(b)
}, _D = {
  stringify: (b) => b.name,
  parse: (b, M, w) => {
    const te = (() => {
      if (typeof window < "u" && b in window)
        return window[b];
      if (typeof global < "u" && b in global)
        return global[b];
    })();
    return typeof te == "function" ? te.bind(w) : void 0;
  }
}, DD = {
  stringify: (b) => JSON.stringify(b),
  parse: (b) => JSON.parse(b)
}, kD = {
  stringify: (b) => `${b}`,
  parse: (b) => parseFloat(b)
}, OD = {
  stringify: (b) => b,
  parse: (b) => b
}, C0 = {
  string: OD,
  number: kD,
  boolean: xD,
  function: _D,
  json: DD
};
function LD(b) {
  return b.replace(
    /([a-z0-9])([A-Z])/g,
    (M, w, te) => `${w}-${te.toLowerCase()}`
  );
}
const Im = Symbol.for("r2wc.render"), Ym = Symbol.for("r2wc.connected"), gc = Symbol.for("r2wc.context"), Qu = Symbol.for("r2wc.props");
function ND(b, M, w) {
  var te, Pe, ht;
  M.props || (M.props = b.propTypes ? Object.keys(b.propTypes) : []), M.events || (M.events = []);
  const Be = Array.isArray(M.props) ? M.props.slice() : Object.keys(M.props), S = Array.isArray(M.events) ? M.events.slice() : Object.keys(M.events), ze = {}, ke = {}, ue = {}, Ne = {};
  for (const pe of Be) {
    ze[pe] = Array.isArray(M.props) ? "string" : M.props[pe];
    const Z = LD(pe);
    ue[pe] = Z, Ne[Z] = pe;
  }
  for (const pe of S)
    ke[pe] = Array.isArray(M.events) ? {} : M.events[pe];
  class ne extends HTMLElement {
    constructor() {
      super(), $m(this, ht, !0), $m(this, Pe), $m(this, te, {}), $m(this, "container"), M.shadow ? this.container = this.attachShadow({
        mode: M.shadow
      }) : this.container = this, this[Qu].container = this.container;
      for (const Z of Be) {
        const ve = ue[Z], Ge = this.getAttribute(ve), jt = ze[Z], xt = jt ? C0[jt] : null;
        xt != null && xt.parse && Ge && (this[Qu][Z] = xt.parse(Ge, ve, this));
      }
      for (const Z of S)
        this[Qu][Z] = (ve) => {
          const Ge = Z.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Ge, { detail: ve, ...ke[Z] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(Ne);
    }
    connectedCallback() {
      this[Ym] = !0, this[Im]();
    }
    disconnectedCallback() {
      this[Ym] = !1, this[gc] && w.unmount(this[gc]), delete this[gc];
    }
    attributeChangedCallback(Z, ve, Ge) {
      const jt = Ne[Z], xt = ze[jt], et = xt ? C0[xt] : null;
      jt in ze && et != null && et.parse && Ge && (this[Qu][jt] = et.parse(Ge, Z, this), this[Im]());
    }
    [(ht = Ym, Pe = gc, te = Qu, Im)]() {
      this[Ym] && (this[gc] ? w.update(this[gc], this[Qu]) : this[gc] = w.mount(
        this.container,
        b,
        this[Qu]
      ));
    }
  }
  for (const pe of Be) {
    const Z = ue[pe], ve = ze[pe];
    Object.defineProperty(ne.prototype, pe, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Qu][pe];
      },
      set(Ge) {
        this[Qu][pe] = Ge;
        const jt = ve ? C0[ve] : null;
        if (jt != null && jt.stringify) {
          const xt = jt.stringify(Ge, Z, this);
          this.getAttribute(Z) !== xt && this.setAttribute(Z, xt);
        } else
          this[Im]();
      }
    });
  }
  return ne;
}
function MD(b, M, w) {
  const te = w0(b), Pe = Gu.createElement(M, w);
  return te.render(Pe), {
    root: te,
    ReactComponent: M
  };
}
function zD({ root: b, ReactComponent: M }, w) {
  const te = Gu.createElement(M, w);
  b.render(te);
}
function UD({ root: b }) {
  b.unmount();
}
function AD(b, M = {}) {
  return ND(b, M, { mount: MD, update: zD, unmount: UD });
}
var b0 = { exports: {} }, ev = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mR;
function jD() {
  if (mR) return ev;
  mR = 1;
  var b = Kn, M = Symbol.for("react.element"), w = Symbol.for("react.fragment"), te = Object.prototype.hasOwnProperty, Pe = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ht = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Be(S, ze, ke) {
    var ue, Ne = {}, ne = null, pe = null;
    ke !== void 0 && (ne = "" + ke), ze.key !== void 0 && (ne = "" + ze.key), ze.ref !== void 0 && (pe = ze.ref);
    for (ue in ze) te.call(ze, ue) && !ht.hasOwnProperty(ue) && (Ne[ue] = ze[ue]);
    if (S && S.defaultProps) for (ue in ze = S.defaultProps, ze) Ne[ue] === void 0 && (Ne[ue] = ze[ue]);
    return { $$typeof: M, type: S, key: ne, ref: pe, props: Ne, _owner: Pe.current };
  }
  return ev.Fragment = w, ev.jsx = Be, ev.jsxs = Be, ev;
}
var tv = {}, yR;
function FD() {
  if (yR) return tv;
  yR = 1;
  var b = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return b.NODE_ENV !== "production" && function() {
    var M = Kn, w = Symbol.for("react.element"), te = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), ht = Symbol.for("react.strict_mode"), Be = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), ze = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), ve = Symbol.iterator, Ge = "@@iterator";
    function jt(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = ve && R[ve] || R[Ge];
      return typeof Q == "function" ? Q : null;
    }
    var xt = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function et(R) {
      {
        for (var Q = arguments.length, q = new Array(Q > 1 ? Q - 1 : 0), Ue = 1; Ue < Q; Ue++)
          q[Ue - 1] = arguments[Ue];
        $e("error", R, q);
      }
    }
    function $e(R, Q, q) {
      {
        var Ue = xt.ReactDebugCurrentFrame, vt = Ue.getStackAddendum();
        vt !== "" && (Q += "%s", q = q.concat([vt]));
        var Tt = q.map(function(Fe) {
          return String(Fe);
        });
        Tt.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, Tt);
      }
    }
    var Nt = !1, Te = !1, pt = !1, qe = !1, xn = !1, Sn;
    Sn = Symbol.for("react.module.reference");
    function en(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Pe || R === Be || xn || R === ht || R === ue || R === Ne || qe || R === Z || Nt || Te || pt || typeof R == "object" && R !== null && (R.$$typeof === pe || R.$$typeof === ne || R.$$typeof === S || R.$$typeof === ze || R.$$typeof === ke || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Sn || R.getModuleId !== void 0));
    }
    function Ct(R, Q, q) {
      var Ue = R.displayName;
      if (Ue)
        return Ue;
      var vt = Q.displayName || Q.name || "";
      return vt !== "" ? q + "(" + vt + ")" : q;
    }
    function an(R) {
      return R.displayName || "Context";
    }
    function Ie(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && et("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Pe:
          return "Fragment";
        case te:
          return "Portal";
        case Be:
          return "Profiler";
        case ht:
          return "StrictMode";
        case ue:
          return "Suspense";
        case Ne:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ze:
            var Q = R;
            return an(Q) + ".Consumer";
          case S:
            var q = R;
            return an(q._context) + ".Provider";
          case ke:
            return Ct(R, R.render, "ForwardRef");
          case ne:
            var Ue = R.displayName || null;
            return Ue !== null ? Ue : Ie(R.type) || "Memo";
          case pe: {
            var vt = R, Tt = vt._payload, Fe = vt._init;
            try {
              return Ie(Fe(Tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var lt = Object.assign, _t = 0, ut, $, ge, oe, k, I, Le;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function nt() {
      {
        if (_t === 0) {
          ut = console.log, $ = console.info, ge = console.warn, oe = console.error, k = console.group, I = console.groupCollapsed, Le = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
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
    function ot() {
      {
        if (_t--, _t === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, R, {
              value: ut
            }),
            info: lt({}, R, {
              value: $
            }),
            warn: lt({}, R, {
              value: ge
            }),
            error: lt({}, R, {
              value: oe
            }),
            group: lt({}, R, {
              value: k
            }),
            groupCollapsed: lt({}, R, {
              value: I
            }),
            groupEnd: lt({}, R, {
              value: Le
            })
          });
        }
        _t < 0 && et("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = xt.ReactCurrentDispatcher, dt;
    function Rt(R, Q, q) {
      {
        if (dt === void 0)
          try {
            throw Error();
          } catch (vt) {
            var Ue = vt.stack.trim().match(/\n( *(at )?)/);
            dt = Ue && Ue[1] || "";
          }
        return `
` + dt + R;
      }
    }
    var $t = !1, Xn;
    {
      var Hr = typeof WeakMap == "function" ? WeakMap : Map;
      Xn = new Hr();
    }
    function dr(R, Q) {
      if (!R || $t)
        return "";
      {
        var q = Xn.get(R);
        if (q !== void 0)
          return q;
      }
      var Ue;
      $t = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Tt;
      Tt = yt.current, yt.current = null, nt();
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
            } catch (zn) {
              Ue = zn;
            }
            Reflect.construct(R, [], Fe);
          } else {
            try {
              Fe.call();
            } catch (zn) {
              Ue = zn;
            }
            R.call(Fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zn) {
            Ue = zn;
          }
          R();
        }
      } catch (zn) {
        if (zn && Ue && typeof zn.stack == "string") {
          for (var ct = zn.stack.split(`
`), Mn = Ue.stack.split(`
`), Kt = ct.length - 1, dn = Mn.length - 1; Kt >= 1 && dn >= 0 && ct[Kt] !== Mn[dn]; )
            dn--;
          for (; Kt >= 1 && dn >= 0; Kt--, dn--)
            if (ct[Kt] !== Mn[dn]) {
              if (Kt !== 1 || dn !== 1)
                do
                  if (Kt--, dn--, dn < 0 || ct[Kt] !== Mn[dn]) {
                    var mr = `
` + ct[Kt].replace(" at new ", " at ");
                    return R.displayName && mr.includes("<anonymous>") && (mr = mr.replace("<anonymous>", R.displayName)), typeof R == "function" && Xn.set(R, mr), mr;
                  }
                while (Kt >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        $t = !1, yt.current = Tt, ot(), Error.prepareStackTrace = vt;
      }
      var Vt = R ? R.displayName || R.name : "", Oa = Vt ? Rt(Vt) : "";
      return typeof R == "function" && Xn.set(R, Oa), Oa;
    }
    function En(R, Q, q) {
      return dr(R, !1);
    }
    function Zn(R) {
      var Q = R.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Hn(R, Q, q) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return dr(R, Zn(R));
      if (typeof R == "string")
        return Rt(R);
      switch (R) {
        case ue:
          return Rt("Suspense");
        case Ne:
          return Rt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ke:
            return En(R.render);
          case ne:
            return Hn(R.type, Q, q);
          case pe: {
            var Ue = R, vt = Ue._payload, Tt = Ue._init;
            try {
              return Hn(Tt(vt), Q, q);
            } catch {
            }
          }
        }
      return "";
    }
    var _n = Object.prototype.hasOwnProperty, Nn = {}, Sr = xt.ReactDebugCurrentFrame;
    function pr(R) {
      if (R) {
        var Q = R._owner, q = Hn(R.type, R._source, Q ? Q.type : null);
        Sr.setExtraStackFrame(q);
      } else
        Sr.setExtraStackFrame(null);
    }
    function Vn(R, Q, q, Ue, vt) {
      {
        var Tt = Function.call.bind(_n);
        for (var Fe in R)
          if (Tt(R, Fe)) {
            var ct = void 0;
            try {
              if (typeof R[Fe] != "function") {
                var Mn = Error((Ue || "React class") + ": " + q + " type `" + Fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Mn.name = "Invariant Violation", Mn;
              }
              ct = R[Fe](Q, Fe, Ue, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Kt) {
              ct = Kt;
            }
            ct && !(ct instanceof Error) && (pr(vt), et("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ue || "React class", q, Fe, typeof ct), pr(null)), ct instanceof Error && !(ct.message in Nn) && (Nn[ct.message] = !0, pr(vt), et("Failed %s type: %s", q, ct.message), pr(null));
          }
      }
    }
    var aa = Array.isArray;
    function ia(R) {
      return aa(R);
    }
    function vr(R) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, q = Q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return q;
      }
    }
    function la(R) {
      try {
        return Jn(R), !1;
      } catch {
        return !0;
      }
    }
    function Jn(R) {
      return "" + R;
    }
    function Er(R) {
      if (la(R))
        return et("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(R)), Jn(R);
    }
    var fn = xt.ReactCurrentOwner, ua = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, oa, sa, ae;
    ae = {};
    function Oe(R) {
      if (_n.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function st(R) {
      if (_n.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, Q) {
      if (typeof R.ref == "string" && fn.current && Q && fn.current.stateNode !== Q) {
        var q = Ie(fn.current.type);
        ae[q] || (et('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ie(fn.current.type), R.ref), ae[q] = !0);
      }
    }
    function Mt(R, Q) {
      {
        var q = function() {
          oa || (oa = !0, et("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function Dn(R, Q) {
      {
        var q = function() {
          sa || (sa = !0, et("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var vn = function(R, Q, q, Ue, vt, Tt, Fe) {
      var ct = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: q,
        props: Fe,
        // Record the component responsible for creating this element.
        _owner: Tt
      };
      return ct._store = {}, Object.defineProperty(ct._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ct, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.defineProperty(ct, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
    };
    function hr(R, Q, q, Ue, vt) {
      {
        var Tt, Fe = {}, ct = null, Mn = null;
        q !== void 0 && (Er(q), ct = "" + q), st(Q) && (Er(Q.key), ct = "" + Q.key), Oe(Q) && (Mn = Q.ref, Ft(Q, vt));
        for (Tt in Q)
          _n.call(Q, Tt) && !ua.hasOwnProperty(Tt) && (Fe[Tt] = Q[Tt]);
        if (R && R.defaultProps) {
          var Kt = R.defaultProps;
          for (Tt in Kt)
            Fe[Tt] === void 0 && (Fe[Tt] = Kt[Tt]);
        }
        if (ct || Mn) {
          var dn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ct && Mt(Fe, dn), Mn && Dn(Fe, dn);
        }
        return vn(R, ct, Mn, vt, Ue, fn.current, Fe);
      }
    }
    var It = xt.ReactCurrentOwner, In = xt.ReactDebugCurrentFrame;
    function Ht(R) {
      if (R) {
        var Q = R._owner, q = Hn(R.type, R._source, Q ? Q.type : null);
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
          var R = Ie(It.current.type);
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
    var ru = {};
    function au(R) {
      {
        var Q = Da();
        if (!Q) {
          var q = typeof R == "string" ? R : R.displayName || R.name;
          q && (Q = `

Check the top-level render call using <` + q + ">.");
        }
        return Q;
      }
    }
    function yl(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var q = au(Q);
        if (ru[q])
          return;
        ru[q] = !0;
        var Ue = "";
        R && R._owner && R._owner !== It.current && (Ue = " It was passed a child from " + Ie(R._owner.type) + "."), Ht(R), et('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, Ue), Ht(null);
      }
    }
    function Ka(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (ia(R))
          for (var q = 0; q < R.length; q++) {
            var Ue = R[q];
            qa(Ue) && yl(Ue, Q);
          }
        else if (qa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var vt = jt(R);
          if (typeof vt == "function" && vt !== R.entries)
            for (var Tt = vt.call(R), Fe; !(Fe = Tt.next()).done; )
              qa(Fe.value) && yl(Fe.value, Q);
        }
      }
    }
    function Xa(R) {
      {
        var Q = R.type;
        if (Q == null || typeof Q == "string")
          return;
        var q;
        if (typeof Q == "function")
          q = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === ke || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === ne))
          q = Q.propTypes;
        else
          return;
        if (q) {
          var Ue = Ie(Q);
          Vn(q, R.props, "prop", Ue, R);
        } else if (Q.PropTypes !== void 0 && !tn) {
          tn = !0;
          var vt = Ie(Q);
          et("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && et("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ka(R) {
      {
        for (var Q = Object.keys(R.props), q = 0; q < Q.length; q++) {
          var Ue = Q[q];
          if (Ue !== "children" && Ue !== "key") {
            Ht(R), et("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ue), Ht(null);
            break;
          }
        }
        R.ref !== null && (Ht(R), et("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    var zi = {};
    function Cr(R, Q, q, Ue, vt, Tt) {
      {
        var Fe = en(R);
        if (!Fe) {
          var ct = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Mn = ml();
          Mn ? ct += Mn : ct += Da();
          var Kt;
          R === null ? Kt = "null" : ia(R) ? Kt = "array" : R !== void 0 && R.$$typeof === w ? (Kt = "<" + (Ie(R.type) || "Unknown") + " />", ct = " Did you accidentally export a JSX literal instead of a component?") : Kt = typeof R, et("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Kt, ct);
        }
        var dn = hr(R, Q, q, vt, Tt);
        if (dn == null)
          return dn;
        if (Fe) {
          var mr = Q.children;
          if (mr !== void 0)
            if (Ue)
              if (ia(mr)) {
                for (var Vt = 0; Vt < mr.length; Vt++)
                  Ka(mr[Vt], R);
                Object.freeze && Object.freeze(mr);
              } else
                et("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ka(mr, R);
        }
        if (_n.call(Q, "key")) {
          var Oa = Ie(R), zn = Object.keys(Q).filter(function(Ai) {
            return Ai !== "key";
          }), Pr = zn.length > 0 ? "{key: someKey, " + zn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!zi[Oa + Pr]) {
            var rt = zn.length > 0 ? "{" + zn.join(": ..., ") + ": ...}" : "{}";
            et(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pr, Oa, rt, Oa), zi[Oa + Pr] = !0;
          }
        }
        return R === Pe ? ka(dn) : Xa(dn), dn;
      }
    }
    function Vr(R, Q, q) {
      return Cr(R, Q, q, !0);
    }
    function ca(R, Q, q) {
      return Cr(R, Q, q, !1);
    }
    var Ui = ca, gl = Vr;
    tv.Fragment = Pe, tv.jsx = Ui, tv.jsxs = gl;
  }(), tv;
}
var HD = {};
HD.NODE_ENV === "production" ? b0.exports = jD() : b0.exports = FD();
var it = b0.exports;
function VD() {
  const { bot_name: b, show_powered_by: M } = Kn.useContext(If);
  return /* @__PURE__ */ it.jsxs("div", { className: "bg-blue-500 p-1 rounded-t-md", children: [
    /* @__PURE__ */ it.jsx("div", { className: "text-white text-2xl px-2 mb-1", children: b }),
    M === "true" && /* @__PURE__ */ it.jsxs("div", { className: "text-xs text-white px-2 flex justify-start items-center", children: [
      "powered by ",
      /* @__PURE__ */ it.jsx("span", { className: "bg-white mx-2 p-[5px] rounded-lg", children: /* @__PURE__ */ it.jsx("img", { src: "https://keenwi.openhit.com/images/optalk/optalk-logo.png", className: "w-[70px]" }) })
    ] })
  ] });
}
function PD({ message: b }) {
  const { user_avatar: M } = Kn.useContext(If);
  return /* @__PURE__ */ it.jsxs("div", { className: "flex flex-row justify-end items-start my-1 py-1 px-2", children: [
    /* @__PURE__ */ it.jsx("div", { name: "user-bubble", className: "bg-blue-100 rounded-md px-2 py-1 max-w-2/3 text-right text-sm text-black", children: b }),
    /* @__PURE__ */ it.jsx("img", { src: M, alt: "user-avatar", className: "w-8 h-8 rounded-full mx-2" })
  ] });
}
function BD({ message: b }) {
  const { bot_avatar: M } = Kn.useContext(If);
  return /* @__PURE__ */ it.jsxs("div", { className: "flex flex-row justify-start items-start my-1 py-1 px-2", children: [
    /* @__PURE__ */ it.jsx("div", { className: "bg-black rounded-full py-1 px-2 mx-1 min-w-fit", children: /* @__PURE__ */ it.jsx("img", { src: M, alt: "bot-avatar", className: "w-6 h-7" }) }),
    /* @__PURE__ */ it.jsx("div", { name: "bot-bubble", className: "bg-blue-200 rounded-md px-2 py-1 w-fit text-left", children: b === "Waiting for response from bot..." ? /* @__PURE__ */ it.jsx("div", { className: "p-2 w-fit", children: /* @__PURE__ */ it.jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ it.jsx("div", { className: "w-[5px] h-[5px] bg-blue-900 rounded-full animate-bounce [animation-delay:-0.3s]" }),
      /* @__PURE__ */ it.jsx("div", { className: "w-[5px] h-[5px] bg-blue-900 rounded-full animate-bounce [animation-delay:-0.15s]" }),
      /* @__PURE__ */ it.jsx("div", { className: "w-[5px] h-[5px] bg-blue-900 rounded-full animate-bounce" })
    ] }) }) : /* @__PURE__ */ it.jsx("div", { className: "text-sm text-black", children: b }) })
  ] });
}
function $D({ chatHistory: b }) {
  const { chat_bg_color: M } = Kn.useContext(If), w = Kn.useRef();
  return Kn.useEffect(() => {
    w.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [b]), /* @__PURE__ */ it.jsx(it.Fragment, { children: /* @__PURE__ */ it.jsxs("div", { className: `flex-grow overflow-y-scroll scroll-smooth px-1 py-1 border-2 border-blue-500 ${M ? `bg-${M}` : "bg-white"}`, children: [
    b.map((te, Pe) => te.type === "user" ? /* @__PURE__ */ it.jsx(
      PD,
      {
        message: te.message
      },
      Pe
    ) : /* @__PURE__ */ it.jsx(
      BD,
      {
        message: te.message
      },
      Pe
    )),
    /* @__PURE__ */ it.jsx("div", { ref: w })
  ] }) });
}
var TR = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, gR = Gu.createContext && /* @__PURE__ */ Gu.createContext(TR), ID = ["attr", "size", "title"];
function YD(b, M) {
  if (b == null) return {};
  var w = WD(b, M), te, Pe;
  if (Object.getOwnPropertySymbols) {
    var ht = Object.getOwnPropertySymbols(b);
    for (Pe = 0; Pe < ht.length; Pe++)
      te = ht[Pe], !(M.indexOf(te) >= 0) && Object.prototype.propertyIsEnumerable.call(b, te) && (w[te] = b[te]);
  }
  return w;
}
function WD(b, M) {
  if (b == null) return {};
  var w = {};
  for (var te in b)
    if (Object.prototype.hasOwnProperty.call(b, te)) {
      if (M.indexOf(te) >= 0) continue;
      w[te] = b[te];
    }
  return w;
}
function Wm() {
  return Wm = Object.assign ? Object.assign.bind() : function(b) {
    for (var M = 1; M < arguments.length; M++) {
      var w = arguments[M];
      for (var te in w)
        Object.prototype.hasOwnProperty.call(w, te) && (b[te] = w[te]);
    }
    return b;
  }, Wm.apply(this, arguments);
}
function SR(b, M) {
  var w = Object.keys(b);
  if (Object.getOwnPropertySymbols) {
    var te = Object.getOwnPropertySymbols(b);
    M && (te = te.filter(function(Pe) {
      return Object.getOwnPropertyDescriptor(b, Pe).enumerable;
    })), w.push.apply(w, te);
  }
  return w;
}
function Qm(b) {
  for (var M = 1; M < arguments.length; M++) {
    var w = arguments[M] != null ? arguments[M] : {};
    M % 2 ? SR(Object(w), !0).forEach(function(te) {
      QD(b, te, w[te]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(w)) : SR(Object(w)).forEach(function(te) {
      Object.defineProperty(b, te, Object.getOwnPropertyDescriptor(w, te));
    });
  }
  return b;
}
function QD(b, M, w) {
  return M = GD(M), M in b ? Object.defineProperty(b, M, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : b[M] = w, b;
}
function GD(b) {
  var M = qD(b, "string");
  return typeof M == "symbol" ? M : M + "";
}
function qD(b, M) {
  if (typeof b != "object" || !b) return b;
  var w = b[Symbol.toPrimitive];
  if (w !== void 0) {
    var te = w.call(b, M || "default");
    if (typeof te != "object") return te;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (M === "string" ? String : Number)(b);
}
function wR(b) {
  return b && b.map((M, w) => /* @__PURE__ */ Gu.createElement(M.tag, Qm({
    key: w
  }, M.attr), wR(M.child)));
}
function x0(b) {
  return (M) => /* @__PURE__ */ Gu.createElement(KD, Wm({
    attr: Qm({}, b.attr)
  }, M), wR(b.child));
}
function KD(b) {
  var M = (w) => {
    var {
      attr: te,
      size: Pe,
      title: ht
    } = b, Be = YD(b, ID), S = Pe || w.size || "1em", ze;
    return w.className && (ze = w.className), b.className && (ze = (ze ? ze + " " : "") + b.className), /* @__PURE__ */ Gu.createElement("svg", Wm({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, w.attr, te, Be, {
      className: ze,
      style: Qm(Qm({
        color: b.color || w.color
      }, w.style), b.style),
      height: S,
      width: S,
      xmlns: "http://www.w3.org/2000/svg"
    }), ht && /* @__PURE__ */ Gu.createElement("title", null, ht), b.children);
  };
  return gR !== void 0 ? /* @__PURE__ */ Gu.createElement(gR.Consumer, null, (w) => M(w)) : M(TR);
}
function XD(b) {
  return x0({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" }, child: [] }] })(b);
}
function ZD(b) {
  return x0({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z" }, child: [] }] })(b);
}
function JD(b) {
  return x0({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" }, child: [] }] })(b);
}
function ek({ setMessageField: b }) {
  function M() {
    let w = document.getElementById("botimoz-input-field").value;
    w = w.trim(), w.length > 0 && b(w), document.getElementById("botimoz-input-field").value = "";
  }
  return /* @__PURE__ */ it.jsx("div", { className: "bg-blue-500 p-1 rounded-b-md", children: /* @__PURE__ */ it.jsxs("div", { className: "flex justify-start items-center", children: [
    /* @__PURE__ */ it.jsx("div", { className: "text-sm m-1 py-1 px-2 rounded-full hover:bg-blue-400 transition", children: /* @__PURE__ */ it.jsx(ZD, { size: 20, className: "text-white" }) }),
    /* @__PURE__ */ it.jsx(
      "input",
      {
        id: "botimoz-input-field",
        type: "text",
        placeholder: "Type a message...",
        className: "w-full p-1 m-1 rounded-full bg-white text-black",
        onKeyDown: (w) => {
          w.key === "Enter" && M();
        }
      }
    ),
    /* @__PURE__ */ it.jsx(
      "button",
      {
        className: "text-white py-1 px-3 m-1 rounded-full hover:bg-blue-400 transition",
        onClick: () => M(),
        children: "Send"
      }
    )
  ] }) });
}
const $f = {
  BOT_ID: "",
  BOT_SECRET: "",
  SESSION_ID: "",
  CHAT_URL: "https://stg.optalk.ai/api/chatter/v1/bots/chat"
};
function tk({ className: b }) {
  const { bot_greeting: M } = Kn.useContext(If), [w, te] = Kn.useState(""), [Pe, ht] = Kn.useState([
    {
      type: "bot",
      message: M
    }
  ]);
  Kn.useEffect(() => {
    w.trim() !== "" && (ht((S) => [
      ...S,
      {
        type: "user",
        message: w
      },
      {
        type: "bot",
        message: "Waiting for response from bot..."
      }
    ]), Be(w));
  }, [w]);
  const Be = Kn.useCallback((S) => {
    (async (ke) => {
      let ue = {
        request: {
          message: ke
        },
        session_id: "",
        bot_id: $f.BOT_ID,
        bot_secret: $f.BOT_SECRET
      }, Ne;
      try {
        Ne = await fetch($f.CHAT_URL, {
          method: "POST",
          body: JSON.stringify(ue),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }), Ne = await Ne.json(), ht((ne) => [
          ...ne.slice(0, -1),
          {
            type: "bot",
            message: Ne.data.response
          }
        ]);
      } catch (ne) {
        console.error("Error in fetching response from bot", ne);
      }
    })(S);
  });
  return /* @__PURE__ */ it.jsxs("div", { className: `h-[500px] w-[350px] rounded-md flex flex-col justify-start p-0 ${b}`, children: [
    /* @__PURE__ */ it.jsx(VD, {}),
    /* @__PURE__ */ it.jsx($D, { chatHistory: Pe }),
    /* @__PURE__ */ it.jsx(ek, { setMessageField: te })
  ] });
}
function nk({ open: b, setOpen: M }) {
  return /* @__PURE__ */ it.jsx("main", { children: /* @__PURE__ */ it.jsx(
    "div",
    {
      className: "bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center",
      onClick: () => M(!b),
      children: /* @__PURE__ */ it.jsxs("div", { className: "fixed", children: [
        /* @__PURE__ */ it.jsx(JD, { color: "white", className: `${b ? "scale-100 size-10" : "scale-0 size-0"} transition` }),
        /* @__PURE__ */ it.jsx(XD, { size: 40, color: "white", className: `${b ? "scale-0 size-0" : "scale-100 size-10"} transition` })
      ] })
    }
  ) });
}
const If = Kn.createContext();
function rk(b) {
  const [M, w] = Kn.useState(b.start_open || !1), [te, Pe] = Kn.useState(!1), ht = b, Be = b.license;
  return Kn.useEffect(() => {
    const ze = atob(Be).split(";");
    $f.BOT_ID = ze[0], $f.BOT_SECRET = ze[1], $f.SESSION_ID = ze[2], Pe(!0);
  }, []), /* @__PURE__ */ it.jsx(it.Fragment, { children: te && /* @__PURE__ */ it.jsx(If.Provider, { value: ht, children: /* @__PURE__ */ it.jsxs("main", { className: "flex justify-start items-end m-5", children: [
    /* @__PURE__ */ it.jsx(
      tk,
      {
        className: `${M ? "block" : "hidden"} mb-12`
      }
    ),
    /* @__PURE__ */ it.jsx(nk, { open: M, setOpen: w })
  ] }) }) });
}
const ak = AD(rk, {
  props: {
    license: "string",
    bot_greeting: "string",
    user_avatar: "string",
    bot_avatar: "string",
    bot_name: "string",
    show_powered_by: "string",
    chat_bg_color: "string"
  }
});
customElements.define("botimoz-widget", ak, { shadow: !1 });
