export {}

declare global {
  namespace Vike {
    interface PageContext {
      /** &lt;title>${title}&lt;/title> - has precedence over the config */
      title?: string
    }
  }
}
