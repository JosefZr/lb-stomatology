import React from 'react'

export default function CustomNavItem({name, onClick}) {
    return (
        <div
            onClick={onClick}
            className="text-[46px] max-[540px]:text-[32px] font-semibold hover:text-word-purple"
            passHref
        >
            {name}
        </div>
    )
}
