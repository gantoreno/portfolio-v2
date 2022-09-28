import { CSSProperties } from "react"

const gabrielLight: { [key: string]: CSSProperties } = {
  'pre[class*="language-"]': {
    color: "#000000",
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
    color: "#000000",
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
    background: "#264F78",
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "#264F78",
  },
  'pre[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#264F78",
  },
  'code[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#264F78",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em .3em",
    borderRadius: ".3em",
    color: "#db4c69",
    background: "#1e1e1e",
  },
  ".namespace": {
    opacity: ".7",
  },
  "doctype.doctype-tag": {
    color: "#ac616a",
  },
  "doctype.name": {
    color: "#000000",
  },
  comment: {
    color: "#6a9955",
  },
  prolog: {
    color: "#6a9955",
  },
  punctuation: {
    color: "#000000",
  },
  ".language-html .language-css .token.punctuation": {
    color: "#000000",
  },
  ".language-html .language-javascript .token.punctuation": {
    color: "#000000",
  },
  property: {
    color: "#999DD4",
  },
  tag: {
    color: "#7ba2c3",
  },
  boolean: {
    color: "#999DD4",
  },
  number: {
    color: "#b5cea8",
  },
  constant: {
    color: "#000000",
  },
  symbol: {
    color: "#b5cea8",
  },
  inserted: {
    color: "#b5cea8",
  },
  unit: {
    color: "#b5cea8",
  },
  selector: {
    color: "#d7ba7d",
  },
  "attr-name": {
    color: "#999dd4",
  },
  string: {
    color: "#7ba2c3",
  },
  char: {
    color: "#999dd4",
  },
  builtin: {
    color: "#999dd4",
  },
  deleted: {
    color: "#999dd4",
  },
  ".language-css .token.string.url": {
    textDecoration: "underline",
  },
  operator: {
    color: "#ac616a",
  },
  entity: {
    color: "#ac616a",
  },
  "operator.arrow": {
    color: "#ac616a",
  },
  atrule: {
    color: "#999dd4",
  },
  "atrule.rule": {
    color: "#ac616a",
  },
  "atrule.url": {
    color: "#000000",
  },
  "atrule.url.function": {
    color: "#dcdcaa",
  },
  "atrule.url.punctuation": {
    color: "#000000",
  },
  keyword: {
    color: "#ac616a",
  },
  "keyword.module": {
    color: "#ac616a",
  },
  "keyword.control-flow": {
    color: "#ac616a",
  },
  function: {
    color: "#dcdcaa",
  },
  "function.maybe-class-name": {
    color: "#dcdcaa",
  },
  regex: {
    color: "#d16969",
  },
  important: {
    color: "#ac616a",
  },
  italic: {
    fontStyle: "italic",
  },
  "class-name": {
    color: "#7ba2c3",
  },
  "maybe-class-name": {
    color: "#7ba2c3",
  },
  console: {
    color: "#000000",
  },
  parameter: {
    color: "#000000",
  },
  interpolation: {
    color: "#000000",
  },
  "punctuation.interpolation-punctuation": {
    color: "#ac616a",
  },
  variable: {
    color: "#000000",
  },
  "imports.maybe-class-name": {
    color: "#000000",
  },
  "exports.maybe-class-name": {
    color: "#000000",
  },
  escape: {
    color: "#d7ba7d",
  },
  "tag.punctuation": {
    color: "#000000",
  },
  cdata: {
    color: "#000000",
  },
  "attr-value": {
    color: "#999dd4",
  },
  "attr-value.punctuation": {
    color: "#999dd4",
  },
  "attr-value.punctuation.attr-equals": {
    color: "#000000",
  },
  namespace: {
    color: "#999dd4",
  },
  'pre[class*="language-javascript"]': {
    color: "#000000",
  },
  'code[class*="language-javascript"]': {
    color: "#000000",
  },
  'pre[class*="language-jsx"]': {
    color: "#000000",
  },
  'code[class*="language-jsx"]': {
    color: "#000000",
  },
  'pre[class*="language-typescript"]': {
    color: "#000000",
  },
  'code[class*="language-typescript"]': {
    color: "#000000",
  },
  'pre[class*="language-tsx"]': {
    color: "#000000",
  },
  'code[class*="language-tsx"]': {
    color: "#000000",
  },
  'pre[class*="language-css"]': {
    color: "#999dd4",
  },
  'code[class*="language-css"]': {
    color: "#999dd4",
  },
  'pre[class*="language-html"]': {
    color: "#000000",
  },
  'code[class*="language-html"]': {
    color: "#000000",
  },
  ".language-regex .token.anchor": {
    color: "#dcdcaa",
  },
  ".language-html .token.punctuation": {
    color: "#000000",
  },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: "1",
  },
  ".line-highlight.line-highlight": {
    background: "#f7ebc6",
    boxShadow: "inset 5px 0 0 #f7d87c",
    zIndex: "0",
  },
}

export default gabrielLight
