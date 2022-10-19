import Document, { DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface DocumentInterface {
  styles: any;
  html: any;
  head?: any;
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any): Promise<DocumentInterface> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage: any = ctx.renderPage;

    try {
      ctx.renderPage = (): any =>
        originalRenderPage({
          enhanceApp:
            (App: any): ((props: any) => any) =>
            (props: any): any =>
              sheet.collectStyles(<App {...props} />),
        });

      const initialProps: DocumentInitialProps = await Document.getInitialProps(
        ctx
      );
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
