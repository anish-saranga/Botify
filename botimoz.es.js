import A, { useState as K, useEffect as ie, useCallback as Pr } from "react";
import kr from "react-dom";
var Ee, re = kr;
if (process.env.NODE_ENV === "production")
  Ee = re.createRoot, re.hydrateRoot;
else {
  var Je = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ee = function(r, n) {
    Je.usingClientEntryPoint = !0;
    try {
      return re.createRoot(r, n);
    } finally {
      Je.usingClientEntryPoint = !1;
    }
  };
}
var Dr = Object.defineProperty, Ar = (r, n, i) => n in r ? Dr(r, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[n] = i, te = (r, n, i) => Ar(r, typeof n != "symbol" ? n + "" : n, i);
const Nr = {
  stringify: (r) => r ? "true" : "false",
  parse: (r) => /^[ty1-9]/i.test(r)
}, Ir = {
  stringify: (r) => r.name,
  parse: (r, n, i) => {
    const o = (() => {
      if (typeof window < "u" && r in window)
        return window[r];
      if (typeof global < "u" && r in global)
        return global[r];
    })();
    return typeof o == "function" ? o.bind(i) : void 0;
  }
}, Fr = {
  stringify: (r) => JSON.stringify(r),
  parse: (r) => JSON.parse(r)
}, Lr = {
  stringify: (r) => `${r}`,
  parse: (r) => parseFloat(r)
}, Wr = {
  stringify: (r) => r,
  parse: (r) => r
}, _e = {
  string: Wr,
  number: Lr,
  boolean: Nr,
  function: Ir,
  json: Fr
};
function $r(r) {
  return r.replace(
    /([a-z0-9])([A-Z])/g,
    (n, i, o) => `${i}-${o.toLowerCase()}`
  );
}
const ne = Symbol.for("r2wc.render"), ae = Symbol.for("r2wc.connected"), $ = Symbol.for("r2wc.context"), F = Symbol.for("r2wc.props");
function Br(r, n, i) {
  var o, h, R;
  n.props || (n.props = r.propTypes ? Object.keys(r.propTypes) : []), n.events || (n.events = []);
  const x = Array.isArray(n.props) ? n.props.slice() : Object.keys(n.props), O = Array.isArray(n.events) ? n.events.slice() : Object.keys(n.events), f = {}, T = {}, y = {}, E = {};
  for (const g of x) {
    f[g] = Array.isArray(n.props) ? "string" : n.props[g];
    const m = $r(g);
    y[g] = m, E[m] = g;
  }
  for (const g of O)
    T[g] = Array.isArray(n.events) ? {} : n.events[g];
  class S extends HTMLElement {
    constructor() {
      super(), te(this, R, !0), te(this, h), te(this, o, {}), te(this, "container"), n.shadow ? this.container = this.attachShadow({
        mode: n.shadow
      }) : this.container = this, this[F].container = this.container;
      for (const m of x) {
        const D = y[m], P = this.getAttribute(D), j = f[m], p = j ? _e[j] : null;
        p != null && p.parse && P && (this[F][m] = p.parse(P, D, this));
      }
      for (const m of O)
        this[F][m] = (D) => {
          const P = m.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(P, { detail: D, ...T[m] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(E);
    }
    connectedCallback() {
      this[ae] = !0, this[ne]();
    }
    disconnectedCallback() {
      this[ae] = !1, this[$] && i.unmount(this[$]), delete this[$];
    }
    attributeChangedCallback(m, D, P) {
      const j = E[m], p = f[j], B = p ? _e[p] : null;
      j in f && B != null && B.parse && P && (this[F][j] = B.parse(P, m, this), this[ne]());
    }
    [(R = ae, h = $, o = F, ne)]() {
      this[ae] && (this[$] ? i.update(this[$], this[F]) : this[$] = i.mount(
        this.container,
        r,
        this[F]
      ));
    }
  }
  for (const g of x) {
    const m = y[g], D = f[g];
    Object.defineProperty(S.prototype, g, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[F][g];
      },
      set(P) {
        this[F][g] = P;
        const j = D ? _e[D] : null;
        if (j != null && j.stringify) {
          const p = j.stringify(P, m, this);
          this.getAttribute(m) !== p && this.setAttribute(m, p);
        } else
          this[ne]();
      }
    });
  }
  return S;
}
function Mr(r, n, i) {
  const o = Ee(r), h = A.createElement(n, i);
  return o.render(h), {
    root: o,
    ReactComponent: n
  };
}
function Vr({ root: r, ReactComponent: n }, i) {
  const o = A.createElement(n, i);
  r.render(o);
}
function Yr({ root: r }) {
  r.unmount();
}
function Ur(r, n = {}) {
  return Br(r, n, { mount: Mr, update: Vr, unmount: Yr });
}
var Re = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function zr() {
  if (qe) return J;
  qe = 1;
  var r = A, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, h = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(O, f, T) {
    var y, E = {}, S = null, g = null;
    T !== void 0 && (S = "" + T), f.key !== void 0 && (S = "" + f.key), f.ref !== void 0 && (g = f.ref);
    for (y in f) o.call(f, y) && !R.hasOwnProperty(y) && (E[y] = f[y]);
    if (O && O.defaultProps) for (y in f = O.defaultProps, f) E[y] === void 0 && (E[y] = f[y]);
    return { $$typeof: n, type: O, key: S, ref: g, props: E, _owner: h.current };
  }
  return J.Fragment = i, J.jsx = x, J.jsxs = x, J;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Hr() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var r = A, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), O = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, D = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = m && e[m] || e[D];
      return typeof t == "function" ? t : null;
    }
    var j = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          a[s - 1] = arguments[s];
        B("error", e, a);
      }
    }
    function B(e, t, a) {
      {
        var s = j.ReactDebugCurrentFrame, d = s.getStackAddendum();
        d !== "" && (t += "%s", a = a.concat([d]));
        var v = a.map(function(u) {
          return String(u);
        });
        v.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var G = !1, le = !1, ue = !1, ce = !1, Oe = !1, M;
    M = Symbol.for("react.module.reference");
    function rr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === R || Oe || e === h || e === T || e === y || ce || e === g || G || le || ue || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === x || e.$$typeof === O || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === M || e.getModuleId !== void 0));
    }
    function tr(e, t, a) {
      var s = e.displayName;
      if (s)
        return s;
      var d = t.displayName || t.name || "";
      return d !== "" ? a + "(" + d + ")" : a;
    }
    function je(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case R:
          return "Profiler";
        case h:
          return "StrictMode";
        case T:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var t = e;
            return je(t) + ".Consumer";
          case x:
            var a = e;
            return je(a._context) + ".Provider";
          case f:
            return tr(e, e.render, "ForwardRef");
          case E:
            var s = e.displayName || null;
            return s !== null ? s : N(e.type) || "Memo";
          case S: {
            var d = e, v = d._payload, u = d._init;
            try {
              return N(u(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, U = 0, we, xe, Ce, Te, Se, Pe, ke;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function nr() {
      {
        if (U === 0) {
          we = console.log, xe = console.info, Ce = console.warn, Te = console.error, Se = console.group, Pe = console.groupCollapsed, ke = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: De,
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
        U++;
      }
    }
    function ar() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: we
            }),
            info: L({}, e, {
              value: xe
            }),
            warn: L({}, e, {
              value: Ce
            }),
            error: L({}, e, {
              value: Te
            }),
            group: L({}, e, {
              value: Se
            }),
            groupCollapsed: L({}, e, {
              value: Pe
            }),
            groupEnd: L({}, e, {
              value: ke
            })
          });
        }
        U < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = j.ReactCurrentDispatcher, de;
    function Z(e, t, a) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (d) {
            var s = d.stack.trim().match(/\n( *(at )?)/);
            de = s && s[1] || "";
          }
        return `
` + de + e;
      }
    }
    var pe = !1, X;
    {
      var ir = typeof WeakMap == "function" ? WeakMap : Map;
      X = new ir();
    }
    function Ae(e, t) {
      if (!e || pe)
        return "";
      {
        var a = X.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      pe = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = fe.current, fe.current = null, nr();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (C) {
              s = C;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (C) {
              s = C;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            s = C;
          }
          e();
        }
      } catch (C) {
        if (C && s && typeof C.stack == "string") {
          for (var l = C.stack.split(`
`), w = s.stack.split(`
`), b = l.length - 1, _ = w.length - 1; b >= 1 && _ >= 0 && l[b] !== w[_]; )
            _--;
          for (; b >= 1 && _ >= 0; b--, _--)
            if (l[b] !== w[_]) {
              if (b !== 1 || _ !== 1)
                do
                  if (b--, _--, _ < 0 || l[b] !== w[_]) {
                    var k = `
` + l[b].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, k), k;
                  }
                while (b >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        pe = !1, fe.current = v, ar(), Error.prepareStackTrace = d;
      }
      var Y = e ? e.displayName || e.name : "", W = Y ? Z(Y) : "";
      return typeof e == "function" && X.set(e, W), W;
    }
    function or(e, t, a) {
      return Ae(e, !1);
    }
    function sr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Q(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, sr(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case T:
          return Z("Suspense");
        case y:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return or(e.render);
          case E:
            return Q(e.type, t, a);
          case S: {
            var s = e, d = s._payload, v = s._init;
            try {
              return Q(v(d), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Ne = {}, Ie = j.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var t = e._owner, a = Q(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(a);
      } else
        Ie.setExtraStackFrame(null);
    }
    function lr(e, t, a, s, d) {
      {
        var v = Function.call.bind(z);
        for (var u in e)
          if (v(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((s || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              l = e[u](t, u, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              l = b;
            }
            l && !(l instanceof Error) && (ee(d), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, u, typeof l), ee(null)), l instanceof Error && !(l.message in Ne) && (Ne[l.message] = !0, ee(d), p("Failed %s type: %s", a, l.message), ee(null));
          }
      }
    }
    var ur = Array.isArray;
    function ve(e) {
      return ur(e);
    }
    function cr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function fr(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function Le(e) {
      if (fr(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(e)), Fe(e);
    }
    var H = j.ReactCurrentOwner, dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, $e, he;
    he = {};
    function pr(e) {
      if (z.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vr(e) {
      if (z.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function hr(e, t) {
      if (typeof e.ref == "string" && H.current && t && H.current.stateNode !== t) {
        var a = N(H.current.type);
        he[a] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(H.current.type), e.ref), he[a] = !0);
      }
    }
    function gr(e, t) {
      {
        var a = function() {
          We || (We = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function mr(e, t) {
      {
        var a = function() {
          $e || ($e = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var br = function(e, t, a, s, d, v, u) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: u,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function yr(e, t, a, s, d) {
      {
        var v, u = {}, l = null, w = null;
        a !== void 0 && (Le(a), l = "" + a), vr(t) && (Le(t.key), l = "" + t.key), pr(t) && (w = t.ref, hr(t, d));
        for (v in t)
          z.call(t, v) && !dr.hasOwnProperty(v) && (u[v] = t[v]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (v in b)
            u[v] === void 0 && (u[v] = b[v]);
        }
        if (l || w) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && gr(u, _), w && mr(u, _);
        }
        return br(e, l, w, d, s, H.current, u);
      }
    }
    var ge = j.ReactCurrentOwner, Be = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var t = e._owner, a = Q(e.type, e._source, t ? t.type : null);
        Be.setExtraStackFrame(a);
      } else
        Be.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function be(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Me() {
      {
        if (ge.current) {
          var e = N(ge.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _r(e) {
      return "";
    }
    var Ve = {};
    function Er(e) {
      {
        var t = Me();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function Ye(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Er(t);
        if (Ve[a])
          return;
        Ve[a] = !0;
        var s = "";
        e && e._owner && e._owner !== ge.current && (s = " It was passed a child from " + N(e._owner.type) + "."), V(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), V(null);
      }
    }
    function Ue(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ve(e))
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            be(s) && Ye(s, t);
          }
        else if (be(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = P(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), u; !(u = v.next()).done; )
              be(u.value) && Ye(u.value, t);
        }
      }
    }
    function Rr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === E))
          a = t.propTypes;
        else
          return;
        if (a) {
          var s = N(t);
          lr(a, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !me) {
          me = !0;
          var d = N(t);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Or(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var s = t[a];
          if (s !== "children" && s !== "key") {
            V(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var ze = {};
    function He(e, t, a, s, d, v) {
      {
        var u = rr(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = _r();
          w ? l += w : l += Me();
          var b;
          e === null ? b = "null" : ve(e) ? b = "array" : e !== void 0 && e.$$typeof === n ? (b = "<" + (N(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, l);
        }
        var _ = yr(e, t, a, d, v);
        if (_ == null)
          return _;
        if (u) {
          var k = t.children;
          if (k !== void 0)
            if (s)
              if (ve(k)) {
                for (var Y = 0; Y < k.length; Y++)
                  Ue(k[Y], e);
                Object.freeze && Object.freeze(k);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(k, e);
        }
        if (z.call(t, "key")) {
          var W = N(e), C = Object.keys(t).filter(function(Sr) {
            return Sr !== "key";
          }), ye = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ze[W + ye]) {
            var Tr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ye, W, Tr, W), ze[W + ye] = !0;
          }
        }
        return e === o ? Or(_) : Rr(_), _;
      }
    }
    function jr(e, t, a) {
      return He(e, t, a, !0);
    }
    function wr(e, t, a) {
      return He(e, t, a, !1);
    }
    var xr = wr, Cr = jr;
    q.Fragment = o, q.jsx = xr, q.jsxs = Cr;
  }()), q;
}
process.env.NODE_ENV === "production" ? Re.exports = zr() : Re.exports = Hr();
var c = Re.exports;
function Jr() {
  return /* @__PURE__ */ c.jsxs("div", { className: "bg-zinc-400 rounded-t-sm p-1", children: [
    /* @__PURE__ */ c.jsx("div", { children: "Oppie Bot" }),
    /* @__PURE__ */ c.jsx("div", { className: "text-sm", children: "some description" })
  ] });
}
const I = {
  BOT_ID: "",
  BOT_SECRET: "",
  SESSION_ID: "",
  CHAT_URL: "https://stg.optalk.ai/api/chatter/v1/bots/chat"
};
function qr({ user_avatar: r, message: n }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col justify-center items-end px-1 my-2", children: [
    /* @__PURE__ */ c.jsx("div", {}),
    /* @__PURE__ */ c.jsx("div", { className: "bg-blue-300 flex-grow rounded-md", children: /* @__PURE__ */ c.jsx("span", { className: "text-base italic p-2", children: n }) })
  ] });
}
function Kr({ messageField: r, setMessageField: n }) {
  const [i, o] = K(!0), [h, R] = K([]);
  ie(() => {
    (!I.BOT_ID || !I.BOT_SECRET) && o(!1);
  }, []), ie(() => {
    R([
      {
        type: "bot",
        message: "Hello! How can I help you today?"
      }
    ]);
  }, []), ie(() => {
    r.trim() !== "" && (R([
      ...h,
      {
        type: "user",
        message: r
      }
    ]), x(r));
  }, [r]);
  const x = Pr((O) => {
    (async (T) => {
      console.log("in here 2");
      let y = {
        request: {
          message: T
        },
        session_id: "",
        bot_id: I.BOT_ID,
        bot_secret: I.BOT_SECRET
      };
      console.log("in here 3");
      let E;
      try {
        E = await fetch(I.CHAT_URL, {
          method: "POST",
          body: JSON.stringify(y),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }), E = await E.json(), R([...h, {
          type: "bot",
          message: E.data.response
        }]);
      } catch (S) {
        console.log("Error in fetching response from bot", S);
      }
    })(O);
  }, [I.BOT_ID, I.BOT_SECRET]);
  return console.log(h), /* @__PURE__ */ c.jsx(c.Fragment, { children: i ? (
    // show chat panel
    /* @__PURE__ */ c.jsx("div", { className: "flex-grow overflow-y-scroll px-1 py-1", children: h.map((O, f) => /* @__PURE__ */ c.jsx(
      qr,
      {
        message: O.message
      },
      f
    )) })
  ) : /* @__PURE__ */ c.jsx("div", { className: "flex-grow", children: /* @__PURE__ */ c.jsx("h3", { className: "flex h-full w-full justify-center items-center px-2 text-red-500", children: "Something went wrong! Check with your license provider." }) }) });
}
function Gr({ setMessageField: r }) {
  function n() {
    let i = document.getElementById("botimoz-input-field").value;
    i = i.trim(), i.length > 0 && r(i), document.getElementById("botimoz-input-field").value = "";
  }
  return /* @__PURE__ */ c.jsx("div", { className: "bg-zinc-400 p-1", children: /* @__PURE__ */ c.jsxs("div", { className: "flex justify-start items-center", children: [
    /* @__PURE__ */ c.jsx("div", { className: "text-sm m-1", children: "speech" }),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        id: "botimoz-input-field",
        type: "text",
        placeholder: "Type a message...",
        className: "w-full p-1 m-1",
        onKeyDown: (i) => {
          i.key === "Enter" && n();
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "bg-blue-500 text-white p-1 m-1",
        onClick: () => n(),
        children: "Send"
      }
    )
  ] }) });
}
function Zr() {
  const [r, n] = K("");
  return /* @__PURE__ */ c.jsxs("div", { className: "h-[450px] w-[350px] rounded-md border-2 border-black flex flex-col justify-start p-0", children: [
    /* @__PURE__ */ c.jsx(Jr, {}),
    /* @__PURE__ */ c.jsx(Kr, { messageField: r, setMessageField: n }),
    /* @__PURE__ */ c.jsx(Gr, { setMessageField: n })
  ] });
}
var Xe = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ge = A.createContext && /* @__PURE__ */ A.createContext(Xe), Xr = ["attr", "size", "title"];
function Qr(r, n) {
  if (r == null) return {};
  var i = et(r, n), o, h;
  if (Object.getOwnPropertySymbols) {
    var R = Object.getOwnPropertySymbols(r);
    for (h = 0; h < R.length; h++)
      o = R[h], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (i[o] = r[o]);
  }
  return i;
}
function et(r, n) {
  if (r == null) return {};
  var i = {};
  for (var o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      if (n.indexOf(o) >= 0) continue;
      i[o] = r[o];
    }
  return i;
}
function oe() {
  return oe = Object.assign ? Object.assign.bind() : function(r) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
    }
    return r;
  }, oe.apply(this, arguments);
}
function Ze(r, n) {
  var i = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    n && (o = o.filter(function(h) {
      return Object.getOwnPropertyDescriptor(r, h).enumerable;
    })), i.push.apply(i, o);
  }
  return i;
}
function se(r) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ze(Object(i), !0).forEach(function(o) {
      rt(r, o, i[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : Ze(Object(i)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(i, o));
    });
  }
  return r;
}
function rt(r, n, i) {
  return n = tt(n), n in r ? Object.defineProperty(r, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = i, r;
}
function tt(r) {
  var n = nt(r, "string");
  return typeof n == "symbol" ? n : n + "";
}
function nt(r, n) {
  if (typeof r != "object" || !r) return r;
  var i = r[Symbol.toPrimitive];
  if (i !== void 0) {
    var o = i.call(r, n || "default");
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(r);
}
function Qe(r) {
  return r && r.map((n, i) => /* @__PURE__ */ A.createElement(n.tag, se({
    key: i
  }, n.attr), Qe(n.child)));
}
function er(r) {
  return (n) => /* @__PURE__ */ A.createElement(at, oe({
    attr: se({}, r.attr)
  }, n), Qe(r.child));
}
function at(r) {
  var n = (i) => {
    var {
      attr: o,
      size: h,
      title: R
    } = r, x = Qr(r, Xr), O = h || i.size || "1em", f;
    return i.className && (f = i.className), r.className && (f = (f ? f + " " : "") + r.className), /* @__PURE__ */ A.createElement("svg", oe({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, o, x, {
      className: f,
      style: se(se({
        color: r.color || i.color
      }, i.style), r.style),
      height: O,
      width: O,
      xmlns: "http://www.w3.org/2000/svg"
    }), R && /* @__PURE__ */ A.createElement("title", null, R), r.children);
  };
  return Ge !== void 0 ? /* @__PURE__ */ A.createElement(Ge.Consumer, null, (i) => n(i)) : n(Xe);
}
function it(r) {
  return er({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" }, child: [] }] })(r);
}
function ot(r) {
  return er({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" }, child: [] }] })(r);
}
function st({ open: r, setOpen: n }) {
  return /* @__PURE__ */ c.jsx("main", { children: /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center",
      onClick: () => n(!r),
      children: /* @__PURE__ */ c.jsxs("div", { className: "fixed", children: [
        /* @__PURE__ */ c.jsx(ot, { color: "white", className: `${r ? "scale-100 size-10" : "scale-0 size-0"} transition` }),
        /* @__PURE__ */ c.jsx(it, { size: 40, color: "white", className: `${r ? "scale-0 size-0" : "scale-100 size-10"} transition` })
      ] })
    }
  ) });
}
function lt({
  bot_name: r,
  bot_avatar: n,
  bot_greeting: i,
  bot_user_input_placeholder: o,
  user_avatar: h,
  chat_area_bg: R,
  user_dialog_bg: x,
  bot_dialog_bg: O,
  chat_header_bg: f,
  license: T,
  host_url: y,
  height: E,
  width: S,
  start_open: g = !1,
  right_position: m,
  bottom_position: D,
  chat_header_title: P,
  trigger_icon_open: j,
  trigger_icon_close: p,
  trigger_icon_bg: B
}) {
  const [G, le] = K(g), [ue, ce] = K(!1);
  return ie(() => {
    const M = atob(T).split(";");
    I.BOT_ID = M[0], I.BOT_SECRET = M[1], I.SESSION_ID = M[2], ce(!0);
  }, []), /* @__PURE__ */ c.jsx(c.Fragment, { children: ue && /* @__PURE__ */ c.jsxs("main", { className: "flex justify-start items-end m-5", children: [
    G && /* @__PURE__ */ c.jsx(Zr, {}),
    /* @__PURE__ */ c.jsx(st, { open: G, setOpen: le })
  ] }) });
}
const ut = Ur(lt, {
  props: {
    license: "string"
  }
});
customElements.define("botimoz-widget", ut);
