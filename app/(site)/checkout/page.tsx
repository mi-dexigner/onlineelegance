'use client'
import Image from 'next/image'
import { useState } from 'react'


export default function CheckoutForm() {
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        phone: '',
        alternatePhone: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <>
            banner
            <section className="checkout-container">
                <div className="container">
                    {/* Progress Indicator */}
                    <div className="progress-bar">
                        <div className="progress-steps">
                            <div className="step active">
                                <div className="step-indicator">
                                    <span className="checkmark">✓</span>
                                </div>
                                <span className="step-text">Shipping</span>
                            </div>
                            <div className="step">
                                <div className="step-indicator">2</div>
                                <span className="step-text">Review & Payments</span>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-content">
                        <form className="shipping-form" onSubmit={handleSubmit}>
                            <h2>Customer Account</h2>
                            <h3>Shipping Address</h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        First Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        Last Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>
                                        Street Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.streetAddress}
                                        onChange={(e) => setFormData({...formData, streetAddress: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        Country <span className="required">*</span>
                                    </label>
                                    <select
                                        value={formData.country}
                                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                                        required
                                    >
                                        <option value="India">India</option>
                                        {/* Add more countries as needed */}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>
                                        State/Province <span className="required">*</span>
                                    </label>
                                    <select
                                        value={formData.state}
                                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                                        required
                                    >
                                        <option value="">Please select a region, state or province.</option>
                                        {/* Add states/provinces as needed */}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        City <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.city}
                                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        Zip/Postal Code <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.zipCode}
                                        onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        Phone Number <span className="required">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Alternate Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.alternatePhone}
                                        onChange={(e) => setFormData({...formData, alternatePhone: e.target.value})}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="next-button">
                                Next
                            </button>
                        </form>

                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <div className="cart-items">
                                <div className="cart-header">
                                    <span>1 Item in Cart</span>
                                    <button
                                        className="toggle-button"
                                        onClick={() => setIsCartOpen(!isCartOpen)}
                                        aria-label="Toggle cart items"
                                    >
                                        {isCartOpen ? '▼' : '▲'}
                                    </button>
                                </div>
                                <div className={`cart-item ${isCartOpen ? 'open' : 'closed'}`}>
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Lehenga Choli"
                                        width={80}
                                        height={80}
                                        className="product-image"
                                    />
                                    <div className="item-details">
                                        <h4>Marvelous Sky Blue Embroidered Net Designer Lehenga Choli</h4>
                                        <div className="item-meta">
                                            <span>Qty: 1</span>
                                            <span className="price">$53.00</span>
                                        </div>
                                        <button
                                            className="view-details"
                                            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                                            aria-expanded={isDetailsOpen}
                                        >
                                            View Details {isDetailsOpen ? '▼' : '▲'}
                                        </button>
                                        <div className={`product-details ${isDetailsOpen ? 'open' : 'closed'}`}>
                                            <div className="detail-row">
                                                <span className="detail-label">Size:</span>
                                                <span className="detail-value">Semi Stitched</span>
                                            </div>
                                            {/* Add more details as needed */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
