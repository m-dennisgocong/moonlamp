"use client"

const Contact = () => {
  return (
    <div id="contact" className="py-10">
        <div className="w-[89%] max-w-[1400px] m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                    <div className="md:flex md:flex-row md:justify-between lg:justify-start lg:flex-col lg:text-left">
                        <div className="mb-6">
                            <h1 className="text-base font-medium mb-2">Email Address</h1>
                            <a className="text-gray-500 text-sm" href="mailto:support.yourdomain@email.com">
                                support@moonlamps.com
                            </a>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-base font-medium mb-2">Telephone</h1>
                            <a className="text-gray-500 text-sm" href="tel:+(028)">
                                (028) 456-287
                            </a>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-base font-medium mb-2">Address</h1>
                            <h2 className="text-gray-500 text-sm"> 028 John Doe parkway drive Raeigh, NC 2038</h2>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <form>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="name" id="name" placeholder="Your name" className="border border-gray-300 text-gray-900 focus:outline-none text-sm block w-full py-3 px-2"/>
                                <input type="email" name="email" id="email" placeholder="Your email" className="border border-gray-300 text-gray-900 focus:outline-none text-sm block w-full py-3 px-2"/>
                            </div>    
                            <input type="text" name="subject" id="subject" placeholder="Subject" className="border border-gray-300 text-gray-900 focus:outline-none text-sm block w-full py-3 px-2"/>
                            <textarea
                                className="border border-gray-300 text-gray-900 text-sm block w-full p-3"
                                placeholder="Your Message"
                                name="message"
                                id="message"
                                rows={3}
                                style={{ resize: "none" }}
                            >
                            </textarea>

                            <div className="text-right">
                                <input 
                                    type="submit" 
                                    id="submit"
                                    name="send"
                                    className="py-2 px-4 rounded-md uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact