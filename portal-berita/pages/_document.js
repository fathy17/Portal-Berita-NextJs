import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" type="image/png" href="/public/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Hind:400,700&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}