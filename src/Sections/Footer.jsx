import { footerLinks, socialMedia } from '../Constants'
import { copyRightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
// import { copyrightSign } from "../assets/icons"
// import { socialMedia, footerLinks } from "../Constants"
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start w-full justify-start">
          <a href="#" className='flex flex-row gap-3 text-white justify-start items-center'>
            <img src={footerLogo} width={80} height={46}/>
            <h3 className='text-2xl'>Complex Trading</h3>
          </a>
          <p className="text-white text-base w-full md:w-[50%]  mt-6 leading-7 text-left">Compex Trading is the partner of choice for many of the world’s leading enterprises, Crypto challengers. We help businesses elevate their value through custom investment, QA and consultancy services.</p>
          <div className="flex items-center gap-5 mt-8 w-full mb-5">
            {socialMedia.map((icon) => {
              return(
                <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full gap-6">
                  <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                </div>
              )
            })}
          </div>
          <div className="flex lg:gap-10 justify-between flex-wrap text-white mt-6 w-full">
              {footerLinks.map((item) => {
                return(
                  <div key={item} className='flex justify-start items-start flex-col text-left'>
                    <h4 className="font-bold">{item.title}</h4>
                    <ul>
                      {item.links.map((link) => { 
                        return(
                          <li key={link} className="py-1 hover:text-red-400 focus:text-red-500 cursor-pointer"><a href={link.link}>{link.name}</a></li>
                        )
                      }
                      )}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between items-center text-slate-300 py-9 max-sm:flex-col max-sm:justify-center w-full">
              <div className="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
                <img src={copyRightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" /><p>Copyright. All rights reserved</p>
              </div>
              <div className="cursor-pointer font-montserrat">Terms & Conditions</div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer