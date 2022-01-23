import { NextScript as DeferredNextScript} from 'next/document'
import React from 'react'

function dedupe(bundles) {
    const files = new Set();
    const kept = []

    for (const bundle of bundles) {
        if (files.has(bundle.file)) {continue}
        files.add(bundle.file)
        kept.push(bundle)
    }
    return kept
}

export default class NextScript extends DeferredNextScript {
    getScripts(files) {
        return super.getScripts(files).map((script) => {
            return React.cloneElement((script), {
                // eslint-disable-next-line @typescript-eslint/tslint/config
                key: script.props.src,
                defer: true,
                async: false,
            })
        })
    }
    getDynamicChunks(files) {
        const {
            dynamicImports,
            assetPrefix,
            devOnlyCacheBusterQueryString,
        } = this.context
        return dedupe(dynamicImports).map((bundle) => {
            let modernProps = {}
            if (!bundle.endsWith('.js') || files.allFiles.includes(bundle))
            {return null}

            return (
                <script
                    defer={true}
                    key={bundle}
                    src={`${assetPrefix}/_next/${encodeURI(
                        bundle
                    )}${devOnlyCacheBusterQueryString}`}
                    nonce={this.props.nonce}
              
                    {...modernProps}
                />
            )
        })
    }
}