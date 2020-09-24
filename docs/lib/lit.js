/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t =
    'undefined' != typeof window &&
    null != window.customElements &&
    void 0 !== window.customElements.polyfillWrapFlushCallback,
  e = (t, e, s = null) => {
    for (; e !== s; ) {
      const s = e.nextSibling;
      t.removeChild(e), (e = s);
    }
  },
  s = `{{lit-${String(Math.random()).slice(2)}}}`,
  i = `\x3c!--${s}--\x3e`,
  o = new RegExp(`${s}|${i}`);
class n {
  constructor(t, e) {
    (this.parts = []), (this.element = e);
    const i = [],
      n = [],
      a = document.createTreeWalker(e.content, 133, null, !1);
    let c = 0,
      h = -1,
      p = 0;
    const {
      strings: u,
      values: { length: m },
    } = t;
    for (; p < m; ) {
      const t = a.nextNode();
      if (null !== t) {
        if ((h++, 1 === t.nodeType)) {
          if (t.hasAttributes()) {
            const e = t.attributes,
              { length: s } = e;
            let i = 0;
            for (let t = 0; t < s; t++) r(e[t].name, '$lit$') && i++;
            for (; i-- > 0; ) {
              const e = u[p],
                s = d.exec(e)[2],
                i = s.toLowerCase() + '$lit$',
                n = t.getAttribute(i);
              t.removeAttribute(i);
              const r = n.split(o);
              this.parts.push({ type: 'attribute', index: h, name: s, strings: r }),
                (p += r.length - 1);
            }
          }
          'TEMPLATE' === t.tagName && (n.push(t), (a.currentNode = t.content));
        } else if (3 === t.nodeType) {
          const e = t.data;
          if (e.indexOf(s) >= 0) {
            const s = t.parentNode,
              n = e.split(o),
              a = n.length - 1;
            for (let e = 0; e < a; e++) {
              let i,
                o = n[e];
              if ('' === o) i = l();
              else {
                const t = d.exec(o);
                null !== t &&
                  r(t[2], '$lit$') &&
                  (o =
                    o.slice(0, t.index) + t[1] + t[2].slice(0, -'$lit$'.length) + t[3]),
                  (i = document.createTextNode(o));
              }
              s.insertBefore(i, t), this.parts.push({ type: 'node', index: ++h });
            }
            '' === n[a] ? (s.insertBefore(l(), t), i.push(t)) : (t.data = n[a]), (p += a);
          }
        } else if (8 === t.nodeType)
          if (t.data === s) {
            const e = t.parentNode;
            (null !== t.previousSibling && h !== c) || (h++, e.insertBefore(l(), t)),
              (c = h),
              this.parts.push({ type: 'node', index: h }),
              null === t.nextSibling ? (t.data = '') : (i.push(t), h--),
              p++;
          } else {
            let e = -1;
            for (; -1 !== (e = t.data.indexOf(s, e + 1)); )
              this.parts.push({ type: 'node', index: -1 }), p++;
          }
      } else a.currentNode = n.pop();
    }
    for (const t of i) t.parentNode.removeChild(t);
  }
}
const r = (t, e) => {
    const s = t.length - e.length;
    return s >= 0 && t.slice(s) === e;
  },
  a = (t) => -1 !== t.index,
  l = () => document.createComment(''),
  d = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
function c(t, e) {
  const {
      element: { content: s },
      parts: i,
    } = t,
    o = document.createTreeWalker(s, 133, null, !1);
  let n = p(i),
    r = i[n],
    a = -1,
    l = 0;
  const d = [];
  let c = null;
  for (; o.nextNode(); ) {
    a++;
    const t = o.currentNode;
    for (
      t.previousSibling === c && (c = null),
        e.has(t) && (d.push(t), null === c && (c = t)),
        null !== c && l++;
      void 0 !== r && r.index === a;

    )
      (r.index = null !== c ? -1 : r.index - l), (n = p(i, n)), (r = i[n]);
  }
  d.forEach((t) => t.parentNode.removeChild(t));
}
const h = (t) => {
    let e = 11 === t.nodeType ? 0 : 1;
    const s = document.createTreeWalker(t, 133, null, !1);
    for (; s.nextNode(); ) e++;
    return e;
  },
  p = (t, e = -1) => {
    for (let s = e + 1; s < t.length; s++) {
      const e = t[s];
      if (a(e)) return s;
    }
    return -1;
  };
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u = new WeakMap(),
  m = (t) => 'function' == typeof t && u.has(t),
  f = {},
  y = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _ {
  constructor(t, e, s) {
    (this.__parts = []), (this.template = t), (this.processor = e), (this.options = s);
  }
  update(t) {
    let e = 0;
    for (const s of this.__parts) void 0 !== s && s.setValue(t[e]), e++;
    for (const t of this.__parts) void 0 !== t && t.commit();
  }
  _clone() {
    const e = t
        ? this.template.element.content.cloneNode(!0)
        : document.importNode(this.template.element.content, !0),
      s = [],
      i = this.template.parts,
      o = document.createTreeWalker(e, 133, null, !1);
    let n,
      r = 0,
      l = 0,
      d = o.nextNode();
    for (; r < i.length; )
      if (((n = i[r]), a(n))) {
        for (; l < n.index; )
          l++,
            'TEMPLATE' === d.nodeName && (s.push(d), (o.currentNode = d.content)),
            null === (d = o.nextNode()) &&
              ((o.currentNode = s.pop()), (d = o.nextNode()));
        if ('node' === n.type) {
          const t = this.processor.handleTextExpression(this.options);
          t.insertAfterNode(d.previousSibling), this.__parts.push(t);
        } else
          this.__parts.push(
            ...this.processor.handleAttributeExpressions(
              d,
              n.name,
              n.strings,
              this.options,
            ),
          );
        r++;
      } else this.__parts.push(void 0), r++;
    return t && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const g =
    window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (t) => t }),
  v = ` ${s} `;
class S {
  constructor(t, e, s, i) {
    (this.strings = t), (this.values = e), (this.type = s), (this.processor = i);
  }
  getHTML() {
    const t = this.strings.length - 1;
    let e = '',
      o = !1;
    for (let n = 0; n < t; n++) {
      const t = this.strings[n],
        r = t.lastIndexOf('\x3c!--');
      o = (r > -1 || o) && -1 === t.indexOf('--\x3e', r + 1);
      const a = d.exec(t);
      e +=
        null === a
          ? t + (o ? v : i)
          : t.substr(0, a.index) + a[1] + a[2] + '$lit$' + a[3] + s;
    }
    return (e += this.strings[t]), e;
  }
  getTemplateElement() {
    const t = document.createElement('template');
    let e = this.getHTML();
    return void 0 !== g && (e = g.createHTML(e)), (t.innerHTML = e), t;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const w = (t) => null === t || !('object' == typeof t || 'function' == typeof t),
  b = (t) => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
class x {
  constructor(t, e, s) {
    (this.dirty = !0),
      (this.element = t),
      (this.name = e),
      (this.strings = s),
      (this.parts = []);
    for (let t = 0; t < s.length - 1; t++) this.parts[t] = this._createPart();
  }
  _createPart() {
    return new P(this);
  }
  _getValue() {
    const t = this.strings,
      e = t.length - 1,
      s = this.parts;
    if (1 === e && '' === t[0] && '' === t[1]) {
      const t = s[0].value;
      if ('symbol' == typeof t) return String(t);
      if ('string' == typeof t || !b(t)) return t;
    }
    let i = '';
    for (let o = 0; o < e; o++) {
      i += t[o];
      const e = s[o];
      if (void 0 !== e) {
        const t = e.value;
        if (w(t) || !b(t)) i += 'string' == typeof t ? t : String(t);
        else for (const e of t) i += 'string' == typeof e ? e : String(e);
      }
    }
    return (i += t[e]), i;
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1), this.element.setAttribute(this.name, this._getValue()));
  }
}
class P {
  constructor(t) {
    (this.value = void 0), (this.committer = t);
  }
  setValue(t) {
    t === f ||
      (w(t) && t === this.value) ||
      ((this.value = t), m(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; m(this.value); ) {
      const t = this.value;
      (this.value = f), t(this);
    }
    this.value !== f && this.committer.commit();
  }
}
class T {
  constructor(t) {
    (this.value = void 0), (this.__pendingValue = void 0), (this.options = t);
  }
  appendInto(t) {
    (this.startNode = t.appendChild(l())), (this.endNode = t.appendChild(l()));
  }
  insertAfterNode(t) {
    (this.startNode = t), (this.endNode = t.nextSibling);
  }
  appendIntoPart(t) {
    t.__insert((this.startNode = l())), t.__insert((this.endNode = l()));
  }
  insertAfterPart(t) {
    t.__insert((this.startNode = l())),
      (this.endNode = t.endNode),
      (t.endNode = this.startNode);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    if (null === this.startNode.parentNode) return;
    for (; m(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = f), t(this);
    }
    const t = this.__pendingValue;
    t !== f &&
      (w(t)
        ? t !== this.value && this.__commitText(t)
        : t instanceof S
        ? this.__commitTemplateResult(t)
        : t instanceof Node
        ? this.__commitNode(t)
        : b(t)
        ? this.__commitIterable(t)
        : t === y
        ? ((this.value = y), this.clear())
        : this.__commitText(t));
  }
  __insert(t) {
    this.endNode.parentNode.insertBefore(t, this.endNode);
  }
  __commitNode(t) {
    this.value !== t && (this.clear(), this.__insert(t), (this.value = t));
  }
  __commitText(t) {
    const e = this.startNode.nextSibling,
      s = 'string' == typeof (t = null == t ? '' : t) ? t : String(t);
    e === this.endNode.previousSibling && 3 === e.nodeType
      ? (e.data = s)
      : this.__commitNode(document.createTextNode(s)),
      (this.value = t);
  }
  __commitTemplateResult(t) {
    const e = this.options.templateFactory(t);
    if (this.value instanceof _ && this.value.template === e) this.value.update(t.values);
    else {
      const s = new _(e, t.processor, this.options),
        i = s._clone();
      s.update(t.values), this.__commitNode(i), (this.value = s);
    }
  }
  __commitIterable(t) {
    Array.isArray(this.value) || ((this.value = []), this.clear());
    const e = this.value;
    let s,
      i = 0;
    for (const o of t)
      (s = e[i]),
        void 0 === s &&
          ((s = new T(this.options)),
          e.push(s),
          0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
        s.setValue(o),
        s.commit(),
        i++;
    i < e.length && ((e.length = i), this.clear(s && s.endNode));
  }
  clear(t = this.startNode) {
    e(this.startNode.parentNode, t.nextSibling, this.endNode);
  }
}
class N {
  constructor(t, e, s) {
    if (
      ((this.value = void 0),
      (this.__pendingValue = void 0),
      2 !== s.length || '' !== s[0] || '' !== s[1])
    )
      throw new Error('Boolean attributes can only contain a single expression');
    (this.element = t), (this.name = e), (this.strings = s);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; m(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = f), t(this);
    }
    if (this.__pendingValue === f) return;
    const t = !!this.__pendingValue;
    this.value !== t &&
      (t
        ? this.element.setAttribute(this.name, '')
        : this.element.removeAttribute(this.name),
      (this.value = t)),
      (this.__pendingValue = f);
  }
}
class C extends x {
  constructor(t, e, s) {
    super(t, e, s), (this.single = 2 === s.length && '' === s[0] && '' === s[1]);
  }
  _createPart() {
    return new A(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && ((this.dirty = !1), (this.element[this.name] = this._getValue()));
  }
}
class A extends P {}
let E = !1;
(() => {
  try {
    const t = {
      get capture() {
        return (E = !0), !1;
      },
    };
    window.addEventListener('test', t, t), window.removeEventListener('test', t, t);
  } catch (t) {}
})();
class O {
  constructor(t, e, s) {
    (this.value = void 0),
      (this.__pendingValue = void 0),
      (this.element = t),
      (this.eventName = e),
      (this.eventContext = s),
      (this.__boundHandleEvent = (t) => this.handleEvent(t));
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; m(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = f), t(this);
    }
    if (this.__pendingValue === f) return;
    const t = this.__pendingValue,
      e = this.value,
      s =
        null == t ||
        (null != e &&
          (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)),
      i = null != t && (null == e || s);
    s &&
      this.element.removeEventListener(
        this.eventName,
        this.__boundHandleEvent,
        this.__options,
      ),
      i &&
        ((this.__options = V(t)),
        this.element.addEventListener(
          this.eventName,
          this.__boundHandleEvent,
          this.__options,
        )),
      (this.value = t),
      (this.__pendingValue = f);
  }
  handleEvent(t) {
    'function' == typeof this.value
      ? this.value.call(this.eventContext || this.element, t)
      : this.value.handleEvent(t);
  }
}
const V = (t) =>
  t && (E ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ function k(t) {
  let e = U.get(t.type);
  void 0 === e &&
    ((e = { stringsArray: new WeakMap(), keyString: new Map() }), U.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (void 0 !== i) return i;
  const o = t.strings.join(s);
  return (
    (i = e.keyString.get(o)),
    void 0 === i && ((i = new n(t, t.getTemplateElement())), e.keyString.set(o, i)),
    e.stringsArray.set(t.strings, i),
    i
  );
}
const U = new Map(),
  R = new WeakMap();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const $ = new /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(class {
  handleAttributeExpressions(t, e, s, i) {
    const o = e[0];
    if ('.' === o) {
      return new C(t, e.slice(1), s).parts;
    }
    if ('@' === o) return [new O(t, e.slice(1), i.eventContext)];
    if ('?' === o) return [new N(t, e.slice(1), s)];
    return new x(t, e, s).parts;
  }
  handleTextExpression(t) {
    return new T(t);
  }
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ 'undefined' != typeof window &&
  (window.litHtmlVersions || (window.litHtmlVersions = [])).push('1.3.0');
const j = (t, ...e) => new S(t, e, 'html', $),
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */ M = (t, e) => `${t}--${e}`;
let q = !0;
void 0 === window.ShadyCSS
  ? (q = !1)
  : void 0 === window.ShadyCSS.prepareTemplateDom &&
    (console.warn(
      'Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.',
    ),
    (q = !1));
const I = (t) => (e) => {
    const i = M(e.type, t);
    let o = U.get(i);
    void 0 === o &&
      ((o = { stringsArray: new WeakMap(), keyString: new Map() }), U.set(i, o));
    let r = o.stringsArray.get(e.strings);
    if (void 0 !== r) return r;
    const a = e.strings.join(s);
    if (((r = o.keyString.get(a)), void 0 === r)) {
      const s = e.getTemplateElement();
      q && window.ShadyCSS.prepareTemplateDom(s, t),
        (r = new n(e, s)),
        o.keyString.set(a, r);
    }
    return o.stringsArray.set(e.strings, r), r;
  },
  F = ['html', 'svg'],
  z = new Set(),
  L = (t, e, s) => {
    z.add(t);
    const i = s ? s.element : document.createElement('template'),
      o = e.querySelectorAll('style'),
      { length: n } = o;
    if (0 === n) return void window.ShadyCSS.prepareTemplateStyles(i, t);
    const r = document.createElement('style');
    for (let t = 0; t < n; t++) {
      const e = o[t];
      e.parentNode.removeChild(e), (r.textContent += e.textContent);
    }
    ((t) => {
      F.forEach((e) => {
        const s = U.get(M(e, t));
        void 0 !== s &&
          s.keyString.forEach((t) => {
            const {
                element: { content: e },
              } = t,
              s = new Set();
            Array.from(e.querySelectorAll('style')).forEach((t) => {
              s.add(t);
            }),
              c(t, s);
          });
      });
    })(t);
    const a = i.content;
    s
      ? (function (t, e, s = null) {
          const {
            element: { content: i },
            parts: o,
          } = t;
          if (null == s) return void i.appendChild(e);
          const n = document.createTreeWalker(i, 133, null, !1);
          let r = p(o),
            a = 0,
            l = -1;
          for (; n.nextNode(); )
            for (
              l++, n.currentNode === s && ((a = h(e)), s.parentNode.insertBefore(e, s));
              -1 !== r && o[r].index === l;

            ) {
              if (a > 0) {
                for (; -1 !== r; ) (o[r].index += a), (r = p(o, r));
                return;
              }
              r = p(o, r);
            }
        })(s, r, a.firstChild)
      : a.insertBefore(r, a.firstChild),
      window.ShadyCSS.prepareTemplateStyles(i, t);
    const l = a.querySelector('style');
    if (window.ShadyCSS.nativeShadow && null !== l)
      e.insertBefore(l.cloneNode(!0), e.firstChild);
    else if (s) {
      a.insertBefore(r, a.firstChild);
      const t = new Set();
      t.add(r), c(s, t);
    }
  };
window.JSCompiler_renameProperty = (t, e) => t;
const H = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          return t ? '' : null;
        case Object:
        case Array:
          return null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      switch (e) {
        case Boolean:
          return null !== t;
        case Number:
          return null === t ? null : Number(t);
        case Object:
        case Array:
          return JSON.parse(t);
      }
      return t;
    },
  },
  B = (t, e) => e !== t && (e == e || t == t),
  D = { attribute: !0, type: String, converter: H, reflect: !1, hasChanged: B };
class W extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this._classProperties.forEach((e, s) => {
        const i = this._attributeNameForProperty(s, e);
        void 0 !== i && (this._attributeToPropertyMap.set(i, s), t.push(i));
      }),
      t
    );
  }
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
      this._classProperties = new Map();
      const t = Object.getPrototypeOf(this)._classProperties;
      void 0 !== t && t.forEach((t, e) => this._classProperties.set(e, t));
    }
  }
  static createProperty(t, e = D) {
    if (
      (this._ensureClassProperties(),
      this._classProperties.set(t, e),
      e.noAccessor || this.prototype.hasOwnProperty(t))
    )
      return;
    const s = 'symbol' == typeof t ? Symbol() : '__' + t,
      i = this.getPropertyDescriptor(t, s, e);
    void 0 !== i && Object.defineProperty(this.prototype, t, i);
  }
  static getPropertyDescriptor(t, e, s) {
    return {
      get() {
        return this[e];
      },
      set(i) {
        const o = this[t];
        (this[e] = i), this.requestUpdateInternal(t, o, s);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return (this._classProperties && this._classProperties.get(t)) || D;
  }
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (
      (t.hasOwnProperty('finalized') || t.finalize(),
      (this.finalized = !0),
      this._ensureClassProperties(),
      (this._attributeToPropertyMap = new Map()),
      this.hasOwnProperty(JSCompiler_renameProperty('properties', this)))
    ) {
      const t = this.properties,
        e = [
          ...Object.getOwnPropertyNames(t),
          ...('function' == typeof Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(t)
            : []),
        ];
      for (const s of e) this.createProperty(s, t[s]);
    }
  }
  static _attributeNameForProperty(t, e) {
    const s = e.attribute;
    return !1 === s
      ? void 0
      : 'string' == typeof s
      ? s
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  static _valueHasChanged(t, e, s = B) {
    return s(t, e);
  }
  static _propertyValueFromAttribute(t, e) {
    const s = e.type,
      i = e.converter || H,
      o = 'function' == typeof i ? i : i.fromAttribute;
    return o ? o(t, s) : t;
  }
  static _propertyValueToAttribute(t, e) {
    if (void 0 === e.reflect) return;
    const s = e.type,
      i = e.converter;
    return ((i && i.toAttribute) || H.toAttribute)(t, s);
  }
  initialize() {
    (this._updateState = 0),
      (this._updatePromise = new Promise((t) => (this._enableUpdatingResolver = t))),
      (this._changedProperties = new Map()),
      this._saveInstanceProperties(),
      this.requestUpdateInternal();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((t, e) => {
      if (this.hasOwnProperty(e)) {
        const t = this[e];
        delete this[e],
          this._instanceProperties || (this._instanceProperties = new Map()),
          this._instanceProperties.set(e, t);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((t, e) => (this[e] = t)),
      (this._instanceProperties = void 0);
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    void 0 !== this._enableUpdatingResolver &&
      (this._enableUpdatingResolver(), (this._enableUpdatingResolver = void 0));
  }
  disconnectedCallback() {}
  attributeChangedCallback(t, e, s) {
    e !== s && this._attributeToProperty(t, s);
  }
  _propertyToAttribute(t, e, s = D) {
    const i = this.constructor,
      o = i._attributeNameForProperty(t, s);
    if (void 0 !== o) {
      const t = i._propertyValueToAttribute(e, s);
      if (void 0 === t) return;
      (this._updateState = 8 | this._updateState),
        null == t ? this.removeAttribute(o) : this.setAttribute(o, t),
        (this._updateState = -9 & this._updateState);
    }
  }
  _attributeToProperty(t, e) {
    if (8 & this._updateState) return;
    const s = this.constructor,
      i = s._attributeToPropertyMap.get(t);
    if (void 0 !== i) {
      const t = s.getPropertyOptions(i);
      (this._updateState = 16 | this._updateState),
        (this[i] = s._propertyValueFromAttribute(e, t)),
        (this._updateState = -17 & this._updateState);
    }
  }
  requestUpdateInternal(t, e, s) {
    let i = !0;
    if (void 0 !== t) {
      const o = this.constructor;
      (s = s || o.getPropertyOptions(t)),
        o._valueHasChanged(this[t], e, s.hasChanged)
          ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
            !0 !== s.reflect ||
              16 & this._updateState ||
              (void 0 === this._reflectingProperties &&
                (this._reflectingProperties = new Map()),
              this._reflectingProperties.set(t, s)))
          : (i = !1);
    }
    !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate());
  }
  requestUpdate(t, e) {
    return this.requestUpdateInternal(t, e), this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;
    try {
      await this._updatePromise;
    } catch (t) {}
    const t = this.performUpdate();
    return null != t && (await t), !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }
  get hasUpdated() {
    return 1 & this._updateState;
  }
  performUpdate() {
    if (!this._hasRequestedUpdate) return;
    this._instanceProperties && this._applyInstanceProperties();
    let t = !1;
    const e = this._changedProperties;
    try {
      (t = this.shouldUpdate(e)), t ? this.update(e) : this._markUpdated();
    } catch (e) {
      throw ((t = !1), this._markUpdated(), e);
    }
    t &&
      (1 & this._updateState ||
        ((this._updateState = 1 | this._updateState), this.firstUpdated(e)),
      this.updated(e));
  }
  _markUpdated() {
    (this._changedProperties = new Map()), (this._updateState = -5 & this._updateState);
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._reflectingProperties &&
      this._reflectingProperties.size > 0 &&
      (this._reflectingProperties.forEach((t, e) =>
        this._propertyToAttribute(e, this[e], t),
      ),
      (this._reflectingProperties = void 0)),
      this._markUpdated();
  }
  updated(t) {}
  firstUpdated(t) {}
}
W.finalized = !0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J = (t) => (e) =>
    'function' == typeof e
      ? ((t, e) => (window.customElements.define(t, e), e))(t, e)
      : ((t, e) => {
          const { kind: s, elements: i } = e;
          return {
            kind: s,
            elements: i,
            finisher(e) {
              window.customElements.define(t, e);
            },
          };
        })(t, e),
  G = (t, e) =>
    'method' === e.kind && e.descriptor && !('value' in e.descriptor)
      ? Object.assign(Object.assign({}, e), {
          finisher(s) {
            s.createProperty(e.key, t);
          },
        })
      : {
          kind: 'field',
          key: Symbol(),
          placement: 'own',
          descriptor: {},
          initializer() {
            'function' == typeof e.initializer &&
              (this[e.key] = e.initializer.call(this));
          },
          finisher(s) {
            s.createProperty(e.key, t);
          },
        };
function K(t) {
  return (e, s) =>
    void 0 !== s
      ? ((t, e, s) => {
          e.constructor.createProperty(s, t);
        })(t, e, s)
      : G(t, e);
}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ const Q =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  X = Symbol();
class Y {
  constructor(t, e) {
    if (e !== X)
      throw new Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.',
      );
    this.cssText = t;
  }
  get styleSheet() {
    return (
      void 0 === this._styleSheet &&
        (Q
          ? ((this._styleSheet = new CSSStyleSheet()),
            this._styleSheet.replaceSync(this.cssText))
          : (this._styleSheet = null)),
      this._styleSheet
    );
  }
  toString() {
    return this.cssText;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions || (window.litElementVersions = [])).push('2.4.0');
const Z = {};
class tt extends W {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) return;
    const t = this.getStyles();
    if (Array.isArray(t)) {
      const e = (t, s) =>
          t.reduceRight((t, s) => (Array.isArray(s) ? e(s, t) : (t.add(s), t)), s),
        s = e(t, new Set()),
        i = [];
      s.forEach((t) => i.unshift(t)), (this._styles = i);
    } else this._styles = void 0 === t ? [] : [t];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !Q) {
        const e = Array.prototype.slice
          .call(t.cssRules)
          .reduce((t, e) => t + e.cssText, '');
        return new Y(String(e), X);
      }
      return t;
    });
  }
  initialize() {
    super.initialize(),
      this.constructor._getUniqueStyles(),
      (this.renderRoot = this.createRenderRoot()),
      window.ShadowRoot &&
        this.renderRoot instanceof window.ShadowRoot &&
        this.adoptStyles();
  }
  createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }
  adoptStyles() {
    const t = this.constructor._styles;
    0 !== t.length &&
      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
        ? Q
          ? (this.renderRoot.adoptedStyleSheets = t.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet,
            ))
          : (this._needsShimAdoptedStyleSheets = !0)
        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
            t.map((t) => t.cssText),
            this.localName,
          ));
  }
  connectedCallback() {
    super.connectedCallback(),
      this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
  }
  update(t) {
    const e = this.render();
    super.update(t),
      e !== Z &&
        this.constructor.render(e, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this,
        }),
      this._needsShimAdoptedStyleSheets &&
        ((this._needsShimAdoptedStyleSheets = !1),
        this.constructor._styles.forEach((t) => {
          const e = document.createElement('style');
          (e.textContent = t.cssText), this.renderRoot.appendChild(e);
        }));
  }
  render() {
    return Z;
  }
}
(tt.finalized = !0),
  (tt.render = (t, s, i) => {
    if (!i || 'object' != typeof i || !i.scopeName)
      throw new Error('The `scopeName` option is required.');
    const o = i.scopeName,
      n = R.has(s),
      r = q && 11 === s.nodeType && !!s.host,
      a = r && !z.has(o),
      l = a ? document.createDocumentFragment() : s;
    if (
      (((t, s, i) => {
        let o = R.get(s);
        void 0 === o &&
          (e(s, s.firstChild),
          R.set(s, (o = new T(Object.assign({ templateFactory: k }, i)))),
          o.appendInto(s)),
          o.setValue(t),
          o.commit();
      })(t, l, Object.assign({ templateFactory: I(o) }, i)),
      a)
    ) {
      const t = R.get(l);
      R.delete(l);
      const i = t.value instanceof _ ? t.value.template : void 0;
      L(o, l, i), e(s, s.firstChild), s.appendChild(l), R.set(s, t);
    }
    !n && r && window.ShadyCSS.styleElement(s.host);
  });
class et {
  getTodos() {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  }
  updateTodo(t, e) {
    const s = this.getTodos();
    return (s[e] = t), this.saveTodos(s);
  }
  deleteTodo(t) {
    const e = this.getTodos().filter((e) => e.value !== t.value);
    return this.saveTodos(e);
  }
  createTodo(t) {
    const e = [...this.getTodos(), { completed: !1, value: t }];
    return this.saveTodos(e);
  }
  saveTodos(t) {
    return localStorage.setItem('todos', JSON.stringify(t)), t;
  }
}
var st = function (t, e, s, i) {
  var o,
    n = arguments.length,
    r = n < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, s)) : i;
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    r = Reflect.decorate(t, e, s, i);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, s, r) : o(e, s)) || r);
  return n > 3 && r && Object.defineProperty(e, s, r), r;
};
let it = class extends tt {
  constructor() {
    super(), (this.editing = !1), (this.todo = { completed: !1, value: '' });
  }
  render() {
    return j`<style>.completed{text-decoration:line-through}span{padding:0 12px;cursor:pointer;background:#7fff00}form{display:inline-block}.hidden{display:none}</style><button @click="${() =>
      this.completeTodo()}" aria-label="mark done">&#10004;</button> ${
      this.editing
        ? j`<form @submit="${(t) => this.editTodo(t)}"><input .value="${
            this.todo.value
          }" aria-label="create todo" placeholder="todo"></form>`
        : j`<span class="${this.todo.completed ? 'completed' : ''}" @click="${() =>
            this.toggleForm()}">${this.todo.value}</span>`
    } <button @click="${() => this.deleteTodo()}" aria-label="delete todo">x</button>`;
  }
  completeTodo() {
    (this.todo = Object.assign(Object.assign({}, this.todo), {
      completed: !this.todo.completed,
    })),
      this.emitUpdate();
  }
  deleteTodo() {
    this.dispatchEvent(new CustomEvent('delete', { detail: this.todo })),
      this.classList.add('hidden');
  }
  editTodo(t) {
    t.preventDefault();
    const e = t.target.querySelector('input').value;
    e.length > 0 && ((this.todo.value = e), this.toggleForm(), this.emitUpdate());
  }
  toggleForm() {
    this.editing = !this.editing;
  }
  emitUpdate() {
    this.dispatchEvent(new CustomEvent('update', { detail: this.todo }));
  }
};
st([K()], it.prototype, 'todo', void 0),
  st([K()], it.prototype, 'editing', void 0),
  (it = st([J('x-todo-item')], it));
var ot = function (t, e, s, i) {
  var o,
    n = arguments.length,
    r = n < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, s)) : i;
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    r = Reflect.decorate(t, e, s, i);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, s, r) : o(e, s)) || r);
  return n > 3 && r && Object.defineProperty(e, s, r), r;
};
let nt = class extends tt {
  constructor() {
    super(),
      (this.todos = []),
      (this.todoService = new et()),
      (this.todos = this.todoService.getTodos());
  }
  render() {
    return j`<style>ul{margin:0;padding:0}li{list-style:none;margin:0 0 16px 0}input{margin-bottom:12px}</style><form @submit="${(
      t,
    ) =>
      this.createTodo(
        t,
      )}"><input placeholder="add todo item" aria-label="add todo item"> <button>Add</button></form><ul>${this.todos.map(
      (t, e) =>
        j`<li><x-todo-item .todo="${t}" @update="${(t) =>
          this.todoService.updateTodo(t.detail, e)}" @delete="${(t) =>
          this.todoService.deleteTodo(t.detail)}"></x-todo-item></li>`,
    )}</ul>`;
  }
  updateTodo(t, e) {
    this.todos = this.todoService.updateTodo(t, e);
  }
  deleteTodo(t) {
    this.todos = this.todoService.deleteTodo(t);
  }
  createTodo(t) {
    t.preventDefault();
    const e = t.target.querySelector('input'),
      s = e.value;
    s.length > 0 && ((this.todos = this.todoService.createTodo(s)), (e.value = ''));
  }
};
ot([K()], nt.prototype, 'todos', void 0), (nt = ot([J('x-todos')], nt));
var rt = function (t, e, s, i) {
  var o,
    n = arguments.length,
    r = n < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, s)) : i;
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    r = Reflect.decorate(t, e, s, i);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, s, r) : o(e, s)) || r);
  return n > 3 && r && Object.defineProperty(e, s, r), r;
};
let at = class extends tt {
  constructor() {
    super();
  }
  render() {
    return j`<header><h1>Todos</h1></header><main><x-todos></x-todos></main><footer>2020</footer>`;
  }
};
at = rt([J('x-app')], at);
