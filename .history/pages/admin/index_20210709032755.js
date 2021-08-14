import Layout from "../../components/Layout"
import React, { useEffect, useState } from "react";
import Link from 'next/link'


export default function Admin({ admin }) {
    const validasi = () => {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username != "ojan" && password != "ojan") {
            return true;
        }
        else {
            alert('password salah');
        }
    }

    const [showModal, setShowModal] = useState(false)
    return (
        <Layout>
            <div className="form_login">
                <form action="#" method="POST" onSubmit="validasi()">
                    <div className="img_container">
                        <img src="../img/img_avatar2.png" alt="Avatar" className="img_avatar"></img>
                    </div>

                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input id="username" name="username" type="text" placeholder="Enter Username"></input>

                        <label for="psw"><b>Password</b></label>
                        <input id="passowrd" name="password" type="text" placeholder="Enter Password"></input>
                        <Link href={`admin/dashboard`}>
                            <button onSubmit={validasi} className="input_btn">Login</button>
                        </Link>

                    </div>
                </form>
            </div>
        </Layout>
    )
}