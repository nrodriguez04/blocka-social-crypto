import React from 'react';

export default function Header() {
    return (
        <div>
            <h3>Buy & Sell Crypto</h3>
            <p>Join the best crypto exchange on the market</p>
            <form>
                <input type="email" required />
                <button>Register</button>
            </form>
        </div>
    );
};
