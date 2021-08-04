import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }) {
    const { title, slug, coockingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            <div className="featured">
                {/* <Image
                    sr={'https:' + thumbnail.fields.fill.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                /> */}
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>takes approx {coockingTime} mins to make</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </div>
            </div>
        </div>

    )
}
