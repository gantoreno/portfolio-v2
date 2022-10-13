import { CSSProperties } from "react"

const gabrielDark: { [key: string]: CSSProperties } = {
  'pre[class*="language-"]': {
    color: "#ffffff",
    fontSize: "13px",
    textShadow: "none",
    fontFamily:
      'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    background: "#1e1e1e",
  },
  'code[class*="language-"]': {
    color: "#ffffff",
    fontSize: "13px",
    textShadow: "none",
    fontFamily:
      'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]::selection': {
    textShadow: "none",
    background: "#7799CC",
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "#7799CC",
  },
  'pre[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#7799CC",
  },
  'code[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#7799CC",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em .3em",
    borderRadius: ".3em",
    color: "#AA6666",
    background: "#1e1e1e",
  },
  ".namespace": {
    opacity: ".7",
  },
  "doctype.doctype-tag": {
    color: "#AA6666",
  },
  "doctype.name": {
    color: "#ffffff",
  },
  comment: {
    color: "#99bb88",
  },
  prolog: {
    color: "#99bb88",
  },
  punctuation: {
    color: "#ffffff",
  },
  ".language-html .language-css .token.punctuation": {
    color: "#ffffff",
  },
  ".language-html .language-javascript .token.punctuation": {
    color: "#ffffff",
  },
  property: {
    color: "#8888BB",
  },
  tag: {
    color: "#7799CC",
  },
  boolean: {
    color: "#8888BB",
  },
  number: {
    color: "#99bb88",
  },
  constant: {
    color: "#ffffff",
  },
  symbol: {
    color: "#99bb88",
  },
  inserted: {
    color: "#99bb88",
  },
  unit: {
    color: "#99bb88",
  },
  selector: {
    color: "#CCAA66",
  },
  "attr-name": {
    color: "#8888BB",
  },
  string: {
    color: "#7799CC",
  },
  char: {
    color: "#8888BB",
  },
  builtin: {
    color: "#8888BB",
  },
  deleted: {
    color: "#8888BB",
  },
  ".language-css .token.string.url": {
    textDecoration: "underline",
  },
  operator: {
    color: "#AA6666",
  },
  entity: {
    color: "#AA6666",
  },
  "operator.arrow": {
    color: "#AA6666",
  },
  atrule: {
    color: "#8888BB",
  },
  "atrule.rule": {
    color: "#AA6666",
  },
  "atrule.url": {
    color: "#ffffff",
  },
  "atrule.url.function": {
    color: "#CCAA66",
  },
  "atrule.url.punctuation": {
    color: "#ffffff",
  },
  keyword: {
    color: "#AA6666",
  },
  "keyword.module": {
    color: "#AA6666",
  },
  "keyword.control-flow": {
    color: "#AA6666",
  },
  function: {
    color: "#CCAA66",
  },
  "function.maybe-class-name": {
    color: "#CCAA66",
  },
  regex: {
    color: "#8888BB",
  },
  important: {
    color: "#AA6666",
  },
  italic: {
    fontStyle: "italic",
  },
  "class-name": {
    color: "#7799CC",
  },
  "maybe-class-name": {
    color: "#7799CC",
  },
  console: {
    color: "#ffffff",
  },
  parameter: {
    color: "#ffffff",
  },
  interpolation: {
    color: "#ffffff",
  },
  "punctuation.interpolation-punctuation": {
    color: "#AA6666",
  },
  variable: {
    color: "#ffffff",
  },
  "imports.maybe-class-name": {
    color: "#ffffff",
  },
  "exports.maybe-class-name": {
    color: "#ffffff",
  },
  escape: {
    color: "#CCAA66",
  },
  "tag.punctuation": {
    color: "#ffffff",
  },
  cdata: {
    color: "#ffffff",
  },
  "attr-value": {
    color: "#8888BB",
  },
  "attr-value.punctuation": {
    color: "#8888BB",
  },
  "attr-value.punctuation.attr-equals": {
    color: "#ffffff",
  },
  namespace: {
    color: "#8888BB",
  },
  'pre[class*="language-javascript"]': {
    color: "#ffffff",
  },
  'code[class*="language-javascript"]': {
    color: "#ffffff",
  },
  'pre[class*="language-jsx"]': {
    color: "#ffffff",
  },
  'code[class*="language-jsx"]': {
    color: "#ffffff",
  },
  'pre[class*="language-typescript"]': {
    color: "#ffffff",
  },
  'code[class*="language-typescript"]': {
    color: "#ffffff",
  },
  'pre[class*="language-tsx"]': {
    color: "#ffffff",
  },
  'code[class*="language-tsx"]': {
    color: "#ffffff",
  },
  'pre[class*="language-css"]': {
    color: "#8888BB",
  },
  'code[class*="language-css"]': {
    color: "#8888BB",
  },
  'pre[class*="language-html"]': {
    color: "#ffffff",
  },
  'code[class*="language-html"]': {
    color: "#ffffff",
  },
  ".language-regex .token.anchor": {
    color: "#CCAA66",
  },
  ".language-html .token.punctuation": {
    color: "#ffffff",
  },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: "1",
  },
  ".line-highlight.line-highlight": {
    background: "#CCAA66",
    boxShadow: "inset 5px 0 0 #CCAA66",
    zIndex: "0",
  },
}

export default gabrielDark
