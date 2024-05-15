import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter'

export default function MyDocument(props: any) {
  return (
    <Html>
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: any) => await documentGetInitialProps(ctx)
