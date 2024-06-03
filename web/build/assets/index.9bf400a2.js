function vx(e, t) {
  return (
    t.forEach(function (r) {
      r &&
        typeof r != "string" &&
        !Array.isArray(r) &&
        Object.keys(r).forEach(function (n) {
          if (n !== "default" && !(n in e)) {
            var o = Object.getOwnPropertyDescriptor(r, n);
            Object.defineProperty(
              e,
              n,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: function () {
                      return r[n];
                    },
                  }
            );
          }
        });
    }),
    Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    )
  );
}
const hx = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
};
hx();
var g = { exports: {} },
  J = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var hp = Object.getOwnPropertySymbols,
  yx = Object.prototype.hasOwnProperty,
  wx = Object.prototype.propertyIsEnumerable;
function _x(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function Sx() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
    var n = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i];
    });
    if (n.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (i) {
        o[i] = i;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var P0 = Sx()
  ? Object.assign
  : function (e, t) {
      for (var r, n = _x(e), o, i = 1; i < arguments.length; i++) {
        r = Object(arguments[i]);
        for (var l in r) yx.call(r, l) && (n[l] = r[l]);
        if (hp) {
          o = hp(r);
          for (var a = 0; a < o.length; a++)
            wx.call(r, o[a]) && (n[o[a]] = r[o[a]]);
        }
      }
      return n;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tf = P0,
  Qn = 60103,
  $0 = 60106;
J.Fragment = 60107;
J.StrictMode = 60108;
J.Profiler = 60114;
var O0 = 60109,
  C0 = 60110,
  E0 = 60112;
J.Suspense = 60113;
var k0 = 60115,
  R0 = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var St = Symbol.for;
  (Qn = St("react.element")),
    ($0 = St("react.portal")),
    (J.Fragment = St("react.fragment")),
    (J.StrictMode = St("react.strict_mode")),
    (J.Profiler = St("react.profiler")),
    (O0 = St("react.provider")),
    (C0 = St("react.context")),
    (E0 = St("react.forward_ref")),
    (J.Suspense = St("react.suspense")),
    (k0 = St("react.memo")),
    (R0 = St("react.lazy"));
}
var yp = typeof Symbol == "function" && Symbol.iterator;
function bx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yp && e[yp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function Ci(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var I0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  N0 = {};
function Zn(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = N0),
    (this.updater = r || I0);
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(Ci(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function z0() {}
z0.prototype = Zn.prototype;
function Mf(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = N0),
    (this.updater = r || I0);
}
var jf = (Mf.prototype = new z0());
jf.constructor = Mf;
Tf(jf, Zn.prototype);
jf.isPureReactComponent = !0;
var Lf = { current: null },
  D0 = Object.prototype.hasOwnProperty,
  T0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M0(e, t, r) {
  var n,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      D0.call(t, n) && !T0.hasOwnProperty(n) && (o[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) o.children = r;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
  return {
    $$typeof: Qn,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Lf.current,
  };
}
function xx(e, t) {
  return {
    $$typeof: Qn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ff(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qn;
}
function Px(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var wp = /\/+/g;
function $u(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Px("" + e.key)
    : t.toString(36);
}
function Ol(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qn:
          case $0:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = n === "" ? "." + $u(l, 0) : n),
      Array.isArray(o)
        ? ((r = ""),
          e != null && (r = e.replace(wp, "$&/") + "/"),
          Ol(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ff(o) &&
            (o = xx(
              o,
              r +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(wp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (n = n === "" ? "." : n + ":"), Array.isArray(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = n + $u(i, a);
      l += Ol(i, t, r, s, o);
    }
  else if (((s = bx(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = n + $u(i, a++)), (l += Ol(i, t, r, s, o));
  else if (i === "object")
    throw (
      ((t = "" + e),
      Error(
        Ci(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
    );
  return l;
}
function Qi(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    Ol(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function $x(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (r) {
          e._status === 0 &&
            ((r = r.default), (e._status = 1), (e._result = r));
        },
        function (r) {
          e._status === 0 && ((e._status = 2), (e._result = r));
        }
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var j0 = { current: null };
function er() {
  var e = j0.current;
  if (e === null) throw Error(Ci(321));
  return e;
}
var Ox = {
  ReactCurrentDispatcher: j0,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Lf,
  IsSomeRendererActing: { current: !1 },
  assign: Tf,
};
J.Children = {
  map: Qi,
  forEach: function (e, t, r) {
    Qi(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Qi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Qi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ff(e)) throw Error(Ci(143));
    return e;
  },
};
J.Component = Zn;
J.PureComponent = Mf;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ox;
J.cloneElement = function (e, t, r) {
  if (e == null) throw Error(Ci(267, e));
  var n = Tf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Lf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      D0.call(t, s) &&
        !T0.hasOwnProperty(s) &&
        (n[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: Qn, type: e.type, key: o, ref: i, props: n, _owner: l };
};
J.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: C0,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: O0, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = M0;
J.createFactory = function (e) {
  var t = M0.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: E0, render: e };
};
J.isValidElement = Ff;
J.lazy = function (e) {
  return { $$typeof: R0, _payload: { _status: -1, _result: e }, _init: $x };
};
J.memo = function (e, t) {
  return { $$typeof: k0, type: e, compare: t === void 0 ? null : t };
};
J.useCallback = function (e, t) {
  return er().useCallback(e, t);
};
J.useContext = function (e, t) {
  return er().useContext(e, t);
};
J.useDebugValue = function () {};
J.useEffect = function (e, t) {
  return er().useEffect(e, t);
};
J.useImperativeHandle = function (e, t, r) {
  return er().useImperativeHandle(e, t, r);
};
J.useLayoutEffect = function (e, t) {
  return er().useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return er().useMemo(e, t);
};
J.useReducer = function (e, t, r) {
  return er().useReducer(e, t, r);
};
J.useRef = function (e) {
  return er().useRef(e);
};
J.useState = function (e) {
  return er().useState(e);
};
J.version = "17.0.2";
g.exports = J;
var E = g.exports,
  li = vx({ __proto__: null, default: E }, [g.exports]),
  Ei = { exports: {} },
  ht = {},
  L0 = { exports: {} },
  F0 = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, r, n, o;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var s = null,
      u = null,
      c = function () {
        if (s !== null)
          try {
            var R = e.unstable_now();
            s(!0, R), (s = null);
          } catch (T) {
            throw (setTimeout(c, 0), T);
          }
      };
    (t = function (R) {
      s !== null ? setTimeout(t, 0, R) : ((s = R), setTimeout(c, 0));
    }),
      (r = function (R, T) {
        u = setTimeout(R, T);
      }),
      (n = function () {
        clearTimeout(u);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (o = e.unstable_forceFrameRate = function () {});
  } else {
    var f = window.setTimeout,
      d = window.clearTimeout;
    if (typeof console < "u") {
      var p = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof p != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          );
    }
    var y = !1,
      w = null,
      v = -1,
      m = 5,
      h = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= h;
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (R) {
        0 > R || 125 < R
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (m = 0 < R ? Math.floor(1e3 / R) : 5);
      });
    var _ = new MessageChannel(),
      b = _.port2;
    (_.port1.onmessage = function () {
      if (w !== null) {
        var R = e.unstable_now();
        h = R + m;
        try {
          w(!0, R) ? b.postMessage(null) : ((y = !1), (w = null));
        } catch (T) {
          throw (b.postMessage(null), T);
        }
      } else y = !1;
    }),
      (t = function (R) {
        (w = R), y || ((y = !0), b.postMessage(null));
      }),
      (r = function (R, T) {
        v = f(function () {
          R(e.unstable_now());
        }, T);
      }),
      (n = function () {
        d(v), (v = -1);
      });
  }
  function O(R, T) {
    var A = R.length;
    R.push(T);
    e: for (;;) {
      var k = (A - 1) >>> 1,
        M = R[k];
      if (M !== void 0 && 0 < $(M, T)) (R[k] = T), (R[A] = M), (A = k);
      else break e;
    }
  }
  function x(R) {
    return (R = R[0]), R === void 0 ? null : R;
  }
  function P(R) {
    var T = R[0];
    if (T !== void 0) {
      var A = R.pop();
      if (A !== T) {
        R[0] = A;
        e: for (var k = 0, M = R.length; k < M; ) {
          var G = 2 * (k + 1) - 1,
            Z = R[G],
            ze = G + 1,
            ae = R[ze];
          if (Z !== void 0 && 0 > $(Z, A))
            ae !== void 0 && 0 > $(ae, Z)
              ? ((R[k] = ae), (R[ze] = A), (k = ze))
              : ((R[k] = Z), (R[G] = A), (k = G));
          else if (ae !== void 0 && 0 > $(ae, A))
            (R[k] = ae), (R[ze] = A), (k = ze);
          else break e;
        }
      }
      return T;
    }
    return null;
  }
  function $(R, T) {
    var A = R.sortIndex - T.sortIndex;
    return A !== 0 ? A : R.id - T.id;
  }
  var C = [],
    I = [],
    z = 1,
    D = null,
    j = 3,
    B = !1,
    V = !1,
    W = !1;
  function re(R) {
    for (var T = x(I); T !== null; ) {
      if (T.callback === null) P(I);
      else if (T.startTime <= R)
        P(I), (T.sortIndex = T.expirationTime), O(C, T);
      else break;
      T = x(I);
    }
  }
  function se(R) {
    if (((W = !1), re(R), !V))
      if (x(C) !== null) (V = !0), t(ie);
      else {
        var T = x(I);
        T !== null && r(se, T.startTime - R);
      }
  }
  function ie(R, T) {
    (V = !1), W && ((W = !1), n()), (B = !0);
    var A = j;
    try {
      for (
        re(T), D = x(C);
        D !== null &&
        (!(D.expirationTime > T) || (R && !e.unstable_shouldYield()));

      ) {
        var k = D.callback;
        if (typeof k == "function") {
          (D.callback = null), (j = D.priorityLevel);
          var M = k(D.expirationTime <= T);
          (T = e.unstable_now()),
            typeof M == "function" ? (D.callback = M) : D === x(C) && P(C),
            re(T);
        } else P(C);
        D = x(C);
      }
      if (D !== null) var G = !0;
      else {
        var Z = x(I);
        Z !== null && r(se, Z.startTime - T), (G = !1);
      }
      return G;
    } finally {
      (D = null), (j = A), (B = !1);
    }
  }
  var Ne = o;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      V || B || ((V = !0), t(ie));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return j;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return x(C);
    }),
    (e.unstable_next = function (R) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = j;
      }
      var A = j;
      j = T;
      try {
        return R();
      } finally {
        j = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = Ne),
    (e.unstable_runWithPriority = function (R, T) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var A = j;
      j = R;
      try {
        return T();
      } finally {
        j = A;
      }
    }),
    (e.unstable_scheduleCallback = function (R, T, A) {
      var k = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? k + A : k))
          : (A = k),
        R)
      ) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return (
        (M = A + M),
        (R = {
          id: z++,
          callback: T,
          priorityLevel: R,
          startTime: A,
          expirationTime: M,
          sortIndex: -1,
        }),
        A > k
          ? ((R.sortIndex = A),
            O(I, R),
            x(C) === null && R === x(I) && (W ? n() : (W = !0), r(se, A - k)))
          : ((R.sortIndex = M), O(C, R), V || B || ((V = !0), t(ie))),
        R
      );
    }),
    (e.unstable_wrapCallback = function (R) {
      var T = j;
      return function () {
        var A = j;
        j = T;
        try {
          return R.apply(this, arguments);
        } finally {
          j = A;
        }
      };
    });
})(F0);
L0.exports = F0;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ks = g.exports,
  de = P0,
  Oe = L0.exports;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!ks) throw Error(N(227));
var A0 = new Set(),
  ai = {};
function sn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (ai[e] = t, e = 0; e < t.length; e++) A0.add(t[e]);
}
var Kt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Cx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _p = Object.prototype.hasOwnProperty,
  Sp = {},
  bp = {};
function Ex(e) {
  return _p.call(bp, e)
    ? !0
    : _p.call(Sp, e)
    ? !1
    : Cx.test(e)
    ? (bp[e] = !0)
    : ((Sp[e] = !0), !1);
}
function kx(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rx(e, t, r, n) {
  if (t === null || typeof t > "u" || kx(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, r, n, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ie[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Af = /[\-:]([a-z])/g;
function Vf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Af, Vf);
    Ie[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Af, Vf);
    Ie[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Af, Vf);
  Ie[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hf(e, t, r, n) {
  var o = Ie.hasOwnProperty(t) ? Ie[t] : null,
    i =
      o !== null
        ? o.type === 0
        : n
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  i ||
    (Rx(t, r, o, n) && (r = null),
    n || o === null
      ? Ex(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var un = ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fo = 60103,
  Yr = 60106,
  sr = 60107,
  Bf = 60108,
  Uo = 60114,
  Wf = 60109,
  Uf = 60110,
  Rs = 60112,
  Go = 60113,
  Bl = 60120,
  Is = 60115,
  Gf = 60116,
  Yf = 60121,
  Xf = 60128,
  V0 = 60129,
  qf = 60130,
  bc = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var Pe = Symbol.for;
  (Fo = Pe("react.element")),
    (Yr = Pe("react.portal")),
    (sr = Pe("react.fragment")),
    (Bf = Pe("react.strict_mode")),
    (Uo = Pe("react.profiler")),
    (Wf = Pe("react.provider")),
    (Uf = Pe("react.context")),
    (Rs = Pe("react.forward_ref")),
    (Go = Pe("react.suspense")),
    (Bl = Pe("react.suspense_list")),
    (Is = Pe("react.memo")),
    (Gf = Pe("react.lazy")),
    (Yf = Pe("react.block")),
    Pe("react.scope"),
    (Xf = Pe("react.opaque.id")),
    (V0 = Pe("react.debug_trace_mode")),
    (qf = Pe("react.offscreen")),
    (bc = Pe("react.legacy_hidden"));
}
var xp = typeof Symbol == "function" && Symbol.iterator;
function wo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xp && e[xp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ou;
function Ao(e) {
  if (Ou === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ou = (t && t[1]) || "";
    }
  return (
    `
` +
    Ou +
    e
  );
}
var Cu = !1;
function Zi(e, t) {
  if (!e || Cu) return "";
  Cu = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var n = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          n = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          i = n.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a]))
                return (
                  `
` + o[l].replace(" at new ", " at ")
                );
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Cu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Ao(e) : "";
}
function Ix(e) {
  switch (e.tag) {
    case 5:
      return Ao(e.type);
    case 16:
      return Ao("Lazy");
    case 13:
      return Ao("Suspense");
    case 19:
      return Ao("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zi(e.type, !1)), e;
    case 11:
      return (e = Zi(e.type.render, !1)), e;
    case 22:
      return (e = Zi(e.type._render, !1)), e;
    case 1:
      return (e = Zi(e.type, !0)), e;
    default:
      return "";
  }
}
function Nn(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sr:
      return "Fragment";
    case Yr:
      return "Portal";
    case Uo:
      return "Profiler";
    case Bf:
      return "StrictMode";
    case Go:
      return "Suspense";
    case Bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uf:
        return (e.displayName || "Context") + ".Consumer";
      case Wf:
        return (e._context.displayName || "Context") + ".Provider";
      case Rs:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case Is:
        return Nn(e.type);
      case Yf:
        return Nn(e._render);
      case Gf:
        (t = e._payload), (e = e._init);
        try {
          return Nn(e(t));
        } catch {}
    }
  return null;
}
function Pr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function H0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Nx(e) {
  var t = H0(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (n = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ji(e) {
  e._valueTracker || (e._valueTracker = Nx(e));
}
function B0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = H0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Wl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xc(e, t) {
  var r = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Pp(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Pr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function W0(e, t) {
  (t = t.checked), t != null && Hf(e, "checked", t, !1);
}
function Pc(e, t) {
  W0(e, t);
  var r = Pr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? $c(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && $c(e, t.type, Pr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $p(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function $c(e, t, r) {
  (t !== "number" || Wl(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
function zx(e) {
  var t = "";
  return (
    ks.Children.forEach(e, function (r) {
      r != null && (t += r);
    }),
    t
  );
}
function Oc(e, t) {
  return (
    (e = de({ children: void 0 }, t)),
    (t = zx(t.children)) && (e.children = t),
    e
  );
}
function zn(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Pr(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Op(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(N(92));
      if (Array.isArray(r)) {
        if (!(1 >= r.length)) throw Error(N(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Pr(r) };
}
function U0(e, t) {
  var r = Pr(t.value),
    n = Pr(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Cp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Ec = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function G0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? G0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var el,
  Y0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Ec.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        el = el || document.createElement("div"),
          el.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = el.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function si(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yo = {
    animationIterationCount: !0,
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
    strokeWidth: !0,
  },
  Dx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yo).forEach(function (e) {
  Dx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yo[t] = Yo[e]);
  });
});
function X0(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Yo.hasOwnProperty(e) && Yo[e])
    ? ("" + t).trim()
    : t + "px";
}
function q0(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = X0(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var Tx = de(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Rc(e, t) {
  if (t) {
    if (Tx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Ic(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
function Kf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nc = null,
  Dn = null,
  Tn = null;
function Ep(e) {
  if ((e = Ri(e))) {
    if (typeof Nc != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = js(t)), Nc(e.stateNode, e.type, t));
  }
}
function K0(e) {
  Dn ? (Tn ? Tn.push(e) : (Tn = [e])) : (Dn = e);
}
function Q0() {
  if (Dn) {
    var e = Dn,
      t = Tn;
    if (((Tn = Dn = null), Ep(e), t)) for (e = 0; e < t.length; e++) Ep(t[e]);
  }
}
function Qf(e, t) {
  return e(t);
}
function Z0(e, t, r, n, o) {
  return e(t, r, n, o);
}
function Zf() {}
var J0 = Qf,
  Xr = !1,
  Eu = !1;
function Jf() {
  (Dn !== null || Tn !== null) && (Zf(), Q0());
}
function Mx(e, t, r) {
  if (Eu) return e(t, r);
  Eu = !0;
  try {
    return J0(e, t, r);
  } finally {
    (Eu = !1), Jf();
  }
}
function ui(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = js(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
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
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(N(231, t, typeof r));
  return r;
}
var zc = !1;
if (Kt)
  try {
    var _o = {};
    Object.defineProperty(_o, "passive", {
      get: function () {
        zc = !0;
      },
    }),
      window.addEventListener("test", _o, _o),
      window.removeEventListener("test", _o, _o);
  } catch {
    zc = !1;
  }
function jx(e, t, r, n, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Xo = !1,
  Ul = null,
  Gl = !1,
  Dc = null,
  Lx = {
    onError: function (e) {
      (Xo = !0), (Ul = e);
    },
  };
function Fx(e, t, r, n, o, i, l, a, s) {
  (Xo = !1), (Ul = null), jx.apply(Lx, arguments);
}
function Ax(e, t, r, n, o, i, l, a, s) {
  if ((Fx.apply(this, arguments), Xo)) {
    if (Xo) {
      var u = Ul;
      (Xo = !1), (Ul = null);
    } else throw Error(N(198));
    Gl || ((Gl = !0), (Dc = u));
  }
}
function cn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) !== 0 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function ey(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function kp(e) {
  if (cn(e) !== e) throw Error(N(188));
}
function Vx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return kp(o), e;
        if (i === n) return kp(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(N(189));
      }
    }
    if (r.alternate !== n) throw Error(N(190));
  }
  if (r.tag !== 3) throw Error(N(188));
  return r.stateNode.current === r ? e : t;
}
function ty(e) {
  if (((e = Vx(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Rp(e, t) {
  for (var r = e.alternate; t !== null; ) {
    if (t === e || t === r) return !0;
    t = t.return;
  }
  return !1;
}
var ry,
  ed,
  ny,
  oy,
  Tc = !1,
  Et = [],
  gr = null,
  mr = null,
  vr = null,
  ci = new Map(),
  fi = new Map(),
  So = [],
  Ip =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Mc(e, t, r, n, o) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: r | 16,
    nativeEvent: o,
    targetContainers: [n],
  };
}
function Np(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gr = null;
      break;
    case "dragenter":
    case "dragleave":
      mr = null;
      break;
    case "mouseover":
    case "mouseout":
      vr = null;
      break;
    case "pointerover":
    case "pointerout":
      ci.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fi.delete(t.pointerId);
  }
}
function bo(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = Mc(t, r, n, o, i)),
      t !== null && ((t = Ri(t)), t !== null && ed(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Hx(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (gr = bo(gr, e, t, r, n, o)), !0;
    case "dragenter":
      return (mr = bo(mr, e, t, r, n, o)), !0;
    case "mouseover":
      return (vr = bo(vr, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ci.set(i, bo(ci.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), fi.set(i, bo(fi.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function Bx(e) {
  var t = qr(e.target);
  if (t !== null) {
    var r = cn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = ey(r)), t !== null)) {
          (e.blockedOn = t),
            oy(e.lanePriority, function () {
              Oe.unstable_runWithPriority(e.priority, function () {
                ny(r);
              });
            });
          return;
        }
      } else if (t === 3 && r.stateNode.hydrate) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = od(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r !== null)
      return (t = Ri(r)), t !== null && ed(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function zp(e, t, r) {
  Cl(e) && r.delete(t);
}
function Wx() {
  for (Tc = !1; 0 < Et.length; ) {
    var e = Et[0];
    if (e.blockedOn !== null) {
      (e = Ri(e.blockedOn)), e !== null && ry(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = od(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r !== null) {
        e.blockedOn = r;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && Et.shift();
  }
  gr !== null && Cl(gr) && (gr = null),
    mr !== null && Cl(mr) && (mr = null),
    vr !== null && Cl(vr) && (vr = null),
    ci.forEach(zp),
    fi.forEach(zp);
}
function xo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Tc ||
      ((Tc = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Wx)));
}
function iy(e) {
  function t(o) {
    return xo(o, e);
  }
  if (0 < Et.length) {
    xo(Et[0], e);
    for (var r = 1; r < Et.length; r++) {
      var n = Et[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    gr !== null && xo(gr, e),
      mr !== null && xo(mr, e),
      vr !== null && xo(vr, e),
      ci.forEach(t),
      fi.forEach(t),
      r = 0;
    r < So.length;
    r++
  )
    (n = So[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < So.length && ((r = So[0]), r.blockedOn === null); )
    Bx(r), r.blockedOn === null && So.shift();
}
function tl(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var $n = {
    animationend: tl("Animation", "AnimationEnd"),
    animationiteration: tl("Animation", "AnimationIteration"),
    animationstart: tl("Animation", "AnimationStart"),
    transitionend: tl("Transition", "TransitionEnd"),
  },
  ku = {},
  ly = {};
Kt &&
  ((ly = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $n.animationend.animation,
    delete $n.animationiteration.animation,
    delete $n.animationstart.animation),
  "TransitionEvent" in window || delete $n.transitionend.transition);
function Ns(e) {
  if (ku[e]) return ku[e];
  if (!$n[e]) return e;
  var t = $n[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in ly) return (ku[e] = t[r]);
  return e;
}
var ay = Ns("animationend"),
  sy = Ns("animationiteration"),
  uy = Ns("animationstart"),
  cy = Ns("transitionend"),
  fy = new Map(),
  td = new Map(),
  Ux = [
    "abort",
    "abort",
    ay,
    "animationEnd",
    sy,
    "animationIteration",
    uy,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    cy,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function rd(e, t) {
  for (var r = 0; r < e.length; r += 2) {
    var n = e[r],
      o = e[r + 1];
    (o = "on" + (o[0].toUpperCase() + o.slice(1))),
      td.set(n, t),
      fy.set(n, o),
      sn(o, [n]);
  }
}
var Gx = Oe.unstable_now;
Gx();
var ue = 8;
function bn(e) {
  if ((1 & e) !== 0) return (ue = 15), 1;
  if ((2 & e) !== 0) return (ue = 14), 2;
  if ((4 & e) !== 0) return (ue = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((ue = 12), t)
    : (e & 32) !== 0
    ? ((ue = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((ue = 10), t)
        : (e & 256) !== 0
        ? ((ue = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((ue = 8), t)
            : (e & 4096) !== 0
            ? ((ue = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((ue = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((ue = 5), t)
                    : e & 67108864
                    ? ((ue = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? ((ue = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((ue = 2), t)
                        : (1073741824 & e) !== 0
                        ? ((ue = 1), 1073741824)
                        : ((ue = 8), e))))));
}
function Yx(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Xx(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(N(358, e));
  }
}
function di(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return (ue = 0);
  var n = 0,
    o = 0,
    i = e.expiredLanes,
    l = e.suspendedLanes,
    a = e.pingedLanes;
  if (i !== 0) (n = i), (o = ue = 15);
  else if (((i = r & 134217727), i !== 0)) {
    var s = i & ~l;
    s !== 0
      ? ((n = bn(s)), (o = ue))
      : ((a &= i), a !== 0 && ((n = bn(a)), (o = ue)));
  } else
    (i = r & ~l),
      i !== 0 ? ((n = bn(i)), (o = ue)) : a !== 0 && ((n = bn(a)), (o = ue));
  if (n === 0) return 0;
  if (
    ((n = 31 - $r(n)),
    (n = r & (((0 > n ? 0 : 1 << n) << 1) - 1)),
    t !== 0 && t !== n && (t & l) === 0)
  ) {
    if ((bn(t), o <= ue)) return t;
    ue = o;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - $r(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function dy(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Yl(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = xn(24 & ~t)), e === 0 ? Yl(10, t) : e;
    case 10:
      return (e = xn(192 & ~t)), e === 0 ? Yl(8, t) : e;
    case 8:
      return (
        (e = xn(3584 & ~t)),
        e === 0 && ((e = xn(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = xn(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(N(358, e));
}
function xn(e) {
  return e & -e;
}
function Ru(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function zs(e, t, r) {
  e.pendingLanes |= t;
  var n = t - 1;
  (e.suspendedLanes &= n),
    (e.pingedLanes &= n),
    (e = e.eventTimes),
    (t = 31 - $r(t)),
    (e[t] = r);
}
var $r = Math.clz32 ? Math.clz32 : Qx,
  qx = Math.log,
  Kx = Math.LN2;
function Qx(e) {
  return e === 0 ? 32 : (31 - ((qx(e) / Kx) | 0)) | 0;
}
var Zx = Oe.unstable_UserBlockingPriority,
  Jx = Oe.unstable_runWithPriority,
  El = !0;
function eP(e, t, r, n) {
  Xr || Zf();
  var o = nd,
    i = Xr;
  Xr = !0;
  try {
    Z0(o, e, t, r, n);
  } finally {
    (Xr = i) || Jf();
  }
}
function tP(e, t, r, n) {
  Jx(Zx, nd.bind(null, e, t, r, n));
}
function nd(e, t, r, n) {
  if (El) {
    var o;
    if ((o = (t & 4) === 0) && 0 < Et.length && -1 < Ip.indexOf(e))
      (e = Mc(null, e, t, r, n)), Et.push(e);
    else {
      var i = od(e, t, r, n);
      if (i === null) o && Np(e, n);
      else {
        if (o) {
          if (-1 < Ip.indexOf(e)) {
            (e = Mc(i, e, t, r, n)), Et.push(e);
            return;
          }
          if (Hx(i, e, t, r, n)) return;
          Np(e, n);
        }
        $y(e, t, n, null, r);
      }
    }
  }
}
function od(e, t, r, n) {
  var o = Kf(n);
  if (((o = qr(o)), o !== null)) {
    var i = cn(o);
    if (i === null) o = null;
    else {
      var l = i.tag;
      if (l === 13) {
        if (((o = ey(i)), o !== null)) return o;
        o = null;
      } else if (l === 3) {
        if (i.stateNode.hydrate)
          return i.tag === 3 ? i.stateNode.containerInfo : null;
        o = null;
      } else i !== o && (o = null);
    }
  }
  return $y(e, t, n, o, r), null;
}
var ur = null,
  id = null,
  kl = null;
function py() {
  if (kl) return kl;
  var e,
    t = id,
    r = t.length,
    n,
    o = "value" in ur ? ur.value : ur.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var l = r - e;
  for (n = 1; n <= l && t[r - n] === o[i - n]; n++);
  return (kl = o.slice(e, 1 < n ? 1 - n : void 0));
}
function Rl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function rl() {
  return !0;
}
function Dp() {
  return !1;
}
function ot(e) {
  function t(r, n, o, i, l) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? rl
        : Dp),
      (this.isPropagationStopped = Dp),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = rl));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = rl));
      },
      persist: function () {},
      isPersistent: rl,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ld = ot(Jn),
  ki = de({}, Jn, { view: 0, detail: 0 }),
  rP = ot(ki),
  Iu,
  Nu,
  Po,
  Ds = de({}, ki, {
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
    getModifierState: ad,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Po &&
            (Po && e.type === "mousemove"
              ? ((Iu = e.screenX - Po.screenX), (Nu = e.screenY - Po.screenY))
              : (Nu = Iu = 0),
            (Po = e)),
          Iu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nu;
    },
  }),
  Tp = ot(Ds),
  nP = de({}, Ds, { dataTransfer: 0 }),
  oP = ot(nP),
  iP = de({}, ki, { relatedTarget: 0 }),
  zu = ot(iP),
  lP = de({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  aP = ot(lP),
  sP = de({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  uP = ot(sP),
  cP = de({}, Jn, { data: 0 }),
  Mp = ot(cP),
  fP = {
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
    MozPrintableKey: "Unidentified",
  },
  dP = {
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
    224: "Meta",
  },
  pP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pP[e]) ? !!t[e] : !1;
}
function ad() {
  return gP;
}
var mP = de({}, ki, {
    key: function (e) {
      if (e.key) {
        var t = fP[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Rl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dP[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ad,
    charCode: function (e) {
      return e.type === "keypress" ? Rl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  vP = ot(mP),
  hP = de({}, Ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  jp = ot(hP),
  yP = de({}, ki, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ad,
  }),
  wP = ot(yP),
  _P = de({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  SP = ot(_P),
  bP = de({}, Ds, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xP = ot(bP),
  PP = [9, 13, 27, 32],
  sd = Kt && "CompositionEvent" in window,
  qo = null;
Kt && "documentMode" in document && (qo = document.documentMode);
var $P = Kt && "TextEvent" in window && !qo,
  gy = Kt && (!sd || (qo && 8 < qo && 11 >= qo)),
  Lp = String.fromCharCode(32),
  Fp = !1;
function my(e, t) {
  switch (e) {
    case "keyup":
      return PP.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function vy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function OP(e, t) {
  switch (e) {
    case "compositionend":
      return vy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fp = !0), Lp);
    case "textInput":
      return (e = t.data), e === Lp && Fp ? null : e;
    default:
      return null;
  }
}
function CP(e, t) {
  if (On)
    return e === "compositionend" || (!sd && my(e, t))
      ? ((e = py()), (kl = id = ur = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return gy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var EP = {
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
  week: !0,
};
function Ap(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!EP[e.type] : t === "textarea";
}
function hy(e, t, r, n) {
  K0(n),
    (t = Xl(t, "onChange")),
    0 < t.length &&
      ((r = new ld("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Ko = null,
  pi = null;
function kP(e) {
  by(e, 0);
}
function Ts(e) {
  var t = En(e);
  if (B0(t)) return e;
}
function RP(e, t) {
  if (e === "change") return t;
}
var yy = !1;
if (Kt) {
  var Du;
  if (Kt) {
    var Tu = "oninput" in document;
    if (!Tu) {
      var Vp = document.createElement("div");
      Vp.setAttribute("oninput", "return;"),
        (Tu = typeof Vp.oninput == "function");
    }
    Du = Tu;
  } else Du = !1;
  yy = Du && (!document.documentMode || 9 < document.documentMode);
}
function Hp() {
  Ko && (Ko.detachEvent("onpropertychange", wy), (pi = Ko = null));
}
function wy(e) {
  if (e.propertyName === "value" && Ts(pi)) {
    var t = [];
    if ((hy(t, pi, e, Kf(e)), (e = kP), Xr)) e(t);
    else {
      Xr = !0;
      try {
        Qf(e, t);
      } finally {
        (Xr = !1), Jf();
      }
    }
  }
}
function IP(e, t, r) {
  e === "focusin"
    ? (Hp(), (Ko = t), (pi = r), Ko.attachEvent("onpropertychange", wy))
    : e === "focusout" && Hp();
}
function NP(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ts(pi);
}
function zP(e, t) {
  if (e === "click") return Ts(t);
}
function DP(e, t) {
  if (e === "input" || e === "change") return Ts(t);
}
function TP(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ct = typeof Object.is == "function" ? Object.is : TP,
  MP = Object.prototype.hasOwnProperty;
function gi(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++)
    if (!MP.call(t, r[n]) || !ct(e[r[n]], t[r[n]])) return !1;
  return !0;
}
function Bp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wp(e, t) {
  var r = Bp(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Bp(r);
  }
}
function _y(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _y(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Up() {
  for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Wl(e.document);
  }
  return t;
}
function jc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var jP = Kt && "documentMode" in document && 11 >= document.documentMode,
  Cn = null,
  Lc = null,
  Qo = null,
  Fc = !1;
function Gp(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Fc ||
    Cn == null ||
    Cn !== Wl(n) ||
    ((n = Cn),
    "selectionStart" in n && jc(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Qo && gi(Qo, n)) ||
      ((Qo = n),
      (n = Xl(Lc, "onSelect")),
      0 < n.length &&
        ((t = new ld("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Cn))));
}
rd(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
rd(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
rd(Ux, 2);
for (
  var Yp =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    Mu = 0;
  Mu < Yp.length;
  Mu++
)
  td.set(Yp[Mu], 0);
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Sy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));
function Xp(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), Ax(n, t, void 0, e), (e.currentTarget = null);
}
function by(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = n.length - 1; 0 <= l; l--) {
          var a = n[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          Xp(o, a, u), (i = s);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (
            ((a = n[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Xp(o, a, u), (i = s);
        }
    }
  }
  if (Gl) throw ((e = Dc), (Gl = !1), (Dc = null), e);
}
function ce(e, t) {
  var r = Cy(t),
    n = e + "__bubble";
  r.has(n) || (Py(t, e, 2, !1), r.add(n));
}
var qp = "_reactListening" + Math.random().toString(36).slice(2);
function xy(e) {
  e[qp] ||
    ((e[qp] = !0),
    A0.forEach(function (t) {
      Sy.has(t) || Kp(t, !1, e, null), Kp(t, !0, e, null);
    }));
}
function Kp(e, t, r, n) {
  var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    i = r;
  if (
    (e === "selectionchange" && r.nodeType !== 9 && (i = r.ownerDocument),
    n !== null && !t && Sy.has(e))
  ) {
    if (e !== "scroll") return;
    (o |= 2), (i = n);
  }
  var l = Cy(i),
    a = e + "__" + (t ? "capture" : "bubble");
  l.has(a) || (t && (o |= 4), Py(i, e, o, t), l.add(a));
}
function Py(e, t, r, n) {
  var o = td.get(t);
  switch (o === void 0 ? 2 : o) {
    case 0:
      o = eP;
      break;
    case 1:
      o = tP;
      break;
    default:
      o = nd;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !zc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function $y(e, t, r, n, o) {
  var i = n;
  if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var a = n.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = qr(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            n = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Mx(function () {
    var u = i,
      c = Kf(r),
      f = [];
    e: {
      var d = fy.get(e);
      if (d !== void 0) {
        var p = ld,
          y = e;
        switch (e) {
          case "keypress":
            if (Rl(r) === 0) break e;
          case "keydown":
          case "keyup":
            p = vP;
            break;
          case "focusin":
            (y = "focus"), (p = zu);
            break;
          case "focusout":
            (y = "blur"), (p = zu);
            break;
          case "beforeblur":
          case "afterblur":
            p = zu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Tp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = oP;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = wP;
            break;
          case ay:
          case sy:
          case uy:
            p = aP;
            break;
          case cy:
            p = SP;
            break;
          case "scroll":
            p = rP;
            break;
          case "wheel":
            p = xP;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = uP;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = jp;
        }
        var w = (t & 4) !== 0,
          v = !w && e === "scroll",
          m = w ? (d !== null ? d + "Capture" : null) : d;
        w = [];
        for (var h = u, _; h !== null; ) {
          _ = h;
          var b = _.stateNode;
          if (
            (_.tag === 5 &&
              b !== null &&
              ((_ = b),
              m !== null && ((b = ui(h, m)), b != null && w.push(mi(h, b, _)))),
            v)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((d = new p(d, y, null, r, c)), f.push({ event: d, listeners: w }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            (t & 16) === 0 &&
            (y = r.relatedTarget || r.fromElement) &&
            (qr(y) || y[eo]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          p
            ? ((y = r.relatedTarget || r.toElement),
              (p = u),
              (y = y ? qr(y) : null),
              y !== null &&
                ((v = cn(y)), y !== v || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((p = null), (y = u)),
          p !== y)
        ) {
          if (
            ((w = Tp),
            (b = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = jp),
              (b = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (v = p == null ? d : En(p)),
            (_ = y == null ? d : En(y)),
            (d = new w(b, h + "leave", p, r, c)),
            (d.target = v),
            (d.relatedTarget = _),
            (b = null),
            qr(c) === u &&
              ((w = new w(m, h + "enter", y, r, c)),
              (w.target = _),
              (w.relatedTarget = v),
              (b = w)),
            (v = b),
            p && y)
          )
            t: {
              for (w = p, m = y, h = 0, _ = w; _; _ = yn(_)) h++;
              for (_ = 0, b = m; b; b = yn(b)) _++;
              for (; 0 < h - _; ) (w = yn(w)), h--;
              for (; 0 < _ - h; ) (m = yn(m)), _--;
              for (; h--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = yn(w)), (m = yn(m));
              }
              w = null;
            }
          else w = null;
          p !== null && Qp(f, d, p, w, !1),
            y !== null && v !== null && Qp(f, v, y, w, !0);
        }
      }
      e: {
        if (
          ((d = u ? En(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var O = RP;
        else if (Ap(d))
          if (yy) O = DP;
          else {
            O = NP;
            var x = IP;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (O = zP);
        if (O && (O = O(e, u))) {
          hy(f, O, r, c);
          break e;
        }
        x && x(e, d, u),
          e === "focusout" &&
            (x = d._wrapperState) &&
            x.controlled &&
            d.type === "number" &&
            $c(d, "number", d.value);
      }
      switch (((x = u ? En(u) : window), e)) {
        case "focusin":
          (Ap(x) || x.contentEditable === "true") &&
            ((Cn = x), (Lc = u), (Qo = null));
          break;
        case "focusout":
          Qo = Lc = Cn = null;
          break;
        case "mousedown":
          Fc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Fc = !1), Gp(f, r, c);
          break;
        case "selectionchange":
          if (jP) break;
        case "keydown":
        case "keyup":
          Gp(f, r, c);
      }
      var P;
      if (sd)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        On
          ? my(e, r) && ($ = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (gy &&
          r.locale !== "ko" &&
          (On || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && On && (P = py())
            : ((ur = c),
              (id = "value" in ur ? ur.value : ur.textContent),
              (On = !0))),
        (x = Xl(u, $)),
        0 < x.length &&
          (($ = new Mp($, e, null, r, c)),
          f.push({ event: $, listeners: x }),
          P ? ($.data = P) : ((P = vy(r)), P !== null && ($.data = P)))),
        (P = $P ? OP(e, r) : CP(e, r)) &&
          ((u = Xl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Mp("onBeforeInput", "beforeinput", null, r, c)),
            f.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    by(f, t);
  });
}
function mi(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Xl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ui(e, r)),
      i != null && n.unshift(mi(e, i, o)),
      (i = ui(e, t)),
      i != null && n.push(mi(e, i, o))),
      (e = e.return);
  }
  return n;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qp(e, t, r, n, o) {
  for (var i = t._reactName, l = []; r !== null && r !== n; ) {
    var a = r,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = ui(r, i)), s != null && l.unshift(mi(r, s, a)))
        : o || ((s = ui(r, i)), s != null && l.push(mi(r, s, a)))),
      (r = r.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
function ql() {}
var ju = null,
  Lu = null;
function Oy(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Ac(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zp = typeof setTimeout == "function" ? setTimeout : void 0,
  LP = typeof clearTimeout == "function" ? clearTimeout : void 0;
function ud(e) {
  e.nodeType === 1
    ? (e.textContent = "")
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function Mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Jp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Fu = 0;
function FP(e) {
  return { $$typeof: Xf, toString: e, valueOf: e };
}
var Ms = Math.random().toString(36).slice(2),
  cr = "__reactFiber$" + Ms,
  Kl = "__reactProps$" + Ms,
  eo = "__reactContainer$" + Ms,
  eg = "__reactEvents$" + Ms;
function qr(e) {
  var t = e[cr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[eo] || r[cr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Jp(e); e !== null; ) {
          if ((r = e[cr])) return r;
          e = Jp(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Ri(e) {
  return (
    (e = e[cr] || e[eo]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function js(e) {
  return e[Kl] || null;
}
function Cy(e) {
  var t = e[eg];
  return t === void 0 && (t = e[eg] = new Set()), t;
}
var Vc = [],
  kn = -1;
function Nr(e) {
  return { current: e };
}
function fe(e) {
  0 > kn || ((e.current = Vc[kn]), (Vc[kn] = null), kn--);
}
function he(e, t) {
  kn++, (Vc[kn] = e.current), (e.current = t);
}
var Or = {},
  Fe = Nr(Or),
  Ye = Nr(!1),
  rn = Or;
function Wn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Or;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ql() {
  fe(Ye), fe(Fe);
}
function tg(e, t, r) {
  if (Fe.current !== Or) throw Error(N(168));
  he(Fe, t), he(Ye, r);
}
function Ey(e, t, r) {
  var n = e.stateNode;
  if (((e = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in e)) throw Error(N(108, Nn(t) || "Unknown", o));
  return de({}, r, n);
}
function Il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Or),
    (rn = Fe.current),
    he(Fe, e),
    he(Ye, Ye.current),
    !0
  );
}
function rg(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(N(169));
  r
    ? ((e = Ey(e, t, rn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      fe(Ye),
      fe(Fe),
      he(Fe, e))
    : fe(Ye),
    he(Ye, r);
}
var cd = null,
  Jr = null,
  AP = Oe.unstable_runWithPriority,
  fd = Oe.unstable_scheduleCallback,
  Hc = Oe.unstable_cancelCallback,
  VP = Oe.unstable_shouldYield,
  ng = Oe.unstable_requestPaint,
  Bc = Oe.unstable_now,
  HP = Oe.unstable_getCurrentPriorityLevel,
  Ls = Oe.unstable_ImmediatePriority,
  ky = Oe.unstable_UserBlockingPriority,
  Ry = Oe.unstable_NormalPriority,
  Iy = Oe.unstable_LowPriority,
  Ny = Oe.unstable_IdlePriority,
  Au = {},
  BP = ng !== void 0 ? ng : function () {},
  Ht = null,
  Nl = null,
  Vu = !1,
  og = Bc(),
  je =
    1e4 > og
      ? Bc
      : function () {
          return Bc() - og;
        };
function Un() {
  switch (HP()) {
    case Ls:
      return 99;
    case ky:
      return 98;
    case Ry:
      return 97;
    case Iy:
      return 96;
    case Ny:
      return 95;
    default:
      throw Error(N(332));
  }
}
function zy(e) {
  switch (e) {
    case 99:
      return Ls;
    case 98:
      return ky;
    case 97:
      return Ry;
    case 96:
      return Iy;
    case 95:
      return Ny;
    default:
      throw Error(N(332));
  }
}
function nn(e, t) {
  return (e = zy(e)), AP(e, t);
}
function vi(e, t, r) {
  return (e = zy(e)), fd(e, t, r);
}
function Mt() {
  if (Nl !== null) {
    var e = Nl;
    (Nl = null), Hc(e);
  }
  Dy();
}
function Dy() {
  if (!Vu && Ht !== null) {
    Vu = !0;
    var e = 0;
    try {
      var t = Ht;
      nn(99, function () {
        for (; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
      }),
        (Ht = null);
    } catch (r) {
      throw (Ht !== null && (Ht = Ht.slice(e + 1)), fd(Ls, Mt), r);
    } finally {
      Vu = !1;
    }
  }
}
var WP = un.ReactCurrentBatchConfig;
function bt(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Zl = Nr(null),
  Jl = null,
  Rn = null,
  ea = null;
function dd() {
  ea = Rn = Jl = null;
}
function pd(e) {
  var t = Zl.current;
  fe(Zl), (e.type._context._currentValue = t);
}
function Ty(e, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) === t) {
      if (r === null || (r.childLanes & t) === t) break;
      r.childLanes |= t;
    } else (e.childLanes |= t), r !== null && (r.childLanes |= t);
    e = e.return;
  }
}
function jn(e, t) {
  (Jl = e),
    (ea = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (xt = !0), (e.firstContext = null));
}
function pt(e, t) {
  if (ea !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        ((ea = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      Rn === null)
    ) {
      if (Jl === null) throw Error(N(308));
      (Rn = t),
        (Jl.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else Rn = Rn.next = t;
  return e._currentValue;
}
var ar = !1;
function gd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function My(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function hr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yr(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
}
function ig(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var l = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function hi(e, t, r, n) {
  var o = e.updateQueue;
  ar = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var c = e.alternate;
    if (c !== null) {
      c = c.updateQueue;
      var f = c.lastBaseUpdate;
      f !== l &&
        (f === null ? (c.firstBaseUpdate = u) : (f.next = u),
        (c.lastBaseUpdate = s));
    }
  }
  if (i !== null) {
    (f = o.baseState), (l = 0), (c = u = s = null);
    do {
      a = i.lane;
      var d = i.eventTime;
      if ((n & a) === a) {
        c !== null &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var p = e,
            y = i;
          switch (((a = t), (d = r), y.tag)) {
            case 1:
              if (((p = y.payload), typeof p == "function")) {
                f = p.call(d, f, a);
                break e;
              }
              f = p;
              break e;
            case 3:
              p.flags = (p.flags & -4097) | 64;
            case 0:
              if (
                ((p = y.payload),
                (a = typeof p == "function" ? p.call(d, f, a) : p),
                a == null)
              )
                break e;
              f = de({}, f, a);
              break e;
            case 2:
              ar = !0;
          }
        }
        i.callback !== null &&
          ((e.flags |= 32),
          (a = o.effects),
          a === null ? (o.effects = [i]) : a.push(i));
      } else
        (d = {
          eventTime: d,
          lane: a,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          c === null ? ((u = c = d), (s = f)) : (c = c.next = d),
          (l |= a);
      if (((i = i.next), i === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (i = a.next),
          (a.next = null),
          (o.lastBaseUpdate = a),
          (o.shared.pending = null);
      }
    } while (1);
    c === null && (s = f),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (Ni |= l),
      (e.lanes = l),
      (e.memoizedState = f);
  }
}
function lg(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(N(191, o));
        o.call(n);
      }
    }
}
var jy = new ks.Component().refs;
function ta(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : de({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Fs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = tt(),
      o = wr(e),
      i = hr(n, o);
    (i.payload = t), r != null && (i.callback = r), yr(e, i), _r(e, o, n);
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = tt(),
      o = wr(e),
      i = hr(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      yr(e, i),
      _r(e, o, n);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = tt(),
      n = wr(e),
      o = hr(r, n);
    (o.tag = 2), t != null && (o.callback = t), yr(e, o), _r(e, n, r);
  },
};
function ag(e, t, r, n, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gi(r, n) || !gi(o, i)
      : !0
  );
}
function Ly(e, t, r) {
  var n = !1,
    o = Or,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = pt(i))
      : ((o = Xe(t) ? rn : Fe.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Wn(e, o) : Or)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fs),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function sg(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Fs.enqueueReplaceState(t, t.state, null);
}
function Wc(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = jy), gd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = pt(i))
    : ((i = Xe(t) ? rn : Fe.current), (o.context = Wn(e, i))),
    hi(e, r, o, n),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ta(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Fs.enqueueReplaceState(o, o.state, null),
      hi(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4);
}
var nl = Array.isArray;
function $o(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(N(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(N(147, e));
      var o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var l = n.refs;
            l === jy && (l = n.refs = {}),
              i === null ? delete l[o] : (l[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!r._owner) throw Error(N(290, e));
  }
  return e;
}
function ol(e, t) {
  if (e.type !== "textarea")
    throw Error(
      N(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t
      )
    );
}
function Fy(e) {
  function t(v, m) {
    if (e) {
      var h = v.lastEffect;
      h !== null
        ? ((h.nextEffect = m), (v.lastEffect = m))
        : (v.firstEffect = v.lastEffect = m),
        (m.nextEffect = null),
        (m.flags = 8);
    }
  }
  function r(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), (m = m.sibling);
    return null;
  }
  function n(v, m) {
    for (v = new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
    return v;
  }
  function o(v, m) {
    return (v = Er(v, m)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, m, h) {
    return (
      (v.index = h),
      e
        ? ((h = v.alternate),
          h !== null
            ? ((h = h.index), h < m ? ((v.flags = 2), m) : h)
            : ((v.flags = 2), m))
        : m
    );
  }
  function l(v) {
    return e && v.alternate === null && (v.flags = 2), v;
  }
  function a(v, m, h, _) {
    return m === null || m.tag !== 6
      ? ((m = Gu(h, v.mode, _)), (m.return = v), m)
      : ((m = o(m, h)), (m.return = v), m);
  }
  function s(v, m, h, _) {
    return m !== null && m.elementType === h.type
      ? ((_ = o(m, h.props)), (_.ref = $o(v, m, h)), (_.return = v), _)
      : ((_ = Ml(h.type, h.key, h.props, null, v.mode, _)),
        (_.ref = $o(v, m, h)),
        (_.return = v),
        _);
  }
  function u(v, m, h, _) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== h.containerInfo ||
      m.stateNode.implementation !== h.implementation
      ? ((m = Yu(h, v.mode, _)), (m.return = v), m)
      : ((m = o(m, h.children || [])), (m.return = v), m);
  }
  function c(v, m, h, _, b) {
    return m === null || m.tag !== 7
      ? ((m = Vn(h, v.mode, _, b)), (m.return = v), m)
      : ((m = o(m, h)), (m.return = v), m);
  }
  function f(v, m, h) {
    if (typeof m == "string" || typeof m == "number")
      return (m = Gu("" + m, v.mode, h)), (m.return = v), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Fo:
          return (
            (h = Ml(m.type, m.key, m.props, null, v.mode, h)),
            (h.ref = $o(v, null, m)),
            (h.return = v),
            h
          );
        case Yr:
          return (m = Yu(m, v.mode, h)), (m.return = v), m;
      }
      if (nl(m) || wo(m))
        return (m = Vn(m, v.mode, h, null)), (m.return = v), m;
      ol(v, m);
    }
    return null;
  }
  function d(v, m, h, _) {
    var b = m !== null ? m.key : null;
    if (typeof h == "string" || typeof h == "number")
      return b !== null ? null : a(v, m, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Fo:
          return h.key === b
            ? h.type === sr
              ? c(v, m, h.props.children, _, b)
              : s(v, m, h, _)
            : null;
        case Yr:
          return h.key === b ? u(v, m, h, _) : null;
      }
      if (nl(h) || wo(h)) return b !== null ? null : c(v, m, h, _, null);
      ol(v, h);
    }
    return null;
  }
  function p(v, m, h, _, b) {
    if (typeof _ == "string" || typeof _ == "number")
      return (v = v.get(h) || null), a(m, v, "" + _, b);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Fo:
          return (
            (v = v.get(_.key === null ? h : _.key) || null),
            _.type === sr ? c(m, v, _.props.children, b, _.key) : s(m, v, _, b)
          );
        case Yr:
          return (v = v.get(_.key === null ? h : _.key) || null), u(m, v, _, b);
      }
      if (nl(_) || wo(_)) return (v = v.get(h) || null), c(m, v, _, b, null);
      ol(m, _);
    }
    return null;
  }
  function y(v, m, h, _) {
    for (
      var b = null, O = null, x = m, P = (m = 0), $ = null;
      x !== null && P < h.length;
      P++
    ) {
      x.index > P ? (($ = x), (x = null)) : ($ = x.sibling);
      var C = d(v, x, h[P], _);
      if (C === null) {
        x === null && (x = $);
        break;
      }
      e && x && C.alternate === null && t(v, x),
        (m = i(C, m, P)),
        O === null ? (b = C) : (O.sibling = C),
        (O = C),
        (x = $);
    }
    if (P === h.length) return r(v, x), b;
    if (x === null) {
      for (; P < h.length; P++)
        (x = f(v, h[P], _)),
          x !== null &&
            ((m = i(x, m, P)), O === null ? (b = x) : (O.sibling = x), (O = x));
      return b;
    }
    for (x = n(v, x); P < h.length; P++)
      ($ = p(x, v, P, h[P], _)),
        $ !== null &&
          (e && $.alternate !== null && x.delete($.key === null ? P : $.key),
          (m = i($, m, P)),
          O === null ? (b = $) : (O.sibling = $),
          (O = $));
    return (
      e &&
        x.forEach(function (I) {
          return t(v, I);
        }),
      b
    );
  }
  function w(v, m, h, _) {
    var b = wo(h);
    if (typeof b != "function") throw Error(N(150));
    if (((h = b.call(h)), h == null)) throw Error(N(151));
    for (
      var O = (b = null), x = m, P = (m = 0), $ = null, C = h.next();
      x !== null && !C.done;
      P++, C = h.next()
    ) {
      x.index > P ? (($ = x), (x = null)) : ($ = x.sibling);
      var I = d(v, x, C.value, _);
      if (I === null) {
        x === null && (x = $);
        break;
      }
      e && x && I.alternate === null && t(v, x),
        (m = i(I, m, P)),
        O === null ? (b = I) : (O.sibling = I),
        (O = I),
        (x = $);
    }
    if (C.done) return r(v, x), b;
    if (x === null) {
      for (; !C.done; P++, C = h.next())
        (C = f(v, C.value, _)),
          C !== null &&
            ((m = i(C, m, P)), O === null ? (b = C) : (O.sibling = C), (O = C));
      return b;
    }
    for (x = n(v, x); !C.done; P++, C = h.next())
      (C = p(x, v, P, C.value, _)),
        C !== null &&
          (e && C.alternate !== null && x.delete(C.key === null ? P : C.key),
          (m = i(C, m, P)),
          O === null ? (b = C) : (O.sibling = C),
          (O = C));
    return (
      e &&
        x.forEach(function (z) {
          return t(v, z);
        }),
      b
    );
  }
  return function (v, m, h, _) {
    var b =
      typeof h == "object" && h !== null && h.type === sr && h.key === null;
    b && (h = h.props.children);
    var O = typeof h == "object" && h !== null;
    if (O)
      switch (h.$$typeof) {
        case Fo:
          e: {
            for (O = h.key, b = m; b !== null; ) {
              if (b.key === O) {
                switch (b.tag) {
                  case 7:
                    if (h.type === sr) {
                      r(v, b.sibling),
                        (m = o(b, h.props.children)),
                        (m.return = v),
                        (v = m);
                      break e;
                    }
                    break;
                  default:
                    if (b.elementType === h.type) {
                      r(v, b.sibling),
                        (m = o(b, h.props)),
                        (m.ref = $o(v, b, h)),
                        (m.return = v),
                        (v = m);
                      break e;
                    }
                }
                r(v, b);
                break;
              } else t(v, b);
              b = b.sibling;
            }
            h.type === sr
              ? ((m = Vn(h.props.children, v.mode, _, h.key)),
                (m.return = v),
                (v = m))
              : ((_ = Ml(h.type, h.key, h.props, null, v.mode, _)),
                (_.ref = $o(v, m, h)),
                (_.return = v),
                (v = _));
          }
          return l(v);
        case Yr:
          e: {
            for (b = h.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === h.containerInfo &&
                  m.stateNode.implementation === h.implementation
                ) {
                  r(v, m.sibling),
                    (m = o(m, h.children || [])),
                    (m.return = v),
                    (v = m);
                  break e;
                } else {
                  r(v, m);
                  break;
                }
              else t(v, m);
              m = m.sibling;
            }
            (m = Yu(h, v.mode, _)), (m.return = v), (v = m);
          }
          return l(v);
      }
    if (typeof h == "string" || typeof h == "number")
      return (
        (h = "" + h),
        m !== null && m.tag === 6
          ? (r(v, m.sibling), (m = o(m, h)), (m.return = v), (v = m))
          : (r(v, m), (m = Gu(h, v.mode, _)), (m.return = v), (v = m)),
        l(v)
      );
    if (nl(h)) return y(v, m, h, _);
    if (wo(h)) return w(v, m, h, _);
    if ((O && ol(v, h), typeof h > "u" && !b))
      switch (v.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(N(152, Nn(v.type) || "Component"));
      }
    return r(v, m);
  };
}
var ra = Fy(!0),
  Ay = Fy(!1),
  Ii = {},
  It = Nr(Ii),
  yi = Nr(Ii),
  wi = Nr(Ii);
function Kr(e) {
  if (e === Ii) throw Error(N(174));
  return e;
}
function Uc(e, t) {
  switch ((he(wi, t), he(yi, e), he(It, Ii), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : kc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = kc(t, e));
  }
  fe(It), he(It, t);
}
function Gn() {
  fe(It), fe(yi), fe(wi);
}
function ug(e) {
  Kr(wi.current);
  var t = Kr(It.current),
    r = kc(t, e.type);
  t !== r && (he(yi, e), he(It, r));
}
function md(e) {
  yi.current === e && (fe(It), fe(yi));
}
var ve = Nr(0);
function na(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gt = null,
  fr = null,
  Nt = !1;
function Vy(e, t) {
  var r = ft(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.type = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (r.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
      : (e.firstEffect = e.lastEffect = r);
}
function cg(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Gc(e) {
  if (Nt) {
    var t = fr;
    if (t) {
      var r = t;
      if (!cg(e, t)) {
        if (((t = Mn(r.nextSibling)), !t || !cg(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (Nt = !1), (Gt = e);
          return;
        }
        Vy(Gt, r);
      }
      (Gt = e), (fr = Mn(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (Nt = !1), (Gt = e);
  }
}
function fg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Gt = e;
}
function il(e) {
  if (e !== Gt) return !1;
  if (!Nt) return fg(e), (Nt = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !Ac(t, e.memoizedProps)))
    for (t = fr; t; ) Vy(e, t), (t = Mn(t.nextSibling));
  if ((fg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              fr = Mn(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      fr = null;
    }
  } else fr = Gt ? Mn(e.stateNode.nextSibling) : null;
  return !0;
}
function Hu() {
  (fr = Gt = null), (Nt = !1);
}
var Ln = [];
function vd() {
  for (var e = 0; e < Ln.length; e++)
    Ln[e]._workInProgressVersionPrimary = null;
  Ln.length = 0;
}
var Zo = un.ReactCurrentDispatcher,
  dt = un.ReactCurrentBatchConfig,
  _i = 0,
  ye = null,
  Me = null,
  ke = null,
  oa = !1,
  Jo = !1;
function We() {
  throw Error(N(321));
}
function hd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!ct(e[r], t[r])) return !1;
  return !0;
}
function yd(e, t, r, n, o, i) {
  if (
    ((_i = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zo.current = e === null || e.memoizedState === null ? GP : YP),
    (e = r(n, o)),
    Jo)
  ) {
    i = 0;
    do {
      if (((Jo = !1), !(25 > i))) throw Error(N(301));
      (i += 1),
        (ke = Me = null),
        (t.updateQueue = null),
        (Zo.current = XP),
        (e = r(n, o));
    } while (Jo);
  }
  if (
    ((Zo.current = sa),
    (t = Me !== null && Me.next !== null),
    (_i = 0),
    (ke = Me = ye = null),
    (oa = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Qr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ye.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function fn() {
  if (Me === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = ke === null ? ye.memoizedState : ke.next;
  if (t !== null) (ke = t), (Me = e);
  else {
    if (e === null) throw Error(N(310));
    (Me = e),
      (e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null,
      }),
      ke === null ? (ye.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function kt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oo(e) {
  var t = fn(),
    r = t.queue;
  if (r === null) throw Error(N(311));
  r.lastRenderedReducer = e;
  var n = Me,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (o = o.next), (n = n.baseState);
    var a = (l = i = null),
      s = o;
    do {
      var u = s.lane;
      if ((_i & u) === u)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            }),
          (n = s.eagerReducer === e ? s.eagerState : e(n, s.action));
      else {
        var c = {
          lane: u,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((l = a = c), (i = n)) : (a = a.next = c),
          (ye.lanes |= u),
          (Ni |= u);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = n) : (a.next = l),
      ct(n, t.memoizedState) || (xt = !0),
      (t.memoizedState = n),
      (t.baseState = i),
      (t.baseQueue = a),
      (r.lastRenderedState = n);
  }
  return [t.memoizedState, r.dispatch];
}
function Co(e) {
  var t = fn(),
    r = t.queue;
  if (r === null) throw Error(N(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    ct(i, t.memoizedState) || (xt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function dg(e, t, r) {
  var n = t._getVersion;
  n = n(t._source);
  var o = t._workInProgressVersionPrimary;
  if (
    (o !== null
      ? (e = o === n)
      : ((e = e.mutableReadLanes),
        (e = (_i & e) === e) &&
          ((t._workInProgressVersionPrimary = n), Ln.push(t))),
    e)
  )
    return r(t._source);
  throw (Ln.push(t), Error(N(350)));
}
function Hy(e, t, r, n) {
  var o = He;
  if (o === null) throw Error(N(349));
  var i = t._getVersion,
    l = i(t._source),
    a = Zo.current,
    s = a.useState(function () {
      return dg(o, t, r);
    }),
    u = s[1],
    c = s[0];
  s = ke;
  var f = e.memoizedState,
    d = f.refs,
    p = d.getSnapshot,
    y = f.source;
  f = f.subscribe;
  var w = ye;
  return (
    (e.memoizedState = { refs: d, source: t, subscribe: n }),
    a.useEffect(
      function () {
        (d.getSnapshot = r), (d.setSnapshot = u);
        var v = i(t._source);
        if (!ct(l, v)) {
          (v = r(t._source)),
            ct(c, v) ||
              (u(v), (v = wr(w)), (o.mutableReadLanes |= v & o.pendingLanes)),
            (v = o.mutableReadLanes),
            (o.entangledLanes |= v);
          for (var m = o.entanglements, h = v; 0 < h; ) {
            var _ = 31 - $r(h),
              b = 1 << _;
            (m[_] |= v), (h &= ~b);
          }
        }
      },
      [r, t, n]
    ),
    a.useEffect(
      function () {
        return n(t._source, function () {
          var v = d.getSnapshot,
            m = d.setSnapshot;
          try {
            m(v(t._source));
            var h = wr(w);
            o.mutableReadLanes |= h & o.pendingLanes;
          } catch (_) {
            m(function () {
              throw _;
            });
          }
        });
      },
      [t, n]
    ),
    (ct(p, r) && ct(y, t) && ct(f, n)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: kt,
        lastRenderedState: c,
      }),
      (e.dispatch = u = Sd.bind(null, ye, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (c = dg(o, t, r)),
      (s.memoizedState = s.baseState = c)),
    c
  );
}
function By(e, t, r) {
  var n = fn();
  return Hy(n, e, t, r);
}
function Eo(e) {
  var t = Qr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: kt,
        lastRenderedState: e,
      }),
    (e = e.dispatch = Sd.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function ia(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function pg(e) {
  var t = Qr();
  return (e = { current: e }), (t.memoizedState = e);
}
function la() {
  return fn().memoizedState;
}
function Yc(e, t, r, n) {
  var o = Qr();
  (ye.flags |= e),
    (o.memoizedState = ia(1 | t, r, void 0, n === void 0 ? null : n));
}
function wd(e, t, r, n) {
  var o = fn();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Me !== null) {
    var l = Me.memoizedState;
    if (((i = l.destroy), n !== null && hd(n, l.deps))) {
      ia(t, r, i, n);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = ia(1 | t, r, i, n));
}
function gg(e, t) {
  return Yc(516, 4, e, t);
}
function aa(e, t) {
  return wd(516, 4, e, t);
}
function Wy(e, t) {
  return wd(4, 2, e, t);
}
function Uy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gy(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), wd(4, 2, Uy.bind(null, t, e), r)
  );
}
function _d() {}
function Yy(e, t) {
  var r = fn();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && hd(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Xy(e, t) {
  var r = fn();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && hd(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function UP(e, t) {
  var r = Un();
  nn(98 > r ? 98 : r, function () {
    e(!0);
  }),
    nn(97 < r ? 97 : r, function () {
      var n = dt.transition;
      dt.transition = 1;
      try {
        e(!1), t();
      } finally {
        dt.transition = n;
      }
    });
}
function Sd(e, t, r) {
  var n = tt(),
    o = wr(e),
    i = {
      lane: o,
      action: r,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    l = t.pending;
  if (
    (l === null ? (i.next = i) : ((i.next = l.next), (l.next = i)),
    (t.pending = i),
    (l = e.alternate),
    e === ye || (l !== null && l === ye))
  )
    Jo = oa = !0;
  else {
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = l(a, r);
        if (((i.eagerReducer = l), (i.eagerState = s), ct(s, a))) return;
      } catch {
      } finally {
      }
    _r(e, o, n);
  }
}
var sa = {
    readContext: pt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useOpaqueIdentifier: We,
    unstable_isNewReconciler: !1,
  },
  GP = {
    readContext: pt,
    useCallback: function (e, t) {
      return (Qr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: pt,
    useEffect: gg,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null), Yc(4, 2, Uy.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Qr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Qr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = n.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = Sd.bind(null, ye, e)),
        [n.memoizedState, e]
      );
    },
    useRef: pg,
    useState: Eo,
    useDebugValue: _d,
    useDeferredValue: function (e) {
      var t = Eo(e),
        r = t[0],
        n = t[1];
      return (
        gg(
          function () {
            var o = dt.transition;
            dt.transition = 1;
            try {
              n(e);
            } finally {
              dt.transition = o;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = Eo(!1),
        t = e[0];
      return (e = UP.bind(null, e[1])), pg(e), [e, t];
    },
    useMutableSource: function (e, t, r) {
      var n = Qr();
      return (
        (n.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: r,
        }),
        Hy(n, e, t, r)
      );
    },
    useOpaqueIdentifier: function () {
      if (Nt) {
        var e = !1,
          t = FP(function () {
            throw (
              (e || ((e = !0), r("r:" + (Fu++).toString(36))), Error(N(355)))
            );
          }),
          r = Eo(t)[1];
        return (
          (ye.mode & 2) === 0 &&
            ((ye.flags |= 516),
            ia(
              5,
              function () {
                r("r:" + (Fu++).toString(36));
              },
              void 0,
              null
            )),
          t
        );
      }
      return (t = "r:" + (Fu++).toString(36)), Eo(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  YP = {
    readContext: pt,
    useCallback: Yy,
    useContext: pt,
    useEffect: aa,
    useImperativeHandle: Gy,
    useLayoutEffect: Wy,
    useMemo: Xy,
    useReducer: Oo,
    useRef: la,
    useState: function () {
      return Oo(kt);
    },
    useDebugValue: _d,
    useDeferredValue: function (e) {
      var t = Oo(kt),
        r = t[0],
        n = t[1];
      return (
        aa(
          function () {
            var o = dt.transition;
            dt.transition = 1;
            try {
              n(e);
            } finally {
              dt.transition = o;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = Oo(kt)[0];
      return [la().current, e];
    },
    useMutableSource: By,
    useOpaqueIdentifier: function () {
      return Oo(kt)[0];
    },
    unstable_isNewReconciler: !1,
  },
  XP = {
    readContext: pt,
    useCallback: Yy,
    useContext: pt,
    useEffect: aa,
    useImperativeHandle: Gy,
    useLayoutEffect: Wy,
    useMemo: Xy,
    useReducer: Co,
    useRef: la,
    useState: function () {
      return Co(kt);
    },
    useDebugValue: _d,
    useDeferredValue: function (e) {
      var t = Co(kt),
        r = t[0],
        n = t[1];
      return (
        aa(
          function () {
            var o = dt.transition;
            dt.transition = 1;
            try {
              n(e);
            } finally {
              dt.transition = o;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = Co(kt)[0];
      return [la().current, e];
    },
    useMutableSource: By,
    useOpaqueIdentifier: function () {
      return Co(kt)[0];
    },
    unstable_isNewReconciler: !1,
  },
  qP = un.ReactCurrentOwner,
  xt = !1;
function Ue(e, t, r, n) {
  t.child = e === null ? Ay(t, null, r, n) : ra(t, e.child, r, n);
}
function mg(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    jn(t, o),
    (n = yd(e, t, r, n, i, o)),
    e !== null && !xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : ((t.flags |= 1), Ue(e, t, n, o), t.child)
  );
}
function vg(e, t, r, n, o, i) {
  if (e === null) {
    var l = r.type;
    return typeof l == "function" &&
      !Cd(l) &&
      l.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), qy(e, t, l, n, o, i))
      : ((e = Ml(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (l = e.child),
    (o & i) === 0 &&
    ((o = l.memoizedProps),
    (r = r.compare),
    (r = r !== null ? r : gi),
    r(o, n) && e.ref === t.ref)
      ? Yt(e, t, i)
      : ((t.flags |= 1),
        (e = Er(l, n)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function qy(e, t, r, n, o, i) {
  if (e !== null && gi(e.memoizedProps, n) && e.ref === t.ref)
    if (((xt = !1), (i & o) !== 0)) (e.flags & 16384) !== 0 && (xt = !0);
    else return (t.lanes = e.lanes), Yt(e, t, i);
  return Xc(e, t, r, n, i);
}
function Bu(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden" || n.mode === "unstable-defer-without-hiding")
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), al(t, r);
    else if ((r & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0 }), al(t, i !== null ? i.baseLanes : r);
    else
      return (
        (e = i !== null ? i.baseLanes | r : r),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        al(t, e),
        null
      );
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      al(t, n);
  return Ue(e, t, o, r), t.child;
}
function Ky(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    (t.flags |= 128);
}
function Xc(e, t, r, n, o) {
  var i = Xe(r) ? rn : Fe.current;
  return (
    (i = Wn(t, i)),
    jn(t, o),
    (r = yd(e, t, r, n, i, o)),
    e !== null && !xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : ((t.flags |= 1), Ue(e, t, r, o), t.child)
  );
}
function hg(e, t, r, n, o) {
  if (Xe(r)) {
    var i = !0;
    Il(t);
  } else i = !1;
  if ((jn(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Ly(t, r, n),
      Wc(t, r, n, o),
      (n = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = pt(u))
      : ((u = Xe(r) ? rn : Fe.current), (u = Wn(t, u)));
    var c = r.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== n || s !== u) && sg(t, l, n, u)),
      (ar = !1);
    var d = t.memoizedState;
    (l.state = d),
      hi(t, n, l, o),
      (s = t.memoizedState),
      a !== n || d !== s || Ye.current || ar
        ? (typeof c == "function" && (ta(t, r, c, n), (s = t.memoizedState)),
          (a = ar || ag(t, r, a, n, d, s, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (l.props = n),
          (l.state = s),
          (l.context = u),
          (n = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4),
          (n = !1));
  } else {
    (l = t.stateNode),
      My(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : bt(t.type, a)),
      (l.props = u),
      (f = t.pendingProps),
      (d = l.context),
      (s = r.contextType),
      typeof s == "object" && s !== null
        ? (s = pt(s))
        : ((s = Xe(r) ? rn : Fe.current), (s = Wn(t, s)));
    var p = r.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== f || d !== s) && sg(t, l, n, s)),
      (ar = !1),
      (d = t.memoizedState),
      (l.state = d),
      hi(t, n, l, o);
    var y = t.memoizedState;
    a !== f || d !== y || Ye.current || ar
      ? (typeof p == "function" && (ta(t, r, p, n), (y = t.memoizedState)),
        (u = ar || ag(t, r, u, n, d, y, s))
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(n, y, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(n, y, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 256))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (l.props = n),
        (l.state = y),
        (l.context = s),
        (n = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 256),
        (n = !1));
  }
  return qc(e, t, r, n, i, o);
}
function qc(e, t, r, n, o, i) {
  Ky(e, t);
  var l = (t.flags & 64) !== 0;
  if (!n && !l) return o && rg(t, r, !1), Yt(e, t, i);
  (n = t.stateNode), (qP.current = t);
  var a =
    l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = ra(t, e.child, null, i)), (t.child = ra(t, null, a, i)))
      : Ue(e, t, a, i),
    (t.memoizedState = n.state),
    o && rg(t, r, !0),
    t.child
  );
}
function yg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? tg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && tg(e, t.context, !1),
    Uc(e, t.containerInfo);
}
var ll = { dehydrated: null, retryLane: 0 };
function wg(e, t, r) {
  var n = t.pendingProps,
    o = ve.current,
    i = !1,
    l;
  return (
    (l = (t.flags & 64) !== 0) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        n.fallback === void 0 ||
        n.unstable_avoidThisFallback === !0 ||
        (o |= 1),
    he(ve, o & 1),
    e === null
      ? (n.fallback !== void 0 && Gc(t),
        (e = n.children),
        (o = n.fallback),
        i
          ? ((e = _g(t, e, o, r)),
            (t.child.memoizedState = { baseLanes: r }),
            (t.memoizedState = ll),
            e)
          : typeof n.unstable_expectedLoadTime == "number"
          ? ((e = _g(t, e, o, r)),
            (t.child.memoizedState = { baseLanes: r }),
            (t.memoizedState = ll),
            (t.lanes = 33554432),
            e)
          : ((r = Ed({ mode: "visible", children: e }, t.mode, r, null)),
            (r.return = t),
            (t.child = r)))
      : e.memoizedState !== null
      ? i
        ? ((n = bg(e, t, n.children, n.fallback, r)),
          (i = t.child),
          (o = e.child.memoizedState),
          (i.memoizedState =
            o === null ? { baseLanes: r } : { baseLanes: o.baseLanes | r }),
          (i.childLanes = e.childLanes & ~r),
          (t.memoizedState = ll),
          n)
        : ((r = Sg(e, t, n.children, r)), (t.memoizedState = null), r)
      : i
      ? ((n = bg(e, t, n.children, n.fallback, r)),
        (i = t.child),
        (o = e.child.memoizedState),
        (i.memoizedState =
          o === null ? { baseLanes: r } : { baseLanes: o.baseLanes | r }),
        (i.childLanes = e.childLanes & ~r),
        (t.memoizedState = ll),
        n)
      : ((r = Sg(e, t, n.children, r)), (t.memoizedState = null), r)
  );
}
function _g(e, t, r, n) {
  var o = e.mode,
    i = e.child;
  return (
    (t = { mode: "hidden", children: t }),
    (o & 2) === 0 && i !== null
      ? ((i.childLanes = 0), (i.pendingProps = t))
      : (i = Ed(t, o, 0, null)),
    (r = Vn(r, o, n, null)),
    (i.return = e),
    (r.return = e),
    (i.sibling = r),
    (e.child = i),
    r
  );
}
function Sg(e, t, r, n) {
  var o = e.child;
  return (
    (e = o.sibling),
    (r = Er(o, { mode: "visible", children: r })),
    (t.mode & 2) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = r)
  );
}
function bg(e, t, r, n, o) {
  var i = t.mode,
    l = e.child;
  e = l.sibling;
  var a = { mode: "hidden", children: r };
  return (
    (i & 2) === 0 && t.child !== l
      ? ((r = t.child),
        (r.childLanes = 0),
        (r.pendingProps = a),
        (l = r.lastEffect),
        l !== null
          ? ((t.firstEffect = r.firstEffect),
            (t.lastEffect = l),
            (l.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (r = Er(l, a)),
    e !== null ? (n = Er(e, n)) : ((n = Vn(n, i, o, null)), (n.flags |= 2)),
    (n.return = t),
    (r.return = t),
    (r.sibling = n),
    (t.child = r),
    n
  );
}
function xg(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ty(e.return, t);
}
function Wu(e, t, r, n, o, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
        lastEffect: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = n),
      (l.tail = r),
      (l.tailMode = o),
      (l.lastEffect = i));
}
function Pg(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((Ue(e, t, n.children, r), (n = ve.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xg(e, r);
        else if (e.tag === 19) xg(e, r);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((he(ve, n), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && na(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          Wu(t, !1, o, r, i, t.lastEffect);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && na(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        Wu(t, !0, r, null, i, t.lastEffect);
        break;
      case "together":
        Wu(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ni |= t.lanes),
    (r & t.childLanes) !== 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Er(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Er(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  return null;
}
var Qy, Kc, Zy, Jy;
Qy = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Kc = function () {};
Zy = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), Kr(It.current);
    var i = null;
    switch (r) {
      case "input":
        (o = xc(e, o)), (n = xc(e, n)), (i = []);
        break;
      case "option":
        (o = Oc(e, o)), (n = Oc(e, n)), (i = []);
        break;
      case "select":
        (o = de({}, o, { value: void 0 })),
          (n = de({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Cc(e, o)), (n = Cc(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = ql);
    }
    Rc(r, n);
    var l;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ai.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var s = n[u];
      if (
        ((a = o?.[u]),
        n.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (r || (r = {}), (r[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (r || (r = {}), (r[l] = s[l]));
          } else r || (i || (i = []), i.push(u, r)), (r = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ai.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ce("scroll", e),
                  i || a === s || (i = []))
                : typeof s == "object" && s !== null && s.$$typeof === Xf
                ? s.toString()
                : (i = i || []).push(u, s));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Jy = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function ko(e, t) {
  if (!Nt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function KP(e, t, r) {
  var n = t.pendingProps;
  switch (t.tag) {
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
      return null;
    case 1:
      return Xe(t.type) && Ql(), null;
    case 3:
      return (
        Gn(),
        fe(Ye),
        fe(Fe),
        vd(),
        (n = t.stateNode),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (il(t) ? (t.flags |= 4) : n.hydrate || (t.flags |= 256)),
        Kc(t),
        null
      );
    case 5:
      md(t);
      var o = Kr(wi.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Zy(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(N(166));
          return null;
        }
        if (((e = Kr(It.current)), il(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[cr] = t), (n[Kl] = i), r)) {
            case "dialog":
              ce("cancel", n), ce("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", n);
              break;
            case "video":
            case "audio":
              for (e = 0; e < Vo.length; e++) ce(Vo[e], n);
              break;
            case "source":
              ce("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", n), ce("load", n);
              break;
            case "details":
              ce("toggle", n);
              break;
            case "input":
              Pp(n, i), ce("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                ce("invalid", n);
              break;
            case "textarea":
              Op(n, i), ce("invalid", n);
          }
          Rc(r, i), (e = null);
          for (var l in i)
            i.hasOwnProperty(l) &&
              ((o = i[l]),
              l === "children"
                ? typeof o == "string"
                  ? n.textContent !== o && (e = ["children", o])
                  : typeof o == "number" &&
                    n.textContent !== "" + o &&
                    (e = ["children", "" + o])
                : ai.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  ce("scroll", n));
          switch (r) {
            case "input":
              Ji(n), $p(n, i, !0);
              break;
            case "textarea":
              Ji(n), Cp(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = ql);
          }
          (n = e), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          switch (
            ((l = o.nodeType === 9 ? o : o.ownerDocument),
            e === Ec.html && (e = G0(r)),
            e === Ec.html
              ? r === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = l.createElement(r, { is: n.is }))
                : ((e = l.createElement(r)),
                  r === "select" &&
                    ((l = e),
                    n.multiple
                      ? (l.multiple = !0)
                      : n.size && (l.size = n.size)))
              : (e = l.createElementNS(e, r)),
            (e[cr] = t),
            (e[Kl] = n),
            Qy(e, t, !1, !1),
            (t.stateNode = e),
            (l = Ic(r, n)),
            r)
          ) {
            case "dialog":
              ce("cancel", e), ce("close", e), (o = n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", e), (o = n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vo.length; o++) ce(Vo[o], e);
              o = n;
              break;
            case "source":
              ce("error", e), (o = n);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", e), ce("load", e), (o = n);
              break;
            case "details":
              ce("toggle", e), (o = n);
              break;
            case "input":
              Pp(e, n), (o = xc(e, n)), ce("invalid", e);
              break;
            case "option":
              o = Oc(e, n);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!n.multiple }),
                (o = de({}, n, { value: void 0 })),
                ce("invalid", e);
              break;
            case "textarea":
              Op(e, n), (o = Cc(e, n)), ce("invalid", e);
              break;
            default:
              o = n;
          }
          Rc(r, o);
          var a = o;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var s = a[i];
              i === "style"
                ? q0(e, s)
                : i === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0), s != null && Y0(e, s))
                : i === "children"
                ? typeof s == "string"
                  ? (r !== "textarea" || s !== "") && si(e, s)
                  : typeof s == "number" && si(e, "" + s)
                : i !== "suppressContentEditableWarning" &&
                  i !== "suppressHydrationWarning" &&
                  i !== "autoFocus" &&
                  (ai.hasOwnProperty(i)
                    ? s != null && i === "onScroll" && ce("scroll", e)
                    : s != null && Hf(e, i, s, l));
            }
          switch (r) {
            case "input":
              Ji(e), $p(e, n, !1);
              break;
            case "textarea":
              Ji(e), Cp(e);
              break;
            case "option":
              n.value != null && e.setAttribute("value", "" + Pr(n.value));
              break;
            case "select":
              (e.multiple = !!n.multiple),
                (i = n.value),
                i != null
                  ? zn(e, !!n.multiple, i, !1)
                  : n.defaultValue != null &&
                    zn(e, !!n.multiple, n.defaultValue, !0);
              break;
            default:
              typeof o.onClick == "function" && (e.onclick = ql);
          }
          Oy(r, n) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Jy(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(N(166));
        (r = Kr(wi.current)),
          Kr(It.current),
          il(t)
            ? ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[cr] = t),
              n.nodeValue !== r && (t.flags |= 4))
            : ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
              (n[cr] = t),
              (t.stateNode = n));
      }
      return null;
    case 13:
      return (
        fe(ve),
        (n = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            (r = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && il(t)
              : (r = e.memoizedState !== null),
            n &&
              !r &&
              (t.mode & 2) !== 0 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (ve.current & 1) !== 0
                ? Re === 0 && (Re = 3)
                : ((Re === 0 || Re === 3) && (Re = 4),
                  He === null ||
                    ((Ni & 134217727) === 0 && (ro & 134217727) === 0) ||
                    Fn(He, Le))),
            (n || r) && (t.flags |= 4),
            null)
      );
    case 4:
      return Gn(), Kc(t), e === null && xy(t.stateNode.containerInfo), null;
    case 10:
      return pd(t), null;
    case 17:
      return Xe(t.type) && Ql(), null;
    case 19:
      if ((fe(ve), (n = t.memoizedState), n === null)) return null;
      if (((i = (t.flags & 64) !== 0), (l = n.rendering), l === null))
        if (i) ko(n, !1);
        else {
          if (Re !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((l = na(e)), l !== null)) {
                for (
                  t.flags |= 64,
                    ko(n, !1),
                    i = l.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    n.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = n.lastEffect,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 2),
                    (i.nextEffect = null),
                    (i.firstEffect = null),
                    (i.lastEffect = null),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return he(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          n.tail !== null &&
            je() > rf &&
            ((t.flags |= 64), (i = !0), ko(n, !1), (t.lanes = 33554432));
        }
      else {
        if (!i)
          if (((e = na(l)), e !== null)) {
            if (
              ((t.flags |= 64),
              (i = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              ko(n, !0),
              n.tail === null && n.tailMode === "hidden" && !l.alternate && !Nt)
            )
              return (
                (t = t.lastEffect = n.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * je() - n.renderingStartTime > rf &&
              r !== 1073741824 &&
              ((t.flags |= 64), (i = !0), ko(n, !1), (t.lanes = 33554432));
        n.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((r = n.last),
            r !== null ? (r.sibling = l) : (t.child = l),
            (n.last = l));
      }
      return n.tail !== null
        ? ((r = n.tail),
          (n.rendering = r),
          (n.tail = r.sibling),
          (n.lastEffect = t.lastEffect),
          (n.renderingStartTime = je()),
          (r.sibling = null),
          (t = ve.current),
          he(ve, i ? (t & 1) | 2 : t & 1),
          r)
        : null;
    case 23:
    case 24:
      return (
        Od(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          n.mode !== "unstable-defer-without-hiding" &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(N(156, t.tag));
}
function QP(e) {
  switch (e.tag) {
    case 1:
      Xe(e.type) && Ql();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((Gn(), fe(Ye), fe(Fe), vd(), (t = e.flags), (t & 64) !== 0))
        throw Error(N(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return md(e), null;
    case 13:
      return (
        fe(ve),
        (t = e.flags),
        t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return fe(ve), null;
    case 4:
      return Gn(), null;
    case 10:
      return pd(e), null;
    case 23:
    case 24:
      return Od(), null;
    default:
      return null;
  }
}
function bd(e, t) {
  try {
    var r = "",
      n = t;
    do (r += Ix(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o };
}
function Qc(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var ZP = typeof WeakMap == "function" ? WeakMap : Map;
function e1(e, t, r) {
  (r = hr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      ca || ((ca = !0), (nf = n)), Qc(e, t);
    }),
    r
  );
}
function t1(e, t, r) {
  (r = hr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function () {
      return Qc(e, t), n(o);
    };
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        typeof n != "function" &&
          (Rt === null ? (Rt = new Set([this])) : Rt.add(this), Qc(e, t));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    r
  );
}
var JP = typeof WeakSet == "function" ? WeakSet : Set;
function $g(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        Sr(e, r);
      }
    else t.current = null;
}
function e$(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var r = e.memoizedProps,
          n = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? r : bt(t.type, r),
            n
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && ud(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(N(163));
}
function t$(e, t, r) {
  switch (r.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = r.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var n = e.create;
            e.destroy = n();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = r.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var o = e;
          (n = o.next),
            (o = o.tag),
            (o & 4) !== 0 && (o & 1) !== 0 && (c1(r, e), u$(r, e)),
            (e = n);
        } while (e !== t);
      }
      return;
    case 1:
      (e = r.stateNode),
        r.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((n =
                r.elementType === r.type
                  ? t.memoizedProps
                  : bt(r.type, t.memoizedProps)),
              e.componentDidUpdate(
                n,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = r.updateQueue),
        t !== null && lg(r, t, e);
      return;
    case 3:
      if (((t = r.updateQueue), t !== null)) {
        if (((e = null), r.child !== null))
          switch (r.child.tag) {
            case 5:
              e = r.child.stateNode;
              break;
            case 1:
              e = r.child.stateNode;
          }
        lg(r, t, e);
      }
      return;
    case 5:
      (e = r.stateNode),
        t === null && r.flags & 4 && Oy(r.type, r.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      r.memoizedState === null &&
        ((r = r.alternate),
        r !== null &&
          ((r = r.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null && iy(r))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(N(163));
}
function Og(e, t) {
  for (var r = e; ; ) {
    if (r.tag === 5) {
      var n = r.stateNode;
      if (t)
        (n = n.style),
          typeof n.setProperty == "function"
            ? n.setProperty("display", "none", "important")
            : (n.display = "none");
      else {
        n = r.stateNode;
        var o = r.memoizedProps.style;
        (o = o != null && o.hasOwnProperty("display") ? o.display : null),
          (n.style.display = X0("display", o));
      }
    } else if (r.tag === 6) r.stateNode.nodeValue = t ? "" : r.memoizedProps;
    else if (
      ((r.tag !== 23 && r.tag !== 24) || r.memoizedState === null || r === e) &&
      r.child !== null
    ) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === e) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === e) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
}
function Cg(e, t) {
  if (Jr && typeof Jr.onCommitFiberUnmount == "function")
    try {
      Jr.onCommitFiberUnmount(cd, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var r = (e = e.next);
        do {
          var n = r,
            o = n.destroy;
          if (((n = n.tag), o !== void 0))
            if ((n & 4) !== 0) c1(t, r);
            else {
              n = t;
              try {
                o();
              } catch (i) {
                Sr(n, i);
              }
            }
          r = r.next;
        } while (r !== e);
      }
      break;
    case 1:
      if (
        ($g(t), (e = t.stateNode), typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (i) {
          Sr(t, i);
        }
      break;
    case 5:
      $g(t);
      break;
    case 4:
      r1(e, t);
  }
}
function Eg(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function kg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rg(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (kg(t)) break e;
      t = t.return;
    }
    throw Error(N(160));
  }
  var r = t;
  switch (((t = r.stateNode), r.tag)) {
    case 5:
      var n = !1;
      break;
    case 3:
      (t = t.containerInfo), (n = !0);
      break;
    case 4:
      (t = t.containerInfo), (n = !0);
      break;
    default:
      throw Error(N(161));
  }
  r.flags & 16 && (si(t, ""), (r.flags &= -17));
  e: t: for (r = e; ; ) {
    for (; r.sibling === null; ) {
      if (r.return === null || kg(r.return)) {
        r = null;
        break e;
      }
      r = r.return;
    }
    for (
      r.sibling.return = r.return, r = r.sibling;
      r.tag !== 5 && r.tag !== 6 && r.tag !== 18;

    ) {
      if (r.flags & 2 || r.child === null || r.tag === 4) continue t;
      (r.child.return = r), (r = r.child);
    }
    if (!(r.flags & 2)) {
      r = r.stateNode;
      break e;
    }
  }
  n ? Zc(e, r, t) : Jc(e, r, t);
}
function Zc(e, t, r) {
  var n = e.tag,
    o = n === 5 || n === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = ql));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Zc(e, t, r), e = e.sibling; e !== null; ) Zc(e, t, r), (e = e.sibling);
}
function Jc(e, t, r) {
  var n = e.tag,
    o = n === 5 || n === 6;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Jc(e, t, r), e = e.sibling; e !== null; ) Jc(e, t, r), (e = e.sibling);
}
function r1(e, t) {
  for (var r = t, n = !1, o, i; ; ) {
    if (!n) {
      n = r.return;
      e: for (;;) {
        if (n === null) throw Error(N(160));
        switch (((o = n.stateNode), n.tag)) {
          case 5:
            i = !1;
            break e;
          case 3:
            (o = o.containerInfo), (i = !0);
            break e;
          case 4:
            (o = o.containerInfo), (i = !0);
            break e;
        }
        n = n.return;
      }
      n = !0;
    }
    if (r.tag === 5 || r.tag === 6) {
      e: for (var l = e, a = r, s = a; ; )
        if ((Cg(l, s), s.child !== null && s.tag !== 4))
          (s.child.return = s), (s = s.child);
        else {
          if (s === a) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === a) break e;
            s = s.return;
          }
          (s.sibling.return = s.return), (s = s.sibling);
        }
      i
        ? ((l = o),
          (a = r.stateNode),
          l.nodeType === 8 ? l.parentNode.removeChild(a) : l.removeChild(a))
        : o.removeChild(r.stateNode);
    } else if (r.tag === 4) {
      if (r.child !== null) {
        (o = r.stateNode.containerInfo),
          (i = !0),
          (r.child.return = r),
          (r = r.child);
        continue;
      }
    } else if ((Cg(e, r), r.child !== null)) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      (r = r.return), r.tag === 4 && (n = !1);
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
}
function Uu(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var r = t.updateQueue;
      if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var n = (r = r.next);
        do
          (n.tag & 3) === 3 &&
            ((e = n.destroy), (n.destroy = void 0), e !== void 0 && e()),
            (n = n.next);
        while (n !== r);
      }
      return;
    case 1:
      return;
    case 5:
      if (((r = t.stateNode), r != null)) {
        n = t.memoizedProps;
        var o = e !== null ? e.memoizedProps : n;
        e = t.type;
        var i = t.updateQueue;
        if (((t.updateQueue = null), i !== null)) {
          for (
            r[Kl] = n,
              e === "input" && n.type === "radio" && n.name != null && W0(r, n),
              Ic(e, o),
              t = Ic(e, n),
              o = 0;
            o < i.length;
            o += 2
          ) {
            var l = i[o],
              a = i[o + 1];
            l === "style"
              ? q0(r, a)
              : l === "dangerouslySetInnerHTML"
              ? Y0(r, a)
              : l === "children"
              ? si(r, a)
              : Hf(r, l, a, t);
          }
          switch (e) {
            case "input":
              Pc(r, n);
              break;
            case "textarea":
              U0(r, n);
              break;
            case "select":
              (e = r._wrapperState.wasMultiple),
                (r._wrapperState.wasMultiple = !!n.multiple),
                (i = n.value),
                i != null
                  ? zn(r, !!n.multiple, i, !1)
                  : e !== !!n.multiple &&
                    (n.defaultValue != null
                      ? zn(r, !!n.multiple, n.defaultValue, !0)
                      : zn(r, !!n.multiple, n.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(N(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (r = t.stateNode), r.hydrate && ((r.hydrate = !1), iy(r.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (($d = je()), Og(t.child, !0)), Ig(t);
      return;
    case 19:
      Ig(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Og(t, t.memoizedState !== null);
      return;
  }
  throw Error(N(163));
}
function Ig(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new JP()),
      t.forEach(function (n) {
        var o = d$.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function r$(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var n$ = Math.ceil,
  ua = un.ReactCurrentDispatcher,
  xd = un.ReactCurrentOwner,
  Y = 0,
  He = null,
  Se = null,
  Le = 0,
  on = 0,
  ef = Nr(0),
  Re = 0,
  As = null,
  to = 0,
  Ni = 0,
  ro = 0,
  Pd = 0,
  tf = null,
  $d = 0,
  rf = 1 / 0;
function no() {
  rf = je() + 500;
}
var L = null,
  ca = !1,
  nf = null,
  Rt = null,
  Cr = !1,
  ei = null,
  Ho = 90,
  of = [],
  lf = [],
  qt = null,
  ti = 0,
  af = null,
  zl = -1,
  Wt = 0,
  Dl = 0,
  ri = null,
  Tl = !1;
function tt() {
  return (Y & 48) !== 0 ? je() : zl !== -1 ? zl : (zl = je());
}
function wr(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1;
  if ((e & 4) === 0) return Un() === 99 ? 1 : 2;
  if ((Wt === 0 && (Wt = to), WP.transition !== 0)) {
    Dl !== 0 && (Dl = tf !== null ? tf.pendingLanes : 0), (e = Wt);
    var t = 4186112 & ~Dl;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = Un()),
    (Y & 4) !== 0 && e === 98
      ? (e = Yl(12, Wt))
      : ((e = Yx(e)), (e = Yl(e, Wt))),
    e
  );
}
function _r(e, t, r) {
  if (50 < ti) throw ((ti = 0), (af = null), Error(N(185)));
  if (((e = Vs(e, t)), e === null)) return null;
  zs(e, t, r), e === He && ((ro |= t), Re === 4 && Fn(e, Le));
  var n = Un();
  t === 1
    ? (Y & 8) !== 0 && (Y & 48) === 0
      ? sf(e)
      : (gt(e, r), Y === 0 && (no(), Mt()))
    : ((Y & 4) === 0 ||
        (n !== 98 && n !== 99) ||
        (qt === null ? (qt = new Set([e])) : qt.add(e)),
      gt(e, r)),
    (tf = e);
}
function Vs(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
function gt(e, t) {
  for (
    var r = e.callbackNode,
      n = e.suspendedLanes,
      o = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - $r(l),
      s = 1 << a,
      u = i[a];
    if (u === -1) {
      if ((s & n) === 0 || (s & o) !== 0) {
        (u = t), bn(s);
        var c = ue;
        i[a] = 10 <= c ? u + 250 : 6 <= c ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= s);
    l &= ~s;
  }
  if (((n = di(e, e === He ? Le : 0)), (t = ue), n === 0))
    r !== null &&
      (r !== Au && Hc(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (r !== null) {
      if (e.callbackPriority === t) return;
      r !== Au && Hc(r);
    }
    t === 15
      ? ((r = sf.bind(null, e)),
        Ht === null ? ((Ht = [r]), (Nl = fd(Ls, Dy))) : Ht.push(r),
        (r = Au))
      : t === 14
      ? (r = vi(99, sf.bind(null, e)))
      : ((r = Xx(t)), (r = vi(r, n1.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = r);
  }
}
function n1(e) {
  if (((zl = -1), (Dl = Wt = 0), (Y & 48) !== 0)) throw Error(N(327));
  var t = e.callbackNode;
  if (zr() && e.callbackNode !== t) return null;
  var r = di(e, e === He ? Le : 0);
  if (r === 0) return null;
  var n = r,
    o = Y;
  Y |= 16;
  var i = a1();
  (He !== e || Le !== n) && (no(), An(e, n));
  do
    try {
      l$();
      break;
    } catch (a) {
      l1(e, a);
    }
  while (1);
  if (
    (dd(),
    (ua.current = i),
    (Y = o),
    Se !== null ? (n = 0) : ((He = null), (Le = 0), (n = Re)),
    (to & ro) !== 0)
  )
    An(e, 0);
  else if (n !== 0) {
    if (
      (n === 2 &&
        ((Y |= 64),
        e.hydrate && ((e.hydrate = !1), ud(e.containerInfo)),
        (r = dy(e)),
        r !== 0 && (n = Bo(e, r))),
      n === 1)
    )
      throw ((t = As), An(e, 0), Fn(e, r), gt(e, je()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = r), n)
    ) {
      case 0:
      case 1:
        throw Error(N(345));
      case 2:
        Hr(e);
        break;
      case 3:
        if (
          (Fn(e, r), (r & 62914560) === r && ((n = $d + 500 - je()), 10 < n))
        ) {
          if (di(e, 0) !== 0) break;
          if (((o = e.suspendedLanes), (o & r) !== r)) {
            tt(), (e.pingedLanes |= e.suspendedLanes & o);
            break;
          }
          e.timeoutHandle = Zp(Hr.bind(null, e), n);
          break;
        }
        Hr(e);
        break;
      case 4:
        if ((Fn(e, r), (r & 4186112) === r)) break;
        for (n = e.eventTimes, o = -1; 0 < r; ) {
          var l = 31 - $r(r);
          (i = 1 << l), (l = n[l]), l > o && (o = l), (r &= ~i);
        }
        if (
          ((r = o),
          (r = je() - r),
          (r =
            (120 > r
              ? 120
              : 480 > r
              ? 480
              : 1080 > r
              ? 1080
              : 1920 > r
              ? 1920
              : 3e3 > r
              ? 3e3
              : 4320 > r
              ? 4320
              : 1960 * n$(r / 1960)) - r),
          10 < r)
        ) {
          e.timeoutHandle = Zp(Hr.bind(null, e), r);
          break;
        }
        Hr(e);
        break;
      case 5:
        Hr(e);
        break;
      default:
        throw Error(N(329));
    }
  }
  return gt(e, je()), e.callbackNode === t ? n1.bind(null, e) : null;
}
function Fn(e, t) {
  for (
    t &= ~Pd,
      t &= ~ro,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - $r(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function sf(e) {
  if ((Y & 48) !== 0) throw Error(N(327));
  if ((zr(), e === He && (e.expiredLanes & Le) !== 0)) {
    var t = Le,
      r = Bo(e, t);
    (to & ro) !== 0 && ((t = di(e, t)), (r = Bo(e, t)));
  } else (t = di(e, 0)), (r = Bo(e, t));
  if (
    (e.tag !== 0 &&
      r === 2 &&
      ((Y |= 64),
      e.hydrate && ((e.hydrate = !1), ud(e.containerInfo)),
      (t = dy(e)),
      t !== 0 && (r = Bo(e, t))),
    r === 1)
  )
    throw ((r = As), An(e, 0), Fn(e, t), gt(e, je()), r);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Hr(e),
    gt(e, je()),
    null
  );
}
function o$() {
  if (qt !== null) {
    var e = qt;
    (qt = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), gt(t, je());
      });
  }
  Mt();
}
function o1(e, t) {
  var r = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = r), Y === 0 && (no(), Mt());
  }
}
function i1(e, t) {
  var r = Y;
  (Y &= -2), (Y |= 8);
  try {
    return e(t);
  } finally {
    (Y = r), Y === 0 && (no(), Mt());
  }
}
function al(e, t) {
  he(ef, on), (on |= t), (to |= t);
}
function Od() {
  (on = ef.current), fe(ef);
}
function An(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), LP(r)), Se !== null))
    for (r = Se.return; r !== null; ) {
      var n = r;
      switch (n.tag) {
        case 1:
          (n = n.type.childContextTypes), n != null && Ql();
          break;
        case 3:
          Gn(), fe(Ye), fe(Fe), vd();
          break;
        case 5:
          md(n);
          break;
        case 4:
          Gn();
          break;
        case 13:
          fe(ve);
          break;
        case 19:
          fe(ve);
          break;
        case 10:
          pd(n);
          break;
        case 23:
        case 24:
          Od();
      }
      r = r.return;
    }
  (He = e),
    (Se = Er(e.current, null)),
    (Le = on = to = t),
    (Re = 0),
    (As = null),
    (Pd = ro = Ni = 0);
}
function l1(e, t) {
  do {
    var r = Se;
    try {
      if ((dd(), (Zo.current = sa), oa)) {
        for (var n = ye.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        oa = !1;
      }
      if (
        ((_i = 0),
        (ke = Me = ye = null),
        (Jo = !1),
        (xd.current = null),
        r === null || r.return === null)
      ) {
        (Re = 1), (As = t), (Se = null);
        break;
      }
      e: {
        var i = e,
          l = r.return,
          a = r,
          s = t;
        if (
          ((t = Le),
          (a.flags |= 2048),
          (a.firstEffect = a.lastEffect = null),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s;
          if ((a.mode & 2) === 0) {
            var c = a.alternate;
            c
              ? ((a.updateQueue = c.updateQueue),
                (a.memoizedState = c.memoizedState),
                (a.lanes = c.lanes))
              : ((a.updateQueue = null), (a.memoizedState = null));
          }
          var f = (ve.current & 1) !== 0,
            d = l;
          do {
            var p;
            if ((p = d.tag === 13)) {
              var y = d.memoizedState;
              if (y !== null) p = y.dehydrated !== null;
              else {
                var w = d.memoizedProps;
                p =
                  w.fallback === void 0
                    ? !1
                    : w.unstable_avoidThisFallback !== !0
                    ? !0
                    : !f;
              }
            }
            if (p) {
              var v = d.updateQueue;
              if (v === null) {
                var m = new Set();
                m.add(u), (d.updateQueue = m);
              } else v.add(u);
              if ((d.mode & 2) === 0) {
                if (
                  ((d.flags |= 64),
                  (a.flags |= 16384),
                  (a.flags &= -2981),
                  a.tag === 1)
                )
                  if (a.alternate === null) a.tag = 17;
                  else {
                    var h = hr(-1, 1);
                    (h.tag = 2), yr(a, h);
                  }
                a.lanes |= 1;
                break e;
              }
              (s = void 0), (a = t);
              var _ = i.pingCache;
              if (
                (_ === null
                  ? ((_ = i.pingCache = new ZP()), (s = new Set()), _.set(u, s))
                  : ((s = _.get(u)),
                    s === void 0 && ((s = new Set()), _.set(u, s))),
                !s.has(a))
              ) {
                s.add(a);
                var b = f$.bind(null, i, u, a);
                u.then(b, b);
              }
              (d.flags |= 4096), (d.lanes = t);
              break e;
            }
            d = d.return;
          } while (d !== null);
          s = Error(
            (Nn(a.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          );
        }
        Re !== 5 && (Re = 2), (s = bd(s, a)), (d = l);
        do {
          switch (d.tag) {
            case 3:
              (i = s), (d.flags |= 4096), (t &= -t), (d.lanes |= t);
              var O = e1(d, i, t);
              ig(d, O);
              break e;
            case 1:
              i = s;
              var x = d.type,
                P = d.stateNode;
              if (
                (d.flags & 64) === 0 &&
                (typeof x.getDerivedStateFromError == "function" ||
                  (P !== null &&
                    typeof P.componentDidCatch == "function" &&
                    (Rt === null || !Rt.has(P))))
              ) {
                (d.flags |= 4096), (t &= -t), (d.lanes |= t);
                var $ = t1(d, i, t);
                ig(d, $);
                break e;
              }
          }
          d = d.return;
        } while (d !== null);
      }
      u1(r);
    } catch (C) {
      (t = C), Se === r && r !== null && (Se = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function a1() {
  var e = ua.current;
  return (ua.current = sa), e === null ? sa : e;
}
function Bo(e, t) {
  var r = Y;
  Y |= 16;
  var n = a1();
  (He === e && Le === t) || An(e, t);
  do
    try {
      i$();
      break;
    } catch (o) {
      l1(e, o);
    }
  while (1);
  if ((dd(), (Y = r), (ua.current = n), Se !== null)) throw Error(N(261));
  return (He = null), (Le = 0), Re;
}
function i$() {
  for (; Se !== null; ) s1(Se);
}
function l$() {
  for (; Se !== null && !VP(); ) s1(Se);
}
function s1(e) {
  var t = f1(e.alternate, e, on);
  (e.memoizedProps = e.pendingProps),
    t === null ? u1(e) : (Se = t),
    (xd.current = null);
}
function u1(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((r = KP(r, t, on)), r !== null)) {
        Se = r;
        return;
      }
      if (
        ((r = t),
        (r.tag !== 24 && r.tag !== 23) ||
          r.memoizedState === null ||
          (on & 1073741824) !== 0 ||
          (r.mode & 4) === 0)
      ) {
        for (var n = 0, o = r.child; o !== null; )
          (n |= o.lanes | o.childLanes), (o = o.sibling);
        r.childLanes = n;
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((r = QP(t)), r !== null)) {
        (r.flags &= 2047), (Se = r);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function Hr(e) {
  var t = Un();
  return nn(99, a$.bind(null, e, t)), null;
}
function a$(e, t) {
  do zr();
  while (ei !== null);
  if ((Y & 48) !== 0) throw Error(N(327));
  var r = e.finishedWork;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(N(177));
  e.callbackNode = null;
  var n = r.lanes | r.childLanes,
    o = n,
    i = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  for (var l = e.eventTimes, a = e.expirationTimes; 0 < i; ) {
    var s = 31 - $r(i),
      u = 1 << s;
    (o[s] = 0), (l[s] = -1), (a[s] = -1), (i &= ~u);
  }
  if (
    (qt !== null && (n & 24) === 0 && qt.has(e) && qt.delete(e),
    e === He && ((Se = He = null), (Le = 0)),
    1 < r.flags
      ? r.lastEffect !== null
        ? ((r.lastEffect.nextEffect = r), (n = r.firstEffect))
        : (n = r)
      : (n = r.firstEffect),
    n !== null)
  ) {
    if (
      ((o = Y), (Y |= 32), (xd.current = null), (ju = El), (l = Up()), jc(l))
    ) {
      if ("selectionStart" in l)
        a = { start: l.selectionStart, end: l.selectionEnd };
      else
        e: if (
          ((a = ((a = l.ownerDocument) && a.defaultView) || window),
          (u = a.getSelection && a.getSelection()) && u.rangeCount !== 0)
        ) {
          (a = u.anchorNode),
            (i = u.anchorOffset),
            (s = u.focusNode),
            (u = u.focusOffset);
          try {
            a.nodeType, s.nodeType;
          } catch {
            a = null;
            break e;
          }
          var c = 0,
            f = -1,
            d = -1,
            p = 0,
            y = 0,
            w = l,
            v = null;
          t: for (;;) {
            for (
              var m;
              w !== a || (i !== 0 && w.nodeType !== 3) || (f = c + i),
                w !== s || (u !== 0 && w.nodeType !== 3) || (d = c + u),
                w.nodeType === 3 && (c += w.nodeValue.length),
                (m = w.firstChild) !== null;

            )
              (v = w), (w = m);
            for (;;) {
              if (w === l) break t;
              if (
                (v === a && ++p === i && (f = c),
                v === s && ++y === u && (d = c),
                (m = w.nextSibling) !== null)
              )
                break;
              (w = v), (v = w.parentNode);
            }
            w = m;
          }
          a = f === -1 || d === -1 ? null : { start: f, end: d };
        } else a = null;
      a = a || { start: 0, end: 0 };
    } else a = null;
    (Lu = { focusedElem: l, selectionRange: a }),
      (El = !1),
      (ri = null),
      (Tl = !1),
      (L = n);
    do
      try {
        s$();
      } catch (C) {
        if (L === null) throw Error(N(330));
        Sr(L, C), (L = L.nextEffect);
      }
    while (L !== null);
    (ri = null), (L = n);
    do
      try {
        for (l = e; L !== null; ) {
          var h = L.flags;
          if ((h & 16 && si(L.stateNode, ""), h & 128)) {
            var _ = L.alternate;
            if (_ !== null) {
              var b = _.ref;
              b !== null &&
                (typeof b == "function" ? b(null) : (b.current = null));
            }
          }
          switch (h & 1038) {
            case 2:
              Rg(L), (L.flags &= -3);
              break;
            case 6:
              Rg(L), (L.flags &= -3), Uu(L.alternate, L);
              break;
            case 1024:
              L.flags &= -1025;
              break;
            case 1028:
              (L.flags &= -1025), Uu(L.alternate, L);
              break;
            case 4:
              Uu(L.alternate, L);
              break;
            case 8:
              (a = L), r1(l, a);
              var O = a.alternate;
              Eg(a), O !== null && Eg(O);
          }
          L = L.nextEffect;
        }
      } catch (C) {
        if (L === null) throw Error(N(330));
        Sr(L, C), (L = L.nextEffect);
      }
    while (L !== null);
    if (
      ((b = Lu),
      (_ = Up()),
      (h = b.focusedElem),
      (l = b.selectionRange),
      _ !== h && h && h.ownerDocument && _y(h.ownerDocument.documentElement, h))
    ) {
      for (
        l !== null &&
          jc(h) &&
          ((_ = l.start),
          (b = l.end),
          b === void 0 && (b = _),
          ("selectionStart" in h)
            ? ((h.selectionStart = _),
              (h.selectionEnd = Math.min(b, h.value.length)))
            : ((b =
                ((_ = h.ownerDocument || document) && _.defaultView) || window),
              b.getSelection &&
                ((b = b.getSelection()),
                (a = h.textContent.length),
                (O = Math.min(l.start, a)),
                (l = l.end === void 0 ? O : Math.min(l.end, a)),
                !b.extend && O > l && ((a = l), (l = O), (O = a)),
                (a = Wp(h, O)),
                (i = Wp(h, l)),
                a &&
                  i &&
                  (b.rangeCount !== 1 ||
                    b.anchorNode !== a.node ||
                    b.anchorOffset !== a.offset ||
                    b.focusNode !== i.node ||
                    b.focusOffset !== i.offset) &&
                  ((_ = _.createRange()),
                  _.setStart(a.node, a.offset),
                  b.removeAllRanges(),
                  O > l
                    ? (b.addRange(_), b.extend(i.node, i.offset))
                    : (_.setEnd(i.node, i.offset), b.addRange(_)))))),
          _ = [],
          b = h;
        (b = b.parentNode);

      )
        b.nodeType === 1 &&
          _.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
      for (typeof h.focus == "function" && h.focus(), h = 0; h < _.length; h++)
        (b = _[h]),
          (b.element.scrollLeft = b.left),
          (b.element.scrollTop = b.top);
    }
    (El = !!ju), (Lu = ju = null), (e.current = r), (L = n);
    do
      try {
        for (h = e; L !== null; ) {
          var x = L.flags;
          if ((x & 36 && t$(h, L.alternate, L), x & 128)) {
            _ = void 0;
            var P = L.ref;
            if (P !== null) {
              var $ = L.stateNode;
              switch (L.tag) {
                case 5:
                  _ = $;
                  break;
                default:
                  _ = $;
              }
              typeof P == "function" ? P(_) : (P.current = _);
            }
          }
          L = L.nextEffect;
        }
      } catch (C) {
        if (L === null) throw Error(N(330));
        Sr(L, C), (L = L.nextEffect);
      }
    while (L !== null);
    (L = null), BP(), (Y = o);
  } else e.current = r;
  if (Cr) (Cr = !1), (ei = e), (Ho = t);
  else
    for (L = n; L !== null; )
      (t = L.nextEffect),
        (L.nextEffect = null),
        L.flags & 8 && ((x = L), (x.sibling = null), (x.stateNode = null)),
        (L = t);
  if (
    ((n = e.pendingLanes),
    n === 0 && (Rt = null),
    n === 1 ? (e === af ? ti++ : ((ti = 0), (af = e))) : (ti = 0),
    (r = r.stateNode),
    Jr && typeof Jr.onCommitFiberRoot == "function")
  )
    try {
      Jr.onCommitFiberRoot(cd, r, void 0, (r.current.flags & 64) === 64);
    } catch {}
  if ((gt(e, je()), ca)) throw ((ca = !1), (e = nf), (nf = null), e);
  return (Y & 8) !== 0 || Mt(), null;
}
function s$() {
  for (; L !== null; ) {
    var e = L.alternate;
    Tl ||
      ri === null ||
      ((L.flags & 8) !== 0
        ? Rp(L, ri) && (Tl = !0)
        : L.tag === 13 && r$(e, L) && Rp(L, ri) && (Tl = !0));
    var t = L.flags;
    (t & 256) !== 0 && e$(e, L),
      (t & 512) === 0 ||
        Cr ||
        ((Cr = !0),
        vi(97, function () {
          return zr(), null;
        })),
      (L = L.nextEffect);
  }
}
function zr() {
  if (Ho !== 90) {
    var e = 97 < Ho ? 97 : Ho;
    return (Ho = 90), nn(e, c$);
  }
  return !1;
}
function u$(e, t) {
  of.push(t, e),
    Cr ||
      ((Cr = !0),
      vi(97, function () {
        return zr(), null;
      }));
}
function c1(e, t) {
  lf.push(t, e),
    Cr ||
      ((Cr = !0),
      vi(97, function () {
        return zr(), null;
      }));
}
function c$() {
  if (ei === null) return !1;
  var e = ei;
  if (((ei = null), (Y & 48) !== 0)) throw Error(N(331));
  var t = Y;
  Y |= 32;
  var r = lf;
  lf = [];
  for (var n = 0; n < r.length; n += 2) {
    var o = r[n],
      i = r[n + 1],
      l = o.destroy;
    if (((o.destroy = void 0), typeof l == "function"))
      try {
        l();
      } catch (s) {
        if (i === null) throw Error(N(330));
        Sr(i, s);
      }
  }
  for (r = of, of = [], n = 0; n < r.length; n += 2) {
    (o = r[n]), (i = r[n + 1]);
    try {
      var a = o.create;
      o.destroy = a();
    } catch (s) {
      if (i === null) throw Error(N(330));
      Sr(i, s);
    }
  }
  for (a = e.current.firstEffect; a !== null; )
    (e = a.nextEffect),
      (a.nextEffect = null),
      a.flags & 8 && ((a.sibling = null), (a.stateNode = null)),
      (a = e);
  return (Y = t), Mt(), !0;
}
function Ng(e, t, r) {
  (t = bd(r, t)),
    (t = e1(e, t, 1)),
    yr(e, t),
    (t = tt()),
    (e = Vs(e, 1)),
    e !== null && (zs(e, 1, t), gt(e, t));
}
function Sr(e, t) {
  if (e.tag === 3) Ng(e, e, t);
  else
    for (var r = e.return; r !== null; ) {
      if (r.tag === 3) {
        Ng(r, e, t);
        break;
      } else if (r.tag === 1) {
        var n = r.stateNode;
        if (
          typeof r.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Rt === null || !Rt.has(n)))
        ) {
          e = bd(t, e);
          var o = t1(r, e, 1);
          if ((yr(r, o), (o = tt()), (r = Vs(r, 1)), r !== null))
            zs(r, 1, o), gt(r, o);
          else if (
            typeof n.componentDidCatch == "function" &&
            (Rt === null || !Rt.has(n))
          )
            try {
              n.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      r = r.return;
    }
}
function f$(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = tt()),
    (e.pingedLanes |= e.suspendedLanes & r),
    He === e &&
      (Le & r) === r &&
      (Re === 4 || (Re === 3 && (Le & 62914560) === Le && 500 > je() - $d)
        ? An(e, 0)
        : (Pd |= r)),
    gt(e, t);
}
function d$(e, t) {
  var r = e.stateNode;
  r !== null && r.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = Un() === 99 ? 1 : 2)
        : (Wt === 0 && (Wt = to),
          (t = xn(62914560 & ~Wt)),
          t === 0 && (t = 4194304))),
    (r = tt()),
    (e = Vs(e, t)),
    e !== null && (zs(e, t, r), gt(e, r));
}
var f1;
f1 = function (e, t, r) {
  var n = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) xt = !0;
    else if ((r & n) !== 0) xt = (e.flags & 16384) !== 0;
    else {
      switch (((xt = !1), t.tag)) {
        case 3:
          yg(t), Hu();
          break;
        case 5:
          ug(t);
          break;
        case 1:
          Xe(t.type) && Il(t);
          break;
        case 4:
          Uc(t, t.stateNode.containerInfo);
          break;
        case 10:
          n = t.memoizedProps.value;
          var o = t.type._context;
          he(Zl, o._currentValue), (o._currentValue = n);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (r & t.child.childLanes) !== 0
              ? wg(e, t, r)
              : (he(ve, ve.current & 1),
                (t = Yt(e, t, r)),
                t !== null ? t.sibling : null);
          he(ve, ve.current & 1);
          break;
        case 19:
          if (((n = (r & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (n) return Pg(e, t, r);
            t.flags |= 64;
          }
          if (
            ((o = t.memoizedState),
            o !== null &&
              ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
            he(ve, ve.current),
            n)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), Bu(e, t, r);
      }
      return Yt(e, t, r);
    }
  else xt = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((n = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (o = Wn(t, Fe.current)),
        jn(t, r),
        (o = yd(null, t, n, e, o, r)),
        (t.flags |= 1),
        typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), Xe(n))
        ) {
          var i = !0;
          Il(t);
        } else i = !1;
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
          gd(t);
        var l = n.getDerivedStateFromProps;
        typeof l == "function" && ta(t, n, l, e),
          (o.updater = Fs),
          (t.stateNode = o),
          (o._reactInternals = t),
          Wc(t, n, e, r),
          (t = qc(null, t, n, !0, i, r));
      } else (t.tag = 0), Ue(null, t, o, r), (t = t.child);
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (i = o._init),
          (o = i(o._payload)),
          (t.type = o),
          (i = t.tag = g$(o)),
          (e = bt(o, e)),
          i)
        ) {
          case 0:
            t = Xc(null, t, o, e, r);
            break e;
          case 1:
            t = hg(null, t, o, e, r);
            break e;
          case 11:
            t = mg(null, t, o, e, r);
            break e;
          case 14:
            t = vg(null, t, o, bt(o.type, e), n, r);
            break e;
        }
        throw Error(N(306, o, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : bt(n, o)),
        Xc(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : bt(n, o)),
        hg(e, t, n, o, r)
      );
    case 3:
      if ((yg(t), (n = t.updateQueue), e === null || n === null))
        throw Error(N(282));
      if (
        ((n = t.pendingProps),
        (o = t.memoizedState),
        (o = o !== null ? o.element : null),
        My(e, t),
        hi(t, n, null, r),
        (n = t.memoizedState.element),
        n === o)
      )
        Hu(), (t = Yt(e, t, r));
      else {
        if (
          ((o = t.stateNode),
          (i = o.hydrate) &&
            ((fr = Mn(t.stateNode.containerInfo.firstChild)),
            (Gt = t),
            (i = Nt = !0)),
          i)
        ) {
          if (((e = o.mutableSourceEagerHydrationData), e != null))
            for (o = 0; o < e.length; o += 2)
              (i = e[o]),
                (i._workInProgressVersionPrimary = e[o + 1]),
                Ln.push(i);
          for (r = Ay(t, null, n, r), t.child = r; r; )
            (r.flags = (r.flags & -3) | 1024), (r = r.sibling);
        } else Ue(e, t, n, r), Hu();
        t = t.child;
      }
      return t;
    case 5:
      return (
        ug(t),
        e === null && Gc(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ac(n, o) ? (l = null) : i !== null && Ac(n, i) && (t.flags |= 16),
        Ky(e, t),
        Ue(e, t, l, r),
        t.child
      );
    case 6:
      return e === null && Gc(t), null;
    case 13:
      return wg(e, t, r);
    case 4:
      return (
        Uc(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = ra(t, null, n, r)) : Ue(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : bt(n, o)),
        mg(e, t, n, o, r)
      );
    case 7:
      return Ue(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        (n = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value);
        var a = t.type._context;
        if ((he(Zl, a._currentValue), (a._currentValue = i), l !== null))
          if (
            ((a = l.value),
            (i = ct(a, i)
              ? 0
              : (typeof n._calculateChangedBits == "function"
                  ? n._calculateChangedBits(a, i)
                  : 1073741823) | 0),
            i === 0)
          ) {
            if (l.children === o.children && !Ye.current) {
              t = Yt(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var s = a.dependencies;
              if (s !== null) {
                l = a.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === n && (u.observedBits & i) !== 0) {
                    a.tag === 1 &&
                      ((u = hr(-1, r & -r)), (u.tag = 2), yr(a, u)),
                      (a.lanes |= r),
                      (u = a.alternate),
                      u !== null && (u.lanes |= r),
                      Ty(a.return, r),
                      (s.lanes |= r);
                    break;
                  }
                  u = u.next;
                }
              } else l = a.tag === 10 && a.type === t.type ? null : a.child;
              if (l !== null) l.return = a;
              else
                for (l = a; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((a = l.sibling), a !== null)) {
                    (a.return = l.return), (l = a);
                    break;
                  }
                  l = l.return;
                }
              a = l;
            }
        Ue(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (i = t.pendingProps),
        (n = i.children),
        jn(t, r),
        (o = pt(o, i.unstable_observedBits)),
        (n = n(o)),
        (t.flags |= 1),
        Ue(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (i = bt(o, t.pendingProps)),
        (i = bt(o.type, i)),
        vg(e, t, o, i, n, r)
      );
    case 15:
      return qy(e, t, t.type, t.pendingProps, n, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : bt(n, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        Xe(n) ? ((e = !0), Il(t)) : (e = !1),
        jn(t, r),
        Ly(t, n, o),
        Wc(t, n, o, r),
        qc(null, t, n, !0, e, r)
      );
    case 19:
      return Pg(e, t, r);
    case 23:
      return Bu(e, t, r);
    case 24:
      return Bu(e, t, r);
  }
  throw Error(N(156, t.tag));
};
function p$(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ft(e, t, r, n) {
  return new p$(e, t, r, n);
}
function Cd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function g$(e) {
  if (typeof e == "function") return Cd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Rs)) return 11;
    if (e === Is) return 14;
  }
  return 2;
}
function Er(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = ft(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.nextEffect = null),
        (r.firstEffect = null),
        (r.lastEffect = null)),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Ml(e, t, r, n, o, i) {
  var l = 2;
  if (((n = e), typeof e == "function")) Cd(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case sr:
        return Vn(r.children, o, i, t);
      case V0:
        (l = 8), (o |= 16);
        break;
      case Bf:
        (l = 8), (o |= 1);
        break;
      case Uo:
        return (
          (e = ft(12, r, t, o | 8)),
          (e.elementType = Uo),
          (e.type = Uo),
          (e.lanes = i),
          e
        );
      case Go:
        return (
          (e = ft(13, r, t, o)),
          (e.type = Go),
          (e.elementType = Go),
          (e.lanes = i),
          e
        );
      case Bl:
        return (e = ft(19, r, t, o)), (e.elementType = Bl), (e.lanes = i), e;
      case qf:
        return Ed(r, o, i, t);
      case bc:
        return (e = ft(24, r, t, o)), (e.elementType = bc), (e.lanes = i), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wf:
              l = 10;
              break e;
            case Uf:
              l = 9;
              break e;
            case Rs:
              l = 11;
              break e;
            case Is:
              l = 14;
              break e;
            case Gf:
              (l = 16), (n = null);
              break e;
            case Yf:
              l = 22;
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ft(l, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function Vn(e, t, r, n) {
  return (e = ft(7, e, n, t)), (e.lanes = r), e;
}
function Ed(e, t, r, n) {
  return (e = ft(23, e, n, t)), (e.elementType = qf), (e.lanes = r), e;
}
function Gu(e, t, r) {
  return (e = ft(6, e, null, t)), (e.lanes = r), e;
}
function Yu(e, t, r) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function m$(e, t, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = r),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ru(0)),
    (this.expirationTimes = Ru(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ru(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function v$(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yr,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function fa(e, t, r, n) {
  var o = t.current,
    i = tt(),
    l = wr(o);
  e: if (r) {
    r = r._reactInternals;
    t: {
      if (cn(r) !== r || r.tag !== 1) throw Error(N(170));
      var a = r;
      do {
        switch (a.tag) {
          case 3:
            a = a.stateNode.context;
            break t;
          case 1:
            if (Xe(a.type)) {
              a = a.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        a = a.return;
      } while (a !== null);
      throw Error(N(171));
    }
    if (r.tag === 1) {
      var s = r.type;
      if (Xe(s)) {
        r = Ey(r, s, a);
        break e;
      }
    }
    r = a;
  } else r = Or;
  return (
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = hr(i, l)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    yr(o, t),
    _r(o, l, i),
    l
  );
}
function Xu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function kd(e, t) {
  zg(e, t), (e = e.alternate) && zg(e, t);
}
function h$() {
  return null;
}
function Rd(e, t, r) {
  var n =
    (r != null &&
      r.hydrationOptions != null &&
      r.hydrationOptions.mutableSources) ||
    null;
  if (
    ((r = new m$(e, t, r != null && r.hydrate === !0)),
    (t = ft(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (r.current = t),
    (t.stateNode = r),
    gd(t),
    (e[eo] = r.current),
    xy(e.nodeType === 8 ? e.parentNode : e),
    n)
  )
    for (e = 0; e < n.length; e++) {
      t = n[e];
      var o = t._getVersion;
      (o = o(t._source)),
        r.mutableSourceEagerHydrationData == null
          ? (r.mutableSourceEagerHydrationData = [t, o])
          : r.mutableSourceEagerHydrationData.push(t, o);
    }
  this._internalRoot = r;
}
Rd.prototype.render = function (e) {
  fa(e, this._internalRoot, null, null);
};
Rd.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  fa(null, e, null, function () {
    t[eo] = null;
  });
};
function zi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function y$(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var r; (r = e.lastChild); ) e.removeChild(r);
  return new Rd(e, 0, t ? { hydrate: !0 } : void 0);
}
function Hs(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var l = i._internalRoot;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var u = Xu(l);
        a.call(u);
      };
    }
    fa(t, l, e, o);
  } else {
    if (
      ((i = r._reactRootContainer = y$(r, n)),
      (l = i._internalRoot),
      typeof o == "function")
    ) {
      var s = o;
      o = function () {
        var u = Xu(l);
        s.call(u);
      };
    }
    i1(function () {
      fa(t, l, e, o);
    });
  }
  return Xu(l);
}
ry = function (e) {
  if (e.tag === 13) {
    var t = tt();
    _r(e, 4, t), kd(e, 4);
  }
};
ed = function (e) {
  if (e.tag === 13) {
    var t = tt();
    _r(e, 67108864, t), kd(e, 67108864);
  }
};
ny = function (e) {
  if (e.tag === 13) {
    var t = tt(),
      r = wr(e);
    _r(e, r, t), kd(e, r);
  }
};
oy = function (e, t) {
  return t();
};
Nc = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Pc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = js(n);
            if (!o) throw Error(N(90));
            B0(n), Pc(n, o);
          }
        }
      }
      break;
    case "textarea":
      U0(e, r);
      break;
    case "select":
      (t = r.value), t != null && zn(e, !!r.multiple, t, !1);
  }
};
Qf = o1;
Z0 = function (e, t, r, n, o) {
  var i = Y;
  Y |= 4;
  try {
    return nn(98, e.bind(null, t, r, n, o));
  } finally {
    (Y = i), Y === 0 && (no(), Mt());
  }
};
Zf = function () {
  (Y & 49) === 0 && (o$(), zr());
};
J0 = function (e, t) {
  var r = Y;
  Y |= 2;
  try {
    return e(t);
  } finally {
    (Y = r), Y === 0 && (no(), Mt());
  }
};
function d1(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zi(t)) throw Error(N(200));
  return v$(e, t, null, r);
}
var w$ = { Events: [Ri, En, js, K0, Q0, zr, { current: !1 }] },
  Ro = {
    findFiberByHostInstance: qr,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom",
  },
  _$ = {
    bundleType: Ro.bundleType,
    version: Ro.version,
    rendererPackageName: Ro.rendererPackageName,
    rendererConfig: Ro.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ty(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ro.findFiberByHostInstance || h$,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!sl.isDisabled && sl.supportsFiber)
    try {
      (cd = sl.inject(_$)), (Jr = sl);
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w$;
ht.createPortal = d1;
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : Error(N(268, Object.keys(e)));
  return (e = ty(t)), (e = e === null ? null : e.stateNode), e;
};
ht.flushSync = function (e, t) {
  var r = Y;
  if ((r & 48) !== 0) return e(t);
  Y |= 1;
  try {
    if (e) return nn(99, e.bind(null, t));
  } finally {
    (Y = r), Mt();
  }
};
ht.hydrate = function (e, t, r) {
  if (!zi(t)) throw Error(N(200));
  return Hs(null, e, t, !0, r);
};
ht.render = function (e, t, r) {
  if (!zi(t)) throw Error(N(200));
  return Hs(null, e, t, !1, r);
};
ht.unmountComponentAtNode = function (e) {
  if (!zi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (i1(function () {
        Hs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[eo] = null);
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = o1;
ht.unstable_createPortal = function (e, t) {
  return d1(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
ht.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!zi(r)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Hs(e, t, r, !1, n);
};
ht.version = "17.0.2";
function p1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p1);
    } catch (e) {
      console.error(e);
    }
}
p1(), (Ei.exports = ht);
var S$ = Ei.exports;
function da(e, t) {
  let r = e;
  for (; (r = r.parentElement) && !r.matches(t); );
  return r;
}
function b$(e, t, r) {
  for (let n = e - 1; n >= 0; n -= 1) if (!t[n].disabled) return n;
  if (r) {
    for (let n = t.length - 1; n > -1; n -= 1) if (!t[n].disabled) return n;
  }
  return e;
}
function x$(e, t, r) {
  for (let n = e + 1; n < t.length; n += 1) if (!t[n].disabled) return n;
  if (r) {
    for (let n = 0; n < t.length; n += 1) if (!t[n].disabled) return n;
  }
  return e;
}
function P$(e, t, r) {
  return da(e, r) === da(t, r);
}
function g1({
  parentSelector: e,
  siblingSelector: t,
  onKeyDown: r,
  loop: n = !0,
  activateOnFocus: o = !1,
  dir: i = "rtl",
  orientation: l,
}) {
  return (a) => {
    var s;
    r?.(a);
    const u = Array.from(
        ((s = da(a.currentTarget, e)) == null
          ? void 0
          : s.querySelectorAll(t)) || []
      ).filter((w) => P$(a.currentTarget, w, e)),
      c = u.findIndex((w) => a.currentTarget === w),
      f = x$(c, u, n),
      d = b$(c, u, n),
      p = i === "rtl" ? d : f,
      y = i === "rtl" ? f : d;
    switch (a.key) {
      case "ArrowRight": {
        l === "horizontal" &&
          (a.stopPropagation(),
          a.preventDefault(),
          u[p].focus(),
          o && u[p].click());
        break;
      }
      case "ArrowLeft": {
        l === "horizontal" &&
          (a.stopPropagation(),
          a.preventDefault(),
          u[y].focus(),
          o && u[y].click());
        break;
      }
      case "ArrowUp": {
        l === "vertical" &&
          (a.stopPropagation(),
          a.preventDefault(),
          u[d].focus(),
          o && u[d].click());
        break;
      }
      case "ArrowDown": {
        l === "vertical" &&
          (a.stopPropagation(),
          a.preventDefault(),
          u[f].focus(),
          o && u[f].click());
        break;
      }
      case "Home": {
        a.stopPropagation(), a.preventDefault(), !u[0].disabled && u[0].focus();
        break;
      }
      case "End": {
        a.stopPropagation(), a.preventDefault();
        const w = u.length - 1;
        !u[w].disabled && u[w].focus();
        break;
      }
    }
  };
}
function $$(e, t, r) {
  var n;
  return r
    ? Array.from(
        ((n = da(r, t)) == null ? void 0 : n.querySelectorAll(e)) || []
      ).findIndex((o) => o === r)
    : null;
}
var Bs = { exports: {} },
  Di = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O$ = g.exports,
  m1 = 60103;
Di.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var Dg = Symbol.for;
  (m1 = Dg("react.element")), (Di.Fragment = Dg("react.fragment"));
}
var C$ =
    O$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  E$ = Object.prototype.hasOwnProperty,
  k$ = { key: !0, ref: !0, __self: !0, __source: !0 };
function v1(e, t, r) {
  var n,
    o = {},
    i = null,
    l = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (n in t) E$.call(t, n) && !k$.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: m1,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: C$.current,
  };
}
Di.jsx = v1;
Di.jsxs = v1;
Bs.exports = Di;
const S = Bs.exports.jsx,
  U = Bs.exports.jsxs,
  it = Bs.exports.Fragment;
function Id(e) {
  const t = g.exports.createContext(null);
  return [
    ({ children: o, value: i }) => S(t.Provider, { value: i, children: o }),
    () => {
      const o = g.exports.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function Si(e) {
  return Array.isArray(e) ? e : [e];
}
function Tg(e, t) {
  return (r) => {
    if (typeof r != "string" || r.trim().length === 0) throw new Error(t);
    return `${e}-${r}`;
  };
}
function Ti(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
    ? e.type !== E.Fragment
    : !1;
}
const R$ = () => {};
function I$(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active
    ? R$
    : (r) => {
        var n;
        r.key === "Escape" && (e(), (n = t.onTrigger) == null || n.call(t));
      };
}
function Xt(e, t) {
  return (r) => {
    e?.(r), t?.(r);
  };
}
function N$() {
  const [e, t] = g.exports.useState(-1);
  return [e, { setHovered: t, resetHovered: () => t(-1) }];
}
function z$({ data: e }) {
  const t = [],
    r = [],
    n = e.reduce(
      (o, i, l) => (
        i.group
          ? o[i.group]
            ? o[i.group].push(l)
            : (o[i.group] = [l])
          : r.push(l),
        o
      ),
      {}
    );
  return (
    Object.keys(n).forEach((o) => {
      t.push(...n[o].map((i) => e[i]));
    }),
    t.push(...r.map((o) => e[o])),
    t
  );
}
function D$(e, t) {
  window.dispatchEvent(new CustomEvent(e, { detail: t }));
}
const T$ =
  typeof window < "u" ? g.exports.useLayoutEffect : g.exports.useEffect;
function M$(e) {
  function t(n) {
    const o = Object.keys(n).reduce(
      (i, l) => ((i[`${e}:${l}`] = (a) => n[l](a.detail)), i),
      {}
    );
    T$(
      () => (
        Object.keys(o).forEach((i) => {
          window.removeEventListener(i, o[i]), window.addEventListener(i, o[i]);
        }),
        () =>
          Object.keys(o).forEach((i) => {
            window.removeEventListener(i, o[i]);
          })
      ),
      []
    );
  }
  function r(n) {
    return (...o) => D$(`${e}:${String(n)}`, o[0]);
  }
  return [t, r];
}
function h1(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = h1(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function y1() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = h1(t)) && (n && (n += " "), (n += r));
  return n;
}
const w1 = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113",
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529",
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a",
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d",
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c",
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4",
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7",
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab",
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285",
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b",
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e",
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d",
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700",
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f",
  ],
};
function j$(e) {
  return () => ({ fontFamily: e.fontFamily || "sans-serif" });
}
function L$(e) {
  return () => ({
    WebkitTapHighlightColor: "transparent",
    "&:focus": {
      outlineOffset: 2,
      outline:
        e.focusRing === "always" || e.focusRing === "auto"
          ? `2px solid ${
              e.colors[e.primaryColor][e.colorScheme === "dark" ? 7 : 5]
            }`
          : "none",
    },
    "&:focus:not(:focus-visible)": {
      outline:
        e.focusRing === "auto" || e.focusRing === "never" ? "none" : void 0,
    },
  });
}
function Mi(e) {
  return (t) =>
    typeof e.primaryShade == "number"
      ? e.primaryShade
      : e.primaryShade[t || e.colorScheme];
}
function Nd(e) {
  const t = Mi(e);
  return (r, n, o = !0, i = !0) => {
    if (typeof r == "string" && r.includes(".")) {
      const [a, s] = r.split("."),
        u = parseInt(s, 10);
      if (a in e.colors && u >= 0 && u < 10)
        return e.colors[a][typeof n == "number" && !i ? n : u];
    }
    const l = typeof n == "number" ? n : t();
    return r in e.colors ? e.colors[r][l] : o ? e.colors[e.primaryColor][l] : r;
  };
}
function _1(e) {
  let t = "";
  for (let r = 1; r < e.length - 1; r += 1)
    t += `${e[r]} ${(r / (e.length - 1)) * 100}%, `;
  return `${e[0]} 0%, ${t}${e[e.length - 1]} 100%`;
}
function F$(e, ...t) {
  return `linear-gradient(${e}deg, ${_1(t)})`;
}
function A$(...e) {
  return `radial-gradient(circle, ${_1(e)})`;
}
function S1(e) {
  const t = Nd(e),
    r = Mi(e);
  return (n) => {
    const o = {
      from: n?.from || e.defaultGradient.from,
      to: n?.to || e.defaultGradient.to,
      deg: n?.deg || e.defaultGradient.deg,
    };
    return `linear-gradient(${o.deg}deg, ${t(o.from, r(), !1)} 0%, ${t(
      o.to,
      r(),
      !1
    )} 100%)`;
  };
}
function zd(e) {
  if (typeof e.size == "number") return e.size;
  const t = e.sizes[e.size];
  return t !== void 0 ? t : e.size || e.sizes.md;
}
function V$(e) {
  return (t) =>
    `@media (min-width: ${zd({ size: t, sizes: e.breakpoints }) + 1}px)`;
}
function H$(e) {
  return (t) =>
    `@media (max-width: ${zd({ size: t, sizes: e.breakpoints })}px)`;
}
function B$(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function W$(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const l = t.split("");
    t = [l[0], l[0], l[1], l[1], l[2], l[2]].join("");
  }
  const r = parseInt(t, 16),
    n = (r >> 16) & 255,
    o = (r >> 8) & 255,
    i = r & 255;
  return { r: n, g: o, b: i, a: 1 };
}
function U$(e) {
  const [t, r, n, o] = e
    .replace(/[^0-9,.]/g, "")
    .split(",")
    .map(Number);
  return { r: t, g: r, b: n, a: o || 1 };
}
function Dd(e) {
  return B$(e)
    ? W$(e)
    : e.startsWith("rgb")
    ? U$(e)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function Pn(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  const { r, g: n, b: o } = Dd(e);
  return `rgba(${r}, ${n}, ${o}, ${t})`;
}
function G$(e = 0) {
  return { position: "absolute", top: e, right: e, left: e, bottom: e };
}
function Y$(e, t) {
  const { r, g: n, b: o, a: i } = Dd(e),
    l = 1 - t,
    a = (s) => Math.round(s * l);
  return `rgba(${a(r)}, ${a(n)}, ${a(o)}, ${i})`;
}
function X$(e, t) {
  const { r, g: n, b: o, a: i } = Dd(e),
    l = (a) => Math.round(a + (255 - a) * t);
  return `rgba(${l(r)}, ${l(n)}, ${l(o)}, ${i})`;
}
function q$(e) {
  return (t) => {
    if (typeof t == "number") return t;
    const r =
      typeof e.defaultRadius == "number"
        ? e.defaultRadius
        : e.radius[e.defaultRadius] || e.defaultRadius;
    return e.radius[t] || t || r;
  };
}
function K$(e, t) {
  if (typeof e == "string" && e.includes(".")) {
    const [r, n] = e.split("."),
      o = parseInt(n, 10);
    if (r in t.colors && o >= 0 && o < 10)
      return { isSplittedColor: !0, key: r, shade: o };
  }
  return { isSplittedColor: !1 };
}
function Q$(e) {
  const t = Nd(e),
    r = Mi(e),
    n = S1(e);
  return ({ variant: o, color: i, gradient: l, primaryFallback: a }) => {
    const s = K$(i, e);
    if (o === "light")
      return {
        border: "transparent",
        background: Pn(
          t(i, e.colorScheme === "dark" ? 8 : 0, a, !1),
          e.colorScheme === "dark" ? 0.2 : 1
        ),
        color:
          i === "dark"
            ? e.colorScheme === "dark"
              ? e.colors.dark[0]
              : e.colors.dark[9]
            : t(i, e.colorScheme === "dark" ? 2 : r("light")),
        hover: Pn(
          t(i, e.colorScheme === "dark" ? 7 : 1, a, !1),
          e.colorScheme === "dark" ? 0.25 : 0.65
        ),
      };
    if (o === "default")
      return {
        border: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4],
        background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
        color: e.colorScheme === "dark" ? e.white : e.black,
        hover: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0],
      };
    if (o === "white")
      return {
        border: "transparent",
        background: e.white,
        color: t(i, r()),
        hover: null,
      };
    if (o === "outline")
      return {
        border: t(i, e.colorScheme === "dark" ? 5 : r("light")),
        background: "transparent",
        color: t(i, e.colorScheme === "dark" ? 5 : r("light")),
        hover:
          e.colorScheme === "dark"
            ? Pn(t(i, 5, a, !1), 0.05)
            : Pn(t(i, 0, a, !1), 0.35),
      };
    if (o === "gradient")
      return {
        background: n(l),
        color: e.white,
        border: "transparent",
        hover: null,
      };
    if (o === "subtle")
      return {
        border: "transparent",
        background: "transparent",
        color:
          i === "dark"
            ? e.colorScheme === "dark"
              ? e.colors.dark[0]
              : e.colors.dark[9]
            : t(i, e.colorScheme === "dark" ? 2 : r("light")),
        hover: Pn(
          t(i, e.colorScheme === "dark" ? 8 : 0, a, !1),
          e.colorScheme === "dark" ? 0.2 : 1
        ),
      };
    const u = r(),
      c = s.isSplittedColor ? s.shade : u,
      f = s.isSplittedColor ? s.key : i;
    return {
      border: "transparent",
      background: t(f, c, a),
      color: e.white,
      hover: t(f, c === 9 ? 8 : c + 1),
    };
  };
}
function Z$(e) {
  return (t) => {
    const r = Mi(e)(t);
    return e.colors[e.primaryColor][r];
  };
}
function J$(e) {
  return {
    "@media (hover: hover)": { "&:hover": e },
    "@media (hover: none)": { "&:active": e },
  };
}
const $e = {
  fontStyles: j$,
  themeColor: Nd,
  focusStyles: L$,
  linearGradient: F$,
  radialGradient: A$,
  smallerThan: H$,
  largerThan: V$,
  rgba: Pn,
  size: zd,
  cover: G$,
  darken: Y$,
  lighten: X$,
  radius: q$,
  variant: Q$,
  primaryShade: Mi,
  hover: J$,
  gradient: S1,
  primaryColor: Z$,
};
var eO = Object.defineProperty,
  tO = Object.defineProperties,
  rO = Object.getOwnPropertyDescriptors,
  Mg = Object.getOwnPropertySymbols,
  nO = Object.prototype.hasOwnProperty,
  oO = Object.prototype.propertyIsEnumerable,
  jg = (e, t, r) =>
    t in e
      ? eO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  iO = (e, t) => {
    for (var r in t || (t = {})) nO.call(t, r) && jg(e, r, t[r]);
    if (Mg) for (var r of Mg(t)) oO.call(t, r) && jg(e, r, t[r]);
    return e;
  },
  lO = (e, t) => tO(e, rO(t));
function b1(e) {
  return lO(iO({}, e), {
    fn: {
      fontStyles: $e.fontStyles(e),
      themeColor: $e.themeColor(e),
      focusStyles: $e.focusStyles(e),
      largerThan: $e.largerThan(e),
      smallerThan: $e.smallerThan(e),
      radialGradient: $e.radialGradient,
      linearGradient: $e.linearGradient,
      gradient: $e.gradient(e),
      rgba: $e.rgba,
      size: $e.size,
      cover: $e.cover,
      lighten: $e.lighten,
      darken: $e.darken,
      primaryShade: $e.primaryShade(e),
      radius: $e.radius(e),
      variant: $e.variant(e),
      hover: $e.hover,
      primaryColor: $e.primaryColor(e),
    },
  });
}
Object.keys(w1);
const aO = ["xs", "sm", "md", "lg", "xl"],
  sO = {
    dir: "ltr",
    primaryShade: { light: 6, dark: 8 },
    focusRing: "auto",
    loader: "oval",
    dateFormat: "MMMM D, YYYY",
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    defaultRadius: "sm",
    transitionTimingFunction: "ease",
    colors: w1,
    lineHeight: 1.55,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    primaryColor: "blue",
    respectReducedMotion: !0,
    cursorType: "default",
    defaultGradient: { from: "indigo", to: "cyan", deg: 45 },
    shadows: {
      xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
      sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
      md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
      xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px",
    },
    fontSizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
    radius: { xs: 2, sm: 4, md: 8, lg: 16, xl: 32 },
    spacing: { xs: 10, sm: 12, md: 16, lg: 20, xl: 24 },
    breakpoints: { xs: 576, sm: 768, md: 992, lg: 1200, xl: 1400 },
    headings: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: 700,
      sizes: {
        h1: { fontSize: 34, lineHeight: 1.3, fontWeight: void 0 },
        h2: { fontSize: 26, lineHeight: 1.35, fontWeight: void 0 },
        h3: { fontSize: 22, lineHeight: 1.4, fontWeight: void 0 },
        h4: { fontSize: 18, lineHeight: 1.45, fontWeight: void 0 },
        h5: { fontSize: 16, lineHeight: 1.5, fontWeight: void 0 },
        h6: { fontSize: 14, lineHeight: 1.5, fontWeight: void 0 },
      },
    },
    other: {},
    components: {},
    activeStyles: { transform: "translateY(1px)" },
    datesLocale: "en",
  },
  Td = b1(sO);
function uO(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function cO(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var fO = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(cO(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = uO(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Te = "-ms-",
  pa = "-moz-",
  te = "-webkit-",
  x1 = "comm",
  Md = "rule",
  jd = "decl",
  dO = "@import",
  P1 = "@keyframes",
  pO = Math.abs,
  Ws = String.fromCharCode,
  gO = Object.assign;
function mO(e, t) {
  return (
    (((((((t << 2) ^ Ge(e, 0)) << 2) ^ Ge(e, 1)) << 2) ^ Ge(e, 2)) << 2) ^
    Ge(e, 3)
  );
}
function $1(e) {
  return e.trim();
}
function vO(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, r) {
  return e.replace(t, r);
}
function uf(e, t) {
  return e.indexOf(t);
}
function Ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function bi(e, t, r) {
  return e.slice(t, r);
}
function Ot(e) {
  return e.length;
}
function Ld(e) {
  return e.length;
}
function ul(e, t) {
  return t.push(e), e;
}
function hO(e, t) {
  return e.map(t).join("");
}
var Us = 1,
  Yn = 1,
  O1 = 0,
  qe = 0,
  we = 0,
  oo = "";
function Gs(e, t, r, n, o, i, l) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: Us,
    column: Yn,
    length: l,
    return: "",
  };
}
function Io(e, t) {
  return gO(Gs("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function yO() {
  return we;
}
function wO() {
  return (
    (we = qe > 0 ? Ge(oo, --qe) : 0), Yn--, we === 10 && ((Yn = 1), Us--), we
  );
}
function rt() {
  return (
    (we = qe < O1 ? Ge(oo, qe++) : 0), Yn++, we === 10 && ((Yn = 1), Us++), we
  );
}
function zt() {
  return Ge(oo, qe);
}
function jl() {
  return qe;
}
function ji(e, t) {
  return bi(oo, e, t);
}
function xi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function C1(e) {
  return (Us = Yn = 1), (O1 = Ot((oo = e))), (qe = 0), [];
}
function E1(e) {
  return (oo = ""), e;
}
function Ll(e) {
  return $1(ji(qe - 1, cf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _O(e) {
  for (; (we = zt()) && we < 33; ) rt();
  return xi(e) > 2 || xi(we) > 3 ? "" : " ";
}
function SO(e, t) {
  for (
    ;
    --t &&
    rt() &&
    !(we < 48 || we > 102 || (we > 57 && we < 65) || (we > 70 && we < 97));

  );
  return ji(e, jl() + (t < 6 && zt() == 32 && rt() == 32));
}
function cf(e) {
  for (; rt(); )
    switch (we) {
      case e:
        return qe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cf(we);
        break;
      case 40:
        e === 41 && cf(e);
        break;
      case 92:
        rt();
        break;
    }
  return qe;
}
function bO(e, t) {
  for (; rt() && e + we !== 47 + 10; )
    if (e + we === 42 + 42 && zt() === 47) break;
  return "/*" + ji(t, qe - 1) + "*" + Ws(e === 47 ? e : rt());
}
function xO(e) {
  for (; !xi(zt()); ) rt();
  return ji(e, qe);
}
function PO(e) {
  return E1(Fl("", null, null, null, [""], (e = C1(e)), 0, [0], e));
}
function Fl(e, t, r, n, o, i, l, a, s) {
  for (
    var u = 0,
      c = 0,
      f = l,
      d = 0,
      p = 0,
      y = 0,
      w = 1,
      v = 1,
      m = 1,
      h = 0,
      _ = "",
      b = o,
      O = i,
      x = n,
      P = _;
    v;

  )
    switch (((y = h), (h = rt()))) {
      case 40:
        if (y != 108 && P.charCodeAt(f - 1) == 58) {
          uf((P += oe(Ll(h), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Ll(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += _O(y);
        break;
      case 92:
        P += SO(jl() - 1, 7);
        continue;
      case 47:
        switch (zt()) {
          case 42:
          case 47:
            ul($O(bO(rt(), jl()), t, r), s);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * w:
        a[u++] = Ot(P) * m;
      case 125 * w:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            v = 0;
          case 59 + c:
            p > 0 &&
              Ot(P) - f &&
              ul(
                p > 32
                  ? Fg(P + ";", n, r, f - 1)
                  : Fg(oe(P, " ", "") + ";", n, r, f - 2),
                s
              );
            break;
          case 59:
            P += ";";
          default:
            if (
              (ul((x = Lg(P, t, r, u, c, o, a, _, (b = []), (O = []), f)), i),
              h === 123)
            )
              if (c === 0) Fl(P, t, x, x, b, i, f, a, O);
              else
                switch (d) {
                  case 100:
                  case 109:
                  case 115:
                    Fl(
                      e,
                      x,
                      x,
                      n && ul(Lg(e, x, x, 0, 0, o, a, _, o, (b = []), f), O),
                      o,
                      O,
                      f,
                      a,
                      n ? b : O
                    );
                    break;
                  default:
                    Fl(P, x, x, x, [""], O, 0, a, O);
                }
        }
        (u = c = p = 0), (w = m = 1), (_ = P = ""), (f = l);
        break;
      case 58:
        (f = 1 + Ot(P)), (p = y);
      default:
        if (w < 1) {
          if (h == 123) --w;
          else if (h == 125 && w++ == 0 && wO() == 125) continue;
        }
        switch (((P += Ws(h)), h * w)) {
          case 38:
            m = c > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Ot(P) - 1) * m), (m = 1);
            break;
          case 64:
            zt() === 45 && (P += Ll(rt())),
              (d = zt()),
              (c = f = Ot((_ = P += xO(jl())))),
              h++;
            break;
          case 45:
            y === 45 && Ot(P) == 2 && (w = 0);
        }
    }
  return i;
}
function Lg(e, t, r, n, o, i, l, a, s, u, c) {
  for (
    var f = o - 1, d = o === 0 ? i : [""], p = Ld(d), y = 0, w = 0, v = 0;
    y < n;
    ++y
  )
    for (var m = 0, h = bi(e, f + 1, (f = pO((w = l[y])))), _ = e; m < p; ++m)
      (_ = $1(w > 0 ? d[m] + " " + h : oe(h, /&\f/g, d[m]))) && (s[v++] = _);
  return Gs(e, t, r, o === 0 ? Md : a, s, u, c);
}
function $O(e, t, r) {
  return Gs(e, t, r, x1, Ws(yO()), bi(e, 2, -2), 0);
}
function Fg(e, t, r, n) {
  return Gs(e, t, r, jd, bi(e, 0, n), bi(e, n + 1, -1), n);
}
function k1(e, t) {
  switch (mO(e, t)) {
    case 5103:
      return te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + pa + e + Te + e + e;
    case 6828:
    case 4268:
      return te + e + Te + e + e;
    case 6165:
      return te + e + Te + "flex-" + e + e;
    case 5187:
      return (
        te + e + oe(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Te + "flex-$1$2") + e
      );
    case 5443:
      return te + e + Te + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        te +
        e +
        Te +
        "flex-line-pack" +
        oe(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return te + e + Te + oe(e, "shrink", "negative") + e;
    case 5292:
      return te + e + Te + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        te +
        "box-" +
        oe(e, "-grow", "") +
        te +
        e +
        Te +
        oe(e, "grow", "positive") +
        e
      );
    case 4554:
      return te + oe(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return (
        oe(
          oe(oe(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return (
        oe(
          oe(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + Te + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        te +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ot(e) - 1 - t > 6)
        switch (Ge(e, t + 1)) {
          case 109:
            if (Ge(e, t + 4) !== 45) break;
          case 102:
            return (
              oe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  te +
                  "$2-$3$1" +
                  pa +
                  (Ge(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~uf(e, "stretch")
              ? k1(oe(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ge(e, t + 1) !== 115) break;
    case 6444:
      switch (Ge(e, Ot(e) - 3 - (~uf(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + te) + e;
        case 101:
          return (
            oe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                te +
                (Ge(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                te +
                "$2$3$1" +
                Te +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ge(e, t + 11)) {
        case 114:
          return te + e + Te + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + Te + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + Te + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + Te + e + e;
  }
  return e;
}
function Hn(e, t) {
  for (var r = "", n = Ld(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function OO(e, t, r, n) {
  switch (e.type) {
    case dO:
    case jd:
      return (e.return = e.return || e.value);
    case x1:
      return "";
    case P1:
      return (e.return = e.value + "{" + Hn(e.children, n) + "}");
    case Md:
      e.value = e.props.join(",");
  }
  return Ot((r = Hn(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function CO(e) {
  var t = Ld(e);
  return function (r, n, o, i) {
    for (var l = "", a = 0; a < t; a++) l += e[a](r, n, o, i) || "";
    return l;
  };
}
function EO(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function kO(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case jd:
        e.return = k1(e.value, e.length);
        break;
      case P1:
        return Hn([Io(e, { value: oe(e.value, "@", "@" + te) })], n);
      case Md:
        if (e.length)
          return hO(e.props, function (o) {
            switch (vO(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Hn(
                  [Io(e, { props: [oe(o, /:(read-\w+)/, ":" + pa + "$1")] })],
                  n
                );
              case "::placeholder":
                return Hn(
                  [
                    Io(e, {
                      props: [oe(o, /:(plac\w+)/, ":" + te + "input-$1")],
                    }),
                    Io(e, { props: [oe(o, /:(plac\w+)/, ":" + pa + "$1")] }),
                    Io(e, { props: [oe(o, /:(plac\w+)/, Te + "input-$1")] }),
                  ],
                  n
                );
            }
            return "";
          });
    }
}
function RO(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var IO = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = zt()), o === 38 && i === 12 && (r[n] = 1), !xi(i);

    )
      rt();
    return ji(t, qe);
  },
  NO = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (xi(o)) {
        case 0:
          o === 38 && zt() === 12 && (r[n] = 1), (t[n] += IO(qe - 1, r, n));
          break;
        case 2:
          t[n] += Ll(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = zt() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Ws(o);
      }
    while ((o = rt()));
    return t;
  },
  zO = function (t, r) {
    return E1(NO(C1(t), r));
  },
  Ag = new WeakMap(),
  DO = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ag.get(n)) &&
        !o
      ) {
        Ag.set(t, !0);
        for (
          var i = [], l = zO(r, i), a = n.props, s = 0, u = 0;
          s < l.length;
          s++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[s] ? l[s].replace(/&\f/g, a[c]) : a[c] + " " + l[s];
      }
    }
  },
  TO = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  },
  MO = [kO],
  jO = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (w) {
        var v = w.getAttribute("data-emotion");
        v.indexOf(" ") !== -1 &&
          (document.head.appendChild(w), w.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || MO,
      i = {},
      l,
      a = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (w) {
          for (
            var v = w.getAttribute("data-emotion").split(" "), m = 1;
            m < v.length;
            m++
          )
            i[v[m]] = !0;
          a.push(w);
        }
      );
    var s,
      u = [DO, TO];
    {
      var c,
        f = [
          OO,
          EO(function (w) {
            c.insert(w);
          }),
        ],
        d = CO(u.concat(o, f)),
        p = function (v) {
          return Hn(PO(v), d);
        };
      s = function (v, m, h, _) {
        (c = h),
          p(v ? v + "{" + m.styles + "}" : m.styles),
          _ && (y.inserted[m.name] = !0);
      };
    }
    var y = {
      key: r,
      sheet: new fO({
        key: r,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return y.sheet.hydrate(a), y;
  },
  R1 = jO;
function ge() {
  return (
    (ge = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ge.apply(this, arguments)
  );
}
var I1 = { exports: {} },
  le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ce = typeof Symbol == "function" && Symbol.for,
  Fd = Ce ? Symbol.for("react.element") : 60103,
  Ad = Ce ? Symbol.for("react.portal") : 60106,
  Ys = Ce ? Symbol.for("react.fragment") : 60107,
  Xs = Ce ? Symbol.for("react.strict_mode") : 60108,
  qs = Ce ? Symbol.for("react.profiler") : 60114,
  Ks = Ce ? Symbol.for("react.provider") : 60109,
  Qs = Ce ? Symbol.for("react.context") : 60110,
  Vd = Ce ? Symbol.for("react.async_mode") : 60111,
  Zs = Ce ? Symbol.for("react.concurrent_mode") : 60111,
  Js = Ce ? Symbol.for("react.forward_ref") : 60112,
  eu = Ce ? Symbol.for("react.suspense") : 60113,
  LO = Ce ? Symbol.for("react.suspense_list") : 60120,
  tu = Ce ? Symbol.for("react.memo") : 60115,
  ru = Ce ? Symbol.for("react.lazy") : 60116,
  FO = Ce ? Symbol.for("react.block") : 60121,
  AO = Ce ? Symbol.for("react.fundamental") : 60117,
  VO = Ce ? Symbol.for("react.responder") : 60118,
  HO = Ce ? Symbol.for("react.scope") : 60119;
function lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Fd:
        switch (((e = e.type), e)) {
          case Vd:
          case Zs:
          case Ys:
          case qs:
          case Xs:
          case eu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Qs:
              case Js:
              case ru:
              case tu:
              case Ks:
                return e;
              default:
                return t;
            }
        }
      case Ad:
        return t;
    }
  }
}
function N1(e) {
  return lt(e) === Zs;
}
le.AsyncMode = Vd;
le.ConcurrentMode = Zs;
le.ContextConsumer = Qs;
le.ContextProvider = Ks;
le.Element = Fd;
le.ForwardRef = Js;
le.Fragment = Ys;
le.Lazy = ru;
le.Memo = tu;
le.Portal = Ad;
le.Profiler = qs;
le.StrictMode = Xs;
le.Suspense = eu;
le.isAsyncMode = function (e) {
  return N1(e) || lt(e) === Vd;
};
le.isConcurrentMode = N1;
le.isContextConsumer = function (e) {
  return lt(e) === Qs;
};
le.isContextProvider = function (e) {
  return lt(e) === Ks;
};
le.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fd;
};
le.isForwardRef = function (e) {
  return lt(e) === Js;
};
le.isFragment = function (e) {
  return lt(e) === Ys;
};
le.isLazy = function (e) {
  return lt(e) === ru;
};
le.isMemo = function (e) {
  return lt(e) === tu;
};
le.isPortal = function (e) {
  return lt(e) === Ad;
};
le.isProfiler = function (e) {
  return lt(e) === qs;
};
le.isStrictMode = function (e) {
  return lt(e) === Xs;
};
le.isSuspense = function (e) {
  return lt(e) === eu;
};
le.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ys ||
    e === Zs ||
    e === qs ||
    e === Xs ||
    e === eu ||
    e === LO ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ru ||
        e.$$typeof === tu ||
        e.$$typeof === Ks ||
        e.$$typeof === Qs ||
        e.$$typeof === Js ||
        e.$$typeof === AO ||
        e.$$typeof === VO ||
        e.$$typeof === HO ||
        e.$$typeof === FO))
  );
};
le.typeOf = lt;
I1.exports = le;
var z1 = I1.exports,
  BO = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  WO = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  D1 = {};
D1[z1.ForwardRef] = BO;
D1[z1.Memo] = WO;
var UO = !0;
function GO(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var YO = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || UO === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  T1 = function (t, r, n) {
    YO(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function XO(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var qO = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  KO = /[A-Z]|^ms/g,
  QO = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  M1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Vg = function (t) {
    return t != null && typeof t != "boolean";
  },
  qu = RO(function (e) {
    return M1(e) ? e : e.replace(KO, "-$&").toLowerCase();
  }),
  Hg = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(QO, function (n, o, i) {
            return (Ct = { name: o, styles: i, next: Ct }), o;
          });
    }
    return qO[t] !== 1 && !M1(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function Pi(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Ct = { name: r.name, styles: r.styles, next: Ct }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Ct = { name: n.name, styles: n.styles, next: Ct }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return ZO(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ct,
          l = r(e);
        return (Ct = i), Pi(e, t, l);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function ZO(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += Pi(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var l = r[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (n += i + "{" + t[l] + "}")
          : Vg(l) && (n += qu(i) + ":" + Hg(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var a = 0; a < l.length; a++)
          Vg(l[a]) && (n += qu(i) + ":" + Hg(i, l[a]) + ";");
      else {
        var s = Pi(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            n += qu(i) + ":" + s + ";";
            break;
          }
          default:
            n += i + "{" + s + "}";
        }
      }
    }
  return n;
}
var Bg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ct,
  j1 = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Ct = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += Pi(n, r, l)))
      : (i += l[0]);
    for (var a = 1; a < t.length; a++) (i += Pi(n, r, t[a])), o && (i += l[a]);
    Bg.lastIndex = 0;
    for (var s = "", u; (u = Bg.exec(i)) !== null; ) s += "-" + u[1];
    var c = XO(i) + s;
    return { name: c, styles: i, next: Ct };
  },
  L1 = g.exports.createContext(
    typeof HTMLElement < "u" ? R1({ key: "css" }) : null
  );
L1.Provider;
var JO = function (t) {
    return g.exports.forwardRef(function (r, n) {
      var o = g.exports.useContext(L1);
      return t(r, o, n);
    });
  },
  eC = g.exports.createContext({});
li["useInsertionEffect"] && li["useInsertionEffect"];
var Wg = li["useInsertionEffect"]
    ? li["useInsertionEffect"]
    : g.exports.useLayoutEffect,
  Hd = JO(function (e, t) {
    var r = e.styles,
      n = j1([r], void 0, g.exports.useContext(eC)),
      o = g.exports.useRef();
    return (
      Wg(
        function () {
          var i = t.key + "-global",
            l = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            s = document.querySelector(
              'style[data-emotion="' + i + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (l.before = t.sheet.tags[0]),
            s !== null &&
              ((a = !0), s.setAttribute("data-emotion", i), l.hydrate([s])),
            (o.current = [l, a]),
            function () {
              l.flush();
            }
          );
        },
        [t]
      ),
      Wg(
        function () {
          var i = o.current,
            l = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && T1(t, n.next, !0), l.tags.length)) {
            var s = l.tags[l.tags.length - 1].nextElementSibling;
            (l.before = s), l.flush();
          }
          t.insert("", n, l, !1);
        },
        [t, n.name]
      ),
      null
    );
  }),
  tC = Object.defineProperty,
  rC = Object.defineProperties,
  nC = Object.getOwnPropertyDescriptors,
  Ug = Object.getOwnPropertySymbols,
  oC = Object.prototype.hasOwnProperty,
  iC = Object.prototype.propertyIsEnumerable,
  Gg = (e, t, r) =>
    t in e
      ? tC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  lC = (e, t) => {
    for (var r in t || (t = {})) oC.call(t, r) && Gg(e, r, t[r]);
    if (Ug) for (var r of Ug(t)) iC.call(t, r) && Gg(e, r, t[r]);
    return e;
  },
  aC = (e, t) => rC(e, nC(t));
function sC({ theme: e }) {
  return E.createElement(Hd, {
    styles: {
      "*, *::before, *::after": { boxSizing: "border-box" },
      body: aC(lC({}, e.fn.fontStyles()), {
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        lineHeight: e.lineHeight,
        fontSize: e.fontSizes.md,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }),
    },
  });
}
function cl(e, t, r) {
  Object.keys(t).forEach((n) => {
    e[`--mantine-${r}-${n}`] = typeof t[n] == "number" ? `${t[n]}px` : t[n];
  });
}
function uC({ theme: e }) {
  const t = {
    "--mantine-color-white": e.white,
    "--mantine-color-black": e.black,
    "--mantine-transition-timing-function": e.transitionTimingFunction,
    "--mantine-line-height": `${e.lineHeight}`,
    "--mantine-font-family": e.fontFamily,
    "--mantine-font-family-monospace": e.fontFamilyMonospace,
    "--mantine-font-family-headings": e.headings.fontFamily,
    "--mantine-heading-font-weight": `${e.headings.fontWeight}`,
  };
  cl(t, e.shadows, "shadow"),
    cl(t, e.fontSizes, "font-size"),
    cl(t, e.radius, "radius"),
    cl(t, e.spacing, "spacing"),
    Object.keys(e.colors).forEach((n) => {
      e.colors[n].forEach((o, i) => {
        t[`--mantine-color-${n}-${i}`] = o;
      });
    });
  const r = e.headings.sizes;
  return (
    Object.keys(r).forEach((n) => {
      (t[`--mantine-${n}-font-size`] = `${r[n].fontSize}px`),
        (t[`--mantine-${n}-line-height`] = `${r[n].lineHeight}`);
    }),
    E.createElement(Hd, { styles: { ":root": t } })
  );
}
var cC = Object.defineProperty,
  fC = Object.defineProperties,
  dC = Object.getOwnPropertyDescriptors,
  Yg = Object.getOwnPropertySymbols,
  pC = Object.prototype.hasOwnProperty,
  gC = Object.prototype.propertyIsEnumerable,
  Xg = (e, t, r) =>
    t in e
      ? cC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Lr = (e, t) => {
    for (var r in t || (t = {})) pC.call(t, r) && Xg(e, r, t[r]);
    if (Yg) for (var r of Yg(t)) gC.call(t, r) && Xg(e, r, t[r]);
    return e;
  },
  qg = (e, t) => fC(e, dC(t));
function mC(e, t) {
  return t
    ? Object.keys(e).reduce((r, n) => {
        if (n === "headings" && t.headings) {
          const o = t.headings.sizes
            ? Object.keys(e.headings.sizes).reduce(
                (i, l) => (
                  (i[l] = Lr(Lr({}, e.headings.sizes[l]), t.headings.sizes[l])),
                  i
                ),
                {}
              )
            : e.headings.sizes;
          return qg(Lr({}, r), {
            headings: qg(Lr(Lr({}, e.headings), t.headings), { sizes: o }),
          });
        }
        return (
          (r[n] =
            typeof t[n] == "object"
              ? Lr(Lr({}, e[n]), t[n])
              : typeof t[n] == "number" || typeof t[n] == "boolean"
              ? t[n]
              : t[n] || e[n]),
          r
        );
      }, {})
    : e;
}
function vC(e, t) {
  return b1(mC(e, t));
}
function hC(e) {
  return Object.keys(e).reduce(
    (t, r) => (e[r] !== void 0 && (t[r] = e[r]), t),
    {}
  );
}
const yC = {
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
  },
  body: { margin: 0 },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block",
  },
  h1: { fontSize: "2em" },
  hr: { boxSizing: "content-box", height: 0, overflow: "visible" },
  pre: { fontFamily: "monospace, monospace", fontSize: "1em" },
  a: { background: "transparent", textDecorationSkip: "objects" },
  "a:active, a:hover": { outlineWidth: 0 },
  "abbr[title]": { borderBottom: "none", textDecoration: "underline" },
  "b, strong": { fontWeight: "bolder" },
  "code, kbp, samp": { fontFamily: "monospace, monospace", fontSize: "1em" },
  dfn: { fontStyle: "italic" },
  mark: { backgroundColor: "#ff0", color: "#000" },
  small: { fontSize: "80%" },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  sup: { top: "-0.5em" },
  sub: { bottom: "-0.25em" },
  "audio, video": { display: "inline-block" },
  "audio:not([controls])": { display: "none", height: 0 },
  img: { borderStyle: "none", verticalAlign: "middle" },
  "svg:not(:root)": { overflow: "hidden" },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0,
  },
  "button, input": { overflow: "visible" },
  "button, select": { textTransform: "none" },
  "button, [type=reset], [type=submit]": { WebkitAppearance: "button" },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":
    { borderStyle: "none", padding: 0 },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":
    { outline: "1px dotted ButtonText" },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal",
  },
  progress: { display: "inline-block", verticalAlign: "baseline" },
  textarea: { overflow: "auto" },
  "[type=checkbox], [type=radio]": { boxSizing: "border-box", padding: 0 },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":
    { height: "auto" },
  "[type=search]": { appearance: "none" },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":
    { appearance: "none" },
  "::-webkit-file-upload-button": { appearance: "button", font: "inherit" },
  "details, menu": { display: "block" },
  summary: { display: "list-item" },
  canvas: { display: "inline-block" },
  template: { display: "none" },
  "[hidden]": { display: "none" },
};
function wC() {
  return E.createElement(Hd, { styles: yC });
}
var _C = Object.defineProperty,
  Kg = Object.getOwnPropertySymbols,
  SC = Object.prototype.hasOwnProperty,
  bC = Object.prototype.propertyIsEnumerable,
  Qg = (e, t, r) =>
    t in e
      ? _C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ni = (e, t) => {
    for (var r in t || (t = {})) SC.call(t, r) && Qg(e, r, t[r]);
    if (Kg) for (var r of Kg(t)) bC.call(t, r) && Qg(e, r, t[r]);
    return e;
  };
const ga = g.exports.createContext({ theme: Td });
function at() {
  var e;
  return ((e = g.exports.useContext(ga)) == null ? void 0 : e.theme) || Td;
}
function xC(e) {
  const t = at(),
    r = (n) => {
      var o, i;
      return {
        styles: ((o = t.components[n]) == null ? void 0 : o.styles) || {},
        classNames:
          ((i = t.components[n]) == null ? void 0 : i.classNames) || {},
      };
    };
  return Array.isArray(e) ? e.map(r) : [r(e)];
}
function PC() {
  var e;
  return (e = g.exports.useContext(ga)) == null ? void 0 : e.emotionCache;
}
function ee(e, t, r) {
  var n;
  const i = (n = at().components[e]) == null ? void 0 : n.defaultProps;
  return ni(ni(ni({}, t), i), hC(r));
}
function F1({
  theme: e,
  emotionCache: t,
  withNormalizeCSS: r = !1,
  withGlobalStyles: n = !1,
  withCSSVariables: o = !1,
  inherit: i = !1,
  children: l,
}) {
  const a = g.exports.useContext(ga),
    s = vC(Td, i ? ni(ni({}, a.theme), e) : e);
  return U(ga.Provider, {
    value: { theme: s, emotionCache: t },
    children: [
      r && S(wC, {}),
      n && S(sC, { theme: s }),
      o && S(uC, { theme: s }),
      l,
    ],
  });
}
F1.displayName = "@mantine/core/MantineProvider";
const A1 = g.exports.createContext({
  classNames: {},
  styles: {},
  unstyled: !1,
});
function V1({
  children: e,
  classNames: t,
  unstyled: r,
  styles: n,
  staticSelector: o,
}) {
  return S(A1.Provider, {
    value: { classNames: t, styles: n, unstyled: r, staticSelector: o },
    children: e,
  });
}
function dn() {
  return g.exports.useContext(A1);
}
const $C = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function io(e) {
  return $C[e];
}
var Zg = Object.getOwnPropertySymbols,
  OC = Object.prototype.hasOwnProperty,
  CC = Object.prototype.propertyIsEnumerable,
  EC = (e, t) => {
    var r = {};
    for (var n in e) OC.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Zg)
      for (var n of Zg(e)) t.indexOf(n) < 0 && CC.call(e, n) && (r[n] = e[n]);
    return r;
  };
function nu(e) {
  const t = e,
    {
      m: r,
      mx: n,
      my: o,
      mt: i,
      mb: l,
      ml: a,
      mr: s,
      p: u,
      px: c,
      py: f,
      pt: d,
      pb: p,
      pl: y,
      pr: w,
    } = t,
    v = EC(t, [
      "m",
      "mx",
      "my",
      "mt",
      "mb",
      "ml",
      "mr",
      "p",
      "px",
      "py",
      "pt",
      "pb",
      "pl",
      "pr",
    ]),
    m = {
      m: r,
      mx: n,
      my: o,
      mt: i,
      mb: l,
      ml: a,
      mr: s,
      p: u,
      px: c,
      py: f,
      pt: d,
      pb: p,
      pl: y,
      pr: w,
    };
  return (
    Object.keys(m).forEach((h) => {
      m[h] === void 0 && delete m[h];
    }),
    { systemStyles: m, rest: v }
  );
}
function kC(e, t) {
  const r = g.exports.useRef();
  return (
    (!r.current ||
      t.length !== r.current.prevDeps.length ||
      r.current.prevDeps.map((n, o) => n === t[o]).indexOf(!1) >= 0) &&
      (r.current = { v: e(), prevDeps: [...t] }),
    r.current.v
  );
}
const RC = R1({ key: "mantine", prepend: !0 });
function IC() {
  return PC() || RC;
}
var NC = Object.defineProperty,
  Jg = Object.getOwnPropertySymbols,
  zC = Object.prototype.hasOwnProperty,
  DC = Object.prototype.propertyIsEnumerable,
  em = (e, t, r) =>
    t in e
      ? NC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  TC = (e, t) => {
    for (var r in t || (t = {})) zC.call(t, r) && em(e, r, t[r]);
    if (Jg) for (var r of Jg(t)) DC.call(t, r) && em(e, r, t[r]);
    return e;
  };
const Ku = "ref";
function MC(e) {
  let t;
  if (e.length !== 1) return { args: e, ref: t };
  const [r] = e;
  if (!(r instanceof Object)) return { args: e, ref: t };
  if (!(Ku in r)) return { args: e, ref: t };
  t = r[Ku];
  const n = TC({}, r);
  return delete n[Ku], { args: [n], ref: t };
}
const { cssFactory: jC } = (() => {
  function e(r, n, o) {
    const i = [],
      l = GO(r, i, o);
    return i.length < 2 ? o : l + n(i);
  }
  function t(r) {
    const { cache: n } = r,
      o = (...l) => {
        const { ref: a, args: s } = MC(l),
          u = j1(s, n.registered);
        return T1(n, u, !1), `${n.key}-${u.name}${a === void 0 ? "" : ` ${a}`}`;
      };
    return { css: o, cx: (...l) => e(n.registered, o, y1(l)) };
  }
  return { cssFactory: t };
})();
function H1() {
  const e = IC();
  return kC(() => jC({ cache: e }), [e]);
}
function LC({ cx: e, classes: t, context: r, classNames: n, name: o }) {
  const i = r.reduce(
    (l, a) => (
      Object.keys(a.classNames).forEach((s) => {
        typeof l[s] != "string"
          ? (l[s] = `${a.classNames[s]}`)
          : (l[s] = `${l[s]} ${a.classNames[s]}`);
      }),
      l
    ),
    {}
  );
  return Object.keys(t).reduce(
    (l, a) => (
      (l[a] = e(
        t[a],
        i[a],
        n != null && n[a],
        Array.isArray(o)
          ? o
              .filter(Boolean)
              .map((s) => `mantine-${s}-${a}`)
              .join(" ")
          : o
          ? `mantine-${o}-${a}`
          : null
      )),
      l
    ),
    {}
  );
}
var FC = Object.defineProperty,
  tm = Object.getOwnPropertySymbols,
  AC = Object.prototype.hasOwnProperty,
  VC = Object.prototype.propertyIsEnumerable,
  rm = (e, t, r) =>
    t in e
      ? FC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Qu = (e, t) => {
    for (var r in t || (t = {})) AC.call(t, r) && rm(e, r, t[r]);
    if (tm) for (var r of tm(t)) VC.call(t, r) && rm(e, r, t[r]);
    return e;
  };
function HC(e) {
  return `__mantine-ref-${e || ""}`;
}
function nm(e, t, r) {
  const n = (o) => (typeof o == "function" ? o(t, r || {}) : o || {});
  return Array.isArray(e)
    ? e
        .map((o) => n(o.styles))
        .reduce(
          (o, i) => (
            Object.keys(i).forEach((l) => {
              o[l] ? (o[l] = Qu(Qu({}, o[l]), i[l])) : (o[l] = Qu({}, i[l]));
            }),
            o
          ),
          {}
        )
    : n(e);
}
function Q(e) {
  const t = typeof e == "function" ? e : () => e;
  function r(n, o) {
    const i = at(),
      l = xC(o?.name),
      { css: a, cx: s } = H1(),
      u = t(i, n, HC),
      c = nm(o?.styles, i, n),
      f = nm(l, i, n),
      d = Object.fromEntries(
        Object.keys(u).map((p) => {
          const y = s({ [a(u[p])]: !o?.unstyled }, a(f[p]), a(c[p]));
          return [p, y];
        })
      );
    return {
      classes: LC({
        cx: s,
        classes: d,
        context: l,
        classNames: o?.classNames,
        name: o?.name,
      }),
      cx: s,
      theme: i,
    };
  }
  return r;
}
var BC = Object.defineProperty,
  WC = Object.defineProperties,
  UC = Object.getOwnPropertyDescriptors,
  om = Object.getOwnPropertySymbols,
  GC = Object.prototype.hasOwnProperty,
  YC = Object.prototype.propertyIsEnumerable,
  im = (e, t, r) =>
    t in e
      ? BC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  No = (e, t) => {
    for (var r in t || (t = {})) GC.call(t, r) && im(e, r, t[r]);
    if (om) for (var r of om(t)) YC.call(t, r) && im(e, r, t[r]);
    return e;
  },
  zo = (e, t) => WC(e, UC(t));
const Do = {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(.9) translateY(10px)" },
    transitionProperty: "transform, opacity",
  },
  fl = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: zo(No({}, Do), { common: { transformOrigin: "center center" } }),
    "pop-bottom-left": zo(No({}, Do), {
      common: { transformOrigin: "bottom left" },
    }),
    "pop-bottom-right": zo(No({}, Do), {
      common: { transformOrigin: "bottom right" },
    }),
    "pop-top-left": zo(No({}, Do), { common: { transformOrigin: "top left" } }),
    "pop-top-right": zo(No({}, Do), {
      common: { transformOrigin: "top right" },
    }),
  },
  lm = ["mousedown", "touchstart"];
function XC(e, t, r) {
  const n = g.exports.useRef();
  return (
    g.exports.useEffect(() => {
      const o = (i) => {
        const { target: l } = i ?? {};
        if (Array.isArray(r)) {
          const a =
            l?.hasAttribute("data-ignore-outside-clicks") ||
            !document.body.contains(l);
          r.every((u) => !!u && !u.contains(l)) && !a && e();
        } else n.current && !n.current.contains(l) && e();
      };
      return (
        (t || lm).forEach((i) => document.addEventListener(i, o)),
        () => {
          (t || lm).forEach((i) => document.removeEventListener(i, o));
        }
      );
    }, [n, e, r]),
    n
  );
}
function qC(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function KC(e, t) {
  return typeof t == "boolean"
    ? t
    : typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(e).matches
    : !1;
}
function QC(
  e,
  t,
  { getInitialValueInEffect: r } = { getInitialValueInEffect: !0 }
) {
  const [n, o] = g.exports.useState(r ? !1 : KC(e, t)),
    i = g.exports.useRef();
  return (
    g.exports.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (i.current = window.matchMedia(e)),
          o(i.current.matches),
          qC(i.current, (l) => o(l.matches))
        );
    }, [e]),
    n
  );
}
function Zu(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
const B1 =
  typeof document < "u" ? g.exports.useLayoutEffect : g.exports.useEffect;
function kr(e, t) {
  const r = g.exports.useRef(!1);
  g.exports.useEffect(() => {
    r.current ? e() : (r.current = !0);
  }, t);
}
function W1({ opened: e, shouldReturnFocus: t = !0 }) {
  const r = g.exports.useRef(),
    n = () => {
      var o;
      r.current &&
        "focus" in r.current &&
        typeof r.current.focus == "function" &&
        ((o = r.current) == null || o.focus());
    };
  return (
    kr(() => {
      let o = -1;
      const i = (l) => {
        l.key === "Tab" && window.clearTimeout(o);
      };
      return (
        document.addEventListener("keydown", i),
        e
          ? (r.current = document.activeElement)
          : t && (o = window.setTimeout(n, 10)),
        () => {
          window.clearTimeout(o), document.removeEventListener("keydown", i);
        }
      );
    }, [e]),
    n
  );
}
const ZC = /input|select|textarea|button|object/,
  U1 = "a, input, select, textarea, button, object, [tabindex]";
function JC(e) {
  return e.style.display === "none";
}
function e2(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let r = e;
  for (; r && r !== document.body; ) {
    if (JC(r)) return !1;
    r = r.parentNode;
  }
  return !0;
}
function G1(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function ff(e) {
  const t = e.nodeName.toLowerCase(),
    r = !Number.isNaN(G1(e));
  return (
    ((ZC.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      r) &&
    e2(e)
  );
}
function Y1(e) {
  const t = G1(e);
  return (Number.isNaN(t) || t >= 0) && ff(e);
}
function t2(e) {
  return Array.from(e.querySelectorAll(U1)).filter(Y1);
}
function r2(e, t) {
  const r = t2(e);
  if (!r.length) {
    t.preventDefault();
    return;
  }
  if (
    !(
      r[t.shiftKey ? 0 : r.length - 1] === document.activeElement ||
      e === document.activeElement
    )
  )
    return;
  t.preventDefault();
  const i = r[t.shiftKey ? r.length - 1 : 0];
  i && i.focus();
}
function n2(e, t = "body > :not(script)") {
  const r = Array.from(document.querySelectorAll(t)).map((n) => {
    if (n.contains(e)) return;
    const o = n.getAttribute("aria-hidden");
    return (
      (o === null || o === "false") && n.setAttribute("aria-hidden", "true"),
      { node: n, ariaHidden: o }
    );
  });
  return () => {
    r.forEach((n) => {
      !n ||
        (n.ariaHidden === null
          ? n.node.removeAttribute("aria-hidden")
          : n.node.setAttribute("aria-hidden", n.ariaHidden));
    });
  };
}
function X1(e = !0) {
  const t = g.exports.useRef(),
    r = g.exports.useRef(null),
    n = g.exports.useCallback(
      (o) => {
        if (!!e)
          if ((r.current && r.current(), o)) {
            const i = (l) => {
              r.current = n2(l);
              let a = o.querySelector("[data-autofocus]");
              if (!a) {
                const s = Array.from(o.querySelectorAll(U1));
                (a = s.find(Y1) || s.find(ff) || null), !a && ff(o) && (a = o);
              }
              a && a.focus();
            };
            setTimeout(() => {
              o.ownerDocument && i(o);
            }),
              (t.current = o);
          } else t.current = null;
      },
      [e]
    );
  return (
    g.exports.useEffect(() => {
      if (!e) return;
      const o = (i) => {
        i.key === "Tab" && t.current && r2(t.current, i);
      };
      return (
        document.addEventListener("keydown", o),
        () => {
          document.removeEventListener("keydown", o);
        }
      );
    }, [e]),
    n
  );
}
const o2 = () => `mantine-${Math.random().toString(36).slice(2, 11)}`,
  i2 = E["useId".toString()] || (() => {});
function l2() {
  const [e, t] = g.exports.useState("");
  return (
    B1(() => {
      t(o2());
    }, []),
    e
  );
}
function a2() {
  const e = i2();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function lo(e) {
  return typeof e == "string" ? e : a2() || l2();
}
function am(e, t, r) {
  g.exports.useEffect(
    () => (
      window.addEventListener(e, t, r),
      () => window.removeEventListener(e, t, r)
    ),
    []
  );
}
function q1(e, t) {
  typeof e == "function"
    ? e(t)
    : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function s2(...e) {
  return (t) => {
    e.forEach((r) => q1(r, t));
  };
}
function pn(...e) {
  return g.exports.useCallback(s2(...e), e);
}
function Li({
  value: e,
  defaultValue: t,
  finalValue: r,
  onChange: n = () => {},
}) {
  const [o, i] = g.exports.useState(t !== void 0 ? t : r),
    l = (a) => {
      i(a), n?.(a);
    };
  return e !== void 0 ? [e, n, !0] : [o, l, !1];
}
function ir(e, t) {
  const r = t - e + 1;
  return Array.from({ length: r }, (n, o) => o + e);
}
const dl = "dots";
function u2({
  total: e,
  siblings: t = 1,
  boundaries: r = 1,
  page: n,
  initialPage: o = 1,
  onChange: i,
}) {
  const [l, a] = Li({ value: n, onChange: i, defaultValue: o, finalValue: o }),
    s = (y) => {
      y <= 0 ? a(1) : y > e ? a(e) : a(y);
    },
    u = () => s(l + 1),
    c = () => s(l - 1),
    f = () => s(1),
    d = () => s(e);
  return {
    range: g.exports.useMemo(() => {
      if (t * 2 + 3 + r * 2 >= e) return ir(1, e);
      const w = Math.max(l - t, r),
        v = Math.min(l + t, e - r),
        m = w > r + 2,
        h = v < e - (r + 1);
      if (!m && h) {
        const _ = t * 2 + r + 2;
        return [...ir(1, _), dl, ...ir(e - (r - 1), e)];
      }
      if (m && !h) {
        const _ = r + 1 + 2 * t;
        return [...ir(1, r), dl, ...ir(e - _, e)];
      }
      return [...ir(1, r), dl, ...ir(w, v), dl, ...ir(e - r + 1, e)];
    }, [e, t, l]),
    active: l,
    setPage: s,
    next: u,
    previous: c,
    first: f,
    last: d,
  };
}
function K1(e, t) {
  return QC("(prefers-reduced-motion: reduce)", e, t);
}
const c2 = (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
  f2 = ({
    axis: e,
    target: t,
    parent: r,
    alignment: n,
    offset: o,
    isList: i,
  }) => {
    if (!t || (!r && typeof document > "u")) return 0;
    const l = !!r,
      s = (r || document.body).getBoundingClientRect(),
      u = t.getBoundingClientRect(),
      c = (f) => u[f] - s[f];
    if (e === "y") {
      const f = c("top");
      if (f === 0) return 0;
      if (n === "start") {
        const p = f - o;
        return p <= u.height * (i ? 0 : 1) || !i ? p : 0;
      }
      const d = l ? s.height : window.innerHeight;
      if (n === "end") {
        const p = f + o - d + u.height;
        return p >= -u.height * (i ? 0 : 1) || !i ? p : 0;
      }
      return n === "center" ? f - d / 2 + u.height / 2 : 0;
    }
    if (e === "x") {
      const f = c("left");
      if (f === 0) return 0;
      if (n === "start") {
        const p = f - o;
        return p <= u.width || !i ? p : 0;
      }
      const d = l ? s.width : window.innerWidth;
      if (n === "end") {
        const p = f + o - d + u.width;
        return p >= -u.width || !i ? p : 0;
      }
      return n === "center" ? f - d / 2 + u.width / 2 : 0;
    }
    return 0;
  },
  d2 = ({ axis: e, parent: t }) => {
    if (!t && typeof document > "u") return 0;
    const r = e === "y" ? "scrollTop" : "scrollLeft";
    if (t) return t[r];
    const { body: n, documentElement: o } = document;
    return n[r] + o[r];
  },
  p2 = ({ axis: e, parent: t, distance: r }) => {
    if (!t && typeof document > "u") return;
    const n = e === "y" ? "scrollTop" : "scrollLeft";
    if (t) t[n] = r;
    else {
      const { body: o, documentElement: i } = document;
      (o[n] = r), (i[n] = r);
    }
  };
function g2({
  duration: e = 1250,
  axis: t = "y",
  onScrollFinish: r,
  easing: n = c2,
  offset: o = 0,
  cancelable: i = !0,
  isList: l = !1,
} = {}) {
  const a = g.exports.useRef(0),
    s = g.exports.useRef(0),
    u = g.exports.useRef(!1),
    c = g.exports.useRef(null),
    f = g.exports.useRef(null),
    d = K1(),
    p = () => {
      a.current && cancelAnimationFrame(a.current);
    },
    y = g.exports.useCallback(
      ({ alignment: v = "start" } = {}) => {
        var m;
        (u.current = !1), a.current && p();
        const h = (m = d2({ parent: c.current, axis: t })) != null ? m : 0,
          _ =
            f2({
              parent: c.current,
              target: f.current,
              axis: t,
              alignment: v,
              offset: o,
              isList: l,
            }) - (c.current ? 0 : h);
        function b() {
          s.current === 0 && (s.current = performance.now());
          const x = performance.now() - s.current,
            P = d || e === 0 ? 1 : x / e,
            $ = h + _ * n(P);
          p2({ parent: c.current, axis: t, distance: $ }),
            !u.current && P < 1
              ? (a.current = requestAnimationFrame(b))
              : (typeof r == "function" && r(),
                (s.current = 0),
                (a.current = 0),
                p());
        }
        b();
      },
      [c.current]
    ),
    w = () => {
      i && (u.current = !0);
    };
  return (
    am("wheel", w, { passive: !0 }),
    am("touchmove", w, { passive: !0 }),
    g.exports.useEffect(() => p, []),
    { scrollableRef: c, targetRef: f, scrollIntoView: y, cancel: p }
  );
}
function m2() {
  if (typeof window > "u" || typeof document > "u") return 0;
  const e = parseInt(window.getComputedStyle(document.body).paddingRight, 10),
    t = window.innerWidth - document.documentElement.clientWidth;
  return e + t;
}
const v2 = ({ disableBodyPadding: e }) => {
  const t = e ? null : m2();
  return `body {
        --removed-scroll-width: ${t}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${t ? "padding-right: var(--removed-scroll-width) !important;" : ""}
        `;
};
function h2(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function y2(e) {
  (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
function w2() {
  const e = document.createElement("style");
  return (e.type = "text/css"), e.setAttribute("mantine-scroll-lock", ""), e;
}
function _2(e, t = { disableBodyPadding: !1 }) {
  const [r, n] = g.exports.useState(e || !1),
    o = g.exports.useRef(0),
    { disableBodyPadding: i } = t,
    l = g.exports.useRef(null),
    a = () => {
      o.current = window.scrollY;
      const u = v2({ disableBodyPadding: i }),
        c = w2();
      h2(c, u), y2(c), (l.current = c);
    },
    s = () => {
      !l?.current ||
        (l.current.parentNode.removeChild(l.current), (l.current = null));
    };
  return (
    g.exports.useEffect(() => (r ? a() : s(), s), [r]),
    g.exports.useEffect(() => {
      e !== void 0 && n(e);
    }, [e]),
    g.exports.useEffect(() => {
      e === void 0 &&
        typeof window < "u" &&
        window.document.body.style.overflow === "hidden" &&
        n(!0);
    }, [n]),
    [r, n]
  );
}
function S2() {
  const { userAgent: e } = window.navigator,
    t = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,
    r = /(Win32)|(Win64)|(Windows)|(WinCE)/i,
    n = /(iPhone)|(iPad)|(iPod)/i;
  return t.test(e)
    ? "macos"
    : n.test(e)
    ? "ios"
    : r.test(e)
    ? "windows"
    : /Android/i.test(e)
    ? "android"
    : /Linux/i.test(e)
    ? "linux"
    : "undetermined";
}
function b2() {
  return typeof window < "u" ? S2() : "undetermined";
}
function Al() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
const sm = {
    mt: "marginTop",
    mb: "marginBottom",
    ml: "marginLeft",
    mr: "marginRight",
    pt: "paddingTop",
    pb: "paddingBottom",
    pl: "paddingLeft",
    pr: "paddingRight",
  },
  x2 = ["-xs", "-sm", "-md", "-lg", "-xl"];
function Fr(e) {
  return typeof e == "string" || typeof e == "number";
}
function Ar(e, t) {
  return x2.includes(e)
    ? t.fn.size({ size: e.replace("-", ""), sizes: t.spacing }) * -1
    : t.fn.size({ size: e, sizes: t.spacing });
}
function um(e, t) {
  const r = {};
  if (Fr(e.p)) {
    const n = Ar(e.p, t);
    r.padding = n;
  }
  if (Fr(e.m)) {
    const n = Ar(e.m, t);
    r.margin = n;
  }
  if (Fr(e.py)) {
    const n = Ar(e.py, t);
    (r.paddingTop = n), (r.paddingBottom = n);
  }
  if (Fr(e.px)) {
    const n = Ar(e.px, t);
    (r.paddingLeft = n), (r.paddingRight = n);
  }
  if (Fr(e.my)) {
    const n = Ar(e.my, t);
    (r.marginTop = n), (r.marginBottom = n);
  }
  if (Fr(e.mx)) {
    const n = Ar(e.mx, t);
    (r.marginLeft = n), (r.marginRight = n);
  }
  return (
    Object.keys(sm).forEach((n) => {
      Fr(e[n]) &&
        (r[sm[n]] = t.fn.size({ size: Ar(e[n], t), sizes: t.spacing }));
    }),
    r
  );
}
function cm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function P2(e, t, r) {
  const n = at(),
    { css: o, cx: i } = H1();
  return Array.isArray(e)
    ? i(
        r,
        o(um(t, n)),
        e.map((l) => o(cm(l, n)))
      )
    : i(r, o(cm(e, n)), o(um(t, n)));
}
var $2 = Object.defineProperty,
  ma = Object.getOwnPropertySymbols,
  Q1 = Object.prototype.hasOwnProperty,
  Z1 = Object.prototype.propertyIsEnumerable,
  fm = (e, t, r) =>
    t in e
      ? $2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  O2 = (e, t) => {
    for (var r in t || (t = {})) Q1.call(t, r) && fm(e, r, t[r]);
    if (ma) for (var r of ma(t)) Z1.call(t, r) && fm(e, r, t[r]);
    return e;
  },
  C2 = (e, t) => {
    var r = {};
    for (var n in e) Q1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ma)
      for (var n of ma(e)) t.indexOf(n) < 0 && Z1.call(e, n) && (r[n] = e[n]);
    return r;
  };
const J1 = g.exports.forwardRef((e, t) => {
  var r = e,
    { className: n, component: o, style: i, sx: l } = r,
    a = C2(r, ["className", "component", "style", "sx"]);
  const { systemStyles: s, rest: u } = nu(a);
  return S(o || "div", {
    ...O2({ ref: t, className: P2(l, s, n), style: i }, u),
  });
});
J1.displayName = "@mantine/core/Box";
const q = J1;
var E2 = Object.defineProperty,
  k2 = Object.defineProperties,
  R2 = Object.getOwnPropertyDescriptors,
  dm = Object.getOwnPropertySymbols,
  I2 = Object.prototype.hasOwnProperty,
  N2 = Object.prototype.propertyIsEnumerable,
  pm = (e, t, r) =>
    t in e
      ? E2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  gm = (e, t) => {
    for (var r in t || (t = {})) I2.call(t, r) && pm(e, r, t[r]);
    if (dm) for (var r of dm(t)) N2.call(t, r) && pm(e, r, t[r]);
    return e;
  },
  z2 = (e, t) => k2(e, R2(t)),
  D2 = Q((e) => ({
    root: z2(gm(gm({}, e.fn.focusStyles()), e.fn.fontStyles()), {
      cursor: "pointer",
      border: 0,
      padding: 0,
      appearance: "none",
      fontSize: e.fontSizes.md,
      backgroundColor: "transparent",
      textAlign: "left",
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      textDecoration: "none",
      boxSizing: "border-box",
    }),
  })),
  T2 = D2,
  M2 = Object.defineProperty,
  va = Object.getOwnPropertySymbols,
  ew = Object.prototype.hasOwnProperty,
  tw = Object.prototype.propertyIsEnumerable,
  mm = (e, t, r) =>
    t in e
      ? M2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  j2 = (e, t) => {
    for (var r in t || (t = {})) ew.call(t, r) && mm(e, r, t[r]);
    if (va) for (var r of va(t)) tw.call(t, r) && mm(e, r, t[r]);
    return e;
  },
  L2 = (e, t) => {
    var r = {};
    for (var n in e) ew.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && va)
      for (var n of va(e)) t.indexOf(n) < 0 && tw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const rw = g.exports.forwardRef((e, t) => {
  const r = ee("UnstyledButton", {}, e),
    { className: n, component: o = "button", unstyled: i } = r,
    l = L2(r, ["className", "component", "unstyled"]),
    { classes: a, cx: s } = T2(null, { name: "UnstyledButton", unstyled: i });
  return S(q, {
    ...j2(
      {
        component: o,
        ref: t,
        className: s(a.root, n),
        type: o === "button" ? "button" : void 0,
      },
      l
    ),
  });
});
rw.displayName = "@mantine/core/UnstyledButton";
const ou = rw;
var F2 = Object.defineProperty,
  A2 = Object.defineProperties,
  V2 = Object.getOwnPropertyDescriptors,
  vm = Object.getOwnPropertySymbols,
  H2 = Object.prototype.hasOwnProperty,
  B2 = Object.prototype.propertyIsEnumerable,
  hm = (e, t, r) =>
    t in e
      ? F2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  nw = (e, t) => {
    for (var r in t || (t = {})) H2.call(t, r) && hm(e, r, t[r]);
    if (vm) for (var r of vm(t)) B2.call(t, r) && hm(e, r, t[r]);
    return e;
  },
  W2 = (e, t) => A2(e, V2(t));
const Wo = { xs: 18, sm: 22, md: 28, lg: 34, xl: 44 };
function U2({ variant: e, theme: t, color: r }) {
  if (e === "transparent")
    return {
      border: "1px solid transparent",
      color: t.fn.variant({ variant: "subtle", color: r }).color,
      backgroundColor: "transparent",
    };
  const n = t.fn.variant({ color: r, variant: e });
  return nw(
    {
      backgroundColor: n.background,
      color: n.color,
      border: `1px solid ${n.border}`,
    },
    t.fn.hover({ backgroundColor: n.hover })
  );
}
var G2 = Q((e, { color: t, size: r, radius: n, variant: o }) => ({
    root: W2(nw({}, U2({ variant: o, theme: e, color: t })), {
      position: "relative",
      height: e.fn.size({ size: r, sizes: Wo }),
      minHeight: e.fn.size({ size: r, sizes: Wo }),
      width: e.fn.size({ size: r, sizes: Wo }),
      minWidth: e.fn.size({ size: r, sizes: Wo }),
      borderRadius: e.fn.radius(n),
      padding: 0,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:active": e.activeStyles,
      "&[data-disabled]": {
        color: e.colors.gray[e.colorScheme === "dark" ? 6 : 4],
        cursor: "not-allowed",
        backgroundColor:
          o === "transparent"
            ? void 0
            : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
        borderColor:
          o === "transparent"
            ? void 0
            : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
        "&:active": { transform: "none" },
      },
      "&[data-loading]": {
        pointerEvents: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          backgroundColor:
            e.colorScheme === "dark"
              ? e.fn.rgba(e.colors.dark[7], 0.5)
              : "rgba(255, 255, 255, .5)",
          borderRadius: e.fn.radius(n),
          cursor: "not-allowed",
        },
      },
    }),
  })),
  Y2 = G2,
  X2 = Object.defineProperty,
  ha = Object.getOwnPropertySymbols,
  ow = Object.prototype.hasOwnProperty,
  iw = Object.prototype.propertyIsEnumerable,
  ym = (e, t, r) =>
    t in e
      ? X2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  q2 = (e, t) => {
    for (var r in t || (t = {})) ow.call(t, r) && ym(e, r, t[r]);
    if (ha) for (var r of ha(t)) iw.call(t, r) && ym(e, r, t[r]);
    return e;
  },
  K2 = (e, t) => {
    var r = {};
    for (var n in e) ow.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ha)
      for (var n of ha(e)) t.indexOf(n) < 0 && iw.call(e, n) && (r[n] = e[n]);
    return r;
  };
function Q2(e) {
  var t = e,
    { size: r, color: n } = t,
    o = K2(t, ["size", "color"]);
  return E.createElement(
    "svg",
    q2(
      {
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
        width: `${r}px`,
      },
      o
    ),
    E.createElement(
      "rect",
      { y: "10", width: "15", height: "120", rx: "6" },
      E.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      E.createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    ),
    E.createElement(
      "rect",
      { x: "30", y: "10", width: "15", height: "120", rx: "6" },
      E.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      E.createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    ),
    E.createElement(
      "rect",
      { x: "60", width: "15", height: "140", rx: "6" },
      E.createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      E.createElement("animate", {
        attributeName: "y",
        begin: "0s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    ),
    E.createElement(
      "rect",
      { x: "90", y: "10", width: "15", height: "120", rx: "6" },
      E.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      E.createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    ),
    E.createElement(
      "rect",
      { x: "120", y: "10", width: "15", height: "120", rx: "6" },
      E.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      E.createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    )
  );
}
var Z2 = Object.defineProperty,
  ya = Object.getOwnPropertySymbols,
  lw = Object.prototype.hasOwnProperty,
  aw = Object.prototype.propertyIsEnumerable,
  wm = (e, t, r) =>
    t in e
      ? Z2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  J2 = (e, t) => {
    for (var r in t || (t = {})) lw.call(t, r) && wm(e, r, t[r]);
    if (ya) for (var r of ya(t)) aw.call(t, r) && wm(e, r, t[r]);
    return e;
  },
  eE = (e, t) => {
    var r = {};
    for (var n in e) lw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ya)
      for (var n of ya(e)) t.indexOf(n) < 0 && aw.call(e, n) && (r[n] = e[n]);
    return r;
  };
function tE(e) {
  var t = e,
    { size: r, color: n } = t,
    o = eE(t, ["size", "color"]);
  return E.createElement(
    "svg",
    J2(
      {
        width: `${r}px`,
        height: `${r}px`,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: n,
      },
      o
    ),
    E.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      E.createElement(
        "g",
        { transform: "translate(2.5 2.5)", strokeWidth: "5" },
        E.createElement("circle", {
          strokeOpacity: ".5",
          cx: "16",
          cy: "16",
          r: "16",
        }),
        E.createElement(
          "path",
          { d: "M32 16c0-9.94-8.06-16-16-16" },
          E.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 16 16",
            to: "360 16 16",
            dur: "1s",
            repeatCount: "indefinite",
          })
        )
      )
    )
  );
}
var rE = Object.defineProperty,
  wa = Object.getOwnPropertySymbols,
  sw = Object.prototype.hasOwnProperty,
  uw = Object.prototype.propertyIsEnumerable,
  _m = (e, t, r) =>
    t in e
      ? rE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  nE = (e, t) => {
    for (var r in t || (t = {})) sw.call(t, r) && _m(e, r, t[r]);
    if (wa) for (var r of wa(t)) uw.call(t, r) && _m(e, r, t[r]);
    return e;
  },
  oE = (e, t) => {
    var r = {};
    for (var n in e) sw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && wa)
      for (var n of wa(e)) t.indexOf(n) < 0 && uw.call(e, n) && (r[n] = e[n]);
    return r;
  };
function iE(e) {
  var t = e,
    { size: r, color: n } = t,
    o = oE(t, ["size", "color"]);
  return E.createElement(
    "svg",
    nE(
      {
        width: `${r}px`,
        height: `${r / 4}px`,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
      },
      o
    ),
    E.createElement(
      "circle",
      { cx: "15", cy: "15", r: "15" },
      E.createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      E.createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    ),
    E.createElement(
      "circle",
      { cx: "60", cy: "15", r: "9", fillOpacity: "0.3" },
      E.createElement("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      E.createElement("animate", {
        attributeName: "fill-opacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    ),
    E.createElement(
      "circle",
      { cx: "105", cy: "15", r: "15" },
      E.createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      E.createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite",
      })
    )
  );
}
var lE = Object.defineProperty,
  _a = Object.getOwnPropertySymbols,
  cw = Object.prototype.hasOwnProperty,
  fw = Object.prototype.propertyIsEnumerable,
  Sm = (e, t, r) =>
    t in e
      ? lE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  aE = (e, t) => {
    for (var r in t || (t = {})) cw.call(t, r) && Sm(e, r, t[r]);
    if (_a) for (var r of _a(t)) fw.call(t, r) && Sm(e, r, t[r]);
    return e;
  },
  sE = (e, t) => {
    var r = {};
    for (var n in e) cw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && _a)
      for (var n of _a(e)) t.indexOf(n) < 0 && fw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Ju = { bars: Q2, oval: tE, dots: iE },
  uE = { xs: 18, sm: 22, md: 36, lg: 44, xl: 58 },
  cE = { size: "md" };
function Bd(e) {
  const t = ee("Loader", cE, e),
    { size: r, color: n, variant: o } = t,
    i = sE(t, ["size", "color", "variant"]),
    l = at(),
    a = o in Ju ? o : l.loader;
  return E.createElement(
    q,
    aE(
      {
        role: "presentation",
        component: Ju[a] || Ju.bars,
        size: l.fn.size({ size: r, sizes: uE }),
        color: l.fn.variant({
          variant: "filled",
          primaryFallback: !1,
          color: n || l.primaryColor,
        }).background,
      },
      i
    )
  );
}
Bd.displayName = "@mantine/core/Loader";
var fE = Object.defineProperty,
  Sa = Object.getOwnPropertySymbols,
  dw = Object.prototype.hasOwnProperty,
  pw = Object.prototype.propertyIsEnumerable,
  bm = (e, t, r) =>
    t in e
      ? fE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  xm = (e, t) => {
    for (var r in t || (t = {})) dw.call(t, r) && bm(e, r, t[r]);
    if (Sa) for (var r of Sa(t)) pw.call(t, r) && bm(e, r, t[r]);
    return e;
  },
  dE = (e, t) => {
    var r = {};
    for (var n in e) dw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Sa)
      for (var n of Sa(e)) t.indexOf(n) < 0 && pw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const pE = { color: "gray", size: "md", variant: "subtle", loading: !1 },
  gw = g.exports.forwardRef((e, t) => {
    const r = ee("ActionIcon", pE, e),
      {
        className: n,
        color: o,
        children: i,
        radius: l,
        size: a,
        variant: s,
        disabled: u,
        loaderProps: c,
        loading: f,
        unstyled: d,
      } = r,
      p = dE(r, [
        "className",
        "color",
        "children",
        "radius",
        "size",
        "variant",
        "disabled",
        "loaderProps",
        "loading",
        "unstyled",
      ]),
      {
        classes: y,
        cx: w,
        theme: v,
      } = Y2(
        { size: a, radius: l, color: o, variant: s },
        { name: "ActionIcon", unstyled: d }
      ),
      m = v.fn.variant({ color: o, variant: "light" }),
      h = S(Bd, {
        ...xm(
          { color: m.color, size: v.fn.size({ size: a, sizes: Wo }) - 12 },
          c
        ),
      });
    return S(ou, {
      ...xm(
        {
          className: w(y.root, n),
          ref: t,
          disabled: u || f,
          "data-disabled": u || void 0,
          "data-loading": f || void 0,
          unstyled: d,
        },
        p
      ),
      children: f ? h : i,
    });
  });
gw.displayName = "@mantine/core/ActionIcon";
const $t = gw;
function mw(e) {
  const { children: t, target: r, className: n } = ee("Portal", {}, e),
    o = at(),
    [i, l] = g.exports.useState(!1),
    a = g.exports.useRef();
  return (
    B1(
      () => (
        l(!0),
        (a.current = r
          ? typeof r == "string"
            ? document.querySelector(r)
            : r
          : document.createElement("div")),
        r || document.body.appendChild(a.current),
        () => {
          !r && document.body.removeChild(a.current);
        }
      ),
      [r]
    ),
    i
      ? Ei.exports.createPortal(
          S("div", { className: n, dir: o.dir, children: t }),
          a.current
        )
      : null
  );
}
mw.displayName = "@mantine/core/Portal";
var gE = Object.defineProperty,
  ba = Object.getOwnPropertySymbols,
  vw = Object.prototype.hasOwnProperty,
  hw = Object.prototype.propertyIsEnumerable,
  Pm = (e, t, r) =>
    t in e
      ? gE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  mE = (e, t) => {
    for (var r in t || (t = {})) vw.call(t, r) && Pm(e, r, t[r]);
    if (ba) for (var r of ba(t)) hw.call(t, r) && Pm(e, r, t[r]);
    return e;
  },
  vE = (e, t) => {
    var r = {};
    for (var n in e) vw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ba)
      for (var n of ba(e)) t.indexOf(n) < 0 && hw.call(e, n) && (r[n] = e[n]);
    return r;
  };
function Fi(e) {
  var t = e,
    { withinPortal: r = !0, children: n } = t,
    o = vE(t, ["withinPortal", "children"]);
  return r
    ? E.createElement(mw, mE({}, o), n)
    : E.createElement(E.Fragment, null, n);
}
Fi.displayName = "@mantine/core/OptionalPortal";
var hE = Object.defineProperty,
  $m = Object.getOwnPropertySymbols,
  yE = Object.prototype.hasOwnProperty,
  wE = Object.prototype.propertyIsEnumerable,
  Om = (e, t, r) =>
    t in e
      ? hE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  _E = (e, t) => {
    for (var r in t || (t = {})) yE.call(t, r) && Om(e, r, t[r]);
    if ($m) for (var r of $m(t)) wE.call(t, r) && Om(e, r, t[r]);
    return e;
  };
function yw(e) {
  return E.createElement(
    "svg",
    _E(
      {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    E.createElement("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
yw.displayName = "@mantine/core/CloseIcon";
var SE = Object.defineProperty,
  xa = Object.getOwnPropertySymbols,
  ww = Object.prototype.hasOwnProperty,
  _w = Object.prototype.propertyIsEnumerable,
  Cm = (e, t, r) =>
    t in e
      ? SE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  bE = (e, t) => {
    for (var r in t || (t = {})) ww.call(t, r) && Cm(e, r, t[r]);
    if (xa) for (var r of xa(t)) _w.call(t, r) && Cm(e, r, t[r]);
    return e;
  },
  xE = (e, t) => {
    var r = {};
    for (var n in e) ww.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && xa)
      for (var n of xa(e)) t.indexOf(n) < 0 && _w.call(e, n) && (r[n] = e[n]);
    return r;
  };
const PE = { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 },
  $E = { size: "md" },
  iu = g.exports.forwardRef((e, t) => {
    const r = ee("CloseButton", $E, e),
      { iconSize: n, size: o = "md" } = r,
      i = xE(r, ["iconSize", "size"]),
      l = at(),
      a = n || l.fn.size({ size: o, sizes: PE });
    return S($t, {
      ...bE({ size: o, ref: t }, i),
      children: S(yw, { width: a, height: a }),
    });
  });
iu.displayName = "@mantine/core/CloseButton";
var OE = Object.defineProperty,
  CE = Object.defineProperties,
  EE = Object.getOwnPropertyDescriptors,
  Em = Object.getOwnPropertySymbols,
  kE = Object.prototype.hasOwnProperty,
  RE = Object.prototype.propertyIsEnumerable,
  km = (e, t, r) =>
    t in e
      ? OE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  pl = (e, t) => {
    for (var r in t || (t = {})) kE.call(t, r) && km(e, r, t[r]);
    if (Em) for (var r of Em(t)) RE.call(t, r) && km(e, r, t[r]);
    return e;
  },
  IE = (e, t) => CE(e, EE(t));
function NE({ underline: e, strikethrough: t }) {
  const r = [];
  return (
    e && r.push("underline"),
    t && r.push("line-through"),
    r.length > 0 ? r.join(" ") : "none"
  );
}
function zE({ theme: e, color: t, variant: r }) {
  return t === "dimmed"
    ? e.colorScheme === "dark"
      ? e.colors.dark[2]
      : e.colors.gray[6]
    : typeof t == "string" && (t in e.colors || t.split(".")[0] in e.colors)
    ? e.fn.variant({ variant: "filled", color: t }).background
    : r === "link"
    ? e.colors[e.primaryColor][e.colorScheme === "dark" ? 4 : 7]
    : t || "inherit";
}
function DE(e) {
  return typeof e == "number"
    ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: e,
        WebkitBoxOrient: "vertical",
      }
    : null;
}
var TE = Q(
    (
      e,
      {
        color: t,
        variant: r,
        size: n,
        lineClamp: o,
        inline: i,
        inherit: l,
        underline: a,
        gradient: s,
        weight: u,
        transform: c,
        align: f,
        strikethrough: d,
        italic: p,
      }
    ) => {
      const y = e.fn.variant({ variant: "gradient", gradient: s });
      return {
        root: pl(
          IE(pl(pl(pl({}, e.fn.fontStyles()), e.fn.focusStyles()), DE(o)), {
            color: zE({ color: t, theme: e, variant: r }),
            fontFamily: l ? "inherit" : e.fontFamily,
            fontSize:
              l || n === void 0
                ? "inherit"
                : e.fn.size({ size: n, sizes: e.fontSizes }),
            lineHeight: l ? "inherit" : i ? 1 : e.lineHeight,
            textDecoration: NE({ underline: a, strikethrough: d }),
            WebkitTapHighlightColor: "transparent",
            fontWeight: l ? "inherit" : u,
            textTransform: c,
            textAlign: f,
            fontStyle: p ? "italic" : void 0,
          }),
          e.fn.hover(
            r === "link" && a === void 0
              ? { textDecoration: "underline" }
              : void 0
          )
        ),
        gradient: {
          backgroundImage: y.background,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      };
    }
  ),
  ME = TE,
  jE = Object.defineProperty,
  Pa = Object.getOwnPropertySymbols,
  Sw = Object.prototype.hasOwnProperty,
  bw = Object.prototype.propertyIsEnumerable,
  Rm = (e, t, r) =>
    t in e
      ? jE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  LE = (e, t) => {
    for (var r in t || (t = {})) Sw.call(t, r) && Rm(e, r, t[r]);
    if (Pa) for (var r of Pa(t)) bw.call(t, r) && Rm(e, r, t[r]);
    return e;
  },
  FE = (e, t) => {
    var r = {};
    for (var n in e) Sw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Pa)
      for (var n of Pa(e)) t.indexOf(n) < 0 && bw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const AE = { variant: "text" },
  xw = g.exports.forwardRef((e, t) => {
    const r = ee("Text", AE, e),
      {
        className: n,
        size: o,
        weight: i,
        transform: l,
        color: a,
        align: s,
        variant: u,
        lineClamp: c,
        gradient: f,
        inline: d,
        inherit: p,
        underline: y,
        strikethrough: w,
        italic: v,
        classNames: m,
        styles: h,
        unstyled: _,
        span: b,
      } = r,
      O = FE(r, [
        "className",
        "size",
        "weight",
        "transform",
        "color",
        "align",
        "variant",
        "lineClamp",
        "gradient",
        "inline",
        "inherit",
        "underline",
        "strikethrough",
        "italic",
        "classNames",
        "styles",
        "unstyled",
        "span",
      ]),
      { classes: x, cx: P } = ME(
        {
          variant: u,
          color: a,
          size: o,
          lineClamp: c,
          inline: d,
          inherit: p,
          underline: y,
          strikethrough: w,
          italic: v,
          weight: i,
          transform: l,
          align: s,
          gradient: f,
        },
        { unstyled: _, name: "Text" }
      );
    return S(q, {
      ...LE(
        {
          ref: t,
          className: P(x.root, { [x.gradient]: u === "gradient" }, n),
          component: b ? "span" : "div",
        },
        O
      ),
    });
  });
xw.displayName = "@mantine/core/Text";
const mt = xw,
  gl = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 };
function ml(e, t) {
  const r = e.fn.variant({ variant: "outline", color: t }).border;
  return typeof t == "string" && (t in e.colors || t.split(".")[0] in e.colors)
    ? r
    : t === void 0
    ? e.colorScheme === "dark"
      ? e.colors.dark[4]
      : e.colors.gray[4]
    : t;
}
var VE = Q((e, { size: t, variant: r, color: n }) => ({
    root: {},
    withLabel: { borderTop: "0 !important" },
    left: { "&::before": { display: "none" } },
    right: { "&::after": { display: "none" } },
    label: {
      display: "flex",
      alignItems: "center",
      "&::before": {
        content: '""',
        flex: 1,
        height: 1,
        borderTop: `${e.fn.size({ size: t, sizes: gl })}px ${r} ${ml(e, n)}`,
        marginRight: e.spacing.xs,
      },
      "&::after": {
        content: '""',
        flex: 1,
        borderTop: `${e.fn.size({ size: t, sizes: gl })}px ${r} ${ml(e, n)}`,
        marginLeft: e.spacing.xs,
      },
    },
    labelDefaultStyles: {
      color:
        n === "dark"
          ? e.colors.dark[1]
          : e.fn.themeColor(
              n,
              e.colorScheme === "dark" ? 5 : e.fn.primaryShade(),
              !1
            ),
    },
    horizontal: {
      border: 0,
      borderTopWidth: e.fn.size({ size: t, sizes: gl }),
      borderTopColor: ml(e, n),
      borderTopStyle: r,
      margin: 0,
    },
    vertical: {
      border: 0,
      alignSelf: "stretch",
      height: "auto",
      borderLeftWidth: e.fn.size({ size: t, sizes: gl }),
      borderLeftColor: ml(e, n),
      borderLeftStyle: r,
    },
  })),
  HE = VE,
  BE = Object.defineProperty,
  WE = Object.defineProperties,
  UE = Object.getOwnPropertyDescriptors,
  $a = Object.getOwnPropertySymbols,
  Pw = Object.prototype.hasOwnProperty,
  $w = Object.prototype.propertyIsEnumerable,
  Im = (e, t, r) =>
    t in e
      ? BE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Nm = (e, t) => {
    for (var r in t || (t = {})) Pw.call(t, r) && Im(e, r, t[r]);
    if ($a) for (var r of $a(t)) $w.call(t, r) && Im(e, r, t[r]);
    return e;
  },
  GE = (e, t) => WE(e, UE(t)),
  YE = (e, t) => {
    var r = {};
    for (var n in e) Pw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && $a)
      for (var n of $a(e)) t.indexOf(n) < 0 && $w.call(e, n) && (r[n] = e[n]);
    return r;
  };
const XE = {
    orientation: "horizontal",
    size: "xs",
    labelPosition: "left",
    variant: "solid",
  },
  df = g.exports.forwardRef((e, t) => {
    const r = ee("Divider", XE, e),
      {
        className: n,
        color: o,
        orientation: i,
        size: l,
        label: a,
        labelPosition: s,
        labelProps: u,
        variant: c,
        styles: f,
        classNames: d,
        unstyled: p,
      } = r,
      y = YE(r, [
        "className",
        "color",
        "orientation",
        "size",
        "label",
        "labelPosition",
        "labelProps",
        "variant",
        "styles",
        "classNames",
        "unstyled",
      ]),
      { classes: w, cx: v } = HE(
        { color: o, size: l, variant: c },
        { classNames: d, styles: f, unstyled: p, name: "Divider" }
      ),
      m = i === "vertical",
      h = i === "horizontal",
      _ = !!a && h,
      b = !u?.color;
    return S(q, {
      ...Nm(
        {
          ref: t,
          className: v(
            w.root,
            { [w.vertical]: m, [w.horizontal]: h, [w.withLabel]: _ },
            n
          ),
          role: "separator",
        },
        y
      ),
      children:
        _ &&
        S(mt, {
          ...GE(Nm({}, u), {
            size: u?.size || "xs",
            sx: { marginTop: 2 },
            className: v(w.label, w[s], { [w.labelDefaultStyles]: b }),
          }),
          children: a,
        }),
    });
  });
df.displayName = "@mantine/core/Divider";
var qE = Object.defineProperty,
  zm = Object.getOwnPropertySymbols,
  KE = Object.prototype.hasOwnProperty,
  QE = Object.prototype.propertyIsEnumerable,
  Dm = (e, t, r) =>
    t in e
      ? qE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ZE = (e, t) => {
    for (var r in t || (t = {})) KE.call(t, r) && Dm(e, r, t[r]);
    if (zm) for (var r of zm(t)) QE.call(t, r) && Dm(e, r, t[r]);
    return e;
  },
  JE = Q((e, { size: t }) => ({
    item: {
      boxSizing: "border-box",
      textAlign: "left",
      width: "100%",
      padding: `${e.fn.size({ size: t, sizes: e.spacing }) / 1.5}px ${e.fn.size(
        { size: t, sizes: e.spacing }
      )}px`,
      cursor: "pointer",
      fontSize: e.fn.size({ size: t, sizes: e.fontSizes }),
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      borderRadius: e.radius.sm,
      "&[data-hovered]": {
        backgroundColor:
          e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[1],
      },
      "&[data-selected]": ZE(
        {
          backgroundColor: e.fn.variant({ variant: "filled" }).background,
          color: e.fn.variant({ variant: "filled" }).color,
        },
        e.fn.hover({
          backgroundColor: e.fn.variant({ variant: "filled" }).hover,
        })
      ),
      "&[data-disabled]": { cursor: "default", color: e.colors.dark[2] },
    },
    nothingFound: {
      boxSizing: "border-box",
      color: e.colors.gray[6],
      paddingTop: e.fn.size({ size: t, sizes: e.spacing }) / 2,
      paddingBottom: e.fn.size({ size: t, sizes: e.spacing }) / 2,
      textAlign: "center",
    },
    separator: {
      boxSizing: "border-box",
      textAlign: "left",
      width: "100%",
      padding: `${e.fn.size({ size: t, sizes: e.spacing }) / 1.5}px ${e.fn.size(
        { size: t, sizes: e.spacing }
      )}px`,
    },
    separatorLabel: {
      color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
    },
  })),
  ek = JE,
  tk = Object.defineProperty,
  Tm = Object.getOwnPropertySymbols,
  rk = Object.prototype.hasOwnProperty,
  nk = Object.prototype.propertyIsEnumerable,
  Mm = (e, t, r) =>
    t in e
      ? tk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ok = (e, t) => {
    for (var r in t || (t = {})) rk.call(t, r) && Mm(e, r, t[r]);
    if (Tm) for (var r of Tm(t)) nk.call(t, r) && Mm(e, r, t[r]);
    return e;
  };
function Ow({
  data: e,
  hovered: t,
  classNames: r,
  styles: n,
  isItemSelected: o,
  uuid: i,
  __staticSelector: l,
  onItemHover: a,
  onItemSelect: s,
  itemsRefs: u,
  itemComponent: c,
  size: f,
  nothingFound: d,
  creatable: p,
  createLabel: y,
  unstyled: w,
}) {
  const { classes: v } = ek(
      { size: f },
      { classNames: r, styles: n, unstyled: w, name: l }
    ),
    m = [],
    h = [];
  let _ = null;
  const b = (x, P) => {
    const $ = typeof o == "function" ? o(x.value) : !1;
    return E.createElement(
      c,
      ok(
        {
          key: x.value,
          className: v.item,
          "data-disabled": x.disabled || void 0,
          "data-hovered": (!x.disabled && t === P) || void 0,
          "data-selected": (!x.disabled && $) || void 0,
          onMouseEnter: () => a(P),
          id: `${i}-${P}`,
          role: "option",
          "data-ignore-outside-clicks": !0,
          tabIndex: -1,
          "aria-selected": t === P,
          ref: (C) => {
            u && u.current && (u.current[x.value] = C);
          },
          onMouseDown: x.disabled
            ? null
            : (C) => {
                C.preventDefault(), s(x);
              },
          disabled: x.disabled,
        },
        x
      )
    );
  };
  let O = null;
  if (
    (e.forEach((x, P) => {
      x.creatable
        ? (_ = P)
        : x.group
        ? (O !== x.group &&
            ((O = x.group),
            h.push(
              E.createElement(
                "div",
                { className: v.separator, key: `__mantine-divider-${P}` },
                E.createElement(df, {
                  classNames: { label: v.separatorLabel },
                  label: x.group,
                })
              )
            )),
          h.push(b(x, P)))
        : m.push(b(x, P));
    }),
    p)
  ) {
    const x = e[_];
    m.push(
      E.createElement(
        "div",
        {
          key: Al(),
          className: v.item,
          "data-hovered": t === _ || void 0,
          onMouseEnter: () => a(_),
          onMouseDown: (P) => {
            P.preventDefault(), s(x);
          },
          tabIndex: -1,
          ref: (P) => {
            u && u.current && (u.current[x.value] = P);
          },
        },
        y
      )
    );
  }
  return (
    h.length > 0 &&
      m.length > 0 &&
      m.unshift(
        E.createElement(
          "div",
          { className: v.separator, key: "empty-group-separator" },
          E.createElement(df, null)
        )
      ),
    h.length > 0 || m.length > 0
      ? E.createElement(E.Fragment, null, h, m)
      : E.createElement(
          mt,
          { size: f, unstyled: w, className: v.nothingFound },
          d
        )
  );
}
Ow.displayName = "@mantine/core/SelectItems";
var ik = Object.defineProperty,
  Oa = Object.getOwnPropertySymbols,
  Cw = Object.prototype.hasOwnProperty,
  Ew = Object.prototype.propertyIsEnumerable,
  jm = (e, t, r) =>
    t in e
      ? ik(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  lk = (e, t) => {
    for (var r in t || (t = {})) Cw.call(t, r) && jm(e, r, t[r]);
    if (Oa) for (var r of Oa(t)) Ew.call(t, r) && jm(e, r, t[r]);
    return e;
  },
  ak = (e, t) => {
    var r = {};
    for (var n in e) Cw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Oa)
      for (var n of Oa(e)) t.indexOf(n) < 0 && Ew.call(e, n) && (r[n] = e[n]);
    return r;
  };
const kw = g.exports.forwardRef((e, t) => {
  var r = e,
    { label: n, value: o } = r,
    i = ak(r, ["label", "value"]);
  return S("div", { ...lk({ ref: t }, i), children: n || o });
});
kw.displayName = "@mantine/core/DefaultItem";
function sk(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Rw(...e) {
  return (t) => e.forEach((r) => sk(r, t));
}
function gn(...e) {
  return g.exports.useCallback(Rw(...e), e);
}
const Iw = g.exports.forwardRef((e, t) => {
  const { children: r, ...n } = e,
    o = g.exports.Children.toArray(r),
    i = o.find(ck);
  if (i) {
    const l = i.props.children,
      a = o.map((s) =>
        s === i
          ? g.exports.Children.count(l) > 1
            ? g.exports.Children.only(null)
            : g.exports.isValidElement(l)
            ? l.props.children
            : null
          : s
      );
    return g.exports.createElement(
      pf,
      ge({}, n, { ref: t }),
      g.exports.isValidElement(l) ? g.exports.cloneElement(l, void 0, a) : null
    );
  }
  return g.exports.createElement(pf, ge({}, n, { ref: t }), r);
});
Iw.displayName = "Slot";
const pf = g.exports.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  return g.exports.isValidElement(r)
    ? g.exports.cloneElement(r, { ...fk(n, r.props), ref: Rw(t, r.ref) })
    : g.exports.Children.count(r) > 1
    ? g.exports.Children.only(null)
    : null;
});
pf.displayName = "SlotClone";
const uk = ({ children: e }) =>
  g.exports.createElement(g.exports.Fragment, null, e);
function ck(e) {
  return g.exports.isValidElement(e) && e.type === uk;
}
function fk(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? (r[n] = (...a) => {
          i?.(...a), o?.(...a);
        })
      : n === "style"
      ? (r[n] = { ...o, ...i })
      : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
const dk = [
    "a",
    "button",
    "div",
    "h2",
    "h3",
    "img",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ai = dk.reduce((e, t) => {
    const r = g.exports.forwardRef((n, o) => {
      const { asChild: i, ...l } = n,
        a = i ? Iw : t;
      return (
        g.exports.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        g.exports.createElement(a, ge({}, l, { ref: o }))
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {}),
  gf = Boolean(globalThis?.document) ? g.exports.useLayoutEffect : () => {};
function pk(e, t) {
  return g.exports.useReducer((r, n) => {
    const o = t[r][n];
    return o ?? r;
  }, e);
}
const Vi = (e) => {
  const { present: t, children: r } = e,
    n = gk(t),
    o =
      typeof r == "function"
        ? r({ present: n.isPresent })
        : g.exports.Children.only(r),
    i = gn(n.ref, o.ref);
  return typeof r == "function" || n.isPresent
    ? g.exports.cloneElement(o, { ref: i })
    : null;
};
Vi.displayName = "Presence";
function gk(e) {
  const [t, r] = g.exports.useState(),
    n = g.exports.useRef({}),
    o = g.exports.useRef(e),
    i = g.exports.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [a, s] = pk(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    g.exports.useEffect(() => {
      const u = vl(n.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    gf(() => {
      const u = n.current,
        c = o.current;
      if (c !== e) {
        const d = i.current,
          p = vl(u);
        e
          ? s("MOUNT")
          : p === "none" || u?.display === "none"
          ? s("UNMOUNT")
          : s(c && d !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, s]),
    gf(() => {
      if (t) {
        const u = (f) => {
            const p = vl(n.current).includes(f.animationName);
            f.target === t &&
              p &&
              Ei.exports.flushSync(() => s("ANIMATION_END"));
          },
          c = (f) => {
            f.target === t && (i.current = vl(n.current));
          };
        return (
          t.addEventListener("animationstart", c),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", c),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: g.exports.useCallback((u) => {
        u && (n.current = getComputedStyle(u)), r(u);
      }, []),
    }
  );
}
function vl(e) {
  return e?.animationName || "none";
}
function mk(e, t = []) {
  let r = [];
  function n(i, l) {
    const a = g.exports.createContext(l),
      s = r.length;
    r = [...r, l];
    function u(f) {
      const { scope: d, children: p, ...y } = f,
        w = d?.[e][s] || a,
        v = g.exports.useMemo(() => y, Object.values(y));
      return g.exports.createElement(w.Provider, { value: v }, p);
    }
    function c(f, d) {
      const p = d?.[e][s] || a,
        y = g.exports.useContext(p);
      if (y) return y;
      if (l !== void 0) return l;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, c];
  }
  const o = () => {
    const i = r.map((l) => g.exports.createContext(l));
    return function (a) {
      const s = a?.[e] || i;
      return g.exports.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: s } }),
        [a, s]
      );
    };
  };
  return (o.scopeName = e), [n, vk(o, ...t)];
}
function vk(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = n.reduce((a, { useScope: s, scopeName: u }) => {
        const f = s(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return g.exports.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function Ur(e) {
  const t = g.exports.useRef(e);
  return (
    g.exports.useEffect(() => {
      t.current = e;
    }),
    g.exports.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) === null || n === void 0
            ? void 0
            : n.call(t, ...r);
        },
      []
    )
  );
}
const hk = g.exports.createContext(void 0);
function yk(e) {
  const t = g.exports.useContext(hk);
  return e || t || "ltr";
}
function wk(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function en(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (o) {
    if ((e?.(o), r === !1 || !o.defaultPrevented)) return t?.(o);
  };
}
function _k(e, t) {
  return g.exports.useReducer((r, n) => {
    const o = t[r][n];
    return o ?? r;
  }, e);
}
const Nw = "ScrollArea",
  [zw, l7] = mk(Nw),
  [Sk, yt] = zw(Nw),
  bk = g.exports.forwardRef((e, t) => {
    const {
        __scopeScrollArea: r,
        type: n = "hover",
        dir: o,
        scrollHideDelay: i = 600,
        ...l
      } = e,
      [a, s] = g.exports.useState(null),
      [u, c] = g.exports.useState(null),
      [f, d] = g.exports.useState(null),
      [p, y] = g.exports.useState(null),
      [w, v] = g.exports.useState(null),
      [m, h] = g.exports.useState(0),
      [_, b] = g.exports.useState(0),
      [O, x] = g.exports.useState(!1),
      [P, $] = g.exports.useState(!1),
      C = gn(t, (z) => s(z)),
      I = yk(o);
    return g.exports.createElement(
      Sk,
      {
        scope: r,
        type: n,
        dir: I,
        scrollHideDelay: i,
        scrollArea: a,
        viewport: u,
        onViewportChange: c,
        content: f,
        onContentChange: d,
        scrollbarX: p,
        onScrollbarXChange: y,
        scrollbarXEnabled: O,
        onScrollbarXEnabledChange: x,
        scrollbarY: w,
        onScrollbarYChange: v,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: $,
        onCornerWidthChange: h,
        onCornerHeightChange: b,
      },
      g.exports.createElement(
        Ai.div,
        ge({ dir: I }, l, {
          ref: C,
          style: {
            position: "relative",
            ["--radix-scroll-area-corner-width"]: m + "px",
            ["--radix-scroll-area-corner-height"]: _ + "px",
            ...e.style,
          },
        })
      )
    );
  }),
  xk = "ScrollAreaViewport",
  Pk = g.exports.forwardRef((e, t) => {
    const { __scopeScrollArea: r, children: n, ...o } = e,
      i = yt(xk, r),
      l = g.exports.useRef(null),
      a = gn(t, l, i.onViewportChange);
    return g.exports.createElement(
      g.exports.Fragment,
      null,
      g.exports.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      g.exports.createElement(
        Ai.div,
        ge({ "data-radix-scroll-area-viewport": "" }, o, {
          ref: a,
          style: {
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
        }),
        g.exports.createElement(
          "div",
          {
            ref: i.onContentChange,
            style: { minWidth: "100%", display: "table" },
          },
          n
        )
      )
    );
  }),
  tr = "ScrollAreaScrollbar",
  $k = g.exports.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = yt(tr, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o,
      a = e.orientation === "horizontal";
    return (
      g.exports.useEffect(
        () => (
          a ? i(!0) : l(!0),
          () => {
            a ? i(!1) : l(!1);
          }
        ),
        [a, i, l]
      ),
      o.type === "hover"
        ? g.exports.createElement(Ok, ge({}, n, { ref: t, forceMount: r }))
        : o.type === "scroll"
        ? g.exports.createElement(Ck, ge({}, n, { ref: t, forceMount: r }))
        : o.type === "auto"
        ? g.exports.createElement(Dw, ge({}, n, { ref: t, forceMount: r }))
        : o.type === "always"
        ? g.exports.createElement(Wd, ge({}, n, { ref: t }))
        : null
    );
  }),
  Ok = g.exports.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = yt(tr, e.__scopeScrollArea),
      [i, l] = g.exports.useState(!1);
    return (
      g.exports.useEffect(() => {
        const a = o.scrollArea;
        let s = 0;
        if (a) {
          const u = () => {
              window.clearTimeout(s), l(!0);
            },
            c = () => {
              s = window.setTimeout(() => l(!1), o.scrollHideDelay);
            };
          return (
            a.addEventListener("pointerenter", u),
            a.addEventListener("pointerleave", c),
            () => {
              window.clearTimeout(s),
                a.removeEventListener("pointerenter", u),
                a.removeEventListener("pointerleave", c);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      g.exports.createElement(
        Vi,
        { present: r || i },
        g.exports.createElement(
          Dw,
          ge({ "data-state": i ? "visible" : "hidden" }, n, { ref: t })
        )
      )
    );
  }),
  Ck = g.exports.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = yt(tr, e.__scopeScrollArea),
      i = e.orientation === "horizontal",
      l = au(() => s("SCROLL_END"), 100),
      [a, s] = _k("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      g.exports.useEffect(() => {
        if (a === "idle") {
          const u = window.setTimeout(() => s("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [a, o.scrollHideDelay, s]),
      g.exports.useEffect(() => {
        const u = o.viewport,
          c = i ? "scrollLeft" : "scrollTop";
        if (u) {
          let f = u[c];
          const d = () => {
            const p = u[c];
            f !== p && (s("SCROLL"), l()), (f = p);
          };
          return (
            u.addEventListener("scroll", d),
            () => u.removeEventListener("scroll", d)
          );
        }
      }, [o.viewport, i, s, l]),
      g.exports.createElement(
        Vi,
        { present: r || a !== "hidden" },
        g.exports.createElement(
          Wd,
          ge({ "data-state": a === "hidden" ? "hidden" : "visible" }, n, {
            ref: t,
            onPointerEnter: en(e.onPointerEnter, () => s("POINTER_ENTER")),
            onPointerLeave: en(e.onPointerLeave, () => s("POINTER_LEAVE")),
          })
        )
      )
    );
  }),
  Dw = g.exports.forwardRef((e, t) => {
    const r = yt(tr, e.__scopeScrollArea),
      { forceMount: n, ...o } = e,
      [i, l] = g.exports.useState(!1),
      a = e.orientation === "horizontal",
      s = au(() => {
        if (r.viewport) {
          const u = r.viewport.offsetWidth < r.viewport.scrollWidth,
            c = r.viewport.offsetHeight < r.viewport.scrollHeight;
          l(a ? u : c);
        }
      }, 10);
    return (
      Xn(r.viewport, s),
      Xn(r.content, s),
      g.exports.createElement(
        Vi,
        { present: n || i },
        g.exports.createElement(
          Wd,
          ge({ "data-state": i ? "visible" : "hidden" }, o, { ref: t })
        )
      )
    );
  }),
  Wd = g.exports.forwardRef((e, t) => {
    const { orientation: r = "vertical", ...n } = e,
      o = yt(tr, e.__scopeScrollArea),
      i = g.exports.useRef(null),
      l = g.exports.useRef(0),
      [a, s] = g.exports.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = Lw(a.viewport, a.content),
      c = {
        ...n,
        sizes: a,
        onSizesChange: s,
        hasThumb: Boolean(u > 0 && u < 1),
        onThumbChange: (d) => (i.current = d),
        onThumbPointerUp: () => (l.current = 0),
        onThumbPointerDown: (d) => (l.current = d),
      };
    function f(d, p) {
      return Tk(d, l.current, a, p);
    }
    return r === "horizontal"
      ? g.exports.createElement(
          Ek,
          ge({}, c, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const d = o.viewport.scrollLeft,
                  p = Lm(d, a, o.dir);
                i.current.style.transform = `translate3d(${p}px, 0, 0)`;
              }
            },
            onWheelScroll: (d) => {
              o.viewport && (o.viewport.scrollLeft = d);
            },
            onDragScroll: (d) => {
              o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
            },
          })
        )
      : r === "vertical"
      ? g.exports.createElement(
          kk,
          ge({}, c, {
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const d = o.viewport.scrollTop,
                  p = Lm(d, a);
                i.current.style.transform = `translate3d(0, ${p}px, 0)`;
              }
            },
            onWheelScroll: (d) => {
              o.viewport && (o.viewport.scrollTop = d);
            },
            onDragScroll: (d) => {
              o.viewport && (o.viewport.scrollTop = f(d));
            },
          })
        )
      : null;
  }),
  Ek = g.exports.forwardRef((e, t) => {
    const { sizes: r, onSizesChange: n, ...o } = e,
      i = yt(tr, e.__scopeScrollArea),
      [l, a] = g.exports.useState(),
      s = g.exports.useRef(null),
      u = gn(t, s, i.onScrollbarXChange);
    return (
      g.exports.useEffect(() => {
        s.current && a(getComputedStyle(s.current));
      }, [s]),
      g.exports.createElement(
        Mw,
        ge({ "data-orientation": "horizontal" }, o, {
          ref: u,
          sizes: r,
          style: {
            bottom: 0,
            left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right:
              i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            ["--radix-scroll-area-thumb-width"]: lu(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
          onDragScroll: (c) => e.onDragScroll(c.x),
          onWheelScroll: (c, f) => {
            if (i.viewport) {
              const d = i.viewport.scrollLeft + c.deltaX;
              e.onWheelScroll(d), Aw(d, f) && c.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              i.viewport &&
              l &&
              n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: s.current.clientWidth,
                  paddingStart: Ca(l.paddingLeft),
                  paddingEnd: Ca(l.paddingRight),
                },
              });
          },
        })
      )
    );
  }),
  kk = g.exports.forwardRef((e, t) => {
    const { sizes: r, onSizesChange: n, ...o } = e,
      i = yt(tr, e.__scopeScrollArea),
      [l, a] = g.exports.useState(),
      s = g.exports.useRef(null),
      u = gn(t, s, i.onScrollbarYChange);
    return (
      g.exports.useEffect(() => {
        s.current && a(getComputedStyle(s.current));
      }, [s]),
      g.exports.createElement(
        Mw,
        ge({ "data-orientation": "vertical" }, o, {
          ref: u,
          sizes: r,
          style: {
            top: 0,
            right: i.dir === "ltr" ? 0 : void 0,
            left: i.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            ["--radix-scroll-area-thumb-height"]: lu(r) + "px",
            ...e.style,
          },
          onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
          onDragScroll: (c) => e.onDragScroll(c.y),
          onWheelScroll: (c, f) => {
            if (i.viewport) {
              const d = i.viewport.scrollTop + c.deltaY;
              e.onWheelScroll(d), Aw(d, f) && c.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              i.viewport &&
              l &&
              n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: s.current.clientHeight,
                  paddingStart: Ca(l.paddingTop),
                  paddingEnd: Ca(l.paddingBottom),
                },
              });
          },
        })
      )
    );
  }),
  [Rk, Tw] = zw(tr),
  Mw = g.exports.forwardRef((e, t) => {
    const {
        __scopeScrollArea: r,
        sizes: n,
        hasThumb: o,
        onThumbChange: i,
        onThumbPointerUp: l,
        onThumbPointerDown: a,
        onThumbPositionChange: s,
        onDragScroll: u,
        onWheelScroll: c,
        onResize: f,
        ...d
      } = e,
      p = yt(tr, r),
      [y, w] = g.exports.useState(null),
      v = gn(t, (C) => w(C)),
      m = g.exports.useRef(null),
      h = g.exports.useRef(""),
      _ = p.viewport,
      b = n.content - n.viewport,
      O = Ur(c),
      x = Ur(s),
      P = au(f, 10);
    function $(C) {
      if (m.current) {
        const I = C.clientX - m.current.left,
          z = C.clientY - m.current.top;
        u({ x: I, y: z });
      }
    }
    return (
      g.exports.useEffect(() => {
        const C = (I) => {
          const z = I.target;
          y?.contains(z) && O(I, b);
        };
        return (
          document.addEventListener("wheel", C, { passive: !1 }),
          () => document.removeEventListener("wheel", C, { passive: !1 })
        );
      }, [_, y, b, O]),
      g.exports.useEffect(x, [n, x]),
      Xn(y, P),
      Xn(p.content, P),
      g.exports.createElement(
        Rk,
        {
          scope: r,
          scrollbar: y,
          hasThumb: o,
          onThumbChange: Ur(i),
          onThumbPointerUp: Ur(l),
          onThumbPositionChange: x,
          onThumbPointerDown: Ur(a),
        },
        g.exports.createElement(
          Ai.div,
          ge({}, d, {
            ref: v,
            style: { position: "absolute", ...d.style },
            onPointerDown: en(e.onPointerDown, (C) => {
              C.button === 0 &&
                (C.target.setPointerCapture(C.pointerId),
                (m.current = y.getBoundingClientRect()),
                (h.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                $(C));
            }),
            onPointerMove: en(e.onPointerMove, $),
            onPointerUp: en(e.onPointerUp, (C) => {
              C.target.releasePointerCapture(C.pointerId),
                (document.body.style.webkitUserSelect = h.current),
                (m.current = null);
            }),
          })
        )
      )
    );
  }),
  mf = "ScrollAreaThumb",
  Ik = g.exports.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = Tw(mf, e.__scopeScrollArea);
    return g.exports.createElement(
      Vi,
      { present: r || o.hasThumb },
      g.exports.createElement(Nk, ge({ ref: t }, n))
    );
  }),
  Nk = g.exports.forwardRef((e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e,
      i = yt(mf, r),
      l = Tw(mf, r),
      { onThumbPositionChange: a } = l,
      s = gn(t, (f) => l.onThumbChange(f)),
      u = g.exports.useRef(),
      c = au(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      g.exports.useEffect(() => {
        const f = i.viewport;
        if (f) {
          const d = () => {
            if ((c(), !u.current)) {
              const p = Mk(f, a);
              (u.current = p), a();
            }
          };
          return (
            a(),
            f.addEventListener("scroll", d),
            () => f.removeEventListener("scroll", d)
          );
        }
      }, [i.viewport, c, a]),
      g.exports.createElement(
        Ai.div,
        ge({ "data-state": l.hasThumb ? "visible" : "hidden" }, o, {
          ref: s,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...n,
          },
          onPointerDownCapture: en(e.onPointerDownCapture, (f) => {
            const p = f.target.getBoundingClientRect(),
              y = f.clientX - p.left,
              w = f.clientY - p.top;
            l.onThumbPointerDown({ x: y, y: w });
          }),
          onPointerUp: en(e.onPointerUp, l.onThumbPointerUp),
        })
      )
    );
  }),
  jw = "ScrollAreaCorner",
  zk = g.exports.forwardRef((e, t) => {
    const r = yt(jw, e.__scopeScrollArea),
      n = Boolean(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n
      ? g.exports.createElement(Dk, ge({}, e, { ref: t }))
      : null;
  }),
  Dk = g.exports.forwardRef((e, t) => {
    const { __scopeScrollArea: r, ...n } = e,
      o = yt(jw, r),
      [i, l] = g.exports.useState(0),
      [a, s] = g.exports.useState(0),
      u = Boolean(i && a);
    return (
      Xn(o.scrollbarX, () => {
        var c;
        const f =
          ((c = o.scrollbarX) === null || c === void 0
            ? void 0
            : c.offsetHeight) || 0;
        o.onCornerHeightChange(f), s(f);
      }),
      Xn(o.scrollbarY, () => {
        var c;
        const f =
          ((c = o.scrollbarY) === null || c === void 0
            ? void 0
            : c.offsetWidth) || 0;
        o.onCornerWidthChange(f), l(f);
      }),
      u
        ? g.exports.createElement(
            Ai.div,
            ge({}, n, {
              ref: t,
              style: {
                width: i,
                height: a,
                position: "absolute",
                right: o.dir === "ltr" ? 0 : void 0,
                left: o.dir === "rtl" ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            })
          )
        : null
    );
  });
function Ca(e) {
  return e ? parseInt(e, 10) : 0;
}
function Lw(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function lu(e) {
  const t = Lw(e.viewport, e.content),
    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function Tk(e, t, r, n = "ltr") {
  const o = lu(r),
    i = o / 2,
    l = t || i,
    a = o - l,
    s = r.scrollbar.paddingStart + l,
    u = r.scrollbar.size - r.scrollbar.paddingEnd - a,
    c = r.content - r.viewport,
    f = n === "ltr" ? [0, c] : [c * -1, 0];
  return Fw([s, u], f)(e);
}
function Lm(e, t, r = "ltr") {
  const n = lu(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    i = t.scrollbar.size - o,
    l = t.content - t.viewport,
    a = i - n,
    s = r === "ltr" ? [0, l] : [l * -1, 0],
    u = wk(e, s);
  return Fw([0, l], [0, a])(u);
}
function Fw(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Aw(e, t) {
  return e > 0 && e < t;
}
const Mk = (e, t = () => {}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop },
    n = 0;
  return (
    (function o() {
      const i = { left: e.scrollLeft, top: e.scrollTop },
        l = r.left !== i.left,
        a = r.top !== i.top;
      (l || a) && t(), (r = i), (n = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(n)
  );
};
function au(e, t) {
  const r = Ur(e),
    n = g.exports.useRef(0);
  return (
    g.exports.useEffect(() => () => window.clearTimeout(n.current), []),
    g.exports.useCallback(() => {
      window.clearTimeout(n.current), (n.current = window.setTimeout(r, t));
    }, [r, t])
  );
}
function Xn(e, t) {
  const r = Ur(t);
  gf(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), (n = window.requestAnimationFrame(r));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(n), o.unobserve(e);
        }
      );
    }
  }, [e, r]);
}
const jk = bk,
  Lk = Pk,
  Fm = $k,
  Am = Ik,
  Fk = zk;
var Ak = Q(
    (
      e,
      { scrollbarSize: t, offsetScrollbars: r, scrollbarHovered: n, hidden: o },
      i
    ) => ({
      root: { overflow: "hidden" },
      viewport: { width: "100%", height: "100%", paddingRight: r ? t : void 0 },
      scrollbar: {
        display: o ? "none" : "flex",
        userSelect: "none",
        touchAction: "none",
        boxSizing: "border-box",
        padding: t / 5,
        transition: "background-color 150ms ease, opacity 150ms ease",
        "&:hover": {
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[8] : e.colors.gray[0],
          [`& .${i("thumb")}`]: {
            backgroundColor:
              e.colorScheme === "dark"
                ? e.fn.rgba(e.white, 0.5)
                : e.fn.rgba(e.black, 0.5),
          },
        },
        '&[data-orientation="vertical"]': { width: t },
        '&[data-orientation="horizontal"]': {
          flexDirection: "column",
          height: t,
        },
        '&[data-state="hidden"]': { display: "none", opacity: 0 },
      },
      thumb: {
        ref: i("thumb"),
        flex: 1,
        backgroundColor:
          e.colorScheme === "dark"
            ? e.fn.rgba(e.white, 0.4)
            : e.fn.rgba(e.black, 0.4),
        borderRadius: t,
        position: "relative",
        transition: "background-color 150ms ease",
        display: o ? "none" : void 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          minWidth: 44,
          minHeight: 44,
        },
      },
      corner: {
        backgroundColor:
          e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0],
        transition: "opacity 150ms ease",
        opacity: n ? 1 : 0,
        display: o ? "none" : void 0,
      },
    })
  ),
  Vk = Ak,
  Hk = Object.defineProperty,
  Bk = Object.defineProperties,
  Wk = Object.getOwnPropertyDescriptors,
  Ea = Object.getOwnPropertySymbols,
  Vw = Object.prototype.hasOwnProperty,
  Hw = Object.prototype.propertyIsEnumerable,
  Vm = (e, t, r) =>
    t in e
      ? Hk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Bw = (e, t) => {
    for (var r in t || (t = {})) Vw.call(t, r) && Vm(e, r, t[r]);
    if (Ea) for (var r of Ea(t)) Hw.call(t, r) && Vm(e, r, t[r]);
    return e;
  },
  Uk = (e, t) => Bk(e, Wk(t)),
  Ww = (e, t) => {
    var r = {};
    for (var n in e) Vw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ea)
      for (var n of Ea(e)) t.indexOf(n) < 0 && Hw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Uw = {
    scrollbarSize: 12,
    scrollHideDelay: 1e3,
    type: "hover",
    offsetScrollbars: !1,
  },
  su = g.exports.forwardRef((e, t) => {
    const r = ee("ScrollArea", Uw, e),
      {
        children: n,
        className: o,
        classNames: i,
        styles: l,
        scrollbarSize: a,
        scrollHideDelay: s,
        type: u,
        dir: c,
        offsetScrollbars: f,
        viewportRef: d,
        onScrollPositionChange: p,
        unstyled: y,
      } = r,
      w = Ww(r, [
        "children",
        "className",
        "classNames",
        "styles",
        "scrollbarSize",
        "scrollHideDelay",
        "type",
        "dir",
        "offsetScrollbars",
        "viewportRef",
        "onScrollPositionChange",
        "unstyled",
      ]),
      [v, m] = g.exports.useState(!1),
      h = at(),
      { classes: _, cx: b } = Vk(
        {
          scrollbarSize: a,
          offsetScrollbars: f,
          scrollbarHovered: v,
          hidden: u === "never",
        },
        { name: "ScrollArea", classNames: i, styles: l, unstyled: y }
      );
    return S(jk, {
      type: u === "never" ? "always" : u,
      scrollHideDelay: s,
      dir: c || h.dir,
      ref: t,
      asChild: !0,
      children: U(q, {
        ...Bw({ className: b(_.root, o) }, w),
        children: [
          S(Lk, {
            className: _.viewport,
            ref: d,
            onScroll:
              typeof p == "function"
                ? ({ currentTarget: O }) =>
                    p({ x: O.scrollLeft, y: O.scrollTop })
                : void 0,
            children: n,
          }),
          S(Fm, {
            orientation: "horizontal",
            className: _.scrollbar,
            forceMount: !0,
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1),
            children: S(Am, { className: _.thumb }),
          }),
          S(Fm, {
            orientation: "vertical",
            className: _.scrollbar,
            forceMount: !0,
            onMouseEnter: () => m(!0),
            onMouseLeave: () => m(!1),
            children: S(Am, { className: _.thumb }),
          }),
          S(Fk, { className: _.corner }),
        ],
      }),
    });
  }),
  Gw = g.exports.forwardRef((e, t) => {
    const r = ee("ScrollAreaAutosize", Uw, e),
      {
        maxHeight: n,
        children: o,
        classNames: i,
        styles: l,
        scrollbarSize: a,
        scrollHideDelay: s,
        type: u,
        dir: c,
        offsetScrollbars: f,
        viewportRef: d,
        onScrollPositionChange: p,
        unstyled: y,
        sx: w,
      } = r,
      v = Ww(r, [
        "maxHeight",
        "children",
        "classNames",
        "styles",
        "scrollbarSize",
        "scrollHideDelay",
        "type",
        "dir",
        "offsetScrollbars",
        "viewportRef",
        "onScrollPositionChange",
        "unstyled",
        "sx",
      ]);
    return E.createElement(
      q,
      Uk(Bw({}, v), {
        ref: t,
        sx: [{ display: "flex", maxHeight: n }, ...Si(w)],
      }),
      E.createElement(
        q,
        { sx: { display: "flex", flexDirection: "column", flex: 1 } },
        E.createElement(
          su,
          {
            classNames: i,
            styles: l,
            scrollHideDelay: s,
            scrollbarSize: a,
            type: u,
            dir: c,
            offsetScrollbars: f,
            viewportRef: d,
            onScrollPositionChange: p,
            unstyled: y,
          },
          o
        )
      )
    );
  });
Gw.displayName = "@mantine/core/ScrollAreaAutosize";
su.displayName = "@mantine/core/ScrollArea";
su.Autosize = Gw;
const Gk = su;
var Yk = Object.defineProperty,
  Xk = Object.defineProperties,
  qk = Object.getOwnPropertyDescriptors,
  ka = Object.getOwnPropertySymbols,
  Yw = Object.prototype.hasOwnProperty,
  Xw = Object.prototype.propertyIsEnumerable,
  Hm = (e, t, r) =>
    t in e
      ? Yk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Bm = (e, t) => {
    for (var r in t || (t = {})) Yw.call(t, r) && Hm(e, r, t[r]);
    if (ka) for (var r of ka(t)) Xw.call(t, r) && Hm(e, r, t[r]);
    return e;
  },
  Kk = (e, t) => Xk(e, qk(t)),
  Qk = (e, t) => {
    var r = {};
    for (var n in e) Yw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ka)
      for (var n of ka(e)) t.indexOf(n) < 0 && Xw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Ud = g.exports.forwardRef((e, t) => {
  var r = e,
    { style: n } = r,
    o = Qk(r, ["style"]);
  return S(Gk, {
    ...Kk(Bm({}, o), { style: Bm({ width: "100%" }, n), viewportRef: t }),
    children: o.children,
  });
});
Ud.displayName = "@mantine/core/SelectScrollArea";
function ao(e) {
  return e.split("-")[0];
}
function uu(e) {
  return e.split("-")[1];
}
function cu(e) {
  return ["top", "bottom"].includes(ao(e)) ? "x" : "y";
}
function qw(e) {
  return e === "y" ? "height" : "width";
}
function Wm(e, t, r) {
  let { reference: n, floating: o } = e;
  const i = n.x + n.width / 2 - o.width / 2,
    l = n.y + n.height / 2 - o.height / 2,
    a = cu(t),
    s = qw(a),
    u = n[s] / 2 - o[s] / 2,
    c = ao(t),
    f = a === "x";
  let d;
  switch (c) {
    case "top":
      d = { x: i, y: n.y - o.height };
      break;
    case "bottom":
      d = { x: i, y: n.y + n.height };
      break;
    case "right":
      d = { x: n.x + n.width, y: l };
      break;
    case "left":
      d = { x: n.x - o.width, y: l };
      break;
    default:
      d = { x: n.x, y: n.y };
  }
  switch (uu(t)) {
    case "start":
      d[a] -= u * (r && f ? -1 : 1);
      break;
    case "end":
      d[a] += u * (r && f ? -1 : 1);
      break;
  }
  return d;
}
const Zk = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
    } = r,
    a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let s = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: c } = Wm(s, n, a),
    f = n,
    d = {},
    p = 0;
  for (let y = 0; y < i.length; y++) {
    const { name: w, fn: v } = i[y],
      {
        x: m,
        y: h,
        data: _,
        reset: b,
      } = await v({
        x: u,
        y: c,
        initialPlacement: n,
        placement: f,
        strategy: o,
        middlewareData: d,
        rects: s,
        platform: l,
        elements: { reference: e, floating: t },
      });
    if (
      ((u = m ?? u),
      (c = h ?? c),
      (d = { ...d, [w]: { ...d[w], ..._ } }),
      b && p <= 50)
    ) {
      p++,
        typeof b == "object" &&
          (b.placement && (f = b.placement),
          b.rects &&
            (s =
              b.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : b.rects),
          ({ x: u, y: c } = Wm(s, f, a))),
        (y = -1);
      continue;
    }
  }
  return { x: u, y: c, placement: f, strategy: o, middlewareData: d };
};
function Jk(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function e3(e) {
  return typeof e != "number"
    ? Jk(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ra(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
async function Gd(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: p = 0,
    } = t,
    y = e3(p),
    v = a[d ? (f === "floating" ? "reference" : "floating") : f],
    m = Ra(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(v))) == null ||
          r
            ? v
            : v.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: s,
      })
    ),
    h = Ra(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect:
              f === "floating" ? { ...l.floating, x: n, y: o } : l.reference,
            offsetParent: await (i.getOffsetParent == null
              ? void 0
              : i.getOffsetParent(a.floating)),
            strategy: s,
          })
        : l[f]
    );
  return {
    top: m.top - h.top + y.top,
    bottom: h.bottom - m.bottom + y.bottom,
    left: m.left - h.left + y.left,
    right: h.right - m.right + y.right,
  };
}
const t3 = Math.min,
  Br = Math.max;
function Um(e, t, r) {
  return Br(e, t3(t, r));
}
const r3 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ia(e) {
  return e.replace(/left|right|bottom|top/g, (t) => r3[t]);
}
function n3(e, t, r) {
  r === void 0 && (r = !1);
  const n = uu(e),
    o = cu(e),
    i = qw(o);
  let l =
    o === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
      ? "bottom"
      : "top";
  return (
    t.reference[i] > t.floating[i] && (l = Ia(l)), { main: l, cross: Ia(l) }
  );
}
const o3 = { start: "end", end: "start" };
function Gm(e) {
  return e.replace(/start|end/g, (t) => o3[t]);
}
function i3(e) {
  const t = Ia(e);
  return [Gm(e), t, Gm(t)];
}
const Kw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(t) {
        var r;
        const {
            placement: n,
            middlewareData: o,
            rects: i,
            initialPlacement: l,
            platform: a,
            elements: s,
          } = t,
          {
            mainAxis: u = !0,
            crossAxis: c = !0,
            fallbackPlacements: f,
            fallbackStrategy: d = "bestFit",
            flipAlignment: p = !0,
            ...y
          } = e,
          w = ao(n),
          m = f || (w === l || !p ? [Ia(l)] : i3(l)),
          h = [l, ...m],
          _ = await Gd(t, y),
          b = [];
        let O = ((r = o.flip) == null ? void 0 : r.overflows) || [];
        if ((u && b.push(_[w]), c)) {
          const { main: C, cross: I } = n3(
            n,
            i,
            await (a.isRTL == null ? void 0 : a.isRTL(s.floating))
          );
          b.push(_[C], _[I]);
        }
        if (
          ((O = [...O, { placement: n, overflows: b }]),
          !b.every((C) => C <= 0))
        ) {
          var x, P;
          const C =
              ((x = (P = o.flip) == null ? void 0 : P.index) != null ? x : 0) +
              1,
            I = h[C];
          if (I)
            return {
              data: { index: C, overflows: O },
              reset: { placement: I },
            };
          let z = "bottom";
          switch (d) {
            case "bestFit": {
              var $;
              const D =
                ($ = O.map((j) => [
                  j,
                  j.overflows.filter((B) => B > 0).reduce((B, V) => B + V, 0),
                ]).sort((j, B) => j[1] - B[1])[0]) == null
                  ? void 0
                  : $[0].placement;
              D && (z = D);
              break;
            }
            case "initialPlacement":
              z = l;
              break;
          }
          if (n !== z) return { reset: { placement: z } };
        }
        return {};
      },
    }
  );
};
async function l3(e, t) {
  const { placement: r, platform: n, elements: o } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)),
    l = ao(r),
    a = uu(r),
    s = cu(r) === "x",
    u = ["left", "top"].includes(l) ? -1 : 1,
    c = i && s ? -1 : 1,
    f = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: d,
    crossAxis: p,
    alignmentAxis: y,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    a && typeof y == "number" && (p = a === "end" ? y * -1 : y),
    s ? { x: p * c, y: d * u } : { x: d * u, y: p * c }
  );
}
const Qw = function (e) {
  return (
    e === void 0 && (e = 0),
    {
      name: "offset",
      options: e,
      async fn(t) {
        const { x: r, y: n } = t,
          o = await l3(t, e);
        return { x: r + o.x, y: n + o.y, data: o };
      },
    }
  );
};
function a3(e) {
  return e === "x" ? "y" : "x";
}
const Yd = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: a = {
                fn: (v) => {
                  let { x: m, y: h } = v;
                  return { x: m, y: h };
                },
              },
              ...s
            } = e,
            u = { x: r, y: n },
            c = await Gd(t, s),
            f = cu(ao(o)),
            d = a3(f);
          let p = u[f],
            y = u[d];
          if (i) {
            const v = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              h = p + c[v],
              _ = p - c[m];
            p = Um(h, p, _);
          }
          if (l) {
            const v = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              h = y + c[v],
              _ = y - c[m];
            y = Um(h, y, _);
          }
          const w = a.fn({ ...t, [f]: p, [d]: y });
          return { ...w, data: { x: w.x - r, y: w.y - n } };
        },
      }
    );
  },
  s3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: r, rects: n, platform: o, elements: i } = t,
            { apply: l, ...a } = e,
            s = await Gd(t, a),
            u = ao(r),
            c = uu(r);
          let f, d;
          u === "top" || u === "bottom"
            ? ((f = u),
              (d =
                c ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((d = u), (f = c === "end" ? "top" : "bottom"));
          const p = Br(s.left, 0),
            y = Br(s.right, 0),
            w = Br(s.top, 0),
            v = Br(s.bottom, 0),
            m = {
              availableHeight:
                n.floating.height -
                (["left", "right"].includes(r)
                  ? 2 * (w !== 0 || v !== 0 ? w + v : Br(s.top, s.bottom))
                  : s[f]),
              availableWidth:
                n.floating.width -
                (["top", "bottom"].includes(r)
                  ? 2 * (p !== 0 || y !== 0 ? p + y : Br(s.left, s.right))
                  : s[d]),
            },
            h = await o.getDimensions(i.floating);
          l?.({ ...t, ...m });
          const _ = await o.getDimensions(i.floating);
          return h.width !== _.width || h.height !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Zw(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function rr(e) {
  if (e == null) return window;
  if (!Zw(e)) {
    const t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Hi(e) {
  return rr(e).getComputedStyle(e);
}
function Qt(e) {
  return Zw(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Jw() {
  const e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands.map((t) => t.brand + "/" + t.version).join(" ")
    : navigator.userAgent;
}
function Dt(e) {
  return e instanceof rr(e).HTMLElement;
}
function Rr(e) {
  return e instanceof rr(e).Element;
}
function u3(e) {
  return e instanceof rr(e).Node;
}
function Xd(e) {
  if (typeof ShadowRoot > "u") return !1;
  const t = rr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function fu(e) {
  const { overflow: t, overflowX: r, overflowY: n } = Hi(e);
  return /auto|scroll|overlay|hidden/.test(t + n + r);
}
function c3(e) {
  return ["table", "td", "th"].includes(Qt(e));
}
function e_(e) {
  const t = /firefox/i.test(Jw()),
    r = Hi(e);
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    r.contain === "paint" ||
    ["transform", "perspective"].includes(r.willChange) ||
    (t && r.willChange === "filter") ||
    (t && (r.filter ? r.filter !== "none" : !1))
  );
}
function t_() {
  return !/^((?!chrome|android).)*safari/i.test(Jw());
}
const Ym = Math.min,
  oi = Math.max,
  Na = Math.round;
function Zt(e, t, r) {
  var n, o, i, l;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect();
  let s = 1,
    u = 1;
  t &&
    Dt(e) &&
    ((s = (e.offsetWidth > 0 && Na(a.width) / e.offsetWidth) || 1),
    (u = (e.offsetHeight > 0 && Na(a.height) / e.offsetHeight) || 1));
  const c = Rr(e) ? rr(e) : window,
    f = !t_() && r,
    d =
      (a.left +
        (f &&
        (n = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null
          ? n
          : 0)) /
      s,
    p =
      (a.top +
        (f &&
        (i = (l = c.visualViewport) == null ? void 0 : l.offsetTop) != null
          ? i
          : 0)) /
      u,
    y = a.width / s,
    w = a.height / u;
  return {
    width: y,
    height: w,
    top: p,
    right: d + y,
    bottom: p + w,
    left: d,
    x: d,
    y: p,
  };
}
function Dr(e) {
  return ((u3(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function du(e) {
  return Rr(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function r_(e) {
  return Zt(Dr(e)).left + du(e).scrollLeft;
}
function f3(e) {
  const t = Zt(e);
  return Na(t.width) !== e.offsetWidth || Na(t.height) !== e.offsetHeight;
}
function d3(e, t, r) {
  const n = Dt(t),
    o = Dr(t),
    i = Zt(e, n && f3(t), r === "fixed");
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (n || (!n && r !== "fixed"))
    if (((Qt(t) !== "body" || fu(o)) && (l = du(t)), Dt(t))) {
      const s = Zt(t, !0);
      (a.x = s.x + t.clientLeft), (a.y = s.y + t.clientTop);
    } else o && (a.x = r_(o));
  return {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height,
  };
}
function n_(e) {
  return Qt(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Xd(e) ? e.host : null) || Dr(e);
}
function Xm(e) {
  return !Dt(e) || getComputedStyle(e).position === "fixed"
    ? null
    : e.offsetParent;
}
function p3(e) {
  let t = n_(e);
  for (Xd(t) && (t = t.host); Dt(t) && !["html", "body"].includes(Qt(t)); ) {
    if (e_(t)) return t;
    t = t.parentNode;
  }
  return null;
}
function vf(e) {
  const t = rr(e);
  let r = Xm(e);
  for (; r && c3(r) && getComputedStyle(r).position === "static"; ) r = Xm(r);
  return r &&
    (Qt(r) === "html" ||
      (Qt(r) === "body" && getComputedStyle(r).position === "static" && !e_(r)))
    ? t
    : r || p3(e) || t;
}
function qm(e) {
  if (Dt(e)) return { width: e.offsetWidth, height: e.offsetHeight };
  const t = Zt(e);
  return { width: t.width, height: t.height };
}
function g3(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const o = Dt(r),
    i = Dr(r);
  if (r === i) return t;
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (
    (o || (!o && n !== "fixed")) &&
    ((Qt(r) !== "body" || fu(i)) && (l = du(r)), Dt(r))
  ) {
    const s = Zt(r, !0);
    (a.x = s.x + r.clientLeft), (a.y = s.y + r.clientTop);
  }
  return { ...t, x: t.x - l.scrollLeft + a.x, y: t.y - l.scrollTop + a.y };
}
function m3(e, t) {
  const r = rr(e),
    n = Dr(e),
    o = r.visualViewport;
  let i = n.clientWidth,
    l = n.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (i = o.width), (l = o.height);
    const u = t_();
    (u || (!u && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: l, x: a, y: s };
}
function v3(e) {
  var t;
  const r = Dr(e),
    n = du(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = oi(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    l = oi(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    );
  let a = -n.scrollLeft + r_(e);
  const s = -n.scrollTop;
  return (
    Hi(o || r).direction === "rtl" &&
      (a += oi(r.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: l, x: a, y: s }
  );
}
function o_(e) {
  const t = n_(e);
  return ["html", "body", "#document"].includes(Qt(t))
    ? e.ownerDocument.body
    : Dt(t) && fu(t)
    ? t
    : o_(t);
}
function ln(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = o_(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = rr(n),
    l = o ? [i].concat(i.visualViewport || [], fu(n) ? n : []) : n,
    a = t.concat(l);
  return o ? a : a.concat(ln(l));
}
function h3(e, t) {
  const r = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Xd(r)) {
    let n = t;
    do {
      if (n && e === n) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function y3(e, t) {
  const r = Zt(e, !1, t === "fixed"),
    n = r.top + e.clientTop,
    o = r.left + e.clientLeft;
  return {
    top: n,
    left: o,
    x: o,
    y: n,
    right: o + e.clientWidth,
    bottom: n + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight,
  };
}
function Km(e, t, r) {
  return t === "viewport" ? Ra(m3(e, r)) : Rr(t) ? y3(t, r) : Ra(v3(Dr(e)));
}
function w3(e) {
  const t = ln(e),
    n = ["absolute", "fixed"].includes(Hi(e).position) && Dt(e) ? vf(e) : e;
  return Rr(n) ? t.filter((o) => Rr(o) && h3(o, n) && Qt(o) !== "body") : [];
}
function _3(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const l = [...(r === "clippingAncestors" ? w3(t) : [].concat(r)), n],
    a = l[0],
    s = l.reduce((u, c) => {
      const f = Km(t, c, o);
      return (
        (u.top = oi(f.top, u.top)),
        (u.right = Ym(f.right, u.right)),
        (u.bottom = Ym(f.bottom, u.bottom)),
        (u.left = oi(f.left, u.left)),
        u
      );
    }, Km(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top,
  };
}
const S3 = {
  getClippingRect: _3,
  convertOffsetParentRelativeRectToViewportRelativeRect: g3,
  isElement: Rr,
  getDimensions: qm,
  getOffsetParent: vf,
  getDocumentElement: Dr,
  getElementRects: (e) => {
    let { reference: t, floating: r, strategy: n } = e;
    return { reference: d3(t, vf(r), n), floating: { ...qm(r), x: 0, y: 0 } };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Hi(e).direction === "rtl",
};
function b3(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = !0,
      animationFrame: a = !1,
    } = n,
    s = o && !a,
    u = i && !a,
    c = s || u ? [...(Rr(e) ? ln(e) : []), ...ln(t)] : [];
  c.forEach((w) => {
    s && w.addEventListener("scroll", r, { passive: !0 }),
      u && w.addEventListener("resize", r);
  });
  let f = null;
  if (l) {
    let w = !0;
    (f = new ResizeObserver(() => {
      w || r(), (w = !1);
    })),
      Rr(e) && !a && f.observe(e),
      f.observe(t);
  }
  let d,
    p = a ? Zt(e) : null;
  a && y();
  function y() {
    const w = Zt(e);
    p &&
      (w.x !== p.x ||
        w.y !== p.y ||
        w.width !== p.width ||
        w.height !== p.height) &&
      r(),
      (p = w),
      (d = requestAnimationFrame(y));
  }
  return (
    r(),
    () => {
      var w;
      c.forEach((v) => {
        s && v.removeEventListener("scroll", r),
          u && v.removeEventListener("resize", r);
      }),
        (w = f) == null || w.disconnect(),
        (f = null),
        a && cancelAnimationFrame(d);
    }
  );
}
const x3 = (e, t, r) => Zk(e, t, { platform: S3, ...r });
var hf =
  typeof document < "u" ? g.exports.useLayoutEffect : g.exports.useEffect;
function yf(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!yf(e[n], t[n])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !yf(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function P3(e) {
  const t = g.exports.useRef(e);
  return (
    hf(() => {
      t.current = e;
    }),
    t
  );
}
function $3(e) {
  let {
    middleware: t,
    placement: r = "bottom",
    strategy: n = "absolute",
    whileElementsMounted: o,
  } = e === void 0 ? {} : e;
  const i = g.exports.useRef(null),
    l = g.exports.useRef(null),
    a = P3(o),
    s = g.exports.useRef(null),
    [u, c] = g.exports.useState({
      x: null,
      y: null,
      strategy: n,
      placement: r,
      middlewareData: {},
    }),
    [f, d] = g.exports.useState(t);
  yf(
    f?.map((_) => {
      let { options: b } = _;
      return b;
    }),
    t?.map((_) => {
      let { options: b } = _;
      return b;
    })
  ) || d(t);
  const p = g.exports.useCallback(() => {
    !i.current ||
      !l.current ||
      x3(i.current, l.current, {
        middleware: f,
        placement: r,
        strategy: n,
      }).then((_) => {
        y.current &&
          Ei.exports.flushSync(() => {
            c(_);
          });
      });
  }, [f, r, n]);
  hf(() => {
    y.current && p();
  }, [p]);
  const y = g.exports.useRef(!1);
  hf(
    () => (
      (y.current = !0),
      () => {
        y.current = !1;
      }
    ),
    []
  );
  const w = g.exports.useCallback(() => {
      if (
        (typeof s.current == "function" && (s.current(), (s.current = null)),
        i.current && l.current)
      )
        if (a.current) {
          const _ = a.current(i.current, l.current, p);
          s.current = _;
        } else p();
    }, [p, a]),
    v = g.exports.useCallback(
      (_) => {
        (i.current = _), w();
      },
      [w]
    ),
    m = g.exports.useCallback(
      (_) => {
        (l.current = _), w();
      },
      [w]
    ),
    h = g.exports.useMemo(() => ({ reference: i, floating: l }), []);
  return g.exports.useMemo(
    () => ({ ...u, update: p, refs: h, reference: v, floating: m }),
    [u, p, h, v, m]
  );
}
var qn =
  typeof document < "u" ? g.exports.useLayoutEffect : g.exports.useEffect;
function O3() {
  const e = new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.set(t, [...(e.get(t) || []), r]);
    },
    off(t, r) {
      e.set(
        t,
        (e.get(t) || []).filter((n) => n !== r)
      );
    },
  };
}
let ec = !1,
  C3 = 0;
const Qm = () => "floating-ui-" + C3++;
function E3() {
  const [e, t] = g.exports.useState(() => (ec ? Qm() : void 0));
  return (
    qn(() => {
      e == null && t(Qm());
    }, []),
    g.exports.useEffect(() => {
      ec || (ec = !0);
    }, []),
    e
  );
}
const Zm = li["useId".toString()],
  Jm = Zm ?? E3,
  k3 = g.exports.createContext(null),
  R3 = g.exports.createContext(null),
  I3 = () => {
    var e, t;
    return (e = (t = g.exports.useContext(k3)) == null ? void 0 : t.id) != null
      ? e
      : null;
  },
  qd = () => g.exports.useContext(R3);
function Ut(e) {
  var t;
  return (t = e?.ownerDocument) != null ? t : document;
}
function i_(e) {
  var t;
  return (t = Ut(e).defaultView) != null ? t : window;
}
function za(e) {
  return e ? e instanceof i_(e).Element : !1;
}
function l_(e) {
  return e ? e instanceof i_(e).HTMLElement : !1;
}
function Kd(e) {
  let {
    open: t = !1,
    onOpenChange: r = () => {},
    whileElementsMounted: n,
    placement: o,
    middleware: i,
    strategy: l,
    nodeId: a,
  } = e === void 0 ? {} : e;
  const s = qd(),
    u = g.exports.useRef(null),
    c = g.exports.useRef({}),
    f = g.exports.useState(() => O3())[0],
    d = $3({
      placement: o,
      middleware: i,
      strategy: l,
      whileElementsMounted: n,
    }),
    p = g.exports.useMemo(() => ({ ...d.refs, domReference: u }), [d.refs]),
    y = g.exports.useMemo(
      () => ({
        ...d,
        refs: p,
        dataRef: c,
        nodeId: a,
        events: f,
        open: t,
        onOpenChange: r,
      }),
      [d, a, f, t, r, p]
    );
  qn(() => {
    const m = s?.nodesRef.current.find((h) => h.id === a);
    m && (m.context = y);
  });
  const { reference: w } = d,
    v = g.exports.useCallback(
      (m) => {
        (za(m) || m === null) && (y.refs.domReference.current = m), w(m);
      },
      [w, y.refs]
    );
  return g.exports.useMemo(
    () => ({ ...d, context: y, refs: p, reference: v }),
    [d, p, y, v]
  );
}
function tc(e, t, r) {
  const n = new Map();
  return {
    ...(r === "floating" && { tabIndex: -1 }),
    ...e,
    ...t
      .map((o) => (o ? o[r] : null))
      .concat(e)
      .reduce(
        (o, i) => (
          i &&
            Object.entries(i).forEach((l) => {
              let [a, s] = l;
              if (a.indexOf("on") === 0) {
                if ((n.has(a) || n.set(a, []), typeof s == "function")) {
                  var u;
                  (u = n.get(a)) == null || u.push(s);
                }
                o[a] = function () {
                  for (
                    var c, f = arguments.length, d = new Array(f), p = 0;
                    p < f;
                    p++
                  )
                    d[p] = arguments[p];
                  (c = n.get(a)) == null || c.forEach((y) => y(...d));
                };
              } else o[a] = s;
            }),
          o
        ),
        {}
      ),
  };
}
const N3 = function (e) {
  return (
    e === void 0 && (e = []),
    {
      getReferenceProps: (t) => tc(t, e, "reference"),
      getFloatingProps: (t) => tc(t, e, "floating"),
      getItemProps: (t) => tc(t, e, "item"),
    }
  );
};
function z3(e, t) {
  var r;
  let n =
      (r = e.filter((l) => {
        var a;
        return l.parentId === t && ((a = l.context) == null ? void 0 : a.open);
      })) != null
        ? r
        : [],
    o = n;
  for (; o.length; ) {
    var i;
    (o =
      (i = e.filter((l) => {
        var a;
        return (a = o) == null
          ? void 0
          : a.some((s) => {
              var u;
              return (
                l.parentId === s.id &&
                ((u = l.context) == null ? void 0 : u.open)
              );
            });
      })) != null
        ? i
        : []),
      (n = n.concat(o));
  }
  return n;
}
function a_(e) {
  let t = e.activeElement;
  for (
    ;
    ((r = t) == null || (n = r.shadowRoot) == null
      ? void 0
      : n.activeElement) != null;

  ) {
    var r, n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Da(e) {
  const t = g.exports.useRef(e);
  return (
    qn(() => {
      t.current = e;
    }),
    t
  );
}
function D3(e) {
  const t = g.exports.useRef();
  return (
    qn(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
function Vl(e, t, r) {
  return r && r !== "mouse" ? 0 : typeof e == "number" ? e : e?.[t];
}
const T3 = function (e, t) {
    let {
      enabled: r = !0,
      delay: n = 0,
      handleClose: o = null,
      mouseOnly: i = !1,
      restMs: l = 0,
    } = t === void 0 ? {} : t;
    const { open: a, onOpenChange: s, dataRef: u, events: c, refs: f } = e,
      d = qd(),
      p = I3(),
      y = Da(s),
      w = Da(o),
      v = D3(a),
      m = g.exports.useRef(),
      h = g.exports.useRef(),
      _ = g.exports.useRef(),
      b = g.exports.useRef(),
      O = g.exports.useRef(!0),
      x = g.exports.useRef(!1);
    g.exports.useEffect(() => {
      if (!r) return;
      function z() {
        clearTimeout(h.current), clearTimeout(b.current), (O.current = !0);
      }
      return (
        c.on("dismiss", z),
        () => {
          c.off("dismiss", z);
        }
      );
    }, [r, c, f]),
      g.exports.useEffect(() => {
        if (!r || !w.current) return;
        function z() {
          var j;
          (j = u.current.openEvent) != null &&
            j.type.includes("mouse") &&
            y.current(!1);
        }
        const D = Ut(f.floating.current).documentElement;
        return (
          D.addEventListener("mouseleave", z),
          () => {
            D.removeEventListener("mouseleave", z);
          }
        );
      }, [f, y, r, w, u]);
    const P = g.exports.useCallback(
        function (z) {
          z === void 0 && (z = !0);
          const D = Vl(n, "close", m.current);
          D && !_.current
            ? (clearTimeout(h.current),
              (h.current = setTimeout(() => y.current(!1), D)))
            : z && (clearTimeout(h.current), y.current(!1));
        },
        [n, y]
      ),
      $ = g.exports.useCallback(() => {
        _.current &&
          (Ut(f.floating.current).removeEventListener("pointermove", _.current),
          (_.current = void 0));
      }, [f]),
      C = g.exports.useCallback(() => {
        (Ut(f.floating.current).body.style.pointerEvents = ""),
          (x.current = !1);
      }, [f]);
    if (
      (g.exports.useEffect(() => {
        if (!r) return;
        function z(W) {
          if (
            (clearTimeout(h.current),
            (O.current = !1),
            a || (i && m.current !== "mouse") || (l > 0 && Vl(n, "open") === 0))
          )
            return;
          u.current.openEvent = W;
          const re = Vl(n, "open", m.current);
          re
            ? (h.current = setTimeout(() => {
                y.current(!0);
              }, re))
            : y.current(!0);
        }
        function D(W) {
          var re, se;
          if (
            ((re = u.current.openEvent) == null ? void 0 : re.type) ===
              "click" ||
            ((se = u.current.openEvent) == null ? void 0 : se.type) ===
              "pointerdown"
          )
            return;
          const ie = Ut(f.floating.current);
          if ((clearTimeout(b.current), w.current)) {
            clearTimeout(h.current),
              _.current && ie.removeEventListener("pointermove", _.current),
              (_.current = w.current({
                ...e,
                tree: d,
                x: W.clientX,
                y: W.clientY,
                onClose() {
                  $(), P();
                },
              })),
              ie.addEventListener("pointermove", _.current);
            return;
          }
          P();
        }
        function j(W) {
          w.current == null ||
            w.current({
              ...e,
              tree: d,
              x: W.clientX,
              y: W.clientY,
              leave: !0,
              onClose() {
                $(), P();
              },
            })(W);
        }
        const B = f.floating.current,
          V = f.domReference.current;
        if (za(V))
          return (
            a && V.addEventListener("mouseleave", j),
            B?.addEventListener("mouseleave", j),
            V.addEventListener("mousemove", z, { once: !0 }),
            V.addEventListener("mouseenter", z),
            V.addEventListener("mouseleave", D),
            () => {
              a && V.removeEventListener("mouseleave", j),
                B?.removeEventListener("mouseleave", j),
                V.removeEventListener("mousemove", z),
                V.removeEventListener("mouseenter", z),
                V.removeEventListener("mouseleave", D);
            }
          );
      }, [r, P, e, n, w, u, i, y, a, d, l, $, f]),
      qn(() => {
        if (!!r && a && w.current) {
          (Ut(f.floating.current).body.style.pointerEvents = "none"),
            (x.current = !0);
          const j = f.domReference.current,
            B = f.floating.current;
          if (l_(j) && B) {
            var z, D;
            const V =
              d == null ||
              (z = d.nodesRef.current.find((W) => W.id === p)) == null ||
              (D = z.context) == null
                ? void 0
                : D.refs.floating.current;
            return (
              V && (V.style.pointerEvents = ""),
              (j.style.pointerEvents = "auto"),
              (B.style.pointerEvents = "auto"),
              () => {
                (j.style.pointerEvents = ""), (B.style.pointerEvents = "");
              }
            );
          }
        }
      }, [r, a, p, f, d, w, u]),
      qn(() => {
        v && !a && ((m.current = void 0), $(), C());
      }),
      g.exports.useEffect(
        () => () => {
          $(),
            clearTimeout(h.current),
            clearTimeout(b.current),
            x.current && C();
        },
        [$, C]
      ),
      !r)
    )
      return {};
    function I(z) {
      m.current = z.pointerType;
    }
    return {
      reference: {
        onPointerDown: I,
        onPointerEnter: I,
        onMouseMove() {
          a ||
            l === 0 ||
            (clearTimeout(b.current),
            (b.current = setTimeout(() => {
              O.current || s(!0);
            }, l)));
        },
      },
      floating: {
        onMouseEnter() {
          clearTimeout(h.current);
        },
        onMouseLeave() {
          P(!1);
        },
      },
    };
  },
  s_ = g.exports.createContext({
    delay: 1e3,
    initialDelay: 1e3,
    currentId: null,
    setCurrentId: () => {},
    setState: () => {},
  }),
  u_ = () => g.exports.useContext(s_),
  M3 = (e) => {
    let { children: t, delay: r } = e;
    const [n, o] = g.exports.useState({
        delay: r,
        initialDelay: r,
        currentId: null,
      }),
      i = g.exports.useCallback((l) => {
        o((a) => ({ ...a, currentId: l }));
      }, []);
    return g.exports.createElement(
      s_.Provider,
      {
        value: g.exports.useMemo(
          () => ({ ...n, setState: o, setCurrentId: i }),
          [n, o, i]
        ),
      },
      t
    );
  },
  j3 = (e, t) => {
    let { open: r, onOpenChange: n } = e,
      { id: o } = t;
    const { currentId: i, initialDelay: l, setState: a } = u_(),
      s = Da(n);
    g.exports.useEffect(() => {
      i &&
        s.current &&
        (a((u) => ({ ...u, delay: { open: 1, close: Vl(l, "close") } })),
        i !== o && s.current(!1));
    }, [o, s, a, i, l]),
      g.exports.useEffect(() => {
        !r &&
          i === o &&
          s.current &&
          (s.current(!1), a((u) => ({ ...u, delay: l, currentId: null })));
      }, [r, a, i, o, s, l]);
  },
  L3 = function (e, t) {
    let { open: r } = e,
      { enabled: n = !0, role: o = "dialog" } = t === void 0 ? {} : t;
    const i = Jm(),
      l = Jm(),
      a = { id: i, role: o };
    return n
      ? o === "tooltip"
        ? { reference: { "aria-describedby": r ? i : void 0 }, floating: a }
        : {
            reference: {
              "aria-expanded": r ? "true" : "false",
              "aria-haspopup": o,
              "aria-controls": r ? i : void 0,
              ...(o === "listbox" && { role: "combobox" }),
              ...(o === "menu" && { id: l }),
            },
            floating: { ...a, ...(o === "menu" && { "aria-labelledby": l }) },
          }
      : {};
  };
function rc(e, t) {
  if (t == null) return !1;
  if ("composedPath" in e) return e.composedPath().includes(t);
  const r = e;
  return r.target != null && t.contains(r.target);
}
const F3 = function (e, t) {
    let { open: r, onOpenChange: n, refs: o, events: i, nodeId: l } = e,
      {
        enabled: a = !0,
        escapeKey: s = !0,
        outsidePointerDown: u = !0,
        referencePointerDown: c = !1,
        ancestorScroll: f = !1,
        bubbles: d = !0,
      } = t === void 0 ? {} : t;
    const p = qd(),
      y = Da(n),
      w = g.exports.useCallback(() => {
        var v;
        return (v = o.floating.current) == null
          ? void 0
          : v.contains(a_(Ut(o.floating.current)));
      }, [o]);
    return (
      g.exports.useEffect(() => {
        if (!r || !a) return;
        function v(O) {
          if (O.key === "Escape") {
            if (!d && !w()) return;
            i.emit("dismiss"),
              y.current(!1),
              l_(o.domReference.current) && o.domReference.current.focus();
          }
        }
        function m(O) {
          const x =
            p &&
            z3(p.nodesRef.current, l).some((P) => {
              var $;
              return rc(
                O,
                ($ = P.context) == null ? void 0 : $.refs.floating.current
              );
            });
          rc(O, o.floating.current) ||
            rc(O, o.domReference.current) ||
            x ||
            (!d && !w()) ||
            (i.emit("dismiss"), y.current(!1));
        }
        function h() {
          y.current(!1);
        }
        const _ = Ut(o.floating.current);
        s && _.addEventListener("keydown", v),
          u && _.addEventListener("mousedown", m);
        const b = (
          f
            ? [
                ...(za(o.reference.current) ? ln(o.reference.current) : []),
                ...(za(o.floating.current) ? ln(o.floating.current) : []),
              ]
            : []
        ).filter((O) => {
          var x;
          return (
            O !== ((x = _.defaultView) == null ? void 0 : x.visualViewport)
          );
        });
        return (
          b.forEach((O) => O.addEventListener("scroll", h, { passive: !0 })),
          () => {
            s && _.removeEventListener("keydown", v),
              u && _.removeEventListener("mousedown", m),
              b.forEach((O) => O.removeEventListener("scroll", h));
          }
        );
      }, [s, u, i, p, l, r, y, f, a, d, w, o]),
      a
        ? {
            reference: {
              onPointerDown() {
                c && (i.emit("dismiss"), n(!1));
              },
            },
          }
        : {}
    );
  },
  A3 = function (e, t) {
    let { open: r, onOpenChange: n, dataRef: o, refs: i, events: l } = e,
      { enabled: a = !0, keyboardOnly: s = !0 } = t === void 0 ? {} : t;
    const u = g.exports.useRef(""),
      c = g.exports.useRef(!1);
    return (
      g.exports.useEffect(() => {
        var f;
        if (!a) return;
        const d = Ut(i.floating.current),
          p = (f = d.defaultView) != null ? f : window;
        function y() {
          u.current && i.domReference.current === a_(d) && (c.current = !r);
        }
        function w() {
          setTimeout(() => {
            (c.current = !1), (u.current = "");
          });
        }
        return (
          p.addEventListener("focus", w),
          p.addEventListener("blur", y),
          () => {
            p.removeEventListener("focus", w), p.removeEventListener("blur", y);
          }
        );
      }, [i, r, a]),
      g.exports.useEffect(() => {
        if (!a) return;
        function f() {
          c.current = !0;
        }
        return (
          l.on("dismiss", f),
          () => {
            l.off("dismiss", f);
          }
        );
      }, [l, a]),
      a
        ? {
            reference: {
              onPointerDown(f) {
                let { pointerType: d } = f;
                (u.current = d), (c.current = !!(d && s));
              },
              onFocus(f) {
                var d, p, y;
                c.current ||
                  (f.type === "focus" &&
                    ((d = o.current.openEvent) == null ? void 0 : d.type) ===
                      "mousedown" &&
                    (p = i.domReference.current) != null &&
                    p.contains(
                      (y = o.current.openEvent) == null ? void 0 : y.target
                    )) ||
                  ((o.current.openEvent = f.nativeEvent), n(!0));
              },
              onBlur(f) {
                var d, p;
                const y = f.relatedTarget;
                ((d = i.floating.current) != null && d.contains(y)) ||
                  ((p = i.domReference.current) != null && p.contains(y)) ||
                  ((c.current = !1), n(!1));
              },
            },
          }
        : {}
    );
  };
function c_({ opened: e, floating: t, positionDependencies: r }) {
  const [n, o] = g.exports.useState(0);
  g.exports.useEffect(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return b3(t.refs.reference.current, t.refs.floating.current, t.update);
  }, [t.refs.reference, t.refs.floating, e, n]),
    kr(() => {
      t.update();
    }, r),
    kr(() => {
      o((i) => i + 1);
    }, [e]);
}
function V3(e) {
  const t = [Qw(e.offset)];
  return (
    e.middlewares.shift && t.push(Yd()), e.middlewares.flip && t.push(Kw()), t
  );
}
function H3(e) {
  const [t, r] = Li({
      value: e.opened,
      defaultValue: e.defaultOpened,
      finalValue: !1,
      onChange: e.onChange,
    }),
    n = () => {
      var l;
      (l = e.onClose) == null || l.call(e), r(!1);
    },
    o = () => {
      var l, a;
      t
        ? ((l = e.onClose) == null || l.call(e), r(!1))
        : ((a = e.onOpen) == null || a.call(e), r(!0));
    },
    i = Kd({
      placement: e.position,
      middleware: [
        ...V3(e),
        ...(e.width === "target"
          ? [
              s3({
                apply({ rects: l }) {
                  var a, s;
                  Object.assign(
                    (s =
                      (a = i.refs.floating.current) == null
                        ? void 0
                        : a.style) != null
                      ? s
                      : {},
                    { width: `${l.reference.width}px` }
                  );
                },
              }),
            ]
          : []),
      ],
    });
  return (
    c_({
      opened: e.opened,
      positionDependencies: e.positionDependencies,
      floating: i,
    }),
    kr(() => {
      var l;
      (l = e.onPositionChange) == null || l.call(e, i.placement);
    }, [i.placement]),
    {
      floating: i,
      controlled: typeof e.opened == "boolean",
      opened: t,
      onClose: n,
      onToggle: o,
    }
  );
}
const f_ = {
    context: "Popover component was not found in the tree",
    children:
      "Popover.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
  },
  [B3, d_] = Id(f_.context);
var W3 = Object.defineProperty,
  U3 = Object.defineProperties,
  G3 = Object.getOwnPropertyDescriptors,
  Ta = Object.getOwnPropertySymbols,
  p_ = Object.prototype.hasOwnProperty,
  g_ = Object.prototype.propertyIsEnumerable,
  ev = (e, t, r) =>
    t in e
      ? W3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  hl = (e, t) => {
    for (var r in t || (t = {})) p_.call(t, r) && ev(e, r, t[r]);
    if (Ta) for (var r of Ta(t)) g_.call(t, r) && ev(e, r, t[r]);
    return e;
  },
  Y3 = (e, t) => U3(e, G3(t)),
  X3 = (e, t) => {
    var r = {};
    for (var n in e) p_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ta)
      for (var n of Ta(e)) t.indexOf(n) < 0 && g_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const m_ = g.exports.forwardRef((e, t) => {
  var r = e,
    { children: n, refProp: o = "ref", popupType: i = "dialog" } = r,
    l = X3(r, ["children", "refProp", "popupType"]);
  if (!Ti(n)) throw new Error(f_.children);
  const a = l,
    s = d_(),
    u = pn(s.reference, n.ref, t),
    c = s.withRoles
      ? {
          "aria-haspopup": i,
          "aria-expanded": s.opened,
          "aria-controls": s.getDropdownId(),
          id: s.getTargetId(),
        }
      : {};
  return g.exports.cloneElement(
    n,
    hl(
      Y3(hl(hl(hl({}, a), c), s.targetProps), {
        className: y1(s.targetProps.className, a.className, n.props.className),
        [o]: u,
      }),
      s.controlled ? null : { onClick: s.onToggle }
    )
  );
});
m_.displayName = "@mantine/core/PopoverTarget";
var q3 = Q((e, { radius: t, shadow: r }) => ({
    dropdown: {
      position: "absolute",
      backgroundColor: e.white,
      background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
      border: `1px solid ${
        e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]
      }`,
      padding: `${e.spacing.sm}px ${e.spacing.md}px`,
      boxShadow: e.shadows[r] || r || "none",
      borderRadius: e.fn.radius(t),
      "&:focus": { outline: 0 },
    },
    arrow: {
      backgroundColor: "inherit",
      border: `1px solid ${
        e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]
      }`,
      zIndex: 1,
    },
  })),
  K3 = q3,
  Q3 = Object.defineProperty,
  tv = Object.getOwnPropertySymbols,
  Z3 = Object.prototype.hasOwnProperty,
  J3 = Object.prototype.propertyIsEnumerable,
  rv = (e, t, r) =>
    t in e
      ? Q3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  wn = (e, t) => {
    for (var r in t || (t = {})) Z3.call(t, r) && rv(e, r, t[r]);
    if (tv) for (var r of tv(t)) J3.call(t, r) && rv(e, r, t[r]);
    return e;
  };
const nv = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out",
};
function v_({ transition: e, state: t, duration: r, timingFunction: n }) {
  const o = { transitionDuration: `${r}ms`, transitionTimingFunction: n };
  return typeof e == "string"
    ? e in fl
      ? wn(
          wn(
            wn({ transitionProperty: fl[e].transitionProperty }, o),
            fl[e].common
          ),
          fl[e][nv[t]]
        )
      : null
    : wn(
        wn(wn({ transitionProperty: e.transitionProperty }, o), e.common),
        e[nv[t]]
      );
}
function h_({
  duration: e,
  exitDuration: t,
  timingFunction: r,
  mounted: n,
  onEnter: o,
  onExit: i,
  onEntered: l,
  onExited: a,
}) {
  const s = at(),
    u = K1(),
    c = s.respectReducedMotion ? u : !1,
    [f, d] = g.exports.useState(n ? "entered" : "exited");
  let p = c ? 0 : e;
  const y = g.exports.useRef(-1),
    w = (v) => {
      const m = v ? o : i,
        h = v ? l : a;
      if (
        (d(v ? "pre-entering" : "pre-exiting"),
        window.clearTimeout(y.current),
        (p = c ? 0 : v ? e : t),
        p === 0)
      )
        typeof m == "function" && m(),
          typeof h == "function" && h(),
          d(v ? "entered" : "exited");
      else {
        const _ = window.setTimeout(() => {
          typeof m == "function" && m(), d(v ? "entering" : "exiting");
        }, 10);
        y.current = window.setTimeout(() => {
          window.clearTimeout(_),
            typeof h == "function" && h(),
            d(v ? "entered" : "exited");
        }, p);
      }
    };
  return (
    kr(() => {
      w(n);
    }, [n]),
    g.exports.useEffect(() => () => window.clearTimeout(y.current), []),
    {
      transitionDuration: p,
      transitionStatus: f,
      transitionTimingFunction: r || s.transitionTimingFunction,
    }
  );
}
function pu({
  transition: e,
  duration: t = 250,
  exitDuration: r = t,
  mounted: n,
  children: o,
  timingFunction: i,
  onExit: l,
  onEntered: a,
  onEnter: s,
  onExited: u,
}) {
  const {
    transitionDuration: c,
    transitionStatus: f,
    transitionTimingFunction: d,
  } = h_({
    mounted: n,
    exitDuration: r,
    duration: t,
    timingFunction: i,
    onExit: l,
    onEntered: a,
    onEnter: s,
    onExited: u,
  });
  return c === 0
    ? n
      ? E.createElement(E.Fragment, null, o({}))
      : null
    : f === "exited"
    ? null
    : E.createElement(
        E.Fragment,
        null,
        o(v_({ transition: e, duration: c, state: f, timingFunction: d }))
      );
}
pu.displayName = "@mantine/core/Transition";
function y_({ children: e, active: t = !0, refProp: r = "ref" }) {
  const n = X1(t),
    o = pn(n, e?.ref);
  return Ti(e) ? g.exports.cloneElement(e, { [r]: o }) : e;
}
y_.displayName = "@mantine/core/FocusTrap";
var e5 = Object.defineProperty,
  t5 = Object.defineProperties,
  r5 = Object.getOwnPropertyDescriptors,
  ov = Object.getOwnPropertySymbols,
  n5 = Object.prototype.hasOwnProperty,
  o5 = Object.prototype.propertyIsEnumerable,
  iv = (e, t, r) =>
    t in e
      ? e5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  lr = (e, t) => {
    for (var r in t || (t = {})) n5.call(t, r) && iv(e, r, t[r]);
    if (ov) for (var r of ov(t)) o5.call(t, r) && iv(e, r, t[r]);
    return e;
  },
  yl = (e, t) => t5(e, r5(t));
function lv(e, t, r) {
  return e === "center"
    ? { top: `calc(50% - ${t / 2}px)` }
    : e === "end"
    ? { bottom: r }
    : e === "start"
    ? { top: r }
    : {};
}
function av(e, t, r, n) {
  return e === "center"
    ? { left: `calc(50% - ${t / 2}px)` }
    : e === "end"
    ? { [n === "ltr" ? "right" : "left"]: r }
    : e === "start"
    ? { [n === "ltr" ? "left" : "right"]: r }
    : {};
}
function i5({
  position: e,
  withBorder: t,
  arrowSize: r,
  arrowOffset: n,
  dir: o,
}) {
  const [i, l = "center"] = e.split("-"),
    a = {
      width: r,
      height: r,
      transform: "rotate(45deg)",
      position: "absolute",
    },
    s = t ? -r / 2 - 1 : -r / 2;
  return i === "left"
    ? yl(lr(lr({}, a), lv(l, r, n)), {
        [o === "ltr" ? "right" : "left"]: s,
        [o === "ltr" ? "borderLeft" : "borderRight"]: 0,
        borderBottom: 0,
      })
    : i === "right"
    ? yl(lr(lr({}, a), lv(l, r, n)), {
        [o === "ltr" ? "left" : "right"]: s,
        [o === "ltr" ? "borderRight" : "borderLeft"]: 0,
        borderTop: 0,
      })
    : i === "top"
    ? yl(lr(lr({}, a), av(l, r, n, o)), {
        bottom: s,
        borderTop: 0,
        [o === "ltr" ? "borderLeft" : "borderRight"]: 0,
      })
    : i === "bottom"
    ? yl(lr(lr({}, a), av(l, r, n, o)), {
        top: s,
        borderBottom: 0,
        [o === "ltr" ? "borderRight" : "borderLeft"]: 0,
      })
    : {};
}
var l5 = Object.defineProperty,
  a5 = Object.defineProperties,
  s5 = Object.getOwnPropertyDescriptors,
  Ma = Object.getOwnPropertySymbols,
  w_ = Object.prototype.hasOwnProperty,
  __ = Object.prototype.propertyIsEnumerable,
  sv = (e, t, r) =>
    t in e
      ? l5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  u5 = (e, t) => {
    for (var r in t || (t = {})) w_.call(t, r) && sv(e, r, t[r]);
    if (Ma) for (var r of Ma(t)) __.call(t, r) && sv(e, r, t[r]);
    return e;
  },
  c5 = (e, t) => a5(e, s5(t)),
  f5 = (e, t) => {
    var r = {};
    for (var n in e) w_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ma)
      for (var n of Ma(e)) t.indexOf(n) < 0 && __.call(e, n) && (r[n] = e[n]);
    return r;
  };
function Qd(e) {
  var t = e,
    {
      withBorder: r,
      position: n,
      arrowSize: o,
      arrowOffset: i,
      visible: l,
    } = t,
    a = f5(t, [
      "withBorder",
      "position",
      "arrowSize",
      "arrowOffset",
      "visible",
    ]);
  const s = at();
  return l
    ? E.createElement(
        "div",
        c5(u5({}, a), {
          style: i5({
            withBorder: r,
            position: n,
            arrowSize: o,
            arrowOffset: i,
            dir: s.dir,
          }),
        })
      )
    : null;
}
Qd.displayName = "@mantine/core/FloatingArrow";
var d5 = Object.defineProperty,
  p5 = Object.defineProperties,
  g5 = Object.getOwnPropertyDescriptors,
  ja = Object.getOwnPropertySymbols,
  S_ = Object.prototype.hasOwnProperty,
  b_ = Object.prototype.propertyIsEnumerable,
  uv = (e, t, r) =>
    t in e
      ? d5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  wl = (e, t) => {
    for (var r in t || (t = {})) S_.call(t, r) && uv(e, r, t[r]);
    if (ja) for (var r of ja(t)) b_.call(t, r) && uv(e, r, t[r]);
    return e;
  },
  cv = (e, t) => p5(e, g5(t)),
  m5 = (e, t) => {
    var r = {};
    for (var n in e) S_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ja)
      for (var n of ja(e)) t.indexOf(n) < 0 && b_.call(e, n) && (r[n] = e[n]);
    return r;
  };
function x_(e) {
  var t = e,
    { style: r, className: n, children: o } = t,
    i = m5(t, ["style", "className", "children"]);
  const { classNames: l, styles: a, unstyled: s, staticSelector: u } = dn(),
    c = d_(),
    { classes: f, cx: d } = K3(
      { radius: c.radius, shadow: c.shadow },
      { name: u, classNames: l, styles: a, unstyled: s }
    ),
    p = W1({ opened: c.opened, shouldReturnFocus: !1 }),
    y = c.withRoles
      ? {
          "aria-labelledby": c.getTargetId(),
          id: c.getDropdownId(),
          role: "dialog",
        }
      : {};
  return E.createElement(
    Fi,
    { withinPortal: c.withinPortal },
    E.createElement(
      pu,
      {
        mounted: c.opened,
        transition: c.transition,
        duration: c.transitionDuration,
        exitDuration:
          typeof c.exitTransitionDuration == "number"
            ? c.exitTransitionDuration
            : c.transitionDuration,
      },
      (w) => {
        var v, m;
        return E.createElement(
          y_,
          { active: c.trapFocus },
          E.createElement(
            q,
            wl(
              cv(wl({}, y), {
                tabIndex: -1,
                ref: c.floating,
                style: cv(wl(wl({}, r), w), {
                  zIndex: c.zIndex,
                  top: (v = c.y) != null ? v : "",
                  left: (m = c.x) != null ? m : "",
                  width: c.width === "target" ? void 0 : c.width,
                }),
                className: d(f.dropdown, n),
                onKeyDownCapture: I$(c.onClose, {
                  active: c.closeOnEscape,
                  onTrigger: p,
                }),
                "data-position": c.placement,
              }),
              i
            ),
            o,
            E.createElement(Qd, {
              visible: c.withArrow,
              withBorder: !0,
              position: c.placement,
              arrowSize: c.arrowSize,
              arrowOffset: c.arrowOffset,
              className: f.arrow,
            })
          )
        );
      }
    )
  );
}
x_.displayName = "@mantine/core/PopoverDropdown";
function P_(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [r, n] = t.split("-"),
      o = r === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return t;
}
var fv = Object.getOwnPropertySymbols,
  v5 = Object.prototype.hasOwnProperty,
  h5 = Object.prototype.propertyIsEnumerable,
  y5 = (e, t) => {
    var r = {};
    for (var n in e) v5.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && fv)
      for (var n of fv(e)) t.indexOf(n) < 0 && h5.call(e, n) && (r[n] = e[n]);
    return r;
  };
const w5 = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transition: "fade",
  transitionDuration: 150,
  middlewares: { flip: !0, shift: !0 },
  arrowSize: 7,
  arrowOffset: 5,
  closeOnClickOutside: !0,
  withinPortal: !1,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: io("popover"),
  __staticSelector: "Popover",
};
function nr(e) {
  const t = ee("Popover", w5, e),
    {
      children: r,
      position: n,
      offset: o,
      onPositionChange: i,
      positionDependencies: l,
      opened: a,
      transition: s,
      transitionDuration: u,
      width: c,
      middlewares: f,
      withArrow: d,
      arrowSize: p,
      arrowOffset: y,
      unstyled: w,
      classNames: v,
      styles: m,
      closeOnClickOutside: h,
      withinPortal: _,
      closeOnEscape: b,
      clickOutsideEvents: O,
      trapFocus: x,
      onClose: P,
      onOpen: $,
      onChange: C,
      zIndex: I,
      radius: z,
      shadow: D,
      id: j,
      defaultOpened: B,
      exitTransitionDuration: V,
      __staticSelector: W,
      withRoles: re,
    } = t,
    se = y5(t, [
      "children",
      "position",
      "offset",
      "onPositionChange",
      "positionDependencies",
      "opened",
      "transition",
      "transitionDuration",
      "width",
      "middlewares",
      "withArrow",
      "arrowSize",
      "arrowOffset",
      "unstyled",
      "classNames",
      "styles",
      "closeOnClickOutside",
      "withinPortal",
      "closeOnEscape",
      "clickOutsideEvents",
      "trapFocus",
      "onClose",
      "onOpen",
      "onChange",
      "zIndex",
      "radius",
      "shadow",
      "id",
      "defaultOpened",
      "exitTransitionDuration",
      "__staticSelector",
      "withRoles",
    ]),
    ie = lo(j),
    Ne = at(),
    R = H3({
      middlewares: f,
      width: c,
      position: P_(Ne.dir, n),
      offset: o + (d ? p / 2 : 0),
      onPositionChange: i,
      positionDependencies: l,
      opened: a,
      defaultOpened: B,
      onChange: C,
      onOpen: $,
      onClose: P,
    });
  return (
    XC(() => h && R.onClose(), O, [
      R.floating.refs.floating.current,
      R.floating.refs.reference.current,
    ]),
    E.createElement(
      V1,
      { classNames: v, styles: m, unstyled: w, staticSelector: W },
      E.createElement(
        B3,
        {
          value: {
            controlled: R.controlled,
            reference: R.floating.reference,
            floating: R.floating.floating,
            x: R.floating.x,
            y: R.floating.y,
            opened: R.opened,
            transition: s,
            transitionDuration: u,
            exitTransitionDuration: V,
            width: c,
            withArrow: d,
            arrowSize: p,
            arrowOffset: y,
            placement: R.floating.placement,
            trapFocus: x,
            withinPortal: _,
            zIndex: I,
            radius: z,
            shadow: D,
            closeOnEscape: b,
            onClose: R.onClose,
            onToggle: R.onToggle,
            getTargetId: () => `${ie}-target`,
            getDropdownId: () => `${ie}-dropdown`,
            withRoles: re,
            targetProps: se,
          },
        },
        r
      )
    )
  );
}
nr.Target = m_;
nr.Dropdown = x_;
nr.displayName = "@mantine/core/Popover";
var _5 = Object.defineProperty,
  La = Object.getOwnPropertySymbols,
  $_ = Object.prototype.hasOwnProperty,
  O_ = Object.prototype.propertyIsEnumerable,
  dv = (e, t, r) =>
    t in e
      ? _5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  S5 = (e, t) => {
    for (var r in t || (t = {})) $_.call(t, r) && dv(e, r, t[r]);
    if (La) for (var r of La(t)) O_.call(t, r) && dv(e, r, t[r]);
    return e;
  },
  b5 = (e, t) => {
    var r = {};
    for (var n in e) $_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && La)
      for (var n of La(e)) t.indexOf(n) < 0 && O_.call(e, n) && (r[n] = e[n]);
    return r;
  };
function x5(e) {
  var t = e,
    {
      children: r,
      component: n = "div",
      maxHeight: o = 220,
      direction: i = "column",
      id: l,
      innerRef: a,
    } = t,
    s = b5(t, [
      "children",
      "component",
      "maxHeight",
      "direction",
      "id",
      "innerRef",
    ]);
  return E.createElement(
    nr.Dropdown,
    S5({ p: 0, onMouseDown: (u) => u.preventDefault() }, s),
    E.createElement(
      "div",
      { style: { maxHeight: o, display: "flex" } },
      E.createElement(
        q,
        {
          component: n || "div",
          id: `${l}-items`,
          "aria-labelledby": `${l}-label`,
          role: "listbox",
          onMouseDown: (u) => u.preventDefault(),
          style: { flex: 1, overflowY: n !== Ud ? "auto" : void 0 },
          "data-combobox-popover": !0,
          ref: a,
        },
        E.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: i,
              width: "100%",
              padding: 4,
            },
          },
          r
        )
      )
    )
  );
}
function ii({
  opened: e,
  transition: t = "fade",
  transitionDuration: r = 0,
  shadow: n,
  withinPortal: o,
  children: i,
  __staticSelector: l,
  onDirectionChange: a,
  switchDirectionOnFlip: s,
  zIndex: u,
  dropdownPosition: c,
  positionDependencies: f = [],
  classNames: d,
  styles: p,
  unstyled: y,
}) {
  return E.createElement(
    nr,
    {
      unstyled: y,
      classNames: d,
      styles: p,
      width: "target",
      withRoles: !1,
      opened: e,
      middlewares: { flip: c === "flip", shift: !1 },
      position: c === "flip" ? "bottom" : c,
      positionDependencies: f,
      zIndex: u,
      __staticSelector: l,
      withinPortal: o,
      transition: t,
      transitionDuration: r,
      shadow: n,
      onPositionChange: (w) =>
        s && a?.(w === "top" ? "column-reverse" : "column"),
    },
    i
  );
}
ii.Target = nr.Target;
ii.Dropdown = x5;
var P5 = Object.defineProperty,
  $5 = Object.defineProperties,
  O5 = Object.getOwnPropertyDescriptors,
  Fa = Object.getOwnPropertySymbols,
  C_ = Object.prototype.hasOwnProperty,
  E_ = Object.prototype.propertyIsEnumerable,
  pv = (e, t, r) =>
    t in e
      ? P5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  nc = (e, t) => {
    for (var r in t || (t = {})) C_.call(t, r) && pv(e, r, t[r]);
    if (Fa) for (var r of Fa(t)) E_.call(t, r) && pv(e, r, t[r]);
    return e;
  },
  C5 = (e, t) => $5(e, O5(t)),
  E5 = (e, t) => {
    var r = {};
    for (var n in e) C_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Fa)
      for (var n of Fa(e)) t.indexOf(n) < 0 && E_.call(e, n) && (r[n] = e[n]);
    return r;
  };
function k_(e, t, r) {
  const n = ee(e, t, r),
    {
      label: o,
      description: i,
      error: l,
      required: a,
      classNames: s,
      styles: u,
      className: c,
      unstyled: f,
      __staticSelector: d,
      sx: p,
      errorProps: y,
      labelProps: w,
      descriptionProps: v,
      wrapperProps: m,
      id: h,
      size: _,
      style: b,
      inputContainer: O,
      inputWrapperOrder: x,
    } = n,
    P = E5(n, [
      "label",
      "description",
      "error",
      "required",
      "classNames",
      "styles",
      "className",
      "unstyled",
      "__staticSelector",
      "sx",
      "errorProps",
      "labelProps",
      "descriptionProps",
      "wrapperProps",
      "id",
      "size",
      "style",
      "inputContainer",
      "inputWrapperOrder",
    ]),
    $ = lo(h),
    { systemStyles: C, rest: I } = nu(P);
  return C5(nc({}, I), {
    classNames: s,
    styles: u,
    unstyled: f,
    wrapperProps: nc(
      nc(
        {
          label: o,
          description: i,
          error: l,
          required: a,
          classNames: s,
          className: c,
          __staticSelector: d,
          sx: p,
          errorProps: y,
          labelProps: w,
          descriptionProps: v,
          unstyled: f,
          styles: u,
          id: $,
          size: _,
          style: b,
          inputContainer: O,
          inputWrapperOrder: x,
        },
        m
      ),
      C
    ),
    inputProps: {
      required: a,
      classNames: s,
      styles: u,
      unstyled: f,
      id: $,
      size: _,
      __staticSelector: d,
      invalid: !!l,
    },
  });
}
var k5 = Q((e, { size: t }) => ({
    label: {
      display: "inline-block",
      fontSize: e.fn.size({ size: t, sizes: e.fontSizes }),
      fontWeight: 500,
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[9],
      wordBreak: "break-word",
      cursor: "default",
      WebkitTapHighlightColor: "transparent",
    },
    required: {
      color: e.fn.variant({ variant: "filled", color: "red" }).background,
    },
  })),
  R5 = k5,
  I5 = Object.defineProperty,
  Aa = Object.getOwnPropertySymbols,
  R_ = Object.prototype.hasOwnProperty,
  I_ = Object.prototype.propertyIsEnumerable,
  gv = (e, t, r) =>
    t in e
      ? I5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  N5 = (e, t) => {
    for (var r in t || (t = {})) R_.call(t, r) && gv(e, r, t[r]);
    if (Aa) for (var r of Aa(t)) I_.call(t, r) && gv(e, r, t[r]);
    return e;
  },
  z5 = (e, t) => {
    var r = {};
    for (var n in e) R_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Aa)
      for (var n of Aa(e)) t.indexOf(n) < 0 && I_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Zd = g.exports.forwardRef((e, t) => {
  var r = e,
    {
      labelElement: n = "label",
      children: o,
      required: i,
      size: l = "sm",
      classNames: a,
      styles: s,
      unstyled: u,
      className: c,
      htmlFor: f,
      __staticSelector: d,
    } = r,
    p = z5(r, [
      "labelElement",
      "children",
      "required",
      "size",
      "classNames",
      "styles",
      "unstyled",
      "className",
      "htmlFor",
      "__staticSelector",
    ]);
  const { classes: y, cx: w } = R5(
    { size: l },
    { name: ["InputWrapper", d], classNames: a, styles: s, unstyled: u }
  );
  return U(q, {
    ...N5(
      {
        component: n,
        ref: t,
        className: w(y.label, c),
        htmlFor: n === "label" ? f : void 0,
      },
      p
    ),
    children: [
      o,
      i &&
        S("span", { className: y.required, "aria-hidden": !0, children: " *" }),
    ],
  });
});
Zd.displayName = "@mantine/core/InputLabel";
var D5 = Q((e, { size: t }) => ({
    error: {
      wordBreak: "break-word",
      color: e.fn.variant({ variant: "filled", color: "red" }).background,
      fontSize: e.fn.size({ size: t, sizes: e.fontSizes }) - 2,
      lineHeight: 1.2,
      display: "block",
    },
  })),
  T5 = D5,
  M5 = Object.defineProperty,
  Va = Object.getOwnPropertySymbols,
  N_ = Object.prototype.hasOwnProperty,
  z_ = Object.prototype.propertyIsEnumerable,
  mv = (e, t, r) =>
    t in e
      ? M5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  j5 = (e, t) => {
    for (var r in t || (t = {})) N_.call(t, r) && mv(e, r, t[r]);
    if (Va) for (var r of Va(t)) z_.call(t, r) && mv(e, r, t[r]);
    return e;
  },
  L5 = (e, t) => {
    var r = {};
    for (var n in e) N_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Va)
      for (var n of Va(e)) t.indexOf(n) < 0 && z_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Jd = g.exports.forwardRef((e, t) => {
  var r = e,
    {
      children: n,
      className: o,
      classNames: i,
      styles: l,
      unstyled: a,
      size: s = "sm",
      __staticSelector: u,
    } = r,
    c = L5(r, [
      "children",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "size",
      "__staticSelector",
    ]);
  const { classes: f, cx: d } = T5(
    { size: s },
    { name: ["InputWrapper", u], classNames: i, styles: l, unstyled: a }
  );
  return S(mt, {
    ...j5({ className: d(f.error, o), ref: t, role: "alert" }, c),
    children: n,
  });
});
Jd.displayName = "@mantine/core/InputError";
var F5 = Q((e, { size: t }) => ({
    description: {
      wordBreak: "break-word",
      color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
      fontSize: e.fn.size({ size: t, sizes: e.fontSizes }) - 2,
      lineHeight: 1.2,
      display: "block",
    },
  })),
  A5 = F5,
  V5 = Object.defineProperty,
  Ha = Object.getOwnPropertySymbols,
  D_ = Object.prototype.hasOwnProperty,
  T_ = Object.prototype.propertyIsEnumerable,
  vv = (e, t, r) =>
    t in e
      ? V5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  H5 = (e, t) => {
    for (var r in t || (t = {})) D_.call(t, r) && vv(e, r, t[r]);
    if (Ha) for (var r of Ha(t)) T_.call(t, r) && vv(e, r, t[r]);
    return e;
  },
  B5 = (e, t) => {
    var r = {};
    for (var n in e) D_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ha)
      for (var n of Ha(e)) t.indexOf(n) < 0 && T_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const ep = g.exports.forwardRef((e, t) => {
  var r = e,
    {
      children: n,
      className: o,
      classNames: i,
      styles: l,
      unstyled: a,
      size: s = "sm",
      __staticSelector: u,
    } = r,
    c = B5(r, [
      "children",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "size",
      "__staticSelector",
    ]);
  const { classes: f, cx: d } = A5(
    { size: s },
    { name: ["InputWrapper", u], classNames: i, styles: l, unstyled: a }
  );
  return S(mt, {
    ...H5(
      { color: "dimmed", className: d(f.description, o), ref: t, unstyled: a },
      c
    ),
    children: n,
  });
});
ep.displayName = "@mantine/core/InputDescription";
const M_ = g.exports.createContext({ offsetBottom: !1, offsetTop: !1 }),
  W5 = M_.Provider,
  U5 = () => g.exports.useContext(M_);
function G5(e, { hasDescription: t, hasError: r }) {
  const n = e.findIndex((s) => s === "input"),
    o = e[n - 1],
    i = e[n + 1];
  return {
    offsetBottom: (t && i === "description") || (r && i === "error"),
    offsetTop: (t && o === "description") || (r && o === "error"),
  };
}
var Y5 = Object.defineProperty,
  X5 = Object.defineProperties,
  q5 = Object.getOwnPropertyDescriptors,
  hv = Object.getOwnPropertySymbols,
  K5 = Object.prototype.hasOwnProperty,
  Q5 = Object.prototype.propertyIsEnumerable,
  yv = (e, t, r) =>
    t in e
      ? Y5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Z5 = (e, t) => {
    for (var r in t || (t = {})) K5.call(t, r) && yv(e, r, t[r]);
    if (hv) for (var r of hv(t)) Q5.call(t, r) && yv(e, r, t[r]);
    return e;
  },
  J5 = (e, t) => X5(e, q5(t)),
  eR = Q((e) => ({
    root: J5(Z5({}, e.fn.fontStyles()), { lineHeight: e.lineHeight }),
  })),
  tR = eR,
  rR = Object.defineProperty,
  nR = Object.defineProperties,
  oR = Object.getOwnPropertyDescriptors,
  Ba = Object.getOwnPropertySymbols,
  j_ = Object.prototype.hasOwnProperty,
  L_ = Object.prototype.propertyIsEnumerable,
  wv = (e, t, r) =>
    t in e
      ? rR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Vr = (e, t) => {
    for (var r in t || (t = {})) j_.call(t, r) && wv(e, r, t[r]);
    if (Ba) for (var r of Ba(t)) L_.call(t, r) && wv(e, r, t[r]);
    return e;
  },
  iR = (e, t) => nR(e, oR(t)),
  lR = (e, t) => {
    var r = {};
    for (var n in e) j_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ba)
      for (var n of Ba(e)) t.indexOf(n) < 0 && L_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const aR = {
    labelElement: "label",
    size: "sm",
    inputContainer: (e) => e,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  F_ = g.exports.forwardRef((e, t) => {
    const r = ee("InputWrapper", aR, e),
      {
        className: n,
        label: o,
        children: i,
        required: l,
        id: a,
        error: s,
        description: u,
        labelElement: c,
        labelProps: f,
        descriptionProps: d,
        errorProps: p,
        classNames: y,
        styles: w,
        size: v,
        inputContainer: m,
        __staticSelector: h,
        unstyled: _,
        inputWrapperOrder: b,
      } = r,
      O = lR(r, [
        "className",
        "label",
        "children",
        "required",
        "id",
        "error",
        "description",
        "labelElement",
        "labelProps",
        "descriptionProps",
        "errorProps",
        "classNames",
        "styles",
        "size",
        "inputContainer",
        "__staticSelector",
        "unstyled",
        "inputWrapperOrder",
      ]),
      { classes: x, cx: P } = tR(null, {
        classNames: y,
        styles: w,
        name: ["InputWrapper", h],
        unstyled: _,
      }),
      $ = {
        classNames: y,
        styles: w,
        unstyled: _,
        size: v,
        __staticSelector: h,
      },
      C =
        o &&
        S(Zd, {
          ...Vr(
            Vr(
              {
                key: "label",
                labelElement: c,
                id: a ? `${a}-label` : void 0,
                htmlFor: a,
                required: l,
              },
              $
            ),
            f
          ),
          children: o,
        }),
      I = u && S(ep, { ...Vr(Vr({ key: "description" }, $), d), children: u }),
      z = S(it, { children: m(i) }),
      D =
        typeof s != "boolean" &&
        s &&
        S(Jd, { ...Vr(iR(Vr({}, p), { key: "error" }), $), children: s }),
      j = b.map((B) => {
        switch (B) {
          case "label":
            return C;
          case "input":
            return z;
          case "description":
            return I;
          case "error":
            return D;
          default:
            return null;
        }
      });
    return S(W5, {
      value: G5(b, { hasDescription: !!I, hasError: !!D }),
      children: S(q, {
        ...Vr({ className: P(x.root, n), ref: t }, O),
        children: j,
      }),
    });
  });
F_.displayName = "@mantine/core/InputWrapper";
var sR = Object.defineProperty,
  uR = Object.defineProperties,
  cR = Object.getOwnPropertyDescriptors,
  _v = Object.getOwnPropertySymbols,
  fR = Object.prototype.hasOwnProperty,
  dR = Object.prototype.propertyIsEnumerable,
  Sv = (e, t, r) =>
    t in e
      ? sR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  oc = (e, t) => {
    for (var r in t || (t = {})) fR.call(t, r) && Sv(e, r, t[r]);
    if (_v) for (var r of _v(t)) dR.call(t, r) && Sv(e, r, t[r]);
    return e;
  },
  bv = (e, t) => uR(e, cR(t));
const ut = { xs: 30, sm: 36, md: 42, lg: 50, xl: 60 };
function pR({ theme: e, variant: t }) {
  return t === "default"
    ? {
        border: `1px solid ${
          e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]
        }`,
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
        transition: "border-color 100ms ease",
        "&:focus, &:focus-within": {
          outline: "none",
          borderColor: e.colors[e.primaryColor][e.fn.primaryShade()],
        },
      }
    : t === "filled"
    ? {
        border: "1px solid transparent",
        backgroundColor:
          e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1],
        "&:focus, &:focus-within": {
          outline: "none",
          borderColor: `${
            e.colors[e.primaryColor][e.fn.primaryShade()]
          } !important`,
        },
      }
    : {
        borderWidth: 0,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        backgroundColor: "transparent",
        minHeight: 28,
        outline: 0,
        "&:focus, &:focus-within": {
          outline: "none",
          borderColor: "transparent",
        },
        "&:disabled": {
          backgroundColor: "transparent",
          "&:focus, &:focus-within": {
            outline: "none",
            borderColor: "transparent",
          },
        },
      };
}
var gR = Q(
    (
      e,
      {
        size: t,
        multiline: r,
        radius: n,
        variant: o,
        invalid: i,
        rightSectionWidth: l,
        withRightSection: a,
        iconWidth: s,
        offsetBottom: u,
        offsetTop: c,
        pointer: f,
      }
    ) => {
      const d = e.fn.variant({ variant: "filled", color: "red" }).background,
        p =
          o === "default" || o === "filled"
            ? {
                minHeight: e.fn.size({ size: t, sizes: ut }),
                paddingLeft: e.fn.size({ size: t, sizes: ut }) / 3,
                paddingRight: a ? l : e.fn.size({ size: t, sizes: ut }) / 3,
                borderRadius: e.fn.radius(n),
              }
            : null;
      return {
        wrapper: {
          position: "relative",
          marginTop: c ? e.spacing.xs / 2 : void 0,
          marginBottom: u ? e.spacing.xs / 2 : void 0,
        },
        input: oc(
          bv(
            oc(
              bv(oc({}, e.fn.fontStyles()), {
                height: r
                  ? o === "unstyled"
                    ? void 0
                    : "auto"
                  : e.fn.size({ size: t, sizes: ut }),
                WebkitTapHighlightColor: "transparent",
                lineHeight: r
                  ? e.lineHeight
                  : `${e.fn.size({ size: t, sizes: ut }) - 2}px`,
                appearance: "none",
                resize: "none",
                boxSizing: "border-box",
                fontSize: e.fn.size({ size: t, sizes: e.fontSizes }),
                width: "100%",
                color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
                display: "block",
                textAlign: "left",
                cursor: f ? "pointer" : void 0,
              }),
              p
            ),
            {
              "&:disabled": {
                backgroundColor:
                  e.colorScheme === "dark"
                    ? e.colors.dark[6]
                    : e.colors.gray[1],
                color: e.colors.dark[2],
                opacity: 0.6,
                cursor: "not-allowed",
                "&::placeholder": { color: e.colors.dark[2] },
              },
              "&::placeholder": {
                opacity: 1,
                userSelect: "none",
                color:
                  e.colorScheme === "dark"
                    ? e.colors.dark[3]
                    : e.colors.gray[5],
              },
              "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
                { appearance: "none" },
              "&[type=number]": { MozAppearance: "textfield" },
            }
          ),
          pR({ theme: e, variant: o })
        ),
        withIcon: {
          paddingLeft:
            typeof s == "number" ? s : e.fn.size({ size: t, sizes: ut }),
        },
        invalid: {
          color: d,
          borderColor: d,
          "&::placeholder": { opacity: 1, color: d },
        },
        disabled: {
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[1],
          color: e.colors.dark[2],
          opacity: 0.6,
          cursor: "not-allowed",
          "&::placeholder": { color: e.colors.dark[2] },
        },
        icon: {
          pointerEvents: "none",
          position: "absolute",
          zIndex: 1,
          left: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: typeof s == "number" ? s : e.fn.size({ size: t, sizes: ut }),
          color: i
            ? e.colors.red[e.colorScheme === "dark" ? 6 : 7]
            : e.colorScheme === "dark"
            ? e.colors.dark[2]
            : e.colors.gray[5],
        },
        rightSection: {
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: l,
        },
      };
    }
  ),
  mR = gR,
  vR = Object.defineProperty,
  hR = Object.defineProperties,
  yR = Object.getOwnPropertyDescriptors,
  Wa = Object.getOwnPropertySymbols,
  A_ = Object.prototype.hasOwnProperty,
  V_ = Object.prototype.propertyIsEnumerable,
  xv = (e, t, r) =>
    t in e
      ? vR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  _l = (e, t) => {
    for (var r in t || (t = {})) A_.call(t, r) && xv(e, r, t[r]);
    if (Wa) for (var r of Wa(t)) V_.call(t, r) && xv(e, r, t[r]);
    return e;
  },
  Pv = (e, t) => hR(e, yR(t)),
  wR = (e, t) => {
    var r = {};
    for (var n in e) A_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Wa)
      for (var n of Wa(e)) t.indexOf(n) < 0 && V_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const _R = { rightSectionWidth: 36, size: "sm", variant: "default" },
  so = g.exports.forwardRef((e, t) => {
    const r = ee("Input", _R, e),
      {
        className: n,
        invalid: o,
        required: i,
        disabled: l,
        variant: a,
        icon: s,
        style: u,
        rightSectionWidth: c,
        iconWidth: f,
        rightSection: d,
        rightSectionProps: p,
        radius: y,
        size: w,
        wrapperProps: v,
        classNames: m,
        styles: h,
        __staticSelector: _,
        multiline: b,
        sx: O,
        unstyled: x,
        pointer: P,
      } = r,
      $ = wR(r, [
        "className",
        "invalid",
        "required",
        "disabled",
        "variant",
        "icon",
        "style",
        "rightSectionWidth",
        "iconWidth",
        "rightSection",
        "rightSectionProps",
        "radius",
        "size",
        "wrapperProps",
        "classNames",
        "styles",
        "__staticSelector",
        "multiline",
        "sx",
        "unstyled",
        "pointer",
      ]),
      { offsetBottom: C, offsetTop: I } = U5(),
      { classes: z, cx: D } = mR(
        {
          radius: y,
          size: w,
          multiline: b,
          variant: a,
          invalid: o,
          rightSectionWidth: c,
          iconWidth: f,
          withRightSection: !!d,
          offsetBottom: C,
          offsetTop: I,
          pointer: P,
        },
        { classNames: m, styles: h, name: ["Input", _], unstyled: x }
      ),
      { systemStyles: j, rest: B } = nu($);
    return U(q, {
      ..._l(_l({ className: D(z.wrapper, n), sx: O, style: u }, j), v),
      children: [
        s && S("div", { className: z.icon, children: s }),
        S(q, {
          ...Pv(_l({ component: "input" }, B), {
            ref: t,
            required: i,
            "aria-invalid": o,
            disabled: l,
            className: D(z[`${a}Variant`], z.input, {
              [z.withIcon]: s,
              [z.invalid]: o,
              [z.disabled]: l,
            }),
          }),
        }),
        d &&
          S("div", {
            ...Pv(_l({}, p), { className: z.rightSection }),
            children: d,
          }),
      ],
    });
  });
so.displayName = "@mantine/core/Input";
so.Wrapper = F_;
so.Label = Zd;
so.Description = ep;
so.Error = Jd;
const Ua = so;
var SR = Q((e, { orientation: t, buttonBorderWidth: r }) => ({
    root: {
      display: "flex",
      flexDirection: t === "vertical" ? "column" : "row",
      "& [data-button]": {
        "&:first-of-type": {
          borderBottomRightRadius: 0,
          [t === "vertical"
            ? "borderBottomLeftRadius"
            : "borderTopRightRadius"]: 0,
          [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: r / 2,
        },
        "&:last-of-type": {
          borderTopLeftRadius: 0,
          [t === "vertical"
            ? "borderTopRightRadius"
            : "borderBottomLeftRadius"]: 0,
          [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: r / 2,
        },
        "&:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0,
          [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: r / 2,
          [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: r / 2,
        },
        "& + [data-button]": {
          [t === "vertical" ? "marginTop" : "marginLeft"]: -r,
          "@media (min-resolution: 192dpi)": {
            [t === "vertical" ? "marginTop" : "marginLeft"]: 0,
          },
        },
      },
    },
  })),
  bR = SR,
  xR = Object.defineProperty,
  Ga = Object.getOwnPropertySymbols,
  H_ = Object.prototype.hasOwnProperty,
  B_ = Object.prototype.propertyIsEnumerable,
  $v = (e, t, r) =>
    t in e
      ? xR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  PR = (e, t) => {
    for (var r in t || (t = {})) H_.call(t, r) && $v(e, r, t[r]);
    if (Ga) for (var r of Ga(t)) B_.call(t, r) && $v(e, r, t[r]);
    return e;
  },
  $R = (e, t) => {
    var r = {};
    for (var n in e) H_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ga)
      for (var n of Ga(e)) t.indexOf(n) < 0 && B_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const OR = { orientation: "horizontal", buttonBorderWidth: 1 },
  W_ = g.exports.forwardRef((e, t) => {
    const r = ee("ButtonGroup", OR, e),
      { className: n, orientation: o, buttonBorderWidth: i, unstyled: l } = r,
      a = $R(r, ["className", "orientation", "buttonBorderWidth", "unstyled"]),
      { classes: s, cx: u } = bR(
        { orientation: o, buttonBorderWidth: i },
        { name: "ButtonGroup", unstyled: l }
      );
    return S(q, { ...PR({ className: u(s.root, n), ref: t }, a) });
  });
W_.displayName = "@mantine/core/ButtonGroup";
var CR = Object.defineProperty,
  ER = Object.defineProperties,
  kR = Object.getOwnPropertyDescriptors,
  Ov = Object.getOwnPropertySymbols,
  RR = Object.prototype.hasOwnProperty,
  IR = Object.prototype.propertyIsEnumerable,
  Cv = (e, t, r) =>
    t in e
      ? CR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Gr = (e, t) => {
    for (var r in t || (t = {})) RR.call(t, r) && Cv(e, r, t[r]);
    if (Ov) for (var r of Ov(t)) IR.call(t, r) && Cv(e, r, t[r]);
    return e;
  },
  wf = (e, t) => ER(e, kR(t));
const _f = {
  xs: { height: ut.xs, paddingLeft: 14, paddingRight: 14 },
  sm: { height: ut.sm, paddingLeft: 18, paddingRight: 18 },
  md: { height: ut.md, paddingLeft: 22, paddingRight: 22 },
  lg: { height: ut.lg, paddingLeft: 26, paddingRight: 26 },
  xl: { height: ut.xl, paddingLeft: 32, paddingRight: 32 },
  "compact-xs": { height: 22, paddingLeft: 7, paddingRight: 7 },
  "compact-sm": { height: 26, paddingLeft: 8, paddingRight: 8 },
  "compact-md": { height: 30, paddingLeft: 10, paddingRight: 10 },
  "compact-lg": { height: 34, paddingLeft: 12, paddingRight: 12 },
  "compact-xl": { height: 40, paddingLeft: 14, paddingRight: 14 },
};
function NR({ compact: e, size: t, withLeftIcon: r, withRightIcon: n }) {
  if (e) return _f[`compact-${t}`];
  const o = _f[t];
  return wf(Gr({}, o), {
    paddingLeft: r ? o.paddingLeft / 1.5 : o.paddingLeft,
    paddingRight: n ? o.paddingRight / 1.5 : o.paddingRight,
  });
}
const zR = (e) => ({
  display: e ? "block" : "inline-block",
  width: e ? "100%" : "auto",
});
function DR({ variant: e, theme: t, color: r, gradient: n }) {
  const o = t.fn.variant({ color: r, variant: e, gradient: n });
  return e === "gradient"
    ? {
        border: 0,
        backgroundImage: o.background,
        color: o.color,
        "&:hover": t.fn.hover({ backgroundSize: "200%" }),
      }
    : Gr(
        {
          border: `1px solid ${o.border}`,
          backgroundColor: o.background,
          color: o.color,
        },
        t.fn.hover({ backgroundColor: o.hover })
      );
}
var TR = Q(
    (
      e,
      {
        color: t,
        size: r,
        radius: n,
        fullWidth: o,
        compact: i,
        gradient: l,
        variant: a,
        withLeftIcon: s,
        withRightIcon: u,
      }
    ) => ({
      root: wf(
        Gr(
          wf(
            Gr(
              Gr(
                Gr(
                  Gr(
                    {},
                    NR({
                      compact: i,
                      size: r,
                      withLeftIcon: s,
                      withRightIcon: u,
                    })
                  ),
                  e.fn.fontStyles()
                ),
                e.fn.focusStyles()
              ),
              zR(o)
            ),
            {
              borderRadius: e.fn.radius(n),
              fontWeight: 600,
              position: "relative",
              lineHeight: 1,
              fontSize: e.fn.size({ size: r, sizes: e.fontSizes }),
              userSelect: "none",
              cursor: "pointer",
            }
          ),
          DR({ variant: a, theme: e, color: t, gradient: l })
        ),
        {
          "&:active": e.activeStyles,
          "&[data-disabled]": {
            borderColor: "transparent",
            backgroundColor:
              e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
            color:
              e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[5],
            cursor: "not-allowed",
            "&:active": { transform: "none" },
          },
          "&[data-loading]": {
            pointerEvents: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              top: -1,
              left: -1,
              right: -1,
              bottom: -1,
              backgroundColor:
                e.colorScheme === "dark"
                  ? e.fn.rgba(e.colors.dark[7], 0.5)
                  : "rgba(255, 255, 255, .5)",
              borderRadius: e.fn.radius(n),
              cursor: "not-allowed",
            },
          },
        }
      ),
      icon: { display: "flex", alignItems: "center" },
      leftIcon: { marginRight: 10 },
      rightIcon: { marginLeft: 10 },
      inner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflow: "visible",
      },
      label: {
        whiteSpace: "nowrap",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      },
    })
  ),
  MR = TR,
  jR = Object.defineProperty,
  Ya = Object.getOwnPropertySymbols,
  U_ = Object.prototype.hasOwnProperty,
  G_ = Object.prototype.propertyIsEnumerable,
  Ev = (e, t, r) =>
    t in e
      ? jR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  kv = (e, t) => {
    for (var r in t || (t = {})) U_.call(t, r) && Ev(e, r, t[r]);
    if (Ya) for (var r of Ya(t)) G_.call(t, r) && Ev(e, r, t[r]);
    return e;
  },
  LR = (e, t) => {
    var r = {};
    for (var n in e) U_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ya)
      for (var n of Ya(e)) t.indexOf(n) < 0 && G_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const FR = {
    size: "sm",
    type: "button",
    variant: "filled",
    loaderPosition: "left",
  },
  tp = g.exports.forwardRef((e, t) => {
    const r = ee("Button", FR, e),
      {
        className: n,
        size: o,
        color: i,
        type: l,
        disabled: a,
        children: s,
        leftIcon: u,
        rightIcon: c,
        fullWidth: f,
        variant: d,
        radius: p,
        uppercase: y,
        compact: w,
        loading: v,
        loaderPosition: m,
        loaderProps: h,
        gradient: _,
        classNames: b,
        styles: O,
        unstyled: x,
      } = r,
      P = LR(r, [
        "className",
        "size",
        "color",
        "type",
        "disabled",
        "children",
        "leftIcon",
        "rightIcon",
        "fullWidth",
        "variant",
        "radius",
        "uppercase",
        "compact",
        "loading",
        "loaderPosition",
        "loaderProps",
        "gradient",
        "classNames",
        "styles",
        "unstyled",
      ]),
      {
        classes: $,
        cx: C,
        theme: I,
      } = MR(
        {
          radius: p,
          color: i,
          size: o,
          fullWidth: f,
          compact: w,
          gradient: _,
          variant: d,
          withLeftIcon: !!u,
          withRightIcon: !!c,
        },
        { name: "Button", unstyled: x, classNames: b, styles: O }
      ),
      z = I.fn.variant({ color: i, variant: d }),
      D = S(Bd, {
        ...kv(
          {
            color: z.color,
            size: I.fn.size({ size: o, sizes: _f }).height / 2,
          },
          h
        ),
      });
    return S(ou, {
      ...kv(
        {
          className: C($.root, n),
          type: l,
          disabled: a || v,
          "data-button": !0,
          "data-disabled": a || void 0,
          "data-loading": v || void 0,
          ref: t,
          unstyled: x,
        },
        P
      ),
      children: U("div", {
        className: $.inner,
        children: [
          (u || (v && m === "left")) &&
            S("span", {
              className: C($.icon, $.leftIcon),
              children: v && m === "left" ? D : u,
            }),
          S("span", {
            className: $.label,
            style: { textTransform: y ? "uppercase" : void 0 },
            children: s,
          }),
          (c || (v && m === "right")) &&
            S("span", {
              className: C($.icon, $.rightIcon),
              children: v && m === "right" ? D : c,
            }),
        ],
      }),
    });
  });
tp.displayName = "@mantine/core/Button";
tp.Group = W_;
const Kn = tp;
var AR = Q((e, { radius: t, shadow: r, withBorder: n }) => ({
    root: {
      outline: 0,
      WebkitTapHighlightColor: "transparent",
      display: "block",
      textDecoration: "none",
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
      boxSizing: "border-box",
      borderRadius: e.fn.radius(t),
      boxShadow: e.shadows[r] || r || "none",
      border: n
        ? `1px solid ${
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]
          }`
        : void 0,
    },
  })),
  VR = AR,
  HR = Object.defineProperty,
  Xa = Object.getOwnPropertySymbols,
  Y_ = Object.prototype.hasOwnProperty,
  X_ = Object.prototype.propertyIsEnumerable,
  Rv = (e, t, r) =>
    t in e
      ? HR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  BR = (e, t) => {
    for (var r in t || (t = {})) Y_.call(t, r) && Rv(e, r, t[r]);
    if (Xa) for (var r of Xa(t)) X_.call(t, r) && Rv(e, r, t[r]);
    return e;
  },
  WR = (e, t) => {
    var r = {};
    for (var n in e) Y_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Xa)
      for (var n of Xa(e)) t.indexOf(n) < 0 && X_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const UR = {},
  q_ = g.exports.forwardRef((e, t) => {
    const r = ee("Paper", UR, e),
      {
        className: n,
        children: o,
        radius: i,
        withBorder: l,
        shadow: a,
        unstyled: s,
      } = r,
      u = WR(r, [
        "className",
        "children",
        "radius",
        "withBorder",
        "shadow",
        "unstyled",
      ]),
      { classes: c, cx: f } = VR(
        { radius: i, shadow: a, withBorder: l },
        { name: "Paper", unstyled: s }
      );
    return S(q, { ...BR({ className: f(c.root, n), ref: t }, u), children: o });
  });
q_.displayName = "@mantine/core/Paper";
const GR = q_;
var YR = Object.defineProperty,
  qa = Object.getOwnPropertySymbols,
  K_ = Object.prototype.hasOwnProperty,
  Q_ = Object.prototype.propertyIsEnumerable,
  Iv = (e, t, r) =>
    t in e
      ? YR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  XR = (e, t) => {
    for (var r in t || (t = {})) K_.call(t, r) && Iv(e, r, t[r]);
    if (qa) for (var r of qa(t)) Q_.call(t, r) && Iv(e, r, t[r]);
    return e;
  },
  qR = (e, t) => {
    var r = {};
    for (var n in e) K_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && qa)
      for (var n of qa(e)) t.indexOf(n) < 0 && Q_.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Z_ = g.exports.forwardRef((e, t) => {
  const r = ee("Center", {}, e),
    { inline: n, sx: o } = r,
    i = qR(r, ["inline", "sx"]);
  return S(q, {
    ...XR(
      {
        ref: t,
        sx: [
          {
            display: n ? "inline-flex" : "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          ...Si(o),
        ],
      },
      i
    ),
  });
});
Z_.displayName = "@mantine/core/Center";
const J_ = Z_;
function KR(e) {
  return g.exports.Children.toArray(e).filter(Boolean);
}
const eS = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between",
};
var QR = Q(
    (
      e,
      { spacing: t, position: r, noWrap: n, grow: o, align: i, count: l }
    ) => ({
      root: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: i || "center",
        flexWrap: n ? "nowrap" : "wrap",
        justifyContent: eS[r],
        gap: e.fn.size({ size: t, sizes: e.spacing }),
      },
      child: {
        boxSizing: "border-box",
        maxWidth: o
          ? `calc(${100 / l}% - ${
              e.fn.size({ size: t, sizes: e.spacing }) -
              e.fn.size({ size: t, sizes: e.spacing }) / l
            }px)`
          : void 0,
        flexGrow: o ? 1 : 0,
      },
    })
  ),
  ZR = QR,
  JR = Object.defineProperty,
  Ka = Object.getOwnPropertySymbols,
  tS = Object.prototype.hasOwnProperty,
  rS = Object.prototype.propertyIsEnumerable,
  Nv = (e, t, r) =>
    t in e
      ? JR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  e4 = (e, t) => {
    for (var r in t || (t = {})) tS.call(t, r) && Nv(e, r, t[r]);
    if (Ka) for (var r of Ka(t)) rS.call(t, r) && Nv(e, r, t[r]);
    return e;
  },
  t4 = (e, t) => {
    var r = {};
    for (var n in e) tS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ka)
      for (var n of Ka(e)) t.indexOf(n) < 0 && rS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const r4 = { position: "left", spacing: "md" },
  jt = g.exports.forwardRef((e, t) => {
    const r = ee("Group", r4, e),
      {
        className: n,
        position: o,
        align: i,
        children: l,
        noWrap: a,
        grow: s,
        spacing: u,
        unstyled: c,
      } = r,
      f = t4(r, [
        "className",
        "position",
        "align",
        "children",
        "noWrap",
        "grow",
        "spacing",
        "unstyled",
      ]),
      d = KR(l),
      { classes: p, cx: y } = ZR(
        {
          align: i,
          grow: s,
          noWrap: a,
          spacing: u,
          position: o,
          count: d.length,
        },
        { unstyled: c, name: "Group" }
      ),
      w = d.map((v) => {
        var m;
        return typeof v == "object" && v !== null && "props" in v
          ? E.cloneElement(v, {
              className: y(
                p.child,
                (m = v.props) == null ? void 0 : m.className
              ),
            })
          : v;
      });
    return S(q, { ...e4({ className: y(p.root, n), ref: t }, f), children: w });
  });
jt.displayName = "@mantine/core/Group";
var n4 = Q((e, { spacing: t, align: r, justify: n }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: r,
      justifyContent: n,
      gap: e.fn.size({ size: t, sizes: e.spacing }),
    },
  })),
  o4 = n4,
  i4 = Object.defineProperty,
  Qa = Object.getOwnPropertySymbols,
  nS = Object.prototype.hasOwnProperty,
  oS = Object.prototype.propertyIsEnumerable,
  zv = (e, t, r) =>
    t in e
      ? i4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  l4 = (e, t) => {
    for (var r in t || (t = {})) nS.call(t, r) && zv(e, r, t[r]);
    if (Qa) for (var r of Qa(t)) oS.call(t, r) && zv(e, r, t[r]);
    return e;
  },
  a4 = (e, t) => {
    var r = {};
    for (var n in e) nS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Qa)
      for (var n of Qa(e)) t.indexOf(n) < 0 && oS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const s4 = { spacing: "md", align: "stretch", justify: "top" },
  Tt = g.exports.forwardRef((e, t) => {
    const r = ee("Stack", s4, e),
      { spacing: n, className: o, align: i, justify: l, unstyled: a } = r,
      s = a4(r, ["spacing", "className", "align", "justify", "unstyled"]),
      { classes: u, cx: c } = o4(
        { spacing: n, align: i, justify: l },
        { name: "Stack", unstyled: a }
      );
    return S(q, { ...l4({ className: c(u.root, o), ref: t }, s) });
  });
Tt.displayName = "@mantine/core/Stack";
function iS({
  transitions: e,
  duration: t = 250,
  exitDuration: r = t,
  mounted: n,
  children: o,
  timingFunction: i,
  onExit: l,
  onEntered: a,
  onEnter: s,
  onExited: u,
}) {
  const {
    transitionDuration: c,
    transitionStatus: f,
    transitionTimingFunction: d,
  } = h_({
    mounted: n,
    duration: t,
    exitDuration: r,
    timingFunction: i,
    onExit: l,
    onEntered: a,
    onEnter: s,
    onExited: u,
  });
  if (c === 0) return n ? E.createElement(E.Fragment, null, o({})) : null;
  if (f === "exited") return null;
  const p = Object.keys(e).reduce(
    (y, w) => (
      (y[w] = v_({
        duration: e[w].duration,
        transition: e[w].transition,
        timingFunction: e[w].timingFunction || d,
        state: f,
      })),
      y
    ),
    {}
  );
  return E.createElement(E.Fragment, null, o(p));
}
iS.displayName = "@mantine/core/GroupedTransition";
var u4 = Q((e, { zIndex: t }) => ({
    root: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: t,
    },
  })),
  c4 = u4,
  f4 = Object.defineProperty,
  d4 = Object.defineProperties,
  p4 = Object.getOwnPropertyDescriptors,
  Za = Object.getOwnPropertySymbols,
  lS = Object.prototype.hasOwnProperty,
  aS = Object.prototype.propertyIsEnumerable,
  Dv = (e, t, r) =>
    t in e
      ? f4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ic = (e, t) => {
    for (var r in t || (t = {})) lS.call(t, r) && Dv(e, r, t[r]);
    if (Za) for (var r of Za(t)) aS.call(t, r) && Dv(e, r, t[r]);
    return e;
  },
  g4 = (e, t) => d4(e, p4(t)),
  m4 = (e, t) => {
    var r = {};
    for (var n in e) lS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Za)
      for (var n of Za(e)) t.indexOf(n) < 0 && aS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const v4 = {
    opacity: 0.6,
    color: "#fff",
    zIndex: io("modal"),
    radius: 0,
    blur: 0,
  },
  sS = g.exports.forwardRef((e, t) => {
    const r = ee("Overlay", v4, e),
      {
        opacity: n,
        blur: o,
        color: i,
        gradient: l,
        zIndex: a,
        radius: s,
        sx: u,
        unstyled: c,
        className: f,
      } = r,
      d = m4(r, [
        "opacity",
        "blur",
        "color",
        "gradient",
        "zIndex",
        "radius",
        "sx",
        "unstyled",
        "className",
      ]),
      { classes: p, cx: y } = c4(
        { zIndex: a },
        { name: "Overlay", unstyled: c }
      ),
      w = l ? { backgroundImage: l } : { backgroundColor: i },
      v = (m) =>
        S(q, {
          ...ic(
            {
              ref: t,
              className: y(p.root, f),
              sx: [
                (h) =>
                  g4(ic({}, w), {
                    opacity: n,
                    borderRadius: h.fn.size({ size: s, sizes: h.radius }),
                  }),
                ...Si(u),
              ],
            },
            m
          ),
        });
    return o
      ? S(q, {
          ...ic(
            {
              className: y(p.root, f),
              sx: [{ backdropFilter: `blur(${o}px)` }, ...Si(u)],
            },
            d
          ),
          children: v(),
        })
      : v(d);
  });
sS.displayName = "@mantine/core/Overlay";
const h4 = sS,
  uS = g.exports.createContext(null),
  y4 = uS.Provider,
  w4 = () => g.exports.useContext(uS);
var _4 = Object.defineProperty,
  Tv = Object.getOwnPropertySymbols,
  S4 = Object.prototype.hasOwnProperty,
  b4 = Object.prototype.propertyIsEnumerable,
  Mv = (e, t, r) =>
    t in e
      ? _4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  x4 = (e, t) => {
    for (var r in t || (t = {})) S4.call(t, r) && Mv(e, r, t[r]);
    if (Tv) for (var r of Tv(t)) b4.call(t, r) && Mv(e, r, t[r]);
    return e;
  };
const Ja = (e, t) => `${100 / (t / e)}%`,
  cS = (e, t) => (e ? `${100 / (t / e)}%` : void 0);
function P4({ sizes: e, offsets: t, theme: r, columns: n, grow: o }) {
  return aO.reduce(
    (i, l) => (
      typeof e[l] == "number" &&
        (i[`@media (min-width: ${r.breakpoints[l] + 1}px)`] = {
          flexBasis: Ja(e[l], n),
          flexShrink: 0,
          maxWidth: o ? "unset" : Ja(e[l], n),
          marginLeft: cS(t[l], n),
        }),
      i
    ),
    {}
  );
}
var $4 = Q(
    (
      e,
      {
        gutter: t,
        grow: r,
        offset: n,
        offsetXs: o,
        offsetSm: i,
        offsetMd: l,
        offsetLg: a,
        offsetXl: s,
        columns: u,
        span: c,
        xs: f,
        sm: d,
        md: p,
        lg: y,
        xl: w,
      }
    ) => ({
      root: x4(
        {
          boxSizing: "border-box",
          flexGrow: r ? 1 : 0,
          padding: e.fn.size({ size: t, sizes: e.spacing }) / 2,
          marginLeft: cS(n, u),
          flexBasis: Ja(c, u),
          flexShrink: 0,
          maxWidth: r ? "unset" : Ja(c, u),
        },
        P4({
          sizes: { xs: f, sm: d, md: p, lg: y, xl: w },
          offsets: { xs: o, sm: i, md: l, lg: a, xl: s },
          theme: e,
          columns: u,
          grow: r,
        })
      ),
    })
  ),
  O4 = $4,
  C4 = Object.defineProperty,
  es = Object.getOwnPropertySymbols,
  fS = Object.prototype.hasOwnProperty,
  dS = Object.prototype.propertyIsEnumerable,
  jv = (e, t, r) =>
    t in e
      ? C4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  E4 = (e, t) => {
    for (var r in t || (t = {})) fS.call(t, r) && jv(e, r, t[r]);
    if (es) for (var r of es(t)) dS.call(t, r) && jv(e, r, t[r]);
    return e;
  },
  k4 = (e, t) => {
    var r = {};
    for (var n in e) fS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && es)
      for (var n of es(e)) t.indexOf(n) < 0 && dS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const R4 = {
  offset: 0,
  offsetXs: 0,
  offsetSm: 0,
  offsetMd: 0,
  offsetLg: 0,
  offsetXl: 0,
};
function I4(e) {
  return typeof e == "number" && e > 0 && e % 1 === 0;
}
const pS = g.exports.forwardRef((e, t) => {
  const r = ee("Grid.Col", R4, e),
    {
      children: n,
      span: o,
      offset: i,
      offsetXs: l,
      offsetSm: a,
      offsetMd: s,
      offsetLg: u,
      offsetXl: c,
      xs: f,
      sm: d,
      md: p,
      lg: y,
      xl: w,
      className: v,
      id: m,
      unstyled: h,
    } = r,
    _ = k4(r, [
      "children",
      "span",
      "offset",
      "offsetXs",
      "offsetSm",
      "offsetMd",
      "offsetLg",
      "offsetXl",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "className",
      "id",
      "unstyled",
    ]),
    b = w4();
  if (!b)
    throw new Error(
      "[@mantine/core] Grid.Col was used outside of Grid context"
    );
  const O = o || b.columns,
    { classes: x, cx: P } = O4(
      {
        gutter: b.gutter,
        offset: i,
        offsetXs: l,
        offsetSm: a,
        offsetMd: s,
        offsetLg: u,
        offsetXl: c,
        xs: f,
        sm: d,
        md: p,
        lg: y,
        xl: w,
        grow: b.grow,
        columns: b.columns,
        span: O,
      },
      { unstyled: h, name: "Col" }
    );
  return !I4(O) || O > b.columns
    ? null
    : S(q, { ...E4({ className: P(x.root, v), ref: t }, _), children: n });
});
pS.displayName = "@mantine/core/Col";
var N4 = Q((e, { justify: t, align: r, gutter: n }) => ({
    root: {
      margin: -e.fn.size({ size: n, sizes: e.spacing }) / 2,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: t,
      alignItems: r,
    },
  })),
  z4 = N4,
  D4 = Object.defineProperty,
  ts = Object.getOwnPropertySymbols,
  gS = Object.prototype.hasOwnProperty,
  mS = Object.prototype.propertyIsEnumerable,
  Lv = (e, t, r) =>
    t in e
      ? D4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  T4 = (e, t) => {
    for (var r in t || (t = {})) gS.call(t, r) && Lv(e, r, t[r]);
    if (ts) for (var r of ts(t)) mS.call(t, r) && Lv(e, r, t[r]);
    return e;
  },
  M4 = (e, t) => {
    var r = {};
    for (var n in e) gS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ts)
      for (var n of ts(e)) t.indexOf(n) < 0 && mS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const j4 = {
    gutter: "md",
    justify: "flex-start",
    align: "stretch",
    columns: 12,
  },
  gu = g.exports.forwardRef((e, t) => {
    const r = ee("Grid", j4, e),
      {
        gutter: n,
        children: o,
        grow: i,
        justify: l,
        align: a,
        columns: s,
        className: u,
        id: c,
        unstyled: f,
      } = r,
      d = M4(r, [
        "gutter",
        "children",
        "grow",
        "justify",
        "align",
        "columns",
        "className",
        "id",
        "unstyled",
      ]),
      { classes: p, cx: y } = z4(
        { gutter: n, justify: l, align: a },
        { unstyled: f, name: "Grid" }
      );
    return S(y4, {
      value: { gutter: n, grow: i, columns: s },
      children: S(q, {
        ...T4({ className: y(p.root, u), ref: t }, d),
        children: o,
      }),
    });
  });
gu.Col = pS;
gu.displayName = "@mantine/core/Grid";
function L4({ open: e, close: t, openDelay: r, closeDelay: n }) {
  const o = g.exports.useRef(-1),
    i = g.exports.useRef(-1),
    l = () => {
      window.clearTimeout(o.current), window.clearTimeout(i.current);
    },
    a = () => {
      l(), r === 0 ? e() : (o.current = window.setTimeout(e, r));
    },
    s = () => {
      l(), n === 0 ? t() : (i.current = window.setTimeout(t, n));
    };
  return (
    g.exports.useEffect(() => l, []), { openDropdown: a, closeDropdown: s }
  );
}
var F4 = Q((e) => ({
    divider: {
      margin: `${e.spacing.xs / 2}px -5px`,
      borderTop: `1px solid ${
        e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]
      }`,
    },
  })),
  A4 = F4,
  V4 = Object.defineProperty,
  rs = Object.getOwnPropertySymbols,
  vS = Object.prototype.hasOwnProperty,
  hS = Object.prototype.propertyIsEnumerable,
  Fv = (e, t, r) =>
    t in e
      ? V4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  H4 = (e, t) => {
    for (var r in t || (t = {})) vS.call(t, r) && Fv(e, r, t[r]);
    if (rs) for (var r of rs(t)) hS.call(t, r) && Fv(e, r, t[r]);
    return e;
  },
  B4 = (e, t) => {
    var r = {};
    for (var n in e) vS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && rs)
      for (var n of rs(e)) t.indexOf(n) < 0 && hS.call(e, n) && (r[n] = e[n]);
    return r;
  };
function yS(e) {
  var t = e,
    { children: r, className: n } = t,
    o = B4(t, ["children", "className"]);
  const { classNames: i, styles: l, unstyled: a } = dn(),
    { classes: s, cx: u } = A4(null, {
      name: "Menu",
      classNames: i,
      styles: l,
      unstyled: a,
    });
  return E.createElement(q, H4({ className: u(s.divider, n) }, o));
}
yS.displayName = "@mantine/core/MenuDivider";
const wS = {
    context: "Menu component was not found in the tree",
    children:
      "Menu.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
  },
  [W4, rp] = Id(wS.context);
var U4 = Object.defineProperty,
  ns = Object.getOwnPropertySymbols,
  _S = Object.prototype.hasOwnProperty,
  SS = Object.prototype.propertyIsEnumerable,
  Av = (e, t, r) =>
    t in e
      ? U4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  G4 = (e, t) => {
    for (var r in t || (t = {})) _S.call(t, r) && Av(e, r, t[r]);
    if (ns) for (var r of ns(t)) SS.call(t, r) && Av(e, r, t[r]);
    return e;
  },
  Y4 = (e, t) => {
    var r = {};
    for (var n in e) _S.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ns)
      for (var n of ns(e)) t.indexOf(n) < 0 && SS.call(e, n) && (r[n] = e[n]);
    return r;
  };
function bS(e) {
  var t = e,
    { children: r, onMouseEnter: n, onMouseLeave: o } = t,
    i = Y4(t, ["children", "onMouseEnter", "onMouseLeave"]);
  const l = g.exports.useRef(),
    a = rp(),
    s = (f) => {
      (f.key === "ArrowUp" || f.key === "ArrowDown") &&
        (f.preventDefault(),
        l.current.querySelectorAll("[data-menu-item]")[0].focus());
    },
    u = Xt(n, () => a.trigger === "hover" && a.openDropdown()),
    c = Xt(o, () => a.trigger === "hover" && a.closeDropdown());
  return S(nr.Dropdown, {
    ...G4(
      {
        onMouseEnter: u,
        onMouseLeave: c,
        role: "menu",
        "aria-orientation": "vertical",
      },
      i
    ),
    children: S("div", {
      tabIndex: -1,
      "data-menu-dropdown": !0,
      "data-autofocus": !0,
      onKeyDown: s,
      ref: l,
      style: { outline: 0 },
      children: r,
    }),
  });
}
bS.displayName = "@mantine/core/MenuDropdown";
var X4 = Object.defineProperty,
  q4 = Object.defineProperties,
  K4 = Object.getOwnPropertyDescriptors,
  Vv = Object.getOwnPropertySymbols,
  Q4 = Object.prototype.hasOwnProperty,
  Z4 = Object.prototype.propertyIsEnumerable,
  Hv = (e, t, r) =>
    t in e
      ? X4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  J4 = (e, t) => {
    for (var r in t || (t = {})) Q4.call(t, r) && Hv(e, r, t[r]);
    if (Vv) for (var r of Vv(t)) Z4.call(t, r) && Hv(e, r, t[r]);
    return e;
  },
  e6 = (e, t) => q4(e, K4(t)),
  t6 = Q((e, { color: t, radius: r }) => ({
    item: e6(J4({}, e.fn.fontStyles()), {
      WebkitTapHighlightColor: "transparent",
      fontSize: e.fontSizes.sm,
      border: 0,
      backgroundColor: "transparent",
      outline: 0,
      width: "100%",
      textAlign: "left",
      textDecoration: "none",
      boxSizing: "border-box",
      padding: `${e.spacing.xs}px ${e.spacing.sm}px`,
      cursor: "pointer",
      borderRadius: e.fn.radius(r),
      color: t
        ? e.fn.variant({ variant: "filled", primaryFallback: !1, color: t })
            .background
        : e.colorScheme === "dark"
        ? e.colors.dark[0]
        : e.black,
      display: "flex",
      alignItems: "center",
      "&:disabled": {
        color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
        pointerEvents: "none",
        userSelect: "none",
      },
      "&[data-hovered]": {
        backgroundColor: t
          ? e.fn.variant({ variant: "light", color: t }).background
          : e.colorScheme === "dark"
          ? e.fn.rgba(e.colors.dark[3], 0.35)
          : e.colors.gray[0],
      },
    }),
    itemLabel: { flex: 1 },
    itemIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: e.spacing.xs,
    },
    itemRightSection: {},
  })),
  r6 = t6,
  n6 = Object.defineProperty,
  o6 = Object.defineProperties,
  i6 = Object.getOwnPropertyDescriptors,
  os = Object.getOwnPropertySymbols,
  xS = Object.prototype.hasOwnProperty,
  PS = Object.prototype.propertyIsEnumerable,
  Bv = (e, t, r) =>
    t in e
      ? n6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  l6 = (e, t) => {
    for (var r in t || (t = {})) xS.call(t, r) && Bv(e, r, t[r]);
    if (os) for (var r of os(t)) PS.call(t, r) && Bv(e, r, t[r]);
    return e;
  },
  a6 = (e, t) => o6(e, i6(t)),
  s6 = (e, t) => {
    var r = {};
    for (var n in e) xS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && os)
      for (var n of os(e)) t.indexOf(n) < 0 && PS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const $S = g.exports.forwardRef((e, t) => {
  var r = e,
    {
      children: n,
      className: o,
      color: i,
      closeMenuOnClick: l,
      icon: a,
      rightSection: s,
    } = r,
    u = s6(r, [
      "children",
      "className",
      "color",
      "closeMenuOnClick",
      "icon",
      "rightSection",
    ]);
  const c = rp(),
    { classNames: f, styles: d, unstyled: p } = dn(),
    {
      classes: y,
      cx: w,
      theme: v,
    } = r6(
      { radius: c.radius, color: i },
      { name: "Menu", classNames: f, styles: d, unstyled: p }
    ),
    m = g.exports.useRef(),
    h = c.getItemIndex(m.current),
    _ = u,
    b = Xt(_.onMouseLeave, () => c.setHovered(-1)),
    O = Xt(_.onMouseEnter, () => c.setHovered(c.getItemIndex(m.current))),
    x = Xt(_.onClick, () => {
      typeof l == "boolean"
        ? l && c.closeDropdownImmediately()
        : c.closeOnItemClick && c.closeDropdownImmediately();
    }),
    P = Xt(_.onFocus, () => c.setHovered(c.getItemIndex(m.current)));
  return U(q, {
    ...a6(l6({ component: "button" }, u), {
      type: "button",
      tabIndex: -1,
      onFocus: P,
      className: w(y.item, o),
      ref: pn(m, t),
      role: "menuitem",
      "data-menu-item": !0,
      "data-hovered": c.hovered === h ? !0 : void 0,
      onMouseEnter: O,
      onMouseLeave: b,
      onClick: x,
      onKeyDown: g1({
        siblingSelector: "[data-menu-item]",
        parentSelector: "[data-menu-dropdown]",
        activateOnFocus: !1,
        loop: c.loop,
        dir: v.dir,
        orientation: "vertical",
        onKeyDown: _.onKeydown,
      }),
    }),
    children: [
      a && S("div", { className: y.itemIcon, children: a }),
      n && S("div", { className: y.itemLabel, children: n }),
      s && S("div", { className: y.itemRightSection, children: s }),
    ],
  });
});
$S.displayName = "@mantine/core/MenuItem";
const u6 = $S;
var c6 = Q((e) => ({
    label: {
      color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
      fontWeight: 500,
      fontSize: e.fontSizes.xs,
      padding: `${e.spacing.xs / 2}px ${e.spacing.sm}px`,
      cursor: "default",
    },
  })),
  f6 = c6,
  d6 = Object.defineProperty,
  is = Object.getOwnPropertySymbols,
  OS = Object.prototype.hasOwnProperty,
  CS = Object.prototype.propertyIsEnumerable,
  Wv = (e, t, r) =>
    t in e
      ? d6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  p6 = (e, t) => {
    for (var r in t || (t = {})) OS.call(t, r) && Wv(e, r, t[r]);
    if (is) for (var r of is(t)) CS.call(t, r) && Wv(e, r, t[r]);
    return e;
  },
  g6 = (e, t) => {
    var r = {};
    for (var n in e) OS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && is)
      for (var n of is(e)) t.indexOf(n) < 0 && CS.call(e, n) && (r[n] = e[n]);
    return r;
  };
function ES(e) {
  var t = e,
    { children: r, className: n } = t,
    o = g6(t, ["children", "className"]);
  const { classNames: i, styles: l, unstyled: a } = dn(),
    { classes: s, cx: u } = f6(null, {
      name: "Menu",
      classNames: i,
      styles: l,
      unstyled: a,
    });
  return E.createElement(mt, p6({ className: u(s.label, n) }, o), r);
}
ES.displayName = "@mantine/core/MenuLabel";
var m6 = Object.defineProperty,
  ls = Object.getOwnPropertySymbols,
  kS = Object.prototype.hasOwnProperty,
  RS = Object.prototype.propertyIsEnumerable,
  Uv = (e, t, r) =>
    t in e
      ? m6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  v6 = (e, t) => {
    for (var r in t || (t = {})) kS.call(t, r) && Uv(e, r, t[r]);
    if (ls) for (var r of ls(t)) RS.call(t, r) && Uv(e, r, t[r]);
    return e;
  },
  h6 = (e, t) => {
    var r = {};
    for (var n in e) kS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ls)
      for (var n of ls(e)) t.indexOf(n) < 0 && RS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const IS = g.exports.forwardRef((e, t) => {
  var r = e,
    { children: n, refProp: o = "ref" } = r,
    i = h6(r, ["children", "refProp"]);
  if (!Ti(n)) throw new Error(wS.children);
  const l = rp(),
    a = Xt(n.props.onClick, () => l.trigger === "click" && l.toggleDropdown()),
    s = Xt(
      n.props.onMouseEnter,
      () => l.trigger === "hover" && l.openDropdown()
    ),
    u = Xt(
      n.props.onMouseLeave,
      () => l.trigger === "hover" && l.closeDropdown()
    );
  return S(nr.Target, {
    ...v6({ refProp: o, popupType: "menu", ref: t }, i),
    children: g.exports.cloneElement(n, {
      onClick: a,
      onMouseEnter: s,
      onMouseLeave: u,
      "data-expanded": l.opened ? !0 : void 0,
    }),
  });
});
IS.displayName = "@mantine/core/MenuTarget";
var y6 = Q({ dropdown: { padding: 4 } }),
  w6 = y6,
  _6 = Object.defineProperty,
  S6 = Object.defineProperties,
  b6 = Object.getOwnPropertyDescriptors,
  as = Object.getOwnPropertySymbols,
  NS = Object.prototype.hasOwnProperty,
  zS = Object.prototype.propertyIsEnumerable,
  Gv = (e, t, r) =>
    t in e
      ? _6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Yv = (e, t) => {
    for (var r in t || (t = {})) NS.call(t, r) && Gv(e, r, t[r]);
    if (as) for (var r of as(t)) zS.call(t, r) && Gv(e, r, t[r]);
    return e;
  },
  Xv = (e, t) => S6(e, b6(t)),
  x6 = (e, t) => {
    var r = {};
    for (var n in e) NS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && as)
      for (var n of as(e)) t.indexOf(n) < 0 && zS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const P6 = {
  closeOnItemClick: !0,
  loop: !0,
  trigger: "click",
  openDelay: 0,
  closeDelay: 100,
};
function et(e) {
  const t = ee("Menu", P6, e),
    {
      children: r,
      onOpen: n,
      onClose: o,
      opened: i,
      defaultOpened: l,
      onChange: a,
      closeOnItemClick: s,
      loop: u,
      closeOnEscape: c,
      trigger: f,
      openDelay: d,
      closeDelay: p,
      classNames: y,
      styles: w,
      unstyled: v,
      radius: m,
    } = t,
    h = x6(t, [
      "children",
      "onOpen",
      "onClose",
      "opened",
      "defaultOpened",
      "onChange",
      "closeOnItemClick",
      "loop",
      "closeOnEscape",
      "trigger",
      "openDelay",
      "closeDelay",
      "classNames",
      "styles",
      "unstyled",
      "radius",
    ]),
    { classes: _, cx: b } = w6(),
    [O, { setHovered: x, resetHovered: P }] = N$(),
    [$, C] = Li({ value: i, defaultValue: l, finalValue: !1, onChange: a }),
    I = () => {
      C(!1), $ && o?.();
    },
    z = () => {
      C(!0), !$ && n?.();
    },
    D = () => ($ ? I() : z()),
    { openDropdown: j, closeDropdown: B } = L4({
      open: z,
      close: I,
      closeDelay: p,
      openDelay: d,
    }),
    V = (W) => $$("[data-menu-item]", "[data-menu-dropdown]", W);
  return (
    kr(() => {
      P();
    }, [$]),
    E.createElement(
      W4,
      {
        value: {
          opened: $,
          toggleDropdown: D,
          getItemIndex: V,
          hovered: O,
          setHovered: x,
          closeOnItemClick: s,
          closeDropdown: f === "click" ? I : B,
          openDropdown: f === "click" ? z : j,
          closeDropdownImmediately: I,
          loop: u,
          trigger: f,
          radius: m,
        },
      },
      E.createElement(
        nr,
        Xv(Yv({}, h), {
          radius: m,
          opened: $,
          onChange: C,
          defaultOpened: l,
          trapFocus: f === "click",
          closeOnEscape: c && f === "click",
          __staticSelector: "Menu",
          classNames: Xv(Yv({}, y), { dropdown: b(_.dropdown, y?.dropdown) }),
          styles: w,
          unstyled: v,
          onClose: I,
          onOpen: z,
        }),
        r
      )
    )
  );
}
et.displayName = "@mantine/core/Menu";
et.Item = u6;
et.Label = ES;
et.Dropdown = bS;
et.Target = IS;
et.Divider = yS;
var $6 = Object.defineProperty,
  qv = Object.getOwnPropertySymbols,
  O6 = Object.prototype.hasOwnProperty,
  C6 = Object.prototype.propertyIsEnumerable,
  Kv = (e, t, r) =>
    t in e
      ? $6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  E6 = (e, t) => {
    for (var r in t || (t = {})) O6.call(t, r) && Kv(e, r, t[r]);
    if (qv) for (var r of qv(t)) C6.call(t, r) && Kv(e, r, t[r]);
    return e;
  };
const k6 = { xs: 320, sm: 380, md: 440, lg: 620, xl: 780 };
function R6(e) {
  return e
    ? { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }
    : {};
}
var I6 = Q(
    (e, { overflow: t, size: r, centered: n, zIndex: o, fullScreen: i }) => ({
      close: {},
      overlay: { display: i ? "none" : void 0 },
      root: {
        position: "fixed",
        zIndex: o,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      inner: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "auto",
        padding: i ? 0 : `${e.spacing.xl * 2}px ${e.spacing.md}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: n ? "center" : "flex-start",
      },
      title: {
        marginRight: e.spacing.md,
        textOverflow: "ellipsis",
        display: "block",
        wordBreak: "break-word",
      },
      modal: E6(
        {
          position: "relative",
          width: i ? void 0 : e.fn.size({ sizes: k6, size: r }),
          borderRadius: i ? 0 : void 0,
          outline: 0,
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
          marginTop: n ? "auto" : void 0,
          marginBottom: n ? "auto" : void 0,
          zIndex: 1,
          marginLeft: i
            ? void 0
            : "calc(var(--removed-scroll-width, 0px) * -1)",
        },
        R6(i)
      ),
      header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: e.spacing.md,
        marginRight: -9,
      },
      body: {
        maxHeight: t === "inside" ? "calc(100vh - 185px)" : null,
        overflowY: t === "inside" ? "auto" : null,
        wordBreak: "break-word",
      },
    })
  ),
  N6 = I6,
  z6 = Object.defineProperty,
  ss = Object.getOwnPropertySymbols,
  DS = Object.prototype.hasOwnProperty,
  TS = Object.prototype.propertyIsEnumerable,
  Qv = (e, t, r) =>
    t in e
      ? z6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  D6 = (e, t) => {
    for (var r in t || (t = {})) DS.call(t, r) && Qv(e, r, t[r]);
    if (ss) for (var r of ss(t)) TS.call(t, r) && Qv(e, r, t[r]);
    return e;
  },
  T6 = (e, t) => {
    var r = {};
    for (var n in e) DS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ss)
      for (var n of ss(e)) t.indexOf(n) < 0 && TS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const M6 = {
  size: "md",
  transitionDuration: 250,
  overflow: "outside",
  padding: "lg",
  shadow: "lg",
  closeOnClickOutside: !0,
  closeOnEscape: !0,
  trapFocus: !0,
  withCloseButton: !0,
  withinPortal: !0,
  lockScroll: !0,
  withFocusReturn: !0,
  overlayBlur: 0,
  zIndex: io("modal"),
};
function mu(e) {
  const t = ee("Modal", M6, e),
    {
      className: r,
      opened: n,
      title: o,
      onClose: i,
      children: l,
      withCloseButton: a,
      overlayOpacity: s,
      size: u,
      transitionDuration: c,
      closeButtonLabel: f,
      overlayColor: d,
      overflow: p,
      transition: y,
      padding: w,
      shadow: v,
      radius: m,
      id: h,
      classNames: _,
      styles: b,
      closeOnClickOutside: O,
      trapFocus: x,
      closeOnEscape: P,
      centered: $,
      target: C,
      withinPortal: I,
      zIndex: z,
      overlayBlur: D,
      transitionTimingFunction: j,
      fullScreen: B,
      unstyled: V,
      lockScroll: W,
      withFocusReturn: re,
    } = t,
    se = T6(t, [
      "className",
      "opened",
      "title",
      "onClose",
      "children",
      "withCloseButton",
      "overlayOpacity",
      "size",
      "transitionDuration",
      "closeButtonLabel",
      "overlayColor",
      "overflow",
      "transition",
      "padding",
      "shadow",
      "radius",
      "id",
      "classNames",
      "styles",
      "closeOnClickOutside",
      "trapFocus",
      "closeOnEscape",
      "centered",
      "target",
      "withinPortal",
      "zIndex",
      "overlayBlur",
      "transitionTimingFunction",
      "fullScreen",
      "unstyled",
      "lockScroll",
      "withFocusReturn",
    ]),
    ie = lo(h),
    Ne = `${ie}-title`,
    R = `${ie}-body`,
    {
      classes: T,
      cx: A,
      theme: k,
    } = N6(
      { size: u, overflow: p, centered: $, zIndex: z, fullScreen: B },
      { unstyled: V, classNames: _, styles: b, name: "Modal" }
    ),
    M = X1(x && n),
    G = typeof s == "number" ? s : k.colorScheme === "dark" ? 0.85 : 0.75,
    [, Z] = _2(),
    ze = (ae) => {
      !x && ae.key === "Escape" && P && i();
    };
  return (
    g.exports.useEffect(() => {
      if (!x)
        return (
          window.addEventListener("keydown", ze),
          () => window.removeEventListener("keydown", ze)
        );
    }, [x]),
    W1({ opened: n, shouldReturnFocus: x && re }),
    S(Fi, {
      withinPortal: I,
      target: C,
      children: S(iS, {
        onExited: () => W && Z(!1),
        onEntered: () => W && Z(!0),
        mounted: n,
        duration: c,
        exitDuration: c,
        timingFunction: j,
        transitions: {
          modal: { duration: c, transition: y || (B ? "fade" : "pop") },
          overlay: {
            duration: c / 2,
            transition: "fade",
            timingFunction: "ease",
          },
        },
        children: (ae) =>
          S(q, {
            ...D6({ id: ie, className: A(T.root, r) }, se),
            children: U("div", {
              className: T.inner,
              onKeyDownCapture: (Ae) => {
                var or;
                ((or = Ae.target) == null
                  ? void 0
                  : or.getAttribute("data-mantine-stop-propagation")) !==
                  "true" &&
                  Ae.key === "Escape" &&
                  P &&
                  i();
              },
              ref: M,
              children: [
                U(GR, {
                  className: T.modal,
                  shadow: v,
                  p: w,
                  radius: m,
                  role: "dialog",
                  "aria-labelledby": Ne,
                  "aria-describedby": R,
                  "aria-modal": !0,
                  tabIndex: -1,
                  style: ae.modal,
                  unstyled: V,
                  children: [
                    (o || a) &&
                      U("div", {
                        className: T.header,
                        children: [
                          S(mt, { id: Ne, className: T.title, children: o }),
                          a &&
                            S(iu, {
                              iconSize: 16,
                              onClick: i,
                              "aria-label": f,
                              className: T.close,
                            }),
                        ],
                      }),
                    S("div", { id: R, className: T.body, children: l }),
                  ],
                }),
                S("div", {
                  style: ae.overlay,
                  children: S(h4, {
                    className: T.overlay,
                    sx: { position: "fixed" },
                    zIndex: 0,
                    onMouseDown: () => O && i(),
                    blur: D,
                    color:
                      d ||
                      (k.colorScheme === "dark" ? k.colors.dark[9] : k.black),
                    opacity: G,
                    unstyled: V,
                  }),
                }),
              ],
            }),
          }),
      }),
    })
  );
}
mu.displayName = "@mantine/core/Modal";
var j6 = Object.defineProperty,
  us = Object.getOwnPropertySymbols,
  MS = Object.prototype.hasOwnProperty,
  jS = Object.prototype.propertyIsEnumerable,
  Zv = (e, t, r) =>
    t in e
      ? j6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Jv = (e, t) => {
    for (var r in t || (t = {})) MS.call(t, r) && Zv(e, r, t[r]);
    if (us) for (var r of us(t)) jS.call(t, r) && Zv(e, r, t[r]);
    return e;
  },
  L6 = (e, t) => {
    var r = {};
    for (var n in e) MS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && us)
      for (var n of us(e)) t.indexOf(n) < 0 && jS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const F6 = { xs: 14, sm: 18, md: 20, lg: 24, xl: 28 };
function A6(e) {
  var t = e,
    { size: r, error: n, style: o } = t,
    i = L6(t, ["size", "error", "style"]);
  const l = at(),
    a = l.fn.size({ size: r, sizes: F6 });
  return E.createElement(
    "svg",
    Jv(
      {
        width: a,
        height: a,
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: Jv({ color: n ? l.colors.red[6] : l.colors.gray[6] }, o),
        "data-chevron": !0,
      },
      i
    ),
    E.createElement("path", {
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
function LS({
  shouldClear: e,
  clearButtonLabel: t,
  onClear: r,
  size: n,
  error: o,
  clearButtonTabIndex: i,
}) {
  return e
    ? E.createElement(iu, {
        variant: "transparent",
        "aria-label": t,
        onClick: r,
        size: n,
        tabIndex: i,
      })
    : E.createElement(A6, { error: o, size: n });
}
LS.displayName = "@mantine/core/SelectRightSection";
var V6 = Object.defineProperty,
  H6 = Object.defineProperties,
  B6 = Object.getOwnPropertyDescriptors,
  cs = Object.getOwnPropertySymbols,
  FS = Object.prototype.hasOwnProperty,
  AS = Object.prototype.propertyIsEnumerable,
  eh = (e, t, r) =>
    t in e
      ? V6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  lc = (e, t) => {
    for (var r in t || (t = {})) FS.call(t, r) && eh(e, r, t[r]);
    if (cs) for (var r of cs(t)) AS.call(t, r) && eh(e, r, t[r]);
    return e;
  },
  th = (e, t) => H6(e, B6(t)),
  W6 = (e, t) => {
    var r = {};
    for (var n in e) FS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && cs)
      for (var n of cs(e)) t.indexOf(n) < 0 && AS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const U6 = { xs: 24, sm: 30, md: 34, lg: 44, xl: 54 };
function G6(e) {
  var t = e,
    { styles: r, rightSection: n, rightSectionWidth: o, theme: i } = t,
    l = W6(t, ["styles", "rightSection", "rightSectionWidth", "theme"]);
  if (n) return { rightSection: n, rightSectionWidth: o, styles: r };
  const a = typeof r == "function" ? r(i) : r;
  return {
    rightSectionWidth: i.fn.size({ size: l.size, sizes: U6 }),
    rightSection:
      !l.readOnly &&
      !(l.disabled && l.shouldClear) &&
      E.createElement(LS, lc({}, l)),
    styles: th(lc({}, a), {
      rightSection: th(lc({}, a?.rightSection), {
        pointerEvents: l.shouldClear ? void 0 : "none",
      }),
    }),
  };
}
const Y6 = (e, t, r) =>
  Number.isInteger(e) && e >= 0 && t === 0
    ? "numeric"
    : !Number.isInteger(e) && e >= 0 && t !== 0
    ? "decimal"
    : (Number.isInteger(e) && e < 0 && t === 0) ||
      (!Number.isInteger(e) && e < 0 && t !== 0)
    ? r === "ios"
      ? "text"
      : "decimal"
    : "numeric";
function rh({ direction: e, size: t }) {
  return E.createElement(
    "svg",
    {
      style: { transform: e === "up" ? "rotate(180deg)" : void 0 },
      width: t,
      height: t,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    E.createElement("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    })
  );
}
const VS = { xs: 20, sm: 24, md: 30, lg: 34, xl: 36 };
var X6 = Q((e, { radius: t, size: r }) => ({
    rightSection: {
      display: "flex",
      flexDirection: "column",
      height: "calc(100% - 2px)",
      margin: 1,
      marginRight: 1,
      overflow: "hidden",
      borderTopRightRadius: e.fn.radius(t),
      borderBottomRightRadius: e.fn.radius(t),
    },
    control: {
      margin: 0,
      position: "relative",
      flex: "0 0 50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      width: e.fn.size({ size: r, sizes: VS }),
      padding: 0,
      WebkitTapHighlightColor: "transparent",
      borderBottom: `1px solid ${
        e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]
      }`,
      borderLeft: `1px solid ${
        e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]
      }`,
      borderTop: 0,
      borderRight: 0,
      backgroundColor: "transparent",
      marginRight: 1,
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      "&:not(:disabled):hover": {
        backgroundColor:
          e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0],
      },
      "&:disabled": {
        color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[4],
      },
    },
    controlUp: {},
    controlDown: { borderBottom: 0 },
  })),
  q6 = X6,
  K6 = Object.defineProperty,
  Q6 = Object.defineProperties,
  Z6 = Object.getOwnPropertyDescriptors,
  fs = Object.getOwnPropertySymbols,
  HS = Object.prototype.hasOwnProperty,
  BS = Object.prototype.propertyIsEnumerable,
  nh = (e, t, r) =>
    t in e
      ? K6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ac = (e, t) => {
    for (var r in t || (t = {})) HS.call(t, r) && nh(e, r, t[r]);
    if (fs) for (var r of fs(t)) BS.call(t, r) && nh(e, r, t[r]);
    return e;
  },
  J6 = (e, t) => Q6(e, Z6(t)),
  eI = (e, t) => {
    var r = {};
    for (var n in e) HS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && fs)
      for (var n of fs(e)) t.indexOf(n) < 0 && BS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const tI = { type: "text", size: "sm", __staticSelector: "TextInput" },
  Tr = g.exports.forwardRef((e, t) => {
    const r = k_("TextInput", tI, e),
      { inputProps: n, wrapperProps: o } = r,
      i = eI(r, ["inputProps", "wrapperProps"]);
    return S(Ua.Wrapper, {
      ...ac({}, o),
      children: S(Ua, { ...J6(ac(ac({}, n), i), { ref: t }) }),
    });
  });
Tr.displayName = "@mantine/core/TextInput";
var rI = Object.defineProperty,
  nI = Object.defineProperties,
  oI = Object.getOwnPropertyDescriptors,
  ds = Object.getOwnPropertySymbols,
  WS = Object.prototype.hasOwnProperty,
  US = Object.prototype.propertyIsEnumerable,
  oh = (e, t, r) =>
    t in e
      ? rI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  iI = (e, t) => {
    for (var r in t || (t = {})) WS.call(t, r) && oh(e, r, t[r]);
    if (ds) for (var r of ds(t)) US.call(t, r) && oh(e, r, t[r]);
    return e;
  },
  lI = (e, t) => nI(e, oI(t)),
  aI = (e, t) => {
    var r = {};
    for (var n in e) WS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ds)
      for (var n of ds(e)) t.indexOf(n) < 0 && US.call(e, n) && (r[n] = e[n]);
    return r;
  };
const sI = (e) => e || "",
  uI = (e) => {
    if (e === "-") return e;
    let t = e;
    t[0] === "." && (t = `0${e}`);
    const r = parseFloat(t);
    if (!Number.isNaN(r)) return e;
  },
  ih = { xs: 10, sm: 14, md: 16, lg: 18, xl: 20 },
  cI = {
    step: 1,
    hideControls: !1,
    size: "sm",
    precision: 0,
    noClampOnBlur: !1,
    formatter: sI,
    parser: uI,
  },
  $i = g.exports.forwardRef((e, t) => {
    const r = ee("NumberInput", cI, e),
      {
        disabled: n,
        value: o,
        onChange: i,
        decimalSeparator: l,
        min: a,
        max: s,
        startValue: u,
        step: c,
        stepHoldInterval: f,
        stepHoldDelay: d,
        onBlur: p,
        onFocus: y,
        hideControls: w,
        radius: v,
        variant: m,
        precision: h,
        defaultValue: _,
        noClampOnBlur: b,
        handlersRef: O,
        classNames: x,
        styles: P,
        size: $,
        rightSection: C,
        rightSectionWidth: I,
        formatter: z,
        parser: D,
        inputMode: j,
        unstyled: B,
      } = r,
      V = aI(r, [
        "disabled",
        "value",
        "onChange",
        "decimalSeparator",
        "min",
        "max",
        "startValue",
        "step",
        "stepHoldInterval",
        "stepHoldDelay",
        "onBlur",
        "onFocus",
        "hideControls",
        "radius",
        "variant",
        "precision",
        "defaultValue",
        "noClampOnBlur",
        "handlersRef",
        "classNames",
        "styles",
        "size",
        "rightSection",
        "rightSectionWidth",
        "formatter",
        "parser",
        "inputMode",
        "unstyled",
      ]),
      {
        classes: W,
        cx: re,
        theme: se,
      } = q6(
        { radius: v, size: $ },
        { classNames: x, styles: P, unstyled: B, name: "NumberInput" }
      ),
      [ie, Ne] = g.exports.useState(!1),
      [R, T] = g.exports.useState(
        typeof o == "number" ? o : typeof _ == "number" ? _ : void 0
      ),
      A = typeof o == "number" ? o : R,
      [k, M] = g.exports.useState(typeof A == "number" ? A.toFixed(h) : ""),
      G = g.exports.useRef(),
      Z = (H) => {
        H !== R && !Number.isNaN(H) && (typeof i == "function" && i(H), T(H));
      },
      ze = (H = "") => {
        let ne = typeof H == "number" ? String(H) : H;
        return l && (ne = ne.replace(/\./g, l)), z(ne);
      },
      ae = (H) => {
        let ne = H;
        return l && (ne = ne.replace(new RegExp(`\\${l}`, "g"), ".")), D(ne);
      },
      Ae = typeof a == "number" ? a : -1 / 0,
      or = typeof s == "number" ? s : 1 / 0,
      mn = g.exports.useRef();
    mn.current = () => {
      var H, ne, me;
      if (R === void 0)
        Z((H = u ?? a) != null ? H : 0),
          M(
            (me = (ne = u?.toFixed(h)) != null ? ne : a?.toFixed(h)) != null
              ? me
              : "0"
          );
      else {
        const Ve = Zu(R + c, Ae, or).toFixed(h);
        Z(parseFloat(Ve)), M(Ve);
      }
    };
    const co = g.exports.useRef();
    (co.current = () => {
      var H, ne, me;
      if (R === void 0)
        Z((H = u ?? a) != null ? H : 0),
          M(
            (me = (ne = u?.toFixed(h)) != null ? ne : a?.toFixed(h)) != null
              ? me
              : "0"
          );
      else {
        const Ve = Zu(R - c, Ae, or).toFixed(h);
        Z(parseFloat(Ve)), M(Ve);
      }
    }),
      q1(O, { increment: mn.current, decrement: co.current }),
      g.exports.useEffect(() => {
        typeof o == "number" && !ie && (T(o), M(o.toFixed(h))),
          _ === void 0 && o === void 0 && !ie && (T(o), M(""));
      }, [o]);
    const fo = d !== void 0 && f !== void 0,
      Ke = g.exports.useRef(null),
      po = g.exports.useRef(0),
      Lt = () => {
        Ke.current && window.clearTimeout(Ke.current),
          (Ke.current = null),
          (po.current = 0);
      },
      Gi = (H) => {
        H ? mn.current() : co.current(), (po.current += 1);
      },
      Yi = (H) => {
        if ((Gi(H), fo)) {
          const ne = typeof f == "number" ? f : f(po.current);
          Ke.current = window.setTimeout(() => Yi(H), ne);
        }
      },
      Ee = (H, ne) => {
        H.preventDefault(),
          G.current.focus(),
          Gi(ne),
          fo && (Ke.current = window.setTimeout(() => Yi(ne), d));
      };
    g.exports.useEffect(() => (Lt(), Lt), []);
    const bu = U("div", {
        className: W.rightSection,
        children: [
          S("button", {
            type: "button",
            tabIndex: -1,
            "aria-hidden": !0,
            disabled: A >= s,
            className: re(W.control, W.controlUp),
            onPointerDown: (H) => {
              Ee(H, !0);
            },
            onPointerUp: Lt,
            onPointerLeave: Lt,
            children: S(rh, {
              size: se.fn.size({ size: $, sizes: ih }),
              direction: "up",
            }),
          }),
          S("button", {
            type: "button",
            tabIndex: -1,
            "aria-hidden": !0,
            disabled: A <= a,
            className: re(W.control, W.controlDown),
            onPointerDown: (H) => {
              Ee(H, !1);
            },
            onPointerUp: Lt,
            onPointerLeave: Lt,
            children: S(rh, {
              size: se.fn.size({ size: $, sizes: ih }),
              direction: "down",
            }),
          }),
        ],
      }),
      wt = (H) => {
        if (H.nativeEvent.isComposing) return;
        const me = H.target.value,
          Ve = ae(me);
        M(Ve),
          me === "" || me === "-"
            ? Z(void 0)
            : me.trim() !== "" && !Number.isNaN(Ve) && Z(parseFloat(Ve));
      },
      De = (H) => {
        var ne;
        if (H.target.value === "") M(""), Z(void 0);
        else {
          let me = H.target.value;
          (me[0] === `${l}` || me[0] === ".") && (me = `0${me}`);
          const Ve = ae(me),
            mo = Zu(parseFloat(Ve), Ae, or);
          Number.isNaN(mo)
            ? M((ne = A?.toFixed(h)) != null ? ne : "")
            : b || (M(mo.toFixed(h)), Z(parseFloat(mo.toFixed(h))));
        }
        Ne(!1), typeof p == "function" && p(H);
      },
      go = (H) => {
        Ne(!0), typeof y == "function" && y(H);
      },
      vn = (H) => {
        if (H.repeat && fo && (H.key === "ArrowUp" || H.key === "ArrowDown")) {
          H.preventDefault();
          return;
        }
        H.key === "ArrowUp" ? Ee(H, !0) : H.key === "ArrowDown" && Ee(H, !1);
      },
      Xi = (H) => {
        (H.key === "ArrowUp" || H.key === "ArrowDown") && Lt();
      };
    return S(Tr, {
      ...lI(iI({}, V), {
        variant: m,
        value: ze(k),
        disabled: n,
        ref: pn(G, t),
        type: "text",
        onChange: wt,
        onBlur: De,
        onFocus: go,
        onKeyDown: vn,
        onKeyUp: Xi,
        rightSection: C || (n || w || m === "unstyled" ? null : bu),
        rightSectionWidth: I || se.fn.size({ size: $, sizes: VS }) + 1,
        radius: v,
        max: s,
        min: a,
        step: c,
        size: $,
        styles: P,
        classNames: x,
        inputMode: j || Y6(c, h, b2()),
        __staticSelector: "NumberInput",
        unstyled: B,
      }),
    });
  });
$i.displayName = "@mantine/core/NumberInput";
var fI = Object.defineProperty,
  lh = Object.getOwnPropertySymbols,
  dI = Object.prototype.hasOwnProperty,
  pI = Object.prototype.propertyIsEnumerable,
  ah = (e, t, r) =>
    t in e
      ? fI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  gI = (e, t) => {
    for (var r in t || (t = {})) dI.call(t, r) && ah(e, r, t[r]);
    if (lh) for (var r of lh(t)) pI.call(t, r) && ah(e, r, t[r]);
    return e;
  };
function GS(e) {
  return E.createElement(
    "svg",
    gI(
      {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    E.createElement("path", {
      d: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z",
      fill: "currentColor",
    })
  );
}
var mI = Object.defineProperty,
  sh = Object.getOwnPropertySymbols,
  vI = Object.prototype.hasOwnProperty,
  hI = Object.prototype.propertyIsEnumerable,
  uh = (e, t, r) =>
    t in e
      ? mI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  yI = (e, t) => {
    for (var r in t || (t = {})) vI.call(t, r) && uh(e, r, t[r]);
    if (sh) for (var r of sh(t)) hI.call(t, r) && uh(e, r, t[r]);
    return e;
  };
function YS(e) {
  return E.createElement(
    "svg",
    yI(
      {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    E.createElement("path", {
      d: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z",
      fill: "currentColor",
    })
  );
}
var wI = Object.defineProperty,
  ch = Object.getOwnPropertySymbols,
  _I = Object.prototype.hasOwnProperty,
  SI = Object.prototype.propertyIsEnumerable,
  fh = (e, t, r) =>
    t in e
      ? wI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  bI = (e, t) => {
    for (var r in t || (t = {})) _I.call(t, r) && fh(e, r, t[r]);
    if (ch) for (var r of ch(t)) SI.call(t, r) && fh(e, r, t[r]);
    return e;
  };
function XS(e) {
  return E.createElement(
    "svg",
    bI(
      {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    E.createElement("path", {
      d: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z",
      fill: "currentColor",
    })
  );
}
var xI = Object.defineProperty,
  dh = Object.getOwnPropertySymbols,
  PI = Object.prototype.hasOwnProperty,
  $I = Object.prototype.propertyIsEnumerable,
  ph = (e, t, r) =>
    t in e
      ? xI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  OI = (e, t) => {
    for (var r in t || (t = {})) PI.call(t, r) && ph(e, r, t[r]);
    if (dh) for (var r of dh(t)) $I.call(t, r) && ph(e, r, t[r]);
    return e;
  };
function qS(e) {
  return E.createElement(
    "svg",
    OI(
      {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    E.createElement("path", {
      d: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",
      fill: "currentColor",
    })
  );
}
var CI = Object.defineProperty,
  gh = Object.getOwnPropertySymbols,
  EI = Object.prototype.hasOwnProperty,
  kI = Object.prototype.propertyIsEnumerable,
  mh = (e, t, r) =>
    t in e
      ? CI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  RI = (e, t) => {
    for (var r in t || (t = {})) EI.call(t, r) && mh(e, r, t[r]);
    if (gh) for (var r of gh(t)) kI.call(t, r) && mh(e, r, t[r]);
    return e;
  };
function KS(e) {
  return E.createElement(
    "svg",
    RI(
      {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    E.createElement("path", {
      d: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",
      fill: "currentColor",
    })
  );
}
var II = Object.defineProperty,
  ps = Object.getOwnPropertySymbols,
  QS = Object.prototype.hasOwnProperty,
  ZS = Object.prototype.propertyIsEnumerable,
  vh = (e, t, r) =>
    t in e
      ? II(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  NI = (e, t) => {
    for (var r in t || (t = {})) QS.call(t, r) && vh(e, r, t[r]);
    if (ps) for (var r of ps(t)) ZS.call(t, r) && vh(e, r, t[r]);
    return e;
  },
  zI = (e, t) => {
    var r = {};
    for (var n in e) QS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ps)
      for (var n of ps(e)) t.indexOf(n) < 0 && ZS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const DI = { dots: GS, next: YS, prev: XS, first: qS, last: KS },
  TI = { dots: GS, prev: YS, next: XS, last: qS, first: KS };
function JS(e) {
  var t = e,
    { page: r, active: n, onClick: o } = t,
    i = zI(t, ["page", "active", "onClick"]);
  const a = (at().dir === "rtl" ? TI : DI)[r],
    s = a ? E.createElement(a, null) : r;
  return E.createElement("button", NI({ type: "button", onClick: o }, i), s);
}
JS.displayName = "@mantine/core/Pagination/DefaultItem";
var MI = Object.defineProperty,
  jI = Object.defineProperties,
  LI = Object.getOwnPropertyDescriptors,
  hh = Object.getOwnPropertySymbols,
  FI = Object.prototype.hasOwnProperty,
  AI = Object.prototype.propertyIsEnumerable,
  yh = (e, t, r) =>
    t in e
      ? MI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  VI = (e, t) => {
    for (var r in t || (t = {})) FI.call(t, r) && yh(e, r, t[r]);
    if (hh) for (var r of hh(t)) AI.call(t, r) && yh(e, r, t[r]);
    return e;
  },
  HI = (e, t) => jI(e, LI(t));
const wh = { xs: 22, sm: 26, md: 32, lg: 38, xl: 44 };
var BI = Q((e, { size: t, radius: r, color: n }) => {
    const o = e.fn.variant({ color: n, variant: "filled" });
    return {
      item: HI(VI({}, e.fn.focusStyles()), {
        cursor: "pointer",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500,
        border: `1px solid ${
          e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]
        }`,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        height: e.fn.size({ size: t, sizes: wh }),
        minWidth: e.fn.size({ size: t, sizes: wh }),
        padding: `0 ${e.fn.size({ size: t, sizes: e.spacing }) / 2}px`,
        fontSize: e.fn.size({ size: t, sizes: e.fontSizes }),
        borderRadius: e.fn.radius(r),
        lineHeight: 1,
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
        "&:active:not(:disabled):not([data-dots])": e.activeStyles,
        "&:disabled": {
          opacity: 0.6,
          cursor: "not-allowed",
          color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
        },
        "&[data-dots]": {
          cursor: "default",
          borderColor: "transparent",
          backgroundColor: "transparent",
        },
        "&[data-active]": {
          borderColor: "transparent",
          color: o.color,
          backgroundColor: o.background,
        },
      }),
    };
  }),
  WI = BI,
  UI = Object.defineProperty,
  gs = Object.getOwnPropertySymbols,
  eb = Object.prototype.hasOwnProperty,
  tb = Object.prototype.propertyIsEnumerable,
  _h = (e, t, r) =>
    t in e
      ? UI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  GI = (e, t) => {
    for (var r in t || (t = {})) eb.call(t, r) && _h(e, r, t[r]);
    if (gs) for (var r of gs(t)) tb.call(t, r) && _h(e, r, t[r]);
    return e;
  },
  YI = (e, t) => {
    var r = {};
    for (var n in e) eb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && gs)
      for (var n of gs(e)) t.indexOf(n) < 0 && tb.call(e, n) && (r[n] = e[n]);
    return r;
  };
const XI = {
    itemComponent: JS,
    initialPage: 1,
    siblings: 1,
    boundaries: 1,
    size: "md",
    radius: "sm",
    withEdges: !1,
    withControls: !0,
  },
  rb = g.exports.forwardRef((e, t) => {
    const r = ee("Pagination", XI, e),
      {
        itemComponent: n,
        classNames: o,
        styles: i,
        page: l,
        initialPage: a,
        color: s,
        total: u,
        siblings: c,
        boundaries: f,
        size: d,
        radius: p,
        onChange: y,
        getItemAriaLabel: w,
        spacing: v,
        withEdges: m,
        withControls: h,
        sx: _,
        unstyled: b,
      } = r,
      O = YI(r, [
        "itemComponent",
        "classNames",
        "styles",
        "page",
        "initialPage",
        "color",
        "total",
        "siblings",
        "boundaries",
        "size",
        "radius",
        "onChange",
        "getItemAriaLabel",
        "spacing",
        "withEdges",
        "withControls",
        "sx",
        "unstyled",
      ]),
      { classes: x, theme: P } = WI(
        { color: s, size: d, radius: p },
        { classNames: o, styles: i, unstyled: b, name: "Pagination" }
      ),
      {
        range: $,
        setPage: C,
        next: I,
        previous: z,
        active: D,
        first: j,
        last: B,
      } = u2({
        page: l,
        siblings: c,
        total: u,
        onChange: y,
        initialPage: a,
        boundaries: f,
      }),
      V = $.map((W, re) =>
        S(
          n,
          {
            page: W,
            active: W === D,
            "aria-current": W === D ? "page" : void 0,
            "aria-label": typeof w == "function" ? w(W) : null,
            tabIndex: W === "dots" ? -1 : 0,
            "data-dots": W === "dots" || void 0,
            "data-active": W === D || void 0,
            className: x.item,
            onClick: W !== "dots" ? () => C(W) : void 0,
          },
          re
        )
      );
    return U(jt, {
      ...GI(
        {
          role: "navigation",
          spacing: v || P.fn.size({ size: d, sizes: P.spacing }) / 2,
          ref: t,
          sx: _,
          unstyled: b,
        },
        O
      ),
      children: [
        m &&
          S(n, {
            page: "first",
            onClick: j,
            "aria-label": w ? w("first") : void 0,
            "aria-disabled": D === 1,
            className: x.item,
            disabled: D === 1,
          }),
        h &&
          S(n, {
            page: "prev",
            onClick: z,
            "aria-label": w ? w("prev") : void 0,
            "aria-disabled": D === 1,
            className: x.item,
            disabled: D === 1,
          }),
        V,
        h &&
          S(n, {
            page: "next",
            onClick: I,
            "aria-label": w ? w("next") : void 0,
            "aria-disabled": D === u,
            className: x.item,
            disabled: D === u,
          }),
        m &&
          S(n, {
            page: "last",
            onClick: B,
            "aria-label": w ? w("last") : void 0,
            "aria-disabled": D === u,
            className: x.item,
            disabled: D === u,
          }),
      ],
    });
  });
rb.displayName = "@mantine/core/Pagination";
function qI({
  data: e,
  searchable: t,
  limit: r,
  searchValue: n,
  filter: o,
  value: i,
  filterDataOnExactSearchMatch: l,
}) {
  if (!t) return e;
  const a = (i != null && e.find((u) => u.value === i)) || null;
  if (a && !l && a?.label === n) return e;
  const s = [];
  for (
    let u = 0;
    u < e.length && (o(n, e[u]) && s.push(e[u]), !(s.length >= r));
    u += 1
  );
  return s;
}
var KI = Q(() => ({
    input: {
      "&:not(:disabled)": {
        cursor: "pointer",
        "&::selection": { backgroundColor: "transparent" },
      },
    },
  })),
  QI = KI,
  ZI = Object.defineProperty,
  JI = Object.defineProperties,
  e8 = Object.getOwnPropertyDescriptors,
  ms = Object.getOwnPropertySymbols,
  nb = Object.prototype.hasOwnProperty,
  ob = Object.prototype.propertyIsEnumerable,
  Sh = (e, t, r) =>
    t in e
      ? ZI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  To = (e, t) => {
    for (var r in t || (t = {})) nb.call(t, r) && Sh(e, r, t[r]);
    if (ms) for (var r of ms(t)) ob.call(t, r) && Sh(e, r, t[r]);
    return e;
  },
  sc = (e, t) => JI(e, e8(t)),
  t8 = (e, t) => {
    var r = {};
    for (var n in e) nb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ms)
      for (var n of ms(e)) t.indexOf(n) < 0 && ob.call(e, n) && (r[n] = e[n]);
    return r;
  };
function r8(e, t) {
  return t.label.toLowerCase().trim().includes(e.toLowerCase().trim());
}
function n8(e, t) {
  return !!e && !t.some((r) => r.label.toLowerCase() === e.toLowerCase());
}
const o8 = {
    required: !1,
    size: "sm",
    shadow: "sm",
    itemComponent: kw,
    transition: "fade",
    transitionDuration: 0,
    initiallyOpened: !1,
    filter: r8,
    maxDropdownHeight: 220,
    searchable: !1,
    clearable: !1,
    limit: 1 / 0,
    disabled: !1,
    creatable: !1,
    shouldCreate: n8,
    selectOnBlur: !1,
    switchDirectionOnFlip: !1,
    filterDataOnExactSearchMatch: !1,
    zIndex: io("popover"),
    clearButtonTabIndex: 0,
    positionDependencies: [],
    dropdownPosition: "flip",
  },
  Oi = g.exports.forwardRef((e, t) => {
    const r = k_("Select", o8, e),
      {
        inputProps: n,
        wrapperProps: o,
        shadow: i,
        data: l,
        value: a,
        defaultValue: s,
        onChange: u,
        itemComponent: c,
        onKeyDown: f,
        onBlur: d,
        onFocus: p,
        transition: y,
        transitionDuration: w,
        initiallyOpened: v,
        transitionTimingFunction: m,
        unstyled: h,
        classNames: _,
        styles: b,
        filter: O,
        maxDropdownHeight: x,
        searchable: P,
        clearable: $,
        nothingFound: C,
        clearButtonLabel: I,
        limit: z,
        disabled: D,
        onSearchChange: j,
        rightSection: B,
        rightSectionWidth: V,
        creatable: W,
        getCreateLabel: re,
        shouldCreate: se,
        selectOnBlur: ie,
        onCreate: Ne,
        dropdownComponent: R,
        onDropdownClose: T,
        onDropdownOpen: A,
        withinPortal: k,
        switchDirectionOnFlip: M,
        zIndex: G,
        name: Z,
        dropdownPosition: ze,
        allowDeselect: ae,
        placeholder: Ae,
        filterDataOnExactSearchMatch: or,
        clearButtonTabIndex: mn,
        form: co,
        positionDependencies: fo,
        readOnly: Ke,
      } = r,
      po = t8(r, [
        "inputProps",
        "wrapperProps",
        "shadow",
        "data",
        "value",
        "defaultValue",
        "onChange",
        "itemComponent",
        "onKeyDown",
        "onBlur",
        "onFocus",
        "transition",
        "transitionDuration",
        "initiallyOpened",
        "transitionTimingFunction",
        "unstyled",
        "classNames",
        "styles",
        "filter",
        "maxDropdownHeight",
        "searchable",
        "clearable",
        "nothingFound",
        "clearButtonLabel",
        "limit",
        "disabled",
        "onSearchChange",
        "rightSection",
        "rightSectionWidth",
        "creatable",
        "getCreateLabel",
        "shouldCreate",
        "selectOnBlur",
        "onCreate",
        "dropdownComponent",
        "onDropdownClose",
        "onDropdownOpen",
        "withinPortal",
        "switchDirectionOnFlip",
        "zIndex",
        "name",
        "dropdownPosition",
        "allowDeselect",
        "placeholder",
        "filterDataOnExactSearchMatch",
        "clearButtonTabIndex",
        "form",
        "positionDependencies",
        "readOnly",
      ]),
      { classes: Lt, cx: Gi, theme: Yi } = QI(),
      [Ee, bu] = g.exports.useState(v),
      [wt, De] = g.exports.useState(-1),
      go = g.exports.useRef(),
      vn = g.exports.useRef({}),
      [Xi, H] = g.exports.useState("column"),
      ne = Xi === "column",
      {
        scrollIntoView: me,
        targetRef: Ve,
        scrollableRef: mo,
      } = g2({ duration: 0, offset: 5, cancelable: !1, isList: !0 }),
      ax = ae === void 0 ? $ : ae,
      st = (F) => {
        if (Ee !== F) {
          bu(F);
          const pe = F ? A : T;
          typeof pe == "function" && pe();
        }
      },
      xu = W && typeof re == "function";
    let Pu = null;
    const sx = l.map((F) =>
        typeof F == "string" ? { label: F, value: F } : F
      ),
      qi = z$({ data: sx }),
      [_t, hn, pp] = Li({
        value: a,
        defaultValue: s,
        finalValue: null,
        onChange: u,
      }),
      Ft = qi.find((F) => F.value === _t),
      [Mr, ux] = g.exports.useState(Ft?.label || ""),
      jr = (F) => {
        ux(F), P && typeof j == "function" && j(F);
      },
      cx = () => {
        var F;
        Ke || (hn(null), pp || jr(""), (F = go.current) == null || F.focus());
      };
    g.exports.useEffect(() => {
      const F = qi.find((pe) => pe.value === _t);
      F ? jr(F.label) : (!xu || !_t) && jr("");
    }, [_t]),
      g.exports.useEffect(() => {
        Ft && (!P || !Ee) && jr(Ft.label);
      }, [Ft?.label]);
    const Ki = (F) => {
        if (!Ke)
          if (ax && Ft?.value === F.value) hn(null), st(!1);
          else {
            if (F.creatable && typeof Ne == "function") {
              const pe = Ne(F.value);
              hn(typeof pe == "string" ? pe : pe.value);
            } else hn(F.value);
            pp || jr(F.label), De(-1), st(!1), go.current.focus();
          }
      },
      xe = qI({
        data: qi,
        searchable: P,
        limit: z,
        searchValue: Mr,
        filter: O,
        filterDataOnExactSearchMatch: or,
        value: _t,
      });
    xu &&
      se(Mr, xe) &&
      ((Pu = re(Mr)), xe.push({ label: Mr, value: Mr, creatable: !0 }));
    const gp = (F, pe, Qe) => {
      let Ze = F;
      for (; Qe(Ze); ) if (((Ze = pe(Ze)), !xe[Ze].disabled)) return Ze;
      return F;
    };
    kr(() => {
      De(-1);
    }, [Mr]);
    const vo = _t ? xe.findIndex((F) => F.value === _t) : 0,
      mp = () => {
        De((F) => {
          var pe;
          const Qe = gp(
            F,
            (Ze) => Ze - 1,
            (Ze) => Ze > 0
          );
          return (
            (Ve.current =
              vn.current[(pe = xe[Qe]) == null ? void 0 : pe.value]),
            me({ alignment: ne ? "start" : "end" }),
            Qe
          );
        });
      },
      vp = () => {
        De((F) => {
          var pe;
          const Qe = gp(
            F,
            (Ze) => Ze + 1,
            (Ze) => Ze < xe.length - 1
          );
          return (
            (Ve.current =
              vn.current[(pe = xe[Qe]) == null ? void 0 : pe.value]),
            me({ alignment: ne ? "end" : "start" }),
            Qe
          );
        });
      },
      ho = () =>
        window.setTimeout(() => {
          var F;
          (Ve.current = vn.current[(F = xe[vo]) == null ? void 0 : F.value]),
            me({ alignment: ne ? "end" : "start" });
        }, 0),
      fx = (F) => {
        switch ((typeof f == "function" && f(F), F.key)) {
          case "ArrowUp": {
            F.preventDefault(),
              Ee ? (ne ? mp() : vp()) : (De(vo), st(!0), ho());
            break;
          }
          case "ArrowDown": {
            F.preventDefault(),
              Ee ? (ne ? vp() : mp()) : (De(vo), st(!0), ho());
            break;
          }
          case "Home": {
            if (!P) {
              F.preventDefault(), Ee || st(!0);
              const pe = xe.findIndex((Qe) => !Qe.disabled);
              De(pe), me({ alignment: ne ? "end" : "start" });
            }
            break;
          }
          case "End": {
            if (!P) {
              F.preventDefault(), Ee || st(!0);
              const pe = xe.map((Qe) => !!Qe.disabled).lastIndexOf(!1);
              De(pe), me({ alignment: ne ? "end" : "start" });
            }
            break;
          }
          case "Escape": {
            F.preventDefault(), st(!1), De(-1);
            break;
          }
          case " ": {
            P ||
              (xe[wt] && Ee
                ? (F.preventDefault(), Ki(xe[wt]))
                : (st(!0), De(vo), ho()));
            break;
          }
          case "Enter":
            P || F.preventDefault(),
              xe[wt] && Ee && (F.preventDefault(), Ki(xe[wt]));
        }
      },
      dx = (F) => {
        typeof d == "function" && d(F);
        const pe = qi.find((Qe) => Qe.value === _t);
        ie && xe[wt] && Ee && Ki(xe[wt]), jr(pe?.label || ""), st(!1);
      },
      px = (F) => {
        typeof p == "function" && p(F), P && (st(!0), ho());
      },
      gx = (F) => {
        Ke ||
          (jr(F.currentTarget.value),
          $ && F.currentTarget.value === "" && hn(null),
          De(-1),
          st(!0));
      },
      mx = () => {
        if (!Ke) {
          let F = !0;
          P || (F = !Ee), st(F), _t && F && (De(vo), ho());
        }
      },
      yo = !Ke && (xe.length > 0 ? Ee : Ee && !!C);
    return S(Ua.Wrapper, {
      ...sc(To({}, o), { __staticSelector: "Select" }),
      children: U(ii, {
        opened: yo,
        transition: y,
        transitionDuration: w,
        shadow: "sm",
        withinPortal: k,
        __staticSelector: "Select",
        onDirectionChange: H,
        switchDirectionOnFlip: M,
        zIndex: G,
        dropdownPosition: ze,
        positionDependencies: fo,
        classNames: _,
        styles: b,
        unstyled: h,
        children: [
          S(ii.Target, {
            children: U("div", {
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-owns": yo ? `${n.id}-items` : null,
              "aria-controls": n.id,
              "aria-expanded": yo,
              onMouseLeave: () => De(-1),
              tabIndex: -1,
              children: [
                S("input", {
                  type: "hidden",
                  name: Z,
                  value: _t || "",
                  form: co,
                  disabled: D,
                }),
                S(Ua, {
                  ...To(
                    sc(To(To({ autoComplete: "off", type: "search" }, n), po), {
                      ref: pn(t, go),
                      onKeyDown: fx,
                      __staticSelector: "Select",
                      value: Mr,
                      placeholder: Ae,
                      onChange: gx,
                      "aria-autocomplete": "list",
                      "aria-controls": yo ? `${n.id}-items` : null,
                      "aria-activedescendant": wt >= 0 ? `${n.id}-${wt}` : null,
                      onClick: mx,
                      onBlur: dx,
                      onFocus: px,
                      readOnly: !P || Ke,
                      disabled: D,
                      "data-mantine-stop-propagation": yo,
                      name: null,
                      classNames: sc(To({}, _), {
                        input: Gi({ [Lt.input]: !P }, _?.input),
                      }),
                    }),
                    G6({
                      theme: Yi,
                      rightSection: B,
                      rightSectionWidth: V,
                      styles: b,
                      size: n.size,
                      shouldClear: $ && !!Ft,
                      clearButtonLabel: I,
                      onClear: cx,
                      error: o.error,
                      clearButtonTabIndex: mn,
                      disabled: D,
                      readOnly: Ke,
                    })
                  ),
                }),
              ],
            }),
          }),
          S(ii.Dropdown, {
            component: R || Ud,
            maxHeight: x,
            direction: Xi,
            id: n.id,
            innerRef: mo,
            children: S(Ow, {
              data: xe,
              hovered: wt,
              classNames: _,
              styles: b,
              isItemSelected: (F) => F === _t,
              uuid: n.id,
              __staticSelector: "Select",
              onItemHover: De,
              onItemSelect: Ki,
              itemsRefs: vn,
              itemComponent: c,
              size: n.size,
              nothingFound: C,
              creatable: xu && !!Pu,
              createLabel: Pu,
              "aria-label": o.label,
              unstyled: h,
            }),
          }),
        ],
      }),
    });
  });
Oi.displayName = "@mantine/core/Select";
function i8(e, t) {
  if (t.length === 0) return t;
  const r = "maxWidth" in t[0] ? "maxWidth" : "minWidth",
    n = [...t].sort(
      (o, i) =>
        e.fn.size({ size: i[r], sizes: e.breakpoints }) -
        e.fn.size({ size: o[r], sizes: e.breakpoints })
    );
  return r === "minWidth" ? n.reverse() : n;
}
var l8 = Object.defineProperty,
  bh = Object.getOwnPropertySymbols,
  a8 = Object.prototype.hasOwnProperty,
  s8 = Object.prototype.propertyIsEnumerable,
  xh = (e, t, r) =>
    t in e
      ? l8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  u8 = (e, t) => {
    for (var r in t || (t = {})) a8.call(t, r) && xh(e, r, t[r]);
    if (bh) for (var r of bh(t)) s8.call(t, r) && xh(e, r, t[r]);
    return e;
  },
  c8 = Q((e, { spacing: t, breakpoints: r, cols: n }) => {
    const o = i8(e, r).reduce((i, l) => {
      const a = "maxWidth" in l ? "max-width" : "min-width",
        s = e.fn.size({
          size: a === "max-width" ? l.maxWidth : l.minWidth,
          sizes: e.breakpoints,
        });
      return (
        (i[`@media (${a}: ${s + (a === "max-width" ? 0 : 1)}px)`] = {
          gridTemplateColumns: `repeat(${l.cols}, minmax(0, 1fr))`,
          gap: e.fn.size({ size: l.spacing || t, sizes: e.spacing }),
        }),
        i
      );
    }, {});
    return {
      root: u8(
        {
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
          gap: e.fn.size({ size: t, sizes: e.spacing }),
        },
        o
      ),
    };
  }),
  f8 = c8,
  d8 = Object.defineProperty,
  vs = Object.getOwnPropertySymbols,
  ib = Object.prototype.hasOwnProperty,
  lb = Object.prototype.propertyIsEnumerable,
  Ph = (e, t, r) =>
    t in e
      ? d8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  p8 = (e, t) => {
    for (var r in t || (t = {})) ib.call(t, r) && Ph(e, r, t[r]);
    if (vs) for (var r of vs(t)) lb.call(t, r) && Ph(e, r, t[r]);
    return e;
  },
  g8 = (e, t) => {
    var r = {};
    for (var n in e) ib.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && vs)
      for (var n of vs(e)) t.indexOf(n) < 0 && lb.call(e, n) && (r[n] = e[n]);
    return r;
  };
const m8 = { breakpoints: [], cols: 1, spacing: "md" },
  ab = g.exports.forwardRef((e, t) => {
    const r = ee("SimpleGrid", m8, e),
      {
        className: n,
        breakpoints: o,
        cols: i,
        spacing: l,
        children: a,
        unstyled: s,
      } = r,
      u = g8(r, [
        "className",
        "breakpoints",
        "cols",
        "spacing",
        "children",
        "unstyled",
      ]),
      { classes: c, cx: f } = f8(
        { breakpoints: o, cols: i, spacing: l },
        { unstyled: s, name: "SimpleGrid" }
      );
    return S(q, { ...p8({ className: f(c.root, n), ref: t }, u), children: a });
  });
ab.displayName = "@mantine/core/SimpleGrid";
var v8 = Object.defineProperty,
  h8 = Object.defineProperties,
  y8 = Object.getOwnPropertyDescriptors,
  $h = Object.getOwnPropertySymbols,
  w8 = Object.prototype.hasOwnProperty,
  _8 = Object.prototype.propertyIsEnumerable,
  Oh = (e, t, r) =>
    t in e
      ? v8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ch = (e, t) => {
    for (var r in t || (t = {})) w8.call(t, r) && Oh(e, r, t[r]);
    if ($h) for (var r of $h(t)) _8.call(t, r) && Oh(e, r, t[r]);
    return e;
  },
  Eh = (e, t) => h8(e, y8(t));
const S8 = { xs: 16, sm: 20, md: 24, lg: 30, xl: 36 },
  uc = { xs: 30, sm: 38, md: 46, lg: 56, xl: 68 },
  kh = { xs: 12, sm: 14, md: 18, lg: 22, xl: 28 },
  b8 = { xs: 5, sm: 6, md: 7, lg: 9, xl: 11 };
var x8 = Q((e, { size: t, radius: r, color: n, offLabel: o, onLabel: i }) => {
    const l = e.fn.size({ size: t, sizes: kh }),
      a = e.fn.size({ size: r, sizes: e.radius }),
      s = e.fn.variant({ variant: "filled", color: n });
    return {
      root: { display: "flex", alignItems: "center" },
      input: Eh(Ch({}, e.fn.focusStyles()), {
        overflow: "hidden",
        WebkitTapHighlightColor: "transparent",
        position: "relative",
        borderRadius: a,
        backgroundColor:
          e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[2],
        border: `1px solid ${
          e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]
        }`,
        height: e.fn.size({ size: t, sizes: S8 }),
        width: e.fn.size({ size: t, sizes: uc }),
        minWidth: e.fn.size({ size: t, sizes: uc }),
        margin: 0,
        transitionProperty: "background-color, border-color",
        transitionTimingFunction: e.transitionTimingFunction,
        transitionDuration: "150ms",
        boxSizing: "border-box",
        appearance: "none",
        display: "flex",
        alignItems: "center",
        fontSize: e.fn.size({ size: t, sizes: b8 }),
        fontWeight: 600,
        cursor: e.cursorType,
        "&::before": {
          zIndex: 1,
          borderRadius: a,
          boxSizing: "border-box",
          content: '""',
          display: "block",
          backgroundColor: e.white,
          height: l,
          width: l,
          border: `1px solid ${
            e.colorScheme === "dark" ? e.white : e.colors.gray[3]
          }`,
          transition: `transform 150ms ${e.transitionTimingFunction}`,
          transform: `translateX(${t === "xs" ? 1 : 2}px)`,
          "@media (prefers-reduced-motion)": {
            transitionDuration: e.respectReducedMotion ? "0ms" : !1,
          },
        },
        "&::after": {
          position: "absolute",
          zIndex: 0,
          display: "flex",
          height: "100%",
          alignItems: "center",
          lineHeight: 0,
          right: "10%",
          transform: "translateX(0)",
          content: o ? `'${o}'` : "''",
          color: e.colorScheme === "dark" ? e.colors.dark[1] : e.colors.gray[6],
          transition: `color 150ms ${e.transitionTimingFunction}`,
        },
        "&:checked": {
          backgroundColor: s.background,
          borderColor: s.background,
          "&::before": {
            transform: `translateX(${
              e.fn.size({ size: t, sizes: uc }) -
              e.fn.size({ size: t, sizes: kh }) -
              (t === "xs" ? 3 : 4)
            }px)`,
            borderColor: e.white,
          },
          "&::after": {
            position: "absolute",
            zIndex: 0,
            display: "flex",
            height: "100%",
            alignItems: "center",
            lineHeight: 0,
            left: "10%",
            transform: "translateX(0)",
            content: i ? `'${i}'` : "''",
            color: e.white,
            transition: `color 150ms ${e.transitionTimingFunction}`,
          },
        },
        "&:disabled": {
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
          borderColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
          cursor: "not-allowed",
          "&::before": {
            borderColor:
              e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
            backgroundColor:
              e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[0],
          },
        },
      }),
      label: Eh(Ch({}, e.fn.fontStyles()), {
        WebkitTapHighlightColor: "transparent",
        fontSize: e.fn.size({ size: t, sizes: e.fontSizes }),
        fontFamily: e.fontFamily,
        paddingLeft: e.spacing.sm,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        cursor: e.cursorType,
      }),
    };
  }),
  P8 = x8,
  $8 = Object.defineProperty,
  O8 = Object.defineProperties,
  C8 = Object.getOwnPropertyDescriptors,
  hs = Object.getOwnPropertySymbols,
  sb = Object.prototype.hasOwnProperty,
  ub = Object.prototype.propertyIsEnumerable,
  Rh = (e, t, r) =>
    t in e
      ? $8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  cc = (e, t) => {
    for (var r in t || (t = {})) sb.call(t, r) && Rh(e, r, t[r]);
    if (hs) for (var r of hs(t)) ub.call(t, r) && Rh(e, r, t[r]);
    return e;
  },
  E8 = (e, t) => O8(e, C8(t)),
  k8 = (e, t) => {
    var r = {};
    for (var n in e) sb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && hs)
      for (var n of hs(e)) t.indexOf(n) < 0 && ub.call(e, n) && (r[n] = e[n]);
    return r;
  };
const R8 = { offLabel: "", onLabel: "", size: "sm", radius: "xl" },
  np = g.exports.forwardRef((e, t) => {
    const r = ee("Switch", R8, e),
      {
        className: n,
        color: o,
        label: i,
        offLabel: l,
        onLabel: a,
        id: s,
        style: u,
        size: c,
        radius: f,
        wrapperProps: d,
        children: p,
        unstyled: y,
        styles: w,
        classNames: v,
        sx: m,
      } = r,
      h = k8(r, [
        "className",
        "color",
        "label",
        "offLabel",
        "onLabel",
        "id",
        "style",
        "size",
        "radius",
        "wrapperProps",
        "children",
        "unstyled",
        "styles",
        "classNames",
        "sx",
      ]),
      { classes: _, cx: b } = P8(
        { size: c, color: o, radius: f, offLabel: l, onLabel: a },
        { unstyled: y, styles: w, classNames: v, name: "Switch" }
      ),
      { systemStyles: O, rest: x } = nu(h),
      P = lo(s);
    return U(q, {
      ...cc(cc({ className: b(_.root, n), style: u, sx: m }, O), d),
      children: [
        S("input", {
          ...E8(cc({}, x), {
            id: P,
            ref: t,
            type: "checkbox",
            className: _.input,
          }),
        }),
        i && S("label", { className: _.label, htmlFor: P, children: i }),
      ],
    });
  });
np.displayName = "@mantine/core/Switch";
var I8 = Object.defineProperty,
  N8 = Object.defineProperties,
  z8 = Object.getOwnPropertyDescriptors,
  Ih = Object.getOwnPropertySymbols,
  D8 = Object.prototype.hasOwnProperty,
  T8 = Object.prototype.propertyIsEnumerable,
  Nh = (e, t, r) =>
    t in e
      ? I8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  M8 = (e, t) => {
    for (var r in t || (t = {})) D8.call(t, r) && Nh(e, r, t[r]);
    if (Ih) for (var r of Ih(t)) T8.call(t, r) && Nh(e, r, t[r]);
    return e;
  },
  j8 = (e, t) => N8(e, z8(t)),
  L8 = Q(
    (
      e,
      { captionSide: t, horizontalSpacing: r, verticalSpacing: n, fontSize: o }
    ) => ({
      root: j8(M8({}, e.fn.fontStyles()), {
        width: "100%",
        borderCollapse: "collapse",
        captionSide: t,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        lineHeight: e.lineHeight,
        "& caption": {
          marginTop: t === "top" ? 0 : e.spacing.xs,
          marginBottom: t === "bottom" ? 0 : e.spacing.xs,
          fontSize: e.fontSizes.sm,
          color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
        },
        "& thead tr th, & tfoot tr th": {
          textAlign: "left",
          fontWeight: "bold",
          color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[7],
          fontSize: e.fn.size({ size: o, sizes: e.fontSizes }),
          padding: `${e.fn.size({ size: n, sizes: e.spacing })}px ${e.fn.size({
            size: r,
            sizes: e.spacing,
          })}px`,
        },
        "& thead tr th": {
          borderBottom: `1px solid ${
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]
          }`,
        },
        "& tfoot tr th": {
          borderTop: `1px solid ${
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]
          }`,
        },
        "& tbody tr td": {
          padding: `${e.fn.size({ size: n, sizes: e.spacing })}px ${e.fn.size({
            size: r,
            sizes: e.spacing,
          })}px`,
          borderBottom: `1px solid ${
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]
          }`,
          fontSize: e.fn.size({ size: o, sizes: e.fontSizes }),
        },
        "& tbody tr:last-of-type td": { borderBottom: "none" },
        "&[data-striped] tbody tr:nth-of-type(odd)": {
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0],
        },
        "&[data-hover] tbody tr": e.fn.hover({
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1],
        }),
      }),
    })
  ),
  F8 = L8,
  A8 = Object.defineProperty,
  V8 = Object.defineProperties,
  H8 = Object.getOwnPropertyDescriptors,
  ys = Object.getOwnPropertySymbols,
  cb = Object.prototype.hasOwnProperty,
  fb = Object.prototype.propertyIsEnumerable,
  zh = (e, t, r) =>
    t in e
      ? A8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  B8 = (e, t) => {
    for (var r in t || (t = {})) cb.call(t, r) && zh(e, r, t[r]);
    if (ys) for (var r of ys(t)) fb.call(t, r) && zh(e, r, t[r]);
    return e;
  },
  W8 = (e, t) => V8(e, H8(t)),
  U8 = (e, t) => {
    var r = {};
    for (var n in e) cb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ys)
      for (var n of ys(e)) t.indexOf(n) < 0 && fb.call(e, n) && (r[n] = e[n]);
    return r;
  };
const G8 = {
    striped: !1,
    highlightOnHover: !1,
    captionSide: "top",
    horizontalSpacing: "xs",
    fontSize: "sm",
    verticalSpacing: 7,
  },
  db = g.exports.forwardRef((e, t) => {
    const r = ee("Table", G8, e),
      {
        className: n,
        children: o,
        striped: i,
        highlightOnHover: l,
        captionSide: a,
        horizontalSpacing: s,
        verticalSpacing: u,
        fontSize: c,
        unstyled: f,
      } = r,
      d = U8(r, [
        "className",
        "children",
        "striped",
        "highlightOnHover",
        "captionSide",
        "horizontalSpacing",
        "verticalSpacing",
        "fontSize",
        "unstyled",
      ]),
      { classes: p, cx: y } = F8(
        {
          captionSide: a,
          verticalSpacing: u,
          horizontalSpacing: s,
          fontSize: c,
        },
        { unstyled: f, name: "Table" }
      );
    return S(q, {
      ...W8(B8({}, d), {
        component: "table",
        ref: t,
        className: y(p.root, n),
        "data-striped": i || void 0,
        "data-hover": l || void 0,
      }),
      children: o,
    });
  });
db.displayName = "@mantine/core/Table";
const Sf = {
    context: "Tabs component was not found in the tree",
    value:
      "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",
  },
  [Y8, op] = Id(Sf.context);
var X8 = Object.defineProperty,
  Dh = Object.getOwnPropertySymbols,
  q8 = Object.prototype.hasOwnProperty,
  K8 = Object.prototype.propertyIsEnumerable,
  Th = (e, t, r) =>
    t in e
      ? X8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Q8 = (e, t) => {
    for (var r in t || (t = {})) q8.call(t, r) && Th(e, r, t[r]);
    if (Dh) for (var r of Dh(t)) K8.call(t, r) && Th(e, r, t[r]);
    return e;
  };
function Z8({ variant: e, orientation: t, inverted: r }, n) {
  const o = t === "vertical";
  return e === "default"
    ? {
        [o ? "borderRight" : r ? "borderTop" : "borderBottom"]: `2px solid ${
          n.colorScheme === "dark" ? n.colors.dark[4] : n.colors.gray[3]
        }`,
      }
    : e === "outline"
    ? {
        [o ? "borderRight" : r ? "borderTop" : "borderBottom"]: `1px solid ${
          n.colorScheme === "dark" ? n.colors.dark[4] : n.colors.gray[3]
        }`,
      }
    : e === "pills"
    ? { gap: n.spacing.sm / 2 }
    : {};
}
var J8 = Q((e, t) => {
    const r = t.orientation === "vertical";
    return {
      tabsList: Q8(
        {
          display: "flex",
          flexDirection: r ? "column" : "row",
          justifyContent: eS[t.position],
          '& [role="tab"]': { flex: t.grow ? 1 : void 0 },
        },
        Z8(t, e)
      ),
    };
  }),
  eN = J8,
  tN = Object.defineProperty,
  rN = Object.defineProperties,
  nN = Object.getOwnPropertyDescriptors,
  ws = Object.getOwnPropertySymbols,
  pb = Object.prototype.hasOwnProperty,
  gb = Object.prototype.propertyIsEnumerable,
  Mh = (e, t, r) =>
    t in e
      ? tN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  oN = (e, t) => {
    for (var r in t || (t = {})) pb.call(t, r) && Mh(e, r, t[r]);
    if (ws) for (var r of ws(t)) gb.call(t, r) && Mh(e, r, t[r]);
    return e;
  },
  iN = (e, t) => rN(e, nN(t)),
  lN = (e, t) => {
    var r = {};
    for (var n in e) pb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ws)
      for (var n of ws(e)) t.indexOf(n) < 0 && gb.call(e, n) && (r[n] = e[n]);
    return r;
  };
const mb = g.exports.forwardRef((e, t) => {
  var r = e,
    { children: n, className: o, grow: i = !1, position: l = "left" } = r,
    a = lN(r, ["children", "className", "grow", "position"]);
  const { orientation: s, variant: u, color: c, radius: f, inverted: d } = op(),
    { classNames: p, styles: y, unstyled: w } = dn(),
    { classes: v, cx: m } = eN(
      {
        orientation: s,
        grow: i,
        variant: u,
        color: c,
        position: l,
        radius: f,
        inverted: d,
      },
      { name: "Tabs", unstyled: w, classNames: p, styles: y }
    );
  return S(q, {
    ...iN(oN({}, a), {
      className: m(v.tabsList, o),
      ref: t,
      role: "tablist",
      "aria-orientation": s,
    }),
    children: n,
  });
});
mb.displayName = "@mantine/core/TabsList";
var aN = Q((e, { orientation: t }) => ({
    panel: { flex: t === "vertical" ? 1 : void 0 },
  })),
  sN = aN,
  uN = Object.defineProperty,
  cN = Object.defineProperties,
  fN = Object.getOwnPropertyDescriptors,
  _s = Object.getOwnPropertySymbols,
  vb = Object.prototype.hasOwnProperty,
  hb = Object.prototype.propertyIsEnumerable,
  jh = (e, t, r) =>
    t in e
      ? uN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  dN = (e, t) => {
    for (var r in t || (t = {})) vb.call(t, r) && jh(e, r, t[r]);
    if (_s) for (var r of _s(t)) hb.call(t, r) && jh(e, r, t[r]);
    return e;
  },
  pN = (e, t) => cN(e, fN(t)),
  gN = (e, t) => {
    var r = {};
    for (var n in e) vb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && _s)
      for (var n of _s(e)) t.indexOf(n) < 0 && hb.call(e, n) && (r[n] = e[n]);
    return r;
  };
const yb = g.exports.forwardRef((e, t) => {
  var r = e,
    { value: n, children: o, sx: i, className: l } = r,
    a = gN(r, ["value", "children", "sx", "className"]);
  const s = op(),
    { classNames: u, styles: c, unstyled: f } = dn(),
    { classes: d, cx: p } = sN(
      {
        orientation: s.orientation,
        variant: s.variant,
        color: s.color,
        radius: s.radius,
        inverted: s.inverted,
      },
      { name: "Tabs", unstyled: f, classNames: u, styles: c }
    );
  return S(q, {
    ...pN(dN({}, a), {
      ref: t,
      sx: [{ display: s.value !== n ? "none" : void 0 }, ...Si(i)],
      className: p(d.panel, l),
      role: "tabpanel",
      id: s.getPanelId(n),
      "aria-labelledby": s.getTabId(n),
    }),
    children: o,
  });
});
yb.displayName = "@mantine/core/TabsPanel";
var mN = Object.defineProperty,
  vN = Object.defineProperties,
  hN = Object.getOwnPropertyDescriptors,
  Lh = Object.getOwnPropertySymbols,
  yN = Object.prototype.hasOwnProperty,
  wN = Object.prototype.propertyIsEnumerable,
  Fh = (e, t, r) =>
    t in e
      ? mN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  In = (e, t) => {
    for (var r in t || (t = {})) yN.call(t, r) && Fh(e, r, t[r]);
    if (Lh) for (var r of Lh(t)) wN.call(t, r) && Fh(e, r, t[r]);
    return e;
  },
  Ah = (e, t) => vN(e, hN(t));
function _N(
  e,
  { variant: t, orientation: r, color: n, radius: o, inverted: i }
) {
  const l = r === "vertical",
    a = e.fn.variant({ color: n, variant: "filled" }),
    s = e.fn.radius(o),
    u =
      r === "vertical"
        ? `${s}px 0 0 ${s}px`
        : i
        ? `0 0 ${s}px ${s}px`
        : `${s}px ${s}px 0 0`;
  return t === "default"
    ? Ah(
        In(
          {
            [l ? "borderRight" : i ? "borderTop" : "borderBottom"]:
              "2px solid transparent",
            [l ? "marginRight" : i ? "marginTop" : "marginBottom"]: -2,
            borderRadius: u,
          },
          e.fn.hover({
            backgroundColor:
              e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0],
            borderColor:
              e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3],
          })
        ),
        {
          "&[data-active]": In(
            {
              borderColor: a.background,
              color: e.colorScheme === "dark" ? e.white : e.black,
            },
            e.fn.hover({ borderColor: a.background })
          ),
        }
      )
    : t === "outline"
    ? {
        borderRadius: u,
        border: "1px solid transparent",
        [l ? "borderRight" : i ? "borderTop" : "borderBottom"]: "none",
        "&[data-active]": {
          borderColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3],
          "&::before": {
            content: '""',
            backgroundColor:
              e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
            position: "absolute",
            bottom: l ? 0 : i ? "unset" : -1,
            top: l ? 0 : i ? -1 : "unset",
            [l ? "width" : "height"]: 1,
            right: l ? -1 : 0,
            left: l ? "unset" : 0,
          },
        },
      }
    : t === "pills"
    ? Ah(
        In(
          { borderRadius: e.fn.radius(o) },
          e.fn.hover({
            backgroundColor:
              e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0],
          })
        ),
        {
          "&[data-active]": In(
            { backgroundColor: a.background, color: e.white },
            e.fn.hover({ backgroundColor: a.background })
          ),
        }
      )
    : {};
}
var SN = Q((e, t) => ({
    tabLabel: {},
    tab: In(
      {
        position: "relative",
        padding: `${e.spacing.xs}px ${e.spacing.md}px`,
        paddingLeft: t.withIcon ? e.spacing.xs : void 0,
        paddingRight: t.withRightSection ? e.spacing.xs : void 0,
        fontSize: e.fontSizes.sm,
        whiteSpace: "nowrap",
        zIndex: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: t.orientation === "horizontal" ? "center" : void 0,
        lineHeight: 1,
        "&:disabled": In(
          { opacity: 0.5, cursor: "not-allowed" },
          e.fn.hover({ backgroundColor: "transparent" })
        ),
        "&:focus": { zIndex: 1 },
      },
      _N(e, t)
    ),
    tabRightSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:not(:only-child)": { marginLeft: 7 },
    },
    tabIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:not(:only-child)": { marginRight: 7 },
    },
  })),
  bN = SN,
  xN = Object.defineProperty,
  PN = Object.defineProperties,
  $N = Object.getOwnPropertyDescriptors,
  Ss = Object.getOwnPropertySymbols,
  wb = Object.prototype.hasOwnProperty,
  _b = Object.prototype.propertyIsEnumerable,
  Vh = (e, t, r) =>
    t in e
      ? xN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ON = (e, t) => {
    for (var r in t || (t = {})) wb.call(t, r) && Vh(e, r, t[r]);
    if (Ss) for (var r of Ss(t)) _b.call(t, r) && Vh(e, r, t[r]);
    return e;
  },
  CN = (e, t) => PN(e, $N(t)),
  EN = (e, t) => {
    var r = {};
    for (var n in e) wb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ss)
      for (var n of Ss(e)) t.indexOf(n) < 0 && _b.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Sb = g.exports.forwardRef((e, t) => {
  var r = e,
    {
      value: n,
      children: o,
      onKeyDown: i,
      onClick: l,
      className: a,
      icon: s,
      rightSection: u,
      color: c,
    } = r,
    f = EN(r, [
      "value",
      "children",
      "onKeyDown",
      "onClick",
      "className",
      "icon",
      "rightSection",
      "color",
    ]);
  const d = op(),
    { classNames: p, styles: y, unstyled: w } = dn(),
    v = !!s,
    m = !!u,
    {
      theme: h,
      classes: _,
      cx: b,
    } = bN(
      {
        withIcon: v || (m && !o),
        withRightSection: m || (v && !o),
        orientation: d.orientation,
        color: c || d.color,
        variant: d.variant,
        radius: d.radius,
        inverted: d.inverted,
      },
      { name: "Tabs", unstyled: w, classNames: p, styles: y }
    ),
    O = n === d.value,
    x = (P) => {
      d.onTabChange(d.allowTabDeactivation && n === d.value ? null : n), l?.(P);
    };
  return U(ou, {
    ...CN(ON({}, f), {
      unstyled: w,
      className: b(_.tab, a),
      "data-active": O || void 0,
      ref: t,
      type: "button",
      role: "tab",
      id: d.getTabId(n),
      "aria-selected": O,
      tabIndex: O || d.value === null ? 0 : -1,
      "aria-controls": d.getPanelId(n),
      onClick: x,
      onKeyDown: g1({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: d.activateTabWithKeyboard,
        loop: d.loop,
        dir: h.dir,
        orientation: d.orientation,
        onKeyDown: i,
      }),
    }),
    children: [
      s && S("div", { className: _.tabIcon, children: s }),
      o && S("div", { className: _.tabLabel, children: o }),
      u && S("div", { className: _.tabRightSection, children: u }),
    ],
  });
});
Sb.displayName = "@mantine/core/Tab";
function bb({
  defaultValue: e,
  value: t,
  onTabChange: r,
  orientation: n,
  children: o,
  loop: i,
  id: l,
  activateTabWithKeyboard: a,
  allowTabDeactivation: s,
  variant: u,
  color: c,
  radius: f,
  inverted: d,
}) {
  const p = lo(l),
    [y, w] = Li({ value: t, defaultValue: e, finalValue: null, onChange: r });
  return E.createElement(
    Y8,
    {
      value: {
        value: y,
        orientation: n,
        id: p,
        loop: i,
        activateTabWithKeyboard: a,
        getTabId: Tg(`${p}-tab`, Sf.value),
        getPanelId: Tg(`${p}-panel`, Sf.value),
        onTabChange: w,
        allowTabDeactivation: s,
        variant: u,
        color: c,
        radius: f,
        inverted: d,
      },
    },
    o
  );
}
bb.displayName = "@mantine/core/TabsProvider";
var kN = Q((e, { orientation: t }) => ({
    root: { display: t === "vertical" ? "flex" : void 0 },
  })),
  RN = kN,
  IN = Object.defineProperty,
  NN = Object.defineProperties,
  zN = Object.getOwnPropertyDescriptors,
  bs = Object.getOwnPropertySymbols,
  xb = Object.prototype.hasOwnProperty,
  Pb = Object.prototype.propertyIsEnumerable,
  Hh = (e, t, r) =>
    t in e
      ? IN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  DN = (e, t) => {
    for (var r in t || (t = {})) xb.call(t, r) && Hh(e, r, t[r]);
    if (bs) for (var r of bs(t)) Pb.call(t, r) && Hh(e, r, t[r]);
    return e;
  },
  TN = (e, t) => NN(e, zN(t)),
  MN = (e, t) => {
    var r = {};
    for (var n in e) xb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && bs)
      for (var n of bs(e)) t.indexOf(n) < 0 && Pb.call(e, n) && (r[n] = e[n]);
    return r;
  };
const jN = {
    orientation: "horizontal",
    loop: !0,
    activateTabWithKeyboard: !0,
    allowTabDeactivation: !1,
    unstyled: !1,
    inverted: !1,
    variant: "default",
  },
  Je = g.exports.forwardRef((e, t) => {
    const r = ee("Tabs", jN, e),
      {
        defaultValue: n,
        value: o,
        orientation: i,
        loop: l,
        activateTabWithKeyboard: a,
        allowTabDeactivation: s,
        children: u,
        id: c,
        onTabChange: f,
        variant: d,
        color: p,
        className: y,
        unstyled: w,
        classNames: v,
        styles: m,
        radius: h,
        inverted: _,
      } = r,
      b = MN(r, [
        "defaultValue",
        "value",
        "orientation",
        "loop",
        "activateTabWithKeyboard",
        "allowTabDeactivation",
        "children",
        "id",
        "onTabChange",
        "variant",
        "color",
        "className",
        "unstyled",
        "classNames",
        "styles",
        "radius",
        "inverted",
      ]),
      { classes: O, cx: x } = RN(
        { orientation: i, color: p, variant: d, radius: h, inverted: _ },
        { unstyled: w, name: "Tabs", classNames: v, styles: m }
      );
    return S(V1, {
      classNames: v,
      styles: m,
      unstyled: w,
      children: S(bb, {
        activateTabWithKeyboard: a,
        defaultValue: n,
        orientation: i,
        onTabChange: f,
        value: o,
        id: c,
        loop: l,
        allowTabDeactivation: s,
        color: p,
        variant: d,
        radius: h,
        inverted: _,
        children: S(q, {
          ...TN(DN({}, b), { className: x(O.root, y), id: c, ref: t }),
          children: u,
        }),
      }),
    });
  });
Je.List = mb;
Je.Tab = Sb;
Je.Panel = yb;
Je.displayName = "@mantine/core/Tabs";
var LN = Object.defineProperty,
  FN = Object.defineProperties,
  AN = Object.getOwnPropertyDescriptors,
  Bh = Object.getOwnPropertySymbols,
  VN = Object.prototype.hasOwnProperty,
  HN = Object.prototype.propertyIsEnumerable,
  Wh = (e, t, r) =>
    t in e
      ? LN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  BN = (e, t) => {
    for (var r in t || (t = {})) VN.call(t, r) && Wh(e, r, t[r]);
    if (Bh) for (var r of Bh(t)) HN.call(t, r) && Wh(e, r, t[r]);
    return e;
  },
  WN = (e, t) => FN(e, AN(t));
const UN = { xs: 16, sm: 20, md: 26, lg: 32, xl: 40 };
var GN = Q((e, { color: t, size: r, radius: n, gradient: o, variant: i }) => {
    const l = e.fn.variant({
        variant: i,
        color: t || e.primaryColor,
        gradient: o,
        primaryFallback: !1,
      }),
      a = e.fn.size({ size: r, sizes: UN });
    return {
      root: WN(BN({}, e.fn.fontStyles()), {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        width: a,
        height: a,
        minWidth: a,
        minHeight: a,
        borderRadius: e.fn.radius(n),
        backgroundColor: l.background,
        color: l.color,
        backgroundImage: i === "gradient" ? l.background : void 0,
        border: `${i === "gradient" ? 0 : 1}px solid ${l.border}`,
      }),
    };
  }),
  YN = GN,
  XN = Object.defineProperty,
  xs = Object.getOwnPropertySymbols,
  $b = Object.prototype.hasOwnProperty,
  Ob = Object.prototype.propertyIsEnumerable,
  Uh = (e, t, r) =>
    t in e
      ? XN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  qN = (e, t) => {
    for (var r in t || (t = {})) $b.call(t, r) && Uh(e, r, t[r]);
    if (xs) for (var r of xs(t)) Ob.call(t, r) && Uh(e, r, t[r]);
    return e;
  },
  KN = (e, t) => {
    var r = {};
    for (var n in e) $b.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && xs)
      for (var n of xs(e)) t.indexOf(n) < 0 && Ob.call(e, n) && (r[n] = e[n]);
    return r;
  };
const QN = {
    size: "md",
    variant: "filled",
    gradient: { from: "blue", to: "cyan", deg: 45 },
  },
  bf = g.exports.forwardRef((e, t) => {
    const r = ee("ThemeIcon", QN, e),
      {
        className: n,
        size: o,
        radius: i,
        variant: l,
        color: a,
        children: s,
        gradient: u,
        unstyled: c,
      } = r,
      f = KN(r, [
        "className",
        "size",
        "radius",
        "variant",
        "color",
        "children",
        "gradient",
        "unstyled",
      ]),
      { classes: d, cx: p } = YN(
        { variant: l, radius: i, color: a, size: o, gradient: u },
        { name: "ThemeIcon", unstyled: c }
      );
    return S(q, { ...qN({ className: p(d.root, n), ref: t }, f), children: s });
  });
bf.displayName = "@mantine/core/ThemeIcon";
const Cb = g.exports.createContext(!1),
  ZN = Cb.Provider,
  JN = () => g.exports.useContext(Cb);
function Eb({ children: e, openDelay: t = 0, closeDelay: r = 0 }) {
  return E.createElement(
    ZN,
    { value: !0 },
    E.createElement(M3, { delay: { open: t, close: r } }, e)
  );
}
Eb.displayName = "@mantine/core/TooltipGroup";
var ez = Object.defineProperty,
  tz = Object.defineProperties,
  rz = Object.getOwnPropertyDescriptors,
  Gh = Object.getOwnPropertySymbols,
  nz = Object.prototype.hasOwnProperty,
  oz = Object.prototype.propertyIsEnumerable,
  Yh = (e, t, r) =>
    t in e
      ? ez(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Xh = (e, t) => {
    for (var r in t || (t = {})) nz.call(t, r) && Yh(e, r, t[r]);
    if (Gh) for (var r of Gh(t)) oz.call(t, r) && Yh(e, r, t[r]);
    return e;
  },
  iz = (e, t) => tz(e, rz(t));
function lz(e, t) {
  if (!t)
    return {
      backgroundColor:
        e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[9],
      color: e.white,
    };
  const r = e.fn.variant({ variant: "filled", color: t, primaryFallback: !1 });
  return { backgroundColor: r.background, color: r.color };
}
var az = Q((e, { color: t, radius: r, width: n, multiline: o }) => ({
    tooltip: iz(Xh(Xh({}, e.fn.fontStyles()), lz(e, t)), {
      lineHeight: e.lineHeight,
      fontSize: e.fontSizes.sm,
      borderRadius: e.fn.radius(r),
      padding: `${e.spacing.xs / 2}px ${e.spacing.xs}px`,
      position: "absolute",
      whiteSpace: o ? "unset" : "nowrap",
      pointerEvents: "none",
      width: n,
    }),
    arrow: { backgroundColor: "inherit", border: 0, zIndex: 1 },
  })),
  kb = az;
const Rb = {
  children:
    "Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
};
function sz({ offset: e, position: t }) {
  const [r, n] = g.exports.useState(!1),
    o = g.exports.useRef(),
    {
      x: i,
      y: l,
      reference: a,
      floating: s,
      refs: u,
      update: c,
      placement: f,
    } = Kd({
      placement: t,
      middleware: [Yd({ crossAxis: !0, padding: 5, rootBoundary: "document" })],
    }),
    d = f.includes("right") ? e : t.includes("left") ? e * -1 : 0,
    p = f.includes("bottom") ? e : t.includes("top") ? e * -1 : 0,
    y = g.exports.useCallback(
      ({ clientX: w, clientY: v }) => {
        a({
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: w,
              y: v,
              left: w + d,
              top: v + p,
              right: w,
              bottom: v,
            };
          },
        });
      },
      [a]
    );
  return (
    g.exports.useEffect(() => {
      if (u.floating.current) {
        const w = o.current;
        w.addEventListener("mousemove", y);
        const v = ln(u.floating.current);
        return (
          v.forEach((m) => {
            m.addEventListener("scroll", c);
          }),
          () => {
            w.removeEventListener("mousemove", y),
              v.forEach((m) => {
                m.removeEventListener("scroll", c);
              });
          }
        );
      }
    }, [a, u.floating, c, y, r]),
    {
      handleMouseMove: y,
      x: i,
      y: l,
      opened: r,
      setOpened: n,
      boundaryRef: o,
      floating: s,
    }
  );
}
var uz = Object.defineProperty,
  cz = Object.defineProperties,
  fz = Object.getOwnPropertyDescriptors,
  Ps = Object.getOwnPropertySymbols,
  Ib = Object.prototype.hasOwnProperty,
  Nb = Object.prototype.propertyIsEnumerable,
  qh = (e, t, r) =>
    t in e
      ? uz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  fc = (e, t) => {
    for (var r in t || (t = {})) Ib.call(t, r) && qh(e, r, t[r]);
    if (Ps) for (var r of Ps(t)) Nb.call(t, r) && qh(e, r, t[r]);
    return e;
  },
  dc = (e, t) => cz(e, fz(t)),
  dz = (e, t) => {
    var r = {};
    for (var n in e) Ib.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ps)
      for (var n of Ps(e)) t.indexOf(n) < 0 && Nb.call(e, n) && (r[n] = e[n]);
    return r;
  };
const pz = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: io("popover"),
};
function zb(e) {
  var t;
  const r = ee("TooltipFloating", pz, e),
    {
      children: n,
      refProp: o,
      withinPortal: i,
      style: l,
      className: a,
      classNames: s,
      styles: u,
      unstyled: c,
      radius: f,
      color: d,
      label: p,
      offset: y,
      position: w,
      multiline: v,
      width: m,
      zIndex: h,
      disabled: _,
    } = r,
    b = dz(r, [
      "children",
      "refProp",
      "withinPortal",
      "style",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "radius",
      "color",
      "label",
      "offset",
      "position",
      "multiline",
      "width",
      "zIndex",
      "disabled",
    ]),
    {
      handleMouseMove: O,
      x,
      y: P,
      opened: $,
      boundaryRef: C,
      floating: I,
      setOpened: z,
    } = sz({ offset: y, position: w }),
    { classes: D, cx: j } = kb(
      { radius: f, color: d, multiline: v, width: m },
      { name: "Tooltip", classNames: s, styles: u, unstyled: c }
    );
  if (!Ti(n)) throw new Error(Rb.children);
  const B = pn(C, n.ref),
    V = (re) => {
      var se, ie;
      (ie = (se = n.props).onMouseEnter) == null || ie.call(se, re),
        O(re),
        z(!0);
    },
    W = (re) => {
      var se, ie;
      (ie = (se = n.props).onMouseLeave) == null || ie.call(se, re), z(!1);
    };
  return U(it, {
    children: [
      S(Fi, {
        withinPortal: i,
        children: S(q, {
          ...dc(fc({}, b), {
            ref: I,
            className: j(D.tooltip, a),
            style: dc(fc({}, l), {
              zIndex: h,
              display: $ && !_ ? "block" : "none",
              top: P ?? "",
              left: (t = Math.round(x)) != null ? t : "",
            }),
          }),
          children: p,
        }),
      }),
      g.exports.cloneElement(
        n,
        dc(fc({}, n.props), { [o]: B, onMouseEnter: V, onMouseLeave: W })
      ),
    ],
  });
}
zb.displayName = "@mantine/core/TooltipFloating";
function gz(e) {
  const [t, r] = g.exports.useState(!1),
    o = typeof e.opened == "boolean" ? e.opened : t,
    i = JN(),
    l = lo(),
    { delay: a, currentId: s, setCurrentId: u } = u_(),
    c = g.exports.useCallback(
      (x) => {
        r(x), x && u(l);
      },
      [u, l]
    ),
    {
      x: f,
      y: d,
      reference: p,
      floating: y,
      context: w,
      refs: v,
      update: m,
      placement: h,
    } = Kd({
      placement: e.position,
      open: o,
      onOpenChange: c,
      middleware: [Qw(e.offset), Yd({ padding: 8 }), Kw()],
    }),
    { getReferenceProps: _, getFloatingProps: b } = N3([
      T3(w, {
        enabled: e.events.hover,
        delay: i ? a : { open: e.openDelay, close: e.closeDelay },
        mouseOnly: !e.events.touch,
      }),
      A3(w, { enabled: e.events.focus, keyboardOnly: !0 }),
      L3(w, { role: "tooltip" }),
      F3(w, { enabled: typeof e.opened === void 0 }),
      j3(w, { id: l }),
    ]);
  return (
    c_({
      opened: o,
      positionDependencies: e.positionDependencies,
      floating: { refs: v, update: m },
    }),
    kr(() => {
      var x;
      (x = e.onPositionChange) == null || x.call(e, h);
    }, [h]),
    {
      x: f,
      y: d,
      reference: p,
      floating: y,
      getFloatingProps: b,
      getReferenceProps: _,
      isGroupPhase: o && s && s !== l,
      opened: o,
      placement: h,
    }
  );
}
var mz = Object.defineProperty,
  vz = Object.defineProperties,
  hz = Object.getOwnPropertyDescriptors,
  $s = Object.getOwnPropertySymbols,
  Db = Object.prototype.hasOwnProperty,
  Tb = Object.prototype.propertyIsEnumerable,
  Kh = (e, t, r) =>
    t in e
      ? mz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Mo = (e, t) => {
    for (var r in t || (t = {})) Db.call(t, r) && Kh(e, r, t[r]);
    if ($s) for (var r of $s(t)) Tb.call(t, r) && Kh(e, r, t[r]);
    return e;
  },
  yz = (e, t) => vz(e, hz(t)),
  wz = (e, t) => {
    var r = {};
    for (var n in e) Db.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && $s)
      for (var n of $s(e)) t.indexOf(n) < 0 && Tb.call(e, n) && (r[n] = e[n]);
    return r;
  };
const _z = {
    position: "top",
    refProp: "ref",
    withinPortal: !1,
    arrowSize: 4,
    arrowOffset: 5,
    offset: 5,
    transition: "fade",
    transitionDuration: 100,
    width: "auto",
    events: { hover: !0, focus: !1, touch: !1 },
    zIndex: io("popover"),
    positionDependencies: [],
  },
  vu = g.exports.forwardRef((e, t) => {
    const r = ee("Tooltip", _z, e),
      {
        children: n,
        position: o,
        refProp: i,
        label: l,
        openDelay: a,
        closeDelay: s,
        onPositionChange: u,
        opened: c,
        withinPortal: f,
        radius: d,
        color: p,
        classNames: y,
        styles: w,
        unstyled: v,
        style: m,
        className: h,
        withArrow: _,
        arrowSize: b,
        arrowOffset: O,
        offset: x,
        transition: P,
        transitionDuration: $,
        multiline: C,
        width: I,
        events: z,
        zIndex: D,
        disabled: j,
        positionDependencies: B,
        onClick: V,
        onMouseEnter: W,
        onMouseLeave: re,
      } = r,
      se = wz(r, [
        "children",
        "position",
        "refProp",
        "label",
        "openDelay",
        "closeDelay",
        "onPositionChange",
        "opened",
        "withinPortal",
        "radius",
        "color",
        "classNames",
        "styles",
        "unstyled",
        "style",
        "className",
        "withArrow",
        "arrowSize",
        "arrowOffset",
        "offset",
        "transition",
        "transitionDuration",
        "multiline",
        "width",
        "events",
        "zIndex",
        "disabled",
        "positionDependencies",
        "onClick",
        "onMouseEnter",
        "onMouseLeave",
      ]),
      {
        classes: ie,
        cx: Ne,
        theme: R,
      } = kb(
        { radius: d, color: p, width: I, multiline: C },
        { name: "Tooltip", classNames: y, styles: w, unstyled: v }
      ),
      T = gz({
        position: P_(R.dir, o),
        closeDelay: s,
        openDelay: a,
        onPositionChange: u,
        opened: c,
        events: z,
        offset: x + (_ ? b / 2 : 0),
        positionDependencies: [...B, n],
      });
    if (!Ti(n)) throw new Error(Rb.children);
    const A = pn(T.reference, n.ref, t);
    return U(it, {
      children: [
        S(Fi, {
          withinPortal: f,
          children: S(pu, {
            mounted: !j && T.opened,
            transition: P,
            duration: T.isGroupPhase ? 10 : $,
            children: (k) => {
              var M, G;
              return U(q, {
                ...Mo(
                  Mo({}, se),
                  T.getFloatingProps({
                    ref: T.floating,
                    className: ie.tooltip,
                    style: yz(Mo(Mo({}, m), k), {
                      zIndex: D,
                      top: (M = T.y) != null ? M : "",
                      left: (G = T.x) != null ? G : "",
                    }),
                  })
                ),
                children: [
                  l,
                  S(Qd, {
                    visible: _,
                    withBorder: !1,
                    position: T.placement,
                    arrowSize: b,
                    arrowOffset: O,
                    className: ie.arrow,
                  }),
                ],
              });
            },
          }),
        }),
        g.exports.cloneElement(
          n,
          T.getReferenceProps(
            Mo(
              {
                onClick: V,
                onMouseEnter: W,
                onMouseLeave: re,
                [i]: A,
                className: Ne(h, n.props.className),
              },
              n.props
            )
          )
        ),
      ],
    });
  });
vu.Group = Eb;
vu.Floating = zb;
vu.displayName = "@mantine/core/Tooltip";
const nt = vu;
function Os() {
  return (
    (Os =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Os.apply(this, arguments)
  );
}
var Zr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Zr || (Zr = {}));
var Qh = function (e) {
    return e;
  },
  Zh = "beforeunload",
  Sz = "hashchange",
  bz = "popstate";
function xz(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.window,
    n = r === void 0 ? document.defaultView : r,
    o = n.history;
  function i() {
    var $ = an(n.location.hash.substr(1)),
      C = $.pathname,
      I = C === void 0 ? "/" : C,
      z = $.search,
      D = z === void 0 ? "" : z,
      j = $.hash,
      B = j === void 0 ? "" : j,
      V = o.state || {};
    return [
      V.idx,
      Qh({
        pathname: I,
        search: D,
        hash: B,
        state: V.usr || null,
        key: V.key || "default",
      }),
    ];
  }
  var l = null;
  function a() {
    if (l) p.call(l), (l = null);
    else {
      var $ = Zr.Pop,
        C = i(),
        I = C[0],
        z = C[1];
      if (p.length) {
        if (I != null) {
          var D = c - I;
          D &&
            ((l = {
              action: $,
              location: z,
              retry: function () {
                x(D * -1);
              },
            }),
            x(D));
        }
      } else _($);
    }
  }
  n.addEventListener(bz, a),
    n.addEventListener(Sz, function () {
      var $ = i(),
        C = $[1];
      pc(C) !== pc(f) && a();
    });
  var s = Zr.Pop,
    u = i(),
    c = u[0],
    f = u[1],
    d = e0(),
    p = e0();
  c == null && ((c = 0), o.replaceState(Os({}, o.state, { idx: c }), ""));
  function y() {
    var $ = document.querySelector("base"),
      C = "";
    if ($ && $.getAttribute("href")) {
      var I = n.location.href,
        z = I.indexOf("#");
      C = z === -1 ? I : I.slice(0, z);
    }
    return C;
  }
  function w($) {
    return y() + "#" + (typeof $ == "string" ? $ : pc($));
  }
  function v($, C) {
    return (
      C === void 0 && (C = null),
      Qh(
        Os(
          { pathname: f.pathname, hash: "", search: "" },
          typeof $ == "string" ? an($) : $,
          { state: C, key: Pz() }
        )
      )
    );
  }
  function m($, C) {
    return [{ usr: $.state, key: $.key, idx: C }, w($)];
  }
  function h($, C, I) {
    return !p.length || (p.call({ action: $, location: C, retry: I }), !1);
  }
  function _($) {
    s = $;
    var C = i();
    (c = C[0]), (f = C[1]), d.call({ action: s, location: f });
  }
  function b($, C) {
    var I = Zr.Push,
      z = v($, C);
    function D() {
      b($, C);
    }
    if (h(I, z, D)) {
      var j = m(z, c + 1),
        B = j[0],
        V = j[1];
      try {
        o.pushState(B, "", V);
      } catch {
        n.location.assign(V);
      }
      _(I);
    }
  }
  function O($, C) {
    var I = Zr.Replace,
      z = v($, C);
    function D() {
      O($, C);
    }
    if (h(I, z, D)) {
      var j = m(z, c),
        B = j[0],
        V = j[1];
      o.replaceState(B, "", V), _(I);
    }
  }
  function x($) {
    o.go($);
  }
  var P = {
    get action() {
      return s;
    },
    get location() {
      return f;
    },
    createHref: w,
    push: b,
    replace: O,
    go: x,
    back: function () {
      x(-1);
    },
    forward: function () {
      x(1);
    },
    listen: function (C) {
      return d.push(C);
    },
    block: function (C) {
      var I = p.push(C);
      return (
        p.length === 1 && n.addEventListener(Zh, Jh),
        function () {
          I(), p.length || n.removeEventListener(Zh, Jh);
        }
      );
    },
  };
  return P;
}
function Jh(e) {
  e.preventDefault(), (e.returnValue = "");
}
function e0() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (r) {
      return (
        e.push(r),
        function () {
          e = e.filter(function (n) {
            return n !== r;
          });
        }
      );
    },
    call: function (r) {
      e.forEach(function (n) {
        return n && n(r);
      });
    },
  };
}
function Pz() {
  return Math.random().toString(36).substr(2, 8);
}
function pc(e) {
  var t = e.pathname,
    r = t === void 0 ? "/" : t,
    n = e.search,
    o = n === void 0 ? "" : n,
    i = e.hash,
    l = i === void 0 ? "" : i;
  return (
    o && o !== "?" && (r += o.charAt(0) === "?" ? o : "?" + o),
    l && l !== "#" && (r += l.charAt(0) === "#" ? l : "#" + l),
    r
  );
}
function an(e) {
  var t = {};
  if (e) {
    var r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    var n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Mb = g.exports.createContext(null),
  ip = g.exports.createContext(null),
  lp = g.exports.createContext({ outlet: null, matches: [] });
function Jt(e, t) {
  if (!e) throw new Error(t);
}
function $z(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? an(t) : t,
    o = Lb(n.pathname || "/", r);
  if (o == null) return null;
  let i = jb(e);
  Oz(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) l = Tz(i[a], o);
  return l;
}
function jb(e, t, r, n) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = ""),
    e.forEach((o, i) => {
      let l = {
        relativePath: o.path || "",
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: i,
        route: o,
      };
      l.relativePath.startsWith("/") &&
        (l.relativePath.startsWith(n) || Jt(!1),
        (l.relativePath = l.relativePath.slice(n.length)));
      let a = tn([n, l.relativePath]),
        s = r.concat(l);
      o.children &&
        o.children.length > 0 &&
        (o.index === !0 && Jt(!1), jb(o.children, t, s, a)),
        !(o.path == null && !o.index) &&
          t.push({ path: a, score: zz(a, o.index), routesMeta: s });
    }),
    t
  );
}
function Oz(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Dz(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const Cz = /^:\w+$/,
  Ez = 3,
  kz = 2,
  Rz = 1,
  Iz = 10,
  Nz = -2,
  t0 = (e) => e === "*";
function zz(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(t0) && (n += Nz),
    t && (n += kz),
    r
      .filter((o) => !t0(o))
      .reduce((o, i) => o + (Cz.test(i) ? Ez : i === "" ? Rz : Iz), n)
  );
}
function Dz(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Tz(e, t) {
  let { routesMeta: r } = e,
    n = {},
    o = "/",
    i = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      s = l === r.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = Mz(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(n, c.params);
    let f = a.route;
    i.push({
      params: n,
      pathname: tn([o, c.pathname]),
      pathnameBase: Fb(tn([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = tn([o, c.pathnameBase]));
  }
  return i;
}
function Mz(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = jz(e.path, e.caseSensitive, e.end),
    o = t.match(r);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: n.reduce((u, c, f) => {
      if (c === "*") {
        let d = a[f] || "";
        l = i.slice(0, i.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Lz(a[f] || "")), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function jz(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0);
  let n = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (l, a) => (n.push(a), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (n.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : (o += r ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
    [new RegExp(o, t ? void 0 : "i"), n]
  );
}
function Lz(e, t) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Fz(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = "",
  } = typeof e == "string" ? an(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Az(r, t)) : t,
    search: Hz(n),
    hash: Bz(o),
  };
}
function Az(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Vz(e, t, r) {
  let n = typeof e == "string" ? an(e) : e,
    o = e === "" || n.pathname === "" ? "/" : n.pathname,
    i;
  if (o == null) i = r;
  else {
    let a = t.length - 1;
    if (o.startsWith("..")) {
      let s = o.split("/");
      for (; s[0] === ".."; ) s.shift(), (a -= 1);
      n.pathname = s.join("/");
    }
    i = a >= 0 ? t[a] : "/";
  }
  let l = Fz(n, i);
  return (
    o &&
      o !== "/" &&
      o.endsWith("/") &&
      !l.pathname.endsWith("/") &&
      (l.pathname += "/"),
    l
  );
}
function Lb(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = e.charAt(t.length);
  return r && r !== "/" ? null : e.slice(t.length) || "/";
}
const tn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Fb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Hz = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Bz = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function hu() {
  return g.exports.useContext(ip) != null;
}
function ap() {
  return hu() || Jt(!1), g.exports.useContext(ip).location;
}
function Bi() {
  hu() || Jt(!1);
  let { basename: e, navigator: t } = g.exports.useContext(Mb),
    { matches: r } = g.exports.useContext(lp),
    { pathname: n } = ap(),
    o = JSON.stringify(r.map((a) => a.pathnameBase)),
    i = g.exports.useRef(!1);
  return (
    g.exports.useEffect(() => {
      i.current = !0;
    }),
    g.exports.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == "number") {
          t.go(a);
          return;
        }
        let u = Vz(a, JSON.parse(o), n);
        e !== "/" && (u.pathname = tn([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state);
      },
      [e, t, o, n]
    )
  );
}
function Wz(e, t) {
  hu() || Jt(!1);
  let { matches: r } = g.exports.useContext(lp),
    n = r[r.length - 1],
    o = n ? n.params : {};
  n && n.pathname;
  let i = n ? n.pathnameBase : "/";
  n && n.route;
  let l = ap(),
    a;
  if (t) {
    var s;
    let d = typeof t == "string" ? an(t) : t;
    i === "/" ||
      ((s = d.pathname) == null ? void 0 : s.startsWith(i)) ||
      Jt(!1),
      (a = d);
  } else a = l;
  let u = a.pathname || "/",
    c = i === "/" ? u : u.slice(i.length) || "/",
    f = $z(e, { pathname: c });
  return Uz(
    f &&
      f.map((d) =>
        Object.assign({}, d, {
          params: Object.assign({}, o, d.params),
          pathname: tn([i, d.pathname]),
          pathnameBase: d.pathnameBase === "/" ? i : tn([i, d.pathnameBase]),
        })
      ),
    r
  );
}
function Uz(e, t) {
  return (
    t === void 0 && (t = []),
    e == null
      ? null
      : e.reduceRight(
          (r, n, o) =>
            g.exports.createElement(lp.Provider, {
              children: n.route.element !== void 0 ? n.route.element : r,
              value: { outlet: r, matches: t.concat(e.slice(0, o + 1)) },
            }),
          null
        )
  );
}
function Bt(e) {
  Jt(!1);
}
function Gz(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: o = Zr.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  hu() && Jt(!1);
  let a = Fb(t),
    s = g.exports.useMemo(
      () => ({ basename: a, navigator: i, static: l }),
      [a, i, l]
    );
  typeof n == "string" && (n = an(n));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: p = "default",
    } = n,
    y = g.exports.useMemo(() => {
      let w = Lb(u, a);
      return w == null
        ? null
        : { pathname: w, search: c, hash: f, state: d, key: p };
    }, [a, u, c, f, d, p]);
  return y == null
    ? null
    : g.exports.createElement(
        Mb.Provider,
        { value: s },
        g.exports.createElement(ip.Provider, {
          children: r,
          value: { location: y, navigationType: o },
        })
      );
}
function Ab(e) {
  let { children: t, location: r } = e;
  return Wz(xf(t), r);
}
function xf(e) {
  let t = [];
  return (
    g.exports.Children.forEach(e, (r) => {
      if (!g.exports.isValidElement(r)) return;
      if (r.type === g.exports.Fragment) {
        t.push.apply(t, xf(r.props.children));
        return;
      }
      r.type !== Bt && Jt(!1);
      let n = {
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        index: r.props.index,
        path: r.props.path,
      };
      r.props.children && (n.children = xf(r.props.children)), t.push(n);
    }),
    t
  );
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yz(e) {
  let { basename: t, children: r, window: n } = e,
    o = g.exports.useRef();
  o.current == null && (o.current = xz({ window: n }));
  let i = o.current,
    [l, a] = g.exports.useState({ action: i.action, location: i.location });
  return (
    g.exports.useLayoutEffect(() => i.listen(a), [i]),
    g.exports.createElement(Gz, {
      basename: t,
      children: r,
      location: l.location,
      navigationType: l.action,
      navigator: i,
    })
  );
}
const Xz = () => !window.invokeNative,
  Vb = () => {},
  Sl = (e, t) => {
    const r = g.exports.useRef(Vb);
    g.exports.useEffect(() => {
      r.current = t;
    }, [t]),
      g.exports.useEffect(() => {
        const n = (o) => {
          const { action: i, data: l } = o.data;
          r.current && i === e && r.current(l);
        };
        return (
          window.addEventListener("message", n),
          () => window.removeEventListener("message", n)
        );
      }, [e]);
  };
function qz(e) {
  let t;
  const r = new Set(),
    n = (u, c) => {
      const f = typeof u == "function" ? u(t) : u;
      if (f !== t) {
        const d = t;
        (t = c ? f : Object.assign({}, t, f)), r.forEach((p) => p(t, d));
      }
    },
    o = () => t,
    i = (u, c = o, f = Object.is) => {
      console.warn(
        "[DEPRECATED] Please use `subscribeWithSelector` middleware"
      );
      let d = c(t);
      function p() {
        const y = c(t);
        if (!f(d, y)) {
          const w = d;
          u((d = y), w);
        }
      }
      return r.add(p), () => r.delete(p);
    },
    s = {
      setState: n,
      getState: o,
      subscribe: (u, c, f) =>
        c || f ? i(u, c, f) : (r.add(u), () => r.delete(u)),
      destroy: () => r.clear(),
    };
  return (t = e(n, o, s)), s;
}
const Kz =
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  r0 = Kz ? g.exports.useEffect : g.exports.useLayoutEffect;
function uo(e) {
  const t = typeof e == "function" ? qz(e) : e,
    r = (n = t.getState, o = Object.is) => {
      const [, i] = g.exports.useReducer((v) => v + 1, 0),
        l = t.getState(),
        a = g.exports.useRef(l),
        s = g.exports.useRef(n),
        u = g.exports.useRef(o),
        c = g.exports.useRef(!1),
        f = g.exports.useRef();
      f.current === void 0 && (f.current = n(l));
      let d,
        p = !1;
      (a.current !== l || s.current !== n || u.current !== o || c.current) &&
        ((d = n(l)), (p = !o(f.current, d))),
        r0(() => {
          p && (f.current = d),
            (a.current = l),
            (s.current = n),
            (u.current = o),
            (c.current = !1);
        });
      const y = g.exports.useRef(l);
      r0(() => {
        const v = () => {
            try {
              const h = t.getState(),
                _ = s.current(h);
              u.current(f.current, _) ||
                ((a.current = h), (f.current = _), i());
            } catch {
              (c.current = !0), i();
            }
          },
          m = t.subscribe(v);
        return t.getState() !== y.current && v(), m;
      }, []);
      const w = p ? d : f.current;
      return g.exports.useDebugValue(w), w;
    };
  return (
    Object.assign(r, t),
    (r[Symbol.iterator] = function () {
      console.warn(
        "[useStore, api] = create() is deprecated and will be removed in v4"
      );
      const n = [r, t];
      return {
        next() {
          const o = n.length <= 0;
          return { value: n.shift(), done: o };
        },
      };
    }),
    r
  );
}
const K = uo(() => ({
    name: "",
    passcode: "",
    autolock: 0,
    items: [{ name: "", metadata: "", remove: !1 }],
    characters: [""],
    groups: [{ name: "", grade: void 0 }],
    lockpickDifficulty: [""],
    maxDistance: 0,
    doorRate: 0,
    lockSound: "",
    unlockSound: "",
    auto: !1,
    state: !1,
    lockpick: !1,
    hideUi: !1,
    doors: !1,
    holdOpen: !1,
  })),
  Qz = K.getState(),
  _e = uo((e, t) => ({
    sounds: [""],
    setSounds: (r) => e({ sounds: r }),
    setLockSound: (r) => K.setState({ lockSound: r }),
    setUnlockSound: (r) => K.setState({ unlockSound: r }),
    setName: (r) => K.setState({ name: r }),
    setPasscode: (r) => K.setState({ passcode: r }),
    setAutolock: (r) => K.setState({ autolock: r }),
    toggleCheckbox: (r) => K.setState((n) => ({ [r]: !n[r] })),
    setMaxDistance: (r) => K.setState(() => ({ maxDistance: r })),
    setItems: (r) => K.setState(({ items: n }) => ({ items: r(n) })),
    setCharacters: (r) =>
      K.setState(({ characters: n }) => ({ characters: r(n) })),
    setGroups: (r) => K.setState(({ groups: n }) => ({ groups: r(n) })),
    setLockpickDifficulty: (r) =>
      K.setState(({ lockpickDifficulty: n }) => ({ lockpickDifficulty: r(n) })),
    setDoorRate: (r) => K.setState({ doorRate: r }),
  }));
var Hb = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  n0 = E.createContext && E.createContext(Hb),
  br =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (br =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        br.apply(this, arguments)
      );
    },
  Zz =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
          t.indexOf(n[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
            (r[n[o]] = e[n[o]]);
      return r;
    };
function Bb(e) {
  return (
    e &&
    e.map(function (t, r) {
      return E.createElement(t.tag, br({ key: r }, t.attr), Bb(t.child));
    })
  );
}
function be(e) {
  return function (t) {
    return E.createElement(Jz, br({ attr: br({}, e.attr) }, t), Bb(e.child));
  };
}
function Jz(e) {
  var t = function (r) {
    var n = e.attr,
      o = e.size,
      i = e.title,
      l = Zz(e, ["attr", "size", "title"]),
      a = o || r.size || "1em",
      s;
    return (
      r.className && (s = r.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      E.createElement(
        "svg",
        br(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          l,
          {
            className: s,
            style: br(br({ color: e.color || r.color }, r.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && E.createElement("title", null, i),
        e.children
      )
    );
  };
  return n0 !== void 0
    ? E.createElement(n0.Consumer, null, function (r) {
        return t(r);
      })
    : t(Hb);
}
function eD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "path", attr: { d: "M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" } },
    ],
  })(e);
}
function tD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      {
        tag: "path",
        attr: {
          d: "M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
        },
      },
      { tag: "path", attr: { d: "M9 17v1a3 3 0 0 0 6 0v-1" } },
    ],
  })(e);
}
function rD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      {
        tag: "path",
        attr: { d: "M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" },
      },
      {
        tag: "path",
        attr: {
          d: "M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M7.003 14.803a2.4 2.4 0 0 0 .997 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805",
        },
      },
    ],
  })(e);
}
function nD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      {
        tag: "rect",
        attr: { x: "3", y: "7", width: "18", height: "13", rx: "2" },
      },
      { tag: "path", attr: { d: "M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" } },
      { tag: "line", attr: { x1: "12", y1: "12", x2: "12", y2: "12.01" } },
      { tag: "path", attr: { d: "M3 13a20 20 0 0 0 18 0" } },
    ],
  })(e);
}
function oD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "polyline", attr: { points: "6 9 12 15 18 9" } },
    ],
  })(e);
}
function iD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "polyline", attr: { points: "6 15 12 9 18 15" } },
    ],
  })(e);
}
function lD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "circle", attr: { cx: "5", cy: "12", r: "1" } },
      { tag: "circle", attr: { cx: "12", cy: "12", r: "1" } },
      { tag: "circle", attr: { cx: "19", cy: "12", r: "1" } },
    ],
  })(e);
}
function aD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      {
        tag: "rect",
        attr: { x: "5", y: "11", width: "14", height: "10", rx: "2" },
      },
      { tag: "circle", attr: { cx: "12", cy: "16", r: "1" } },
      { tag: "path", attr: { d: "M8 11v-4a4 4 0 0 1 8 0v4" } },
    ],
  })(e);
}
function Wb(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "line", attr: { x1: "12", y1: "5", x2: "12", y2: "19" } },
      { tag: "line", attr: { x1: "5", y1: "12", x2: "19", y2: "12" } },
    ],
  })(e);
}
function Ub(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "circle", attr: { cx: "10", cy: "10", r: "7" } },
      { tag: "line", attr: { x1: "21", y1: "21", x2: "15", y2: "15" } },
    ],
  })(e);
}
function sD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "polyline", attr: { points: "8 9 12 5 16 9" } },
      { tag: "polyline", attr: { points: "16 15 12 19 8 15" } },
    ],
  })(e);
}
function yu(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      {
        tag: "path",
        attr: {
          d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
        },
      },
      { tag: "circle", attr: { cx: "12", cy: "12", r: "3" } },
    ],
  })(e);
}
function Wi(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "line", attr: { x1: "4", y1: "7", x2: "20", y2: "7" } },
      { tag: "line", attr: { x1: "10", y1: "11", x2: "10", y2: "17" } },
      { tag: "line", attr: { x1: "14", y1: "11", x2: "14", y2: "17" } },
      {
        tag: "path",
        attr: { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" },
      },
      { tag: "path", attr: { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" } },
    ],
  })(e);
}
function uD(e) {
  return be({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "desc", attr: {}, child: [] },
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
      },
      { tag: "circle", attr: { cx: "12", cy: "7", r: "4" } },
      { tag: "path", attr: { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" } },
    ],
  })(e);
}
const wu = uo((e) => ({ visible: !1, setVisible: (t) => e({ visible: t }) }));
async function xr(e, t) {
  const r = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(t),
    },
    n = window.GetParentResourceName
      ? window.GetParentResourceName()
      : "nui-frame-app";
  return await (await fetch(`https://${n}/${e}`, r)).json();
}
function cD(e, t) {
  const [r, n] = g.exports.useState(e);
  return (
    g.exports.useEffect(() => {
      const o = setTimeout(() => n(e), t || 500);
      return () => {
        clearTimeout(o);
      };
    }, [e, t]),
    r
  );
}
const Pf = uo((e) => ({
    value: "",
    debouncedValue: "",
    setDebouncedValue: (t) => e({ debouncedValue: t }),
    setValue: (t) => e({ value: t }),
  })),
  fD = () => {
    const e = Pf(),
      t = cD(e.value);
    return (
      g.exports.useEffect(() => {
        e.setDebouncedValue(t);
      }, [t]),
      S(it, {
        children: S(Tr, {
          sx: { flex: "1 1 auto", padding: 2 },
          icon: S(Ub, { size: 20 }),
          placeholder: "Search",
          value: e.value ?? "",
          onChange: (r) => e.setValue(r.target.value),
        }),
      })
    );
  },
  dD = Q({
    main: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 16,
      paddingBottom: 0,
    },
  }),
  pD = () => {
    const { classes: e } = dD(),
      t = Bi(),
      r = wu((n) => n.setVisible);
    return U(jt, {
      className: e.main,
      children: [
        S(nt, {
          label: "Create a new door",
          transition: "pop",
          children: S($t, {
            variant: "light",
            color: "blue",
            size: "lg",
            onClick: () => {
              K.setState(Qz, !0), t("/settings/general");
            },
            children: S(Wb, { size: 20 }),
          }),
        }),
        S(fD, {}),
        S(iu, {
          iconSize: 20,
          size: "lg",
          onClick: () => {
            r(!1), xr("exit");
          },
        }),
      ],
    });
  };
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ /**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vt(e, t) {
  return (r) => {
    t.setState((n) => ({ ...n, [e]: dr(r, n[e]) }));
  };
}
function Cs(e) {
  return e instanceof Function;
}
function gD(e, t) {
  const r = [],
    n = (o) => {
      o.forEach((i) => {
        r.push(i);
        const l = t(i);
        l != null && l.length && n(l);
      });
    };
  return n(e), r;
}
function X(e, t, r) {
  let n = [],
    o;
  return () => {
    let i;
    r.key && r.debug && (i = Date.now());
    const l = e();
    if (!(l.length !== n.length || l.some((u, c) => n[c] !== u))) return o;
    n = l;
    let s;
    if (
      (r.key && r.debug && (s = Date.now()),
      (o = t(...l)),
      r == null || r.onChange == null || r.onChange(o),
      r.key && r.debug && r != null && r.debug())
    ) {
      const u = Math.round((Date.now() - i) * 100) / 100,
        c = Math.round((Date.now() - s) * 100) / 100,
        f = c / 16,
        d = (p, y) => {
          for (p = String(p); p.length < y; ) p = " " + p;
          return p;
        };
      console.info(
        "%c\u23F1 " + d(c, 5) + " /" + d(u, 5) + " ms",
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(` +
          Math.max(0, Math.min(120 - 120 * f, 120)) +
          "deg 100% 31%);",
        r?.key
      );
    }
    return o;
  };
}
function mD(e, t, r, n) {
  var o, i;
  const a = { ...e._getDefaultColumnDef(), ...t },
    s = a.accessorKey;
  let u =
      (o = (i = a.id) != null ? i : s ? s.replace(".", "_") : void 0) != null
        ? o
        : typeof a.header == "string"
        ? a.header
        : void 0,
    c;
  if (
    (a.accessorFn
      ? (c = a.accessorFn)
      : s &&
        (s.includes(".")
          ? (c = (d) => {
              let p = d;
              for (const y of s.split(".")) p = p[y];
              return p;
            })
          : (c = (d) => d[a.accessorKey])),
    !u)
  )
    throw new Error();
  let f = {
    id: "" + String(u),
    accessorFn: c,
    parent: n,
    depth: r,
    columnDef: a,
    columns: [],
    getFlatColumns: X(
      () => [!0],
      () => {
        var d;
        return [
          f,
          ...((d = f.columns) == null
            ? void 0
            : d.flatMap((p) => p.getFlatColumns())),
        ];
      },
      {
        key: "column.getFlatColumns",
        debug: () => {
          var d;
          return (d = e.options.debugAll) != null ? d : e.options.debugColumns;
        },
      }
    ),
    getLeafColumns: X(
      () => [e._getOrderColumnsFn()],
      (d) => {
        var p;
        if ((p = f.columns) != null && p.length) {
          let y = f.columns.flatMap((w) => w.getLeafColumns());
          return d(y);
        }
        return [f];
      },
      {
        key: "column.getLeafColumns",
        debug: () => {
          var d;
          return (d = e.options.debugAll) != null ? d : e.options.debugColumns;
        },
      }
    ),
  };
  return (
    (f = e._features.reduce(
      (d, p) =>
        Object.assign(
          d,
          p.createColumn == null ? void 0 : p.createColumn(f, e)
        ),
      f
    )),
    f
  );
}
function o0(e, t, r) {
  var n;
  let i = {
    id: (n = r.id) != null ? n : t.id,
    column: t,
    index: r.index,
    isPlaceholder: !!r.isPlaceholder,
    placeholderId: r.placeholderId,
    depth: r.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const l = [],
        a = (s) => {
          s.subHeaders && s.subHeaders.length && s.subHeaders.map(a), l.push(s);
        };
      return a(i), l;
    },
    getContext: () => ({ table: e, header: i, column: t }),
  };
  return (
    e._features.forEach((l) => {
      Object.assign(i, l.createHeader == null ? void 0 : l.createHeader(i, e));
    }),
    i
  );
}
const vD = {
  createTable: (e) => ({
    getHeaderGroups: X(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right,
      ],
      (t, r, n, o) => {
        var i, l;
        const a =
            (i = n?.map((f) => r.find((d) => d.id === f)).filter(Boolean)) !=
            null
              ? i
              : [],
          s =
            (l = o?.map((f) => r.find((d) => d.id === f)).filter(Boolean)) !=
            null
              ? l
              : [],
          u = r.filter(
            (f) =>
              !(n != null && n.includes(f.id)) &&
              !(o != null && o.includes(f.id))
          );
        return bl(t, [...a, ...u, ...s], e);
      },
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getCenterHeaderGroups: X(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right,
      ],
      (t, r, n, o) => (
        (r = r.filter(
          (i) =>
            !(n != null && n.includes(i.id)) && !(o != null && o.includes(i.id))
        )),
        bl(t, r, e, "center")
      ),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getLeftHeaderGroups: X(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
      ],
      (t, r, n) => {
        var o;
        const i =
          (o = n?.map((l) => r.find((a) => a.id === l)).filter(Boolean)) != null
            ? o
            : [];
        return bl(t, i, e, "left");
      },
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getRightHeaderGroups: X(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right,
      ],
      (t, r, n) => {
        var o;
        const i =
          (o = n?.map((l) => r.find((a) => a.id === l)).filter(Boolean)) != null
            ? o
            : [];
        return bl(t, i, e, "right");
      },
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getFooterGroups: X(
      () => [e.getHeaderGroups()],
      (t) => [...t].reverse(),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getLeftFooterGroups: X(
      () => [e.getLeftHeaderGroups()],
      (t) => [...t].reverse(),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getCenterFooterGroups: X(
      () => [e.getCenterHeaderGroups()],
      (t) => [...t].reverse(),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getRightFooterGroups: X(
      () => [e.getRightHeaderGroups()],
      (t) => [...t].reverse(),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getFlatHeaders: X(
      () => [e.getHeaderGroups()],
      (t) => t.map((r) => r.headers).flat(),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getLeftFlatHeaders: X(
      () => [e.getLeftHeaderGroups()],
      (t) => t.map((r) => r.headers).flat(),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getCenterFlatHeaders: X(
      () => [e.getCenterHeaderGroups()],
      (t) => t.map((r) => r.headers).flat(),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getRightFlatHeaders: X(
      () => [e.getRightHeaderGroups()],
      (t) => t.map((r) => r.headers).flat(),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getCenterLeafHeaders: X(
      () => [e.getCenterFlatHeaders()],
      (t) =>
        t.filter((r) => {
          var n;
          return !((n = r.subHeaders) != null && n.length);
        }),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getLeftLeafHeaders: X(
      () => [e.getLeftFlatHeaders()],
      (t) =>
        t.filter((r) => {
          var n;
          return !((n = r.subHeaders) != null && n.length);
        }),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getRightLeafHeaders: X(
      () => [e.getRightFlatHeaders()],
      (t) =>
        t.filter((r) => {
          var n;
          return !((n = r.subHeaders) != null && n.length);
        }),
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
    getLeafHeaders: X(
      () => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups(),
      ],
      (t, r, n) => {
        var o, i, l, a, s, u;
        return [
          ...((o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : []),
          ...((l = (a = r[0]) == null ? void 0 : a.headers) != null ? l : []),
          ...((s = (u = n[0]) == null ? void 0 : u.headers) != null ? s : []),
        ]
          .map((c) => c.getLeafHeaders())
          .flat();
      },
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugHeaders;
        },
      }
    ),
  }),
};
function bl(e, t, r, n) {
  var o, i;
  let l = 0;
  const a = function (d, p) {
    p === void 0 && (p = 1),
      (l = Math.max(l, p)),
      d
        .filter((y) => y.getIsVisible())
        .forEach((y) => {
          var w;
          (w = y.columns) != null && w.length && a(y.columns, p + 1);
        }, 0);
  };
  a(e);
  let s = [];
  const u = (d, p) => {
      const y = {
          depth: p,
          id: [n, "" + p].filter(Boolean).join("_"),
          headers: [],
        },
        w = [];
      d.forEach((v) => {
        const m = [...w].reverse()[0],
          h = v.column.depth === y.depth;
        let _,
          b = !1;
        if (
          (h && v.column.parent
            ? (_ = v.column.parent)
            : ((_ = v.column), (b = !0)),
          m && m?.column === _)
        )
          m.subHeaders.push(v);
        else {
          const O = o0(r, _, {
            id: [n, p, _.id, v?.id].filter(Boolean).join("_"),
            isPlaceholder: b,
            placeholderId: b
              ? "" + w.filter((x) => x.column === _).length
              : void 0,
            depth: p,
            index: w.length,
          });
          O.subHeaders.push(v), w.push(O);
        }
        y.headers.push(v), (v.headerGroup = y);
      }),
        s.push(y),
        p > 0 && u(w, p - 1);
    },
    c = t.map((d, p) => o0(r, d, { depth: l, index: p }));
  u(c, l - 1), s.reverse();
  const f = (d) =>
    d
      .filter((y) => y.column.getIsVisible())
      .map((y) => {
        let w = 0,
          v = 0,
          m = [0];
        y.subHeaders && y.subHeaders.length
          ? ((m = []),
            f(y.subHeaders).forEach((_) => {
              let { colSpan: b, rowSpan: O } = _;
              (w += b), m.push(O);
            }))
          : (w = 1);
        const h = Math.min(...m);
        return (
          (v = v + h),
          (y.colSpan = w),
          (y.rowSpan = v),
          { colSpan: w, rowSpan: v }
        );
      });
  return f((o = (i = s[0]) == null ? void 0 : i.headers) != null ? o : []), s;
}
const xl = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
  gc = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: !1,
    columnSizingStart: [],
  }),
  hD = {
    getDefaultColumnDef: () => xl,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: gc(),
      ...e,
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      onColumnSizingChange: vt("columnSizing", e),
      onColumnSizingInfoChange: vt("columnSizingInfo", e),
    }),
    createColumn: (e, t) => ({
      getSize: () => {
        var r, n, o;
        const i = t.getState().columnSizing[e.id];
        return Math.min(
          Math.max(
            (r = e.columnDef.minSize) != null ? r : xl.minSize,
            (n = i ?? e.columnDef.size) != null ? n : xl.size
          ),
          (o = e.columnDef.maxSize) != null ? o : xl.maxSize
        );
      },
      getStart: (r) => {
        const n = r
            ? r === "left"
              ? t.getLeftVisibleLeafColumns()
              : t.getRightVisibleLeafColumns()
            : t.getVisibleLeafColumns(),
          o = n.findIndex((i) => i.id === e.id);
        if (o > 0) {
          const i = n[o - 1];
          return i.getStart(r) + i.getSize();
        }
        return 0;
      },
      resetSize: () => {
        t.setColumnSizing((r) => {
          let { [e.id]: n, ...o } = r;
          return o;
        });
      },
      getCanResize: () => {
        var r, n;
        return (
          ((r = e.columnDef.enableResizing) != null ? r : !0) &&
          ((n = t.options.enableColumnResizing) != null ? n : !0)
        );
      },
      getIsResizing: () =>
        t.getState().columnSizingInfo.isResizingColumn === e.id,
    }),
    createHeader: (e, t) => ({
      getSize: () => {
        let r = 0;
        const n = (o) => {
          if (o.subHeaders.length) o.subHeaders.forEach(n);
          else {
            var i;
            r += (i = o.column.getSize()) != null ? i : 0;
          }
        };
        return n(e), r;
      },
      getStart: () => {
        if (e.index > 0) {
          const r = e.headerGroup.headers[e.index - 1];
          return r.getStart() + r.getSize();
        }
        return 0;
      },
      getResizeHandler: () => {
        const r = t.getColumn(e.column.id),
          n = r.getCanResize();
        return (o) => {
          if (
            !n ||
            (o.persist == null || o.persist(),
            mc(o) && o.touches && o.touches.length > 1)
          )
            return;
          const i = e.getSize(),
            l = e
              ? e.getLeafHeaders().map((p) => [p.column.id, p.column.getSize()])
              : [[r.id, r.getSize()]],
            a = mc(o) ? Math.round(o.touches[0].clientX) : o.clientX,
            s = (p, y) => {
              if (typeof y != "number") return;
              let w = {};
              t.setColumnSizingInfo((v) => {
                var m, h;
                const _ = y - ((m = v?.startOffset) != null ? m : 0),
                  b = Math.max(
                    _ / ((h = v?.startSize) != null ? h : 0),
                    -0.999999
                  );
                return (
                  v.columnSizingStart.forEach((O) => {
                    let [x, P] = O;
                    w[x] = Math.round(Math.max(P + P * b, 0) * 100) / 100;
                  }),
                  { ...v, deltaOffset: _, deltaPercentage: b }
                );
              }),
                (t.options.columnResizeMode === "onChange" || p === "end") &&
                  t.setColumnSizing((v) => ({ ...v, ...w }));
            },
            u = (p) => s("move", p),
            c = (p) => {
              s("end", p),
                t.setColumnSizingInfo((y) => ({
                  ...y,
                  isResizingColumn: !1,
                  startOffset: null,
                  startSize: null,
                  deltaOffset: null,
                  deltaPercentage: null,
                  columnSizingStart: [],
                }));
            },
            f = {
              moveHandler: (p) => u(p.clientX),
              upHandler: (p) => {
                document.removeEventListener("mousemove", f.moveHandler),
                  document.removeEventListener("mouseup", f.upHandler),
                  c(p.clientX);
              },
            },
            d = yD() ? { passive: !1 } : !1;
          mc(o) ||
            (document.addEventListener("mousemove", f.moveHandler, d),
            document.addEventListener("mouseup", f.upHandler, d)),
            t.setColumnSizingInfo((p) => ({
              ...p,
              startOffset: a,
              startSize: i,
              deltaOffset: 0,
              deltaPercentage: 0,
              columnSizingStart: l,
              isResizingColumn: r.id,
            }));
        };
      },
    }),
    createTable: (e) => ({
      setColumnSizing: (t) =>
        e.options.onColumnSizingChange == null
          ? void 0
          : e.options.onColumnSizingChange(t),
      setColumnSizingInfo: (t) =>
        e.options.onColumnSizingInfoChange == null
          ? void 0
          : e.options.onColumnSizingInfoChange(t),
      resetColumnSizing: (t) => {
        var r;
        e.setColumnSizing(
          t ? {} : (r = e.initialState.columnSizing) != null ? r : {}
        );
      },
      resetHeaderSizeInfo: (t) => {
        var r;
        e.setColumnSizingInfo(
          t ? gc() : (r = e.initialState.columnSizingInfo) != null ? r : gc()
        );
      },
      getTotalSize: () => {
        var t, r;
        return (t =
          (r = e.getHeaderGroups()[0]) == null
            ? void 0
            : r.headers.reduce((n, o) => n + o.getSize(), 0)) != null
          ? t
          : 0;
      },
      getLeftTotalSize: () => {
        var t, r;
        return (t =
          (r = e.getLeftHeaderGroups()[0]) == null
            ? void 0
            : r.headers.reduce((n, o) => n + o.getSize(), 0)) != null
          ? t
          : 0;
      },
      getCenterTotalSize: () => {
        var t, r;
        return (t =
          (r = e.getCenterHeaderGroups()[0]) == null
            ? void 0
            : r.headers.reduce((n, o) => n + o.getSize(), 0)) != null
          ? t
          : 0;
      },
      getRightTotalSize: () => {
        var t, r;
        return (t =
          (r = e.getRightHeaderGroups()[0]) == null
            ? void 0
            : r.headers.reduce((n, o) => n + o.getSize(), 0)) != null
          ? t
          : 0;
      },
    }),
  };
let Pl = null;
function yD() {
  if (typeof Pl == "boolean") return Pl;
  let e = !1;
  try {
    const t = {
        get passive() {
          return (e = !0), !1;
        },
      },
      r = () => {};
    window.addEventListener("test", r, t),
      window.removeEventListener("test", r);
  } catch {
    e = !1;
  }
  return (Pl = e), Pl;
}
function mc(e) {
  return e.type === "touchstart";
}
const wD = {
    getInitialState: (e) => ({ expanded: {}, ...e }),
    getDefaultOptions: (e) => ({
      onExpandedChange: vt("expanded", e),
      paginateExpandedRows: !0,
    }),
    createTable: (e) => {
      let t = !1,
        r = !1;
      return {
        _autoResetExpanded: () => {
          var n, o;
          if (!t) {
            e._queue(() => {
              t = !0;
            });
            return;
          }
          if (
            (n =
              (o = e.options.autoResetAll) != null
                ? o
                : e.options.autoResetExpanded) != null
              ? n
              : !e.options.manualExpanding
          ) {
            if (r) return;
            (r = !0),
              e._queue(() => {
                e.resetExpanded(), (r = !1);
              });
          }
        },
        setExpanded: (n) =>
          e.options.onExpandedChange == null
            ? void 0
            : e.options.onExpandedChange(n),
        toggleAllRowsExpanded: (n) => {
          n ?? !e.getIsAllRowsExpanded()
            ? e.setExpanded(!0)
            : e.setExpanded({});
        },
        resetExpanded: (n) => {
          var o, i;
          e.setExpanded(
            n
              ? {}
              : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null
              ? o
              : {}
          );
        },
        getCanSomeRowsExpand: () =>
          e.getRowModel().flatRows.some((n) => n.getCanExpand()),
        getToggleAllRowsExpandedHandler: () => (n) => {
          n.persist == null || n.persist(), e.toggleAllRowsExpanded();
        },
        getIsSomeRowsExpanded: () => {
          const n = e.getState().expanded;
          return n === !0 || Object.values(n).some(Boolean);
        },
        getIsAllRowsExpanded: () => {
          const n = e.getState().expanded;
          return typeof n == "boolean"
            ? n === !0
            : !(
                !Object.keys(n).length ||
                e.getRowModel().flatRows.some((o) => o.getIsExpanded())
              );
        },
        getExpandedDepth: () => {
          let n = 0;
          return (
            (e.getState().expanded === !0
              ? Object.keys(e.getRowModel().rowsById)
              : Object.keys(e.getState().expanded)
            ).forEach((i) => {
              const l = i.split(".");
              n = Math.max(n, l.length);
            }),
            n
          );
        },
        getPreExpandedRowModel: () => e.getSortedRowModel(),
        getExpandedRowModel: () => (
          !e._getExpandedRowModel &&
            e.options.getExpandedRowModel &&
            (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
          e.options.manualExpanding || !e._getExpandedRowModel
            ? e.getPreExpandedRowModel()
            : e._getExpandedRowModel()
        ),
      };
    },
    createRow: (e, t) => ({
      toggleExpanded: (r) => {
        t.setExpanded((n) => {
          var o;
          const i = n === !0 ? !0 : !!(n != null && n[e.id]);
          let l = {};
          if (
            (n === !0
              ? Object.keys(t.getRowModel().rowsById).forEach((a) => {
                  l[a] = !0;
                })
              : (l = n),
            (r = (o = r) != null ? o : !i),
            !i && r)
          )
            return { ...l, [e.id]: !0 };
          if (i && !r) {
            const { [e.id]: a, ...s } = l;
            return s;
          }
          return n;
        });
      },
      getIsExpanded: () => {
        var r;
        const n = t.getState().expanded;
        return !!((r =
          t.options.getIsRowExpanded == null
            ? void 0
            : t.options.getIsRowExpanded(e)) != null
          ? r
          : n === !0 || n?.[e.id]);
      },
      getCanExpand: () => {
        var r, n, o;
        return (r =
          t.options.getRowCanExpand == null
            ? void 0
            : t.options.getRowCanExpand(e)) != null
          ? r
          : ((n = t.options.enableExpanding) != null ? n : !0) &&
              !!((o = e.subRows) != null && o.length);
      },
      getToggleExpandedHandler: () => {
        const r = e.getCanExpand();
        return () => {
          !r || e.toggleExpanded();
        };
      },
    }),
  },
  Gb = (e, t, r) => {
    var n;
    const o = r.toLowerCase();
    return (n = e.getValue(t)) == null ? void 0 : n.toLowerCase().includes(o);
  };
Gb.autoRemove = (e) => Pt(e);
const Yb = (e, t, r) => {
  var n;
  return (n = e.getValue(t)) == null ? void 0 : n.includes(r);
};
Yb.autoRemove = (e) => Pt(e);
const Xb = (e, t, r) => {
  var n;
  return (
    ((n = e.getValue(t)) == null ? void 0 : n.toLowerCase()) === r.toLowerCase()
  );
};
Xb.autoRemove = (e) => Pt(e);
const qb = (e, t, r) => {
  var n;
  return (n = e.getValue(t)) == null ? void 0 : n.includes(r);
};
qb.autoRemove = (e) => Pt(e) || !(e != null && e.length);
const Kb = (e, t, r) =>
  !r.some((n) => {
    var o;
    return !((o = e.getValue(t)) != null && o.includes(n));
  });
Kb.autoRemove = (e) => Pt(e) || !(e != null && e.length);
const Qb = (e, t, r) =>
  r.some((n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  });
Qb.autoRemove = (e) => Pt(e) || !(e != null && e.length);
const Zb = (e, t, r) => e.getValue(t) === r;
Zb.autoRemove = (e) => Pt(e);
const Jb = (e, t, r) => e.getValue(t) == r;
Jb.autoRemove = (e) => Pt(e);
const sp = (e, t, r) => {
  let [n, o] = r;
  const i = e.getValue(t);
  return i >= n && i <= o;
};
sp.resolveFilterValue = (e) => {
  let [t, r] = e,
    n = typeof t != "number" ? parseFloat(t) : t,
    o = typeof r != "number" ? parseFloat(r) : r,
    i = t === null || Number.isNaN(n) ? -1 / 0 : n,
    l = r === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const a = i;
    (i = l), (l = a);
  }
  return [i, l];
};
sp.autoRemove = (e) => Pt(e) || (Pt(e[0]) && Pt(e[1]));
const At = {
  includesString: Gb,
  includesStringSensitive: Yb,
  equalsString: Xb,
  arrIncludes: qb,
  arrIncludesAll: Kb,
  arrIncludesSome: Qb,
  equals: Zb,
  weakEquals: Jb,
  inNumberRange: sp,
};
function Pt(e) {
  return e == null || e === "";
}
const _D = {
  getDefaultColumnDef: () => ({ filterFn: "auto" }),
  getInitialState: (e) => ({ columnFilters: [], globalFilter: void 0, ...e }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: vt("columnFilters", e),
    onGlobalFilterChange: vt("globalFilter", e),
    filterFromLeafRows: !1,
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var r, n;
      const o =
        (r = e.getCoreRowModel().flatRows[0]) == null ||
        (n = r._getAllCellsByColumnId()[t.id]) == null
          ? void 0
          : n.getValue();
      return typeof o == "string" || typeof o == "number";
    },
  }),
  createColumn: (e, t) => ({
    getAutoFilterFn: () => {
      const r = t.getCoreRowModel().flatRows[0],
        n = r?.getValue(e.id);
      return typeof n == "string"
        ? At.includesString
        : typeof n == "number"
        ? At.inNumberRange
        : typeof n == "boolean" || (n !== null && typeof n == "object")
        ? At.equals
        : Array.isArray(n)
        ? At.arrIncludes
        : At.weakEquals;
    },
    getFilterFn: () => {
      var r, n;
      return Cs(e.columnDef.filterFn)
        ? e.columnDef.filterFn
        : e.columnDef.filterFn === "auto"
        ? e.getAutoFilterFn()
        : (r =
            (n = t.options.filterFns) == null
              ? void 0
              : n[e.columnDef.filterFn]) != null
        ? r
        : At[e.columnDef.filterFn];
    },
    getCanFilter: () => {
      var r, n, o;
      return (
        ((r = e.columnDef.enableColumnFilter) != null ? r : !0) &&
        ((n = t.options.enableColumnFilters) != null ? n : !0) &&
        ((o = t.options.enableFilters) != null ? o : !0) &&
        !!e.accessorFn
      );
    },
    getCanGlobalFilter: () => {
      var r, n, o, i;
      return (
        ((r = e.columnDef.enableGlobalFilter) != null ? r : !0) &&
        ((n = t.options.enableGlobalFilter) != null ? n : !0) &&
        ((o = t.options.enableFilters) != null ? o : !0) &&
        ((i =
          t.options.getColumnCanGlobalFilter == null
            ? void 0
            : t.options.getColumnCanGlobalFilter(e)) != null
          ? i
          : !0) &&
        !!e.accessorFn
      );
    },
    getIsFiltered: () => e.getFilterIndex() > -1,
    getFilterValue: () => {
      var r, n;
      return (r = t.getState().columnFilters) == null ||
        (n = r.find((o) => o.id === e.id)) == null
        ? void 0
        : n.value;
    },
    getFilterIndex: () => {
      var r, n;
      return (r =
        (n = t.getState().columnFilters) == null
          ? void 0
          : n.findIndex((o) => o.id === e.id)) != null
        ? r
        : -1;
    },
    setFilterValue: (r) => {
      t.setColumnFilters((n) => {
        const o = e.getFilterFn(),
          i = n?.find((c) => c.id === e.id),
          l = dr(r, i ? i.value : void 0);
        if (i0(o, l, e)) {
          var a;
          return (a = n?.filter((c) => c.id !== e.id)) != null ? a : [];
        }
        const s = { id: e.id, value: l };
        if (i) {
          var u;
          return (u = n?.map((c) => (c.id === e.id ? s : c))) != null ? u : [];
        }
        return n != null && n.length ? [...n, s] : [s];
      });
    },
    _getFacetedRowModel:
      t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id),
    getFacetedRowModel: () =>
      e._getFacetedRowModel
        ? e._getFacetedRowModel()
        : t.getPreFilteredRowModel(),
    _getFacetedUniqueValues:
      t.options.getFacetedUniqueValues &&
      t.options.getFacetedUniqueValues(t, e.id),
    getFacetedUniqueValues: () =>
      e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map(),
    _getFacetedMinMaxValues:
      t.options.getFacetedMinMaxValues &&
      t.options.getFacetedMinMaxValues(t, e.id),
    getFacetedMinMaxValues: () => {
      if (!!e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
    },
  }),
  createRow: (e, t) => ({ columnFilters: {}, columnFiltersMeta: {} }),
  createTable: (e) => ({
    getGlobalAutoFilterFn: () => At.includesString,
    getGlobalFilterFn: () => {
      var t, r;
      const { globalFilterFn: n } = e.options;
      return Cs(n)
        ? n
        : n === "auto"
        ? e.getGlobalAutoFilterFn()
        : (t = (r = e.options.filterFns) == null ? void 0 : r[n]) != null
        ? t
        : At[n];
    },
    setColumnFilters: (t) => {
      const r = e.getAllLeafColumns(),
        n = (o) => {
          var i;
          return (i = dr(t, o)) == null
            ? void 0
            : i.filter((l) => {
                const a = r.find((s) => s.id === l.id);
                if (a) {
                  const s = a.getFilterFn();
                  if (i0(s, l.value, a)) return !1;
                }
                return !0;
              });
        };
      e.options.onColumnFiltersChange == null ||
        e.options.onColumnFiltersChange(n);
    },
    setGlobalFilter: (t) => {
      e.options.onGlobalFilterChange == null ||
        e.options.onGlobalFilterChange(t);
    },
    resetGlobalFilter: (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    },
    resetColumnFilters: (t) => {
      var r, n;
      e.setColumnFilters(
        t
          ? []
          : (r = (n = e.initialState) == null ? void 0 : n.columnFilters) !=
            null
          ? r
          : []
      );
    },
    getPreFilteredRowModel: () => e.getCoreRowModel(),
    getFilteredRowModel: () => (
      !e._getFilteredRowModel &&
        e.options.getFilteredRowModel &&
        (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
      e.options.manualFiltering || !e._getFilteredRowModel
        ? e.getPreFilteredRowModel()
        : e._getFilteredRowModel()
    ),
    _getGlobalFacetedRowModel:
      e.options.getFacetedRowModel &&
      e.options.getFacetedRowModel(e, "__global__"),
    getGlobalFacetedRowModel: () =>
      e.options.manualFiltering || !e._getGlobalFacetedRowModel
        ? e.getPreFilteredRowModel()
        : e._getGlobalFacetedRowModel(),
    _getGlobalFacetedUniqueValues:
      e.options.getFacetedUniqueValues &&
      e.options.getFacetedUniqueValues(e, "__global__"),
    getGlobalFacetedUniqueValues: () =>
      e._getGlobalFacetedUniqueValues
        ? e._getGlobalFacetedUniqueValues()
        : new Map(),
    _getGlobalFacetedMinMaxValues:
      e.options.getFacetedMinMaxValues &&
      e.options.getFacetedMinMaxValues(e, "__global__"),
    getGlobalFacetedMinMaxValues: () => {
      if (!!e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    },
  }),
};
function i0(e, t, r) {
  return (
    (e && e.autoRemove ? e.autoRemove(t, r) : !1) ||
    typeof t > "u" ||
    (typeof t == "string" && !t)
  );
}
const SD = (e, t, r) =>
    r.reduce((n, o) => {
      const i = o.getValue(e);
      return n + (typeof i == "number" ? i : 0);
    }, 0),
  bD = (e, t, r) => {
    let n;
    return (
      r.forEach((o) => {
        const i = o.getValue(e);
        i != null && (n > i || (n === void 0 && i >= i)) && (n = i);
      }),
      n
    );
  },
  xD = (e, t, r) => {
    let n;
    return (
      r.forEach((o) => {
        const i = o.getValue(e);
        i != null && (n < i || (n === void 0 && i >= i)) && (n = i);
      }),
      n
    );
  },
  PD = (e, t, r) => {
    let n, o;
    return (
      r.forEach((i) => {
        const l = i.getValue(e);
        l != null &&
          (n === void 0
            ? l >= l && (n = o = l)
            : (n > l && (n = l), o < l && (o = l)));
      }),
      [n, o]
    );
  },
  $D = (e, t) => {
    let r = 0,
      n = 0;
    if (
      (t.forEach((o) => {
        let i = o.getValue(e);
        i != null && (i = +i) >= i && (++r, (n += i));
      }),
      r)
    )
      return n / r;
  },
  OD = (e, t) => {
    if (!t.length) return;
    let r = 0,
      n = 0;
    return (
      t.forEach((o) => {
        let i = o.getValue(e);
        typeof i == "number" && ((r = Math.min(r, i)), (n = Math.max(n, i)));
      }),
      (r + n) / 2
    );
  },
  CD = (e, t) => Array.from(new Set(t.map((r) => r.getValue(e))).values()),
  ED = (e, t) => new Set(t.map((r) => r.getValue(e))).size,
  kD = (e, t) => t.length,
  vc = {
    sum: SD,
    min: bD,
    max: xD,
    extent: PD,
    mean: $D,
    median: OD,
    unique: CD,
    uniqueCount: ED,
    count: kD,
  },
  RD = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, r;
        return (t =
          (r = e.getValue()) == null || r.toString == null
            ? void 0
            : r.toString()) != null
          ? t
          : null;
      },
      aggregationFn: "auto",
    }),
    getInitialState: (e) => ({ grouping: [], ...e }),
    getDefaultOptions: (e) => ({
      onGroupingChange: vt("grouping", e),
      groupedColumnMode: "reorder",
    }),
    createColumn: (e, t) => ({
      toggleGrouping: () => {
        t.setGrouping((r) =>
          r != null && r.includes(e.id)
            ? r.filter((n) => n !== e.id)
            : [...(r ?? []), e.id]
        );
      },
      getCanGroup: () => {
        var r, n, o, i;
        return (r =
          (n =
            (o = (i = e.columnDef.enableGrouping) != null ? i : !0) != null
              ? o
              : t.options.enableGrouping) != null
            ? n
            : !0) != null
          ? r
          : !!e.accessorFn;
      },
      getIsGrouped: () => {
        var r;
        return (r = t.getState().grouping) == null ? void 0 : r.includes(e.id);
      },
      getGroupedIndex: () => {
        var r;
        return (r = t.getState().grouping) == null ? void 0 : r.indexOf(e.id);
      },
      getToggleGroupingHandler: () => {
        const r = e.getCanGroup();
        return () => {
          !r || e.toggleGrouping();
        };
      },
      getAutoAggregationFn: () => {
        const r = t.getCoreRowModel().flatRows[0],
          n = r?.getValue(e.id);
        if (typeof n == "number") return vc.sum;
        if (Object.prototype.toString.call(n) === "[object Date]")
          return vc.extent;
      },
      getAggregationFn: () => {
        var r, n;
        if (!e) throw new Error();
        return Cs(e.columnDef.aggregationFn)
          ? e.columnDef.aggregationFn
          : e.columnDef.aggregationFn === "auto"
          ? e.getAutoAggregationFn()
          : (r =
              (n = t.options.aggregationFns) == null
                ? void 0
                : n[e.columnDef.aggregationFn]) != null
          ? r
          : vc[e.columnDef.aggregationFn];
      },
    }),
    createTable: (e) => ({
      setGrouping: (t) =>
        e.options.onGroupingChange == null
          ? void 0
          : e.options.onGroupingChange(t),
      resetGrouping: (t) => {
        var r, n;
        e.setGrouping(
          t
            ? []
            : (r = (n = e.initialState) == null ? void 0 : n.grouping) != null
            ? r
            : []
        );
      },
      getPreGroupedRowModel: () => e.getFilteredRowModel(),
      getGroupedRowModel: () => (
        !e._getGroupedRowModel &&
          e.options.getGroupedRowModel &&
          (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
        e.options.manualGrouping || !e._getGroupedRowModel
          ? e.getPreGroupedRowModel()
          : e._getGroupedRowModel()
      ),
    }),
    createRow: (e) => ({
      getIsGrouped: () => !!e.groupingColumnId,
      _groupingValuesCache: {},
    }),
    createCell: (e, t, r, n) => ({
      getIsGrouped: () => t.getIsGrouped() && t.id === r.groupingColumnId,
      getIsPlaceholder: () => !e.getIsGrouped() && t.getIsGrouped(),
      getIsAggregated: () => {
        var o;
        return (
          !e.getIsGrouped() &&
          !e.getIsPlaceholder() &&
          !!((o = r.subRows) != null && o.length)
        );
      },
    }),
  };
function ID(e, t, r) {
  if (!(t != null && t.length) || !r) return e;
  const n = e.filter((i) => !t.includes(i.id));
  return r === "remove"
    ? n
    : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...n];
}
const ND = {
    getInitialState: (e) => ({ columnOrder: [], ...e }),
    getDefaultOptions: (e) => ({ onColumnOrderChange: vt("columnOrder", e) }),
    createTable: (e) => ({
      setColumnOrder: (t) =>
        e.options.onColumnOrderChange == null
          ? void 0
          : e.options.onColumnOrderChange(t),
      resetColumnOrder: (t) => {
        var r;
        e.setColumnOrder(
          t ? [] : (r = e.initialState.columnOrder) != null ? r : []
        );
      },
      _getOrderColumnsFn: X(
        () => [
          e.getState().columnOrder,
          e.getState().grouping,
          e.options.groupedColumnMode,
        ],
        (t, r, n) => (o) => {
          let i = [];
          if (!(t != null && t.length)) i = o;
          else {
            const l = [...t],
              a = [...o];
            for (; a.length && l.length; ) {
              const s = l.shift(),
                u = a.findIndex((c) => c.id === s);
              u > -1 && i.push(a.splice(u, 1)[0]);
            }
            i = [...i, ...a];
          }
          return ID(i, r, n);
        },
        { key: !1 }
      ),
    }),
  },
  $f = 0,
  Of = 10,
  hc = () => ({ pageIndex: $f, pageSize: Of }),
  zD = {
    getInitialState: (e) => ({
      ...e,
      pagination: { ...hc(), ...e?.pagination },
    }),
    getDefaultOptions: (e) => ({ onPaginationChange: vt("pagination", e) }),
    createTable: (e) => {
      let t = !1,
        r = !1;
      return {
        _autoResetPageIndex: () => {
          var n, o;
          if (!t) {
            e._queue(() => {
              t = !0;
            });
            return;
          }
          if (
            (n =
              (o = e.options.autoResetAll) != null
                ? o
                : e.options.autoResetPageIndex) != null
              ? n
              : !e.options.manualPagination
          ) {
            if (r) return;
            (r = !0),
              e._queue(() => {
                e.resetPageIndex(), (r = !1);
              });
          }
        },
        setPagination: (n) => {
          const o = (i) => dr(n, i);
          return e.options.onPaginationChange == null
            ? void 0
            : e.options.onPaginationChange(o);
        },
        resetPagination: (n) => {
          var o;
          e.setPagination(
            n ? hc() : (o = e.initialState.pagination) != null ? o : hc()
          );
        },
        setPageIndex: (n) => {
          e.setPagination((o) => {
            let i = dr(n, o.pageIndex);
            const l =
              typeof e.options.pageCount > "u" || e.options.pageCount === -1
                ? Number.MAX_SAFE_INTEGER
                : e.options.pageCount - 1;
            return (i = Math.min(Math.max(0, i), l)), { ...o, pageIndex: i };
          });
        },
        resetPageIndex: (n) => {
          var o, i, l;
          e.setPageIndex(
            n
              ? $f
              : (o =
                  (i = e.initialState) == null || (l = i.pagination) == null
                    ? void 0
                    : l.pageIndex) != null
              ? o
              : $f
          );
        },
        resetPageSize: (n) => {
          var o, i, l;
          e.setPageSize(
            n
              ? Of
              : (o =
                  (i = e.initialState) == null || (l = i.pagination) == null
                    ? void 0
                    : l.pageSize) != null
              ? o
              : Of
          );
        },
        setPageSize: (n) => {
          e.setPagination((o) => {
            const i = Math.max(1, dr(n, o.pageSize)),
              l = o.pageSize * o.pageIndex,
              a = Math.floor(l / i);
            return { ...o, pageIndex: a, pageSize: i };
          });
        },
        setPageCount: (n) =>
          e.setPagination((o) => {
            var i;
            let l = dr(n, (i = e.options.pageCount) != null ? i : -1);
            return (
              typeof l == "number" && (l = Math.max(-1, l)),
              { ...o, pageCount: l }
            );
          }),
        getPageOptions: X(
          () => [e.getPageCount()],
          (n) => {
            let o = [];
            return (
              n && n > 0 && (o = [...new Array(n)].fill(null).map((i, l) => l)),
              o
            );
          },
          {
            key: !1,
            debug: () => {
              var n;
              return (n = e.options.debugAll) != null
                ? n
                : e.options.debugTable;
            },
          }
        ),
        getCanPreviousPage: () => e.getState().pagination.pageIndex > 0,
        getCanNextPage: () => {
          const { pageIndex: n } = e.getState().pagination,
            o = e.getPageCount();
          return o === -1 ? !0 : o === 0 ? !1 : n < o - 1;
        },
        previousPage: () => e.setPageIndex((n) => n - 1),
        nextPage: () => e.setPageIndex((n) => n + 1),
        getPrePaginationRowModel: () => e.getExpandedRowModel(),
        getPaginationRowModel: () => (
          !e._getPaginationRowModel &&
            e.options.getPaginationRowModel &&
            (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
          e.options.manualPagination || !e._getPaginationRowModel
            ? e.getPrePaginationRowModel()
            : e._getPaginationRowModel()
        ),
        getPageCount: () => {
          var n;
          return (n = e.options.pageCount) != null
            ? n
            : Math.ceil(
                e.getPrePaginationRowModel().rows.length /
                  e.getState().pagination.pageSize
              );
        },
      };
    },
  },
  yc = () => ({ left: [], right: [] }),
  DD = {
    getInitialState: (e) => ({ columnPinning: yc(), ...e }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: vt("columnPinning", e),
    }),
    createColumn: (e, t) => ({
      pin: (r) => {
        const n = e
          .getLeafColumns()
          .map((o) => o.id)
          .filter(Boolean);
        t.setColumnPinning((o) => {
          var i, l;
          if (r === "right") {
            var a, s;
            return {
              left: ((a = o?.left) != null ? a : []).filter(
                (f) => !(n != null && n.includes(f))
              ),
              right: [
                ...((s = o?.right) != null ? s : []).filter(
                  (f) => !(n != null && n.includes(f))
                ),
                ...n,
              ],
            };
          }
          if (r === "left") {
            var u, c;
            return {
              left: [
                ...((u = o?.left) != null ? u : []).filter(
                  (f) => !(n != null && n.includes(f))
                ),
                ...n,
              ],
              right: ((c = o?.right) != null ? c : []).filter(
                (f) => !(n != null && n.includes(f))
              ),
            };
          }
          return {
            left: ((i = o?.left) != null ? i : []).filter(
              (f) => !(n != null && n.includes(f))
            ),
            right: ((l = o?.right) != null ? l : []).filter(
              (f) => !(n != null && n.includes(f))
            ),
          };
        });
      },
      getCanPin: () =>
        e.getLeafColumns().some((n) => {
          var o, i;
          return (
            ((o = n.columnDef.enablePinning) != null ? o : !0) &&
            ((i = t.options.enablePinning) != null ? i : !0)
          );
        }),
      getIsPinned: () => {
        const r = e.getLeafColumns().map((a) => a.id),
          { left: n, right: o } = t.getState().columnPinning,
          i = r.some((a) => n?.includes(a)),
          l = r.some((a) => o?.includes(a));
        return i ? "left" : l ? "right" : !1;
      },
      getPinnedIndex: () => {
        var r, n, o;
        const i = e.getIsPinned();
        return i
          ? (r =
              (n = t.getState().columnPinning) == null || (o = n[i]) == null
                ? void 0
                : o.indexOf(e.id)) != null
            ? r
            : -1
          : 0;
      },
    }),
    createRow: (e, t) => ({
      getCenterVisibleCells: X(
        () => [
          e._getAllVisibleCells(),
          t.getState().columnPinning.left,
          t.getState().columnPinning.right,
        ],
        (r, n, o) => {
          const i = [...(n ?? []), ...(o ?? [])];
          return r.filter((l) => !i.includes(l.column.id));
        },
        {
          key: "row.getCenterVisibleCells",
          debug: () => {
            var r;
            return (r = t.options.debugAll) != null ? r : t.options.debugRows;
          },
        }
      ),
      getLeftVisibleCells: X(
        () => [e._getAllVisibleCells(), t.getState().columnPinning.left, ,],
        (r, n) =>
          (n ?? [])
            .map((i) => r.find((l) => l.column.id === i))
            .filter(Boolean)
            .map((i) => ({ ...i, position: "left" })),
        {
          key: "row.getLeftVisibleCells",
          debug: () => {
            var r;
            return (r = t.options.debugAll) != null ? r : t.options.debugRows;
          },
        }
      ),
      getRightVisibleCells: X(
        () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
        (r, n) =>
          (n ?? [])
            .map((i) => r.find((l) => l.column.id === i))
            .filter(Boolean)
            .map((i) => ({ ...i, position: "left" })),
        {
          key: "row.getRightVisibleCells",
          debug: () => {
            var r;
            return (r = t.options.debugAll) != null ? r : t.options.debugRows;
          },
        }
      ),
    }),
    createTable: (e) => ({
      setColumnPinning: (t) =>
        e.options.onColumnPinningChange == null
          ? void 0
          : e.options.onColumnPinningChange(t),
      resetColumnPinning: (t) => {
        var r, n;
        return e.setColumnPinning(
          t
            ? yc()
            : (r = (n = e.initialState) == null ? void 0 : n.columnPinning) !=
              null
            ? r
            : yc()
        );
      },
      getIsSomeColumnsPinned: (t) => {
        var r;
        const n = e.getState().columnPinning;
        if (!t) {
          var o, i;
          return Boolean(
            ((o = n.left) == null ? void 0 : o.length) ||
              ((i = n.right) == null ? void 0 : i.length)
          );
        }
        return Boolean((r = n[t]) == null ? void 0 : r.length);
      },
      getLeftLeafColumns: X(
        () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
        (t, r) =>
          (r ?? []).map((n) => t.find((o) => o.id === n)).filter(Boolean),
        {
          key: !1,
          debug: () => {
            var t;
            return (t = e.options.debugAll) != null
              ? t
              : e.options.debugColumns;
          },
        }
      ),
      getRightLeafColumns: X(
        () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
        (t, r) =>
          (r ?? []).map((n) => t.find((o) => o.id === n)).filter(Boolean),
        {
          key: !1,
          debug: () => {
            var t;
            return (t = e.options.debugAll) != null
              ? t
              : e.options.debugColumns;
          },
        }
      ),
      getCenterLeafColumns: X(
        () => [
          e.getAllLeafColumns(),
          e.getState().columnPinning.left,
          e.getState().columnPinning.right,
        ],
        (t, r, n) => {
          const o = [...(r ?? []), ...(n ?? [])];
          return t.filter((i) => !o.includes(i.id));
        },
        {
          key: !1,
          debug: () => {
            var t;
            return (t = e.options.debugAll) != null
              ? t
              : e.options.debugColumns;
          },
        }
      ),
    }),
  },
  TD = {
    getInitialState: (e) => ({ rowSelection: {}, ...e }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: vt("rowSelection", e),
      enableRowSelection: !0,
      enableMultiRowSelection: !0,
      enableSubRowSelection: !0,
    }),
    createTable: (e) => ({
      setRowSelection: (t) =>
        e.options.onRowSelectionChange == null
          ? void 0
          : e.options.onRowSelectionChange(t),
      resetRowSelection: (t) => {
        var r;
        return e.setRowSelection(
          t ? {} : (r = e.initialState.rowSelection) != null ? r : {}
        );
      },
      toggleAllRowsSelected: (t) => {
        e.setRowSelection((r) => {
          t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
          const n = { ...r },
            o = e.getPreGroupedRowModel().flatRows;
          return (
            t
              ? o.forEach((i) => {
                  !i.getCanSelect() || (n[i.id] = !0);
                })
              : o.forEach((i) => {
                  delete n[i.id];
                }),
            n
          );
        });
      },
      toggleAllPageRowsSelected: (t) =>
        e.setRowSelection((r) => {
          const n = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(),
            o = { ...r };
          return (
            e.getRowModel().rows.forEach((i) => {
              Cf(o, i.id, n, e);
            }),
            o
          );
        }),
      getPreSelectedRowModel: () => e.getCoreRowModel(),
      getSelectedRowModel: X(
        () => [e.getState().rowSelection, e.getCoreRowModel()],
        (t, r) =>
          Object.keys(t).length
            ? wc(e, r)
            : { rows: [], flatRows: [], rowsById: {} },
        {
          key: !1,
          debug: () => {
            var t;
            return (t = e.options.debugAll) != null ? t : e.options.debugTable;
          },
        }
      ),
      getFilteredSelectedRowModel: X(
        () => [e.getState().rowSelection, e.getFilteredRowModel()],
        (t, r) =>
          Object.keys(t).length
            ? wc(e, r)
            : { rows: [], flatRows: [], rowsById: {} },
        {
          key: "getFilteredSelectedRowModel",
          debug: () => {
            var t;
            return (t = e.options.debugAll) != null ? t : e.options.debugTable;
          },
        }
      ),
      getGroupedSelectedRowModel: X(
        () => [e.getState().rowSelection, e.getSortedRowModel()],
        (t, r) =>
          Object.keys(t).length
            ? wc(e, r)
            : { rows: [], flatRows: [], rowsById: {} },
        {
          key: "getGroupedSelectedRowModel",
          debug: () => {
            var t;
            return (t = e.options.debugAll) != null ? t : e.options.debugTable;
          },
        }
      ),
      getIsAllRowsSelected: () => {
        const t = e.getFilteredRowModel().flatRows,
          { rowSelection: r } = e.getState();
        let n = Boolean(t.length && Object.keys(r).length);
        return n && t.some((o) => o.getCanSelect() && !r[o.id]) && (n = !1), n;
      },
      getIsAllPageRowsSelected: () => {
        const t = e.getPaginationRowModel().flatRows,
          { rowSelection: r } = e.getState();
        let n = !!t.length;
        return n && t.some((o) => !r[o.id]) && (n = !1), n;
      },
      getIsSomeRowsSelected: () => {
        var t;
        const r = Object.keys(
          (t = e.getState().rowSelection) != null ? t : {}
        ).length;
        return r > 0 && r < e.getFilteredRowModel().flatRows.length;
      },
      getIsSomePageRowsSelected: () => {
        const t = e.getPaginationRowModel().flatRows;
        return e.getIsAllPageRowsSelected()
          ? !1
          : t.some((r) => r.getIsSelected() || r.getIsSomeSelected());
      },
      getToggleAllRowsSelectedHandler: () => (t) => {
        e.toggleAllRowsSelected(t.target.checked);
      },
      getToggleAllPageRowsSelectedHandler: () => (t) => {
        e.toggleAllPageRowsSelected(t.target.checked);
      },
    }),
    createRow: (e, t) => ({
      toggleSelected: (r) => {
        const n = e.getIsSelected();
        t.setRowSelection((o) => {
          if (((r = typeof r < "u" ? r : !n), n === r)) return o;
          const i = { ...o };
          return Cf(i, e.id, r, t), i;
        });
      },
      getIsSelected: () => {
        const { rowSelection: r } = t.getState();
        return up(e, r);
      },
      getIsSomeSelected: () => {
        const { rowSelection: r } = t.getState();
        return l0(e, r) === "some";
      },
      getIsAllSubRowsSelected: () => {
        const { rowSelection: r } = t.getState();
        return l0(e, r) === "all";
      },
      getCanSelect: () => {
        var r;
        return typeof t.options.enableRowSelection == "function"
          ? t.options.enableRowSelection(e)
          : (r = t.options.enableRowSelection) != null
          ? r
          : !0;
      },
      getCanSelectSubRows: () => {
        var r;
        return typeof t.options.enableSubRowSelection == "function"
          ? t.options.enableSubRowSelection(e)
          : (r = t.options.enableSubRowSelection) != null
          ? r
          : !0;
      },
      getCanMultiSelect: () => {
        var r;
        return typeof t.options.enableMultiRowSelection == "function"
          ? t.options.enableMultiRowSelection(e)
          : (r = t.options.enableMultiRowSelection) != null
          ? r
          : !0;
      },
      getToggleSelectedHandler: () => {
        const r = e.getCanSelect();
        return (n) => {
          var o;
          !r || e.toggleSelected((o = n.target) == null ? void 0 : o.checked);
        };
      },
    }),
  },
  Cf = (e, t, r, n) => {
    var o;
    const i = n.getRow(t);
    r
      ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]),
        i.getCanSelect() && (e[t] = !0))
      : delete e[t],
      (o = i.subRows) != null &&
        o.length &&
        i.getCanSelectSubRows() &&
        i.subRows.forEach((l) => Cf(e, l.id, r, n));
  };
function wc(e, t) {
  const r = e.getState().rowSelection,
    n = [],
    o = {},
    i = function (l, a) {
      return l
        .map((s) => {
          var u;
          const c = up(s, r);
          if (
            (c && (n.push(s), (o[s.id] = s)),
            (u = s.subRows) != null &&
              u.length &&
              (s = { ...s, subRows: i(s.subRows) }),
            c)
          )
            return s;
        })
        .filter(Boolean);
    };
  return { rows: i(t.rows), flatRows: n, rowsById: o };
}
function up(e, t) {
  var r;
  return (r = t[e.id]) != null ? r : !1;
}
function l0(e, t, r) {
  if (e.subRows && e.subRows.length) {
    let n = !0,
      o = !1;
    return (
      e.subRows.forEach((i) => {
        (o && !n) || (up(i, t) ? (o = !0) : (n = !1));
      }),
      n ? "all" : o ? "some" : !1
    );
  }
  return !1;
}
const Ef = /([0-9]+)/gm,
  MD = (e, t, r) =>
    ex(Ir(e.getValue(r)).toLowerCase(), Ir(t.getValue(r)).toLowerCase()),
  jD = (e, t, r) => ex(Ir(e.getValue(r)), Ir(t.getValue(r))),
  LD = (e, t, r) =>
    cp(Ir(e.getValue(r)).toLowerCase(), Ir(t.getValue(r)).toLowerCase()),
  FD = (e, t, r) => cp(Ir(e.getValue(r)), Ir(t.getValue(r))),
  AD = (e, t, r) => {
    const n = e.getValue(r),
      o = t.getValue(r);
    return n > o ? 1 : n < o ? -1 : 0;
  },
  VD = (e, t, r) => cp(e.getValue(r), t.getValue(r));
function cp(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Ir(e) {
  return typeof e == "number"
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ""
      : String(e)
    : typeof e == "string"
    ? e
    : "";
}
function ex(e, t) {
  const r = e.split(Ef).filter(Boolean),
    n = t.split(Ef).filter(Boolean);
  for (; r.length && n.length; ) {
    const o = r.shift(),
      i = n.shift(),
      l = parseInt(o, 10),
      a = parseInt(i, 10),
      s = [l, a].sort();
    if (isNaN(s[0])) {
      if (o > i) return 1;
      if (i > o) return -1;
      continue;
    }
    if (isNaN(s[1])) return isNaN(l) ? -1 : 1;
    if (l > a) return 1;
    if (a > l) return -1;
  }
  return r.length - n.length;
}
const jo = {
    alphanumeric: MD,
    alphanumericCaseSensitive: jD,
    text: LD,
    textCaseSensitive: FD,
    datetime: AD,
    basic: VD,
  },
  HD = {
    getInitialState: (e) => ({ sorting: [], ...e }),
    getDefaultColumnDef: () => ({ sortingFn: "auto" }),
    getDefaultOptions: (e) => ({
      onSortingChange: vt("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey,
    }),
    createColumn: (e, t) => ({
      getAutoSortingFn: () => {
        const r = t.getFilteredRowModel().flatRows.slice(10);
        let n = !1;
        for (const o of r) {
          const i = o?.getValue(e.id);
          if (Object.prototype.toString.call(i) === "[object Date]")
            return jo.datetime;
          if (typeof i == "string" && ((n = !0), i.split(Ef).length > 1))
            return jo.alphanumeric;
        }
        return n ? jo.text : jo.basic;
      },
      getAutoSortDir: () => {
        const r = t.getFilteredRowModel().flatRows[0];
        return typeof r?.getValue(e.id) == "string" ? "asc" : "desc";
      },
      getSortingFn: () => {
        var r, n;
        if (!e) throw new Error();
        return Cs(e.columnDef.sortingFn)
          ? e.columnDef.sortingFn
          : e.columnDef.sortingFn === "auto"
          ? e.getAutoSortingFn()
          : (r =
              (n = t.options.sortingFns) == null
                ? void 0
                : n[e.columnDef.sortingFn]) != null
          ? r
          : jo[e.columnDef.sortingFn];
      },
      toggleSorting: (r, n) => {
        const o = e.getNextSortingOrder(),
          i = typeof r < "u" && r !== null;
        t.setSorting((l) => {
          const a = l?.find((p) => p.id === e.id),
            s = l?.findIndex((p) => p.id === e.id);
          let u = [],
            c,
            f = i ? r : o === "desc";
          if (
            (l != null && l.length && e.getCanMultiSort() && n
              ? a
                ? (c = "toggle")
                : (c = "add")
              : l != null && l.length && s !== l.length - 1
              ? (c = "replace")
              : a
              ? (c = "toggle")
              : (c = "replace"),
            c === "toggle" && (i || o || (c = "remove")),
            c === "add")
          ) {
            var d;
            (u = [...l, { id: e.id, desc: f }]),
              u.splice(
                0,
                u.length -
                  ((d = t.options.maxMultiSortColCount) != null
                    ? d
                    : Number.MAX_SAFE_INTEGER)
              );
          } else
            c === "toggle"
              ? (u = l.map((p) => (p.id === e.id ? { ...p, desc: f } : p)))
              : c === "remove"
              ? (u = l.filter((p) => p.id !== e.id))
              : (u = [{ id: e.id, desc: f }]);
          return u;
        });
      },
      getFirstSortDir: () => {
        var r, n;
        return (
          (r =
            (n = e.columnDef.sortDescFirst) != null
              ? n
              : t.options.sortDescFirst) != null
            ? r
            : e.getAutoSortDir() === "desc"
        )
          ? "desc"
          : "asc";
      },
      getNextSortingOrder: (r) => {
        var n, o;
        const i = e.getFirstSortDir(),
          l = e.getIsSorted();
        return l
          ? l !== i &&
            ((n = t.options.enableSortingRemoval) != null ? n : !0) &&
            (r && (o = t.options.enableMultiRemove) != null ? o : !0)
            ? !1
            : l === "desc"
            ? "asc"
            : "desc"
          : i;
      },
      getCanSort: () => {
        var r, n;
        return (
          ((r = e.columnDef.enableSorting) != null ? r : !0) &&
          ((n = t.options.enableSorting) != null ? n : !0) &&
          !!e.accessorFn
        );
      },
      getCanMultiSort: () => {
        var r, n;
        return (r =
          (n = e.columnDef.enableMultiSort) != null
            ? n
            : t.options.enableMultiSort) != null
          ? r
          : !!e.accessorFn;
      },
      getIsSorted: () => {
        var r;
        const n =
          (r = t.getState().sorting) == null
            ? void 0
            : r.find((o) => o.id === e.id);
        return n ? (n.desc ? "desc" : "asc") : !1;
      },
      getSortIndex: () => {
        var r, n;
        return (r =
          (n = t.getState().sorting) == null
            ? void 0
            : n.findIndex((o) => o.id === e.id)) != null
          ? r
          : -1;
      },
      clearSorting: () => {
        t.setSorting((r) =>
          r != null && r.length ? r.filter((n) => n.id !== e.id) : []
        );
      },
      getToggleSortingHandler: () => {
        const r = e.getCanSort();
        return (n) => {
          !r ||
            (n.persist == null || n.persist(),
            e.toggleSorting == null ||
              e.toggleSorting(
                void 0,
                e.getCanMultiSort()
                  ? t.options.isMultiSortEvent == null
                    ? void 0
                    : t.options.isMultiSortEvent(n)
                  : !1
              ));
        };
      },
    }),
    createTable: (e) => ({
      setSorting: (t) =>
        e.options.onSortingChange == null
          ? void 0
          : e.options.onSortingChange(t),
      resetSorting: (t) => {
        var r, n;
        e.setSorting(
          t
            ? []
            : (r = (n = e.initialState) == null ? void 0 : n.sorting) != null
            ? r
            : []
        );
      },
      getPreSortedRowModel: () => e.getGroupedRowModel(),
      getSortedRowModel: () => (
        !e._getSortedRowModel &&
          e.options.getSortedRowModel &&
          (e._getSortedRowModel = e.options.getSortedRowModel(e)),
        e.options.manualSorting || !e._getSortedRowModel
          ? e.getPreSortedRowModel()
          : e._getSortedRowModel()
      ),
    }),
  },
  BD = {
    getInitialState: (e) => ({ columnVisibility: {}, ...e }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: vt("columnVisibility", e),
    }),
    createColumn: (e, t) => ({
      toggleVisibility: (r) => {
        e.getCanHide() &&
          t.setColumnVisibility((n) => ({
            ...n,
            [e.id]: r ?? !e.getIsVisible(),
          }));
      },
      getIsVisible: () => {
        var r, n;
        return (r =
          (n = t.getState().columnVisibility) == null ? void 0 : n[e.id]) !=
          null
          ? r
          : !0;
      },
      getCanHide: () => {
        var r, n;
        return (
          ((r = e.columnDef.enableHiding) != null ? r : !0) &&
          ((n = t.options.enableHiding) != null ? n : !0)
        );
      },
      getToggleVisibilityHandler: () => (r) => {
        e.toggleVisibility == null || e.toggleVisibility(r.target.checked);
      },
    }),
    createRow: (e, t) => ({
      _getAllVisibleCells: X(
        () => [e.getAllCells(), t.getState().columnVisibility],
        (r) => r.filter((n) => n.column.getIsVisible()),
        {
          key: "row._getAllVisibleCells",
          debug: () => {
            var r;
            return (r = t.options.debugAll) != null ? r : t.options.debugRows;
          },
        }
      ),
      getVisibleCells: X(
        () => [
          e.getLeftVisibleCells(),
          e.getCenterVisibleCells(),
          e.getRightVisibleCells(),
        ],
        (r, n, o) => [...r, ...n, ...o],
        {
          key: !1,
          debug: () => {
            var r;
            return (r = t.options.debugAll) != null ? r : t.options.debugRows;
          },
        }
      ),
    }),
    createTable: (e) => {
      const t = (r, n) =>
        X(
          () => [
            n(),
            n()
              .filter((o) => o.getIsVisible())
              .map((o) => o.id)
              .join("_"),
          ],
          (o) =>
            o.filter((i) =>
              i.getIsVisible == null ? void 0 : i.getIsVisible()
            ),
          {
            key: r,
            debug: () => {
              var o;
              return (o = e.options.debugAll) != null
                ? o
                : e.options.debugColumns;
            },
          }
        );
      return {
        getVisibleFlatColumns: t("getVisibleFlatColumns", () =>
          e.getAllFlatColumns()
        ),
        getVisibleLeafColumns: t("getVisibleLeafColumns", () =>
          e.getAllLeafColumns()
        ),
        getLeftVisibleLeafColumns: t("getLeftVisibleLeafColumns", () =>
          e.getLeftLeafColumns()
        ),
        getRightVisibleLeafColumns: t("getRightVisibleLeafColumns", () =>
          e.getRightLeafColumns()
        ),
        getCenterVisibleLeafColumns: t("getCenterVisibleLeafColumns", () =>
          e.getCenterLeafColumns()
        ),
        setColumnVisibility: (r) =>
          e.options.onColumnVisibilityChange == null
            ? void 0
            : e.options.onColumnVisibilityChange(r),
        resetColumnVisibility: (r) => {
          var n;
          e.setColumnVisibility(
            r ? {} : (n = e.initialState.columnVisibility) != null ? n : {}
          );
        },
        toggleAllColumnsVisible: (r) => {
          var n;
          (r = (n = r) != null ? n : !e.getIsAllColumnsVisible()),
            e.setColumnVisibility(
              e
                .getAllLeafColumns()
                .reduce(
                  (o, i) => ({
                    ...o,
                    [i.id]: r || !(i.getCanHide != null && i.getCanHide()),
                  }),
                  {}
                )
            );
        },
        getIsAllColumnsVisible: () =>
          !e
            .getAllLeafColumns()
            .some((r) => !(r.getIsVisible != null && r.getIsVisible())),
        getIsSomeColumnsVisible: () =>
          e
            .getAllLeafColumns()
            .some((r) => (r.getIsVisible == null ? void 0 : r.getIsVisible())),
        getToggleAllColumnsVisibilityHandler: () => (r) => {
          var n;
          e.toggleAllColumnsVisible(
            (n = r.target) == null ? void 0 : n.checked
          );
        },
      };
    },
  },
  a0 = [vD, BD, ND, DD, _D, HD, RD, wD, zD, TD, hD];
function WD(e) {
  var t;
  (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  let r = { _features: a0 };
  const n = r._features.reduce(
      (c, f) =>
        Object.assign(
          c,
          f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(r)
        ),
      {}
    ),
    o = (c) =>
      r.options.mergeOptions ? r.options.mergeOptions(n, c) : { ...n, ...c };
  let l = { ...{}, ...((t = e.initialState) != null ? t : {}) };
  r._features.forEach((c) => {
    var f;
    l =
      (f = c.getInitialState == null ? void 0 : c.getInitialState(l)) != null
        ? f
        : l;
  });
  const a = [];
  let s = !1;
  const u = {
    _features: a0,
    options: { ...n, ...e },
    initialState: l,
    _queue: (c) => {
      a.push(c),
        s ||
          ((s = !0),
          Promise.resolve()
            .then(() => {
              for (; a.length; ) a.shift()();
              s = !1;
            })
            .catch((f) =>
              setTimeout(() => {
                throw f;
              })
            ));
    },
    reset: () => {
      r.setState(r.initialState);
    },
    setOptions: (c) => {
      const f = dr(c, r.options);
      r.options = o(f);
    },
    getState: () => r.options.state,
    setState: (c) => {
      r.options.onStateChange == null || r.options.onStateChange(c);
    },
    _getRowId: (c, f, d) => {
      var p;
      return (p =
        r.options.getRowId == null ? void 0 : r.options.getRowId(c, f, d)) !=
        null
        ? p
        : "" + (d ? [d.id, f].join(".") : f);
    },
    getCoreRowModel: () => (
      r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)),
      r._getCoreRowModel()
    ),
    getRowModel: () => r.getPaginationRowModel(),
    getRow: (c) => {
      const f = r.getRowModel().rowsById[c];
      if (!f) throw new Error();
      return f;
    },
    _getDefaultColumnDef: X(
      () => [r.options.defaultColumn],
      (c) => {
        var f;
        return (
          (c = (f = c) != null ? f : {}),
          {
            header: (d) => {
              const p = d.header.column.columnDef;
              return p.accessorKey ? p.accessorKey : p.accessorFn ? p.id : null;
            },
            cell: (d) => {
              var p, y;
              return (p =
                (y = d.renderValue()) == null || y.toString == null
                  ? void 0
                  : y.toString()) != null
                ? p
                : null;
            },
            ...r._features.reduce(
              (d, p) =>
                Object.assign(
                  d,
                  p.getDefaultColumnDef == null
                    ? void 0
                    : p.getDefaultColumnDef()
                ),
              {}
            ),
            ...c,
          }
        );
      },
      {
        debug: () => {
          var c;
          return (c = r.options.debugAll) != null ? c : r.options.debugColumns;
        },
        key: !1,
      }
    ),
    _getColumnDefs: () => r.options.columns,
    getAllColumns: X(
      () => [r._getColumnDefs()],
      (c) => {
        const f = function (d, p, y) {
          return (
            y === void 0 && (y = 0),
            d.map((w) => {
              const v = mD(r, w, y, p),
                m = w;
              return (v.columns = m.columns ? f(m.columns, v, y + 1) : []), v;
            })
          );
        };
        return f(c);
      },
      {
        key: !1,
        debug: () => {
          var c;
          return (c = r.options.debugAll) != null ? c : r.options.debugColumns;
        },
      }
    ),
    getAllFlatColumns: X(
      () => [r.getAllColumns()],
      (c) => c.flatMap((f) => f.getFlatColumns()),
      {
        key: !1,
        debug: () => {
          var c;
          return (c = r.options.debugAll) != null ? c : r.options.debugColumns;
        },
      }
    ),
    _getAllFlatColumnsById: X(
      () => [r.getAllFlatColumns()],
      (c) => c.reduce((f, d) => ((f[d.id] = d), f), {}),
      {
        key: !1,
        debug: () => {
          var c;
          return (c = r.options.debugAll) != null ? c : r.options.debugColumns;
        },
      }
    ),
    getAllLeafColumns: X(
      () => [r.getAllColumns(), r._getOrderColumnsFn()],
      (c, f) => {
        let d = c.flatMap((p) => p.getLeafColumns());
        return f(d);
      },
      {
        key: !1,
        debug: () => {
          var c;
          return (c = r.options.debugAll) != null ? c : r.options.debugColumns;
        },
      }
    ),
    getColumn: (c) => {
      const f = r._getAllFlatColumnsById()[c];
      if (!f) throw new Error();
      return f;
    },
  };
  return (
    Object.assign(r, u),
    r._features.forEach((c) =>
      Object.assign(r, c.createTable == null ? void 0 : c.createTable(r))
    ),
    r
  );
}
function UD(e, t, r, n) {
  const o = () => {
      var l;
      return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
    },
    i = {
      id: t.id + "_" + r.id,
      row: t,
      column: r,
      getValue: () => t.getValue(n),
      renderValue: o,
      getContext: () => ({
        table: e,
        column: r,
        row: t,
        cell: i,
        getValue: i.getValue,
        renderValue: i.renderValue,
      }),
    };
  return (
    e._features.forEach((l) => {
      Object.assign(
        i,
        l.createCell == null ? void 0 : l.createCell(i, r, t, e)
      );
    }, {}),
    i
  );
}
const fp = (e, t, r, n, o, i) => {
  let l = {
    id: t,
    index: n,
    original: r,
    depth: o,
    _valuesCache: {},
    getValue: (a) => {
      if (l._valuesCache.hasOwnProperty(a)) return l._valuesCache[a];
      const s = e.getColumn(a);
      if (!!s.accessorFn)
        return (
          (l._valuesCache[a] = s.accessorFn(l.original, n)), l._valuesCache[a]
        );
    },
    renderValue: (a) => {
      var s;
      return (s = l.getValue(a)) != null ? s : e.options.renderFallbackValue;
    },
    subRows: i ?? [],
    getLeafRows: () => gD(l.subRows, (a) => a.subRows),
    getAllCells: X(
      () => [e.getAllLeafColumns()],
      (a) => a.map((s) => UD(e, l, s, s.id)),
      {
        key: !1,
        debug: () => {
          var a;
          return (a = e.options.debugAll) != null ? a : e.options.debugRows;
        },
      }
    ),
    _getAllCellsByColumnId: X(
      () => [l.getAllCells()],
      (a) => a.reduce((s, u) => ((s[u.column.id] = u), s), {}),
      {
        key: "row.getAllCellsByColumnId",
        debug: () => {
          var a;
          return (a = e.options.debugAll) != null ? a : e.options.debugRows;
        },
      }
    ),
  };
  for (let a = 0; a < e._features.length; a++) {
    const s = e._features[a];
    Object.assign(
      l,
      s == null || s.createRow == null ? void 0 : s.createRow(l, e)
    );
  }
  return l;
};
function GD() {
  return (e) =>
    X(
      () => [e.options.data],
      (t) => {
        const r = { rows: [], flatRows: [], rowsById: {} },
          n = function (o, i, l) {
            i === void 0 && (i = 0);
            const a = [];
            for (let u = 0; u < o.length; u++) {
              const c = fp(e, e._getRowId(o[u], u, l), o[u], u, i);
              if (
                (r.flatRows.push(c),
                (r.rowsById[c.id] = c),
                a.push(c),
                e.options.getSubRows)
              ) {
                var s;
                (c.originalSubRows = e.options.getSubRows(o[u], u)),
                  (s = c.originalSubRows) != null &&
                    s.length &&
                    (c.subRows = n(c.originalSubRows, i + 1, c));
              }
            }
            return a;
          };
        return (r.rows = n(t)), r;
      },
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugTable;
        },
        onChange: () => {
          e._autoResetPageIndex();
        },
      }
    );
}
function YD(e, t, r) {
  return r.options.filterFromLeafRows ? XD(e, t, r) : qD(e, t, r);
}
function XD(e, t, r) {
  const n = [],
    o = {},
    i = function (l, a) {
      const s = [];
      for (let c = 0; c < l.length; c++) {
        var u;
        let f = l[c];
        if ((u = f.subRows) != null && u.length) {
          const d = fp(r, f.id, f.original, f.index, f.depth);
          if (
            ((d.columnFilters = f.columnFilters),
            (d.subRows = i(f.subRows)),
            !d.subRows.length)
          )
            continue;
          f = d;
        }
        t(f) && (s.push(f), (o[f.id] = f), (o[c] = f));
      }
      return s;
    };
  return { rows: i(e), flatRows: n, rowsById: o };
}
function qD(e, t, r) {
  const n = [],
    o = {},
    i = function (l, a) {
      const s = [];
      for (let c = 0; c < l.length; c++) {
        let f = l[c];
        if (t(f)) {
          var u;
          if ((u = f.subRows) != null && u.length) {
            const p = fp(r, f.id, f.original, f.index, f.depth);
            (p.subRows = i(f.subRows)), (f = p);
          }
          s.push(f), n.push(f), (o[f.id] = f);
        }
      }
      return s;
    };
  return { rows: i(e), flatRows: n, rowsById: o };
}
function KD() {
  return (e) =>
    X(
      () => [
        e.getPreFilteredRowModel(),
        e.getState().columnFilters,
        e.getState().globalFilter,
      ],
      (t, r, n) => {
        if (!t.rows.length || (!(r != null && r.length) && !n)) {
          for (let d = 0; d < t.flatRows.length; d++)
            (t.flatRows[d].columnFilters = {}),
              (t.flatRows[d].columnFiltersMeta = {});
          return t;
        }
        const o = [],
          i = [];
        (r ?? []).forEach((d) => {
          var p;
          const w = e.getColumn(d.id).getFilterFn();
          !w ||
            o.push({
              id: d.id,
              filterFn: w,
              resolvedValue:
                (p =
                  w.resolveFilterValue == null
                    ? void 0
                    : w.resolveFilterValue(d.value)) != null
                  ? p
                  : d.value,
            });
        });
        const l = r.map((d) => d.id),
          a = e.getGlobalFilterFn(),
          s = e.getAllLeafColumns().filter((d) => d.getCanGlobalFilter());
        n &&
          a &&
          s.length &&
          (l.push("__global__"),
          s.forEach((d) => {
            var p;
            i.push({
              id: d.id,
              filterFn: a,
              resolvedValue:
                (p =
                  a.resolveFilterValue == null
                    ? void 0
                    : a.resolveFilterValue(n)) != null
                  ? p
                  : n,
            });
          }));
        let u, c;
        for (let d = 0; d < t.flatRows.length; d++) {
          const p = t.flatRows[d];
          if (((p.columnFilters = {}), o.length))
            for (let y = 0; y < o.length; y++) {
              u = o[y];
              const w = u.id;
              p.columnFilters[w] = u.filterFn(p, w, u.resolvedValue, (v) => {
                p.columnFiltersMeta[w] = v;
              });
            }
          if (i.length) {
            for (let y = 0; y < i.length; y++) {
              c = i[y];
              const w = c.id;
              if (
                c.filterFn(p, w, c.resolvedValue, (v) => {
                  p.columnFiltersMeta[w] = v;
                })
              ) {
                p.columnFilters.__global__ = !0;
                break;
              }
            }
            p.columnFilters.__global__ !== !0 &&
              (p.columnFilters.__global__ = !1);
          }
        }
        const f = (d) => {
          for (let p = 0; p < l.length; p++)
            if (d.columnFilters[l[p]] === !1) return !1;
          return !0;
        };
        return YD(t.rows, f, e);
      },
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugTable;
        },
        onChange: () => {
          e._autoResetPageIndex();
        },
      }
    );
}
function QD() {
  return (e) =>
    X(
      () => [e.getState().sorting, e.getPreSortedRowModel()],
      (t, r) => {
        if (!r.rows.length || !(t != null && t.length)) return r;
        const n = e.getState().sorting,
          o = [],
          i = n.filter((s) => e.getColumn(s.id).getCanSort()),
          l = {};
        i.forEach((s) => {
          const u = e.getColumn(s.id);
          l[s.id] = {
            sortUndefined: u.columnDef.sortUndefined,
            invertSorting: u.columnDef.invertSorting,
            sortingFn: u.getSortingFn(),
          };
        });
        const a = (s) => {
          const u = s.slice();
          return (
            u.sort((c, f) => {
              for (let p = 0; p < i.length; p += 1) {
                var d;
                const y = i[p],
                  w = l[y.id],
                  v = (d = y?.desc) != null ? d : !1;
                if (w.sortUndefined) {
                  const h = c.getValue(y.id),
                    _ = f.getValue(y.id),
                    b = typeof h > "u",
                    O = typeof _ > "u";
                  if (b || O)
                    return b && O ? 0 : b ? w.sortUndefined : -w.sortUndefined;
                }
                let m = w.sortingFn(c, f, y.id);
                if (m !== 0)
                  return v && (m *= -1), w.invertSorting && (m *= -1), m;
              }
              return c.index - f.index;
            }),
            u.forEach((c) => {
              o.push(c),
                !(!c.subRows || c.subRows.length <= 1) &&
                  (c.subRows = a(c.subRows));
            }),
            u
          );
        };
        return { rows: a(r.rows), flatRows: o, rowsById: r.rowsById };
      },
      {
        key: !1,
        debug: () => {
          var t;
          return (t = e.options.debugAll) != null ? t : e.options.debugTable;
        },
        onChange: () => {
          e._autoResetPageIndex();
        },
      }
    );
}
function ZD(e) {
  const t = [],
    r = (n) => {
      var o;
      t.push(n),
        (o = n.subRows) != null &&
          o.length &&
          n.getIsExpanded() &&
          n.subRows.forEach(r);
    };
  return (
    e.rows.forEach(r), { rows: t, flatRows: e.flatRows, rowsById: e.rowsById }
  );
}
function JD(e) {
  return (t) =>
    X(
      () => [
        t.getState().pagination,
        t.getPrePaginationRowModel(),
        t.options.paginateExpandedRows ? void 0 : t.getState().expanded,
      ],
      (r, n) => {
        if (!n.rows.length) return n;
        const { pageSize: o, pageIndex: i } = r;
        let { rows: l, flatRows: a, rowsById: s } = n;
        const u = o * i,
          c = u + o;
        l = l.slice(u, c);
        let f;
        t.options.paginateExpandedRows
          ? (f = { rows: l, flatRows: a, rowsById: s })
          : (f = ZD({ rows: l, flatRows: a, rowsById: s })),
          (f.flatRows = []);
        const d = (p) => {
          f.flatRows.push(p), p.subRows.length && p.subRows.forEach(d);
        };
        return f.rows.forEach(d), f;
      },
      {
        key: !1,
        debug: () => {
          var r;
          return (r = t.options.debugAll) != null ? r : t.options.debugTable;
        },
      }
    );
}
function s0(e, t) {
  return e ? (eT(e) ? g.exports.createElement(e, t) : e) : null;
}
function eT(e) {
  return tT(e) || typeof e == "function" || rT(e);
}
function tT(e) {
  return (
    typeof e == "function" &&
    (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })()
  );
}
function rT(e) {
  return (
    typeof e == "object" &&
    typeof e.$$typeof == "symbol" &&
    ["react.memo", "react.forward_ref"].includes(e.$$typeof.description)
  );
}
function nT(e) {
  const t = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...e,
    },
    [r] = g.exports.useState(() => ({ current: WD(t) })),
    [n, o] = g.exports.useState(() => r.current.initialState);
  return (
    r.current.setOptions((i) => ({
      ...i,
      ...e,
      state: { ...n, ...e.state },
      onStateChange: (l) => {
        o(l), e.onStateChange == null || e.onStateChange(l);
      },
    })),
    r.current
  );
}
const kf = uo((e) => ({ doors: [], setDoors: (t) => e({ doors: t }) }));
function oT(e) {
  return be({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M249.334 22.717c-18.64 2.424-35.677 23.574-37.043 51.49v.02c-.057 1.186-.097 2.38-.097 3.59 0 16.362 5.658 30.827 13.942 40.818l10.127 12.213-15.592 2.933c-10.75 2.025-18.622 7.702-25.373 16.978-2.285 3.14-4.384 6.707-6.31 10.62-57.54-6.44-97.91-21.06-97.91-37.952 0-17.363 42.647-31.983 102.75-37.97-.213-2.51-.323-5.057-.323-7.636v-.002c0-.84.024-1.674.047-2.51-96.43 6.77-167.298 29.15-167.3 55.71-.002 25.33 64.462 46.86 154.074 54.67-.19.742-.394 1.465-.576 2.216-2.36 9.72-4.05 20.22-5.268 31.03-.01 0-.02 0-.03.002-.418 3.653-.78 7.34-1.095 11.046l.05-.005c-1.316 15.777-1.772 31.88-1.893 46.95h35.894l2.115 28.4c-68.24-4.994-118.444-21.004-118.444-39.843 0-13.243 24.83-24.89 63.27-32.33.3-4.056.66-8.115 1.076-12.162-76.42 9.353-129.17 29.168-129.172 52.086-.002 28.17 79.71 51.643 185.098 56.768l5.94 79.77c10.5 2.648 24.84 4.162 39.017 4.068 13.79-.092 27.235-1.71 36.45-4l5.263-79.846c105.308-5.14 184.935-28.605 184.935-56.76 0-23.013-53.196-42.895-130.13-52.2.304 4.02.557 8.047.755 12.07 38.883 7.43 63.965 19.17 63.965 32.536 0 18.84-49.804 34.85-117.908 39.844l1.87-28.402h34.18c-.012-15.113-.127-31.27-1.033-47.094.01 0 .02.002.032.004-.214-3.687-.472-7.352-.782-10.986l-.02-.002c-.94-11.157-2.367-21.984-4.546-31.967-.09-.405-.184-.803-.275-1.206 89.518-7.826 153.893-29.344 153.893-54.656 0-26.787-72.076-49.332-169.77-55.887.025.895.053 1.788.053 2.688 0 2.5-.104 4.97-.304 7.407 61.19 5.836 104.61 20.61 104.61 38.2 0 16.805-39.633 31.355-96.524 37.848-2.01-4.283-4.26-8.15-6.762-11.505-6.83-9.167-15.063-14.81-27.14-16.682l-15.913-2.47 10.037-12.59c6.928-8.69 11.912-20.715 13.057-34.268h.002c.163-1.95.25-3.93.25-5.938 0-.77-.022-1.532-.048-2.29-.015-.48-.033-.958-.057-1.434h-.002c-1.48-29.745-20.507-51.3-41.076-51.3-2.528 0-3.966-.087-4.03-.08h-.003zM194.54 355.822c-97.11 6.655-168.573 29.11-168.573 55.8 0 31.932 102.243 57.815 228.367 57.815S482.7 443.555 482.7 411.623c0-26.608-71.02-49.004-167.67-55.736l-.655 9.93c60.363 6.055 103.074 20.956 103.074 38.394 0 22.81-73.032 41.298-163.12 41.298-90.088 0-163.12-18.49-163.12-41.297 0-17.533 43.18-32.502 104.07-38.493l-.74-9.895z",
        },
      },
    ],
  })(e);
}
function Rf(e) {
  return be({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z",
        },
      },
    ],
  })(e);
}
function iT(e) {
  return be({
    tag: "svg",
    attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
        },
      },
    ],
  })(e);
}
function lT(e) {
  return be({
    tag: "svg",
    attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
        },
      },
    ],
  })(e);
}
function aT(e) {
  return be({
    tag: "svg",
    attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
        },
      },
    ],
  })(e);
}
const If = (e) => {
    let t = [];
    if (e.groups) {
      const r = Object.entries(e.groups);
      for (let n = 0; n < r.length; n++) {
        const o = r[n];
        t[n] = { name: o[0], grade: o[1] };
      }
    }
    return {
      ...e,
      characters: e.characters || [""],
      groups: [...t],
      items: e.items || [{ name: "", metadata: "", remove: !1 }],
      lockpickDifficulty: e.lockpickDifficulty || [""],
    };
  },
  tx = uo((e) => ({ clipboard: !1, setClipboard: (t) => e({ clipboard: t }) })),
  dp = g.exports.createContext(null);
dp.displayName = "@mantine/modals/ModalsContext";
function sT() {
  const e = g.exports.useContext(dp);
  if (!e)
    throw new Error(
      "[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component"
    );
  return e;
}
var uT = Object.defineProperty,
  cT = Object.defineProperties,
  fT = Object.getOwnPropertyDescriptors,
  u0 = Object.getOwnPropertySymbols,
  dT = Object.prototype.hasOwnProperty,
  pT = Object.prototype.propertyIsEnumerable,
  c0 = (e, t, r) =>
    t in e
      ? uT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  _c = (e, t) => {
    for (var r in t || (t = {})) dT.call(t, r) && c0(e, r, t[r]);
    if (u0) for (var r of u0(t)) pT.call(t, r) && c0(e, r, t[r]);
    return e;
  },
  f0 = (e, t) => cT(e, fT(t));
function gT({
  id: e,
  cancelProps: t,
  confirmProps: r,
  labels: n = { cancel: "", confirm: "" },
  closeOnConfirm: o = !0,
  closeOnCancel: i = !0,
  groupProps: l,
  onCancel: a,
  onConfirm: s,
  children: u,
}) {
  const { cancel: c, confirm: f } = n,
    d = sT(),
    p = (w) => {
      typeof t?.onClick == "function" && t?.onClick(w),
        typeof a == "function" && a(),
        i && d.closeModal(e);
    },
    y = (w) => {
      typeof r?.onClick == "function" && r?.onClick(w),
        typeof s == "function" && s(),
        o && d.closeModal(e);
    };
  return E.createElement(
    E.Fragment,
    null,
    u && E.createElement(q, { mb: "md" }, u),
    E.createElement(
      jt,
      _c({ position: "right" }, l),
      E.createElement(
        Kn,
        f0(_c({ variant: "default" }, t), { onClick: p }),
        t?.children || c
      ),
      E.createElement(Kn, f0(_c({}, r), { onClick: y }), r?.children || f)
    )
  );
}
function mT(e, t) {
  switch (t.type) {
    case "OPEN":
      return { current: t.payload, modals: [...e.modals, t.payload] };
    case "CLOSE":
      return {
        current: e.modals[e.modals.length - 2] || null,
        modals: e.modals.filter((r) => r.id !== t.payload),
      };
    case "CLOSE_ALL":
      return { current: e.current, modals: [] };
    default:
      return e;
  }
}
const [vT, Ui] = M$("mantine-modals");
Ui("openModal");
Ui("closeModal");
Ui("closeAllModals");
const rx = Ui("openConfirmModal");
Ui("openContextModal");
var hT = Object.defineProperty,
  yT = Object.defineProperties,
  wT = Object.getOwnPropertyDescriptors,
  Es = Object.getOwnPropertySymbols,
  nx = Object.prototype.hasOwnProperty,
  ox = Object.prototype.propertyIsEnumerable,
  d0 = (e, t, r) =>
    t in e
      ? hT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Hl = (e, t) => {
    for (var r in t || (t = {})) nx.call(t, r) && d0(e, r, t[r]);
    if (Es) for (var r of Es(t)) ox.call(t, r) && d0(e, r, t[r]);
    return e;
  },
  p0 = (e, t) => yT(e, wT(t)),
  Wr = (e, t) => {
    var r = {};
    for (var n in e) nx.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Es)
      for (var n of Es(e)) t.indexOf(n) < 0 && ox.call(e, n) && (r[n] = e[n]);
    return r;
  };
function _T(e) {
  if (!e) return { confirmProps: {}, modalProps: {} };
  const t = e,
    {
      id: r,
      children: n,
      onCancel: o,
      onConfirm: i,
      closeOnConfirm: l,
      closeOnCancel: a,
      cancelProps: s,
      confirmProps: u,
      groupProps: c,
      labels: f,
    } = t,
    d = Wr(t, [
      "id",
      "children",
      "onCancel",
      "onConfirm",
      "closeOnConfirm",
      "closeOnCancel",
      "cancelProps",
      "confirmProps",
      "groupProps",
      "labels",
    ]);
  return {
    confirmProps: {
      id: r,
      children: n,
      onCancel: o,
      onConfirm: i,
      closeOnConfirm: l,
      closeOnCancel: a,
      cancelProps: s,
      confirmProps: u,
      groupProps: c,
      labels: f,
    },
    modalProps: Hl({ id: r }, d),
  };
}
function ST({ children: e, modalProps: t, labels: r, modals: n }) {
  const [o, i] = g.exports.useReducer(mT, { modals: [], current: null }),
    l = (w) => {
      o.modals.forEach((v) => {
        var m, h, _, b;
        v.type === "confirm" &&
          w &&
          ((h = (m = v.props) == null ? void 0 : m.onCancel) == null ||
            h.call(m)),
          (b = (_ = v.props) == null ? void 0 : _.onClose) == null || b.call(_);
      }),
        i({ type: "CLOSE_ALL" });
    },
    a = (w) => {
      var v = w,
        { modalId: m } = v,
        h = Wr(v, ["modalId"]);
      const _ = m || Al();
      return (
        i({ type: "OPEN", payload: { id: _, type: "content", props: h } }), _
      );
    },
    s = (w) => {
      var v = w,
        { modalId: m } = v,
        h = Wr(v, ["modalId"]);
      const _ = m || Al();
      return (
        i({ type: "OPEN", payload: { id: _, type: "confirm", props: h } }), _
      );
    },
    u = (w, v) => {
      var m = v,
        { modalId: h } = m,
        _ = Wr(m, ["modalId"]);
      const b = h || Al();
      return (
        i({
          type: "OPEN",
          payload: { id: b, type: "context", props: _, ctx: w },
        }),
        b
      );
    },
    c = (w, v) => {
      var m, h, _, b;
      if (o.modals.length <= 1) {
        l(v);
        return;
      }
      const O = o.modals.find((x) => x.id === w);
      O?.type === "confirm" &&
        v &&
        ((h = (m = O.props) == null ? void 0 : m.onCancel) == null ||
          h.call(m)),
        (b = (_ = O?.props) == null ? void 0 : _.onClose) == null || b.call(_),
        i({ type: "CLOSE", payload: O.id });
    };
  vT({
    openModal: a,
    openConfirmModal: s,
    openContextModal: (w) => {
      var v = w,
        { modal: m } = v,
        h = Wr(v, ["modal"]);
      return u(m, h);
    },
    closeModal: c,
    closeAllModals: l,
  });
  const f = {
      modals: o.modals,
      openModal: a,
      openConfirmModal: s,
      openContextModal: u,
      closeModal: c,
      closeAll: l,
    },
    d = () => {
      var w;
      switch ((w = o.current) == null ? void 0 : w.type) {
        case "context": {
          const v = o.current.props,
            { innerProps: m } = v,
            h = Wr(v, ["innerProps"]),
            _ = n[o.current.ctx];
          return {
            modalProps: h,
            content: S(_, { innerProps: m, context: f, id: o.current.id }),
          };
        }
        case "confirm": {
          const { modalProps: v, confirmProps: m } = _T(o.current.props);
          return {
            modalProps: v,
            content: S(gT, {
              ...p0(Hl({}, m), {
                id: o.current.id,
                labels: o.current.props.labels || r,
              }),
            }),
          };
        }
        case "content": {
          const v = o.current.props,
            { children: m } = v;
          return {
            modalProps: Wr(v, ["children"]),
            content: S(it, { children: m }),
          };
        }
        default:
          return { modalProps: {}, content: null };
      }
    },
    { modalProps: p, content: y } = d();
  return U(dp.Provider, {
    value: f,
    children: [
      S(mu, {
        ...p0(Hl(Hl({}, t), p), {
          opened: o.modals.length > 0,
          onClose: () => c(o.current.id),
        }),
        children: y,
      }),
      e,
    ],
  });
}
const bT = ({ data: e }) => {
    const t = Bi(),
      r = tx((o) => o.setClipboard),
      n = wu((o) => o.setVisible);
    return U(et, {
      position: "right-start",
      width: 200,
      children: [
        S(et.Target, {
          children: S(nt, {
            label: "Door actions",
            children: S($t, {
              color: "blue.4",
              variant: "transparent",
              children: S(lD, { size: 24 }),
            }),
          }),
        }),
        U(et.Dropdown, {
          children: [
            S(et.Item, {
              icon: S(yu, { size: 18 }),
              onClick: () => {
                K.setState(If(e.row.original), !0), t("/settings/general");
              },
              children: "Settings",
            }),
            S(et.Item, {
              icon: S(lT, { size: 18 }),
              onClick: () => {
                r(If(e.row.original)), xr("notify", "Settings copied");
              },
              children: "Copy settings",
            }),
            S(et.Item, {
              icon: S(oT, { size: 18 }),
              onClick: () => {
                n(!1), xr("teleportToDoor", e.row.getValue("id"));
              },
              children: "Teleport to door",
            }),
            S(et.Item, {
              color: "red",
              icon: S(Wi, { size: 18 }),
              onClick: () =>
                rx({
                  title: "Confirm deletion",
                  centered: !0,
                  withCloseButton: !1,
                  children: U(mt, {
                    children: [
                      "Are you sure you want to delete",
                      S(mt, {
                        component: "span",
                        weight: 700,
                        children: ` ${e.row.getValue("name")}`,
                      }),
                      "?",
                    ],
                  }),
                  labels: { confirm: "Confirm", cancel: "Cancel" },
                  confirmProps: { color: "red" },
                  onConfirm: () => {
                    xr("deleteDoor", e.row.getValue("id"));
                  },
                }),
              children: "Delete door",
            }),
          ],
        }),
      ],
    });
  },
  xT = () => {
    const [e, t] = g.exports.useState([]),
      [r, n] = g.exports.useState(1),
      o = Pf((s) => s.debouncedValue),
      i = kf((s) => s.doors),
      l = g.exports.useMemo(
        () => [
          {
            id: "id",
            header: "ID",
            accessorKey: "id",
            cell: (s) => s.getValue(),
            enableHiding: !1,
            enableGlobalFilter: !1,
          },
          {
            id: "name",
            header: "Name",
            accessorKey: "name",
            cell: (s) => s.getValue(),
            enableHiding: !1,
          },
          {
            id: "zone",
            header: "Zone",
            accessorKey: "zone",
            cell: (s) => s.getValue(),
            enableHiding: !1,
          },
          { id: "options-menu", cell: (s) => S(bT, { data: s }) },
        ],
        []
      ),
      a = nT({
        data: i,
        columns: l,
        initialState: { pagination: { pageSize: 8, pageIndex: 0 } },
        state: { sorting: e, globalFilter: o },
        onGlobalFilterChange: Pf((s) => s.setValue),
        onSortingChange: t,
        getCoreRowModel: GD(),
        getSortedRowModel: QD(),
        getFilteredRowModel: KD(),
        getPaginationRowModel: JD(),
      });
    return (
      g.exports.useEffect(() => {
        a.setPageIndex(r - 1);
      }, [r, i]),
      U(Tt, {
        justify: "space-between",
        align: "center",
        sx: { height: "100%", paddingBottom: 16 },
        spacing: 0,
        children: [
          a.getFilteredRowModel().rows.length > 0
            ? U(db, {
                children: [
                  S("thead", {
                    children: a
                      .getHeaderGroups()
                      .map((s) =>
                        S(
                          "tr",
                          {
                            children: s.headers.map((u) =>
                              S(
                                "th",
                                {
                                  children: S(ou, {
                                    onClick: u.column.getToggleSortingHandler(),
                                    children: U(jt, {
                                      children: [
                                        S(mt, {
                                          children: s0(
                                            u.column.columnDef.header,
                                            u.getContext()
                                          ),
                                        }),
                                        u.column.getIsSorted() === "desc"
                                          ? S(oD, {})
                                          : u.column.getIsSorted() === "asc"
                                          ? S(iD, {})
                                          : u.column.getCanHide()
                                          ? S(it, {})
                                          : S(sD, {}),
                                      ],
                                    }),
                                  }),
                                },
                                u.id
                              )
                            ),
                          },
                          s.id
                        )
                      ),
                  }),
                  S("tbody", {
                    children: a
                      .getRowModel()
                      .rows.map((s) =>
                        S(
                          "tr",
                          {
                            children: s
                              .getAllCells()
                              .map((u) =>
                                S(
                                  "td",
                                  {
                                    children: s0(
                                      u.column.columnDef.cell,
                                      u.getContext()
                                    ),
                                  },
                                  u.id
                                )
                              ),
                          },
                          s.id
                        )
                      ),
                  }),
                ],
              })
            : S(J_, {
                sx: { height: "100%" },
                children: U(Tt, {
                  align: "center",
                  children: [
                    S(Ub, { size: 48 }),
                    S(mt, { size: "lg", children: "No results found" }),
                  ],
                }),
              }),
          a.getPageCount() > 1 &&
            S(rb, { page: r, total: a.getPageCount(), onChange: (s) => n(s) }),
        ],
      })
    );
  },
  PT = () =>
    U(Tt, { sx: { height: "100%" }, children: [S(pD, {}), S(xT, {})] }),
  Lo = ({ label: e, type: t, infoCircle: r, span: n, value: o, setValue: i }) =>
    S(gu.Col, {
      span: n || 1,
      children: S(q, {
        children:
          t === "text"
            ? S(Tr, {
                value: o,
                onChange: (l) => i(l.target.value),
                label: e,
                rightSection:
                  r &&
                  S(nt, {
                    label: r,
                    withArrow: !0,
                    arrowSize: 10,
                    multiline: !0,
                    width: 200,
                    children: S(bf, {
                      variant: "light",
                      mr: 10,
                      children: S(Rf, { size: 18 }),
                    }),
                  }),
              })
            : S($i, {
                label: e,
                step: 0.1,
                precision: 1,
                value: typeof o == "number" ? o : void 0,
                onChange: (l) => i(l),
                hideControls: !0,
                rightSection:
                  r &&
                  S(nt, {
                    label: r,
                    withArrow: !0,
                    arrowSize: 10,
                    multiline: !0,
                    width: 200,
                    children: S(bf, {
                      variant: "light",
                      mr: 10,
                      children: S(Rf, { size: 18 }),
                    }),
                  }),
              }),
      }),
    }),
  $T = () => {
    const e = K((c) => c.name),
      t = K((c) => c.passcode),
      r = K((c) => c.autolock),
      n = K((c) => c.maxDistance),
      o = K((c) => c.doorRate),
      i = _e((c) => c.setName),
      l = _e((c) => c.setPasscode),
      a = _e((c) => c.setAutolock),
      s = _e((c) => c.setMaxDistance),
      u = _e((c) => c.setDoorRate);
    return S(it, {
      children: U(gu, {
        columns: 2,
        sx: { fontSize: 16 },
        children: [
          S(Lo, {
            label: "Door name",
            type: "text",
            value: e || "",
            setValue: (c) => i(c),
          }),
          S(Lo, {
            label: "Passcode",
            type: "text",
            value: t || "",
            setValue: (c) => l(c),
          }),
          S(Lo, {
            label: "Autolock Interval",
            type: "number",
            value: r || 0,
            setValue: (c) => a(c),
            infoCircle: "Time in seconds after which the door will be locked",
          }),
          S(Lo, {
            label: "Interact Distance",
            type: "number",
            value: n || 0,
            setValue: (c) => s(c),
            infoCircle:
              "Controls the distance from which the player can interact with the door",
          }),
          S(Lo, {
            label: "Door Rate",
            type: "number",
            span: 2,
            value: o || 0,
            setValue: (c) => u(c),
            infoCircle: "Speed the automatic door will move at",
          }),
        ],
      }),
    });
  },
  _n = ({ infoCircle: e, label: t, value: r, toggle: n }) =>
    U(jt, {
      spacing: 8,
      align: "center",
      children: [
        S(np, { label: t, checked: r, onChange: () => n() }),
        S(nt, {
          label: e,
          withArrow: !0,
          arrowSize: 10,
          multiline: !0,
          width: 200,
          children: S(q, {
            sx: { display: "flex" },
            children: S(Rf, { size: 18 }),
          }),
        }),
      ],
    }),
  OT = () => {
    const e = K((a) => a.state),
      t = K((a) => a.doors),
      r = K((a) => a.auto),
      n = K((a) => a.lockpick),
      o = K((a) => a.hideUi),
      i = K((a) => a.holdOpen),
      l = _e((a) => a.toggleCheckbox);
    return S(it, {
      children: U(ab, {
        cols: 2,
        pt: 16,
        children: [
          S(_n, {
            label: "Locked",
            infoCircle: "Sets whether the targeting door is locked by default",
            value: e || !1,
            toggle: () => l("state"),
          }),
          S(_n, {
            label: "Double",
            infoCircle: "Enable if the targeting door is a double door",
            value: t || !1,
            toggle: () => l("doors"),
          }),
          S(_n, {
            label: "Automatic",
            infoCircle:
              "Enable if the targeting door is moving automatically (Garage, poles, etc...)",
            value: r || !1,
            toggle: () => l("auto"),
          }),
          S(_n, {
            label: "Lockpick",
            infoCircle:
              "Enables the targeting door to be lockpicked. Can define skill check difficulties in Lockpick tab, otherwise uses config defaults",
            value: n || !1,
            toggle: () => l("lockpick"),
          }),
          S(_n, {
            label: "Hide UI",
            infoCircle: "Hides UI indicators for the targeting door",
            value: o || !1,
            toggle: () => l("hideUi"),
          }),
          S(_n, {
            label: "Hold Open",
            infoCircle:
              "Sets whether the targeting door(s) should stay open while unlocked",
            value: i || !1,
            toggle: () => l("holdOpen"),
          }),
        ],
      }),
    });
  },
  CT = () =>
    S(Tt, {
      justify: "space-between",
      sx: { height: "100%" },
      children: U(q, { children: [S($T, {}), S(OT, {})] }),
    }),
  ET = () => {
    const e = K((o) => o.characters),
      t = _e((o) => o.setCharacters),
      r = (o, i) => {
        t((l) => l.map((a, s) => (i === s ? o : a)));
      },
      n = (o) => {
        t((i) => i.filter((l, a) => a !== o));
      };
    return S(it, {
      children: e.map((o, i) =>
        U(
          jt,
          {
            position: "center",
            mt: i === 0 ? 0 : 16,
            noWrap: !0,
            spacing: 16,
            sx: { fontSize: 16 },
            children: [
              S(Tr, {
                sx: { width: "100%" },
                placeholder: "Character Id",
                value: o,
                onChange: (l) => r(l.target.value, i),
              }),
              S(nt, {
                label: "Delete row",
                children: S($t, {
                  color: "red.4",
                  variant: "transparent",
                  onClick: () => n(i),
                  children: S(Wi, { size: 24 }),
                }),
              }),
            ],
          },
          `group-${i}`
        )
      ),
    });
  },
  _u = ({ children: e, setter: t }) =>
    S(Tt, {
      justify: "space-between",
      align: "center",
      sx: { height: "100%" },
      children: U(q, {
        sx: { width: "100%", overflowY: "auto", height: 410 },
        children: [
          e,
          S(nt, {
            label: "Create a new row",
            withArrow: !0,
            arrowSize: 10,
            children: S(Kn, {
              mt: 16,
              fullWidth: !0,
              variant: "light",
              onClick: t,
              children: S(Wb, { size: 24 }),
            }),
          }),
        ],
      }),
    }),
  kT = () => {
    const e = _e((t) => t.setCharacters);
    return (
      g.exports.useEffect(
        () => () => {
          e((t) => t.filter((r, n) => r !== "" || n === 0));
        },
        []
      ),
      S(_u, { setter: () => e((t) => [...t, ""]), children: S(ET, {}) })
    );
  },
  RT = () => {
    const e = K((o) => o.groups),
      t = _e((o) => o.setGroups),
      r = (o, i, l) => {
        t((a) => a.map((s, u) => (i === u ? { ...s, [l]: o } : s)));
      },
      n = (o) => {
        t((i) => i.filter((l, a) => a !== o));
      };
    return S(it, {
      children: e.map((o, i) =>
        U(
          jt,
          {
            position: "center",
            mt: i === 0 ? 0 : 16,
            noWrap: !0,
            spacing: 16,
            sx: { fontSize: 16 },
            children: [
              S(Tr, {
                sx: { width: "100%" },
                placeholder: "Group",
                value: o.name,
                onChange: (l) => r(l.target.value, i, "name"),
              }),
              S($i, {
                sx: { width: "100%" },
                placeholder: "Grade",
                value: o.grade,
                onChange: (l) => r(l, i, "grade"),
              }),
              S(nt, {
                label: "Delete row",
                children: S($t, {
                  color: "red.4",
                  variant: "transparent",
                  onClick: () => n(i),
                  children: S(Wi, { size: 24 }),
                }),
              }),
            ],
          },
          `group-${i}`
        )
      ),
    });
  },
  IT = () => {
    const e = _e((t) => t.setGroups);
    return (
      g.exports.useEffect(
        () => () => {
          e((t) =>
            t.filter((r, n) => r.name !== "" || r.grade !== null || n === 0)
          );
        },
        []
      ),
      S(_u, {
        setter: () => e((t) => [...t, { name: "", grade: null }]),
        children: S(RT, {}),
      })
    );
  };
var g0 = function e(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    var n, o, i;
    if (Array.isArray(t)) {
      if (((n = t.length), n != r.length)) return !1;
      for (o = n; o-- !== 0; ) if (!e(t[o], r[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === r.toString();
    if (((i = Object.keys(t)), (n = i.length), n !== Object.keys(r).length))
      return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
    for (o = n; o-- !== 0; ) {
      var l = i[o];
      if (!e(t[l], r[l])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
function Nf(e) {
  return e === null || typeof e != "object"
    ? {}
    : Object.keys(e).reduce((t, r) => {
        const n = e[r];
        return n != null && n !== !1 && (t[r] = n), t;
      }, {});
}
var NT = Object.defineProperty,
  m0 = Object.getOwnPropertySymbols,
  zT = Object.prototype.hasOwnProperty,
  DT = Object.prototype.propertyIsEnumerable,
  v0 = (e, t, r) =>
    t in e
      ? NT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  TT = (e, t) => {
    for (var r in t || (t = {})) zT.call(t, r) && v0(e, r, t[r]);
    if (m0) for (var r of m0(t)) DT.call(t, r) && v0(e, r, t[r]);
    return e;
  };
function h0(e, t) {
  if (t === null || typeof t != "object") return {};
  const r = TT({}, t);
  return (
    Object.keys(t).forEach((n) => {
      n.includes(`${String(e)}.`) && delete r[n];
    }),
    r
  );
}
const MT = "__MANTINE_FORM_INDEX__";
function y0(e, t) {
  return t
    ? typeof t == "boolean"
      ? t
      : Array.isArray(t)
      ? t.includes(e.replace(/[.][0-9]/g, `.${MT}`))
      : !1
    : !1;
}
function Vt(e) {
  if (typeof e != "object") return e;
  var t,
    r,
    n = Object.prototype.toString.call(e);
  if (n === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      r = new e.constructor();
      for (t in e) e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = Vt(e[t]));
    } else {
      r = {};
      for (t in e)
        t === "__proto__"
          ? Object.defineProperty(r, t, {
              value: Vt(e[t]),
              configurable: !0,
              enumerable: !0,
              writable: !0,
            })
          : (r[t] = Vt(e[t]));
    }
    return r;
  }
  if (n === "[object Array]") {
    for (t = e.length, r = Array(t); t--; ) r[t] = Vt(e[t]);
    return r;
  }
  return n === "[object Set]"
    ? ((r = new Set()),
      e.forEach(function (o) {
        r.add(Vt(o));
      }),
      r)
    : n === "[object Map]"
    ? ((r = new Map()),
      e.forEach(function (o, i) {
        r.set(Vt(i), Vt(o));
      }),
      r)
    : n === "[object Date]"
    ? new Date(+e)
    : n === "[object RegExp]"
    ? ((r = new RegExp(e.source, e.flags)), (r.lastIndex = e.lastIndex), r)
    : n === "[object DataView]"
    ? new e.constructor(Vt(e.buffer))
    : n === "[object ArrayBuffer]"
    ? e.slice(0)
    : n.slice(-6) === "Array]"
    ? new e.constructor(e)
    : e;
}
function ix(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function Su(e, t, r) {
  const n = ix(e);
  if (n.length === 0) return r;
  const o = Vt(r);
  if (n.length === 1) return (o[n[0]] = t), o;
  let i = o[n[0]];
  for (let l = 1; l < n.length - 1; l += 1) {
    if (i === void 0) return o;
    i = i[n[l]];
  }
  return (i[n[n.length - 1]] = t), o;
}
function pr(e, t) {
  const r = ix(e);
  if (r.length === 0 || typeof t != "object" || t === null) return;
  let n = t[r[0]];
  for (let o = 1; o < r.length && n !== void 0; o += 1) n = n[r[o]];
  return n;
}
function w0(e) {
  const t = Nf(e);
  return { hasErrors: Object.keys(t).length > 0, errors: t };
}
function zf(e, t, r = "", n = {}) {
  return typeof e != "object" || e === null
    ? n
    : Object.keys(e).reduce((o, i) => {
        const l = e[i],
          a = `${r === "" ? "" : `${r}.`}${i}`,
          s = pr(a, t);
        let u = !1;
        return (
          typeof l == "function" && (o[a] = l(s, t, a)),
          typeof l == "object" &&
            Array.isArray(s) &&
            ((u = !0), s.forEach((c, f) => zf(l, t, `${a}.${f}`, o))),
          typeof l == "object" &&
            typeof s == "object" &&
            s !== null &&
            (u || zf(l, t, a, o)),
          o
        );
      }, n);
}
function Df(e, t) {
  return w0(typeof e == "function" ? e(t) : zf(e, t));
}
function $l(e, t, r) {
  if (typeof e != "string") return { hasError: !1, error: null };
  const n = Df(t, r),
    o = Object.keys(n.errors).find((i) =>
      e.split(".").every((l, a) => l === i.split(".")[a])
    );
  return { hasError: !!o, error: o ? n.errors[o] : null };
}
function jT(e, { from: t, to: r }, n) {
  const o = pr(e, n);
  if (!Array.isArray(o)) return n;
  const i = [...o],
    l = o[t];
  return i.splice(t, 1), i.splice(r, 0, l), Su(e, i, n);
}
function LT(e, t, r) {
  const n = pr(e, r);
  return Array.isArray(n)
    ? Su(
        e,
        n.filter((o, i) => i !== t),
        r
      )
    : r;
}
function FT(e, t, r, n) {
  const o = pr(e, n);
  if (!Array.isArray(o)) return n;
  const i = [...o];
  return i.splice(typeof r == "number" ? r : i.length, 0, t), Su(e, i, n);
}
function _0(e, t) {
  const r = Object.keys(e);
  if (typeof t == "string") {
    const n = r.filter((o) => o.includes(`${t}.`));
    return e[t] || n.some((o) => e[o]) || !1;
  }
  return r.some((n) => e[n]);
}
function AT(e) {
  return (t) => {
    if (!t) e(t);
    else if (typeof t == "function") e(t);
    else if (typeof t == "object" && "nativeEvent" in t) {
      const { currentTarget: r } = t;
      r instanceof HTMLInputElement
        ? r.type === "checkbox"
          ? e(r.checked)
          : e(r.value)
        : (r instanceof HTMLTextAreaElement ||
            r instanceof HTMLSelectElement) &&
          e(r.value);
    } else e(t);
  };
}
var VT = Object.defineProperty,
  HT = Object.defineProperties,
  BT = Object.getOwnPropertyDescriptors,
  S0 = Object.getOwnPropertySymbols,
  WT = Object.prototype.hasOwnProperty,
  UT = Object.prototype.propertyIsEnumerable,
  b0 = (e, t, r) =>
    t in e
      ? VT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Sn = (e, t) => {
    for (var r in t || (t = {})) WT.call(t, r) && b0(e, r, t[r]);
    if (S0) for (var r of S0(t)) UT.call(t, r) && b0(e, r, t[r]);
    return e;
  },
  Sc = (e, t) => HT(e, BT(t));
function lx({
  initialValues: e = {},
  initialErrors: t = {},
  initialDirty: r = {},
  initialTouched: n = {},
  clearInputErrorOnChange: o = !0,
  validateInputOnChange: i = !1,
  validateInputOnBlur: l = !1,
  transformValues: a = (u) => u,
  validate: s,
} = {}) {
  const [u, c] = g.exports.useState(n),
    [f, d] = g.exports.useState(r),
    [p, y] = g.exports.useState(e),
    [w, v] = g.exports.useState(Nf(t)),
    m = g.exports.useRef(e),
    h = (k) => {
      m.current = k;
    },
    _ = g.exports.useCallback(() => c({}), []),
    b = (k) => {
      h(k || p), d({});
    },
    O = g.exports.useCallback(
      (k) => v((M) => Nf(typeof k == "function" ? k(M) : k)),
      []
    ),
    x = g.exports.useCallback(() => v({}), []),
    P = g.exports.useCallback(() => {
      y(e), x(), b(e), _();
    }, []),
    $ = g.exports.useCallback(
      (k, M) => O((G) => Sc(Sn({}, G), { [k]: M })),
      []
    ),
    C = g.exports.useCallback(
      (k) =>
        O((M) => {
          if (typeof k != "string") return M;
          const G = Sn({}, M);
          return delete G[k], G;
        }),
      []
    ),
    I = g.exports.useCallback(
      (k) =>
        d((M) => {
          if (typeof k != "string") return M;
          const G = h0(k, M);
          return delete G[k], G;
        }),
      []
    ),
    z = g.exports.useCallback((k, M) => {
      const G = y0(k, i);
      I(k),
        c((Z) => Sc(Sn({}, Z), { [k]: !0 })),
        y((Z) => {
          const ze = Su(k, M, Z);
          if (G) {
            const ae = $l(k, s, ze);
            ae.hasError ? $(k, ae.error) : C(k);
          }
          return ze;
        }),
        !G && o && $(k, null);
    }, []),
    D = g.exports.useCallback((k) => {
      y((M) => {
        const G = typeof k == "function" ? k(M) : k;
        return Sn(Sn({}, M), G);
      }),
        o && x();
    }, []),
    j = g.exports.useCallback((k, M) => {
      I(k), y((G) => jT(k, M, G));
    }, []),
    B = g.exports.useCallback((k, M) => {
      I(k), y((G) => LT(k, M, G)), v((G) => h0(k, G));
    }, []),
    V = g.exports.useCallback((k, M, G) => {
      I(k), y((Z) => FT(k, M, G, Z));
    }, []),
    W = g.exports.useCallback(() => {
      const k = Df(s, p);
      return v(k.errors), k;
    }, [p, s]),
    re = g.exports.useCallback(
      (k) => {
        const M = $l(k, s, p);
        return M.hasError ? $(k, M.error) : C(k), M;
      },
      [p, s]
    ),
    se = (
      k,
      {
        type: M = "input",
        withError: G = M === "input",
        withFocus: Z = !0,
      } = {}
    ) => {
      const ae = { onChange: AT((Ae) => z(k, Ae)) };
      return (
        G && (ae.error = w[k]),
        M === "checkbox" ? (ae.checked = pr(k, p)) : (ae.value = pr(k, p)),
        Z &&
          ((ae.onFocus = () => c((Ae) => Sc(Sn({}, Ae), { [k]: !0 }))),
          (ae.onBlur = () => {
            if (y0(k, l)) {
              const Ae = $l(k, s, p);
              Ae.hasError ? $(k, Ae.error) : C(k);
            }
          })),
        ae
      );
    },
    ie = (k, M) => (G) => {
      G?.preventDefault();
      const Z = W();
      Z.hasErrors ? M?.(Z.errors, p, G) : k(a(p), G);
    },
    Ne = g.exports.useCallback((k) => {
      k.preventDefault(), P();
    }, []),
    R = (k) => {
      if (Object.keys(f).length > 0) return _0(f, k);
      if (k) {
        const G = pr(k, p),
          Z = pr(k, m.current);
        return !g0(G, Z);
      }
      return !g0(p, m.current);
    },
    T = g.exports.useCallback((k) => _0(u, k), [u]),
    A = g.exports.useCallback(
      (k) => (k ? !$l(k, s, p).hasError : !Df(s, p).hasErrors),
      [p, s]
    );
  return {
    values: p,
    errors: w,
    setValues: D,
    setErrors: O,
    setFieldValue: z,
    setFieldError: $,
    clearFieldError: C,
    clearErrors: x,
    reset: P,
    validate: W,
    validateField: re,
    reorderListItem: j,
    removeListItem: B,
    insertListItem: V,
    getInputProps: se,
    onSubmit: ie,
    onReset: Ne,
    isDirty: R,
    isTouched: T,
    setTouched: c,
    setDirty: d,
    resetTouched: _,
    resetDirty: b,
    isValid: A,
  };
}
const GT = ({ modal: e, setModal: t }) => {
    const r = K((a) => a.items),
      n = _e((a) => a.setItems),
      o = g.exports.useMemo(() => r[e.index], [e, r]),
      i = lx({ initialValues: { metadata: o.metadata, remove: o.remove } }),
      l = (a) => {
        t((s) => ({ ...s, opened: !1 })),
          n((s) =>
            s.map((u, c) =>
              c === e.index
                ? { ...u, metadata: a.metadata, remove: a.remove }
                : u
            )
          );
      };
    return S("form", {
      onSubmit: i.onSubmit((a) => l(a)),
      children: U(Tt, {
        children: [
          S(Tr, {
            label: "Metadata type",
            defaultValue: o.metadata,
            ...i.getInputProps("metadata"),
          }),
          S(np, {
            label: "Remove on use",
            defaultChecked: o.remove,
            ...i.getInputProps("remove"),
          }),
          S(Kn, {
            uppercase: !0,
            variant: "light",
            type: "submit",
            children: "Confirm",
          }),
        ],
      }),
    });
  },
  YT = () => {
    const e = K((l) => l.items),
      t = _e((l) => l.setItems),
      [r, n] = g.exports.useState({ opened: !1, index: 0 }),
      o = (l, a) => {
        const s = [...e];
        switch (l.target.id) {
          case "name":
            s[a].name = l.target.value;
            break;
        }
        t(() => s);
      },
      i = (l) => {
        t((a) => a.filter((s, u) => u !== l));
      };
    return U(q, {
      children: [
        e.length > 0 &&
          S(it, {
            children: e.map((l, a) =>
              U(
                jt,
                {
                  sx: { width: "100%" },
                  position: "apart",
                  spacing: 16,
                  mt: a === 0 ? void 0 : 16,
                  children: [
                    S(Tr, {
                      sx: { width: "80%" },
                      value: l.name || "",
                      id: "name",
                      placeholder: "Item",
                      onChange: (s) => o(s, a),
                    }),
                    S(nt, {
                      label: "Item options",
                      children: S($t, {
                        color: "blue.4",
                        variant: "transparent",
                        onClick: () => n({ opened: !0, index: a }),
                        children: S(yu, { size: 24 }),
                      }),
                    }),
                    S(nt, {
                      label: "Delete row",
                      children: S($t, {
                        color: "red.4",
                        variant: "transparent",
                        onClick: () => i(a),
                        children: S(Wi, { size: 24 }),
                      }),
                    }),
                  ],
                },
                `item-field-${a}`
              )
            ),
          }),
        S(mu, {
          opened: r.opened,
          onClose: () => n({ ...r, opened: !1 }),
          transition: "fade",
          title: "Item options",
          centered: !0,
          size: "xs",
          withCloseButton: !1,
          children: S(GT, { modal: r, setModal: n }),
        }),
      ],
    });
  },
  XT = () => {
    const e = _e((t) => t.setItems);
    return (
      g.exports.useEffect(
        () => () => {
          e((t) => t.filter((r, n) => n === 0 || r.name !== ""));
        },
        []
      ),
      S(_u, {
        setter: () => e((t) => [...t, { name: "", metadata: "", remove: !1 }]),
        children: S(YT, {}),
      })
    );
  },
  qT = () => {
    const e = _e((i) => i.sounds),
      t = K((i) => i.lockSound),
      r = K((i) => i.unlockSound),
      n = _e((i) => i.setLockSound),
      o = _e((i) => i.setUnlockSound);
    return U(Tt, {
      children: [
        S(Oi, {
          data: e,
          label: "Lock sound",
          value: t || "",
          searchable: !0,
          clearable: !0,
          nothingFound: "No such sound",
          onChange: (i) => n(i),
        }),
        S(Oi, {
          data: e,
          label: "Unlock sound",
          value: r || "",
          searchable: !0,
          clearable: !0,
          nothingFound: "No such sound",
          onChange: (i) => o(i),
        }),
      ],
    });
  },
  KT = () => {
    const e = Bi(),
      t = tx((o) => o.clipboard),
      r = wu((o) => o.setVisible),
      n = () => {
        const o = { ...K.getState() };
        if (
          (o.name === "" && (o.name = null),
          o.passcode === "" && (o.passcode = null),
          o.lockSound === "" && (o.lockSound = null),
          o.unlockSound === "" && (o.unlockSound = null),
          (o.autolock = o.autolock || null),
          (o.maxDistance = o.maxDistance || 2),
          (o.doorRate = o.doorRate ? o.doorRate + 0 : null),
          (o.auto = o.auto || null),
          (o.lockpick = o.lockpick || null),
          (o.hideUi = o.hideUi || null),
          (o.holdOpen = o.holdOpen || null),
          o.items && o.items.length > 0)
        ) {
          const i = [];
          for (let l = 0; l < o.items?.length; l++) {
            const a = o.items[l];
            a.name &&
              a.name !== "" &&
              (a.metadata === "" && (a.metadata = null),
              a.remove || (a.remove = null),
              i.push(a));
          }
          o.items = i;
        }
        if (o.characters && o.characters.length > 0) {
          const i = [];
          for (let l = 0; l < o.characters.length; l++) {
            const a = o.characters[l];
            a && a !== "" && i.push(Number.isNaN(+a) ? a : +a);
          }
          o.characters = i;
        }
        if (o.groups && o.groups.length > 0) {
          const i = {};
          for (let l = 0; l < o.groups.length; l++) {
            const a = o.groups[l];
            a.name && a.name !== "" && (i[a.name] = a.grade || 0);
          }
          o.groups = i;
        } else o.groups = null;
        if (o.lockpickDifficulty && o.lockpickDifficulty.length > 0) {
          const i = [];
          for (let l = 0; l < o.lockpickDifficulty.length; l++) {
            const a = o.lockpickDifficulty[l];
            a !== "" && i.push(a);
          }
          o.lockpickDifficulty = i;
        }
        r(!1), xr("createDoor", o);
      };
    return U(J_, {
      children: [
        S(Kn, {
          color: "blue",
          uppercase: !0,
          onClick: () => n(),
          fullWidth: !0,
          children: "Confirm door",
        }),
        S(nt, {
          label: t ? "Apply copied settings" : "No door settings copied",
          withArrow: !0,
          arrowSize: 10,
          children: S($t, {
            variant: "outline",
            disabled: !t,
            size: "lg",
            ml: 16,
            sx: { width: 36, height: 36 },
            color: "blue",
            onClick: () => {
              K.setState(
                {
                  name: "",
                  passcode: t.passcode,
                  autolock: t.autolock,
                  items: t.items,
                  characters: t.characters,
                  groups: t.groups,
                  maxDistance: t.maxDistance,
                  doorRate: t.doorRate,
                  lockSound: t.lockSound,
                  unlockSound: t.unlockSound,
                  auto: t.auto,
                  state: t.state,
                  lockpick: t.lockpick,
                  hideUi: t.hideUi,
                  doors: t.doors,
                  lockpickDifficulty: t.lockpickDifficulty,
                  holdOpen: t.holdOpen,
                },
                !0
              ),
                xr("notify", "Settings applied");
            },
            children: S(iT, { size: 20 }),
          }),
        }),
        S($t, {
          variant: "outline",
          size: "lg",
          ml: 16,
          sx: { width: 36, height: 36 },
          color: "red",
          disabled: !K.getState().id,
          onClick: () =>
            rx({
              title: "Confirm deletion",
              centered: !0,
              withCloseButton: !1,
              children: U(mt, {
                children: [
                  "Are you sure you want to delete",
                  S(mt, {
                    component: "span",
                    weight: 700,
                    children: ` ${K.getState().name}`,
                  }),
                  "?",
                ],
              }),
              labels: { confirm: "Confirm", cancel: "Cancel" },
              confirmProps: { color: "red" },
              onConfirm: () => {
                xr("deleteDoor", K.getState().id), e("/");
              },
            }),
          children: S(aT, { size: 20 }),
        }),
      ],
    });
  },
  QT = ({ selectData: e, setModal: t, modal: r }) => {
    const [n, o] = g.exports.useState(null),
      i = K((c) => c.lockpickDifficulty),
      l = _e((c) => c.setLockpickDifficulty),
      a = g.exports.useMemo(() => i[r.index], [r, i]);
    g.exports.useEffect(() => o(typeof a == "string" ? a : "custom"), [a]);
    const s = lx({
      initialValues: {
        select: n,
        areaSize: typeof a == "string" ? null : a.areaSize,
        speedMultiplier: typeof a == "string" ? null : a.speedMultiplier,
      },
      validate: {
        select: (c) => (c === null ? "Difficulty is required" : null),
        areaSize: (c, f) =>
          c === null && f.select === "custom" ? "Area size is required" : null,
        speedMultiplier: (c, f) =>
          c === null && f.select === "custom"
            ? "Speed multiplier is required"
            : null,
      },
    });
    g.exports.useEffect(() => s.setFieldValue("select", n), [n]);
    const u = (c) => {
      t((d) => ({ ...d, opened: !1 }));
      const f =
        c.select === "custom"
          ? { areaSize: c.areaSize, speedMultiplier: c.speedMultiplier }
          : c.select;
      !f ||
        l((d) => {
          const p = [...d];
          return f && (p[r.index] = f), p;
        });
    };
    return S("form", {
      onSubmit: s.onSubmit((c) => u(c)),
      children: U(Tt, {
        children: [
          S(Oi, {
            data: e,
            placeholder: "Difficulty",
            ...s.getInputProps("select"),
            value: n,
            onChange: o,
            required: !0,
          }),
          S($i, {
            label: "Area size",
            defaultValue: typeof a == "object" ? a.areaSize : null,
            description: "Skill check area size in degrees",
            disabled: n !== "custom",
            max: 360,
            hideControls: !0,
            required: n === "custom",
            ...s.getInputProps("areaSize"),
          }),
          S($i, {
            label: "Speed multiplier",
            description: "Number the indicator speed will be multiplied by",
            disabled: n !== "custom",
            defaultValue: typeof a == "object" ? a.speedMultiplier : null,
            hideControls: !0,
            precision: 2,
            required: n === "custom",
            ...s.getInputProps("speedMultiplier"),
          }),
          S(Kn, {
            type: "submit",
            uppercase: !0,
            variant: "light",
            children: "Confirm",
          }),
        ],
      }),
    });
  },
  x0 = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
    { label: "Custom", value: "custom" },
  ],
  ZT = () => {
    const e = K((i) => i.lockpickDifficulty),
      t = _e((i) => i.setLockpickDifficulty),
      [r, n] = g.exports.useState({ opened: !1, index: 0 }),
      o = (i) => {
        t((l) => l.filter((a, s) => s !== i));
      };
    return U(it, {
      children: [
        e.map((i, l) =>
          U(
            jt,
            {
              sx: { width: "100%" },
              spacing: 16,
              mt: l === 0 ? void 0 : 16,
              position: "apart",
              children: [
                S(Oi, {
                  data: x0,
                  value: typeof i == "string" ? i : "custom",
                  readOnly: !0,
                  placeholder: "Edit row to select value",
                  sx: { width: "80%" },
                }),
                S(nt, {
                  label: "Edit row",
                  children: S($t, {
                    color: "blue.4",
                    variant: "transparent",
                    onClick: () => n({ opened: !0, index: l }),
                    children: S(yu, { size: 24 }),
                  }),
                }),
                S(nt, {
                  label: "Delete row",
                  children: S($t, {
                    color: "red.4",
                    variant: "transparent",
                    onClick: () => o(l),
                    children: S(Wi, { size: 24 }),
                  }),
                }),
              ],
            },
            `${typeof i == "string" ? i : i.areaSize}-${l}`
          )
        ),
        S(mu, {
          opened: r.opened,
          onClose: () => n({ ...r, opened: !1 }),
          transition: "fade",
          title: "Lockpick difficulty",
          centered: !0,
          size: "xs",
          withCloseButton: !1,
          children: S(QT, { selectData: x0, setModal: n, modal: r }),
        }),
      ],
    });
  },
  JT = () => {
    const e = _e((t) => t.setLockpickDifficulty);
    return (
      g.exports.useEffect(
        () => () => {
          e((t) => t.filter((r, n) => n === 0 || r !== ""));
        },
        []
      ),
      S(_u, { setter: () => e((t) => [...t, ""]), children: S(ZT, {}) })
    );
  },
  e7 = () => {
    const e = Bi(),
      t = ap(),
      r = K((n) => n.lockpick);
    return S(it, {
      children: U(q, {
        sx: { height: "100%", display: "flex" },
        children: [
          S(Je, {
            orientation: "vertical",
            color: "blue",
            sx: { height: "100%" },
            value: t.pathname.substring(10),
            onTabChange: (n) => e(`/settings/${n}`),
            children: U(Je.List, {
              children: [
                S(Je.Tab, {
                  value: "back",
                  onClick: () => e("/"),
                  icon: S(eD, { size: 20 }),
                  children: "Doors",
                }),
                S(Je.Tab, {
                  value: "general",
                  icon: S(yu, { size: 20 }),
                  children: "General",
                }),
                S(Je.Tab, {
                  value: "characters",
                  icon: S(uD, { size: 20 }),
                  children: "Characters",
                }),
                S(Je.Tab, {
                  value: "groups",
                  icon: S(nD, { size: 20 }),
                  children: "Groups",
                }),
                S(Je.Tab, {
                  value: "items",
                  icon: S(rD, { size: 20 }),
                  children: "Items",
                }),
                S(Je.Tab, {
                  value: "lockpick",
                  disabled: !r,
                  icon: S(aD, { size: 20 }),
                  children: "Lockpick",
                }),
                S(Je.Tab, {
                  value: "sound",
                  icon: S(tD, { size: 20 }),
                  children: "Sound",
                }),
              ],
            }),
          }),
          U(Tt, {
            p: 16,
            sx: { width: "100%" },
            justify: "space-between",
            children: [
              U(Ab, {
                children: [
                  S(Bt, { path: "/general", element: S(CT, {}) }),
                  S(Bt, { path: "/characters", element: S(kT, {}) }),
                  S(Bt, { path: "/groups", element: S(IT, {}) }),
                  S(Bt, { path: "/items", element: S(XT, {}) }),
                  S(Bt, { path: "/sound", element: S(qT, {}) }),
                  S(Bt, { path: "/lockpick", element: S(JT, {}) }),
                ],
              }),
              S(KT, {}),
            ],
          }),
        ],
      }),
    });
  },
  t7 = ["Escape"],
  r7 = (e, t) => {
    const r = g.exports.useRef(Vb);
    g.exports.useEffect(() => {
      r.current = e;
    }, [e]),
      g.exports.useEffect(() => {
        const n = (o) => {
          t7.includes(o.code) && (r.current(!1), t && t(), xr("exit"));
        };
        return (
          window.addEventListener("keyup", n),
          () => window.removeEventListener("keyup", n)
        );
      }, []);
  },
  n7 = Q((e) => ({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    main: {
      width: 700,
      height: 500,
      backgroundColor: e.colors.dark[8],
      borderRadius: e.radius.sm,
    },
    search: {
      width: "40%",
      transition: "300ms",
      "&:focus-within": { width: "50%" },
    },
  })),
  o7 = () => {
    const { classes: e } = n7(),
      t = _e((a) => a.setSounds),
      [r, n] = wu((a) => [a.visible, a.setVisible]),
      o = kf((a) => a.doors),
      i = kf((a) => a.setDoors),
      l = Bi();
    return (
      Sl("playSound", async (a) => {
        const s = new Audio(`./sounds/${a.sound}.ogg`);
        (s.volume = a.volume), await s.play();
      }),
      Sl("setSoundFiles", (a) => t(a)),
      Sl("setVisible", (a) => {
        if ((n(!0), a === void 0)) return l("/");
        for (let s = 0; s < o.length; s++)
          if (o[s].id === a) {
            K.setState(If(o[s]), !0), l("/settings/general");
            break;
          }
      }),
      Sl("updateDoorData", (a) => {
        if (typeof a == "number") return i(o.filter((s) => s.id !== a));
        if (a.hasOwnProperty("id")) {
          let s = o.length;
          for (let u = 0; u < s; u++)
            if (Object.values(o)[u].id == a.id) {
              s = u;
              break;
            }
          return i(Object.values({ ...o, [s]: a }));
        }
        return i(Object.values(a));
      }),
      r7(n),
      S(q, {
        className: e.container,
        children: S(pu, {
          transition: "slide-up",
          mounted: r,
          children: (a) =>
            S(q, {
              className: e.main,
              style: a,
              children: U(Ab, {
                children: [
                  S(Bt, { path: "/", element: S(PT, {}) }),
                  S(Bt, { path: "/settings/*", element: S(e7, {}) }),
                ],
              }),
            }),
        }),
      })
    );
  },
  i7 = {
    colorScheme: "dark",
    fontFamily: "Roboto",
    components: { Tooltip: { defaultProps: { transition: "pop" } } },
  };
if (Xz()) {
  const e = document.getElementById("root");
  (e.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")'),
    (e.style.backgroundSize = "cover"),
    (e.style.backgroundRepeat = "no-repeat"),
    (e.style.backgroundPosition = "center");
}
S$.render(
  S(E.StrictMode, {
    children: S(F1, {
      withNormalizeCSS: !0,
      withGlobalStyles: !0,
      theme: i7,
      children: S(ST, {
        modalProps: { transition: "slide-up" },
        children: S(Yz, { children: S(o7, {}) }),
      }),
    }),
  }),
  document.getElementById("root")
);
