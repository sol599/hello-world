import * as glide from "../glide";

export default glide
  .columnNamed("Base64 Encode", "Encode")
  .withDescription("A common binary encoding for text.")
  .withStringResult()
  .withRequiredStringParam("text")
  .withExample({ text: `Hello, world!` })
  .run(({ text }) => btoa(text));