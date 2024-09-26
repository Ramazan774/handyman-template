import { Phone, Mail, Clock } from 'lucide-react';

const Topbar = () => {
    return (
        <div id="topbar" className="bg-blue-800 py-2 sm:py-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 flex justify-between items-center text-sm">
                <div className="flex space-x-2 sm:space-x-6">
                    <div className="flex items-center space-x-2">
                        <Phone size={16} style={{color:"white"}}/>
                        <span><a href="tel:+1234567890" className="text-white hover:underline">Call Us Now: (123) 456-7890</a></span>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <Mail size={16} style={{color: "white"}} />
                        <span><a href="mailto:info@example.com" className="text-white hover:underline">Email Us: info@example.com</a></span>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <Clock size={16} style={{color: "white"}} />
                        <span><a href="/contact" className="text-white hover:underline">Everyday 9AM-7PM</a></span>
                    </div>
                </div>
                <div className="flex items-end">
                    <button>
                        <a href="/contact"
                        className="bg-gray-200 text-black py-2 px-4 sm:px-8 rounded-xl shadow-lg hover:bg-white transition duration-300 text-xs sm:text-sm whitespace-nowrap"
                        style={{minWidth:"120px", minHeight:"40px"}}
                        >
                            Get A Quote
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Topbar;