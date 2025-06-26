import React from 'react'
import { Link } from 'react-router-dom'

export const LoginFooter = () => {
    return (
        <div className="login-footer flex items-center justify-between text-gray-600">
            <span>@RealState 2024, All Rights Reserved</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
    )
}
