import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>SorteioGram</title>
                </Head>
                <body>
                    <div className="container-fluid">
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </Html>

        )
    }
}
