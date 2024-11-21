import D, { useContext as K, useRef as Ar, useEffect as ye, useState as ae, useCallback as Dr, createContext as Fr } from "react";
import Ir from "react-dom";
var be, Lr = {}, ee = Ir;
if (Lr.NODE_ENV === "production")
  be = ee.createRoot, ee.hydrateRoot;
else {
  var ze = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  be = function(r, t) {
    ze.usingClientEntryPoint = !0;
    try {
      return ee.createRoot(r, t);
    } finally {
      ze.usingClientEntryPoint = !1;
    }
  };
}
var $r = Object.defineProperty, Vr = (r, t, a) => t in r ? $r(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a, re = (r, t, a) => Vr(r, typeof t != "symbol" ? t + "" : t, a);
const Wr = {
  stringify: (r) => r ? "true" : "false",
  parse: (r) => /^[ty1-9]/i.test(r)
}, Mr = {
  stringify: (r) => r.name,
  parse: (r, t, a) => {
    const o = (() => {
      if (typeof window < "u" && r in window)
        return window[r];
      if (typeof global < "u" && r in global)
        return global[r];
    })();
    return typeof o == "function" ? o.bind(a) : void 0;
  }
}, Br = {
  stringify: (r) => JSON.stringify(r),
  parse: (r) => JSON.parse(r)
}, Yr = {
  stringify: (r) => `${r}`,
  parse: (r) => parseFloat(r)
}, Ur = {
  stringify: (r) => r,
  parse: (r) => r
}, he = {
  string: Ur,
  number: Yr,
  boolean: Wr,
  function: Mr,
  json: Br
};
function zr(r) {
  return r.replace(
    /([a-z0-9])([A-Z])/g,
    (t, a, o) => `${a}-${o.toLowerCase()}`
  );
}
const te = Symbol.for("r2wc.render"), ne = Symbol.for("r2wc.connected"), V = Symbol.for("r2wc.context"), I = Symbol.for("r2wc.props");
function Hr(r, t, a) {
  var o, v, x;
  t.props || (t.props = r.propTypes ? Object.keys(r.propTypes) : []), t.events || (t.events = []);
  const R = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), E = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), f = {}, T = {}, y = {}, w = {};
  for (const m of R) {
    f[m] = Array.isArray(t.props) ? "string" : t.props[m];
    const _ = zr(m);
    y[m] = _, w[_] = m;
  }
  for (const m of E)
    T[m] = Array.isArray(t.events) ? {} : t.events[m];
  class C extends HTMLElement {
    constructor() {
      super(), re(this, x, !0), re(this, v), re(this, o, {}), re(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[I].container = this.container;
      for (const _ of R) {
        const A = y[_], P = this.getAttribute(A), k = f[_], j = k ? he[k] : null;
        j != null && j.parse && P && (this[I][_] = j.parse(P, A, this));
      }
      for (const _ of E)
        this[I][_] = (A) => {
          const P = _.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(P, { detail: A, ...T[_] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(w);
    }
    connectedCallback() {
      this[ne] = !0, this[te]();
    }
    disconnectedCallback() {
      this[ne] = !1, this[V] && a.unmount(this[V]), delete this[V];
    }
    attributeChangedCallback(_, A, P) {
      const k = w[_], j = f[k], b = j ? he[j] : null;
      k in f && b != null && b.parse && P && (this[I][k] = b.parse(P, _, this), this[te]());
    }
    [(x = ne, v = V, o = I, te)]() {
      this[ne] && (this[V] ? a.update(this[V], this[I]) : this[V] = a.mount(
        this.container,
        r,
        this[I]
      ));
    }
  }
  for (const m of R) {
    const _ = y[m], A = f[m];
    Object.defineProperty(C.prototype, m, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[I][m];
      },
      set(P) {
        this[I][m] = P;
        const k = A ? he[A] : null;
        if (k != null && k.stringify) {
          const j = k.stringify(P, _, this);
          this.getAttribute(_) !== j && this.setAttribute(_, j);
        } else
          this[te]();
      }
    });
  }
  return C;
}
function Jr(r, t, a) {
  const o = be(r), v = D.createElement(t, a);
  return o.render(v), {
    root: o,
    ReactComponent: t
  };
}
function qr({ root: r, ReactComponent: t }, a) {
  const o = D.createElement(t, a);
  r.render(o);
}
function Kr({ root: r }) {
  r.unmount();
}
function Zr(r, t = {}) {
  return Hr(r, t, { mount: Jr, update: qr, unmount: Kr });
}
var ge = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Gr() {
  if (He) return J;
  He = 1;
  var r = D, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(E, f, T) {
    var y, w = {}, C = null, m = null;
    T !== void 0 && (C = "" + T), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (y in f) o.call(f, y) && !x.hasOwnProperty(y) && (w[y] = f[y]);
    if (E && E.defaultProps) for (y in f = E.defaultProps, f) w[y] === void 0 && (w[y] = f[y]);
    return { $$typeof: t, type: E, key: C, ref: m, props: w, _owner: v.current };
  }
  return J.Fragment = a, J.jsx = R, J.jsxs = R, J;
}
var q = {}, Je;
function Xr() {
  if (Je) return q;
  Je = 1;
  var r = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return r.NODE_ENV !== "production" && function() {
    var t = D, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), f = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), A = Symbol.iterator, P = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = A && e[A] || e[P];
      return typeof n == "function" ? n : null;
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
          i[s - 1] = arguments[s];
        Xe("error", e, i);
      }
    }
    function Xe(e, n, i) {
      {
        var s = j.ReactDebugCurrentFrame, d = s.getStackAddendum();
        d !== "" && (n += "%s", i = i.concat([d]));
        var p = i.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Qe = !1, er = !1, rr = !1, tr = !1, nr = !1, xe;
    xe = Symbol.for("react.module.reference");
    function ar(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === R || nr || e === x || e === y || e === w || tr || e === _ || Qe || er || rr || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === C || e.$$typeof === E || e.$$typeof === f || e.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === xe || e.getModuleId !== void 0));
    }
    function ir(e, n, i) {
      var s = e.displayName;
      if (s)
        return s;
      var d = n.displayName || n.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function Ee(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case o:
          return "Portal";
        case R:
          return "Profiler";
        case x:
          return "StrictMode";
        case y:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var n = e;
            return Ee(n) + ".Consumer";
          case E:
            var i = e;
            return Ee(i._context) + ".Provider";
          case T:
            return ir(e, e.render, "ForwardRef");
          case C:
            var s = e.displayName || null;
            return s !== null ? s : F(e.type) || "Memo";
          case m: {
            var d = e, p = d._payload, c = d._init;
            try {
              return F(c(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, U = 0, we, je, Re, Ce, Oe, Se, Te;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function or() {
      {
        if (U === 0) {
          we = console.log, je = console.info, Re = console.warn, Ce = console.error, Oe = console.group, Se = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
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
    function sr() {
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
              value: je
            }),
            warn: L({}, e, {
              value: Re
            }),
            error: L({}, e, {
              value: Ce
            }),
            group: L({}, e, {
              value: Oe
            }),
            groupCollapsed: L({}, e, {
              value: Se
            }),
            groupEnd: L({}, e, {
              value: Te
            })
          });
        }
        U < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = j.ReactCurrentDispatcher, le;
    function Z(e, n, i) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (d) {
            var s = d.stack.trim().match(/\n( *(at )?)/);
            le = s && s[1] || "";
          }
        return `
` + le + e;
      }
    }
    var ue = !1, G;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      G = new lr();
    }
    function ke(e, n) {
      if (!e || ue)
        return "";
      {
        var i = G.get(e);
        if (i !== void 0)
          return i;
      }
      var s;
      ue = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = se.current, se.current = null, or();
      try {
        if (n) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (S) {
              s = S;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (S) {
              s = S;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            s = S;
          }
          e();
        }
      } catch (S) {
        if (S && s && typeof S.stack == "string") {
          for (var u = S.stack.split(`
`), O = s.stack.split(`
`), h = u.length - 1, g = O.length - 1; h >= 1 && g >= 0 && u[h] !== O[g]; )
            g--;
          for (; h >= 1 && g >= 0; h--, g--)
            if (u[h] !== O[g]) {
              if (h !== 1 || g !== 1)
                do
                  if (h--, g--, g < 0 || u[h] !== O[g]) {
                    var N = `
` + u[h].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, N), N;
                  }
                while (h >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ue = !1, se.current = p, sr(), Error.prepareStackTrace = d;
      }
      var M = e ? e.displayName || e.name : "", $ = M ? Z(M) : "";
      return typeof e == "function" && G.set(e, $), $;
    }
    function ur(e, n, i) {
      return ke(e, !1);
    }
    function cr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function X(e, n, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, cr(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case y:
          return Z("Suspense");
        case w:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            return ur(e.render);
          case C:
            return X(e.type, n, i);
          case m: {
            var s = e, d = s._payload, p = s._init;
            try {
              return X(p(d), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Ne = {}, Ae = j.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var n = e._owner, i = X(e.type, e._source, n ? n.type : null);
        Ae.setExtraStackFrame(i);
      } else
        Ae.setExtraStackFrame(null);
    }
    function fr(e, n, i, s, d) {
      {
        var p = Function.call.bind(z);
        for (var c in e)
          if (p(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var O = Error((s || "React class") + ": " + i + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              u = e[c](n, c, s, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              u = h;
            }
            u && !(u instanceof Error) && (Q(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", i, c, typeof u), Q(null)), u instanceof Error && !(u.message in Ne) && (Ne[u.message] = !0, Q(d), b("Failed %s type: %s", i, u.message), Q(null));
          }
      }
    }
    var dr = Array.isArray;
    function ce(e) {
      return dr(e);
    }
    function vr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function pr(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Fe(e) {
      if (pr(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(e)), De(e);
    }
    var H = j.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Le, fe;
    fe = {};
    function hr(e) {
      if (z.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function br(e) {
      if (z.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function gr(e, n) {
      if (typeof e.ref == "string" && H.current && n && H.current.stateNode !== n) {
        var i = F(H.current.type);
        fe[i] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(H.current.type), e.ref), fe[i] = !0);
      }
    }
    function yr(e, n) {
      {
        var i = function() {
          Ie || (Ie = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function _r(e, n) {
      {
        var i = function() {
          Le || (Le = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var xr = function(e, n, i, s, d, p, c) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: i,
        props: c,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function Er(e, n, i, s, d) {
      {
        var p, c = {}, u = null, O = null;
        i !== void 0 && (Fe(i), u = "" + i), br(n) && (Fe(n.key), u = "" + n.key), hr(n) && (O = n.ref, gr(n, d));
        for (p in n)
          z.call(n, p) && !mr.hasOwnProperty(p) && (c[p] = n[p]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (p in h)
            c[p] === void 0 && (c[p] = h[p]);
        }
        if (u || O) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && yr(c, g), O && _r(c, g);
        }
        return xr(e, u, O, d, s, H.current, c);
      }
    }
    var de = j.ReactCurrentOwner, $e = j.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var n = e._owner, i = X(e.type, e._source, n ? n.type : null);
        $e.setExtraStackFrame(i);
      } else
        $e.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ve() {
      {
        if (de.current) {
          var e = F(de.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wr(e) {
      return "";
    }
    var We = {};
    function jr(e) {
      {
        var n = Ve();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function Me(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = jr(n);
        if (We[i])
          return;
        We[i] = !0;
        var s = "";
        e && e._owner && e._owner !== de.current && (s = " It was passed a child from " + F(e._owner.type) + "."), W(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, s), W(null);
      }
    }
    function Be(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var i = 0; i < e.length; i++) {
            var s = e[i];
            pe(s) && Me(s, n);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = k(e);
          if (typeof d == "function" && d !== e.entries)
            for (var p = d.call(e), c; !(c = p.next()).done; )
              pe(c.value) && Me(c.value, n);
        }
      }
    }
    function Rr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === C))
          i = n.propTypes;
        else
          return;
        if (i) {
          var s = F(n);
          fr(i, e.props, "prop", s, e);
        } else if (n.PropTypes !== void 0 && !ve) {
          ve = !0;
          var d = F(n);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cr(e) {
      {
        for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
          var s = n[i];
          if (s !== "children" && s !== "key") {
            W(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Ye = {};
    function Ue(e, n, i, s, d, p) {
      {
        var c = ar(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = wr();
          O ? u += O : u += Ve();
          var h;
          e === null ? h = "null" : ce(e) ? h = "array" : e !== void 0 && e.$$typeof === a ? (h = "<" + (F(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, u);
        }
        var g = Er(e, n, i, d, p);
        if (g == null)
          return g;
        if (c) {
          var N = n.children;
          if (N !== void 0)
            if (s)
              if (ce(N)) {
                for (var M = 0; M < N.length; M++)
                  Be(N[M], e);
                Object.freeze && Object.freeze(N);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(N, e);
        }
        if (z.call(n, "key")) {
          var $ = F(e), S = Object.keys(n).filter(function(Nr) {
            return Nr !== "key";
          }), me = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[$ + me]) {
            var kr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, me, $, kr, $), Ye[$ + me] = !0;
          }
        }
        return e === v ? Cr(g) : Rr(g), g;
      }
    }
    function Or(e, n, i) {
      return Ue(e, n, i, !0);
    }
    function Sr(e, n, i) {
      return Ue(e, n, i, !1);
    }
    var Tr = Sr, Pr = Or;
    q.Fragment = v, q.jsx = Tr, q.jsxs = Pr;
  }(), q;
}
var Qr = {};
Qr.NODE_ENV === "production" ? ge.exports = Gr() : ge.exports = Xr();
var l = ge.exports;
function et() {
  const { bot_name: r, show_powered_by: t } = K(Y);
  return /* @__PURE__ */ l.jsxs("div", { className: "bg-blue-500 p-1 rounded-t-md", children: [
    /* @__PURE__ */ l.jsx("div", { className: "text-white text-2xl px-2 mb-1", children: r }),
    t === "true" && /* @__PURE__ */ l.jsxs("div", { className: "text-xs text-white px-2 flex justify-start items-center", children: [
      "powered by ",
      /* @__PURE__ */ l.jsx("span", { className: "bg-white mx-2 p-[5px] rounded-lg", children: /* @__PURE__ */ l.jsx("img", { src: "https://keenwi.openhit.com/images/optalk/optalk-logo.png", className: "w-[70px]" }) })
    ] })
  ] });
}
function rt({ message: r }) {
  const { user_avatar: t } = K(Y);
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-row justify-end items-start my-1 py-1 px-2", children: [
    /* @__PURE__ */ l.jsx("div", { name: "user-bubble", className: "bg-blue-100 rounded-md px-2 py-1 max-w-2/3 text-right text-sm text-black", children: r }),
    /* @__PURE__ */ l.jsx("img", { src: t, alt: "user-avatar", className: "w-8 h-8 rounded-full mx-2" })
  ] });
}
function tt({ message: r }) {
  const { bot_avatar: t } = K(Y);
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-row justify-start items-start my-1 py-1 px-2", children: [
    /* @__PURE__ */ l.jsx("div", { className: "bg-black rounded-full py-1 px-2 mx-1 min-w-fit", children: /* @__PURE__ */ l.jsx("img", { src: t, alt: "bot-avatar", className: "w-6 h-7" }) }),
    /* @__PURE__ */ l.jsx("div", { name: "bot-bubble", className: "bg-blue-200 rounded-md px-2 py-1 w-fit text-left", children: r === "Waiting for response from bot..." ? /* @__PURE__ */ l.jsx("div", { className: "p-2 w-fit", children: /* @__PURE__ */ l.jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ l.jsx("div", { className: "w-[5px] h-[5px] bg-blue-900 rounded-full animate-bounce [animation-delay:-0.3s]" }),
      /* @__PURE__ */ l.jsx("div", { className: "w-[5px] h-[5px] bg-blue-900 rounded-full animate-bounce [animation-delay:-0.15s]" }),
      /* @__PURE__ */ l.jsx("div", { className: "w-[5px] h-[5px] bg-blue-900 rounded-full animate-bounce" })
    ] }) }) : /* @__PURE__ */ l.jsx("div", { className: "text-sm text-black", children: r }) })
  ] });
}
function nt({ chatHistory: r }) {
  const { chat_bg_color: t } = K(Y), a = Ar();
  return ye(() => {
    a.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [r]), /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs("div", { className: `flex-grow overflow-y-scroll scroll-smooth px-1 py-1 border-2 border-blue-500 ${t ? `bg-${t}` : "bg-white"}`, children: [
    r.map((o, v) => o.type === "user" ? /* @__PURE__ */ l.jsx(
      rt,
      {
        message: o.message
      },
      v
    ) : /* @__PURE__ */ l.jsx(
      tt,
      {
        message: o.message
      },
      v
    )),
    /* @__PURE__ */ l.jsx("div", { ref: a })
  ] }) });
}
var Ze = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, qe = D.createContext && /* @__PURE__ */ D.createContext(Ze), at = ["attr", "size", "title"];
function it(r, t) {
  if (r == null) return {};
  var a = ot(r, t), o, v;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(r);
    for (v = 0; v < x.length; v++)
      o = x[v], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (a[o] = r[o]);
  }
  return a;
}
function ot(r, t) {
  if (r == null) return {};
  var a = {};
  for (var o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      if (t.indexOf(o) >= 0) continue;
      a[o] = r[o];
    }
  return a;
}
function ie() {
  return ie = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var o in a)
        Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
    }
    return r;
  }, ie.apply(this, arguments);
}
function Ke(r, t) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(v) {
      return Object.getOwnPropertyDescriptor(r, v).enumerable;
    })), a.push.apply(a, o);
  }
  return a;
}
function oe(r) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ke(Object(a), !0).forEach(function(o) {
      st(r, o, a[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Ke(Object(a)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(a, o));
    });
  }
  return r;
}
function st(r, t, a) {
  return t = lt(t), t in r ? Object.defineProperty(r, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = a, r;
}
function lt(r) {
  var t = ut(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ut(r, t) {
  if (typeof r != "object" || !r) return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(r, t || "default");
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function Ge(r) {
  return r && r.map((t, a) => /* @__PURE__ */ D.createElement(t.tag, oe({
    key: a
  }, t.attr), Ge(t.child)));
}
function _e(r) {
  return (t) => /* @__PURE__ */ D.createElement(ct, ie({
    attr: oe({}, r.attr)
  }, t), Ge(r.child));
}
function ct(r) {
  var t = (a) => {
    var {
      attr: o,
      size: v,
      title: x
    } = r, R = it(r, at), E = v || a.size || "1em", f;
    return a.className && (f = a.className), r.className && (f = (f ? f + " " : "") + r.className), /* @__PURE__ */ D.createElement("svg", ie({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, o, R, {
      className: f,
      style: oe(oe({
        color: r.color || a.color
      }, a.style), r.style),
      height: E,
      width: E,
      xmlns: "http://www.w3.org/2000/svg"
    }), x && /* @__PURE__ */ D.createElement("title", null, x), r.children);
  };
  return qe !== void 0 ? /* @__PURE__ */ D.createElement(qe.Consumer, null, (a) => t(a)) : t(Ze);
}
function ft(r) {
  return _e({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" }, child: [] }] })(r);
}
function dt(r) {
  return _e({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z" }, child: [] }] })(r);
}
function vt(r) {
  return _e({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" }, child: [] }] })(r);
}
function pt({ setMessageField: r }) {
  function t() {
    let a = document.getElementById("botimoz-input-field").value;
    a = a.trim(), a.length > 0 && r(a), document.getElementById("botimoz-input-field").value = "";
  }
  return /* @__PURE__ */ l.jsx("div", { className: "bg-blue-500 p-1 rounded-b-md", children: /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-center", children: [
    /* @__PURE__ */ l.jsx("div", { className: "text-sm m-1 py-1 px-2 rounded-full hover:bg-blue-400 transition", children: /* @__PURE__ */ l.jsx(dt, { size: 20, className: "text-white" }) }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        id: "botimoz-input-field",
        type: "text",
        placeholder: "Type a message...",
        className: "w-full p-1 m-1 rounded-full bg-white",
        onKeyDown: (a) => {
          a.key === "Enter" && t();
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        className: "text-white py-1 px-3 m-1 rounded-full hover:bg-blue-400 transition",
        onClick: () => t(),
        children: "Send"
      }
    )
  ] }) });
}
const B = {
  BOT_ID: "",
  BOT_SECRET: "",
  SESSION_ID: "",
  CHAT_URL: "https://stg.optalk.ai/api/chatter/v1/bots/chat"
};
function mt({ className: r }) {
  const { bot_greeting: t } = K(Y), [a, o] = ae(""), [v, x] = ae([
    {
      type: "bot",
      message: t
    }
  ]);
  ye(() => {
    a.trim() !== "" && (x((E) => [
      ...E,
      {
        type: "user",
        message: a
      },
      {
        type: "bot",
        message: "Waiting for response from bot..."
      }
    ]), R(a));
  }, [a]);
  const R = Dr((E) => {
    (async (T) => {
      let y = {
        request: {
          message: T
        },
        session_id: "",
        bot_id: B.BOT_ID,
        bot_secret: B.BOT_SECRET
      }, w;
      try {
        w = await fetch(B.CHAT_URL, {
          method: "POST",
          body: JSON.stringify(y),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }), w = await w.json(), x((C) => [
          ...C.slice(0, -1),
          {
            type: "bot",
            message: w.data.response
          }
        ]);
      } catch (C) {
        console.error("Error in fetching response from bot", C);
      }
    })(E);
  });
  return /* @__PURE__ */ l.jsxs("div", { className: `h-[500px] w-[350px] rounded-md flex flex-col justify-start p-0 ${r}`, children: [
    /* @__PURE__ */ l.jsx(et, {}),
    /* @__PURE__ */ l.jsx(nt, { chatHistory: v }),
    /* @__PURE__ */ l.jsx(pt, { setMessageField: o })
  ] });
}
function ht({ open: r, setOpen: t }) {
  return /* @__PURE__ */ l.jsx("main", { children: /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center",
      onClick: () => t(!r),
      children: /* @__PURE__ */ l.jsxs("div", { className: "fixed", children: [
        /* @__PURE__ */ l.jsx(vt, { color: "white", className: `${r ? "scale-100 size-10" : "scale-0 size-0"} transition` }),
        /* @__PURE__ */ l.jsx(ft, { size: 40, color: "white", className: `${r ? "scale-0 size-0" : "scale-100 size-10"} transition` })
      ] })
    }
  ) });
}
const Y = Fr();
function bt(r) {
  const [t, a] = ae(r.start_open || !1), [o, v] = ae(!1), x = r, R = r.license;
  return ye(() => {
    const f = atob(R).split(";");
    B.BOT_ID = f[0], B.BOT_SECRET = f[1], B.SESSION_ID = f[2], v(!0);
  }, []), /* @__PURE__ */ l.jsx(l.Fragment, { children: o && /* @__PURE__ */ l.jsx(Y.Provider, { value: x, children: /* @__PURE__ */ l.jsxs("main", { className: "flex justify-start items-end m-5", children: [
    /* @__PURE__ */ l.jsx(
      mt,
      {
        className: `${t ? "block" : "hidden"} mb-12`
      }
    ),
    /* @__PURE__ */ l.jsx(ht, { open: t, setOpen: a })
  ] }) }) });
}
const gt = Zr(bt, {
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
customElements.define("botimoz-widget", gt);
