import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-blue-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="arima mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Image className="h-50" src="/assets/logo.webp" width={250} height={150} alt="Handyman Logo" />
                        <p className="text-sm leading-6 text-gray-200">Your trusted partner for all home repair and improvement needs. Quality craftsmanship, reliable service.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-2">
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <Link href="/services/1" className="text-sm leading-6 text-gray-300 hover:text-white">Service 1</Link>
                                </li>
                                <li>
                                    <Link href="/services/2" className="text-sm leading-6 text-gray-300 hover:text-white">Service 2</Link>
                                </li>
                                <li>
                                    <Link href="/services/3" className="text-sm leading-6 text-gray-300 hover:text-white">Service 3</Link>
                                </li>
                                <li>
                                    <Link href="/services/4" className="text-sm leading-6 text-gray-300 hover:text-white">Service 4</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 mr-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-sm leading-6 text-gray-300 hover:text-white">(123) 456-7890</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 mr-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm leading-6 text-gray-300 hover:text-white">info@yourhandyman.com</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 mr-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm leading-6 text-gray-300 hover:text-white">Madison, WI</span>
                                </li>
                            </ul>
                            <div className="flex space-x-6 mt-6">
                                <Link href="#" className="text-gray-200 hover:text-gray-400">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-200 hover:text-gray-400">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-200 hover:text-gray-400">
                                    <span className="sr-only">Google Review</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 4a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z"/>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-200 hover:text-gray-400">
                                    <span className="sr-only">Yelp</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l3.206-4.712c.723-1.064 2.365-.674 2.635.627.34 1.635.91 4.28-.67 4.282zm-7.083 1.436l-4.995-1.433c-1.58 0-1.01-2.647-.67-4.282.27-1.3 1.912-1.691 2.636-.627l3.205 4.712c.564.83-.216 1.906-1.176 1.63zm-2.043 1.732l-3.97 3.175c-1.264 1.01-2.848-.396-2.033-1.81l2.83-4.91c.52-.898 1.86-.676 2.27.375l1.44 4.159c.278.799-.12 1.63-.537 1.01zm5.095.929l1.44-4.159c.41-1.051 1.75-1.273 2.27-.375l2.83 4.91c.815 1.414-.769 2.82-2.033 1.81l-3.97-3.175c-.417.62-.815-.211-.537-1.01zm-2.903 1.31l-.434 4.445c-.105 1.087-1.68 1.495-2.158.558L8.31 18.016c-.36-.708.028-1.43.813-1.518l4.465-.492c.902-.1 1.153.897.634 1.945z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
                            <Link href="/" className="text-sm leading-6 text-gray-300 hover:text-white">Home</Link>
                            <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">About Us</Link>
                            <Link href="/gallery" className="text-sm leading-6 text-gray-300 hover:text-white">Gallery</Link>
                            <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</Link>
                        </nav>
                    </div>
                    <p className="text-xs leading-5 text-gray-100 text-center md:text-left">&copy; {new Date().getFullYear()} Your Handyman Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;