import React from 'react'

export default function RecipeCard({ recipe }) {
    const { title, slug, coockingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            <div className="featured">
                {recipe.fields.title}
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>takes approx</p>
                </div>
            </div>
        </div>

    )
}