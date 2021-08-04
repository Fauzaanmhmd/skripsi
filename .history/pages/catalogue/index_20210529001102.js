import Layout from "../../components/Layout"
import About from "../about/index"
import Link from 'next/link'


export default function Catalogue({ recipes }) {
    const Products = [
        {
            imageUrl: "gambar1.png",
            judulProduct: "Tester"
        },
        {
            imageUrl: "gambar2.png"
        },
        {
            imageUrl: "gambar4.png"
        },
        {
            imageUrl: "gambar6.png"
        },
        {
            imageUrl: "gambar8.png"
        },
        {
            imageUrl: "gambar9.png"
        },
        {
            imageUrl: "gambar10.png"
        },
        {
            imageUrl: "gambar11.png"
        },
        {
            imageUrl: "gambar12.png"
        },
    ]

    return (
        <Layout
        >
            <div className="zoom_wrapper">
                <h1 className="zoom">Reswara Product Catalogue</h1>
            </div>


            <div className="image">
                {
                    Products.map((Product, i) => {
                        return (
                            <div>
                                <img className="img" src={`../img/${Product.imageUrl}`} alt="" />
                                <div className="img-bg">
                                    <Link href={`/catalogue/${Product.imageUrl}`}>
                                        <button class="button">Details</button>
                                    </Link>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </Layout>
    )
}