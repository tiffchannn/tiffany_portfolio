import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link href="https://fonts.googleapis.com/css2?family=Century+Gothic&display=swap" rel="stylesheet" /> */}
          <link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Century+Gothic|Lato:thin100" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument