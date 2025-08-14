import React, { useState } from "react";

function NameForm() {
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");

    const handleUnameChange = (event) => {
        setUname(event.target.value);
    };

    const handlePwdChange = (event) => {
        setPwd(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (uname.trim() == "") {
            alert("Please enter a username");
            return;
        }
        if (pwd.trim() == "") {
            alert("Please enter a password");
            return;
        }

        alert("Username: " + uname + " Password: " + pwd);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "300px", margin: "20px auto", padding: "10px" }}
        >
            <div style={{ marginBottom: "12px" }}>
                <label htmlFor="uname" style={{ display: "block", marginBottom: "4px" }}>
                    User Name:
                </label>
                <input
                    id="uname"
                    type="text"
                    value={uname}
                    onChange={handleUnameChange}
                    style={{ width: "100%", padding: "6px" }}
                />
            </div>

            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "8px",
                    background: "blue",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                submit
            </button>
        </form>
    );
}

export default NameForm;
