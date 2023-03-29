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
    background: "#447799",
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "#447799",
  },
  'pre[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#447799",
  },
  'code[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#447799",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em .3em",
    borderRadius: ".3em",
    color: "#884444",
    background: "#1e1e1e",
  },
  ".namespace": {
    opacity: ".7",
  },
  "doctype.doctype-tag": {
    color: "#884444",
  },
  "doctype.name": {
    color: "#000000",
  },
  comment: {
    color: "#779966",
  },
  prolog: {
    color: "#779966",
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
    color: "#666699",
  },
  tag: {
    color: "#447799",
  },
  boolean: {
    color: "#666699",
  },
  number: {
    color: "#779966",
  },
  constant: {
    color: "#000000",
  },
  symbol: {
    color: "#779966",
  },
  inserted: {
    color: "#779966",
  },
  unit: {
    color: "#779966",
  },
  selector: {
    color: "#AA8844",
  },
  "attr-name": {
    color: "#666699",
  },
  string: {
    color: "#447799",
  },
  char: {
    color: "#666699",
  },
  builtin: {
    color: "#666699",
  },
  deleted: {
    color: "#666699",
  },
  ".language-css .token.string.url": {
    textDecoration: "underline",
  },
  operator: {
    color: "#884444",
  },
  entity: {
    color: "#884444",
  },
  "operator.arrow": {
    color: "#884444",
  },
  atrule: {
    color: "#666699",
  },
  "atrule.rule": {
    color: "#884444",
  },
  "atrule.url": {
    color: "#000000",
  },
  "atrule.url.function": {
    color: "#447799",
  },
  "atrule.url.punctuation": {
    color: "#000000",
  },
  keyword: {
    color: "#884444",
  },
  "keyword.module": {
    color: "#884444",
  },
  "keyword.control-flow": {
    color: "#884444",
  },
  function: {
    color: "#447799",
  },
  "function.maybe-class-name": {
    color: "#447799",
  },
  regex: {
    color: "#666699",
  },
  important: {
    color: "#884444",
  },
  italic: {
    fontStyle: "italic",
  },
  "class-name": {
    color: "#447799",
  },
  "maybe-class-name": {
    color: "#447799",
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
    color: "#447799",
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
    color: "#AA8844",
  },
  "tag.punctuation": {
    color: "#000000",
  },
  cdata: {
    color: "#000000",
  },
  "attr-value": {
    color: "#666699",
  },
  "attr-value.punctuation": {
    color: "#666699",
  },
  "attr-value.punctuation.attr-equals": {
    color: "#000000",
  },
  namespace: {
    color: "#666699",
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
    color: "#666699",
  },
  'code[class*="language-css"]': {
    color: "#666699",
  },
  'pre[class*="language-html"]': {
    color: "#000000",
  },
  'code[class*="language-html"]': {
    color: "#000000",
  },
  ".language-regex .token.anchor": {
    color: "#AA8844",
  },
  ".language-html .token.punctuation": {
    color: "#000000",
  },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: "1",
  },
  ".line-highlight.line-highlight": {
    background: "#AA8844",
    boxShadow: "inset 5px 0 0 #AA8844",
    zIndex: "0",
  },
}

export default gabrielLight
