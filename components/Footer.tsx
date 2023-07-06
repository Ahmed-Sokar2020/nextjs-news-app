import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-secondary py-3 d-flex flex-column align-items-center justify-content-center'>
                <p className="m-0 text-center">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by 
                    <a 
                    href="https://www.linkedin.com/in/ahmed-sokar" 
                    target="_blank" 
                    rel="noreferrer"
                    > <strong>Ahmed Sokar</strong>
                    </a>
                </p>
            </div>
        </>
    )
}

export default Footer