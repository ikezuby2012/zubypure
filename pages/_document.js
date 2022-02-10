import Document, { Head, Html, Main, NextScript } from 'next/document';

class myDocument extends Document {
    constructor() {
        super();

    }

    render() {
        return <Html lang="en">
            <Head>
                {/* <title>an official website for mr zuby</title> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }

}

export default myDocument;